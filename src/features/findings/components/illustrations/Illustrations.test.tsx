import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  NutrientIllustration,
  FoodIllustration,
  IllustrationContainer,
  VERIFIED_NUTRIENT_ILLUSTRATION_IDS,
  VERIFIED_FOOD_ILLUSTRATION_IDS,
  normalizeNutrientId,
  normalizeFoodId,
} from "./index";

describe("Vector Illustration Library - Nutrient Illustrations", () => {
  // Test all 17 verified nutrient IDs
  it.each(VERIFIED_NUTRIENT_ILLUSTRATION_IDS)(
    "renders nutrient illustration for %s with role='img' and valid SVG attributes",
    (nutrientId) => {
      const { container } = render(<NutrientIllustration id={nutrientId} />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("role", "img");
      expect(svg).toHaveAttribute("viewBox", "0 0 100 100");
      expect(svg).toHaveAttribute("aria-label");
      expect(svg?.getAttribute("aria-label")?.length).toBeGreaterThan(0);
    }
  );

  it("handles shorthand alias IDs (e.g., carbohydrates, protein, iron, calcium)", () => {
    const aliases = [
      { alias: "carbohydrates", canonical: "complex-carbs" },
      { alias: "complex-carbs", canonical: "complex-carbs" },
      { alias: "protein", canonical: "protein" },
      { alias: "healthy-fats", canonical: "healthy-fats" },
      { alias: "fats", canonical: "healthy-fats" },
      { alias: "fibre", canonical: "fibre" },
      { alias: "fiber", canonical: "fibre" },
      { alias: "vitamin-a", canonical: "vitamin-a" },
      { alias: "vitamin_a", canonical: "vitamin-a" },
      { alias: "vitamin-b-complex", canonical: "vitamin-b-complex" },
      { alias: "b-complex", canonical: "vitamin-b-complex" },
      { alias: "folate", canonical: "folate" },
      { alias: "vitamin-b9", canonical: "folate" },
      { alias: "vitamin-c", canonical: "vitamin-c" },
      { alias: "vitamin-d", canonical: "vitamin-d" },
      { alias: "vitamin-e", canonical: "vitamin-e" },
      { alias: "vitamin-k", canonical: "vitamin-k" },
      { alias: "iron", canonical: "iron" },
      { alias: "calcium", canonical: "calcium" },
      { alias: "potassium", canonical: "potassium" },
      { alias: "magnesium", canonical: "magnesium" },
      { alias: "zinc", canonical: "zinc" },
      { alias: "phosphorus", canonical: "phosphorus" },
    ];

    for (const { alias, canonical } of aliases) {
      expect(normalizeNutrientId(alias)).toBe(canonical);
      const { container } = render(<NutrientIllustration id={alias} />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("role", "img");
    }
  });

  it("renders a safe, beautiful fallback for an unrecognized nutrient ID", () => {
    const { container } = render(
      <NutrientIllustration id="nutrient.unknown-xyz" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-label", "Nutrient: nutrient.unknown-xyz");
  });

  it("applies custom size, className, and ariaLabel overrides to nutrient illustration", () => {
    const { container } = render(
      <NutrientIllustration
        id="nutrient.protein"
        size={80}
        className="custom-test-class"
        ariaLabel="Custom Accessible Protein Graphic"
      />
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "80");
    expect(svg).toHaveAttribute("height", "80");
    expect(svg).toHaveClass("custom-test-class");
    expect(svg).toHaveAttribute(
      "aria-label",
      "Custom Accessible Protein Graphic"
    );
  });
});

describe("Vector Illustration Library - Food Illustrations", () => {
  // Test all food IDs
  it.each(VERIFIED_FOOD_ILLUSTRATION_IDS)(
    "renders food illustration for %s with role='img' and valid SVG attributes",
    (foodId) => {
      const { container } = render(<FoodIllustration id={foodId} />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("role", "img");
      expect(svg).toHaveAttribute("viewBox", "0 0 100 100");
      expect(svg).toHaveAttribute("aria-label");
      expect(svg?.getAttribute("aria-label")?.length).toBeGreaterThan(0);
    }
  );

  it("handles shorthand and variant food IDs (e.g. egg, paneer, dal, lentils, roti, curd)", () => {
    const foodAliases = [
      { alias: "egg", canonical: "egg" },
      { alias: "boiled-egg", canonical: "egg" },
      { alias: "paneer", canonical: "paneer" },
      { alias: "sprouted-moong", canonical: "sprouted-moong" },
      { alias: "sprouts", canonical: "sprouted-moong" },
      { alias: "lemon-coriander", canonical: "lemon-coriander" },
      { alias: "lemon", canonical: "lemon-coriander" },
      { alias: "peanuts-seeds", canonical: "peanuts-seeds" },
      { alias: "peanuts", canonical: "peanuts-seeds" },
      { alias: "pumpkin-seeds", canonical: "peanuts-seeds" },
      { alias: "curd-buttermilk", canonical: "curd-buttermilk" },
      { alias: "curd", canonical: "curd-buttermilk" },
      { alias: "chaas", canonical: "curd-buttermilk" },
      { alias: "veggies-medley", canonical: "veggies-medley" },
      { alias: "vegetables", canonical: "veggies-medley" },
      { alias: "salad", canonical: "veggies-medley" },
      { alias: "lentils", canonical: "lentils" },
      { alias: "dal", canonical: "lentils" },
      { alias: "chole", canonical: "lentils" },
      { alias: "spinach", canonical: "spinach" },
      { alias: "palak", canonical: "spinach" },
      { alias: "fruits", canonical: "fruits" },
      { alias: "amla", canonical: "fruits" },
      { alias: "roti", canonical: "roti" },
      { alias: "ghee", canonical: "ghee" },
      { alias: "coconut-chutney", canonical: "coconut-chutney" },
    ];

    for (const { alias, canonical } of foodAliases) {
      expect(normalizeFoodId(alias)).toBe(canonical);
      const { container } = render(<FoodIllustration id={alias} />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("role", "img");
    }
  });

  it("renders a safe, beautiful fallback for an unrecognized food ID", () => {
    const { container } = render(<FoodIllustration id="food.mystery-berry" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-label", "Food: food.mystery-berry");
  });

  it("applies custom size, className, and ariaLabel overrides to food illustration", () => {
    const { container } = render(
      <FoodIllustration
        id="food.egg"
        size={72}
        className="egg-custom-class"
        ariaLabel="Custom Boiled Egg"
      />
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "72");
    expect(svg).toHaveAttribute("height", "72");
    expect(svg).toHaveClass("egg-custom-class");
    expect(svg).toHaveAttribute("aria-label", "Custom Boiled Egg");
  });
});

describe("Vector Illustration Library - IllustrationContainer", () => {
  it("renders circular container with default styles and children", () => {
    render(
      <IllustrationContainer size={64}>
        <span data-testid="child-element">Child Icon</span>
      </IllustrationContainer>
    );

    const child = screen.getByTestId("child-element");
    expect(child).toBeInTheDocument();

    const container = child.closest("div[role='presentation']") as HTMLElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("rounded-full");
    expect(container).toHaveClass("border");
    expect(container.style.width).toBe("64px");
    expect(container.style.height).toBe("64px");
  });

  it("supports pulse animation, custom ariaLabel, and click handlers", () => {
    let clicked = false;
    render(
      <IllustrationContainer
        size={48}
        pulse={true}
        role="button"
        ariaLabel="Interactive Container"
        onClick={() => {
          clicked = true;
        }}
      >
        <span>Clickable</span>
      </IllustrationContainer>
    );

    const btn = screen.getByRole("button", { name: "Interactive Container" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("animate-pulse");
    expect(btn).toHaveClass("cursor-pointer");

    btn.click();
    expect(clicked).toBe(true);
  });
});
