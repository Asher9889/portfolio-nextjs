"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const A = {
  gold: "#E8B84B",
  rose: "#FB7185",
  cyan: "#22D3EE",
  violet: "#A78BFA",
};

const milestones = [
  { year: "2023 June", title: "Started the Journey", desc: "Dove deep into full-stack development, mastering React, Node.js, and building my first production apps.", color: A.gold },
  { year: "2023 December", title: "Postgraduate CS Journey", desc: "Began pursuing an M.S. in Computer Science focused on Data Structures, Algorithms, and advanced software engineering principles.", color: A.rose },
  { year: "2024 November", title: "Frontend Engineering", desc: "Started building modern, scalable web applications with React, TypeScript, TanStack Query, Redux and performance-focused UI architecture.", color: A.cyan },
  { year: "2025 April", title: "Backend Engineering", desc: "Built scalable backend services, REST APIs, and real-time systems using Node.js, MongoDB, Redis, and event-driven architectures.", color: A.rose },
  { year: "2025 September", title: "Full Stack Engineering", desc: "Built end-to-end AI-powered platforms combining scalable backend systems, modern frontend experiences, and real-time face recognition workflows.", color: A.violet },
  { year: "2025-26", title: "AI-First Products", desc: "Launched AI-powered SaaS products — face recognition systems, predictive analytics, and intelligent automation.", color: A.violet },
  { year: "2025", title: "The Future", desc: "Pushing boundaries in Generative AI, real-time systems, and creating the next generation of intelligent applications.", color: A.gold },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="am-timeline">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="am-timeline-header"
      >
        <div className="am-eyebrow" style={{ justifyContent: "center" }}>
          <div className="am-eyebrow-line" style={{ backgroundColor: "var(--am-cyan)" }} />
          <span style={{ color: "var(--am-cyan)" }}>Journey</span>
          <div className="am-eyebrow-line" style={{ backgroundColor: "var(--am-cyan)" }} />
        </div>
        <h2 className="am-timeline-header-title">My Path</h2>
      </motion.div>

      <div className="am-timeline-container">
        <div className="am-timeline-line" />

        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="am-timeline-item"
              style={{ "--timeline-color": m.color } as React.CSSProperties}
            >
              <div className="am-timeline-dot">
                <div
                  className="am-timeline-dot-inner"
                  style={{ borderColor: m.color, boxShadow: `0 0 12px ${m.color}40` }}
                />
              </div>

              <div className={`am-timeline-content ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span
                  className="am-timeline-year"
                  style={{ backgroundColor: `${m.color}15`, color: m.color }}
                >
                  {m.year}
                </span>
                <h4 className="am-timeline-item-title">{m.title}</h4>
                <p className="am-timeline-desc">{m.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
