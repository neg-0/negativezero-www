import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "./ProductCard";

interface ArenaFooterProps {
  currentSlug?: string;
}

export async function ArenaFooter({ currentSlug }: ArenaFooterProps) {
  // Fetch up to 3 active ideas, excluding the current one
  // In a real app, maybe randomize or pick specific ones
  const ideas = await prisma.arenaIdea.findMany({
    where: { 
      slug: { not: currentSlug }, 
      status: "active" 
    },
    take: 3,
    orderBy: { createdAt: "desc" }
  });

  if (ideas.length === 0) return null;

  return (
    <footer className="border-t border-white/10 mt-20 py-12 bg-black/95">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-mono font-bold text-white/40 uppercase tracking-widest">
            // Other_Experiments
          </h3>
          <Link href="/arena" className="text-green-500 hover:text-green-400 font-mono text-xs uppercase tracking-wider hover:underline underline-offset-4 decoration-green-500/30 transition-all">
            View_All_Experiments →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ideas.map((idea) => (
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
            />
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <div className="flex gap-6 text-xs font-mono text-white/40">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <Link href="https://twitter.com/negativezeroinc" target="_blank" className="hover:text-white transition-colors">TWITTER</Link>
            </div>
            <div className="text-white/20 font-mono text-[10px] uppercase tracking-widest">
                NEGATIVE ZERO INC © 2026 // EST. EST
            </div>
        </div>
      </div>
    </footer>
  );
}
