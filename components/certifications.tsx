"use client";

import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { CERTIFICATIONS } from "@/data/portfolio";
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 relative max-w-6xl mx-auto">
      <SectionHeading
        badge="Credentials"
        title="Professional Certifications"
        subtitle="Verified industry certifications in Generative AI, Cloud Infrastructure, and Frontend Architecture."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <GlassCard
            key={cert.id}
            className="flex flex-col justify-between space-y-4 border border-white/10 hover:border-purple-500/40"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-purple-300 font-mono">
                {cert.issuer}
              </p>

              {cert.credentialId && (
                <div className="p-2 rounded-lg bg-slate-950/80 border border-white/5 font-mono text-[11px] text-slate-400">
                  ID: <span className="text-slate-200">{cert.credentialId}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {cert.credentialUrl && (
              <div className="pt-2 border-t border-white/5">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Certificate
                </a>
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
