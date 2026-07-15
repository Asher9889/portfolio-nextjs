"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Minus, Plus, Star } from "lucide-react";
import { caseStudies } from "@/constants/services.constant";
import { SectionLabel } from "../section-label";
import { FadeIn, easeOut } from "../animations";

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-w-smoke border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn className="mb-16 max-w-2xl">
          <SectionLabel>Recent Work</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text">
            Results, not promises.
            <br />
            <span className="text-w-blue">Here is proof.</span>
          </h2>
        </FadeIn>

        <div className="space-y-5">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : undefined}
              animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.15 * i, duration: 0.7, ease: easeOut }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 border border-w-border bg-w-bg text-left transition-all duration-200 hover:border-w-text/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50"
                style={{ borderRadius: "8px" }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 border border-w-border bg-w-smoke shrink-0" style={{ borderRadius: "4px" }}>
                    <Star size={14} className="text-w-muted" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-inter font-bold text-w-text">{cs.title}</h3>
                    <p className="text-xs text-w-muted mt-0.5">Case study</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-xs text-w-blue font-medium">{openIndex === i ? "Collapse" : "View details"}</span>
                  {openIndex === i ? <Minus size={14} className="text-w-muted shrink-0" /> : <Plus size={14} className="text-w-muted shrink-0" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={!prefersReducedMotion ? { height: 0, opacity: 0 } : undefined}
                    animate={!prefersReducedMotion ? { height: "auto", opacity: 1 } : undefined}
                    exit={!prefersReducedMotion ? { height: 0, opacity: 0 } : undefined}
                    transition={{ duration: 0.4, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 border-x border-b border-w-border bg-w-bg" style={{ borderRadius: "0 0 8px 8px" }}>
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-5">
                          <div>
                            <span className="text-[10px] font-inter font-medium text-w-blue uppercase tracking-wider">Problem</span>
                            <p className="text-sm text-w-muted mt-1 leading-relaxed">{cs.problem}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-inter font-medium text-w-blue uppercase tracking-wider">Challenges</span>
                            <p className="text-sm text-w-muted mt-1 leading-relaxed">{cs.challenges}</p>
                          </div>
                        </div>
                        <div className="space-y-5">
                          <div>
                            <span className="text-[10px] font-inter font-medium text-w-blue uppercase tracking-wider">Architecture</span>
                            <p className="text-sm text-w-muted mt-1 leading-relaxed">{cs.architecture}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-inter font-medium text-w-blue uppercase tracking-wider">Outcome</span>
                            <p className="text-sm text-w-muted mt-1 leading-relaxed">{cs.result}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {cs.metrics.map((m) => (
                              <span key={m} className="text-[11px] font-inter font-medium text-w-blue bg-w-blue/4 px-2.5 py-1 border border-w-blue/20" style={{ borderRadius: "4px" }}>
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
