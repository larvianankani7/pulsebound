import React from "react";

export interface NutrientIllustrationProps {
  id: string;
  size?: number | string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Normalizes input nutrient IDs to a standard canonical key.
 */
export function normalizeNutrientId(id: string): string {
  const clean = id
    .toLowerCase()
    .trim()
    .replace(/^nutrient\./, "")
    .replace(/_/g, "-");

  switch (clean) {
    case "complex-carbs":
    case "carbohydrates":
    case "carbs":
      return "complex-carbs";
    case "protein":
    case "proteins":
      return "protein";
    case "healthy-fats":
    case "fats":
    case "lipids":
      return "healthy-fats";
    case "fibre":
    case "fiber":
      return "fibre";
    case "vitamin-a":
      return "vitamin-a";
    case "vitamin-b-complex":
    case "b-complex":
    case "vitamin-b":
      return "vitamin-b-complex";
    case "folate":
    case "vitamin-b9":
    case "b9":
      return "folate";
    case "vitamin-c":
      return "vitamin-c";
    case "vitamin-d":
      return "vitamin-d";
    case "vitamin-e":
      return "vitamin-e";
    case "vitamin-k":
      return "vitamin-k";
    case "iron":
      return "iron";
    case "calcium":
      return "calcium";
    case "potassium":
      return "potassium";
    case "magnesium":
      return "magnesium";
    case "zinc":
      return "zinc";
    case "phosphorus":
      return "phosphorus";
    default:
      return clean;
  }
}

/**
 * Vector Illustration component for all 17 verified nutrients in SYLVARA.
 * Styled in dark lavender, deep violet, obsidian, and rich botanical/crystalline accents.
 */
export const NutrientIllustration: React.FC<NutrientIllustrationProps> = ({
  id,
  size = 64,
  className = "",
  ariaLabel,
}) => {
  const canonicalId = normalizeNutrientId(id);

  switch (canonicalId) {
    // 1. Complex Carbohydrates: Golden wheat & rice stalks with awns & grains
    case "complex-carbs":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Complex Carbohydrates: Golden wheat and rice stalks"
          }
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient
              id="syl-carb-stalk"
              x1="50"
              y1="90"
              x2="50"
              y2="15"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="40%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="syl-carb-grain" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <radialGradient
              id="syl-carb-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#a855f7" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-carb-glow)" />

          {/* Golden sunburst rays */}
          <path
            d="M50 12 L50 8 M68 18 L71 14 M32 18 L29 14 M78 32 L82 30 M22 32 L18 30"
            stroke="#fde68a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Left arched wheat stalk */}
          <path
            d="M48 88 Q45 55 35 25"
            stroke="url(#syl-carb-stalk)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Grains on left stalk */}
          <g transform="translate(0,0)">
            <ellipse
              cx="37"
              cy="27"
              rx="4.5"
              ry="7"
              transform="rotate(-35 37 27)"
              fill="url(#syl-carb-grain)"
              stroke="#fef08a"
              strokeWidth="0.8"
            />
            <path
              d="M35 20 Q33 12 28 8"
              stroke="#fde68a"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <ellipse
              cx="42"
              cy="33"
              rx="4.5"
              ry="7"
              transform="rotate(35 42 33)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
            <path
              d="M44 26 Q47 18 52 14"
              stroke="#fde68a"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <ellipse
              cx="38"
              cy="41"
              rx="4.5"
              ry="7.5"
              transform="rotate(-30 38 41)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
            <path
              d="M36 34 Q32 26 26 22"
              stroke="#fde68a"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <ellipse
              cx="44"
              cy="48"
              rx="4.5"
              ry="7.5"
              transform="rotate(30 44 48)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
            <path
              d="M46 41 Q51 34 58 31"
              stroke="#fde68a"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <ellipse
              cx="41"
              cy="56"
              rx="4.5"
              ry="7"
              transform="rotate(-25 41 56)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
            <ellipse
              cx="46"
              cy="63"
              rx="4.5"
              ry="7"
              transform="rotate(25 46 63)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
          </g>

          {/* Right arched rice stalk */}
          <path
            d="M52 88 Q56 58 67 30"
            stroke="url(#syl-carb-stalk)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Grains on right stalk */}
          <g transform="translate(0,0)">
            <ellipse
              cx="66"
              cy="31"
              rx="4"
              ry="6.5"
              transform="rotate(30 66 31)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
            <path
              d="M68 25 Q74 16 79 12"
              stroke="#fde68a"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <ellipse
              cx="59"
              cy="38"
              rx="4"
              ry="6.5"
              transform="rotate(-30 59 38)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
            <ellipse
              cx="66"
              cy="46"
              rx="4"
              ry="6.5"
              transform="rotate(25 66 46)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
            <path
              d="M68 40 Q76 34 82 32"
              stroke="#fde68a"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <ellipse
              cx="58"
              cy="53"
              rx="4"
              ry="6.5"
              transform="rotate(-25 58 53)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
            <ellipse
              cx="64"
              cy="62"
              rx="4"
              ry="6.5"
              transform="rotate(20 64 62)"
              fill="url(#syl-carb-grain)"
              stroke="#fde68a"
              strokeWidth="0.8"
            />
          </g>

          {/* Botanical leaves at base */}
          <path
            d="M50 82 Q30 80 20 68 Q32 66 48 76"
            fill="#ca8a04"
            opacity="0.8"
          />
          <path
            d="M50 82 Q70 82 80 72 Q68 68 52 76"
            fill="#d97706"
            opacity="0.8"
          />

          {/* Subtle lavender ribbon filament binding stalks */}
          <path
            d="M44 80 C48 78 52 78 56 80 C54 83 46 83 44 80 Z"
            fill="#c084fc"
          />
          <circle cx="50" cy="80.5" r="1.5" fill="#f3e8ff" />

          {/* Sparkles */}
          <circle cx="28" cy="22" r="1" fill="#fef08a" />
          <circle cx="75" cy="24" r="1.2" fill="#fef08a" />
          <circle cx="50" cy="18" r="1" fill="#ffffff" />
        </svg>
      );

    // 2. Protein: Amino acid peptide chain helix with connected nodes
    case "protein":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Protein: Amino acid peptide chain helix"}
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient
              id="syl-prot-strand1"
              x1="20"
              y1="15"
              x2="80"
              y2="85"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#e9d5ff" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient
              id="syl-prot-strand2"
              x1="80"
              y1="15"
              x2="20"
              y2="85"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#d8b4fe" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <radialGradient id="syl-prot-node" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#d8b4fe" />
              <stop offset="100%" stopColor="#7e22ce" />
            </radialGradient>
            <radialGradient
              id="syl-prot-bg"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-prot-bg)" />

          {/* Peptide bond rungs */}
          <line
            x1="33"
            y1="22"
            x2="67"
            y2="22"
            stroke="#c084fc"
            strokeWidth="2"
            strokeDasharray="2 3"
            opacity="0.7"
          />
          <line
            x1="38"
            y1="36"
            x2="62"
            y2="36"
            stroke="#c084fc"
            strokeWidth="2.5"
            opacity="0.8"
          />
          <line
            x1="48"
            y1="50"
            x2="52"
            y2="50"
            stroke="#f3e8ff"
            strokeWidth="3"
            opacity="0.9"
          />
          <line
            x1="38"
            y1="64"
            x2="62"
            y2="64"
            stroke="#c084fc"
            strokeWidth="2.5"
            opacity="0.8"
          />
          <line
            x1="33"
            y1="78"
            x2="67"
            y2="78"
            stroke="#c084fc"
            strokeWidth="2"
            strokeDasharray="2 3"
            opacity="0.7"
          />

          {/* Flowing ribbon Strand 1 */}
          <path
            d="M32 15 C45 28 55 35 68 50 C55 65 45 72 32 85"
            stroke="url(#syl-prot-strand1)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Flowing ribbon Strand 2 */}
          <path
            d="M68 15 C55 28 45 35 32 50 C45 65 55 72 68 85"
            stroke="url(#syl-prot-strand2)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Amino Acid Peptide Nodes (Spheres) */}
          <circle
            cx="32"
            cy="15"
            r="5"
            fill="url(#syl-prot-node)"
            stroke="#f3e8ff"
            strokeWidth="1"
          />
          <circle
            cx="68"
            cy="15"
            r="5"
            fill="url(#syl-prot-node)"
            stroke="#f3e8ff"
            strokeWidth="1"
          />
          <circle
            cx="42"
            cy="30"
            r="4.5"
            fill="url(#syl-prot-node)"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          <circle
            cx="58"
            cy="30"
            r="4.5"
            fill="url(#syl-prot-node)"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          <circle
            cx="50"
            cy="50"
            r="5.5"
            fill="url(#syl-prot-node)"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <circle
            cx="42"
            cy="70"
            r="4.5"
            fill="url(#syl-prot-node)"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          <circle
            cx="58"
            cy="70"
            r="4.5"
            fill="url(#syl-prot-node)"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          <circle
            cx="32"
            cy="85"
            r="5"
            fill="url(#syl-prot-node)"
            stroke="#f3e8ff"
            strokeWidth="1"
          />
          <circle
            cx="68"
            cy="85"
            r="5"
            fill="url(#syl-prot-node)"
            stroke="#f3e8ff"
            strokeWidth="1"
          />

          {/* High-energy sparks */}
          <path
            d="M50 43 L51.5 48.5 L57 50 L51.5 51.5 L50 57 L48.5 51.5 L43 50 L48.5 48.5 Z"
            fill="#ffffff"
            opacity="0.9"
          />
          <circle cx="24" cy="40" r="1.5" fill="#e9d5ff" opacity="0.8" />
          <circle cx="76" cy="60" r="1.5" fill="#e9d5ff" opacity="0.8" />
        </svg>
      );

    // 3. Healthy Fats: Botanical olive & flaxseed oil drop with luminous ripples
    case "healthy-fats":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Healthy Fats: Botanical olive and flaxseed oil drop"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-fat-drop" cx="42%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </radialGradient>
            <linearGradient id="syl-fat-leaf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <radialGradient
              id="syl-fat-glow"
              cx="50"
              cy="55"
              r="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-fat-glow)" />

          {/* Liquid concentric ripples at base */}
          <ellipse
            cx="50"
            cy="76"
            rx="28"
            ry="7"
            stroke="#c084fc"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.5"
          />
          <ellipse
            cx="50"
            cy="76"
            rx="18"
            ry="4.5"
            stroke="#f59e0b"
            strokeWidth="1.2"
            opacity="0.7"
          />

          {/* Arched Olive Branch */}
          <path
            d="M22 68 Q28 32 50 18"
            stroke="#4ade80"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Leaves */}
          <path
            d="M24 55 C18 50 16 42 22 40 C28 42 28 50 24 55 Z"
            fill="url(#syl-fat-leaf)"
            stroke="#86efac"
            strokeWidth="0.6"
          />
          <path
            d="M32 42 C30 34 33 26 40 28 C42 34 38 40 32 42 Z"
            fill="url(#syl-fat-leaf)"
            stroke="#86efac"
            strokeWidth="0.6"
          />
          <path
            d="M44 26 C46 18 52 14 56 19 C55 26 49 28 44 26 Z"
            fill="url(#syl-fat-leaf)"
            stroke="#86efac"
            strokeWidth="0.6"
          />
          {/* Ripe Black-Violet Olives */}
          <ellipse
            cx="26"
            cy="46"
            rx="4.5"
            ry="6"
            transform="rotate(15 26 46)"
            fill="#2e1065"
            stroke="#c084fc"
            strokeWidth="0.8"
          />
          <circle cx="25" cy="44" r="1.2" fill="#d8b4fe" opacity="0.8" />

          {/* Golden Oil Droplet */}
          <path
            d="M50 26 C50 26 68 52 68 64 C68 74 60 82 50 82 C40 82 32 74 32 64 C32 52 50 26 50 26 Z"
            fill="url(#syl-fat-drop)"
            stroke="#fef08a"
            strokeWidth="1.2"
          />

          {/* Glossy Curved Highlight */}
          <path
            d="M42 42 C40 50 38 60 41 68"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="44" cy="38" r="1.8" fill="#ffffff" />
          <circle cx="56" cy="70" r="2.5" fill="#fef08a" opacity="0.5" />
        </svg>
      );

    // 4. Dietary Fibre: Leafy botanical digestive greens & whole grains with micro-mesh
    case "fibre":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Dietary Fibre: Leafy botanical digestive greens and whole grains"
          }
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-fib-leaf1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="60%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#6ee7b7" />
            </linearGradient>
            <linearGradient id="syl-fib-leaf2" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#581c87" />
              <stop offset="60%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#e9d5ff" />
            </linearGradient>
            <radialGradient
              id="syl-fib-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#9333ea" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-fib-glow)" />

          {/* Prebiotic honeycomb mesh network */}
          <g opacity="0.35" stroke="#34d399" strokeWidth="1">
            <polygon points="50,22 58,27 58,37 50,42 42,37 42,27" />
            <polygon points="58,37 66,42 66,52 58,57 50,42 50,32" />
            <polygon points="42,37 50,42 50,52 42,57 34,52 34,42" />
            <polygon points="50,52 58,57 58,67 50,72 42,67 42,57" />
          </g>

          {/* Central Stem */}
          <path
            d="M50 88 C48 65 52 40 50 14"
            stroke="#a7f3d0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Lush Botanical Digestive Leaves */}
          <path
            d="M50 68 C35 65 24 52 28 38 C38 42 45 55 50 68 Z"
            fill="url(#syl-fib-leaf1)"
            stroke="#a7f3d0"
            strokeWidth="0.8"
          />
          <path
            d="M33 46 Q40 52 48 62"
            stroke="#d1fae5"
            strokeWidth="1"
            strokeLinecap="round"
          />

          <path
            d="M50 54 C65 52 76 40 72 26 C62 30 55 42 50 54 Z"
            fill="url(#syl-fib-leaf2)"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          <path
            d="M67 34 Q60 40 52 48"
            stroke="#f3e8ff"
            strokeWidth="1"
            strokeLinecap="round"
          />

          <path
            d="M50 38 C38 34 32 24 36 14 C44 18 48 28 50 38 Z"
            fill="url(#syl-fib-leaf1)"
            stroke="#a7f3d0"
            strokeWidth="0.8"
          />

          {/* Sprouting Cereal Grain Whisps */}
          <path
            d="M50 20 Q56 12 66 10"
            stroke="#fde68a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="62"
            cy="12"
            rx="2"
            ry="4"
            transform="rotate(35 62 12)"
            fill="#facc15"
          />
          <path
            d="M50 16 Q44 8 36 8"
            stroke="#fde68a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="40"
            cy="10"
            rx="2"
            ry="4"
            transform="rotate(-35 40 10)"
            fill="#facc15"
          />

          {/* Dewdrops / Bioactive particles */}
          <circle cx="34" cy="40" r="2" fill="#ffffff" opacity="0.9" />
          <circle cx="64" cy="30" r="1.8" fill="#ffffff" opacity="0.9" />
          <circle cx="50" cy="74" r="1.5" fill="#a7f3d0" />
        </svg>
      );

    // 5. Vitamin A: Vibrant carrot & retinal protective eye shield
    case "vitamin-a":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Vitamin A: Vibrant carrot and retinal protective eye shield"
          }
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-vita-carrot" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="30%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <linearGradient id="syl-vita-shield" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e9d5ff" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#6b21a8" />
            </linearGradient>
            <radialGradient
              id="syl-vita-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-vita-glow)" />

          {/* Retinal Eye Shield Arc (Aura of Vision) */}
          <path
            d="M20 50 C32 30 68 30 80 50 C68 70 32 70 20 50 Z"
            stroke="url(#syl-vita-shield)"
            strokeWidth="1.8"
            fill="none"
            strokeDasharray="1 3"
          />
          <path
            d="M26 50 C36 36 64 36 74 50 C64 64 36 64 26 50 Z"
            stroke="#fde047"
            strokeWidth="1.2"
            opacity="0.7"
          />

          {/* Golden Iris Beacon */}
          <circle
            cx="50"
            cy="50"
            r="14"
            stroke="#c084fc"
            strokeWidth="1.5"
            fill="#1e1035"
            opacity="0.8"
          />
          <circle
            cx="50"
            cy="50"
            r="7"
            fill="#f97316"
            stroke="#fed7aa"
            strokeWidth="1"
          />
          <circle cx="50" cy="50" r="3.2" fill="#ffffff" />

          {/* Botanical Carrot Body interwoven */}
          <path
            d="M50 86 C48 76 43 55 45 36 C47 34 53 34 55 36 C57 55 52 76 50 86 Z"
            fill="url(#syl-vita-carrot)"
            stroke="#fed7aa"
            strokeWidth="1.2"
          />
          {/* Carrot ridges */}
          <path
            d="M46 48 Q49 50 53 48"
            stroke="#7c2d12"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M47 62 Q50 63 52 61"
            stroke="#7c2d12"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d="M48 72 Q50 73 52 72"
            stroke="#7c2d12"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Feathery carrot greens */}
          <path
            d="M50 35 C48 24 40 16 34 14"
            stroke="#4ade80"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M50 35 C50 22 50 14 50 10"
            stroke="#22c55e"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M50 35 C52 24 60 16 66 14"
            stroke="#4ade80"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Radiant Beams */}
          <line
            x1="50"
            y1="28"
            x2="50"
            y2="24"
            stroke="#fed7aa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="68"
            y1="50"
            x2="72"
            y2="50"
            stroke="#fed7aa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="32"
            y1="50"
            x2="28"
            y2="50"
            stroke="#fed7aa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    // 6. Vitamin B-Complex: Cellular energy spark & metabolic wheel
    case "vitamin-b-complex":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Vitamin B-Complex: Cellular energy spark and metabolic wheel"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient
              id="syl-vitb-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="45%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="syl-vitb-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-vitb-glow)" />

          {/* Metabolic Outer Track */}
          <circle
            cx="50"
            cy="50"
            r="34"
            stroke="url(#syl-vitb-ring)"
            strokeWidth="1.8"
            strokeDasharray="6 3"
          />
          <circle
            cx="50"
            cy="50"
            r="26"
            stroke="#c084fc"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* 8 Radiating Metabolic Wheel Spokes */}
          <line
            x1="50"
            y1="24"
            x2="50"
            y2="76"
            stroke="#d8b4fe"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <line
            x1="24"
            y1="50"
            x2="76"
            y2="50"
            stroke="#d8b4fe"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <line
            x1="32"
            y1="32"
            x2="68"
            y2="68"
            stroke="#d8b4fe"
            strokeWidth="1"
            strokeDasharray="2 2"
            opacity="0.6"
          />
          <line
            x1="32"
            y1="68"
            x2="68"
            y2="32"
            stroke="#d8b4fe"
            strokeWidth="1"
            strokeDasharray="2 2"
            opacity="0.6"
          />

          {/* 8 B-Vitamin Orbs on perimeter */}
          <circle
            cx="50"
            cy="16"
            r="4"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <circle
            cx="74"
            cy="26"
            r="3.5"
            fill="#c084fc"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          <circle
            cx="84"
            cy="50"
            r="4"
            fill="#facc15"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <circle
            cx="74"
            cy="74"
            r="3.5"
            fill="#38bdf8"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          <circle
            cx="50"
            cy="84"
            r="4"
            fill="#e879f9"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <circle
            cx="26"
            cy="74"
            r="3.5"
            fill="#c084fc"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          <circle
            cx="16"
            cy="50"
            r="4"
            fill="#facc15"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <circle
            cx="26"
            cy="26"
            r="3.5"
            fill="#38bdf8"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />

          {/* Central Energetic Spark Burst */}
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="#2e1065"
            stroke="#facc15"
            strokeWidth="1.5"
          />
          <path
            d="M50 36 L53 47 L64 50 L53 53 L50 64 L47 53 L36 50 L47 47 Z"
            fill="#ffffff"
          />
          <circle cx="50" cy="50" r="2.5" fill="#fde047" />
        </svg>
      );

    // 7. Folate: DNA cellular replication sprout with unfurling cotyledon
    case "folate":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Folate: DNA cellular replication sprout"}
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-fol-sprout" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="50%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#bbf7d0" />
            </linearGradient>
            <linearGradient id="syl-fol-dna" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#7e22ce" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#e9d5ff" />
            </linearGradient>
            <radialGradient
              id="syl-fol-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-fol-glow)" />

          {/* Base DNA Replication Waves */}
          <path
            d="M36 86 C42 78 58 78 64 70 C58 62 42 62 36 54"
            stroke="url(#syl-fol-dna)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M64 86 C58 78 42 78 36 70 C42 62 58 62 64 54"
            stroke="url(#syl-fol-dna)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Base cross rungs */}
          <line
            x1="40"
            y1="80"
            x2="60"
            y2="80"
            stroke="#f3e8ff"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <line
            x1="42"
            y1="64"
            x2="58"
            y2="64"
            stroke="#f3e8ff"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* Central Stem emerging from DNA */}
          <path
            d="M50 62 L50 36"
            stroke="url(#syl-fol-sprout)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Sprouting Cotyledon Leaves */}
          <path
            d="M50 36 C35 34 25 22 28 14 C38 15 46 25 50 36 Z"
            fill="url(#syl-fol-sprout)"
            stroke="#bbf7d0"
            strokeWidth="1"
          />
          <path
            d="M50 36 C65 34 75 22 72 14 C62 15 54 25 50 36 Z"
            fill="url(#syl-fol-sprout)"
            stroke="#bbf7d0"
            strokeWidth="1"
          />

          {/* Tender central apical bud */}
          <ellipse
            cx="50"
            cy="28"
            rx="3"
            ry="6"
            fill="#86efac"
            stroke="#ffffff"
            strokeWidth="0.8"
          />

          {/* Mitotic division nodes */}
          <circle
            cx="36"
            cy="54"
            r="3"
            fill="#c084fc"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <circle
            cx="64"
            cy="54"
            r="3"
            fill="#c084fc"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <circle
            cx="50"
            cy="62"
            r="3.5"
            fill="#4ade80"
            stroke="#ffffff"
            strokeWidth="0.8"
          />

          {/* Sparkles */}
          <circle cx="26" cy="20" r="1.2" fill="#ffffff" />
          <circle cx="74" cy="20" r="1.2" fill="#ffffff" />
          <circle cx="50" cy="12" r="1.5" fill="#bbf7d0" />
        </svg>
      );

    // 8. Vitamin C: Citrus lemon slice with radiant antioxidant drops
    case "vitamin-c":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Vitamin C: Citrus lemon slice with radiant antioxidant drops"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-vitc-slice" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#fef08a" />
              <stop offset="90%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#eab308" />
            </radialGradient>
            <radialGradient
              id="syl-vitc-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#e879f9" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-vitc-glow)" />

          {/* Outer Citrus Rind */}
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="#ca8a04"
            stroke="#facc15"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="31" fill="#fef9c3" />
          <circle cx="50" cy="50" r="29" fill="#180e29" />

          {/* 8 Radial Citrus Pulp Segments */}
          <g fill="url(#syl-vitc-slice)" stroke="#ffffff" strokeWidth="0.6">
            <path d="M50 48 L44 26 C48 24 52 24 56 26 Z" />
            <path d="M51.5 48.5 L67 33 C69 36 71 40 71 44 Z" />
            <path d="M52 50 L74 44 C76 48 76 52 74 56 Z" />
            <path d="M51.5 51.5 L67 67 C64 69 60 71 56 71 Z" />
            <path d="M50 52 L44 74 C48 76 52 76 56 74 Z" />
            <path d="M48.5 51.5 L33 67 C31 64 29 60 29 56 Z" />
            <path d="M48 50 L26 44 C24 48 24 52 26 56 Z" />
            <path d="M48.5 48.5 L33 33 C36 31 40 29 44 29 Z" />
          </g>

          {/* Center core */}
          <circle cx="50" cy="50" r="4" fill="#ffffff" />
          <circle cx="50" cy="50" r="2" fill="#facc15" />

          {/* Antioxidant Droplets and Shockwave Stars */}
          <circle
            cx="16"
            cy="28"
            r="2.5"
            fill="#e879f9"
            stroke="#ffffff"
            strokeWidth="0.6"
          />
          <circle
            cx="82"
            cy="22"
            r="3"
            fill="#e879f9"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <circle cx="84" cy="74" r="2" fill="#fde047" />
          <circle
            cx="20"
            cy="76"
            r="2.8"
            fill="#fde047"
            stroke="#ffffff"
            strokeWidth="0.6"
          />

          {/* Radiant Stars */}
          <path
            d="M82 34 L83 37 L86 38 L83 39 L82 42 L81 39 L78 38 L81 37 Z"
            fill="#ffffff"
          />
          <path
            d="M18 40 L19 43 L22 44 L19 45 L18 48 L17 45 L14 44 L17 43 Z"
            fill="#ffffff"
          />
        </svg>
      );

    // 9. Vitamin D: Radiant sunlight beacon & bone strength
    case "vitamin-d":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Vitamin D: Radiant sunlight beacon and bone strength"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient
              id="syl-vitd-sun"
              cx="50"
              cy="35"
              r="25"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fde047" />
              <stop offset="80%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </radialGradient>
            <linearGradient id="syl-vitd-bone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="50%" stopColor="#d8b4fe" />
              <stop offset="100%" stopColor="#6b21a8" />
            </linearGradient>
            <radialGradient
              id="syl-vitd-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-vitd-glow)" />

          {/* Radiant Solar Corona Beams */}
          <g
            stroke="#fde047"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          >
            <line x1="50" y1="14" x2="50" y2="6" />
            <line x1="68" y1="20" x2="74" y2="14" />
            <line x1="32" y1="20" x2="26" y2="14" />
            <line x1="75" y1="35" x2="84" y2="35" />
            <line x1="25" y1="35" x2="16" y2="35" />
            <line x1="70" y1="48" x2="78" y2="52" />
            <line x1="30" y1="48" x2="22" y2="52" />
          </g>

          {/* Sun Orb */}
          <circle
            cx="50"
            cy="35"
            r="15"
            fill="url(#syl-vitd-sun)"
            stroke="#fef08a"
            strokeWidth="1.5"
          />

          {/* Bone Strength Architecture / Osteon Pillar Arch */}
          <path
            d="M30 86 L30 64 C30 58 38 56 50 56 C62 56 70 58 70 64 L70 86"
            stroke="url(#syl-vitd-bone)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Bone knobby heads at base */}
          <ellipse
            cx="28"
            cy="86"
            rx="5"
            ry="4"
            fill="#f3e8ff"
            stroke="#c084fc"
            strokeWidth="1"
          />
          <ellipse
            cx="72"
            cy="86"
            rx="5"
            ry="4"
            fill="#f3e8ff"
            stroke="#c084fc"
            strokeWidth="1"
          />
          <ellipse
            cx="50"
            cy="58"
            rx="6"
            ry="4"
            fill="#ffffff"
            stroke="#c084fc"
            strokeWidth="1"
          />

          {/* Crystalline calcium bridge */}
          <line
            x1="38"
            y1="72"
            x2="62"
            y2="72"
            stroke="#f3e8ff"
            strokeWidth="1.8"
            strokeDasharray="3 2"
          />
          <line
            x1="42"
            y1="80"
            x2="58"
            y2="80"
            stroke="#f3e8ff"
            strokeWidth="1.8"
            strokeDasharray="3 2"
          />

          <circle cx="50" cy="35" r="3" fill="#ffffff" />
        </svg>
      );

    // 10. Vitamin E: Nut & seed shield antioxidant droplet
    case "vitamin-e":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Vitamin E: Nut and seed shield antioxidant droplet"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-vite-kernel" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="45%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </radialGradient>
            <linearGradient id="syl-vite-shield" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e9d5ff" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <radialGradient
              id="syl-vite-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-vite-glow)" />

          {/* Outer Protective Lipid Bilayer Shield */}
          <path
            d="M50 14 C68 28 80 46 76 68 C72 84 50 90 50 90 C50 90 28 84 24 68 C20 46 32 28 50 14 Z"
            stroke="url(#syl-vite-shield)"
            strokeWidth="2.2"
            fill="#1d1033"
            opacity="0.85"
          />

          {/* Concentric Membrane Ring */}
          <path
            d="M50 22 C64 34 72 48 68 64 C65 78 50 82 50 82 C50 82 35 78 32 64 C28 48 36 34 50 22 Z"
            stroke="#d8b4fe"
            strokeWidth="1.2"
            strokeDasharray="2 3"
          />

          {/* Central Almond / Sunflower Seed Kernel */}
          <path
            d="M50 32 C58 40 62 50 60 62 C58 70 50 74 50 74 C50 74 42 70 40 62 C38 50 42 40 50 32 Z"
            fill="url(#syl-vite-kernel)"
            stroke="#fde68a"
            strokeWidth="1.2"
          />
          {/* Seed embryo groove */}
          <path
            d="M50 38 Q48 52 50 66"
            stroke="#92400e"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Protective Orbit Nodes */}
          <circle
            cx="50"
            cy="14"
            r="3"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <circle
            cx="76"
            cy="68"
            r="3"
            fill="#c084fc"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <circle
            cx="24"
            cy="68"
            r="3"
            fill="#c084fc"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <circle cx="50" cy="90" r="2.5" fill="#fde68a" />

          {/* Glossy sheen */}
          <path
            d="M44 42 C42 48 42 56 44 60"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      );

    // 11. Vitamin K: Crisp leafy herb & kale sprig
    case "vitamin-k":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Vitamin K: Crisp leafy herb and kale sprig"}
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-vitk-leaf" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#86efac" />
            </linearGradient>
            <radialGradient
              id="syl-vitk-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#86efac" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-vitk-glow)" />

          {/* Stem */}
          <path
            d="M50 88 Q48 55 50 18"
            stroke="#86efac"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Crisp Ruffled Kale Leaf 1 (Left) */}
          <path
            d="M50 72 C35 74 22 64 24 50 C26 42 32 44 35 48 C37 42 42 42 46 45 C48 40 52 40 50 48"
            fill="url(#syl-vitk-leaf)"
            stroke="#a7f3d0"
            strokeWidth="1"
          />
          {/* Veins */}
          <path
            d="M48 60 Q38 56 28 52"
            stroke="#d1fae5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M49 68 Q40 66 32 66"
            stroke="#d1fae5"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Crisp Ruffled Kale Leaf 2 (Right) */}
          <path
            d="M50 58 C65 60 78 50 76 36 C74 28 68 30 65 34 C63 28 58 28 54 31 C52 26 48 26 50 34"
            fill="url(#syl-vitk-leaf)"
            stroke="#a7f3d0"
            strokeWidth="1"
          />
          {/* Veins */}
          <path
            d="M51 48 Q62 44 72 38"
            stroke="#d1fae5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M51 54 Q60 52 68 52"
            stroke="#d1fae5"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Top Delicate Coriander Herb Sprig */}
          <path
            d="M50 28 C42 22 38 14 44 10 C50 10 50 20 50 28 Z"
            fill="url(#syl-vitk-leaf)"
            stroke="#a7f3d0"
            strokeWidth="0.8"
          />
          <path
            d="M50 28 C58 22 62 14 56 10 C50 10 50 20 50 28 Z"
            fill="url(#syl-vitk-leaf)"
            stroke="#a7f3d0"
            strokeWidth="0.8"
          />

          {/* Calcium-binding bio-mesh filaments */}
          <circle
            cx="50"
            cy="18"
            r="3"
            fill="#c084fc"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <circle
            cx="28"
            cy="52"
            r="2.5"
            fill="#c084fc"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <circle
            cx="72"
            cy="38"
            r="2.5"
            fill="#c084fc"
            stroke="#ffffff"
            strokeWidth="0.8"
          />

          {/* Dewdrops */}
          <circle cx="38" cy="50" r="1.5" fill="#ffffff" />
          <circle cx="62" cy="36" r="1.5" fill="#ffffff" />
        </svg>
      );

    // 12. Iron: Haemoglobin red blood cell oxygen carrier
    case "iron":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Iron: Haemoglobin red blood cell oxygen carrier"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-fe-rbc" cx="38%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="45%" stopColor="#e11d48" />
              <stop offset="85%" stopColor="#881337" />
              <stop offset="100%" stopColor="#4c0519" />
            </radialGradient>
            <radialGradient id="syl-fe-center" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd8a8" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
            <radialGradient
              id="syl-fe-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#e11d48" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-fe-glow)" />

          {/* Biconcave Red Blood Cell Outer Disc */}
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="url(#syl-fe-rbc)"
            stroke="#fda4af"
            strokeWidth="1.5"
          />
          {/* Biconcave central dimple */}
          <circle cx="50" cy="50" r="22" fill="#500724" opacity="0.65" />
          <circle cx="50" cy="50" r="18" fill="#2d0514" opacity="0.9" />

          {/* Central Porphyrin Coordinate Iron Ring */}
          <polygon
            points="50,38 60,45 56,58 44,58 40,45"
            stroke="#f59e0b"
            strokeWidth="1.2"
            strokeDasharray="2 1"
          />
          <circle
            cx="50"
            cy="50"
            r="6"
            fill="url(#syl-fe-center)"
            stroke="#ffffff"
            strokeWidth="1"
          />

          {/* 4 Quaternary Oxygen-Binding Globin Subunits (O2 Molecules) */}
          <circle
            cx="34"
            cy="34"
            r="5"
            fill="#fda4af"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <circle
            cx="66"
            cy="34"
            r="5"
            fill="#fda4af"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <circle
            cx="66"
            cy="66"
            r="5"
            fill="#fda4af"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <circle
            cx="34"
            cy="66"
            r="5"
            fill="#fda4af"
            stroke="#ffffff"
            strokeWidth="1"
          />

          {/* Coordinate bonds to iron */}
          <line
            x1="38"
            y1="38"
            x2="46"
            y2="46"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          <line
            x1="62"
            y1="38"
            x2="54"
            y2="46"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          <line
            x1="62"
            y1="62"
            x2="54"
            y2="54"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          <line
            x1="38"
            y1="62"
            x2="46"
            y2="54"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />

          {/* High-energy specular light */}
          <circle cx="48" cy="48" r="1.5" fill="#ffffff" />
          <path
            d="M28 28 Q40 20 60 22"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      );

    // 13. Calcium: Crystalline mineral bone lattice
    case "calcium":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Calcium: Crystalline mineral bone lattice"}
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-ca-facet1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f3e8ff" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="syl-ca-facet2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e9d5ff" />
              <stop offset="60%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#581c87" />
            </linearGradient>
            <radialGradient
              id="syl-ca-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-ca-glow)" />

          {/* Outer Scaffold Hexagon */}
          <polygon
            points="50,14 80,31 80,69 50,86 20,69 20,31"
            stroke="#d8b4fe"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            opacity="0.6"
          />

          {/* Hydroxyapatite Interlocking Prism Facets */}
          {/* Top Diamond Crystal */}
          <polygon
            points="50,18 68,34 50,48 32,34"
            fill="url(#syl-ca-facet1)"
            stroke="#ffffff"
            strokeWidth="1"
          />
          {/* Left Facet */}
          <polygon
            points="32,34 50,48 50,78 24,64"
            fill="url(#syl-ca-facet2)"
            stroke="#d8b4fe"
            strokeWidth="1"
          />
          {/* Right Facet */}
          <polygon
            points="50,48 68,34 76,64 50,78"
            fill="url(#syl-ca-facet1)"
            stroke="#d8b4fe"
            strokeWidth="1"
          />

          {/* Inner Central Micro-Cube Matrix */}
          <polygon
            points="50,38 60,46 50,56 40,46"
            fill="#ffffff"
            opacity="0.8"
          />
          <line
            x1="50"
            y1="56"
            x2="50"
            y2="78"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
          <line
            x1="50"
            y1="48"
            x2="24"
            y2="64"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="50"
            y1="48"
            x2="76"
            y2="64"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Sparkles / Crystalline stars */}
          <path
            d="M50 8 L51.5 14 L57 15.5 L51.5 17 L50 23 L48.5 17 L43 15.5 L48.5 14 Z"
            fill="#ffffff"
          />
          <circle cx="20" cy="31" r="2" fill="#ffffff" />
          <circle cx="80" cy="31" r="2" fill="#ffffff" />
          <circle cx="50" cy="86" r="2.5" fill="#f3e8ff" />
        </svg>
      );

    // 14. Potassium: Electrolyte energy shield & banana silhouette
    case "potassium":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Potassium: Electrolyte energy shield and banana silhouette"
          }
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-k-banana" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
            <radialGradient
              id="syl-k-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-k-glow)" />

          {/* Electrolyte Electric Pulsing Rings (K+ Ion Aura) */}
          <circle
            cx="50"
            cy="50"
            r="36"
            stroke="#60a5fa"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            opacity="0.7"
          />
          <circle
            cx="50"
            cy="50"
            r="28"
            stroke="#c084fc"
            strokeWidth="1"
            strokeDasharray="4 2"
            opacity="0.6"
          />

          {/* Curved Botanical Banana Silhouette */}
          <path
            d="M32 20 C24 35 24 65 52 82 C65 78 72 68 70 58 C66 42 48 30 36 22 Z"
            fill="url(#syl-k-banana)"
            stroke="#fef08a"
            strokeWidth="1.5"
          />
          {/* Stem & Tip */}
          <path
            d="M32 20 L30 14 C34 14 36 17 36 22"
            fill="#65a30d"
            stroke="#4d7c0f"
            strokeWidth="1"
          />
          <path
            d="M52 82 L55 86 C52 87 49 85 48 83"
            fill="#78350f"
            stroke="#451a03"
            strokeWidth="1"
          />
          {/* Ridge line */}
          <path
            d="M34 22 C30 42 36 65 52 82"
            stroke="#b45309"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Electrolyte Lightning Bolt Strike */}
          <polygon
            points="58,16 46,38 56,38 44,64 68,36 56,36"
            fill="#60a5fa"
            stroke="#ffffff"
            strokeWidth="1.2"
          />

          {/* K+ Ionic Element Orb */}
          <circle
            cx="74"
            cy="26"
            r="6"
            fill="#1e1b4b"
            stroke="#60a5fa"
            strokeWidth="1.2"
          />
          <text
            x="74"
            y="29.5"
            textAnchor="middle"
            fill="#93c5fd"
            fontSize="9"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            K⁺
          </text>

          {/* Sparks */}
          <circle cx="44" cy="64" r="1.5" fill="#ffffff" />
          <circle cx="58" cy="16" r="1.5" fill="#fef08a" />
        </svg>
      );

    // 15. Magnesium: Dense mineral kernel & seed with chlorophyll core
    case "magnesium":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Magnesium: Dense mineral kernel and seed with chlorophyll core"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-mg-kernel" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="40%" stopColor="#10b981" />
              <stop offset="85%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064e3b" />
            </radialGradient>
            <radialGradient
              id="syl-mg-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-mg-glow)" />

          {/* Calming Bio-Resonance Waves (Relaxation Fields) */}
          <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="24"
            stroke="#c084fc"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
            transform="rotate(-20 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="24"
            stroke="#34d399"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
            transform="rotate(40 50 50)"
          />

          {/* Chlorophyll Porphyrin Coordination Ring */}
          <polygon
            points="50,22 68,32 68,68 50,78 32,68 32,32"
            stroke="#34d399"
            strokeWidth="1.8"
            fill="#062d22"
            opacity="0.85"
          />

          {/* Botanical Pumpkin / Sunflower Kernel */}
          <path
            d="M50 26 C64 36 68 56 62 66 C56 74 50 76 50 76 C50 76 44 74 38 66 C32 56 36 36 50 26 Z"
            fill="url(#syl-mg-kernel)"
            stroke="#a7f3d0"
            strokeWidth="1.5"
          />
          {/* Kernel ridge line */}
          <path
            d="M50 32 Q48 50 50 70"
            stroke="#064e3b"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Central Magnesium (Mg) Core Atom */}
          <circle
            cx="50"
            cy="50"
            r="8.5"
            fill="#134e4a"
            stroke="#a7f3d0"
            strokeWidth="1.5"
          />
          <text
            x="50"
            y="53.5"
            textAnchor="middle"
            fill="#f3e8ff"
            fontSize="8"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Mg
          </text>

          {/* Calming energy motes */}
          <circle cx="28" cy="28" r="2" fill="#34d399" />
          <circle cx="72" cy="72" r="2" fill="#c084fc" />
          <circle cx="50" cy="18" r="1.5" fill="#ffffff" />
        </svg>
      );

    // 16. Zinc: Micronutrient immunity star with zinc-finger core
    case "zinc":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Zinc: Micronutrient immunity star"}
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-zn-star" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#d8b4fe" />
              <stop offset="70%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#3b0764" />
            </radialGradient>
            <radialGradient
              id="syl-zn-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="55%" stopColor="#c084fc" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-zn-glow)" />

          {/* 4 Outer Protective Shield Quads */}
          <path
            d="M50 10 L50 22 M50 90 L50 78 M10 50 L22 50 M90 50 L78 50"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="32"
            stroke="#38bdf8"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.6"
          />

          {/* Brilliant 4-Pointed Immunity Star */}
          <path
            d="M50 14 L56 44 L86 50 L56 56 L50 86 L44 56 L14 50 L44 44 Z"
            fill="url(#syl-zn-star)"
            stroke="#ffffff"
            strokeWidth="1.2"
          />

          {/* Diagonal secondary facets */}
          <polygon
            points="50,32 58,42 68,50 58,58 50,68 42,58 32,50 42,42"
            stroke="#f3e8ff"
            strokeWidth="0.8"
            fill="none"
            opacity="0.8"
          />

          {/* Central Zn2+ ion crystal nucleus */}
          <circle
            cx="50"
            cy="50"
            r="7.5"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <text
            x="50"
            y="53.5"
            textAnchor="middle"
            fill="#bae6fd"
            fontSize="8"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Zn
          </text>

          {/* Corner shield nodes */}
          <circle cx="28" cy="28" r="2.5" fill="#ffffff" />
          <circle cx="72" cy="28" r="2.5" fill="#ffffff" />
          <circle cx="72" cy="72" r="2.5" fill="#ffffff" />
          <circle cx="28" cy="72" r="2.5" fill="#ffffff" />
        </svg>
      );

    // 17. Phosphorus: ATP cellular matrix with tri-phosphate bonds
    case "phosphorus":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Phosphorus: ATP cellular energy matrix"}
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-p-sphere" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="45%" stopColor="#f59e0b" />
              <stop offset="85%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>
            <radialGradient
              id="syl-p-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-p-glow)" />

          {/* Hexagonal High-Energy ATP Lattice Matrix */}
          <g
            stroke="#c084fc"
            strokeWidth="1"
            opacity="0.4"
            strokeDasharray="3 2"
          >
            <polygon points="50,16 66,26 66,46 50,56 34,46 34,26" />
            <polygon points="50,44 66,54 66,74 50,84 34,74 34,54" />
          </g>

          {/* Tri-Phosphate Energy Bond (P ~ P ~ P) */}
          {/* High-energy wavy bonds */}
          <path
            d="M30 50 Q36 43 42 50 Q48 57 54 50"
            stroke="#fef08a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M54 50 Q60 43 66 50 Q72 57 78 50"
            stroke="#fef08a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Phosphate Sphere 1 (Alpha) */}
          <circle
            cx="28"
            cy="50"
            r="9"
            fill="url(#syl-p-sphere)"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <text
            x="28"
            y="53.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            P
          </text>

          {/* Phosphate Sphere 2 (Beta) */}
          <circle
            cx="50"
            cy="50"
            r="9"
            fill="url(#syl-p-sphere)"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <text
            x="50"
            y="53.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            P
          </text>

          {/* Phosphate Sphere 3 (Gamma - High Energy) */}
          <circle
            cx="72"
            cy="50"
            r="9.5"
            fill="url(#syl-p-sphere)"
            stroke="#fef08a"
            strokeWidth="1.5"
          />
          <text
            x="72"
            y="53.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            P
          </text>

          {/* Explosive Kinetic Energy Sparks at Gamma Terminal Bond */}
          <path
            d="M72 32 L73 37 L78 38 L73 39 L72 44 L71 39 L66 38 L71 37 Z"
            fill="#ffffff"
          />
          <path
            d="M84 46 L85 49 L88 50 L85 51 L84 54 L83 51 L80 50 L83 49 Z"
            fill="#fde047"
          />
          <path
            d="M72 68 L73 63 L78 62 L73 61 L72 56 L71 61 L66 62 L71 63 Z"
            fill="#ffffff"
          />

          <circle cx="16" cy="30" r="2" fill="#c084fc" />
          <circle cx="84" cy="24" r="2" fill="#c084fc" />
        </svg>
      );

    // Fallback: Ornate apothecary celestial essence vial with star glyph
    default:
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || `Nutrient: ${id}`}
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient
              id="syl-nut-fallback-bg"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="syl-nut-vial" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-nut-fallback-bg)" />
          {/* Apothecary Essence Vial */}
          <rect
            x="42"
            y="18"
            width="16"
            height="6"
            rx="2"
            stroke="#d8b4fe"
            strokeWidth="1.5"
            fill="#1e1035"
          />
          <path
            d="M44 24 L44 32 C36 40 32 52 32 68 C32 80 40 84 50 84 C60 84 68 80 68 68 C68 52 64 40 56 32 L56 24 Z"
            fill="#160a28"
            stroke="url(#syl-nut-vial)"
            strokeWidth="2"
          />
          {/* Crystalline Liquid inside */}
          <path
            d="M36 68 C36 78 42 81 50 81 C58 81 64 78 64 68 C64 56 60 48 50 48 C40 48 36 56 36 68 Z"
            fill="#7e22ce"
            opacity="0.6"
          />
          {/* Four-pointed star glyph */}
          <path
            d="M50 56 L52 63 L59 65 L52 67 L50 74 L48 67 L41 65 L48 63 Z"
            fill="#ffffff"
          />
          <circle cx="50" cy="65" r="1.5" fill="#fde047" />
        </svg>
      );
  }
};
