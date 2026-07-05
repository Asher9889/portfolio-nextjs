"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import SkillOrbit from "./orbit.client";

export default function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="am-hero">
      <div className="am-hero-grid am-max-content">
        <div className="order-2 lg:order-1" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
            className="am-eyebrow"
          >
            <div className="am-eyebrow-line" />
            <span style={{ color: "var(--am-gold)" }}>About Me</span>
          </motion.div>

          <motion.h2
            initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="am-hero-headline"
          >
            <span className="am-text-white">I build</span>
            <br />
            <span style={{ color: "var(--am-gold)" }}>intelligent</span>
            <br />
            <span className="am-text-white">systems.</span>
          </motion.h2>

          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1 } : undefined}
            transition={{ delay: 0.4 }}
            className="am-hero-role"
          >
            <span className="am-mono-lg" style={{ color: "var(--am-cyan)" }}>
              Full Stack Developer &bull; AI Engineer &bull; Problem Solver
            </span>
          </motion.div>

          <motion.p
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="am-hero-description"
          >
            I&apos;m a passionate developer who lives at the intersection of
            <span style={{ color: "var(--am-gold)" }}> artificial intelligence</span> and
            <span style={{ color: "var(--am-cyan)" }}> full-stack engineering</span>. I
            craft scalable web applications infused with machine learning,
            turning complex problems into elegant, intelligent solutions.
          </motion.p>

          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", paddingTop: "1rem" }}
          >
            <a href="#contact" className="am-cta-primary">
              Let&apos;s Connect
              <ArrowUpRight className="am-icon-arrow" size={16} />
            </a>
            <a href="#work" className="am-cta-secondary">
              See My Work
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, scale: 0.9 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex items-center justify-center"
        >
          <SkillOrbit />
        </motion.div>
      </div>
    </div>
  );
}
