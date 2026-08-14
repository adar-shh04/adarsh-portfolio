
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    console.log("Using EmailJS");
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (err: any) {
      console.error("EmailJS Error:", err);

      setStatus("error");
      setErrorMessage(
        err?.text || "Unable to send message. Please try again."
      );

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Contact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-white/65 max-w-xl mx-auto leading-relaxed"
          >
            If you'd like to collaborate, discuss opportunities, or just say
            hello, I'd love to hear from you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="grid md:grid-cols-5 gap-10"
        >
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-emerald-300 text-sm">
                mlgadarsh@gmail.com
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-white mb-2">
                Socials
              </h3>

              <div className="flex gap-4 mt-3">
                <a
                  href="https://www.linkedin.com/in/adarsh-singh-mlg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-emerald-400 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/adar-shh04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-emerald-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none text-white placeholder:text-white/40 transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none text-white placeholder:text-white/40 transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (Optional)"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none text-white placeholder:text-white/40 transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none text-white placeholder:text-white/40 transition resize-none"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Sending..."
                : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-emerald-400 font-medium">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-red-400 font-medium">
                ❌ {errorMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

