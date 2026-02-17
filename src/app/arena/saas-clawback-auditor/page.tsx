import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { CheckCircle, Shield, Search, Zap, AlertTriangle, FileText, ListChecks, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function SaasClawbackAuditorPage() {
  const slug = "saas-clawback-auditor";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-red-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium uppercase tracking-wider">
            <AlertTriangle className="w-3 h-3" />
            Arena Experiment: MSP Operations & Security
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.85]">
            STOP THE <span className="text-red-500">"I THOUGHT YOU</span><br />
            REVOKED THAT?" PHONE CALL.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            The MSP offboarding tool that finds and kills the Shadow SaaS you didn't know existed. 
            Build a "Kill List" in seconds, not hours.
          </p>

          <div className="flex flex-col gap-6">
            <WaitlistForm product={slug} />
            <p className="text-xs text-slate-500 font-mono italic">
              "We disable AD, but they still have the Twitter login. This tool found 15 apps we missed in seconds."
            </p>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-24 px-4 border-b border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
                Offboarding is more than just disabling Active Directory.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                You're terrified of liability because of "stupid mistakes" like a missing a login. 
                Former employees still have access to Canva, ChatGPT, or the company LinkedIn because someone forgot 
                they even signed up for it.
              </p>
              
              <div className="space-y-4">
                {[
                  "Connect to M365 and scan historical 'Welcome' emails",
                  "Build an instant inventory of Shadow SaaS accounts",
                  "Generate a step-by-step revocation checklist",
                  "Prove your value with a 'Clean Bill of Health' report"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-red-600 text-white font-bold px-4 py-1 text-sm rounded-full shadow-lg backdrop-blur-sm">
                  THE FEAR
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-snug">
                  "Always double check client offboarding access... missed checklist step... former employee still had VPN access."
                </blockquote>
                <div className="mt-4 text-sm text-slate-500 font-mono">
                  — r/msp
                </div>
              </div>

              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-amber-500 text-black font-bold px-4 py-1 text-sm rounded-full shadow-lg backdrop-blur-sm">
                  THE COST
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-snug">
                  "The client asked: 'Why can [Fired Employee] still post on our LinkedIn?' We almost lost the contract over a simple oversight."
                </blockquote>
                <div className="mt-4 text-sm text-slate-500 font-mono">
                  — MSP Service Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="container mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The "Safety Net" for Offboarding.</h2>
          <p className="text-slate-400">Enterprise tools are too complex for SMB clients. Manual checklists fail. Clawback is the middle ground.</p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-8 h-8 text-red-500" />,
              title: "Shadow Scan",
              desc: "Deep-scan user historical email for 'Welcome to' notifications to build a Shadow SaaS Inventory automatically."
            },
            {
              icon: <ListChecks className="w-8 h-8 text-red-500" />,
              title: "Kill List",
              desc: "Get an auto-generated revocation checklist for unmanaged apps like Canva, Dropbox, and ChatGPT."
            },
            {
              icon: <FileText className="w-8 h-8 text-red-500" />,
              title: "Client Report",
              desc: "Generate a 'Clean Bill of Health' PDF to show the client exactly which doors you closed."
            }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-white/5 bg-black/40 hover:border-red-500/30 transition-all group hover:-translate-y-1">
              <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 inline-block">
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl">
              <ShieldCheck className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Liability Protected.</h2>
              <p className="text-slate-400">Never leave a backdoor open again.</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Audit an Offboarding (Free)</h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Connect to your client's M365 and find the apps you missed. 
            Join the waitlist for early access.
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
