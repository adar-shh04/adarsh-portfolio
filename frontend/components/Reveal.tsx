"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 1, 0.5, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
