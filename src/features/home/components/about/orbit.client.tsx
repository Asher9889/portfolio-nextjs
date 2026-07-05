"use client";

import { motion } from "framer-motion";
import { SiDocker, SiGit, SiGithub, SiMongodb, SiNginx, SiNodedotjs, SiNpm, SiPm2, SiReact, SiReactquery, SiRedis, SiRedux } from "react-icons/si";

const A = {
  gold: "#E8B84B",
  goldSoft: "rgba(232, 184, 75, 0.08)",
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
  rose: "#FB7185",
};

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

export default function SkillOrbit() {
  return (
    <div className="am-orbit-container">
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

      <div className="am-orbit-deco-ring am-orbit-deco-ring-1" />
      <div className="am-orbit-deco-ring am-orbit-deco-ring-3" />
      <div className="am-orbit-deco-ring am-orbit-deco-ring-2" />
    </div>
  );
}
