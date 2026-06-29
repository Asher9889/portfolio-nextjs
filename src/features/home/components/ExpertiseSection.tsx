"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    Code2,
    Brain,
    Layers,
    Zap,
    ArrowUpRight,
    Sparkles,
    Fingerprint,
    Globe,
    Database,
    Server,
    Cpu,
    Workflow,
    GitBranch,
    Box,
    Lock,
    Palette,
    MousePointerClick,
    Type,
    BarChart3,
    Flame,
    Boxes,
    Smartphone,
} from "lucide-react";

// ─── Accent Palette ───
const A = {
    gold: "#E8B84B",
    goldGlow: "rgba(232, 184, 75, 0.15)",
    cyan: "#22D3EE",
    cyanGlow: "rgba(34, 211, 238, 0.12)",
    rose: "#FB7185",
    roseGlow: "rgba(251, 113, 133, 0.12)",
    violet: "#A78BFA",
    violetGlow: "rgba(167, 139, 250, 0.12)",
    emerald: "#10B981",
    emeraldGlow: "rgba(16, 185, 129, 0.15)",
};

// ─── Skill Icons Map ───
const skillIcons: Record<string, any> = {
    React: Code2,
    "Next.js": Globe,
    "Node.js": Server,
    TypeScript: Type,
    GraphQL: Workflow,
    PostgreSQL: Database,
    MongoDB: Database,
    Redis: Flame,
    Docker: Box,
    TensorFlow: Brain,
    PyTorch: Flame,
    OpenCV: Eye,
    YOLO: Fingerprint,
    NLP: Type,
    "Computer Vision": Eye,
    "Deep Learning": Brain,
    MLOps: GitBranch,
    Microservices: Layers,
    AWS: Cloud,
    GCP: Cloud,
    "CI/CD": GitBranch,
    Kubernetes: Box,
    "System Design": Layers,
    Scalability: BarChart3,
    Security: Lock,
    "Framer Motion": Zap,
    GSAP: Flame,
    "Three.js": Box,
    WebGL: Palette,
    "D3.js": BarChart3,
    "UI/UX": Palette,
    Animation: Zap,
    "Interactive Design": MousePointerClick,
};

function Cloud({ className, style }: any) {
    return (
        <svg
            className={className}
            style={style}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    );
}

function Eye({ className, style }: any) {
    return (
        <svg
            className={className}
            style={style}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

// ─── 3D Tilt Hook ───
function useTilt(ref: React.RefObject<HTMLElement | null>, intensity = 12) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);
    const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
    const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;
            x.set(px);
            y.set(py);
        },
        [ref, x, y]
    );

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return { rotateX, rotateY, glareX, glareY, handleMouseMove, handleMouseLeave };
}

// ─── Aurora Gradient Background ───
function AuroraBackground({ color, colorGlow }: { color: string; colorGlow: string }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-[80px] animate-aurora-1"
                style={{ background: `radial-gradient(circle, ${colorGlow}, transparent 70%)` }}
            />
            <div
                className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-[80px] animate-aurora-2"
                style={{ background: `radial-gradient(circle, ${colorGlow}, transparent 70%)` }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[60px] animate-aurora-3"
                style={{ background: `radial-gradient(circle, ${colorGlow}, transparent 60%)`, opacity: 0.5 }}
            />
        </div>
    );
}

// ─── Skill Pill ───
function SkillPill({
    name,
    color,
    index,
    inView,
}: {
    name: string;
    color: string;
    index: number;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const Icon = skillIcons[name] || Sparkles;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group/pill relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-default overflow-hidden"
            style={{
                borderColor: hovered ? `${color}50` : "rgba(255,255,255,0.06)",
                backgroundColor: hovered ? `${color}12` : "rgba(255,255,255,0.03)",
            }}
        >
            {/* Shimmer on hover */}
            <div
                className="absolute inset-0 -translate-x-full group-hover/pill:translate-x-full transition-transform duration-700 pointer-events-none"
                style={{
                    background: `linear-gradient(90deg, transparent, ${color}08, transparent)`,
                }}
            />
            <Icon
                className="h-3 w-3 transition-colors duration-300"
                style={{ color: hovered ? color : "rgba(255,255,255,0.3)" }}
            />
            <span
                className="text-[11px] font-medium tracking-wide transition-colors duration-300"
                style={{ color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)" }}
            >
                {name}
            </span>
        </motion.div>
    );
}

// ─── Tilt Card ───
function TiltCard({
    icon: Icon,
    title,
    subtitle,
    skills,
    color,
    colorGlow,
    delay,
    className = "",
    size = "normal",
}: {
    icon: any;
    title: string;
    subtitle: string;
    skills: string[];
    color: string;
    colorGlow: string;
    delay: number;
    className?: string;
    size?: "normal" | "large" | "wide";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [hovered, setHovered] = useState(false);
    const { rotateX, rotateY, glareX, glareY, handleMouseMove, handleMouseLeave } = useTilt(ref, size === "large" ? 8 : 10);

    const perspective = size === "large" ? 1200 : 1000;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`${className}`}
            style={{ perspective }}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={(e) => {
                    handleMouseLeave();
                    setHovered(false);
                }}
                onMouseEnter={() => setHovered(true)}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full rounded-3xl border overflow-hidden cursor-default transition-shadow duration-500 group"
                onTransitionEnd={() => { }}
            // Using inline styles for dynamic hover shadow
            // We'll handle hover shadow via a child div instead
            >
                {/* Dynamic shadow overlay */}
                <div
                    className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none -z-10"
                    style={{
                        boxShadow: hovered
                            ? `0 20px 60px -15px ${colorGlow}, 0 0 0 1px ${color}20, inset 0 1px 0 ${color}15`
                            : `0 4px 24px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)`,
                    }}
                />

                {/* Glass base */}
                <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                        background: hovered
                            ? `linear-gradient(165deg, ${color}08 0%, rgba(255,255,255,0.01) 50%, ${color}04 100%)`
                            : `linear-gradient(165deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)`,
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                    }}
                />

                {/* Aurora */}
                <AuroraBackground color={color} colorGlow={colorGlow} />

                {/* Animated border glow */}
                <div
                    className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none"
                    style={{
                        padding: "1px",
                        background: `linear-gradient(135deg, ${hovered ? `${color}40` : `${color}08`}, transparent 50%, ${hovered ? `${color}30` : `${color}05`})`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        opacity: hovered ? 1 : 0.4,
                    }}
                />

                {/* Glare effect */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(300px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.06), transparent 60%)`,
                    }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                            <div
                                className="flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500"
                                style={{
                                    borderColor: hovered ? `${color}50` : `${color}20`,
                                    backgroundColor: hovered ? `${color}15` : `${color}08`,
                                    boxShadow: hovered ? `0 0 20px ${colorGlow}` : "none",
                                }}
                            >
                                <Icon className="h-5 w-5" style={{ color }} />
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-bold text-white tracking-tight">
                                    {title}
                                </h4>
                                <p className="text-[11px] font-medium mt-0.5" style={{ color: `${color}99` }}>
                                    {subtitle}
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg border opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                            style={{
                                borderColor: `${color}30`,
                                backgroundColor: `${color}10`,
                            }}
                        >
                            <ArrowUpRight className="h-3.5 w-3.5" style={{ color }} />
                        </div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: delay + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="h-px w-full origin-left mb-5"
                        style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }}
                    />

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {skills.map((skill, i) => (
                            <SkillPill
                                key={skill}
                                name={skill}
                                color={color}
                                index={i}
                                inView={isInView}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Main Expertise Section ───
export default function ExpertiseSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // const expertise = [
    //     {
    //         icon: Code2,
    //         title: "Full Stack Engineering",
    //         subtitle: "Modern web · APIs · Databases · Scalability",
    //         skills: ["TypeScript", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST API", "BullMQ", "Redis", "Docker", "PM2", "React", "Next.js", "TanStack Query", "React Hook Form", "Zod", "Shadcn UI", "Redux Toolkit", "Zustand"],
    //         color: A.cyan,
    //         colorGlow: A.cyanGlow,
    //     },
    //     {
    //         icon: Layers,
    //         title: "System Architecture",
    //         subtitle: "Scalable Systems · Cloud · DevOps",
    //         skills: [
    //             "System Design",
    //             "Scalability",
    //             "High Availability",
    //             "Load Balancing",
    //             "Caching",
    //             "Microservices",
    //             "Message Queues",
    //             "CI/CD",
    //             "Docker",
    //             "AWS"
    //         ],
    //         color: A.rose,
    //         colorGlow: A.roseGlow,
    //     },
    //     // {
    //     //     icon: Brain,
    //     //     title: "Artificial Intelligence",
    //     //     subtitle: "Neural networks · Computer vision · NLP",
    //     //     skills: ["MediaPipe", "NumPy", "OpenCV", "YOLO", "Insightface", "SCRFD", "ArcFace"],
    //     //     color: A.gold,
    //     //     colorGlow: A.goldGlow,
    //     // },
    //     {
    //         icon: Zap,
    //         title: "Performance",
    //         subtitle: "Optimization · Caching · Rendering",
    //         skills: [
    //             "Code Splitting",
    //             "Lazy Loading",
    //             "Memoization",
    //             "Bundle Optimization",
    //             "Image Optimization",
    //             "Caching",
    //             "Core Web Vitals"
    //         ],
    //         color: A.violet,
    //         colorGlow: A.violetGlow,
    //     },
    //     {
    //         icon: Layers,
    //         title: "Mobile Development",
    //         subtitle: "Cross-Platform · Native Integration",
    //         skills: [
    //             "React Native",
    //             "Expo",
    //             "React Navigation",
    //             "NativeWind",
    //             "AsyncStorage",
    //             "TanStack Query",
    //             "Axios",
    //             "REST API Integration",
    //             "Authentication",
    //             "Push Notifications",
    //             "Deep Linking",
    //             "Performance Optimization"
    //         ],
    //         color: A.gold,
    //         colorGlow: A.goldGlow,
    //     },


    // ];


    const expertise = [
    {
        icon: Code2,
        title: "Full Stack Engineering",
        subtitle: "Modern Web · APIs · Databases",
        skills: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "TanStack Query",
            "Redux Toolkit",
            "React Hook Form",
            "Zod",
            "Shadcn UI"
        ],
        color: A.cyan,
        colorGlow: A.cyanGlow,
    },

    {
        icon: Layers,
        title: "System Architecture",
        subtitle: "Scalable Systems · Backend · DevOps",
        skills: [
            "System Design",
            "Microservices",
            "Scalability",
            "High Availability",
            "Redis",
            "BullMQ",
            "Load Balancing",
            "Caching",
            "Docker",
            "PM2",
            "CI/CD"
        ],
        color: A.rose,
        colorGlow: A.roseGlow,
    },

    {
        icon: Zap,
        title: "Performance Engineering",
        subtitle: "Optimization · Rendering · UX",
        skills: [
            "Code Splitting",
            "Lazy Loading",
            "Rendering Optimization",
            "Bundle Optimization",
            "Image Optimization",
            "Core Web Vitals",
            "Memoization"
        ],
        color: A.violet,
        colorGlow: A.violetGlow,
    },

    {
        icon: Smartphone,
        title: "Mobile Development",
        subtitle: "Cross-Platform · Native Apps",
        skills: [
            "React Native",
            "Expo",
            "React Navigation",
            "NativeWind",
            "AsyncStorage",
            "REST API Integration",
            "Authentication",
            "TanStack Query",
            "Axios",
            "Performance Optimization"
        ],
        color: A.gold,
        colorGlow: A.goldGlow,
    },

    {
        icon: Boxes,
        title: "Engineering Practices",
        subtitle: "Architecture · Quality · Maintainability",
        skills: [
            "Component Architecture",
            "Design Patterns",
            "SOLID Principles",
            "Reusable Components",
            "State Management",
            "Error Handling",
            "Clean Code",
            "Git",
            "GitHub",
            "Agile Development"
        ],
        color: A.emerald,
        colorGlow: A.emeraldGlow,
    },
];
    return (
        <section
            ref={ref}
            className="relative py-32 md:py-40 overflow-hidden"
            style={{ backgroundColor: "#070708" }}
        >
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[180px]"
                    style={{ background: `radial-gradient(circle, ${A.goldGlow}, transparent)`, opacity: 0.3 }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full blur-[150px]"
                    style={{ background: `radial-gradient(circle, ${A.cyanGlow}, transparent)`, opacity: 0.2 }}
                />
                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="relative z-10 px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-8" style={{ background: `linear-gradient(90deg, transparent, ${A.gold})` }} />
                        <span
                            className="text-xs font-mono uppercase tracking-[0.3em]"
                            style={{ color: A.gold }}
                        >
                            Capabilities
                        </span>
                        <div className="h-px w-8" style={{ background: `linear-gradient(90deg, ${A.gold}, transparent)` }} />
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5"
                    >
                        What I{" "}
                        <span
                            className="relative inline-block"
                            style={{ color: A.gold }}
                        >
                            Craft
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 12"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <motion.path
                                    d="M2 8C40 2 100 2 198 8"
                                    stroke={A.gold}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={isInView ? { pathLength: 1 } : {}}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </svg>
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-base md:text-lg max-w-md mx-auto"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                        A fusion of engineering precision and creative intelligence.
                    </motion.p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
                    {/* AI Card — Large, spans 2 cols on lg */}
                    <TiltCard
                        {...expertise[0]}
                        delay={0.1}
                        className="lg:col-span-7 min-h-[280px]"
                        size="large"
                    />

                    {/* Full Stack — Right side */}
                    <TiltCard
                        {...expertise[1]}
                        delay={0.2}
                        className="lg:col-span-5 min-h-[280px]"
                    />

                    {/* System Architecture — Left */}
                    <TiltCard
                        {...expertise[2]}
                        delay={0.3}
                        className="lg:col-span-5 min-h-[260px]"
                    />

                    {/* Creative Dev — Wide, spans 2 cols */}
                    <TiltCard
                        {...expertise[3]}
                        delay={0.4}
                        className="lg:col-span-7 min-h-[260px]"
                        size="large"
                    />
                </div>

                {/* Bottom Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 overflow-hidden"
                >
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[
                            "React",
                            "TypeScript",
                            "Next.js",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "Docker",
                            "PM2",
                            "PyTorch",
                            "YOLO",
                            "OpenCV",
                            "SCRFD",
                            "Insightface",
                            "ArcFace",
                        ].map((tech, i) => (
                            <span
                                key={i}
                                className="mx-6 text-xs font-mono uppercase tracking-widest"
                                style={{ color: "rgba(255,255,255,0.7)" }}
                            >
                                {tech}
                                <span className="mx-6" style={{ color: "rgba(255,255,255,0.06)" }}>
                                    /
                                </span>
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Add CSS for aurora animations and marquee */}
            <style jsx>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30%, -20%) scale(1.2); }
          66% { transform: translate(-20%, 15%) scale(0.9); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25%, 20%) scale(1.1); }
          66% { transform: translate(15%, -25%) scale(1.3); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.4); }
        }
        .animate-aurora-1 {
          animation: aurora-1 8s ease-in-out infinite;
        }
        .animate-aurora-2 {
          animation: aurora-2 10s ease-in-out infinite;
        }
        .animate-aurora-3 {
          animation: aurora-3 6s ease-in-out infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
}