"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { milestones } from "@/constants/services.constant";
import type { Milestone } from "@/constants/services.constant";

const easeOut = [0.16, 1, 0.3, 1] as const;

function MilestoneCard({
  milestone, index, isExpanded, onToggle, prefersReducedMotion, isInViewSection,
}: {
  milestone: Milestone;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  prefersReducedMotion: boolean | null;
  isInViewSection: boolean;
}) {
  return (
    <motion.div
      initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
      animate={!prefersReducedMotion && isInViewSection ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay: index * 0.1, duration: 0.6, ease: easeOut }}
      className="w-full md:w-[200px] lg:w-[220px] shrink-0"
    >
      <button
        onClick={onToggle}
        className="w-full text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50"
        style={{ borderRadius: "8px" }}
      >
        <div
          className={`p-5 border transition-all duration-300 ${
            isExpanded
              ? "border-w-blue/40 bg-w-blue/[0.02]"
              : "border-w-border bg-w-bg group-hover:border-w-text/20"
          }`}
          style={{ borderRadius: "8px" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-[11px] font-inter font-bold tracking-widest transition-colors ${
                isExpanded ? "text-w-blue" : "text-w-muted/40"
              }`}
            >
              {milestone.step === "00" ? "Start" : `Step ${milestone.step}`}
            </span>
            <ArrowUpRight
              size={12}
              className={`transition-all duration-300 ${
                isExpanded
                  ? "text-w-blue rotate-45"
                  : "text-w-muted/30 group-hover:text-w-muted/60"
              }`}
            />
          </div>

          <h4
            className={`text-sm font-inter font-bold tracking-tight transition-colors ${
              isExpanded ? "text-w-text" : "text-w-text"
            }`}
          >
            {milestone.title}
          </h4>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={!prefersReducedMotion ? { height: 0, opacity: 0 } : undefined}
                animate={!prefersReducedMotion ? { height: "auto", opacity: 1 } : undefined}
                exit={!prefersReducedMotion ? { height: 0, opacity: 0 } : undefined}
                transition={{ duration: 0.3, ease: easeOut }}
                className="overflow-hidden"
              >
                <div className="pt-3 mt-3 space-y-3 border-t border-w-border">
                  <div>
                    <span className="text-[10px] font-inter font-medium text-w-blue uppercase tracking-wider">
                      Deliverables
                    </span>
                    <p className="text-xs text-w-muted mt-1 leading-relaxed">
                      {milestone.deliverables}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <span className="text-[10px] font-inter font-medium text-w-muted/60 uppercase tracking-wider">
                        Timeline
                      </span>
                      <p className="text-xs text-w-muted mt-0.5 font-medium">
                        {milestone.timeline}
                      </p>
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-inter font-medium text-w-muted/60 uppercase tracking-wider">
                        You
                      </span>
                      <p className="text-xs text-w-muted mt-0.5">
                        {milestone.involvement}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      {index < milestones.length - 1 && (
        <div className="flex items-center justify-center h-6 md:h-8">
          <div className="w-px h-full bg-w-border/60 md:w-8 md:h-px" />
          <div className="hidden md:block absolute right-0 top-1/2 w-2 h-2 border-t border-r border-w-border/40 -translate-y-1/2 rotate-45" />
        </div>
      )}
    </motion.div>
  );
}

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div ref={ref}>
      {/* Desktop: horizontal scroll */}
      <div className="hidden md:flex gap-0 overflow-x-auto pb-4 items-start" style={{ scrollbarWidth: "none" }}>
        {milestones.map((m, i) => (
          <div key={m.step} className="flex items-start">
            <MilestoneCard
              milestone={m}
              index={i}
              isExpanded={isInView && expandedIndex === i}
              onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
              prefersReducedMotion={prefersReducedMotion}
              isInViewSection={isInView}
            />
            {i < milestones.length - 1 && (
              <div className="flex items-center pt-6 px-2">
                <div className="w-6 h-px bg-w-border/50 relative">
                  <div className="absolute right-0 top-1/2 w-1.5 h-1.5 border-t border-r border-w-border/50 -translate-y-1/2 rotate-45" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex md:hidden flex-col gap-3">
        {milestones.map((m, i) => (
          <div key={m.step} className="relative pl-6">
            {/* Vertical line connector */}
            {i < milestones.length - 1 && (
              <div className="absolute left-[7px] top-4 bottom-0 w-px bg-w-border/40" />
            )}
            {/* Dot */}
            <div
              className={`absolute left-0 top-4 w-[15px] h-[15px] border-2 rounded-full -translate-x-1/2 transition-colors ${
                expandedIndex === i ? "border-w-blue bg-w-blue/10" : "border-w-border bg-w-bg"
              }`}
            />
            <MilestoneCard
              milestone={m}
              index={i}
              isExpanded={expandedIndex === i}
              onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
              prefersReducedMotion={prefersReducedMotion}
              isInViewSection={isInView}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
