import {
  Sparkles,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Sunrise,
  Sun,
  Moon,
  Layers,
} from "lucide-react";
import {
  type MealOccasion,
  type OccasionEvaluation,
  type ProfileCategoryScore,
  type QualitativeScoreItem,
} from "../types";
import { MealContextSelector } from "./MealContextSelector";
import { NutritionalProfileChart } from "./NutritionalProfileChart";

export interface MealProfileSectionProps {
  occasion: MealOccasion;
  onOccasionChange: (occ: MealOccasion) => void;
  occasionEvaluation?: OccasionEvaluation;
  profileScores?: ProfileCategoryScore[];
  className?: string;
}

/**
 * Fallback synthesizer for occasion evaluation if only profileScores or occasion is provided.
 */
function createFallbackEvaluation(
  occasion: MealOccasion,
  profileScores?: ProfileCategoryScore[]
): OccasionEvaluation {
  const qualitativeScores: QualitativeScoreItem[] = (profileScores ?? []).map(
    (score) => {
      let qualitativeLevel: "Well represented" | "Moderately represented" | "Less represented" =
        "Less represented";
      if (score.level === "High") {
        qualitativeLevel = "Well represented";
      } else if (score.level === "Moderate") {
        qualitativeLevel = "Moderately represented";
      }

      return {
        category: score.category,
        qualitativeLevel,
        contributingFoods: score.contributingFoods,
        contextNote: score.contextNote,
      };
    }
  );

  if (occasion === "breakfast") {
    return {
      occasion: "breakfast",
      summary:
        "In a morning breakfast context, this meal provides an early metabolic foundation to power cognitive alertness and physical vitality.",
      graphReasoning:
        "The qualitative profile reflects the recognized whole-food ingredients in your morning plate. Breakfasts balanced with fibre, complex energy, and protein support sustained morning attention and steady vitality.",
      balanceTips: [
        "Pair with a cup of curd, a boiled egg, or a handful of sprouted moong for prolonged morning focus.",
        "A fresh squeeze of lemon or a side of seasonal fruit delivers refreshing Vitamin C and enhances trace mineral uptake.",
        "A sprinkle of roasted peanuts, almonds, or seeds adds nourishing morning lipids.",
      ],
      qualitativeScores,
    };
  }

  if (occasion === "lunch") {
    return {
      occasion: "lunch",
      summary:
        "As a midday meal, this profile supports sustained afternoon stamina, steady blood sugar regulation, and productive focus without heavy lethargy.",
      graphReasoning:
        "The midday profile reflects balanced dietary fibre and complex carbohydrates, which support an even post-prandial glycemic response through the afternoon hours.",
      balanceTips: [
        "Complement with a crisp cucumber-tomato kachumber salad or steamed greens for digestive enzymes and micronutrients.",
        "A bowl of homemade curd, a glass of spiced chaas, or paneer cubes adds probiotic calcium and amino acids.",
        "Adding a bowl of warm dal or a sprinkle of pumpkin seeds enhances trace mineral density.",
      ],
      qualitativeScores,
    };
  }

  return {
    occasion: "dinner",
    summary:
      "In an evening dinner context, this meal offers nourishing replenishment that supports nocturnal recovery while remaining gentle on digestion.",
    graphReasoning:
      "The evening curve reflects moderate culinary lipids and accessible carbohydrates, which are well-suited for easy digestion prior to sleep.",
    balanceTips: [
      "Incorporate light, easily digestible proteins such as warm moong dal or fresh paneer.",
      "Add lightly sautéed vegetables or clear broth to support nighttime hydration and gentle cellular recovery.",
      "A cup of warm spiced turmeric milk or chamomile tea rounds out a restorative evening routine.",
    ],
    qualitativeScores,
  };
}

export function MealProfileSection({
  occasion,
  onOccasionChange,
  occasionEvaluation,
  profileScores,
  className = "",
}: MealProfileSectionProps) {
  // Ensure we have a robust evaluation object
  const evaluation: OccasionEvaluation =
    occasionEvaluation ?? createFallbackEvaluation(occasion, profileScores);

  // Categorize qualitative items from evaluation
  const wellOrModeratelyRepresented = evaluation.qualitativeScores.filter(
    (item) =>
      item.qualitativeLevel === "Well represented" ||
      item.qualitativeLevel === "Moderately represented"
  );

  const lessRepresented = evaluation.qualitativeScores.filter(
    (item) => item.qualitativeLevel === "Less represented"
  );

  const occasionIcon =
    occasion === "breakfast" ? (
      <Sunrise className="w-4 h-4 text-[#c084fc]" />
    ) : occasion === "lunch" ? (
      <Sun className="w-4 h-4 text-[#c084fc]" />
    ) : (
      <Moon className="w-4 h-4 text-[#c084fc]" />
    );

  const occasionLabel =
    occasion === "breakfast"
      ? "Breakfast Context"
      : occasion === "lunch"
      ? "Lunch Context"
      : "Dinner Context";

  return (
    <section
      className={`my-12 space-y-8 ${className}`}
      aria-labelledby="nutritional-profile-title"
      data-testid="meal-profile-section"
    >
      {/* 1. Section Header & Subtitle */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" />
          <span>OCCASION & BALANCE</span>
        </div>

        <h3
          id="nutritional-profile-title"
          className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white tracking-wide"
        >
          Explore Your Meal&apos;s Nutritional Profile
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#d8b4fe]/80 max-w-xl mx-auto font-sans leading-relaxed">
          Discover how your meal&apos;s composition fits into different meal occasions.
        </p>
      </div>

      {/* 2. Meal Occasion Selector */}
      <MealContextSelector
        selectedOccasion={occasion}
        onChange={onOccasionChange}
      />

      {/* 3. Qualitative SVG Line Chart */}
      <NutritionalProfileChart
        occasionEvaluation={evaluation}
        scores={profileScores}
        occasion={occasion}
      />

      {/* 4. Dedicated Explanations: "Why Does Your Meal Look This Way?" */}
      <div
        className="mx-auto max-w-4xl rounded-3xl border border-purple-500/25 bg-[#0e0819]/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.12)] space-y-6"
        data-testid="why-meal-looks-this-way"
      >
        <div className="flex items-center gap-3 border-b border-purple-500/20 pb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-400/30 bg-[#1e0f36] text-[#c084fc]">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold tracking-wide text-white">
              Why Does Your Meal Look This Way?
            </h4>
            <p className="text-xs text-[#d8b4fe]/75 font-sans">
              Understanding the qualitative shape of your meal&apos;s nutritional profile
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Occasion Contextual Interpretation */}
          <div className="rounded-2xl border border-purple-500/20 bg-[#140b25]/70 p-5 space-y-2">
            <div className="flex items-center gap-2 font-['Cinzel',serif] text-xs font-semibold text-[#d8b4fe] tracking-wider uppercase">
              {occasionIcon}
              <span>{occasionLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#e2d9f3] font-sans leading-relaxed">
              {evaluation.summary}
            </p>
          </div>

          {/* Qualitative Curve Reasoning */}
          <div className="rounded-2xl border border-purple-500/20 bg-[#140b25]/70 p-5 space-y-2">
            <div className="flex items-center gap-2 font-['Cinzel',serif] text-xs font-semibold text-[#d8b4fe] tracking-wider uppercase">
              <Layers className="w-4 h-4 text-[#c084fc]" />
              <span>Curve Shape Analysis</span>
            </div>
            <p className="text-xs sm:text-sm text-[#e2d9f3] font-sans leading-relaxed">
              {evaluation.graphReasoning}
            </p>
          </div>
        </div>

        {/* Identified Supporting Ingredients Breakdown */}
        {wellOrModeratelyRepresented.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#140b25]/50 p-5">
            <span className="font-['Cinzel',serif] text-xs font-bold text-white tracking-wider uppercase block mb-3">
              Recognized Food Contributions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {wellOrModeratelyRepresented.map((item) => (
                <div
                  key={item.category}
                  className="rounded-xl border border-purple-500/15 bg-[#1b0e33]/50 p-3 text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-['Cinzel',serif] font-bold text-[#e9d5ff]">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-400/20 bg-[#251344] text-[#c084fc]">
                      {item.qualitativeLevel}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#d8b4fe]/80 font-sans">
                    {item.contributingFoods.length > 0
                      ? item.contributingFoods.join(", ")
                      : "Identified from meal composition"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Less Represented Observation */}
        {lessRepresented.length > 0 && (
          <div className="text-xs text-[#d8b4fe]/75 font-sans italic bg-[#160b29]/40 p-4 rounded-xl border border-purple-500/15">
            <strong className="text-white not-italic font-['Cinzel',serif]">
              Nutritional Diversity Observation:{" "}
            </strong>
            Components like {lessRepresented.map((l) => l.category).join(", ")}{" "}
            are less represented in this meal description. Exploring gentle pairings
            can broaden your plate&apos;s nutritional spectrum.
          </div>
        )}
      </div>

      {/* 5. Dedicated Explanations: "How Could You Make This Meal More Balanced?" */}
      <div
        className="mx-auto max-w-4xl rounded-3xl border border-purple-500/25 bg-[#0e0819]/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.12)] space-y-6"
        data-testid="how-to-make-more-balanced"
      >
        <div className="flex items-center gap-3 border-b border-purple-500/20 pb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-400/30 bg-[#1e0f36] text-[#c084fc]">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold tracking-wide text-white">
              How Could You Make This Meal More Balanced?
            </h4>
            <p className="text-xs text-[#d8b4fe]/75 font-sans">
              Practical, gentle whole-food pairings to expand nutritional harmony
            </p>
          </div>
        </div>

        {/* Balance Suggestions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {evaluation.balanceTips.map((tip, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-2xl border border-purple-500/20 bg-[#140b25]/70 p-4 transition-all duration-200 hover:border-[#c084fc]/40 hover:bg-[#1a0e30]/80"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#261445] text-[#c084fc] border border-purple-400/25">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </div>
              <p className="text-xs sm:text-sm text-[#e2d9f3] font-sans leading-relaxed">
                {tip}
              </p>
            </div>
          ))}
        </div>

        {/* Non-Judgmental Celebration Reassurance */}
        <div className="rounded-xl border border-purple-500/15 bg-[#120822]/60 p-4 text-xs text-[#d8b4fe]/80 font-sans leading-relaxed flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#c084fc] shrink-0" />
          <span>
            SYLVARA celebrates the rich traditions of home-cooked meals. These suggestions
            are gentle ideas to complement dietary diversity over your day, rather than
            strict rules or restrictions.
          </span>
        </div>
      </div>
    </section>
  );
}
