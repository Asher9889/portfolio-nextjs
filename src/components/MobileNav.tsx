"use client";

import { Sun, Moon, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { headerMenu } from "@/constants/home.constant";
import ShinyText from "./ShinyText";

type Theme = "light" | "dark";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onBookCall: () => void;
}

export default function MobileNav({
  open,
  onClose,
  theme,
  onToggleTheme,
  onBookCall,
}: MobileNavProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: easeOutExpo }}
          className="fixed inset-0 z-50 md:hidden"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-[300px] sm:w-[360px] bg-[#0a0a0f] border-l border-white/10 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="font-serif italic font-bold text-xl tracking-tighter text-white">
                  SK
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/30 font-mono">
                  Menu
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-3">
              <nav className="flex flex-col gap-1">
                {headerMenu.map((item, i) => {
                  const href = `/${item.toLowerCase()}`;
                  const isActive = pathname === href || (href === "/home" && pathname === "/");

                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, ease: easeOutExpo }}
                    >
                      <Link
                        href={href}
                        onClick={onClose}
                        className={clsx(
                          "flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200",
                          isActive
                            ? "text-white bg-white/8 border border-white/10"
                            : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-[0.625rem] font-semibold tracking-wider text-white/15 w-5 text-right">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </span>
                        {isActive && (
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "#E8B84B" }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="p-6 border-t border-white/5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/30 font-mono tracking-[0.1em] uppercase">
                  Appearance
                </span>
                <motion.button
                  type="button"
                  onClick={onToggleTheme}
                  aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-colors cursor-pointer"
                  style={{
                    border: "1px solid #E8B84B",
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
              </div>

              <motion.button
                type="button"
                onClick={() => {
                  onClose();
                  onBookCall();
                }}
                className="w-full px-6 py-3 text-white text-sm font-medium rounded-full transition-colors cursor-pointer"
                style={{ backgroundColor: "#222222" }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.3, ease: easeOutExpo }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#222222";
                }}
              >
                <ShinyText
                  text="Book a Call"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
