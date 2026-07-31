import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 mb-12",
        center && "items-center text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="gradient-text-primary pl-2">
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
