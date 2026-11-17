export type MealOccasion = "breakfast" | "lunch" | "dinner";

export type ContributionLevel =
  "High" | "Moderate" | "Mild" | "Low/Underrepresented";

export interface NutrientInfo {
  id: string;
  name: string;
  category:
    | "macronutrient"
    | "vitamin"
    | "mineral"
    | "other"
    | "phytonutrient"
    | "hydration";
  shortRole: string;
  introduction: string;
  biologicalRoles: string[];
  generalBenefits: string[];
  foodSources: string[];
  mealExamples: string[];
  relatedInteraction?: string;
  educationalFact?: string;
  illustrationId: string;
  // Backward compatibility fields
  fullBenefit?: string;
  absorptionNote?: string;
  iconName?: string;
  primaryColor?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  aliases: string[];
  foodGroup:
    | "grains"
    | "pulses"
    | "dairy"
    | "vegetables"
    | "fruits"
    | "nuts-seeds"
    | "proteins";
  nutrientsProvided: string[]; // nutrient IDs
  complementaryTo?: string[]; // nutrient IDs it helps complement
}

export interface DetectedIngredient {
  foodId: string;
  name: string;
  foodGroup: string;
}

export interface ComplementaryFoodSuggestion {
  name: string;
  foodName?: string;
  illustrationId: string;
  nutrientContribution: string;
  pairingAdvice: string;
  // Optional backward compatibility
  description?: string;
  foodGroup?: string;
}

export interface UnderrepresentedNutrient {
  nutrientId: string;
  nutrientName: string;
  illustrationId: string;
  role: string;
  reason: string;
  suggestedFoods: ComplementaryFoodSuggestion[];
}

export interface QualitativeScoreItem {
  category: string;
  qualitativeLevel:
    "Less represented" | "Moderately represented" | "Well represented";
  contributingFoods: string[];
  contextNote: string;
}

export interface OccasionEvaluation {
  occasion: MealOccasion;
  summary: string;
  graphReasoning: string;
  balanceTips: string[];
  qualitativeScores: QualitativeScoreItem[];
}

export interface ProfileCategoryScore {
  category:
    | "Protein"
    | "Dietary Fibre"
    | "Key Vitamins"
    | "Essential Minerals"
    | "Healthy Fats"
    | "Complex Energy";
  level: ContributionLevel;
  numericScore: number; // 0 to 100 for SVG graph positioning
  contributingFoods: string[];
  contextNote: string;
}

export interface MealAnalysisResult {
  rawDescription: string;
  occasion: MealOccasion;
  archetypeId?: string;
  mealTitle: string;
  visualTheme?: string;
  detectedIngredients: DetectedIngredient[];
  detectedNutrients: NutrientInfo[];
  underrepresentedNutrients: UnderrepresentedNutrient[];
  profileScores: ProfileCategoryScore[];
  uncertaintyNotes: string[];
  identifiedCount: number;
  occasionSuitability: OccasionEvaluation;
  occasionEvaluation?: OccasionEvaluation;
  isUnknownMeal?: boolean;
}
