"use client";

import { useCallback, useState } from "react";
import Reveal from "@/components/Reveal";
import DeveloperPanel from "@/components/DeveloperPanel";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import IntroOverlay from "@/components/IntroOverlay";
import TopNav from "@/components/TopNav";

export default function Home() {
  const [intro, setIntro] = useState(true);

  const done = useCallback(() => setIntro(false), []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#050914] via-[#0B101F] to-[#101620] overflow-x-hidden text-white">
      <IntroOverlay isOpen={intro} onDone={done} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <TopNav />

        <section
          id="home"
          className="min-h-[calc(100vh-4rem)] pt-10 md:pt-16 pb-12 grid md:grid-cols-2 items-center gap-10 md:gap-16 scroll-mt-20"
        >
          <div className="space-y-6 md:space-y-10">
            <Reveal delay={0}>
              <p className="text-emerald-300 text-xs sm:text-sm tracking-[0.28em] uppercase">
                Full-Stack Developer
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Adarsh Singh
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
                Building scalable web systems with clean architecture, strong UI hierarchy, and production-grade engineering.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href="https://drive.google.com/file/d/1aRsIjOfzaTCEYkzPm_zdyj9C2hxwgxPK/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition text-black font-semibold"
                >
                  Resume
                </a>
                <button
                  type="button"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition"
                >
                  View Projects
                </button>
              </div>
            </Reveal>
          </div>

          <div className="flex justify-center items-center">
            <DeveloperPanel />
          </div>
        </section>

        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
