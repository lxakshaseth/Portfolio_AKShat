"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { PERSONAL_INFO, EDUCATION, ACHIEVEMENTS } from "@/data/portfolio";
import { GraduationCap, Award, MapPin, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { sounds } from "@/lib/sound-effects";

export function About() {
  const [activeTab, setActiveTab] = useState<"summary" | "education" | "achievements">("summary");

  return (
    <section id="about" className="py-24 px-4 relative max-w-6xl mx-auto">
      <SectionHeading
        badge="About Me"
        title="Engineering Modern Scalable Web & AI Systems"
        subtitle="Passionate developer dedicated to clean code, modular architecture, and sleek user experience."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Profile Summary Card */}
        <div className="lg:col-span-5">
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-3xl font-extrabold text-white mb-6 shadow-xl">
              AK
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">{PERSONAL_INFO.name}</h3>
            <p className="text-purple-400 font-mono text-xs font-semibold mb-4">
              {PERSONAL_INFO.role}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 bg-slate-900/60 py-2 px-3 rounded-lg border border-white/5">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {PERSONAL_INFO.about}
            </p>

            <div className="space-y-2.5 border-t border-white/10 pt-4">
              {[
                "Microsoft Certified: Azure Fundamentals",
                "Podar Startupthon 2K26 Grand Finale Finalist",
                "Podar Hackfest 2026 Certificate of Achievement",
                "Full Stack Microservices (Next.js, Node.js, Express, Redis, MongoDB)",
                "Cloud & DevOps Architecture (Azure, AWS EC2, S3, Docker, Nginx)",
                "AI Engineering & Hybrid RAG Pipelines (LangGraph, ChromaDB, OpenAI)"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right Interactive Tabbed Info */}
        <div className="lg:col-span-7 space-y-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 p-1.5 glass-panel rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setActiveTab("summary");
              }}
              suppressHydrationWarning
              className={`flex-1 min-w-[85px] sm:min-w-[110px] py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "summary"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Overview
            </button>

            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setActiveTab("education");
              }}
              suppressHydrationWarning
              className={`flex-1 min-w-[85px] sm:min-w-[110px] py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "education"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </button>

            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setActiveTab("achievements");
              }}
              suppressHydrationWarning
              className={`flex-1 min-w-[85px] sm:min-w-[110px] py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "achievements"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              Achievements
            </button>
          </div>

          {/* Tab Content Display */}
          <GlassCard className="min-h-[300px]">
            {activeTab === "summary" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  Engineering Philosophy
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I believe exceptional software is defined by three core pillars: scalability,maintainability,and delightful user experience. Every system I build uses strict TypeScript typing, atomic component separation, and robust automated test suites.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-xs text-purple-400 font-mono font-bold block mb-1">FRONTEND</span>
                    <p className="text-xs text-slate-300">Server Components, Framer Motion, Responsive UI design.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-xs text-blue-400 font-mono font-bold block mb-1">BACKEND & CLOUD</span>
                    <p className="text-xs text-slate-300">Node REST/GraphQL, Redis, Docker, AWS infrastructure.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-purple-500/40">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 border-2 border-slate-950" />
                    <span className="text-xs font-mono text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-500/10">
                      {edu.period}
                    </span>
                    <h5 className="text-base font-bold text-white mt-1">{edu.degree}</h5>
                    <p className="text-xs text-slate-400 mb-2">{edu.institution}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4 hover:border-purple-500/40 transition-all shadow-xl"
                  >
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 border border-amber-500/20">
                        <Award className="w-5 h-5" />
                      </div>
                      <h5 className="text-sm sm:text-base font-bold text-white tracking-wide">
                        {ach.title}
                      </h5>
                    </div>

                    <div className="space-y-3.5 text-xs leading-relaxed">
                      <div className="space-y-1">
                        <span className="font-bold text-purple-400 flex items-center gap-1.5 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          1. What I achieved:
                        </span>
                        <p className="text-slate-300 pl-5">{ach.achieved}</p>
                      </div>

                      <div className="space-y-1">
                        <span className="font-bold text-amber-400 flex items-center gap-1.5 font-mono">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          2. What made it hard:
                        </span>
                        <p className="text-slate-300 pl-5">{ach.challenge}</p>
                      </div>

                      <div className="space-y-1">
                        <span className="font-bold text-blue-400 flex items-center gap-1.5 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          3. What I did differently:
                        </span>
                        <p className="text-slate-300 pl-5">{ach.approach}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
