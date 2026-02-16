import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "glasswall",
    name: "GlassWall",
    role: "Client-Facing Project Management",
    status: "DEPLOYED",
    description: "Transparency as a service. Eliminate the 'What's the status?' email loop forever.",
    href: "https://glasswall.negativezero.io" // Placeholder
  },
  {
    id: "shiplog",
    name: "ShipLog",
    role: "DevOps Dashboard",
    status: "BETA",
    description: "The changelog that writes itself. Automated release notes from your commit history.",
    href: "https://shiplog.negativezero.io"
  },
  {
    id: "armourmail",
    name: "ArmourMail",
    role: "Email Security",
    status: "ALPHA",
    description: "Zero-trust communication infrastructure for high-value targets.",
    href: "#"
  },
  {
    id: "refinery",
    name: "The Refinery",
    role: "Venture Builder",
    status: "INTERNAL",
    description: "Algorithmic business idea validation and market stress-testing engine.",
    href: "#"
  }
];

export function ProductGrid() {
  return (
    <section className="w-full py-24 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-black p-8 hover:bg-neutral-900 transition-colors duration-300 flex flex-col justify-between h-[400px]"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 border border-white/10 px-2 py-1">
                    {product.status}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold tracking-tighter text-white mt-8 group-hover:translate-x-1 transition-transform duration-300">
                  {product.name}
                </h3>
                
                <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5">
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
