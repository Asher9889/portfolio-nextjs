// app/page.tsx
"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  MapPin,
  Layers,
  GitBranchPlusIcon as
  Github,
  GitBranchPlusIcon as Linkedin,
  GitBranchPlusIcon as Twitter,
  Mail,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

// ─── Smooth Scroll Hook ───
function useSmoothScroll() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return scrollTo;
}



// ─── WhatsApp Floating Button ───
function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      href="https://wa.me/your-number"
      target="_blank"
      className="group fixed top-24 left-1/2 z-40 -translate-x-1/2 flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-5 py-2.5 text-sm font-medium text-neutral-700 shadow-lg backdrop-blur-sm transition-all hover:border-emerald-300 hover:shadow-xl"
    >
      Say hi on
      <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <ChevronDown className="h-3 w-3 rotate-[-90deg] text-neutral-400" />
      <div className="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 translate-y-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />
    </motion.a>
  );
}



// ─── About Section ───
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-neutral-50 py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Label */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
              About Me
            </span>
            <h2 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">
              Creative Engineer
              <span className="block text-neutral-300">Building the Future</span>
            </h2>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg leading-relaxed text-neutral-600">
              I'm a full-stack developer and designer based in India, crafting digital experiences 
              that merge technical excellence with visual storytelling. With expertise spanning 
              modern web technologies and design systems, I build products that don't just work — 
              they <span className="font-serif italic text-neutral-900">deliver real impact</span>.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Figma"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// ─── Stats Section ───
function Stats() {
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

// ─── Contact CTA ───
function Contact() {
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

// ─── Footer ───
function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white font-serif text-sm font-bold italic">
            Sk
          </div>
          <span className="text-sm font-medium text-neutral-500">
            © 2026 Saurabh. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          {["Home", "About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-900"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ───
export default function LandingPage() {
  return (
    <main className="relative bg-white text-neutral-900 antialiased">
      <About />
      <Stats />
      <Contact />
      <Footer /> 
    </main>
  );
}