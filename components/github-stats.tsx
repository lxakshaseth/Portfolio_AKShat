"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { GITHUB_STATS_DATA } from "@/data/portfolio";
import { Star, GitFork, GitCommit, Users, Code, ExternalLink, Activity, Search, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "./ui/icons";
import { sounds } from "@/lib/sound-effects";

interface LiveRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

export function GitHubStats() {
  const [stats, setStats] = useState(GITHUB_STATS_DATA);
  const [liveRepos, setLiveRepos] = useState<LiveRepo[]>(GITHUB_STATS_DATA.pinnedRepos);
  const [isLive, setIsLive] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchLiveGithubData() {
      try {
        const userRes = await fetch("https://api.github.com/users/lxakshaseth");
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats((prev) => ({
            ...prev,
            publicRepos: userData.public_repos || prev.publicRepos,
            followers: userData.followers || prev.followers,
          }));
        }

        const reposRes = await fetch("https://api.github.com/users/lxakshaseth/repos?per_page=100&sort=updated");
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            const formatted: LiveRepo[] = reposData.map((r: { name: string; description?: string; stargazers_count?: number; forks_count?: number; language?: string; html_url: string }) => ({
              name: r.name,
              description: r.description || "Public repository by Akshat.",
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              language: r.language || "JavaScript",
              url: r.html_url,
            }));
            setLiveRepos(formatted);
            setIsLive(true);
          }
        }
      } catch {
        console.warn("GitHub API rate limited or offline, using fallback dataset.");
      }
    }

    fetchLiveGithubData();
  }, []);

  // Filter repos by search query
  const filteredRepos = liveRepos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine displayed list count
  const displayedRepos = showAll ? filteredRepos : filteredRepos.slice(0, 6);

  // Generate 52 weeks x 7 days contribution grid simulation
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const contributionGrid = Array.from({ length: 52 }, (_, wIndex) =>
    Array.from({ length: 7 }, (_, dIndex) => {
      const level = Math.floor(Math.sin(wIndex * 0.3 + dIndex) * 2 + 2);
      return level;
    })
  );

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-900/60 border-emerald-800/40";
      case 2:
        return "bg-emerald-700/80 border-emerald-600/50";
      case 3:
        return "bg-emerald-500 border-emerald-400";
      case 4:
        return "bg-emerald-300 border-white shadow-[0_0_8px_#10b981]";
      default:
        return "bg-slate-900/80 border-white/5";
    }
  };

  return (
    <section id="github" className="py-24 px-4 relative max-w-6xl mx-auto">
      <SectionHeading
        badge="Open Source & Live GitHub API"
        title="GitHub Activity & Repositories"
        subtitle="Explore all public repositories synced directly from Akshat's GitHub account (@lxakshaseth)."
      />

      {/* Top Stat Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Public Repos", value: stats.publicRepos, icon: <GithubIcon className="w-5 h-5 text-purple-400" /> },
          { label: "Total Stars", value: stats.totalStars, icon: <Star className="w-5 h-5 text-amber-400" /> },
          { label: "Year Commits", value: stats.contributionsThisYear, icon: <GitCommit className="w-5 h-5 text-emerald-400" /> },
          { label: "Followers", value: stats.followers, icon: <Users className="w-5 h-5 text-blue-400" /> },
        ].map((stat, idx) => (
          <GlassCard key={idx} className="flex items-center gap-4 p-5">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 shrink-0">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Contribution Graph Card */}
        <GlassCard className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              {stats.contributionsThisYear} Contributions in the Last Year
            </h3>
            <a
              href={`https://github.com/${stats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-purple-400 hover:underline flex items-center gap-1"
            >
              @{stats.username} <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Month Labels */}
          <div className="flex justify-between text-[10px] font-mono text-slate-400 px-1">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {/* Grid View */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1 min-w-[650px] justify-between">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-2.5 h-2.5 rounded-[2px] border transition-colors ${getLevelColor(level)}`}
                      title={`Activity level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
            <span>Learn how we count contributions</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 bg-slate-900 rounded-[2px]" />
              <div className="w-2.5 h-2.5 bg-emerald-900/60 rounded-[2px]" />
              <div className="w-2.5 h-2.5 bg-emerald-700/80 rounded-[2px]" />
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-[2px]" />
              <div className="w-2.5 h-2.5 bg-emerald-300 rounded-[2px]" />
              <span>More</span>
            </div>
          </div>
        </GlassCard>

        {/* Language Breakdown Card */}
        <GlassCard className="lg:col-span-4 space-y-4">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-400" />
              Most Used Languages
            </h3>
          </div>

          <div className="space-y-3">
            {stats.topLanguages.map((lang, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: lang.color }}
                    />
                    {lang.name}
                  </span>
                  <span className="text-slate-400">{lang.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Live GitHub Repositories Header & Search Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" />
            All Public Repositories ({filteredRepos.length})
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Browse and open all repositories directly from @{stats.username}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Filter Input */}
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search repositories..."
              suppressHydrationWarning
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          {isLive && (
            <span className="px-2.5 py-1.5 rounded-xl text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live API
            </span>
          )}
        </div>
      </div>

      {/* Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedRepos.map((repo, idx) => (
          <GlassCard
            key={idx}
            className="space-y-4 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-pointer"
            onClick={() => {
              sounds.playClick();
              window.open(repo.url, "_blank");
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-base font-bold text-white hover:text-purple-400 transition-colors flex items-center gap-2 truncate max-w-[200px]"
                >
                  <GithubIcon className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate">{repo.name}</span>
                </a>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Public
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {repo.description}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                {repo.language}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                  <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars}
                </span>
                <span className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <GitFork className="w-3.5 h-3.5 text-blue-400" /> {repo.forks}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Show All / Show Less Toggle Button */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {filteredRepos.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            suppressHydrationWarning
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105 active:scale-95"
          >
            {showAll ? (
              <>
                Show Fewer Repositories <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All {filteredRepos.length} Repositories <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}

        <a
          href={`https://github.com/${stats.username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel text-purple-400 hover:text-white border border-purple-500/30 hover:bg-purple-600/20 text-xs font-semibold transition-all"
        >
          Open GitHub Profile (@{stats.username}) <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
