"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "I believe code is poetry —",
    "every function a verse,",
    "every architecture a story.",
    "AI isn't just automation;",
    "it's the bridge between",
    "human imagination and",
    "infinite possibility.",
  ];

  return (
    <div ref={ref} className="am-philosophy">
      <div className="am-philosophy-inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="am-philosophy-quote-icon"
          style={{ marginBottom: "2.5rem" }}
        >
          <Quote size={48} />
        </motion.div>

        <div className="am-philosophy-lines">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="am-philosophy-line"
              style={{ color: i < 2 ? "var(--am-text-primary)" : "var(--am-text-secondary)" }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="am-philosophy-signature"
        >
          <div className="am-philosophy-signature-line" />
          <span className="am-philosophy-signature-text">my philosophy</span>
        </motion.div>
      </div>
    </div>
  );
}
