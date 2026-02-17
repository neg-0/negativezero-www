"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  sprintEnd?: Date | string | null;
  status?: string; // "active", "passed", "failed"
  signupCount?: number;
  signupGoal?: number;
  className?: string;
}

export function CountdownTimer({ sprintEnd, status, signupCount, signupGoal, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (!sprintEnd) return;
    const end = new Date(sprintEnd).getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = end - now;

      if (diff <= 0) {
        setExpired(true);
        setTimeLeft(null);
      } else {
        const hours = Math.floor((diff / (1000 * 60 * 60)));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [sprintEnd]);

  const isPassed = status === "passed" || (signupCount !== undefined && signupGoal !== undefined && signupCount >= signupGoal);

  if (!sprintEnd) {
    return (
      <div className={cn("inline-flex items-center", className)}>
        <span className={cn(
          "font-mono font-bold uppercase tracking-widest text-xs px-2 py-1 border",
          isPassed ? "text-green-500 border-green-500/50 bg-green-500/10" : "text-white/20 border-white/10"
        )}>
          {isPassed ? "PASSED ✅" : "TBD"}
        </span>
      </div>
    );
  }

  if (expired) {
    return (
      <div className={cn("inline-flex items-center", className)}>
        <span className={cn(
          "font-mono font-bold uppercase tracking-widest text-xs px-2 py-1 border",
          isPassed ? "text-green-500 border-green-500/50 bg-green-500/10" : "text-red-500 border-red-500/50 bg-red-500/10"
        )}>
          {isPassed ? "PASSED ✅" : "ENDED"}
        </span>
      </div>
    );
  }

  if (!timeLeft) return <span className="text-white/20 font-mono text-sm animate-pulse">--:--:--</span>;

  return (
    <div className={cn("font-mono text-sm tracking-widest text-green-400 bg-green-900/10 border border-green-500/20 px-2 py-1 inline-block", className)}>
      <span className="tabular-nums">{String(timeLeft.hours).padStart(2, "0")}</span>
      <span className="mx-1 opacity-50">:</span>
      <span className="tabular-nums">{String(timeLeft.minutes).padStart(2, "0")}</span>
      <span className="mx-1 opacity-50">:</span>
      <span className="tabular-nums">{String(timeLeft.seconds).padStart(2, "0")}</span>
    </div>
  );
}
