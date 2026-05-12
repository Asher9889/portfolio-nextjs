"use client";


import aiImage from "@/../public/ai-project.png";

import {
  SiReact,
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
} from "react-icons/si";

import { FaReact } from "react-icons/fa";



import { TbBrandFramerMotion } from "react-icons/tb";


import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight, Layers, ExternalLink } from "lucide-react";
import Video from "./Video";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: { name: string; icon: React.ComponentType, color?: string }[];
  image: string | StaticImageData;
  color: string;
  year: string;
  link?: string;
  video?: string;
}

const projects: Project[] = [
  {
    id: 5,
    title: "Face Vision",
    subtitle: "AI-Powered Real-Time Face Recognition & Attendance Intelligence System",
    description:
      "Enterprise-grade AI surveillance and attendance platform for real-time face recognition, employee tracking, automated attendance, unknown visitor monitoring, and operational analytics across CCTV camera networks.",
    // tags: ["React.js", "TanStack Query", "ShadCN UI", "TypeScript", "Node.js", "MongoDB", "OpenCV", "TensorFlow"],
    tags: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "LiveKit", icon: SiLivekit, color: "#000" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Yolo", icon: SiYolo, color: "#111F68" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    image: aiImage, // Replace with your images
    color: "#47A248",
    video: "https://res.cloudinary.com/saurabhbackend/video/upload/vc_vp9/v1778603722/portfolio/ngnpj9mbgbxfzhtcv4zt.webm",
    // video: "https://res.cloudinary.com/saurabhbackend/video/upload/sp_auto/v1778603722/portfolio/ngnpj9mbgbxfzhtcv4zt.m3u8",

    year: "2026",
    link: "#",
  },
  {
    id: 2,
    title: "Aether",
    subtitle: "AI Design System",
    description:
      "Generative design tool that transforms natural language prompts into production-ready UI components. 50+ enterprise teams onboarded.",
    tags: [
     { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "OpenAI", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
    ],
    image: "https://plus.unsplash.com/premium_photo-1778134471869-54d3df1db7a3?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#16213e",
    year: "2025",
    link: "#",
  },
  {
    id: 3,
    title: "Nova",
    subtitle: "E-Commerce Platform",
    description:
      "Headless commerce solution with sub-100ms global latency. Handles 10M+ SKUs with intelligent inventory forecasting.",
    tags: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "GraphQL", icon: SiGraphql, color: "#E53544" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "AWS", icon: SiAmazon, color: "#232F3E" },
    ],
    image: "https://images.unsplash.com/photo-1778431193240-72e7d9c4cd38?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#16213e",
    year: "2025",
    link: "#",
  },
];

// ─── Section Header ───
function SectionHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }}
        className="flex items-end justify-between border-b border-neutral-200 pb-8"
      >
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-green-500"
          >
            Selected Work
          </motion.span>
          <h2 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-7xl lg:text-8xl">
            Projects
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="hidden md:flex items-center gap-2 text-sm text-neutral-500"
        >
          <Layers className="h-4 w-4" />
          <span className="font-mono">{String(projects.length).padStart(2, "0")} Projects</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Project Card ───
function ProjectCard({ project, index, progress, range }: {
  project: Project;
  index: number;
  progress: any;
  range: [number, number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-20%" });
  const [isHovered, setIsHovered] = useState(false);

  // Scale down as user scrolls past (stacked effect)
  const scale = useTransform(progress, range, [1, 0.92]);
  const opacity = useTransform(progress, range, [1, 0.9]);
  const y = useTransform(progress, range, [0, -30]);

  // Parallax for the image
  const imageY = useTransform(progress, range, [0, 50]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity: index === projects.length - 1 ? 1 : opacity,
        y,
        top: `${index * 20}px`,
      }}
      className="sticky mb-8 w-full will-change-transform"
    >
      <motion.article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-neutral-100"
      >
        <div className="grid lg:grid-cols-2">
          {/* ─── Image Side ─── */}
          <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 lg:aspect-auto lg:min-h-150">
            <motion.div style={{ y: imageY }} className="absolute inset-0 will-change-transform">
              {/* <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              /> */}
              <Video  src={project.video}  />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="absolute top-6 left-6"
            >
              <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-xs font-mono font-medium text-neutral-900 backdrop-blur-sm">
                {project.year}
              </span>
            </motion.div>

            {/* Hover view button */}
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl backdrop-blur-sm">
                <ArrowUpRight className="h-6 w-6 text-neutral-900" />
              </div>
            </motion.div>
          </div>

          {/* ─── Content Side ─── */}
          <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
            <div>
              {/* Index number */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="mb-6 block font-mono text-7xl font-bold text-neutral-100 select-none"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-2 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl"
              >
                {project.title}
              </motion.h3>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="mb-6 text-lg font-medium text-neutral-400"
              >
                {project.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-8 max-w-md text-base leading-relaxed text-neutral-500"
              >
                {project.description}
              </motion.p>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                 <div className="flex flex-wrap items-center gap-3">
                {project.tags.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="group/icon flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50  transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-lg"
                      >
                        <Icon
                          className="h-5 w-5 transition-transform duration-300 group-hover/icon:scale-110"
                          style={{ color: tech.color }}
                        />
                    </div>
                  );
                })}
              </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-12"
            >
              <a
                href={project.link}
                className="group/btn inline-flex items-center gap-3 text-sm font-semibold text-neutral-900 transition-colors hover:text-neutral-600"
              >
                <span className="relative">
                  View Case Study
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 group-hover/btn:w-full" />
                </span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </motion.div>
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
    <section className="relative bg-neutral-50 py-32">
      <SectionHeader />

      <div ref={containerRef} className="relative px-6 md:px-12 lg:px-24">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.03;
          const range: [number, number] = [index / projects.length, (index + 1) / projects.length];

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

      {/* Bottom spacing */}
      <div className="h-6" />
    </section>
  );
}