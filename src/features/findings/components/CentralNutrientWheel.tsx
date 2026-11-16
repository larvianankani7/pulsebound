import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import { type NutrientInfo } from "../types";
import { NutrientOrbitNode } from "./NutrientOrbitNode";
import { NutrientDetailCard } from "./NutrientDetailCard";

export interface CentralNutrientWheelProps {
  mealTitle: string;
  nutrients: NutrientInfo[];
  selectedNutrient?: NutrientInfo | null;
  onSelectNutrient?: (nutrient: NutrientInfo | null) => void;
  className?: string;
}

/**
 * Calculates radial (x, y) coordinates for desktop circular wheel layout.
 * Starts at 12 o'clock (-pi/2) and distributes evenly clockwise.
 */
function getOrbitCoordinates(index: number, total: number, radius: number) {
  if (total <= 0) return { x: 0, y: 0, angle: 0 };
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = Math.round(radius * Math.cos(angle));
  const y = Math.round(radius * Math.sin(angle));
  return { x, y, angle };
}

/**
 * CentralNutrientWheel
 *
 * The signature visual component of SYLVARA's Findings experience:
 * - Central Meal Element: Displays strictly the meal name (no generic plate photos)
 *   with an elegant violet gradient wave, glowing circular ring, and radial backdrop.
 * - Circular Nutrient Wheel: Radial circular arrangement on desktop with floating animations,
 *   dark lavender borders, soft violet glow, hover tooltips, and mobile tap support.
 * - Drill-down Detail View: Clicking any nutrient smoothly displays NutrientDetailCard
 *   with an accessible return button to restore the wheel.
 */
export const CentralNutrientWheel: React.FC<CentralNutrientWheelProps> = ({
  mealTitle,
  nutrients,
  selectedNutrient: controlledNutrient,
  onSelectNutrient,
  className = "",
}) => {
  const [internalSelectedNutrient, setInternalSelectedNutrient] =
    useState<NutrientInfo | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const shouldReduceMotion = useReducedMotion();

  // Support both controlled and uncontrolled usage
  const activeNutrient =
    controlledNutrient !== undefined ? controlledNutrient : internalSelectedNutrient;

  // Window resize listener for responsive radial vs orbital cluster layout
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectNutrient = (nutrient: NutrientInfo) => {
    setInternalSelectedNutrient(nutrient);
    onSelectNutrient?.(nutrient);
  };

  const handleBackToWheel = () => {
    setInternalSelectedNutrient(null);
    onSelectNutrient?.(null);
  };

  // Determine dynamic radius based on number of orbiting nutrients on desktop
  const total = nutrients.length;
  const orbitRadius = total <= 4 ? 200 : total <= 8 ? 225 : 245;

  return (
    <div className={`relative w-full ${className}`}>
      {activeNutrient ? (
        /* =========================================================
           1. Nutrient Detail Information Card View
           ========================================================= */
        <motion.div
          key={`detail-${activeNutrient.id}`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <NutrientDetailCard
            nutrient={activeNutrient}
            onBack={handleBackToWheel}
          />
        </motion.div>
      ) : (
        /* =========================================================
           2. Circular Nutrient Wheel & Central Meal View
           ========================================================= */
        <motion.section
          key="nutrient-wheel-stage"
          aria-label={`Nutrient Wheel for ${mealTitle}`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="relative w-full rounded-3xl border border-purple-500/20 bg-gradient-to-b from-[#110822]/80 via-[#0a0515]/85 to-[#07030e]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-visible"
        >
            {/* Header section badge */}
            <div className="flex flex-col items-center justify-center text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-400/30 bg-[#1c0c36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" aria-hidden="true" />
                <span>CENTRAL NUTRIENT WHEEL</span>
              </div>
              <p className="text-xs sm:text-sm text-[#d8b4fe]/75 font-sans max-w-lg">
                Explore the nutritional ecosystem supporting your meal. Hover on desktop or tap to inspect biological roles.
              </p>
            </div>

            {/* Circular Orbit Canvas Stage */}
            <div className="relative w-full min-h-[460px] md:min-h-[600px] lg:min-h-[640px] flex flex-col md:block items-center justify-center">
              {/* Concentric Decorative Orbital Rings (Desktop) */}
              <div
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-purple-500/15 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] lg:w-[490px] lg:h-[490px] rounded-full border border-purple-400/20 border-dashed pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-900/20 via-[#a855f7]/10 to-purple-900/20 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Central Meal Node */}
              <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 mb-8 md:mb-0 flex flex-col items-center justify-center">
                {/* Glowing circular backdrop vessel */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full border border-[#c084fc]/40 bg-gradient-to-br from-[#1d0e38]/90 via-[#130727]/95 to-[#090314]/95 backdrop-blur-xl shadow-[0_0_45px_rgba(168,85,247,0.35)] flex flex-col items-center justify-center p-5 text-center ring-1 ring-white/10 group transition-all duration-300">
                  {/* Subtle radial inner glow */}
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a855f7]/20 via-transparent to-[#c084fc]/10 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Specular inner rim highlight */}
                  <div
                    className="absolute inset-[1px] rounded-full border border-white/15 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Meal Identity Label */}
                  <span className="relative z-10 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#c084fc] font-semibold mb-1.5 drop-shadow-sm">
                    Analyzed Meal
                  </span>

                  {/* Flowing Violet Gradient Wave Meal Title */}
                  <h2
                    data-testid="central-meal-title"
                    className="relative z-10 font-['Cinzel',serif] text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#d8b4fe] via-[#f3e8ff] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(192,132,252,0.45)] max-w-[160px] sm:max-w-[190px] md:max-w-[210px] break-words"
                  >
                    {mealTitle}
                  </h2>

                  {/* Nutrient count badge */}
                  <span className="relative z-10 mt-2 text-[10px] sm:text-[11px] text-[#d8b4fe]/75 tracking-wider font-mono">
                    {total} {total === 1 ? "Nutrient" : "Nutrients"}
                  </span>
                </div>
              </div>

              {/* Orbiting Nutrient Nodes */}
              {total > 0 ? (
                <div className="relative z-30 flex flex-wrap md:block items-center justify-center gap-4 sm:gap-6 w-full">
                  {nutrients.map((nutrient, idx) => {
                    const { x, y } = getOrbitCoordinates(idx, total, orbitRadius);
                    // Invert placement so tooltips always anchor outward away from the center:
                    // y < 0 (above center) -> "top" (anchors upward)
                    // y >= 0 (below center) -> "bottom" (anchors downward)
                    const placement = y < 0 ? "top" : "bottom";

                    const desktopStyle: React.CSSProperties = isDesktop
                      ? {
                          position: "absolute",
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }
                      : {};

                    return (
                      <NutrientOrbitNode
                        key={nutrient.id}
                        nutrient={nutrient}
                        index={idx}
                        total={total}
                        placement={placement}
                        onSelect={handleSelectNutrient}
                        style={desktopStyle}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="relative z-30 text-center py-6 text-sm text-[#d8b4fe]/60">
                  No individual nutrients detected for this meal.
                </div>
              )}
            </div>
          </motion.section>
        )}
    </div>
  );
};

export default CentralNutrientWheel;
