import { NextResponse } from "next/server";

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
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 },
      );
    }

    const apiKey = process.env.re_C4oXvVrN_Ds8oy11VRYnSLMgmvBByF9Ds;
    const toEmail = process.env.mlgadarsh@gmail.com || process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { error: "Contact form email is not configured yet." },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New Contact Form Submission: ${subject || "No Subject"}`,
        html: `
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || "No Subject")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      return NextResponse.json(
        { error: error?.message || "Unable to send message right now." },
        { status: response.status },
      );
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
