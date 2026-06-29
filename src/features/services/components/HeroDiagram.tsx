"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
}

const nodes: Node[] = [
  { id: "website", label: "Website", x: 15, y: 22 },
  { id: "api", label: "API", x: 50, y: 18 },
  { id: "database", label: "Database", x: 82, y: 22 },
  { id: "analytics", label: "Analytics", x: 15, y: 72 },
  { id: "ai", label: "AI", x: 50, y: 76 },
  { id: "mobile", label: "Mobile App", x: 82, y: 72 },
];

const connections: [string, string][] = [
  ["website", "api"],
  ["api", "database"],
  ["website", "analytics"],
  ["api", "ai"],
  ["database", "mobile"],
  ["api", "mobile"],
  ["ai", "mobile"],
  ["analytics", "ai"],
];

function AnimatedLine({
  x1, y1, x2, y2, progress, isActive,
}: {
  x1: number; y1: number; x2: number; y2: number;
  progress: number; isActive: boolean;
}) {
  const cx1 = x1 + (x2 - x1) * 0.4;
  const cy1 = y1;
  const cx2 = x2 - (x2 - x1) * 0.4;
  const cy2 = y2;
  const d = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;

  return (
    <g>
      <path d={d} fill="none" stroke="#d8d8d8" strokeWidth="1" opacity="0.3" />
      <path
        d={d}
        fill="none"
        stroke="#146ef5"
        strokeWidth="1.5"
        opacity={isActive ? 0.7 : 0.2}
        strokeDasharray="6 4"
        strokeDashoffset={-progress * 100}
        style={{ transition: "opacity 0.4s" }}
      />
      <circle r="2" fill="#146ef5" opacity={isActive ? 0.8 : 0.3}>
        <animateMotion dur="3s" repeatCount="indefinite" path={d} />
      </circle>
    </g>
  );
}

function FloatingCard({
  node, mouseX, mouseY, containerRef, isActive, onHover, onLeave,
}: {
  node: Node;
  mouseX: number; mouseY: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 100, h: 36 });

  useEffect(() => {
    if (!cardRef.current) return;
    const obs = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
      }
    });
    obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (mouseX - cx) / rect.width;
    const dy = (mouseY - cy) / rect.height;
    const strength = 8;
    setPos({ x: dx * strength * (node.x / 50 - 1), y: dy * strength * (node.y / 50 - 1) });
  }, [mouseX, mouseY, containerRef, node.x, node.y]);

  const left = `calc(${node.x}% - ${size.w / 2}px)`;
  const top = `calc(${node.y}% - ${size.h / 2}px)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.5 }}
      className="absolute z-10 flex items-center gap-2 px-3 py-2 bg-w-bg border transition-all duration-300 cursor-default select-none"
      style={{
        left, top,
        borderRadius: "6px",
        borderColor: isActive ? "#146ef5" : "#d8d8d8",
        boxShadow: isActive ? "0 0 0 1px rgba(20,110,245,0.15), 0 4px 12px rgba(0,0,0,0.04)" : "0 2px 6px rgba(0,0,0,0.03)",
      }}
    >
      <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? "bg-w-blue" : "bg-w-border"}`} />
      <span className={`text-xs font-medium font-inter transition-colors duration-300 ${isActive ? "text-w-text" : "text-w-muted"}`}>
        {node.label}
      </span>
    </motion.div>
  );
}

export default function HeroDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p + 0.5) % 100), 80);
    return () => clearInterval(t);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const connectedNodes = (id: string): string[] => {
    const connected: string[] = [];
    for (const [a, b] of connections) {
      if (a === id) connected.push(b);
      if (b === id) connected.push(a);
    }
    return connected;
  };

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setActiveNode(null); setMousePos({ x: 0, y: 0 }); }}
      className="relative w-full aspect-[4/3] max-h-[420px]"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {connections.map(([from, to], i) => {
          const a = nodeMap.get(from);
          const b = nodeMap.get(to);
          if (!a || !b) return null;
          const active = activeNode && (connectedNodes(activeNode).includes(from) || connectedNodes(activeNode).includes(to) || activeNode === from || activeNode === to);
          return (
            <AnimatedLine
              key={`${from}-${to}`}
              x1={a.x / 100 * 100} y1={a.y / 100 * 100}
              x2={b.x / 100 * 100} y2={b.y / 100 * 100}
              progress={progress + i * 20}
              isActive={!!active}
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <FloatingCard
          key={node.id}
          node={node}
          mouseX={mousePos.x}
          mouseY={mousePos.y}
          containerRef={containerRef}
          isActive={!!activeNode && (activeNode === node.id || connectedNodes(activeNode).includes(node.id))}
          onHover={() => setActiveNode(node.id)}
          onLeave={() => setActiveNode(null)}
        />
      ))}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-w-muted/50 font-inter">
        <span className="w-2 h-[1px] bg-w-border" />
        hover to trace data flow
        <span className="w-2 h-[1px] bg-w-border" />
      </div>
    </div>
  );
}
