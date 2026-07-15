"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/constants/services.constant";
import { SectionLabel } from "../section-label";
import { FadeIn, easeOut } from "../animations";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn className="mb-12 max-w-2xl">
          <SectionLabel>Questions You Might Have</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text">
            I prefer honest answers
            <br />
            <span className="text-w-blue">over sales scripts.</span>
          </h2>
        </FadeIn>

        <div className="max-w-3xl space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
              animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.04 * i, duration: 0.4, ease: easeOut }}
              className="border border-w-border overflow-hidden"
              style={{ borderRadius: "4px" }}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left bg-w-bg hover:bg-w-smoke/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50"
              >
                <span className="text-sm font-inter font-medium text-w-text">{faq.question}</span>
                {openFAQ === i ? <Minus size={12} className="text-w-muted shrink-0" /> : <Plus size={12} className="text-w-muted shrink-0" />}
              </button>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.div
                    initial={!prefersReducedMotion ? { height: 0, opacity: 0 } : undefined}
                    animate={!prefersReducedMotion ? { height: "auto", opacity: 1 } : undefined}
                    exit={!prefersReducedMotion ? { height: 0, opacity: 0 } : undefined}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 bg-w-bg">
                      <p className="text-xs text-w-muted leading-relaxed">{faq.answer}</p>
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
