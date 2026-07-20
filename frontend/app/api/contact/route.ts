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
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const toEmail = process.env.MY_EMAIL?.trim();
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is missing." },
        { status: 500 }
      );
    }

    if (!toEmail) {
      return NextResponse.json(
        { error: "MY_EMAIL is missing." },
        { status: 500 }
      );
    }

    console.log("Sending email...");
    console.log("To:", toEmail);
    console.log("From:", fromEmail);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "No Subject")}</p>

        <hr />

        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: JSON.stringify(error, null, 2),
        },
        { status: 500 }
      );
    }

    console.log("Email sent:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("========== SERVER ERROR ==========");
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}