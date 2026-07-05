"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Layers } from "lucide-react";
import Image from "next/image";
import whatsaapIcon from "../../../../public/whatsapp-icon.png";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section className="relative min-h-[75vh] lg:min-h-screen flex flex-col items-center justify-center  md:pt-24 pb-12 px-4 overflow-hidden">
      <motion.div
        variants={!prefersReducedMotion ? containerVariants : undefined}
        initial={!prefersReducedMotion ? "hidden" : undefined}
        animate={!prefersReducedMotion ? "visible" : undefined}
        className="flex flex-col items-center w-full max-w-6xl mx-auto z-10"
      >

        {/* Top Pill */}
        <motion.div variants={itemVariants} className="mb-12">
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
              xmlns="http://www.w3.org/2000/svg"
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
        </motion.div>

        {/* Main Name */}
        <motion.div variants={itemVariants} className="w-full text-center mb-8">
          <h1 className="text-[12vw] md:text-[180px] lg:text-[220px] leading-[0.8] font-black tracking-tighter text-foreground uppercase selection:bg-foreground selection:text-background">
            SAURABH
          </h1>
        </motion.div>

        {/* Subtitles */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center space-y-4 md:space-y-6 mt-4"
        >
          <p className="text-sm md:text-lg lg:text-xl tracking-[0.3em] font-medium text-foreground/60 uppercase">
            I design and build products that
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-serif italic text-foreground tracking-tight leading-tight">
            deliver real impact.
          </h2>
        </motion.div>
      </motion.div>

      {/* Bottom Information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 px-8 md:px-16 flex justify-between items-end w-full max-w-350 mx-auto"
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
      </motion.div>

       <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        color: 'var(--foreground)'
      }} />
    </section>
  );
}
