"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Layers } from "lucide-react";
import { projects, ACCENTS } from "./project-data";

export default function SectionHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="mb-20 px-6 md:px-12 lg:px-20 xl:px-28">
      <motion.div
        initial={!prefersReducedMotion ? { opacity: 0, y: 50 } : undefined}
        animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div className="space-y-4">
          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0, x: -20 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8" style={{ backgroundColor: ACCENTS.coral.main }} />
            <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: ACCENTS.coral.main }}>
              Portfolio
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            Selected
            <br />
            <span className="text-white/80">Works</span>
          </h2>
        </div>

        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 text-sm"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <Layers className="h-4 w-4" />
          <span className="font-mono">{String(projects.length).padStart(2, "0")} Projects</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
