import Link from "next/link";
import { CountdownTimer } from "./CountdownTimer";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  status: string;
  signupCount: number;
  signupGoal: number;
  sprintEnd?: Date | string | null;
  className?: string;
}

export function ProductCard({ id, slug, title, tagline, status, signupCount, signupGoal, sprintEnd, className }: ProductCardProps) {
  return (
    <Link href={`/arena/${slug}`} className={cn(
      "group block border border-white/20 bg-black/40 hover:border-green-500 hover:bg-black/80 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all duration-300 relative overflow-hidden h-full flex flex-col rounded-lg",
      className
    )}>
      <div className="absolute top-2 right-2 opacity-70 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
        <CountdownTimer sprintEnd={sprintEnd} status={status} signupCount={signupCount} signupGoal={signupGoal} />
      </div>
      <div className="p-6 pt-12 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 group-hover:drop-shadow-[0_0_5px_rgba(0,255,136,0.5)] transition-all font-mono tracking-tight">{title}</h3>
          <p className="text-sm text-neutral-300 mb-6 font-light leading-relaxed">{tagline}</p>
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 group-hover:text-neutral-400 border-t border-white/20 pt-4 uppercase tracking-wider transition-colors">
          <span>// {slug}</span>
          <span>[{signupCount}/{signupGoal}]_SUPPORTERS</span>
        </div>
      </div>
    </Link>
  );
}
