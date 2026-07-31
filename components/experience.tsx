"use client";

import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { EXPERIENCES } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative max-w-5xl mx-auto">
      <SectionHeading
        badge="Career Path"
        title="Professional Experience"
        subtitle="Track record of driving real engineering impact across high-growth startups and tech labs."
      />

      <div className="relative border-l-2 border-purple-500/30 ml-3 sm:ml-8 space-y-12 pl-4 sm:pl-10">
        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Glowing Node */}
            <div className="absolute -left-[25px] sm:-left-[47px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-purple-600 transition-all shadow-[0_0_15px_rgba(168,85,247,0.8)]">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-300" />
            </div>

            <GlassCard className="space-y-4 border border-white/10 hover:border-purple-500/40">
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {exp.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                  <p className="text-sm font-semibold text-blue-400 flex items-center gap-1.5 mt-0.5">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {exp.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Key Achievements & Impact
                </h4>
                {exp.achievements.map((ach, achIdx) => (
                  <div key={achIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {exp.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
