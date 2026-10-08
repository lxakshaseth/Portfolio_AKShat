"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import { Cpu, Server, Cloud, Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { sounds } from "@/lib/sound-effects";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Web Development": <Cpu className="w-5 h-5 text-blue-400" />,
    "Backend & MERN Stack": <Server className="w-5 h-5 text-indigo-400" />,
    "DevOps & Cloud Infrastructure": <Cloud className="w-5 h-5 text-cyan-400" />,
    "AI & Emerging Tech": <Bot className="w-5 h-5 text-purple-400" />,
  };

  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const displayedCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 relative max-w-6xl mx-auto">
      <SectionHeading
        badge="Technical Expertise"
        title="Skills & Technology Stack"
        subtitle="Comprehensive mastery across modern frontend frameworks, backend microservices, DevOps pipelines, and AI engineering."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            suppressHydrationWarning
            onClick={() => {
              sounds.playClick();
              setSelectedCategory(cat);
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                : "glass-panel text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedCategories.map((category, catIdx) => (
          <GlassCard key={catIdx} className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10">
                  {categoryIcons[category.title] || <Sparkles className="w-5 h-5 text-purple-400" />}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {category.skills.length} Technologies
              </span>
            </div>

            <div className="space-y-2.5">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-purple-500/30 hover:bg-slate-800/60 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    {/* Glowing Bullet Dot */}
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-40"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_8px_#a855f7]"></span>
                    </span>

                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  {skill.popular && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-500/20 text-purple-300 font-mono border border-purple-500/30 font-semibold tracking-wider">
                      CORE
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
