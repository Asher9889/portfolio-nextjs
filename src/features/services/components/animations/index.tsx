"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
      animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay, duration: 0.7, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={!prefersReducedMotion ? { opacity: 0, scale: 0.95 } : undefined}
      animate={!prefersReducedMotion && isInView ? { opacity: 1, scale: 1 } : undefined}
      transition={{ delay, duration: 0.7, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
