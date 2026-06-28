'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'framer-motion';


interface TechNode {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'realtime' | 'queue';
  orbitRadius: number;
  orbitDuration: number;
  orbitDirection: 1 | -1;
  startAngle: number;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

interface OrbitRing {
  radius: number;
  opacity: number;
  dashArray?: string;
}


const TECH_STACK: TechNode[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    orbitRadius: 140,
    orbitDuration: 25,
    orbitDirection: 1,
    startAngle: 0,
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.3)',
    icon: <NextJSIcon />,
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    orbitRadius: 140,
    orbitDuration: 25,
    orbitDirection: 1,
    startAngle: 120,
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.3)',
    icon: <ReactIcon />,
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'frontend',
    orbitRadius: 140,
    orbitDuration: 25,
    orbitDirection: 1,
    startAngle: 240,
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.3)',
    icon: <MobileIcon />,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    orbitRadius: 200,
    orbitDuration: 35,
    orbitDirection: -1,
    startAngle: 45,
    color: '#68A063',
    glowColor: 'rgba(104, 160, 99, 0.3)',
    icon: <NodeIcon />,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    orbitRadius: 200,
    orbitDuration: 35,
    orbitDirection: -1,
    startAngle: 165,
    color: '#47A248',
    glowColor: 'rgba(71, 162, 72, 0.3)',
    icon: <DatabaseIcon />,
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    orbitRadius: 200,
    orbitDuration: 35,
    orbitDirection: -1,
    startAngle: 285,
    color: '#DC382D',
    glowColor: 'rgba(220, 56, 45, 0.3)',
    icon: <RedisIcon />,
  },
  {
    id: 'bullmq',
    name: 'BullMQ',
    category: 'queue',
    orbitRadius: 260,
    orbitDuration: 45,
    orbitDirection: 1,
    startAngle: 90,
    color: '#E19E48',
    glowColor: 'rgba(225, 158, 72, 0.3)',
    icon: <QueueIcon />,
  },
  {
    id: 'livekit',
    name: 'LiveKit',
    category: 'realtime',
    orbitRadius: 260,
    orbitDuration: 45,
    orbitDirection: 1,
    startAngle: 210,
    color: '#6E56CF',
    glowColor: 'rgba(110, 86, 207, 0.3)',
    icon: <VideoIcon />,
  },
  {
    id: 'webrtc',
    name: 'WebRTC',
    category: 'realtime',
    orbitRadius: 260,
    orbitDuration: 45,
    orbitDirection: 1,
    startAngle: 330,
    color: '#FF9800',
    glowColor: 'rgba(255, 152, 0, 0.3)',
    icon: <SignalIcon />,
  },
  {
    id: 'websockets',
    name: 'WebSockets',
    category: 'realtime',
    orbitRadius: 320,
    orbitDuration: 55,
    orbitDirection: -1,
    startAngle: 30,
    color: '#FF6B6B',
    glowColor: 'rgba(255, 107, 107, 0.3)',
    icon: <SocketIcon />,
  },
];

const ORBIT_RINGS: OrbitRing[] = [
  { radius: 140, opacity: 0.15, dashArray: '4 4' },
  { radius: 200, opacity: 0.1, dashArray: '2 6' },
  { radius: 260, opacity: 0.08 },
  { radius: 320, opacity: 0.05, dashArray: '1 8' },
];

const CATEGORY_COLORS: Record<string, string> = {
  frontend: '#61DAFB',
  backend: '#68A063',
  database: '#47A248',
  realtime: '#FF9800',
  queue: '#E19E48',
};

// ─── SVG Icons ─────────────────────────────────────────────────────────

function NextJSIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.021 3.509-.0026 3.3802-.0026 3.5162-.0366 3.6168-.061.182-.151.2836-.2834.3882-.1611.1287-.3362.2007-.6319.2382-.1368.0182-1.7488.0236-4.3392.0236H5.647l-.1447-.0684a.963.963 0 0 1-.3278-.2928c-.145-.1984-.1465-.2027-.1667-1.1608-.012-1.1622-.012-11.1294 0-12.2916.0202-.9581.0217-.9624.1667-1.1608.0886-.1212.1919-.2284.3278-.2928l.1447-.0684h4.6052c2.6425 0 4.6084.0054 4.732.0122.257.0139.4786.1222.6319.3066.1287.1554.2035.3704.2183.6308.0026 3.365.0026 3.5162.021 3.509 1.412-1.759 2.3624-2.9405 2.3784-2.9405.0173 0 .853 1.2103 1.8593 2.6896l1.8569 2.6895 2.4047 3.556 2.4047 3.556.1983-.2834c1.088-1.5537 1.9774-2.831 1.9774-2.8403 0-.0074-3.4797-5.1655-7.732-11.4615l-7.732-11.4615-.098-.0236z" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.338.773-1.375 3.684-.061 7.365 1.338 3.684 3.624 6.388 5.126 6.388.49 0 .912-.142 1.242-.425 1.402-1.191 2.43-3.045 3.853-5.197l.084-.128c1.397-2.128 2.522-3.982 3.997-5.197.317-.262.621-.375.933-.375.312 0 .616.113.933.375 1.475 1.215 2.6 3.07 3.997 5.197l.084.128c1.423 2.152 2.45 4.006 3.853 5.197.33.283.752.425 1.242.425 1.502 0 3.788-2.704 5.126-6.388 1.314-3.681 1.277-6.592-.061-7.365-.323-.185-.696-.278-1.106-.278-1.345 0-3.107.95-4.887 2.602-1.78-1.662-3.542-2.622-4.888-2.622zm-7.282 3.53a.78.78 0 0 0-.093.193c-.162.443-.234 1.02-.234 1.65 0 1.377.424 2.692 1.215 3.795.252.356.5.69.747 1.01l.248.315c.13.165.26.325.39.48.06.073.12.143.18.212.12.14.24.274.36.404.12.13.24.255.36.375.12.12.24.235.36.345.12.11.24.215.36.315.12.1.24.195.36.285.12.09.24.175.36.255.12.08.24.155.36.225.12.07.24.135.36.195.12.06.24.115.36.165.12.05.24.095.36.135.12.04.24.075.36.105.12.03.24.055.36.075.12.02.24.035.36.045.12.01.24.015.36.015.12 0 .24-.005.36-.015.12-.01.24-.025.36-.045.12-.02.24-.045.36-.075.12-.03.24-.065.36-.105.12-.04.24-.085.36-.135.12-.05.24-.105.36-.165.12-.06.24-.125.36-.195.12-.07.24-.145.36-.225.12-.08.24-.165.36-.255.12-.09.24-.185.36-.285.12-.1.24-.205.36-.315.12-.11.24-.225.36-.345.12-.12.24-.245.36-.375.12-.13.24-.264.36-.404.06-.07.12-.14.18-.212.13-.155.26-.315.39-.48l.248-.315c.247-.32.495-.654.747-1.01.791-1.103 1.215-2.418 1.215-3.795 0-.63-.072-1.207-.234-1.65a.78.78 0 0 0-.093-.193c-.03-.052-.063-.1-.1-.143a.785.785 0 0 0-.193-.18c-.052-.04-.108-.075-.168-.105a.78.78 0 0 0-.193-.075c-.06-.02-.123-.035-.188-.045a.78.78 0 0 0-.195-.015c-.06 0-.12.005-.18.015a.78.78 0 0 0-.188.045c-.06.02-.118.045-.173.075a.785.785 0 0 0-.158.105.785.785 0 0 0-.143.143.78.78 0 0 0-.1.168c-.03.06-.055.123-.075.188a.78.78 0 0 0-.03.195c0 .06.005.12.015.18.02.065.045.128.075.188.03.06.065.115.105.168.04.052.085.1.143.143.058.043.12.08.188.11.068.03.14.053.215.068.075.015.153.023.233.023.08 0 .158-.008.233-.023.075-.015.147-.038.215-.068.068-.03.13-.067.188-.11.058-.043.103-.09.143-.143.04-.053.075-.108.105-.168.03-.06.055-.123.075-.188.01-.06.015-.12.015-.18a.78.78 0 0 0-.03-.195c-.02-.065-.045-.128-.075-.188a.78.78 0 0 0-.1-.168.785.785 0 0 0-.143-.143.785.785 0 0 0-.158-.105c-.055-.03-.113-.055-.173-.075a.78.78 0 0 0-.188-.045c-.06-.01-.12-.015-.18-.015a.78.78 0 0 0-.195.015c-.065.01-.128.025-.188.045a.78.78 0 0 0-.193.075c-.06.03-.116.065-.168.105a.785.785 0 0 0-.193.18c-.037.043-.07.09-.1.143z" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.002 0C5.375 0 0 5.373 0 12.002c0 6.627 5.375 12.002 12.002 12.002 6.627 0 12.002-5.375 12.002-12.002C24.004 5.373 18.629 0 12.002 0zm4.74 17.821c-1.358.252-2.216-.06-2.968-.576-.188-.125-.358-.27-.518-.42-.06-.056-.118-.114-.174-.174-.456-.48-.836-1.046-1.156-1.656-.32-.61-.578-1.264-.77-1.946-.192-.682-.318-1.39-.376-2.116-.058-.726-.046-1.464.034-2.196.08-.732.232-1.452.452-2.148.22-.696.508-1.364.856-1.992.348-.628.756-1.214 1.216-1.744.46-.53.97-.998 1.52-1.396.55-.398 1.138-.724 1.754-.97.616-.246 1.258-.41 1.916-.488.658-.078 1.328-.068 1.984.03.656.098 1.296.276 1.904.528.608.252 1.184.578 1.712.968.528.39 1.008.844 1.424 1.348.416.504.766 1.058 1.04 1.648.274.59.47 1.214.58 1.856.11.642.132 1.298.066 1.946-.066.648-.21 1.284-.428 1.896-.218.612-.51 1.198-.866 1.744-.356.546-.776 1.048-1.248 1.496-.472.448-.992.842-1.548 1.174-.556.332-1.146.6-1.758.8-.612.2-1.244.33-1.884.388-.64.058-1.286.044-1.92-.042z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function RedisIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.716 0c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15zm-7.866 0c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15zm-7.866 0c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15zm15.732 6.45c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15zm-7.866 0c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15zm-7.866 0c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15zm15.732 6.45c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15zm-7.866 0c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15zm-7.866 0c-1.18 0-2.15.97-2.15 2.15 0 1.18.97 2.15 2.15 2.15 1.18 0 2.15-.97 2.15-2.15 0-1.18-.97-2.15-2.15-2.15z" />
    </svg>
  );
}

function QueueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M17 10l-2 2-2-2" />
      <path d="M17 14l-2-2-2 2" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}

function SocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

// ─── Sub-Components ────────────────────────────────────────────────────

function OrbitRingSVG({ radius, opacity, dashArray }: OrbitRing) {
  return (
    <circle
      cx="0"
      cy="0"
      r={radius}
      fill="none"
      stroke="rgba(255, 255, 255, 0.1)"
      strokeWidth="1"
      strokeDasharray={dashArray}
      opacity={opacity}
      className="pointer-events-none"
    />
  );
}

function ConnectionLines({ nodes, hoveredNode }: { nodes: TechNode[]; hoveredNode: string | null }) {
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number; opacity: number }>>([]);

  useAnimationFrame((time) => {
    const newLines: typeof lines = [];
    
    nodes.forEach((nodeA, i) => {
      nodes.forEach((nodeB, j) => {
        if (i >= j) return;
        
        const angleA = (nodeA.startAngle + (time / 1000 / nodeA.orbitDuration) * 360 * nodeA.orbitDirection) * (Math.PI / 180);
        const angleB = (nodeB.startAngle + (time / 1000 / nodeB.orbitDuration) * 360 * nodeB.orbitDirection) * (Math.PI / 180);
        
        const x1 = Math.cos(angleA) * nodeA.orbitRadius;
        const y1 = Math.sin(angleA) * nodeA.orbitRadius;
        const x2 = Math.cos(angleB) * nodeB.orbitRadius;
        const y2 = Math.sin(angleB) * nodeB.orbitRadius;
        
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
          const isHighlighted = hoveredNode === nodeA.id || hoveredNode === nodeB.id;
          const opacity = isHighlighted 
            ? 0.4 * (1 - distance / maxDistance)
            : 0.08 * (1 - distance / maxDistance);
          
          newLines.push({ x1, y1, x2, y2, opacity });
        }
      });
    });
    
    setLines(newLines);
  });

  return (
    <g className="pointer-events-none">
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="0.5"
          opacity={line.opacity}
        />
      ))}
    </g>
  );
}

function TechNodeComponent({
  node,
  time,
  isHovered,
  onHover,
  onLeave,
}: {
  node: TechNode;
  time: number;
  isHovered: boolean;
  onHover: (id: string) => void;
  onLeave: () => void;
}) {
  const angle = (node.startAngle + (time / 1000 / node.orbitDuration) * 360 * node.orbitDirection) * (Math.PI / 180);
  const x = Math.cos(angle) * node.orbitRadius;
  const y = Math.sin(angle) * node.orbitRadius;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Glow effect */}
      <circle
        r={isHovered ? 28 : 20}
        fill={node.glowColor}
        opacity={isHovered ? 0.6 : 0.3}
        className="transition-all duration-300"
        style={{ filter: `blur(${isHovered ? 12 : 8}px)` }}
      />
      
      {/* Node circle */}
      <motion.circle
        r={isHovered ? 24 : 18}
        fill="rgba(15, 15, 20, 0.9)"
        stroke={node.color}
        strokeWidth={isHovered ? 2 : 1}
        className="cursor-pointer transition-all duration-300"
        onMouseEnter={() => onHover(node.id)}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.15 }}
      />
      
      {/* Icon */}
      <g
        className="pointer-events-none"
        style={{ color: node.color, transform: 'translate(-10px, -10px)' }}
      >
        {node.icon}
      </g>
      
      {/* Label - only show on hover or for inner orbits */}
      {(isHovered || node.orbitRadius <= 200) && (
        <motion.text
          y={isHovered ? -30 : -25}
          textAnchor="middle"
          fill={isHovered ? node.color : 'rgba(255, 255, 255, 0.6)'}
          fontSize={isHovered ? 12 : 10}
          fontWeight={isHovered ? 600 : 400}
          className="pointer-events-none select-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: isHovered ? -30 : -25 }}
          transition={{ duration: 0.2 }}
        >
          {node.name}
        </motion.text>
      )}
    </g>
  );
}

function CategoryLegend() {
  const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'realtime', label: 'Real-time' },
    { key: 'queue', label: 'Queue' },
  ] as const;

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 flex-wrap justify-center">
      {categories.map((cat) => (
        <div key={cat.key} className="flex items-center gap-1.5">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: CATEGORY_COLORS[cat.key], boxShadow: `0 0 6px ${CATEGORY_COLORS[cat.key]}` }}
          />
          <span className="text-[10px] text-white/40 uppercase tracking-wider">{cat.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────

export default function OrbitalTechStack() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [time, setTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useAnimationFrame((t) => {
    setTime(t);
  });

  const handleHover = useCallback((id: string) => setHoveredNode(id), []);
  const handleLeave = useCallback(() => setHoveredNode(null), []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const scale = Math.min(dimensions.width, dimensions.height) / 750;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[500px] overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, rgba(20, 20, 30, 0.5) 0%, transparent 70%)' }}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`-${centerX} -${centerY} ${dimensions.width} ${dimensions.height}`}
        className="absolute inset-0"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 200, 100, 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Center glow */}
        <circle cx="0" cy="0" r={80 * scale} fill="url(#centerGlow)" />

        {/* Center hub */}
        <g className="pointer-events-none">
          <circle
            cx="0"
            cy="0"
            r={45 * scale}
            fill="rgba(15, 15, 20, 0.95)"
            stroke="rgba(255, 200, 100, 0.3)"
            strokeWidth="1"
          />
          <text
            x="0"
            y="-8"
            textAnchor="middle"
            fill="rgba(255, 200, 100, 0.9)"
            fontSize={14 * scale}
            fontWeight="600"
            className="select-none"
          >
            Tech Stack
          </text>
          <text
            x="0"
            y={12}
            textAnchor="middle"
            fill="rgba(255, 255, 255, 0.4)"
            fontSize={10 * scale}
            className="select-none"
          >
            {TECH_STACK.length} Technologies
          </text>
        </g>

        {/* Orbit rings */}
        <g opacity={0.6}>
          {ORBIT_RINGS.map((ring, i) => (
            <OrbitRingSVG
              key={i}
              radius={ring.radius * scale}
              opacity={ring.opacity}
              dashArray={ring.dashArray}
            />
          ))}
        </g>

        {/* Connection lines between nodes */}
        <ConnectionLines nodes={TECH_STACK} hoveredNode={hoveredNode} />

        {/* Tech nodes */}
        <g style={{ transform: `scale(${scale})` }}>
          {TECH_STACK.map((node) => (
            <TechNodeComponent
              key={node.id}
              node={node}
              time={time}
              isHovered={hoveredNode === node.id}
              onHover={handleHover}
              onLeave={handleLeave}
            />
          ))}
        </g>
      </svg>

      {/* Category legend */}
      <CategoryLegend />

      {/* Ambient particles */}
      <AmbientParticles count={20} />
    </div>
  );
}

// ─── Ambient Particles ─────────────────────────────────────────────────

function AmbientParticles({ count }: { count: number }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
  ).current;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ─── Optional: Compact Version for smaller spaces ──────────────────────

export function CompactTechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      key: 'frontend',
      label: 'Frontend',
      items: TECH_STACK.filter((t) => t.category === 'frontend'),
    },
    {
      key: 'backend',
      label: 'Backend & Queue',
      items: TECH_STACK.filter((t) => t.category === 'backend' || t.category === 'queue'),
    },
    {
      key: 'database',
      label: 'Data Layer',
      items: TECH_STACK.filter((t) => t.category === 'database'),
    },
    {
      key: 'realtime',
      label: 'Real-time',
      items: TECH_STACK.filter((t) => t.category === 'realtime'),
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-3">
        {categories.map((cat) => (
          <motion.div
            key={cat.key}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
            onHoverStart={() => setActiveCategory(cat.key)}
            onHoverEnd={() => setActiveCategory(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: CATEGORY_COLORS[cat.key],
                    boxShadow: `0 0 8px ${CATEGORY_COLORS[cat.key]}`,
                  }}
                />
                <span className="text-sm font-medium text-white/80">{cat.label}</span>
              </div>
              <span className="text-xs text-white/30">{cat.items.length}</span>
            </div>
            
            <motion.div
              className="overflow-hidden"
              initial={false}
              animate={{ height: activeCategory === cat.key ? 'auto' : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.05]"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span style={{ color: item.color }}>{item.icon}</span>
                    <span className="text-xs text-white/70">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}