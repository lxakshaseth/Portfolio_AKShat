import { notFound } from "next/navigation";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolio";
import { CASE_STUDIES } from "@/data/case-studies";
import { ExternalLink, ArrowLeft, Cpu, Database, Workflow, Layers, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study by ${PERSONAL_INFO.name}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) notFound();

  const caseStudy = CASE_STUDIES[project.id];

  return (
    <main className="relative min-h-screen bg-transparent text-slate-100 pt-28 pb-20 px-4 z-10">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-600/90 text-white">
                  {project.category}
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
                  {project.title}
                </h1>
                <p className="text-purple-300 font-mono text-sm mt-1">{project.subtitle}</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 text-slate-200 hover:text-white border border-white/15 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs shadow-lg"
                >
                  Live Demo <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-base text-slate-300 leading-relaxed pt-2">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="glass-panel p-6 rounded-2xl space-y-3">
          <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Technology Stack
          </h3>
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

        {/* Case Study Details */}
        {caseStudy && (
          <div className="space-y-8 glass-panel p-6 sm:p-8 rounded-2xl">
            {/* Architecture */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                {caseStudy.architecture.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.architecture.description}
              </p>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-purple-400 block mb-2">
                  MODULE BREAKDOWN:
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
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Engineering Challenges & Solutions
              </h3>
              <div className="space-y-3">
                {caseStudy.challenges.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="text-xs font-semibold text-rose-300 flex items-start gap-2">
                      <span className="font-mono bg-rose-500/20 px-1.5 py-0.5 rounded text-[10px]">CHALLENGE</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-indigo-400" />
                  API Flow
                </h4>
                {caseStudy.apiFlow.map((step) => (
                  <div key={step.step} className="p-3 rounded-lg bg-slate-950/70 border border-white/5 text-xs">
                    <span className="font-mono font-bold text-purple-400 mr-2">STEP {step.step}:</span>
                    <span className="font-semibold text-slate-200">{step.title}</span>
                    <p className="text-[11px] text-slate-400 mt-1">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  Database Design
                </h4>
                {caseStudy.databaseDesign.map((db, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-950/70 border border-white/5 text-xs">
                    <span className="font-mono font-bold text-blue-400 block mb-0.5">{db.entity}</span>
                    <p className="text-[11px] text-slate-400">{db.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
