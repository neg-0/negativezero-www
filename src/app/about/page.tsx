"use client";

import { motion } from "framer-motion";
import { GridOverlay } from "@/components/ui/GridOverlay";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const agents = [
  { id: "rocket", name: "Rocket", role: "Operator / COO", icon: "🚀", desc: "Fleet Management, Infrastructure, Strategy." },
  { id: "captain", name: "Captain", role: "ShipLog CEO", icon: "🚢", desc: "DevOps Dashboard Product Lead." },
  { id: "warden", name: "Warden", role: "ArmourMail CEO", icon: "🛡️", desc: "Security Product Lead." },
  { id: "architect", name: "Architect", role: "Brand & Frontend", icon: "🏗️", desc: "Digital Architecture & User Experience." },
  { id: "envoy", name: "Envoy", role: "GlassWall CEO", icon: "🕊️", desc: "Client-Facing PM Tool Lead." },
  { id: "gardener", name: "Gardener", role: "Knowledge Engineer", icon: "🌿", desc: "Memory System Maintenance." },
  { id: "closer", name: "Closer", role: "Anti-CPQ CEO", icon: "🤝", desc: "Sales Tech Lead." },
  { id: "sarge", name: "Sarge", role: "Chocks CEO", icon: "🪖", desc: "Veteran Transition Tech Lead." },
  { id: "accountant", name: "Accountant", role: "SJA CEO", icon: "👔", desc: "Client Services Lead." },
  { id: "ric", name: "Ric", role: "CMO", icon: "📢", desc: "Content Engine & Hype Man." },
  { id: "refiner", name: "Refiner", role: "Product Scientist", icon: "🧪", desc: "Idea Refinery — validate, score, and mature.", link: "/refinery", linkText: "Visit Refinery" },
  { id: "prospector", name: "Prospector", role: "Pain Hunter", icon: "⛏️", desc: "Market research, pain point discovery." },
];

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  } as any;

  return (
    <main className="min-h-screen relative bg-black text-white selection:bg-white selection:text-black font-mono overflow-x-hidden">
      <GridOverlay />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] mask-radial-fade"></div>

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          <motion.div variants={item}>
            <span className="inline-block border border-white/20 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-neutral-400 bg-black/50 backdrop-blur-sm mb-6">
              Manifesto v1.0
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase mix-blend-difference mb-8">
              One Human.<br/>Infinite<br/>Leverage.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
              We are building a new kind of organization. No employees. No meetings. Just autonomous agents working in concert to solve real-world problems.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* AGENTS GRID */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4">The Fleet</h2>
              <p className="text-2xl text-white font-light">
                Meet the specialized AI agents running Negative Zero.
              </p>
            </div>
            <Link href="/arena" className="hidden md:block text-sm uppercase tracking-widest text-green-500 hover:text-white transition-colors">
              View Active Experiments →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {agents.map((agent) => (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group relative bg-black p-8 hover:bg-neutral-900 transition-colors duration-300 flex flex-col h-[280px]"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">{agent.icon}</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-600 border border-white/10 px-2 py-1 group-hover:border-white/30 transition-colors">
                    {agent.id}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                  {agent.name}
                </h3>
                
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  {agent.role}
                </p>

                <p className="text-sm text-neutral-400 leading-relaxed font-mono mt-auto">
                  {agent.desc}
                </p>

                {agent.link && (
                  <Link href={agent.link} className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm">
                    <span className="text-green-500 uppercase tracking-widest border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors">
                      {agent.linkText}
                    </span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
