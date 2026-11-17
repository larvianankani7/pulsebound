import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { type ExploreLevel, type GardenItem as GardenItemType } from "../types";
import { GARDEN_ITEMS } from "../data/gardenItems";
import { GardenItem } from "./GardenItem";
import {
  getDynamicGardenRadius,
  getGardenOrbitCoordinates,
} from "../utils/radialLayout";
import { ConditionIllustration } from "./illustrations/ConditionIllustrations";

export interface GardenRadialLayoutProps {
  level: ExploreLevel;
  selectedItemIds: string[];
  onToggleItem: (itemId: string) => void;
}

export function GardenRadialLayout({
  level,
  selectedItemIds,
  onToggleItem,
}: GardenRadialLayoutProps) {
  const shouldReduceMotion = useReducedMotion();

  // Responsive state: radial on tablet/desktop (>= 640px), clean grid on mobile (< 640px)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items: GardenItemType[] = level.availableItemIds
    .map((id) => GARDEN_ITEMS[id])
    .filter(Boolean);

  const total = items.length;
  const radius = getDynamicGardenRadius(total);

  return (
    <section
      data-testid="garden-stage-section"
      aria-label={`Interactive garden for ${level.conditionName}`}
      className="relative w-full max-w-4xl mx-auto rounded-3xl border border-purple-500/20 bg-gradient-to-b from-[#110723]/80 via-[#0a0416]/85 to-[#07020f]/95 backdrop-blur-xl p-5 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-visible my-2"
    >
      {/* Decorative Stage Accents */}
      <div
        className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {!isMobile ? (
        /* =========================================================
           DESKTOP & TABLET RADIAL CIRCULAR COMPOSITION
           ========================================================= */
        <div
          data-testid="garden-radial-stage"
          className="relative mx-auto w-[520px] h-[520px] md:w-[570px] md:h-[570px] flex items-center justify-center scale-[0.92] sm:scale-100 origin-center my-4 overflow-visible"
        >
          {/* Concentric Decorative Garden Rings */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[470px] h-[470px] md:w-[490px] md:h-[490px] rounded-full border border-purple-400/20 border-dashed pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[370px] md:h-[370px] rounded-full border border-purple-500/15 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-900/25 via-[#a855f7]/15 to-purple-900/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* EXACT GEOMETRIC CENTRE: Central Condition Vessel */}
          <div
            data-testid="central-condition-container"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-auto select-none"
          >
            <motion.div
              initial={
                shouldReduceMotion ? { scale: 1 } : { scale: 0.9, opacity: 0 }
              }
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border border-[#c084fc]/45 bg-gradient-to-br from-[#1d0e38]/95 via-[#130727]/95 to-[#090314]/98 backdrop-blur-xl shadow-[0_0_45px_rgba(168,85,247,0.35)] flex flex-col items-center justify-center p-4 text-center ring-1 ring-white/10 group transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a855f7]/20 via-transparent to-[#c084fc]/10 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-[1px] rounded-full border border-white/15 pointer-events-none"
                aria-hidden="true"
              />

              {/* Condition Icon Accent */}
              <div className="relative z-10 mb-1 opacity-85">
                <ConditionIllustration id={level.conditionId} size={36} />
              </div>

              {/* Subtitle */}
              <span className="relative z-10 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#c084fc] font-semibold mb-1 drop-shadow-sm">
                Active Condition
              </span>

              {/* Flowing Violet Gradient Wave Condition Title */}
              <h2
                data-testid="central-condition-title"
                className="relative z-10 font-['Cinzel',serif] text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#d8b4fe] via-[#f3e8ff] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(192,132,252,0.45)] max-w-[140px] sm:max-w-[160px] md:max-w-[170px] break-words"
              >
                {level.conditionName}
              </h2>

              {/* Selection Count Pill */}
              <span className="relative z-10 mt-1.5 text-[9px] sm:text-[10px] text-[#d8b4fe]/85 tracking-wider font-mono">
                {selectedItemIds.length} Selected
              </span>
            </motion.div>
          </div>

          {/* SURROUNDING ORBITING ITEMS (Radial Coordinates) */}
          {items.map((item, idx) => {
            const { x, y, placement } = getGardenOrbitCoordinates(
              idx,
              total,
              radius
            );

            return (
              <div
                key={item.id}
                data-testid={`orbit-garden-node-${item.id}`}
                className="absolute z-30"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <GardenItem
                  item={item}
                  isSelected={selectedItemIds.includes(item.id)}
                  onToggle={onToggleItem}
                  index={idx}
                  total={total}
                  placement={placement}
                />
              </div>
            );
          })}
        </div>
      ) : (
        /* =========================================================
           MOBILE RESPONSIVE CLEAN GRID ARRANGEMENT (< 640px)
           ========================================================= */
        <div
          data-testid="garden-mobile-stage"
          className="flex flex-col items-center w-full my-2"
        >
          {/* Central Condition Vessel */}
          <div
            data-testid="central-condition-container"
            className="relative w-44 h-44 rounded-full border border-[#c084fc]/45 bg-gradient-to-br from-[#1d0e38]/95 via-[#130727]/95 to-[#090314]/98 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.35)] flex flex-col items-center justify-center p-4 text-center ring-1 ring-white/10 mb-8 mx-auto"
          >
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a855f7]/20 via-transparent to-[#c084fc]/10 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 mb-1 opacity-85">
              <ConditionIllustration id={level.conditionId} size={32} />
            </div>

            <span className="relative z-10 text-[9px] font-mono uppercase tracking-[0.25em] text-[#c084fc] font-semibold mb-0.5">
              Active Condition
            </span>

            <h2
              data-testid="central-condition-title"
              className="relative z-10 font-['Cinzel',serif] text-base font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#d8b4fe] via-[#f3e8ff] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(192,132,252,0.45)] max-w-[130px] break-words"
            >
              {level.conditionName}
            </h2>

            <span className="relative z-10 mt-1 text-[9px] text-[#d8b4fe]/85 tracking-wider font-mono">
              {selectedItemIds.length} Selected
            </span>
          </div>

          {/* Clean Non-Overlapping Responsive Grid of Items Beneath */}
          <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 sm:gap-6 w-full max-w-sm mx-auto justify-items-center">
            {items.map((item, idx) => (
              <GardenItem
                key={item.id}
                item={item}
                isSelected={selectedItemIds.includes(item.id)}
                onToggle={onToggleItem}
                index={idx}
                total={total}
                placement="bottom"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
