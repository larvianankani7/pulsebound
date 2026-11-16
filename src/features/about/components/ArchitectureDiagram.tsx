import { useState } from "react";
import {
  Layers,
  Code2,
  Database,
  Globe,
  Palette,
  Cpu,
  Monitor,
  User,
  ExternalLink,
} from "lucide-react";

export function ArchitectureDiagram() {
  const [showCode, setShowCode] = useState(false);

  const mermaidSource = `flowchart TD
    A["User"] --> B["SYLVARA React Application"]

    B --> C["Main Menu & Navigation"]

    C --> D["Findings"]
    C --> E["Explore"]
    C --> F["Learnings"]
    C --> G["Settings"]
    C --> H["About"]

    D --> I["Meal Discovery & Food Content"]
    E --> J["Garden Scenarios & Interactions"]
    F --> K["Lessons & Quizzes"]

    I --> L["Shared Content Layer"]
    J --> L
    K --> L

    L --> M["Foods, Nutrients, Plants & Lessons"]

    D --> N["Zustand State"]
    E --> N
    F --> N
    G --> N

    N --> O["Dexie / IndexedDB"]
    G --> P["localStorage Preferences"]

    B --> Q["English / Hindi i18n"]
    B --> R["Motion & UI Components"]`;

  return (
    <div className="relative mt-8 rounded-2xl border border-[#c084fc]/25 bg-[#0e0819]/80 backdrop-blur-md p-5 sm:p-7 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-[#c084fc]/15">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc] shadow-[0_0_15px_rgba(192,132,252,0.25)]">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold tracking-wider text-white">
              Application Architecture Flowchart
            </h4>
            <p className="text-xs text-[#d8b4fe]/75">
              Client-side data flow, modular engines & offline persistence
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2 rounded-lg border border-[#c084fc]/30 bg-[#1a0e2d]/70 px-3 py-1.5 text-xs font-medium text-[#d8b4fe] transition-all duration-200 hover:border-[#d8b4fe]/70 hover:bg-[#251240] hover:text-white cursor-pointer"
          aria-expanded={showCode}
        >
          <Code2 className="h-3.5 w-3.5" />
          <span>{showCode ? "View Flowchart" : "View Mermaid Source"}</span>
        </button>
      </div>

      {showCode ? (
        /* Raw Mermaid Specification */
        <div className="mt-5 rounded-xl border border-purple-500/20 bg-[#07050a]/90 p-4 font-mono text-xs sm:text-sm text-purple-200 overflow-x-auto">
          <pre>{mermaidSource}</pre>
        </div>
      ) : (
        /* Visual Architecture Flowchart */
        <div className="mt-6 overflow-x-auto pb-4 no-scrollbar">
          <div className="min-w-[760px] flex flex-col gap-6">
            {/* Layer 1: User & Core App Entry */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 rounded-xl border border-purple-400/40 bg-[#1a0e2d] px-6 py-2.5 shadow-[0_0_20px_rgba(192,132,252,0.25)]">
                <User className="h-4 w-4 text-[#c084fc]" />
                <span className="font-['Cinzel',serif] text-sm font-semibold tracking-wider text-white">
                  User
                </span>
              </div>

              {/* Connecting line */}
              <div className="h-6 w-0.5 bg-gradient-to-b from-purple-400/60 to-purple-400/30" />

              <div className="flex items-center gap-3 rounded-xl border border-purple-400/50 bg-[#24133f] px-8 py-3 shadow-[0_0_25px_rgba(192,132,252,0.3)]">
                <Monitor className="h-4 w-4 text-[#d8b4fe]" />
                <span className="font-['Cinzel',serif] text-sm font-bold tracking-wider text-white">
                  SYLVARA React Application
                </span>
              </div>
            </div>

            {/* Core Application Extensions: i18n & Motion */}
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto w-full">
              <div className="flex items-center justify-center gap-2 rounded-lg border border-purple-500/25 bg-[#140b24]/90 px-4 py-2 text-xs text-[#d8b4fe]">
                <Globe className="h-3.5 w-3.5 text-[#c084fc]" />
                <span>English / Hindi i18n</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-purple-500/25 bg-[#140b24]/90 px-4 py-2 text-xs text-[#d8b4fe]">
                <Palette className="h-3.5 w-3.5 text-[#c084fc]" />
                <span>Motion & UI Components</span>
              </div>
            </div>

            {/* Downward line to Navigation Hub */}
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-gradient-to-b from-purple-400/40 to-purple-400/60" />
            </div>

            {/* Main Navigation Hub */}
            <div className="mx-auto flex items-center justify-center rounded-xl border border-purple-400/40 bg-[#1b0e33] px-6 py-2 text-xs font-semibold tracking-wider uppercase text-purple-200 shadow-[0_0_15px_rgba(192,132,252,0.2)]">
              Main Menu & Navigation Routing
            </div>

            {/* Connector lines to the 5 Feature Modules */}
            <div className="grid grid-cols-5 gap-3 pt-2">
              {[
                {
                  name: "Findings",
                  route: "/findings",
                  desc: "Meal & Nutrient Discovery",
                },
                {
                  name: "Explore",
                  route: "/explore",
                  desc: "Interactive Garden Scenarios",
                },
                {
                  name: "Learnings",
                  route: "/learnings",
                  desc: "Lessons, Quizzes & Badges",
                },
                {
                  name: "Settings",
                  route: "/settings",
                  desc: "Language & Audio Prefs",
                },
                {
                  name: "About",
                  route: "/about",
                  desc: "Project Showcase & Architecture",
                },
              ].map((sec) => (
                <div
                  key={sec.name}
                  className="flex flex-col items-center p-3 rounded-xl border border-purple-500/25 bg-[#150c26]/90 text-center transition-all duration-300 hover:border-purple-400/60 hover:bg-[#1e1038]"
                >
                  <span className="font-['Cinzel',serif] text-xs font-bold uppercase tracking-wider text-[#e9d5ff]">
                    {sec.name}
                  </span>
                  <span className="mt-1 text-[11px] text-[#c084fc]/80 font-mono">
                    {sec.route}
                  </span>
                  <span className="mt-1 text-[10px] text-purple-300/60 leading-tight">
                    {sec.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Middle Layer: Domain Engines & Shared Content */}
            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="rounded-xl border border-purple-500/20 bg-[#120a21]/90 p-3 text-center">
                <span className="text-xs font-semibold text-purple-200">
                  Meal Discovery & Food Engine
                </span>
                <p className="mt-1 text-[10px] text-[#d8b4fe]/60">
                  Calculates meal harmony without calorie pressure
                </p>
              </div>
              <div className="rounded-xl border border-purple-500/20 bg-[#120a21]/90 p-3 text-center">
                <span className="text-xs font-semibold text-purple-200">
                  Garden Scenarios & Interactions
                </span>
                <p className="mt-1 text-[10px] text-[#d8b4fe]/60">
                  Validates environmental & botanical scenarios
                </p>
              </div>
              <div className="rounded-xl border border-purple-500/20 bg-[#120a21]/90 p-3 text-center">
                <span className="text-xs font-semibold text-purple-200">
                  Lessons & 3-Question Quizzes
                </span>
                <p className="mt-1 text-[10px] text-[#d8b4fe]/60">
                  Single-attempt evaluation & badge triggers
                </p>
              </div>
            </div>

            {/* Content Layer Central Repository */}
            <div className="mx-auto w-full max-w-2xl rounded-2xl border border-purple-400/30 bg-gradient-to-r from-[#170c2c] via-[#20103d] to-[#170c2c] p-4 text-center shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <div className="flex items-center justify-center gap-2">
                <Cpu className="h-4 w-4 text-[#c084fc]" />
                <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold tracking-wider text-white">
                  Shared Content Layer & Domain Definitions
                </span>
              </div>
              <p className="mt-1.5 text-xs text-[#d8b4fe]/80">
                Verified Food Composition Data • Nutrient Functions • Plant
                Profiles • Curated Lessons
              </p>
            </div>

            {/* Persistence Layer */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto w-full pt-1">
              <div className="flex items-center gap-3 rounded-xl border border-purple-500/30 bg-[#160b29] p-3.5 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#271247] text-[#c084fc]">
                  <Database className="h-4 w-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white">
                    Dexie / IndexedDB
                  </h5>
                  <p className="text-[10px] text-[#d8b4fe]/70 leading-tight">
                    Structured game progress, unlocked badges & quiz attempts
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-purple-500/30 bg-[#160b29] p-3.5 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#271247] text-[#c084fc]">
                  <ExternalLink className="h-4 w-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white">
                    localStorage State
                  </h5>
                  <p className="text-[10px] text-[#d8b4fe]/70 leading-tight">
                    Audio preferences, volume, language preference & UI toggles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Explanatory summary underneath */}
      <div className="mt-6 pt-5 border-t border-[#c084fc]/15 text-xs text-[#d8b4fe]/85 leading-relaxed">
        <p>
          <strong className="text-white font-medium">
            Architectural Flow Summary:
          </strong>{" "}
          SYLVARA operates as a{" "}
          <span className="text-[#c084fc] font-semibold">
            100% frontend-only modular monolith
          </span>
          . When a user interacts with the Main Menu, React Router routes them
          to independent sectional controllers. The feature engines (Findings,
          Explore, Learnings) query the immutable{" "}
          <span className="text-[#c084fc] font-semibold">
            Shared Content Layer
          </span>{" "}
          for validated nutritional and botanical schemas. Real-time gameplay
          state is managed reactively via{" "}
          <span className="text-[#c084fc] font-semibold">Zustand</span>, which
          automatically persists long-term achievements and unlocked knowledge
          into browser-local{" "}
          <span className="text-[#c084fc] font-semibold">
            Dexie / IndexedDB
          </span>
          , ensuring offline availability with zero cloud database dependency.
        </p>
      </div>
    </div>
  );
}
