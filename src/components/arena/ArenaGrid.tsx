"use client";

import { useState } from "react";
import { ProductCard } from "@/components/arena/ProductCard";
// import { motion, AnimatePresence } from "framer-motion";

interface ArenaGridProps {
  ideas: any[];
}

const filters = ["ALL", "VALIDATING", "BUILDING", "GRADUATED"];

export function ArenaGrid({ ideas }: ArenaGridProps) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredIdeas = ideas.filter((idea) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "VALIDATING") return idea.status === "active";
    if (activeFilter === "BUILDING") return idea.status === "passed" || idea.status === "building";
    if (activeFilter === "GRADUATED") return idea.status === "graduated";
    return true;
  });

  return (
    <div>
      {/* FILTER BAR */}
      <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-xs font-mono uppercase tracking-widest px-3 py-1 transition-all ${
              activeFilter === filter
                ? "text-green-400 bg-green-500/10 border border-green-500/50"
                : "text-neutral-500 hover:text-white border border-transparent"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      
        {filteredIdeas.length > 0 ? (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
              >
                <ProductCard 
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
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="border border-white/20 bg-white/5 p-12 text-center rounded-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
          >
            <h3 className="text-2xl font-bold text-neutral-300 mb-2">No Experiments Found</h3>
            <p className="text-neutral-500 font-mono text-sm">Try a different filter.</p>
          </div>
        )}
      
    </div>
  );
}
