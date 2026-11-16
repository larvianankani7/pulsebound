import React, { useState } from "react";
import { Sparkles, Loader2, AlertCircle } from "lucide-react";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface MealInputCardProps {
  initialValue?: string;
  onDiscover: (mealText: string) => void;
  isLoading: boolean;
}

const EXAMPLE_MEALS = [
  "Poha with peanuts, peas and lemon",
  "Moong dal chilla",
  "Roti, paneer and spinach sabzi",
  "Idli with sambar and coconut chutney",
  "Oats with banana and milk",
  "Dal, rice and curd",
];

export function MealInputCard({
  initialValue = "",
  onDiscover,
  isLoading,
}: MealInputCardProps) {
  const [mealText, setMealText] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = mealText.trim();
    if (!trimmed) {
      setErrorMessage(
        "Please enter a meal description or select an example below."
      );
      return;
    }
    if (trimmed.length < 3) {
      setErrorMessage(
        "Please provide a slightly more descriptive meal so we can explore its ingredients."
      );
      return;
    }

    setErrorMessage(null);
    playMenuClickSound();
    onDiscover(trimmed);
  };

  const handleSelectExample = (example: string) => {
    setMealText(example);
    setErrorMessage(null);
    playMenuClickSound();
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-3xl border border-[#c084fc]/25 bg-[#0e0819]/80 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(168,85,247,0.18)]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="meal-description-input"
            className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#d8b4fe] font-['Cinzel',serif] mb-2"
          >
            Describe Your Meal
          </label>
          <div className="relative">
            <textarea
              id="meal-description-input"
              rows={4}
              value={mealText}
              onChange={(e) => {
                setMealText(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              placeholder="Describe your meal... e.g. Poha with peanuts, peas and lemon, or Moong dal chilla."
              className="w-full rounded-2xl border border-purple-500/25 bg-[#140b24]/90 p-4 sm:p-5 text-sm sm:text-base text-white placeholder-purple-300/40 transition-all duration-300 focus:border-[#c084fc] focus:bg-[#1a0e2f] focus:outline-none focus:ring-2 focus:ring-[#c084fc]/40 resize-none font-sans"
            />
          </div>
          <p className="mt-2 text-xs text-[#d8b4fe]/70 font-sans">
            Include ingredients for a more meaningful exploration.
          </p>
        </div>

        {/* Validation error message */}
        {errorMessage && (
          <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/40 px-4 py-2.5 text-xs text-rose-200">
            <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl border border-[#c084fc]/40 bg-gradient-to-r from-[#241242] via-[#2f1454] to-[#241242] text-white font-['Cinzel',serif] text-sm sm:text-base tracking-wider uppercase font-bold transition-all duration-300 hover:scale-[1.02] hover:border-[#d8b4fe] hover:shadow-[0_0_25px_rgba(192,132,252,0.4)] active:scale-[0.98] disabled:opacity-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc]"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-[#c084fc]" />
                <span>Exploring Nutrition...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 text-[#c084fc] transition-transform duration-300 group-hover:rotate-12" />
                <span>Discover My Meal</span>
              </>
            )}
          </button>
        </div>

        {/* Optional Example Suggestions */}
        <div className="mt-4 pt-4 border-t border-purple-500/15">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d8b4fe]/75 block mb-2.5 font-['Cinzel',serif]">
            Or Try An Example:
          </span>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_MEALS.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => handleSelectExample(ex)}
                className="rounded-full border border-purple-500/25 bg-[#170c2a]/80 px-3.5 py-1.5 text-xs text-[#e2d9f3] transition-all duration-200 hover:border-[#c084fc]/70 hover:bg-[#23123e] hover:text-white hover:shadow-[0_0_12px_rgba(192,132,252,0.2)] cursor-pointer"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
