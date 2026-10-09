import { Check, Cloud, FileText, Code2 } from "lucide-react";
const visualIds = ["docbrain-ai", "task5-apex-planet", "college-event-portal", "simple-pdf-image-merger", "sales-automation", "college-discovery", "civic-ai-platform", "smart-ai-lms", "enterprise-mobility"];
export function projectVisualIndex(id: string) { return visualIds.indexOf(id); }
export function ProjectArtwork({ id, title }: { id: string; title: string }) {
  const i = projectVisualIndex(id);
  const majorArtwork: Record<string, { label: string; headline: string; modules: string[] }> = {
    "sales-automation": { label: "SALES / CONNECT", headline: "Better conversations. Smarter workflows.", modules: ["Leads", "WhatsApp", "Campaigns", "AI assistant"] },
    "college-discovery": { label: "CAMPUSPULSE / DISCOVER", headline: "Find your campus. Compare your future.", modules: ["Search", "Compare", "Predict", "Save"] },
    "civic-ai-platform": { label: "CIVIC AI / CONNECT", headline: "Local problems. Connected solutions.", modules: ["Report", "Classify", "Assign", "Resolve"] },
    "smart-ai-lms": { label: "SMART-LMS / LEARN", headline: "A smarter space to learn and build.", modules: ["AI tutor", "Virtual labs", "CodePilot", "Progress"] },
    "enterprise-mobility": { label: "SHIVNERI / MOVE", headline: "People in motion. Operations in sync.", modules: ["Fleet", "Live tracking", "Safety", "Analytics"] },
  };
  const artwork = majorArtwork[id];
  if (artwork) return <div className="major-project-demo"><span>{artwork.label}</span><h3>{artwork.headline}</h3><div className="major-demo-items">{artwork.modules.map(module => <span key={module}>{module}</span>)}</div></div>;
  if (i < 0) return <div className="generic-project-demo"><Code2 size={48}/><p>{title}</p><span>IDEA → CODE → IMPACT</span></div>;
  return <>{i === 0 ? <div className="document-demo"><div className="demo-document"><FileText size={28}/><i/><i/><i/><small>document.pdf</small></div><span className="demo-connector">→</span><div className="demo-answer"><span>✳ DocBrain AI</span><p>Your documents.<br/>Clearer answers.</p><div>Search · Retrieve · Generate</div></div></div> : i === 1 ? <div className="weather-demo"><span>WEATHER, AT A GLANCE</span><strong>24°<Cloud size={65}/></strong><p>Forecasts. Air quality. Your city.</p><div className="weather-bars">{[28,45,65,48,80,56,38].map((h,j) => <i key={j} style={{height:h}}/>)}</div></div> : i === 2 ? <div className="event-demo"><span>CAMPUS / CONNECT</span><h3>Big ideas.<br/>Shared experiences.</h3><div><span>Explore events ↗</span><span>Register ✓</span></div></div> : <div className="pdf-demo"><div>PDF</div><span>+</span><div>JPG</div><span>→</span><div className="merged-file">ONE PDF<Check size={24}/></div><p>Your files stay in your browser.</p></div>}</>;
}
