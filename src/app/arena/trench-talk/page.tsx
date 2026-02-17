import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { HardHat, Mic, FileText, Clock, Smartphone, Construction, CheckCircle, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function TrenchTalkPage() {
  const slug = "trench-talk";

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-200 font-sans selection:bg-orange-500/30">
      <MetricsTracker product={slug} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">
          ← BACK_TO_ARENA
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider">
            <Construction className="w-3 h-3" />
            Arena Experiment: Construction Tech
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.85]">
            STOP TYPING RFIs<br />
            <span className="text-orange-500 underline decoration-orange-500/30 decoration-8 underline-offset-8 font-black">WITH FAT THUMBS.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            You’re a Superintendent, not a data entry clerk. Turn jobsite rants into professional RFIs and Daily Logs before you even leave the trailer.
          </p>

          <div className="flex flex-col gap-6">
            <WaitlistForm product={slug} />
            <p className="text-xs text-slate-500 font-mono italic">
              "Finally, an AI that knows what a 'Grade Beam' is."
            </p>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-24 px-4 border-b border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight uppercase italic">
                The "6 PM Shadow Shift" is Killing Your Weekends.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Field work is constant. Fires are everywhere. By the time you sit down to document the day, it's dark out and you're exhausted. 
                Typing technical specs on a cracked phone screen isn't just slow—it's how mistakes happen.
              </p>
              
              <div className="space-y-4">
                {[
                  "Walk the site, talk, and generate logs in real-time",
                  "No more late nights catching up on paperwork",
                  "Professional PDFs ready for the Architect/Owner",
                  "Understands construction jargon & jobsite context"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-orange-600 text-white font-bold px-4 py-1 text-sm rounded-full shadow-lg backdrop-blur-sm">
                  REALITY
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-snug">
                  "Everyone will tell you that the paperwork should be done during the work day. It's almost impossible..."
                </blockquote>
                <div className="mt-4 text-sm text-slate-500 font-mono">
                  — r/Construction
                </div>
              </div>

              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-red-600 text-white font-bold px-4 py-1 text-sm rounded-full shadow-lg backdrop-blur-sm">
                  PAIN
                </div>
                <blockquote className="text-xl italic text-slate-300 leading-snug">
                  "I spend my entire Sunday doing daily logs because I'm too busy putting out fires during the week."
                </blockquote>
                <div className="mt-4 text-sm text-slate-500 font-mono">
                  — Project Superintendent
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-white/[0.01] border-b border-white/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-16 text-center uppercase tracking-tighter italic">Why Trench Talk Wins.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 bg-black/20 rounded-xl">
              <h3 className="text-slate-500 font-bold mb-4 uppercase text-sm tracking-widest">Generic Dictation</h3>
              <p className="text-white text-xl mb-4 font-bold">"Siri-ously?"</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Auto-correct turns "CMU Wall" into "See me wall". Terrible at jargon, zero formatting, and no PDF export.
              </p>
            </div>
            <div className="p-8 border border-orange-500/30 bg-orange-500/5 rounded-xl scale-105 shadow-2xl shadow-orange-500/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-orange-500 text-black text-[10px] font-black px-2 py-1 uppercase">Field-First</div>
              <h3 className="text-orange-400 font-bold mb-4 uppercase text-sm tracking-widest">Trench Talk</h3>
              <p className="text-white text-xl mb-4 font-bold">Jobsite Native</p>
              <p className="text-slate-200 text-sm font-light leading-relaxed">
                The only AI that speaks construction. Turn rough voice notes into formal RFIs instantly. Designed for the field.
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-black/20 rounded-xl">
              <h3 className="text-slate-500 font-bold mb-4 uppercase text-sm tracking-widest">Heavy CM Software</h3>
              <p className="text-white text-xl mb-4 font-bold">Desk Bound</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Requires sitting at a desk and clicking 50 buttons. Great for office admins, nightmare for people in boots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="container mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase italic tracking-tighter">Built for the Field.</h2>
          <p className="text-slate-400 italic font-mono uppercase text-sm">Hard Hats Required.</p>
        </div>
        
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mic className="w-8 h-8 text-orange-500" />,
              title: "Voice-to-RFI",
              desc: "Just talk. We'll extract the issue, the impact, and the suggested solution into a formal RFI draft."
            },
            {
              icon: <FileText className="w-8 h-8 text-orange-500" />,
              title: "Daily Log Mastery",
              desc: "Narrate your walkthrough. We categorize manpower, equipment, and progress automatically."
            },
            {
              icon: <ShieldAlert className="w-8 h-8 text-orange-500" />,
              title: "CYA Documentation",
              desc: "Don't let verbal changes haunt you. Document site conditions instantly with voice-stamped proof."
            }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-white/5 bg-black/40 hover:border-orange-400/30 transition-all group hover:-translate-y-1">
              <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500/5 pointer-events-none" />
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tighter italic">Get Your Saturdays Back.</h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Stop the typing. Start the talking. Join the early access waitlist for Trench Talk.
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
