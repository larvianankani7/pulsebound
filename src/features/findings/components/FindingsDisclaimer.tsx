import { ShieldAlert } from "lucide-react";

export function FindingsDisclaimer() {
  return (
    <aside
      className="mx-auto my-10 max-w-4xl rounded-2xl border border-purple-500/25 bg-[#120822]/85 p-5 sm:p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.1)]"
      aria-label="Educational Safety Disclaimer"
    >
      <div className="flex items-start gap-3.5">
        <ShieldAlert className="h-5 w-5 text-[#c084fc] shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-[#e2d9f3]/85 leading-relaxed font-sans">
          <strong className="text-white font-['Cinzel',serif] tracking-wider block mb-1">
            Educational Awareness Notice
          </strong>
          <p>
            These insights are for general educational awareness. Nutritional
            contributions vary with ingredients, portions, recipes, and
            preparation. This meal exploration does not diagnose deficiencies,
            prescribe diets, or replace personalised advice from a qualified
            healthcare professional.
          </p>
        </div>
      </div>
    </aside>
  );
}
