import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { Ghost, CircleDollarSign, RefreshCw, Zap, AlertCircle, TrendingDown, Users, Search } from "lucide-react";
import Link from "next/link";

export default function SaasWasteAuditorPage() {
  const slug = "saas-waste-auditor";

  return (
    <div className="min-h-screen bg-[#050505] text-amber-50/90 font-sans selection:bg-amber-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-amber-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.07),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium uppercase tracking-wider">
            <Ghost className="w-3 h-3" />
            Arena Experiment: The "Zombie Seat Hunter"
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.85]">
            STOP BURNING CASH ON <br />
            <span className="text-amber-500 italic">"ZOMBIE"</span> SAAS SEATS.
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-50/60 max-w-2xl mb-10 leading-relaxed font-light">
            The lightweight spend tracker for 10-200 person companies. We connect your invoices to your user logins to find unused licenses instantly.
          </p>

          <div className="flex flex-col gap-6">
            <WaitlistForm product={slug} />
            <div className="flex items-center gap-4 text-xs text-amber-500/40 font-mono uppercase tracking-widest">
              <span>No agents to install</span>
              <span className="w-1 h-1 bg-amber-500/20 rounded-full" />
              <span>No enterprise contracts</span>
              <span className="w-1 h-1 bg-amber-500/20 rounded-full" />
              <span>Free audit report</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-24 px-4 border-b border-amber-500/5 bg-amber-500/[0.01]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
                Finance sees the invoice.<br />IT sees the user list.<br /><span className="text-amber-500">Nobody sees both.</span>
              </h2>
              <p className="text-lg text-amber-50/60 mb-8 leading-relaxed">
                Founders and Sysadmins at growing startups are bleeding cash on software because they lack visibility. 
                Marketing buys tools on a credit card, IT has no idea, and you're paying for 50 seats when only 32 people are actually logging in.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "The Invisible Drain",
                    desc: "Paying for Notion/Adobe/Slack seats for employees who left months ago."
                  },
                  {
                    title: "Shadow IT Leakage",
                    desc: "New recurring charges hitting the company card without approval."
                  },
                  {
                    title: "The Auto-Renew Trap",
                    desc: "Missing the 30-day window to cancel that $5,000 annual contract."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 shrink-0 bg-amber-500/20 p-1 rounded">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-amber-50/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="bg-amber-950/20 border border-amber-500/10 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <blockquote className="text-xl italic text-amber-50/80 leading-snug relative z-10">
                  "Found out our startup wasted $2.8k/month on tools nobody used... IT should be involved but we aren't."
                </blockquote>
                <div className="mt-4 text-sm text-amber-500/40 font-mono">
                  — r/sysadmin, Oct 2025
                </div>
              </div>

              <div className="bg-amber-950/20 border border-amber-500/10 p-8 rounded-2xl">
                <blockquote className="text-xl italic text-amber-50/80 leading-snug">
                  "Found $1,200/mo in unused seats in 10 minutes. It paid for itself instantly."
                </blockquote>
                <div className="mt-4 text-sm text-amber-500/40 font-mono">
                  — Beta Tester Quote
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl mb-16">
          <h2 className="text-sm font-mono text-amber-500 mb-4 uppercase tracking-[0.3em]">How it works</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Three steps to a cleaner balance sheet.</h3>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <CircleDollarSign className="w-8 h-8 text-amber-500" />,
              title: "1. Connect Finance",
              desc: "Link Xero, QuickBooks, or upload a CSV of your credit card statements. We identify every software line item."
            },
            {
              icon: <Users className="w-8 h-8 text-amber-500" />,
              title: "2. Sync Logins",
              desc: "Connect G-Suite or SSO. We match 'Seats Paid For' against 'Last Login' data in real-time."
            },
            {
              icon: <TrendingDown className="w-8 h-8 text-amber-500" />,
              title: "3. Kill the Waste",
              desc: "Get a prioritized list of licenses to downgrade or cancel. We show you exactly where the $ is leaking."
            }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-amber-500/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-amber-50/50 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-amber-500/[0.02] border-y border-amber-500/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 italic">Enterprise tools are too much. Spreadsheets are too little.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
              <h4 className="font-mono text-xs text-amber-500/60 uppercase tracking-widest">The Old Way</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">❌ BetterCloud/Zylo ($10k+ min)</li>
                <li className="flex items-center gap-2 text-sm">❌ Manual spreadsheets (outdated instantly)</li>
                <li className="flex items-center gap-2 text-sm">❌ Finance tools (see spend, not usage)</li>
              </ul>
            </div>
            <div className="space-y-4 border-l border-amber-500/20 pl-12">
              <h4 className="font-mono text-xs text-amber-500 uppercase tracking-widest">The Auditor Way</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">✅ Under $100/mo for SMBs</li>
                <li className="flex items-center gap-2 text-sm">✅ Automated usage matching</li>
                <li className="flex items-center gap-2 text-sm">✅ "One-button" audit report</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
             <div className="text-6xl font-black text-amber-500 mb-4 tracking-tighter">$1,800/mo</div>
             <p className="text-amber-50/40 font-mono uppercase text-xs tracking-widest">Average waste found in 50-person startups</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Audit My Waste</h2>
          <p className="text-xl text-amber-50/60 mb-12 font-light max-w-xl mx-auto">
            Get your first report for free. No credit card required to see the "Zombie" seats.
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
