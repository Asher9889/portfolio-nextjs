"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  icon: any;
  title: string;
  skills: string[];
  color: string;
  delay: number;
}

export default function ExpertiseCard({ icon: Icon, title, skills, color, delay }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="am-expertise-card"
      style={{
        "--card-accent": color,
        "--card-accent-bg": `${color}08`,
        "--card-accent-border": `${color}25`,
        "--card-accent-icon-border": `${color}30`,
        "--card-accent-icon-bg": `${color}10`,
      } as React.CSSProperties}
    >
      <div
        className="am-expertise-card-glow"
        style={{ backgroundColor: color, opacity: 0.12 }}
      />

      <div className="relative z-10">
        <div
          className="am-expertise-card-icon"
          style={{ borderColor: `${color}30`, backgroundColor: `${color}10` }}
        >
          <Icon style={{ color }} size={20} />
        </div>

        <h4 className="am-expertise-card-title">{title}</h4>

        <div className="am-expertise-skills">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: delay + 0.1 * i, duration: 0.4 }}
              className="am-expertise-skill"
              style={{ "--skill-accent": color } as React.CSSProperties}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
