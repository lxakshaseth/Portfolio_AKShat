"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { CERTIFICATIONS } from "@/data/portfolio";
import { CheckCircle2, ShieldCheck, Trophy, Eye } from "lucide-react";
import { sounds } from "@/lib/sound-effects";
import { useTerminal } from "@/components/terminal-provider";

export function Certifications() {
  const { openCertificate } = useTerminal();
  const [filter, setFilter] = useState<string>("All");

  const filters = ["All", "Featured Credentials", "Cloud & Microsoft", "Hackathons & Innovation", "AI & Architecture"];

  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    if (filter === "All") return true;
    if (filter === "Featured Credentials") return cert.featured;
    if (filter === "Cloud & Microsoft") {
      return (
        cert.issuer.includes("Microsoft") ||
        cert.issuer.includes("Amazon") ||
        cert.issuer.includes("AWS") ||
        cert.issuer.includes("Oracle")
      );
    }
    if (filter === "Hackathons & Innovation") {
      return cert.issuer.includes("Podar") || cert.title.includes("Hackfest") || cert.title.includes("Startupthon");
    }
    if (filter === "AI & Architecture") {
      return cert.skills.some((s) => s.toLowerCase().includes("ai") || s.toLowerCase().includes("prompt"));
    }
    return true;
  });

  return (
    <section id="certifications" className="py-24 px-4 relative max-w-6xl mx-auto">
      <SectionHeading
        badge="Verified Credentials & Honors"
        title="Official Certifications & Achievements"
        subtitle="Click any credential to inspect official digital verification, serial number, and certificate document."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => {
              sounds.playClick();
              setFilter(f);
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              filter === f
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                : "glass-panel text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => {
          const isMicrosoft = cert.id === "cert-microsoft-azure-fundamentals";
          const isStartupthon = cert.id === "cert-podar-startupthon-2026";
          const isHackfest = cert.id === "cert-podar-hackfest";
          const isTopFeatured = isMicrosoft || isStartupthon || isHackfest;

          return (
            <GlassCard
              key={cert.id}
              onClick={() => {
                sounds.playClick();
                openCertificate(cert);
              }}
              className={`flex flex-col justify-between space-y-4 border cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 ${
                isMicrosoft
                  ? "border-blue-500/50 bg-gradient-to-b from-blue-950/30 to-slate-900/80 shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:border-blue-400"
                  : isStartupthon
                  ? "border-amber-500/50 bg-gradient-to-b from-amber-950/20 to-slate-900/80 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:border-amber-400"
                  : isHackfest
                  ? "border-emerald-500/50 bg-gradient-to-b from-emerald-950/20 to-slate-900/80 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:border-emerald-400"
                  : "border-white/10 hover:border-purple-500/40"
              }`}
            >
              <div className="space-y-3">
                {/* Header Icon + Verification Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isMicrosoft
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        : isStartupthon
                        ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                        : isHackfest
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                    }`}
                  >
                    {isStartupthon || isHackfest ? (
                      <Trophy className="w-6 h-6" />
                    ) : (
                      <ShieldCheck className="w-6 h-6" />
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isTopFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {cert.badge || "NEW 2026"}
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified {cert.date}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-purple-300 font-mono">
                  {cert.issuer}
                </p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="p-2 rounded-lg bg-slate-950/80 border border-white/5 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                    <span>
                      ID: <span className="text-slate-200 font-semibold">{cert.credentialId}</span>
                    </span>
                  </div>
                )}

                {/* Skills tags */}
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

              {/* Action Bottom */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                  <Eye className="w-3.5 h-3.5" /> Inspect Credential
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Click to preview</span>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
