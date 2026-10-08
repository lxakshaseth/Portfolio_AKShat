"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { ProjectModal } from "./project-modal";
import { PROJECTS } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";
import { ExternalLink, BookOpen } from "lucide-react";
import { GithubIcon } from "./ui/icons";
import Image from "next/image";

import { sounds } from "@/lib/sound-effects";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters = ["All", "Full Stack", "AI & Cloud", "Systems & Web3"];

  const filteredProjects =
    selectedFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 px-4 relative max-w-6xl mx-auto">
      <SectionHeading
        badge="Full Portfolio Showcase"
        title="Projects & Applications"
        subtitle="Click on any project to open detailed architecture specifications, system challenges, and live source code."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              sounds.playClick();
              setSelectedFilter(filter);
            }}
            suppressHydrationWarning
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              selectedFilter === filter
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                : "glass-panel text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <GlassCard
            key={project.id}
            onClick={() => {
              sounds.playSuccess();
              setActiveModalProject(project);
            }}
            className="flex flex-col justify-between group p-0 overflow-hidden cursor-pointer border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image Preview Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute top-3 right-3 flex gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <span className="text-xs font-mono text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Open →
                  </span>
                </h3>
                <p className="text-xs text-purple-300 font-mono font-medium">
                  {project.subtitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Metrics Pills if any */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-2 p-2 rounded-xl bg-slate-950/70 border border-white/5 text-center">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="text-[11px] font-extrabold text-white block">
                        {m.value}
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                  <BookOpen className="w-3.5 h-3.5" />
                  View Details & Architecture
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-400 hover:text-white transition-colors p-1"
                    aria-label="GitHub Repo"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors p-1"
                  >
                    Live <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Case Study Modal Drawer */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
