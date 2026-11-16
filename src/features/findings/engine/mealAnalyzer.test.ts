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
        expect(
          VERIFIED_NUTRIENTS[id],
          `Missing nutrient: ${id}`
        ).toBeDefined();
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
          ["macronutrient", "vitamin", "mineral", "other", "phytonutrient", "hydration"],
          `${id} category invalid`
        ).toContain(nutrient.category);
        expect(nutrient.shortRole, `${id} shortRole missing`).toBeTruthy();
        expect(nutrient.introduction, `${id} introduction missing`).toBeTruthy();
        expect(nutrient.illustrationId, `${id} illustrationId missing`).toBeTruthy();

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
        expect(nutrient.relatedInteraction, `${id} relatedInteraction missing`).toBeTruthy();
        expect(nutrient.educationalFact, `${id} educationalFact missing`).toBeTruthy();
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
        expect((food as unknown as Record<string, unknown>).defaultPortionDesc).toBeUndefined();
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
        balanceTips: ["Add sprouted moong or paneer for prolonged morning focus"],
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
      expect(evaluation.qualitativeScores[0].qualitativeLevel).toBe("Moderately represented");
    });
  });

  describe("Meal Analyzer Output Portion Check", () => {
    it("ensures detectedIngredients do not require or output portion weights", () => {
      const result = analyzeMeal("Poha with peanuts and green peas");
      expect(result.detectedIngredients.length).toBeGreaterThan(0);
      for (const item of result.detectedIngredients) {
        expect((item as unknown as Record<string, unknown>).quantityText).toBeUndefined();
      }
    });
  });
});
