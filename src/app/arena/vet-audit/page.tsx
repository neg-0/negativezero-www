import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  Stethoscope, 
  DollarSign, 
  Search, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  Files, 
  ShieldCheck,
  ArrowRight,
  Target,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function VetAuditPage() {
  const slug = "vet-audit";

  return (
    <div className="min-h-screen bg-[#05080a] text-slate-300 font-sans selection:bg-emerald-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-emerald-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em]">
            <Stethoscope className="w-3.5 h-3.5" />
            Arena Experiment: Veterinary Revenue Recovery
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[0.85]">
            STOP LOSING <span className="text-emerald-500">8%</span> <br />
            <span className="text-white/40">TO MISSED CHARGES.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            The 'Silent Auditor' for Avimark. Catch unbilled services in real-time by 
            automatically comparing your SOAP notes to your invoices.
          </p>

          <div className="flex flex-col gap-8">
            <WaitlistForm product={slug} buttonText="Stop the Leak" />
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500/50" /> AVIMARK READY</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500/50" /> ZERO-CLICK SETUP</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500/50" /> RECOVER $40K+/YR</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-28 px-4 border-b border-emerald-950/20 bg-slate-950/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
                "It’s super easy to miss charges <br />
                <span className="text-red-500/80 text-3xl italic font-medium">if you’re not careful."</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                Clinics are leaking an average of 8% of revenue because technicians forget to bill 
                for every service mentioned in the notes. Manual audits are slow, error-prone, 
                and happen too late.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Search className="w-5 h-5" />, text: "Scan Notes vs Invoice: AI finds '2 views rads' in notes vs 1 on invoice." },
                  { icon: <Zap className="w-5 h-5" />, text: "Zero-Click: Runs in the background. Alerts you only when you miss money." },
                  { icon: <TrendingUp className="w-5 h-5" />, text: "Instant ROI: Pays for itself in the first week by catching forgotten fees." },
                  { icon: <ShieldCheck className="w-5 h-5" />, text: "Secondary Authority: The perfect backup for busy practice managers." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200">
                    <div className="text-emerald-500">{item.icon}</div>
                    <span className="text-lg font-medium tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-emerald-950/10 border border-emerald-500/10 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                  <DollarSign className="w-24 h-24 text-emerald-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-emerald-500/50 font-mono text-xs uppercase tracking-widest mb-4">// Community_Insight</div>
                  <blockquote className="text-2xl italic text-slate-100 leading-snug mb-6 font-light">
                    "Nothing will prevent you to double check you caught everything..."
                  </blockquote>
                  <div className="text-sm text-slate-500 font-mono italic">
                    — Until now. (r/veterinaryprofession)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-emerald-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Manual Audits</div>
                  <div className="text-slate-400 text-xs leading-relaxed italic">"Time-consuming and often too late to bill."</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-emerald-500/80 font-bold mb-2 uppercase text-[10px] tracking-tighter">Competitors</div>
                  <div className="text-slate-400 text-xs leading-relaxed italic">"Consulting services or basic checks, not real-time AI."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 px-4 bg-emerald-950/5">
        <div className="container mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How VetAudit Works</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            A silent AI layer that watches your back while you care for patients.
          </p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Files className="w-10 h-10 text-emerald-500" />,
              title: "AI Analysis",
              desc: "VetAudit reads your SOAP notes in real-time, understanding clinical context and intent."
            },
            {
              icon: <Target className="w-10 h-10 text-emerald-500" />,
              title: "Invoice Cross-Check",
              desc: "The AI compares identified services against the open invoice in Avimark instantly."
            },
            {
              icon: <AlertCircle className="w-10 h-10 text-emerald-500" />,
              title: "Proactive Alerts",
              desc: "Get a discrete alert if a service is mentioned but not billed—before the client checks out."
            }
          ].map((f, i) => (
            <div key={i} className="p-10 border border-slate-800 bg-slate-900/20 hover:border-emerald-500/30 transition-all duration-300 group rounded-2xl">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="mb-12 inline-block">
            <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-3xl">
              <BarChart3 className="w-14 h-14 text-emerald-500/80 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Recover $40,000 / year.</h2>
              <p className="text-emerald-500/60 font-mono text-sm uppercase">Based on average clinic revenue leak.</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to Stop the Leak?</h2>
          <p className="text-xl text-slate-400 mb-14 font-light leading-relaxed">
            Stop letting hard-earned revenue slip through the cracks. Join the waitlist for VetAudit 
            and turn your practice notes into a secondary profit center.
          </p>
          <div className="flex justify-center mb-24">
            <WaitlistForm product={slug} buttonText="Stop the Leak" />
          </div>
          
          <ArenaFooter currentSlug={slug} />
        </div>
      </section>
    </div>
  );
}
