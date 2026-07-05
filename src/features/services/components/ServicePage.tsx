"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Minus, Plus, Star } from "lucide-react";
import Link from "next/link";
import { outcomeGroups, comparisons, caseStudies, techStack, enterprisePractices, faqs, pricingTiers } from "@/constants/services.constant";
import HeroDiagram from "./HeroDiagram";
import ProcessTimeline from "./ProcessTimeline";
import ArchitectureFlow from "./ArchitectureFlow";

const easeOut = [0.16, 1, 0.3, 1] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-6 bg-w-border" />
      <span className="text-[11px] font-inter uppercase tracking-[0.2em] text-w-muted">{children}</span>
    </div>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

function ScaleIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

/* ── 1. Hero ── */

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

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

  return (
    <section ref={ref} className="bg-w-bg pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={!prefersReducedMotion ? container : undefined}
            initial="hidden"
            animate={!prefersReducedMotion && isInView ? "show" : undefined}
          >
            <motion.h1
              variants={item}
              className="flex flex-col"
            >
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
            <motion.div
              variants={item}
              className="flex flex-col gap-2.5 mb-8"
            >
              <div className="flex items-center gap-3 text-[0.9375rem] leading-[1.4] text-w-muted">
                <span className="font-mono text-[0.6875rem] font-semibold tracking-wider text-w-muted/20 w-6 text-right shrink-0">01</span>
                <span className="font-medium text-w-text">Custom Software</span>
                <span className="text-w-muted/40 text-[0.8125rem]">Tailored systems for your workflow</span>
              </div>
              <div className="flex items-center gap-3 text-[0.9375rem] leading-[1.4] text-w-muted">
                <span className="font-mono text-[0.6875rem] font-semibold tracking-wider text-w-muted/20 w-6 text-right shrink-0">02</span>
                <span className="font-medium text-w-text">Mobile Apps</span>
                <span className="text-w-muted/40 text-[0.8125rem]">iOS & Android, native performance</span>
              </div>
              <div className="flex items-center gap-3 text-[0.9375rem] leading-[1.4] text-w-muted">
                <span className="font-mono text-[0.6875rem] font-semibold tracking-wider text-w-muted/20 w-6 text-right shrink-0">03</span>
                <span className="font-medium text-w-text">Business Websites</span>
                <span className="text-w-muted/40 text-[0.8125rem]">Fast, memorable, conversion-ready</span>
              </div>
              <div className="flex items-center gap-3 text-[0.9375rem] leading-[1.4] text-w-muted">
                <span className="font-mono text-[0.6875rem] font-semibold tracking-wider text-w-muted/20 w-6 text-right shrink-0">04</span>
                <span className="font-medium text-w-text">AI Solutions</span>
                <span className="text-w-muted/40 text-[0.8125rem]">Automation, agents, intelligent features</span>
              </div>
              <div className="flex items-center gap-3 text-[0.9375rem] leading-[1.4] text-w-muted">
                <span className="font-mono text-[0.6875rem] font-semibold tracking-wider text-w-muted/20 w-6 text-right shrink-0">05</span>
                <span className="font-medium text-w-text">Ongoing Support</span>
                <span className="text-w-muted/40 text-[0.8125rem]">Monitoring, maintenance, scaling</span>
              </div>
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

/* ── 2. Outcomes ── */

function OutcomesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="outcomes" ref={ref} className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn className="mb-16 max-w-2xl">
          <SectionLabel>What I Solve</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text">
            You have a business problem.
            <br />
            <span className="text-w-blue">I build the technical solution.</span>
          </h2>
        </FadeIn>

        <div className="space-y-10 md:space-y-14">
          {outcomeGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : undefined}
              animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.1 * gi, duration: 0.7, ease: easeOut }}
              className="border border-w-border p-6 md:p-8"
              style={{ borderRadius: "8px" }}
            >
              <h3 className="text-xl md:text-2xl font-inter font-bold text-w-text mb-3">
                {group.headline}
              </h3>
              <p className="text-sm text-w-muted leading-relaxed mb-6 max-w-2xl">
                {group.question}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="p-3 border border-w-border hover:border-w-blue/30 transition-colors"
                    style={{ borderRadius: "4px" }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Check size={10} className="text-w-blue/60 shrink-0" />
                      <span className="text-xs font-inter font-semibold text-w-text">{item.label}</span>
                    </div>
                    <p className="text-[11px] text-w-muted leading-relaxed pl-4.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. Case Studies ── */

function CaseStudiesSection() {
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

/* ── 4. Process ── */

function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-12 max-w-2xl"
        >
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text mb-4">
            A process that turns your idea
            <br />
            <span className="text-w-blue">into working software, step by step</span>.
          </h2>
          <p className="text-sm text-w-muted leading-relaxed max-w-lg">
            Every project follows the same backbone. The timeline flexes. The quality bar does not.
          </p>
        </motion.div>

        <ScaleIn>
          <ProcessTimeline />
        </ScaleIn>
      </div>
    </section>
  );
}

/* ── 5. Comparison ── */

function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-w-smoke border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn className="mb-12 max-w-2xl">
          <SectionLabel>Why Choose Me</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text">
            Not all development is the same.
            <br />
            <span className="text-w-blue">Here is what you actually get.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-0 border border-w-border overflow-hidden" style={{ borderRadius: "8px" }}>
          {/* Typical header */}
          <div className="p-5 bg-w-bg border-r border-b border-w-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-300" />
              <span className="text-xs font-inter font-bold text-w-muted uppercase tracking-wider">Typical Agency</span>
            </div>
          </div>
          <div className="p-5 bg-w-bg border-b border-w-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-w-blue" />
              <span className="text-xs font-inter font-bold text-w-text uppercase tracking-wider">This Is What I Do</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, i) => (
            <div key={item.label} className="contents">
              <motion.div
                initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
                animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: 0.04 * i, duration: 0.4, ease: easeOut }}
                className={`p-4 border-r border-b border-w-border ${i % 2 === 0 ? "bg-w-bg" : "bg-w-smoke/50"}`}
              >
                <p className="text-xs font-inter text-w-muted line-through">{item.typical}</p>
              </motion.div>
              <motion.div
                initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
                animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: 0.04 * i, duration: 0.4, ease: easeOut }}
                className={`p-4 border-b border-w-border ${i % 2 === 0 ? "bg-w-bg" : "bg-w-smoke/50"}`}
              >
                <div className="flex items-start gap-2">
                  <Check size={12} className="text-w-blue/70 mt-0.5 shrink-0" />
                  <p className="text-xs font-inter text-w-text">{item.our}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. Architecture Preview ── */

function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-12 max-w-2xl"
        >
          <SectionLabel>How I Think Before I Code</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text mb-4">
            I plan the whole system
            <br />
            <span className="text-w-blue">before writing a single line</span>.
          </h2>
          <p className="text-sm text-w-muted leading-relaxed max-w-xl">
            Every project starts with a whiteboard. Data flows, service boundaries, failure modes, scaling strategy.
            The code is just the last step.
          </p>
        </motion.div>

        <ScaleIn delay={0.2}>
          <ArchitectureFlow />
        </ScaleIn>
      </div>
    </section>
  );
}

/* ── 7. Pricing ── */

function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn className="mb-12 max-w-2xl">
          <SectionLabel>Investment</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text">
            Transparent pricing.
            <br />
            <span className="text-w-blue">No hidden costs, no surprises.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
              animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: easeOut }}
              className={`relative flex flex-col border transition-all duration-300 ${tier.highlighted ? "border-w-text shadow-sm" : "border-w-border hover:border-w-text/30"} bg-w-bg`}
              style={{ borderRadius: "8px" }}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-w-text" style={{ borderRadius: "4px" }}>
                  <span className="text-[10px] font-inter font-bold text-w-bg uppercase tracking-wider">Most Popular</span>
                </div>
              )}
              <div className="p-6 md:p-7 flex flex-col h-full">
                <h3 className="text-sm font-inter font-bold text-w-text mb-1">{tier.name}</h3>
                <p className="text-2xl md:text-3xl font-inter font-bold text-w-text mb-3 tracking-tight">{tier.price}</p>
                <p className="text-xs text-w-muted leading-relaxed mb-6 flex-1">{tier.description}</p>
                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-w-muted">
                      <Check size={10} className="text-w-blue/60 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-inter font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50 ${tier.highlighted ? "text-w-bg bg-w-text hover:opacity-85" : "text-w-text border border-w-border hover:border-w-text"} text-center`}
                  style={{ borderRadius: "4px" }}
                >
                  {tier.price === "Custom Quote" ? "Let's Talk" : "Get Started"}
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 8. Tech & Practices ── */

function TechSection() {
  return (
    <section className="py-20 md:py-28 bg-w-smoke border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <FadeIn>
            <SectionLabel>Built With</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-inter font-bold tracking-tight text-w-text mb-6">
              Modern tools for real-world systems.
            </h2>
            <div className="space-y-5">
              {techStack.map((cat) => (
                <div key={cat.category}>
                  <span className="text-[10px] font-inter font-medium text-w-muted/60 uppercase tracking-wider block mb-2">{cat.category}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((t) => (
                      <span key={t} className="text-[11px] font-inter text-w-muted bg-w-bg px-2.5 py-1 border border-w-border" style={{ borderRadius: "4px" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <SectionLabel>Enterprise Practices</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-inter font-bold tracking-tight text-w-text mb-6">
              Production-grade from day one.
            </h2>
            <ul className="space-y-3">
              {enterprisePractices.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-w-muted">
                  <span className="w-5 h-5 flex items-center justify-center border border-w-blue/30 bg-w-blue/3" style={{ borderRadius: "4px" }}>
                    <Check size={10} className="text-w-blue/60" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ── 9. FAQ ── */

function FAQSection() {
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

/* ── 10. CTA ── */

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-w-text border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: easeOut }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-bg mb-6">
            Have a Product Idea?
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
            Let&apos;s spend 30 minutes discussing whether it&apos;s technically and commercially viable.
            <br />
            <span style={{ color: "rgba(255,255,255,0.7)" }}>No sales pitch. Just honest engineering advice.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-w-text bg-w-bg transition-all duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              style={{ borderRadius: "4px" }}
            >
              Book a Free 30-Min Call
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-w-bg border border-white/20 transition-all duration-200 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              style={{ borderRadius: "4px" }}
            >
              See Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Main ── */

export default function ServicePage() {
  return (
    <main className="bg-w-bg font-inter">
      <HeroSection />
      <OutcomesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <ComparisonSection />
      <ArchitectureSection />
      <PricingSection />
      <TechSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
