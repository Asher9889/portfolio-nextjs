"use client";

import { motion } from "framer-motion";
import { MapPin, Layers } from "lucide-react";
import Image from "next/image";
import whatsaapIcon from "../../public/whatsapp-icon.png";

export default function Hero() {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Background subtle elements can go here if needed */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full max-w-6xl mx-auto z-10"
      >

        {/* Top Pill */}
        <motion.div variants={itemVariants} className="mb-12">
          <a
            href="https://wa.me/9889840089"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-black/5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            <span className="text-sm font-light text-black/80">
              Say hi on  
            </span>
            <Image
              src={whatsaapIcon}
              priority={true}
              alt="Whatsaap Icon"
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
            {/* Gradient underline */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-orange-500 opacity-80" />
          </a>
        </motion.div>

        {/* Main Name */}
        <motion.div variants={itemVariants} className="w-full text-center mb-8">
          <h1 className="text-[12vw] md:text-[180px] lg:text-[220px] leading-[0.8] font-black tracking-tighter text-[#111] uppercase selection:bg-black selection:text-white">
            SAURABH
          </h1>
        </motion.div>

        {/* Subtitles */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center space-y-4 md:space-y-6 mt-4"
        >
          <p className="text-sm md:text-lg lg:text-xl tracking-[0.3em] font-medium text-black/60 uppercase">
            I design and build products that
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-serif italic text-black tracking-tight leading-tight">
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
        {/* Left: Location */}
        <div className="flex flex-col items-start gap-2">
          <MapPin size={24} className="text-green-500 stroke-[1.5]" />
          <div className="text-sm md:text-base font-bold text-black uppercase tracking-wide">
            BASED IN KANPUR & NOIDA,
            <br />
            <span className="text-black/40 font-medium">INDIA</span>
          </div>
        </div>

        {/* Right: Role */}
        <div className="flex flex-col items-end gap-2 text-right">
          <Layers size={24} className="text-blue-500 stroke-[1.5]" />
          <div className="text-sm md:text-base font-bold text-black uppercase tracking-wide">
            FULL STACK DEV,
            <br />
            <span className="text-black/40 font-medium">& DESIGNER</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
