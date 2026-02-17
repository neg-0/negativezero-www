"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, FileText, Globe, Code, Zap, CheckCircle2 } from "lucide-react";

const stages = [
  { 
    id: "prospector", 
    label: "Prospector", 
    icon: Search, 
    desc: "Autonomous agents scour social media, forums, and reviews to identify burning user pain points. We don't guess what to build; the market tells us.",
    stats: "34 Ideas Found"
  },
  { 
    id: "audit", 
    label: "Pain Audit", 
    icon: FileText, 
    desc: "Deep dive analysis. Is this a real problem? Is there budget? Is the competition asleep? We filter noise from signal.",
    stats: "12 Audited"
  },
  { 
    id: "copy", 
    label: "Copy Draft", 
    icon: FileText, 
    desc: "Before a single line of code is written, we write the sales copy. If we can't sell it in text, we won't build it in code.",
    stats: "8 Drafts"
  },
  { 
    id: "landing", 
    label: "Landing Page", 
    icon: Globe, 
    desc: "A high-fidelity landing page is deployed to test conversion. We run real traffic to measure click-through and signup intent.",
    stats: "5 Live Tests"
  },
  { 
    id: "sprint", 
    label: "48h Sprint", 
    icon: Code, 
    desc: "Green light? The build team (human + AI) has 48 hours to ship a functional MVP. Speed is the ultimate feature.",
    stats: "4 In Build"
  },
  { 
    id: "verdict", 
    label: "Verdict", 
    icon: CheckCircle2, 
    desc: "Launch or Kill. Based on usage data, we either double down and incorporate, or kill the project and move to the next idea.",
    stats: "3 Products"
  },
];

export function PipelineViz({ counts }: { counts?: any }) {
  const [activeStage, setActiveStage] = useState(0);
  const [flowingStage, setFlowingStage] = useState(0);

  // Auto-flow animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowingStage((prev) => (prev + 1) % stages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getCount = (id: string) => {
    if (!counts) return stages.find(s => s.id === id)?.stats || "0";
    return counts[id] || 0;
  };

  return (
    <div className="w-full py-12">
      {/* Visual Pipeline */}
      <div className="relative mb-16 px-4 md:px-12 overflow-x-auto pb-8 hide-scrollbar">
        <div className="min-w-[800px] flex justify-between items-center relative z-10">
          {/* Connecting Line Background */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-white/10 -z-10 rounded-full"></div>
          
          {/* Active Flow Line */}
          <motion.div 
            className="absolute top-8 left-0 h-1 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] -z-10 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(flowingStage / (stages.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "linear" }}
          />

          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isFlowing = index <= flowingStage;
            const isActive = index === activeStage;

            return (
              <div key={stage.id} className="relative flex flex-col items-center group cursor-pointer" onClick={() => setActiveStage(index)}>
                <motion.div
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center bg-black z-20 transition-all duration-300 ${
                    isActive ? 'border-green-500 scale-110 shadow-[0_0_20px_rgba(34,197,94,0.4)]' : 
                    isFlowing ? 'border-green-500/50 text-green-500' : 'border-white/10 text-neutral-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className={`w-6 h-6 ${isActive || isFlowing ? 'text-green-500' : 'text-neutral-600'}`} />
                </motion.div>

                {/* Pulse Effect for current flow */}
                {index === flowingStage && (
                  <span className="absolute top-0 left-0 w-16 h-16 rounded-full border border-green-500 animate-ping opacity-75"></span>
                )}

                <div className="mt-4 text-center">
                  <span className={`text-[10px] uppercase tracking-widest font-bold block mb-1 ${isActive ? 'text-white' : 'text-neutral-500'}`}>
                    {stage.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Panel */}
      <div className="max-w-3xl mx-auto px-6 h-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-center space-y-4 border border-green-500/20 bg-green-500/5 p-8 rounded-lg backdrop-blur-sm"
          >
            <div className="flex justify-center items-center gap-3 mb-2">
              <span className="text-green-500 font-mono text-sm uppercase tracking-widest">
                Stage {activeStage + 1}: {stages[activeStage].label}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {stages[activeStage].desc}
            </h3>
            <div className="pt-4 flex justify-center gap-8 text-xs uppercase tracking-widest text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                System Active
              </span>
              {/* This stat is static here but we could pass real props */}
              <span className="text-white border-b border-green-500 pb-0.5">
                Current Load: {getCount(stages[activeStage].id)}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
