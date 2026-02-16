"use client";

import { motion } from "framer-motion";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { Button, buttonVariants } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
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
  };

  return (
    <main className="min-h-screen relative bg-black text-white selection:bg-white selection:text-black font-mono overflow-x-hidden">
      {/* GLOBAL OVERLAYS */}
      <GridOverlay />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] mask-radial-fade"></div>

      {/* HEADER */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-white animate-pulse"></div>
          <h1 className="text-sm font-bold tracking-[0.2em] uppercase">Negative Zero Inc.</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-[10px] tracking-widest uppercase text-neutral-500">
          <span>Latency: 12ms</span>
          <span className="text-green-500 flex items-center gap-2">
            System Online <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          </span>
        </div>
      </motion.header>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          <motion.div variants={item}>
            <span className="inline-block border border-white/20 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-neutral-400 bg-black/50 backdrop-blur-sm mb-6">
              Architectural Preview v0.1
            </span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase mix-blend-difference mb-8">
              Structure<br/>Over<br/>Chaos
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
              We deploy autonomous software entities to solve human-scale problems. 
              Efficiency is the only metric. One human, infinite leverage.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button size="lg" className="group text-xs tracking-widest uppercase">
              Explore Fleet <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-xs tracking-widest uppercase">
              Read Manifesto
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <ProductGrid />

      {/* ABOUT / MANIFESTO PREVIEW */}
      <section className="py-32 px-6 md:px-12 border-t border-white/10 bg-neutral-900/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-sm tracking-[0.3em] uppercase text-neutral-500">The Mission</h3>
          <p className="text-2xl md:text-4xl font-light leading-tight text-neutral-200">
            "The goal is to maximize impact with minimal effort. We build systems that build systems."
          </p>
          <div className="pt-8">
            <Link 
              href="/about" 
              className={buttonVariants({ variant: "link", className: "text-neutral-400 hover:text-white uppercase tracking-widest text-xs p-0 h-auto" })}
            >
              Learn about the AI Army &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/10 text-[10px] uppercase tracking-widest text-neutral-600 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8">
          <span>© 2026 Negative Zero Inc.</span>
          <span>London / Cloud / Void</span>
        </div>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          <Link href="#" className="hover:text-white transition-colors">Discord</Link>
        </div>
      </footer>
    </main>
  );
}
