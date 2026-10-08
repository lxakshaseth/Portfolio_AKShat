"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TerminalModal } from "@/components/terminal-modal";
import { MatrixRain } from "@/components/matrix-rain";
import { CertificateModal } from "@/components/certificate-modal";
import { CERTIFICATIONS } from "@/data/portfolio";
import { CertificationItem } from "@/types/portfolio";
import { sounds } from "@/lib/sound-effects";
import { Terminal, Volume2, VolumeX, ShieldCheck } from "lucide-react";

interface TerminalContextType {
  openTerminal: () => void;
  closeTerminal: () => void;
  openMatrix: () => void;
  closeMatrix: () => void;
  openCertificate: (certIdOrObj: string | CertificationItem) => void;
  closeCertificate: () => void;
}

const TerminalContext = createContext<TerminalContextType | null>(null);

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
}

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [matrixOpen, setMatrixOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);
  const [soundActive, setSoundActive] = useState(sounds.enabled);

  // Global Ctrl+K / Cmd+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openTerminal = () => {
    sounds.playPowerUp();
    setTerminalOpen(true);
  };

  const closeTerminal = () => setTerminalOpen(false);

  const openMatrix = () => {
    sounds.playMatrix();
    setMatrixOpen(true);
  };

  const closeMatrix = () => setMatrixOpen(false);

  const openCertificate = (certIdOrObj: string | CertificationItem) => {
    sounds.playClick();
    if (typeof certIdOrObj === "string") {
      const found = CERTIFICATIONS.find((c) => c.id === certIdOrObj);
      if (found) setActiveCert(found);
    } else {
      setActiveCert(certIdOrObj);
    }
  };

  const closeCertificate = () => setActiveCert(null);

  const toggleSound = () => {
    const en = sounds.toggleSound();
    setSoundActive(en);
  };

  return (
    <TerminalContext.Provider
      value={{
        openTerminal,
        closeTerminal,
        openMatrix,
        closeMatrix,
        openCertificate,
        closeCertificate,
      }}
    >
      {children}

      {/* Global Terminal Console */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={closeTerminal}
        onOpenMatrix={openMatrix}
        onSelectCert={openCertificate}
      />

      {/* Global Matrix Digital Stream */}
      {matrixOpen && <MatrixRain onClose={closeMatrix} />}

      {/* Global Certificate Inspection Modal */}
      <CertificateModal
        certificate={activeCert}
        onClose={closeCertificate}
      />

      {/* Persistent Floating HUD Widget (Desktop Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-2 pointer-events-auto">
        <button
          onClick={openTerminal}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 hover:border-emerald-300 text-xs font-mono font-bold shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Terminal className="w-3.5 h-3.5 animate-pulse" />
          <span>HUD CONSOLE</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-emerald-500/30 text-[10px] text-slate-300">
            Ctrl+K
          </kbd>
        </button>

        <button
          onClick={toggleSound}
          className="p-2 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white transition-all text-xs"
          title="Toggle Futuristic Web Audio Synthesizer"
        >
          {soundActive ? (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>

        <button
          onClick={() => openCertificate("cert-microsoft-azure-fundamentals")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-blue-500/30 text-[11px] font-mono text-blue-400 hover:bg-blue-950/40 transition-all cursor-pointer"
        >
          <ShieldCheck className="w-3 h-3 text-blue-400" />
          <span>Azure Certified</span>
        </button>
      </div>
    </TerminalContext.Provider>
  );
}
