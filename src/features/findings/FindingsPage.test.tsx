import { describe, it, expect, vi, beforeEach, beforeAll } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FindingsPage } from "./FindingsPage";

describe("SYLVARA Findings Discovery Experience", () => {
  beforeAll(() => {
    // Provide mocks for jsdom layout/scroll functions
    if (!window.scrollTo) {
      window.scrollTo = vi.fn();
    }
    if (!Element.prototype.scrollIntoView) {
      Element.prototype.scrollIntoView = vi.fn();
    }
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("1. Header, Layout, and Atmospheric Media", () => {
    it("renders the header with section label, main question, and educational subtitle", () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      expect(screen.getByText(/FINDINGS & DISCOVERY/i)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /What Did Your Last Meal Look Like\?/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Share what you ate, and discover the nutrients/i)
      ).toBeInTheDocument();
    });

    it("renders the return to main menu link", () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const backLink = screen.getByRole("link", { name: /Return to Main Menu/i });
      expect(backLink).toBeInTheDocument();
      expect(backLink).toHaveAttribute("href", "/");
    });

    it("reuses background media video and music control components", () => {
      const { container } = render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const video = container.querySelector("video");
      expect(video).toBeInTheDocument();
      expect(video).toHaveAttribute("loop");
      expect(video).toHaveAttribute("autoplay");

      const musicButton = screen.getByRole("button", {
        name: /(Unmute|Mute) background music/i,
      });
      expect(musicButton).toBeInTheDocument();
    });
  });

  describe("2. Meal Input Form & Portion-Free Checks", () => {
    it("renders input form without any portion, gram, or calorie mentions in placeholder or helper text", () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );
      expect(textarea).toBeInTheDocument();

      const helperText = screen.getByText(
        /Include ingredients for a more meaningful exploration\./i
      );
      expect(helperText).toBeInTheDocument();

      // Ensure no portion or weight metrics in the input card
      expect(screen.queryByText(/portions?/i)).toBeNull();
      expect(screen.queryByText(/grams?/i)).toBeNull();
      expect(screen.queryByText(/calories?/i)).toBeNull();
      expect(screen.queryByText(/bowl of/i)).toBeNull();
    });

    it("renders all designated example meal pills and populates textarea on click", () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );

      const examplePills = [
        "Poha with peanuts, peas and lemon",
        "Moong dal chilla",
        "Roti, paneer and spinach sabzi",
        "Idli with sambar and coconut chutney",
        "Oats with banana and milk",
        "Dal, rice and curd",
      ];

      for (const example of examplePills) {
        const pill = screen.getByRole("button", { name: example });
        expect(pill).toBeInTheDocument();
      }

      // Clicking an example pill fills the textarea
      fireEvent.click(
        screen.getByRole("button", { name: "Poha with peanuts, peas and lemon" })
      );
      expect(textarea).toHaveValue("Poha with peanuts, peas and lemon");

      fireEvent.click(screen.getByRole("button", { name: "Moong dal chilla" }));
      expect(textarea).toHaveValue("Moong dal chilla");
    });

    it("validates empty input and shows friendly guidance", () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const discoverButton = screen.getByRole("button", {
        name: /Discover My Meal/i,
      });
      fireEvent.click(discoverButton);

      expect(
        screen.getByText(
          /Please enter a meal description or select an example below\./i
        )
      ).toBeInTheDocument();
    });
  });

  describe("3. Preserved Meal Identity & Rebuilt Findings Architecture", () => {
    it("submitting 'Poha' displays POHA (never Classic Thali Harmony) and no generic plate image", async () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );
      fireEvent.change(textarea, { target: { value: "Poha" } });

      const discoverButton = screen.getByRole("button", {
        name: /Discover My Meal/i,
      });
      fireEvent.click(discoverButton);

      // Wait for Central Nutrient Wheel to render
      await waitFor(
        () => {
          expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
        },
        { timeout: 2000 }
      );

      // Meal title must strictly match user's meal
      const mealTitle = screen.getByTestId("central-meal-title");
      expect(mealTitle).toHaveTextContent("POHA");
      expect(screen.queryByText(/Classic Thali Harmony/i)).toBeNull();
      expect(screen.queryByText(/Indian Breakfast Platter/i)).toBeNull();

      // No generic meal plate artwork or plate SVGs
      expect(screen.queryByTestId("generic-meal-plate")).toBeNull();
      expect(screen.queryByText(/Plate with Roti/i)).toBeNull();

      // Central Nutrient Wheel badge and nutrients
      expect(screen.getByText(/CENTRAL NUTRIENT WHEEL/i)).toBeInTheDocument();
      expect(
        screen.getAllByText(/Complex Carbohydrates/i).length
      ).toBeGreaterThan(0);
      expect(screen.getAllByText(/Iron/i).length).toBeGreaterThan(0);

      // "What Could Be Missing From This Meal?" Underrepresented Section
      expect(
        screen.getByRole("heading", {
          name: /What Could Be Missing From This Meal\?/i,
        })
      ).toBeInTheDocument();

      // "Nutrients Supported by This Meal" Section
      expect(
        screen.getByRole("heading", {
          name: /Nutrients Supported by This Meal/i,
        })
      ).toBeInTheDocument();

      // "Explore Your Meal's Nutritional Profile" Section with preserved violet graph
      expect(
        screen.getByRole("heading", {
          name: /Explore Your Meal's Nutritional Profile/i,
        })
      ).toBeInTheDocument();
      expect(screen.getByTestId("nutritional-profile-chart")).toBeInTheDocument();
      expect(
        screen.getByText(/Qualitative Nutritional Contribution Profile/i)
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /Why Does Your Meal Look This Way\?/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /How Could You Make This Meal More Balanced\?/i,
        })
      ).toBeInTheDocument();

      // Educational Safety Disclaimer
      expect(
        screen.getByText(/Educational Awareness Notice/i)
      ).toBeInTheDocument();
    });

    it("submitting 'Moong dal chilla' displays MOONG DAL CHILLA as central title", async () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );
      fireEvent.change(textarea, { target: { value: "Moong dal chilla" } });

      const discoverButton = screen.getByRole("button", {
        name: /Discover My Meal/i,
      });
      fireEvent.click(discoverButton);

      await waitFor(
        () => {
          expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
        },
        { timeout: 2000 }
      );

      expect(screen.getByTestId("central-meal-title")).toHaveTextContent(
        "MOONG DAL CHILLA"
      );
      expect(screen.queryByText(/Classic Thali Harmony/i)).toBeNull();
    });
  });

  describe("4. Removal of Breakfast/Lunch/Dinner Selector & Preservation of Nutritional Graph", () => {
    it("confirms that the meal occasion selectors are removed while preserving the nutritional profile graph and explanations", async () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );
      fireEvent.change(textarea, { target: { value: "Poha" } });

      fireEvent.click(
        screen.getByRole("button", { name: /Discover My Meal/i })
      );

      await waitFor(
        () => {
          expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
        },
        { timeout: 2000 }
      );

      // 1. Verify that Breakfast, Lunch, and Dinner selectors/dropdowns are NOT present
      expect(screen.queryByRole("radio", { name: /Breakfast/i })).toBeNull();
      expect(screen.queryByRole("radio", { name: /Lunch/i })).toBeNull();
      expect(screen.queryByRole("radio", { name: /Dinner/i })).toBeNull();
      expect(screen.queryByTestId("meal-context-selector")).toBeNull();

      // 2. Verify that the nutritional graph section IS preserved and visible
      expect(screen.getByTestId("meal-profile-section")).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /Explore Your Meal's Nutritional Profile/i,
        })
      ).toBeInTheDocument();

      // Violet line graph and its components
      expect(screen.getByTestId("nutritional-profile-chart")).toBeInTheDocument();
      expect(
        screen.getByText(/Qualitative Nutritional Contribution Profile/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Well Represented Components/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Areas to Potentially Complement/i)
      ).toBeInTheDocument();

      // Explanations below the graph are preserved
      expect(screen.getByTestId("why-meal-looks-this-way")).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /Why Does Your Meal Look This Way\?/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByTestId("how-to-make-more-balanced")).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /How Could You Make This Meal More Balanced\?/i,
        })
      ).toBeInTheDocument();

      // 3. Verify that the complete Findings sequence flows smoothly without empty spaces
      expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
      expect(screen.getByText(/What Could Be Missing From This Meal\?/i)).toBeInTheDocument();
      expect(screen.getByText(/Nutrients Supported by This Meal/i)).toBeInTheDocument();
      expect(screen.getByText(/Educational Awareness Notice/i)).toBeInTheDocument();
    });
  });

  describe("5. Interactive Nutrient Drill-Down View", () => {
    it("selecting a nutrient from the wheel displays the detailed card view with sources and benefits", async () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );
      fireEvent.change(textarea, { target: { value: "Poha" } });

      fireEvent.click(
        screen.getByRole("button", { name: /Discover My Meal/i })
      );

      await waitFor(
        () => {
          expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
        },
        { timeout: 2000 }
      );

      // Find the nutrient node for Iron in the wheel by its distinctive accessible name
      const ironNode = screen.getByRole("button", { name: /Explore Iron:/i });
      fireEvent.click(ironNode);

      // Detail card is revealed (has top and bottom return buttons)
      await waitFor(() => {
        expect(
          screen.getAllByRole("button", { name: /Back to Nutrient Wheel/i })
            .length
        ).toBeGreaterThanOrEqual(1);
      });

      // Check detail card contents
      expect(
        screen.getByRole("heading", { name: /Biological Roles/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /General Health Benefits/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /Prominent Whole Food Sources/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /Everyday Meal Examples/i })
      ).toBeInTheDocument();

      // Clicking "← Back to Nutrient Wheel" returns to the wheel view
      const backButtons = screen.getAllByRole("button", {
        name: /Back to Nutrient Wheel/i,
      });
      fireEvent.click(backButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
        expect(
          screen.queryByRole("heading", { name: /Primary Biological Roles/i })
        ).toBeNull();
      });
    });

    it("selecting a nutrient from SupportedNutrientsSection also reveals the detail card", async () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );
      fireEvent.change(textarea, {
        target: { value: "Poha with peanuts, peas and lemon" },
      });

      fireEvent.click(
        screen.getByRole("button", { name: /Discover My Meal/i })
      );

      await waitFor(
        () => {
          expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
        },
        { timeout: 2000 }
      );

      // Supported nutrients section contains cards
      const supportedSection = screen.getByTestId("supported-nutrients-section");
      expect(supportedSection).toBeInTheDocument();

      // Click on a nutrient card in the supported section using its data-testid
      const supportedCards = screen.getAllByTestId(/^nutrient-card-/);
      expect(supportedCards.length).toBeGreaterThan(0);
      fireEvent.click(supportedCards[0]);

      // Detail view appears with return button
      await waitFor(() => {
        expect(
          screen.getAllByRole("button", { name: /Back to Nutrient Wheel/i })
            .length
        ).toBeGreaterThanOrEqual(1);
      });

      // Escape key returns to wheel
      fireEvent.keyDown(window, { key: "Escape" });

      await waitFor(() => {
        expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
      });
    });
  });

  describe("6. Try Another Meal Reset", () => {
    it("clicking 'Try Another Meal' resets back to the meal input form", async () => {
      render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );
      fireEvent.change(textarea, { target: { value: "Poha" } });

      fireEvent.click(
        screen.getByRole("button", { name: /Discover My Meal/i })
      );

      await waitFor(
        () => {
          expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
        },
        { timeout: 2000 }
      );

      // Reset button in top action bar
      const retryButton = screen.getByRole("button", {
        name: /Try Another Meal/i,
      });
      expect(retryButton).toBeInTheDocument();
      fireEvent.click(retryButton);

      // Returns cleanly to the input form
      expect(
        screen.getByPlaceholderText(
          /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
        )
      ).toBeInTheDocument();
      expect(screen.queryByTestId("central-meal-title")).toBeNull();
    });
  });

  describe("7. Strictly Zero Portions, Grams, Milligrams, or Calories", () => {
    it("strictly zero portion references or nutrient quantities appear anywhere across findings view", async () => {
      const { container } = render(
        <MemoryRouter>
          <FindingsPage />
        </MemoryRouter>
      );

      const textarea = screen.getByPlaceholderText(
        /Describe your meal\.\.\. e\.g\. Poha with peanuts, peas and lemon, or Moong dal chilla\./i
      );
      fireEvent.change(textarea, {
        target: { value: "Roti, paneer and spinach sabzi" },
      });

      fireEvent.click(
        screen.getByRole("button", { name: /Discover My Meal/i })
      );

      await waitFor(
        () => {
          expect(screen.getByTestId("central-meal-title")).toBeInTheDocument();
        },
        { timeout: 2000 }
      );

      const text = container.textContent || "";

      // Strictly zero grams, milligrams, micrograms, or kcal
      expect(text).not.toMatch(/\b\d+\s*(?:g|grams?)\b/i);
      expect(text).not.toMatch(/\b\d+\s*(?:mg|milligrams?)\b/i);
      expect(text).not.toMatch(/\b\d+\s*(?:mcg|µg|micrograms?)\b/i);
      expect(text).not.toMatch(/\b\d+\s*(?:kcal|calories?)\b/i);

      // Strictly zero portions or bowl quantities
      expect(text).not.toMatch(/\b\d+\s*(?:bowl|bowls|katori|katoris|cups?)\b/i);
      expect(text).not.toMatch(/\bportions?\b/i);
    });
  });
});
