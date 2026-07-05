"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="am-cta-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="am-cta-card"
      >
        <div className="am-cta-card-glow" />

        <div className="am-cta-card-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="am-cta-card-icon"
            style={{ borderColor: "var(--am-gold-soft)", backgroundColor: "var(--am-gold-soft)" }}
          >
            <Sparkles size={24} style={{ color: "var(--am-gold)" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="am-cta-card-title"
          >
            Let&apos;s build something
            <br />
            <span style={{ color: "var(--am-gold)" }}>extraordinary</span> together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="am-cta-card-desc"
          >
            Whether it&apos;s an AI-powered product, a scalable platform, or an
            ambitious idea — I&apos;m ready to bring it to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="pt-4"
          >
            <a
              href="#contact"
              className="am-cta-card-button"
              style={{ boxShadow: "0 0 40px var(--am-gold-mid)" }}
            >
              Start a Conversation
              <ArrowUpRight className="am-icon-arrow" size={16} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
