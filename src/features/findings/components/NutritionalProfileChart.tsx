import { useState } from "react";
import { Activity, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { type ProfileCategoryScore } from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface NutritionalProfileChartProps {
  scores: ProfileCategoryScore[];
}

export function NutritionalProfileChart({
  scores,
}: NutritionalProfileChartProps) {
  const [activePointIndex, setActivePointIndex] = useState<number | null>(null);

  // SVG Chart Dimensions
  const width = 640;
  const height = 280;
  const paddingX = 60;
  const paddingY = 40;
  const innerWidth = width - paddingX * 2;
  const innerHeight = height - paddingY * 2;

  // Compute points
  const points = scores.map((score, index) => {
    const x = paddingX + (index / (scores.length - 1)) * innerWidth;
    // Invert y because SVG y goes downwards (0 is top, height is bottom)
    const y = paddingY + innerHeight - (score.numericScore / 100) * innerHeight;
    return { x, y, score };
  });

  // Construct smooth cubic bezier path for line and area fill
  const linePath = points.reduce((path, pt, i, arr) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = arr[i - 1];
    const cpX = (prev.x + pt.x) / 2;
    return `${path} C ${cpX} ${prev.y}, ${cpX} ${pt.y}, ${pt.x} ${pt.y}`;
  }, "");

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  // Categorize well represented vs less represented
  const highRepresented = scores.filter(
    (s) => s.level === "High" || s.level === "Moderate"
  );
  const lowRepresented = scores.filter(
    (s) => s.level === "Low/Underrepresented" || s.level === "Mild"
  );

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/25 bg-[#0e0819]/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
      {/* Chart Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-purple-500/15 gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-400/30 bg-[#1e0f36] text-[#c084fc]">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold tracking-wide text-white">
              Nutritional Contribution Profile
            </h4>
            <p className="text-xs text-[#d8b4fe]/75 font-sans">
              Qualitative overview based on detected meal composition
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
        <div className="min-w-[580px]">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible select-none"
            role="region"
            aria-label="Nutritional Contribution Profile Line Graph"
          >
            <defs>
              {/* Violet Area Gradient */}
              <linearGradient
                id="violetAreaGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#9333ea" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#07050a" stopOpacity="0.0" />
              </linearGradient>

              {/* Glowing Line Filter */}
              <filter
                id="violetLineGlow"
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
                  floodOpacity="0.6"
                />
              </filter>
            </defs>

            {/* Background Grid Lines & Qualitative Level Labels */}
            {[
              { level: "High", score: 80, y: paddingY + innerHeight * 0.2 },
              { level: "Moderate", score: 50, y: paddingY + innerHeight * 0.5 },
              {
                level: "Mild / Trace",
                score: 20,
                y: paddingY + innerHeight * 0.8,
              },
            ].map((grid, idx) => (
              <g key={idx}>
                <line
                  x1={paddingX}
                  y1={grid.y}
                  x2={width - paddingX}
                  y2={grid.y}
                  stroke="#a855f7"
                  strokeWidth="0.75"
                  strokeDasharray="4 4"
                  opacity="0.25"
                />
                <text
                  x={paddingX - 10}
                  y={grid.y + 4}
                  fill="#c084fc"
                  fontSize="10"
                  fontFamily="sans-serif"
                  textAnchor="end"
                  opacity="0.6"
                >
                  {grid.level}
                </text>
              </g>
            ))}

            {/* Base axis line */}
            <line
              x1={paddingX}
              y1={height - paddingY}
              x2={width - paddingX}
              y2={height - paddingY}
              stroke="#c084fc"
              strokeWidth="1.2"
              opacity="0.3"
            />

            {/* Gradient Fill Beneath Line */}
            <path d={areaPath} fill="url(#violetAreaGradient)" />

            {/* The Violet Line */}
            <path
              d={linePath}
              fill="none"
              stroke="#c084fc"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#violetLineGlow)"
            />

            {/* Data Nodes & Interactive Hover Points */}
            {points.map((pt, idx) => {
              const isActive = activePointIndex === idx;
              return (
                <g
                  key={idx}
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    setActivePointIndex(idx);
                    playMenuClickSound();
                  }}
                  onClick={() => {
                    setActivePointIndex(idx);
                    playMenuClickSound();
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${pt.score.category}: ${pt.score.level}`}
                >
                  {/* Outer Pulsing Halo */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isActive ? "11" : "7"}
                    fill="#170c2a"
                    stroke={isActive ? "#ffffff" : "#c084fc"}
                    strokeWidth={isActive ? "3" : "2"}
                    className="transition-all duration-200"
                  />
                  {/* Inner Core Dot */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isActive ? "5" : "3"}
                    fill={isActive ? "#d8b4fe" : "#ffffff"}
                    className="transition-all duration-200"
                  />

                  {/* X Axis Label */}
                  <text
                    x={pt.x}
                    y={height - paddingY + 22}
                    fill={isActive ? "#ffffff" : "#d8b4fe"}
                    fontSize="11"
                    fontFamily="serif"
                    fontWeight={isActive ? "bold" : "normal"}
                    textAnchor="middle"
                    className="transition-colors duration-200"
                  >
                    {pt.score.category}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Interactive Tooltip Card for Active Point */}
      {activePointIndex !== null && (
        <div className="mb-6 rounded-2xl border border-purple-400/40 bg-[#160b29]/95 p-4 text-xs sm:text-sm text-white shadow-[0_0_25px_rgba(192,132,252,0.25)] animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-2">
            <span className="font-['Cinzel',serif] font-bold text-sm text-[#e9d5ff]">
              {scores[activePointIndex].category}
            </span>
            <span className="font-mono text-xs uppercase px-2.5 py-0.5 rounded-full border border-purple-400/30 bg-[#241242] text-[#c084fc]">
              Contribution: {scores[activePointIndex].level}
            </span>
          </div>

          <p className="text-xs text-[#e2d9f3] mb-2 font-sans">
            {scores[activePointIndex].contextNote}
          </p>

          {scores[activePointIndex].contributingFoods.length > 0 && (
            <div className="text-[11px] text-[#d8b4fe]/85">
              <strong className="text-white">Contributing Ingredients: </strong>
              {scores[activePointIndex].contributingFoods.join(", ")}
            </div>
          )}
        </div>
      )}

      {/* Compact Summary Beneath Graph */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-purple-500/15 pt-5 text-xs text-[#d8b4fe]/85">
        {/* Clearly Represented */}
        <div className="rounded-xl border border-purple-500/20 bg-[#140b25]/60 p-4">
          <div className="flex items-center gap-2 font-['Cinzel',serif] font-bold text-white mb-2">
            <CheckCircle2 className="h-4 w-4 text-[#c084fc]" />
            <span>Well Represented Components</span>
          </div>
          <p className="text-xs text-[#e2d9f3]/80 leading-relaxed font-sans">
            {highRepresented.map((s) => s.category).join(", ")}
          </p>
        </div>

        {/* Less Represented Areas */}
        <div className="rounded-xl border border-purple-500/20 bg-[#140b25]/60 p-4">
          <div className="flex items-center gap-2 font-['Cinzel',serif] font-bold text-white mb-2">
            <AlertCircle className="h-4 w-4 text-[#a855f7]" />
            <span>Areas to Potentially Complement</span>
          </div>
          <p className="text-xs text-[#e2d9f3]/80 leading-relaxed font-sans">
            {lowRepresented.length > 0
              ? lowRepresented.map((s) => s.category).join(", ")
              : "All core categories have positive contribution."}
          </p>
        </div>
      </div>
    </div>
  );
}
