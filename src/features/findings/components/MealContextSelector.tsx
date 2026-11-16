import { type ReactNode, type KeyboardEvent } from "react";
import { Sunrise, Sun, Moon } from "lucide-react";
import { type MealOccasion } from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export interface MealContextSelectorProps {
  selectedOccasion?: MealOccasion;
  occasion?: MealOccasion;
  onChange?: (occasion: MealOccasion) => void;
  onOccasionChange?: (occasion: MealOccasion) => void;
  className?: string;
}

export function MealContextSelector({
  selectedOccasion,
  occasion,
  onChange,
  onOccasionChange,
  className = "",
}: MealContextSelectorProps) {
  const activeOccasion: MealOccasion = occasion ?? selectedOccasion ?? "lunch";

  const handleSelect = (newOccasion: MealOccasion) => {
    if (newOccasion !== activeOccasion) {
      playMenuClickSound();
      onChange?.(newOccasion);
      onOccasionChange?.(newOccasion);
    }
  };

  const occasions: {
    id: MealOccasion;
    label: string;
    icon: ReactNode;
    description: string;
  }[] = [
    {
      id: "breakfast",
      label: "Breakfast",
      icon: <Sunrise className="w-4 h-4" />,
      description: "Morning metabolic foundation & vitality",
    },
    {
      id: "lunch",
      label: "Lunch",
      icon: <Sun className="w-4 h-4" />,
      description: "Midday sustained stamina & steady energy",
    },
    {
      id: "dinner",
      label: "Dinner",
      icon: <Moon className="w-4 h-4" />,
      description: "Evening nourishment & gentle replenishment",
    },
  ];

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    let nextIndex = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIndex = (index + 1) % occasions.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIndex = (index - 1 + occasions.length) % occasions.length;
    }

    if (nextIndex >= 0) {
      e.preventDefault();
      handleSelect(occasions[nextIndex].id);
    }
  };

  return (
    <div
      className={`flex flex-col items-center mb-8 ${className}`}
      data-testid="meal-context-selector"
    >
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d8b4fe]/80 mb-3 font-['Cinzel',serif]">
        Meal Occasion Context
      </span>

      <div
        role="radiogroup"
        aria-label="Select meal occasion"
        className="inline-flex rounded-2xl border border-purple-500/30 bg-[#120822]/90 p-1.5 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.15)]"
      >
        {occasions.map((occ, idx) => {
          const isSelected = activeOccasion === occ.id;
          return (
            <button
              key={occ.id}
              role="radio"
              aria-checked={isSelected}
              aria-label={`${occ.label}: ${occ.description}`}
              type="button"
              tabIndex={isSelected ? 0 : -1}
              onClick={() => handleSelect(occ.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-['Cinzel',serif] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc] ${
                isSelected
                  ? "bg-gradient-to-r from-[#2c154e] via-[#3a1969] to-[#2c154e] text-white border border-[#c084fc] shadow-[0_0_20px_rgba(192,132,252,0.4)]"
                  : "text-[#d8b4fe]/70 hover:text-white hover:bg-[#1a0e2f]/60 border border-transparent"
              }`}
            >
              <span
                className={`transition-colors duration-200 ${
                  isSelected ? "text-[#c084fc]" : "text-[#d8b4fe]/60"
                }`}
              >
                {occ.icon}
              </span>
              <span>{occ.label}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-2 text-[11px] text-[#d8b4fe]/60 font-sans italic">
        Contextual setting for time-of-day perspective.
      </p>
    </div>
  );
}
