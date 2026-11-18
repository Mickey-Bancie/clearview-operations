
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_AREAS = [
  "Operations Consulting",
  "Customer Experience",
  "Project Management",
  "Business Development",
  "Other",
];

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: NextRequest) {
  // Only accept same-origin submissions.
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

  // Use Vercel's forwarded client IP in production.
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

  // Keep final submissions separately rate-limited.
  const { data: allowed, error: rateLimitError } =
    await supabase.rpc("check_career_rate_limit", {
      p_identifier: `careers-finalize:${clientIp}`,
    });

  if (rateLimitError) {
    console.error("Career finalization rate limit error:", rateLimitError);
    return jsonError("Unable to process your request right now.", 503);
  }

  if (!allowed) {
    return jsonError("Too many submissions. Please try again later.", 429);
  }

  // This endpoint accepts small JSON requests, not file uploads.
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
    return jsonError("Invalid submission.", 400);
  }

  if (!body || typeof body !== "object") {
    return jsonError("Invalid submission.", 400);
  }

  const fields = body as Record<string, unknown>;

  const {
    applicationId,
    fullName,
    email,
    area,
    introduction,
    consent,
  } = fields;

  if (
    typeof applicationId !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(applicationId) ||
    typeof fullName !== "string" ||
    typeof email !== "string" ||
    typeof area !== "string" ||
    typeof introduction !== "string" ||
    consent !== "yes"
  ) {
    return jsonError("Missing or invalid application fields.", 400);
  }

  const name = fullName.trim();
  const normalizedEmail = email.trim().toLowerCase();
  const intro = introduction.trim();

  if (name.length < 2 || name.length > 120) {
    return jsonError("Please enter a valid full name.", 400);
  }

  if (
    normalizedEmail.length < 3 ||
    normalizedEmail.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
  ) {
    return jsonError("Please enter a valid email address.", 400);
  }

  if (!ALLOWED_AREAS.includes(area)) {
    return jsonError("Please select a valid area of interest.", 400);
  }

  if (intro.length < 1 || intro.length > 1000) {
    return jsonError(
      "Your introduction must be between 1 and 1,000 characters.",
      400
    );
  }

  const resumePath = `${applicationId}/resume.pdf`;

  // Verify that the server authorized this exact upload.
  const { data: session, error: sessionError } = await supabase
    .from("career_upload_sessions")
    .select("id, resume_path, expires_at, completed_at")
    .eq("id", applicationId)
    .eq("resume_path", resumePath)
    .maybeSingle();

  if (sessionError) {
    console.error("Career upload session lookup failed:", sessionError);
    return jsonError("Unable to verify résumé upload.", 503);
  }

  if (
    !session ||
    session.completed_at ||
    new Date(session.expires_at).getTime() <= Date.now()
  ) {
    return jsonError(
      "Your upload session has expired or is no longer valid.",
      403
    );
  }

  // Read the file privately to validate the actual uploaded bytes.
  const { data: file, error: downloadError } =
    await supabase.storage
      .from("career-resumes")
      .download(resumePath);

  if (downloadError || !file) {
    return jsonError(
      "Résumé upload not found. Please upload your PDF again.",
      400
    );
  }

  if (file.size === 0 || file.size > MAX_FILE_SIZE) {
    return jsonError("Résumé exceeds the allowed size.", 400);
  }

  const bytes = Buffer.from(await file.arrayBuffer());

  if (bytes.subarray(0, 5).toString("ascii") !== "%PDF-") {
    return jsonError("The uploaded file is not a valid PDF.", 400);
  }

  // Atomically claim the session and save the application.
  const { data: finalized, error: finalizeError } =
    await supabase.rpc("finalize_career_application", {
      p_session_id: applicationId,
      p_full_name: name,
      p_email: normalizedEmail,
      p_area_of_interest: area,
      p_introduction: intro,
    });

  if (finalizeError) {
    console.error("Career application finalization failed:", finalizeError);
    return jsonError(
      "Unable to save your application. Please try again.",
      500
    );
  }

  if (!finalized) {
    return jsonError(
      "This upload session has expired or was already completed.",
      409
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Your information has been submitted successfully.",
    },
    { status: 201 }
  );
}
