"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTensorflow,
  SiOpencv,
  SiTailwindcss,
  SiRedis,
  SiGraphql,
  SiAlmalinux as SiAmazon,
  SiYolo,
  SiPython,
  SiLivekit,
  SiN8N,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  ArrowUpRight,
  Layers,
  ExternalLink,
  Sparkles,
  Play,
  X,
} from "lucide-react";
import Video from "./Video";

// ─── Types ───
interface Tech {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: Tech[];
  image: string;
  accent: string;
  accentSoft: string;
  year: string;
  category: string;
  link?: string;
  video?: string;
}

// ─── Color Palette ───
const ACCENTS = {
  coral: { main: "#E8553A", soft: "rgba(232, 85, 58, 0.12)", glow: "rgba(232, 85, 58, 0.25)" },
  emerald: { main: "#34D399", soft: "rgba(52, 211, 153, 0.12)", glow: "rgba(52, 211, 153, 0.25)" },
  sapphire: { main: "#60A5FA", soft: "rgba(96, 165, 250, 0.12)", glow: "rgba(96, 165, 250, 0.25)" },
};

// ─── Data ───
const projects: Project[] = [
  {
    id: 1,
    title: "Face Vision",
    subtitle: "AI-Powered Face Recognition & Attendance Intelligence",
    description:
      "Enterprise-grade surveillance platform delivering real-time face recognition, automated attendance tracking, unknown visitor monitoring, and operational analytics across distributed CCTV networks.",
    tags: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "LiveKit", icon: SiLivekit, color: "#FF4F64" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "YOLO", icon: SiYolo, color: "#00D4AA" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Motion", icon: TbBrandFramerMotion, color: "#FF00AA" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    ],
    image: "/ai-project.png",
    accent: ACCENTS.coral.main,
    accentSoft: ACCENTS.coral.soft,
    year: "2026",
    category: "Artificial Intelligence",
    link: "#",
    video: "https://res.cloudinary.com/saurabhbackend/video/upload/vc_vp9/v1778603722/portfolio/ngnpj9mbgbxfzhtcv4zt.webm",
  },
  {
    id: 2,
    title: "PureCheckup",
    subtitle: "Digital Healthcare & Appointment Ecosystem",
    description:
      "A scalable healthcare platform streamlining doctor discovery, online appointment booking, patient engagement, and seamless digital consultations for modern medical practices.",
    tags: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "N8N", icon: SiN8N, color: "#EA4B71" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Motion", icon: TbBrandFramerMotion, color: "#FF00AA" },
    ],
    image: "https://plus.unsplash.com/premium_photo-1778134471869-54d3df1db7a3?q=80&w=1325&auto=format&fit=crop",
    accent: ACCENTS.emerald.main,
    accentSoft: ACCENTS.emerald.soft,
    year: "2025",
    category: "Healthcare",
    link: "#",
    video: "https://res.cloudinary.com/saurabhbackend/video/upload/f_webm,vc_vp9/v1778609091/portfolio/sc5ifeq1sxur56rz72nv",
  },
  {
    id: 3,
    title: "EHRM",
    subtitle: "Biometric Attendance & Workforce Intelligence",
    description:
      "Centralized HR management integrating RFID, fingerprint scanners, face recognition, and geo-tagged mobile tracking for automated workforce attendance and real-time compliance.",
    tags: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    ],
    image: "https://images.unsplash.com/photo-1778431193240-72e7d9c4cd38?q=80&w=1827&auto=format&fit=crop",
    accent: ACCENTS.sapphire.main,
    accentSoft: ACCENTS.sapphire.soft,
    year: "2025",
    category: "Enterprise",
    link: "#",
    video: "https://res.cloudinary.com/saurabhbackend/video/upload/f_webm,vc_vp9/v1778609091/portfolio/myss5a3vyvcyfrk5rnig",
  },
];

// ─── Spotlight Effect Hook ───
function useSpotlight(ref: React.RefObject<HTMLElement | null>) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", () => setIsHovering(true));
    el.addEventListener("mouseleave", () => setIsHovering(false));

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", () => setIsHovering(true));
      el.removeEventListener("mouseleave", () => setIsHovering(false));
    };
  }, [ref]);

  return { mouse, isHovering };
}

// ─── Section Header ───
function SectionHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="mb-20 px-6 md:px-12 lg:px-20 xl:px-28">
      <motion.div
        initial={!prefersReducedMotion ? { opacity: 0, y: 50 } : undefined}
        animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div className="space-y-4">
          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0, x: -20 } : undefined}
            animate={!prefersReducedMotion && isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span
              className="h-px w-8"
              style={{ backgroundColor: ACCENTS.coral.main }}
            />
            <span
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: ACCENTS.coral.main }}
            >
              Portfolio
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            Selected
            <br />
            <span className="text-white/80">
              Works
            </span>
          </h2>
        </div>

        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0 } : undefined}
          animate={!prefersReducedMotion && isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 text-sm"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <Layers className="h-4 w-4" />
          <span className="font-mono">
            {String(projects.length).padStart(2, "0")} Projects
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Tech Tag ───
function TechTag({ tech, index, accent }: { tech: Tech; index: number; accent: string }) {
  const Icon = tech.icon;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
      animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      className="group/tag relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-105 cursor-default focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        borderColor: `${tech.color}25`,
        backgroundColor: `${tech.color}08`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${tech.color}50`;
        e.currentTarget.style.backgroundColor = `${tech.color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${tech.color}25`;
        e.currentTarget.style.backgroundColor = `${tech.color}08`;
      }}
      tabIndex={0}
      role="listitem"
    >
      <Icon
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/tag:scale-110"
        style={{ color: tech.color }}
      />
      <span
        className="text-xs font-medium"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
}

// ─── Project Card ───
function ProjectCard({
  project,
  index,
  progress,
  range,
}: {
  project: Project;
  index: number;
  progress: any;
  range: [number, number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-15%" });
  const [isHovered, setIsHovered] = useState(false);
  const { mouse, isHovering } = useSpotlight(cardRef);
  const prefersReducedMotion = useReducedMotion();

  const scale = useTransform(progress, range, [1, 0.94]);
  const opacity = useTransform(progress, range, [1, 0.85]);
  const y = useTransform(progress, range, [0, -40]);
  const imageY = useTransform(progress, range, [0, 60]);
  const imageScale = useTransform(progress, range, [1, 1.08]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: index === projects.length - 1 ? 1 : scale,
        opacity: index === projects.length - 1 ? 1 : opacity,
        y,
        top: `${index * 16}px`,
      }}
      className="sticky mb-10 w-full will-change-transform"
    >
      <motion.article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={!prefersReducedMotion ? { opacity: 0, y: 80 } : undefined}
        animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.15,
        }}
        className="group relative overflow-hidden rounded-[2rem] border transition-all duration-700"
        style={{
          backgroundColor: "#0c0c10",
          borderColor: isHovered
            ? `${project.accent}30`
            : "rgba(255,255,255,0.06)",
          boxShadow: isHovered
            ? `0 0 80px ${project.accentSoft}, 0 25px 60px rgba(0,0,0,0.5)`
            : "0 8px 40px rgba(0,0,0,0.3)",
        }}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
      >
        {/* Spotlight Gradient */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, ${project.accentSoft}, transparent 60%)`,
          }}
        />

        {/* Top Accent Line */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
            opacity: isHovered ? 0.6 : 0.2,
          }}
        />

        <div
          className={`grid lg:grid-cols-12 gap-0 ${isEven ? "" : "lg:direction-rtl"}`}
        >
          {/* ─── Media Side ─── */}
          <div
            className={`relative overflow-hidden lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}
            style={{ minHeight: "420px" }}
          >
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0 will-change-transform"
            >
              {project.video ? (
                <Video src={project.video} />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              )}
            </motion.div>

            {/* Gradient Overlays */}
            <div
              className="absolute inset-0"
              style={{
                background: isEven
                  ? `linear-gradient(90deg, transparent 40%, #0c0c10 100%), linear-gradient(180deg, transparent 60%, rgba(12,12,16,0.8) 100%)`
                  : `linear-gradient(270deg, transparent 40%, #0c0c10 100%), linear-gradient(180deg, transparent 60%, rgba(12,12,16,0.8) 100%)`,
              }}
            />

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="absolute top-6 left-6 z-10"
            >
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium backdrop-blur-xl border"
                style={{
                  backgroundColor: `${project.accent}15`,
                  borderColor: `${project.accent}25`,
                  color: project.accent,
                }}
              >
                <Sparkles className="h-3 w-3" />
                {project.category}
              </span>
            </motion.div>

            {/* Year Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="absolute top-6 right-6 z-10"
            >
              <span
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {project.year}
              </span>
            </motion.div>

            {/* Hover Play Button */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full backdrop-blur-xl border cursor-pointer transition-transform duration-300 hover:scale-110"
                    style={{
                      backgroundColor: `${project.accent}20`,
                      borderColor: `${project.accent}40`,
                    }}
                  >
                    <Play
                      className="h-5 w-5 ml-0.5"
                      style={{ color: project.accent }}
                      fill={project.accent}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ─── Content Side ─── */}
          <div
            className={`relative flex flex-col justify-center p-8 md:p-10 lg:p-12 lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Background Index */}
            <div
              className="absolute top-4 right-6 font-mono text-[8rem] md:text-[10rem] font-bold leading-none pointer-events-none select-none"
              style={{ color: `${project.accent}08` }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="relative z-10 space-y-5">
              {/* Category + Year (mobile only) */}
              <div className="flex items-center gap-3 lg:hidden">
                <span
                  className="text-xs font-mono"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </span>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                <span
                  className="text-xs font-mono"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight"
              >
                {project.title}
              </motion.h3>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: project.accent }}
              >
                {project.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm md:text-base leading-relaxed max-w-md"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {project.description}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-16 origin-left"
                style={{ backgroundColor: `${project.accent}40` }}
              />

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {project.tags.map((tech, i) => (
                  <TechTag
                    key={tech.name}
                    tech={tech}
                    index={i}
                    accent={project.accent}
                  />
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-4"
              >
                <a
                  href={project.link}
                  className="group/btn inline-flex items-center gap-3 text-sm font-semibold transition-all duration-300 hover:gap-4"
                  style={{ color: project.accent }}
                >
                  <span className="relative">
                    View Project
                    <span
                      className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover/btn:w-full"
                      style={{ backgroundColor: project.accent }}
                    />
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

// ─── Main Component ───
export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: "#070708" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: ACCENTS.coral.main }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-[150px] opacity-15"
          style={{ backgroundColor: ACCENTS.sapphire.main }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeader />

        <div ref={containerRef} className="relative px-4 md:px-8 lg:px-16 xl:px-24">
          {projects.map((project, index) => {
            const range: [number, number] = [
              index / projects.length,
              (index + 1) / projects.length,
            ];

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                progress={scrollYProgress}
                range={range}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #070708, transparent)",
        }}
      />
    </section>
  );
}
