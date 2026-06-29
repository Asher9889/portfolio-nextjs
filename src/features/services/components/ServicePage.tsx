"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Code2,
  Brain,
  Layers,
  Zap,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  Shield,
  Gauge,
  Palette,
} from "lucide-react";
import Link from "next/link";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: Code2,
    title: "Full Stack Engineering",
    tagline: "Scalable platforms from concept to deployment",
    description:
      "End-to-end web applications built with React, Next.js, Node.js, and TypeScript. From REST APIs to real-time systems, I ship production-grade code that scales.",
    highlights: [
      "React & Next.js frontends",
      "Node.js & Express APIs",
      "MongoDB, Redis, PostgreSQL",
      "Docker & PM2 deployment",
    ],
    color: "#22D3EE",
    gradient: "from-cyan-500/20 via-cyan-400/5 to-transparent",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    tagline: "Intelligent systems that see, read, and decide",
    description:
      "Computer vision, NLP, and deep learning solutions tailored to real-world problems. Face recognition, object detection, and predictive models for production.",
    highlights: [
      "Computer vision & YOLO",
      "Face recognition pipelines",
      "MediaPipe & OpenCV",
      "Model deployment & MLOps",
    ],
    color: "#E8B84B",
    gradient: "from-amber-500/20 via-amber-400/5 to-transparent",
  },
  {
    icon: Layers,
    title: "System Architecture",
    tagline: "Distributed systems built for reliability",
    description:
      "Microservices, cloud infrastructure, and system design that handles real traffic. I architect for observability, resilience, and cost-efficiency.",
    highlights: [
      "Microservices & event-driven",
      "AWS & GCP infrastructure",
      "Kubernetes & CI/CD",
      "System design & scaling",
    ],
    color: "#FB7185",
    gradient: "from-rose-500/20 via-rose-400/5 to-transparent",
  },
  {
    icon: Zap,
    title: "Creative Development",
    tagline: "Motion, 3D, and interactive experiences",
    description:
      "Award-worthy frontends with Framer Motion, Three.js, and WebGL. I bring designs to life with buttery animations, 3D visuals, and pixel-perfect interactions.",
    highlights: [
      "Framer Motion & GSAP",
      "Three.js & WebGL",
      "UI/UX & interaction design",
      "Performance optimization",
    ],
    color: "#A78BFA",
    gradient: "from-violet-500/20 via-violet-400/5 to-transparent",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We map the problem space, define goals, and align on what success looks like. No assumptions, no scope creep.",
    icon: Workflow,
  },
  {
    step: "02",
    title: "Architecture",
    desc: "I design the system — data flow, service boundaries, tech stack, and fallbacks. Every decision has a rationale.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Build",
    desc: "Iterative development with continuous feedback. Ship fast, validate, refine. No waterfall, no surprises.",
    icon: Gauge,
  },
  {
    step: "04",
    title: "Launch & Iterate",
    desc: "Deploy, monitor, optimize. Then keep improving based on real usage data and user feedback.",
    icon: Palette,
  },
];

function ServiceHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#070708" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-[200px]"
          style={{ backgroundColor: "#22D3EE", opacity: 0.04 }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full blur-[200px]"
          style={{ backgroundColor: "#E8B84B", opacity: 0.03 }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8" style={{ backgroundColor: "#E8B84B" }} />
            <span
              className="text-xs font-mono uppercase tracking-[0.25em]"
              style={{ color: "#E8B84B" }}
            >
              What I Offer
            </span>
          </motion.div>

          <motion.h1
            initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.1, duration: 0.8, ease: easeOutExpo }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
          >
            <span style={{ color: "#FAFAFA" }}>Services that</span>
            <br />
            <span style={{ color: "#E8B84B" }}>ship value</span>
            <br />
            <span style={{ color: "#FAFAFA" }}>not just code.</span>
          </motion.h1>

          <motion.p
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl max-w-2xl mb-10"
            style={{ color: "rgba(250, 250, 250, 0.55)" }}
          >
            Every engagement is a partnership. I don&apos;t just write code — I
            architect systems, design experiences, and ship products that move
            the needle. Here&apos;s how I can help.
          </motion.p>

          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#E8B84B" }}
            >
              Explore Services
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-300 hover:bg-white/5"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Book a Call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: "#070708" }}
    >
      <div className="px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #E8B84B)",
              }}
            />
            <span
              className="text-xs font-mono uppercase tracking-[0.3em]"
              style={{ color: "#E8B84B" }}
            >
              Capabilities
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
            style={{ color: "#FAFAFA" }}
          >
            Everything you need to
            <br />
            <span style={{ color: "#E8B84B" }}>build, scale, and ship</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isInView,
  prefersReducedMotion,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={!prefersReducedMotion ? { opacity: 0, y: 50 } : undefined}
      animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        delay: 0.15 * index,
        duration: 0.9,
        ease: easeOutExpo,
      }}
      className="group relative rounded-3xl border overflow-hidden transition-all duration-500"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at 50% -20%, ${service.color}12, transparent 60%)`,
        }}
      />

      <div
        className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(165deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}50, transparent)`,
        }}
      />

      <div className="relative z-10 p-8 md:p-10">
        <div className="flex items-start justify-between mb-6">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500"
            style={{
              borderColor: `${service.color}30`,
              backgroundColor: `${service.color}10`,
            }}
          >
            <service.icon
              className="h-6 w-6"
              style={{ color: service.color }}
            />
          </div>
          <span
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "rgba(250, 250, 250, 0.25)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3
          className="text-2xl md:text-3xl font-bold tracking-tight mb-2"
          style={{ color: "#FAFAFA" }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm mb-5 font-medium"
          style={{ color: `${service.color}cc` }}
        >
          {service.tagline}
        </p>
        <p
          className="text-sm md:text-base leading-relaxed mb-8 max-w-lg"
          style={{ color: "rgba(250, 250, 250, 0.5)" }}
        >
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.highlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-lg border transition-all duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.45)",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              <CheckCircle2 size={10} style={{ color: service.color }} />
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: "#070708" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[180px]"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.08), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #A78BFA)",
              }}
            />
            <span
              className="text-xs font-mono uppercase tracking-[0.3em]"
              style={{ color: "#A78BFA" }}
            >
              Process
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
            style={{ color: "#FAFAFA" }}
          >
            How I deliver
            <br />
            <span style={{ color: "#A78BFA" }}>results, not just code</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={
                !prefersReducedMotion
                  ? { opacity: 0, y: 40 }
                  : undefined
              }
              animate={
                !prefersReducedMotion && isInView
                  ? { opacity: 1, y: 0 }
                  : undefined
              }
              transition={{
                delay: 0.2 * i,
                duration: 0.7,
                ease: easeOutExpo,
              }}
              className="relative"
            >
              <span
                className="text-5xl md:text-6xl font-black tracking-tighter block mb-4"
                style={{ color: "rgba(250, 250, 250, 0.04)" }}
              >
                {step.step}
              </span>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl border mb-5"
                style={{
                  borderColor: "rgba(167, 139, 250, 0.25)",
                  backgroundColor: "rgba(167, 139, 250, 0.08)",
                }}
              >
                <step.icon
                  className="h-5 w-5"
                  style={{ color: "#A78BFA" }}
                />
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#FAFAFA" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(250, 250, 250, 0.45)" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: "#070708" }}
    >
      <div className="px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 40 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center rounded-3xl border p-12 md:p-16 overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.02)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ backgroundColor: "#E8B84B", opacity: 0.08 }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              initial={
                !prefersReducedMotion
                  ? { opacity: 0, scale: 0.5 }
                  : undefined
              }
              animate={
                !prefersReducedMotion && isInView
                  ? { opacity: 1, scale: 1 }
                  : undefined
              }
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center h-14 w-14 rounded-full border"
              style={{
                borderColor: "rgba(232, 184, 75, 0.19)",
                backgroundColor: "rgba(232, 184, 75, 0.08)",
              }}
            >
              <Sparkles className="h-6 w-6" style={{ color: "#E8B84B" }} />
            </motion.div>

            <motion.h2
              initial={
                !prefersReducedMotion
                  ? { opacity: 0, y: 20 }
                  : undefined
              }
              animate={
                !prefersReducedMotion && isInView
                  ? { opacity: 1, y: 0 }
                  : undefined
              }
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#FAFAFA" }}
            >
              Ready to build something
              <br />
              <span style={{ color: "#E8B84B" }}>extraordinary</span>?
            </motion.h2>

            <motion.p
              initial={
                !prefersReducedMotion ? { opacity: 0 } : undefined
              }
              animate={
                !prefersReducedMotion && isInView
                  ? { opacity: 1 }
                  : undefined
              }
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg max-w-lg mx-auto"
              style={{ color: "rgba(250, 250, 250, 0.5)" }}
            >
              Whether you need a full platform, an AI model, or a creative
              frontend — let&apos;s talk about what you want to build.
            </motion.p>

            <motion.div
              initial={
                !prefersReducedMotion
                  ? { opacity: 0, y: 20 }
                  : undefined
              }
              animate={
                !prefersReducedMotion && isInView
                  ? { opacity: 1, y: 0 }
                  : undefined
              }
              transition={{ delay: 0.7 }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#E8B84B",
                  boxShadow: "0 0 40px rgba(232, 184, 75, 0.2)",
                }}
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <main style={{ backgroundColor: "#070708" }}>
      <ServiceHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
