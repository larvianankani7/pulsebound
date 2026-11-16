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
 * soft violet glow, floating animation, outward-anchoring hover/tap tooltip,
 * unified click targets across illustration and label, and mobile touch support.
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
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleOpenDetail = () => {
    playMenuClickSound();
    onSelect(nutrient);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Check if this interaction was initiated via a touch pointer
    const isTouch = (e.nativeEvent as PointerEvent)?.pointerType === "touch";

    if (isTouch) {
      if (!isOpenMobile) {
        // First tap on mobile: reveal the tooltip preview
        playMenuClickSound();
        setIsOpenMobile(true);
        return;
      }
    }

    // Desktop click, keyboard activation, or second mobile tap: open detail view
    handleOpenDetail();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Mobile touch interaction: first touch toggles tooltip preview
    if (!isOpenMobile) {
      e.preventDefault();
      e.stopPropagation();
      playMenuClickSound();
      setIsOpenMobile(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      handleOpenDetail();
    }
  };

  const isTooltipOpen = isHovered || isFocused || isOpenMobile;

  // Inverted tooltip placement so tooltips always anchor outward away from the central meal:
  // - Nodes above the center (y < 0 or top includes "-") anchor UPWARD ("top" -> bottom-full mb-3)
  // - Nodes below the center (y >= 0) anchor DOWNWARD ("bottom" -> top-full mt-3)
  const calculatedPlacement: "top" | "bottom" =
    placement && placement !== "auto"
      ? placement
      : style?.top && typeof style.top === "string" && style.top.includes("-")
        ? "top"
        : "bottom";

  return (
    <motion.div
      style={{
        ...style,
        zIndex: isTooltipOpen ? 50 : (style?.zIndex ?? 30),
      }}
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
      onMouseLeave={() => {
        setIsHovered(false);
        setIsOpenMobile(false);
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false);
        setIsOpenMobile(false);
      }}
    >
      {/* Unified Interactive Button: Wraps both circular illustration vessel and text label */}
      <button
        type="button"
        role="button"
        onClick={handleClick}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        aria-label={`Explore ${nutrient.name}: ${nutrient.shortRole || "Key nutrient"}`}
        aria-describedby={`nutrient-tooltip-${nutrient.id}`}
        aria-haspopup="dialog"
        className="relative flex flex-col items-center justify-center group focus-visible:outline-none cursor-pointer"
      >
        {/* Circular Vector Illustration Vessel */}
        <div className="relative flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#c084fc]/40 bg-gradient-to-br from-[#1a0e33]/90 via-[#130a24]/85 to-[#0c0617]/95 shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md transition-all duration-300 group-hover:border-[#d8b4fe] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] group-active:scale-95 group-focus-visible:ring-2 group-focus-visible:ring-[#d8b4fe] group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#07050a]">
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
        </div>

        {/* Nutrient Label Below Node: Part of interactive button */}
        <span className="mt-2 font-['Cinzel',serif] text-[10px] sm:text-xs font-semibold text-[#f3e8ff] tracking-wide text-center leading-tight max-w-[88px] sm:max-w-[104px] line-clamp-2 drop-shadow-sm select-none group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(216,180,254,0.6)] transition-colors">
          {nutrient.name}
        </span>
      </button>

      {/* Outward Hover / Tap Tooltip */}
      <NutrientHoverTooltip
        nutrient={nutrient}
        isOpen={isTooltipOpen}
        placement={calculatedPlacement}
        onOpenDetail={handleOpenDetail}
      />
    </motion.div>
  );
};

export default NutrientOrbitNode;
