import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/arena/ProductCard";
import Link from "next/link";

export const revalidate = 60; // ISR 1 minute

export default async function ArenaPage() {
  const ideas = await prisma.arenaIdea.findMany({
    where: { status: "active" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30 font-sans">
      <div className="container mx-auto px-4 py-32 max-w-6xl">
        <header className="mb-24 relative">
          <div className="absolute top-0 left-0 w-32 h-1 bg-green-500 mb-8 shadow-[0_0_20px_rgba(0,255,136,0.8)]" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            ARENA
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/20 pt-8">
            <p className="text-xl text-neutral-300 max-w-xl font-light leading-relaxed">
              The proving ground for new ideas. 48-hour sprints to validate or kill.
              Survival depends on your interest.
            </p>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest text-right">
              // CURRENT_STATUS: <span className="text-green-400 animate-pulse">ACTIVE</span><br/>
              // SYSTEM_ID: NEG0-DEV
            </div>
          </div>
        </header>

        {ideas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ideas.map((idea: any) => (
              <ProductCard 
                key={idea.id} 
                id={idea.id}
                slug={idea.slug}
                title={idea.title}
                tagline={idea.tagline}
                status={idea.status}
                signupCount={idea.signupCount}
                signupGoal={idea.signupGoal}
                sprintEnd={idea.sprintEnd}
                className="min-h-[400px]"
              />
            ))}
          </div>
        ) : (
          <div className="border border-white/20 bg-white/5 p-12 text-center rounded-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
            <h3 className="text-2xl font-bold text-neutral-300 mb-2">No Active Experiments</h3>
            <p className="text-neutral-500 font-mono text-sm">Check back soon for the next drop.</p>
          </div>
        )}
        
        <footer className="mt-32 pt-12 border-t border-white/20 flex justify-between text-xs font-mono text-neutral-500">
          <Link href="/" className="hover:text-white transition-colors">← RETURN_TO_BASE</Link>
          <span>NEGATIVE ZERO INC.</span>
        </footer>
      </div>
    </div>
  );
}
