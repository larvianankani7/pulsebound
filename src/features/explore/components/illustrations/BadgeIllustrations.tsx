import type { ReactNode } from "react";

export interface BadgeIllustrationProps {
  id: string;
  size?: number | string;
  className?: string;
}

export function BadgeIllustration({
  id,
  size = 80,
  className = "",
}: BadgeIllustrationProps) {
  const normId = id.toLowerCase().replace(/[- ]/g, "_");

  // Base circular medal background with outer starburst / concentric rings
  const renderMedal = (
    badgePath: ReactNode,
    ringColor = "#c084fc",
    glowColor = "#a855f7"
  ) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      className={className}
      aria-label={id}
    >
      <defs>
        <radialGradient id={`bg-${normId}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#25103d" />
          <stop offset="70%" stopColor="#140722" />
          <stop offset="100%" stopColor="#08030e" />
        </radialGradient>
        <linearGradient
          id={`gold-${normId}`}
          x1="0"
          y1="0"
          x2="96"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
        <filter
          id={`glow-${normId}`}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Decorative ray glow */}
      <circle cx="48" cy="48" r="44" fill={glowColor} opacity="0.1" />
      {/* Outer scalloped/ring border */}
      <circle
        cx="48"
        cy="48"
        r="42"
        stroke={ringColor}
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      <circle
        cx="48"
        cy="48"
        r="38"
        fill={`url(#bg-${normId})`}
        stroke={`url(#gold-${normId})`}
        strokeWidth="2.5"
      />
      <circle
        cx="48"
        cy="48"
        r="33"
        stroke={ringColor}
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Unique Badge Content */}
      <g filter={`url(#glow-${normId})`}>{badgePath}</g>
    </svg>
  );

  switch (normId) {
    case "first_bloom":
      return renderMedal(
        <>
          <path
            d="M48 24C48 24 38 34 38 44C38 49.5 42.5 54 48 54C53.5 54 58 49.5 58 44C58 34 48 24 48 24Z"
            fill="#a855f7"
          />
          <circle cx="48" cy="44" r="5" fill="#fef08a" />
          <path
            d="M48 54V68M48 60L40 56M48 62L56 58"
            stroke="#4ade80"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>,
        "#d8b4fe",
        "#c084fc"
      );

    case "fever_guardian":
      return renderMedal(
        <>
          <path
            d="M48 26L60 32V46C60 54 55 60 48 64C41 60 36 54 36 46V32L48 26Z"
            fill="#38bdf8"
            fillOpacity="0.3"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <circle cx="48" cy="48" r="5" fill="#38bdf8" />
          <rect x="46" y="34" width="4" height="12" rx="2" fill="#e0f2fe" />
        </>,
        "#38bdf8",
        "#0284c7"
      );

    case "throat_whisperer":
      return renderMedal(
        <>
          <path
            d="M34 48C34 40 40 32 48 32C56 32 62 40 62 48"
            stroke="#d8b4fe"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M38 54C38 48 42 42 48 42C54 42 58 48 58 54"
            stroke="#c084fc"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="48" cy="48" r="3" fill="#facc15" />
          <circle cx="48" cy="30" r="4" fill="#a855f7" />
        </>,
        "#e9d5ff",
        "#9333ea"
      );

    case "breath_of_awareness":
      return renderMedal(
        <>
          <path
            d="M48 30V62M48 44C42 40 36 44 36 52C36 58 42 62 48 62M48 44C54 40 60 44 60 52C60 58 54 62 48 62"
            stroke="#67e8f9"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="36" cy="50" r="3" fill="#a5f3fc" />
          <circle cx="60" cy="50" r="3" fill="#a5f3fc" />
        </>,
        "#67e8f9",
        "#0891b2"
      );

    case "gentle_digestion":
      return renderMedal(
        <>
          <circle
            cx="48"
            cy="48"
            r="14"
            fill="#a855f7"
            fillOpacity="0.3"
            stroke="#c084fc"
            strokeWidth="2"
          />
          <path
            d="M40 48C40 44 44 42 48 42C52 42 56 45 56 48C56 52 52 54 48 54"
            stroke="#facc15"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="48" cy="48" r="2.5" fill="#fef08a" />
        </>,
        "#c084fc",
        "#7e22ce"
      );

    case "seasonal_sentinel":
      return renderMedal(
        <>
          <polygon
            points="48,26 62,34 62,50 48,64 34,50 34,34"
            fill="#22c55e"
            fillOpacity="0.25"
            stroke="#4ade80"
            strokeWidth="2"
          />
          <circle cx="48" cy="45" r="4" fill="#facc15" />
          <circle cx="42" cy="40" r="2" fill="#86efac" />
          <circle cx="54" cy="40" r="2" fill="#86efac" />
        </>,
        "#4ade80",
        "#15803d"
      );

    case "hydration_keeper":
      return renderMedal(
        <>
          <path
            d="M48 28C48 28 36 40 36 48C36 54.6 41.4 60 48 60C54.6 60 60 54.6 60 48C60 40 48 28 48 28Z"
            fill="#38bdf8"
            stroke="#0284c7"
            strokeWidth="2"
          />
          <path
            d="M43 45C43 41 45 37 48 35"
            stroke="#e0f2fe"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>,
        "#38bdf8",
        "#0369a1"
      );

    case "fibre_friend":
      return renderMedal(
        <>
          <ellipse
            cx="48"
            cy="48"
            rx="14"
            ry="16"
            fill="#f59e0b"
            fillOpacity="0.3"
            stroke="#fbbf24"
            strokeWidth="2"
          />
          <path
            d="M48 32V64M44 40L48 44L52 40M44 50L48 54L52 50"
            stroke="#fde68a"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>,
        "#fbbf24",
        "#b45309"
      );

    case "gut_explorer":
      return renderMedal(
        <>
          <circle cx="48" cy="48" r="15" stroke="#c084fc" strokeWidth="2" />
          <polygon points="48,34 52,48 48,46 44,48" fill="#f43f5e" />
          <polygon points="48,62 52,48 48,50 44,48" fill="#e2e8f0" />
          <circle cx="48" cy="48" r="2.5" fill="#fef08a" />
        </>,
        "#f43f5e",
        "#be123c"
      );

    case "oral_care_bloom":
      return renderMedal(
        <>
          <path
            d="M42 34C38 34 36 38 36 44C36 52 40 60 44 60C46 60 46 54 48 54C50 54 50 60 52 60C56 60 60 52 60 44C60 38 58 34 54 34C50 34 49 37 48 37C47 37 46 34 42 34Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <circle cx="44" cy="42" r="2" fill="#38bdf8" />
        </>,
        "#38bdf8",
        "#0284c7"
      );

    case "iron_insight":
      return renderMedal(
        <>
          <circle
            cx="48"
            cy="48"
            r="15"
            stroke="#e11d48"
            strokeWidth="2.5"
            strokeDasharray="5 3"
          />
          <text
            x="48"
            y="54"
            textAnchor="middle"
            fill="#f43f5e"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Cinzel, serif"
          >
            Fe
          </text>
        </>,
        "#f43f5e",
        "#9f1239"
      );

    case "calcium_guardian":
      return renderMedal(
        <>
          <circle cx="48" cy="48" r="15" stroke="#e2e8f0" strokeWidth="2.5" />
          <text
            x="48"
            y="54"
            textAnchor="middle"
            fill="#f8fafc"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Cinzel, serif"
          >
            Ca
          </text>
        </>,
        "#e2e8f0",
        "#475569"
      );

    case "citrus_spark":
      return renderMedal(
        <>
          <circle
            cx="48"
            cy="48"
            r="14"
            fill="#fb923c"
            stroke="#ea580c"
            strokeWidth="2"
          />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="48"
              y1="48"
              x2="48"
              y2="35"
              stroke="#fef08a"
              strokeWidth="1.5"
              transform={`rotate(${deg} 48 48)`}
            />
          ))}
          <circle cx="48" cy="48" r="3" fill="#ffffff" />
        </>,
        "#fb923c",
        "#c2410c"
      );

    case "sunshine_seeker":
      return renderMedal(
        <>
          <circle
            cx="48"
            cy="48"
            r="10"
            fill="#fde047"
            stroke="#eab308"
            strokeWidth="2"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="48"
              y1="28"
              x2="48"
              y2="34"
              stroke="#facc15"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${deg} 48 48)`}
            />
          ))}
        </>,
        "#facc15",
        "#ca8a04"
      );

    case "vitamin_voyager":
      return renderMedal(
        <>
          <polygon
            points="48,28 53,42 66,42 55,51 59,65 48,56 37,65 41,51 30,42 43,42"
            fill="#c084fc"
            stroke="#f3e8ff"
            strokeWidth="1.5"
          />
          <text
            x="48"
            y="52"
            textAnchor="middle"
            fill="#1e1035"
            fontSize="10"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            B12
          </text>
        </>,
        "#d8b4fe",
        "#7e22ce"
      );

    case "food_safety_guardian":
      return renderMedal(
        <>
          <path
            d="M48 26L60 32V44C60 52 55 58 48 62C41 58 36 52 36 44V32L48 26Z"
            fill="#10b981"
            fillOpacity="0.3"
            stroke="#10b981"
            strokeWidth="2"
          />
          <path
            d="M44 44L47 47L53 41"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>,
        "#34d399",
        "#059669"
      );

    case "viral_awareness":
      return renderMedal(
        <>
          <circle
            cx="48"
            cy="48"
            r="12"
            fill="#f43f5e"
            fillOpacity="0.3"
            stroke="#f43f5e"
            strokeWidth="2"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <circle
              key={deg}
              cx="48"
              cy="33"
              r="1.5"
              fill="#f43f5e"
              transform={`rotate(${deg} 48 48)`}
            />
          ))}
          <circle cx="48" cy="48" r="4" fill="#fda4af" />
        </>,
        "#fb7185",
        "#be123c"
      );

    case "lung_guardian":
      return renderMedal(
        <>
          <path
            d="M48 28V60M48 42C40 36 34 42 34 50C34 56 40 60 48 60M48 42C56 36 62 42 62 50C62 56 56 60 48 60"
            stroke="#facc15"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M30 46L24 40M66 46L72 40"
            stroke="#eab308"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>,
        "#facc15",
        "#a16207"
      );

    case "mosquito_watcher":
      return renderMedal(
        <>
          <circle cx="48" cy="48" r="14" stroke="#ec4899" strokeWidth="2" />
          <line
            x1="38"
            y1="38"
            x2="58"
            y2="58"
            stroke="#f43f5e"
            strokeWidth="2.5"
          />
          <ellipse cx="45" cy="46" rx="2.5" ry="4" fill="#fbcfe8" />
          <ellipse cx="51" cy="46" rx="2.5" ry="4" fill="#fbcfe8" />
        </>,
        "#ec4899",
        "#be185d"
      );

    case "malaria_awareness":
      return renderMedal(
        <>
          <circle cx="48" cy="48" r="15" stroke="#a855f7" strokeWidth="2" />
          <path d="M48 36V60M36 48H60" stroke="#c084fc" strokeWidth="2" />
          <circle
            cx="48"
            cy="48"
            r="5"
            fill="#f43f5e"
            stroke="#fda4af"
            strokeWidth="1"
          />
        </>,
        "#c084fc",
        "#6b21a8"
      );

    case "glucose_explorer":
      return renderMedal(
        <>
          <polygon
            points="48,32 58,40 58,54 48,62 38,54 38,40"
            fill="#10b981"
            fillOpacity="0.3"
            stroke="#34d399"
            strokeWidth="2"
          />
          <circle cx="48" cy="47" r="4" fill="#a7f3d0" />
        </>,
        "#34d399",
        "#047857"
      );

    case "heart_guardian":
      return renderMedal(
        <>
          <path
            d="M48 38C45 32 36 32 36 40C36 48 48 58 48 58C48 58 60 48 60 40C60 32 51 32 48 38Z"
            fill="#e11d48"
            stroke="#f43f5e"
            strokeWidth="2"
          />
          <path
            d="M42 46L45 44L48 49L51 43L54 46"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>,
        "#f43f5e",
        "#9f1239"
      );

    case "blood_health_bloom":
      return renderMedal(
        <>
          <ellipse
            cx="48"
            cy="48"
            rx="15"
            ry="10"
            fill="#be123c"
            stroke="#f43f5e"
            strokeWidth="2"
          />
          <ellipse cx="48" cy="48" rx="7" ry="4" fill="#881337" opacity="0.6" />
          <circle cx="48" cy="32" r="2" fill="#fda4af" />
          <circle cx="48" cy="64" r="2" fill="#fda4af" />
        </>,
        "#f43f5e",
        "#881337"
      );

    case "antibiotic_guardian":
      return renderMedal(
        <>
          <rect
            x="36"
            y="36"
            width="24"
            height="24"
            rx="6"
            fill="#38bdf8"
            fillOpacity="0.25"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <circle cx="48" cy="48" r="4" fill="#e0f2fe" />
          <line
            x1="48"
            y1="36"
            x2="48"
            y2="44"
            stroke="#38bdf8"
            strokeWidth="2"
          />
        </>,
        "#38bdf8",
        "#0369a1"
      );

    case "garden_of_wisdom":
      return renderMedal(
        <>
          {/* Tree of Wisdom with crown */}
          <path
            d="M48 24L52 28L58 24L56 32H40L38 24L44 28L48 24Z"
            fill="#facc15"
            stroke="#eab308"
            strokeWidth="1"
          />
          <circle
            cx="48"
            cy="44"
            r="14"
            fill="#a855f7"
            fillOpacity="0.35"
            stroke="#c084fc"
            strokeWidth="2"
          />
          <path
            d="M48 44V64M48 52L40 46M48 56L56 50"
            stroke="#fde047"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="42" cy="40" r="2.5" fill="#fde047" />
          <circle cx="54" cy="40" r="2.5" fill="#fde047" />
          <circle cx="48" cy="36" r="3" fill="#fde047" />
        </>,
        "#facc15",
        "#7e22ce"
      );

    default:
      return renderMedal(
        <circle cx="48" cy="48" r="12" fill="#c084fc" opacity="0.5" />
      );
  }
}
