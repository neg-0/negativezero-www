"use client";

import { useState } from "react";
import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import { 
  ShieldCheck, 
  Map as MapIcon, 
  FileText, 
  WifiOff, 
  Truck, 
  AlertTriangle, 
  ArrowRight,
  Database,
  Terminal,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { clsx } from "clsx";

export default function SprayDayPage() {
  const slug = "spray-day";
  const [activeScenario, setActiveScenario] = useState<"morning" | "site" | "eod">("morning");

  // Scenarios for the interactive "Day in the Life" section
  const scenarios = {
    morning: {
      title: "07:00 AM - DEPLOYMENT",
      problem: "Paper maps. Confusion. 30 mins wasted.",
      solution: "Smart Routing. Crews dispatched in 1 click.",
      metric: "Time Saved: 45m",
      color: "text-blue-400",
      bgColor: "bg-blue-400",
      borderColor: "border-blue-400/20"
    },
    site: {
      title: "11:42 AM - ON SITE",
      problem: "No signal. App crashes. Data lost.",
      solution: "Offline-First. Syncs when you're back.",
      metric: "Data Loss: 0%",
      color: "text-amber-400",
      bgColor: "bg-amber-400",
      borderColor: "border-amber-400/20"
    },
    eod: {
      title: "05:15 PM - DEBRIEF",
      problem: "Manual entry. Invoice chasing. Headache.",
      solution: "Instant Invoicing. Paid before parking.",
      metric: "Cash Flow: +30%",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400",
      borderColor: "border-emerald-400/20"
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-mono selection:bg-emerald-900 selection:text-white overflow-hidden">
      <MetricsTracker product={slug} />

      {/* HEADER / NAV - INDUSTRIAL STYLE */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold tracking-widest text-white text-sm">SPRAYDAY_OS v1.0</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium text-gray-500">
             <span className="hidden md:block">SYSTEM: OPERATIONAL</span>
             <span className="hidden md:block">LATENCY: 12ms</span>
             <Link href="#access" className="text-emerald-500 hover:text-emerald-400 uppercase tracking-wider border border-emerald-500/30 px-3 py-1 rounded-sm hover:bg-emerald-500/10 transition-colors">
               Initialize Sequence
             </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 relative">
        {/* HERO SECTION - SPLIT LAYOUT */}
        <section className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-emerald-500 border border-emerald-500/20 bg-emerald-950/20 px-3 py-1 rounded text-xs tracking-widest uppercase">
              <Truck size={12} />
              Field Operations Command
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              KILL THE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">PAPERWORK.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed">
              The only field software built for <span className="text-white font-bold">1-5 truck operators</span> who hate computers. 
              Zero fluff. 100% offline uptime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#access" className="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm tracking-widest transition-colors flex items-center justify-center gap-3">
                DEPLOY FLEET
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="px-8 py-4 border border-white/10 text-gray-400 text-sm flex items-center justify-center gap-3">
                <ShieldCheck size={16} />
                MIL-SPEC DATA SECURITY
              </div>
            </div>
          </motion.div>

          {/* INTERACTIVE HUD VISUALIZATION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full border border-white/10 bg-white/5 rounded-lg overflow-hidden hidden lg:block"
          >
            {/* HUD Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="text-[10px] text-emerald-500">SIGNAL STRENGTH</div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-emerald-500/50" />)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-gray-500">COORDS</div>
                  <div className="text-xs font-mono text-emerald-500">34.0522° N, 118.2437° W</div>
                </div>
              </div>
              
              {/* Center Map Grid Animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] border border-white/10 bg-black/40 backdrop-blur-sm grid grid-cols-4 grid-rows-4 gap-px">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="bg-white/5 relative group hover:bg-emerald-500/20 transition-colors duration-300">
                    {i === 5 && <div className="absolute inset-2 bg-emerald-500/50 animate-pulse rounded-sm" />} 
                    {i === 10 && <div className="absolute inset-2 bg-amber-500/50 animate-pulse rounded-sm" />} 
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-end">
                <div className="w-32 h-1 bg-white/10 overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[75%] animate-[loading_2s_ease-in-out_infinite]" />
                </div>
                <div className="text-[10px] text-gray-500">SYNC: COMPLETE</div>
              </div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </motion.div>
        </section>

        {/* TICKER TAPE */}
        <div className="w-full border-y border-white/10 bg-white/5 py-3 overflow-hidden">
          <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-12 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <span>/// Zero Data Loss Guarantee</span>
            <span>/// 100% Offline Capable</span>
            <span>/// Instant QuickBooks Sync</span>
            <span>/// Automated Compliance Reports</span>
            <span>/// Zero Data Loss Guarantee</span>
            <span>/// 100% Offline Capable</span>
            <span>/// Instant QuickBooks Sync</span>
            <span>/// Automated Compliance Reports</span>
          </div>
        </div>

        {/* PROBLEM GRID - ASYMMETRIC */}
        <section className="py-32 border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <AlertTriangle size={16} /> 
                System Failure Detected
              </h2>
              <p className="text-3xl md:text-5xl font-bold text-white">Why your current software is costing you money.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
              {/* Stat 1 */}
              <div className="md:col-span-7 bg-[#0A0A0A] border border-red-500/30 p-8 md:p-12 relative group hover:border-red-500/60 transition-colors">
                <div className="absolute top-4 right-4 text-red-500/20 group-hover:text-red-500/40 transition-colors">
                  <Database size={48} />
                </div>
                <div className="text-6xl md:text-8xl font-black text-white mb-4">85%</div>
                <h3 className="text-xl text-red-400 font-bold mb-2">CRITICAL DATA LOSS</h3>
                <p className="text-gray-500 max-w-md">Of operators report losing customer history or job notes due to sync errors in rural areas.</p>
              </div>

              {/* Stat 2 */}
              <div className="md:col-span-5 bg-[#0A0A0A] border border-amber-500/30 p-8 md:p-12 relative group hover:border-amber-500/60 transition-colors flex flex-col justify-center">
                 <div className="absolute top-4 right-4 text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
                  <Activity size={48} />
                </div>
                <div className="text-4xl md:text-6xl font-black text-white mb-4">$3,000+</div>
                <h3 className="text-xl text-amber-400 font-bold mb-2">MONTHLY BLEED</h3>
                <p className="text-gray-500">Average revenue lost from missed follow-ups and lost contracts.</p>
              </div>

              {/* Stat 3 */}
              <div className="md:col-span-12 bg-[#0A0A0A] border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3 text-white font-bold text-xl">
                    <Terminal size={24} className="text-gray-500" />
                    <span>THE COMPLEXITY TRAP</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-red-500/50" />
                      <div>
                        <div className="text-white font-bold">PestPac</div>
                        <p className="text-gray-500 text-sm">Requires a PhD to configure. 3 weeks training time.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-amber-500/50" />
                      <div>
                        <div className="text-white font-bold">FieldRoutes</div>
                        <p className="text-gray-500 text-sm">Excessive clicks. Buggy mobile app. Support ghosts you.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full p-6 bg-black/50 border border-white/5 font-mono text-xs text-green-500/70 overflow-hidden">
                  {`> SYSTEM_CHECK: PestPac... FAIL [Too Complex]`}
                  <br/>
                  {`> SYSTEM_CHECK: FieldRoutes... FAIL [Bugs Detected]`}
                  <br/>
                  {`> SYSTEM_CHECK: SprayDay... OPTIMIZED`}
                  <br/>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SCENARIOS */}
        <section className="py-32 bg-[#080808]">
          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8">OPERATIONAL CLARITY</h2>
              
              <div className="space-y-4">
                {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveScenario(key)}
                    className={clsx(
                      "w-full text-left p-6 border transition-all duration-300",
                      activeScenario === key 
                        ? `bg-white/5 ${scenarios[key].borderColor} border-l-4` 
                        : "bg-transparent border-white/5 border-l border-white/5 hover:bg-white/5 hover:border-white/10"
                    )}
                    style={{ borderLeftColor: activeScenario === key ? undefined : "rgba(255,255,255,0.1)" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={clsx("font-bold text-sm tracking-widest", activeScenario === key ? "text-white" : "text-gray-500")}>
                        {scenarios[key].title}
                      </span>
                      {activeScenario === key && <Activity size={16} className={scenarios[key].color} />}
                    </div>
                    <div className={clsx("text-lg", activeScenario === key ? "text-gray-300" : "text-gray-600")}>
                      {scenarios[key].solution}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] border border-white/10 bg-black p-8 flex flex-col items-center justify-center text-center">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeScenario}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                   className="space-y-6"
                 >
                   <div className={clsx("w-24 h-24 mx-auto rounded-full flex items-center justify-center border-2", scenarios[activeScenario].borderColor)}>
                      {activeScenario === 'morning' && <MapIcon size={40} className={scenarios[activeScenario].color} />}
                      {activeScenario === 'site' && <WifiOff size={40} className={scenarios[activeScenario].color} />}
                      {activeScenario === 'eod' && <FileText size={40} className={scenarios[activeScenario].color} />}
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white">{scenarios[activeScenario].metric}</h3>
                   <p className="text-gray-400 max-w-sm mx-auto">{scenarios[activeScenario].problem}</p>
                   
                   <div className="pt-8">
                     <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: "100%" }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                         className={clsx("h-full", scenarios[activeScenario].bgColor)}
                       />
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA SECTION - TERMINAL STYLE */}
        <section id="access" className="py-32 border-t border-white/10 bg-[#050505]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">READY TO DEPLOY?</h2>
              <p className="text-xl text-gray-500">
                Join 200+ operators securing their fleet with SprayDay.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-emerald-500/30 p-2 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
              <div className="p-8 md:p-12">
                 <WaitlistForm product={slug} />
                 <p className="mt-6 text-xs text-emerald-500/60 font-mono flex items-center justify-center gap-2">
                   <ShieldCheck size={12} />
                   ENCRYPTED CONNECTION ESTABLISHED
                 </p>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-600 font-mono text-center">
               <div>[X] 10+ HRS SAVED/WK</div>
               <div>[X] $0 SETUP FEES</div>
               <div>[X] NO CONTRACTS</div>
               <div>[X] 24/7 SUPPORT</div>
            </div>
          </div>
        </section>
      </main>

      {/* Arena Footer */}
      <footer className="border-t border-white/10 py-8 text-center">
        <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
          <a href="/arena" className="hover:text-white transition-colors">More Experiments</a>
          <a href="/" className="hover:text-white transition-colors">Negative Zero</a>
        </div>
        <p className="mt-4 text-xs text-gray-700">© 2026 Negative Zero Inc.</p>
      </footer>
    </div>
  );
}
