"use client";

import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  ShieldCheck, 
  Zap, 
  Map, 
  FileText, 
  WifiOff, 
  RefreshCw, 
  AlertCircle, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SprayDayPage() {
  const slug = "spray-day";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <MetricsTracker product={slug} />

      {/* Modern Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">SprayDay</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#why-switch" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Why Switch</a>
              <a href="#waitlist" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm">Get Early Access</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-50 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-amber-50 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-8"
            >
              <Zap className="w-3 h-3 fill-emerald-600" />
              Built for 1-5 Truck Operators
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8"
            >
              Stop losing <span className="text-emerald-600">money</span> to <br className="hidden md:block" /> broken software.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Built for small operators who are tired of PestPac&apos;s complexity and FieldRoutes&apos; bugs. Keep your data safe and your routes moving.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              id="waitlist"
              className="max-w-md mx-auto p-2 bg-white rounded-2xl shadow-xl shadow-emerald-900/5 border border-slate-100"
            >
              <WaitlistForm product={slug} />
              <p className="mt-3 text-xs text-slate-500 font-medium">Join the waitlist — Early access + 50% off first year</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points / Social Proof Stats */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">The Industry Reality</h2>
            <p className="text-3xl font-bold text-slate-900">Current software is failing you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="text-4xl font-black text-emerald-600 mb-2">85%</div>
              <p className="text-slate-700 font-medium leading-snug">
                of pest control software users report <span className="text-red-600">losing critical information</span> due to system errors.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="text-4xl font-black text-amber-600 mb-2">$3,000+</div>
              <p className="text-slate-700 font-medium leading-snug">
                lost per month by small operators on contracts that <span className="text-red-600">fall through the cracks</span> of complex systems.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="text-4xl font-black text-slate-900 mb-2">15+ Hours</div>
              <p className="text-slate-700 font-medium leading-snug">
                wasted every week on manual documentation and <span className="text-red-600">troubleshooting software crashes</span>.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-center italic text-slate-600 text-lg">
            <div className="flex items-center gap-4 max-w-xl text-center md:text-left">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-200" />
              <p>&ldquo;Built by a dev who watched his buddy lose $3K in one month to buggy software. We don&apos;t just build apps; we protect your business.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Everything you need, <br />nothing you don&apos;t.</h2>
              <p className="text-lg text-slate-600">We stripped out the bloat and focused on the features that actually keep your trucks moving and your bank account growing.</p>
            </div>
            <a href="#waitlist" className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
              See all features <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Offline-First Field App", 
                desc: "Works perfectly in basements, crawlspaces, and rural areas. Syncs automatically when you're back in range.",
                icon: <WifiOff className="w-6 h-6" />
              },
              { 
                title: "One-Tap Invoicing", 
                desc: "Get paid before you even leave the driveway. Professional invoices sent via SMS or email in one tap.",
                icon: <FileText className="w-6 h-6" />
              },
              { 
                title: "Smart Route Optimization", 
                desc: "Reduce windshield time by 20%. Automatically sequence stops for the most efficient path.",
                icon: <Map className="w-6 h-6" />
              },
              { 
                title: "Compliance Tracking", 
                desc: "Automatic chemical tracking for state compliance. Generate reports in seconds, not hours.",
                icon: <ShieldCheck className="w-6 h-6" />
              },
              { 
                title: "QuickBooks Sync", 
                desc: "Native integration. No clunky desktop connectors or manual exports needed. It just works.",
                icon: <RefreshCw className="w-6 h-6" />
              },
              { 
                title: "Zero-Loss Architecture", 
                desc: "Military-grade data protection. Every tap is saved locally and backed up to three locations.",
                icon: <Zap className="w-6 h-6" />
              }
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section id="why-switch" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why operators are switching</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-4">The Old Way</h3>
              <div className="space-y-6">
                {[
                  "PestPac: Requires weeks of training",
                  "FieldRoutes: Too many steps for simple jobs",
                  "Unresponsive support / long wait times",
                  "Frequent app crashes in the field",
                  "Data loss during sync errors"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-500">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
              <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-widest border-b border-emerald-200 pb-4">The SprayDay Way</h3>
              <div className="space-y-6">
                {[
                  "Zero training needed: Log in and go",
                  "Job entry in under 15 seconds",
                  "Direct line to engineers for support",
                  "100% offline uptime guarantee",
                  "Instant, reliable data syncing"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-600/10 blur-[120px] -z-0" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to reclaim 10 hours a week?</h2>
          <p className="text-emerald-100/70 text-lg mb-12 max-w-xl mx-auto">
            Join 200+ small operators waiting for a simpler, more reliable way to run their pest control business.
          </p>
          <div className="max-w-md mx-auto p-2 bg-white rounded-2xl shadow-2xl">
             <WaitlistForm product={slug} />
          </div>
          <p className="mt-6 text-emerald-500/80 font-mono text-sm uppercase tracking-widest">
            Early access + 50% off first year
          </p>
        </div>
      </section>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-8 text-sm font-medium text-slate-500">
             <Link href="/arena" className="hover:text-emerald-600 transition-colors">More Experiments</Link>
             <Link href="/" className="hover:text-emerald-600 transition-colors">Negative Zero</Link>
          </div>
          <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
            © 2026 Negative Zero Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
