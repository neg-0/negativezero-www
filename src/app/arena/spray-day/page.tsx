"use client";

import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  WifiOff, 
  FileCheck, 
  Truck, 
  Ban, 
  CheckCircle2, 
  SignalHigh, 
  Receipt, 
  MapPin,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx } from "clsx";

export default function SprayDayPage() {
  const slug = "spray-day";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] font-sans selection:bg-amber-200 selection:text-amber-900">
      <MetricsTracker product={slug} />

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E7E5E4]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1C1917] text-white flex items-center justify-center font-black rounded-sm">
              V
            </div>
            <span className="font-bold tracking-tight text-xl">VECTOR</span>
          </div>
          <Link 
            href="#join"
            className="px-5 py-2 bg-[#1C1917] text-white font-bold text-sm rounded-sm hover:bg-stone-800 transition-colors"
          >
            GET EARLY ACCESS
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <WifiOff size={14} />
                Offline-First Architecture
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-[#1C1917]">
                The software that works in the <span className="text-amber-600">crawlspace.</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-2xl mb-10">
                Most pest control apps need a perfect signal. Vector doesn't. 
                Invoicing, routing, and chemical tracking that works 100% offline. 
                Stop losing data in basements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#join"
                  className="px-8 py-4 bg-[#D97706] hover:bg-amber-600 text-white font-bold text-lg rounded-sm transition-colors shadow-lg shadow-amber-900/10 flex items-center justify-center gap-2"
                >
                  Join the Waitlist
                  <CheckCircle2 size={20} />
                </Link>
                <div className="px-6 py-4 flex items-center gap-3 text-stone-500 font-medium">
                  <ShieldCheck size={20} className="text-stone-400" />
                  No credit card required
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE REALITY CHECK (PAIN) */}
        <section className="bg-white border-y border-[#E7E5E4] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">You're losing $3,000 a month to bad signal.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-full flex-shrink-0 text-red-600">
                      <SignalHigh size={24} className="opacity-50" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">The "Loading..." Wheel of Death</h3>
                      <p className="text-stone-600">
                        You're in a basement. You try to save the job notes. The app spins. You walk outside. It crashes. Notes gone.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-full flex-shrink-0 text-red-600">
                      <Receipt size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Evening Paperwork Hell</h3>
                      <p className="text-stone-600">
                        Instead of eating dinner with your family, you're manually entering invoices from crumpled notes because the sync failed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual: The "Field Card" */}
              <div className="relative">
                <div className="absolute inset-0 bg-stone-100 transform rotate-3 rounded-xl border border-stone-200"></div>
                <div className="relative bg-white p-8 rounded-xl border border-stone-200 shadow-xl shadow-stone-200/50">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-stone-100">
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase">Status</div>
                      <div className="flex items-center gap-2 text-green-600 font-bold">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        ONLINE (SYNCED)
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-stone-400 uppercase">Revenue Today</div>
                      <div className="font-mono font-bold">$1,450.00</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold">123 Oak Street</span>
                        <span className="text-green-600 font-bold">$125.00</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <CheckCircle2 size={12} /> Termite Inspect • Completed 9:42 AM
                      </div>
                    </div>
                    <div className="p-4 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold">4452 Pine Lane</span>
                        <span className="text-green-600 font-bold">$85.00</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <CheckCircle2 size={12} /> General Pest • Completed 11:15 AM
                      </div>
                    </div>
                    <div className="p-4 bg-stone-50 rounded-lg border border-stone-100 opacity-50">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold">882 Elm Dr</span>
                        <span className="text-stone-400 font-bold">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-6">
                <WifiOff size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">True Offline Mode</h3>
              <p className="text-stone-600">
                Vector stores everything on your device first. It syncs when you have signal, but never stops working when you don't.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-6">
                <Receipt size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Driveway Invoicing</h3>
              <p className="text-stone-600">
                Send the invoice and get paid before you even put the truck in drive. Syncs instantly to QuickBooks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Smart Routing</h3>
              <p className="text-stone-600">
                Automatic route optimization that actually makes sense. Save 45 minutes of windshield time every single day.
              </p>
            </div>
          </div>
        </section>

        {/* THE NO LIST */}
        <section className="py-20 bg-[#1C1917] text-stone-300">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                WE BUILT A <br/>
                <span className="text-amber-500">"NO" LIST.</span>
              </h2>
              <p className="text-lg leading-relaxed">
                Most software is bloated with features you never use but pay for anyway. We stripped it down to the essentials for 1-5 truck operations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
                <Ban className="text-red-500" size={24} />
                <span className="font-bold text-white">NO Enterprise Features You Don't Need</span>
              </div>
              <div className="flex items-center gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
                <Ban className="text-red-500" size={24} />
                <span className="font-bold text-white">NO "AI Chatbots" or Buzzwords</span>
              </div>
              <div className="flex items-center gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
                <Ban className="text-red-500" size={24} />
                <span className="font-bold text-white">NO 5-Day Training Courses</span>
              </div>
              <div className="flex items-center gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
                <Ban className="text-red-500" size={24} />
                <span className="font-bold text-white">NO Per-User Pricing Penalties</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="join" className="py-24 bg-white border-t border-stone-200">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-[#1C1917] mb-6">Stop doing paperwork at midnight.</h2>
            <p className="text-lg text-stone-600 mb-10">
              Vector is launching soon for a small group of founding members. 
              Get early access and lock in lifetime pricing.
            </p>
            
            <div className="bg-[#FDFBF7] p-8 rounded-xl border border-stone-200 shadow-lg">
              <WaitlistForm product={slug} />
              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-stone-400 font-bold uppercase tracking-wider">
                 <span><CheckCircle2 size={12} className="inline mr-1" /> No Spam</span>
                 <span><CheckCircle2 size={12} className="inline mr-1" /> Unsub Anytime</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#FDFBF7] py-12 border-t border-[#E7E5E4] text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-8 h-8 bg-[#1C1917] text-white flex items-center justify-center font-black rounded-sm">
            V
          </div>
          <div className="flex items-center gap-6 text-sm text-stone-500 font-medium">
            <Link href="/arena" className="hover:text-[#1C1917] transition-colors">Other Products</Link>
            <Link href="/" className="hover:text-[#1C1917] transition-colors">Negative Zero</Link>
            <a href="mailto:hello@negativezero.io" className="hover:text-[#1C1917] transition-colors">Contact</a>
          </div>
          <p className="text-xs text-stone-400">© 2026 Negative Zero Inc. Built for the trade.</p>
        </div>
      </footer>
    </div>
  );
}
