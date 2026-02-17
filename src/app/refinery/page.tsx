import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PipelineViz } from "@/components/PipelineViz";
import { GridOverlay } from "@/components/ui/GridOverlay";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Activity, Cpu, Database } from "lucide-react";

async function getStats() {
  try {
    const res = await fetch('http://control.neg0.cloud/api/ideas', { 
      next: { revalidate: 60 },
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (res.ok) {
      const data = await res.json();
      let stats = {
        prospector: 0,
        audit: 0,
        copy: 0,
        landing: 0,
        sprint: 0,
        verdict: 0,
        total: 0
      };

      if (Array.isArray(data)) {
        stats.total = data.length;
        data.forEach((idea: any) => {
          const stage = idea.stage?.toLowerCase() || 'prospector';
          if (stage.includes('prospect')) stats.prospector++;
          else if (stage.includes('audit')) stats.audit++;
          else if (stage.includes('copy')) stats.copy++;
          else if (stage.includes('landing')) stats.landing++;
          else if (stage.includes('sprint') || stage.includes('build')) stats.sprint++;
          else if (stage.includes('verdict') || stage.includes('done')) stats.verdict++;
          else stats.prospector++;
        });
        return stats;
      }
    }
  } catch (error) {
    console.error('Failed to fetch stats:', error);
  }

  // Fallback
  return {
    prospector: 34,
    audit: 12,
    copy: 8,
    landing: 5,
    sprint: 4,
    verdict: 3,
    total: 66
  };
}

export default async function RefineryPage() {
  const stats = await getStats();

  return (
    <main className="min-h-screen relative bg-black text-white selection:bg-white selection:text-black font-mono overflow-x-hidden">
      <GridOverlay />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] mask-radial-fade"></div>

      <Header />

      {/* HERO */}
      <section className="relative pt-48 pb-12 px-6 md:px-12 max-w-7xl mx-auto z-10 text-center">
        <div className="inline-block border border-green-500/20 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-green-500 bg-green-500/5 backdrop-blur-sm mb-6 animate-pulse">
          Live System Status
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase mix-blend-difference mb-8">
          The Refinery
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Where ideas fight for survival. We don't guess. We test. Every idea gets 48 hours to prove demand or die.
        </p>
      </section>

      {/* PIPELINE VIZ */}
      <section className="py-12 border-y border-white/5 bg-white/5">
        <div className="container mx-auto">
          <PipelineViz counts={stats} />
        </div>
      </section>

      {/* STATS GRID */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-white/10 bg-black hover:border-green-500/50 transition-colors group">
            <Activity className="w-8 h-8 mx-auto mb-4 text-neutral-600 group-hover:text-green-500 transition-colors" />
            <div className="text-4xl font-bold text-white mb-2">{stats.total}</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-500">Total Ideas Processed</div>
          </div>
          <div className="p-8 border border-white/10 bg-black hover:border-green-500/50 transition-colors group">
            <Cpu className="w-8 h-8 mx-auto mb-4 text-neutral-600 group-hover:text-green-500 transition-colors" />
            <div className="text-4xl font-bold text-white mb-2">{stats.sprint}</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-500">Currently Building</div>
          </div>
          <div className="p-8 border border-white/10 bg-black hover:border-green-500/50 transition-colors group">
            <Database className="w-8 h-8 mx-auto mb-4 text-neutral-600 group-hover:text-green-500 transition-colors" />
            <div className="text-4xl font-bold text-white mb-2">{stats.verdict}</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-500">Graduated Products</div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-900/10 opacity-20"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
            Want to see what survived?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/arena">
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                Enter the Arena <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://twitter.com/negativezeroinc" target="_blank">
              <Button variant="outline" size="lg">
                Submit an Idea
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
