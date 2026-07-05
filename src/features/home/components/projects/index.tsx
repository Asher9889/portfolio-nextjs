"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeader from "./section-header";
import ProjectCard from "./project-card.client";
import { projects, ACCENTS } from "./project-data";

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
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
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
                total={projects.length}
                progress={scrollYProgress}
                range={range}
              />
            );
          })}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #070708, transparent)",
        }}
      />
    </section>
  );
}
