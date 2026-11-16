import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BackgroundMedia } from "../main-menu/components/BackgroundMedia";
import { MusicControl } from "../main-menu/components/MusicControl";
import { FindingsHeader } from "./components/FindingsHeader";
import { MealInputCard } from "./components/MealInputCard";
import { MealVisualCard } from "./components/MealVisualCard";
import { NutrientOrbit } from "./components/NutrientOrbit";
import { UnderrepresentedSection } from "./components/UnderrepresentedSection";
import { MealContextSelector } from "./components/MealContextSelector";
import { NutritionalProfileChart } from "./components/NutritionalProfileChart";
import { FindingsDisclaimer } from "./components/FindingsDisclaimer";
import { analyzeMeal } from "./engine/mealAnalyzer";
import { type MealAnalysisResult, type MealOccasion } from "./types";

export function FindingsPage() {
  const [currentMealText, setCurrentMealText] = useState<string>("");
  const [selectedOccasion, setSelectedOccasion] =
    useState<MealOccasion>("lunch");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] =
    useState<MealAnalysisResult | null>(null);

  const shouldReduceMotion = useReducedMotion();

  const handleDiscover = (text: string) => {
    setIsLoading(true);
    setCurrentMealText(text);

    // Brief smooth transition delay for educational discovery feel
    setTimeout(() => {
      const result = analyzeMeal(text, selectedOccasion);
      setAnalysisResult(result);
      setIsLoading(false);
    }, 450);
  };

  const handleOccasionChange = (occasion: MealOccasion) => {
    setSelectedOccasion(occasion);
    if (analysisResult && currentMealText) {
      // Re-evaluate context label without altering underlying meal data
      setAnalysisResult((prev) => (prev ? { ...prev, occasion } : null));
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
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
            {/* Meal Visual & Identified Ingredients */}
            <MealVisualCard analysis={analysisResult} onReset={handleReset} />

            {/* Floating Circular Nutrient Orbit */}
            <NutrientOrbit nutrients={analysisResult.detectedNutrients} />

            {/* "What Could Be Missing From This Meal?" Underrepresented Section */}
            <UnderrepresentedSection
              underrepresented={analysisResult.underrepresentedNutrients}
            />

            {/* Dedicated Nutritional Profile & Occasion Context Section */}
            <section
              className="my-10"
              aria-labelledby="nutritional-profile-title"
            >
              <div className="text-center mb-6">
                <h3
                  id="nutritional-profile-title"
                  className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white tracking-wide"
                >
                  Explore Your Meal&apos;s Nutritional Profile
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#d8b4fe]/75 font-sans">
                  See how the foods in your meal contribute to different areas
                  of nutrition.
                </p>
              </div>

              {/* Breakfast / Lunch / Dinner Selector */}
              <MealContextSelector
                selectedOccasion={selectedOccasion}
                onChange={handleOccasionChange}
              />

              {/* Violet Line Graph with Area Fill */}
              <NutritionalProfileChart scores={analysisResult.profileScores} />
            </section>

            {/* Educational Safety Disclaimer */}
            <FindingsDisclaimer />
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default FindingsPage;
