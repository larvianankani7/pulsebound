import { describe, it, expect } from "vitest";
import { VERIFIED_NUTRIENTS } from "../../../content/nutrients/nutrientsData";
import { VERIFIED_FOODS } from "../../../content/foods/foodsData";
import { analyzeMeal } from "./mealAnalyzer";
import {
  type ComplementaryFoodSuggestion,
  type UnderrepresentedNutrient,
  type OccasionEvaluation,
} from "../types";

describe("Task 1: Food & Nutrient Content Catalog", () => {
  describe("Nutrients Data Catalog (VERIFIED_NUTRIENTS)", () => {
    const requiredNutrientIds = [
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

    it("contains all 17 required nutrients", () => {
      for (const id of requiredNutrientIds) {
        expect(VERIFIED_NUTRIENTS[id], `Missing nutrient: ${id}`).toBeDefined();
        expect(VERIFIED_NUTRIENTS[id].id).toBe(id);
      }
    });

    it("ensures Complex Carbohydrates is never omitted", () => {
      const carbs = VERIFIED_NUTRIENTS["nutrient.complex-carbs"];
      expect(carbs).toBeDefined();
      expect(carbs.name).toMatch(/Carbohydrate/i);
      expect(carbs.category).toBe("macronutrient");
      expect(carbs.illustrationId).toBe("carbohydrates");
    });

    it("verifies rich educational metadata on every nutrient", () => {
      for (const [id, nutrient] of Object.entries(VERIFIED_NUTRIENTS)) {
        // String properties
        expect(nutrient.id, `${id} id missing`).toBe(id);
        expect(nutrient.name, `${id} name missing`).toBeTruthy();
        expect(
          [
            "macronutrient",
            "vitamin",
            "mineral",
            "other",
            "phytonutrient",
            "hydration",
          ],
          `${id} category invalid`
        ).toContain(nutrient.category);
        expect(nutrient.shortRole, `${id} shortRole missing`).toBeTruthy();
        expect(
          nutrient.introduction,
          `${id} introduction missing`
        ).toBeTruthy();
        expect(
          nutrient.illustrationId,
          `${id} illustrationId missing`
        ).toBeTruthy();

        // Array properties
        expect(
          Array.isArray(nutrient.biologicalRoles),
          `${id} biologicalRoles should be array`
        ).toBe(true);
        expect(
          nutrient.biologicalRoles.length,
          `${id} biologicalRoles should have at least 2 entries`
        ).toBeGreaterThanOrEqual(2);

        expect(
          Array.isArray(nutrient.generalBenefits),
          `${id} generalBenefits should be array`
        ).toBe(true);
        expect(
          nutrient.generalBenefits.length,
          `${id} generalBenefits should have at least 2 entries`
        ).toBeGreaterThanOrEqual(2);

        expect(
          Array.isArray(nutrient.foodSources),
          `${id} foodSources should be array`
        ).toBe(true);
        expect(
          nutrient.foodSources.length,
          `${id} foodSources should have at least 2 entries`
        ).toBeGreaterThanOrEqual(2);

        expect(
          Array.isArray(nutrient.mealExamples),
          `${id} mealExamples should be array`
        ).toBe(true);
        expect(
          nutrient.mealExamples.length,
          `${id} mealExamples should have at least 2 entries`
        ).toBeGreaterThanOrEqual(2);

        // Dietary synergies and facts
        expect(
          nutrient.relatedInteraction,
          `${id} relatedInteraction missing`
        ).toBeTruthy();
        expect(
          nutrient.educationalFact,
          `${id} educationalFact missing`
        ).toBeTruthy();
      }
    });

    it("includes specific nutrient synergy relationships", () => {
      const vitC = VERIFIED_NUTRIENTS["nutrient.vitamin-c"];
      expect(vitC.relatedInteraction).toMatch(/iron/i);

      const vitD = VERIFIED_NUTRIENTS["nutrient.vitamin-d"];
      expect(vitD.relatedInteraction).toMatch(/calcium|magnesium/i);

      const vitK = VERIFIED_NUTRIENTS["nutrient.vitamin-k"];
      expect(vitK.relatedInteraction).toMatch(/calcium|bone|arter/i);
    });
  });

  describe("Foods Data Catalog (VERIFIED_FOODS)", () => {
    it("contains all required staple Indian and global foods", () => {
      const expectedFoodAliases = [
        "poha",
        "moong dal chilla",
        "peanuts",
        "green peas",
        "lemon",
        "coriander",
        "sprouted moong",
        "pumpkin seeds",
        "almonds",
        "boiled egg",
        "paneer",
        "curd",
        "roti",
        "dal",
        "rice",
        "spinach",
        "idli",
        "sambar",
        "coconut chutney",
        "oats",
        "banana",
        "milk",
        "carrot",
        "tomato",
        "capsicum",
      ];

      for (const expectedAlias of expectedFoodAliases) {
        const found = VERIFIED_FOODS.find((f) =>
          f.aliases.some((alias) =>
            alias.toLowerCase().includes(expectedAlias.toLowerCase())
          )
        );
        expect(
          found,
          `Food matching alias '${expectedAlias}' not found in VERIFIED_FOODS`
        ).toBeDefined();
      }
    });

    it("verifies every food points only to valid nutrient IDs in VERIFIED_NUTRIENTS", () => {
      for (const food of VERIFIED_FOODS) {
        expect(food.nutrientsProvided.length).toBeGreaterThan(0);
        for (const nId of food.nutrientsProvided) {
          expect(
            VERIFIED_NUTRIENTS[nId],
            `Food '${food.name}' references non-existent nutrient: '${nId}'`
          ).toBeDefined();
        }
      }
    });

    it("strictly omits all portion-related quantities or gram weights from food definitions", () => {
      for (const food of VERIFIED_FOODS) {
        // defaultPortionDesc should not exist or be undefined
        expect(
          (food as unknown as Record<string, unknown>).defaultPortionDesc
        ).toBeUndefined();
      }
    });

    it("verifies accurate nutrient mapping for key Indian staples", () => {
      // Poha -> complex carbs, iron, fibre
      const poha = VERIFIED_FOODS.find((f) => f.aliases.includes("poha"));
      expect(poha).toBeDefined();
      expect(poha!.nutrientsProvided).toContain("nutrient.complex-carbs");
      expect(poha!.nutrientsProvided).toContain("nutrient.iron");
      expect(poha!.nutrientsProvided).toContain("nutrient.fibre");

      // Moong dal chilla -> protein, complex carbs, fibre, iron, folate
      const chilla = VERIFIED_FOODS.find((f) =>
        f.aliases.includes("moong dal chilla")
      );
      expect(chilla).toBeDefined();
      expect(chilla!.nutrientsProvided).toContain("nutrient.protein");
      expect(chilla!.nutrientsProvided).toContain("nutrient.complex-carbs");
      expect(chilla!.nutrientsProvided).toContain("nutrient.fibre");
      expect(chilla!.nutrientsProvided).toContain("nutrient.iron");
      expect(chilla!.nutrientsProvided).toContain("nutrient.folate");

      // Peanuts -> healthy fats, protein, vitamin e, magnesium, fibre
      const peanuts = VERIFIED_FOODS.find((f) => f.aliases.includes("peanuts"));
      expect(peanuts).toBeDefined();
      expect(peanuts!.nutrientsProvided).toContain("nutrient.healthy-fats");
      expect(peanuts!.nutrientsProvided).toContain("nutrient.protein");
      expect(peanuts!.nutrientsProvided).toContain("nutrient.vitamin-e");
      expect(peanuts!.nutrientsProvided).toContain("nutrient.magnesium");
      expect(peanuts!.nutrientsProvided).toContain("nutrient.fibre");

      // Lemon -> vitamin c, potassium
      const lemon = VERIFIED_FOODS.find((f) => f.aliases.includes("lemon"));
      expect(lemon).toBeDefined();
      expect(lemon!.nutrientsProvided).toContain("nutrient.vitamin-c");
      expect(lemon!.nutrientsProvided).toContain("nutrient.potassium");

      // Sprouted moong -> protein, fibre, vitamin c, folate, iron
      const sprouts = VERIFIED_FOODS.find((f) =>
        f.aliases.includes("sprouted moong")
      );
      expect(sprouts).toBeDefined();
      expect(sprouts!.nutrientsProvided).toContain("nutrient.protein");
      expect(sprouts!.nutrientsProvided).toContain("nutrient.fibre");
      expect(sprouts!.nutrientsProvided).toContain("nutrient.vitamin-c");
      expect(sprouts!.nutrientsProvided).toContain("nutrient.folate");
      expect(sprouts!.nutrientsProvided).toContain("nutrient.iron");
    });
  });

  describe("TypeScript Type Contracts", () => {
    it("supports ComplementaryFoodSuggestion and OccasionEvaluation contracts", () => {
      const suggestion: ComplementaryFoodSuggestion = {
        name: "Paneer",
        foodName: "Paneer",
        illustrationId: "paneer",
        nutrientContribution: "High-quality protein and bioavailable calcium",
        pairingAdvice: "Fold into warm wraps or crumble over salads",
      };
      expect(suggestion.illustrationId).toBe("paneer");

      const underrep: UnderrepresentedNutrient = {
        nutrientId: "nutrient.protein",
        nutrientName: "Protein",
        illustrationId: "protein",
        role: "Tissue repair and immune support",
        reason: "The meal is low in protein-rich ingredients.",
        suggestedFoods: [suggestion],
      };
      expect(underrep.suggestedFoods).toHaveLength(1);

      const evaluation: OccasionEvaluation = {
        occasion: "breakfast",
        summary: "Light energetic breakfast profile",
        graphReasoning: "Strong carbohydrate base with moderate fats",
        balanceTips: [
          "Add sprouted moong or paneer for prolonged morning focus",
        ],
        qualitativeScores: [
          {
            category: "Protein",
            qualitativeLevel: "Moderately represented",
            contributingFoods: ["Peanuts"],
            contextNote: "Provides baseline amino acids",
          },
        ],
      };
      expect(evaluation.occasion).toBe("breakfast");
      expect(evaluation.qualitativeScores[0].qualitativeLevel).toBe(
        "Moderately represented"
      );
    });
  });

  describe("Meal Analyzer Output Portion Check", () => {
    it("ensures detectedIngredients do not require or output portion weights", () => {
      const result = analyzeMeal("Poha with peanuts and green peas");
      expect(result.detectedIngredients.length).toBeGreaterThan(0);
      for (const item of result.detectedIngredients) {
        expect(
          (item as unknown as Record<string, unknown>).quantityText
        ).toBeUndefined();
      }
    });
  });
});

describe("Task 3: Deterministic Meal Analysis & Recommendation Engine", () => {
  describe("Requirement 1: Preserve User Meal Identity & Remove Archetypes", () => {
    it("preserves exact user meal title in uppercase without archetype substitution", () => {
      const res1 = analyzeMeal("Poha");
      expect(res1.mealTitle).toBe("POHA");
      expect(res1.mealTitle).not.toMatch(
        /Classic Thali Harmony|Indian Breakfast Platter/i
      );

      const res2 = analyzeMeal("Moong dal chilla");
      expect(res2.mealTitle).toBe("MOONG DAL CHILLA");
      expect(res2.mealTitle).not.toMatch(/Classic Thali Harmony|Platter/i);

      const res3 = analyzeMeal("  roti, paneer and spinach sabzi  ");
      expect(res3.mealTitle).toBe("ROTI, PANEER AND SPINACH SABZI");
    });
  });

  describe("Requirement 2: Six Core Test Cases", () => {
    it("Case 1: 'Poha' - includes Carbs and Iron, suggests Protein and Vitamin C", () => {
      const result = analyzeMeal("Poha", "breakfast");

      // Title
      expect(result.mealTitle).toBe("POHA");

      // Detected ingredients
      const foodIds = result.detectedIngredients.map((i) => i.foodId);
      expect(foodIds).toContain("food.poha");

      // Nutrients: must include Carbohydrates & Iron
      const nutrientIds = result.detectedNutrients.map((n) => n.id);
      expect(nutrientIds).toContain("nutrient.complex-carbs");
      expect(nutrientIds).toContain("nutrient.iron");
      expect(nutrientIds).toContain("nutrient.fibre");

      // Underrepresented nutrients: must suggest Complete Protein and Vitamin C
      const underrepIds = result.underrepresentedNutrients.map(
        (u) => u.nutrientId
      );
      expect(underrepIds).toContain("nutrient.protein");
      expect(underrepIds).toContain("nutrient.vitamin-c");

      const proteinSuggestions = result.underrepresentedNutrients.find(
        (u) => u.nutrientId === "nutrient.protein"
      );
      expect(proteinSuggestions).toBeDefined();
      const proteinFoodNames = proteinSuggestions!.suggestedFoods.map(
        (s) => s.name
      );
      expect(proteinFoodNames.some((n) => /egg/i.test(n))).toBe(true);
      expect(proteinFoodNames.some((n) => /paneer/i.test(n))).toBe(true);
      expect(proteinFoodNames.some((n) => /sprouted moong/i.test(n))).toBe(
        true
      );

      const vitCSuggestions = result.underrepresentedNutrients.find(
        (u) => u.nutrientId === "nutrient.vitamin-c"
      );
      expect(vitCSuggestions).toBeDefined();
      const vitCFoodNames = vitCSuggestions!.suggestedFoods.map((s) => s.name);
      expect(vitCFoodNames.some((n) => /lemon|lime/i.test(n))).toBe(true);
    });

    it("Case 2: 'Poha with peanuts, peas and lemon' - includes Fats, Fibre, Vit C, Vit A; filters existing foods", () => {
      const result = analyzeMeal(
        "Poha with peanuts, peas and lemon",
        "breakfast"
      );

      // Title
      expect(result.mealTitle).toBe("POHA WITH PEANUTS, PEAS AND LEMON");

      // Detected ingredients: multi-ingredient detection
      const foodIds = result.detectedIngredients.map((i) => i.foodId);
      expect(foodIds).toContain("food.poha");
      expect(foodIds).toContain("food.peanuts");
      expect(foodIds).toContain("food.green-peas");
      expect(foodIds).toContain("food.lemon");

      // Nutrients: includes Healthy Fats, Fibre, Vitamin C, Vitamin A
      const nutrientIds = result.detectedNutrients.map((n) => n.id);
      expect(nutrientIds).toContain("nutrient.complex-carbs");
      expect(nutrientIds).toContain("nutrient.healthy-fats");
      expect(nutrientIds).toContain("nutrient.fibre");
      expect(nutrientIds).toContain("nutrient.vitamin-c");
      expect(nutrientIds).toContain("nutrient.vitamin-a");

      // ADAPTIVE FILTERING:
      // Peanuts are in the meal -> Healthy Fats is NOT missing, peanuts NOT recommended!
      const underrepIds = result.underrepresentedNutrients.map(
        (u) => u.nutrientId
      );
      expect(underrepIds).not.toContain("nutrient.healthy-fats");
      expect(underrepIds).not.toContain("nutrient.vitamin-c");

      // No suggested food should be peanuts, peas, or lemon
      for (const underrep of result.underrepresentedNutrients) {
        for (const food of underrep.suggestedFoods) {
          expect(food.name.toLowerCase()).not.toContain("peanut");
          expect(food.name.toLowerCase()).not.toContain("lemon");
          expect(food.name.toLowerCase()).not.toContain("lime");
          expect(food.name.toLowerCase()).not.toContain("pea");
        }
      }
    });

    it("Case 3: 'Moong dal chilla' - includes Protein, Carbohydrates, Fibre, Iron, Folate", () => {
      const result = analyzeMeal("Moong dal chilla", "breakfast");

      // Title
      expect(result.mealTitle).toBe("MOONG DAL CHILLA");

      // Detected ingredient
      const foodIds = result.detectedIngredients.map((i) => i.foodId);
      expect(foodIds).toContain("food.moong-dal-chilla");

      // Nutrients: Protein, Complex Carbs, Fibre, Iron, Folate
      const nutrientIds = result.detectedNutrients.map((n) => n.id);
      expect(nutrientIds).toContain("nutrient.protein");
      expect(nutrientIds).toContain("nutrient.complex-carbs");
      expect(nutrientIds).toContain("nutrient.fibre");
      expect(nutrientIds).toContain("nutrient.iron");
      expect(nutrientIds).toContain("nutrient.folate");

      // Protein and Carbs are detected -> not underrepresented
      const underrepIds = result.underrepresentedNutrients.map(
        (u) => u.nutrientId
      );
      expect(underrepIds).not.toContain("nutrient.protein");
      expect(underrepIds).not.toContain("nutrient.fibre");
    });

    it("Case 4: 'Roti, paneer and spinach sabzi' - includes Calcium, Iron, Protein, Carbs, Vit A; filters paneer & spinach", () => {
      const result = analyzeMeal("Roti, paneer and spinach sabzi", "lunch");

      // Title
      expect(result.mealTitle).toBe("ROTI, PANEER AND SPINACH SABZI");

      // Detected ingredients
      const foodIds = result.detectedIngredients.map((i) => i.foodId);
      expect(foodIds).toContain("food.roti");
      expect(foodIds).toContain("food.paneer");
      expect(foodIds).toContain("food.spinach");

      // Nutrients: Calcium, Iron, Protein, Carbs, Vitamin A
      const nutrientIds = result.detectedNutrients.map((n) => n.id);
      expect(nutrientIds).toContain("nutrient.calcium");
      expect(nutrientIds).toContain("nutrient.iron");
      expect(nutrientIds).toContain("nutrient.protein");
      expect(nutrientIds).toContain("nutrient.complex-carbs");
      expect(nutrientIds).toContain("nutrient.vitamin-a");

      // ADAPTIVE FILTERING:
      // Paneer is in the meal -> Calcium is NOT underrepresented! Paneer is NOT recommended!
      // Spinach is in the meal -> Iron is NOT underrepresented! Spinach is NOT recommended!
      const underrepIds = result.underrepresentedNutrients.map(
        (u) => u.nutrientId
      );
      expect(underrepIds).not.toContain("nutrient.calcium");
      expect(underrepIds).not.toContain("nutrient.iron");
      expect(underrepIds).not.toContain("nutrient.protein");

      for (const underrep of result.underrepresentedNutrients) {
        for (const food of underrep.suggestedFoods) {
          expect(food.name.toLowerCase()).not.toContain("paneer");
          expect(food.name.toLowerCase()).not.toContain("spinach");
          expect(food.name.toLowerCase()).not.toContain("palak");
        }
      }
    });

    it("Case 5: 'Idli with sambar and coconut chutney' - preserves title, includes Carbs, Protein, Fats, Fibre", () => {
      const result = analyzeMeal(
        "Idli with sambar and coconut chutney",
        "breakfast"
      );

      expect(result.mealTitle).toBe("IDLI WITH SAMBAR AND COCONUT CHUTNEY");

      const foodIds = result.detectedIngredients.map((i) => i.foodId);
      expect(foodIds).toContain("food.idli");
      expect(foodIds).toContain("food.sambar");
      expect(foodIds).toContain("food.coconut-chutney");

      const nutrientIds = result.detectedNutrients.map((n) => n.id);
      expect(nutrientIds).toContain("nutrient.complex-carbs");
      expect(nutrientIds).toContain("nutrient.protein");
      expect(nutrientIds).toContain("nutrient.healthy-fats");
      expect(nutrientIds).toContain("nutrient.fibre");
    });

    it("Case 6: 'Oats with banana and milk' - preserves title, includes Fibre, Carbs, Potassium, Calcium, Protein", () => {
      const result = analyzeMeal("Oats with banana and milk", "breakfast");

      expect(result.mealTitle).toBe("OATS WITH BANANA AND MILK");

      const foodIds = result.detectedIngredients.map((i) => i.foodId);
      expect(foodIds).toContain("food.oats");
      expect(foodIds).toContain("food.banana");
      expect(foodIds).toContain("food.milk");

      const nutrientIds = result.detectedNutrients.map((n) => n.id);
      expect(nutrientIds).toContain("nutrient.fibre");
      expect(nutrientIds).toContain("nutrient.complex-carbs");
      expect(nutrientIds).toContain("nutrient.potassium");
      expect(nutrientIds).toContain("nutrient.calcium");
      expect(nutrientIds).toContain("nutrient.protein");
    });
  });

  describe("Requirement 3: Unknown Meals Handling", () => {
    it("cleanly handles unknown meal 'Quinoa bowl with avocado' without generic archetypes", () => {
      const result = analyzeMeal("Quinoa bowl with avocado", "lunch");

      // Title preserved
      expect(result.mealTitle).toBe("QUINOA BOWL WITH AVOCADO");
      expect(result.mealTitle).not.toMatch(/Classic Thali Harmony/i);

      // Flag and count
      expect(result.isUnknownMeal).toBe(true);
      expect(result.identifiedCount).toBe(0);
      expect(result.detectedIngredients).toHaveLength(0);
      expect(result.detectedNutrients).toHaveLength(0);

      // Informative uncertainty note
      expect(
        result.uncertaintyNotes.some((note) =>
          /not clearly identified|could not be recognized/i.test(note)
        )
      ).toBe(true);

      // Occasion evaluation explains missing recognition
      expect(result.occasionSuitability.graphReasoning).toMatch(
        /recognized whole-food ingredients/i
      );
    });
  });

  describe("Requirement 4: Occasion Contextual Evaluation & Switching", () => {
    it("adapts contextual evaluation for Breakfast, Lunch, and Dinner without altering detected ingredients", () => {
      const breakfast = analyzeMeal("Poha", "breakfast");
      const lunch = analyzeMeal("Poha", "lunch");
      const dinner = analyzeMeal("Poha", "dinner");

      // Underlying ingredients and nutrients do NOT change
      expect(breakfast.detectedIngredients).toEqual(lunch.detectedIngredients);
      expect(lunch.detectedIngredients).toEqual(dinner.detectedIngredients);
      expect(breakfast.detectedNutrients).toEqual(lunch.detectedNutrients);

      // Occasion evaluations are contextual
      expect(breakfast.occasionSuitability.occasion).toBe("breakfast");
      expect(lunch.occasionSuitability.occasion).toBe("lunch");
      expect(dinner.occasionSuitability.occasion).toBe("dinner");

      // Contextual summaries and reasoning reflect the occasion
      expect(breakfast.occasionSuitability.summary).toMatch(
        /breakfast|morning/i
      );
      expect(lunch.occasionSuitability.summary).toMatch(/lunch|midday/i);
      expect(dinner.occasionSuitability.summary).toMatch(/dinner|evening/i);

      expect(breakfast.occasionSuitability.graphReasoning).not.toBe(
        lunch.occasionSuitability.graphReasoning
      );
      expect(lunch.occasionSuitability.graphReasoning).not.toBe(
        dinner.occasionSuitability.graphReasoning
      );

      // Qualitative score levels remain consistent with meal composition
      for (
        let i = 0;
        i < breakfast.occasionSuitability.qualitativeScores.length;
        i++
      ) {
        expect(
          breakfast.occasionSuitability.qualitativeScores[i].qualitativeLevel
        ).toBe(lunch.occasionSuitability.qualitativeScores[i].qualitativeLevel);
      }
    });

    it("uses only valid qualitative levels in occasion qualitativeScores", () => {
      const validLevels = [
        "Less represented",
        "Moderately represented",
        "Well represented",
      ];
      const result = analyzeMeal("Moong dal chilla with green peas", "lunch");

      for (const score of result.occasionSuitability.qualitativeScores) {
        expect(validLevels).toContain(score.qualitativeLevel);
      }
    });
  });

  describe("Requirement 5: Strict Zero-Portion Restriction", () => {
    it("ensures zero grams, calories, or portion counts across all fields", () => {
      const testCases = [
        "Poha",
        "Poha with peanuts, peas and lemon",
        "Moong dal chilla",
        "Roti, paneer and spinach sabzi",
        "Idli with sambar and coconut chutney",
        "Oats with banana and milk",
      ];

      for (const meal of testCases) {
        const result = analyzeMeal(meal, "lunch");

        // No quantityText on ingredients
        for (const ing of result.detectedIngredients) {
          expect(
            (ing as unknown as Record<string, unknown>).quantityText
          ).toBeUndefined();
        }

        // Check serialized output for portion units
        const json = JSON.stringify(result);
        expect(json).not.toMatch(
          /\b\d+\s*(?:g|gram|grams|mg|kcal|calorie|calories|serving|servings|bowl|bowls)\b/i
        );
      }
    });
  });
});
