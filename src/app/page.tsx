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
            <Link href="/about">
              <Button size="lg" className="group text-xs tracking-widest uppercase">
                Explore Fleet <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-xs tracking-widest uppercase">
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
      <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-neutral-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h3 className="text-sm tracking-[0.3em] uppercase text-green-500 animate-pulse">Live Experiments</h3>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">
            THE ARENA
          </h2>
          <p className="text-xl md:text-2xl font-light text-neutral-400">
            Where ideas prove themselves. Watch live experiments fight for survival in 48-hour sprints.
          </p>
          <div className="pt-8">
            <Link href="/arena">
              <Button size="lg" variant="outline" className="group text-xs tracking-widest uppercase border-green-500/50 text-green-500 hover:bg-green-500 hover:text-black">
                Enter the Arena <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
      <Footer />
    </main>
  );
}
