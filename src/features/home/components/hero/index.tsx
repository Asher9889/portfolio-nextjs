import { MapPin, Layers } from "lucide-react";
import Image from "next/image";
import whatsaapIcon from "../../../../../public/whatsapp-icon.png";
import StaggerContainer from "./stagger-container.client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-screen flex flex-col items-center justify-center md:pt-24 pb-12 px-4 overflow-hidden">
      <StaggerContainer>
        <div className="mb-12">
          <a
            href="https://wa.me/9889840089"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-5 py-2.5 bg-background rounded-full shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-foreground/5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            <span className="text-sm font-light text-foreground/80">
              Say hi on
            </span>
            <Image
              src={whatsaapIcon}
              priority={true}
              alt="WhatsApp Icon"
              className="w-6 h-6 object-contain"
            />
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="opacity-50 group-hover:translate-x-0.5 transition-transform"
            >
              <path
                d="M4.5 2.5L8 6L4.5 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full opacity-70"
              style={{
                background: "linear-gradient(90deg, #E8B84B, #E8553A)",
              }}
            />
          </a>
        </div>

        <div className="w-full text-center mb-8">
          <h1 className="text-[12vw] md:text-[180px] lg:text-[220px] leading-[0.8] font-black tracking-tighter text-foreground uppercase selection:bg-foreground selection:text-background">
            SAURABH
          </h1>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 mt-4">
          <p className="text-sm md:text-lg lg:text-xl tracking-[0.3em] font-medium text-foreground/60 uppercase">
            I design and build products that
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-serif italic text-foreground tracking-tight leading-tight">
            deliver real impact.
          </h2>
        </div>
      </StaggerContainer>

      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-end w-full px-8 md:px-16  mx-auto"
      >
        <div className="flex flex-col items-start gap-2">
          <MapPin size={24} className="stroke-[1.5]" style={{ color: "#E8B84B" }} />
          <div className="text-sm md:text-base font-bold text-foreground uppercase tracking-wide">
            BASED IN KANPUR &amp; NOIDA,
            <br />
            <span className="text-foreground/40 font-medium">INDIA</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 text-right">
          <Layers size={24} className="stroke-[1.5]" style={{ color: "#E8B84B" }} />
          <div className="text-sm md:text-base font-bold text-foreground uppercase tracking-wide">
            FULL STACK DEV,
            <br />
            <span className="text-foreground/40 font-medium">&amp; Mobile Developer</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        color: 'var(--foreground)'
      }} />
    </section>
  );
}
