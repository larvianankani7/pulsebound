import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainMenu } from "./MainMenu";
import { NAVIGATION_ITEMS } from "./constants";

// Mock useNavigate from react-router-dom to observe navigation
const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe("PULSEBOUND Main Menu", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("renders the prominent PULSEBOUND brand title", () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const brandHeading = screen.getByRole("heading", { name: "PULSEBOUND" });
    expect(brandHeading).toBeInTheDocument();
    expect(brandHeading).toHaveTextContent("PULSEBOUND");
  });

  it("renders the exact official tagline on a single line without wrapping", () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const taglineText = screen.getByText(
      /Forge the flesh\. Master the pulse\. Unlock your vitality\./i
    );
    expect(taglineText).toBeInTheDocument();
    const paragraph = taglineText.closest("p");
    expect(paragraph).toHaveClass("whitespace-nowrap");
  });

  it("renders all five navigation buttons with increased prominent dimensions in the exact prescribed order", () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const expectedLabels = [
      "Findings",
      "Explore",
      "Learnings",
      "Settings",
      "About",
    ];

    expect(NAVIGATION_ITEMS.map((item) => item.name)).toEqual(expectedLabels);

    const buttons = screen.getAllByRole("button", {
      name: /Navigate to (Findings|Explore|Learnings|Settings|About)/i,
    });

    expect(buttons).toHaveLength(5);
    expectedLabels.forEach((label, idx) => {
      expect(buttons[idx]).toHaveTextContent(label);
      expect(buttons[idx]).toHaveClass("rounded-2xl");
      expect(buttons[idx]).toHaveClass("min-h-[58px]");
    });
  });

  it("handles navigation click with sound feedback", async () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const exploreButton = screen.getByRole("button", {
      name: /Navigate to Explore/i,
    });
    fireEvent.click(exploreButton);

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith("/explore");
    });
  });

  it("renders music control and toggles mute state", () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const muteBtn = screen.getByRole("button", {
      name: /(Unmute|Mute) (background music )?audio/i,
    });
    expect(muteBtn).toBeInTheDocument();

    fireEvent.click(muteBtn);
  });
});
