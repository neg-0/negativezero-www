import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  Bug, 
  Map, 
  FileText, 
  FlaskConical, 
  WifiOff, 
  CheckCircle, 
  XCircle, 
  ShieldCheck,
  MousePointer2
} from "lucide-react";
import Link from "next/link";

export default function PestControlLitePage() {
  const slug = "pest-control-lite";

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-300 font-sans selection:bg-orange-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-orange-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-[0.2em]">
            <Bug className="w-3.5 h-3.5" />
            Arena Experiment: Pest Operations
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[0.85]">
            STOP OVERPAYING FOR <br />
            <span className="text-orange-500 underline decoration-orange-500/30 decoration-8 underline-offset-8">BLOATED SOFTWARE.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            PestPac is too complex. FieldRoutes is buggy. [Product Name] is simple scheduling, routing, and billing for the modern exterminator.
          </p>

          <div className="flex flex-col gap-8">
            <WaitlistForm product={slug} />
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-orange-500/50" /> NO CONSULTANT NEEDED</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-orange-500/50" /> WORKS OFFLINE</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-orange-500/50" /> SMART ROUTING</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-28 px-4 border-b border-orange-950/20 bg-slate-950/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
                Owners hate paying $300+/mo <br />
                <span className="text-orange-500 text-3xl">for features they never use.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Solo operators and small fleets (1-5 trucks) are stuck between "Enterprise Bloat" 
                and "Buggy Cheapware". We're building the middle ground: a digital clipboard 
                that actually syncs.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Map className="w-5 h-5" />, text: "Smart Routing: Drag-and-drop scheduling" },
                  { icon: <FileText className="w-5 h-5" />, text: "One-Tap Invoicing: Techs finish, customer billed" },
                  { icon: <FlaskConical className="w-5 h-5" />, text: "Chemical Tracking: Auto-logs for state reporting" },
                  { icon: <WifiOff className="w-5 h-5" />, text: "Offline Mode: Works in basements & crawlspaces" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200">
                    <div className="text-orange-500">{item.icon}</div>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-orange-950/10 border border-orange-500/10 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                  <XCircle className="w-24 h-24 text-orange-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-orange-500/50 font-mono text-xs uppercase tracking-widest mb-4">// Why_I_Left</div>
                  <blockquote className="text-2xl italic text-slate-100 leading-snug mb-6 font-light">
                    "I left FieldRoutes because of the bugs. This is exactly what I needed: a digital clipboard that syncs with QuickBooks."
                  </blockquote>
                  <div className="text-sm text-slate-500 font-mono italic">
                    — Small Fleet Owner (5 Trucks)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">PestPac</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Enterprise bloat & expensive consultants."</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">FieldRoutes</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Substantially expensive & credit errors."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-28 px-4 bg-orange-950/5">
        <div className="container mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">No Bloat. Just Business.</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Stop fighting your software and start killing pests. 
            We've stripped away the enterprise complexity to give you what you actually need.
          </p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MousePointer2 className="w-10 h-10 text-orange-500" />,
              title: "Drag & Drop Dispatch",
              desc: "Manage your entire fleet's route on one screen. Optimize for drive time with a single click."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
              title: "Auto Compliance",
              desc: "Log chemical usage in the field. Generate state-ready reports automatically every month."
            },
            {
              icon: <WifiOff className="w-10 h-10 text-orange-500" />,
              title: "Basement Proof",
              desc: "Crawlspaces and basements shouldn't break your app. Sync data automatically when you hit LTE."
            }
          ].map((f, i) => (
            <div key={i} className="p-10 border border-slate-800 bg-slate-900/20 hover:border-orange-500/30 transition-all duration-300 group rounded-2xl">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="mb-12 inline-block">
            <div className="bg-orange-500/5 border border-orange-500/10 p-6 rounded-3xl">
              <ShieldCheck className="w-14 h-14 text-orange-500/80 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">The Anti-PestPac.</h2>
              <p className="text-orange-500/60 font-mono text-sm uppercase">Simple. Reliable. Profitable.</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready for Simple?</h2>
          <p className="text-xl text-slate-400 mb-14 font-light leading-relaxed">
            Stop overpaying for bloat. Join the waitlist for the first modern operations platform 
            built for the 1-5 truck fleet.
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
