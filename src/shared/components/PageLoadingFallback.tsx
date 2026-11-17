import React from "react";
import { Sparkles } from "lucide-react";

export const PageLoadingFallback: React.FC = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#07050a] text-purple-200 select-none"
    >
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-purple-400 animate-spin" />
        <Sparkles className="w-5 h-5 text-purple-300 absolute animate-pulse" />
      </div>
      <p className="mt-4 font-serif text-xs uppercase tracking-widest text-purple-300/70">
        Loading Chronicle...
      </p>
    </div>
  );
};
