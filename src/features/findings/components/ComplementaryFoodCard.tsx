import React from "react";
import { Utensils, AlertCircle } from "lucide-react";
import { type UnderrepresentedNutrient } from "../types";
import { NutrientIllustration } from "./illustrations/NutrientIllustrations";
import { FoodIllustration } from "./illustrations/FoodIllustrations";
import { IllustrationContainer } from "./illustrations/IllustrationContainer";

export interface ComplementaryFoodCardProps {
  item: UnderrepresentedNutrient;
  index?: number;
  className?: string;
}

/**
 * ComplementaryFoodCard
 *
 * Glassmorphic card displaying an individual nutrient that may be less represented
 * in the user's meal, along with rich circular food illustrations and practical
 * culinary pairing advice.
 *
 * Adheres strictly to non-judgmental educational phrasing without portion weights,
 * calorie figures, or diagnostic claims.
 */
export const ComplementaryFoodCard: React.FC<ComplementaryFoodCardProps> = ({
  item,
  className = "",
}) => {
  return (
    <article
      data-testid={`complementary-card-${item.nutrientId}`}
      className={`rounded-3xl border border-[#c084fc]/30 bg-[#0e0819]/80 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.15)] transition-all duration-300 hover:border-[#c084fc]/50 hover:shadow-[0_0_45px_rgba(168,85,247,0.22)] ${className}`}
    >
      {/* 1. Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 pb-6 border-b border-purple-500/20">
        {/* Nutrient Circular Thumbnail */}
        <IllustrationContainer
          size={64}
          glow={true}
          className="border-[#c084fc]/40 bg-gradient-to-br from-[#1d0e38]/90 via-[#130727]/95 to-[#090314]/95 shrink-0"
        >
          <NutrientIllustration
            id={item.illustrationId || item.nutrientId}
            size={44}
            ariaLabel={`${item.nutrientName} illustration`}
          />
        </IllustrationContainer>

        {/* Nutrient Name, Badge, Reason & Biological Role */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-white tracking-wide">
              {item.nutrientName}
            </h3>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-[#22103e]/90 text-[#c084fc] text-[11px] font-mono tracking-wider font-medium">
              <AlertCircle className="w-3 h-3 text-[#d8b4fe]" />
              <span>May Be Underrepresented</span>
            </span>
          </div>

          {/* Context Reason */}
          {item.reason && (
            <p className="mt-2.5 text-xs sm:text-sm text-[#e2d9f3]/90 font-sans leading-relaxed">
              {item.reason}
            </p>
          )}

          {/* Biological Role */}
          {item.role && (
            <p className="mt-2 text-xs text-[#d8b4fe]/85 font-sans leading-relaxed">
              <span className="font-semibold text-[#f3e8ff]">
                Biological role:{" "}
              </span>
              {item.role}
            </p>
          )}
        </div>
      </div>

      {/* 2. Complementary Food Items Section */}
      {item.suggestedFoods && item.suggestedFoods.length > 0 && (
        <div className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-[#22103e] border border-purple-500/25 text-[#c084fc]">
              <Utensils className="w-3.5 h-3.5" />
            </div>
            <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#d8b4fe]">
              Complementary Whole Foods & Culinary Pairings
            </h4>
          </div>

          {/* Food Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {item.suggestedFoods.map((food, foodIdx) => {
              const displayName =
                food.name || food.foodName || "Complementary Food";
              const contributionText =
                food.nutrientContribution || food.foodGroup || "";
              const pairingText = food.pairingAdvice || food.description || "";

              return (
                <div
                  key={foodIdx}
                  data-testid="complementary-food-item"
                  className="rounded-2xl border border-purple-500/20 bg-[#160b29]/80 backdrop-blur-md p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-[#c084fc]/50 hover:bg-[#1d0e38]/90 hover:shadow-[0_0_20px_rgba(192,132,252,0.18)] group"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Food Circular Thumbnail */}
                    <IllustrationContainer
                      size={56}
                      glow={true}
                      className="border-[#c084fc]/35 bg-gradient-to-br from-[#1d0e38]/90 via-[#140826]/90 to-[#0b0515]/95 shadow-[0_0_15px_rgba(168,85,247,0.2)] shrink-0 transition-transform duration-300 group-hover:scale-105"
                    >
                      <FoodIllustration
                        id={food.illustrationId || food.name}
                        size={38}
                        ariaLabel={`${displayName} illustration`}
                      />
                    </IllustrationContainer>

                    {/* Food Name & Contribution Badge */}
                    <div className="flex-1 min-w-0">
                      <h5 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-white tracking-wide leading-snug">
                        {displayName}
                      </h5>
                      {contributionText && (
                        <div className="mt-1.5">
                          <span className="inline-block px-2.5 py-0.5 rounded-md border border-purple-400/25 bg-[#251342]/80 text-[#c084fc] text-[11px] font-medium leading-tight">
                            {contributionText}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Practical Pairing Advice */}
                  {pairingText && (
                    <div className="mt-4 pt-3 border-t border-purple-500/15">
                      <p className="text-xs text-[#d8b4fe]/85 font-sans leading-relaxed">
                        <span className="font-semibold text-[#c084fc]">
                          Pairing advice:{" "}
                        </span>
                        {pairingText}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Non-judgmental Footnote */}
      <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-[11px] text-[#d8b4fe]/60 font-sans italic">
        <span>
          * Additional ingredients or custom preparation methods may change this
          assessment.
        </span>
        <span className="hidden sm:inline-block">
          Educational discovery only
        </span>
      </div>
    </article>
  );
};
