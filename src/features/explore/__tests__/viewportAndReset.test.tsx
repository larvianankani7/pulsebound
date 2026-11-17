import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { GardenItemTooltip } from "../components/GardenItemTooltip";
import { ResetConfirmationModal } from "../components/ResetConfirmationModal";
import { GARDEN_ITEMS } from "../data/gardenItems";
import { STORAGE_PROGRESS_KEY, STORAGE_USERNAME_KEY } from "../constants";
import { clearExplorePersistedData } from "../store/exploreStorage";

describe("Explore Page Viewport-Aware Positioning & Complete Reset", () => {
  const sampleItem = GARDEN_ITEMS["tulsi"];

  it("1. Renders centered floating panel on mobile screen width (< 640px) without overflow", () => {
    // Simulate mobile viewport width
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 390,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 844,
    });

    const onClose = vi.fn();
    render(
      <GardenItemTooltip item={sampleItem} placement="top" onClose={onClose} />
    );

    // Modal dialog rendered with role="dialog"
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent("Tulsi (Holy Basil)");
    expect(tooltip).toHaveTextContent("Key Compounds & Nutrients:");
    expect(tooltip).toHaveTextContent("Traditional Use (Folklore):");
    expect(tooltip).toHaveTextContent("Evidence Note:");
    expect(tooltip).toHaveTextContent("Found in: Fresh Tulsi tea");

    // Close button dismisses modal
    const closeBtn = screen.getByLabelText("Close details");
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("2. Repositions downward when triggered near top edge on desktop to prevent top clipping", () => {
    // Desktop viewport
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1280,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 800,
    });

    // Mock trigger near top edge (top: 50px, bottom: 130px)
    const mockTrigger = document.createElement("button");
    vi.spyOn(mockTrigger, "getBoundingClientRect").mockReturnValue({
      top: 50,
      bottom: 130,
      left: 600,
      right: 680,
      width: 80,
      height: 80,
      x: 600,
      y: 50,
      toJSON: () => {},
    });
    document.body.appendChild(mockTrigger);

    const triggerRef = { current: mockTrigger };

    render(
      <GardenItemTooltip
        item={sampleItem}
        placement="top"
        triggerRef={triggerRef}
      />
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();

    // Because space above (50 - 68 = -18px) is insufficient, it MUST flip to bottom placement
    expect(tooltip.style.top).toBe("140px"); // rect.bottom (130) + 10px offset
    expect(tooltip.style.bottom).toBe("");

    document.body.removeChild(mockTrigger);
  });

  it("3. Repositions upward when triggered near bottom edge on desktop to prevent bottom clipping", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1280,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 800,
    });

    // Mock trigger near bottom edge (top: 720px, bottom: 790px)
    const mockTrigger = document.createElement("button");
    vi.spyOn(mockTrigger, "getBoundingClientRect").mockReturnValue({
      top: 720,
      bottom: 790,
      left: 600,
      right: 680,
      width: 80,
      height: 80,
      x: 600,
      y: 720,
      toJSON: () => {},
    });
    document.body.appendChild(mockTrigger);

    const triggerRef = { current: mockTrigger };

    render(
      <GardenItemTooltip
        item={sampleItem}
        placement="bottom"
        triggerRef={triggerRef}
      />
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();

    // Because space below (800 - 790 = 10px) is insufficient, it MUST flip to top placement
    expect(tooltip.style.bottom).toBe("90px"); // vh (800) - rect.top (720) + 10px offset
    expect(tooltip.style.top).toBe("");

    document.body.removeChild(mockTrigger);
  });

  it("4. Clamps horizontal coordinates within viewport margins when trigger is near screen edges", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 800,
    });

    // Trigger near far left (left: 0px)
    const leftTrigger = document.createElement("button");
    vi.spyOn(leftTrigger, "getBoundingClientRect").mockReturnValue({
      top: 300,
      bottom: 380,
      left: 0,
      right: 80,
      width: 80,
      height: 80,
      x: 0,
      y: 300,
      toJSON: () => {},
    });
    document.body.appendChild(leftTrigger);

    const leftRef = { current: leftTrigger };
    const { unmount } = render(
      <GardenItemTooltip item={sampleItem} triggerRef={leftRef} />
    );

    const tooltip = screen.getByRole("tooltip");
    // Left edge must be clamped to at least MARGIN_X (16px)
    expect(parseInt(tooltip.style.left, 10)).toBeGreaterThanOrEqual(16);

    unmount();
    document.body.removeChild(leftTrigger);
  });

  it("5. ResetConfirmationModal displays warning details and triggers cancel or confirm", async () => {
    const onClose = vi.fn();
    const onConfirm = vi.fn();

    const { rerender } = render(
      <ResetConfirmationModal
        isOpen={true}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    );

    expect(screen.getByTestId("reset-confirmation-modal")).toBeInTheDocument();
    expect(screen.getByText("Reset Explore Progress?")).toBeInTheDocument();
    expect(
      screen.getByText(/Return to Level 01 \(Levels 02–25 locked\)/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Your username, audio preferences, and other sections/i)
    ).toBeInTheDocument();

    // Click Cancel
    fireEvent.click(screen.getByTestId("cancel-reset-button"));
    expect(onClose).toHaveBeenCalledTimes(1);

    // Click Reset Everything
    fireEvent.click(screen.getByTestId("confirm-reset-button"));
    expect(onConfirm).toHaveBeenCalledTimes(1);

    // Re-render closed
    rerender(
      <ResetConfirmationModal
        isOpen={false}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    );
    await waitFor(() => {
      expect(
        screen.queryByTestId("reset-confirmation-modal")
      ).not.toBeInTheDocument();
    });
  });

  it("6. clearExplorePersistedData clears Explore progress but preserves user settings", async () => {
    // Set user profile and other settings in localStorage
    localStorage.setItem(STORAGE_USERNAME_KEY, "ValuedHealer");
    localStorage.setItem("sylvara_audio_music_pref", "true");
    localStorage.setItem(
      STORAGE_PROGRESS_KEY,
      JSON.stringify({ unlockedLevel: 15, completedLevels: [1, 2, 3] })
    );

    // Clear Explore persisted data
    await clearExplorePersistedData();

    // Explore progress should be reset to Level 1 baseline
    const exploreRaw = localStorage.getItem(STORAGE_PROGRESS_KEY);
    expect(exploreRaw).not.toBeNull();
    const parsed = JSON.parse(exploreRaw!);
    expect(parsed.unlockedLevel).toBe(1);
    expect(parsed.completedLevels).toHaveLength(0);
    expect(parsed.earnedBadgeIds).toHaveLength(0);
    expect(parsed.learningScore).toBe(0);

    // Other user settings MUST remain untouched
    expect(localStorage.getItem(STORAGE_USERNAME_KEY)).toBe("ValuedHealer");
    expect(localStorage.getItem("sylvara_audio_music_pref")).toBe("true");
  });
});
