
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { createSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const BUCKET = "career-resumes";

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: NextRequest) {
  // Only accept requests from the same website.
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return jsonError("Invalid request origin.", 403);
  }

  try {
    if (new URL(origin).host !== host) {
      return jsonError("Invalid request origin.", 403);
    }
  } catch {
    return jsonError("Invalid request origin.", 403);
  }

  // Identify the visitor using Vercel's forwarded IP.
  const isProduction = process.env.NODE_ENV === "production";
  const vercelIp = request.headers.get("x-vercel-forwarded-for");

  if (isProduction && !process.env.VERCEL) {
    return jsonError("Server configuration error.", 500);
  }

  if (isProduction && !vercelIp) {
    return jsonError("Unable to verify request origin.", 403);
  }

  const clientIp = isProduction
    ? vercelIp!.split(",")[0].trim()
    : "local-development";

  if (!clientIp || clientIp.length > 100) {
    return jsonError("Invalid client address.", 403);
  }

  const supabase = createSupabaseAdmin();

  // Limit upload authorizations to three per hour per IP.
  const { data: allowed, error: rateLimitError } =
    await supabase.rpc("check_career_rate_limit", {
      p_identifier: `careers-upload:${clientIp}`,
    });

  if (rateLimitError) {
    console.error("Careers upload rate limit error:", rateLimitError);
    return jsonError("Unable to process your request right now.", 503);
  }

  if (!allowed) {
    return jsonError("Too many requests. Please try again later.", 429);
  }

  // This endpoint only receives JSON, never the PDF itself.
  const contentLength = Number(
    request.headers.get("content-length")
  );

  if (
    Number.isFinite(contentLength) &&
    contentLength > 10_000
  ) {
    return jsonError("Request is too large.", 413);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  if (!body || typeof body !== "object") {
    return jsonError("Invalid request.", 400);
  }

  const fields = body as Record<string, unknown>;
  const fileName = fields.fileName;
  const fileSize = fields.fileSize;
  const turnstileToken = fields.turnstileToken;

  if (
    typeof fileName !== "string" ||
    !fileName.toLowerCase().endsWith(".pdf") ||
    typeof fileSize !== "number" ||
    !Number.isInteger(fileSize) ||
    fileSize < 1 ||
    fileSize > MAX_FILE_SIZE
  ) {
    return jsonError("Please select a PDF résumé under 5 MB.", 400);
  }

  if (
    typeof turnstileToken !== "string" ||
    !turnstileToken ||
    turnstileToken.length > 2048
  ) {
    return jsonError("Please complete security verification.", 400);
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  if (!turnstileSecret) {
    console.error("Missing TURNSTILE_SECRET_KEY");
    return jsonError("Security verification is unavailable.", 503);
  }

  try {
    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!verificationResponse.ok) {
      return jsonError("Security verification is unavailable.", 503);
    }

    const verification = await verificationResponse.json();

    const allowedHostnames = new Set([
      "clearviewops.tech",
      "www.clearviewops.tech",
      "localhost",
    ]);

    if (
      verification.success !== true ||
      typeof verification.hostname !== "string" ||
      !allowedHostnames.has(verification.hostname)
    ) {
      return jsonError("Security verification failed.", 403);
    }
  } catch (error) {
    console.error("Careers upload verification error:", error);
    return jsonError("Security verification is unavailable.", 503);
  }

  // A unique path prevents applicants from overwriting other résumés.
  const applicationId = randomUUID();
  const resumePath = `${applicationId}/resume.pdf`;


  // Register this upload authorization on the server.
  const { error: sessionError } = await supabase
    .from("career_upload_sessions")
    .insert({
      id: applicationId,
      resume_path: resumePath,
    });

  if (sessionError) {
    console.error(
      "Unable to create career upload session:",
      sessionError.message
    );

    return jsonError(
      "Unable to prepare résumé upload. Please try again.",
      500
    );
  }



  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUploadUrl(resumePath, {
      upsert: false,
    });


  if (error || !data) {
    // Remove the authorization record if token creation fails.
    const { error: cleanupError } = await supabase
      .from("career_upload_sessions")
      .delete()
      .eq("id", applicationId);

    if (cleanupError) {
      console.error(
        "Unable to clean up career upload session:",
        cleanupError.message
      );
    }

    console.error("Careers signed upload error:", error);

    return jsonError(
      "Unable to prepare résumé upload.",
      500
    );
  }


  return NextResponse.json({
    applicationId,
    resumePath,
    uploadToken: data.token,
  });
}
