"use client";

import { useCallback, useState } from "react";
import { ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";
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
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <IntroOverlay isOpen={intro} onDone={done} />
      <div className="pointer-events-none fixed inset-0 tech-grid opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-12">
        <TopNav />

        <section id="home" className="grid min-h-[calc(100vh-4rem)] scroll-mt-24 items-center gap-14 py-20 md:grid-cols-[1.05fr_.95fr] md:py-28">
          <div className="space-y-8">
            <Reveal><p className="eyebrow"><span className="text-emerald-primary">01</span> / independent builder</p></Reveal>
            <Reveal delay={0.08}><h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.8rem] lg:leading-[.9]">Systems that feel <span className="text-emerald-soft">inevitable.</span></h1></Reveal>
            <Reveal delay={0.16}><p className="max-w-xl text-pretty text-lg leading-8 text-white/65">I&apos;m Adarsh Singh — a full-stack developer designing dependable products, intelligent workflows, and interfaces with a sharp point of view.</p></Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#projects" className="button-primary">Explore selected work <ArrowUpRight size={16} /></a>
                <a href="https://drive.google.com/file/d/1pCqySAtce4G5yaFH6n-D0IcSYWzwASij/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button-quiet">Resume <ArrowUpRight size={15} /></a>
              </div>
            </Reveal>
            <Reveal delay={0.32}><div className="flex flex-wrap gap-5 pt-4 text-sm text-white/45"><span className="inline-flex items-center gap-2"><MapPin size={15} className="text-emerald-primary" /> Indore, India</span><span className="inline-flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-primary" /> Available for select work</span></div></Reveal>
          </div>
          <Reveal delay={0.18}><div className="panel relative overflow-hidden p-6 md:p-10"><div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[.25em] text-emerald-soft/60">build / 2026</div><DeveloperPanel /></div></Reveal>
        </section>

        <ProjectsSection />
        <TechStackSection />

        <section id="about" className="section-shell scroll-mt-24">
          <div className="section-heading"><p className="eyebrow"><span className="text-emerald-primary">04</span> / about</p><h2>Engineering with context.</h2></div>
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end"><p className="text-3xl font-medium leading-tight tracking-[-.04em] text-white">Good software is not just shipped. It is understood, shaped, and made resilient.</p><div className="space-y-5 text-base leading-8 text-white/60"><p>I work across product thinking, frontend systems, backend architecture, and applied machine learning. My favorite problems sit where a messy workflow meets an opportunity for clarity.</p><p>From model-backed dashboards to operational automation, I focus on translating complexity into tools people can trust.</p></div></div>
        </section>

        <ContactSection />

        <footer className="flex flex-col gap-5 border-t border-white/10 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between"><span>© 2026 Adarsh Singh. Built with intent.</span><div className="flex items-center gap-5"><a href="https://github.com/adar-shh04" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-soft"><Code2 size={17} /></a><a href="https://www.linkedin.com/in/adarsh-singh-mlg/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-soft"><Code2 size={17} /></a><a href="mailto:mlgadarsh@gmail.com" aria-label="Email" className="hover:text-emerald-soft"><Mail size={17} /></a><a href="#home" className="inline-flex items-center gap-2 hover:text-white">Back to top <ArrowUpRight size={15} /></a></div></footer>
      </div>
    </main>
  );
}
