import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import Link from "next/link";
import { Check, X, Map, FileText, DollarSign, Zap } from "lucide-react";

export default function JustRoutePage() {
  const slug = "just-route";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-sky-500/30 pb-20 overflow-x-hidden">
      <MetricsTracker product={slug} />
      
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">← BACK_TO_ARENA</Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Blue "Pool" glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Live Experiment: JustRoute
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9] text-white">
            Stop Paying for Features <br className="hidden md:block" />
            <span className="text-sky-400">You Don't Use.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-snug mb-12">
            A stripped-down route optimizer for pool pros who just want to clean pools and get paid. No "enterprise" bloat. No forced billing updates.
          </p>

          <div className="max-w-md">
            <WaitlistForm product={slug} />
            <p className="mt-4 text-xs text-slate-500 font-mono italic">
              * Early access gets 50% off for life. Limited to first 50 signups.
            </p>
          </div>
        </div>
      </header>

      {/* The Pain / Social Proof */}
      <section className="py-24 px-4 border-y border-slate-800 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sky-500 font-mono text-sm uppercase tracking-widest mb-8">The Industry Problem</p>
          <blockquote className="relative">
            <p className="text-3xl md:text-4xl font-light italic text-slate-200 leading-tight mb-6">
              "I just want to route my stops and send invoices. Why does that cost $150/mo?"
            </p>
            <footer className="text-slate-500 font-mono text-sm">— Common sentiment on r/PoolPros</footer>
          </blockquote>
        </div>
      </section>

      {/* Value Prop / Bullets */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6">
                <Map className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Simple Routing</h3>
              <p className="text-slate-400 leading-relaxed">
                Drag-and-drop optimization powered by Google Maps. Get your techs on the fastest path without the headache.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white">QBO Sync</h3>
              <p className="text-slate-400 leading-relaxed">
                One-click invoice generation. Sync directly with QuickBooks Online. We don't force you to use our payment processor.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Flat Pricing</h3>
              <p className="text-slate-400 leading-relaxed">
                No "per customer" tax. $29/mo for up to 5 trucks. Scale your business without getting penalized by your software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison / The "No" List */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Built for Pros, Not "Enterprise"</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-red-500 uppercase tracking-[0.2em] mb-4">What we cut:</h4>
                <ul className="space-y-3">
                  {["Forced payment processing", "Hidden per-customer fees", "Bloated CRM features", "Complex inventory tracking", "Mandatory billing updates"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400">
                      <X className="w-4 h-4 text-red-900" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-sky-500 uppercase tracking-[0.2em] mb-4">What we kept:</h4>
                <ul className="space-y-3">
                  {["Fast route optimization", "Professional invoicing", "Mobile-first tech app", "Simple customer management", "Rock-solid reliability"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <Check className="w-4 h-4 text-sky-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to take your time back?</h2>
          <div className="max-w-md mx-auto">
            <WaitlistForm product={slug} />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <ArenaFooter currentSlug={slug} />
      </div>
    </div>
  );
}
