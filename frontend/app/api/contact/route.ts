import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY is missing." },
        { status: 500 }
      );
    }

    // Hardcoded for testing
    const toEmail = "adarsh.123459@gmail.com";
    const fromEmail = "onboarding@resend.dev";

    console.log("========== CONTACT FORM ==========");
    console.log("To:", toEmail);
    console.log("From:", fromEmail);
    console.log("Reply-To:", email);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio Contact: ${subject || "No Subject"}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>📩 New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(
        subject || "No Subject"
      )}</p>

          <hr>

          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("========== RESEND ERROR ==========");
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message ?? JSON.stringify(error, null, 2),
        },
        { status: 500 }
      );
    }

    console.log("========== EMAIL SENT ==========");
    console.log(data);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      id: data?.id,
    });
  } catch (err) {
    console.error("========== SERVER ERROR ==========");
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}