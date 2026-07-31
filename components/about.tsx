"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { PERSONAL_INFO, EDUCATION, ACHIEVEMENTS } from "@/data/portfolio";
import { GraduationCap, Award, MapPin, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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

            <div className="space-y-2 border-t border-white/10 pt-4">
              {[
                "Production experience with Next.js 15 App Router",
                "Full Stack MERN & PostgreSQL architecture",
                "AWS S3, EC2, Amplify & CloudFront CDN expert",
                "Generative AI integration (OpenAI & Groq)"
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
              onClick={() => setActiveTab("summary")}
              suppressHydrationWarning
              className={`flex-1 min-w-[110px] py-2.5 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === "summary"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Overview
            </button>

            <button
              onClick={() => setActiveTab("education")}
              suppressHydrationWarning
              className={`flex-1 min-w-[110px] py-2.5 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === "education"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </button>

            <button
              onClick={() => setActiveTab("achievements")}
              suppressHydrationWarning
              className={`flex-1 min-w-[110px] py-2.5 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
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
                  I believe exceptional software is defined by three core pillars: **scalability**, **maintainability**, and **delightful user experience**. Every system I build uses strict TypeScript typing, atomic component separation, and robust automated test suites.
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
                className="space-y-4"
              >
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3 hover:border-purple-500/30 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">{ach.title}</h5>
                      <p className="text-xs text-slate-300 mt-1">{ach.description}</p>
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
