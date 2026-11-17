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
          className={`group relative flex flex-col items-center justify-center w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full p-2 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
            isSelected
              ? "border-[3.5px] border-red-400 bg-gradient-to-br from-[#4a0008] via-[#2b0005] to-[#140002] shadow-[0_0_30px_rgba(227,38,54,0.65),inset_0_0_15px_rgba(255,77,109,0.4)]"
              : "border-2 border-red-900/40 bg-gradient-to-br from-[#1a0205]/90 via-[#0e0103]/90 to-[#050001]/95 hover:border-red-500/70 hover:shadow-[0_0_20px_rgba(227,38,54,0.35)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Glowing concentric inner ring */}
          <div
            className={`absolute inset-1 rounded-full pointer-events-none transition-opacity duration-300 ${
              isSelected
                ? "border border-white/30 opacity-100"
                : "border border-red-500/15 opacity-60 group-hover:opacity-100"
            }`}
            aria-hidden="true"
          />

          {/* Selected Checkmark Badge Indicator */}
          {isSelected && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -top-1 -right-1 z-20 w-6 h-6 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 border border-white flex items-center justify-center shadow-[0_0_12px_#e32636]"
            >
              <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
            </motion.div>
          )}

          {/* Central Illustrated SVG */}
          <div className="relative z-10 flex items-center justify-center pointer-events-none">
            <GardenItemIllustration id={item.illustrationId} size={42} />
          </div>
        </motion.button>

        {/* Mobile Info Button trigger */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowMobileTooltip((prev) => !prev);
          }}
          aria-label={`Inspect ${item.name}`}
          data-testid={`inspect-info-${item.id}`}
          className="sm:hidden absolute -bottom-1 -right-1 z-20 w-5 h-5 rounded-full bg-[#200307] border border-red-700/40 text-red-300 hover:text-white flex items-center justify-center text-[10px] cursor-pointer"
        >
          <Info className="w-3 h-3" />
        </button>
      </div>

      {/* Item Name Label */}
      <span
        className={`mt-2 text-center text-[11px] sm:text-xs font-['Cinzel',serif] tracking-wider transition-colors duration-200 max-w-[90px] sm:max-w-[105px] truncate font-semibold leading-tight ${
          isSelected
            ? "text-[#ffe4e6] font-bold drop-shadow-[0_0_10px_rgba(255,77,109,0.6)]"
            : "text-red-200/85 group-hover:text-white"
        }`}
      >
        {item.name}
      </span>

      {/* Tooltip */}
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

export default GardenItem;
