import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  Truck, 
  Calendar, 
  FileText, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle, 
  Quote,
  Clock,
  Zap,
  Hammer
} from "lucide-react";
import Link from "next/link";

export default function TradeLitePage() {
  const slug = "trade-lite";

  return (
    <div className="min-h-screen bg-[#0a0c12] text-slate-300 font-sans selection:bg-blue-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-blue-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">
            <Hammer className="w-3.5 h-3.5" />
            Arena Experiment: TradeLite
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[0.85]">
            STOP PAYING $3,000/MO<br />
            <span className="text-blue-500 underline decoration-blue-500/30 decoration-8 underline-offset-8">FOR FEATURES YOU DON'T USE.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            The lean ServiceTitan alternative for HVAC and Plumbing shops with &lt;10 trucks. Get the essentials. Save the cash.
          </p>

          <div className="flex flex-col gap-8">
            <WaitlistForm product={slug} />
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-500/50" /> NO "GROWTH TAX"</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-500/50" /> DRAG-AND-DROP DISPATCH</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-500/50" /> FIELD ESTIMATES IN SECONDS</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-28 px-4 border-b border-blue-950/20 bg-slate-950/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
                Built for the shop owner <br />
                <span className="text-blue-500 text-3xl">drowning in complexity and price.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                ServiceTitan is an 800lb gorilla. It's great if you have 100 trucks, but if you're a small shop, 
                you're paying for a Salesforce instance you don't need. You want to dispatch jobs and get paid, 
                not manage a complex enterprise suite.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Calendar className="w-5 h-5" />, text: "Simple Dispatch: Drag-and-drop scheduling" },
                  { icon: <DollarSign className="w-5 h-5" />, text: "Flat Pricing: No per-truck 'Growth Tax'" },
                  { icon: <FileText className="w-5 h-5" />, text: "Fast Estimates: Build quotes in the field in seconds" },
                  { icon: <Truck className="w-5 h-5" />, text: "Built for HVAC & Plumbing: No feature bloat" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200">
                    <div className="text-blue-500">{item.icon}</div>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-blue-950/10 border border-blue-500/10 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                  <AlertTriangle className="w-24 h-24 text-blue-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-blue-500/50 font-mono text-xs uppercase tracking-widest mb-4">// SOCIAL_PROOF</div>
                  <blockquote className="text-2xl italic text-slate-100 leading-snug mb-6 font-light">
                    "ServiceTitan costs more than my truck payment."
                  </blockquote>
                  <div className="text-sm text-slate-500 font-mono italic">
                    — Reddit User (r/hvacadvice)
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative">
                <div className="absolute top-4 right-4 opacity-10">
                   <Quote className="w-8 h-8 text-blue-500" />
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-relaxed mb-4 font-light">
                  &ldquo;Features are overkill for small shops (&lt;10 techs).&rdquo;
                </blockquote>
                <div className="text-sm text-slate-500 font-mono">
                  — HVAC Owner
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">ServiceTitan</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"$25k/yr minimum. Extreme bloat."</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Housecall Pro</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Getting pricier every quarter."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-28 px-4 bg-blue-950/5">
        <div className="container mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Essentials, Perfected.</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            We stripped away the "enterprise" junk to give you the three things that actually matter 
            to your bottom line.
          </p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-10 h-10 text-blue-500" />,
              title: "Lightning Dispatch",
              desc: "A drag-and-drop calendar that doesn't require a certification to use. Get techs where they need to be."
            },
            {
              icon: <Zap className="w-10 h-10 text-blue-500" />,
              title: "Field Estimates",
              desc: "Build quotes and get signatures on-site in seconds. Stop losing jobs because you took too long to send the PDF."
            },
            {
              icon: <DollarSign className="w-10 h-10 text-blue-500" />,
              title: "Zero Growth Tax",
              desc: "One flat price. We don't penalize you for adding a new truck or growing your revenue."
            }
          ].map((f, i) => (
            <div key={i} className="p-10 border border-slate-800 bg-slate-900/20 hover:border-blue-500/30 transition-all duration-300 group rounded-2xl">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="mb-12 inline-block">
            <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-3xl">
              <Truck className="w-14 h-14 text-blue-500/80 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">The Anti-ServiceTitan.</h2>
              <p className="text-blue-500/60 font-mono text-sm uppercase">Lean. Fast. Affordable.</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Get the Essentials. Save the Cash.</h2>
          <p className="text-xl text-slate-400 mb-14 font-light leading-relaxed">
            Join the waitlist for TradeLite. Built specifically for HVAC and Plumbing shops with under 10 techs.
          </p>
          <div className="flex justify-center mb-24">
            <WaitlistForm product={slug} />
          </div>
          
          <ArenaFooter currentSlug={slug} />
        </div>
      </section>
    </div>
  );
}
