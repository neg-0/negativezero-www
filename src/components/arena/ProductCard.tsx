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

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "active": return {
      border: "hover:border-emerald-500",
      shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      text: "group-hover:text-emerald-400",
      bg: "bg-emerald-500",
      bgSoft: "bg-emerald-500/10",
      textBase: "text-emerald-400",
      borderBase: "border-emerald-500/50",
      glow: "shadow-[0_0_10px_rgba(16,185,129,0.5)]",
      gradient: "via-emerald-500/50"
    };
    case "building": 
    case "passed":
      return {
        border: "hover:border-amber-500",
        shadow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
        text: "group-hover:text-amber-400",
        bg: "bg-amber-500",
        bgSoft: "bg-amber-500/10",
        textBase: "text-amber-400",
        borderBase: "border-amber-500/50",
        glow: "shadow-[0_0_10px_rgba(245,158,11,0.5)]",
        gradient: "via-amber-500/50"
      };
    case "graduated": 
    case "live":
      return {
        border: "hover:border-cyan-500",
        shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
        text: "group-hover:text-cyan-400",
        bg: "bg-cyan-500",
        bgSoft: "bg-cyan-500/10",
        textBase: "text-cyan-400",
        borderBase: "border-cyan-500/50",
        glow: "shadow-[0_0_10px_rgba(6,182,212,0.5)]",
        gradient: "via-cyan-500/50"
      };
    case "failed": return {
      border: "hover:border-red-500",
      shadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
      text: "group-hover:text-red-400",
      bg: "bg-red-500",
      bgSoft: "bg-red-500/10",
      textBase: "text-red-400",
      borderBase: "border-red-500/50",
      glow: "shadow-[0_0_10px_rgba(239,68,68,0.5)]",
      gradient: "via-red-500/50"
    };
    default: return {
      border: "hover:border-emerald-500",
      shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      text: "group-hover:text-emerald-400",
      bg: "bg-emerald-500",
      bgSoft: "bg-emerald-500/10",
      textBase: "text-emerald-400",
      borderBase: "border-emerald-500/50",
      glow: "shadow-[0_0_10px_rgba(16,185,129,0.5)]",
      gradient: "via-emerald-500/50"
    };
  }
}

function getStatusLabel(status: string) {
  switch (status.toLowerCase()) {
    case "active": return "VALIDATING";
    case "passed": return "BUILDING"; 
    case "building": return "BUILDING";
    case "graduated": return "LIVE";
    case "failed": return "KILLED";
    default: return status.toUpperCase();
  }
}

export function ProductCard({ id, slug, title, tagline, status, signupCount, signupGoal, sprintEnd, className }: ProductCardProps) {
  const colors = getStatusColor(status);
  const statusLabel = getStatusLabel(status);
  const progress = Math.min((signupCount / signupGoal) * 100, 100);

  return (
    <Link href={`/arena/${slug}`} className={cn(
      "group block border border-white/20 bg-black/40 hover:bg-black/80 transition-all duration-300 relative overflow-hidden h-full flex flex-col rounded-lg",
      colors.border,
      colors.shadow,
      className
    )}>
      {/* Top Accent Gradient */}
      <div className={cn(
        "absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
        colors.gradient
      )}></div>
      
      <div className="absolute top-2 right-2 opacity-70 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
        <CountdownTimer sprintEnd={sprintEnd} status={status} signupCount={signupCount} signupGoal={signupGoal} />
      </div>
      
      <div className="p-6 pt-12 flex-1 flex flex-col justify-between relative">
        {/* Status Badge */}
        <div className="absolute top-4 left-6">
           <span className={cn(
             "text-[10px] uppercase tracking-widest px-2 py-1 border font-medium rounded-sm transition-colors",
             colors.textBase,
             colors.borderBase,
             colors.bgSoft
           )}>
             {statusLabel}
           </span>
        </div>

        <div>
          <h3 className={cn("text-xl font-bold text-white mb-2 transition-all font-mono tracking-tight mt-4", colors.text)}>
            {title}
          </h3>
          <p className="text-sm text-neutral-400 mb-6 font-light leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors">
            {tagline}
          </p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/10">
           <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
             <span>SUPPORTERS</span>
             <span className={cn(progress >= 100 ? colors.textBase : "text-neutral-400")}>{signupCount}/{signupGoal}</span>
           </div>
           {/* Progress Bar */}
           <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
             <div 
               className={cn("h-full transition-all duration-500", colors.bg, colors.glow)} 
               style={{ width: `${progress}%` }}
             />
           </div>
           
           <div className="mt-4 flex justify-between text-[10px] text-neutral-400 font-mono">
             <span>// {slug}</span>
           </div>
        </div>
      </div>
    </Link>
  );
}
