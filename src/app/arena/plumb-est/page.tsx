import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  Droplets, 
  Database, 
  Pipette, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle, 
  Quote,
  Clock,
  Layers,
  Wrench,
  Construction
} from "lucide-react";
import Link from "next/link";

export default function PlumbEstPage() {
  const slug = "plumb-est";

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-300 font-sans selection:bg-cyan-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-cyan-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-semibold uppercase tracking-[0.2em]">
            <Construction className="w-3.5 h-3.5" />
            Arena Experiment: PlumbEst
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[0.85]">
            STOP BUILDING YOUR OWN<br />
            <span className="text-cyan-500 underline decoration-cyan-500/30 decoration-8 underline-offset-8">PRICEBOOK.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            The first commercial plumbing estimator that actually ships with parts, assemblies, and labor rates ready to go.
          </p>

          <div className="flex flex-col gap-8">
            <WaitlistForm product={slug} />
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-500/50" /> 15,000+ PARTS PRE-LOADED</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-500/50" /> LOCALIZED LABOR RATES</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-500/50" /> SMART ASSEMBLIES</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-28 px-4 border-b border-cyan-950/20 bg-slate-950/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
                Built for the estimator <br />
                <span className="text-cyan-500 text-3xl">tired of "empty box" software.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Legacy software like Accubid or McCormick are powerful, but they're empty. 
                Setting up a new system is a full-time job for months. 
                PlumbEst is "Batteries Included"—start bidding in 5 minutes, not 5 months.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Database className="w-5 h-5" />, text: "15,000+ Common Parts: Pre-loaded and ready" },
                  { icon: <Pipette className="w-5 h-5" />, text: "Localized Labor: Based on your zip code" },
                  { icon: <Layers className="w-5 h-5" />, text: "Smart Assemblies: Pipe includes hangers/glue automatically" },
                  { icon: <Clock className="w-5 h-5" />, text: "Instant Estimates: No manual part entry required" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200">
                    <div className="text-cyan-500">{item.icon}</div>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-cyan-950/10 border border-cyan-500/10 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                  <AlertTriangle className="w-24 h-24 text-cyan-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-cyan-500/50 font-mono text-xs uppercase tracking-widest mb-4">// THE_PAIN</div>
                  <blockquote className="text-2xl italic text-slate-100 leading-snug mb-6 font-light">
                    "We bought the software last year and we're still not using it because the database isn't ready."
                  </blockquote>
                  <div className="text-sm text-slate-500 font-mono italic">
                    — Reddit User (r/estimators)
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative">
                <div className="absolute top-4 right-4 opacity-10">
                   <Quote className="w-8 h-8 text-cyan-500" />
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-relaxed mb-4 font-light">
                  "I spent 6 months building my database in Accubid and I'm still not done."
                </blockquote>
                <div className="text-sm text-slate-500 font-mono">
                  — Commercial Plumbing Estimator
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Legacy Tools</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Powerful but empty. Requires massive setup."</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Modern SaaS</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Better UI, but still manual part entry."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-28 px-4 bg-cyan-950/5">
        <div className="container mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stop Being a Data Entry Clerk.</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            PlumbEst ships with a pre-populated, localized database out of the box.
          </p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Database className="w-10 h-10 text-cyan-500" />,
              title: "Pre-Loaded Pricebook",
              desc: "15,000+ common plumbing parts pre-loaded with current market pricing. No more 'empty box' syndrome."
            },
            {
              icon: <Wrench className="w-10 h-10 text-cyan-500" />,
              title: "Smart Assemblies",
              desc: "Pick a fixture, and we'll automatically add the hangers, glue, and labor units. Error-free takeoffs in seconds."
            },
            {
              icon: <Droplets className="w-10 h-10 text-cyan-500" />,
              title: "Localized Labor",
              desc: "Labor rates based on your specific zip code and union/non-union status. Accurate from your first bid."
            }
          ].map((f, i) => (
            <div key={i} className="p-10 border border-slate-800 bg-slate-900/20 hover:border-cyan-500/30 transition-all duration-300 group rounded-2xl">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="mb-12 inline-block">
            <div className="bg-cyan-500/5 border border-cyan-500/10 p-6 rounded-3xl">
              <Wrench className="w-14 h-14 text-cyan-500/80 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">The Batteries-Included Estimator.</h2>
              <p className="text-cyan-500/60 font-mono text-sm uppercase">15,000+ Parts. Ready Now.</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Start Bidding in 5 Minutes.</h2>
          <p className="text-xl text-slate-400 mb-14 font-light leading-relaxed">
            Join the waitlist for PlumbEst. The only pre-loaded plumbing estimator for commercial contractors.
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
