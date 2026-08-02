"use client";

import { useTyping } from "@/hooks/use-typing";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowRight, Download, Mail, Sparkles, Terminal, Code, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export function Hero() {
  const typedTitle = useTyping(PERSONAL_INFO.titles, 90, 40, 1800);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#3B82F6", "#8B5CF6", "#A855F7"],
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-grid-pattern"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-6 shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for New Projects & Roles</span>
        </motion.div>

        {/* Big Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text-primary underline decoration-purple-500/30 underline-offset-8">
            {PERSONAL_INFO.name}
          </span>
        </motion.h1>

        {/* Animated Typing Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="min-h-[3.5rem] sm:min-h-[4rem] flex items-center justify-center text-lg sm:text-3xl md:text-4xl font-bold font-mono text-slate-200 mb-6 text-center"
        >
          <Terminal className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-purple-400 inline-block shrink-0" />
          <span>{typedTitle}</span>
          <span className="w-2.5 h-6 sm:w-3 sm:h-8 bg-purple-400 ml-1 sm:ml-1.5 animate-pulse rounded-sm shrink-0" />
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-sm sm:text-lg text-slate-400 leading-relaxed mb-8 sm:mb-10 font-normal px-2"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16 w-full max-w-xs sm:max-w-none px-4"
        >
          <a
            href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadResume}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white font-medium text-sm hover:bg-white/10 border border-white/15 transition-all transform hover:-translate-y-0.5"
          >
            <Code className="w-4 h-4 text-blue-400" />
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 text-purple-400 border border-purple-500/30 font-medium text-sm hover:bg-purple-500/10 transition-all transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            Hire Me
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Quick Ticker / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {[
            { label: "Years Experience", value: PERSONAL_INFO.yearsExperience },
            { label: "Completed Projects", value: PERSONAL_INFO.projectsCompleted },
            { label: "GitHub Commits", value: PERSONAL_INFO.codeCommits },
            { label: "AWS & AI Stack", value: "Production Ready" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl text-center border border-white/5 hover:border-purple-500/20 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
