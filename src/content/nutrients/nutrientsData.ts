import { type NutrientInfo } from "../../features/findings/types";

export const VERIFIED_NUTRIENTS: Record<string, NutrientInfo> = {
  "nutrient.protein": {
    id: "nutrient.protein",
    name: "Protein",
    category: "macronutrient",
    shortRole: "Growth & Tissue Repair",
    fullBenefit:
      "Provides amino acids essential for rebuilding muscle fibers, maintaining cellular enzymes, and supporting immune antibody production.",
    absorptionNote:
      "Pairing plant proteins (e.g., lentils with rice or roti) creates a balanced complementary amino acid profile.",
    iconName: "Dna",
    primaryColor: "#c084fc",
  },
  "nutrient.fibre": {
    id: "nutrient.fibre",
    name: "Dietary Fibre",
    category: "macronutrient",
    shortRole: "Gut Microbiome & Satiety",
    fullBenefit:
      "Feeds beneficial gut bacteria, moderates blood glucose absorption rates, and maintains regular digestive rhythm.",
    absorptionNote:
      "Soluble and insoluble fibres work best when accompanied by adequate daily hydration.",
    iconName: "Wheat",
    primaryColor: "#a855f7",
  },
  "nutrient.vitamin-c": {
    id: "nutrient.vitamin-c",
    name: "Vitamin C",
    category: "vitamin",
    shortRole: "Immune Support & Iron Absorption",
    fullBenefit:
      "Acts as a potent antioxidant, aids collagen synthesis, and significantly enhances the bioavailability of non-haem iron.",
    absorptionNote:
      "Heat-sensitive; freshly squeezed lemon, raw amla, or lightly cooked greens maximize retention.",
    iconName: "Citrus",
    primaryColor: "#e879f9",
  },
  "nutrient.vitamin-a": {
    id: "nutrient.vitamin-a",
    name: "Vitamin A / Beta-Carotene",
    category: "vitamin",
    shortRole: "Vision & Epithelial Health",
    fullBenefit:
      "Essential for low-light photoreceptor integrity, skin barrier maintenance, and mucosal immune defense.",
    absorptionNote:
      "Fat-soluble nutrient; best absorbed when consumed with healthy culinary fats like ghee, curd, or cold-pressed oils.",
    iconName: "Eye",
    primaryColor: "#d8b4fe",
  },
  "nutrient.calcium": {
    id: "nutrient.calcium",
    name: "Calcium",
    category: "mineral",
    shortRole: "Bone Strength & Neuro-Signaling",
    fullBenefit:
      "Provides structural mineral density for bones and teeth, and regulates rhythmic cardiac and muscular contraction.",
    absorptionNote:
      "Synergistic with Vitamin D and magnesium for optimal skeletal incorporation.",
    iconName: "Bone",
    primaryColor: "#f3e8ff",
  },
  "nutrient.iron": {
    id: "nutrient.iron",
    name: "Iron",
    category: "mineral",
    shortRole: "Haemoglobin & Cellular Oxygen",
    fullBenefit:
      "Forms the core atom of haemoglobin, facilitating oxygen transport from lungs to working muscles and the brain.",
    absorptionNote:
      "Non-haem iron from lentils and spinach is absorbed up to 3x more effectively when paired with Vitamin C.",
    iconName: "Activity",
    primaryColor: "#c084fc",
  },
  "nutrient.potassium": {
    id: "nutrient.potassium",
    name: "Potassium",
    category: "mineral",
    shortRole: "Electrolyte Balance & Blood Pressure",
    fullBenefit:
      "Regulates intracellular fluid equilibrium, counters excess sodium, and supports smooth vascular function.",
    absorptionNote:
      "Widely present in bananas, potatoes, spinach, coconut water, and legumes.",
    iconName: "Zap",
    primaryColor: "#e9d5ff",
  },
  "nutrient.folate": {
    id: "nutrient.folate",
    name: "Folate / Vitamin B9",
    category: "vitamin",
    shortRole: "DNA Synthesis & Cell Division",
    fullBenefit:
      "Critical for genetic material synthesis, red blood cell maturation, and healthy cellular replication.",
    absorptionNote:
      "Plentiful in legumes, dark leafy greens, and citrus fruits.",
    iconName: "Sparkles",
    primaryColor: "#c4b5fd",
  },
  "nutrient.healthy-fats": {
    id: "nutrient.healthy-fats",
    name: "Healthy Lipids",
    category: "macronutrient",
    shortRole: "Hormone Synthesis & Vitamin Uptake",
    fullBenefit:
      "Essential for cell membrane flexibility, brain structural lipids, and the absorption of fat-soluble vitamins (A, D, E, K).",
    absorptionNote:
      "Sources include mustard oil, sesame, curd, nuts, seeds, and moderate traditional ghee.",
    iconName: "Flame",
    primaryColor: "#d8b4fe",
  },
  "nutrient.complex-carbs": {
    id: "nutrient.complex-carbs",
    name: "Complex Carbohydrates",
    category: "macronutrient",
    shortRole: "Sustained Metabolic Energy",
    fullBenefit:
      "Provides steady polysaccharides that break down gradually into glucose, supplying persistent fuel for cognitive and physical vitality.",
    absorptionNote:
      "Whole grains like millets, whole wheat, and brown rice digest slower than refined starches.",
    iconName: "Sun",
    primaryColor: "#e0e7ff",
  },
};
