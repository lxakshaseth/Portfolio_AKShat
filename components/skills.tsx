"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import { Cpu, Server, Cloud, Bot, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
            onClick={() => setSelectedCategory(cat)}
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

            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                      {skill.name}
                      {skill.popular && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-mono">
                          CORE
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-purple-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Skill Progress Bar */}
                  <div className="h-2 w-full bg-slate-950/80 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIdx * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
