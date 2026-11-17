import { type GardenItem } from "../types";

export const GARDEN_ITEMS: Record<string, GardenItem> = {
  // --- HERBS & PLANTS ---
  tulsi: {
    id: "tulsi",
    name: "Tulsi (Holy Basil)",
    category: "herb",
    nutrients: ["Eugenol", "Ursolic Acid", "Flavonoids", "Polyphenols"],
    benefits:
      "Aromatic leaf renowned in herbal traditions for soothing warm beverages that provide aromatic relief for irritated airways.",
    traditionalUseNotes:
      "Traditional Ayurvedic use as an adaptogenic herb brewed into hot teas for cough, respiratory discomfort, and seasonal chills.",
    evidenceNote:
      "Laboratory studies demonstrate antioxidant and mild anti-inflammatory properties; warm vapor and fluids provide symptomatic comfort but do not eliminate viral pathogens.",
    foodExamples: [
      "Fresh Tulsi tea",
      "Spiced herbal decoctions (Kadha)",
      "Infused warm honey water",
    ],
    safetyNotes:
      "Excessive intake should be avoided during pregnancy or alongside anticoagulant therapy without clinical advice.",
    illustrationId: "tulsi",
  },
  ginger: {
    id: "ginger",
    name: "Ginger",
    category: "herb",
    nutrients: [
      "Gingerols",
      "Shogaols",
      "Zingiberene",
      "Vitamin B6",
      "Potassium",
    ],
    benefits:
      "Zesty aromatic root that stimulates salivary flow, warms the throat, and eases nausea or digestive sluggishness.",
    traditionalUseNotes:
      "Used across Indian and East Asian traditions to settle upset stomachs, relieve nausea, and warm the chest during cold weather.",
    evidenceNote:
      "Robust clinical evidence supports ginger for easing mild nausea (such as motion or pregnancy-related); acts as a supportive soothing carminative.",
    foodExamples: [
      "Ginger tea",
      "Ginger-honey infusion",
      "Culinary stir-fries",
      "Lentil temperings (Tadka)",
    ],
    safetyNotes:
      "High concentrated doses can cause heartburn; use caution if having active gallstones or bleeding disorders.",
    illustrationId: "ginger",
  },
  turmeric: {
    id: "turmeric",
    name: "Turmeric",
    category: "herb",
    nutrients: ["Curcuminoids", "Curcumin", "Turmerone", "Manganese", "Iron"],
    benefits:
      "Vibrant golden rhizome containing bioactive polyphenol curcumin with natural cellular antioxidant activity.",
    traditionalUseNotes:
      "Prized for centuries in warm milk (Haldi Doodh) for bodily recovery, soothing throat tickles, and joint ease.",
    evidenceNote:
      "Curcumin exhibits anti-inflammatory and antioxidant activity in vitro; dietary intake supports general wellbeing but is not a substitute for clinical antibiotics.",
    foodExamples: [
      "Golden milk (Haldi doodh)",
      "Dal temperings",
      "Curries",
      "Turmeric herbal tea",
    ],
    safetyNotes:
      "Dietary culinary amounts are very safe; high-dose extracts may interact with blood thinners or gall bladder conditions.",
    illustrationId: "turmeric",
  },
  mint: {
    id: "mint",
    name: "Mint (Pudina)",
    category: "herb",
    nutrients: ["Menthol", "Rosmarinic Acid", "Vitamin A", "Antioxidants"],
    benefits:
      "Cooling, refreshing herb containing menthol that relaxes digestive smooth muscles and provides a sensory sensation of airway clearance.",
    traditionalUseNotes:
      "Traditionally steeped into herbal teas or ground into chutneys to stimulate digestion, relieve gas, and refresh the palate.",
    evidenceNote:
      "Menthol provides cooling sensory comfort and aids mild spasm relief in the digestive tract; does not cure bacterial or systemic infections.",
    foodExamples: [
      "Pudina chutney",
      "Fresh mint tea",
      "Lemon-mint infused water",
      "Raita",
    ],
    safetyNotes:
      "May worsen gastroesophageal reflux (heartburn) in some individuals by relaxing the lower esophageal sphincter.",
    illustrationId: "mint",
  },
  chamomile: {
    id: "chamomile",
    name: "Chamomile",
    category: "herb",
    nutrients: ["Apigenin", "Chamazulene", "Flavonoids", "Bisabolol"],
    benefits:
      "Delicate floral daisy-like herb whose infusion promotes calmness, relaxes muscles, and comforts irritated mucosal membranes.",
    traditionalUseNotes:
      "Popular bedtime herbal infusion for winding down, easing restlessness, and gently soothing stomach tension.",
    evidenceNote:
      "Mild sedative and anti-inflammatory properties observed; helpful for relaxation and bedtime comfort.",
    foodExamples: ["Chamomile blossom tea", "Herbal blend infusions"],
    safetyNotes:
      "Individuals with severe ragweed or Asteraceae plant allergies should use caution.",
    illustrationId: "chamomile",
  },
  aloe_vera: {
    id: "aloe_vera",
    name: "Aloe Vera",
    category: "herb",
    nutrients: ["Acemannan", "Vitamins C & E", "Enzymes", "Glucomannans"],
    benefits:
      "Succulent plant with soothing gel that supports topical skin hydration, barrier comfort, and oral mucosal soothing.",
    traditionalUseNotes:
      "Used topically to cool minor sunburns and burns, and used in traditional mouth rinses for oral tissue irritation.",
    evidenceNote:
      "Effective topically for minor dermal and mucosal soothing; oral latex has strong laxative properties that require caution.",
    foodExamples: [
      "Diluted aloe oral rinse",
      "Purified aloe juice",
      "Topical soothing gel",
    ],
    safetyNotes:
      "Do not ingest unprocessed whole-leaf aloe latex; avoid during pregnancy due to uterine stimulating risks.",
    illustrationId: "aloe_vera",
  },
  lemongrass: {
    id: "lemongrass",
    name: "Lemongrass",
    category: "herb",
    nutrients: ["Citral", "Geraniol", "Flavonoids", "Potassium"],
    benefits:
      "Stalky aromatic grass with clean citrus notes that imparts refreshing warmth and hydration in herbal decoctions.",
    traditionalUseNotes:
      "Brewed as a febrifuge and digestive tea in tropical regions to encourage sweating and soothe mild stomach tension.",
    evidenceNote:
      "Provides pleasant aromatic hydration; pleasant flavor stimulates liquid intake during illness.",
    foodExamples: [
      "Lemongrass ginger tea",
      "Tom yum herbal broth",
      "Steeped herbal infusions",
    ],
    safetyNotes:
      "Culinary and tea use is gentle; concentrated essential oils should not be consumed undiluted.",
    illustrationId: "lemongrass",
  },
  neem: {
    id: "neem",
    name: "Neem",
    category: "herb",
    nutrients: ["Nimbin", "Azadirachtin", "Polyphenols", "Flavonoids"],
    benefits:
      "Bitter medicinal tree whose twigs and leaves have long been used in oral hygiene and environmental pest deterrence.",
    traditionalUseNotes:
      "Chewed as traditional toothbrushes (datun) for gum hygiene and used in washes for skin irritation.",
    evidenceNote:
      "Well-documented antibacterial properties against oral biofilm in mouthwashes; safe oral hygiene aid but not a cure for systemic diseases.",
    foodExamples: [
      "Neem twig datun",
      "Neem oral rinse",
      "Diluted botanical wash",
    ],
    safetyNotes:
      "Neem seed oil is toxic for internal consumption in infants and children; only use approved oral washes or external hygiene preparations.",
    illustrationId: "neem",
  },
  cinnamon: {
    id: "cinnamon",
    name: "Cinnamon (Dalchini)",
    category: "herb",
    nutrients: ["Cinnamaldehyde", "Proanthocyanidins", "Manganese", "Calcium"],
    benefits:
      "Warm sweet spice that adds natural aromatic sweetness without added sugars and supports insulin sensitivity awareness.",
    traditionalUseNotes:
      "Warming culinary bark used to enhance appetite, warm cold limbs, and flavor restorative winter stews.",
    evidenceNote:
      "Small clinical trials suggest modest support for glycemic regulation as part of a balanced diet; does not replace diabetes medications.",
    foodExamples: [
      "Spiced oats",
      "Dalchini tea",
      "Curry masala blends",
      "Baked apples",
    ],
    safetyNotes:
      "Cassia cinnamon contains coumarin which can stress the liver in large medicinal doses; Ceylon cinnamon is preferred for heavy regular use.",
    illustrationId: "cinnamon",
  },

  // --- FRUITS ---
  orange: {
    id: "orange",
    name: "Orange",
    category: "fruit",
    nutrients: [
      "Vitamin C",
      "Hesperidin",
      "Folate",
      "Dietary Fibre",
      "Potassium",
    ],
    benefits:
      "Juicy citrus fruit bursting with Vitamin C, supporting immune cell function, collagen synthesis, and iron absorption.",
    traditionalUseNotes:
      "Consumed during illness and convalescence for invigorating hydration, refreshing energy, and natural tartness.",
    evidenceNote:
      "Essential dietary source of Vitamin C. Enhances non-haem iron absorption when eaten with plant foods; does not instantly prevent or cure viral infections.",
    foodExamples: [
      "Fresh orange segments",
      "Citrus salads",
      "Freshly squeezed juice",
    ],
    safetyNotes:
      "Acidic citrus may sting inflamed mouth ulcers or exacerbate active acid reflux.",
    illustrationId: "orange",
  },
  lemon: {
    id: "lemon",
    name: "Lemon",
    category: "fruit",
    nutrients: ["Vitamin C", "Citric Acid", "Flavonoids", "Potassium"],
    benefits:
      "Tangy citrus fruit that stimulates saliva flow, cuts through throat mucus, and provides bioavailable Vitamin C.",
    traditionalUseNotes:
      "Squeezed into warm water with honey as a soothing gargle and drink for tickly throats and winter malaise.",
    evidenceNote:
      "Citric acid promotes salivation to moisten dry mucous membranes; Vitamin C provides foundational cellular antioxidant support.",
    foodExamples: [
      "Warm lemon honey water",
      "Salad dressings",
      "Lemon-coriander soup",
    ],
    safetyNotes:
      "Direct undiluted lemon juice on teeth can erode dental enamel over time; avoid applying directly to open mouth sores.",
    illustrationId: "lemon",
  },
  amla: {
    id: "amla",
    name: "Amla (Indian Gooseberry)",
    category: "fruit",
    nutrients: [
      "Ascorbic Acid (Vitamin C)",
      "Ellagitannins",
      "Gallic Acid",
      "Polyphenols",
    ],
    benefits:
      "Super-potent natural source of Vitamin C with exceptional heat-stable polyphenol complexes supporting tissue immunity.",
    traditionalUseNotes:
      "Central pillar of Ayurvedic Rasayana formulations (like Chyawanprash) for vitality, respiratory strength, and hair health.",
    evidenceNote:
      "One of the richest botanical sources of Vitamin C on earth; strongly enhances non-haem iron absorption and cellular defence.",
    foodExamples: [
      "Fresh raw amla",
      "Amla juice",
      "Amla murabba",
      "Dried amla candy",
    ],
    safetyNotes:
      "Intensely sour and astringent; excessive intake on an empty stomach may cause mild hyperacidity in sensitive persons.",
    illustrationId: "amla",
  },
  guava: {
    id: "guava",
    name: "Guava",
    category: "fruit",
    nutrients: [
      "Vitamin C",
      "Dietary Fibre",
      "Lycopene",
      "Potassium",
      "Vitamin A",
    ],
    benefits:
      "Subtropical fruit containing 4x more Vitamin C than oranges along with abundant pectin fibre for digestive motility.",
    traditionalUseNotes:
      "Eaten fresh to maintain bowel regularity, strengthen teeth and gums, and promote radiant skin vitality.",
    evidenceNote:
      "High soluble and insoluble fibre promotes healthy gut transit; high Vitamin C strongly aids iron uptake.",
    foodExamples: ["Fresh sliced guava with chaat masala", "Guava fruit bowl"],
    safetyNotes:
      "Hard inner seeds should be chewed gently to prevent dental discomfort; high fibre should be accompanied by ample water.",
    illustrationId: "guava",
  },
  apple: {
    id: "apple",
    name: "Apple",
    category: "fruit",
    nutrients: [
      "Pectin",
      "Quercetin",
      "Vitamin C",
      "Potassium",
      "Dietary Fibre",
    ],
    benefits:
      "Crisp everyday fruit rich in prebiotic soluble fibre pectin, which feeds beneficial intestinal flora and forms gentle stool bulk.",
    traditionalUseNotes:
      "Steamed apples or raw fruit traditionally served to recover from upset digestive rhythms and maintain bowel regularity.",
    evidenceNote:
      "Soluble pectin normalizes stool consistency by absorbing water during diarrhoea and providing bulk during constipation.",
    foodExamples: [
      "Stewed cinnamon apple",
      "Raw sliced apple",
      "Apple oatmeal bowl",
    ],
    safetyNotes:
      "Apples are high in fermentable oligosaccharides (FODMAPs); can cause gas in individuals with irritable bowel syndrome.",
    illustrationId: "apple",
  },
  banana: {
    id: "banana",
    name: "Banana",
    category: "fruit",
    nutrients: ["Potassium", "Vitamin B6", "Resistant Starch", "Magnesium"],
    benefits:
      "Gentle, easily digestible fruit providing quick energy and essential potassium lost through sweating, vomiting, or diarrhoea.",
    traditionalUseNotes:
      "Staple of the recovery diet (BRAT) when stomach is delicate, calming hyperacidity and providing non-irritating nutrition.",
    evidenceNote:
      "High potassium supports electrolyte replenishment; smooth texture protects irritated digestive lining without causing nausea.",
    foodExamples: [
      "Ripe mashed banana",
      "Banana smoothie",
      "Sliced banana with porridge",
    ],
    safetyNotes:
      "Patients with advanced chronic kidney disease need to monitor potassium intake from bananas carefully.",
    illustrationId: "banana",
  },
  papaya: {
    id: "papaya",
    name: "Papaya",
    category: "fruit",
    nutrients: ["Papain", "Beta-Carotene", "Vitamin C", "Fibre", "Folate"],
    benefits:
      "Tropical fruit featuring proteolytic enzyme papain, which assists in breaking down dietary proteins and eases heavy digestion.",
    traditionalUseNotes:
      "Consumed after heavy meals to prevent bloating; papaya leaf extracts are traditionally used in dengue-affected regions.",
    evidenceNote:
      "Ripe fruit provides bioavailable provitamin A and digestive enzymes; does not treat dengue virus or replace urgent medical platelet monitoring.",
    foodExamples: ["Fresh diced papaya bowl", "Papaya lime salad"],
    safetyNotes:
      "Unripe or semi-ripe green papaya contains latex and should be strictly avoided during pregnancy.",
    illustrationId: "papaya",
  },
  pomegranate: {
    id: "pomegranate",
    name: "Pomegranate",
    category: "fruit",
    nutrients: [
      "Punicalagins",
      "Anthocyanins",
      "Vitamin K",
      "Vitamin C",
      "Iron",
    ],
    benefits:
      "Jewel-like ruby arils packed with potent punicalagin polyphenols that support vascular nitric oxide production and cardiovascular tone.",
    traditionalUseNotes:
      "Revered across antiquity for invigorating the blood, combating fatigue, and promoting heart vigor.",
    evidenceNote:
      "Strong antioxidant properties that support endothelial vascular health and systolic pressure moderation as part of a DASH-style diet.",
    foodExamples: [
      "Fresh pomegranate arils",
      "Pomegranate juice",
      "Chaat garnish",
    ],
    safetyNotes:
      "High-dose pomegranate juice can interact with certain antihypertensive or statin medications metabolised by CYP450 enzymes.",
    illustrationId: "pomegranate",
  },

  // --- VEGETABLES & WHOLE FOODS ---
  carrot: {
    id: "carrot",
    name: "Carrot",
    category: "vegetable",
    nutrients: [
      "Beta-Carotene (Provitamin A)",
      "Lutein",
      "Dietary Fibre",
      "Vitamin K1",
    ],
    benefits:
      "Crunchy root vegetable providing abundant beta-carotene, which the human body converts into active Vitamin A for mucosal and ocular integrity.",
    traditionalUseNotes:
      "Cooked into broths and porridges for children and convalescing family members to restore vitality and healthy skin.",
    evidenceNote:
      "Vitamin A is crucial for maintaining the epithelial mucosal barrier of the respiratory and digestive tracts against micro-pathogens.",
    foodExamples: [
      "Steamed carrot coins",
      "Grated carrot salad",
      "Warm carrot soup",
    ],
    safetyNotes:
      "High continuous consumption of beta-carotene can cause harmless yellowing of the skin (carotenemia).",
    illustrationId: "carrot",
  },
  spinach: {
    id: "spinach",
    name: "Spinach (Palak)",
    category: "vegetable",
    nutrients: ["Non-Haem Iron", "Folate", "Magnesium", "Calcium", "Vitamin K"],
    benefits:
      "Nutrient-dense dark leafy green providing plant-based non-haem iron, folate for red blood cell formation, and magnesium.",
    traditionalUseNotes:
      "Eaten cooked with warming spices to build stamina, enrich the blood, and combat pale complexions.",
    evidenceNote:
      "Important source of dietary non-haem iron; absorption is significantly amplified when paired with Vitamin C (e.g. lemon juice).",
    foodExamples: ["Cooked palak dal", "Steamed spinach puree", "Spinach soup"],
    safetyNotes:
      "Contains dietary oxalates; persons prone to calcium oxalate kidney stones should cook spinach and drink plenty of water.",
    illustrationId: "spinach",
  },
  garlic: {
    id: "garlic",
    name: "Garlic",
    category: "vegetable",
    nutrients: [
      "Allicin",
      "Diallyl Sulfides",
      "Selenium",
      "Vitamin B6",
      "Vitamin C",
    ],
    benefits:
      "Pungent allium bulb producing allicin upon crushing, which supports cardiovascular circulation and healthy blood pressure levels.",
    traditionalUseNotes:
      "Used across the globe to protect against winter chills, support chest clearance, and warm the circulation.",
    evidenceNote:
      "Clinical studies demonstrate modest support for healthy blood pressure and lipid balance; does not substitute for prescribed antihypertensive medication.",
    foodExamples: [
      "Crushed garlic in curries",
      "Garlic infused oil",
      "Garlic soup",
    ],
    safetyNotes:
      "High raw garlic intake may cause gastrointestinal irritation and can increase bleeding tendency prior to surgery.",
    illustrationId: "garlic",
  },
  honey: {
    id: "honey",
    name: "Honey",
    category: "vegetable",
    nutrients: [
      "Fructose",
      "Glucose",
      "Enzymes",
      "Phenolic Acids",
      "Trace Minerals",
    ],
    benefits:
      "Viscous natural nectar that coats and lubricates irritated pharyngeal membranes, suppressing nighttime dry cough reflexes.",
    traditionalUseNotes:
      "Time-honoured sweet demulcent blended with ginger or black pepper to soothe tickly dry coughs and raspy throats.",
    evidenceNote:
      "Endorsed by WHO and pediatric health bodies as an effective, safe supportive demulcent for nocturnal cough in children over 1 year.",
    foodExamples: [
      "Spoonful of raw honey",
      "Stirred into lukewarm tea",
      "Warm lemon-honey drink",
    ],
    safetyNotes:
      "STRICT CONTRAINDICATION: Never feed honey to infants under 12 months due to the risk of life-threatening infant botulism.",
    illustrationId: "honey",
  },
  curd: {
    id: "curd",
    name: "Curd / Yogurt (Probiotics)",
    category: "vegetable",
    nutrients: [
      "Live Probiotic Cultures (Lactobacillus)",
      "Calcium",
      "Protein",
      "Vitamin B12",
    ],
    benefits:
      "Fermented dairy offering live beneficial microbes that reinforce the gut microbiome, alongside bioavailable calcium and gentle protein.",
    traditionalUseNotes:
      "Served at the end of meals to cool internal heat, soothe burning stomachs, and restore gut balance after stomach bugs.",
    evidenceNote:
      "Proven to help replenish normal intestinal microflora after episodes of acute diarrhoea or during antibiotic courses.",
    foodExamples: ["Plain fresh curd", "Buttermilk (Chaas)", "Cucumber raita"],
    safetyNotes:
      "Opt for plain unsweetened varieties; those with severe dairy protein allergies should choose fermented plant-based alternatives.",
    illustrationId: "curd",
  },
  lentils: {
    id: "lentils",
    name: "Lentils & Pulses (Dal)",
    category: "vegetable",
    nutrients: [
      "Plant Protein",
      "Dietary Fibre",
      "Non-Haem Iron",
      "Folate",
      "Complex Carbohydrates",
    ],
    benefits:
      "Hearty legume supplying slow-burning complex carbohydrates, plant protein for tissue repair, and dietary iron.",
    traditionalUseNotes:
      "A staple across South Asia; light yellow moong dal khichdi is the quintessential gentle restorative dish.",
    evidenceNote:
      "Provides sustained low-glycemic satiety, supports muscle maintenance, and supplies prebiotic soluble fibre for colon health.",
    foodExamples: [
      "Moong dal khichdi",
      "Toor dal with cumin",
      "Sprouted moong salad",
      "Lentil soup",
    ],
    safetyNotes:
      "Soaking and cooking pulses thoroughly reduces phytates and oligosaccharides, minimizing digestive bloating and gas.",
    illustrationId: "lentils",
  },
  leafy_vegetables: {
    id: "leafy_vegetables",
    name: "Leafy Green Vegetables",
    category: "vegetable",
    nutrients: ["Calcium", "Vitamin K", "Magnesium", "Fibre", "Lutein"],
    benefits:
      "Cruciferous and leafy greens (kale, bok choy, moringa, methi) delivering plant calcium for bone density and vascular health.",
    traditionalUseNotes:
      "Prepared with garlic and mustard seeds to strengthen bones, tone muscles, and clear the digestive tract.",
    evidenceNote:
      "Essential foundation of the DASH dietary pattern shown to help lower high blood pressure and maintain cardiovascular health.",
    foodExamples: [
      "Steamed methi bhaji",
      "Moringa leaves in dal",
      "Mixed green stir-fry",
    ],
    safetyNotes:
      "Patients taking warfarin (blood thinner) must keep their dietary Vitamin K intake consistent rather than abruptly fluctuating.",
    illustrationId: "leafy_vegetables",
  },
  nuts_seeds: {
    id: "nuts_seeds",
    name: "Nuts & Seeds",
    category: "vegetable",
    nutrients: [
      "Alpha-Linolenic Acid (Omega-3)",
      "Magnesium",
      "Vitamin E",
      "Zinc",
      "Protein",
    ],
    benefits:
      "Crunchy powerhouses delivering healthy unsaturated fats, cellular antioxidant Vitamin E, and magnesium for muscle relaxation.",
    traditionalUseNotes:
      "Soaked almonds and walnuts traditionally eaten in the morning for memory, mental stamina, and enduring physical strength.",
    evidenceNote:
      "Daily modest intake of unsalted nuts supports healthy blood lipid profiles and arterial elasticity.",
    foodExamples: [
      "Soaked peeled almonds",
      "Crushed walnuts on porridge",
      "Flaxseed powder",
      "Chia seed pudding",
    ],
    safetyNotes:
      "Common allergen in sensitive populations; choose unsalted varieties to prevent excessive dietary sodium.",
    illustrationId: "nuts_seeds",
  },

  // --- OTHER EDUCATIONAL CHOICES: COMFORT & ACTIONS ---
  clean_water: {
    id: "clean_water",
    name: "Clean Drinking Water & Fluids",
    category: "action",
    nutrients: ["Hydration", "Electrolyte Vehicle", "Cellular Homeostasis"],
    benefits:
      "The fundamental biological necessity for blood volume maintenance, temperature regulation through sweating, and mucosal moisture.",
    traditionalUseNotes:
      "Boiled and cooled water traditionally prescribed as the first and supreme medicine for bodily purification.",
    evidenceNote:
      "Proven foundation of recovery in fever, dehydration, respiratory infection, and digestive recovery; thins mucosal secretions.",
    foodExamples: [
      "Boiled and cooled water",
      "Oral Rehydration Salt (ORS) solution",
      "Clear broths",
    ],
    safetyNotes:
      "Always ensure drinking water is from a verified safe, boiled, or properly filtered source to prevent waterborne pathogens.",
    illustrationId: "clean_water",
  },
  rest: {
    id: "rest",
    name: "Adequate Rest & Sleep",
    category: "action",
    nutrients: ["Immune Modulation", "Cellular Repair", "Energy Conservation"],
    benefits:
      "Allows the metabolic reallocation of energy reserves toward immune cytokine release, leukocyte action, and tissue healing.",
    traditionalUseNotes:
      "Bed rest and peaceful recovery away from exertion is recognized across all cultures as vital to bodily recuperation.",
    evidenceNote:
      "Physiological research shows sleep deprivation suppresses natural killer cells and antibody synthesis; rest accelerates symptomatic recovery.",
    foodExamples: [
      "Quiet darkened bedroom",
      "Scheduled daytime naps",
      "Temporary cessation of strenuous workouts",
    ],
    safetyNotes:
      "Prolonged immobility should be avoided in older adults; gentle slow mobilization prevents venous thrombosis.",
    illustrationId: "rest",
  },
  handwashing: {
    id: "handwashing",
    name: "Handwashing & Hygiene",
    category: "action",
    nutrients: [
      "Pathogen Interruption",
      "Surface Sanitation",
      "Infection Control",
    ],
    benefits:
      "Physical removal and chemical disruption of viral envelopes and bacterial membranes before they can enter eyes, nose, or mouth.",
    traditionalUseNotes:
      "Rinsing hands and feet before meals and entering living quarters has been standard practice in Indian homes for millennia.",
    evidenceNote:
      "Scientific cornerstone of public health: washing hands with soap and water for 20 seconds reduces respiratory infections by up to 20% and diarrhoea by 30%.",
    foodExamples: [
      "Soap and running clean water",
      "Alcohol-based hand sanitizer (at least 60% alcohol)",
    ],
    safetyNotes:
      "Ensure back of hands, between fingers, and under nails are scrubbed thoroughly; avoid touching face with unwashed hands.",
    illustrationId: "handwashing",
  },
  food_hygiene: {
    id: "food_hygiene",
    name: "Food Hygiene & Safe Storage",
    category: "action",
    nutrients: [
      "Pathogen Prevention",
      "Bacterial Growth Inhibition",
      "Toxin Avoidance",
    ],
    benefits:
      "Strict separation of raw and cooked items, prompt refrigeration below 5°C, and thorough cooking to prevent foodborne pathogens.",
    traditionalUseNotes:
      "Cooking fresh meals daily and consuming food while hot to prevent spoilage in warm climates.",
    evidenceNote:
      "Microbiologically validated principle (WHO 5 Keys to Safer Food): prevents Salmonella, E. coli, Campylobacter, and Staphylococcus food poisoning.",
    foodExamples: [
      "Refrigerating leftovers within 2 hours",
      "Thorough reheating",
      "Separate cutting boards for meat/veggies",
    ],
    safetyNotes:
      "Never leave cooked foods at room temperature for more than two hours; when in doubt about spoilage, discard safely.",
    illustrationId: "food_hygiene",
  },
  mosquito_protection: {
    id: "mosquito_protection",
    name: "Mosquito Protection & Vector Control",
    category: "action",
    nutrients: [
      "Vector Interruption",
      "Bite Prevention",
      "Environmental Control",
    ],
    benefits:
      "Barrier nets, repellent application, and eliminating stagnant water containers to break the transmission cycle of vector-borne illnesses.",
    traditionalUseNotes:
      "Burning neem leaves and dhoop to repel insects at dusk and wearing long clothing during mosquito season.",
    evidenceNote:
      "The definitive preventative measure against mosquito-borne pathogens (Aedes for Dengue, Anopheles for Malaria) established by WHO and CDC.",
    foodExamples: [
      "DEET or Picaridin repellents",
      "Insecticide-treated bed nets",
      "Emptying standing water coolers",
    ],
    safetyNotes:
      "Apply repellents carefully to exposed skin; avoid contact with eyes, mouth, and hands of young children.",
    illustrationId: "mosquito_protection",
  },

  // --- MEDICAL ACTIONS & PRESCRIBED CARE ---
  medical_consultation: {
    id: "medical_consultation",
    name: "Professional Medical Consultation",
    category: "medical",
    nutrients: [
      "Accurate Clinical Diagnosis",
      "Safety Triage",
      "Evidence-Based Guidance",
    ],
    benefits:
      "Assessment by a qualified healthcare professional who can perform clinical examination, diagnostic labs, and rule out life-threatening complications.",
    traditionalUseNotes:
      "Seeking the council of trained Vaidyas and Hakims when symptoms resisted home comfort measures.",
    evidenceNote:
      "Vital for serious infections like pneumonia, high sustained fever, neurological signs, severe dehydration, or suspected chronic illness.",
    foodExamples: [
      "Visiting primary health clinic",
      "Consulting family physician",
      "Hospital emergency room triage",
    ],
    safetyNotes:
      "Never delay seeking professional evaluation when red-flag symptoms (difficulty breathing, confusion, chest pain, persistent vomiting) occur.",
    illustrationId: "medical_consultation",
  },
  prescribed_treatment: {
    id: "prescribed_treatment",
    name: "Prescribed Medical Treatment",
    category: "medical",
    nutrients: [
      "Targeted Pharmacotherapy",
      "Antimicrobial Therapy",
      "Regulated Dosage",
    ],
    benefits:
      "Clinically prescribed pharmaceuticals (e.g. targeted antibiotics for bacterial infections, antimalarials, oral rehydration therapy, insulin) based on verified diagnosis.",
    traditionalUseNotes:
      "Administering specialized compound medicines under the strict supervision of a traditional healer.",
    evidenceNote:
      "Necessary for curing bacterial pneumonia, malaria, and controlling hypertension and diabetes; home remedies cannot replace essential pharmacotherapy.",
    foodExamples: [
      "Full course of prescribed antibiotics",
      "Prescribed antimalarial drugs",
      "Doctor-supervised medications",
    ],
    safetyNotes:
      "Complete the entire prescribed course exactly as directed; never self-medicate, share antibiotics, or use leftover medicines.",
    illustrationId: "prescribed_treatment",
  },
};
