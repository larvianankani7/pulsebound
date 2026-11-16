import { Sparkles } from "lucide-react";
import { type NutrientInfo } from "../types";
import { NutrientItem } from "./NutrientItem";

interface NutrientOrbitProps {
  nutrients: NutrientInfo[];
}

export function NutrientOrbit({ nutrients }: NutrientOrbitProps) {
  if (nutrients.length === 0) return null;

  return (
    <section className="my-10" aria-label="Detected Nutrients">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-2">
          <Sparkles className="w-3 h-3 text-[#d8b4fe]" />
          <span>NUTRIENT ORBIT</span>
        </div>
        <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-white tracking-wide">
          Nutrients Supported by This Meal
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#d8b4fe]/75 font-sans">
          Hover on desktop or tap on mobile to explore specific biological roles
          and synergies.
        </p>
      </div>

      {/* Responsive Organic Grid / Orbital Cluster */}
      <div className="relative mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-[#0e0819]/60 backdrop-blur-xl p-6 sm:p-10 shadow-[0_0_40px_rgba(168,85,247,0.12)]">
        {/* Soft background ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 rounded-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          {nutrients.map((nutrient, idx) => (
            <NutrientItem key={nutrient.id} nutrient={nutrient} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
