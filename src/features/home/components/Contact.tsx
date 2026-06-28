"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative bg-white py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-6 block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            Let's Connect
          </span>
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-neutral-900 md:text-7xl">
            Have a project in mind?
          </h2>
          <p className="mb-12 text-lg text-neutral-500">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:hello@saurabh.dev"
            className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-neutral-800"
          >
            <Mail className="h-5 w-5" />
            Say Hello
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}