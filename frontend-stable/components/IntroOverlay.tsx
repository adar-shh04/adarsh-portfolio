"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type IntroOverlayProps = {
  isOpen: boolean;
  onDone: () => void;
};

export default function IntroOverlay({ isOpen, onDone }: IntroOverlayProps) {
  useEffect(() => {
    if (!isOpen) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      onDone();
      return;
    }

    const t = window.setTimeout(onDone, 1500);
    return () => window.clearTimeout(t);
  }, [isOpen, onDone]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="intro-backdrop" />
          <div className="intro-triangle" />
          <div className="intro-glow" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
