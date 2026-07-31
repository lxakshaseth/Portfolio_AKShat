"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Menu, X, FileText, Sparkles, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          className="flex items-center gap-2 text-lg font-bold text-white tracking-tight group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="gradient-text-primary text-xl font-extrabold tracking-wider">
            {PERSONAL_INFO.name}
            <span className="text-purple-400 font-mono text-sm pl-1">.dev</span>
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
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
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

        {/* Resume Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all transform hover:scale-105 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            suppressHydrationWarning
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-full bg-slate-800/80 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="pointer-events-auto absolute top-16 inset-x-4 max-w-md mx-auto glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-3 lg:hidden z-50"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-1">
              <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> Navigation
              </span>
              <span className="text-xs text-purple-400 font-mono">Akshat Portfolio</span>
            </div>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-purple-600/30 text-white border border-purple-500/40"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
