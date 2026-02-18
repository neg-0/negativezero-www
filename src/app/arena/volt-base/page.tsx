import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  Zap, 
  Database, 
  ZapOff, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle, 
  Quote,
  Clock,
  Layout,
  Construction
} from "lucide-react";
import Link from "next/link";

export default function VoltBasePage() {
  const slug = "volt-base";

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-300 font-sans selection:bg-yellow-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-yellow-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-semibold uppercase tracking-[0.2em]">
            <Construction className="w-3.5 h-3.5" />
            Arena Experiment: VoltBase
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[0.85]">
            STOP SPENDING 800 HOURS<br />
            <span className="text-yellow-500 underline decoration-yellow-500/30 decoration-8 underline-offset-8">BUILDING YOUR PRICEBOOK.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            VoltBase is the pre-loaded electrical estimating tool with 15,000+ assemblies ready to go from day one.
          </p>

          <div className="flex flex-col gap-8">
            <WaitlistForm product={slug} />
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-yellow-500/50" /> NO SETUP REQUIRED</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-yellow-500/50" /> LIVE SUPPLIER PRICING</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-yellow-500/50" /> ZERO WEB LAG</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-28 px-4 border-b border-yellow-950/20 bg-slate-950/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
                Built for the estimator <br />
                <span className="text-yellow-500 text-3xl">sick of database maintenance.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Accubid and Conest are the industry standards, but they're stuck in the 90s. 
                They require months of setup and endless hours of manual data entry just to get your first bid out.
                VoltBase flips the script: we built the database so you don't have to.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Database className="w-5 h-5" />, text: "Pre-Loaded Database: 15,000+ electrical assemblies" },
                  { icon: <Zap className="w-5 h-5" />, text: "Live Pricing: Direct links to CED, Graybar & more" },
                  { icon: <Layout className="w-5 h-5" />, text: "Web Native: No 1990s Windows servers required" },
                  { icon: <Clock className="w-5 h-5" />, text: "Bid in Minutes: Zero-to-estimate in record time" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200">
                    <div className="text-yellow-500">{item.icon}</div>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-yellow-950/10 border border-yellow-500/10 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                  <AlertTriangle className="w-24 h-24 text-yellow-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-yellow-500/50 font-mono text-xs uppercase tracking-widest mb-4">// THE_PAIN</div>
                  <blockquote className="text-2xl italic text-slate-100 leading-snug mb-6 font-light">
                    "I have 800 hours into my Accubid database... I wish I could just buy one."
                  </blockquote>
                  <div className="text-sm text-slate-500 font-mono italic">
                    — Reddit User (r/estimators)
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative">
                <div className="absolute top-4 right-4 opacity-10">
                   <Quote className="w-8 h-8 text-yellow-500" />
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-relaxed mb-4 font-light">
                  "The biggest drawback is the lag time... database was not even remotely close to being fully built out."
                </blockquote>
                <div className="text-sm text-slate-500 font-mono">
                  — Electrical Contractor
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Accubid</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Massive setup. 1990s architecture."</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Excel</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Manual updates. Error prone."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-28 px-4 bg-yellow-950/5">
        <div className="container mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for Speed. Pre-loaded for Power.</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Stop being a data entry clerk. Start being an estimator.
          </p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Database className="w-10 h-10 text-yellow-500" />,
              title: "Pre-Loaded Data",
              desc: "15,000+ electrical assemblies ready to use. We built the kits, items, and labor units so you don't have to."
            },
            {
              icon: <Zap className="w-10 h-10 text-yellow-500" />,
              title: "Live Supplier Pricing",
              desc: "Connect direct to CED or Graybar. No more manual material price updates or outdated bids."
            },
            {
              icon: <ZapOff className="w-10 h-10 text-yellow-500" />,
              title: "Zero Lag Interface",
              desc: "Web-native architecture. No more waiting 3 seconds for a dialog box to open on a legacy Windows server."
            }
          ].map((f, i) => (
            <div key={i} className="p-10 border border-slate-800 bg-slate-900/20 hover:border-yellow-500/30 transition-all duration-300 group rounded-2xl">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="mb-12 inline-block">
            <div className="bg-yellow-500/5 border border-yellow-500/10 p-6 rounded-3xl">
              <Construction className="w-14 h-14 text-yellow-500/80 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">The Anti-Accubid.</h2>
              <p className="text-yellow-500/60 font-mono text-sm uppercase">15,000+ Assemblies. Day One.</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Start Bidding in 5 Minutes.</h2>
          <p className="text-xl text-slate-400 mb-14 font-light leading-relaxed">
            Join the waitlist for VoltBase. The only pre-loaded electrical estimating tool for the modern web.
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
