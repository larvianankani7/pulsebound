import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { type NutrientInfo } from "../types";

export interface NutrientHoverTooltipProps {
  nutrient: NutrientInfo;
  isOpen: boolean;
  placement?: "top" | "bottom" | "auto";
  className?: string;
}

/**
 * NutrientHoverTooltip
 *
 * Floating glassmorphism card revealed on desktop hover or mobile tap.
 * Displays the nutrient's name, category badge, and concise biological role
 * without obscuring the central meal name.
 */
export const NutrientHoverTooltip: React.FC<NutrientHoverTooltipProps> = ({
  nutrient,
  isOpen,
  placement = "top",
  className = "",
}) => {
  if (!isOpen) return null;

  const placementClasses =
    placement === "bottom"
      ? "top-full mt-3 left-1/2 -translate-x-1/2"
      : "bottom-full mb-3 left-1/2 -translate-x-1/2";

  // Display concise biological role
  const roleText =
    nutrient.shortRole ||
    (nutrient.biologicalRoles && nutrient.biologicalRoles[0]) ||
    nutrient.fullBenefit ||
    "Key nutrient supporting vital cellular functions.";

  return (
    <div
      role="tooltip"
      id={`nutrient-tooltip-${nutrient.id}`}
      className={`absolute z-50 w-64 sm:w-72 rounded-2xl border border-purple-400/40 bg-[#120921]/95 backdrop-blur-2xl p-4 text-left shadow-[0_0_30px_rgba(0,0,0,0.85),0_0_20px_rgba(192,132,252,0.3)] animate-in fade-in zoom-in-95 duration-150 pointer-events-none ${placementClasses} ${className}`}
    >
      {/* Top Header: Nutrient Name & Category Badge */}
      <div className="flex items-center justify-between border-b border-purple-500/25 pb-2 mb-2 gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Sparkles className="w-3.5 h-3.5 text-[#c084fc] shrink-0" aria-hidden="true" />
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white tracking-wider truncate">
            {nutrient.name}
          </span>
        </div>
        <span className="text-[9px] uppercase font-mono font-semibold px-2 py-0.5 rounded-full border border-purple-500/35 bg-[#22103e] text-[#c084fc] shrink-0">
          {nutrient.category}
        </span>
      </div>

      {/* Biological Role Description */}
      <p className="text-xs text-[#e2d9f3] leading-relaxed font-sans mb-2.5">
        {roleText}
      </p>

      {/* Synergies / Interactions Note if present */}
      {nutrient.relatedInteraction && (
        <p className="text-[11px] text-[#c084fc]/90 italic font-sans mb-2 line-clamp-2">
          {nutrient.relatedInteraction}
        </p>
      )}

      {/* Educational Drill-Down Hint */}
      <div className="flex items-center justify-end gap-1 text-[10px] text-[#d8b4fe]/75 tracking-wider uppercase font-mono pt-1 border-t border-purple-500/15">
        <span>Click for full profile</span>
        <ArrowRight className="w-2.5 h-2.5" aria-hidden="true" />
      </div>
    </div>
  );
};

export default NutrientHoverTooltip;
