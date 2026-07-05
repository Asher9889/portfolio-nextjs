import { SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, SiTensorflow, SiOpencv, SiTailwindcss, SiRedis, SiGraphql, SiAlmalinux as SiAmazon, SiYolo, SiPython, SiLivekit, SiN8N } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

export interface Tech {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

export interface Project {
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

export const ACCENTS = {
  coral: { main: "#E8553A", soft: "rgba(232, 85, 58, 0.12)", glow: "rgba(232, 85, 58, 0.25)" },
  emerald: { main: "#34D399", soft: "rgba(52, 211, 153, 0.12)", glow: "rgba(52, 211, 153, 0.25)" },
  sapphire: { main: "#60A5FA", soft: "rgba(96, 165, 250, 0.12)", glow: "rgba(96, 165, 250, 0.25)" },
};

export const projects: Project[] = [
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
