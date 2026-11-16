import { Sparkles, Info, RotateCcw } from "lucide-react";
import { type MealAnalysisResult } from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface MealVisualCardProps {
  analysis: MealAnalysisResult;
  onReset: () => void;
}

export function MealVisualCard({ analysis, onReset }: MealVisualCardProps) {
  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-3xl border border-[#c084fc]/30 bg-[#0f081c]/85 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(168,85,247,0.22)]">
      {/* Top Bar with Badge and Try Another Action */}
      <div className="flex items-center justify-between pb-4 border-b border-purple-500/15">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold">
          <Sparkles className="w-3 h-3 text-[#d8b4fe]" />
          <span>YOUR MEAL DISCOVERY</span>
        </div>

        <button
          type="button"
          onClick={() => {
            playMenuClickSound();
            onReset();
          }}
          className="flex items-center gap-1.5 rounded-lg border border-purple-500/25 bg-[#170c2a]/80 px-3 py-1.5 text-xs text-[#d8b4fe] transition-all duration-200 hover:border-[#c084fc] hover:bg-[#251240] hover:text-white cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Try Another Meal</span>
        </button>
      </div>

      {/* Main Meal Title & User Original Input */}
      <div className="mt-5 text-center">
        <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_14px_rgba(192,132,252,0.4)]">
          {analysis.mealTitle}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#d8b4fe]/80 font-['Cormorant_Garamond',serif] italic max-w-xl mx-auto">
          &ldquo;{analysis.rawDescription}&rdquo;
        </p>
      </div>

      {/* Representative Visual Artwork */}
      <div className="relative my-6 mx-auto flex items-center justify-center overflow-hidden rounded-2xl border border-purple-400/30 bg-gradient-to-b from-[#180d2c] to-[#0c0617] p-8 shadow-[inset_0_0_40px_rgba(168,85,247,0.15)] max-w-lg">
        {/* Ambient background glow behind plate */}
        <div className="absolute h-64 w-64 rounded-full bg-purple-900/25 blur-[60px] pointer-events-none" />

        {/* Detailed Illustrative Dish Graphic */}
        <div className="relative z-10 flex flex-col items-center">
          <svg
            className="w-48 h-48 sm:w-56 sm:h-56 drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Illustrative artwork representing ${analysis.mealTitle}`}
          >
            {/* Outer Plate Shadow & Rim */}
            <circle
              cx="100"
              cy="100"
              r="92"
              fill="#130a21"
              stroke="#a855f7"
              strokeWidth="2.5"
              opacity="0.85"
            />
            <circle
              cx="100"
              cy="100"
              r="82"
              fill="#190e2b"
              stroke="#c084fc"
              strokeWidth="1"
              strokeDasharray="4 2"
              opacity="0.6"
            />
            <circle cx="100" cy="100" r="72" fill="#0f071a" />

            {/* Inner Plated Components */}
            {analysis.visualTheme === "thali" && (
              <g>
                {/* 2 Chapatis */}
                <ellipse
                  cx="78"
                  cy="88"
                  rx="28"
                  ry="24"
                  fill="#935b38"
                  opacity="0.85"
                />
                <ellipse
                  cx="72"
                  cy="84"
                  rx="26"
                  ry="22"
                  fill="#b47b4d"
                  opacity="0.9"
                />
                <circle cx="70" cy="80" r="2" fill="#58351a" opacity="0.4" />
                <circle cx="78" cy="85" r="2" fill="#58351a" opacity="0.4" />

                {/* Dal Katori */}
                <circle
                  cx="128"
                  cy="74"
                  r="20"
                  fill="#201138"
                  stroke="#c084fc"
                  strokeWidth="1.5"
                />
                <circle cx="128" cy="74" r="17" fill="#d97706" opacity="0.85" />
                <path
                  d="M125 71 Q128 68 131 71"
                  stroke="#fef08a"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />

                {/* Spinach Sabzi Katori */}
                <circle
                  cx="132"
                  cy="120"
                  r="18"
                  fill="#201138"
                  stroke="#c084fc"
                  strokeWidth="1.5"
                />
                <circle
                  cx="132"
                  cy="120"
                  r="15"
                  fill="#15803d"
                  opacity="0.85"
                />

                {/* Rice Mound */}
                <ellipse
                  cx="88"
                  cy="132"
                  rx="22"
                  ry="16"
                  fill="#f8fafc"
                  opacity="0.9"
                />

                {/* Curd Spot */}
                <circle
                  cx="100"
                  cy="98"
                  r="12"
                  fill="#f1f5f9"
                  opacity="0.95"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
              </g>
            )}

            {analysis.visualTheme === "south-indian" && (
              <g>
                {/* Banana Leaf Base */}
                <path
                  d="M40 100 Q100 45 160 100 Q100 155 40 100 Z"
                  fill="#166534"
                  opacity="0.75"
                />
                <line
                  x1="40"
                  y1="100"
                  x2="160"
                  y2="100"
                  stroke="#22c55e"
                  strokeWidth="1"
                  opacity="0.4"
                />

                {/* Steamed Idlis */}
                <ellipse
                  cx="78"
                  cy="88"
                  rx="20"
                  ry="16"
                  fill="#f8fafc"
                  opacity="0.95"
                />
                <ellipse
                  cx="98"
                  cy="112"
                  rx="20"
                  ry="16"
                  fill="#f8fafc"
                  opacity="0.9"
                />

                {/* Sambar Bowl */}
                <circle
                  cx="132"
                  cy="80"
                  r="18"
                  fill="#201138"
                  stroke="#c084fc"
                  strokeWidth="1.5"
                />
                <circle cx="132" cy="80" r="15" fill="#ea580c" opacity="0.9" />

                {/* Coconut Chutney Bowl */}
                <circle
                  cx="132"
                  cy="124"
                  r="15"
                  fill="#201138"
                  stroke="#c084fc"
                  strokeWidth="1.5"
                />
                <circle cx="132" cy="124" r="12" fill="#f8fafc" opacity="0.9" />
                <circle cx="132" cy="124" r="2" fill="#15803d" />
              </g>
            )}

            {analysis.visualTheme === "breakfast-bowl" && (
              <g>
                {/* Oatmeal Base in Ceramic Bowl */}
                <circle cx="100" cy="100" r="58" fill="#d97706" opacity="0.3" />
                <circle cx="100" cy="100" r="50" fill="#fef3c7" opacity="0.8" />

                {/* Banana Slices */}
                <circle
                  cx="82"
                  cy="85"
                  r="11"
                  fill="#fef08a"
                  stroke="#ca8a04"
                  strokeWidth="1"
                />
                <circle
                  cx="102"
                  cy="78"
                  r="11"
                  fill="#fef08a"
                  stroke="#ca8a04"
                  strokeWidth="1"
                />
                <circle
                  cx="120"
                  cy="88"
                  r="11"
                  fill="#fef08a"
                  stroke="#ca8a04"
                  strokeWidth="1"
                />

                {/* Berries / Seeds */}
                <circle cx="85" cy="118" r="5" fill="#a855f7" />
                <circle cx="98" cy="125" r="6" fill="#c084fc" />
                <circle cx="115" cy="115" r="5" fill="#a855f7" />
                <circle cx="100" cy="102" r="3" fill="#78350f" />
                <circle cx="108" cy="105" r="3" fill="#78350f" />
              </g>
            )}

            {(analysis.visualTheme === "paneer-plate" ||
              analysis.visualTheme === "grain-bowl" ||
              analysis.visualTheme === "wholesome-plate") && (
              <g>
                {/* Base Plate */}
                <ellipse cx="100" cy="100" rx="60" ry="50" fill="#1e1035" />

                {/* Protein Medley / Paneer Cubes */}
                <rect
                  x="75"
                  y="75"
                  width="18"
                  height="18"
                  rx="3"
                  fill="#fef08a"
                  opacity="0.9"
                  transform="rotate(15 84 84)"
                />
                <rect
                  x="98"
                  y="70"
                  width="16"
                  height="16"
                  rx="3"
                  fill="#fef08a"
                  opacity="0.9"
                  transform="rotate(-10 106 78)"
                />
                <rect
                  x="88"
                  y="95"
                  width="17"
                  height="17"
                  rx="3"
                  fill="#fef08a"
                  opacity="0.9"
                  transform="rotate(25 96 103)"
                />

                {/* Vegetable Garnish & Greens */}
                <path
                  d="M115 95 Q135 85 140 110 Q125 125 115 110 Z"
                  fill="#22c55e"
                  opacity="0.85"
                />
                <path
                  d="M60 105 Q70 125 90 120 Q80 135 60 125 Z"
                  fill="#ea580c"
                  opacity="0.8"
                />
                <circle cx="120" cy="115" r="3" fill="#ef4444" />
                <circle cx="126" cy="105" r="3" fill="#ef4444" />
              </g>
            )}
          </svg>

          {/* Illustrative Notice */}
          <span className="mt-3 text-[10px] uppercase font-mono tracking-widest text-[#c084fc]/70 flex items-center gap-1">
            <Info className="w-3 h-3" />
            <span>Representative Illustrative Visualization</span>
          </span>
        </div>
      </div>

      {/* Detected Ingredients Bar */}
      <div className="mt-4 pt-4 border-t border-purple-500/15">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d8b4fe]/80 block mb-2 font-['Cinzel',serif]">
          Identified Meal Components ({analysis.detectedIngredients.length}):
        </span>
        <div className="flex flex-wrap gap-2">
          {analysis.detectedIngredients.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-[#190d2e]/80 px-3 py-1.5 text-xs text-white"
            >
              <span className="font-medium text-[#e9d5ff]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Uncertainty Notice */}
      {analysis.uncertaintyNotes.length > 0 && (
        <div className="mt-4 rounded-xl border border-purple-500/20 bg-[#140a23]/60 p-3 text-xs text-[#d8b4fe]/75 leading-relaxed font-sans">
          <span className="text-white font-semibold">Observation: </span>
          {analysis.uncertaintyNotes.join(" ")}
        </div>
      )}
    </div>
  );
}
