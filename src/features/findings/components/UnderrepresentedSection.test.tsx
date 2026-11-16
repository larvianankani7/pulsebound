import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { UnderrepresentedSection } from "./UnderrepresentedSection";
import { type UnderrepresentedNutrient } from "../types";

const mockUnderrepresented: UnderrepresentedNutrient[] = [
  {
    nutrientId: "nutrient.protein",
    nutrientName: "Complete Protein",
    illustrationId: "protein",
    role: "Supplies essential amino acids for muscular repair, metabolic enzyme production, and immune antibody formation.",
    reason:
      "Not clearly present in this meal description. Complementing with protein-rich foods supports tissue repair and sustained satiety.",
    suggestedFoods: [
      {
        name: "Boiled Eggs",
        illustrationId: "food.egg",
        nutrientContribution:
          "High biological value complete protein, choline, and essential amino acids",
        pairingAdvice:
          "Enjoy seasoned with cracked black pepper alongside your meal",
      },
      {
        name: "Paneer / Cottage Cheese",
        illustrationId: "food.paneer",
        nutrientContribution:
          "Concentrated dairy protein and bioavailable calcium",
        pairingAdvice:
          "Cube lightly into stir-fries, warm curries, or fresh wraps",
      },
      {
        name: "Sprouted Moong",
        illustrationId: "food.sprouted-moong",
        nutrientContribution:
          "Living plant-based amino acids, enzymes, and bioavailable folate",
        pairingAdvice:
          "Toss fresh with a dash of chaat masala or fold into meals",
      },
    ],
  },
  {
    nutrientId: "nutrient.vitamin-c",
    nutrientName: "Vitamin C",
    illustrationId: "vitamin-c",
    role: "Supports cellular antioxidant defence and enhances plant iron absorption.",
    reason:
      "Raw vegetables or citrus fruits were not detected in this meal description.",
    suggestedFoods: [
      {
        name: "Fresh Lemon & Coriander",
        illustrationId: "food.lemon-coriander",
        nutrientContribution:
          "Ascorbic acid that enhances non-haem iron absorption",
        pairingAdvice: "Squeeze fresh over warm foods just before enjoying",
      },
    ],
  },
];

describe("UnderrepresentedSection Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Harmonious State (underrepresented.length === 0)", () => {
    it("renders the Nutritional Harmony card when no underrepresented nutrients exist", () => {
      render(<UnderrepresentedSection underrepresented={[]} />);

      expect(screen.getByText(/^NUTRITIONAL HARMONY$/i)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /Diverse Food Spectrum Detected/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Your described meal incorporates a rich array of foundational food groups/i
        )
      ).toBeInTheDocument();

      // Heading for discovery should NOT be rendered
      expect(
        screen.queryByRole("heading", {
          name: /What Could Be Missing From This Meal\?/i,
        })
      ).not.toBeInTheDocument();
    });

    it("handles undefined or null underrepresented array gracefully", () => {
      // @ts-expect-error - testing defensive prop handling
      render(<UnderrepresentedSection underrepresented={undefined} />);
      expect(screen.getByText(/^NUTRITIONAL HARMONY$/i)).toBeInTheDocument();
    });
  });

  describe("Active Discovery State (underrepresented items present)", () => {
    it("renders the section heading, badge, and descriptive subtitle", () => {
      render(
        <UnderrepresentedSection underrepresented={mockUnderrepresented} />
      );

      expect(screen.getByText(/DIETARY EXPLORATION/i)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /What Could Be Missing From This Meal\?/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Explore nutrients and food groups that may be less represented in your meal, along with foods that can complement it\./i
        )
      ).toBeInTheDocument();
    });

    it("renders each underrepresented nutrient card with illustration, name, badge, and biological role", () => {
      render(
        <UnderrepresentedSection underrepresented={mockUnderrepresented} />
      );

      // Card 1: Complete Protein
      expect(
        screen.getByRole("heading", { name: /Complete Protein/i })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Supplies essential amino acids for muscular repair, metabolic enzyme production, and immune antibody formation\./i
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Not clearly present in this meal description\. Complementing with protein-rich foods supports tissue repair and sustained satiety\./i
        )
      ).toBeInTheDocument();

      // Card 2: Vitamin C
      expect(
        screen.getByRole("heading", { name: /^Vitamin C$/i })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Supports cellular antioxidant defence and enhances plant iron absorption\./i
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Raw vegetables or citrus fruits were not detected in this meal description\./i
        )
      ).toBeInTheDocument();

      // Both cards display "May Be Underrepresented" badge
      const badges = screen.getAllByText(/May Be Underrepresented/i);
      expect(badges).toHaveLength(2);

      // Verify nutrient circular vector illustrations exist
      expect(
        screen.getByLabelText(/Complete Protein illustration/i)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Vitamin C illustration/i)
      ).toBeInTheDocument();
    });

    it("renders complementary foods with circular illustrations, names, nutrient contributions, and pairing advice", () => {
      render(
        <UnderrepresentedSection underrepresented={mockUnderrepresented} />
      );

      // Section labels
      const foodSectionLabels = screen.getAllByText(
        /Complementary Whole Foods & Culinary Pairings/i
      );
      expect(foodSectionLabels.length).toBeGreaterThanOrEqual(1);

      // Food items for Protein
      expect(
        screen.getByRole("heading", { name: /Boiled Eggs/i })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /High biological value complete protein, choline, and essential amino acids/i
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Enjoy seasoned with cracked black pepper alongside your meal/i
        )
      ).toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: /Paneer \/ Cottage Cheese/i })
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Concentrated dairy protein and bioavailable calcium/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Cube lightly into stir-fries, warm curries, or fresh wraps/i
        )
      ).toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: /Sprouted Moong/i })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Living plant-based amino acids, enzymes, and bioavailable folate/i
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Toss fresh with a dash of chaat masala or fold into meals/i
        )
      ).toBeInTheDocument();

      // Food items for Vitamin C
      expect(
        screen.getByRole("heading", { name: /Fresh Lemon & Coriander/i })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /Ascorbic acid that enhances non-haem iron absorption/i
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Squeeze fresh over warm foods just before enjoying/i)
      ).toBeInTheDocument();

      // Circular food illustrations
      expect(
        screen.getByLabelText(/Boiled Eggs illustration/i)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Paneer \/ Cottage Cheese illustration/i)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Sprouted Moong illustration/i)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Fresh Lemon & Coriander illustration/i)
      ).toBeInTheDocument();
    });

    it("strictly avoids any portion weights, quantities, or calorie figures (zero grams, milligrams, calories)", () => {
      const { container } = render(
        <UnderrepresentedSection underrepresented={mockUnderrepresented} />
      );

      const text = container.textContent || "";

      // Ensure no calorie figures (e.g., 200 kcal, 150 calories)
      expect(text).not.toMatch(/\b\d+\s*(?:kcal|calories|cal)\b/i);

      // Ensure no gram/milligram/microgram portion metrics (e.g., 100g, 50 mg, 10mcg)
      expect(text).not.toMatch(/\b\d+\s*(?:g|gm|gms|mg|mcg)\b/i);

      // Ensure no daily value percentages (e.g., 20%, 50% DV)
      expect(text).not.toMatch(/\b\d+%\b/);
    });

    it("displays non-judgmental educational disclaimer on each card", () => {
      render(
        <UnderrepresentedSection underrepresented={mockUnderrepresented} />
      );

      const disclaimers = screen.getAllByText(
        /\* Additional ingredients or custom preparation methods may change this assessment\./i
      );
      expect(disclaimers.length).toBe(2);
    });

    it("gracefully supports backward-compatible food schema fields (foodName, description, foodGroup)", () => {
      const legacyFixture: UnderrepresentedNutrient[] = [
        {
          nutrientId: "nutrient.fibre",
          nutrientName: "Dietary Fibre",
          illustrationId: "fibre",
          role: "Nourishes gut microbiota and promotes digestive ease.",
          reason: "Could be complemented with plant fiber sources.",
          suggestedFoods: [
            {
              name: "",
              foodName: "Chia & Flax Seeds",
              illustrationId: "food.peanuts-seeds",
              nutrientContribution: "",
              foodGroup: "Nuts & Seeds",
              pairingAdvice: "",
              description: "Stir into warm porridge or yoghurt bowls.",
            },
          ],
        },
      ];

      render(<UnderrepresentedSection underrepresented={legacyFixture} />);

      expect(
        screen.getByRole("heading", { name: /Dietary Fibre/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /Chia & Flax Seeds/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/Nuts & Seeds/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Stir into warm porridge or yoghurt bowls\./i)
      ).toBeInTheDocument();
    });
  });
});
