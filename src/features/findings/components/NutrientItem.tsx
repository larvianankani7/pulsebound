import React, { useState } from "react";
import {
  Sparkles,
  Activity,
  Zap,
  Eye,
  Wheat,
  Flame,
  Sun,
  Dna,
  Info,
} from "lucide-react";
import { type NutrientInfo } from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface NutrientItemProps {
  nutrient: NutrientInfo;
  index: number;
}

export function NutrientItem({ nutrient, index }: NutrientItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Render appropriate thematic icon
  const renderIcon = () => {
    switch (nutrient.iconName) {
      case "Dna":
        return <Dna className="w-5 h-5 text-[#c084fc]" />;
      case "Wheat":
        return <Wheat className="w-5 h-5 text-[#a855f7]" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-[#c084fc]" />;
      case "Eye":
        return <Eye className="w-5 h-5 text-[#d8b4fe]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#e9d5ff]" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-[#d8b4fe]" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-[#e0e7ff]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c084fc]" />;
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    playMenuClickSound();
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Floating Circular Bubble Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={`${nutrient.name}: ${nutrient.shortRole}`}
        className="relative flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-purple-400/35 bg-[#170c2a]/85 backdrop-blur-xl p-2 text-center transition-all duration-300 hover:scale-110 hover:border-[#d8b4fe] hover:bg-[#22103f] hover:shadow-[0_0_25px_rgba(192,132,252,0.4)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc] cursor-pointer"
        style={{
          animationDelay: `${index * 0.25}s`,
        }}
      >
        {/* Glow indicator */}
        <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-sm pointer-events-none" />

        <div className="relative z-10 mb-1">{renderIcon()}</div>
        <span className="relative z-10 font-['Cinzel',serif] text-[10px] sm:text-[11px] font-bold text-white tracking-wider leading-tight max-w-[70px] truncate">
          {nutrient.name}
        </span>
      </button>

      {/* Floating Tooltip Card */}
      {isOpen && (
        <div
          role="tooltip"
          className="absolute z-40 bottom-full mb-3 w-64 sm:w-72 rounded-2xl border border-purple-400/40 bg-[#120921]/95 backdrop-blur-2xl p-4 text-left shadow-[0_0_30px_rgba(0,0,0,0.8),0_0_20px_rgba(192,132,252,0.25)] animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          {/* Tooltip Header */}
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-2">
            <span className="font-['Cinzel',serif] text-xs font-bold text-white tracking-wider">
              {nutrient.name}
            </span>
            <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full border border-purple-500/30 bg-[#22103e] text-[#c084fc]">
              {nutrient.category}
            </span>
          </div>

          {/* Role and Benefit */}
          <p className="text-xs text-[#e2d9f3] leading-relaxed mb-2 font-sans">
            {nutrient.fullBenefit}
          </p>

          {/* Absorption & Synergy Note */}
          {nutrient.absorptionNote && (
            <div className="rounded-lg border border-purple-500/20 bg-[#1c0f33]/80 p-2 text-[11px] text-[#d8b4fe]/85 flex items-start gap-1.5 font-sans">
              <Info className="h-3.5 w-3.5 text-[#c084fc] shrink-0 mt-0.5" />
              <span>{nutrient.absorptionNote}</span>
            </div>
          )}

          {/* Pointer Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-solid border-t-[#120921] border-t-8 border-x-transparent border-x-8 border-b-0 pointer-events-none" />
        </div>
      )}
    </div>
  );
}
