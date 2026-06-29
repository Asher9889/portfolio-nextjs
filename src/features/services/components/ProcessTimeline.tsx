"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { milestones } from "@/constants/services.constant";

const easeOut = [0.16, 1, 0.3, 1] as const;

function MilestoneCard({
  milestone, index, isActive, onHover, onLeave, prefersReducedMotion,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
      animate={isActive ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay: index * 0.08, duration: 0.5, ease: easeOut }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative flex-shrink-0 cursor-pointer group"
      style={{ width: "220px" }}
    >
      <div
        className={`p-5 border transition-all duration-300 ${isActive ? "border-w-blue/30 bg-w-blue/[0.02]" : "border-w-border bg-w-bg group-hover:border-w-text/20"}`}
        style={{ borderRadius: "8px" }}
      >
        <span className={`text-xs font-inter font-bold tracking-wider block mb-2 transition-colors ${isActive ? "text-w-blue" : "text-w-muted/50"}`}>
          Step {milestone.step}
        </span>
        <h4 className={`text-sm font-inter font-bold tracking-tight mb-2 transition-colors ${isActive ? "text-w-text" : "text-w-text group-hover:text-w-text"}`}>
          {milestone.title}
        </h4>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={!prefersReducedMotion ? { height: 0, opacity: 0 } : undefined}
              animate={!prefersReducedMotion ? { height: "auto", opacity: 1 } : undefined}
              exit={!prefersReducedMotion ? { height: 0, opacity: 0 } : undefined}
              transition={{ duration: 0.3, ease: easeOut }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3 border-t border-w-border">
                <div>
                  <span className="text-[10px] font-inter font-medium text-w-blue uppercase tracking-wider">Deliverables</span>
                  <p className="text-xs text-w-muted mt-1 leading-relaxed">{milestone.deliverables}</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <span className="text-[10px] font-inter font-medium text-w-muted/60 uppercase tracking-wider">Timeline</span>
                    <p className="text-xs text-w-muted mt-0.5">{milestone.timeline}</p>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-inter font-medium text-w-muted/60 uppercase tracking-wider">You</span>
                    <p className="text-xs text-w-muted mt-0.5">{milestone.involvement}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {index < milestones.length - 1 && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-4 h-px bg-w-border z-0" />
      )}
    </motion.div>
  );
}

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div ref={ref} className="w-full overflow-x-auto pb-4 scrollbar-none" style={{ scrollbarWidth: "none" }}>
      <div className="flex gap-4 md:gap-6 w-max mx-auto">
        {milestones.map((m, i) => (
          <MilestoneCard
            key={m.step}
            milestone={m}
            index={i}
            isActive={isInView && (activeIndex === i)}
            onHover={() => setActiveIndex(i)}
            onLeave={() => setActiveIndex(null)}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </div>
  );
}
