import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl glass-panel p-6 overflow-hidden transition-all duration-300",
        hoverEffect && "glass-panel-hover",
        glow && "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10 before:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
