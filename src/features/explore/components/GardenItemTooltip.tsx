import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "motion/react";
import { AlertCircle, CheckCircle2, Utensils, X } from "lucide-react";
import { type GardenItem } from "../types";

export interface GardenItemTooltipProps {
  item: GardenItem;
  placement?: "top" | "bottom";
  triggerRef?: React.RefObject<HTMLElement | null>;
  onClose?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface TooltipPosition {
  isMobile: boolean;
  left: number;
  top?: number;
  bottom?: number;
  maxHeight: number;
  resolvedPlacement: "top" | "bottom";
  caretLeft: number;
}

function calculateTooltipPosition(
  triggerEl: HTMLElement | null | undefined,
  defaultPlacement: "top" | "bottom" = "top"
): TooltipPosition {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      left: 16,
      maxHeight: 460,
      resolvedPlacement: defaultPlacement,
      caretLeft: 160,
    };
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // 1. Mobile & narrow screens (< 640px): Centered responsive floating panel / bottom sheet
  if (vw < 640) {
    return {
      isMobile: true,
      left: 16,
      maxHeight: Math.min(520, Math.floor(vh * 0.82)),
      resolvedPlacement: "bottom",
      caretLeft: 160,
    };
  }

  // 2. Desktop & Tablet screens: Viewport-aware clamped positioning
  const rect = triggerEl?.getBoundingClientRect() ?? {
    top: 150,
    bottom: 230,
    left: Math.max(16, vw / 2 - 40),
    right: Math.min(vw - 16, vw / 2 + 40),
    width: 80,
    height: 80,
  };

  const cardWidth = Math.min(320, vw - 32);
  const triggerCenterX = rect.left + rect.width / 2;

  // Horizontal bounds: center horizontally on trigger, clamp to viewport edges
  const MARGIN_X = 16;
  let left = triggerCenterX - cardWidth / 2;
  if (left < MARGIN_X) {
    left = MARGIN_X;
  } else if (left + cardWidth > vw - MARGIN_X) {
    left = vw - MARGIN_X - cardWidth;
  }

  // Caret horizontal offset relative to the card container
  const caretLeft = Math.max(
    24,
    Math.min(cardWidth - 24, triggerCenterX - left)
  );

  // Vertical bounds & collision handling
  // Reserve space for sticky top navbar (~64px) + margin
  const NAVBAR_HEIGHT = 68;
  const MARGIN_Y = 16;
  const spaceAbove = rect.top - NAVBAR_HEIGHT - 12;
  const spaceBelow = vh - rect.bottom - MARGIN_Y - 12;
  const idealHeight = 440;

  let resolvedPlacement: "top" | "bottom";
  let top: number | undefined;
  let bottom: number | undefined;
  let maxHeight: number;

  if (spaceAbove >= idealHeight) {
    // Plenty of space above the item
    resolvedPlacement = "top";
    bottom = vh - rect.top + 10;
    maxHeight = Math.min(idealHeight, spaceAbove);
  } else if (spaceBelow >= idealHeight) {
    // Plenty of space below the item
    resolvedPlacement = "bottom";
    top = rect.bottom + 10;
    maxHeight = Math.min(idealHeight, spaceBelow);
  } else if (spaceBelow >= spaceAbove) {
    // Screen height constrained: bottom has more clearance
    resolvedPlacement = "bottom";
    top = rect.bottom + 10;
    maxHeight = Math.max(200, spaceBelow);
  } else {
    // Screen height constrained: top has more clearance
    resolvedPlacement = "top";
    bottom = vh - rect.top + 10;
    maxHeight = Math.max(200, spaceAbove);
  }

  return {
    isMobile: false,
    left,
    top,
    bottom,
    maxHeight,
    resolvedPlacement,
    caretLeft,
  };
}

export function GardenItemTooltip({
  item,
  placement = "top",
  triggerRef,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: GardenItemTooltipProps) {
  const shouldReduceMotion = useReducedMotion();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<TooltipPosition>(() =>
    calculateTooltipPosition(null, placement)
  );

  // Measure anchor element immediately after DOM layout before paint
  useLayoutEffect(() => {
    setPosition(calculateTooltipPosition(triggerRef?.current, placement));
  }, [triggerRef, placement]);

  // Dynamic recalculation on window resize & scroll
  useEffect(() => {
    const handleUpdate = () => {
      setPosition(calculateTooltipPosition(triggerRef?.current, placement));
    };

    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate, true);
    return () => {
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate, true);
    };
  }, [triggerRef, placement]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  // =========================================================
  // 1. MOBILE RESPONSIVE MODAL PANEL (< 640px)
  // =========================================================
  if (position.isMobile) {
    return createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.name} details`}
      >
        <motion.div
          ref={tooltipRef}
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.95, y: 16 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{ maxHeight: `${position.maxHeight}px` }}
          className="relative w-full max-w-sm flex flex-col rounded-2xl border border-purple-400/40 bg-gradient-to-b from-[#1c0d38]/98 via-[#130727]/98 to-[#0a0316]/98 p-4 text-[#f3e8ff] shadow-[0_0_35px_rgba(168,85,247,0.35)] backdrop-blur-2xl"
          role="tooltip"
        >
          {/* Category & Name Header */}
          <div className="flex items-start justify-between gap-2 border-b border-purple-500/20 pb-2 mb-2.5 shrink-0">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#c084fc] font-semibold">
                {item.category.toUpperCase()} CHOICE
              </span>
              <h4 className="font-['Cinzel',serif] text-base font-bold text-white tracking-wide">
                {item.name}
              </h4>
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="text-purple-400 hover:text-white p-1 text-sm rounded-lg hover:bg-purple-900/40 transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Internally Scrollable Educational Content */}
          <div className="space-y-2.5 text-xs leading-relaxed overflow-y-auto pr-1">
            {/* Nutrients & Active Compounds */}
            {item.nutrients && item.nutrients.length > 0 && (
              <div>
                <span className="font-semibold text-purple-300/90 text-[11px] block mb-1">
                  Key Compounds & Nutrients:
                </span>
                <div className="flex flex-wrap gap-1">
                  {item.nutrients.map((n, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[10px] text-purple-200"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* General Benefits */}
            <div className="text-purple-100/90 text-[11px]">
              <span className="font-semibold text-purple-300/90 text-[11px]">
                Benefits:{" "}
              </span>
              {item.benefits}
            </div>

            {/* Traditional Uses (Clearly Labeled) */}
            {item.traditionalUseNotes && (
              <div className="p-2 rounded-xl bg-[#261142]/50 border border-purple-500/20 text-[11px] text-purple-200/90">
                <span className="font-semibold text-amber-300 text-[10px] uppercase tracking-wider block mb-0.5">
                  Traditional Use (Folklore):
                </span>
                {item.traditionalUseNotes}
              </div>
            )}

            {/* Scientific Evidence Description */}
            <div className="flex items-start gap-1.5 text-[11px] text-emerald-200/90">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-emerald-300">
                  Evidence Note:{" "}
                </span>
                {item.evidenceNote}
              </div>
            </div>

            {/* Food Examples */}
            {item.foodExamples && item.foodExamples.length > 0 && (
              <div className="flex items-start gap-1.5 text-[10px] text-purple-300/80">
                <Utensils className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
                <span>Found in: {item.foodExamples.join(", ")}</span>
              </div>
            )}

            {/* Safety Limitations */}
            {item.safetyNotes && (
              <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-rose-950/30 border border-rose-500/30 text-[10px] text-rose-200/90">
                <AlertCircle className="w-3 h-3 text-rose-400 shrink-0 mt-0.5" />
                <span>{item.safetyNotes}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>,
      document.body
    );
  }

  // =========================================================
  // 2. DESKTOP & TABLET VIEWPORT-CLAMPED ANCHORED TOOLTIP
  // =========================================================
  const isTop = position.resolvedPlacement === "top";

  return createPortal(
    <motion.div
      ref={tooltipRef}
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: isTop ? 10 : -10, scale: 0.96 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.96 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        left: `${position.left}px`,
        ...(position.top !== undefined ? { top: `${position.top}px` } : {}),
        ...(position.bottom !== undefined
          ? { bottom: `${position.bottom}px` }
          : {}),
        width: "320px",
        maxHeight: `${position.maxHeight}px`,
      }}
      className="z-50 flex flex-col rounded-2xl border border-purple-400/40 bg-gradient-to-b from-[#1c0d38]/98 via-[#130727]/98 to-[#0a0316]/98 p-4 text-[#f3e8ff] shadow-[0_0_35px_rgba(168,85,247,0.35)] backdrop-blur-2xl pointer-events-auto select-none"
      role="tooltip"
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Category & Name Header */}
      <div className="flex items-start justify-between gap-2 border-b border-purple-500/20 pb-2 mb-2.5 shrink-0">
        <div>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#c084fc] font-semibold">
            {item.category.toUpperCase()} CHOICE
          </span>
          <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-white tracking-wide">
            {item.name}
          </h4>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-purple-400 hover:text-white p-1 text-xs rounded-md hover:bg-purple-900/40 transition-colors"
            aria-label="Close details"
          >
            ✕
          </button>
        )}
      </div>

      {/* Internally Scrollable Educational Content Container */}
      <div className="space-y-2 text-xs leading-relaxed overflow-y-auto pr-1">
        {/* Nutrients & Active Compounds */}
        {item.nutrients && item.nutrients.length > 0 && (
          <div>
            <span className="font-semibold text-purple-300/90 text-[11px] block mb-1">
              Key Compounds & Nutrients:
            </span>
            <div className="flex flex-wrap gap-1">
              {item.nutrients.map((n, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[10px] text-purple-200"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* General Benefits */}
        <div className="text-purple-100/90 text-[11px]">
          <span className="font-semibold text-purple-300/90 text-[11px]">
            Benefits:{" "}
          </span>
          {item.benefits}
        </div>

        {/* Traditional Uses (Clearly Labeled) */}
        {item.traditionalUseNotes && (
          <div className="p-2 rounded-xl bg-[#261142]/50 border border-purple-500/20 text-[11px] text-purple-200/90">
            <span className="font-semibold text-amber-300 text-[10px] uppercase tracking-wider block mb-0.5">
              Traditional Use (Folklore):
            </span>
            {item.traditionalUseNotes}
          </div>
        )}

        {/* Scientific Evidence Description */}
        <div className="flex items-start gap-1.5 text-[11px] text-emerald-200/90">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-emerald-300">
              Evidence Note:{" "}
            </span>
            {item.evidenceNote}
          </div>
        </div>

        {/* Food Examples */}
        {item.foodExamples && item.foodExamples.length > 0 && (
          <div className="flex items-start gap-1.5 text-[10px] text-purple-300/80">
            <Utensils className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
            <span>Found in: {item.foodExamples.join(", ")}</span>
          </div>
        )}

        {/* Safety Limitations */}
        {item.safetyNotes && (
          <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-rose-950/30 border border-rose-500/30 text-[10px] text-rose-200/90">
            <AlertCircle className="w-3 h-3 text-rose-400 shrink-0 mt-0.5" />
            <span>{item.safetyNotes}</span>
          </div>
        )}
      </div>

      {/* Dynamic Tooltip caret (anchored towards triggering item) */}
      <div
        style={{ left: `${position.caretLeft}px` }}
        className={`absolute -translate-x-1/2 w-3 h-3 bg-[#130727] border-purple-400/40 rotate-45 pointer-events-none ${
          isTop
            ? "-bottom-[6px] border-b border-r"
            : "-top-[6px] border-t border-l"
        }`}
        aria-hidden="true"
      />
    </motion.div>,
    document.body
  );
}
