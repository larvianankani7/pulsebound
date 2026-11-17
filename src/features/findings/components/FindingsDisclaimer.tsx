import { ShieldAlert } from "lucide-react";

export function FindingsDisclaimer() {
  return (
    <aside
      className="mx-auto my-10 max-w-4xl rounded-2xl border border-red-900/40 bg-[#160205]/85 p-5 sm:p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(227,38,54,0.15)]"
      aria-label="Educational Safety Disclaimer"
    >
      <div className="flex items-start gap-3.5">
        <ShieldAlert className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-[#f3eeee]/85 leading-relaxed font-sans">
          <strong className="text-white font-['Cinzel',serif] tracking-wider block mb-1">
            Educational Awareness Notice
          </strong>
          <p>
            These insights are designed exclusively for general educational
            awareness. Nutritional and bio-kinetic contributions vary with
            individual physiology, ingredients, and preparation methods. This
            exploration does not diagnose conditions, prescribe clinical diets,
            or replace qualified medical guidance.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default FindingsDisclaimer;
