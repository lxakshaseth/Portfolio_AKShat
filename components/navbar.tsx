import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
export function Navbar() {
  return <header className="portfolio-nav"><div className="nav-inner"><Link href="/#home" className="wordmark" aria-label="Akshat home">akshat<span>.</span><small>DEVELOPER / BUILDER</small></Link><nav aria-label="Main navigation"><Link href="/#projects">Work</Link><Link href="/#about">About</Link><Link href="/#experience">Experience</Link><Link href="/#contact">Contact</Link></nav><a className="nav-resume" href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={16}/></a></div></header>;
}
