import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, businessName } = body;

    const displayName = `${firstName || ""} ${lastName || ""}`.trim();

    const { error } = await resend.emails.send({
      from: "Clearview Operations <notifications@clearviewops.tech>",
      to: "mickey@clearviewops.tech",
      subject: `New Clearview testimonial from ${displayName || "a customer"}`,
      html: `
        <h2>New testimonial received</h2>

        <p><strong>Customer:</strong> ${displayName || "Not provided"}</p>

        <p><strong>Business:</strong> ${businessName || "Not provided"}</p>

        <p>A new testimonial has been submitted and is waiting for review.</p>

        <p>
          <a href="https://clearviewops.tech/admin">
            Review testimonial
          </a>
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notification error:", error);

    return NextResponse.json(
      { error: "Failed to send notification." },
      { status: 500 }
    );
  }
}