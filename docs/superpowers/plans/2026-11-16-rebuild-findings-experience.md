# Rebuild Findings Discovery Experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the SYLVARA Findings page into an interactive, educational meal discovery experience centered around the user's preserved meal name, an interactive circular nutrient wheel with hover tooltips and detailed drill-down cards, adaptive missing components with food pairings, supported nutrient cards, and an occasion-responsive qualitative nutritional profile graph.

**Architecture:** A multi-stage pipeline:

1. `mealAnalyzer.ts`: Takes raw user input, normalizes text, matches ingredients from an expanded catalog of Indian & global foods (`foodsData.ts`), maps to comprehensive verified nutrients (`nutrientsData.ts`), identifies adaptive underrepresented components and complementary pairings, and generates qualitative occasion suitability insights (no portions/calories).
2. SVG Illustration Library (`src/assets/findings/`): Reusable vector illustrations for nutrients and complementary foods designed for SYLVARA's dark lavender, violet, and black aesthetic.
3. Modular UI Components: `CentralNutrientWheel` (radial circular arrangement + floating animation + hover tooltips), `NutrientDetailCard` (full educational modal/overlay with back button), `MissingComponentsSection` (glassmorphism cards with complementary food images), `SupportedNutrientsSection` (complete nutrient spectrum), and `NutritionalProfileChart` (animated qualitative occasion-driven graph).

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Motion (`motion/react`), Lucide React, Vitest, Testing Library.

**Spec:** User correction prompt: _AGY CORRECTION PROMPT — REBUILD THE FINDINGS DISCOVERY EXPERIENCE_.

## Global Constraints

- Preserve exact user-entered meal identity as title (e.g., `POHA`, `MOONG DAL CHILLA`); never replace with generic archetype names like `Classic Thali Harmony`.
- Strictly no quantity/portion displays: zero grams, milligrams, calories, serving amounts, bowl counts, or quantity input requirements.
- Carbohydrates must never be omitted for carbohydrate-rich meals like Poha or Roti.
- Circular nutrient wheel layout with meal name in the centre; no generic meal photo in the centre.
- Reusable local illustration library for nutrients and complementary foods (no external broken image URLs).
- Responsive: radial orbit on desktop, responsive compact grid/wheel on mobile, reduced-motion compliance.
- No changes to Main Menu, About page, BackgroundMedia, or MusicControl.

---

### Task 1: Comprehensive Food & Nutrient Content Catalog

**Files:**

- Modify: `src/features/findings/types.ts`
- Modify: `src/content/nutrients/nutrientsData.ts`
- Modify: `src/content/foods/foodsData.ts`
- Test: `src/features/findings/engine/mealAnalyzer.test.ts`

**Interfaces:**

- Consumes: Food & nutrient schemas.
- Produces: `VERIFIED_NUTRIENTS` (Record with full details: introduction, biologicalRoles, benefits, foodSources, mealExamples, relatedInteraction, educationalFact, illustrationId), `VERIFIED_FOODS` (extended with Poha, Moong Dal Chilla, Peanuts, Lemon, Coriander, Sprouted Moong, Pumpkin Seeds, etc.).

- [ ] **Step 1: Write tests for extended food and nutrient data structures**
      Verify that `VERIFIED_NUTRIENTS` includes all core categories (Carbohydrates, Protein, Healthy Fats, Dietary Fibre, Vitamins A/B/C/D/E/K/Folate, Minerals Iron/Calcium/Potassium/Magnesium/Zinc/Phosphorus) and that new Indian staples (Poha, Moong Dal Chilla, etc.) are present in `VERIFIED_FOODS`.

- [ ] **Step 2: Update `types.ts` to support detailed nutrient descriptions and complementary pairings**
      Add `NutrientDetail`, `ComplementaryFoodPairing`, `OccasionEvaluation` interfaces. Remove any portion-related quantity types.

- [ ] **Step 3: Expand `nutrientsData.ts` with complete educational metadata**
      Include full biological roles, rich food sources, meal examples, synergies (e.g. Vitamin C enhancing non-haem iron absorption), and educational facts.

- [ ] **Step 4: Expand `foodsData.ts` with staple Indian and global foods**
      Add entries for `poha`, `moong dal chilla`, `peanuts`, `green peas`, `lemon`, `coriander`, `sprouted moong`, `pumpkin seeds`, `paneer`, `curd/buttermilk`, `boiled egg`, etc., with accurate nutrients and aliases.

- [ ] **Step 5: Run tests and verify data integrity**
      Run test suite to ensure all foods and nutrients load without errors.

---

### Task 2: Vector Illustration Library for Nutrients and Complementary Foods

**Files:**

- Create: `src/features/findings/components/illustrations/NutrientIllustrations.tsx`
- Create: `src/features/findings/components/illustrations/FoodIllustrations.tsx`
- Create: `src/features/findings/components/illustrations/IllustrationContainer.tsx`
- Test: `src/features/findings/components/illustrations/Illustrations.test.tsx`

**Interfaces:**

- Consumes: `nutrientId` or `foodIllustrationId`, `size`, `className`.
- Produces: Scalable, self-contained SVG illustration components for all 16+ nutrients and 10+ complementary food items, styled with SYLVARA's dark lavender, gold, and violet accents inside circular glowing containers.

- [ ] **Step 1: Write tests for Illustration components**
      Test rendering of nutrient illustrations (Carbs, Protein, Iron, Vitamin C, etc.) and food illustrations (Egg, Paneer, Sprouted Moong, Lemon, Peanuts, Curd, Vegetables) inside circular containers.

- [ ] **Step 2: Implement `NutrientIllustrations.tsx`**
      Create crisp, symbolic SVG illustrations:
- Carbohydrates: Golden wheat & rice stalks
- Protein: Amino acid peptide helix
- Healthy Fats: Botanical olive & seed oil droplet
- Dietary Fibre: Leafy botanical structure & grains
- Vitamin A: Carrot & vision protective shield
- Vitamin C: Citrus slice with vibrant radiant droplets
- Vitamin D: Sunlight beacon & calcium harmony
- Vitamin E: Nut & seed antioxidant droplet
- Vitamin K: Fresh leafy herb sprig
- Folate / B9: Cell replication sprout
- Iron: Haemoglobin red blood cell oxygen carrier
- Calcium: Crystalline mineral lattice
- Potassium: Potassium electrolyte shield
- Magnesium: Dense mineral seed kernel
- Zinc: Cellular immunity star
- Phosphorus: Vital metabolic energy element

- [ ] **Step 3: Implement `FoodIllustrations.tsx`**
      Create recognizable complementary food SVGs:
- Boiled eggs (sliced egg with golden yolk)
- Paneer (fresh cottage cheese cubes)
- Sprouted moong (sprouted lentils with green pods)
- Lemon & coriander (citrus wedge + fresh herb leaves)
- Peanuts & seeds (roasted peanut pods and pumpkin seeds)
- Plain curd / buttermilk (earthen bowl of dahi & glass of chaas)
- Carrots, peas, capsicum & tomatoes (colorful vegetable bowl)

- [ ] **Step 4: Implement `IllustrationContainer.tsx`**
      Reusable circular container with dark lavender border (`border-[#c084fc]/40`), backdrop blur, soft violet glow, and subtle ambient shadow.

- [ ] **Step 5: Run illustration unit tests and verify rendering**

---

### Task 3: Deterministic Meal Analysis & Recommendation Engine

**Files:**

- Modify: `src/features/findings/engine/mealAnalyzer.ts`
- Modify: `src/features/findings/types.ts`
- Test: `src/features/findings/engine/mealAnalyzer.test.ts`

**Interfaces:**

- Consumes: `rawDescription: string`, `occasion: MealOccasion`.
- Produces: `MealAnalysisResult` containing:
  - `mealTitle`: Preserved user meal name in clean title format.
  - `detectedIngredients`: List of recognized food items (strictly NO quantities or portions).
  - `detectedNutrients`: Comprehensive list of supported nutrients (including Carbohydrates for grains/flours).
  - `underrepresentedNutrients`: Adaptive list of potentially underrepresented nutrients with tailored complementary foods (omitting any foods already in the meal).
  - `occasionSuitability`: Contextual qualitative profile for Breakfast, Lunch, and Dinner with qualitative levels (`Less represented`, `Moderately represented`, `Well represented`), reasons for graph shape, and balance tips.

- [ ] **Step 1: Write unit tests for all 6 core user test cases in `mealAnalyzer.test.ts`**

1. `Poha` -> Title is `POHA`, includes Carbohydrates & Iron, suggests Protein (paneer/eggs/sprouts) and Vitamin C (lemon).
2. `Poha with peanuts, peas and lemon` -> Title is `POHA WITH PEANUTS, PEAS AND LEMON`, includes Healthy Fats, Fibre, Vitamin C, Vitamin A; does NOT recommend peanuts or lemon as missing.
3. `Moong dal chilla` -> Title is `MOONG DAL CHILLA`, includes Protein, Carbohydrates, Fibre, Iron, Folate.
4. `Roti, paneer and spinach sabzi` -> Title is `ROTI, PANEER AND SPINACH SABZI`, includes Calcium, Iron, Protein, Carbs, Vitamin A; does NOT suggest paneer as missing.
5. `Idli with sambar and coconut chutney` -> Preserves title, includes Carbs, Protein, Healthy Fats, Fibre.
6. `Oats with banana and milk` -> Preserves title, includes Fibre, Carbs, Potassium, Calcium, Protein.
7. Unknown meal test: `Quinoa bowl with avocado` -> Preserves title, identifies recognizable keywords or reports educational observation without generic fallback names.
8. Verify NO quantities/portions are output in any field.

- [ ] **Step 2: Refactor `mealAnalyzer.ts` to preserve user meal identity**
      Format title from raw input using clean capitalization. Strip out archetype name assignment (`Classic Thali Harmony` removed completely).

- [ ] **Step 3: Implement multi-ingredient matching and strict non-duplication**
      Match all words and multi-word aliases against `VERIFIED_FOODS`. Deduplicate and aggregate all verified nutrients. Ensure Carbohydrates are mapped whenever grain, flour, or starch ingredients are present.

- [ ] **Step 4: Implement adaptive underrepresented nutrient logic**
      Check for missing nutrient groups (Protein, Fibre, Calcium, Vitamin C, Healthy Fats, Iron, Vitamin A). Suggest complementary foods ONLY if they are not already detected in the user's meal description.

- [ ] **Step 5: Implement occasion contextual interpretation**
      Build occasion-specific qualitative evaluations for Breakfast, Lunch, and Dinner without fabricated numeric scores.

- [ ] **Step 6: Run tests and verify all pass**

---

### Task 4: Interactive Central Meal + Circular Nutrient Wheel

**Files:**

- Create: `src/features/findings/components/CentralNutrientWheel.tsx`
- Create: `src/features/findings/components/NutrientOrbitNode.tsx`
- Create: `src/features/findings/components/NutrientHoverTooltip.tsx`
- Create: `src/features/findings/components/NutrientDetailCard.tsx`
- Test: `src/features/findings/components/CentralNutrientWheel.test.tsx`

**Interfaces:**

- Consumes: `mealTitle: string`, `nutrients: NutrientInfo[]`, `onSelectNutrient: (n: NutrientInfo) => void`.
- Produces: Central meal node with violet gradient wave and circular ring; radial nutrient nodes floating in circular orbit; desktop hover tooltips; tap support on mobile; detail drill-down view with back button.

- [ ] **Step 1: Write tests for `CentralNutrientWheel` and `NutrientDetailCard`**
      Test that:
- Meal title is rendered prominently in the centre.
- Nutrients are rendered around the centre.
- Hovering a nutrient displays the tooltip with its biological role.
- Clicking a nutrient triggers detail view.
- Back button on detail view returns to the wheel view.

- [ ] **Step 2: Implement `NutrientHoverTooltip.tsx`**
      Translucent dark card with lavender border, smooth fade/slide-up animation, displaying nutrient name and short biological role without obscuring the central meal name.

- [ ] **Step 3: Implement `NutrientOrbitNode.tsx`**
      Individual circular nutrient button containing circular illustration, dark lavender border, subtle violet glow, floating animation, hover/focus states, and accessibility attributes.

- [ ] **Step 4: Implement `CentralNutrientWheel.tsx`**
      Radial calculation placing nutrient nodes evenly in a circle around the center on desktop, with responsive mobile fallback (compact orbital cluster/grid). Central element features prominent uppercase title with continuous animated gradient wave, decorative glowing ring, and radial ambient backdrop.

- [ ] **Step 5: Implement `NutrientDetailCard.tsx`**
      Detailed overlay with large circular illustration, nutrient name, category badge, introduction, biological role, benefits, food sources, meal examples, synergies, educational facts, and prominent `← Back to Nutrient Wheel` button.

- [ ] **Step 6: Run tests to verify wheel interactions and accessibility**

---

### Task 5: Complementary Food Discovery Section ("What Could Be Missing?")

**Files:**

- Rewrite: `src/features/findings/components/UnderrepresentedSection.tsx`
- Create: `src/features/findings/components/ComplementaryFoodCard.tsx`
- Test: `src/features/findings/components/UnderrepresentedSection.test.tsx`

**Interfaces:**

- Consumes: `underrepresented: UnderrepresentedNutrient[]`.
- Produces: Dedicated glassmorphism cards for each underrepresented component, featuring circular nutrient illustrations, circular complementary food illustrations with nutrient tags, and culinary pairing advice.

- [ ] **Step 1: Write tests for `UnderrepresentedSection`**
      Verify heading "What Could Be Missing From This Meal?", subtitle, individual glassmorphism cards, circular food images, pairing advice, and careful educational wording.

- [ ] **Step 2: Implement `ComplementaryFoodCard.tsx`**
      Card with dark lavender outline, backdrop blur, circular nutrient thumbnail, nutrient name, `May Be Underrepresented` badge, biological role, reasons, and a flex/grid of complementary foods with circular illustrations, food names, nutrient contributions, and pairing notes.

- [ ] **Step 3: Update `UnderrepresentedSection.tsx`**
      Render the responsive card list with smooth fade-in animations and appropriate spacing.

- [ ] **Step 4: Run tests to verify rendering and interactions**

---

### Task 6: Supported Nutrients Section

**Files:**

- Create: `src/features/findings/components/SupportedNutrientsSection.tsx`
- Test: `src/features/findings/components/SupportedNutrientsSection.test.tsx`

**Interfaces:**

- Consumes: `nutrients: NutrientInfo[]`, `onSelectNutrient: (n: NutrientInfo) => void`.
- Produces: Clean grid of compact nutrient cards showcasing all nutrients supported by the meal. Clicking any opens the detailed nutrient card.

- [ ] **Step 1: Write tests for `SupportedNutrientsSection`**
      Verify heading "Nutrients Supported by This Meal", subtitle, rendering of all supported nutrients (never omitting Carbohydrates), and click handler triggering detail card.

- [ ] **Step 2: Implement `SupportedNutrientsSection.tsx`**
      Compact cards with circular illustration, name, short benefit, subtle glow, and hover micro-animations.

- [ ] **Step 3: Run tests to verify rendering and interaction**

---

### Task 7: Occasion-Responsive Qualitative Nutritional Profile Graph

**Files:**

- Rewrite: `src/features/findings/components/NutritionalProfileChart.tsx`
- Modify: `src/features/findings/components/MealContextSelector.tsx`
- Create: `src/features/findings/components/MealProfileSection.tsx`
- Test: `src/features/findings/components/NutritionalProfileChart.test.tsx`

**Interfaces:**

- Consumes: `selectedOccasion: MealOccasion`, `onOccasionChange`, `suitability: OccasionEvaluation`.
- Produces: Occasion selector (Breakfast / Lunch / Dinner), SVG line graph with smooth violet gradient fill and animated entrance, qualitative Y-axis (`Less represented`, `Moderately represented`, `Well represented`), no fabricated numbers/calories, tooltips, and explanatory sections: "Why Does Your Meal Look This Way?" and "How Could You Make This Meal More Balanced?".

- [ ] **Step 1: Write tests for `NutritionalProfileChart` and `MealProfileSection`**
      Test that:
- Breakfast / Lunch / Dinner switches update the graph context and explanations.
- Y-axis uses qualitative labels (`Less represented`, `Moderately represented`, `Well represented`) with zero numbers or calories.
- "Why Does Your Meal Look This Way?" and "How Could You Make This Meal More Balanced?" sections are displayed.

- [ ] **Step 2: Implement qualitative SVG line chart with smooth transitions**
      Use cubic bezier curve, glowing violet stroke, soft gradient area fill, and viewport entrance animation. Provide interactive points with contextual tooltips.

- [ ] **Step 3: Implement dedicated explanations beneath the graph**
      Render "Why Does Your Meal Look This Way?" and "How Could You Make This Meal More Balanced?" with contextual tips.

- [ ] **Step 4: Implement `MealProfileSection.tsx` integrating selector, graph, and explanations**

- [ ] **Step 5: Run tests and verify occasion switching behavior**

---

### Task 8: Assemble FindingsPage & Remove Obsolete Code

**Files:**

- Modify: `src/features/findings/FindingsPage.tsx`
- Modify: `src/features/findings/components/MealInputCard.tsx`
- Delete / Retire: `src/features/findings/components/MealVisualCard.tsx` (generic plate SVG removed)
- Delete / Retire: `src/features/findings/components/NutrientOrbit.tsx` & `NutrientItem.tsx` (superseded by `CentralNutrientWheel`)
- Modify: `src/features/findings/FindingsPage.test.tsx`

**Interfaces:**

- Assembles all redesigned components on `FindingsPage`.
- Updates `MealInputCard` placeholder and examples (no portions).
- Connects modal detail card state so selecting any nutrient from the wheel or supported nutrients opens the full detail view.

- [ ] **Step 1: Update `MealInputCard.tsx`**
      Remove all portion references from placeholders and helper texts. Update example pills to match specified test cases.

- [ ] **Step 2: Integrate `FindingsPage.tsx`**
      Wire state for `activeNutrientDetail: NutrientInfo | null`. Render `CentralNutrientWheel` (or `NutrientDetailCard` when active), `MissingComponentsSection`, `SupportedNutrientsSection`, `MealProfileSection`, and `FindingsDisclaimer`.

- [ ] **Step 3: Update `FindingsPage.test.tsx`**
      Update integration tests to verify preserved meal title (`POHA`, `MOONG DAL CHILLA`), wheel rendering, absence of generic plate artwork, occasion transitions, and absence of portion displays.

- [ ] **Step 4: Run full test suite and verify all pass**
      Verify that all unit and integration tests pass without failures.
