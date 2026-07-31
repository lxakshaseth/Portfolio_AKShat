"use client";

import { useEffect } from "react";
import { CASE_STUDIES } from "@/data/case-studies";
import { ProjectItem } from "@/types/portfolio";
import { X, ExternalLink, Layers, Cpu, Database, Workflow, AlertCircle, Sparkles } from "lucide-react";
import { GithubIcon } from "./ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = CASE_STUDIES[project.id];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-white/15 p-6 sm:p-8 shadow-2xl space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            suppressHydrationWarning
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/90 text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner & Title */}
          <div className="space-y-4">
            <div className="relative h-56 sm:h-72 w-full rounded-xl overflow-hidden border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-600/80 text-white shadow-lg">
                    {project.category}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                    {project.title}
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/90 text-slate-200 hover:text-white border border-white/15 hover:bg-slate-800 transition-all"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    Open Live Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Case Study if Available */}
          {caseStudy ? (
            <div className="space-y-8 border-t border-white/10 pt-6">
              {/* System Architecture */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-400" />
                  {caseStudy.architecture.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {caseStudy.architecture.description}
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-purple-400 block mb-2">
                    ARCHITECTURE MODULES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.architecture.diagramComponents.map((mod, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  Engineering Challenges & Solutions
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {caseStudy.challenges.map((c, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                      <div className="text-xs font-semibold text-rose-300 flex items-start gap-2">
                        <span className="font-mono bg-rose-500/20 px-1.5 py-0.5 rounded text-[10px]">PROBLEM</span>
                        <span>{c.problem}</span>
                      </div>
                      <div className="text-xs font-semibold text-emerald-300 flex items-start gap-2 pt-1 border-t border-white/5">
                        <span className="font-mono bg-emerald-500/20 px-1.5 py-0.5 rounded text-[10px]">SOLUTION</span>
                        <span>{c.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* API Flow & Database Schema */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-indigo-400" />
                    API Execution Flow
                  </h4>
                  <div className="space-y-2">
                    {caseStudy.apiFlow.map((step) => (
                      <div key={step.step} className="p-3 rounded-lg bg-slate-950/70 border border-white/5 text-xs">
                        <span className="font-mono font-bold text-purple-400 mr-2">
                          STEP {step.step}:
                        </span>
                        <span className="font-semibold text-slate-200">{step.title}</span>
                        <p className="text-[11px] text-slate-400 mt-1">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    Database Schema Design
                  </h4>
                  <div className="space-y-2">
                    {caseStudy.databaseDesign.map((db, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-950/70 border border-white/5 text-xs">
                        <span className="font-mono font-bold text-blue-400 block mb-0.5">
                          {db.entity}
                        </span>
                        <p className="text-[11px] text-slate-400">{db.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 border-t border-white/10 pt-6">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-white/10 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Project Specification & Source Code
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  This project is part of Akshat&apos;s active software engineering portfolio. You can inspect the source code, open issues, or launch live demos on GitHub.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-xs shadow-lg hover:bg-purple-500 transition-all"
                  >
                    View Source Code on GitHub <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel text-white font-semibold text-xs border border-white/15 hover:bg-white/10 transition-all"
                  >
                    Open Live Repository <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
