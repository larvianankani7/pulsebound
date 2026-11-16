import React from "react";

export interface IllustrationContainerProps {
  size?: number | string;
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  pulse?: boolean;
  ariaLabel?: string;
  role?: string;
  onClick?: () => void;
  title?: string;
}

/**
 * IllustrationContainer
 *
 * A circular, luminous vessel styled in SYLVARA's dark lavender, deep violet,
 * and obsidian aesthetic. Serves as the display pedestal for nutrient and food vector illustrations.
 */
export const IllustrationContainer: React.FC<IllustrationContainerProps> = ({
  size = 64,
  children,
  className = "",
  glow = true,
  pulse = false,
  ariaLabel,
  role = "presentation",
  onClick,
  title,
}) => {
  const dimensionStyle: React.CSSProperties =
    typeof size === "number"
      ? { width: `${size}px`, height: `${size}px`, minWidth: `${size}px`, minHeight: `${size}px` }
      : { width: size, height: size };

  return (
    <div
      role={role}
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      style={dimensionStyle}
      className={`relative inline-flex items-center justify-center rounded-full border border-[#c084fc]/40 bg-gradient-to-br from-[#1a0e33]/90 via-[#130a24]/85 to-[#0c0617]/95 shadow-[0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-md transition-all duration-300 hover:border-[#d8b4fe] hover:shadow-[0_0_25px_rgba(192,132,252,0.4)] ${
        pulse ? "animate-pulse" : ""
      } ${onClick ? "cursor-pointer active:scale-95" : ""} ${className}`}
    >
      {/* Ambient background glow */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a855f7]/10 via-transparent to-[#c084fc]/5 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Subtle inner specular rim */}
      <div
        className="absolute inset-[1px] rounded-full border border-white/10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Embedded illustration */}
      <div className="relative z-10 flex items-center justify-center w-full h-full p-2">
        {children}
      </div>
    </div>
  );
};
