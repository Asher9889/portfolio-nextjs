"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Tech } from "./project-data";

export default function TechTag({ tech, index }: { tech: Tech; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
      animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      className="group/tag relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-105 cursor-default"
      style={{
        borderColor: `${tech.color}25`,
        backgroundColor: `${tech.color}08`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${tech.color}50`;
        e.currentTarget.style.backgroundColor = `${tech.color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${tech.color}25`;
        e.currentTarget.style.backgroundColor = `${tech.color}08`;
      }}
    >
      <tech.icon
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tag:scale-110"
        style={{ color: tech.color }}
      />
      <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
        {tech.name}
      </span>
    </motion.div>
  );
}
