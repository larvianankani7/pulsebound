import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SupportedNutrientsSection } from "./SupportedNutrientsSection";
import { VERIFIED_NUTRIENTS } from "../../../content/nutrients/nutrientsData";
import { type NutrientInfo } from "../types";
import * as soundEffects from "../../main-menu/utils/soundEffects";

// Mock sound effects to verify audio trigger
vi.spyOn(soundEffects, "playMenuClickSound").mockImplementation(() => {});

// Ten representative verified nutrients from SYLVARA's verified library
const mockRichNutrientSpectrum: NutrientInfo[] = [
  VERIFIED_NUTRIENTS["nutrient.complex-carbs"],
  VERIFIED_NUTRIENTS["nutrient.protein"],
  VERIFIED_NUTRIENTS["nutrient.healthy-fats"],
  VERIFIED_NUTRIENTS["nutrient.fibre"],
  VERIFIED_NUTRIENTS["nutrient.iron"],
  VERIFIED_NUTRIENTS["nutrient.vitamin-c"],
  VERIFIED_NUTRIENTS["nutrient.calcium"],
  VERIFIED_NUTRIENTS["nutrient.potassium"],
  VERIFIED_NUTRIENTS["nutrient.magnesium"],
  VERIFIED_NUTRIENTS["nutrient.vitamin-a"],
];

describe("SupportedNutrientsSection Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Section Header & Decorators", () => {
    it("renders the section heading, subtitle, and decorative category badge", () => {
      render(
        <SupportedNutrientsSection nutrients={mockRichNutrientSpectrum} />
      );

      // Section Heading
      const heading = screen.getByRole("heading", {
        name: /Nutrients Supported by This Meal/i,
      });
      expect(heading).toBeInTheDocument();

      // Section Subtitle
      expect(
        screen.getByText(
          /Explore the nutritional components represented by the ingredients in your meal\./i
        )
      ).toBeInTheDocument();

      // Decorative category badge
      expect(screen.getByText(/NUTRIENT SPECTRUM/i)).toBeInTheDocument();
    });
  });

  describe("Comprehensive Representation (No 5-Item Limitation)", () => {
    it("renders all provided nutrients without artificially capping at 5 items", () => {
      render(
        <SupportedNutrientsSection nutrients={mockRichNutrientSpectrum} />
      );

      // All 10 nutrients in the rich spectrum must be rendered
      expect(screen.getByText("Complex Carbohydrates")).toBeInTheDocument();
      expect(screen.getByText("Protein")).toBeInTheDocument();
      expect(screen.getByText("Healthy Fats")).toBeInTheDocument();
      expect(screen.getByText("Dietary Fibre")).toBeInTheDocument();
      expect(screen.getByText("Iron")).toBeInTheDocument();
      expect(screen.getByText("Vitamin C")).toBeInTheDocument();
      expect(screen.getByText("Calcium")).toBeInTheDocument();
      expect(screen.getByText("Potassium")).toBeInTheDocument();
      expect(screen.getByText("Magnesium")).toBeInTheDocument();
      expect(screen.getByText(/Vitamin A/i)).toBeInTheDocument();

      // Verify 10 distinct interactive nutrient card buttons exist
      const buttons = screen.getAllByRole("button", { name: /Explore /i });
      expect(buttons).toHaveLength(10);
    });

    it("ensures Complex Carbohydrates is rendered whenever included in the nutrient list", () => {
      render(
        <SupportedNutrientsSection nutrients={mockRichNutrientSpectrum} />
      );

      const carbsButton = screen.getByRole("button", {
        name: /Explore Complex Carbohydrates/i,
      });
      expect(carbsButton).toBeInTheDocument();
      expect(
        screen.getByTestId("nutrient-card-nutrient.complex-carbs")
      ).toBeInTheDocument();

      // Verify Carbohydrates card content
      expect(screen.getByText("Complex Carbohydrates")).toBeInTheDocument();
      expect(
        screen.getByText(VERIFIED_NUTRIENTS["nutrient.complex-carbs"].shortRole)
      ).toBeInTheDocument();
    });
  });

  describe("Compact Card Details", () => {
    it("renders circular illustration container, category pill, name, and short benefit summary", () => {
      const singleNutrient = [VERIFIED_NUTRIENTS["nutrient.iron"]];
      render(<SupportedNutrientsSection nutrients={singleNutrient} />);

      // Circular vector illustration
      expect(screen.getByLabelText(/Iron illustration/i)).toBeInTheDocument();

      // Category Pill
      expect(screen.getByText("Mineral")).toBeInTheDocument();

      // Nutrient Name
      expect(screen.getByText("Iron")).toBeInTheDocument();

      // Short Role / Benefit
      expect(
        screen.getByText(VERIFIED_NUTRIENTS["nutrient.iron"].shortRole)
      ).toBeInTheDocument();

      // Micro Action text
      expect(screen.getByText(/^Explore$/i)).toBeInTheDocument();
    });

    it("displays appropriate category labels for various categories", () => {
      const mixedCategories: NutrientInfo[] = [
        VERIFIED_NUTRIENTS["nutrient.protein"], // macronutrient
        VERIFIED_NUTRIENTS["nutrient.vitamin-c"], // vitamin
        VERIFIED_NUTRIENTS["nutrient.iron"], // mineral
      ];

      render(<SupportedNutrientsSection nutrients={mixedCategories} />);

      expect(screen.getByText("Macronutrient")).toBeInTheDocument();
      expect(screen.getByText("Vitamin")).toBeInTheDocument();
      expect(screen.getByText("Mineral")).toBeInTheDocument();
    });
  });

  describe("Click & Keyboard Interactions", () => {
    it("invokes onSelectNutrient and plays sound when a card is clicked", async () => {
      const onSelectNutrient = vi.fn();
      render(
        <SupportedNutrientsSection
          nutrients={mockRichNutrientSpectrum}
          onSelectNutrient={onSelectNutrient}
        />
      );

      const proteinCard = screen.getByRole("button", {
        name: /Explore Protein/i,
      });

      fireEvent.click(proteinCard);

      expect(onSelectNutrient).toHaveBeenCalledTimes(1);
      expect(onSelectNutrient).toHaveBeenCalledWith(
        VERIFIED_NUTRIENTS["nutrient.protein"]
      );
      expect(soundEffects.playMenuClickSound).toHaveBeenCalledTimes(1);
    });

    it("invokes onSelectNutrient and plays sound when Enter key is pressed on a card", () => {
      const onSelectNutrient = vi.fn();
      render(
        <SupportedNutrientsSection
          nutrients={mockRichNutrientSpectrum}
          onSelectNutrient={onSelectNutrient}
        />
      );

      const ironCard = screen.getByRole("button", {
        name: /Explore Iron/i,
      });

      fireEvent.keyDown(ironCard, { key: "Enter" });

      expect(onSelectNutrient).toHaveBeenCalledTimes(1);
      expect(onSelectNutrient).toHaveBeenCalledWith(
        VERIFIED_NUTRIENTS["nutrient.iron"]
      );
      expect(soundEffects.playMenuClickSound).toHaveBeenCalledTimes(1);
    });

    it("invokes onSelectNutrient and plays sound when Space key is pressed on a card", () => {
      const onSelectNutrient = vi.fn();
      render(
        <SupportedNutrientsSection
          nutrients={mockRichNutrientSpectrum}
          onSelectNutrient={onSelectNutrient}
        />
      );

      const vitaminCCard = screen.getByRole("button", {
        name: /Explore Vitamin C/i,
      });

      fireEvent.keyDown(vitaminCCard, { key: " " });

      expect(onSelectNutrient).toHaveBeenCalledTimes(1);
      expect(onSelectNutrient).toHaveBeenCalledWith(
        VERIFIED_NUTRIENTS["nutrient.vitamin-c"]
      );
      expect(soundEffects.playMenuClickSound).toHaveBeenCalledTimes(1);
    });

    it("does not trigger onSelectNutrient on unrelated key presses", () => {
      const onSelectNutrient = vi.fn();
      render(
        <SupportedNutrientsSection
          nutrients={mockRichNutrientSpectrum}
          onSelectNutrient={onSelectNutrient}
        />
      );

      const ironCard = screen.getByRole("button", {
        name: /Explore Iron/i,
      });

      fireEvent.keyDown(ironCard, { key: "Tab" });
      fireEvent.keyDown(ironCard, { key: "ArrowDown" });

      expect(onSelectNutrient).not.toHaveBeenCalled();
      expect(soundEffects.playMenuClickSound).not.toHaveBeenCalled();
    });

    it("does not throw if onSelectNutrient is not provided", () => {
      render(
        <SupportedNutrientsSection nutrients={mockRichNutrientSpectrum} />
      );

      const card = screen.getByRole("button", {
        name: /Explore Complex Carbohydrates/i,
      });

      expect(() => {
        fireEvent.click(card);
      }).not.toThrow();
    });
  });

  describe("Harmonious Empty State", () => {
    it("renders clean informative empty state when nutrients array is empty", () => {
      render(<SupportedNutrientsSection nutrients={[]} />);

      expect(
        screen.getByTestId("supported-nutrients-empty-section")
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /Nutrients Supported by This Meal/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /No verified nutrients were identified from the description yet\./i
        )
      ).toBeInTheDocument();
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });

    it("handles undefined or null nutrients prop gracefully", () => {
      // @ts-expect-error - defensive prop testing
      render(<SupportedNutrientsSection nutrients={undefined} />);

      expect(
        screen.getByTestId("supported-nutrients-empty-section")
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /No verified nutrients were identified from the description yet\./i
        )
      ).toBeInTheDocument();
    });
  });

  describe("Absence of Portion Metrics & Diagnostic Claims", () => {
    it("strictly avoids any portion weights, quantities, calories, or percentages", () => {
      const { container } = render(
        <SupportedNutrientsSection nutrients={mockRichNutrientSpectrum} />
      );

      const text = container.textContent || "";

      // Ensure no calorie figures (e.g. 200 kcal, 150 calories)
      expect(text).not.toMatch(/\b\d+\s*(?:kcal|calories|cal)\b/i);

      // Ensure no gram/milligram/microgram portion metrics (e.g. 100g, 50 mg, 10mcg)
      expect(text).not.toMatch(/\b\d+\s*(?:g|gm|gms|mg|mcg)\b/i);

      // Ensure no daily value percentages (e.g. 20%, 50% DV)
      expect(text).not.toMatch(/\b\d+%\b/);
    });
  });

  describe("Graceful Handling of Sparse Nutrient Data", () => {
    it("renders fallback text if shortRole, fullBenefit, and introduction are empty", () => {
      const minimalNutrient: NutrientInfo = {
        id: "nutrient.custom",
        name: "Custom Mineral",
        category: "mineral",
        shortRole: "",
        introduction: "",
        biologicalRoles: [],
        generalBenefits: [],
        foodSources: [],
        mealExamples: [],
        illustrationId: "iron",
      };

      render(<SupportedNutrientsSection nutrients={[minimalNutrient]} />);

      expect(screen.getByText("Custom Mineral")).toBeInTheDocument();
      expect(screen.getByText("Mineral")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /Explore Custom Mineral/i })
      ).toBeInTheDocument();
    });
  });
});
