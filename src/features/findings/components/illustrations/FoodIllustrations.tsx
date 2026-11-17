import React from "react";

export interface FoodIllustrationProps {
  id: string;
  size?: number | string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Normalizes input food IDs to a standard canonical key.
 */
export function normalizeFoodId(id: string): string {
  const clean = id
    .toLowerCase()
    .trim()
    .replace(/^food\./, "")
    .replace(/_/g, "-");

  switch (clean) {
    case "egg":
    case "eggs":
    case "boiled-egg":
      return "egg";
    case "paneer":
    case "cottage-cheese":
      return "paneer";
    case "sprouted-moong":
    case "sprouts":
    case "moong-sprouts":
    case "sprouted-pulses":
      return "sprouted-moong";
    case "lemon-coriander":
    case "lemon":
    case "coriander":
    case "lime":
      return "lemon-coriander";
    case "peanuts-seeds":
    case "peanuts":
    case "peanut":
    case "seeds":
    case "pumpkin-seeds":
    case "almonds":
    case "walnuts":
      return "peanuts-seeds";
    case "curd-buttermilk":
    case "curd":
    case "buttermilk":
    case "chaas":
    case "raita":
    case "dahi":
      return "curd-buttermilk";
    case "veggies-medley":
    case "veggies":
    case "vegetables":
    case "salad":
      return "veggies-medley";
    case "lentils":
    case "dal":
    case "dahl":
    case "pulses":
    case "chickpeas":
    case "chole":
      return "lentils";
    case "spinach":
    case "palak":
    case "greens":
    case "methi":
      return "spinach";
    case "fruits":
    case "amla":
    case "guava":
    case "orange":
    case "apple":
      return "fruits";
    case "roti":
    case "grains":
    case "chapati":
    case "bread":
    case "chapatis":
      return "roti";
    case "ghee":
    case "clarified-butter":
      return "ghee";
    case "coconut-chutney":
    case "chutney":
      return "coconut-chutney";
    default:
      return clean;
  }
}

/**
 * Vector Illustration component for complementary food pairings in SYLVARA.
 * Styled in dark lavender, deep violet, obsidian, and rich culinary/botanical accents.
 */
export const FoodIllustration: React.FC<FoodIllustrationProps> = ({
  id,
  size = 56,
  className = "",
  ariaLabel,
}) => {
  const canonicalId = normalizeFoodId(id);

  switch (canonicalId) {
    // 1. Egg: Sliced boiled egg showing tender white & rich golden yolk
    case "egg":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Egg: Sliced boiled egg with golden yolk"}
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-food-egg-yolk" cx="42%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="85%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
            <linearGradient id="syl-food-egg-white" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <radialGradient
              id="syl-food-egg-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-food-egg-glow)" />

          {/* Cast shadow */}
          <ellipse
            cx="50"
            cy="80"
            rx="28"
            ry="8"
            fill="#130a24"
            opacity="0.6"
          />

          {/* Sliced Egg White Outer Oval */}
          <ellipse
            cx="50"
            cy="52"
            rx="27"
            ry="33"
            transform="rotate(-15 50 52)"
            fill="url(#syl-food-egg-white)"
            stroke="#f3e8ff"
            strokeWidth="1.5"
          />

          {/* Delicate inner contour */}
          <ellipse
            cx="50"
            cy="52"
            rx="24"
            ry="30"
            transform="rotate(-15 50 52)"
            stroke="#cbd5e1"
            strokeWidth="0.8"
            opacity="0.5"
          />

          {/* Rich Golden-Orange Yolk */}
          <circle
            cx="48"
            cy="54"
            r="15"
            fill="url(#syl-food-egg-yolk)"
            stroke="#fef08a"
            strokeWidth="1.2"
          />

          {/* Yolk Specular Highlight */}
          <ellipse
            cx="44"
            cy="49"
            rx="4"
            ry="2.5"
            transform="rotate(-25 44 49)"
            fill="#ffffff"
            opacity="0.85"
          />
          <circle cx="48" cy="47" r="1.2" fill="#ffffff" />

          {/* Fresh Micro-Herb Garnish & Ground Pepper Flecks */}
          <path
            d="M56 36 C59 30 65 28 68 31 C67 36 62 38 56 36 Z"
            fill="#22c55e"
            stroke="#16a34a"
            strokeWidth="0.6"
          />
          <circle cx="44" cy="62" r="0.9" fill="#2e1065" />
          <circle cx="52" cy="64" r="0.8" fill="#4c1d95" />
          <circle cx="38" cy="53" r="0.7" fill="#2e1065" />
          <circle cx="57" cy="52" r="0.8" fill="#581c87" />
        </svg>
      );

    // 2. Paneer: Fresh cubed cottage cheese blocks
    case "paneer":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Paneer: Fresh cubed cottage cheese blocks"}
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-paneer-top" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="syl-paneer-left" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="syl-paneer-right" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <radialGradient
              id="syl-paneer-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-paneer-glow)" />

          {/* Cast shadow */}
          <ellipse
            cx="50"
            cy="82"
            rx="32"
            ry="8"
            fill="#130a24"
            opacity="0.6"
          />

          {/* Cube 1 (Left Back) */}
          <g transform="translate(18, 28)">
            <polygon
              points="16,0 32,8 16,16 0,8"
              fill="url(#syl-paneer-top)"
              stroke="#e2e8f0"
              strokeWidth="0.8"
            />
            <polygon
              points="0,8 16,16 16,34 0,26"
              fill="url(#syl-paneer-left)"
              stroke="#cbd5e1"
              strokeWidth="0.8"
            />
            <polygon
              points="16,16 32,8 32,26 16,34"
              fill="url(#syl-paneer-right)"
              stroke="#94a3b8"
              strokeWidth="0.8"
            />
          </g>

          {/* Cube 2 (Right Back) */}
          <g transform="translate(48, 24)">
            <polygon
              points="16,0 32,8 16,16 0,8"
              fill="url(#syl-paneer-top)"
              stroke="#e2e8f0"
              strokeWidth="0.8"
            />
            <polygon
              points="0,8 16,16 16,34 0,26"
              fill="url(#syl-paneer-left)"
              stroke="#cbd5e1"
              strokeWidth="0.8"
            />
            <polygon
              points="16,16 32,8 32,26 16,34"
              fill="url(#syl-paneer-right)"
              stroke="#94a3b8"
              strokeWidth="0.8"
            />
          </g>

          {/* Cube 3 (Front Center Hero) */}
          <g transform="translate(32, 42)">
            <polygon
              points="20,0 40,10 20,20 0,10"
              fill="url(#syl-paneer-top)"
              stroke="#ffffff"
              strokeWidth="1"
            />
            <polygon
              points="0,10 20,20 20,44 0,34"
              fill="url(#syl-paneer-left)"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
            <polygon
              points="20,20 40,10 40,34 20,44"
              fill="url(#syl-paneer-right)"
              stroke="#94a3b8"
              strokeWidth="1"
            />

            {/* Curd Texture Dots & Green Herb Flecks */}
            <circle cx="16" cy="8" r="1.2" fill="#22c55e" />
            <circle cx="26" cy="11" r="1" fill="#f59e0b" />
            <circle cx="21" cy="6" r="0.8" fill="#15803d" />
            <circle cx="10" cy="24" r="0.7" fill="#94a3b8" />
            <circle cx="30" cy="22" r="0.7" fill="#64748b" />
          </g>

          {/* Fresh coriander sprig garnish on top */}
          <path
            d="M48 38 C42 34 38 28 44 26 C48 29 48 34 48 38 Z"
            fill="#22c55e"
            stroke="#16a34a"
            strokeWidth="0.6"
          />
        </svg>
      );

    // 3. Sprouted Moong: Germinated moong bean sprouts with delicate green tails
    case "sprouted-moong":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Sprouted Moong: Germinated moong beans with green tails"
          }
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-moong-coat" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
            <linearGradient id="syl-moong-tail" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <radialGradient
              id="syl-moong-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-moong-glow)" />

          {/* Sprout 1 (Center Left) */}
          <ellipse
            cx="40"
            cy="62"
            rx="10"
            ry="8"
            transform="rotate(-20 40 62)"
            fill="url(#syl-moong-coat)"
            stroke="#86efac"
            strokeWidth="1"
          />
          {/* Split Seed Cotyledon peek */}
          <path
            d="M35 57 C38 54 44 54 46 58 C44 61 38 61 35 57 Z"
            fill="#fef9c3"
          />
          {/* Curling sprout tail */}
          <path
            d="M44 56 C46 44 54 36 48 24 C44 16 38 12 36 8"
            stroke="url(#syl-moong-tail)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Sprout 2 (Center Right) */}
          <ellipse
            cx="62"
            cy="66"
            rx="9"
            ry="7"
            transform="rotate(25 62 66)"
            fill="url(#syl-moong-coat)"
            stroke="#86efac"
            strokeWidth="1"
          />
          <path
            d="M58 62 C61 60 67 61 68 65 C65 67 60 66 58 62 Z"
            fill="#fef9c3"
          />
          <path
            d="M62 61 C68 50 70 38 64 26 C60 18 64 12 66 8"
            stroke="url(#syl-moong-tail)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Sprout 3 (Bottom Center) */}
          <ellipse
            cx="48"
            cy="74"
            rx="8"
            ry="6.5"
            fill="url(#syl-moong-coat)"
            stroke="#86efac"
            strokeWidth="1"
          />
          <path
            d="M44 71 C47 69 51 69 53 72 C50 74 46 73 44 71 Z"
            fill="#fef9c3"
          />
          <path
            d="M50 70 C52 64 50 56 55 48 C58 42 56 36 54 32"
            stroke="url(#syl-moong-tail)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Dewdrops & Micro-tail tips */}
          <circle cx="36" cy="8" r="1.5" fill="#ffffff" />
          <circle cx="66" cy="8" r="1.5" fill="#ffffff" />
          <circle cx="48" cy="40" r="1.2" fill="#ffffff" opacity="0.9" />
        </svg>
      );

    // 4. Lemon-Coriander: Bright yellow lemon wedge with fresh coriander leaves
    case "lemon-coriander":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Lemon & Coriander: Bright yellow lemon wedge with fresh coriander"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-lem-wedge" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="65%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#eab308" />
            </radialGradient>
            <linearGradient id="syl-coriander-leaf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="60%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
            <radialGradient
              id="syl-lem-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#22c55e" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-lem-glow)" />

          {/* Lemon Wedge Arc */}
          <path
            d="M22 66 C24 38 48 24 74 30 L54 68 Z"
            fill="url(#syl-lem-wedge)"
            stroke="#facc15"
            strokeWidth="2"
          />
          {/* Outer thick rind */}
          <path
            d="M22 66 C24 38 48 24 74 30"
            stroke="#ca8a04"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Inner white pith lining */}
          <path
            d="M26 63 C28 41 48 30 70 34"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Radial Citrus Pulp Segments */}
          <g fill="#fef08a" stroke="#ffffff" strokeWidth="0.8">
            <path d="M50 63 L32 58 C34 46 40 40 44 38 Z" />
            <path d="M51 63 L46 36 C52 35 58 36 62 39 Z" />
            <path d="M52 64 L64 41 C68 44 70 50 68 56 Z" />
          </g>

          {/* Coriander Sprig (Layered Behind & Overlapping) */}
          <path
            d="M68 62 C74 54 82 48 86 38"
            stroke="#86efac"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Coriander leaf lobes */}
          <path
            d="M86 38 C88 32 94 32 94 36 C92 40 88 42 86 38 Z"
            fill="url(#syl-coriander-leaf)"
            stroke="#86efac"
            strokeWidth="0.6"
          />
          <path
            d="M82 46 C88 44 92 48 90 52 C84 52 82 48 82 46 Z"
            fill="url(#syl-coriander-leaf)"
            stroke="#86efac"
            strokeWidth="0.6"
          />
          <path
            d="M74 54 C78 50 84 52 82 56 C78 58 74 56 74 54 Z"
            fill="url(#syl-coriander-leaf)"
            stroke="#86efac"
            strokeWidth="0.6"
          />

          {/* Juice droplets */}
          <circle
            cx="56"
            cy="74"
            r="2.5"
            fill="#fde047"
            stroke="#ffffff"
            strokeWidth="0.6"
          />
          <circle cx="48" cy="80" r="1.8" fill="#fde047" />
        </svg>
      );

    // 5. Peanuts & Seeds: Roasted peanut in shell with pumpkin & almond seeds
    case "peanuts-seeds":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Peanuts & Seeds: Roasted peanut with pumpkin and almond seeds"
          }
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-seed-peanut" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
            <linearGradient id="syl-seed-pepita" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="syl-seed-almond" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <radialGradient
              id="syl-seed-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-seed-glow)" />

          {/* Cast shadow */}
          <ellipse
            cx="50"
            cy="80"
            rx="30"
            ry="7"
            fill="#130a24"
            opacity="0.6"
          />

          {/* Hourglass Peanut in Shell */}
          <path
            d="M32 28 C38 24 48 26 48 38 C48 44 44 46 44 52 C44 58 50 62 48 72 C46 80 36 82 28 78 C20 74 20 62 24 54 C28 48 24 44 24 38 C24 28 28 26 32 28 Z"
            fill="url(#syl-seed-peanut)"
            stroke="#fde68a"
            strokeWidth="1.2"
          />
          {/* Peanut reticulated mesh texture */}
          <path
            d="M28 34 Q36 36 44 34 M26 42 Q34 44 42 42 M26 62 Q34 64 44 60 M28 70 Q36 72 44 68"
            stroke="#78350f"
            strokeWidth="0.8"
            opacity="0.7"
          />
          <path
            d="M34 28 Q34 50 34 78"
            stroke="#78350f"
            strokeWidth="0.9"
            opacity="0.6"
          />

          {/* Sleek Teardrop Almond (Center Right) */}
          <path
            d="M62 30 C72 38 78 52 74 66 C70 74 62 76 56 72 C50 68 52 54 54 44 C56 36 58 32 62 30 Z"
            fill="url(#syl-seed-almond)"
            stroke="#fed7aa"
            strokeWidth="1.2"
          />
          {/* Almond skin striations */}
          <path
            d="M62 38 Q66 52 64 68 M58 44 Q60 56 58 66"
            stroke="#451a03"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Emerald Pumpkin Seed (Pepita) */}
          <ellipse
            cx="48"
            cy="70"
            rx="12"
            ry="6"
            transform="rotate(-25 48 70)"
            fill="url(#syl-seed-pepita)"
            stroke="#a7f3d0"
            strokeWidth="1"
          />
          <path
            d="M38 74 Q48 70 58 66"
            stroke="#a7f3d0"
            strokeWidth="0.8"
            opacity="0.8"
          />
        </svg>
      );

    // 6. Curd & Buttermilk: Earthen clay bowl of curd with a glass of frothy chaas
    case "curd-buttermilk":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Curd & Buttermilk: Earthen bowl of curd with a glass of frothy chaas"
          }
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-clay-pot" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#c2410c" />
              <stop offset="100%" stopColor="#7c2d12" />
            </linearGradient>
            <linearGradient id="syl-curd-white" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <radialGradient
              id="syl-curd-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#ea580c" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-curd-glow)" />

          {/* Cast shadow */}
          <ellipse
            cx="50"
            cy="82"
            rx="32"
            ry="7"
            fill="#130a24"
            opacity="0.6"
          />

          {/* Left: Terracotta Handi Bowl of Curd */}
          <ellipse
            cx="38"
            cy="56"
            rx="22"
            ry="8"
            fill="url(#syl-clay-pot)"
            stroke="#fed7aa"
            strokeWidth="1"
          />
          <path
            d="M16 56 C16 72 26 80 38 80 C50 80 60 72 60 56 Z"
            fill="url(#syl-clay-pot)"
            stroke="#c2410c"
            strokeWidth="1.2"
          />
          {/* Curd surface */}
          <ellipse cx="38" cy="55" rx="19" ry="6" fill="url(#syl-curd-white)" />
          {/* Whipped swirl & Cumin dust */}
          <path
            d="M30 55 Q38 58 46 54"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="34" cy="54" r="0.8" fill="#92400e" />
          <circle cx="42" cy="56" r="0.8" fill="#92400e" />
          <circle cx="38" cy="53" r="0.7" fill="#b45309" />
          {/* Mint garnish */}
          <path
            d="M38 52 C36 46 42 44 44 48 Z"
            fill="#22c55e"
            stroke="#16a34a"
            strokeWidth="0.5"
          />

          {/* Right: Clay Kulhar Glass of Frothy Chaas */}
          <path
            d="M66 40 L62 76 C62 78 68 80 74 80 C80 80 84 78 84 76 L82 40 Z"
            fill="url(#syl-clay-pot)"
            stroke="#fed7aa"
            strokeWidth="1"
          />
          <ellipse cx="74" cy="40" rx="8" ry="3" fill="#cbd5e1" />
          {/* Frothy Buttermilk top */}
          <ellipse
            cx="74"
            cy="38"
            rx="8.5"
            ry="3.5"
            fill="#ffffff"
            stroke="#f3e8ff"
            strokeWidth="0.8"
          />
          {/* Foam bubbles */}
          <circle cx="71" cy="37" r="1.2" fill="#e2e8f0" />
          <circle cx="75" cy="38" r="1.5" fill="#e2e8f0" />
          <circle cx="77" cy="36" r="1" fill="#e2e8f0" />
          <circle cx="73" cy="35" r="0.8" fill="#ffffff" />
        </svg>
      );

    // 7. Veggies Medley: Sliced carrot, green peas, capsicum & red tomato
    case "veggies-medley":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Veggies Medley: Sliced carrot, green peas, capsicum and tomato"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient
              id="syl-veg-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-veg-glow)" />

          {/* 1. Tomato Wedge (Bottom Left) */}
          <path
            d="M20 54 C20 74 38 82 50 80 C46 64 36 54 20 54 Z"
            fill="#dc2626"
            stroke="#f87171"
            strokeWidth="1.2"
          />
          {/* Juicy tomato pulp & seed */}
          <path
            d="M26 62 C28 72 38 76 44 74"
            stroke="#b91c1c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="32"
            cy="68"
            rx="2"
            ry="3"
            transform="rotate(-30 32 68)"
            fill="#fef08a"
          />

          {/* 2. Carrot Round (Top Left) */}
          <circle
            cx="38"
            cy="34"
            r="14"
            fill="#f97316"
            stroke="#fed7aa"
            strokeWidth="1.2"
          />
          <circle
            cx="38"
            cy="34"
            r="6"
            fill="#fb923c"
            stroke="#ea580c"
            strokeWidth="0.8"
          />
          {/* Radial carrot star lines */}
          <g stroke="#c2410c" strokeWidth="0.7">
            <line x1="38" y1="28" x2="38" y2="40" />
            <line x1="32" y1="34" x2="44" y2="34" />
            <line x1="34" y1="30" x2="42" y2="38" />
            <line x1="34" y1="38" x2="42" y2="30" />
          </g>

          {/* 3. Green Capsicum Ribbon (Right Arc) */}
          <path
            d="M52 26 C68 22 82 32 80 48 C76 48 70 42 60 40 C52 38 52 30 52 26 Z"
            fill="#10b981"
            stroke="#a7f3d0"
            strokeWidth="1"
          />

          {/* 4. Three Glossy Green Garden Peas (Center Right) */}
          <circle
            cx="58"
            cy="56"
            r="6"
            fill="#22c55e"
            stroke="#86efac"
            strokeWidth="1"
          />
          <circle cx="56" cy="54" r="1.5" fill="#ffffff" opacity="0.8" />

          <circle
            cx="70"
            cy="52"
            r="5.5"
            fill="#16a34a"
            stroke="#86efac"
            strokeWidth="1"
          />
          <circle cx="68" cy="50" r="1.2" fill="#ffffff" opacity="0.8" />

          <circle
            cx="66"
            cy="64"
            r="6"
            fill="#15803d"
            stroke="#86efac"
            strokeWidth="1"
          />
          <circle cx="64" cy="62" r="1.5" fill="#ffffff" opacity="0.8" />
        </svg>
      );

    // 8. Lentils / Dal: Hearty bowl of cooked golden lentils with tadka
    case "lentils":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Lentils: Hearty bowl of cooked golden dal tadka"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-dal-soup" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="45%" stopColor="#facc15" />
              <stop offset="80%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ca8a04" />
            </radialGradient>
            <linearGradient id="syl-dal-bowl" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ca8a04" />
              <stop offset="50%" stopColor="#a16207" />
              <stop offset="100%" stopColor="#713f12" />
            </linearGradient>
            <radialGradient
              id="syl-dal-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-dal-glow)" />

          {/* Cast shadow */}
          <ellipse
            cx="50"
            cy="84"
            rx="32"
            ry="7"
            fill="#130a24"
            opacity="0.6"
          />

          {/* Fragrant Steam Wisps */}
          <path
            d="M42 28 Q38 20 44 14"
            stroke="#fef08a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M52 26 Q56 18 50 12"
            stroke="#fef08a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M60 28 Q64 22 58 16"
            stroke="#fef08a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Brass Katori Bowl */}
          <ellipse
            cx="50"
            cy="52"
            rx="32"
            ry="12"
            fill="url(#syl-dal-bowl)"
            stroke="#fef08a"
            strokeWidth="1.5"
          />
          <path
            d="M18 52 C18 74 32 84 50 84 C68 84 82 74 82 52 Z"
            fill="url(#syl-dal-bowl)"
            stroke="#a16207"
            strokeWidth="1.5"
          />

          {/* Golden Dal Soup Surface */}
          <ellipse cx="50" cy="50" rx="28" ry="10" fill="url(#syl-dal-soup)" />

          {/* Ghee Tadka Swirl */}
          <path
            d="M40 50 C44 46 54 48 56 52 C58 56 48 56 46 52"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Crackling Black Mustard & Cumin Seeds */}
          <circle cx="44" cy="48" r="1.2" fill="#1e1035" />
          <circle cx="52" cy="51" r="1" fill="#1e1035" />
          <circle cx="38" cy="53" r="1.1" fill="#1e1035" />
          <circle cx="58" cy="49" r="1" fill="#1e1035" />
          <ellipse
            cx="48"
            cy="53"
            rx="1.8"
            ry="0.8"
            transform="rotate(30 48 53)"
            fill="#78350f"
          />
          <ellipse
            cx="42"
            cy="51"
            rx="1.8"
            ry="0.8"
            transform="rotate(-20 42 51)"
            fill="#78350f"
          />

          {/* Red chili garnish */}
          <path
            d="M54 46 Q58 44 62 47"
            stroke="#dc2626"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    // 9. Spinach: Fresh crisp palak / spinach leaves
    case "spinach":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Spinach: Fresh crisp palak leaves with dewdrops"
          }
          className={className}
          fill="none"
        >
          <defs>
            <linearGradient id="syl-spin-leaf1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id="syl-spin-leaf2" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#6ee7b7" />
            </linearGradient>
            <radialGradient
              id="syl-spin-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-spin-glow)" />

          {/* Leaf 1 (Left Hero Leaf) */}
          <path
            d="M48 84 C38 68 22 56 22 36 C22 18 36 12 48 24 C48 44 48 64 48 84 Z"
            fill="url(#syl-spin-leaf1)"
            stroke="#a7f3d0"
            strokeWidth="1.2"
          />
          {/* Veins for Leaf 1 */}
          <path
            d="M48 76 Q42 56 40 32"
            stroke="#d1fae5"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M44 60 Q34 52 28 50"
            stroke="#d1fae5"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M42 46 Q32 38 28 34"
            stroke="#d1fae5"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Leaf 2 (Right Overlapping Leaf) */}
          <path
            d="M52 84 C62 68 78 56 78 36 C78 18 64 12 52 24 C52 44 52 64 52 84 Z"
            fill="url(#syl-spin-leaf2)"
            stroke="#a7f3d0"
            strokeWidth="1.2"
          />
          {/* Veins for Leaf 2 */}
          <path
            d="M52 76 Q58 56 60 32"
            stroke="#d1fae5"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M56 60 Q66 52 72 50"
            stroke="#d1fae5"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M58 46 Q68 38 72 34"
            stroke="#d1fae5"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Dewdrops */}
          <circle cx="34" cy="30" r="2.2" fill="#ffffff" opacity="0.9" />
          <circle cx="64" cy="40" r="1.8" fill="#ffffff" opacity="0.9" />
          <circle cx="50" cy="22" r="1.5" fill="#a7f3d0" />
        </svg>
      );

    // 10. Fruits: Sliced amla, guava, and orange
    case "fruits":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || "Fruits: Sliced amla, guava and orange"}
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-amla-grad" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#dcfce7" />
              <stop offset="60%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#22c55e" />
            </radialGradient>
            <radialGradient id="syl-guava-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fecdd3" />
              <stop offset="70%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#e11d48" />
            </radialGradient>
            <radialGradient id="syl-orange-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </radialGradient>
            <radialGradient
              id="syl-fruits-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fb7185" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#86efac" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-fruits-glow)" />

          {/* 1. Sliced Orange Wedge (Right) */}
          <path
            d="M52 66 C72 64 84 50 82 30 L52 50 Z"
            fill="url(#syl-orange-grad)"
            stroke="#fed7aa"
            strokeWidth="1.2"
          />
          <path
            d="M52 66 C72 64 84 50 82 30"
            stroke="#ea580c"
            strokeWidth="2.5"
          />

          {/* 2. Pink Guava Crescent (Left) */}
          <path
            d="M18 52 C20 72 36 82 52 80 L36 46 Z"
            fill="url(#syl-guava-grad)"
            stroke="#fda4af"
            strokeWidth="1"
          />
          {/* Green guava rind */}
          <path
            d="M18 52 C20 72 36 82 52 80"
            stroke="#16a34a"
            strokeWidth="2.8"
          />
          {/* Tiny guava seeds */}
          <circle cx="32" cy="62" r="1.1" fill="#fef08a" />
          <circle cx="38" cy="68" r="1.1" fill="#fef08a" />
          <circle cx="42" cy="62" r="1.1" fill="#fef08a" />

          {/* 3. Amla (Indian Gooseberry) Round (Top Center) */}
          <circle
            cx="46"
            cy="30"
            r="14"
            fill="url(#syl-amla-grad)"
            stroke="#bbf7d0"
            strokeWidth="1.2"
          />
          {/* Characteristic Amla vertical lobes */}
          <path
            d="M46 16 Q40 30 46 44 M46 16 Q52 30 46 44"
            stroke="#15803d"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <circle cx="46" cy="30" r="2.5" fill="#14532d" />
        </svg>
      );

    // 11. Roti: Layered warm whole wheat roti / phulka with puffed crust
    case "roti":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Roti: Warm whole-wheat roti with golden toasted spots"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-roti-grad" cx="42%" cy="40%" r="58%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="45%" stopColor="#fde68a" />
              <stop offset="85%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
            <radialGradient
              id="syl-roti-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-roti-glow)" />

          {/* Cast shadow */}
          <ellipse
            cx="50"
            cy="80"
            rx="34"
            ry="8"
            fill="#130a24"
            opacity="0.6"
          />

          {/* Puffed Phulka Disc */}
          <ellipse
            cx="50"
            cy="52"
            rx="34"
            ry="24"
            fill="url(#syl-roti-grad)"
            stroke="#fef3c7"
            strokeWidth="1.2"
          />

          {/* Puffed pocket bubble contour */}
          <ellipse
            cx="44"
            cy="48"
            rx="20"
            ry="14"
            stroke="#fef3c7"
            strokeWidth="1"
            strokeDasharray="4 2"
            opacity="0.6"
          />

          {/* Golden-brown toasted spots (chitte) */}
          <circle cx="38" cy="44" r="3.5" fill="#78350f" opacity="0.8" />
          <circle cx="56" cy="42" r="4" fill="#92400e" opacity="0.8" />
          <circle cx="48" cy="56" r="3" fill="#78350f" opacity="0.75" />
          <circle cx="62" cy="58" r="2.5" fill="#92400e" opacity="0.7" />
          <circle cx="32" cy="56" r="2.8" fill="#92400e" opacity="0.75" />

          {/* Warm steam curls */}
          <path
            d="M42 22 Q46 14 42 8"
            stroke="#fde68a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M54 20 Q50 14 54 8"
            stroke="#fde68a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      );

    // 12. Ghee: Brass pot with golden spoon pouring liquid ghee
    case "ghee":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel || "Ghee: Traditional brass pot pouring liquid gold ghee"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient id="syl-ghee-drop" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
            <radialGradient
              id="syl-ghee-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-ghee-glow)" />

          {/* Brass Pot */}
          <path
            d="M26 44 L32 78 C32 82 40 84 50 84 C60 84 68 82 68 78 L74 44 Z"
            fill="#b45309"
            stroke="#fde68a"
            strokeWidth="1.2"
          />
          <ellipse
            cx="50"
            cy="44"
            rx="24"
            ry="7"
            fill="#78350f"
            stroke="#fde68a"
            strokeWidth="1.2"
          />
          <ellipse cx="50" cy="44" rx="20" ry="5.5" fill="#f59e0b" />

          {/* Golden Spoon pouring liquid ghee */}
          <path
            d="M68 20 L52 38"
            stroke="#fde68a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="50"
            cy="40"
            rx="6"
            ry="3.5"
            transform="rotate(-20 50 40)"
            fill="#fbbf24"
            stroke="#ffffff"
            strokeWidth="0.8"
          />

          {/* Luminous stream and suspended golden drop */}
          <path
            d="M50 42 C48 50 48 58 50 64"
            stroke="#fde047"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="68"
            r="3.5"
            fill="url(#syl-ghee-drop)"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
        </svg>
      );

    // 13. Coconut Chutney: Fresh coconut chutney with curry leaves and mustard seeds tadka
    case "coconut-chutney":
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={
            ariaLabel ||
            "Coconut Chutney: Fresh coconut chutney with curry leaves"
          }
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient
              id="syl-chut-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-chut-glow)" />

          {/* Terracotta Bowl */}
          <ellipse
            cx="50"
            cy="54"
            rx="28"
            ry="10"
            fill="#c2410c"
            stroke="#fed7aa"
            strokeWidth="1"
          />
          <path
            d="M22 54 C22 74 34 82 50 82 C66 82 78 74 78 54 Z"
            fill="#9a3412"
            stroke="#c2410c"
            strokeWidth="1.2"
          />

          {/* White Coconut Chutney Surface */}
          <ellipse
            cx="50"
            cy="52"
            rx="25"
            ry="8.5"
            fill="#ffffff"
            stroke="#f8fafc"
            strokeWidth="1"
          />

          {/* Curry Leaf Tadka & Mustard Seeds */}
          <path
            d="M46 50 C40 46 42 42 48 44 C52 46 50 52 46 50 Z"
            fill="#15803d"
            stroke="#86efac"
            strokeWidth="0.6"
          />
          <circle cx="42" cy="52" r="1.1" fill="#1e1035" />
          <circle cx="54" cy="51" r="1" fill="#1e1035" />
          <circle cx="48" cy="54" r="0.9" fill="#1e1035" />
          <circle cx="58" cy="53" r="1" fill="#1e1035" />
          {/* Red chili bit */}
          <rect x="52" y="47" width="3" height="1.8" rx="0.5" fill="#dc2626" />
        </svg>
      );

    // Fallback: Earthenware culinary tasting bowl with botanical sprig
    default:
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          role="img"
          aria-label={ariaLabel || `Food: ${id}`}
          className={className}
          fill="none"
        >
          <defs>
            <radialGradient
              id="syl-food-fallback-glow"
              cx="50"
              cy="50"
              r="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0c0617" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="syl-food-fallback-bowl"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#4c1d95" />
              <stop offset="100%" stopColor="#1e1035" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#syl-food-fallback-glow)" />
          {/* Earthen Bowl */}
          <ellipse
            cx="50"
            cy="56"
            rx="26"
            ry="9"
            fill="url(#syl-food-fallback-bowl)"
            stroke="#c084fc"
            strokeWidth="1.5"
          />
          <path
            d="M24 56 C24 74 36 82 50 82 C64 82 76 74 76 56 Z"
            fill="#130a24"
            stroke="#a855f7"
            strokeWidth="1.5"
          />
          {/* Botanical herb sprig sprouting from bowl */}
          <path
            d="M50 56 Q50 36 44 26"
            stroke="#4ade80"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M44 26 C38 22 36 14 42 12 C48 12 48 20 44 26 Z"
            fill="#22c55e"
            stroke="#86efac"
            strokeWidth="0.8"
          />
          <path
            d="M47 34 C54 30 58 34 54 40 Z"
            fill="#16a34a"
            stroke="#86efac"
            strokeWidth="0.6"
          />
          <circle cx="50" cy="62" r="2" fill="#fde047" />
        </svg>
      );
  }
};
