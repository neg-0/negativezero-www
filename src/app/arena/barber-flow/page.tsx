import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { Scissors, DollarSign, UserCheck, ShieldCheck, Zap, AlertCircle, TrendingDown, Users, ScissorsLineDashed } from "lucide-react";
import Link from "next/link";

export default function BarberFlowPage() {
  const slug = "barber-flow";

  return (
    <div className="min-h-screen bg-[#050505] text-slate-50/90 font-sans selection:bg-blue-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-blue-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.07),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
            <Scissors className="w-3 h-3" />
            Arena Experiment: The Anti-Squire
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.85]">
            STOP PAYING <br />
            <span className="text-blue-500">MARKETPLACE TAXES</span> <br />
            ON YOUR OWN CLIENTS.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-50/60 max-w-2xl mb-10 leading-relaxed font-light">
            Squire charges your client $2.50 to book. Booksy takes 30% of your first cut. BarberFlow is just a booking tool. No taxes. No games.
          </p>

          <div className="flex flex-col gap-6">
            <WaitlistForm product={slug} />
            <div className="flex items-center gap-4 text-xs text-blue-500/40 font-mono uppercase tracking-widest">
              <span>Zero Client Booking Fees</span>
              <span className="w-1 h-1 bg-blue-500/20 rounded-full" />
              <span>White-Label Booking Link</span>
              <span className="w-1 h-1 bg-blue-500/20 rounded-full" />
              <span>Simple Flat Rate</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-24 px-4 border-b border-blue-500/5 bg-blue-500/[0.01]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
                You built the brand.<br />You did the work.<br /><span className="text-blue-500">Why are they taxing your clients?</span>
              </h2>
              <p className="text-lg text-slate-50/60 mb-8 leading-relaxed">
                Platforms like Squire and Booksy aren't just tools—they're middlemen. They charge you a high monthly fee, and then they charge your clients a "convenience fee" just to book with you.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "The 'Booking Fee' Trap",
                    desc: "Squire charges your clients $1.50 - $2.50 per appointment. Over 100 bookings a month, that's $250 your clients are paying to them, not you."
                  },
                  {
                    title: "Renting Your Own Clients",
                    desc: "Booksy puts other barbers' ads on your profile. You pay them to help your competitors steal your regulars."
                  },
                  {
                    title: "The Double Dip",
                    desc: "Subscription fees + processing fees + client fees. They're making money on every single touchpoint."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 shrink-0 bg-blue-500/20 p-1 rounded">
                      <AlertCircle className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-50/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="bg-blue-950/20 border border-blue-500/10 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <blockquote className="text-xl italic text-slate-50/80 leading-snug relative z-10">
                  "Squire charges payment processing fees for both barbers AND clients. It's double dipping. The whole thing feels misleading."
                </blockquote>
                <div className="mt-4 text-sm text-blue-500/40 font-mono">
                  — Verified r/Barber User
                </div>
              </div>

              <div className="bg-blue-950/20 border border-blue-500/10 p-8 rounded-2xl">
                <blockquote className="text-xl italic text-slate-50/80 leading-snug">
                  "Booksy does not care about you, only that you run paid ads to stay at the top of their search."
                </blockquote>
                <div className="mt-4 text-sm text-blue-500/40 font-mono">
                  — Barbershop Owner (3 Chairs)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl mb-16 text-center">
          <h2 className="text-sm font-mono text-blue-500 mb-4 uppercase tracking-[0.3em]">The Anti-Marketplace</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Everything you need. None of the taxes.</h3>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
              title: "Zero Client Fees",
              desc: "Your price is the price. No hidden 'convenience' tax for your clients. They book, they pay you, that's it."
            },
            {
              icon: <UserCheck className="w-8 h-8 text-blue-500" />,
              title: "Your Brand, Not Theirs",
              desc: "A clean, professional booking link that features your work. No competitor ads, no 'Discover' marketplace."
            },
            {
              icon: <DollarSign className="w-8 h-8 text-blue-500" />,
              title: "Simple Flat Rate",
              desc: "One low monthly price per barber. No 'growth tax' as you get busier. Keep 100% of your tips and service fees."
            }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-blue-500/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-50/50 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-blue-500/[0.02] border-y border-blue-500/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 italic">Stop being a line item in their profit report.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
              <h4 className="font-mono text-xs text-blue-500/60 uppercase tracking-widest">The "Marketplace" Way</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-red-400/80">❌ $2.50 client booking fee</li>
                <li className="flex items-center gap-2 text-sm text-red-400/80">❌ Competitor ads on your page</li>
                <li className="flex items-center gap-2 text-sm text-red-400/80">❌ 30% commission on 'new' clients</li>
              </ul>
            </div>
            <div className="space-y-4 border-l border-blue-500/20 pl-12">
              <h4 className="font-mono text-xs text-blue-500 uppercase tracking-widest">The BarberFlow Way</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-green-400/80">✅ $0.00 client booking fee</li>
                <li className="flex items-center gap-2 text-sm text-green-400/80">✅ 100% Private, White-label link</li>
                <li className="flex items-center gap-2 text-sm text-green-400/80">✅ Flat monthly rate. Period.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
             <div className="text-6xl font-black text-blue-500 mb-4 tracking-tighter">100%</div>
             <p className="text-slate-50/40 font-mono uppercase text-xs tracking-widest">Of the cut stays in your pocket</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Keep 100% of the Cut.</h2>
          <p className="text-xl text-slate-50/60 mb-12 font-light max-w-xl mx-auto">
            We're building the tool that puts the barber shop back in control. Join the waitlist for early access.
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
