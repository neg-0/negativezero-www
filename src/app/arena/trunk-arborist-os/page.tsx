import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  TreePine, 
  RefreshCw, 
  Smartphone, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  MonitorOff, 
  Apple,
  ClipboardCheck
} from "lucide-react";
import Link from "next/link";

export default function TrunkArboristOSPage() {
  const slug = "trunk-arborist-os";

  return (
    <div className="min-h-screen bg-[#051612] text-emerald-50/90 font-sans selection:bg-emerald-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-emerald-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em]">
            <TreePine className="w-3.5 h-3.5" />
            Arena Experiment: Arborist Operations
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[0.85]">
            STOP FIGHTING <br />
            <span className="text-emerald-500 underline decoration-emerald-500/30 decoration-8 underline-offset-8">ERROR 3170.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-100/60 max-w-2xl mb-12 leading-relaxed font-light">
            The modern CRM for Tree Care pros that actually syncs with QuickBooks Online. 
            No Web Connector. No Windows VM. Just results.
          </p>

          <div className="flex flex-col gap-8">
            <WaitlistForm product={slug} />
            <div className="flex items-center gap-4 text-sm text-emerald-500/50 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> NATIVE QBO API</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> MAC NATIVE</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> MOBILE FIRST</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-28 px-4 border-b border-emerald-900/20 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
                You're an arborist, <br />
                <span className="text-emerald-500">not an IT consultant.</span>
              </h2>
              <p className="text-lg text-emerald-100/70 mb-10 leading-relaxed">
                Why are you paying $300/mo for software that requires a Windows desktop 
                running 24/7 just to sync your invoices? SingleOps and Arborgold are 
                powerful, but their tech stack is stuck in 2012.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <MonitorOff className="w-5 h-5" />, text: "Kill the Windows 'Sync PC' forever" },
                  { icon: <RefreshCw className="w-5 h-5" />, text: "Native QBO API integration (no Web Connector)" },
                  { icon: <Smartphone className="w-5 h-5" />, text: "Mobile-first proposals sent from the bucket" },
                  { icon: <Apple className="w-5 h-5" />, text: "Mac-native back office for the modern owner" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-emerald-50">
                    <div className="text-emerald-500">{item.icon}</div>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-emerald-950/30 border border-emerald-500/10 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <AlertTriangle className="w-24 h-24 text-emerald-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4">// Sync_Failure_Log</div>
                  <blockquote className="text-2xl italic text-emerald-50/90 leading-snug mb-6 font-light">
                    "My SingleOps sync breaks every week. Error 3170 again. I spend 5 hours a week fixing sync errors instead of quoting jobs."
                  </blockquote>
                  <div className="text-sm text-emerald-500/60 font-mono italic">
                    — Anonymous Tree Care Owner
                  </div>
                </div>
              </div>

              <div className="bg-black/40 border border-emerald-500/5 p-10 rounded-3xl relative">
                <div className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4">// Community_Feedback</div>
                <blockquote className="text-xl italic text-emerald-100/70 leading-snug mb-6 font-light">
                  "Arborgold is great for tree inventory, but the accounting side is a nightmare. I just want my invoices in QuickBooks without the headache."
                </blockquote>
                <div className="text-sm text-emerald-500/40 font-mono italic">
                  — r/arborists
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-28 px-4 bg-emerald-950/10">
        <div className="container mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for the Field.</h2>
          <p className="text-xl text-emerald-100/50 max-w-2xl mx-auto font-light">
            Trunk isn't just a wrapper around a database. It's a purpose-built OS for 
            high-growth tree care companies.
          </p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <TreePine className="w-10 h-10 text-emerald-500" />,
              title: "Tree Inventory",
              desc: "Map every tree on a property with GPS precision. Track Plant Health Care (PHC) history and recommendations."
            },
            {
              icon: <ClipboardCheck className="w-10 h-10 text-emerald-500" />,
              title: "Rapid Estimates",
              desc: "Generate professional PDF proposals in seconds. Client signs on your iPad, invoice syncs to QBO instantly."
            },
            {
              icon: <Zap className="w-10 h-10 text-emerald-500" />,
              title: "Automated Scheduling",
              desc: "Drag-and-drop dispatching that actually respects drive time and crew capability."
            }
          ].map((f, i) => (
            <div key={i} className="p-10 border border-emerald-900/30 bg-black/40 hover:bg-emerald-900/10 hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-emerald-100/60 leading-relaxed font-light text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="mb-12 inline-block">
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-3xl">
              <RefreshCw className="w-14 h-14 text-emerald-500 mx-auto mb-4 animate-[spin_10s_linear_infinite]" />
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Sync Reimagined.</h2>
              <p className="text-emerald-500/70 font-mono text-sm uppercase">Bulletproof. Native. Fast.</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Start Climbing Again.</h2>
          <p className="text-xl text-emerald-100/60 mb-14 font-light leading-relaxed">
            Stop wasting your weekends on accounting sync errors. 
            Join the beta for the only Arborist OS built for the future.
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
