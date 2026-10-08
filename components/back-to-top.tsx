"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ArrowUp } from "lucide-react";

import { sounds } from "@/lib/sound-effects";

export function BackToTop() {
  const { scrollPosition } = useScrollPosition();

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (scrollPosition < 300) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      suppressHydrationWarning
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-panel text-white border border-white/15 hover:border-purple-500/50 hover:bg-purple-600/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] group"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
