"use client";

import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    AnimatePresence,
} from "framer-motion";
import {
    Code2,
    Brain,
    Layers,
    Zap,
    Terminal,
    Cpu,
    Sparkles,
    ArrowUpRight,
    Quote,
    Star,
    ChevronRight,
    Braces,
    Binary,
    Globe,
    Database,
    Eye,
    GitGraph as Github,
    LucideChartColumnStacked as Linkedin,
    GitGraph as Twitter,
    Mail,
} from "lucide-react";
import { SiDocker, SiGit, SiGithub, SiMongodb, SiNginx, SiNodedotjs, SiNpm, SiPm2, SiReact, SiReactquery, SiRedis, SiRedux } from "react-icons/si";
import ExpertiseSection from "./ExpertiseSection";

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

// ─── Typewriter Hook ───
function useTypewriter(texts: string[], speed = 80, delay = 2000) {
    const [display, setDisplay] = useState("");
    const [index, setIndex] = useState(0);
    const [phase, setPhase] = useState<"typing" | "deleting" | "waiting">("typing");

    useEffect(() => {
        const text = texts[index];
        let timer: NodeJS.Timeout;

        if (phase === "typing") {
            if (display.length < text.length) {
                timer = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), speed);
            } else {
                timer = setTimeout(() => setPhase("deleting"), delay);
            }
        } else if (phase === "deleting") {
            if (display.length > 0) {
                timer = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
            } else {
                setIndex((index + 1) % texts.length);
                setPhase("typing");
            }
        }

        return () => clearTimeout(timer);
    }, [display, index, phase, texts, speed, delay]);

    return display;
}

// ─── Orbiting Icons ───
function OrbitRing({ radius, duration, children, reverse = false }: any) {
    return (
        <motion.div
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
            <div className="relative" style={{ width: radius * 2, height: radius * 2 }}>
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
            className="absolute flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-sm"
            style={{
                left: `calc(50% + ${x * 100}% - 20px)`,
                top: `calc(50% + ${y * 100}% - 20px)`,
                borderColor: `${color}30`,
                backgroundColor: `${color}10`,
                transform: `rotate(${-angle}deg)`,
            }}
        >
            <Icon className="h-4 w-4" style={{ color }} />
        </div>
    );
}

// ─── Skill Orbit ───
function SkillOrbit() {
    return (
        <div className="relative h-80 w-80 md:h-96 md:w-96 mx-auto">
            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                    className="h-20 w-20 rounded-full flex items-center justify-center border"
                    style={{
                        borderColor: `${A.gold}40`,
                        backgroundColor: `${A.gold}10`,
                        boxShadow: `0 0 60px ${A.goldSoft}`,
                    }}
                >
                    {/* <Sparkles className="h-8 w-8" style={{ color: A.gold }} /> */}
                    <p style={{ color: A.gold }} className="text-xs font-medium">Tech Stack</p>
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
            <div
                className="absolute inset-8 rounded-full border opacity-10"
                style={{ borderColor: A.gold }}
            />
            <div
                className="absolute inset-0 rounded-full border opacity-5"
                style={{ borderColor: A.gold }}
            />
            <div
                className="absolute inset-16 rounded-full border opacity-15"
                style={{ borderColor: A.gold }}
            />
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
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group rounded-2xl border p-6 md:p-8 transition-all duration-500 overflow-hidden"
            style={{
                backgroundColor: hovered ? `${color}08` : "rgba(255,255,255,0.02)",
                borderColor: hovered ? `${color}25` : "rgba(255,255,255,0.06)",
            }}
        >
            {/* Glow on hover */}
            <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: color, opacity: hovered ? 0.12 : 0 }}
            />

            <div className="relative z-10">
                <div
                    className="inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 border"
                    style={{
                        borderColor: `${color}30`,
                        backgroundColor: `${color}10`,
                    }}
                >
                    <Icon className="h-5 w-5" style={{ color }} />
                </div>

                <h4 className="text-xl font-bold text-white mb-4">{title}</h4>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: delay + 0.1 * i, duration: 0.4 }}
                            className="text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300"
                            style={{
                                borderColor: "rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.6)",
                                backgroundColor: "rgba(255,255,255,0.03)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${color}40`;
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.backgroundColor = `${color}10`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                            }}
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
        <div ref={ref} className="py-32 md:py-40 px-6 md:px-12 lg:px-20 xl:px-28">
            <div className="max-w-5xl mx-auto">
                {/* Quote Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <Quote className="h-12 w-12" style={{ color: A.gold }} />
                </motion.div>

                {/* Lines */}
                <div className="space-y-2">
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
                            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                            style={{
                                color: i < 2 ? A.text.primary : A.text.secondary,
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
                    className="mt-12 flex items-center gap-4"
                >
                    <div className="h-px w-12" style={{ backgroundColor: A.gold }} />
                    <span className="text-sm font-mono" style={{ color: A.gold }}>
            // my philosophy
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
        <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-6 md:px-12 lg:px-20 xl:px-28 py-20"
        >
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-2xl border p-6 md:p-8 text-center group"
                    style={{
                        backgroundColor: "rgba(255,255,255,0.02)",
                        borderColor: "rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${stat.color}30`;
                        e.currentTarget.style.backgroundColor = `${stat.color}06`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                    }}
                >
                    <div
                        className="text-3xl md:text-4xl font-bold mb-2"
                        style={{ color: stat.color }}
                    >
                        <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs md:text-sm font-medium" style={{ color: A.text.secondary }}>
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
    const typewriterText = useTypewriter(
        ["Full Stack Developer", "AI Engineer", "Problem Solver", "Creative Technologist"],
        90,
        1800
    );

    return (
        <div
            ref={ref}
            className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 xl:px-28 pt-20"
        >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto">
                {/* Left: Text */}
                <div className="order-2 lg:order-1 space-y-6">
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3"
                    >
                        <div className="h-px w-8" style={{ backgroundColor: A.gold }} />
                        <span
                            className="text-xs font-mono uppercase tracking-[0.25em]"
                            style={{ color: A.gold }}
                        >
                            About Me
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
                    >
                        <span className="text-white">I build</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] via-[#F0D78C] to-[#E8B84B]">
                            intelligent
                        </span>
                        <br />
                        <span className="text-white">systems.</span>
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="h-8 flex items-center"
                    >
                        <span className="text-lg font-mono" style={{ color: A.cyan }}>
                            {typewriterText}
                            <span className="animate-pulse ml-0.5">|</span>
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-base md:text-lg leading-relaxed max-w-lg"
                        style={{ color: A.text.secondary }}
                    >
                        I'm a passionate developer who lives at the intersection of
                        <span style={{ color: A.gold }}> artificial intelligence</span> and
                        <span style={{ color: A.cyan }}> full-stack engineering</span>. I
                        craft scalable web applications infused with machine learning,
                        turning complex problems into elegant, intelligent solutions.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-wrap items-center gap-4 pt-4"
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: A.gold }}
                        >
                            Let's Connect
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-300 hover:bg-white/5"
                            style={{
                                borderColor: "rgba(255,255,255,0.15)",
                                color: "rgba(255,255,255,0.7)",
                            }}
                        >
                            See My Work
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.9 }}
                        className="flex items-center gap-3 pt-4"
                    >
                        {[
                            { icon: Github, href: "#" },
                            { icon: Linkedin, href: "#" },
                            { icon: Twitter, href: "#" },
                            { icon: Mail, href: "#" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110"
                                style={{
                                    borderColor: "rgba(255,255,255,0.1)",
                                    color: "rgba(255,255,255,0.4)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = `${A.gold}50`;
                                    e.currentTarget.style.color = A.gold;
                                    e.currentTarget.style.backgroundColor = `${A.gold}10`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }}
                            >
                                <social.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Right: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
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
        <div ref={ref} className="px-6 md:px-12 lg:px-20 xl:px-28 py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-6" style={{ backgroundColor: A.cyan }} />
                    <span
                        className="text-xs font-mono uppercase tracking-[0.25em]"
                        style={{ color: A.cyan }}
                    >
                        Journey
                    </span>
                    <div className="h-px w-6" style={{ backgroundColor: A.cyan }} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    My Path
                </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto relative">
                {/* Vertical Line */}
                <div
                    className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                />

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
                            className={`relative flex items-start gap-6 md:gap-0 mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                                <div
                                    className="h-3 w-3 rounded-full border-2"
                                    style={{
                                        borderColor: m.color,
                                        backgroundColor: "#070708",
                                        boxShadow: `0 0 12px ${m.color}40`,
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div
                                className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                                    }`}
                            >
                                <span
                                    className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-2"
                                    style={{
                                        backgroundColor: `${m.color}15`,
                                        color: m.color,
                                    }}
                                >
                                    {m.year}
                                </span>
                                <h4 className="text-lg font-bold text-white mb-1">{m.title}</h4>
                                <p className="text-sm" style={{ color: A.text.secondary }}>
                                    {m.desc}
                                </p>
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
        <div ref={ref} className="px-6 md:px-12 lg:px-20 xl:px-28 py-32">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative max-w-4xl mx-auto text-center rounded-3xl border p-12 md:p-16 overflow-hidden"
                style={{
                    backgroundColor: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.06)",
                }}
            >
                {/* Background glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
                    style={{ backgroundColor: A.gold, opacity: 0.08 }}
                />

                <div className="relative z-10 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center justify-center h-14 w-14 rounded-full border mb-4"
                        style={{
                            borderColor: `${A.gold}30`,
                            backgroundColor: `${A.gold}10`,
                        }}
                    >
                        <Sparkles className="h-6 w-6" style={{ color: A.gold }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Let's build something
                        <br />
                        <span style={{ color: A.gold }}>extraordinary</span> together.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-base md:text-lg max-w-lg mx-auto"
                        style={{ color: A.text.secondary }}
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
                            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: A.gold,
                                boxShadow: `0 0 40px ${A.goldMid}`,
                            }}
                        >
                            Start a Conversation
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        <section
            id="about"
            className="relative overflow-hidden"
            style={{ backgroundColor: "#070708" }}
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
                <div
                    className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[180px]"
                    style={{ backgroundColor: A.gold, opacity: 0.04 }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[160px]"
                    style={{ backgroundColor: A.cyan, opacity: 0.03 }}
                />
            </div>

            <div className="relative z-10">
                <HeroSection />
                <Stats />
                <ExpertiseSection />

                <PhilosophySection />
                <Timeline />
                {/* <CTASection /> */}
            </div>
        </section>
    );
}