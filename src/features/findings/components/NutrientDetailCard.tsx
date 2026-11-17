import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  Activity,
  Sparkles,
  Wheat,
  Utensils,
  Zap,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { type NutrientInfo } from "../types";
import { NutrientIllustration } from "./illustrations/NutrientIllustrations";
import { IllustrationContainer } from "./illustrations/IllustrationContainer";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export interface NutrientDetailCardProps {
  nutrient: NutrientInfo;
  onBack: () => void;
  className?: string;
}

/**
 * NutrientDetailCard
 *
 * Full-page interactive educational detail view for an individual nutrient.
 * Replaces or overlays the Nutrient Wheel view without losing the current meal context.
 * Consumes rich structured data from NutrientInfo (biological roles, benefits,
 * whole food sources, everyday meal examples, synergies, and scientific facts).
 */
export const NutrientDetailCard: React.FC<NutrientDetailCardProps> = ({
  nutrient,
  onBack,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Focus return button on mount for keyboard accessibility
  useEffect(() => {
    backButtonRef.current?.focus();
  }, []);

  // Keyboard shortcut: Escape returns to the Nutrient Wheel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        playMenuClickSound();
        onBack();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  const handleBack = () => {
    playMenuClickSound();
    onBack();
  };

  return (
    <motion.section
      ref={containerRef}
      role="region"
      aria-labelledby="nutrient-detail-title"
      tabIndex={-1}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#160a2b]/95 via-[#0e071c]/95 to-[#07040d]/95 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_0_60px_rgba(168,85,247,0.2)] text-[#f3e8ff] ${className}`}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Navigation Bar with Back Button */}
      <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-5 mb-8">
        <button
          ref={backButtonRef}
          type="button"
          onClick={handleBack}
          aria-label="Back to Nutrient Wheel"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c084fc]/40 bg-[#1e0f36]/80 text-[#d8b4fe] hover:text-white hover:border-[#d8b4fe] hover:bg-[#2b124e] hover:shadow-[0_0_20px_rgba(192,132,252,0.35)] transition-all duration-200 text-xs sm:text-sm font-['Cinzel',serif] tracking-wider uppercase font-semibold cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe]"
        >
          <ArrowLeft className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
          <span>← Back to Nutrient Wheel</span>
        </button>

        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#d8b4fe]/60 hidden sm:inline-block">
          Press Esc to return
        </span>
      </div>

      {/* Hero Header: Large Circular Illustration + Title & Category */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 mb-10 text-center md:text-left">
        <div className="shrink-0">
          <IllustrationContainer
            size={120}
            glow
            pulse={false}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shadow-[0_0_40px_rgba(168,85,247,0.4)] border-[#c084fc]/50"
          >
            <NutrientIllustration
              id={nutrient.illustrationId || nutrient.id}
              size={68}
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
          </IllustrationContainer>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest border border-purple-500/40 bg-purple-950/70 text-[#c084fc] font-semibold">
              {nutrient.category}
            </span>
            {nutrient.shortRole && (
              <span className="text-xs text-[#d8b4fe]/75 italic hidden lg:inline-block">
                • {nutrient.shortRole}
              </span>
            )}
          </div>

          <h2
            id="nutrient-detail-title"
            className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider text-white drop-shadow-[0_0_15px_rgba(216,180,254,0.4)]"
          >
            {nutrient.name}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#e2d9f3] leading-relaxed font-sans max-w-3xl">
            {nutrient.introduction || nutrient.fullBenefit}
          </p>
        </div>
      </div>

      {/* Two-Column Grid: Roles & Benefits */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Biological Roles */}
        {nutrient.biologicalRoles && nutrient.biologicalRoles.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#120921]/70 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4 border-b border-purple-500/20 pb-3">
              <Activity className="w-5 h-5 text-[#c084fc]" aria-hidden="true" />
              <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
                Biological Roles
              </h3>
            </div>
            <ul className="space-y-3">
              {nutrient.biologicalRoles.map((role, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e2d9f3] leading-relaxed"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#a855f7] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* General Benefits */}
        {nutrient.generalBenefits && nutrient.generalBenefits.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#120921]/70 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4 border-b border-purple-500/20 pb-3">
              <Sparkles className="w-5 h-5 text-[#d8b4fe]" aria-hidden="true" />
              <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
                General Health Benefits
              </h3>
            </div>
            <ul className="space-y-3">
              {nutrient.generalBenefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e2d9f3] leading-relaxed"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#c084fc] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Prominent Food Sources & Meal Examples */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Whole Food Sources */}
        {nutrient.foodSources && nutrient.foodSources.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#120921]/70 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4 border-b border-purple-500/20 pb-3">
              <Wheat className="w-5 h-5 text-[#e9d5ff]" aria-hidden="true" />
              <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
                Prominent Whole Food Sources
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {nutrient.foodSources.map((food, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl border border-purple-400/25 bg-[#1b0d33]/80 text-[#e9d5ff] text-xs font-sans leading-normal shadow-sm"
                >
                  {food}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Everyday Meal Examples */}
        {nutrient.mealExamples && nutrient.mealExamples.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#120921]/70 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4 border-b border-purple-500/20 pb-3">
              <Utensils className="w-5 h-5 text-[#c084fc]" aria-hidden="true" />
              <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
                Everyday Meal Examples
              </h3>
            </div>
            <ul className="space-y-2.5">
              {nutrient.mealExamples.map((meal, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-[#e2d9f3] bg-[#1a0c30]/50 border border-purple-500/15 rounded-xl px-3.5 py-2 leading-relaxed"
                >
                  {meal}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Synergies / Interactions & Educational Facts Callouts */}
      <div className="relative z-10 space-y-4 mb-8">
        {nutrient.relatedInteraction && (
          <div className="rounded-2xl border border-purple-400/35 bg-gradient-to-r from-purple-950/60 via-[#180a2c]/80 to-purple-950/60 backdrop-blur-xl p-5 sm:p-6 shadow-[0_0_25px_rgba(168,85,247,0.15)]">
            <div className="flex items-center gap-2.5 mb-2 text-[#d8b4fe]">
              <Zap className="w-5 h-5 text-[#c084fc]" aria-hidden="true" />
              <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold tracking-wider uppercase">
                Nutritional Synergies & Interactions
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f3e8ff] leading-relaxed font-sans pl-7">
              {nutrient.relatedInteraction}
            </p>
          </div>
        )}

        {nutrient.educationalFact && (
          <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-950/30 via-[#1a0f26]/80 to-purple-950/40 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2 text-amber-200">
              <Lightbulb
                className="w-5 h-5 text-amber-300"
                aria-hidden="true"
              />
              <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold tracking-wider uppercase">
                Did You Know? Scientific Fact
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f5eedc] leading-relaxed font-sans pl-7">
              {nutrient.educationalFact}
            </p>
          </div>
        )}

        {nutrient.absorptionNote && !nutrient.relatedInteraction && (
          <div className="rounded-2xl border border-purple-400/25 bg-[#140a24]/70 backdrop-blur-xl p-4 sm:p-5">
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#c084fc] font-semibold block mb-1">
              Absorption Note
            </span>
            <p className="text-xs text-[#e2d9f3] leading-relaxed font-sans">
              {nutrient.absorptionNote}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Return Button */}
      <div className="relative z-10 pt-4 border-t border-purple-500/20 text-center">
        <button
          type="button"
          onClick={handleBack}
          aria-label="Back to Nutrient Wheel"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#c084fc]/40 bg-[#1e0f36]/80 text-[#d8b4fe] hover:text-white hover:border-[#d8b4fe] hover:bg-[#2b124e] hover:shadow-[0_0_25px_rgba(192,132,252,0.4)] transition-all duration-200 text-xs sm:text-sm font-['Cinzel',serif] tracking-wider uppercase font-semibold cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe]"
        >
          <ArrowLeft className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
          <span>← Back to Nutrient Wheel</span>
        </button>
      </div>
    </motion.section>
  );
};

export default NutrientDetailCard;
