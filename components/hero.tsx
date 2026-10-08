"use client";

import { useTyping } from "@/hooks/use-typing";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowRight, Download, Mail, Terminal, Code, ShieldCheck, Trophy, Volume2, VolumeX } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { sounds } from "@/lib/sound-effects";
import { useState } from "react";
import { useTerminal } from "@/components/terminal-provider";

export function Hero() {
  const { openTerminal, openCertificate } = useTerminal();
  const typedTitle = useTyping(PERSONAL_INFO.titles, 80, 35, 1700);
  const [audioActive, setAudioActive] = useState(sounds.enabled);

  const handleDownloadResume = () => {
    sounds.playSuccess();
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#3B82F6", "#8B5CF6", "#A855F7", "#10B981"],
    });
  };

  const toggleSound = () => {
    const en = sounds.toggleSound();
    setAudioActive(en);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-grid-pattern"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-emerald-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Floating Telemetry Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Roles & Projects</span>
          </div>

          {/* Microsoft Azure Badge */}
          <button
            onClick={() => {
              sounds.playClick();
              openCertificate("cert-microsoft-azure-fundamentals");
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold hover:bg-blue-500/10 transition-all cursor-pointer shadow-lg"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Microsoft Azure Certified</span>
          </button>

          {/* Podar Startupthon 2K26 Badge */}
          <button
            onClick={() => {
              sounds.playClick();
              openCertificate("cert-podar-startupthon-2026");
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold hover:bg-amber-500/10 transition-all cursor-pointer shadow-lg"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Podar Startupthon 2K26 Finalist</span>
          </button>

          {/* Interactive Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white text-xs font-mono transition-all"
            title="Toggle futuristic audio synthesizer"
          >
            {audioActive ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="text-[11px]">{audioActive ? "SFX: ON" : "SFX: OFF"}</span>
          </button>
        </motion.div>

        {/* Big Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-4 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text-primary underline decoration-purple-500/40 underline-offset-8">
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

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-sm sm:text-lg text-slate-300 leading-relaxed mb-8 sm:mb-10 font-normal px-2"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* CTA Buttons + Terminal Launcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16 w-full max-w-md sm:max-w-none px-4"
        >
          <a
            href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadResume}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>

          {/* Interactive HUD / Terminal Button */}
          <button
            onClick={() => {
              sounds.playPowerUp();
              openTerminal();
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 hover:border-emerald-400 font-mono text-sm shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <Terminal className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Launch HUD (Ctrl+K)</span>
          </button>

          <a
            href="#projects"
            onClick={() => sounds.playClick()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white font-medium text-sm hover:bg-white/10 border border-white/15 transition-all transform hover:-translate-y-0.5"
          >
            <Code className="w-4 h-4 text-blue-400" />
            View Projects
          </a>

          <a
            href="#contact"
            onClick={() => sounds.playClick()}
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
            { label: "Credentials & Honors", value: "Microsoft & Podar" },
            { label: "Completed Projects", value: PERSONAL_INFO.projectsCompleted },
            { label: "GitHub Commits", value: PERSONAL_INFO.codeCommits },
            { label: "Cloud & AI Stack", value: "Azure + AWS + RAG" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl text-center border border-white/5 hover:border-purple-500/30 transition-all"
            >
              <div className="text-xl sm:text-2xl font-extrabold gradient-text-primary mb-1">
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
