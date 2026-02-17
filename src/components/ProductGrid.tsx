import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "shiplog",
    name: "ShipLog",
    role: "DevOps Dashboard",
    status: "LIVE",
    description: "AI-powered changelogs from your Git history. Beautiful release notes your users actually read.",
    href: "https://shiplog.io" 
  },
  {
    id: "armourmail",
    name: "ArmourMail", 
    role: "Email Security",
    status: "ALPHA",
    description: "Email threat detection for AI agents. SPF/DKIM validation, phishing detection, and quarantine management.",
    href: "/arena/armourmail" 
  },
  {
    id: "chocks",
    name: "Chocks",
    role: "Veteran Transition Platform",
    status: "BETA",
    description: "SkillBridge opportunity matching for transitioning service members. Find your next mission with AI-powered career alignment.",
    href: "/arena/chocks" 
  },
  {
    id: "glasswall",
    name: "GlassWall",
    role: "Client-Facing PM",
    status: "ALPHA",
    description: "Transparent project management for agencies. Give clients a real-time window into progress without the 'what's the status?' emails.",
    href: "/arena/glasswall" 
  },
  {
    id: "anti-cpq",
    name: "Anti-CPQ",
    role: "Sales Quoting Engine",
    status: "BUILDING",
    description: "Kill the spreadsheet quote. Live visual quote builder that closes deals faster than your competitor's PDF.",
    href: "/arena/anti-cpq"
  },
  {
    id: "refinery",
    name: "The Refinery",
    role: "Idea Validation Engine",
    status: "ACTIVE",
    description: "48-hour idea validation sprints. From pain point to landing page to verdict. Watch ideas fight for survival.",
    href: "/refinery" 
  }
];

export function ProductGrid() {
  return (
    <section className="w-full py-24 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4">Product Ecosystem</h2>
          <p className="text-2xl text-white font-light">
            Tools for builders, by builders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-black p-8 hover:bg-neutral-900 transition-colors duration-300 flex flex-col h-[400px]"
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 border ${
                  product.status === 'LIVE' ? 'text-green-500 border-green-500/50 bg-green-500/10' : 
                  product.status === 'ACTIVE' ? 'text-blue-400 border-blue-400/50 bg-blue-400/10' :
                  'text-neutral-500 border-white/10'
                }`}>
                  {product.status}
                </span>
                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold tracking-tighter text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {product.name}
              </h3>
              
              <p className="text-sm text-neutral-400 leading-relaxed font-mono flex-grow">
                {product.description}
              </p>

              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-widest text-neutral-600">
                  {product.role}
                </span>
              </div>

              <Link href={product.href} className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-white/20">
                <span className="sr-only">View {product.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
