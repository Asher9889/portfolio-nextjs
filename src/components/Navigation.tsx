"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import ShinyText from './ShinyText';
import BookCallDialog from "./BookCallDialog";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";

const THEME_KEY = "portfolio-theme";
type Theme = "light" | "dark";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Navigation() {
  const prefersReducedMotion = useReducedMotion();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const visible = useNavbarVisibility();

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme = savedTheme === "dark" || savedTheme === "light"
      ? (savedTheme as Theme)
      : prefersDark
        ? "dark"
        : "light";

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(THEME_KEY, nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(currentTheme);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference text-white md:mix-blend-normal md:text-foreground transition-transform duration-500"
        animate={{ y: prefersReducedMotion ? 0 : visible ? 0 : -120 }}
        initial={{ y: prefersReducedMotion ? 0 : -120 }}
        transition={{ duration: 0.45, ease: easeOutExpo }}
      >
        {/* Logo & Title Section */}
        <motion.div
          className="flex items-center gap-4"
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="font-serif italic font-bold text-3xl tracking-tighter">
            SK
          </div>
          <div className="h-6 w-px bg-black/10 hidden md:block"></div>
          <div className="hidden md:flex flex-col text-[10px] font-bold tracking-wider uppercase">
            <span className="text-black/50 font-medium">Creative Engineer</span>
            <span className="text-green-500 font-medium">Building The Future</span>
          </div>
        </motion.div>

        {/* Center Nav Links (Pill) */}
        <div className="hidden md:flex items-center gap-1 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-black/5 rounded-full px-2 py-1.5">
          <div className="flex items-center gap-1 px-2">
            {["Home", "About", "Work"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={clsx(
                  "px-4 py-2 text-sm font-light rounded-full transition-colors",
                  i === 0
                    ? "bg-[#111111] text-white"
                    : "text-black/60 hover:text-black hover:bg-black/5"
                )}
                whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="h-5 w-px bg-black/10 mx-2"></div>

          <div className="flex items-center gap-4 px-2">
            <motion.button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              aria-pressed={theme === "dark"}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer dark:hover:bg-blue-500/10"
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                animate={prefersReducedMotion ? {} : { rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
                className="flex"
              >
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.span>
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="hidden md:block px-6 py-2.5 bg-[#222222] text-white text-sm font-medium rounded-full hover:bg-black transition-colors cursor-pointer"
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ShinyText
                text="✨ Book a Call"
                speed={2}
                delay={0}
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={true}
                disabled={false}
              />
            </motion.button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3" />
      </motion.nav>

      <BookCallDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
