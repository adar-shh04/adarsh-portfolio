const Message = require("../models/Message");
const { Resend } = require("resend");

// Initialize Resend with the API key from .env
const resend = new Resend(process.env.RESEND_API_KEY);

const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // 1. Save to MongoDB
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    // 2. Send Email via Resend
    // Resend's free tier only allows sending to verified domains or the onboarding email
    const myEmail = process.env.MY_EMAIL || "onboarding@resend.dev";
    
    try {
      if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_YOUR_API_KEY_HERE") {
        await resend.emails.send({
          from: "onboarding@resend.dev", // Verified sender (free tier limit)
          to: myEmail, // Where you want to receive it
          subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
          html: `
            <h2>New Message from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
        console.log("Email notification sent successfully.");
      } else {
        console.log("Skipping Resend email: API key not configured yet.");
      }
    } catch (emailError) {
      console.error("Error sending email via Resend:", emailError);
      // We don't fail the request if email fails, since the DB save was successful
    }

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return res.status(500).json({ error: "Internal server error. Please try again later." });
  }
};

module.exports = {
  submitContactForm,
};
