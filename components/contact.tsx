"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./ui/icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          text: "Message sent successfully! Akshat will reply shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setStatus({
        type: "error",
        text: "Something went wrong. Please email directly at lxakshatseth90@gmail.com",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative max-w-6xl mx-auto">
      <SectionHeading
        badge="Get in Touch"
        title="Let's Build Something Great Together"
        subtitle="Open for full-stack engineering roles, freelance architectural consultancies, and AI project collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <GlassCard className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Have a project in mind or looking for a developer to join your engineering team? Reach out directly via email or social platforms!
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-purple-500/40 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">EMAIL</span>
                  <span className="text-xs font-semibold text-white group-hover:text-purple-300 break-all sm:break-normal">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-purple-500/40 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">PHONE</span>
                  <span className="text-xs font-semibold text-white group-hover:text-emerald-300">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">LOCATION</span>
                  <span className="text-xs font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono text-slate-400 font-semibold block">
                CONNECT ON SOCIALS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github.startsWith("http") ? PERSONAL_INFO.github : `https://${PERSONAL_INFO.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin.startsWith("http") ? PERSONAL_INFO.linkedin : `https://${PERSONAL_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter.startsWith("http") ? PERSONAL_INFO.twitter : `https://${PERSONAL_INFO.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7">
          <GlassCard>
            <form onSubmit={handleSubmit} suppressHydrationWarning className="space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

              {status && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-medium flex items-center gap-2.5 ${
                    status.type === "success"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  )}
                  <span>{status.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300 font-medium">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    suppressHydrationWarning
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Akshat"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-xs border border-white/10 focus:border-purple-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300 font-medium">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    suppressHydrationWarning
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-xs border border-white/10 focus:border-purple-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  suppressHydrationWarning
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Opportunity / Technical Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-xs border border-white/10 focus:border-purple-500 focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300 font-medium">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  suppressHydrationWarning
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or role details..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 text-white placeholder-slate-500 text-xs border border-white/10 focus:border-purple-500 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                suppressHydrationWarning
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] disabled:opacity-50 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
