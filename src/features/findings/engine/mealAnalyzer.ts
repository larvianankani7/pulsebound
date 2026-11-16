import { VERIFIED_FOODS } from "../../../content/foods/foodsData";
import { VERIFIED_NUTRIENTS } from "../../../content/nutrients/nutrientsData";
import {
  type MealAnalysisResult,
  type MealOccasion,
  type DetectedIngredient,
  type NutrientInfo,
  type UnderrepresentedNutrient,
  type ComplementaryFoodSuggestion,
  type ProfileCategoryScore,
  type OccasionEvaluation,
  type QualitativeScoreItem,
  type ContributionLevel,
} from "../types";

const CANONICAL_NUTRIENT_ORDER = [
  "nutrient.complex-carbs",
  "nutrient.protein",
  "nutrient.healthy-fats",
  "nutrient.fibre",
  "nutrient.vitamin-a",
  "nutrient.vitamin-b-complex",
  "nutrient.folate",
  "nutrient.vitamin-c",
  "nutrient.vitamin-d",
  "nutrient.vitamin-e",
  "nutrient.vitamin-k",
  "nutrient.iron",
  "nutrient.calcium",
  "nutrient.potassium",
  "nutrient.magnesium",
  "nutrient.zinc",
  "nutrient.phosphorus",
];

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Preserves the exact user-entered meal identity as title.
 * Formats user input into clean uppercase without any archetype substitution.
 */
export function formatMealTitle(rawDescription: string): string {
  const cleaned = rawDescription.trim().replace(/\s+/g, " ");
  if (!cleaned) {
    return "CUSTOM MEAL SELECTION";
  }
  return cleaned.toUpperCase();
}

interface ClaimedSpan {
  start: number;
  end: number;
}

function spansOverlap(aStart: number, aEnd: number, bStart: number, bEnd: number): boolean {
  return Math.max(aStart, bStart) < Math.min(aEnd, bEnd);
}

/**
 * Derives a representative visual theme for the visual card based on detected foods.
 */
function deriveVisualTheme(foodIds: Set<string>): string {
  if (
    foodIds.has("food.idli") ||
    foodIds.has("food.sambar") ||
    foodIds.has("food.coconut-chutney")
  ) {
    return "south-indian";
  }
  if (foodIds.has("food.oats") || foodIds.has("food.banana")) {
    return "breakfast-bowl";
  }
  if (foodIds.has("food.paneer")) {
    return "paneer-plate";
  }
  if (
    foodIds.has("food.roti") ||
    foodIds.has("food.dal") ||
    foodIds.has("food.rice")
  ) {
    return "thali";
  }
  return "wholesome-plate";
}

interface ComplementaryCandidate {
  name: string;
  illustrationId: string;
  nutrientContribution: string;
  pairingAdvice: string;
  excludeKeywords: string[];
}

interface UnderrepresentedRule {
  nutrientId: string;
  nutrientName: string;
  illustrationId: string;
  role: string;
  reason: string;
  candidates: ComplementaryCandidate[];
}

const UNDERREPRESENTED_RULES: UnderrepresentedRule[] = [
  {
    nutrientId: "nutrient.protein",
    nutrientName: "Complete Protein",
    illustrationId: "protein",
    role: "Supplies essential amino acids for muscular repair, metabolic enzyme production, and immune antibody formation.",
    reason:
      "Not clearly present in this meal description. Complementing with protein-rich foods supports tissue repair and sustained satiety.",
    candidates: [
      {
        name: "Boiled Eggs",
        illustrationId: "food.egg",
        nutrientContribution:
          "High biological value complete protein, choline, and essential amino acids",
        pairingAdvice:
          "Enjoy seasoned with cracked black pepper alongside your meal",
        excludeKeywords: ["egg", "eggs", "anda", "boiled egg", "omelette"],
      },
      {
        name: "Paneer / Cottage Cheese",
        illustrationId: "food.paneer",
        nutrientContribution:
          "Concentrated dairy protein and bioavailable calcium",
        pairingAdvice:
          "Cube lightly into stir-fries, warm curries, or fresh wraps",
        excludeKeywords: ["paneer", "cottage cheese"],
      },
      {
        name: "Sprouted Moong",
        illustrationId: "food.sprouted-moong",
        nutrientContribution:
          "Living plant-based amino acids, enzymes, and bioavailable folate",
        pairingAdvice:
          "Toss fresh with a dash of chaat masala or fold into meals",
        excludeKeywords: [
          "sprouted moong",
          "sprouts",
          "moong sprouts",
          "ankurit moong",
        ],
      },
    ],
  },
  {
    nutrientId: "nutrient.fibre",
    nutrientName: "Dietary Fibre",
    illustrationId: "fibre",
    role: "Nourishes gut microbiome flora, supports smooth digestion, and regulates glucose release.",
    reason:
      "May be underrepresented in the described ingredients. Adding whole grains, legumes, or leafy greens supports steady digestion.",
    candidates: [
      {
        name: "Leafy Greens (Palak / Methi)",
        illustrationId: "food.spinach",
        nutrientContribution:
          "Abundant plant cellular roughage, chlorophyll, and folate",
        pairingAdvice:
          "Lightly saute with aromatic spices or fold into curries",
        excludeKeywords: [
          "spinach",
          "palak",
          "saag",
          "methi",
          "greens",
          "leafy",
        ],
      },
      {
        name: "Lentils / Dal",
        illustrationId: "food.lentils",
        nutrientContribution:
          "Rich in soluble and insoluble prebiotic fibre and minerals",
        pairingAdvice:
          "Enjoy as a warm comforting bowl paired with whole grains",
        excludeKeywords: [
          "dal",
          "daal",
          "lentil",
          "lentils",
          "toor",
          "moong",
          "masoor",
          "chana dal",
        ],
      },
      {
        name: "Whole Wheat Chapatis / Oats",
        illustrationId: "food.roti",
        nutrientContribution:
          "Complex cereal bran fibre supporting steady digestive transit",
        pairingAdvice:
          "Pair alongside seasoned vegetable sabzis and legume dishes",
        excludeKeywords: [
          "roti",
          "rotis",
          "chapati",
          "chapatis",
          "phulka",
          "oats",
          "oatmeal",
          "wheat",
          "paratha",
        ],
      },
    ],
  },
  {
    nutrientId: "nutrient.calcium",
    nutrientName: "Calcium",
    illustrationId: "calcium",
    role: "Mineral foundation for bone density, nerve impulse conduction, and rhythmic muscle contraction.",
    reason:
      "Not clearly identified in the description. Including dairy, sesame, or ragi provides valuable structural minerals.",
    candidates: [
      {
        name: "Curd / Buttermilk (Chaas)",
        illustrationId: "food.curd-buttermilk",
        nutrientContribution:
          "Probiotic cultures, bioavailable dairy calcium, and phosphorus",
        pairingAdvice:
          "Serve chilled with roasted cumin alongside lunch or dinner",
        excludeKeywords: [
          "curd",
          "dahi",
          "yogurt",
          "yoghurt",
          "buttermilk",
          "chaas",
          "raita",
          "lassi",
        ],
      },
      {
        name: "Paneer / Cottage Cheese",
        illustrationId: "food.paneer",
        nutrientContribution:
          "Dense calcium matrix supporting skeletal and dental mineral density",
        pairingAdvice:
          "Incorporate grilled cubes or crumble over warm dishes",
        excludeKeywords: ["paneer", "cottage cheese"],
      },
      {
        name: "Sesame Seeds / Til",
        illustrationId: "food.peanuts-seeds",
        nutrientContribution:
          "Dense plant-based calcium, zinc, and healthy lipids",
        pairingAdvice:
          "Lightly toast and sprinkle over cooked vegetables or grain bowls",
        excludeKeywords: ["sesame", "til", "seeds"],
      },
    ],
  },
  {
    nutrientId: "nutrient.vitamin-c",
    nutrientName: "Vitamin C",
    illustrationId: "vitamin-c",
    role: "Potent antioxidant catalyzing collagen synthesis and unlocking plant iron absorption.",
    reason:
      "Could be complemented with fresh citrus or raw vegetables to support antioxidant activity and boost iron absorption.",
    candidates: [
      {
        name: "Fresh Lemon / Lime Squeeze",
        illustrationId: "food.lemon-coriander",
        nutrientContribution:
          "Abundant ascorbic acid unlocking 3x greater plant iron absorption",
        pairingAdvice:
          "Squeeze fresh over warm grains, dals, or chillas right before eating",
        excludeKeywords: [
          "lemon",
          "lime",
          "nimbu",
          "lemon juice",
          "lime juice",
          "citrus",
        ],
      },
      {
        name: "Fresh Coriander Leaves",
        illustrationId: "food.lemon-coriander",
        nutrientContribution:
          "Vibrant Vitamin C, Vitamin K, and aromatic phytonutrients",
        pairingAdvice:
          "Generously garnish freshly prepared dishes before serving",
        excludeKeywords: ["coriander", "cilantro", "dhaniya", "kothmir"],
      },
      {
        name: "Fresh Amla / Citrus Fruits",
        illustrationId: "food.fruits",
        nutrientContribution:
          "Nature's richest natural antioxidant Vitamin C reservoir",
        pairingAdvice:
          "Enjoy fresh slices or grated relish alongside breakfast",
        excludeKeywords: [
          "amla",
          "orange",
          "guava",
          "citrus",
          "fruit",
          "fruits",
        ],
      },
      {
        name: "Fresh Salad (Tomato / Capsicum)",
        illustrationId: "food.veggies-medley",
        nutrientContribution:
          "Crisp raw vegetable antioxidant booster rich in Vitamin C",
        pairingAdvice:
          "Enjoy raw alongside hot cooked meals for enzymatic vitality",
        excludeKeywords: [
          "salad",
          "tomato",
          "tomatoes",
          "capsicum",
          "bell pepper",
          "cucumber",
        ],
      },
    ],
  },
  {
    nutrientId: "nutrient.healthy-fats",
    nutrientName: "Healthy Fats",
    illustrationId: "healthy-fats",
    role: "Essential structural lipids enabling hormone synthesis and fat-soluble vitamin uptake.",
    reason:
      "May be less represented in the listed items. A touch of healthy seeds, nuts, or traditional fats supports fat-soluble nutrient uptake.",
    candidates: [
      {
        name: "Roasted Peanuts",
        illustrationId: "food.peanuts-seeds",
        nutrientContribution:
          "Cardio-protective monounsaturated lipids, Vitamin E, and magnesium",
        pairingAdvice:
          "Toss into warm grain dishes or enjoy as a crunchy garnish",
        excludeKeywords: [
          "peanut",
          "peanuts",
          "groundnut",
          "groundnuts",
          "singdana",
          "mungfali",
        ],
      },
      {
        name: "Almonds & Pumpkin Seeds",
        illustrationId: "food.peanuts-seeds",
        nutrientContribution:
          "Essential omega fatty acids, zinc, and lipid-soluble antioxidants",
        pairingAdvice:
          "Sprinkle raw or toasted seeds across morning meals",
        excludeKeywords: [
          "almond",
          "almonds",
          "pumpkin seeds",
          "seeds",
          "nuts",
          "walnut",
        ],
      },
      {
        name: "Coconut Chutney",
        illustrationId: "food.coconut-chutney",
        nutrientContribution:
          "Medium-chain fatty acids aiding fat-soluble vitamin uptake",
        pairingAdvice:
          "Serve fresh alongside steamed grain cakes, dosas, or bowls",
        excludeKeywords: [
          "coconut",
          "coconut chutney",
          "nariyal chutney",
        ],
      },
    ],
  },
  {
    nutrientId: "nutrient.iron",
    nutrientName: "Iron",
    illustrationId: "iron",
    role: "Core element of haemoglobin, ferrying oxygen to brain cells and working muscles.",
    reason:
      "Not prominent in the identified ingredients. Legumes, greens, or seeds can help round out oxygen-transporting mineral intake.",
    candidates: [
      {
        name: "Lentils / Dal",
        illustrationId: "food.lentils",
        nutrientContribution:
          "Non-haem plant iron, folate, and sustained amino acids",
        pairingAdvice:
          "Combine with a squeeze of fresh lemon to optimize iron bioavailability",
        excludeKeywords: [
          "dal",
          "daal",
          "lentil",
          "lentils",
          "toor",
          "moong",
          "masoor",
          "chana",
        ],
      },
      {
        name: "Spinach / Leafy Greens",
        illustrationId: "food.spinach",
        nutrientContribution:
          "Rich in chlorophyll-bound plant iron, carotenoids, and magnesium",
        pairingAdvice:
          "Lightly saute with garlic and pair with citrus-rich sides",
        excludeKeywords: [
          "spinach",
          "palak",
          "saag",
          "methi",
          "greens",
          "leafy",
        ],
      },
      {
        name: "Pumpkin Seeds",
        illustrationId: "food.peanuts-seeds",
        nutrientContribution: "Mineral-rich zinc and non-haem iron booster",
        pairingAdvice:
          "Sprinkle toasted seeds over breakfast porridge or salads",
        excludeKeywords: ["pumpkin seeds", "pepitas", "seeds"],
      },
    ],
  },
  {
    nutrientId: "nutrient.vitamin-a",
    nutrientName: "Vitamin A & Beta-Carotene",
    illustrationId: "vitamin-a",
    role: "Essential for low-light night vision, cellular differentiation, and immune barriers.",
    reason:
      "Not clearly observed in the description. Colorful orange and dark green vegetables contribute valuable beta-carotene.",
    candidates: [
      {
        name: "Carrots & Mixed Veggies",
        illustrationId: "food.veggies-medley",
        nutrientContribution:
          "Rich provitamin A beta-carotene supporting vision and skin barriers",
        pairingAdvice:
          "Grate fresh into salads or lightly steam with culinary spices",
        excludeKeywords: [
          "carrot",
          "carrots",
          "gajar",
          "vegetables",
          "veggies",
          "peas",
        ],
      },
      {
        name: "Spinach / Leafy Greens",
        illustrationId: "food.spinach",
        nutrientContribution:
          "Lutein, zeaxanthin, and carotenoids shielding retinal tissue",
        pairingAdvice: "Incorporate into curries, sabzis, or warm dals",
        excludeKeywords: [
          "spinach",
          "palak",
          "saag",
          "methi",
          "greens",
        ],
      },
      {
        name: "Bell Peppers / Capsicum",
        illustrationId: "food.veggies-medley",
        nutrientContribution:
          "Carotenoid antioxidants and cellular immune protectors",
        pairingAdvice:
          "Stir-fry lightly to preserve crunchy texture and provitamins",
        excludeKeywords: ["capsicum", "bell pepper", "shimla mirch"],
      },
    ],
  },
];

/**
 * Builds the qualitative occasion evaluation for Breakfast, Lunch, or Dinner.
 * Non-judgmental: ingredients and nutrients do not change; only contextual interpretation changes.
 */
export function evaluateOccasionSuitability(
  occasion: MealOccasion,
  detectedIngredients: DetectedIngredient[],
  _detectedNutrientIds: Set<string>,
  underrepresentedNutrients: UnderrepresentedNutrient[]
): OccasionEvaluation {
  const isUnknown = detectedIngredients.length === 0;

  const getFoodsForNutrients = (nIds: string[]): string[] => {
    return detectedIngredients
      .filter((i) => {
        const f = VERIFIED_FOODS.find((v) => v.id === i.foodId);
        return f && nIds.some((id) => f.nutrientsProvided.includes(id));
      })
      .map((i) => i.name);
  };

  const proteinFoods = getFoodsForNutrients(["nutrient.protein"]);
  const fibreFoods = getFoodsForNutrients(["nutrient.fibre"]);
  const vitaminFoods = getFoodsForNutrients([
    "nutrient.vitamin-c",
    "nutrient.vitamin-a",
    "nutrient.folate",
    "nutrient.vitamin-b-complex",
  ]);
  const mineralFoods = getFoodsForNutrients([
    "nutrient.iron",
    "nutrient.calcium",
    "nutrient.potassium",
    "nutrient.magnesium",
    "nutrient.zinc",
    "nutrient.phosphorus",
  ]);
  const fatFoods = getFoodsForNutrients(["nutrient.healthy-fats"]);
  const carbFoods = getFoodsForNutrients(["nutrient.complex-carbs"]);

  const hasDedicatedProtein = detectedIngredients.some((i) =>
    [
      "food.egg",
      "food.paneer",
      "food.moong-dal-chilla",
      "food.dal",
      "food.sprouted-moong",
      "food.beans",
    ].includes(i.foodId)
  );

  const determineLevel = (
    foods: string[],
    isDedicated = false
  ): "Less represented" | "Moderately represented" | "Well represented" => {
    if (isUnknown || foods.length === 0) return "Less represented";
    if (foods.length >= 2 || isDedicated) return "Well represented";
    return "Moderately represented";
  };

  const qualitativeScores: QualitativeScoreItem[] = [
    {
      category: "Protein",
      qualitativeLevel: determineLevel(proteinFoods, hasDedicatedProtein),
      contributingFoods: proteinFoods,
      contextNote:
        proteinFoods.length > 0
          ? "Contributes amino acids for muscle maintenance, cellular renewal, and satiety."
          : "Not clearly identified in this meal; adding eggs, dairy, or legumes provides amino acids.",
    },
    {
      category: "Dietary Fibre",
      qualitativeLevel: determineLevel(fibreFoods),
      contributingFoods: fibreFoods,
      contextNote:
        fibreFoods.length > 0
          ? "Supports steady digestive rhythm and fosters a diverse gut microbiome."
          : "May be underrepresented; incorporating whole grains, leafy greens, or fruit adds dietary roughage.",
    },
    {
      category: "Key Vitamins",
      qualitativeLevel: determineLevel(vitaminFoods),
      contributingFoods: vitaminFoods,
      contextNote:
        vitaminFoods.length > 0
          ? "Delivers cellular micronutrients, antioxidants, and metabolic cofactors."
          : "Could be complemented with fresh citrus, raw vegetables, or herbs for antioxidant diversity.",
    },
    {
      category: "Essential Minerals",
      qualitativeLevel: determineLevel(mineralFoods),
      contributingFoods: mineralFoods,
      contextNote:
        mineralFoods.length > 0
          ? "Trace elements supporting oxygen delivery, fluid balance, and bone health."
          : "Not clearly identified; adding lentils, curd, or seeds rounds out mineral intake.",
    },
    {
      category: "Healthy Fats",
      qualitativeLevel: determineLevel(fatFoods),
      contributingFoods: fatFoods,
      contextNote:
        fatFoods.length > 0
          ? "Supports cell membrane integrity and the uptake of fat-soluble vitamins."
          : "Less represented; a light sprinkle of seeds or touch of dairy aids nutrient absorption.",
    },
    {
      category: "Complex Energy",
      qualitativeLevel: determineLevel(carbFoods),
      contributingFoods: carbFoods,
      contextNote:
        carbFoods.length > 0
          ? "Sustained carbohydrate polysaccharides powering steady daily stamina."
          : "Not clearly identified in the recognized ingredients.",
    },
  ];

  if (isUnknown) {
    return {
      occasion,
      summary:
        "Ingredient details were not clearly identified from the description. Describing specific components (such as grains, vegetables, lentils, or dairy) allows an accurate qualitative evaluation.",
      graphReasoning:
        "Without recognized whole-food ingredients, a qualitative profile curve cannot be reliably generated. We avoid fabricating artificial estimates when information is unavailable.",
      balanceTips: [
        "Try describing the meal with individual ingredients, for example: 'Poha with peanuts', 'Roti and dal', or 'Rice with vegetables'.",
      ],
      qualitativeScores,
    };
  }

  // Build occasion-specific summaries, graph reasoning, and balance tips
  let summary = "";
  let graphReasoning = "";
  const balanceTips: string[] = [];

  const missingNames = underrepresentedNutrients.map((u) => u.nutrientName);

  if (occasion === "breakfast") {
    summary =
      "In a morning breakfast context, this meal provides an early metabolic foundation to power cognitive alertness and physical vitality.";

    if (carbFoods.length > 0 && proteinFoods.length === 0) {
      graphReasoning =
        "This profile highlights a strong complex energy foundation from grain or cereal staples. In the morning, pairing this with a protein source (such as curd, boiled eggs, or sprouted moong) helps prolong morning focus and prevent a mid-morning dip.";
    } else if (proteinFoods.length > 0 && carbFoods.length > 0) {
      graphReasoning =
        "The qualitative profile demonstrates an expansive, well-rounded morning distribution with both sustained complex carbohydrates and amino acids supporting enduring stamina.";
    } else {
      graphReasoning =
        "The qualitative graph reflects the identified ingredients in your morning plate. Breakfasts balanced with fibre, complex energy, and protein support sustained morning attention.";
    }

    if (missingNames.includes("Complete Protein")) {
      balanceTips.push(
        "Pair with a cup of curd, a boiled egg, or a handful of sprouted moong for prolonged morning focus."
      );
    }
    if (missingNames.includes("Vitamin C")) {
      balanceTips.push(
        "A fresh squeeze of lemon or a side of seasonal fruit delivers refreshing Vitamin C and enhances iron uptake."
      );
    }
    if (missingNames.includes("Healthy Fats")) {
      balanceTips.push(
        "A sprinkle of roasted peanuts, almonds, or pumpkin seeds adds nourishing morning lipids."
      );
    }
    if (missingNames.includes("Calcium")) {
      balanceTips.push(
        "A glass of buttermilk or a serving of curd provides bioavailable calcium for the day."
      );
    }
    if (balanceTips.length === 0) {
      balanceTips.push(
        "This breakfast features broad whole-food coverage. Staying hydrated with water or chaas rounds out your morning."
      );
    }
  } else if (occasion === "lunch") {
    summary =
      "As a midday meal, this profile supports sustained afternoon stamina, steady blood sugar regulation, and productive focus without heavy lethargy.";

    if (fibreFoods.length > 0 && carbFoods.length > 0) {
      graphReasoning =
        "The midday profile reflects balanced dietary fibre and complex carbohydrates, which support an even post-prandial glycemic response through the afternoon hours.";
    } else {
      graphReasoning =
        "The graph shows your meal's midday nutritional distribution. Combining complex carbohydrates with plant fibre and minerals helps maintain alertness through the second half of the day.";
    }

    if (missingNames.includes("Dietary Fibre") || missingNames.includes("Vitamin A & Beta-Carotene")) {
      balanceTips.push(
        "Complement with a crisp cucumber-tomato kachumber salad or steamed greens for digestive enzymes and micronutrients."
      );
    }
    if (missingNames.includes("Complete Protein") || missingNames.includes("Calcium")) {
      balanceTips.push(
        "A bowl of homemade curd, a glass of spiced chaas, or paneer cubes adds probiotic calcium and amino acids."
      );
    }
    if (missingNames.includes("Iron")) {
      balanceTips.push(
        "Adding a bowl of warm dal or a sprinkle of pumpkin seeds enhances trace mineral density."
      );
    }
    if (balanceTips.length === 0) {
      balanceTips.push(
        "A balanced, harmonious midday combination supporting productive afternoon vitality."
      );
    }
  } else {
    // dinner
    summary =
      "In an evening dinner context, this meal offers nourishing replenishment that supports nocturnal recovery while remaining gentle on digestion.";

    if (fatFoods.length === 0 || fatFoods.length === 1) {
      graphReasoning =
        "The evening curve reflects moderate culinary lipids and accessible carbohydrates, which are well-suited for easy digestion prior to sleep.";
    } else {
      graphReasoning =
        "The profile demonstrates restorative evening nutrients. Balancing plant proteins, leafy roughage, and moderate complex energy supports restful sleep and cellular renewal.";
    }

    if (missingNames.includes("Complete Protein")) {
      balanceTips.push(
        "Incorporate light, easily digestible proteins such as warm moong dal or fresh paneer."
      );
    }
    if (missingNames.includes("Dietary Fibre")) {
      balanceTips.push(
        "Add lightly sauteed seasonal vegetables or a warm vegetable soup for soothing night-time digestion."
      );
    }
    if (missingNames.includes("Calcium")) {
      balanceTips.push(
        "A serving of curd or warm spiced milk before bed provides soothing calcium and magnesium to support restful sleep."
      );
    }
    if (balanceTips.length === 0) {
      balanceTips.push(
        "An optimal evening balance that nourishes cellular repair without straining nighttime digestion."
      );
    }
  }

  return {
    occasion,
    summary,
    graphReasoning,
    balanceTips,
    qualitativeScores,
  };
}

/**
 * Main deterministic meal analyzer function.
 * Preserves user meal title, performs multi-ingredient matching, maps verified nutrients,
 * adaptively filters missing food suggestions, and generates qualitative occasion evaluations.
 */
export function analyzeMeal(
  description: string,
  occasion: MealOccasion = "lunch"
): MealAnalysisResult {
  const normalizedDesc = description.toLowerCase().trim();
  const mealTitle = formatMealTitle(description);

  // 1. Multi-ingredient detection using longest-alias matching with non-overlapping spans
  interface AliasEntry {
    alias: string;
    food: (typeof VERIFIED_FOODS)[number];
  }

  const allAliases: AliasEntry[] = [];
  for (const food of VERIFIED_FOODS) {
    for (const alias of food.aliases) {
      allAliases.push({ alias, food });
    }
  }

  // Sort by alias length descending so longer phrases match first
  allAliases.sort((a, b) => b.alias.length - a.alias.length);

  const claimedSpans: ClaimedSpan[] = [];
  const detectedIngredients: DetectedIngredient[] = [];
  const detectedFoodIds = new Set<string>();

  for (const { alias, food } of allAliases) {
    const regex = new RegExp(`\\b${escapeRegExp(alias)}\\b`, "gi");
    let match: RegExpExecArray | null;

    while ((match = regex.exec(normalizedDesc)) !== null) {
      const matchStart = match.index;
      const matchEnd = match.index + match[0].length;

      const overlaps = claimedSpans.some((span) =>
        spansOverlap(matchStart, matchEnd, span.start, span.end)
      );

      if (!overlaps) {
        claimedSpans.push({ start: matchStart, end: matchEnd });

        if (!detectedFoodIds.has(food.id)) {
          detectedFoodIds.add(food.id);
          detectedIngredients.push({
            foodId: food.id,
            name: food.name,
            foodGroup: food.foodGroup,
          });
        }
      }
    }
  }

  const isUnknownMeal = detectedIngredients.length === 0;

  // 2. Aggregate verified nutrients
  const detectedNutrientIds = new Set<string>();
  for (const item of detectedIngredients) {
    const foodDef = VERIFIED_FOODS.find((f) => f.id === item.foodId);
    if (foodDef) {
      for (const nId of foodDef.nutrientsProvided) {
        detectedNutrientIds.add(nId);
      }
    }
  }

  // CRITICAL REQUIREMENT: Carbohydrates must be included whenever grain/flour/starch ingredients are present
  const hasGrainOrStarch =
    detectedIngredients.some((i) => {
      const f = VERIFIED_FOODS.find((v) => v.id === i.foodId);
      return (
        f?.foodGroup === "grains" ||
        [
          "food.poha",
          "food.moong-dal-chilla",
          "food.roti",
          "food.rice",
          "food.oats",
          "food.idli",
        ].includes(i.foodId)
      );
    }) ||
    /\b(?:poha|pohe|chilla|cheela|roti|rotis|chapati|chapatis|phulka|paratha|rice|chawal|oats|oatmeal|idli|idlis|dosa|uttapam|bread|grain|grains|flour|starch)\b/i.test(
      normalizedDesc
    );

  if (hasGrainOrStarch) {
    detectedNutrientIds.add("nutrient.complex-carbs");
  }

  // Sort detected nutrients systematically according to canonical order
  const detectedNutrients: NutrientInfo[] = isUnknownMeal
    ? []
    : Array.from(detectedNutrientIds)
        .map((id) => VERIFIED_NUTRIENTS[id])
        .filter(Boolean)
        .sort((a, b) => {
          const idxA = CANONICAL_NUTRIENT_ORDER.indexOf(a.id);
          const idxB = CANONICAL_NUTRIENT_ORDER.indexOf(b.id);
          return (idxA >= 0 ? idxA : 999) - (idxB >= 0 ? idxB : 999);
        });

  // 3. Adaptive underrepresented nutrients & complementary food recommendations
  const underrepresentedNutrients: UnderrepresentedNutrient[] = [];

  if (!isUnknownMeal) {
    for (const rule of UNDERREPRESENTED_RULES) {
      if (!detectedNutrientIds.has(rule.nutrientId)) {
        // ADAPTIVE FILTERING: Exclude any foods the user has already included
        const filteredCandidates: ComplementaryFoodSuggestion[] = rule.candidates
          .filter((candidate) => {
            const mentionedInInput = candidate.excludeKeywords.some((kw) =>
              new RegExp(`\\b${escapeRegExp(kw)}\\b`, "i").test(normalizedDesc)
            );
            const mentionedInDetected = candidate.excludeKeywords.some((kw) =>
              detectedIngredients.some((item) =>
                item.name.toLowerCase().includes(kw)
              )
            );
            return !mentionedInInput && !mentionedInDetected;
          })
          .map((candidate) => ({
            name: candidate.name,
            foodName: candidate.name,
            illustrationId: candidate.illustrationId,
            nutrientContribution: candidate.nutrientContribution,
            pairingAdvice: candidate.pairingAdvice,
          }));

        if (filteredCandidates.length > 0) {
          underrepresentedNutrients.push({
            nutrientId: rule.nutrientId,
            nutrientName: rule.nutrientName,
            illustrationId: rule.illustrationId,
            role: rule.role,
            reason: rule.reason,
            suggestedFoods: filteredCandidates,
          });
        }
      }
    }
  }

  // 4. Occasion Contextual Evaluation
  const occasionSuitability = evaluateOccasionSuitability(
    occasion,
    detectedIngredients,
    detectedNutrientIds,
    underrepresentedNutrients
  );

  // 5. Qualitative Profile Scores for chart positioning
  const levelToNumeric = (
    lvl: "Less represented" | "Moderately represented" | "Well represented"
  ): { level: ContributionLevel; numericScore: number } => {
    switch (lvl) {
      case "Well represented":
        return { level: "High", numericScore: 82 };
      case "Moderately represented":
        return { level: "Moderate", numericScore: 56 };
      case "Less represented":
      default:
        return { level: "Low/Underrepresented", numericScore: 24 };
    }
  };

  const profileScores: ProfileCategoryScore[] = occasionSuitability.qualitativeScores.map(
    (score) => {
      const { level, numericScore } = levelToNumeric(score.qualitativeLevel);
      return {
        category: score.category as ProfileCategoryScore["category"],
        level,
        numericScore,
        contributingFoods: score.contributingFoods,
        contextNote: score.contextNote,
      };
    }
  );

  // 6. Uncertainty and context notes
  const uncertaintyNotes: string[] = [];
  if (isUnknownMeal) {
    uncertaintyNotes.push(
      "Specific ingredients could not be recognized from the provided description. Consider describing the individual whole foods (e.g. grains, lentils, vegetables) for a detailed nutritional observation."
    );
  } else {
    uncertaintyNotes.push(
      "Qualitative nutritional observation based on recognized whole-food ingredients."
    );
    if (detectedFoodIds.size >= 3) {
      uncertaintyNotes.push(
        "Diverse whole-food culinary items identified; balanced ingredient spectrum observed."
      );
    } else {
      uncertaintyNotes.push(
        "Concise meal description provided. Additional ingredients enhance exploration precision."
      );
    }
  }

  const visualTheme = deriveVisualTheme(detectedFoodIds);

  return {
    rawDescription: description,
    occasion,
    archetypeId: "custom-meal",
    mealTitle,
    visualTheme,
    detectedIngredients,
    detectedNutrients,
    underrepresentedNutrients,
    profileScores,
    uncertaintyNotes,
    identifiedCount: detectedIngredients.length,
    occasionSuitability,
    occasionEvaluation: occasionSuitability,
    isUnknownMeal,
  };
}