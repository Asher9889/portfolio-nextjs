import "../AboutMe.css";
import AboutHero from "./about-hero.client";
import PhilosophySection from "./philosophy.client";
import Timeline from "./timeline.client";
import ExpertiseSection from "../ExpertiseSection";
import OrbitalTechStack from "../OrbitalTechStack";

export default function AboutMe() {
  return (
    <section id="about" className="am-section">
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
        <AboutHero />
        <ExpertiseSection />
        <PhilosophySection />
        <Timeline />
      </div>
    </section>
  );
}
