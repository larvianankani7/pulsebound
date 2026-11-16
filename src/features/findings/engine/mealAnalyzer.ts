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

    for (const alias of food.aliases) {
      // Word boundary match
      const regex = new RegExp(`\\b${alias}\\b`, "i");
      if (regex.test(normalizedDesc)) {
        matched = true;
        break;
      }
    }

    if (matched) {
      detectedFoodIds.add(food.id);

      detectedIngredients.push({
        foodId: food.id,
        name: food.name,
        foodGroup: food.foodGroup,
      });
    }
  }

  // 2. Fallback if no specific food recognized
  if (detectedIngredients.length === 0) {
    detectedIngredients.push({
      foodId: "food.general",
      name: "Custom Meal Selection",
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
      illustrationId: "fibre",
      role: "Supports steady digestive rhythm, fosters beneficial microbiome flora, and moderates glucose absorption.",
      reason:
        "Your described meal appears to have limited whole-grain, legume, or vegetable fibre sources.",
      suggestedFoods: [
        {
          name: "Lentils / Dal",
          foodName: "Lentils / Dal",
          illustrationId: "dal",
          nutrientContribution: "Rich in soluble & insoluble fibre, plant protein, and folate",
          pairingAdvice: "Enjoy as a warm bowl with whole grains or steamed rice",
          description: "Rich in soluble & insoluble fibre",
          foodGroup: "Pulses",
        },
        {
          name: "Leafy Greens (Palak / Methi)",
          foodName: "Leafy Greens (Palak / Methi)",
          illustrationId: "spinach",
          nutrientContribution: "Provides cellular cellulose, iron, and protective carotenoids",
          pairingAdvice: "Lightly saute with spices or fold into curries",
          description: "Provides cellular cellulose and vital micronutrients",
          foodGroup: "Vegetables",
        },
        {
          name: "Whole Wheat Chapatis / Oats",
          foodName: "Whole Wheat Chapatis / Oats",
          illustrationId: "roti",
          nutrientContribution: "Complex cereal bran fibre and sustained stamina",
          pairingAdvice: "Pairs seamlessly with vegetable sabzis and dals",
          description: "Offers complex cereal bran fibre",
          foodGroup: "Grains",
        },
        {
          name: "Fresh Fruits (Guava / Apples)",
          foodName: "Fresh Fruits (Guava / Apples)",
          illustrationId: "fruits",
          nutrientContribution: "High in pectin, prebiotic fibre, and Vitamin C",
          pairingAdvice: "Savor fresh between meals or alongside breakfast",
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
      illustrationId: "calcium",
      role: "Provides foundational structural density for teeth and bones, and governs neuro-muscular signaling.",
      reason:
        "If dairy or fortified alternatives are absent, this meal may contribute less bioavailable calcium.",
      suggestedFoods: [
        {
          name: "Curd / Raita",
          foodName: "Curd / Raita",
          illustrationId: "curd",
          nutrientContribution: "Probiotic cultures, bioavailable calcium, and protein",
          pairingAdvice: "Serve chilled with a pinch of roasted cumin alongside lunch",
          description: "Probiotic and calcium-dense",
          foodGroup: "Dairy",
        },
        {
          name: "Paneer",
          foodName: "Paneer",
          illustrationId: "paneer",
          nutrientContribution: "Concentrated dairy calcium, complete protein, and phosphorus",
          pairingAdvice: "Cube into stir-fries or grill lightly with spices",
          description: "Concentrated dairy calcium and amino acids",
          foodGroup: "Dairy",
        },
        {
          name: "Ragi (Finger Millet)",
          foodName: "Ragi (Finger Millet)",
          illustrationId: "grains",
          nutrientContribution: "Exceptionally high plant-based calcium and complex carbs",
          pairingAdvice: "Prepare as warm porridge or wholesome ragi dosas",
          description: "Exceptionally high plant-based calcium grain",
          foodGroup: "Grains",
        },
        {
          name: "Sesame Seeds / Til",
          foodName: "Sesame Seeds / Til",
          illustrationId: "seeds",
          nutrientContribution: "Dense mineral-rich seed sprinkle high in calcium and zinc",
          pairingAdvice: "Toast and sprinkle over cooked vegetables or salads",
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
      illustrationId: "vitamin-c",
      role: "Aids collagen biosynthesis, delivers antioxidant defense, and enhances the absorption of non-haem plant iron.",
      reason:
        "A fresh raw fruit or lightly cooked vegetable could provide a valuable Vitamin C boost.",
      suggestedFoods: [
        {
          name: "Fresh Amla (Indian Gooseberry)",
          foodName: "Fresh Amla (Indian Gooseberry)",
          illustrationId: "lemon",
          nutrientContribution: "One of nature's richest natural Vitamin C sources",
          pairingAdvice: "Grate fresh into salads, juices, or chutneys",
          description: "One of nature's richest Vitamin C sources",
          foodGroup: "Fruits",
        },
        {
          name: "Lemon / Lime Juice Squeeze",
          foodName: "Lemon / Lime Juice Squeeze",
          illustrationId: "lemon",
          nutrientContribution: "Abundant ascorbic acid unlocking plant iron absorption",
          pairingAdvice: "Squeeze fresh over warm dals, poha, or chilla right before eating",
          description: "Effortless citrus pairing on cooked dal",
          foodGroup: "Fruits",
        },
        {
          name: "Fresh Salad (Tomato / Capsicum)",
          foodName: "Fresh Salad (Tomato / Capsicum)",
          illustrationId: "vegetables",
          nutrientContribution: "Crisp raw vegetable antioxidant booster rich in Vitamin C",
          pairingAdvice: "Enjoy raw alongside hot cooked meals for enzymatic vitality",
          description: "Crisp raw vegetable antioxidant booster",
          foodGroup: "Vegetables",
        },
        {
          name: "Guava / Oranges",
          foodName: "Guava / Oranges",
          illustrationId: "fruits",
          nutrientContribution: "Wholesome seasonal fruit companion delivering antioxidants",
          pairingAdvice: "Enjoy as a mid-morning refresher",
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
      illustrationId: "iron",
      role: "Critical for haemoglobin production and systemic cellular oxygen delivery.",
      reason:
        "Consider complementing this meal with iron-dense legumes, seeds, or leafy greens.",
      suggestedFoods: [
        {
          name: "Lentils / Chickpeas (Chole / Dal)",
          foodName: "Lentils / Chickpeas (Chole / Dal)",
          illustrationId: "dal",
          nutrientContribution: "Hearty plant-based non-haem iron, folate, and protein",
          pairingAdvice: "Combine with a squeeze of fresh lemon for enhanced iron uptake",
          description: "Hearty plant-based non-haem iron",
          foodGroup: "Pulses",
        },
        {
          name: "Spinach / Moringa Leaves",
          foodName: "Spinach / Moringa Leaves",
          illustrationId: "spinach",
          nutrientContribution: "Packed with minerals, chlorophyll, and folate",
          pairingAdvice: "Lightly cook with garlic and pair with vitamin C-rich foods",
          description: "Packed with minerals and folate",
          foodGroup: "Vegetables",
        },
        {
          name: "Pumpkin Seeds",
          foodName: "Pumpkin Seeds",
          illustrationId: "pumpkin-seeds",
          nutrientContribution: "Crunchy zinc, magnesium, and non-haem iron booster",
          pairingAdvice: "Sprinkle raw or toasted over breakfast or salads",
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
      illustrationId: "healthy-fats",
      role: "Essential for brain structure, hormone production, and the uptake of fat-soluble vitamins (A, D, E, K).",
      reason:
        "A hint of healthy culinary fats helps maximize nutrient bioavailability.",
      suggestedFoods: [
        {
          name: "Walnuts / Almonds",
          foodName: "Walnuts / Almonds",
          illustrationId: "almonds",
          nutrientContribution: "Plant omega fatty acids, Vitamin E, and magnesium",
          pairingAdvice: "Enjoy a soaked handful with morning breakfast",
          description: "Plant omega fats and vitamin E",
          foodGroup: "Nuts & Seeds",
        },
        {
          name: "Coconut Chutney",
          foodName: "Coconut Chutney",
          illustrationId: "coconut-chutney",
          nutrientContribution: "Medium-chain fatty acids supporting fat-soluble vitamin uptake",
          pairingAdvice: "Pair with steamed idlis, dosas, or grain bowls",
          description: "Medium-chain fatty acids",
          foodGroup: "Nuts & Seeds",
        },
        {
          name: "Moderate Traditional Ghee",
          foodName: "Moderate Traditional Ghee",
          illustrationId: "ghee",
          nutrientContribution: "Traditional culinary medium for fat-soluble vitamins",
          pairingAdvice: "Add a light touch to hot khichdi, dal, or warm rotis",
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
  uncertaintyNotes.push(
    "Qualitative nutritional observation based on recognized whole-food ingredients."
  );

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
