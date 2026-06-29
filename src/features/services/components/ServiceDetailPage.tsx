"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Service, OutcomeItem } from "@/constants/services.constant";
import { services } from "@/constants/services.constant";

const easeOut = [0.16, 1, 0.3, 1] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-6 bg-w-border" />
      <span className="text-[11px] font-inter uppercase tracking-[0.2em] text-w-muted">{children}</span>
    </div>
  );
}

function DetailHero({ service }: { service: Service }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="bg-w-bg pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs text-w-muted hover:text-w-text transition-colors mb-8"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <SectionLabel>Outcome</SectionLabel>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text mb-6 max-w-3xl">
            {service.title}
          </h1>
          <p className="text-sm md:text-base text-w-muted leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DetailBody({ service }: { service: Service }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionLabel>What This Includes</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.items.map((item: OutcomeItem) => (
              <div
                key={item.label}
                className="p-5 border border-w-border hover:border-w-blue/30 transition-colors bg-w-bg"
                style={{ borderRadius: "6px" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={12} className="text-w-blue/60 shrink-0" />
                  <h3 className="text-sm font-inter font-bold text-w-text">{item.label}</h3>
                </div>
                <p className="text-xs text-w-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DetailCTA({ service }: { service: Service }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-w-smoke border-t border-w-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: easeOut }}
          className="max-w-2xl"
        >
          <SectionLabel>Interested?</SectionLabel>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-inter font-bold tracking-tight leading-[1.1] text-w-text mb-6">
            Need help with this?
            <br />
            <span className="text-w-blue">Let's build it together.</span>
          </h2>
          <p className="text-sm md:text-base text-w-muted leading-relaxed mb-8">
            Every project starts with a conversation. Tell me about your problem, and I'll tell you how I can help solve it. No obligation, no sales pitch.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-w-bg bg-w-text transition-all duration-200 hover:opacity-85"
            style={{ borderRadius: "4px" }}
          >
            Start the Conversation
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServiceDetailPage({ serviceId }: { serviceId: string }) {
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <main className="bg-w-bg font-inter min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-w-text mb-4">Service not found</h1>
          <Link href="/services" className="text-sm text-w-blue hover:underline">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-w-bg font-inter">
      <DetailHero service={service} />
      <DetailBody service={service} />
      <DetailCTA service={service} />
    </main>
  );
}
