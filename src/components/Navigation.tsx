"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import ShinyText from './ShinyText';
import BookCallDialog from "./BookCallDialog";
import MobileNav from "./MobileNav";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { headerMenu } from "@/constants/home.constant";

const THEME_KEY = "portfolio-theme";
type Theme = "light" | "dark";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Navigation() {
  const prefersReducedMotion = useReducedMotion();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        className=" fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference text-white md:mix-blend-normal md:text-foreground transition-transform duration-500"
        animate={{ y: prefersReducedMotion ? 0 : visible ? 0 : -120 }}
        initial={{ y: prefersReducedMotion ? 0 : -120 }}
        transition={{ duration: 0.45, ease: easeOutExpo }}
      >
        {/* Logo & Title Section */}
        <motion.div
          className="flex items-center gap-4"
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
        >
          <div className="font-serif italic font-bold text-3xl tracking-tighter">
            SK
          </div>
          <div className="h-6 w-px bg-foreground/10 hidden md:block"></div>
          <div className="hidden md:flex flex-col text-[10px] font-bold tracking-wider uppercase">
            <span className="text-foreground/50 font-medium">Creative Engineer</span>
            <span className="font-medium" style={{ color: "#E8553A" }}>Building The Future</span>
          </div>
        </motion.div>

        {/* Center Nav Links (Pill) */}
        <div className="hidden md:flex items-center gap-1 bg-background shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-foreground/5 rounded-full px-2 py-1.5">
          <div className="flex items-center gap-1 px-2">
            {headerMenu.map((item, i) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={clsx(
                  "px-4 py-2 text-sm font-light rounded-full transition-colors",
                  i === 0
                    ? "text-white"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                )}
                style={i === 0 ? { backgroundColor: "#111111" } : undefined}
                whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
                transition={{ duration: 0.3, ease: easeOutExpo }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="h-5 w-px bg-foreground/10 mx-2"></div>

          <div className="flex items-center gap-4 px-2">
            <motion.button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              aria-pressed={theme === "dark"}
              className="w-10 h-10 flex items-center justify-center rounded-full transition-colors cursor-pointer"
              style={{
                border: "1px solid",
                borderColor: "#E8B84B",
                color: "#E8B84B",
              }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
              transition={{ duration: 0.3, ease: easeOutExpo }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(232,184,75,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
              }}
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
              className="hidden md:block px-6 py-2.5 text-white text-sm font-medium rounded-full transition-colors cursor-pointer"
              style={{ backgroundColor: "#222222" }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.3, ease: easeOutExpo }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#000"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#222222"; }}
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

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
          >
            <motion.span
              animate={prefersReducedMotion ? {} : { rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="flex"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </motion.button>
        </div>
      </motion.nav>

      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onBookCall={() => setBookingOpen(true)}
      />

      <BookCallDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
