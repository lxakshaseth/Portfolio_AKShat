"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal, X, CornerDownLeft, ShieldCheck, Award, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATIONS, PROJECTS, PERSONAL_INFO, SKILL_CATEGORIES } from "@/data/portfolio";
import { sounds } from "@/lib/sound-effects";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMatrix: () => void;
  onSelectCert: (certId: string) => void;
}

interface TerminalEntry {
  type: "command" | "response" | "system";
  content: React.ReactNode;
}

const INITIAL_ENTRY: TerminalEntry = {
  type: "system",
  content: (
    <div className="space-y-1 text-xs font-mono text-purple-300">
      <div className="text-emerald-400 font-bold">AKSHAT OS v2.6.0 [KERNEL: AZURE-MERN-AI]</div>
      <div>Connected to developer station for @Akshat (lxakshaseth)</div>
      <div className="text-slate-400">
        Type <span className="text-amber-400 font-bold">help</span> to list commands, or click any quick-action shortcut below.
      </div>
    </div>
  ),
};

export function TerminalModal({ isOpen, onClose, onOpenMatrix, onSelectCert }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>([INITIAL_ENTRY]);
  const [soundEnabled, setSoundEnabled] = useState(sounds.enabled);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      sounds.playPowerUp();
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    sounds.playClick();

    const newEntries: TerminalEntry[] = [
      {
        type: "command",
        content: (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="text-emerald-400">akshat@dev:~$</span>
            <span className="text-white font-semibold">{cmd}</span>
          </div>
        ),
      },
    ];

    switch (trimmed) {
      case "help":
        newEntries.push({
          type: "response",
          content: (
            <div className="text-xs font-mono space-y-1 text-slate-300">
              <div className="text-purple-400 font-bold">AVAILABLE COMMANDS:</div>
              <div><span className="text-cyan-400 font-bold">azure</span>       - Inspect Microsoft Azure Fundamentals Certified credential</div>
              <div><span className="text-cyan-400 font-bold">startupthon</span> - View Podar Startupthon 2K26 Grand Finale achievement</div>
              <div><span className="text-cyan-400 font-bold">hackfest</span>    - View Podar Hackfest Certificate of Achievement</div>
              <div><span className="text-cyan-400 font-bold">skills</span>      - System capability matrix & engineering stack</div>
              <div><span className="text-cyan-400 font-bold">projects</span>    - List top featured production applications</div>
              <div><span className="text-cyan-400 font-bold">certs</span>       - View complete list of verified credentials</div>
              <div><span className="text-cyan-400 font-bold">matrix</span>      - Launch Cyberpunk Matrix digital glyph stream</div>
              <div><span className="text-cyan-400 font-bold">sound</span>       - Toggle Web Audio API synthesizer (ON/OFF)</div>
              <div><span className="text-cyan-400 font-bold">contact</span>     - Get direct contact endpoints</div>
              <div><span className="text-cyan-400 font-bold">clear</span>       - Clear the terminal console</div>
            </div>
          ),
        });
        break;

      case "azure":
        sounds.playSuccess();
        newEntries.push({
          type: "response",
          content: (
            <div className="p-3 rounded-xl bg-slate-900 border border-blue-500/40 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-blue-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" /> MICROSOFT CERTIFIED: AZURE FUNDAMENTALS
                </span>
                <span className="text-emerald-400 text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30">
                  ONLINE VERIFIED
                </span>
              </div>
              <div className="text-slate-300">
                Candidate: <strong className="text-white">Akshat</strong> | Signatory: Satya Narayana Nadella (CEO)
              </div>
              <div className="text-slate-400 text-[11px]">
                Credential ID: <span className="text-cyan-300 font-bold">86B238F25DC30C0F</span> | Cert No: IE6BA0-40D3AE
              </div>
              <button
                onClick={() => {
                  onSelectCert("cert-microsoft-azure-fundamentals");
                  onClose();
                }}
                className="mt-1 px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] transition-all"
              >
                Open Official Badge & Certificate →
              </button>
            </div>
          ),
        });
        break;

      case "startupthon":
        sounds.playSuccess();
        newEntries.push({
          type: "response",
          content: (
            <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-amber-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" /> PODAR STARTUPTHON 2K26 — GRAND FINALE
                </span>
                <span className="text-purple-300 text-[10px] px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30">
                  FINALIST
                </span>
              </div>
              <div className="text-slate-300">
                Presented to: <strong className="text-white">Akshat</strong> | Grand Finale, Nawalgarh (Rajasthan)
              </div>
              <div className="text-slate-400 text-[11px]">
                Certificate No: <span className="text-amber-300 font-bold">PST26-PRT-01867</span> | Issue Date: 8 Oct 2026
              </div>
              <button
                onClick={() => {
                  onSelectCert("cert-podar-startupthon-2026");
                  onClose();
                }}
                className="mt-1 px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px] transition-all"
              >
                Inspect Grand Finale Certificate →
              </button>
            </div>
          ),
        });
        break;

      case "hackfest":
        sounds.playSuccess();
        newEntries.push({
          type: "response",
          content: (
            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" /> PODAR HACKFEST — CERTIFICATE OF ACHIEVEMENT
                </span>
                <span className="text-emerald-300 text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30">
                  ACHIEVEMENT
                </span>
              </div>
              <div className="text-slate-300">
                Presented to: <strong className="text-white">Akshat</strong> | Uptoskills & Podar Educational Institutions
              </div>
              <div className="text-slate-400 text-[11px]">
                Certificate No: <span className="text-emerald-300 font-bold">CERT-1778155983667-TVXWJ</span> | Date: May 7, 2026
              </div>
              <button
                onClick={() => {
                  onSelectCert("cert-podar-hackfest");
                  onClose();
                }}
                className="mt-1 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-all"
              >
                Inspect Hackfest Certificate →
              </button>
            </div>
          ),
        });
        break;

      case "skills":
        newEntries.push({
          type: "response",
          content: (
            <div className="text-xs font-mono space-y-2 text-slate-300">
              <div className="text-purple-400 font-bold">CORE TECHNICAL COMPETENCIES:</div>
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-2 rounded bg-slate-900/60 border border-white/5">
                  <div className="text-cyan-300 font-bold text-[11px]">{cat.title}:</div>
                  <div className="text-slate-400 text-[11px]">
                    {cat.skills.map((s) => s.name).join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case "projects":
        newEntries.push({
          type: "response",
          content: (
            <div className="text-xs font-mono space-y-1.5 text-slate-300">
              <div className="text-purple-400 font-bold">FEATURED REPOSITORIES & SYSTEMS:</div>
              {PROJECTS.slice(0, 5).map((p) => (
                <div key={p.id} className="flex items-center justify-between p-1.5 rounded bg-slate-900/40">
                  <span className="text-white font-semibold">{p.title}</span>
                  <span className="text-purple-300 text-[11px] font-mono">{p.subtitle}</span>
                </div>
              ))}
              <div className="text-slate-400 text-[10px] pt-1">
                Use the on-page projects grid to inspect deep-dive architecture specs & live demos.
              </div>
            </div>
          ),
        });
        break;

      case "certs":
        newEntries.push({
          type: "response",
          content: (
            <div className="text-xs font-mono space-y-1 text-slate-300">
              <div className="text-purple-400 font-bold">OFFICIAL CREDENTIAL REGISTRY:</div>
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    onSelectCert(c.id);
                    onClose();
                  }}
                  className="p-1.5 rounded hover:bg-purple-600/20 cursor-pointer flex items-center justify-between text-slate-300 hover:text-white"
                >
                  <span>• {c.title} ({c.issuer})</span>
                  <span className="text-purple-400 text-[10px]">Inspect →</span>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case "matrix":
        sounds.playMatrix();
        onOpenMatrix();
        onClose();
        return;

      case "sound":
        const enabled = sounds.toggleSound();
        setSoundEnabled(enabled);
        newEntries.push({
          type: "response",
          content: (
            <div className="text-xs font-mono text-cyan-300">
              Web Audio Synthesizer: <strong>{enabled ? "ENABLED [🔊]" : "DISABLED [🔇]"}</strong>
            </div>
          ),
        });
        break;

      case "contact":
        newEntries.push({
          type: "response",
          content: (
            <div className="text-xs font-mono space-y-1 text-slate-300">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline">{PERSONAL_INFO.email}</a></div>
              <div>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-emerald-400 hover:underline">{PERSONAL_INFO.phone}</a></div>
              <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">{PERSONAL_INFO.github}</a></div>
              <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{PERSONAL_INFO.linkedin}</a></div>
            </div>
          ),
        });
        break;

      case "sudo":
        newEntries.push({
          type: "response",
          content: (
            <div className="text-xs font-mono text-rose-400">
              Permission denied: User &apos;guest&apos; is not in the sudoers file. Akshat has root system access 🚀
            </div>
          ),
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newEntries.push({
          type: "response",
          content: (
            <div className="text-xs font-mono text-rose-300">
              Command not recognized: &apos;{trimmed}&apos;. Type <span className="text-amber-400 font-bold">help</span> to view available system commands.
            </div>
          ),
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          className="relative w-full max-w-3xl h-[85vh] max-h-[640px] flex flex-col rounded-2xl glass-panel border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.25)] overflow-hidden"
        >
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" /> akshat@dev-terminal:~
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const en = sounds.toggleSound();
                  setSoundEnabled(en);
                }}
                title="Toggle Web Audio SFX"
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition-all text-xs"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/60 border-b border-white/5 overflow-x-auto shrink-0 scrollbar-none">
            <span className="text-[10px] font-mono text-slate-500 shrink-0">QUICK:</span>
            {[
              { label: "azure", color: "text-blue-400 border-blue-500/30" },
              { label: "startupthon", color: "text-amber-400 border-amber-500/30" },
              { label: "hackfest", color: "text-emerald-400 border-emerald-500/30" },
              { label: "skills", color: "text-purple-400 border-purple-500/30" },
              { label: "projects", color: "text-cyan-400 border-cyan-500/30" },
              { label: "matrix", color: "text-emerald-300 border-emerald-500/40 bg-emerald-950/40" },
              { label: "help", color: "text-slate-300 border-white/20" },
              { label: "clear", color: "text-slate-400 border-white/10" },
            ].map((chip) => (
              <button
                key={chip.label}
                onClick={() => runCommand(chip.label)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono border bg-slate-950/80 hover:bg-slate-800 transition-all shrink-0 ${chip.color}`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Scrollable Terminal Output Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono">
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                {entry.content}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Input Prompt Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 p-3 bg-slate-950/95 border-t border-emerald-500/30 shrink-0"
          >
            <span className="text-emerald-400 font-mono font-bold text-xs shrink-0">akshat@dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('azure', 'skills', 'matrix', 'help')..."
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder-slate-600 focus:ring-0"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shrink-0"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
