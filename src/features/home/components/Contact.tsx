"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative bg-background py-32 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,184,75,0.06), transparent 60%)",
        }}
      />
      <div className="relative z-10">
        <div ref={ref} className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <span className="h-px w-8" style={{ backgroundColor: "#E8B84B" }} />
              <span
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "#E8B84B" }}
              >
                Let's Connect
              </span>
              <span className="h-px w-8" style={{ backgroundColor: "#E8B84B" }} />
            </motion.span>

            <h2 className="mb-8 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Have a project{" "}
              <span className="relative inline-block" style={{ color: "#E8B84B" }}>
                in mind
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 100 6"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M1 4C20 1 50 1 99 4"
                    stroke="#E8B84B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
              </span>
              ?
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-12 text-lg text-foreground/55 max-w-xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </motion.p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:hello@saurabh.dev"
              className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-black transition-all duration-300"
              style={{
                backgroundColor: "#E8B84B",
                boxShadow: "0 4px 24px rgba(232,184,75,0.25)",
              }}
            >
              <Mail className="h-5 w-5" />
              Say Hello
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
