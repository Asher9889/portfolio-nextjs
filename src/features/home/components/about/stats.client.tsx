"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./counter.client";

const A = {
  gold: "#E8B84B",
  cyan: "#22D3EE",
  rose: "#FB7185",
  violet: "#A78BFA",
};

const stats = [
  { value: 12, suffix: "+", label: "Projects Delivered", color: A.gold },
  { value: 3, suffix: "+", label: "Years Experience", color: A.cyan },
  { value: 8, suffix: "+", label: "Happy Clients", color: A.rose },
  { value: 99, suffix: "%", label: "Client Satisfaction", color: A.violet },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="am-stats">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="am-stat-card"
          style={{
            "--card-accent": stat.color,
            "--card-accent-soft": `${stat.color}06`,
          } as React.CSSProperties}
        >
          <div className="am-stat-value" style={{ color: stat.color }}>
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="am-stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
