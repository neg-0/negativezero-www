"use client";

import { motion } from "framer-motion";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { Button, buttonVariants } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  } as any;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  } as any;

  return (
    <main className="min-h-screen relative bg-black text-white selection:bg-white selection:text-black font-mono overflow-x-hidden">
      {/* GLOBAL OVERLAYS */}
      <GridOverlay />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] mask-radial-fade"></div>

      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 px-6 md:px-12 max-w-7xl mx-auto z-10">
        {/* HERO BACKGROUND EFFECT */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,_var(--tw-gradient-stops))] from-green-900/20 via-black/0 to-black/0 blur-3xl opacity-50 animate-pulse"></div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          <motion.div variants={item}>
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse"></div>
            
            <span className="inline-block border border-emerald-500/50 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-emerald-400 bg-black/50 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-gradient-to-r from-emerald-900/20 to-transparent">
              Architectural Preview v0.1
            </span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-emerald-400 mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] relative z-10">
              Structure<br/>Over<br/>Chaos
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed relative z-10">
              We deploy autonomous software entities to solve human-scale problems. 
              Efficiency is the only metric. One human, infinite leverage.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 relative z-10">
            <Link href="/about">
              <Button size="lg" className="group text-xs tracking-widest uppercase bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all border-none">
                Explore Fleet <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-xs tracking-widest uppercase border-emerald-500/50 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-950/30 hover:text-emerald-300 transition-all shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                Read Manifesto
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <div id="products">
        <ProductGrid />
      </div>

      {/* ARENA PREVIEW SECTION */}
      <section className="py-24 px-6 md:px-12 border-t border-white/20 bg-neutral-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h3 className="text-sm tracking-[0.3em] uppercase text-green-400 animate-pulse drop-shadow-[0_0_5px_rgba(0,255,136,0.5)]">Live Experiments</h3>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            THE ARENA
          </h2>
          <p className="text-xl md:text-2xl font-light text-neutral-300">
            Where ideas prove themselves. Watch live experiments fight for survival in 48-hour sprints.
          </p>
          <div className="pt-8">
            <Link href="/arena">
              <Button size="lg" variant="outline" className="group text-xs tracking-widest uppercase border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all">
                Enter the Arena <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / MANIFESTO PREVIEW */}
      <section className="py-32 px-6 md:px-12 border-t border-white/20 bg-neutral-900/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-sm tracking-[0.3em] uppercase text-neutral-400">The Mission</h3>
          <p className="text-2xl md:text-4xl font-light leading-tight text-white drop-shadow-lg">
            "The goal is to maximize impact with minimal effort. We build systems that build systems."
          </p>
          <div className="pt-8">
            <Link 
              href="/about" 
              className={buttonVariants({ variant: "link", className: "text-green-400 hover:text-green-300 uppercase tracking-widest text-xs p-0 h-auto underline decoration-green-500/30 underline-offset-4 hover:decoration-green-500 transition-all" })}
            >
              Learn about the AI Army &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
