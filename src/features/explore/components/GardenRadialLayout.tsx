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
      className="relative w-full max-w-4xl mx-auto rounded-3xl border border-red-900/35 bg-gradient-to-b from-[#180205]/85 via-[#0e0103]/90 to-[#050001]/95 backdrop-blur-xl p-5 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(227,38,54,0.2)] overflow-visible my-2"
    >
      {/* Decorative Stage Accents */}
      <div
        className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(227,38,54,0.09),transparent_70%)] pointer-events-none"
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
          {/* Concentric Decorative Sector Rings */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[470px] h-[470px] md:w-[490px] md:h-[490px] rounded-full border border-red-600/25 border-dashed pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[370px] md:h-[370px] rounded-full border border-red-700/20 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-red-950/25 via-[#e11d48]/15 to-red-950/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* EXACT GEOMETRIC CENTRE: Central Condition/Sector Vessel */}
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
              className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border border-red-500/50 bg-gradient-to-br from-[#2a0409]/95 via-[#160205]/95 to-[#080002]/98 backdrop-blur-xl shadow-[0_0_45px_rgba(227,38,54,0.45)] flex flex-col items-center justify-center p-4 text-center ring-1 ring-white/10 group transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-[#e11d48]/20 via-transparent to-[#fb7185]/10 pointer-events-none"
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
              <span className="relative z-10 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-red-400 font-semibold mb-1 drop-shadow-sm">
                Active Protocol
              </span>

              {/* Flowing Crimson Gradient Condition Title */}
              <h2
                data-testid="central-condition-title"
                className="relative z-10 font-['Cinzel',serif] text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#ffe4e6] via-[#fda4af] to-[#ff4d6d] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(227,38,54,0.5)] max-w-[140px] sm:max-w-[160px] md:max-w-[170px] break-words"
              >
                {level.conditionName}
              </h2>

              {/* Selection Count Pill */}
              <span className="relative z-10 mt-1.5 text-[9px] sm:text-[10px] text-red-300/85 tracking-wider font-mono">
                {selectedItemIds.length} Selected
              </span>
            </motion.div>
          </div>

          {/* SURROUNDING ORBITING ITEMS */}
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
           MOBILE RESPONSIVE GRID (< 640px)
           ========================================================= */
        <div
          data-testid="garden-mobile-stage"
          className="flex flex-col items-center w-full my-2"
        >
          {/* Central Condition Vessel */}
          <div
            data-testid="central-condition-container"
            className="relative w-44 h-44 rounded-full border border-red-500/50 bg-gradient-to-br from-[#2a0409]/95 via-[#160205]/95 to-[#080002]/98 backdrop-blur-xl shadow-[0_0_40px_rgba(227,38,54,0.45)] flex flex-col items-center justify-center p-4 text-center ring-1 ring-white/10 mb-8 mx-auto"
          >
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-b from-[#e11d48]/20 via-transparent to-[#fb7185]/10 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 mb-1 opacity-85">
              <ConditionIllustration id={level.conditionId} size={32} />
            </div>

            <span className="relative z-10 text-[9px] font-mono uppercase tracking-[0.25em] text-red-400 font-semibold mb-0.5">
              Active Protocol
            </span>

            <h2
              data-testid="central-condition-title"
              className="relative z-10 font-['Cinzel',serif] text-base font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#ffe4e6] via-[#fda4af] to-[#ff4d6d] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(227,38,54,0.5)] max-w-[130px] break-words"
            >
              {level.conditionName}
            </h2>

            <span className="relative z-10 mt-1 text-[9px] text-red-300/85 tracking-wider font-mono">
              {selectedItemIds.length} Selected
            </span>
          </div>

          {/* Clean Non-Overlapping Grid */}
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

export default GardenRadialLayout;
