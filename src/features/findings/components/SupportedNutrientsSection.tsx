import React from "react";
import { Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { type NutrientInfo } from "../types";
import { NutrientIllustration, IllustrationContainer } from "./illustrations";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export interface SupportedNutrientsSectionProps {
  nutrients: NutrientInfo[];
  onSelectNutrient?: (nutrient: NutrientInfo) => void;
  className?: string;
}

/**
 * Format raw category strings into readable display labels for pills
 */
function getCategoryLabel(category?: string): string {
  if (!category) return "Nutrient";
  switch (category.toLowerCase()) {
    case "macronutrient":
      return "Macronutrient";
    case "vitamin":
      return "Vitamin";
    case "mineral":
      return "Mineral";
    case "phytonutrient":
      return "Phytonutrient";
    case "hydration":
      return "Hydration";
    default:
      return category.charAt(0).toUpperCase() + category.slice(1);
  }
}

/**
 * SupportedNutrientsSection
 *
 * "Nutrients Supported by This Meal" discovery section.
 *
 * Showcases all meaningful verified nutrients detected in the meal as compact,
 * interactive glassmorphic cards. Never artificially caps the list to 5 items,
 * and ensures complex carbohydrates are rendered whenever present in the meal.
 *
 * Clicking any nutrient card triggers `onSelectNutrient(nutrient)` to reveal the
 * full educational `NutrientDetailCard`.
 */
export const SupportedNutrientsSection: React.FC<
  SupportedNutrientsSectionProps
> = ({ nutrients, onSelectNutrient, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  // Harmonious empty state: No verified nutrients identified yet
  if (!nutrients || nutrients.length === 0) {
    return (
      <section
        className={`my-12 ${className}`}
        aria-labelledby="supported-nutrients-empty-title"
        data-testid="supported-nutrients-empty-section"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#c084fc]/30 bg-[#0e0819]/80 backdrop-blur-2xl p-8 sm:p-10 text-center shadow-[0_0_40px_rgba(168,85,247,0.18)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" />
            <span>NUTRIENT SPECTRUM</span>
          </div>
          <h2
            id="supported-nutrients-empty-title"
            className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-white tracking-wide"
          >
            Nutrients Supported by This Meal
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#d8b4fe]/85 max-w-xl mx-auto font-sans leading-relaxed">
            No verified nutrients were identified from the description yet.
            Enter or refine your meal description to explore its supported
            nutritional components.
          </p>
        </div>
      </section>
    );
  }

  const handleCardClick = (nutrient: NutrientInfo) => {
    playMenuClickSound();
    onSelectNutrient?.(nutrient);
  };

  const handleKeyDown = (e: React.KeyboardEvent, nutrient: NutrientInfo) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(nutrient);
    }
  };

  return (
    <section
      className={`my-12 ${className}`}
      aria-labelledby="supported-nutrients-title"
      data-testid="supported-nutrients-section"
    >
      {/* Section Header & Subtitle */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" />
          <span>NUTRIENT SPECTRUM</span>
        </div>
        <h2
          id="supported-nutrients-title"
          className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white tracking-wide"
        >
          Nutrients Supported by This Meal
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#d8b4fe]/80 font-sans max-w-xl mx-auto leading-relaxed">
          Explore the nutritional components represented by the ingredients in
          your meal.
        </p>
      </div>

      {/* Grid of Compact Nutrient Cards */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4.5"
        role="list"
        aria-label="Nutrients supported by this meal"
      >
        {nutrients.map((nutrient, index) => {
          const benefitSummary =
            nutrient.shortRole ||
            nutrient.fullBenefit ||
            nutrient.introduction ||
            "";

          return (
            <motion.div
              key={nutrient.id || index}
              role="listitem"
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : Math.min(index * 0.04, 0.4),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <button
                type="button"
                role="button"
                tabIndex={0}
                aria-label={`Explore ${nutrient.name}`}
                data-testid={`nutrient-card-${nutrient.id}`}
                onClick={() => handleCardClick(nutrient)}
                onKeyDown={(e) => handleKeyDown(e, nutrient)}
                className="group relative flex flex-col items-center justify-between h-full w-full rounded-2xl sm:rounded-3xl border border-[#c084fc]/30 bg-[#100820]/75 p-3.5 sm:p-5 text-center shadow-[0_0_20px_rgba(168,85,247,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#d8b4fe] hover:bg-[#1a0e30]/90 hover:shadow-[0_0_25px_rgba(192,132,252,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07050a] active:scale-[0.98] cursor-pointer"
              >
                {/* Ambient Card Glow */}
                <div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#a855f7]/5 via-transparent to-[#c084fc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  {/* Circular Vector Illustration Container */}
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-105">
                    <IllustrationContainer
                      size={52}
                      glow={true}
                      className="shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-[#d8b4fe]"
                    >
                      <NutrientIllustration
                        id={nutrient.illustrationId || nutrient.id}
                        size={30}
                        ariaLabel={`${nutrient.name} illustration`}
                      />
                    </IllustrationContainer>
                  </div>

                  {/* Category Pill */}
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 rounded-full border border-purple-400/25 bg-[#1b0d30]/70 text-[#d8b4fe] text-[9px] sm:text-[10px] font-['Cinzel',serif] uppercase tracking-wider font-semibold">
                      {getCategoryLabel(nutrient.category)}
                    </span>
                  </div>

                  {/* Nutrient Name */}
                  <h3 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white tracking-wide leading-snug group-hover:text-[#f3e8ff] transition-colors mb-2">
                    {nutrient.name}
                  </h3>

                  {/* Benefit Summary */}
                  {benefitSummary && (
                    <p className="text-[11px] sm:text-xs text-[#d8b4fe]/75 font-sans leading-relaxed line-clamp-3 sm:line-clamp-2">
                      {benefitSummary}
                    </p>
                  )}
                </div>

                {/* Micro Action Affordance */}
                <div className="relative z-10 mt-3 pt-2 w-full border-t border-purple-500/15 flex items-center justify-center gap-1 text-[10px] text-[#c084fc]/70 group-hover:text-[#d8b4fe] transition-colors font-sans">
                  <span>Explore</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
