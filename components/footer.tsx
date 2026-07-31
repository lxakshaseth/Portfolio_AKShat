import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Code2, Heart, ShieldCheck, Cloud } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 pt-12 pb-8 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand & Copy */}
        <div className="space-y-2">
          <Link
            href="#home"
            className="inline-flex items-center gap-2 text-lg font-bold text-white tracking-tight"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="gradient-text-primary text-lg font-extrabold">
              {PERSONAL_INFO.name}.dev
            </span>
          </Link>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Akshat. Built with Next.js 15, TypeScript, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="hover:text-white transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* AWS & Production Ready Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-purple-400">
          <Cloud className="w-4 h-4 text-cyan-400" />
          <span>AWS Production Ready</span>
        </div>
      </div>
    </footer>
  );
}
