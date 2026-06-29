"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface ArchNode {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
}

const archNodes: ArchNode[] = [
  { id: "users", label: "Users", x: 50, y: 5, width: 14 },
  { id: "frontend", label: "Frontend", x: 50, y: 22, width: 18 },
  { id: "gateway", label: "API Gateway", x: 50, y: 39, width: 20 },
  { id: "services", label: "Services", x: 50, y: 56, width: 18 },
  { id: "database", label: "Database", x: 50, y: 73, width: 18 },
  { id: "cloud", label: "Cloud", x: 50, y: 87, width: 14 },
];

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  delay: number;
}

function useParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const idRef = useRef(0);

  const spawnParticle = useCallback((fromX: number, fromY: number, toX: number, toY: number) => {
    const id = idRef.current++;
    setParticles((prev) => [...prev, {
      id, x: fromX, y: fromY, targetX: toX, targetY: toY, progress: 0, speed: 0.02 + Math.random() * 0.02, delay: Math.random() * 500,
    }]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 2500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const fromIdx = Math.floor(Math.random() * (archNodes.length - 1));
      const from = archNodes[fromIdx];
      const to = archNodes[fromIdx + 1];
      if (from && to) {
        spawnParticle(from.x, from.y + 4, to.x, to.y - 4);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [spawnParticle]);

  return particles;
}

function ArchNodeBox({
  node, index, isInView, prefersReducedMotion,
}: {
  node: ArchNode;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={!prefersReducedMotion ? { opacity: 0, scale: 0.9 } : undefined}
      animate={isInView && !prefersReducedMotion ? { opacity: 1, scale: 1 } : undefined}
      transition={{ delay: 0.1 * index, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute z-10 flex items-center justify-center bg-w-bg border border-w-border transition-colors hover:border-w-blue/40"
      style={{
        left: `calc(${node.x}% - ${node.width / 2}%)`,
        top: `calc(${node.y}% - 14px)`,
        width: `${node.width}%`,
        height: "28px",
        borderRadius: "4px",
      }}
    >
      <span className="text-[10px] font-inter font-medium text-w-muted tracking-tight">
        {node.label}
      </span>
    </motion.div>
  );
}

export default function ArchitectureFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const particles = useParticles();

  const nodeHeights = archNodes.map((n) => n.y);

  return (
    <div
      ref={ref}
      className="relative w-full bg-w-smoke border border-w-border overflow-hidden"
      style={{ borderRadius: "8px", aspectRatio: "3/1", minHeight: "280px" }}
    >
      {/* Vertical flow lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {archNodes.slice(0, -1).map((node, i) => {
          const next = archNodes[i + 1];
          const x1 = `${node.x}%`;
          const y1 = `${node.y + 4}%`;
          const x2 = `${next.x}%`;
          const y2 = `${next.y - 4}%`;
          return (
            <g key={node.id}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d8d8d8" strokeWidth="1" opacity="0.4" />
              <line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#146ef5" strokeWidth="1.5" opacity="0.15"
                strokeDasharray="4 3"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
              </line>
            </g>
          );
        })}

        {/* Moving particles */}
        {particles.map((p) => {
          const x1 = archNodes.find((n) => n.id === "users")?.x ?? 50;
          const y1 = archNodes[0]?.y ?? 5;
          const x2 = archNodes[archNodes.length - 1]?.x ?? 50;
          const y2 = archNodes[archNodes.length - 1]?.y ?? 87;
          const px = x1 + (x2 - x1) * Math.min(p.progress, 1);
          const py = y1 + (y2 - y1) * Math.min(p.progress, 1) + 4;
          return (
            <circle
              key={p.id}
              cx={`${px}%`}
              cy={`${py}%`}
              r="2.5"
              fill="#146ef5"
              opacity={0.6}
            >
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur="2.5s"
                repeatCount="1"
              />
            </circle>
          );
        })}
      </svg>

      {/* Nodes */}
      {archNodes.map((node, i) => (
        <ArchNodeBox
          key={node.id}
          node={node}
          index={i}
          isInView={isInView}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}

      {/* Side labels */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 space-y-1 text-right">
        <div className="text-[8px] font-inter text-w-muted/40 uppercase tracking-widest leading-none">
          Request
        </div>
        <div className="text-[8px] font-inter text-w-muted/40 uppercase tracking-widest leading-none">
          Flow
        </div>
      </div>
    </div>
  );
}
