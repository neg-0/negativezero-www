import { prisma } from "@/lib/prisma";
import { ArenaGrid } from "@/components/arena/ArenaGrid";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const revalidate = 60; // ISR 1 minute

export default async function ArenaPage() {
  const ideas = await prisma.arenaIdea.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30 font-sans">
      <div className="container mx-auto px-4 py-32 max-w-6xl">
        <header className="mb-12 relative">
          <div className="absolute top-0 left-0 w-32 h-1 bg-emerald-500 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            ARENA
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/20 pt-8">
            <p className="text-xl text-neutral-300 max-w-xl font-light leading-relaxed">
              The proving ground for new ideas. 48-hour sprints to validate or kill.
              Survival depends on your interest.
            </p>
          </div>
        </header>

        <ArenaGrid ideas={ideas} />
        
        <footer className="mt-32 pt-12 border-t border-white/20 flex justify-between text-xs font-mono text-neutral-500">
          <Link href="/" className="hover:text-white transition-colors">← RETURN_TO_BASE</Link>
          <span>NEGATIVE ZERO INC.</span>
        </footer>
      </div>
    </div>
  );
}
