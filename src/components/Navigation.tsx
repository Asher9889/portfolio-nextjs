"use client";

import React from "react";
import { Sun, Command } from "lucide-react";
import clsx from "clsx";
import ShinyText from './ShinyText';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference text-white md:mix-blend-normal md:text-foreground">
      {/* Logo & Title Section */}
      <div className="flex items-center gap-4">
        <div className="font-serif italic font-bold text-3xl tracking-tighter">
          SK
        </div>
        <div className="h-6 w-px bg-black/10 hidden md:block"></div>
        <div className="hidden md:flex flex-col text-[10px] font-bold tracking-wider uppercase">
          <span className="text-black/50 font-medium">Creative Engineer</span>
          <span className="text-green-500 font-medium">Building The Future</span>
        </div>
      </div>

      {/* Center Nav Links (Pill) */}
      <div className="hidden md:flex items-center gap-1 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-black/5 rounded-full px-2 py-1.5">
        <div className="flex items-center gap-1 px-2">
          {["Home", "About", "Work", "Blogs"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={clsx(
                "px-4 py-2 text-sm font-light rounded-full transition-colors",
                i === 0
                  ? "bg-[#111111] text-white"
                  : "text-black/60 hover:text-black hover:bg-black/5"
              )}
            >
              {item}
            </a>
          ))}
          <a
            href="#more"
            className="px-4 py-2 text-sm font-light text-black/60 hover:text-black hover:bg-black/5 rounded-full flex items-center gap-1"
          >
            More
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50"
            >
              <path
                d="M2.5 3.5L5 6L7.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="h-5 w-px bg-black/10 mx-2"></div>

        <div className="flex items-center gap-4 px-2">

          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
            <Sun size={18} />
          </button>

          <button className="hidden md:block px-6 py-2.5 bg-[#222222] text-white text-sm font-medium rounded-full hover:bg-black transition-colors cursor-pointer">
            <ShinyText
              text="✨ Book a Call"
              speed={2}
              delay={0}
              // color="#b5b5b5"
              // color="#F2F0F0"

              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={true}
              disabled={false}
            />
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* <button className="hidden md:block px-6 py-2.5 bg-[#222222] text-white text-sm font-medium rounded-full hover:bg-black transition-colors">
          Book a Call
        </button> */}
        <button className="w-11 h-11 flex items-center justify-center bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-black/5 rounded-full hover:bg-gray-50 transition-colors text-black/70">
          <Command size={18} />
        </button>
      </div>
    </nav>
  );
}
