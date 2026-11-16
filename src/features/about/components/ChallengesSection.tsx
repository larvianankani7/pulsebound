import { ShieldAlert } from "lucide-react";

export function ChallengesSection() {
  const challenges = [
    {
      title: "Scientific Accuracy vs. Everyday Clarity",
      desc: "Communicating nutritional nuance without reducing food to simplistic binary labels like 'good' or 'bad', while avoiding misleading medical claims or daily quota anxieties.",
    },
    {
      title: "Ethical Demarcation of Traditional Botany",
      desc: "Balancing cultural reverence for traditional botanicals (e.g. Tulsi, Turmeric) with rigorous scientific responsibility, ensuring traditional uses are never conflated with proven pharmaceutical cures.",
    },
    {
      title: "Data-Driven Content Model",
      desc: "Architecting a unified, type-safe schema across foods, nutrient profiles, plant stages, interactive scenarios, and 3-question quizzes so they interlink without code duplication.",
    },
    {
      title: "Serverless Browser Persistence",
      desc: "Managing browser-local data lifecycle with Dexie and IndexedDB, handling schema versions and reliable state persistence without an external cloud database or sync layer.",
    },
    {
      title: "Bilingual Parity & Typography Flow",
      desc: "Designing UI components and cards that adapt gracefully to varying string lengths and word orders between English and Hindi, avoiding layout shifts or broken truncation.",
    },
    {
      title: "Cinematic Atmosphere at 60 FPS",
      desc: "Balancing fullscreen video playback, Gaussian blurs, layered vignettes, and responsive glassmorphism across varying GPU hardware and mobile viewports.",
    },
  ];

  return (
    <section
      className="border-b border-[#c084fc]/15 py-10"
      aria-labelledby="challenges-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc]">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <h3
          id="challenges-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          4. Challenges I Ran Into
        </h3>
      </div>

      <p className="text-sm sm:text-base text-[#e2d9f3]/85 leading-relaxed font-sans mb-6">
        Building an educational application that marries scientific
        responsibility with an engaging game loop presented multi-faceted
        architectural and conceptual challenges:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {challenges.map((c, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-purple-500/20 bg-[#140b24]/80 p-4.5 transition-all duration-300 hover:border-purple-400/40 hover:bg-[#1c0f33]"
          >
            <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-semibold tracking-wide text-white mb-1.5 flex items-center gap-2">
              <span className="text-xs font-mono text-[#c084fc] font-bold">
                0{idx + 1}.
              </span>
              {c.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#d8b4fe]/75 leading-relaxed font-sans">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
