"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5 scroll-mt-20">
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
            If you want to collaborate, discuss internships, or talk about building products — reach out.
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
              <p className="text-emerald-300 text-sm">mlgadarsh@gmail.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-white mb-2">Socials</h3>
              <div className="flex gap-4 mt-3">
                <a
                  href="https://www.linkedin.com/in/adarsh-singh-mlg/"
                  target="_blank"
                  className="text-white/60 hover:text-emerald-400 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/adar-shh04"
                  target="_blank"
                  className="text-white/60 hover:text-emerald-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none text-white placeholder:text-white/40 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none text-white placeholder:text-white/40 transition"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (Optional)"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none text-white placeholder:text-white/40 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none text-white placeholder:text-white/40 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-emerald-400 text-sm text-center mt-2 font-medium">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-2 font-medium">{errorMessage}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
