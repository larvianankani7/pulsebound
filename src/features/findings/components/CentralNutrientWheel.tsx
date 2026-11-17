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
  onBack?: () => void;
  className?: string;
}

/**
 * Calculates radial (x, y) coordinates for desktop/tablet circular wheel layout.
 * Starts at 12 o'clock (-pi/2) and distributes evenly clockwise around the exact center (0,0).
 */
function getOrbitCoordinates(index: number, total: number, radius: number) {
  if (total <= 0) return { x: 0, y: 0, angle: 0 };
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = Math.round(radius * Math.cos(angle));
  const y = Math.round(radius * Math.sin(angle));
  return { x, y, angle };
}

/**
 * Dynamic radius tuning based on number of detected nutrients.
 * Leaves generous clearance from the central vessel (radius 96px)
 * while keeping all nodes safely within the 560px stage boundary (radius 280px).
 */
function getDynamicRadius(total: number): number {
  if (total <= 4) return 195;
  if (total <= 6) return 205;
  if (total <= 8) return 215;
  return 225;
}

/**
 * CentralNutrientWheel
 *
 * The signature visual component of SYLVARA's Findings experience:
 * - Central Meal Element: Displays strictly the submitted meal name in the exact center
 *   with an elegant violet gradient wave, circular glowing ring, and radial backdrop.
 * - Circular Nutrient Wheel: True radial circular arrangement on desktop and tablet
 *   with dark lavender circular borders, soft violet glow, floating animation,
 *   outward hover tooltips, and guaranteed non-overlapping spacing.
 * - Responsive Layout: Scaled proportionally on tablet; clean non-overlapping responsive
 *   nutrient grid beneath the central meal vessel on mobile viewports (< 640px).
 * - Drill-down Detail View: Smoothly displays NutrientDetailCard with accessible back button.
 */
export const CentralNutrientWheel: React.FC<CentralNutrientWheelProps> = ({
  mealTitle,
  nutrients,
  selectedNutrient: controlledNutrient,
  onSelectNutrient,
  onBack,
  className = "",
}) => {
  const [internalSelectedNutrient, setInternalSelectedNutrient] =
    useState<NutrientInfo | null>(null);

  // Responsive layout state: uses radial wheel on tablet and desktop (>= 640px),
  // and clean responsive nutrient grid beneath the central meal vessel on mobile (< 640px).
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640;
    }
    return false;
  });

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeNutrient =
    controlledNutrient !== undefined
      ? controlledNutrient
      : internalSelectedNutrient;

  const handleSelectNutrient = (nutrient: NutrientInfo) => {
    setInternalSelectedNutrient(nutrient);
    onSelectNutrient?.(nutrient);
  };

  const handleBackToWheel = () => {
    setInternalSelectedNutrient(null);
    onSelectNutrient?.(null);
    onBack?.();
  };

  const total = nutrients.length;
  const orbitRadius = getDynamicRadius(total);

  return (
    <div className={`relative w-full ${className}`}>
      {activeNutrient ? (
        /* =========================================================
           1. Nutrient Detail Information Card View
           ========================================================= */
        <motion.div
          key={`detail-${activeNutrient.id}`}
          initial={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }
          }
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
          <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-400/30 bg-[#1c0c36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-2 shadow-sm">
              <Sparkles
                className="w-3.5 h-3.5 text-[#d8b4fe]"
                aria-hidden="true"
              />
              <span>CENTRAL NUTRIENT WHEEL</span>
            </div>
            <p className="text-xs sm:text-sm text-[#d8b4fe]/75 font-sans max-w-lg">
              Explore the nutritional ecosystem supporting your meal. Hover on
              desktop or tap to inspect biological roles.
            </p>
          </div>

          {!isMobile ? (
            /* =========================================================
               Desktop & Tablet Radial Wheel Composition
               All elements live strictly within this centered radial stage
               ========================================================= */
            <div
              data-testid="radial-wheel-stage"
              className="relative mx-auto w-[520px] h-[520px] md:w-[560px] md:h-[560px] flex items-center justify-center scale-[0.88] md:scale-100 origin-center my-4 overflow-visible"
            >
              {/* Concentric Decorative Orbital Rings */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] md:w-[480px] md:h-[480px] rounded-full border border-purple-400/20 border-dashed pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[360px] md:h-[360px] rounded-full border border-purple-500/15 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-900/25 via-[#a855f7]/15 to-purple-900/25 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Exact Geometric Centre: Central Meal Vessel */}
              <div
                data-testid="central-meal-container"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-auto"
              >
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border border-[#c084fc]/40 bg-gradient-to-br from-[#1d0e38]/95 via-[#130727]/95 to-[#090314]/98 backdrop-blur-xl shadow-[0_0_45px_rgba(168,85,247,0.35)] flex flex-col items-center justify-center p-4 text-center ring-1 ring-white/10 group transition-all duration-300">
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a855f7]/20 via-transparent to-[#c084fc]/10 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-[1px] rounded-full border border-white/15 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Meal Identity Subtitle */}
                  <span className="relative z-10 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#c084fc] font-semibold mb-1 drop-shadow-sm">
                    Analyzed Meal
                  </span>

                  {/* Flowing Violet Gradient Wave Meal Title */}
                  <h2
                    data-testid="central-meal-title"
                    className="relative z-10 font-['Cinzel',serif] text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#d8b4fe] via-[#f3e8ff] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(192,132,252,0.45)] max-w-[140px] sm:max-w-[160px] md:max-w-[170px] break-words"
                  >
                    {mealTitle}
                  </h2>

                  {/* Nutrient count badge */}
                  <span className="relative z-10 mt-1.5 text-[9px] sm:text-[10px] text-[#d8b4fe]/75 tracking-wider font-mono">
                    {total} {total === 1 ? "Nutrient" : "Nutrients"}
                  </span>
                </div>
              </div>

              {/* Surrounding Orbiting Nutrient Circles (Radial Formation) */}
              {total > 0 ? (
                nutrients.map((nutrient, idx) => {
                  const { x, y } = getOrbitCoordinates(idx, total, orbitRadius);
                  const placement = y < 0 ? "top" : "bottom";

                  return (
                    <div
                      key={nutrient.id}
                      data-testid={`orbit-node-wrapper-${nutrient.id}`}
                      className="absolute z-30"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <NutrientOrbitNode
                        nutrient={nutrient}
                        index={idx}
                        total={total}
                        placement={placement}
                        onSelect={handleSelectNutrient}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-32 z-30 text-center py-4 text-xs text-[#d8b4fe]/60">
                  No individual nutrients detected for this meal.
                </div>
              )}
            </div>
          ) : (
            /* =========================================================
               Mobile Responsive Clean Grid Layout (< 640px)
               Central meal vessel at top, followed by clean non-overlapping
               responsive grid of nutrient circles beneath.
               ========================================================= */
            <div
              data-testid="mobile-wheel-stage"
              className="flex flex-col items-center w-full my-4"
            >
              {/* Central Meal Vessel */}
              <div
                data-testid="central-meal-container"
                className="relative w-44 h-44 rounded-full border border-[#c084fc]/40 bg-gradient-to-br from-[#1d0e38]/95 via-[#130727]/95 to-[#090314]/98 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.35)] flex flex-col items-center justify-center p-4 text-center ring-1 ring-white/10 mb-8 mx-auto"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a855f7]/20 via-transparent to-[#c084fc]/10 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-[1px] rounded-full border border-white/15 pointer-events-none"
                  aria-hidden="true"
                />

                <span className="relative z-10 text-[9px] font-mono uppercase tracking-[0.25em] text-[#c084fc] font-semibold mb-1">
                  Analyzed Meal
                </span>

                <h2
                  data-testid="central-meal-title"
                  className="relative z-10 font-['Cinzel',serif] text-base font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#d8b4fe] via-[#f3e8ff] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(192,132,252,0.45)] max-w-[140px] break-words"
                >
                  {mealTitle}
                </h2>

                <span className="relative z-10 mt-1.5 text-[9px] text-[#d8b4fe]/75 tracking-wider font-mono">
                  {total} {total === 1 ? "Nutrient" : "Nutrients"}
                </span>
              </div>

              {/* Clean Responsive Nutrient Grid Beneath */}
              {total > 0 ? (
                <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 sm:gap-6 w-full max-w-sm mx-auto justify-items-center">
                  {nutrients.map((nutrient, idx) => (
                    <NutrientOrbitNode
                      key={nutrient.id}
                      nutrient={nutrient}
                      index={idx}
                      total={total}
                      placement="bottom"
                      onSelect={handleSelectNutrient}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-sm text-[#d8b4fe]/60">
                  No individual nutrients detected for this meal.
                </div>
              )}
            </div>
          )}
        </motion.section>
      )}
    </div>
  );
};

export default CentralNutrientWheel;
