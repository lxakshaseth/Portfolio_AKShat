"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Menu, X, FileText, Sparkles, Code2, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sounds } from "@/lib/sound-effects";
import { useTerminal } from "@/components/terminal-provider";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { openTerminal } = useTerminal();
  const { scrollPosition } = useScrollPosition();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleResize);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 py-2.5 rounded-full transition-all duration-300 ${
          scrollPosition > 40
            ? "glass-pill shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border border-white/10"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="#home"
          onClick={() => sounds.playClick()}
          className="flex items-center gap-2 text-base sm:text-lg font-bold text-white tracking-tight group shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform shrink-0">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="gradient-text-primary text-base sm:text-xl font-extrabold tracking-wider whitespace-nowrap">
            {PERSONAL_INFO.name}
            <span className="text-purple-400 font-mono text-xs sm:text-sm pl-1">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-white/5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => sounds.playClick()}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-full shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* HUD Button & Resume & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick HUD Terminal Button */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => {
                sounds.playPowerUp();
                openTerminal();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-slate-900/90 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/40 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              title="Launch Developer HUD Terminal (Ctrl+K)"
            >
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              <span className="hidden sm:inline">HUD</span>
              <kbd className="hidden md:inline px-1 py-0.2 rounded bg-slate-800 text-[10px] text-slate-300">⌘K</kbd>
            </button>

          <a
            href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all transform hover:scale-105 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            suppressHydrationWarning
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-full bg-slate-800/80 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40 lg:hidden pointer-events-auto"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto absolute top-16 inset-x-4 max-w-md mx-auto bg-slate-900/95 backdrop-blur-2xl p-6 rounded-2xl border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-3 lg:hidden z-50"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-1">
                <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" /> Navigation
                </span>
                <span className="text-xs text-purple-400 font-mono">Akshat.dev</span>
              </div>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    sounds.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-purple-600/30 text-white border border-purple-500/40"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setMobileMenuOpen(false);
                  openTerminal();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-emerald-400 font-mono text-xs border border-emerald-500/30"
              >
                <Terminal className="w-4 h-4" /> Open Developer HUD (Ctrl+K)
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                }}
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <FileText className="w-4 h-4" /> Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
