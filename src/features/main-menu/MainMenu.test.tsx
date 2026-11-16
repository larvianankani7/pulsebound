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

describe("SYLVARA Main Menu", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("renders the prominent SYLVARA brand title", () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const brandHeading = screen.getByRole("heading", { name: "SYLVARA" });
    expect(brandHeading).toBeInTheDocument();
    expect(brandHeading).toHaveTextContent("SYLVARA");
  });

  it("renders the exact official tagline on a single line without wrapping", () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const taglineText = screen.getByText(
      /Every meal uncovers a tale, and every tale opens a new world\./i
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

    const musicButton = screen.getByRole("button", {
      name: /(Unmute|Mute) background music/i,
    });
    expect(musicButton).toBeInTheDocument();

    // Toggle mute
    fireEvent.click(musicButton);
    expect(localStorage.getItem("sylvara_music_muted")).toBeDefined();
  });

  it("renders the background video element with correct source and loop parameters", () => {
    const { container } = render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const video = container.querySelector("video");
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveClass("object-cover");
    expect(video).toHaveClass("opacity-95");

    const source = video?.querySelector("source");
    expect(source?.getAttribute("src")).toContain("/videos/menu-bg.mp4");
    expect(source?.getAttribute("src")).toContain("#t=5");
  });

  it("renders the decorative Buddha Bowl image with circular container and cover styling", () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    const image = screen.getByRole("img", {
      name: /Artisanal wholesome Buddha Bowl/i,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/buddha-bowl.webp");
    expect(image).toHaveClass("object-cover");
    expect(image).toHaveClass("opacity-90");

    const circularContainer = image.closest("div");
    expect(circularContainer).toHaveClass("rounded-full");
    expect(circularContainer).toHaveClass("overflow-hidden");
  });
});
