export interface GardenIllustrationProps {
  id: string;
  size?: number | string;
  className?: string;
}

export function GardenItemIllustration({
  id,
  size = 56,
  className = "",
}: GardenIllustrationProps) {
  const normId = id.toLowerCase().replace(/[- ]/g, "_");

  switch (normId) {
    case "tulsi":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Tulsi leaf"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#tulsi-bg)"
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 14C32 14 20 25 20 36C20 42.6 25.4 48 32 48C38.6 48 44 42.6 44 36C44 25 32 14 32 14Z"
            fill="url(#tulsi-leaf)"
          />
          <path
            d="M32 20V46"
            stroke="#4ade80"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M32 30L26 26M32 36L38 32M32 40L27 38"
            stroke="#86efac"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
          <defs>
            <radialGradient id="tulsi-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1e1035" />
              <stop offset="100%" stopColor="#0c0617" />
            </radialGradient>
            <linearGradient
              id="tulsi-leaf"
              x1="20"
              y1="14"
              x2="44"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#22c55e" />
              <stop offset="50%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#052e16" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "ginger":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Ginger root"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#ginger-bg)"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M22 36C18 32 20 22 26 22C30 22 31 25 34 24C37 23 37 18 42 18C47 18 48 24 45 28C43 31 43 34 46 36C50 39 48 46 43 46C38 46 35 42 32 43C29 44 28 48 23 47C18 46 19 40 22 36Z"
            fill="url(#ginger-root)"
            stroke="#ca8a04"
            strokeWidth="1.5"
          />
          <path
            d="M26 30C28 32 31 31 34 29M35 37C37 39 41 38 43 35"
            stroke="#fef08a"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          <defs>
            <radialGradient id="ginger-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#221235" />
              <stop offset="100%" stopColor="#0d0718" />
            </radialGradient>
            <linearGradient
              id="ginger-root"
              x1="20"
              y1="18"
              x2="48"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fde047" />
              <stop offset="60%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "turmeric":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Turmeric root"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#turmeric-bg)"
            stroke="#eab308"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M20 38C17 33 21 24 28 22C35 20 44 26 44 32C44 38 38 46 30 46C24 46 22 42 20 38Z"
            fill="url(#turmeric-body)"
            stroke="#ea580c"
            strokeWidth="1.5"
          />
          <circle
            cx="38"
            cy="30"
            r="5"
            fill="#f97316"
            stroke="#fbbf24"
            strokeWidth="1"
          />
          <circle cx="38" cy="30" r="2.5" fill="#fef08a" />
          <defs>
            <radialGradient id="turmeric-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#25102a" />
              <stop offset="100%" stopColor="#0c0414" />
            </radialGradient>
            <linearGradient
              id="turmeric-body"
              x1="20"
              y1="20"
              x2="44"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "mint":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Mint leaves"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#mint-bg)"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 16C32 16 22 24 24 34C26 44 32 46 32 46C32 46 38 44 40 34C42 24 32 16 32 16Z"
            fill="url(#mint-leaf1)"
          />
          <path
            d="M22 28C22 28 14 34 18 42C22 50 30 46 30 46C30 46 28 38 22 28Z"
            fill="url(#mint-leaf2)"
            opacity="0.9"
          />
          <path
            d="M32 20V44"
            stroke="#86efac"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <radialGradient id="mint-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0c2336" />
              <stop offset="100%" stopColor="#05101c" />
            </radialGradient>
            <linearGradient
              id="mint-leaf1"
              x1="24"
              y1="16"
              x2="40"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#34d399" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient
              id="mint-leaf2"
              x1="14"
              y1="28"
              x2="30"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#10b981" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "chamomile":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Chamomile flower"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#chamo-bg)"
            stroke="#facc15"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          {/* Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse
              key={deg}
              cx="32"
              cy="18"
              rx="4"
              ry="9"
              fill="#f8fafc"
              stroke="#e2e8f0"
              strokeWidth="0.8"
              transform={`rotate(${deg} 32 32)`}
            />
          ))}
          <circle
            cx="32"
            cy="32"
            r="9"
            fill="url(#chamo-center)"
            stroke="#d97706"
            strokeWidth="1"
          />
          <defs>
            <radialGradient id="chamo-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2a1b38" />
              <stop offset="100%" stopColor="#0c0714" />
            </radialGradient>
            <radialGradient id="chamo-center" cx="40%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "aloe_vera":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Aloe vera"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#aloe-bg)"
            stroke="#4ade80"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 14C34 26 38 42 42 48C38 48 34 46 32 46C30 46 26 48 22 48C26 42 30 26 32 14Z"
            fill="url(#aloe-stalk)"
          />
          <path
            d="M22 24C26 32 30 42 32 46C26 46 20 44 14 40C16 34 19 28 22 24Z"
            fill="url(#aloe-left)"
          />
          <path
            d="M42 24C38 32 34 42 32 46C38 46 44 44 50 40C48 34 45 28 42 24Z"
            fill="url(#aloe-right)"
          />
          <defs>
            <radialGradient id="aloe-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d2822" />
              <stop offset="100%" stopColor="#04120e" />
            </radialGradient>
            <linearGradient
              id="aloe-stalk"
              x1="32"
              y1="14"
              x2="32"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#86efac" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient
              id="aloe-left"
              x1="14"
              y1="24"
              x2="32"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4ade80" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
            <linearGradient
              id="aloe-right"
              x1="50"
              y1="24"
              x2="32"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4ade80" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "lemongrass":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Lemongrass"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#lemongrass-bg)"
            stroke="#bef264"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M28 48C28 34 32 20 44 14"
            stroke="#bef264"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M32 48C32 36 34 22 22 16"
            stroke="#84cc16"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M30 48C30 38 31 25 36 15"
            stroke="#a3e635"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <radialGradient id="lemongrass-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#192816" />
              <stop offset="100%" stopColor="#091307" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "neem":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Neem leaves"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#neem-bg)"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M18 46C24 38 36 26 46 18"
            stroke="#86efac"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M26 36C22 34 20 30 22 28C26 28 30 32 30 32"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="1"
          />
          <path
            d="M34 28C32 24 32 20 35 19C38 21 39 25 38 27"
            fill="#4ade80"
            stroke="#15803d"
            strokeWidth="1"
          />
          <path
            d="M36 38C40 38 44 36 44 33C42 31 38 33 37 36"
            fill="#16a34a"
            stroke="#14532d"
            strokeWidth="1"
          />
          <defs>
            <radialGradient id="neem-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f2619" />
              <stop offset="100%" stopColor="#05120a" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "cinnamon":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Cinnamon stick"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#cinna-bg)"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <rect
            x="22"
            y="16"
            width="12"
            height="34"
            rx="4"
            transform="rotate(-15 28 33)"
            fill="url(#cinna-bark)"
            stroke="#78350f"
            strokeWidth="1.5"
          />
          <ellipse
            cx="32"
            cy="18"
            rx="5"
            ry="3"
            transform="rotate(-15 32 18)"
            fill="#fde68a"
            stroke="#92400e"
            strokeWidth="1"
          />
          <defs>
            <radialGradient id="cinna-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2e1818" />
              <stop offset="100%" stopColor="#120808" />
            </radialGradient>
            <linearGradient
              id="cinna-bark"
              x1="22"
              y1="16"
              x2="34"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "orange":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Orange"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#orange-bg)"
            stroke="#fb923c"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle
            cx="32"
            cy="34"
            r="16"
            fill="url(#orange-body)"
            stroke="#ea580c"
            strokeWidth="1.5"
          />
          <path
            d="M32 18C33 14 36 12 40 13C41 17 38 19 32 18Z"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="1"
          />
          <circle cx="28" cy="28" r="1.5" fill="#fef08a" opacity="0.6" />
          <defs>
            <radialGradient id="orange-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2e1614" />
              <stop offset="100%" stopColor="#120606" />
            </radialGradient>
            <radialGradient id="orange-body" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="70%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "lemon":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Lemon"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#lemon-bg)"
            stroke="#facc15"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M44 20C48 24 48 36 40 42C32 48 20 48 16 44C12 40 12 28 20 22C28 16 40 16 44 20Z"
            fill="url(#lemon-body)"
            stroke="#ca8a04"
            strokeWidth="1.5"
          />
          <circle cx="28" cy="28" r="2" fill="#ffffff" opacity="0.4" />
          <defs>
            <radialGradient id="lemon-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2a2512" />
              <stop offset="100%" stopColor="#100e04" />
            </radialGradient>
            <linearGradient
              id="lemon-body"
              x1="16"
              y1="18"
              x2="46"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fef08a" />
              <stop offset="60%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "amla":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Amla"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#amla-bg)"
            stroke="#a3e635"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle
            cx="32"
            cy="32"
            r="16"
            fill="url(#amla-body)"
            stroke="#65a30d"
            strokeWidth="1.5"
          />
          <path
            d="M32 16V48M16 32H48M21 21L43 43M43 21L21 43"
            stroke="#4d7c0f"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <defs>
            <radialGradient id="amla-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#182c10" />
              <stop offset="100%" stopColor="#071203" />
            </radialGradient>
            <radialGradient id="amla-body" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#bef264" />
              <stop offset="60%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#4d7c0f" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "guava":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Guava"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#guava-bg)"
            stroke="#4ade80"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <ellipse
            cx="32"
            cy="33"
            rx="16"
            ry="17"
            fill="url(#guava-outer)"
            stroke="#15803d"
            strokeWidth="1.5"
          />
          <circle cx="32" cy="33" r="10" fill="#f43f5e" opacity="0.85" />
          <circle cx="30" cy="32" r="1" fill="#fef08a" />
          <circle cx="34" cy="31" r="1" fill="#fef08a" />
          <circle cx="32" cy="35" r="1" fill="#fef08a" />
          <defs>
            <radialGradient id="guava-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#132a1e" />
              <stop offset="100%" stopColor="#06120b" />
            </radialGradient>
            <radialGradient id="guava-outer" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="80%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "apple":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Apple"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#apple-bg)"
            stroke="#f43f5e"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 20C29 16 22 16 18 22C14 28 14 40 24 46C28 48 30 46 32 46C34 46 36 48 40 46C50 40 50 28 46 22C42 16 35 16 32 20Z"
            fill="url(#apple-red)"
            stroke="#be123c"
            strokeWidth="1.5"
          />
          <path
            d="M32 20C32 16 34 12 36 10"
            stroke="#78350f"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M36 12C40 10 43 12 43 14C41 16 38 15 36 12Z"
            fill="#4ade80"
          />
          <defs>
            <radialGradient id="apple-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2e0f18" />
              <stop offset="100%" stopColor="#120408" />
            </radialGradient>
            <radialGradient id="apple-red" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="60%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#881337" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "banana":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Banana"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#banana-bg)"
            stroke="#facc15"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M18 40C20 46 36 50 46 32C50 24 48 16 48 16C48 16 44 22 36 30C28 38 18 40 18 40Z"
            fill="url(#banana-body)"
            stroke="#ca8a04"
            strokeWidth="1.5"
          />
          <path
            d="M48 16L51 14"
            stroke="#713f12"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <radialGradient id="banana-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#282410" />
              <stop offset="100%" stopColor="#100e03" />
            </radialGradient>
            <linearGradient
              id="banana-body"
              x1="18"
              y1="46"
              x2="48"
              y2="16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fef08a" />
              <stop offset="70%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "papaya":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Papaya"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#papaya-bg)"
            stroke="#fb923c"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 16C26 22 20 30 20 38C20 46 26 50 32 50C38 50 44 46 44 38C44 30 38 22 32 16Z"
            fill="url(#papaya-body)"
            stroke="#ea580c"
            strokeWidth="1.5"
          />
          <ellipse cx="32" cy="38" rx="5" ry="7" fill="#18181b" />
          <circle cx="31" cy="36" r="1" fill="#a1a1aa" />
          <circle cx="33" cy="39" r="1" fill="#a1a1aa" />
          <defs>
            <radialGradient id="papaya-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2c170f" />
              <stop offset="100%" stopColor="#100704" />
            </radialGradient>
            <linearGradient
              id="papaya-body"
              x1="20"
              y1="16"
              x2="44"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fdba74" />
              <stop offset="60%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "pomegranate":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Pomegranate"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#pom-bg)"
            stroke="#e11d48"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle
            cx="32"
            cy="34"
            r="16"
            fill="url(#pom-outer)"
            stroke="#9f1239"
            strokeWidth="1.5"
          />
          {/* Crown */}
          <path
            d="M28 18L30 14L32 17L34 14L36 18"
            stroke="#be123c"
            strokeWidth="1.5"
            fill="#be123c"
          />
          {/* Seeds */}
          <circle cx="30" cy="32" r="2" fill="#fda4af" />
          <circle cx="34" cy="33" r="2" fill="#fda4af" />
          <circle cx="31" cy="37" r="2" fill="#fda4af" />
          <defs>
            <radialGradient id="pom-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2e0b17" />
              <stop offset="100%" stopColor="#100307" />
            </radialGradient>
            <radialGradient id="pom-outer" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="70%" stopColor="#be123c" />
              <stop offset="100%" stopColor="#881337" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "carrot":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Carrot"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#carrot-bg)"
            stroke="#f97316"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M38 18L44 14M38 18L46 20M38 18L42 22"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M38 18L40 24C36 34 26 46 20 48C19 46 24 36 34 20L38 18Z"
            fill="url(#carrot-body)"
            stroke="#ea580c"
            strokeWidth="1.5"
          />
          <defs>
            <radialGradient id="carrot-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2c140a" />
              <stop offset="100%" stopColor="#100603" />
            </radialGradient>
            <linearGradient
              id="carrot-body"
              x1="38"
              y1="18"
              x2="20"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fdba74" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "spinach":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Spinach"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#spinach-bg)"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 14C24 18 18 28 20 38C22 46 30 48 32 48C34 48 42 46 44 38C46 28 40 18 32 14Z"
            fill="url(#spinach-leaf)"
            stroke="#15803d"
            strokeWidth="1.5"
          />
          <path
            d="M32 18V48"
            stroke="#bbf7d0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M32 26L26 23M32 32L38 29M32 38L27 36"
            stroke="#bbf7d0"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
          <defs>
            <radialGradient id="spinach-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0b2416" />
              <stop offset="100%" stopColor="#030d07" />
            </radialGradient>
            <linearGradient
              id="spinach-leaf"
              x1="20"
              y1="14"
              x2="44"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4ade80" />
              <stop offset="60%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "garlic":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Garlic"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#garlic-bg)"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 16C31 20 20 26 20 36C20 44 26 48 32 48C38 48 44 44 44 36C44 26 33 20 32 16Z"
            fill="url(#garlic-bulb)"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <path d="M32 20C32 28 32 44 32 48" stroke="#94a3b8" strokeWidth="1" />
          <path
            d="M26 26C27 34 29 44 32 48"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <path
            d="M38 26C37 34 35 44 32 48"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <defs>
            <radialGradient id="garlic-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#222030" />
              <stop offset="100%" stopColor="#0d0c14" />
            </radialGradient>
            <linearGradient
              id="garlic-bulb"
              x1="20"
              y1="16"
              x2="44"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f8fafc" />
              <stop offset="70%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "honey":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Honey dipper or pot"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#honey-bg)"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M22 26H42V42C42 46 38 48 32 48C26 48 22 46 22 42V26Z"
            fill="url(#honey-pot)"
            stroke="#d97706"
            strokeWidth="1.5"
          />
          <ellipse
            cx="32"
            cy="26"
            rx="10"
            ry="3"
            fill="#fde68a"
            stroke="#d97706"
            strokeWidth="1"
          />
          <path
            d="M28 26V36C28 38 30 40 32 40C34 40 36 38 36 36V26"
            fill="#fbbf24"
            opacity="0.9"
          />
          <defs>
            <radialGradient id="honey-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2c1d0c" />
              <stop offset="100%" stopColor="#120b04" />
            </radialGradient>
            <linearGradient
              id="honey-pot"
              x1="22"
              y1="26"
              x2="42"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fde68a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "curd":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Curd/Yogurt bowl"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#curd-bg)"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M16 28C16 42 22 46 32 46C42 46 48 42 48 28H16Z"
            fill="url(#curd-bowl)"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
          <ellipse
            cx="32"
            cy="28"
            rx="16"
            ry="6"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          <ellipse
            cx="32"
            cy="28"
            rx="10"
            ry="3"
            fill="#e9d5ff"
            opacity="0.6"
          />
          <defs>
            <radialGradient id="curd-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#201035" />
              <stop offset="100%" stopColor="#0b0514" />
            </radialGradient>
            <linearGradient
              id="curd-bowl"
              x1="16"
              y1="28"
              x2="48"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a855f7" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "lentils":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Lentils"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#lentils-bg)"
            stroke="#eab308"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle
            cx="28"
            cy="28"
            r="7"
            fill="#facc15"
            stroke="#ca8a04"
            strokeWidth="1.2"
          />
          <circle
            cx="38"
            cy="34"
            r="7"
            fill="#fb923c"
            stroke="#ea580c"
            strokeWidth="1.2"
          />
          <circle
            cx="26"
            cy="40"
            r="6"
            fill="#a3e635"
            stroke="#65a30d"
            strokeWidth="1.2"
          />
          <circle
            cx="36"
            cy="22"
            r="5"
            fill="#fde047"
            stroke="#ca8a04"
            strokeWidth="1"
          />
          <defs>
            <radialGradient id="lentils-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#291e0a" />
              <stop offset="100%" stopColor="#0f0b03" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "leafy_vegetables":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Leafy greens"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#leafy-bg)"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M22 46C20 34 26 22 36 16C40 26 40 38 32 46H22Z"
            fill="url(#leafy-1)"
            stroke="#16a34a"
            strokeWidth="1.2"
          />
          <path
            d="M30 46C34 36 40 24 48 20C48 32 44 42 36 46H30Z"
            fill="url(#leafy-2)"
            opacity="0.8"
          />
          <path
            d="M20 46C20 40 26 32 30 26"
            stroke="#86efac"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <defs>
            <radialGradient id="leafy-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d2618" />
              <stop offset="100%" stopColor="#04120a" />
            </radialGradient>
            <linearGradient
              id="leafy-1"
              x1="20"
              y1="16"
              x2="36"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4ade80" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient
              id="leafy-2"
              x1="30"
              y1="20"
              x2="48"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#22c55e" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "nuts_seeds":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Nuts and seeds"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#nuts-bg)"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          {/* Almond shape */}
          <path
            d="M22 34C20 26 26 18 32 18C38 18 40 26 36 34C32 42 24 42 22 34Z"
            fill="url(#nuts-almond)"
            stroke="#92400e"
            strokeWidth="1.5"
          />
          {/* Seeds */}
          <ellipse
            cx="40"
            cy="38"
            rx="4"
            ry="7"
            transform="rotate(30 40 38)"
            fill="#fef08a"
            stroke="#ca8a04"
            strokeWidth="1"
          />
          <ellipse
            cx="26"
            cy="42"
            rx="3"
            ry="5"
            transform="rotate(-40 26 42)"
            fill="#fed7aa"
            stroke="#c2410c"
            strokeWidth="1"
          />
          <defs>
            <radialGradient id="nuts-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2a1810" />
              <stop offset="100%" stopColor="#100805" />
            </radialGradient>
            <linearGradient
              id="nuts-almond"
              x1="20"
              y1="18"
              x2="40"
              y2="42"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "clean_water":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Clean water droplet"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#water-bg)"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 14C32 14 18 28 18 38C18 45.7 24.3 52 32 52C39.7 52 46 45.7 46 38C46 28 32 14 32 14Z"
            fill="url(#water-drop)"
            stroke="#0284c7"
            strokeWidth="1.5"
          />
          <path
            d="M26 34C26 30 29 25 32 22"
            stroke="#e0f2fe"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <radialGradient id="water-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0c233c" />
              <stop offset="100%" stopColor="#040e18" />
            </radialGradient>
            <linearGradient
              id="water-drop"
              x1="18"
              y1="14"
              x2="46"
              y2="52"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7dd3fc" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "rest":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Rest and moon"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#rest-bg)"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M38 18C28 18 20 26 20 36C20 44 26 50 34 50C30 46 28 40 30 34C32 26 38 20 44 20C42 19 40 18 38 18Z"
            fill="url(#rest-moon)"
            stroke="#d8b4fe"
            strokeWidth="1.5"
          />
          {/* Small stars */}
          <path
            d="M42 28L43 30L45 31L43 32L42 34L41 32L39 31L41 30Z"
            fill="#fef08a"
          />
          <path
            d="M26 22L27 23.5L28.5 24L27 24.5L26 26L25 24.5L23.5 24L25 23.5Z"
            fill="#e9d5ff"
          />
          <defs>
            <radialGradient id="rest-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1e1038" />
              <stop offset="100%" stopColor="#090414" />
            </radialGradient>
            <linearGradient
              id="rest-moon"
              x1="20"
              y1="18"
              x2="44"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f3e8ff" />
              <stop offset="60%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "handwashing":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Handwashing hygiene"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#hand-bg)"
            stroke="#67e8f9"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          {/* Hands and bubbles */}
          <path
            d="M22 38C22 32 26 28 32 28C38 28 42 32 42 38C42 42 38 46 32 46C26 46 22 42 22 38Z"
            fill="url(#hand-soap)"
            stroke="#06b6d4"
            strokeWidth="1.5"
          />
          <circle cx="24" cy="22" r="3" fill="#a5f3fc" opacity="0.8" />
          <circle cx="34" cy="18" r="4" fill="#a5f3fc" opacity="0.85" />
          <circle cx="42" cy="24" r="2.5" fill="#a5f3fc" opacity="0.75" />
          <defs>
            <radialGradient id="hand-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#082b36" />
              <stop offset="100%" stopColor="#031016" />
            </radialGradient>
            <linearGradient
              id="hand-soap"
              x1="22"
              y1="28"
              x2="42"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#cffafe" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "food_hygiene":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Food safety shield"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#hygiene-bg)"
            stroke="#4ade80"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M32 16L44 22V34C44 42 38 48 32 50C26 48 20 42 20 34V22L32 16Z"
            fill="url(#shield-fill)"
            stroke="#16a34a"
            strokeWidth="1.5"
          />
          <path
            d="M28 32L31 35L37 28"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <radialGradient id="hygiene-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d281a" />
              <stop offset="100%" stopColor="#04120a" />
            </radialGradient>
            <linearGradient
              id="shield-fill"
              x1="20"
              y1="16"
              x2="44"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4ade80" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "mosquito_protection":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Mosquito protection"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#mosq-bg)"
            stroke="#ec4899"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle cx="32" cy="32" r="16" stroke="#f43f5e" strokeWidth="2.5" />
          <line
            x1="21"
            y1="21"
            x2="43"
            y2="43"
            stroke="#f43f5e"
            strokeWidth="2.5"
          />
          {/* Insect wings */}
          <ellipse cx="28" cy="30" rx="3" ry="5" fill="#fbcfe8" opacity="0.8" />
          <ellipse cx="36" cy="30" rx="3" ry="5" fill="#fbcfe8" opacity="0.8" />
          <circle cx="32" cy="32" r="2.5" fill="#e11d48" />
          <defs>
            <radialGradient id="mosq-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2c0c1e" />
              <stop offset="100%" stopColor="#12040c" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "medical_consultation":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Medical consultation stethoscope"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#med-bg)"
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          {/* Stethoscope / Caduceus stylized cross */}
          <rect
            x="28"
            y="18"
            width="8"
            height="28"
            rx="4"
            fill="url(#cross-fill)"
            stroke="#c084fc"
            strokeWidth="1"
          />
          <rect
            x="18"
            y="28"
            width="28"
            height="8"
            rx="4"
            fill="url(#cross-fill)"
            stroke="#c084fc"
            strokeWidth="1"
          />
          <circle cx="32" cy="32" r="5" fill="#f3e8ff" />
          <defs>
            <radialGradient id="med-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#25103d" />
              <stop offset="100%" stopColor="#0c0416" />
            </radialGradient>
            <linearGradient
              id="cross-fill"
              x1="18"
              y1="18"
              x2="46"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#e9d5ff" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6b21a8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "prescribed_treatment":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          className={className}
          aria-label="Prescription capsule"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#rx-bg)"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          {/* Capsule tilted 45 deg */}
          <g transform="rotate(-45 32 32)">
            <rect
              x="24"
              y="20"
              width="16"
              height="12"
              rx="4"
              fill="#38bdf8"
              stroke="#0284c7"
              strokeWidth="1"
            />
            <rect
              x="24"
              y="32"
              width="16"
              height="12"
              rx="4"
              fill="#f8fafc"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          </g>
          <defs>
            <radialGradient id="rx-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d253c" />
              <stop offset="100%" stopColor="#040e18" />
            </radialGradient>
          </defs>
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
          aria-label={id}
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="#170c2a"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle cx="32" cy="32" r="14" fill="#a855f7" opacity="0.3" />
          <circle cx="32" cy="32" r="6" fill="#d8b4fe" />
        </svg>
      );
  }
}
