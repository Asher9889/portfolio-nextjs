"use client";

import "./AboutMe.css";
import { useRef, useState, useEffect } from "react";
import {
    motion,
    useInView,
    useReducedMotion,
} from "framer-motion";
import {
    Sparkles,
    ArrowUpRight,
    Quote,
    ChevronRight,
} from "lucide-react";
import { SiDocker, SiGit, SiGithub, SiMongodb, SiNginx, SiNodedotjs, SiNpm, SiPm2, SiReact, SiReactquery, SiRedis, SiRedux } from "react-icons/si";
import ExpertiseSection from "./ExpertiseSection";
import OrbitalTechStack from "@/features/home/components/OrbitalTechStack";

// ─── Accent Colors ───
const A = {
    gold: "#E8B84B",
    goldSoft: "rgba(232, 184, 75, 0.08)",
    goldMid: "rgba(232, 184, 75, 0.35)",
    cyan: "#22D3EE",
    cyanSoft: "rgba(34, 211, 238, 0.08)",
    rose: "#FB7185",
    roseSoft: "rgba(251, 113, 133, 0.08)",
    violet: "#A78BFA",
    text: {
        primary: "#FAFAFA",
        secondary: "rgba(250, 250, 250, 0.55)",
        muted: "rgba(250, 250, 250, 0.25)",
    },
    nodejsColor: "#5FA04E",
    redis: "#FF4438",
    react: "#61DAFB",
    redux: "#764ABC",
    mongoDB: "#47A248",
    reactQuery: "#FF4154",
    nginx: "#009639",
    docker: "#2496ED",
    pm2: "#2B037A",
    npm: "#CB3837",
    git: "#F05032",
    github: "#181717",

};



// ─── Orbiting Icons ───
function OrbitRing({ radius, duration, children, reverse = false }: any) {
    return (
        <motion.div
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className="am-orbit-ring"
        >
            <div className="am-orbit-ring-inner" style={{ width: radius * 2, height: radius * 2 }}>
                {children}
            </div>
        </motion.div>
    );
}

function OrbitIcon({ icon: Icon, angle, color }: any) {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad);
    const y = Math.sin(rad);

    return (
        <div
            className="am-orbit-icon"
            style={{
                left: `calc(50% + ${x * 100}% - 20px)`,
                top: `calc(50% + ${y * 100}% - 20px)`,
                borderColor: `${color}30`,
                backgroundColor: `${color}10`,
                transform: `rotate(${-angle}deg)`,
            }}
        >
            <Icon style={{ color }} size={16} />
        </div>
    );
}

// ─── Skill Orbit ───
function SkillOrbit() {
    return (
        <div className="am-orbit-container">
            {/* Center */}
            <div className="am-orbit-center">
                <div
                    className="am-orbit-center-inner"
                    style={{
                        borderColor: `${A.gold}40`,
                        backgroundColor: `${A.gold}10`,
                        boxShadow: `0 0 60px ${A.goldSoft}`,
                    }}
                >
                    <p className="am-orbit-center-text" style={{ color: A.gold }}>Tech Stack</p>
                </div>
            </div>

            {/* Orbits */}
            <OrbitRing radius={60} duration={14}>
                <OrbitIcon icon={SiDocker} angle={0} color={A.docker} />
                <OrbitIcon icon={SiPm2} angle={72} color={A.rose} />
                <OrbitIcon icon={SiGit} angle={144} color={A.git} />
                <OrbitIcon icon={SiGithub} angle={216} color={A.docker} />
                <OrbitIcon icon={SiNpm} angle={288} color={A.npm} />
            </OrbitRing>

            <OrbitRing radius={80} duration={20}>
                <OrbitIcon icon={SiNodedotjs} angle={0} color={A.nodejsColor} />
                <OrbitIcon icon={SiRedis} angle={120} color={A.redis} />
                <OrbitIcon icon={SiMongodb} angle={240} color={A.mongoDB} />
            </OrbitRing>

            <OrbitRing radius={110} duration={32} reverse>
                <OrbitIcon icon={SiReact} angle={0} color={A.react} />
                <OrbitIcon icon={SiRedux} angle={90} color={A.redux} />
                <OrbitIcon icon={SiReactquery} angle={180} color={A.reactQuery} />
                <OrbitIcon icon={SiNginx} angle={270} color={A.nginx} />
            </OrbitRing>

            {/* Decorative rings */}
            <div className="am-orbit-deco-ring am-orbit-deco-ring-1" />
            <div className="am-orbit-deco-ring am-orbit-deco-ring-3" />
            <div className="am-orbit-deco-ring am-orbit-deco-ring-2" />
        </div>
    );
}

// ─── Animated Counter ───
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const step = value / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref} className="font-mono">
            {count}
            {suffix}
        </span>
    );
}

// ─── Expertise Card ───
function ExpertiseCard({
    icon: Icon,
    title,
    skills,
    color,
    colorSoft,
    delay,
}: {
    icon: any;
    title: string;
    skills: string[];
    color: string;
    colorSoft: string;
    delay: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="am-expertise-card"
            style={{
                "--card-accent": color,
                "--card-accent-bg": `${color}08`,
                "--card-accent-border": `${color}25`,
                "--card-accent-icon-border": `${color}30`,
                "--card-accent-icon-bg": `${color}10`,
            } as React.CSSProperties}
        >
            <div
                className="am-expertise-card-glow"
                style={{ backgroundColor: color, opacity: 0.12 }}
            />

            <div className="relative z-10">
                <div
                    className="am-expertise-card-icon"
                    style={{
                        borderColor: `${color}30`,
                        backgroundColor: `${color}10`,
                    }}
                >
                    <Icon style={{ color }} size={20} />
                </div>

                <h4 className="am-expertise-card-title">{title}</h4>

                <div className="am-expertise-skills">
                    {skills.map((skill, i) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: delay + 0.1 * i, duration: 0.4 }}
                            className="am-expertise-skill"
                            style={{
                                "--skill-accent": color,
                            } as React.CSSProperties}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Philosophy Quote ───
function PhilosophySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const lines = [
        "I believe code is poetry —",
        "every function a verse,",
        "every architecture a story.",
        "AI isn't just automation;",
        "it's the bridge between",
        "human imagination and",
        "infinite possibility.",
    ];

    return (
        <div ref={ref} className="am-philosophy">
            <div className="am-philosophy-inner">
                {/* Quote Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="am-philosophy-quote-icon"
                    style={{ marginBottom: "2.5rem" }}
                >
                    <Quote size={48} />
                </motion.div>

                {/* Lines */}
                <div className="am-philosophy-lines">
                    {lines.map((line, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                delay: 0.2 + i * 0.12,
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="am-philosophy-line"
                            style={{
                                color: i < 2 ? "var(--am-text-primary)" : "var(--am-text-secondary)",
                            }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>

                {/* Signature */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="am-philosophy-signature"
                >
                    <div className="am-philosophy-signature-line" />
                    <span className="am-philosophy-signature-text">
                        my philosophy
                    </span>
                </motion.div>
            </div>
        </div>
    );
}

// ─── Stats ───
function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const stats = [
        { value: 12, suffix: "+", label: "Projects Delivered", color: A.gold },
        { value: 3, suffix: "+", label: "Years Experience", color: A.cyan },
        { value: 8, suffix: "+", label: "Happy Clients", color: A.rose },
        { value: 99, suffix: "%", label: "Client Satisfaction", color: A.violet },
    ];

    return (
        <div ref={ref} className="am-stats">
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="am-stat-card"
                    style={{
                        "--card-accent": stat.color,
                        "--card-accent-soft": `${stat.color}06`,
                    } as React.CSSProperties}
                >
                    <div
                        className="am-stat-value"
                        style={{ color: stat.color }}
                    >
                        <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="am-stat-label">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// ─── Hero Section ───
function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const prefersReducedMotion = useReducedMotion();

    return (
        <div
            ref={ref}
            className="am-hero"
        >
            <div className="am-hero-grid am-max-content">
                {/* Left: Text */}
                <div className="order-2 lg:order-1" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {/* Label */}
                    <motion.div
                        initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
                        animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
                        transition={{ duration: 0.6 }}
                        className="am-eyebrow"
                    >
                        <div className="am-eyebrow-line" />
                        <span style={{ color: "var(--am-gold)" }}>
                            About Me
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h2
                        initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : undefined}
                        animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="am-hero-headline"
                    >
                        <span className="am-text-white">I build</span>
                        <br />
                        <span style={{ color: "var(--am-gold)" }}>
                            intelligent
                        </span>
                        <br />
                        <span className="am-text-white">systems.</span>
                    </motion.h2>

                    {/* Role */}
                    <motion.div
                        initial={!prefersReducedMotion ? { opacity: 0 } : undefined}
                        animate={!prefersReducedMotion && isInView ? { opacity: 1 } : undefined}
                        transition={{ delay: 0.4 }}
                        className="am-hero-role"
                    >
                        <span className="am-mono-lg" style={{ color: "var(--am-cyan)" }}>
                            Full Stack Developer &bull; AI Engineer &bull; Problem Solver
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
                        animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="am-hero-description"
                    >
                        I'm a passionate developer who lives at the intersection of
                        <span style={{ color: "var(--am-gold)" }}> artificial intelligence</span> and
                        <span style={{ color: "var(--am-cyan)" }}> full-stack engineering</span>. I
                        craft scalable web applications infused with machine learning,
                        turning complex problems into elegant, intelligent solutions.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
                        animate={!prefersReducedMotion && isInView ? { opacity: 1, y: 0 } : undefined}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", paddingTop: "1rem" }}
                    >
                        <a
                            href="#contact"
                            className="am-cta-primary"
                        >
                            Let's Connect
                            <ArrowUpRight className="am-icon-arrow" size={16} />
                        </a>
                        <a
                            href="#work"
                            className="am-cta-secondary"
                        >
                            See My Work
                            <ChevronRight size={16} />
                        </a>
                    </motion.div>


                </div>

                <motion.div
                    initial={!prefersReducedMotion ? { opacity: 0, scale: 0.9 } : undefined}
                    animate={!prefersReducedMotion && isInView ? { opacity: 1, scale: 1 } : undefined}
                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="order-1 lg:order-2 flex items-center justify-center"
                >
                    <SkillOrbit />
                </motion.div>
            </div>
        </div>
    );
}

// ─── Timeline ───
function Timeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const milestones = [
        {
            year: "2023 June",
            title: "Started the Journey",
            desc: "Dove deep into full-stack development, mastering React, Node.js, and building my first production apps.",
            color: A.gold,
        },
        {
            year: "2023 December",
            title: "Postgraduate CS Journey",
            desc: "Began pursuing an M.S. in Computer Science focused on Data Structures, Algorithms, and advanced software engineering principles.",
            color: A.rose,
        },
        {
            year: "2024 November",
            title: "Frontend Engineering",
            desc: "Started building modern, scalable web applications with React, TypeScript, TanStack Query, Redux and performance-focused UI architecture.",
            color: A.cyan,
        },
        {
            year: "2025 April",
            title: "Backend Engineering",
            desc: "Built scalable backend services, REST APIs, and real-time systems using Node.js, MongoDB, Redis, and event-driven architectures.",
            color: A.rose,
        },
        {
            year: "2025 September",
            title: "Full Stack Engineering",
            desc: "Built end-to-end AI-powered platforms combining scalable backend systems, modern frontend experiences, and real-time face recognition workflows.",
            color: A.violet,
        },
        {
            year: "2025-26",
            title: "AI-First Products",
            desc: "Launched AI-powered SaaS products — face recognition systems, predictive analytics, and intelligent automation.",
            color: A.violet,
        },
        {
            year: "2025",
            title: "The Future",
            desc: "Pushing boundaries in Generative AI, real-time systems, and creating the next generation of intelligent applications.",
            color: A.gold,
        },
    ];

    return (
        <div ref={ref} className="am-timeline">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="am-timeline-header"
            >
                <div className="am-eyebrow" style={{ justifyContent: "center" }}>
                    <div className="am-eyebrow-line" style={{ backgroundColor: "var(--am-cyan)" }} />
                    <span style={{ color: "var(--am-cyan)" }}>
                        Journey
                    </span>
                    <div className="am-eyebrow-line" style={{ backgroundColor: "var(--am-cyan)" }} />
                </div>
                <h2 className="am-timeline-header-title">
                    My Path
                </h2>
            </motion.div>

            <div className="am-timeline-container">
                {/* Vertical Line */}
                <div className="am-timeline-line" />

                {milestones.map((m, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                        <motion.div
                            key={m.year}
                            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                delay: 0.15 * i,
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="am-timeline-item"
                            style={{
                                "--timeline-color": m.color,
                            } as React.CSSProperties}
                        >
                            {/* Dot */}
                            <div className="am-timeline-dot">
                                <div
                                    className="am-timeline-dot-inner"
                                    style={{
                                        borderColor: m.color,
                                        boxShadow: `0 0 12px ${m.color}40`,
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div
                                className={`am-timeline-content ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                                    }`}
                            >
                                <span
                                    className="am-timeline-year"
                                    style={{
                                        backgroundColor: `${m.color}15`,
                                        color: m.color,
                                    }}
                                >
                                    {m.year}
                                </span>
                                <h4 className="am-timeline-item-title">{m.title}</h4>
                                <p className="am-timeline-desc">{m.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

// ─── CTA Section ───
function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <div ref={ref} className="am-cta-section">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="am-cta-card"
            >
                {/* Background glow */}
                <div className="am-cta-card-glow" />

                <div className="am-cta-card-content">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="am-cta-card-icon"
                        style={{
                            borderColor: "var(--am-gold-soft)",
                            backgroundColor: "var(--am-gold-soft)",
                        }}
                    >
                        <Sparkles size={24} style={{ color: "var(--am-gold)" }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="am-cta-card-title"
                    >
                        Let's build something
                        <br />
                        <span style={{ color: "var(--am-gold)" }}>extraordinary</span> together.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="am-cta-card-desc"
                    >
                        Whether it's an AI-powered product, a scalable platform, or an
                        ambitious idea — I'm ready to bring it to life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 }}
                        className="pt-4"
                    >
                        <a
                            href="#contact"
                            className="am-cta-card-button"
                            style={{ boxShadow: "0 0 40px var(--am-gold-mid)" }}
                        >
                            Start a Conversation
                            <ArrowUpRight className="am-icon-arrow" size={16} />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

// ─── Main Component ───
export default function AboutMe() {
    return (
        <section id="about" className="am-section">
            {/* Ambient Background */}
            <div className="am-ambient">
                <div
                    className="am-grid-overlay"
                    style={{
                        opacity: 0.015,
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
                <div
                    className="am-blob"
                    style={{
                        top: "-10rem",
                        right: "-10rem",
                        width: "500px",
                        height: "500px",
                        backgroundColor: "var(--am-gold)",
                        opacity: 0.04,
                        filter: "blur(180px)",
                    }}
                />
                <div
                    className="am-blob"
                    style={{
                        bottom: "-10rem",
                        left: "-10rem",
                        width: "400px",
                        height: "400px",
                        backgroundColor: "var(--am-cyan)",
                        opacity: 0.03,
                        filter: "blur(160px)",
                    }}
                />
            </div>

            <div className="relative z-10">
                <HeroSection />
                <ExpertiseSection />

                <PhilosophySection />
                <Timeline />
            </div>
        </section>
    );
}