import { Sunrise, Sun, Moon } from "lucide-react";
import { type MealOccasion } from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface MealContextSelectorProps {
  selectedOccasion: MealOccasion;
  onChange: (occasion: MealOccasion) => void;
}

export function MealContextSelector({
  selectedOccasion,
  onChange,
}: MealContextSelectorProps) {
  const occasions: {
    id: MealOccasion;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: "breakfast",
      label: "Breakfast",
      icon: <Sunrise className="w-4 h-4" />,
    },
    { id: "lunch", label: "Lunch", icon: <Sun className="w-4 h-4" /> },
    { id: "dinner", label: "Dinner", icon: <Moon className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-col items-center mb-8">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d8b4fe]/80 mb-3 font-['Cinzel',serif]">
        Meal Occasion Context
      </span>

      <div
        role="radiogroup"
        aria-label="Select meal occasion"
        className="inline-flex rounded-2xl border border-purple-500/30 bg-[#120822]/90 p-1.5 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.15)]"
      >
        {occasions.map((occ) => {
          const isSelected = selectedOccasion === occ.id;
          return (
            <button
              key={occ.id}
              role="radio"
              aria-checked={isSelected}
              type="button"
              onClick={() => {
                if (!isSelected) {
                  playMenuClickSound();
                  onChange(occ.id);
                }
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-['Cinzel',serif] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc] ${
                isSelected
                  ? "bg-gradient-to-r from-[#2c154e] via-[#3a1969] to-[#2c154e] text-white border border-[#c084fc] shadow-[0_0_20px_rgba(192,132,252,0.4)]"
                  : "text-[#d8b4fe]/70 hover:text-white hover:bg-[#1a0e2f]/60 border border-transparent"
              }`}
            >
              <span
                className={isSelected ? "text-[#c084fc]" : "text-[#d8b4fe]/60"}
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
