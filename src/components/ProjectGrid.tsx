// components/ProjectGrid.tsx
"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, Filter, Grid3X3, LayoutList, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  featured?: boolean;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Meridian",
    category: "SaaS",
    description: "Financial analytics platform processing $2B+ daily transactions.",
    tags: ["Next.js", "PostgreSQL"],
    image: "/projects/meridian.jpg",
    year: "2026",
    featured: true,
    color: "#0a0a0a",
  },
  {
    id: 2,
    title: "Aether",
    category: "AI",
    description: "Generative design tool for production-ready UI components.",
    tags: ["React", "OpenAI"],
    image: "/projects/aether.jpg",
    year: "2025",
    featured: true,
    color: "#1a1a2e",
  },
  {
    id: 3,
    title: "Nova",
    category: "E-Commerce",
    description: "Headless commerce with sub-100ms global latency.",
    tags: ["GraphQL", "Redis"],
    image: "/projects/nova.jpg",
    year: "2025",
    color: "#16213e",
  },
  {
    id: 4,
    title: "Prism",
    category: "SaaS",
    description: "Real-time collaborative workspace for remote teams.",
    tags: ["TypeScript", "WebRTC"],
    image: "/projects/prism.jpg",
    year: "2025",
    color: "#2d132c",
  },
  {
    id: 5,
    title: "Flux",
    category: "Mobile",
    description: "Cross-platform fitness tracking with ML-powered coaching.",
    tags: ["React Native", "TensorFlow"],
    image: "/projects/flux.jpg",
    year: "2024",
    featured: true,
    color: "#1e3a5f",
  },
  {
    id: 6,
    title: "Vanta",
    category: "AI",
    description: "Autonomous customer support with contextual reasoning.",
    tags: ["Python", "LangChain"],
    image: "/projects/vanta.jpg",
    year: "2026",
    color: "#0f3460",
  },
  {
    id: 7,
    title: "Kinetic",
    category: "E-Commerce",
    description: "Social commerce platform with live-streaming integration.",
    tags: ["Next.js", "AWS"],
    image: "/projects/kinetic.jpg",
    year: "2024",
    color: "#533483",
  },
  {
    id: 8,
    title: "Cipher",
    category: "SaaS",
    description: "Zero-knowledge encryption for enterprise file sharing.",
    tags: ["Rust", "WebAssembly"],
    image: "/projects/cipher.jpg",
    year: "2025",
    color: "#1b1b2f",
  },
  {
    id: 9,
    title: "Orbit",
    category: "Mobile",
    description: "AR navigation for indoor spaces and complex buildings.",
    tags: ["Swift", "ARKit"],
    image: "/projects/orbit.jpg",
    year: "2024",
    color: "#162447",
  },
  {
    id: 10,
    title: "Nexus",
    category: "AI",
    description: "Multi-agent orchestration system for enterprise workflows.",
    tags: ["Python", "Kubernetes"],
    image: "/projects/nexus.jpg",
    year: "2026",
    featured: true,
    color: "#1f4068",
  },
  {
    id: 11,
    title: "Pulse",
    category: "SaaS",
    description: "Infrastructure monitoring with predictive alerting.",
    tags: ["Go", "Prometheus"],
    image: "/projects/pulse.jpg",
    year: "2025",
    color: "#1b262c",
  },
  {
    id: 12,
    title: "Drift",
    category: "E-Commerce",
    description: "Sustainable marketplace with carbon-footprint tracking.",
    tags: ["Next.js", "Stripe"],
    image: "/projects/drift.jpg",
    year: "2024",
    color: "#2c3e50",
  },
];

const categories = ["All", "SaaS", "AI", "E-Commerce", "Mobile"];

// ─── Spring Config for Premium Feel ───
const springTransition = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 1.2,
};

// ─── Section Header ───
function SectionHeader({
  activeCategory,
  projectCount,
}: {
  activeCategory: string;
  projectCount: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-16 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }}
        className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-green-500"
          >
            Portfolio
          </motion.span>
          <h2 className="text-6xl font-bold tracking-tighter text-neutral-900 md:text-7xl lg:text-9xl">
            Projects
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-baseline gap-4"
        >
          <span className="font-mono text-5xl font-bold text-neutral-900">
            {String(projectCount).padStart(2, "0")}
          </span>
          <span className="text-sm uppercase tracking-wider text-neutral-400">
            {activeCategory === "All" ? "Total" : activeCategory}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Filter Bar ───
function FilterBar({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 px-6 md:px-12 lg:px-24">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
        {/* Desktop: Horizontal pills */}
        <div className="hidden md:flex items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="relative px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-neutral-900"
                // transition={springTransition}
                />
              )}
              <span
                className={`relative z-10 ${activeCategory === cat ? "text-white" : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile: Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900"
          >
            <Filter className="h-4 w-4" />
            {activeCategory}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full left-0 z-50 mt-2 w-48 rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onCategoryChange(cat);
                      setIsOpen(false);
                    }}
                    className={`w-full rounded-xl px-4 py-2.5 text-left text-sm transition-colors ${activeCategory === cat
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-600 hover:bg-neutral-50"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* View toggle (decorative for now) */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-neutral-200 p-1">
          <button className="rounded-full bg-neutral-900 p-2 text-white">
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button className="rounded-full p-2 text-neutral-400 hover:text-neutral-600">
            <LayoutList className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Project Card ───
function ProjectCard({
  project,
  index,
  layout = "normal",
}: {
  project: Project;
  index: number;
  layout?: "featured" | "normal" | "tall";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const aspectClasses = {
    featured: "aspect-[16/10] md:aspect-[16/9]",
    normal: "aspect-[4/3]",
    tall: "aspect-[3/4] md:aspect-[4/5]",
  };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.96 }
      }
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.17, 0.55, 0.55, 1],

        layout: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 1.2
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative cursor-pointer ${layout === "featured" ? "md:col-span-2" : ""}`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-200/50">
        {/* Image */}
        <div className={`relative ${aspectClasses[layout]} overflow-hidden`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes={
              layout === "featured"
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />

          {/* Overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          />

          {/* Spotlight circle on hover */}
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.4, ease: [0.17, 0.55, 0.55, 1] }}
            className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm"
          >
            <ArrowUpRight className="h-5 w-5 text-neutral-900" />
          </motion.div>

          {/* Content overlay */}
          <motion.div
            initial={false}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.17, 0.55, 0.55, 1] }}
            className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
          >
            <div className="flex items-end justify-between">
              <div>
                <p className="mb-1 font-mono text-xs uppercase tracking-wider text-white/60">
                  {project.category} — {project.year}
                </p>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom info (visible when not hovered) */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="p-5 md:hidden"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400">{project.category}</p>
              <h3 className="text-lg font-semibold text-neutral-900">
                {project.title}
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              {project.year}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

// ─── Empty State ───
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-32 text-center"
    >
      <div className="mb-4 rounded-full bg-neutral-100 p-4">
        <X className="h-6 w-6 text-neutral-400" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-900">
        No projects found
      </h3>
      <p className="mt-2 text-neutral-500">Try selecting a different category</p>
    </motion.div>
  );
}

// ─── Main Component ───
export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Determine layout pattern for visual interest
  const getLayout = (index: number, project: Project): "featured" | "normal" | "tall" => {
    if (activeCategory !== "All") return "normal";
    if (project.featured && index < 3) return "featured";
    if (index % 5 === 2) return "tall";
    return "normal";
  };

  return (
    <section className="relative bg-white py-32">
      <SectionHeader
        activeCategory={activeCategory}
        projectCount={filteredProjects.length}
      />

      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="px-6 md:px-12 lg:px-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <EmptyState key="empty" />
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  layout={getLayout(index, project)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 flex justify-center px-6"
      >
        <a
          href="#"
          className="group inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
        >
          View All Work
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
}