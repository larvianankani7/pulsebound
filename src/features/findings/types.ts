export type MealOccasion = "breakfast" | "lunch" | "dinner";

export type ContributionLevel =
  "High" | "Moderate" | "Mild" | "Low/Underrepresented";

export interface NutrientInfo {
  id: string;
  name: string;
  category:
    "macronutrient" | "vitamin" | "mineral" | "phytonutrient" | "hydration";
  shortRole: string;
  fullBenefit: string;
  absorptionNote?: string;
  iconName: string;
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
  defaultPortionDesc: string;
  complementaryTo?: string[]; // nutrient IDs it helps complement
}

export interface DetectedIngredient {
  foodId: string;
  name: string;
  quantityText?: string;
  foodGroup: string;
}

export interface UnderrepresentedNutrient {
  nutrientId: string;
  nutrientName: string;
  reason: string;
  role: string;
  suggestedFoods: {
    name: string;
    description: string;
    foodGroup: string;
  }[];
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
  archetypeId: string;
  mealTitle: string;
  visualTheme: string;
  detectedIngredients: DetectedIngredient[];
  detectedNutrients: NutrientInfo[];
  underrepresentedNutrients: UnderrepresentedNutrient[];
  profileScores: ProfileCategoryScore[];
  uncertaintyNotes: string[];
  identifiedCount: number;
}
