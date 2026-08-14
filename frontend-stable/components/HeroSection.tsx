"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DeveloperPanel from "@/components/DeveloperPanel";
import Reveal from "@/components/Reveal";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center gap-16 relative z-10">
      {/* LEFT SIDE */}
      <div className="space-y-10">
        <Reveal delay={0}>
          <p className="text-emerald-soft text-sm tracking-[0.3em] uppercase text-white/80">
            Full-Stack Developer
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Adarsh Singh
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-white/80 text-lg max-w-lg leading-relaxed">
            Building scalable, high-performance web applications with modern technologies and clean architecture.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="relative w-40 h-1">
            <div className="absolute inset-0 bg-emerald-primary rounded-full" />
            <div className="absolute inset-0 bg-emerald-primary rounded-full blur-2xl opacity-80" />
          </div>
        </Reveal>

        {/* Resume Button */}
        <Reveal delay={0.4}>
          <a
            href="https://drive.google.com/file/d/1aRsIjOfzaTCEYkzPm_zdyj9C2hxwgxPK/view?usp=drive_link"
            target="_blank"
            className="px-6 py-3 bg-emerald-primary text-white rounded-lg font-medium hover:bg-emerald-400 transition-colors"
          >
            Download Resume
          </a>
        </Reveal>
      </div>

      {/* RIGHT SIDE - DeveloperPanel with parallax */}
      <div className="relative hidden md:flex justify-center items-center">
        <motion.div
          style={{
            y: scrollY * 0.1, // panel moves slower than scroll
            rotate: scrollY * 0.002, // slight rotation for depth
          }}
          className="w-full"
        >
          <DeveloperPanel />
        </motion.div>
      </div>
    </section>
  );
}
