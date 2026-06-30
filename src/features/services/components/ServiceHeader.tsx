"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function ServiceHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const handlePop = () => setMobileOpen(false);
    window.addEventListener("popstate", handlePop);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("popstate", handlePop);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
      return pathname === href;
    },
    [pathname]
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--color-w-border)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            <Link
              href="/services"
              className="flex items-center gap-2.5 group"
            >
              <div
                className="flex items-center justify-center w-8 h-8 bg-w-text transition-colors"
                style={{ borderRadius: "4px" }}
              >
                <span className="text-xs font-bold text-w-bg font-inter">SK</span>
              </div>
              <span
                className="text-sm font-semibold font-inter tracking-tight transition-colors"
                style={{ color: isScrolled ? "var(--color-w-text)" : "var(--color-w-text)" }}
              >
                Saurabh Kushwaha
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3.5 py-2 text-sm font-inter font-medium transition-all duration-200"
                    style={{
                      color: active ? "var(--color-w-text)" : "var(--color-w-muted)",
                      borderRadius: "4px",
                    }}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="serviceNavActive"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-w-blue/50"
                        style={{ borderRadius: "1px" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium font-inter bg-w-text text-w-bg transition-all duration-200 hover:opacity-85"
                style={{ borderRadius: "4px" }}
              >
                Book a Call
                <ArrowUpRight size={12} />
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden flex items-center justify-center w-9 h-9 border border-w-border transition-colors hover:border-w-text/40"
                style={{ borderRadius: "4px" }}
                aria-label="Open menu"
              >
                <Menu size={16} className="text-w-text" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div
              className="absolute inset-0 bg-w-text/10 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-w-bg border-l border-w-border shadow-lg"
            >
              <div className="flex items-center justify-between p-5 border-b border-w-border">
                <span className="text-sm font-semibold font-inter text-w-text">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-8 h-8 border border-w-border hover:border-w-text/40 transition-colors"
                  style={{ borderRadius: "4px" }}
                  aria-label="Close menu"
                >
                  <X size={14} className="text-w-muted" />
                </button>
              </div>

              <div className="p-4 space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-sm font-inter font-medium transition-colors"
                      style={{
                        color: active ? "var(--color-w-text)" : "var(--color-w-muted)",
                        backgroundColor: active ? "var(--color-w-smoke)" : "transparent",
                        borderRadius: "4px",
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="p-4 border-t border-w-border">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium font-inter bg-w-text text-w-bg transition-all duration-200 hover:opacity-85"
                  style={{ borderRadius: "4px" }}
                >
                  Book a Call
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
