import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HowToPlaySection } from "../components/HowToPlaySection";
import { HOW_TO_PLAY_GUIDE } from "../../explore/data/howToPlayData";

describe("Settings How to Play Section & Shared Data Synchronization", () => {
  it("renders all 6 synchronized gameplay guide sections", () => {
    render(<HowToPlaySection />);

    expect(screen.getByText("Comprehensive Gameplay Guide")).toBeDefined();

    HOW_TO_PLAY_GUIDE.forEach((section) => {
      expect(screen.getByText(section.title)).toBeDefined();
      expect(screen.getByText(section.subtitle)).toBeDefined();
    });
  });

  it("renders step-by-step explore flow with exact numbering", () => {
    render(<HowToPlaySection />);

    expect(screen.getByText("Read the Health Scenario:")).toBeDefined();
    expect(screen.getByText("Inspect Garden Items (Hover):")).toBeDefined();
    expect(screen.getByText("Select Botanical Choices (Click):")).toBeDefined();
    expect(screen.getByText("Use Hints When Needed:")).toBeDefined();
    expect(screen.getByText("Submit Selections (Enter):")).toBeDefined();
    expect(screen.getByText("Unlock Learning Card & Badge:")).toBeDefined();
  });
});
