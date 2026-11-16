import { useState } from "react";
import { Activity, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  type ProfileCategoryScore,
  type OccasionEvaluation,
  type MealOccasion,
} from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export interface NutritionalProfileChartProps {
  scores?: ProfileCategoryScore[];
  occasionEvaluation?: OccasionEvaluation;
  occasion?: MealOccasion;
  className?: string;
}

interface ChartPoint {
  category: string;
  qualitativeLevel: "Well represented" | "Moderately represented" | "Less represented";
  contributingFoods: string[];
  contextNote: string;
  normalizedY: number; // 0 to 1 where 1 is top, 0 is bottom
  x: number;
  y: number;
}

const DEFAULT_CATEGORIES: {
  category: string;
  contextNote: string;
}[] = [
  {
    category: "Protein",
    contextNote: "Supplies essential amino acids for tissue repair and enduring satiety.",
  },
  {
    category: "Dietary Fibre",
    contextNote: "Supports smooth digestion and a healthy gut microbiome.",
  },
  {
    category: "Key Vitamins",
    contextNote: "Delivers essential micronutrients, cellular antioxidants, and cofactors.",
  },
  {
    category: "Essential Minerals",
    contextNote: "Trace elements supporting bone integrity, nerve transmission, and fluid balance.",
  },
  {
    category: "Healthy Fats",
    contextNote: "Supports cellular structure and absorption of fat-soluble vitamins.",
  },
  {
    category: "Complex Energy",
    contextNote: "Slow-burning complex carbohydrates providing steady daytime energy.",
  },
];

export function NutritionalProfileChart({
  scores,
  occasionEvaluation,
  occasion: _occasion,
  className = "",
}: NutritionalProfileChartProps) {
  const [activePointIndex, setActivePointIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Chart dimensions
  const width = 680;
  const height = 290;
  const paddingLeft = 145; // Generous space for qualitative labels
  const paddingRight = 45;
  const paddingTop = 45;
  const paddingBottom = 65;
  const innerWidth = width - paddingLeft - paddingRight;
  const innerHeight = height - paddingTop - paddingBottom;

  // Level to normalized vertical position (1.0 = top, 0.0 = bottom)
  const mapLevelToNormalizedY = (
    level: string,
    numericScore?: number
  ): { levelName: "Well represented" | "Moderately represented" | "Less represented"; normY: number } => {
    const normalized = level.toLowerCase();
    if (
      normalized.includes("well") ||
      normalized === "high" ||
      (numericScore !== undefined && numericScore >= 70)
    ) {
      return { levelName: "Well represented", normY: 0.82 };
    }
    if (
      normalized.includes("moderat") ||
      (numericScore !== undefined && numericScore >= 40)
    ) {
      return { levelName: "Moderately represented", normY: 0.5 };
    }
    return { levelName: "Less represented", normY: 0.18 };
  };

  // Extract qualitative points from occasionEvaluation or scores
  const rawItems = occasionEvaluation?.qualitativeScores ?? scores ?? [];

  const points: ChartPoint[] = DEFAULT_CATEGORIES.map((def, index) => {
    const match = rawItems.find(
      (item) => item.category.toLowerCase() === def.category.toLowerCase()
    );

    const contributingFoods = match?.contributingFoods ?? [];
    const contextNote = match?.contextNote || def.contextNote;
    const rawLevel =
      (match && "qualitativeLevel" in match && match.qualitativeLevel) ||
      (match && "level" in match && match.level) ||
      "Less represented";
    const numericScore =
      match && "numericScore" in match ? match.numericScore : undefined;

    const { levelName, normY } = mapLevelToNormalizedY(rawLevel, numericScore);

    const x = paddingLeft + (index / (DEFAULT_CATEGORIES.length - 1)) * innerWidth;
    // Invert Y: 0 in SVG is top
    const y = paddingTop + innerHeight - normY * innerHeight;

    return {
      category: def.category,
      qualitativeLevel: levelName,
      contributingFoods,
      contextNote,
      normalizedY: normY,
      x,
      y,
    };
  });

  // Construct smooth cubic bezier path
  const linePath = points.reduce((path, pt, i, arr) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = arr[i - 1];
    const cpX = (prev.x + pt.x) / 2;
    return `${path} C ${cpX} ${prev.y}, ${cpX} ${pt.y}, ${pt.x} ${pt.y}`;
  }, "");

  // Base Y line where area fill sits
  const baseY = paddingTop + innerHeight;
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${baseY} L ${points[0].x} ${baseY} Z`;

  // Categorize well vs less represented
  const wellRepresented = points.filter(
    (p) => p.qualitativeLevel === "Well represented"
  );
  const moderatelyRepresented = points.filter(
    (p) => p.qualitativeLevel === "Moderately represented"
  );
  const lessRepresented = points.filter(
    (p) => p.qualitativeLevel === "Less represented"
  );

  const handlePointSelect = (idx: number) => {
    playMenuClickSound();
    setActivePointIndex(idx);
  };

  return (
    <div
      className={`mx-auto max-w-4xl rounded-3xl border border-purple-500/25 bg-[#0e0819]/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.15)] ${className}`}
      data-testid="nutritional-profile-chart"
    >
      {/* Chart Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-purple-500/15 gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-400/30 bg-[#1e0f36] text-[#c084fc]">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h4
              data-testid="graph-title"
              className="font-['Cinzel',serif] text-lg sm:text-xl font-bold tracking-wide text-white"
            >
              Meal Composition & Occasion Suitability
            </h4>
            <p className="text-xs text-[#d8b4fe]/75 font-sans">
              Qualitative Nutritional Contribution Profile across core nutritional areas
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] bg-[#1c0f33] px-3 py-1.5 rounded-full border border-purple-500/30 self-start sm:self-auto">
          <Info className="h-3.5 w-3.5" />
          <span>Qualitative Balance Model</span>
        </div>
      </div>

      {/* Responsive SVG Chart */}
      <div className="relative my-6 overflow-x-auto pb-4 no-scrollbar">
        <div className="min-w-[620px]">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible select-none"
            role="region"
            aria-label="Meal Composition and Occasion Suitability Qualitative Line Chart"
          >
            <defs>
              {/* Violet Area Gradient */}
              <linearGradient
                id="violetProfileGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
                <stop offset="55%" stopColor="#9333ea" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#0e0819" stopOpacity="0.0" />
              </linearGradient>

              {/* Glowing Line Filter */}
              <filter
                id="violetProfileGlow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="4"
                  floodColor="#c084fc"
                  floodOpacity="0.65"
                />
              </filter>
            </defs>

            {/* Qualitative Y-Axis Grid Lines & Purely Qualitative Labels */}
            {[
              {
                label: "Well represented",
                y: paddingTop + innerHeight * (1 - 0.82),
              },
              {
                label: "Moderately represented",
                y: paddingTop + innerHeight * (1 - 0.5),
              },
              {
                label: "Less represented",
                y: paddingTop + innerHeight * (1 - 0.18),
              },
            ].map((grid, idx) => (
              <g key={idx}>
                {/* Horizontal reference dashed line */}
                <line
                  x1={paddingLeft}
                  y1={grid.y}
                  x2={width - paddingRight}
                  y2={grid.y}
                  stroke="#a855f7"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
                {/* Qualitative label */}
                <text
                  x={paddingLeft - 14}
                  y={grid.y + 4}
                  fill="#c084fc"
                  fontSize="11"
                  fontFamily="'Cinzel', serif"
                  fontWeight="600"
                  textAnchor="end"
                  opacity="0.85"
                >
                  {grid.label}
                </text>
              </g>
            ))}

            {/* Base Horizontal Axis */}
            <line
              x1={paddingLeft}
              y1={baseY}
              x2={width - paddingRight}
              y2={baseY}
              stroke="#c084fc"
              strokeWidth="1.2"
              opacity="0.35"
            />

            {/* Gradient Fill Beneath Line */}
            <motion.path
              d={areaPath}
              fill="url(#violetProfileGradient)"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Glowing Violet Line */}
            <motion.path
              d={linePath}
              fill="none"
              stroke="#c084fc"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#violetProfileGlow)"
              initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Interactive Data Points along the Curve */}
            {points.map((pt, idx) => {
              const isActive = activePointIndex === idx;
              return (
                <g
                  key={pt.category}
                  className="cursor-pointer focus:outline-none"
                  onClick={() => handlePointSelect(idx)}
                  onMouseEnter={() => {
                    setActivePointIndex(idx);
                    playMenuClickSound();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handlePointSelect(idx);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${pt.category}: ${pt.qualitativeLevel}`}
                >
                  {/* Outer Pulsing Halo */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isActive ? 11 : 7}
                    fill="#170c2a"
                    stroke={isActive ? "#ffffff" : "#c084fc"}
                    strokeWidth={isActive ? 3 : 2}
                    className="transition-all duration-200"
                  />
                  {/* Inner Core Dot */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isActive ? 5 : 3.5}
                    fill={isActive ? "#d8b4fe" : "#ffffff"}
                    className="transition-all duration-200"
                  />

                  {/* Vertical Guideline from Point to X-Axis when Active */}
                  {isActive && (
                    <line
                      x1={pt.x}
                      y1={pt.y + 11}
                      x2={pt.x}
                      y2={baseY}
                      stroke="#c084fc"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity="0.6"
                    />
                  )}

                  {/* X Axis Category Label */}
                  <text
                    x={pt.x}
                    y={baseY + 24}
                    fill={isActive ? "#ffffff" : "#d8b4fe"}
                    fontSize="11"
                    fontFamily="'Cinzel', serif"
                    fontWeight={isActive ? "bold" : "500"}
                    textAnchor="middle"
                    className="transition-colors duration-200"
                  >
                    {pt.category}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Interactive Tooltip Card for Active Point */}
      {activePointIndex !== null && points[activePointIndex] && (
        <div
          data-testid="chart-point-tooltip"
          className="mb-6 rounded-2xl border border-purple-400/40 bg-[#160b29]/95 p-4 text-xs sm:text-sm text-white shadow-[0_0_25px_rgba(192,132,252,0.25)] animate-in fade-in duration-150"
        >
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-2">
            <span className="font-['Cinzel',serif] font-bold text-sm text-[#e9d5ff]">
              {points[activePointIndex].category}
            </span>
            <span className="font-mono text-xs uppercase px-2.5 py-0.5 rounded-full border border-purple-400/30 bg-[#241242] text-[#c084fc]">
              {points[activePointIndex].qualitativeLevel}
            </span>
          </div>

          <p className="text-xs text-[#e2d9f3] mb-2 font-sans leading-relaxed">
            {points[activePointIndex].contextNote}
          </p>

          <div className="text-[11px] text-[#d8b4fe]/85">
            <strong className="text-white">Contributing Ingredients: </strong>
            {points[activePointIndex].contributingFoods.length > 0
              ? points[activePointIndex].contributingFoods.join(", ")
              : "No specific recognized whole food in this meal identified for this area."}
          </div>
        </div>
      )}

      {/* Compact Categorization Summary Beneath Graph */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-purple-500/15 pt-5 text-xs text-[#d8b4fe]/85">
        {/* Well Represented */}
        <div className="rounded-xl border border-purple-500/20 bg-[#140b25]/60 p-4">
          <div className="flex items-center gap-2 font-['Cinzel',serif] font-bold text-white mb-2">
            <CheckCircle2 className="h-4 w-4 text-[#c084fc]" />
            <span>Well Represented Components</span>
          </div>
          <p className="text-xs text-[#e2d9f3]/80 leading-relaxed font-sans">
            {wellRepresented.length > 0
              ? wellRepresented.map((s) => s.category).join(", ")
              : moderatelyRepresented.length > 0
              ? moderatelyRepresented.map((s) => s.category).join(", ")
              : "All categories are currently in educational balance review."}
          </p>
        </div>

        {/* Less Represented Areas */}
        <div className="rounded-xl border border-purple-500/20 bg-[#140b25]/60 p-4">
          <div className="flex items-center gap-2 font-['Cinzel',serif] font-bold text-white mb-2">
            <AlertCircle className="h-4 w-4 text-[#a855f7]" />
            <span>Areas to Potentially Complement</span>
          </div>
          <p className="text-xs text-[#e2d9f3]/80 leading-relaxed font-sans">
            {lessRepresented.length > 0
              ? lessRepresented.map((s) => s.category).join(", ")
              : "All core nutritional areas have positive representation."}
          </p>
        </div>
      </div>
    </div>
  );
}
