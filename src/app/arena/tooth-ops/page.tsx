import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  Stethoscope, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Wifi, 
  Zap, 
  Database, 
  ServerCrash, 
  CheckCircle, 
  Clock,
  Layout,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function ToothOpsPage() {
  const slug = "tooth-ops";

  return (
    <div className="min-h-screen bg-[#0a0f12] text-slate-300 font-sans selection:bg-cyan-500/30">
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
          <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
            <Stethoscope className="w-3.5 h-3.5" />
            Arena Experiment: Dental Practice Management
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[0.85]">
            OPEN DENTAL <br />
            <span className="text-cyan-500 underline decoration-cyan-500/30 decoration-8 underline-offset-8">WITHOUT THE SERVER.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Stop managing backups. Stop rebooting the server. Stop fighting VPNs.
            Get the reliability of Open Dental with the freedom of the cloud.
          </p>

          <div className="flex flex-col gap-8">
            <WaitlistForm product={slug} />
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-500/50" /> CLOUD NATIVE</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-500/50" /> 99.9% UPTIME</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-500/50" /> ZERO IT OVERHEAD</span>
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
                "Dentrix Ascend was a <br />
                <span className="text-red-500 text-3xl italic">major cluster... stay away!"</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Dentists are tired of "server down" errors and slow, buggy cloud migrations. 
                You want the familiar workflow of Open Dental, but you don't want to be an IT manager.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Cloud className="w-5 h-5" />, text: "Cloud Native: Access from home, no VPN required" },
                  { icon: <Zap className="w-5 h-5" />, text: "Rock Solid: 99.99% uptime architecture" },
                  { icon: <Layout className="w-5 h-5" />, text: "Familiar UI: If you know Open Dental, you know ToothOps" },
                  { icon: <Globe className="w-5 h-5" />, text: "Modern Web: Fast, responsive, and secure" }
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
                  <ServerCrash className="w-24 h-24 text-cyan-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-cyan-500/50 font-mono text-xs uppercase tracking-widest mb-4">// Community_Voice</div>
                  <blockquote className="text-2xl italic text-slate-100 leading-snug mb-6 font-light">
                    "I use eaglesoft server based. but it crashes too many times a day. We need something that just works."
                  </blockquote>
                  <div className="text-sm text-slate-500 font-mono italic">
                    — r/Dentistry, Oct 2025
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Dentrix Ascend</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Cloud but broken, slow, and frustrating."</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-red-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Eaglesoft</div>
                  <div className="text-slate-400 text-xs leading-relaxed">"Ancient architecture that crashes daily."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-28 px-4 bg-cyan-950/5">
        <div className="container mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">No Server. No Headaches.</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            We've taken the battle-tested workflow of the industry's best software 
            and rebuilt it for the modern web.
          </p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Activity className="w-10 h-10 text-cyan-500" />,
              title: "Always Online",
              desc: "While other offices are waiting for their server to reboot, you're seeing patients. 99.99% uptime guaranteed."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-cyan-500" />,
              title: "Automatic Backups",
              desc: "Never worry about data loss again. Your practice data is encrypted and backed up in real-time across multiple regions."
            },
            {
              icon: <Wifi className="w-10 h-10 text-cyan-500" />,
              title: "Anywhere Access",
              desc: "Check your schedule from home, finish notes on your laptop, or manage multiple locations from one login. No VPNs."
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
              <Database className="w-14 h-14 text-cyan-500/80 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">The Modern Open Dental.</h2>
              <p className="text-cyan-500/60 font-mono text-sm uppercase">Keep the workflow. Lose the server.</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to Ditch the Server?</h2>
          <p className="text-xl text-slate-400 mb-14 font-light leading-relaxed">
            Stop overpaying for IT support and server maintenance. Join the waitlist for ToothOps 
            and experience the power of a modern dental platform.
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
