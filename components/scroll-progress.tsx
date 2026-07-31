"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";

export function ScrollProgress() {
  const { scrollProgress } = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-950/20 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(168,85,247,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
