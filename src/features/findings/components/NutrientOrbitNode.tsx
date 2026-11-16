import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { type NutrientInfo } from "../types";
import { NutrientIllustration } from "./illustrations/NutrientIllustrations";
import { NutrientHoverTooltip } from "./NutrientHoverTooltip";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export interface NutrientOrbitNodeProps {
  nutrient: NutrientInfo;
  index: number;
  total: number;
  onSelect: (nutrient: NutrientInfo) => void;
  style?: React.CSSProperties;
  className?: string;
  placement?: "top" | "bottom" | "auto";
}

/**
 * NutrientOrbitNode
 *
 * An individual nutrient element orbiting the central meal in the Nutrient Wheel.
 * Features a circular illustration container with dark lavender borders,
 * soft violet glow, floating animation, hover tooltip, and accessible click interactions.
 */
export const NutrientOrbitNode: React.FC<NutrientOrbitNodeProps> = ({
  nutrient,
  index,
  onSelect,
  style,
  className = "",
  placement,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSelect = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    playMenuClickSound();
    onSelect(nutrient);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(e);
    }
  };

  const isTooltipOpen = isHovered || isFocused;

  // Decide tooltip placement based on vertical position if not explicitly passed
  const calculatedPlacement: "top" | "bottom" =
    placement && placement !== "auto"
      ? placement
      : style?.top && typeof style.top === "string" && style.top.includes("-")
        ? "bottom"
        : "top";

  return (
    <motion.div
      style={style}
      className={`relative flex flex-col items-center group cursor-pointer ${className}`}
      animate={
        shouldReduceMotion
          ? { y: 0 }
          : {
              y: [-4, 4, -4],
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 3.6 + (index % 3) * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (index * 0.25) % 2,
            }
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* Interactive Orbiting Button */}
      <button
        type="button"
        role="button"
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        aria-label={`Explore ${nutrient.name}: ${nutrient.shortRole || "Key nutrient"}`}
        aria-describedby={`nutrient-tooltip-${nutrient.id}`}
        aria-haspopup="dialog"
        className="relative flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#c084fc]/40 bg-gradient-to-br from-[#1a0e33]/90 via-[#130a24]/85 to-[#0c0617]/95 shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md transition-all duration-300 hover:border-[#d8b4fe] hover:scale-110 hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07050a]"
      >
        {/* Ambient background glow inside button */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a855f7]/15 via-transparent to-[#c084fc]/5 pointer-events-none"
          aria-hidden="true"
        />

        {/* Specular inner rim */}
        <div
          className="absolute inset-[1px] rounded-full border border-white/10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Vector SVG Illustration */}
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
          <NutrientIllustration
            id={nutrient.illustrationId || nutrient.id}
            size={38}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
      </button>

      {/* Nutrient Label Below Node */}
      <span className="mt-2 font-['Cinzel',serif] text-[10px] sm:text-xs font-semibold text-[#f3e8ff] tracking-wide text-center leading-tight max-w-[88px] sm:max-w-[104px] line-clamp-2 drop-shadow-sm select-none pointer-events-none group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(216,180,254,0.6)] transition-colors">
        {nutrient.name}
      </span>

      {/* Hover / Tap Tooltip */}
      <NutrientHoverTooltip
        nutrient={nutrient}
        isOpen={isTooltipOpen}
        placement={calculatedPlacement}
      />
    </motion.div>
  );
};

export default NutrientOrbitNode;
