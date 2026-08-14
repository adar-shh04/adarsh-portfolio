"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "tech-stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];


export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={[
        "sticky top-0 z-40 -mx-6 md:-mx-12 px-6 md:px-12",
        scrolled ? "backdrop-blur-xl bg-black/25 border-b border-white/10" : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="text-white font-semibold tracking-tight hover:text-white/90 transition"
        >
          Adarsh
          <span className="text-emerald-400">.</span>
        </button>

        <div className="flex items-center gap-2">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className="px-3 py-2 text-sm rounded-lg text-white/75 hover:text-white hover:bg-white/5 transition"
            >
              {it.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
