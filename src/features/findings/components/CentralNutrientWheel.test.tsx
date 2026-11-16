import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CentralNutrientWheel } from "./CentralNutrientWheel";
import { VERIFIED_NUTRIENTS } from "../../../content/nutrients/nutrientsData";
import { type NutrientInfo } from "../types";

// Pick representative nutrients for test fixtures
const testCarbs = VERIFIED_NUTRIENTS["nutrient.complex-carbs"];
const testProtein = VERIFIED_NUTRIENTS["nutrient.protein"];
const testIron = VERIFIED_NUTRIENTS["nutrient.iron"];
const testVitaminC = VERIFIED_NUTRIENTS["nutrient.vitamin-c"];

const mockNutrients: NutrientInfo[] = [
  testCarbs,    // index 0 -> 12 o'clock (top, y < 0)
  testProtein,  // index 1 -> 3 o'clock (right, y = 0)
  testIron,     // index 2 -> 6 o'clock (bottom, y > 0)
  testVitaminC, // index 3 -> 9 o'clock (left, y = 0)
];

describe("CentralNutrientWheel Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the central meal title prominently and does not render any generic meal plate image", () => {
    render(
      <CentralNutrientWheel
        mealTitle="POHA WITH PEANUTS AND LEMON"
        nutrients={mockNutrients}
      />
    );

    const titleElement = screen.getByTestId("central-meal-title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("POHA WITH PEANUTS AND LEMON");

    // Strictly ensure no generic meal/dish photo images are in the document
    const images = screen.queryAllByRole("img");
    const genericPlateImage = images.find((img) =>
      (img.getAttribute("src") || "").match(/plate|dish|food-generic/i)
    );
    expect(genericPlateImage).toBeUndefined();
  });

  it("renders all provided nutrients in the circular wheel", () => {
    render(
      <CentralNutrientWheel
        mealTitle="POHA"
        nutrients={mockNutrients}
      />
    );

    expect(screen.getByText("Complex Carbohydrates")).toBeInTheDocument();
    expect(screen.getByText("Protein")).toBeInTheDocument();
    expect(screen.getByText("Iron")).toBeInTheDocument();
    expect(screen.getByText("Vitamin C")).toBeInTheDocument();

    // Verify nutrient count indicator
    expect(screen.getByText("4 Nutrients")).toBeInTheDocument();
  });

  it("displays hover tooltip showing biological role on hover and hides on mouse leave", async () => {
    render(
      <CentralNutrientWheel
        mealTitle="POHA"
        nutrients={mockNutrients}
      />
    );

    // Initial state: tooltip should not be visible
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    // Find the Protein button
    const proteinButton = screen.getByRole("button", {
      name: /Explore Protein/i,
    });
    expect(proteinButton).toBeInTheDocument();

    // Hover on Protein
    fireEvent.mouseEnter(proteinButton.parentElement!);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent(testProtein.shortRole);

    // Mouse leave
    fireEvent.mouseLeave(proteinButton.parentElement!);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("anchors tooltips outward away from the central meal (top for upper nodes, bottom for lower nodes)", () => {
    render(
      <CentralNutrientWheel
        mealTitle="POHA"
        nutrients={mockNutrients}
      />
    );

    // 1. Carbs is at 12 o'clock (index 0, y < 0, above center) -> should have placement="top"
    const carbsButton = screen.getByRole("button", {
      name: /Explore Complex Carbohydrates/i,
    });
    fireEvent.mouseEnter(carbsButton.parentElement!);
    const carbsTooltip = screen.getByRole("tooltip");
    expect(carbsTooltip).toHaveAttribute("data-placement", "top");
    fireEvent.mouseLeave(carbsButton.parentElement!);

    // 2. Iron is at 6 o'clock (index 2, y > 0, below center) -> should have placement="bottom"
    const ironButton = screen.getByRole("button", {
      name: /Explore Iron/i,
    });
    fireEvent.mouseEnter(ironButton.parentElement!);
    const ironTooltip = screen.getByRole("tooltip");
    expect(ironTooltip).toHaveAttribute("data-placement", "bottom");
    fireEvent.mouseLeave(ironButton.parentElement!);
  });

  it("switches to detailed nutrient card when a nutrient is clicked and calls onSelectNutrient", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(
      <CentralNutrientWheel
        mealTitle="MOONG DAL CHILLA"
        nutrients={mockNutrients}
        onSelectNutrient={handleSelect}
      />
    );

    const proteinButton = screen.getByRole("button", {
      name: /Explore Protein/i,
    });

    await user.click(proteinButton);

    // onSelectNutrient callback invoked with protein nutrient
    expect(handleSelect).toHaveBeenCalledWith(testProtein);

    // Detailed Card View rendered
    expect(
      screen.getByRole("heading", { name: "Protein", level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByText("macronutrient")).toBeInTheDocument();

    // Biological roles rendered
    expect(screen.getByText("Biological Roles")).toBeInTheDocument();
    expect(
      screen.getByText(testProtein.biologicalRoles[0])
    ).toBeInTheDocument();

    // Food sources rendered
    expect(
      screen.getByText("Prominent Whole Food Sources")
    ).toBeInTheDocument();
    expect(screen.getByText(testProtein.foodSources[0])).toBeInTheDocument();

    // Everyday meal examples rendered
    expect(screen.getByText("Everyday Meal Examples")).toBeInTheDocument();
    expect(screen.getByText(testProtein.mealExamples[0])).toBeInTheDocument();

    // Synergies & interactions rendered
    expect(
      screen.getByText("Nutritional Synergies & Interactions")
    ).toBeInTheDocument();
    expect(screen.getByText(testProtein.relatedInteraction!)).toBeInTheDocument();

    // Educational scientific facts rendered
    expect(
      screen.getByText("Did You Know? Scientific Fact")
    ).toBeInTheDocument();
    expect(screen.getByText(testProtein.educationalFact!)).toBeInTheDocument();
  });

  it("activates the nutrient when clicking the nutrient text label directly", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(
      <CentralNutrientWheel
        mealTitle="MOONG DAL CHILLA"
        nutrients={mockNutrients}
        onSelectNutrient={handleSelect}
      />
    );

    // The text label "Protein" is inside the interactive button
    const label = screen.getByText("Protein");
    await user.click(label);

    expect(handleSelect).toHaveBeenCalledWith(testProtein);
    expect(
      screen.getByRole("heading", { name: "Protein", level: 2 })
    ).toBeInTheDocument();
  });

  it("supports mobile touch interaction: first touch reveals tooltip preview, subsequent interaction opens detail card", () => {
    const handleSelect = vi.fn();

    render(
      <CentralNutrientWheel
        mealTitle="MOONG DAL CHILLA"
        nutrients={mockNutrients}
        onSelectNutrient={handleSelect}
      />
    );

    const proteinButton = screen.getByRole("button", {
      name: /Explore Protein/i,
    });

    // 1. First touch tap: triggers handleTouchEnd, revealing the tooltip
    fireEvent.touchEnd(proteinButton);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent(testProtein.shortRole);
    // Detail view is not yet open
    expect(handleSelect).not.toHaveBeenCalled();

    // 2. Tapping the tooltip (or tapping the button again) opens the detail card
    fireEvent.click(tooltip);

    expect(handleSelect).toHaveBeenCalledWith(testProtein);
    expect(
      screen.getByRole("heading", { name: "Protein", level: 2 })
    ).toBeInTheDocument();
  });

  it("clicking '← Back to Nutrient Wheel' restores the circular wheel view", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(
      <CentralNutrientWheel
        mealTitle="POHA"
        nutrients={mockNutrients}
        onSelectNutrient={handleSelect}
      />
    );

    // Click on Iron to open detail view
    const ironButton = screen.getByRole("button", {
      name: /Explore Iron/i,
    });
    await user.click(ironButton);

    expect(screen.getByRole("heading", { name: "Iron", level: 2 })).toBeInTheDocument();

    // Click return button
    const backButtons = screen.getAllByRole("button", {
      name: /Back to Nutrient Wheel/i,
    });
    expect(backButtons.length).toBeGreaterThanOrEqual(1);
    await user.click(backButtons[0]);

    // Check that wheel view is restored
    expect(handleSelect).toHaveBeenLastCalledWith(null);
    expect(screen.getByTestId("central-meal-title")).toHaveTextContent("POHA");
    expect(screen.getByText("Protein")).toBeInTheDocument();
  });

  it("pressing Escape key in detailed view restores the wheel view", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(
      <CentralNutrientWheel
        mealTitle="ROTI AND DAL"
        nutrients={mockNutrients}
        onSelectNutrient={handleSelect}
      />
    );

    const carbsButton = screen.getByRole("button", {
      name: /Explore Complex Carbohydrates/i,
    });
    await user.click(carbsButton);

    expect(
      screen.getByRole("heading", { name: "Complex Carbohydrates", level: 2 })
    ).toBeInTheDocument();

    // Press Escape
    fireEvent.keyDown(window, { key: "Escape" });

    // Wheel view restored
    expect(screen.getByTestId("central-meal-title")).toHaveTextContent("ROTI AND DAL");
  });

  it("supports controlled mode when selectedNutrient prop is provided", () => {
    render(
      <CentralNutrientWheel
        mealTitle="POHA"
        nutrients={mockNutrients}
        selectedNutrient={testVitaminC}
      />
    );

    // Detail card for Vitamin C should be rendered directly
    expect(
      screen.getByRole("heading", { name: "Vitamin C", level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByText("vitamin")).toBeInTheDocument();
    expect(screen.getByText(testVitaminC.biologicalRoles[0])).toBeInTheDocument();
  });

  it("handles empty nutrients list gracefully without crashing", () => {
    render(
      <CentralNutrientWheel
        mealTitle="UNKNOWN MEAL"
        nutrients={[]}
      />
    );

    expect(screen.getByTestId("central-meal-title")).toHaveTextContent("UNKNOWN MEAL");
    expect(screen.getByText("0 Nutrients")).toBeInTheDocument();
    expect(
      screen.getByText(/No individual nutrients detected for this meal/i)
    ).toBeInTheDocument();
  });

  describe("Positioning & Radial Composition Verification", () => {
    it("positions the central meal vessel precisely at the center of the radial stage", () => {
      render(
        <CentralNutrientWheel
          mealTitle="MOONG DAL CHILLA"
          nutrients={mockNutrients}
        />
      );

      const stage = screen.getByTestId("radial-wheel-stage");
      expect(stage).toBeInTheDocument();
      expect(stage.className).toContain("relative");
      expect(stage.className).toContain("mx-auto");

      const centralMealContainer = screen.getByTestId("central-meal-container");
      expect(centralMealContainer).toBeInTheDocument();
      expect(centralMealContainer.className).toContain("absolute");
      expect(centralMealContainer.className).toContain("left-1/2");
      expect(centralMealContainer.className).toContain("top-1/2");
      expect(centralMealContainer.className).toContain("-translate-x-1/2");
      expect(centralMealContainer.className).toContain("-translate-y-1/2");
    });

    it("positions each nutrient circle in an absolute radial orbit around the center", () => {
      render(
        <CentralNutrientWheel
          mealTitle="POHA"
          nutrients={mockNutrients}
        />
      );

      // Verify node wrappers are absolutely positioned with left/top calc offsets
      for (const nutrient of mockNutrients) {
        const wrapper = screen.getByTestId(`orbit-node-wrapper-${nutrient.id}`);
        expect(wrapper).toBeInTheDocument();
        expect(wrapper.className).toContain("absolute");
        expect(wrapper.style.left).toMatch(/calc\(50%\s*[+-]/);
        expect(wrapper.style.top).toMatch(/calc\(50%\s*[+-]/);
        expect(wrapper.style.transform).toBe("translate(-50%, -50%)");
      }
    });

    it("places the nutrient text label directly beneath the circular vessel inside the button", () => {
      render(
        <CentralNutrientWheel
          mealTitle="POHA"
          nutrients={mockNutrients}
        />
      );

      const proteinButton = screen.getByRole("button", {
        name: /Explore Protein/i,
      });

      // The label is a span inside the button following the circular vessel div
      const label = proteinButton.querySelector("span");
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent("Protein");
      expect(label?.className).toContain("mt-1.5");
      expect(label?.className).toContain("text-center");
    });

    it("renders clean responsive nutrient grid beneath central meal vessel on mobile screens", () => {
      // Mock window.innerWidth to mobile phone width (375px)
      window.innerWidth = 375;
      fireEvent(window, new Event("resize"));

      render(
        <CentralNutrientWheel
          mealTitle="MOONG DAL CHILLA"
          nutrients={mockNutrients}
        />
      );

      const mobileStage = screen.getByTestId("mobile-wheel-stage");
      expect(mobileStage).toBeInTheDocument();
      expect(screen.queryByTestId("radial-wheel-stage")).toBeNull();

      // Central meal title rendered
      expect(screen.getByTestId("central-meal-title")).toHaveTextContent("MOONG DAL CHILLA");

      // All nutrients rendered in clean responsive grid
      expect(screen.getByText("Complex Carbohydrates")).toBeInTheDocument();
      expect(screen.getByText("Protein")).toBeInTheDocument();
      expect(screen.getByText("Iron")).toBeInTheDocument();
      expect(screen.getByText("Vitamin C")).toBeInTheDocument();

      // Restore window.innerWidth to desktop default
      window.innerWidth = 1024;
      fireEvent(window, new Event("resize"));
    });
  });
});
