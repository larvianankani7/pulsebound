import {
  Apple,
  HeartPulse,
  Leaf,
  Pill,
  Sparkles,
  ShieldAlert,
  Info,
} from "lucide-react";

export function WhatItTeachesSection() {
  return (
    <section
      className="border-b border-[#c084fc]/15 py-10"
      aria-labelledby="what-it-teaches-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc]">
          <HeartPulse className="h-5 w-5" />
        </div>
        <h3
          id="what-it-teaches-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          8. What It Teaches
        </h3>
      </div>

      <p className="text-sm sm:text-base text-[#e2d9f3]/85 leading-relaxed font-sans mb-8">
        SYLVARA translates scientific botany, food chemistry, and public health
        awareness into five interconnected educational pillars:
      </p>

      <div className="space-y-6">
        {/* Module A: Food & Nutrition */}
        <div className="rounded-2xl border border-purple-500/25 bg-[#140b25]/85 p-5 sm:p-6 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1a0e30]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#271247] text-[#c084fc]">
              <Apple className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              A. Food Groups & Dietary Synergy
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#d8b4fe]/85 leading-relaxed font-sans mb-4">
            Teaches how whole food ingredients harmonise within a meal. Rather
            than obsessing over isolated metrics, learners observe dietary
            balance and recognize which food groups may be underrepresented.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="rounded-lg border border-purple-500/20 bg-[#1f1038]/60 p-2.5">
              <span className="font-semibold text-white block">Vitamin C</span>
              <span className="text-[#c084fc] text-[11px]">
                Amla, Citrus, Guava
              </span>
            </div>
            <div className="rounded-lg border border-purple-500/20 bg-[#1f1038]/60 p-2.5">
              <span className="font-semibold text-white block">Protein</span>
              <span className="text-[#c084fc] text-[11px]">
                Lentils, Beans, Eggs
              </span>
            </div>
            <div className="rounded-lg border border-purple-500/20 bg-[#1f1038]/60 p-2.5">
              <span className="font-semibold text-white block">Calcium</span>
              <span className="text-[#c084fc] text-[11px]">
                Milk, Curd, Fortified Options
              </span>
            </div>
            <div className="rounded-lg border border-purple-500/20 bg-[#1f1038]/60 p-2.5">
              <span className="font-semibold text-white block">Iron</span>
              <span className="text-[#c084fc] text-[11px]">
                Leafy Greens, Lentils, Seeds
              </span>
            </div>
          </div>
        </div>

        {/* Module B: Nutrients & Their Functions */}
        <div className="rounded-2xl border border-purple-500/25 bg-[#140b25]/85 p-5 sm:p-6 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1a0e30]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#271247] text-[#c084fc]">
              <Sparkles className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              B. Nutrients & Their Human Functions
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {[
              {
                name: "Vitamins",
                role: "Catalysts for cellular metabolism, enzymatic reactions, and immune resilience.",
              },
              {
                name: "Minerals",
                role: "Essential elements (e.g. Iron, Zinc, Calcium) supporting skeletal strength and oxygen transport.",
              },
              {
                name: "Proteins",
                role: "Amino acid building blocks vital for tissue repair, enzymes, and muscle maintenance.",
              },
              {
                name: "Carbohydrates",
                role: "Primary fuel source for the brain and muscles, optimized through complex unrefined sources.",
              },
              {
                name: "Healthy Fats",
                role: "Supports hormone synthesis, cell membrane integrity, and fat-soluble vitamin absorption.",
              },
              {
                name: "Dietary Fibre & Water",
                role: "Maintains microbiome diversity, digestive rhythm, and systemic thermoregulation.",
              },
            ].map((n, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-purple-500/15 bg-[#1c0f33]/70 p-3"
              >
                <span className="font-semibold text-white block mb-0.5">
                  {n.name}
                </span>
                <span className="text-[#d8b4fe]/75 leading-relaxed">
                  {n.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Module C: Plants and Their Uses */}
        <div className="rounded-2xl border border-purple-500/25 bg-[#140b25]/85 p-5 sm:p-6 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1a0e30]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#271247] text-[#c084fc]">
              <Leaf className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              C. Plants, Herbs & Botanical Understanding
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#d8b4fe]/85 leading-relaxed font-sans mb-3">
            Explores common kitchen plants, herbs, and culinary spices. Connects
            historical ethnobotanical wisdom with modern biochemical study,
            carefully demarcating tradition from clinical therapy.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Turmeric (Curcumin)",
              "Holy Basil (Tulsi)",
              "Ginger (Gingerol)",
              "Spearmint (Menthol)",
              "Aloe Vera",
            ].map((p) => (
              <span
                key={p}
                className="rounded-full border border-purple-400/30 bg-[#21113b] px-3 py-1 font-medium text-[#e9d5ff]"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-purple-500/20 bg-[#10071c]/60 p-2.5 text-xs text-[#d8b4fe]/80 flex items-center gap-2">
            <Info className="h-4 w-4 text-[#c084fc] shrink-0" />
            <span>
              Traditional plant lore is explored as cultural heritage; it is
              never presented as an automatic substitute for certified medical
              care.
            </span>
          </div>
        </div>

        {/* Module D: Medicines and Health Awareness */}
        <div className="rounded-2xl border border-purple-500/25 bg-[#140b25]/85 p-5 sm:p-6 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1a0e30]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#271247] text-[#c084fc]">
              <Pill className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              D. Medicine Literacy & Public Health Safety
            </h4>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#d8b4fe]/80 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-[#c084fc] font-bold">•</span>
              <span>
                <strong>Active Ingredients & Dosages:</strong> How
                pharmaceutical active compounds are isolated, standardized, and
                clinically titrated under strict medical oversight.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c084fc] font-bold">•</span>
              <span>
                <strong>Dangers of Self-Medication:</strong> Why consuming
                random remedies without clinical diagnosis carries severe risks
                of toxic interactions and delayed care.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c084fc] font-bold">•</span>
              <span>
                <strong>Antibiotic Stewardship:</strong> Explaining that
                antibiotics target bacteria and are completely ineffective
                against viral colds and flu, highlighting the global crisis of
                antimicrobial resistance.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c084fc] font-bold">•</span>
              <span>
                <strong>&ldquo;Natural&rdquo; Does Not Mean Risk-Free:</strong>{" "}
                Many potent toxins exist in nature; plant extracts can cause
                organ stress or adverse drug interactions if misused.
              </span>
            </li>
          </ul>
        </div>

        {/* Module E: Mindful Food Awareness */}
        <div className="rounded-2xl border border-purple-500/25 bg-[#140b25]/85 p-5 sm:p-6 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1a0e30]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#271247] text-[#c084fc]">
              <ShieldAlert className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              E. Food Awareness & Responsible Choices
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#d8b4fe]/85 leading-relaxed font-sans mb-3">
            Encourages mindful meal composition and ingredient diversity while
            recognizing that individual metabolic needs, culinary traditions,
            and lifestyles differ. Food is celebrated as nourishment, joy, and
            storytelling.
          </p>
          <div className="rounded-xl border border-purple-500/20 bg-[#10071c]/70 p-3.5 text-xs text-purple-200">
            <strong className="text-white">Strict Advisory Notice:</strong>{" "}
            SYLVARA is designed purely as an educational medium. It does not
            diagnose deficiency syndromes, prescribe remedies, calculate medical
            macros, or supersede licensed healthcare advice. Always consult
            certified medical practitioners for health questions.
          </div>
        </div>
      </div>
    </section>
  );
}
