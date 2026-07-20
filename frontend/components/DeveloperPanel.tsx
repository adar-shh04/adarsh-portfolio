"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
  className?: string;
  name?: string;
  role?: string;
  stack?: string[];
  focus?: string;
  avatarSrc?: string;
};

export default function DeveloperPanel({
  className = "",
  name = "Adarsh Singh",
  role = "Full Stack Developer",
  stack = ["Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  focus = "Scalable Web Systems",
  avatarSrc = "/profile/profile.jpg",
}: Props) {
  const code = useMemo(() => {
    return [
      `function Developer() {`,
      `  name: "${name}",`,
      `  role: "${role}",`,
      `  stack: [${stack.map((s) => `"${s}"`).join(", ")}],`,
      `  focus: "${focus}"`,
      `}`,
    ].join("\n");
  }, [name, role, stack, focus]);

  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(code.slice(0, i));
      if (i >= code.length) window.clearInterval(id);
    }, 12);
    return () => window.clearInterval(id);
  }, [code]);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-emerald-400/50 shadow-[0_0_30px_rgba(16,185,129,0.25)]">
          <Image
            src={avatarSrc}
            alt={`${name} profile`}
            fill
            sizes="56px"
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center">
          <div className="text-white text-lg font-semibold leading-tight">{name}</div>
          <div className="text-white/70 text-sm">{role}</div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_60px_rgba(16,185,129,0.10)] backdrop-blur">
        <pre className="whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-emerald-200/90">
          {typed}
          <span className="inline-block w-[10px] animate-pulse text-emerald-300">
            ▋
          </span>
        </pre>
      </div>
    </div>
  );
}
