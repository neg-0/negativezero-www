import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { WaitlistForm } from "@/components/arena/WaitlistForm";
import { CountdownTimer } from "@/components/arena/CountdownTimer";
import { ArenaFooter } from "@/components/arena/ArenaFooter";
import { MetricsTracker } from "@/components/arena/MetricsTracker";
import Link from "next/link";

export const revalidate = 60;

export default async function ArenaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const idea = await prisma.arenaIdea.findUnique({
    where: { slug },
  });

  if (!idea) return notFound();

  let painQuotes: string[] = [];
  try {
    painQuotes = typeof idea.painQuotes === 'string' 
      ? JSON.parse(idea.painQuotes) 
      : idea.painQuotes as unknown as string[];
      
    if (!Array.isArray(painQuotes)) {
        // Fallback if it's not an array
        painQuotes = [String(idea.painQuotes)];
    }
  } catch(e) { 
    // If parsing fails, maybe it's just a string?
    painQuotes = []; 
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500/30 pb-20">
      <MetricsTracker product={slug} />
      
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/arena" className="font-mono text-xs hover:underline underline-offset-4 pointer-events-auto">← BACK_TO_ARENA</Link>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-24 px-4 border-b border-white/20 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,136,0.15),transparent_50%)] pointer-events-none animate-pulse" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <span className="px-3 py-1 border border-green-500/50 text-green-400 text-xs font-mono uppercase tracking-widest bg-green-900/10 inline-block self-start shadow-[0_0_10px_rgba(0,255,136,0.2)]">
              Experiment_Running
            </span>
            <CountdownTimer sprintEnd={idea.sprintEnd} status={idea.status} signupCount={idea.signupCount} signupGoal={idea.signupGoal} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.9] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {idea.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl font-light leading-relaxed mb-12 border-l-2 border-green-500/50 pl-6 shadow-[inset_10px_0_20px_-10px_rgba(0,255,136,0.1)]">
            {idea.valueProp || idea.title}
          </p>

          <WaitlistForm product={slug} />
        </div>
      </header>

      {/* Pain Points */}
      {painQuotes.length > 0 && (
        <section className="py-24 px-4 bg-white/[0.02]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm font-mono text-neutral-500 mb-12 uppercase tracking-widest border-b border-white/10 pb-4">
              // Detected_Signal
            </h2>
            <div className="grid gap-12">
              {painQuotes.map((quote, i) => (
                <blockquote key={i} className="relative pl-8 md:pl-12">
                   <span className="absolute left-0 top-0 text-4xl text-green-500/20 font-serif">"</span>
                   <p className="text-2xl md:text-3xl font-light italic text-neutral-300 leading-tight">
                    {quote}
                   </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats/Details */}
      <section className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto max-w-4xl px-4 flex justify-between items-center text-xs font-mono text-neutral-500 uppercase tracking-widest">
           <div>
              ID: <span className="text-neutral-400">{slug}</span><br/>
              Created: <span className="text-neutral-400">{new Date(idea.createdAt).toLocaleDateString()}</span>
           </div>
           <div className="text-right">
              Signups: <span className="text-green-400">{idea.signupCount}</span><br/>
              Goal: <span className="text-neutral-400">{idea.signupGoal}</span>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <ArenaFooter currentSlug={slug} />
      </div>
    </div>
  );
}
