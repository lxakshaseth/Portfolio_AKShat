"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "@/hooks/use-mounted";
import { X, Sparkles, Terminal } from "lucide-react";

interface MatrixRainProps {
  onClose: () => void;
}

export function MatrixRain({ onClose }: MatrixRainProps) {
  const mounted = useMounted();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const characters = "AKSHAT01011001AZURENEXTJSREACTNODEAIλπΩΨ9876543210ABCDEF<>{}/*&^%$#@!~";
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    const render = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading char is bright cyan/white, tail is emerald green
        if (Math.random() > 0.85) {
          ctx.fillStyle = "#38bdf8";
        } else if (Math.random() > 0.5) {
          ctx.fillStyle = "#34d399";
        } else {
          ctx.fillStyle = "#10b981";
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] overflow-hidden bg-slate-950/90 backdrop-blur-sm flex flex-col justify-between p-6 animate-fadeIn">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between max-w-5xl mx-auto w-full glass-panel px-6 py-3 rounded-2xl border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
        <div className="flex items-center gap-3 font-mono text-emerald-400 text-sm">
          <Terminal className="w-5 h-5 text-emerald-300 animate-pulse" />
          <span className="font-bold">AKSHAT // MATRIX DIGITAL STREAM</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-950/80 text-[11px] text-emerald-300 border border-emerald-500/30">
            SECURE ACCESS: ACTIVE
          </span>
        </div>

        <button
          type="button"
          suppressHydrationWarning
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs hover:bg-emerald-400 transition-all shadow-[0_0_15px_#10b981]"
        >
          <X className="w-4 h-4" /> Exit Matrix
        </button>
      </div>

      {/* Floating Center Subtitle */}
      <div className="relative z-10 text-center pointer-events-none select-none my-auto">
        <div className="inline-block p-6 rounded-3xl glass-panel border border-emerald-500/30 backdrop-blur-md shadow-2xl">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Cyberpunk Easter Egg Activated
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight text-shadow">
            AKSHAT<span className="text-emerald-400">.DEV</span>
          </h2>
          <p className="text-xs sm:text-sm text-emerald-300 font-mono mt-2">
            Full Stack & Cloud Engineer • Microsoft Azure Certified
          </p>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 text-center text-xs font-mono text-emerald-400/80">
        Press <kbd className="px-2 py-0.5 rounded bg-slate-900 border border-emerald-500/40 text-white">ESC</kbd> or click Exit to return to portfolio interface
      </div>
    </div>,
    document.body
  );
}
