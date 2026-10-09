import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio";
export function Footer() {
  return <footer className="portfolio-footer"><Link className="wordmark" href="/#home">akshat<span>.</span></Link><p>© {new Date().getFullYear()} Akshat. Built with care, curiosity & Next.js.</p><a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">Explore my GitHub ↗</a></footer>;
}
