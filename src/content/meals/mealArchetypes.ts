export interface MealArchetype {
  id: string;
  name: string;
  keywords: string[];
  description: string;
  illustrationTheme:
    | "thali"
    | "south-indian"
    | "breakfast-bowl"
    | "paneer-plate"
    | "grain-bowl"
    | "wholesome-plate";
  svgPalette: {
    baseColor: string;
    accentColor: string;
    plateRim: string;
    glowColor: string;
  };
}

export const MEAL_ARCHETYPES: MealArchetype[] = [
  {
    id: "archetype.traditional-thali",
    name: "Classic Thali Harmony",
    keywords: [
      "chapati",
      "chapatis",
      "roti",
      "dal",
      "curd",
      "rice",
      "spinach",
      "sabzi",
      "thali",
    ],
    description:
      "A time-honored balanced combination of whole wheat flatbreads, protein-rich lentils, garden greens, and cooling curd.",
    illustrationTheme: "thali",
    svgPalette: {
      baseColor: "#1d102e",
      accentColor: "#c084fc",
      plateRim: "#8b5cf6",
      glowColor: "rgba(192, 132, 252, 0.45)",
    },
  },
  {
    id: "archetype.south-indian-classic",
    name: "South Indian Tiffin Discovery",
    keywords: ["idli", "idlis", "sambar", "chutney", "dosa", "vada", "uttapam"],
    description:
      "Naturally fermented rice-lentil delicacies served with vegetable-rich aromatic lentil sambar and fresh coconut chutney.",
    illustrationTheme: "south-indian",
    svgPalette: {
      baseColor: "#170f26",
      accentColor: "#d8b4fe",
      plateRim: "#a855f7",
      glowColor: "rgba(216, 180, 254, 0.45)",
    },
  },
  {
    id: "archetype.breakfast-bowl",
    name: "Wholesome Morning Grain Bowl",
    keywords: [
      "oats",
      "oatmeal",
      "porridge",
      "banana",
      "milk",
      "fruits",
      "berries",
      "nuts",
      "almonds",
    ],
    description:
      "Gentle whole-grain oats paired with potassium-rich fresh fruits, calcium-rich milk, and energy-dense seeds.",
    illustrationTheme: "breakfast-bowl",
    svgPalette: {
      baseColor: "#160b24",
      accentColor: "#e9d5ff",
      plateRim: "#c084fc",
      glowColor: "rgba(233, 213, 255, 0.4)",
    },
  },
  {
    id: "archetype.paneer-plate",
    name: "Cottage Cheese & Garden Medley",
    keywords: [
      "paneer",
      "cottage cheese",
      "palak paneer",
      "matar paneer",
      "roti",
      "vegetables",
    ],
    description:
      "Nutritious dairy protein and bioavailable calcium coupled with colorful seasonal vegetable sabzis.",
    illustrationTheme: "paneer-plate",
    svgPalette: {
      baseColor: "#190e29",
      accentColor: "#c4b5fd",
      plateRim: "#7c3aed",
      glowColor: "rgba(196, 181, 253, 0.45)",
    },
  },
  {
    id: "archetype.grain-legume-bowl",
    name: "Lentil, Legume & Grain Harvest",
    keywords: ["rajma", "chole", "chickpeas", "rice", "beans", "khichdi"],
    description:
      "Complex carbohydrates and hearty plant legumes creating a complete amino acid protein symphony.",
    illustrationTheme: "grain-bowl",
    svgPalette: {
      baseColor: "#1a0f2c",
      accentColor: "#a855f7",
      plateRim: "#9333ea",
      glowColor: "rgba(168, 85, 247, 0.45)",
    },
  },
  {
    id: "archetype.wholesome-plate",
    name: "Diverse Wholesome Plate",
    keywords: [
      "salad",
      "egg",
      "bread",
      "chicken",
      "fish",
      "vegetable",
      "fruit",
      "meal",
    ],
    description:
      "An illustrative combination reflecting dietary variety, nutrient diversity, and thoughtful culinary balance.",
    illustrationTheme: "wholesome-plate",
    svgPalette: {
      baseColor: "#150c26",
      accentColor: "#c084fc",
      plateRim: "#a855f7",
      glowColor: "rgba(192, 132, 252, 0.45)",
    },
  },
];
