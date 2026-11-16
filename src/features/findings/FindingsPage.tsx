import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { RotateCcw, Sparkles } from "lucide-react";
import { BackgroundMedia } from "../main-menu/components/BackgroundMedia";
import { MusicControl } from "../main-menu/components/MusicControl";
import { FindingsHeader } from "./components/FindingsHeader";
import { MealInputCard } from "./components/MealInputCard";
import { CentralNutrientWheel } from "./components/CentralNutrientWheel";
import { UnderrepresentedSection } from "./components/UnderrepresentedSection";
import { SupportedNutrientsSection } from "./components/SupportedNutrientsSection";
import { MealProfileSection } from "./components/MealProfileSection";
import { FindingsDisclaimer } from "./components/FindingsDisclaimer";
import { analyzeMeal } from "./engine/mealAnalyzer";
import {
  type MealAnalysisResult,
  type MealOccasion,
  type NutrientInfo,
} from "./types";
import { playMenuClickSound } from "../main-menu/utils/soundEffects";

export function FindingsPage() {
  const [currentMealText, setCurrentMealText] = useState<string>("");
  const [selectedOccasion, setSelectedOccasion] =
    useState<MealOccasion>("lunch");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] =
    useState<MealAnalysisResult | null>(null);
  const [selectedNutrient, setSelectedNutrient] =
    useState<NutrientInfo | null>(null);

  const shouldReduceMotion = useReducedMotion();
  const discoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (discoverTimerRef.current) {
        clearTimeout(discoverTimerRef.current);
      }
    };
  }, []);

  const handleDiscover = (text: string) => {
    setIsLoading(true);
    setCurrentMealText(text);
    setSelectedNutrient(null);

    if (discoverTimerRef.current) {
      clearTimeout(discoverTimerRef.current);
    }

    // Brief smooth transition delay for educational discovery feel
    discoverTimerRef.current = setTimeout(() => {
      const result = analyzeMeal(text, selectedOccasion);
      setAnalysisResult(result);
      setIsLoading(false);
    }, 450);
  };

  const handleOccasionChange = (occasion: MealOccasion) => {
    setSelectedOccasion(occasion);
    if (currentMealText) {
      // Re-evaluate context analysis for new occasion
      const updated = analyzeMeal(currentMealText, occasion);
      setAnalysisResult(updated);
    }
  };

  const handleReset = () => {
    playMenuClickSound();
    setAnalysisResult(null);
    setSelectedNutrient(null);
  };

  const handleSelectNutrient = (nutrient: NutrientInfo | null) => {
    setSelectedNutrient(nutrient);
    if (nutrient && typeof window !== "undefined") {
      const wheelElement = document.getElementById("nutrient-wheel-section");
      if (wheelElement) {
        wheelElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#07050a] text-[#f3e8ff]">
      {/* 1. Reused Visual Atmospheric Background Video */}
      <BackgroundMedia videoSrc="/videos/menu-bg.mp4" startTime={5} />

      {/* 2. Reused Atmospheric Background Music Controller */}
      <MusicControl videoId="UrngDTXkOEk" />

      {/* 3. Scrollable Findings Discovery Showcase */}
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-4 py-12 sm:px-8 md:px-12 lg:px-16">
        {/* Page Header */}
        <FindingsHeader />

        {!analysisResult ? (
          /* Step 1: Meal Input State */
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <MealInputCard
              initialValue={currentMealText}
              onDiscover={handleDiscover}
              isLoading={isLoading}
            />
          </motion.div>
        ) : (
          /* Step 2: Meal Discovery Results View */
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {/* Top Action Bar with "Try Another Meal" */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 border-b border-purple-500/15">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" />
                <span>DISCOVERY RESULTS</span>
              </div>

              <button
                type="button"
                onClick={handleReset}
                aria-label="Try Another Meal"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#c084fc]/35 bg-[#170c2c]/80 text-[#d8b4fe] hover:text-white hover:border-[#d8b4fe] hover:bg-[#251244] hover:shadow-[0_0_20px_rgba(192,132,252,0.35)] transition-all duration-200 text-xs sm:text-sm font-['Cinzel',serif] tracking-wider uppercase font-semibold cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe]"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#c084fc] transition-transform duration-300 group-hover:-rotate-90" />
                <span>Try Another Meal</span>
              </button>
            </div>

            {/* 1. Signature Central Nutrient Wheel */}
            <div id="nutrient-wheel-section">
              <CentralNutrientWheel
                mealTitle={analysisResult.mealTitle}
                nutrients={analysisResult.detectedNutrients}
                selectedNutrient={selectedNutrient}
                onSelectNutrient={handleSelectNutrient}
                onBack={() => setSelectedNutrient(null)}
              />
            </div>

            {/* 2. "What Could Be Missing From This Meal?" Underrepresented Section */}
            <UnderrepresentedSection
              underrepresented={analysisResult.underrepresentedNutrients}
            />

            {/* 3. "Nutrients Supported by This Meal" Discovery Cards */}
            <SupportedNutrientsSection
              nutrients={analysisResult.detectedNutrients}
              onSelectNutrient={handleSelectNutrient}
            />

            {/* 4. Meal Composition, Occasion Suitability & Qualitative Curve */}
            <MealProfileSection
              occasion={selectedOccasion}
              onOccasionChange={handleOccasionChange}
              occasionEvaluation={
                analysisResult.occasionEvaluation ??
                analysisResult.occasionSuitability
              }
              profileScores={analysisResult.profileScores}
            />

            {/* 5. Educational Safety Disclaimer */}
            <FindingsDisclaimer />
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default FindingsPage;
