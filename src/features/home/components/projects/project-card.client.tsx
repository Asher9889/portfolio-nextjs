"use client";

import { useRef, useState } from "react";
import { motion, useInView, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles, Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Video from "../Video";
import TechTag from "./tech-tag";
import { useSpotlight } from "./use-spotlight";
import type { Project } from "./project-data";

interface Props {
  project: Project;
  index: number;
  total: number;
  progress: any;
  range: [number, number];
}

export default function ProjectCard({ project, index, total, progress, range }: Props) {
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
        scale: index === total - 1 ? 1 : scale,
        opacity: index === total - 1 ? 1 : opacity,
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
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
        className="group relative overflow-hidden rounded-[2rem] border transition-all duration-700"
        style={{
          backgroundColor: "#0c0c10",
          borderColor: isHovered ? `${project.accent}30` : "rgba(255,255,255,0.06)",
          boxShadow: isHovered
            ? `0 0 80px ${project.accentSoft}, 0 25px 60px rgba(0,0,0,0.5)`
            : "0 8px 40px rgba(0,0,0,0.3)",
        }}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, ${project.accentSoft}, transparent 60%)`,
          }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
            opacity: isHovered ? 0.6 : 0.2,
          }}
        />

        <div className={`grid lg:grid-cols-12 gap-0 ${isEven ? "" : "lg:direction-rtl"}`}>
          <div className={`relative overflow-hidden lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`} style={{ minHeight: "420px" }}>
            <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 will-change-transform">
              {project.video ? (
                <Video src={project.video} />
              ) : (
                <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              )}
            </motion.div>

            <div
              className="absolute inset-0"
              style={{
                background: isEven
                  ? `linear-gradient(90deg, transparent 40%, #0c0c10 100%), linear-gradient(180deg, transparent 60%, rgba(12,12,16,0.8) 100%)`
                  : `linear-gradient(270deg, transparent 40%, #0c0c10 100%), linear-gradient(180deg, transparent 60%, rgba(12,12,16,0.8) 100%)`,
              }}
            />

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
                    style={{ backgroundColor: `${project.accent}20`, borderColor: `${project.accent}40` }}
                  >
                    <Play className="h-5 w-5 ml-0.5" style={{ color: project.accent }} fill={project.accent} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={`relative flex flex-col justify-center p-8 md:p-10 lg:p-12 lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div
              className="absolute top-4 right-6 font-mono text-[8rem] md:text-[10rem] font-bold leading-none pointer-events-none select-none"
              style={{ color: `${project.accent}08` }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="relative z-10 space-y-5">
              <div className="flex items-center gap-3 lg:hidden">
                <span className="text-xs font-mono" style={{ color: project.accent }}>{project.category}</span>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>{project.year}</span>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight"
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: project.accent }}
              >
                {project.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm md:text-base leading-relaxed max-w-md"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {project.description}
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-16 origin-left"
                style={{ backgroundColor: `${project.accent}40` }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {project.tags.map((tech, i) => (
                  <TechTag key={tech.name} tech={tech} index={i} />
                ))}
              </motion.div>

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
                      className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group/btn:w-full"
                      style={{ backgroundColor: project.accent }}
                    />
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group/btn:translate-x-0.5 group/btn:-translate-y-0.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
