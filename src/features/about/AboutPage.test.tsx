import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AboutPage } from "./AboutPage";

describe("PULSEBOUND About Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the header with project label, title, and official tagline", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/ABOUT THE PROJECT/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "PULSEBOUND", level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Forge the flesh\. Master the pulse\. Unlock your vitality\./i
      )
    ).toBeInTheDocument();
  });

  it("renders the return to main menu link", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    const backLink = screen.getByRole("link", { name: /Return to Main Menu/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });

  it("renders all eight required content sections", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /1\. Inspiration/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /2\. What It Does/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /3\. How I Built It/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /4\. Challenges I Ran Into/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /5\. Accomplishments That I'm Proud Of/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /6\. What I Learned/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /7\. What's Next for PULSEBOUND/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /8\. What It Teaches/i })
    ).toBeInTheDocument();
  });

  it("renders the architecture diagram and toggles Mermaid source", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Application Architecture Flowchart/i)
    ).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", {
      name: /View Mermaid Source/i,
    });
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText(/flowchart TD/i)).toBeInTheDocument();
  });

  it("renders educational topic cards in What It Teaches section", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /8\. What It Teaches/i })
    ).toBeInTheDocument();
  });
});
