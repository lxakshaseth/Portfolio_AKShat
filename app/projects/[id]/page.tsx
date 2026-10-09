import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Layers, Workflow, Database } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { ProjectArtwork, projectVisualIndex } from "@/components/project-artwork";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolio";
import { CASE_STUDIES } from "@/data/case-studies";

interface ProjectPageProps { params: Promise<{ id: string }> }
export function generateStaticParams() { return PROJECTS.map(project => ({ id: project.id })); }
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find(project => project.id === id);
  if (!project) return { title: "Project not found" };
  return { title: project.title.replace("Task5 Apex Planet Weather App", "Weather & Air Quality"), description: project.description };
}
export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = PROJECTS.find(project => project.id === id);
  if (!project) notFound();
  const caseStudy = CASE_STUDIES[id];
  const visualIndex = projectVisualIndex(id);
  const title = project.title.replace("Task5 Apex Planet Weather App", "Weather & Air Quality");
  const hasDemo = project.liveUrl && !project.liveUrl.includes("github.com");
  const related = PROJECTS.filter(p => p.id !== id && projectVisualIndex(p.id) >= 0).slice(0,2);
  return <main id="main-content" className="project-detail content-width">
    <Link href="/#projects" className="text-link project-back"><ArrowLeft size={16}/> Back to selected work</Link>
    <section className="project-detail-hero">
      <div className="project-detail-copy">
        <p className="eyebrow">SELECTED WORK / {project.category.toUpperCase()}</p>
        <h1>{title}</h1>
        <p className="project-detail-subtitle">{project.subtitle}</p>
        <p className="project-detail-description">{project.description}</p>
        <div className="hero-actions"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-primary"><GithubIcon className="w-4 h-4"/> View source code <ArrowUpRight size={17}/></a>{hasDemo && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">Live demo <ArrowUpRight size={17}/></a>}</div>
      </div>
      <div className={`project-visual detail-artwork visual-${visualIndex < 0 ? 0 : visualIndex}`} role="img" aria-label={`Concept illustration for ${title}`}><div className="visual-caption"><span>PROJECT / {visualIndex < 0 ? "EXPERIMENT" : `0${visualIndex + 1}`}</span><span>CONCEPT PREVIEW</span></div><ProjectArtwork id={id} title={title}/></div>
    </section>
    <div className="project-detail-grid">
      <div className="project-detail-main">
        <section className="detail-section"><p className="eyebrow">01 / OVERVIEW</p><h2>Behind the build.</h2><p>{project.fullDescription}</p></section>
        {caseStudy && <>
          <section className="detail-section"><p className="eyebrow">02 / ARCHITECTURE</p><h2><Layers size={23}/> How it fits together.</h2><h3>{caseStudy.architecture.title}</h3><p>{caseStudy.architecture.description}</p><div className="detail-modules">{caseStudy.architecture.diagramComponents.map((module,i) => <div key={module}><span>0{i+1}</span><p>{module}</p></div>)}</div></section>
          <section className="detail-section"><p className="eyebrow">03 / FEATURES</p><h2>What the system does.</h2><ul className="detail-features">{caseStudy.keyFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
          <section className="detail-section"><p className="eyebrow">04 / PROBLEM SOLVING</p><h2>Challenges & decisions.</h2><div className="detail-challenges">{caseStudy.challenges.map((challenge,i) => <article key={i}><h3>Challenge / 0{i+1}</h3><p>{challenge.problem}</p><h4>My approach</h4><p>{challenge.solution}</p></article>)}</div></section>
          <section className="detail-section detail-system-grid"><div><h2><Workflow size={22}/> API flow</h2>{caseStudy.apiFlow.map(step => <article className="detail-step" key={step.step}><span>0{step.step}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></article>)}</div><div><h2><Database size={22}/> Data model</h2>{caseStudy.databaseDesign.map(entity => <article className="detail-entity" key={entity.entity}><h3>{entity.entity}</h3><p>{entity.description}</p></article>)}</div></section>
        </>}
      </div>
      <aside className="project-detail-sidebar"><div className="detail-sidebar-card"><p className="eyebrow">THE TOOLKIT</p><h2>Built with</h2><div className="tech-tags">{project.techStack.map(tech => <span key={tech}>{tech}</span>)}</div><hr/><p className="sidebar-label">EXPLORE THE IMPLEMENTATION</p><a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Repository on GitHub <ArrowUpRight size={16}/></a></div><div className="detail-sidebar-note"><span>Have a similar challenge?</span><p>I’d love to hear about what your team is building.</p><a className="text-link" href={`mailto:${PERSONAL_INFO.email}`}>Let’s talk <ArrowUpRight size={16}/></a></div></aside>
    </div>
    <section className="detail-related"><p className="eyebrow">KEEP EXPLORING</p><h2>More things I’ve built.</h2><div>{related.map(p => <Link key={p.id} href={`/projects/${p.id}`}><span>{p.category}</span><h3>{p.title.replace("Task5 Apex Planet Weather App","Weather & Air Quality")}</h3><ArrowUpRight size={22}/></Link>)}</div></section>
  </main>;
}
