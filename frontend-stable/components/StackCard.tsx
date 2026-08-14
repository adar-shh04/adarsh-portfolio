"use client";

import { motion } from "framer-motion";

interface StackCardProps {
  title: string;
  items: string[];
}

export default function StackCard({ title, items }: StackCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl p-8
                 bg-[linear-gradient(145deg,rgba(16,185,129,0.05),rgba(16,185,129,0.015))]
                 border border-white/5
                 backdrop-blur-xl
                 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      <h3 className="text-xl font-semibold text-foreground mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm rounded-lg
                       bg-white/5
                       border border-white/5
                       text-white/80
                       hover:border-emerald-500/40
                       transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
