import { VERIFIED_FOODS } from "../../../content/foods/foodsData";
import { VERIFIED_NUTRIENTS } from "../../../content/nutrients/nutrientsData";
import { MEAL_ARCHETYPES } from "../../../content/meals/mealArchetypes";
import {
  type MealAnalysisResult,
  type MealOccasion,
  type DetectedIngredient,
  type NutrientInfo,
  type UnderrepresentedNutrient,
  type ProfileCategoryScore,
} from "../types";

export function analyzeMeal(
  description: string,
  occasion: MealOccasion = "lunch"
): MealAnalysisResult {
  const normalizedDesc = description.toLowerCase().trim();

  // 1. Detect matching foods and ingredients
  const detectedIngredients: DetectedIngredient[] = [];
  const detectedFoodIds = new Set<string>();

  for (const food of VERIFIED_FOODS) {
    let matched = false;
    let matchedAlias = "";

    for (const alias of food.aliases) {
      // Word boundary match
      const regex = new RegExp(`\\b${alias}\\b`, "i");
      if (regex.test(normalizedDesc)) {
        matched = true;
        matchedAlias = alias;
        break;
      }
    }

    if (matched) {
      detectedFoodIds.add(food.id);

      // Check if a quantity was supplied before the word (e.g., "2 chapatis", "1 bowl")
      const qtyRegex = new RegExp(
        `(\\d+(?:\\.\\d+)?(?:\\s*(?:bowl|cup|plate|glass|tbsp|g|piece|pieces))?)\\s+${matchedAlias}`,
        "i"
      );
      const match = normalizedDesc.match(qtyRegex);
      const quantityText = match ? match[1] : food.defaultPortionDesc;

      detectedIngredients.push({
        foodId: food.id,
        name: food.name,
        quantityText,
        foodGroup: food.foodGroup,
      });
    }
  }

  // 2. Fallback if no specific food recognized
  if (detectedIngredients.length === 0) {
    detectedIngredients.push({
      foodId: "food.general",
      name: "Custom Meal Selection",
      quantityText: "Described Portion",
      foodGroup: "vegetables",
    });
  }

  // 3. Collect detected nutrients
  const detectedNutrientIds = new Set<string>();
  for (const item of detectedIngredients) {
    const foodDef = VERIFIED_FOODS.find((f) => f.id === item.foodId);
    if (foodDef) {
      for (const nId of foodDef.nutrientsProvided) {
        detectedNutrientIds.add(nId);
      }
    }
  }

  // If fallback custom meal, provide baseline nutrients
  if (detectedNutrientIds.size === 0) {
    detectedNutrientIds.add("nutrient.complex-carbs");
    detectedNutrientIds.add("nutrient.fibre");
  }

  const detectedNutrients: NutrientInfo[] = Array.from(detectedNutrientIds)
    .map((id) => VERIFIED_NUTRIENTS[id])
    .filter(Boolean);

  // 4. Identify underrepresented nutrients
  const underrepresentedNutrients: UnderrepresentedNutrient[] = [];

  // Check Fibre
  if (!detectedNutrientIds.has("nutrient.fibre")) {
    underrepresentedNutrients.push({
      nutrientId: "nutrient.fibre",
      nutrientName: "Dietary Fibre",
      role: "Supports steady digestive rhythm, fosters beneficial microbiome flora, and moderates glucose absorption.",
      reason:
        "Your described meal appears to have limited whole-grain, legume, or vegetable fibre sources.",
      suggestedFoods: [
        {
          name: "Lentils / Dal",
          description: "Rich in soluble & insoluble fibre",
          foodGroup: "Pulses",
        },
        {
          name: "Leafy Greens (Palak / Methi)",
          description: "Provides cellular cellulose and vital micronutrients",
          foodGroup: "Vegetables",
        },
        {
          name: "Whole Wheat Chapatis / Oats",
          description: "Offers complex cereal bran fibre",
          foodGroup: "Grains",
        },
        {
          name: "Fresh Fruits (Guava / Apples)",
          description: "High in pectin and prebiotics",
          foodGroup: "Fruits",
        },
      ],
    });
  }

  // Check Calcium
  if (!detectedNutrientIds.has("nutrient.calcium")) {
    underrepresentedNutrients.push({
      nutrientId: "nutrient.calcium",
      nutrientName: "Calcium",
      role: "Provides foundational structural density for teeth and bones, and governs neuro-muscular signaling.",
      reason:
        "If dairy or fortified alternatives are absent, this meal may contribute less bioavailable calcium.",
      suggestedFoods: [
        {
          name: "Curd / Raita",
          description: "Probiotic and calcium-dense",
          foodGroup: "Dairy",
        },
        {
          name: "Paneer",
          description: "Concentrated dairy calcium and amino acids",
          foodGroup: "Dairy",
        },
        {
          name: "Ragi (Finger Millet)",
          description: "Exceptionally high plant-based calcium grain",
          foodGroup: "Grains",
        },
        {
          name: "Sesame Seeds / Til",
          description: "Dense mineral-rich seed sprinkle",
          foodGroup: "Nuts & Seeds",
        },
      ],
    });
  }

  // Check Vitamin C
  if (!detectedNutrientIds.has("nutrient.vitamin-c")) {
    underrepresentedNutrients.push({
      nutrientId: "nutrient.vitamin-c",
      nutrientName: "Vitamin C",
      role: "Aids collagen biosynthesis, delivers antioxidant defense, and enhances the absorption of non-haem plant iron.",
      reason:
        "A fresh raw fruit or lightly cooked vegetable could provide a valuable Vitamin C boost.",
      suggestedFoods: [
        {
          name: "Fresh Amla (Indian Gooseberry)",
          description: "One of nature's richest Vitamin C sources",
          foodGroup: "Fruits",
        },
        {
          name: "Lemon / Lime Juice Squeeze",
          description: "Effortless citrus pairing on cooked dal",
          foodGroup: "Fruits",
        },
        {
          name: "Fresh Salad (Tomato / Capsicum)",
          description: "Crisp raw vegetable antioxidant booster",
          foodGroup: "Vegetables",
        },
        {
          name: "Guava / Oranges",
          description: "Wholesome seasonal fruit companion",
          foodGroup: "Fruits",
        },
      ],
    });
  }

  // Check Iron
  if (!detectedNutrientIds.has("nutrient.iron")) {
    underrepresentedNutrients.push({
      nutrientId: "nutrient.iron",
      nutrientName: "Iron",
      role: "Critical for haemoglobin production and systemic cellular oxygen delivery.",
      reason:
        "Consider complementing this meal with iron-dense legumes, seeds, or leafy greens.",
      suggestedFoods: [
        {
          name: "Lentils / Chickpeas (Chole / Dal)",
          description: "Hearty plant-based non-haem iron",
          foodGroup: "Pulses",
        },
        {
          name: "Spinach / Moringa Leaves",
          description: "Packed with minerals and folate",
          foodGroup: "Vegetables",
        },
        {
          name: "Pumpkin Seeds",
          description: "Crunchy zinc and iron booster",
          foodGroup: "Nuts & Seeds",
        },
      ],
    });
  }

  // Check Healthy Fats
  if (!detectedNutrientIds.has("nutrient.healthy-fats")) {
    underrepresentedNutrients.push({
      nutrientId: "nutrient.healthy-fats",
      nutrientName: "Healthy Lipids",
      role: "Essential for brain structure, hormone production, and the uptake of fat-soluble vitamins (A, D, E, K).",
      reason:
        "A hint of healthy culinary fats helps maximize nutrient bioavailability.",
      suggestedFoods: [
        {
          name: "Walnuts / Almonds",
          description: "Plant omega fats and vitamin E",
          foodGroup: "Nuts & Seeds",
        },
        {
          name: "Coconut Chutney",
          description: "Medium-chain fatty acids",
          foodGroup: "Nuts & Seeds",
        },
        {
          name: "Moderate Traditional Ghee",
          description: "Traditional culinary medium for fat-soluble vitamins",
          foodGroup: "Dairy",
        },
      ],
    });
  }

  // 5. Calculate qualitative profile category scores for chart
  const hasProtein = detectedNutrientIds.has("nutrient.protein");
  const hasFibre = detectedNutrientIds.has("nutrient.fibre");
  const hasVitamins =
    detectedNutrientIds.has("nutrient.vitamin-c") ||
    detectedNutrientIds.has("nutrient.vitamin-a") ||
    detectedNutrientIds.has("nutrient.folate");
  const hasMinerals =
    detectedNutrientIds.has("nutrient.iron") ||
    detectedNutrientIds.has("nutrient.calcium") ||
    detectedNutrientIds.has("nutrient.potassium");
  const hasFats = detectedNutrientIds.has("nutrient.healthy-fats");
  const hasCarbs = detectedNutrientIds.has("nutrient.complex-carbs");

  const getFoodsFor = (nIds: string[]) => {
    return detectedIngredients
      .filter((i) => {
        const f = VERIFIED_FOODS.find((v) => v.id === i.foodId);
        return f && nIds.some((id) => f.nutrientsProvided.includes(id));
      })
      .map((i) => i.name);
  };

  const profileScores: ProfileCategoryScore[] = [
    {
      category: "Protein",
      level: hasProtein ? "High" : "Low/Underrepresented",
      numericScore: hasProtein ? 82 : 24,
      contributingFoods: getFoodsFor(["nutrient.protein"]),
      contextNote: hasProtein
        ? "Solid amino acid contribution detected from your meal."
        : "May benefit from adding legumes, paneer, curd, or eggs.",
    },
    {
      category: "Dietary Fibre",
      level: hasFibre ? "High" : "Low/Underrepresented",
      numericScore: hasFibre ? 78 : 22,
      contributingFoods: getFoodsFor(["nutrient.fibre"]),
      contextNote: hasFibre
        ? "Abundant prebiotic and dietary roughage for microbiome health."
        : "Consider adding whole grains, leafy greens, or fruit.",
    },
    {
      category: "Key Vitamins",
      level: hasVitamins ? "High" : "Mild",
      numericScore: hasVitamins ? 85 : 42,
      contributingFoods: getFoodsFor([
        "nutrient.vitamin-c",
        "nutrient.vitamin-a",
        "nutrient.folate",
      ]),
      contextNote: hasVitamins
        ? "Rich spectrum of micronutrients and protective antioxidants."
        : "Could be boosted with fresh citrus or colorful vegetables.",
    },
    {
      category: "Essential Minerals",
      level: hasMinerals ? "Moderate" : "Low/Underrepresented",
      numericScore: hasMinerals ? 75 : 30,
      contributingFoods: getFoodsFor([
        "nutrient.iron",
        "nutrient.calcium",
        "nutrient.potassium",
      ]),
      contextNote: hasMinerals
        ? "Essential trace elements supporting cellular function."
        : "Adding curd, seeds, or spinach helps round out minerals.",
    },
    {
      category: "Healthy Fats",
      level: hasFats ? "Moderate" : "Mild",
      numericScore: hasFats ? 68 : 38,
      contributingFoods: getFoodsFor(["nutrient.healthy-fats"]),
      contextNote: hasFats
        ? "Supports cellular lipids and fat-soluble vitamin uptake."
        : "Mild lipid content; small amounts of nuts or dairy enhance absorption.",
    },
    {
      category: "Complex Energy",
      level: hasCarbs ? "High" : "Moderate",
      numericScore: hasCarbs ? 88 : 50,
      contributingFoods: getFoodsFor(["nutrient.complex-carbs"]),
      contextNote: hasCarbs
        ? "Reliable sustained carbohydrates powering daily activity."
        : "Balanced metabolic fuel for steady physical stamina.",
    },
  ];

  // 6. Match closest archetype
  let bestArchetype = MEAL_ARCHETYPES[0];
  let maxKeywordMatches = -1;

  for (const arch of MEAL_ARCHETYPES) {
    let matchCount = 0;
    for (const kw of arch.keywords) {
      if (normalizedDesc.includes(kw)) {
        matchCount++;
      }
    }
    if (matchCount > maxKeywordMatches) {
      maxKeywordMatches = matchCount;
      bestArchetype = arch;
    }
  }

  // 7. Uncertainty and context notes
  const uncertaintyNotes: string[] = [];
  const hasNumbers = /\d/.test(normalizedDesc);

  if (!hasNumbers) {
    uncertaintyNotes.push(
      "Portion quantities estimated on standard reference servings. Including counts (e.g. '2 chapatis') refines detail."
    );
  } else {
    uncertaintyNotes.push(
      "Explicit portion counts detected and mapped to reference weights."
    );
  }

  if (detectedFoodIds.size >= 3) {
    uncertaintyNotes.push(
      "Diverse culinary items identified; balanced ingredient spectrum observed."
    );
  } else {
    uncertaintyNotes.push(
      "Concise meal description provided. Additional ingredients enhance exploration precision."
    );
  }

  return {
    rawDescription: description,
    occasion,
    archetypeId: bestArchetype.id,
    mealTitle: bestArchetype.name,
    visualTheme: bestArchetype.illustrationTheme,
    detectedIngredients,
    detectedNutrients,
    underrepresentedNutrients,
    profileScores,
    uncertaintyNotes,
    identifiedCount: detectedIngredients.length,
  };
}
