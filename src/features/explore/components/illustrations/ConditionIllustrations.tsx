export interface ConditionIllustrationProps {
  id: string;
  size?: number | string;
  className?: string;
}

export function ConditionIllustration({
  id,
  size = 64,
  className = "",
}: ConditionIllustrationProps) {
  const norm = id.toLowerCase().replace(/[- ]/g, "_");

  switch (norm) {
    case "common_cold":
    case "influenza":
    case "cough":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Respiratory condition"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="#1b1034"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M24 38C20 38 18 34 20 30C22 26 28 26 30 22C32 18 38 18 40 22C44 22 46 26 44 30C46 34 44 38 40 38H24Z"
            fill="#a855f7"
            fillOpacity="0.4"
            stroke="#d8b4fe"
            strokeWidth="1.5"
          />
          <path
            d="M26 44H38M22 48H34"
            stroke="#86efac"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
        </svg>
      );

    case "fever":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Fever condition"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="#241026"
            stroke="#f43f5e"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M30 18H34V36C36.3 37.5 38 40.5 38 44C38 47.3 35.3 50 32 50C28.7 50 26 47.3 26 44C26 40.5 27.7 37.5 30 36V18Z"
            fill="#fb7185"
            fillOpacity="0.3"
            stroke="#f43f5e"
            strokeWidth="1.5"
          />
          <circle cx="32" cy="44" r="4" fill="#e11d48" />
          <rect x="31" y="24" width="2" height="16" fill="#fda4af" />
        </svg>
      );

    case "pneumonia":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Pneumonia condition"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="#281120"
            stroke="#f43f5e"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <path
            d="M32 18V46M32 28C26 24 20 28 20 36C20 42 26 46 32 46M32 28C38 24 44 28 44 36C44 42 38 46 32 46"
            stroke="#fda4af"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="26" cy="38" r="3" fill="#f43f5e" />
          <circle cx="38" cy="38" r="3" fill="#f43f5e" />
        </svg>
      );

    case "dengue":
    case "malaria":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Vector borne illness"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="#2b0e20"
            stroke="#ec4899"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <circle
            cx="32"
            cy="32"
            r="14"
            stroke="#f43f5e"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
          <line
            x1="22"
            y1="22"
            x2="42"
            y2="42"
            stroke="#f43f5e"
            strokeWidth="2.5"
          />
          <ellipse cx="28" cy="30" rx="3" ry="5" fill="#fbcfe8" />
          <ellipse cx="36" cy="30" rx="3" ry="5" fill="#fbcfe8" />
        </svg>
      );

    case "diabetes":
    case "hypertension":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Metabolic cardiovascular condition"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="#171836"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <path
            d="M32 20C28 14 18 14 18 24C18 34 32 46 32 46C32 46 46 34 46 24C46 14 36 14 32 20Z"
            fill="#0284c7"
            fillOpacity="0.25"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <path
            d="M22 26L28 24L32 32L36 22L42 26"
            stroke="#e0f2fe"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Health topic"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="#1e1038"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle
            cx="32"
            cy="32"
            r="14"
            fill="#a855f7"
            fillOpacity="0.3"
            stroke="#d8b4fe"
            strokeWidth="1.5"
          />
          <circle cx="32" cy="32" r="6" fill="#fef08a" />
        </svg>
      );
  }
}
