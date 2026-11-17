import React from "react";
import { Sparkles, HelpCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { type UnderrepresentedNutrient } from "../types";
import { ComplementaryFoodCard } from "./ComplementaryFoodCard";

export interface UnderrepresentedSectionProps {
  underrepresented: UnderrepresentedNutrient[];
  className?: string;
}

/**
 * UnderrepresentedSection
 *
 * "What Could Be Missing From This Meal?" discovery section.
 *
 * Explores nutrients and food groups that may be less represented in the user's meal,
 * presenting complementary whole food recommendations with circular vector illustrations
 * and practical culinary pairings.
 *
 * When no underrepresented nutrients are flagged, displays an elegant "Nutritional Harmony"
 * card celebrating balanced variety.
 */
export const UnderrepresentedSection: React.FC<
  UnderrepresentedSectionProps
> = ({ underrepresented, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  // Harmonious State: Meal incorporates a rich spectrum of food groups
  if (!underrepresented || underrepresented.length === 0) {
    return (
      <section
        className={`my-12 ${className}`}
        aria-labelledby="underrepresented-title"
        data-testid="underrepresented-harmony-section"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#c084fc]/30 bg-[#0e0819]/80 backdrop-blur-2xl p-8 sm:p-10 text-center shadow-[0_0_40px_rgba(168,85,247,0.18)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" />
            <span>NUTRITIONAL HARMONY</span>
          </div>
          <h2
            id="underrepresented-title"
            className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-white tracking-wide"
          >
            Diverse Food Spectrum Detected
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#d8b4fe]/85 max-w-xl mx-auto font-sans leading-relaxed">
            Your described meal incorporates a rich array of foundational food
            groups. Continuing to vary plant and whole-food sources over the
            week supports holistic nutritional harmony.
          </p>
        </div>
      </section>
    );
  }

  // Active Discovery State: Staggered complementary food cards
  return (
    <section
      className={`my-12 ${className}`}
      aria-labelledby="underrepresented-title"
      data-testid="underrepresented-discovery-section"
    >
      {/* Section Header & Subtitle */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#d8b4fe]" />
          <span>DIETARY EXPLORATION</span>
        </div>
        <h2
          id="underrepresented-title"
          className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white tracking-wide"
        >
          What Could Be Missing From This Meal?
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#d8b4fe]/80 font-sans max-w-xl mx-auto leading-relaxed">
          Explore nutrients and food groups that may be less represented in your
          meal, along with foods that can complement it.
        </p>
      </div>

      {/* Cards List with Motion Animation */}
      <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
        {underrepresented.map((item, index) => (
          <motion.div
            key={item.nutrientId || index}
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ComplementaryFoodCard item={item} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
