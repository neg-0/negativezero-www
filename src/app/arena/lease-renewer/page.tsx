import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { CheckCircle, Clock, FileText, Zap } from "lucide-react";
import Link from "next/link";

export default function LeaseRenewerPage() {
  const slug = "lease-renewer";

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-amber-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.05),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium uppercase tracking-wider">
            <Zap className="w-3 h-3" />
            Arena Experiment
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.85]">
            STOP CHASING<br />
            <span className="text-amber-500 underline decoration-amber-500/30 decoration-8 underline-offset-8">RENEWALS.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            The simple automation tool for DIY landlords who hate paperwork. 
            Automate your lease renewals in 3 clicks.
          </p>

          <div className="flex flex-col gap-6">
            <WaitlistForm product={slug} />
            <p className="text-xs text-slate-500 font-mono">
              Join 50+ landlords getting early access.
            </p>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-24 px-4 border-b border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                "I spend hours every month manually drafting letters..."
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                If you manage 5 to 50 units, you're in the "dead zone." 
                Too big for manual tracking, but too small for $200/mo enterprise software like Buildium or AppFolio.
              </p>
              
              <div className="space-y-4">
                {[
                  "No more manual Word doc edits",
                  "No more tracking replies in Excel",
                  "No more missed deadlines",
                  "No monthly per-unit fees"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
              <div className="absolute -top-4 -right-4 bg-amber-500 text-black font-bold px-4 py-1 text-sm rounded-full shadow-lg">
                THE PROBLEM
              </div>
              <blockquote className="text-xl italic text-slate-300 leading-snug">
                "We use... custom automations through zapier for lease renewals... 
                great for reducing manual tasks but it's a nightmare to maintain."
              </blockquote>
              <div className="mt-4 text-sm text-slate-500 font-mono">
                — Reddit User on r/realestateinvesting
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How it works.</h2>
          <p className="text-slate-400">Simple, effective, and automated.</p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FileText className="w-8 h-8 text-amber-500" />,
              title: "Upload Template",
              desc: "Upload your existing lease or use our battle-tested templates."
            },
            {
              icon: <Clock className="w-8 h-8 text-amber-500" />,
              title: "Auto-Generate",
              desc: "Set the terms, and we auto-generate renewal offers for expiring leases."
            },
            {
              icon: <Zap className="w-8 h-8 text-amber-500" />,
              title: "One-Click PDF",
              desc: "When the tenant accepts, generate the final lease PDF with one click."
            }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-white/5 bg-black/40 hover:border-amber-500/30 transition-colors group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to reclaim your weekends?</h2>
          <div className="flex justify-center mb-16">
            <WaitlistForm product={slug} />
          </div>
          <ArenaFooter currentSlug={slug} />
        </div>
      </section>
    </div>
  );
}
