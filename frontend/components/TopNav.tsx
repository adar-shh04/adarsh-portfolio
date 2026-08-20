"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MusicPlayer from "@/components/MusicPlayer";

const items = [
  { id: "home", label: "About", index: "01" },
  { id: "projects", label: "Projects", index: "02" },
  { id: "tech-stack", label: "Stack", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
];

export default function TopNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = items.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-25% 0px -65%" });
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return <header className={`sticky top-0 z-40 -mx-5 px-5 transition md:-mx-12 md:px-12 ${scrolled ? "border-b border-white/10 bg-[#050914]/80 backdrop-blur-xl" : "bg-transparent"}`}>
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between" aria-label="Main navigation">
      <button onClick={() => go("home")} className="font-mono text-sm tracking-[.18em] text-white" aria-label="Go to home">ADARSH<span className="text-emerald-primary">/</span></button>
      <div className="hidden items-center gap-1 md:flex">{items.map((item) => <button key={item.id} onClick={() => go(item.id)} className={`nav-link ${active === item.id ? "nav-link-active" : ""}`}><span className="font-mono text-[10px] text-emerald-primary/70">{item.index}</span>{item.label}</button>)}</div>
      <div className="hidden md:block"><MusicPlayer /></div>
      <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>
    {open && <div className="border-t border-white/10 pb-4 pt-3 md:hidden">{items.map((item) => <button key={item.id} onClick={() => go(item.id)} className="flex w-full items-center gap-3 px-2 py-3 text-left text-sm text-white/70"><span className="font-mono text-xs text-emerald-primary">{item.index}</span>{item.label}</button>)}</div>}
  </header>;
}
