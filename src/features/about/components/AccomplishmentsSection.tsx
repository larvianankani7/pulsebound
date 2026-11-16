import { Award, Sparkles } from "lucide-react";

export function AccomplishmentsSection() {
  const accomplishments = [
    {
      title: "Transforming Everyday Meals into Narrative Journeys",
      desc: "Creating an interface where users can discover the ingredients and stories behind everyday meals rather than confronting sterile numerical charts.",
    },
    {
      title: "A Non-Judgmental Educational Stance",
      desc: "Championing holistic dietary awareness and meal diversity over toxic calorie restrictions, anxiety-inducing daily targets, or arbitrary health grades.",
    },
    {
      title: "Seamless 100% Offline-Capable Monolith",
      desc: "Delivering a full-featured educational platform that runs entirely within the client's browser, respecting user privacy with zero cloud data harvesting.",
    },
    {
      title: "Bilingual Inclusivity from Day One",
      desc: "Full internationalization architecture supporting both English and Hindi, acknowledging the cultural importance of regional culinary knowledge.",
    },
    {
      title: "Uncompromising Visual Atmosphere",
      desc: "Implementing a cohesive dark lavender, cinematic aesthetic that elevates educational software into an enchanting sensory experience.",
    },
  ];

  return (
    <section
      className="border-b border-[#c084fc]/15 py-10"
      aria-labelledby="accomplishments-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc]">
          <Award className="h-5 w-5" />
        </div>
        <h3
          id="accomplishments-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          5. Accomplishments That I&apos;m Proud Of
        </h3>
      </div>

      <p className="text-sm sm:text-base text-[#e2d9f3]/85 leading-relaxed font-sans mb-6">
        The most meaningful accomplishment of SYLVARA is building an educational
        companion that treats learners as curious explorers rather than numbers
        in an algorithm:
      </p>

      <div className="space-y-3.5">
        {accomplishments.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3.5 rounded-xl border border-purple-500/20 bg-[#150c27]/70 p-4 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1e1038]"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2a134d] text-[#c084fc] mt-0.5">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-semibold tracking-wide text-white">
                {item.title}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-[#d8b4fe]/80 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
