"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "12+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Commitment" },
  ];

  return (
    <section className="relative bg-neutral-900 py-24 text-white">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                className="block text-5xl font-black tracking-tighter md:text-6xl"
              >
                {stat.value}
              </motion.span>
              <span className="mt-2 block text-sm font-medium uppercase tracking-wider text-neutral-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}