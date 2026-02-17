import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { CheckCircle, Smartphone, FileText, Bell, Users, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function LeaseRenewerPage() {
  const slug = "lease-renewer";

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-200 font-sans selection:bg-emerald-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-wider">
            <Smartphone className="w-3 h-3" />
            Arena Experiment: Real Estate Tech
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.85]">
            THE "REPLY YES"<br />
            <span className="text-emerald-400 underline decoration-emerald-400/30 decoration-8 underline-offset-8">LEASE RENEWAL.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            Stop chasing tenants with emails they ignore. Automate your entire renewal process via text message. 98% open rates. Zero nagging.
          </p>

          <div className="flex flex-col gap-6">
            <WaitlistForm product={slug} />
            <p className="text-xs text-slate-500 font-mono italic">
              "My PM charges $500 for a renewal. This costs $19/mo and does it faster."
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
                Lease dates overlapping feels like herding cats.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                You're too big for manual tracking, but too small for a $250/mo Property Management Suite. 
                You're building brittle Zapier hacks just to avoid the manual "document dance."
              </p>
              
              <div className="space-y-4">
                {[
                  "90-day automated SMS renewal triggers",
                  "Frictionless 'Reply YES' workflow",
                  "Auto-generate Docusign links instantly",
                  "Vacancy Defense: Auto-alert if they say NO"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-red-500/80 text-white font-bold px-4 py-1 text-sm rounded-full shadow-lg backdrop-blur-sm">
                  PAIN
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-snug">
                  "Lease dates overlapping feels like herding cats. I spend half my time acting as a professional nagger."
                </blockquote>
                <div className="mt-4 text-sm text-slate-500 font-mono">
                  — r/Landlord
                </div>
              </div>

              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-amber-500/80 text-black font-bold px-4 py-1 text-sm rounded-full shadow-lg backdrop-blur-sm">
                  BRITTLE
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-snug">
                  "I have a complex Zapier mess just to send an email. It breaks every time the API updates."
                </blockquote>
                <div className="mt-4 text-sm text-slate-500 font-mono">
                  — DIY Landlord (12 units)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-white/[0.01] border-b border-white/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Stop Overpaying for "Features" You Don't Use.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 bg-black/20 rounded-xl">
              <h3 className="text-slate-500 font-bold mb-4 uppercase text-sm tracking-widest">Full PMS</h3>
              <p className="text-white text-xl mb-4 font-bold">$250+/mo</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                AppFolio/Buildium. Overkill for just renewals. Bloated, expensive, and requires a PhD to navigate.
              </p>
            </div>
            <div className="p-8 border border-emerald-500/30 bg-emerald-500/5 rounded-xl scale-105 shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-black px-2 py-1 uppercase">Recommended</div>
              <h3 className="text-emerald-400 font-bold mb-4 uppercase text-sm tracking-widest">Lease Renewer</h3>
              <p className="text-white text-xl mb-4 font-bold">$19/mo</p>
              <p className="text-slate-200 text-sm font-light leading-relaxed">
                SMS-first. Frictionless. Automated. One job, done perfectly. No chasing, no portal logins.
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-black/20 rounded-xl">
              <h3 className="text-slate-500 font-bold mb-4 uppercase text-sm tracking-widest">Manual / Zapier</h3>
              <p className="text-white text-xl mb-4 font-bold">Free-ish + Stress</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Email/Excel. Prone to error. The "hacker" way that breaks when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="container mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Renewals on Autopilot.</h2>
          <p className="text-slate-400 italic">Built for DIY Landlords with 5-50 units.</p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
              title: "SMS First",
              desc: "Tenants read texts. They ignore emails. We get responses in minutes, not weeks."
            },
            {
              icon: <FileText className="w-8 h-8 text-emerald-400" />,
              title: "Auto-Docusign",
              desc: "When they reply YES, we generate the PDF and send the signature link instantly."
            },
            {
              icon: <Bell className="w-8 h-8 text-emerald-400" />,
              title: "Vacancy Defense",
              desc: "Get an immediate alert if they say NO. We can even auto-draft your Zillow listing."
            }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-white/5 bg-black/40 hover:border-emerald-400/30 transition-all group hover:-translate-y-1">
              <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Stop Chasing. Start Automating.</h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Be the first to know when we launch and get 50% off your first year.
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
