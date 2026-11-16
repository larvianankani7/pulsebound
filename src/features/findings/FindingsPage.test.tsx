import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FindingsPage } from "./FindingsPage";

describe("SYLVARA Findings Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the header with section label, main question, and subtitle", () => {
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

  it("renders the meal input form with examples and handles example click", () => {
    render(
      <MemoryRouter>
        <FindingsPage />
      </MemoryRouter>
    );

    const textarea = screen.getByPlaceholderText(
      /Describe your meal\.\.\. e\.g\. 2 chapatis/i
    );
    expect(textarea).toBeInTheDocument();

    const exampleButton = screen.getByRole("button", {
      name: /Dal, rice and curd/i,
    });
    expect(exampleButton).toBeInTheDocument();

    // Clicking example populates textarea
    fireEvent.click(exampleButton);
    expect(textarea).toHaveValue("Dal, rice and curd");
  });

  it("validates empty input and shows friendly message", () => {
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

  it("submits a meal, analyzes nutrients, and displays results", async () => {
    render(
      <MemoryRouter>
        <FindingsPage />
      </MemoryRouter>
    );

    const textarea = screen.getByPlaceholderText(
      /Describe your meal\.\.\. e\.g\. 2 chapatis/i
    );
    fireEvent.change(textarea, {
      target: {
        value: "2 chapatis, dal, spinach sabzi, curd and a small bowl of rice.",
      },
    });

    const discoverButton = screen.getByRole("button", {
      name: /Discover My Meal/i,
    });
    fireEvent.click(discoverButton);

    // Wait for analysis result to appear
    await waitFor(
      () => {
        expect(screen.getByText(/YOUR MEAL DISCOVERY/i)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    // Meal Title & Identified Ingredients
    expect(screen.getByText(/Classic Thali Harmony/i)).toBeInTheDocument();
    expect(screen.getByText(/Dal \/ Lentils/i)).toBeInTheDocument();
    expect(screen.getByText(/Roti \/ Chapatis/i)).toBeInTheDocument();
    expect(screen.getByText(/Spinach \/ Leafy Greens/i)).toBeInTheDocument();
    expect(screen.getByText(/Curd \/ Yogurt/i)).toBeInTheDocument();

    // Nutrient Orbit header
    expect(
      screen.getByText(/Nutrients Supported by This Meal/i)
    ).toBeInTheDocument();

    // Nutritional profile section & chart
    expect(
      screen.getByRole("heading", {
        name: /Explore Your Meal's Nutritional Profile/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Nutritional Contribution Profile/i)
    ).toBeInTheDocument();

    // Meal occasion selector buttons
    expect(
      screen.getByRole("radio", { name: /Breakfast/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /Lunch/i })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /Dinner/i })).toBeInTheDocument();

    // Educational safety disclaimer
    expect(
      screen.getByText(/Educational Awareness Notice/i)
    ).toBeInTheDocument();

    // Try Another Meal resets back to input
    const retryButton = screen.getByRole("button", {
      name: /Try Another Meal/i,
    });
    fireEvent.click(retryButton);

    expect(
      screen.getByPlaceholderText(/Describe your meal\.\.\. e\.g\. 2 chapatis/i)
    ).toBeInTheDocument();
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
