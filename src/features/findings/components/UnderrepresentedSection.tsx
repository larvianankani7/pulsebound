import { HelpCircle, PlusCircle, Sparkles } from "lucide-react";
import { type UnderrepresentedNutrient } from "../types";

interface UnderrepresentedSectionProps {
  underrepresented: UnderrepresentedNutrient[];
}

export function UnderrepresentedSection({
  underrepresented,
}: UnderrepresentedSectionProps) {
  if (underrepresented.length === 0) {
    return (
      <section className="my-10" aria-labelledby="underrepresented-title">
        <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-6 sm:p-8 text-center shadow-[0_0_40px_rgba(168,85,247,0.12)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-2">
            <Sparkles className="w-3 h-3 text-[#d8b4fe]" />
            <span>NUTRITIONAL HARMONY</span>
          </div>
          <h3
            id="underrepresented-title"
            className="font-['Cinzel',serif] text-xl font-bold text-white"
          >
            Diverse Food Spectrum Detected
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#d8b4fe]/80 max-w-xl mx-auto font-sans">
            Your described meal incorporates a rich array of foundational food
            groups. Continuing to vary plant and whole-food sources over the
            week supports holistic nutritional harmony.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="my-10" aria-labelledby="underrepresented-title">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/30 bg-[#1e0f36]/70 text-[#c084fc] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-2">
          <HelpCircle className="w-3 h-3 text-[#d8b4fe]" />
          <span>DIETARY EXPLORATION</span>
        </div>
        <h3
          id="underrepresented-title"
          className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white tracking-wide"
        >
          What Could Be Missing From This Meal?
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#d8b4fe]/75 font-sans max-w-xl mx-auto">
          Explore nutrients and food groups that may be less represented in your
          meal.
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-6">
        {underrepresented.map((item) => (
          <div
            key={item.nutrientId}
            className="rounded-3xl border border-purple-500/25 bg-[#0e0819]/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.12)]"
          >
            {/* Header info */}
            <div className="border-b border-purple-500/15 pb-4 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-white tracking-wide">
                  {item.nutrientName}
                </h4>
                <span className="text-[11px] font-mono text-[#c084fc] bg-[#22103e] px-2.5 py-1 rounded-full border border-purple-500/30 self-start">
                  May Be Underrepresented
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#e2d9f3]/85 leading-relaxed font-sans">
                {item.reason}
              </p>
              <p className="mt-1.5 text-xs text-[#d8b4fe]/70 font-sans italic">
                Biological role: {item.role}
              </p>
            </div>

            {/* Complementary Food Suggestions */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d8b4fe]/85 block mb-3 font-['Cinzel',serif] flex items-center gap-1.5">
                <PlusCircle className="h-3.5 w-3.5 text-[#c084fc]" />
                <span>Complementary Foods to Consider:</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {item.suggestedFoods.map((food, foodIdx) => (
                  <div
                    key={foodIdx}
                    className="rounded-2xl border border-purple-500/20 bg-[#170c2a]/70 p-3.5 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#20103a] hover:shadow-[0_0_15px_rgba(192,132,252,0.15)] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#c084fc] block mb-1">
                        {food.foodGroup}
                      </span>
                      <h5 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white tracking-wide">
                        {food.name}
                      </h5>
                    </div>
                    <p className="mt-2 text-[11px] text-[#d8b4fe]/75 leading-relaxed font-sans border-t border-purple-500/10 pt-2">
                      {food.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
