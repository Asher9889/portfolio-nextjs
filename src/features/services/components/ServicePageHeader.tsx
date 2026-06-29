// components/navigation/ServicePageHeader.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ─── Types ─────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: { label: string; href: string; description?: string; icon?: React.ReactNode }[];
}

interface ServicePageHeaderProps {
  logo?: React.ReactNode;
  brandName?: string;
  ctaText?: string;
  ctaHref?: string;
  transparentOnTop?: boolean;
}

// ─── Constants ─────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { 
        label: 'Full Stack Development', 
        href: '/services/full-stack',
        description: 'Scalable web apps with Next.js, React & Node.js'
      },
      { 
        label: 'AI Integration', 
        href: '/services/ai-integration',
        description: 'Intelligent systems & ML-powered solutions'
      },
      { 
        label: 'Real-time Systems', 
        href: '/services/realtime',
        description: 'WebRTC, WebSockets & LiveKit implementations'
      },
      { 
        label: 'Mobile Development', 
        href: '/services/mobile',
        description: 'Cross-platform apps with React Native'
      },
      { 
        label: 'Backend Architecture', 
        href: '/services/backend',
        description: 'Node.js, Redis, BullMQ & MongoDB solutions'
      },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

// ─── Sub-Components ────────────────────────────────────────────────────

function Logo({ brandName = 'YourName' }: { brandName?: string }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Geometric mark */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-400/20 to-purple-500/20 border border-white/10 group-hover:border-amber-400/30 transition-colors duration-300" />
        <div className="relative w-4 h-4">
          <div className="absolute top-0 left-0 w-2 h-2 bg-amber-400 rounded-sm" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 rounded-sm" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white/60 rounded-sm" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white/40 rounded-sm" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-sm font-bold text-white tracking-tight leading-none">
          {brandName}
        </span>
        <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] leading-none mt-1">
          Engineer
        </span>
      </div>
    </Link>
  );
}

function MegaMenu({ 
  items, 
  isOpen, 
  onClose 
}: { 
  items: NavItem['children']; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!items) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 z-50 mt-4"
          >
            <div className="mx-auto max-w-5xl">
              <div className="rounded-2xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/5 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/10 to-purple-500/10 border border-white/5 flex items-center justify-center group-hover:border-amber-400/20 transition-colors">
                          <span className="text-amber-400/80 text-lg">
                            {item.icon || getServiceIcon(item.label)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white/90 group-hover:text-amber-400 transition-colors">
                              {item.label}
                            </span>
                            <svg 
                              className="w-3.5 h-3.5 text-white/20 group-hover:text-amber-400/60 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          {item.description && (
                            <p className="text-xs text-white/40 mt-1 leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom bar */}
                <div className="px-6 py-3 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/30">
                    {items.length} services available
                  </span>
                  <Link 
                    href="/services" 
                    onClick={onClose}
                    className="text-xs text-amber-400/80 hover:text-amber-400 flex items-center gap-1 transition-colors"
                  >
                    View all services
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function getServiceIcon(label: string): React.ReactNode {
  const icons: Record<string, string> = {
    'Full Stack Development': '⚡',
    'AI Integration': '🧠',
    'Real-time Systems': '📡',
    'Mobile Development': '📱',
    'Backend Architecture': '⚙️',
  };
  return icons[label] || '→';
}

function MobileMenu({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
          
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-[320px] bg-[#0a0a0f] border-l border-white/10 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="text-sm font-medium text-white/60">Menu</span>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex-1 overflow-y-auto py-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.children ? (
                      <MobileAccordion item={item} pathname={pathname} onNavigate={onClose} />
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center justify-between px-6 py-3 text-sm transition-colors ${
                          pathname === item.href
                            ? 'text-amber-400 bg-amber-400/5'
                            : 'text-white/60 hover:text-white hover:bg-white/[0.02]'
                        }`}
                      >
                        {item.label}
                        {pathname === item.href && (
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        )}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-white/5">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium text-sm hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-amber-400/20"
                >
                  Start a Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileAccordion({ 
  item, 
  pathname, 
  onNavigate 
}: { 
  item: NavItem; 
  pathname: string;
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasActiveChild = item.children?.some((c) => pathname === c.href);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-6 py-3 text-sm transition-colors ${
          hasActiveChild
            ? 'text-amber-400 bg-amber-400/5'
            : 'text-white/60 hover:text-white'
        }`}
      >
        <span>{item.label}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-4 h-4 text-white/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-white/[0.01]"
          >
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className={`block px-10 py-2.5 text-xs transition-colors ${
                  pathname === child.href
                    ? 'text-amber-400'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────

export default function ServicePageHeader({
  brandName = 'YourName',
  ctaText = 'Start a Project',
  ctaHref = '/contact',
  transparentOnTop = true,
}: ServicePageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  // Close mega menu on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mega menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleMegaMenuToggle = useCallback((label: string) => {
    setActiveMegaMenu((prev) => (prev === label ? null : label));
  }, []);

  const isTransparent = transparentOnTop && !isScrolled && !activeMegaMenu;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Logo brandName={brandName} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                const hasMegaMenu = !!item.children;

                return (
                  <div key={item.href} className="relative">
                    {hasMegaMenu ? (
                      <button
                        onClick={() => handleMegaMenuToggle(item.label)}
                        className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive || activeMegaMenu === item.label
                            ? 'text-amber-400 bg-amber-400/5'
                            : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                        }`}
                      >
                        {item.label}
                        <motion.svg
                          animate={{ rotate: activeMegaMenu === item.label ? 180 : 0 }}
                          className="w-3.5 h-3.5 opacity-50"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-400 rounded-full"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-amber-400 bg-amber-400/5'
                            : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-400 rounded-full"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Status indicator */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] text-white/40 font-medium">Available for work</span>
              </div>

              {/* CTA Button */}
              <Link
                href={ctaHref}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 hover:-translate-y-0.5"
              >
                {ctaText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu for Services */}
        <MegaMenu
          items={NAV_ITEMS.find((i) => i.label === 'Services')?.children}
          isOpen={activeMegaMenu === 'Services'}
          onClose={() => setActiveMegaMenu(null)}
        />
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}

// ─── Alternative: Minimal Header Variant ───────────────────────────────

export function MinimalHeader({
  brandName = 'YourName',
  ctaText = 'Hire Me',
  ctaHref = '/contact',
}: ServicePageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-lg tracking-tight">
            {brandName}
          </Link>
          
          <Link
            href={ctaHref}
            className="px-5 py-2 rounded-full border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

// ─── Breadcrumb Header for Service Detail Pages ────────────────────────

export function ServiceBreadcrumbHeader({
  serviceName,
  serviceCategory,
}: {
  serviceName: string;
  serviceCategory: string;
}) {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0f] border-b border-white/[0.06]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.06),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <nav className="flex items-center gap-2 text-sm text-white/30 mb-6">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white/60">{serviceName}</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {serviceCategory}
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
              {serviceName}
            </h1>
          </div>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20 w-fit"
          >
            Discuss this project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}