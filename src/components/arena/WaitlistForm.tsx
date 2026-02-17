"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

interface WaitlistFormProps {
  product: string;
}

export function WaitlistForm({ product }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(true);
      setCount(data.count);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-6 bg-green-900/10 border border-green-500/20 rounded-none animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h3 className="text-xl font-bold text-green-400 font-mono mb-2">ACCESS GRANTED</h3>
        <p className="text-sm text-green-300/60 font-mono">
          You are #{count} in the queue.<br/>
          We'll notify you when deployment begins.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex gap-0">
          <input
            type="email"
            placeholder="enter_email_address..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-green-500/50 focus:bg-black/60 transition-all font-mono text-sm rounded-none"
          />
          <Button 
            type="submit" 
            disabled={loading} 
            className="bg-green-500 hover:bg-green-400 text-black font-bold font-mono rounded-none px-6 border-l-0"
          >
            {loading ? "[...]" : "JOIN_List"}
          </Button>
        </div>
        {error && (
          <p className="text-xs text-red-500 font-mono mt-1">
            Error: {error}
          </p>
        )}
        <p className="text-[10px] text-white/30 text-center font-mono uppercase tracking-widest mt-2">
          // encrypted_transmission // no_spam
        </p>
      </form>
    </div>
  );
}
