"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "@/hooks/use-mounted";
import { CertificationItem } from "@/types/portfolio";
import { X, ExternalLink, ShieldCheck, Download, Copy, Check, Award, Calendar, Hash, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { sounds } from "@/lib/sound-effects";

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const [copied, setCopied] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certificate) {
      sounds.playSuccess();
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!mounted) return null;

  const copyCredentialId = () => {
    if (certificate?.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      sounds.playClick();
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isPdf = certificate?.credentialUrl?.toLowerCase().endsWith(".pdf");
  const isImage = certificate?.image || certificate?.credentialUrl?.match(/\.(png|jpg|jpeg|webp)$/i);

  return createPortal(
    <AnimatePresence>
      {certificate && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              sounds.playClick();
              onClose();
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-purple-500/30 p-5 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.25)] space-y-6"
          >
          {/* Close Button */}
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/90 text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all z-30"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Verification Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 pr-10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1 mb-1">
                  <Sparkles className="w-3 h-3" /> Digitally Verified Credential
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {certificate.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Certificate Media Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 shadow-2xl">
            {isImage ? (
              <div className="relative w-full h-[280px] sm:h-[420px] bg-slate-950 flex items-center justify-center p-2">
                <Image
                  src={certificate.image || certificate.credentialUrl!}
                  alt={certificate.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ) : isPdf ? (
              <div className="w-full h-[320px] sm:h-[420px] bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Official Document Available</h4>
                <p className="text-xs text-slate-400 max-w-sm mb-4">
                  This certificate is issued as a verified PDF credential. You can open and inspect the document directly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    Open Full PDF Document <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">Verified online credential</p>
              </div>
            )}
          </div>

          {/* Credential Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-purple-400 font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> ISSUED BY
              </span>
              <p className="text-sm font-bold text-white">{certificate.issuer}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> ISSUE DATE
              </span>
              <p className="text-sm font-bold text-white">{certificate.date}</p>
            </div>
          </div>

          {/* Credential ID Bar */}
          {certificate.credentialId && (
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">CREDENTIAL / CERTIFICATE ID</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-200">
                    {certificate.credentialId}
                  </span>
                </div>
              </div>

              <button
                type="button"
                suppressHydrationWarning
                onClick={copyCredentialId}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all border border-white/10"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy ID
                  </>
                )}
              </button>
            </div>
          )}

          {/* Skills Covered */}
          {certificate.skills && certificate.skills.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Validated Skills & Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
            <span className="text-xs text-slate-400 font-mono">
              Presented to: <strong className="text-white">Akshat</strong>
            </span>

            <div className="flex items-center gap-3">
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  {isPdf ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  {isPdf ? "Download / View PDF" : "View Full Certificate"}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>,
  document.body
);
}
