import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { CheckCircle, Shield, Search, Zap, AlertTriangle, CreditCard } from "lucide-react";
import Link from "next/link";

export default function ShadowITDetectivePage() {
  const slug = "shadow-it-detective";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.05),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium uppercase tracking-wider">
            <Shield className="w-3 h-3" />
            Arena Experiment: Security & Operations
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.85]">
            THE "FIND EVERY<br />
            <span className="text-cyan-400 underline decoration-cyan-400/30 decoration-8 underline-offset-8">SAAS TOOL</span>" BUTTON.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            Instantly uncover shadow IT, duplicate subscriptions, and unapproved AI tools inside your Google Workspace & Slack.
          </p>

          <div className="flex flex-col gap-6">
            <WaitlistForm product={slug} />
            <p className="text-xs text-slate-500 font-mono italic">
              "Found 12 project management tools in a 50-person company. Cut $4k/mo in 20 minutes."
            </p>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-24 px-4 border-b border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
                "Shadow IT has quietly turned into 'Shadow SaaS'."
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                You're responsible for security, but you're flying blind. Employees are signing up for tools with a single click, 
                granting OAuth access to company Drive folders, and creating "Shadow SaaS" silos you don't even know exist.
              </p>
              
              <div className="space-y-4">
                {[
                  "Scan for 'Welcome to...' emails across the domain",
                  "Identify every OAuth grant to Google/Slack",
                  "Find employees using work emails for personal apps",
                  "Stop paying for 5 different project management tools"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-red-500/80 text-white font-bold px-4 py-1 text-sm rounded-full shadow-lg backdrop-blur-sm">
                  RISK
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-snug">
                  "We found 300 small apps... max 3 accounts each... created using work email. We had no idea where our data was living."
                </blockquote>
                <div className="mt-4 text-sm text-slate-500 font-mono">
                  — r/cybersecurity
                </div>
              </div>

              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-amber-500/80 text-black font-bold px-4 py-1 text-sm rounded-full shadow-lg backdrop-blur-sm">
                  WASTE
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-snug">
                  "Anyone else feel like 'shadow IT' has quietly turned into 'shadow SaaS'? It's a spreadsheet nightmare."
                </blockquote>
                <div className="mt-4 text-sm text-slate-500 font-mono">
                  — r/sysadmin
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="container mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Instant Visibility. No Sales Calls.</h2>
          <p className="text-slate-400">Enterprise SaaS management is too expensive. Spreadsheets are too slow. Shadow IT Detective is just right.</p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-8 h-8 text-cyan-400" />,
              title: "Shadow Map",
              desc: "See a complete map of every tool your employees have signed up for using their work identity."
            },
            {
              icon: <CreditCard className="w-8 h-8 text-cyan-400" />,
              title: "Waste Finder",
              desc: "Instantly identify duplicate subscriptions. Why are you paying for 3 different whiteboarding tools?"
            },
            {
              icon: <AlertTriangle className="w-8 h-8 text-cyan-400" />,
              title: "Risk Radar",
              desc: "Flag unvetted AI tools with OAuth access to your sensitive Google Drive or Slack data."
            }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-white/5 bg-black/40 hover:border-cyan-400/30 transition-all group hover:-translate-y-1">
              <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready for your Shadow Audit?</h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Connect read-only to your Workspace and get a free report in under 5 minutes.
          </p>
          <div className="flex justify-center mb-16">
            <WaitlistForm product={slug} />
          </div>
          <ArenaFooter currentSlug={slug} />
        </div>
      </section>
    </div>
  );
}
