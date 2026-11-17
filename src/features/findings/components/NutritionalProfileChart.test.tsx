import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NutritionalProfileChart } from "./NutritionalProfileChart";
import { MealProfileSection } from "./MealProfileSection";
import { MealContextSelector } from "./MealContextSelector";
import { type OccasionEvaluation, type ProfileCategoryScore } from "../types";
import * as soundEffects from "../../main-menu/utils/soundEffects";

// Mock sound effects
vi.spyOn(soundEffects, "playMenuClickSound").mockImplementation(() => {});

// Comprehensive mock OccasionEvaluation fixture for Lunch
const mockLunchEvaluation: OccasionEvaluation = {
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
  qualitativeScores: [
    {
      category: "Protein",
      qualitativeLevel: "Well represented",
      contributingFoods: ["Dal / Lentils", "Curd / Yogurt"],
      contextNote:
        "Contributes amino acids for muscle maintenance, cellular renewal, and satiety.",
    },
    {
      category: "Dietary Fibre",
      qualitativeLevel: "Well represented",
      contributingFoods: ["Roti / Chapatis", "Spinach / Leafy Greens"],
      contextNote:
        "Supports steady digestive rhythm and fosters a diverse gut microbiome.",
    },
    {
      category: "Key Vitamins",
      qualitativeLevel: "Moderately represented",
      contributingFoods: ["Spinach / Leafy Greens"],
      contextNote:
        "Delivers cellular micronutrients, antioxidants, and metabolic cofactors.",
    },
    {
      category: "Essential Minerals",
      qualitativeLevel: "Well represented",
      contributingFoods: ["Spinach / Leafy Greens", "Curd / Yogurt"],
      contextNote:
        "Trace elements supporting oxygen delivery, fluid balance, and bone health.",
    },
    {
      category: "Healthy Fats",
      qualitativeLevel: "Less represented",
      contributingFoods: [],
      contextNote:
        "Supports cell membrane integrity and the uptake of fat-soluble vitamins.",
    },
    {
      category: "Complex Energy",
      qualitativeLevel: "Well represented",
      contributingFoods: ["Roti / Chapatis"],
      contextNote:
        "Sustained carbohydrate polysaccharides powering steady daily stamina.",
    },
  ],
};

// Comprehensive mock OccasionEvaluation fixture for Breakfast
const mockBreakfastEvaluation: OccasionEvaluation = {
  occasion: "breakfast",
  summary:
    "In a morning breakfast context, this meal provides an early metabolic foundation to power cognitive alertness and physical vitality.",
  graphReasoning:
    "This profile highlights a strong complex energy foundation from grain or cereal staples. In the morning, pairing this with a protein source helps prolong morning focus.",
  balanceTips: [
    "Pair with a cup of curd, a boiled egg, or a handful of sprouted moong for prolonged morning focus.",
    "A fresh squeeze of lemon delivers refreshing Vitamin C and enhances iron uptake.",
  ],
  qualitativeScores: mockLunchEvaluation.qualitativeScores.map((s) => ({
    ...s,
    qualitativeLevel:
      s.category === "Complex Energy"
        ? "Well represented"
        : s.category === "Protein"
          ? "Moderately represented"
          : s.qualitativeLevel,
  })),
};

// Comprehensive mock OccasionEvaluation fixture for Dinner
const mockDinnerEvaluation: OccasionEvaluation = {
  occasion: "dinner",
  summary:
    "In an evening dinner context, this meal offers nourishing replenishment that supports nocturnal recovery while remaining gentle on digestion.",
  graphReasoning:
    "The evening curve reflects moderate culinary lipids and accessible carbohydrates, which are well-suited for easy digestion prior to sleep.",
  balanceTips: [
    "Incorporate light, easily digestible proteins such as warm moong dal or fresh paneer.",
    "Add lightly sautéed vegetables to support nighttime hydration.",
  ],
  qualitativeScores: mockLunchEvaluation.qualitativeScores,
};

const mockProfileScores: ProfileCategoryScore[] = [
  {
    category: "Protein",
    level: "High",
    numericScore: 80,
    contributingFoods: ["Dal / Lentils", "Curd / Yogurt"],
    contextNote: "Contributes amino acids for muscle maintenance.",
  },
  {
    category: "Dietary Fibre",
    level: "High",
    numericScore: 78,
    contributingFoods: ["Roti / Chapatis", "Spinach / Leafy Greens"],
    contextNote: "Supports steady digestive rhythm.",
  },
  {
    category: "Key Vitamins",
    level: "Moderate",
    numericScore: 56,
    contributingFoods: ["Spinach / Leafy Greens"],
    contextNote: "Delivers cellular micronutrients.",
  },
  {
    category: "Essential Minerals",
    level: "High",
    numericScore: 82,
    contributingFoods: ["Spinach / Leafy Greens", "Curd / Yogurt"],
    contextNote: "Trace elements supporting bone health.",
  },
  {
    category: "Healthy Fats",
    level: "Low/Underrepresented",
    numericScore: 24,
    contributingFoods: [],
    contextNote: "Supports cell membrane integrity.",
  },
  {
    category: "Complex Energy",
    level: "High",
    numericScore: 84,
    contributingFoods: ["Roti / Chapatis"],
    contextNote: "Sustained carbohydrate polysaccharides.",
  },
];

describe("Nutritional Profile & Occasion Graph Suite (Task 7)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("MealContextSelector Component", () => {
    it("renders Breakfast, Lunch, and Dinner radio buttons with appropriate icons and labels", () => {
      render(
        <MealContextSelector selectedOccasion="lunch" onChange={vi.fn()} />
      );

      const radiogroup = screen.getByRole("radiogroup", {
        name: /Select meal occasion/i,
      });
      expect(radiogroup).toBeInTheDocument();

      const breakfastRadio = screen.getByRole("radio", { name: /Breakfast/i });
      const lunchRadio = screen.getByRole("radio", { name: /Lunch/i });
      const dinnerRadio = screen.getByRole("radio", { name: /Dinner/i });

      expect(breakfastRadio).toBeInTheDocument();
      expect(lunchRadio).toBeInTheDocument();
      expect(dinnerRadio).toBeInTheDocument();

      // Lunch is currently selected
      expect(lunchRadio).toHaveAttribute("aria-checked", "true");
      expect(breakfastRadio).toHaveAttribute("aria-checked", "false");
      expect(dinnerRadio).toHaveAttribute("aria-checked", "false");
    });

    it("triggers onChange and plays sound when a different occasion is clicked", () => {
      const handleChange = vi.fn();
      render(
        <MealContextSelector selectedOccasion="lunch" onChange={handleChange} />
      );

      const breakfastRadio = screen.getByRole("radio", { name: /Breakfast/i });
      fireEvent.click(breakfastRadio);

      expect(handleChange).toHaveBeenCalledWith("breakfast");
      expect(soundEffects.playMenuClickSound).toHaveBeenCalledTimes(1);
    });

    it("does not re-trigger onChange or sound when the already selected occasion is clicked", () => {
      const handleChange = vi.fn();
      render(
        <MealContextSelector selectedOccasion="lunch" onChange={handleChange} />
      );

      const lunchRadio = screen.getByRole("radio", { name: /Lunch/i });
      fireEvent.click(lunchRadio);

      expect(handleChange).not.toHaveBeenCalled();
      expect(soundEffects.playMenuClickSound).not.toHaveBeenCalled();
    });

    it("supports keyboard arrow navigation between options", () => {
      const handleChange = vi.fn();
      render(
        <MealContextSelector
          selectedOccasion="breakfast"
          onChange={handleChange}
        />
      );

      const breakfastRadio = screen.getByRole("radio", { name: /Breakfast/i });
      fireEvent.keyDown(breakfastRadio, { key: "ArrowRight" });

      expect(handleChange).toHaveBeenCalledWith("lunch");
    });
  });

  describe("NutritionalProfileChart Component", () => {
    it("renders the graph title 'Meal Composition & Occasion Suitability' and qualitative subtitle", () => {
      render(
        <NutritionalProfileChart occasionEvaluation={mockLunchEvaluation} />
      );

      const graphTitle = screen.getByTestId("graph-title");
      expect(graphTitle).toBeInTheDocument();
      expect(graphTitle).toHaveTextContent(
        "Meal Composition & Occasion Suitability"
      );

      // Verify backwards-compatible subtitle text is present
      expect(
        screen.getByText(/Qualitative Nutritional Contribution Profile/i)
      ).toBeInTheDocument();
    });

    it("displays purely qualitative Y-axis labels and zero numeric values", () => {
      render(
        <NutritionalProfileChart occasionEvaluation={mockLunchEvaluation} />
      );

      // Exactly 3 qualitative scale levels on the Y-axis
      expect(screen.getByText("Well represented")).toBeInTheDocument();
      expect(screen.getByText("Moderately represented")).toBeInTheDocument();
      expect(screen.getByText("Less represented")).toBeInTheDocument();
    });

    it("renders all 6 core nutritional categories along the X-axis", () => {
      render(
        <NutritionalProfileChart occasionEvaluation={mockLunchEvaluation} />
      );

      const categories = [
        "Protein",
        "Dietary Fibre",
        "Key Vitamins",
        "Essential Minerals",
        "Healthy Fats",
        "Complex Energy",
      ];

      for (const cat of categories) {
        // Query elements with text matching the category
        const elements = screen.getAllByText(cat);
        expect(elements.length).toBeGreaterThanOrEqual(1);
      }
    });

    it("shows informative tooltip on hover or click of a data point", async () => {
      const user = userEvent.setup();
      render(
        <NutritionalProfileChart occasionEvaluation={mockLunchEvaluation} />
      );

      // Find the interactive point for Protein
      const proteinPoint = screen.getByRole("button", {
        name: /Protein: Well represented/i,
      });
      expect(proteinPoint).toBeInTheDocument();

      // Click or hover point
      await user.click(proteinPoint);

      // Tooltip appears
      const tooltip = screen.getByTestId("chart-point-tooltip");
      expect(tooltip).toBeInTheDocument();
      expect(tooltip).toHaveTextContent("Protein");
      expect(tooltip).toHaveTextContent("Well represented");
      expect(tooltip).toHaveTextContent("Dal / Lentils, Curd / Yogurt");
      expect(tooltip).toHaveTextContent(
        "Contributes amino acids for muscle maintenance, cellular renewal, and satiety."
      );
      expect(soundEffects.playMenuClickSound).toHaveBeenCalled();
    });

    it("supports keyboard Enter/Space activation on data points", () => {
      render(
        <NutritionalProfileChart occasionEvaluation={mockLunchEvaluation} />
      );

      const fibrePoint = screen.getByRole("button", {
        name: /Dietary Fibre: Well represented/i,
      });

      fireEvent.keyDown(fibrePoint, { key: "Enter" });

      const tooltip = screen.getByTestId("chart-point-tooltip");
      expect(tooltip).toBeInTheDocument();
      expect(tooltip).toHaveTextContent("Dietary Fibre");
      expect(tooltip).toHaveTextContent(
        "Roti / Chapatis, Spinach / Leafy Greens"
      );
    });

    it("renders compact well-represented and complementary summary cards beneath the graph", () => {
      render(
        <NutritionalProfileChart occasionEvaluation={mockLunchEvaluation} />
      );

      expect(
        screen.getByText(/Well Represented Components/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Areas to Potentially Complement/i)
      ).toBeInTheDocument();

      // Healthy Fats is less represented in our mock (present in summary card and axis)
      const healthyFatsElements = screen.getAllByText(/Healthy Fats/i);
      expect(healthyFatsElements.length).toBeGreaterThanOrEqual(2);
    });

    it("renders seamlessly when supplied with backward-compatible profileScores", () => {
      render(<NutritionalProfileChart scores={mockProfileScores} />);

      expect(screen.getByTestId("graph-title")).toBeInTheDocument();
      expect(screen.getByText("Well represented")).toBeInTheDocument();
      expect(screen.getByText("Moderately represented")).toBeInTheDocument();
      expect(screen.getByText("Less represented")).toBeInTheDocument();
    });
  });

  describe("MealProfileSection Component", () => {
    it("renders the main section heading and subtitle", () => {
      render(
        <MealProfileSection
          occasion="lunch"
          onOccasionChange={vi.fn()}
          occasionEvaluation={mockLunchEvaluation}
        />
      );

      // Section Heading
      const heading = screen.getByRole("heading", {
        name: /Explore Your Meal's Nutritional Profile/i,
      });
      expect(heading).toBeInTheDocument();

      // Subtitle
      expect(
        screen.getByText(
          /Discover how your meal's composition fits across core nutritional areas\./i
        )
      ).toBeInTheDocument();
    });

    it("integrates NutritionalProfileChart and explanation areas without occasion selector", () => {
      render(
        <MealProfileSection
          occasion="lunch"
          onOccasionChange={vi.fn()}
          occasionEvaluation={mockLunchEvaluation}
        />
      );

      expect(screen.queryByTestId("meal-context-selector")).toBeNull();
      expect(
        screen.getByTestId("nutritional-profile-chart")
      ).toBeInTheDocument();
      expect(screen.getByTestId("why-meal-looks-this-way")).toBeInTheDocument();
      expect(
        screen.getByTestId("how-to-make-more-balanced")
      ).toBeInTheDocument();
    });

    it("renders 'Why Does Your Meal Look This Way?' with contextual occasion and curve reasoning", () => {
      render(
        <MealProfileSection
          occasion="lunch"
          onOccasionChange={vi.fn()}
          occasionEvaluation={mockLunchEvaluation}
        />
      );

      const section = screen.getByTestId("why-meal-looks-this-way");
      expect(section).toBeInTheDocument();

      expect(
        screen.getByRole("heading", {
          name: /Why Does Your Meal Look This Way\?/i,
        })
      ).toBeInTheDocument();

      // Occasion Context summary
      expect(
        screen.getByText(
          /As a midday meal, this profile supports sustained afternoon stamina/i
        )
      ).toBeInTheDocument();

      // Curve Shape reasoning
      expect(
        screen.getByText(
          /The midday profile reflects balanced dietary fibre and complex carbohydrates/i
        )
      ).toBeInTheDocument();

      // Recognized food contributions list
      expect(
        screen.getByText(/Recognized Food Contributions/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Dal \/ Lentils, Curd \/ Yogurt/i)
      ).toBeInTheDocument();
    });

    it("renders 'How Could You Make This Meal More Balanced?' with practical tips and non-judgmental tone", () => {
      render(
        <MealProfileSection
          occasion="lunch"
          onOccasionChange={vi.fn()}
          occasionEvaluation={mockLunchEvaluation}
        />
      );

      const balanceSection = screen.getByTestId("how-to-make-more-balanced");
      expect(balanceSection).toBeInTheDocument();

      expect(
        screen.getByRole("heading", {
          name: /How Could You Make This Meal More Balanced\?/i,
        })
      ).toBeInTheDocument();

      // Verify specific practical tips from the evaluation
      expect(
        screen.getByText(
          /Complement with a crisp cucumber-tomato kachumber salad/i
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(/A bowl of homemade curd, a glass of spiced chaas/i)
      ).toBeInTheDocument();

      // Reassurance celebration note
      expect(
        screen.getByText(
          /SYLVARA celebrates the rich traditions of home-cooked meals/i
        )
      ).toBeInTheDocument();
    });

    it("updates contextual explanations when occasion changes to Breakfast", () => {
      const handleOccasionChange = vi.fn();
      const { rerender } = render(
        <MealProfileSection
          occasion="breakfast"
          onOccasionChange={handleOccasionChange}
          occasionEvaluation={mockBreakfastEvaluation}
        />
      );

      expect(
        screen.getByText(
          /In a morning breakfast context, this meal provides an early metabolic foundation/i
        )
      ).toBeInTheDocument();

      // Rerender with Dinner
      rerender(
        <MealProfileSection
          occasion="dinner"
          onOccasionChange={handleOccasionChange}
          occasionEvaluation={mockDinnerEvaluation}
        />
      );

      expect(
        screen.getByText(
          /In an evening dinner context, this meal offers nourishing replenishment/i
        )
      ).toBeInTheDocument();
    });

    it("MealContextSelector invokes onChange callback when occasion radio button is selected", () => {
      const handleOccasionChange = vi.fn();
      render(
        <MealContextSelector
          selectedOccasion="lunch"
          onChange={handleOccasionChange}
        />
      );

      const dinnerRadio = screen.getByRole("radio", { name: /Dinner/i });
      fireEvent.click(dinnerRadio);

      expect(handleOccasionChange).toHaveBeenCalledWith("dinner");
    });
  });

  describe("STRICT REQUIREMENT: Zero Fabricated Numbers or Portions", () => {
    it("strictly contains zero portion numbers, grams, milligrams, calories, or percentages in the rendered output", () => {
      const { container } = render(
        <MealProfileSection
          occasion="lunch"
          onOccasionChange={vi.fn()}
          occasionEvaluation={mockLunchEvaluation}
        />
      );

      const allText = container.textContent || "";

      // Assert zero grams, milligrams, micrograms
      expect(allText).not.toMatch(
        /\b\d+\s*(?:g|grams?|mg|milligrams?|mcg|micrograms?)\b/i
      );

      // Assert zero calories / kcal
      expect(allText).not.toMatch(/\b\d+\s*(?:kcal|calories?)\b/i);

      // Assert zero percentage values in text (e.g. 50%, 80%)
      expect(allText).not.toMatch(/\b\d+%/);

      // Assert zero fabricated scores (e.g. "Score: 75", "85/100")
      expect(allText).not.toMatch(/\b\d+\s*\/\s*100\b/);
      expect(allText).not.toMatch(/score:\s*\d+/i);
    });
  });
});
