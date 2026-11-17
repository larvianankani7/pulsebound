import { useState, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Check, Info } from "lucide-react";
import { type GardenItem as GardenItemType } from "../types";
import { GardenItemIllustration } from "./illustrations/GardenItemIllustrations";
import { GardenItemTooltip } from "./GardenItemTooltip";

export interface GardenItemProps {
  item: GardenItemType;
  isSelected: boolean;
  onToggle: (itemId: string) => void;
  index?: number;
  total?: number;
  placement?: "top" | "bottom";
}

export function GardenItem({
  item,
  isSelected,
  onToggle,
  index = 0,
  placement = "bottom",
}: GardenItemProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Deterministic subtle floating offset based on item index
  const floatDuration = 3.5 + (index % 3) * 0.5;
  const floatDelay = (index % 4) * 0.4;

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  const handleTooltipMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsTooltipHovered(true);
  };

  const handleTooltipMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsTooltipHovered(false);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(item.id);
    }
  };

  const isTooltipVisible = isHovered || isTooltipHovered || showMobileTooltip;

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Interactive Circular Item Container */}
      <div className="relative">
        <motion.button
          ref={triggerRef}
          type="button"
          onClick={() => onToggle(item.id)}
          onKeyDown={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-pressed={isSelected}
          aria-label={`${item.name}, ${isSelected ? "selected" : "not selected"}. Press to toggle selection.`}
          data-testid={`garden-item-node-${item.id}`}
          initial={
            shouldReduceMotion ? { scale: 1 } : { scale: 0.9, opacity: 0 }
          }
          animate={{
            scale: isSelected ? 1.08 : 1,
            opacity: 1,
            y: shouldReduceMotion ? 0 : [-3, 3, -3],
          }}
          transition={{
            y: {
              duration: floatDuration,
              repeat: Infinity,
              delay: floatDelay,
              ease: "easeInOut",
            },
            scale: { duration: 0.2, ease: "easeOut" },
          }}
          whileHover={{ scale: isSelected ? 1.1 : 1.06 }}
          whileTap={{ scale: 0.96 }}
          className={`group relative flex flex-col items-center justify-center w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full p-2 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07050a] ${
            isSelected
              ? "border-[3.5px] border-[#d8b4fe] bg-gradient-to-br from-[#3b1763] via-[#240d42] to-[#120524] shadow-[0_0_30px_rgba(216,180,254,0.65),inset_0_0_15px_rgba(192,132,252,0.4)]"
              : "border-2 border-[#a855f7]/35 bg-gradient-to-br from-[#190c2e]/90 via-[#10061e]/90 to-[#090312]/95 hover:border-[#c084fc]/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Glowing concentric inner ring */}
          <div
            className={`absolute inset-1 rounded-full pointer-events-none transition-opacity duration-300 ${
              isSelected
                ? "border border-white/30 opacity-100"
                : "border border-purple-400/15 opacity-60 group-hover:opacity-100"
            }`}
            aria-hidden="true"
          />

          {/* Selected Checkmark Badge Indicator */}
          {isSelected && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -top-1 -right-1 z-20 w-6 h-6 rounded-full bg-gradient-to-tr from-[#9333ea] to-[#d8b4fe] border border-white flex items-center justify-center shadow-[0_0_12px_#c084fc]"
            >
              <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
            </motion.div>
          )}

          {/* Central Illustrated SVG */}
          <div className="relative z-10 flex items-center justify-center pointer-events-none">
            <GardenItemIllustration id={item.illustrationId} size={42} />
          </div>
        </motion.button>

        {/* Mobile Info Button trigger (tap to inspect) outside button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowMobileTooltip((prev) => !prev);
          }}
          aria-label={`Inspect ${item.name}`}
          data-testid={`inspect-info-${item.id}`}
          className="sm:hidden absolute -bottom-1 -right-1 z-20 w-5 h-5 rounded-full bg-[#1b0a33] border border-purple-400/40 text-purple-300 hover:text-white flex items-center justify-center text-[10px] cursor-pointer"
        >
          <Info className="w-3 h-3" />
        </button>
      </div>

      {/* Item Name Label */}
      <span
        className={`mt-2 text-center text-[11px] sm:text-xs font-['Cinzel',serif] tracking-wider transition-colors duration-200 max-w-[90px] sm:max-w-[105px] truncate font-semibold leading-tight ${
          isSelected
            ? "text-[#f3e8ff] font-bold drop-shadow-[0_0_10px_rgba(216,180,254,0.6)]"
            : "text-[#d8b4fe]/85 group-hover:text-white"
        }`}
      >
        {item.name}
      </span>

      {/* Educational Information Hover/Tap Tooltip (Viewport-aware clamped portal) */}
      <AnimatePresence>
        {isTooltipVisible && (
          <GardenItemTooltip
            item={item}
            placement={placement}
            triggerRef={triggerRef}
            onClose={() => {
              setIsHovered(false);
              setIsTooltipHovered(false);
              setShowMobileTooltip(false);
            }}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
