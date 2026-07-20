const Message = require("../models/Message");
const nodemailer = require("nodemailer");

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

    // 2. Send Email via Nodemailer
    const myEmail = process.env.MY_EMAIL || "mlgadarsh@gmail.com";
    
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: myEmail,
          replyTo: email, // This allows you to hit "Reply" and reply directly to the sender!
          subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
          html: `
            <h2>New Message from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email notification sent successfully via Nodemailer.");
      } catch (emailError) {
        console.error("Error sending email via Nodemailer:", emailError);
      }
    } else {
      console.log("Skipping email notification: EMAIL_USER and EMAIL_PASS not configured in .env");
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
