"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import HeroDiagram from "../hero-diagram";
import { easeOut } from "../animations";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const services = [
  { num: "01", label: "Custom Software", desc: "Tailored systems for your workflow" },
  { num: "02", label: "Mobile Apps", desc: "iOS & Android, native performance" },
  { num: "03", label: "Business Websites", desc: "Fast, memorable, conversion-ready" },
  { num: "04", label: "AI Solutions", desc: "Automation, agents, intelligent features" },
  { num: "05", label: "Ongoing Support", desc: "Monitoring, maintenance, scaling" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="bg-w-bg pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={!prefersReducedMotion ? container : undefined}
            initial="hidden"
            animate={!prefersReducedMotion && isInView ? "show" : undefined}
          >
            <motion.h1 variants={item} className="flex flex-col">
              <span className="text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-w-muted/50 font-mono mb-2">
                What We Deliver
              </span>
              <span className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-tighter leading-[1.1] text-w-text/55">
                Custom Software Built Around
              </span>
              <span className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter leading-[0.85] text-w-blue relative inline-block">
                <span className="absolute inset-[-0.15em_-0.08em_-0.05em] rounded-[0.15em] -z-10" />
                Your Business.
              </span>
            </motion.h1>

            <motion.div variants={item} className="flex flex-col gap-2.5 mb-8">
              {services.map((s) => (
                <div key={s.num} className="flex items-center gap-3 text-[0.9375rem] leading-[1.4] text-w-muted">
                  <span className="font-mono text-[0.6875rem] font-semibold tracking-wider text-w-muted/20 w-6 text-right shrink-0">{s.num}</span>
                  <span className="font-medium text-w-text">{s.label}</span>
                  <span className="text-w-muted/40 text-[0.8125rem]">{s.desc}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Link
                href="#outcomes"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-w-bg bg-w-text transition-all duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50"
                style={{ borderRadius: "4px" }}
              >
                See What I Build <ArrowUpRight size={14} />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-w-text border border-w-border transition-all duration-200 hover:border-w-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50"
                style={{ borderRadius: "4px" }}
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0, scale: 0.92 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ delay: 0.3, duration: 0.9, ease: easeOut }}
          >
            <HeroDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
