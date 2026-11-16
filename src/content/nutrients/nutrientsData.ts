import { type NutrientInfo } from "../../features/findings/types";

export const VERIFIED_NUTRIENTS: Record<string, NutrientInfo> = {
  "nutrient.complex-carbs": {
    id: "nutrient.complex-carbs",
    name: "Complex Carbohydrates",
    category: "macronutrient",
    shortRole: "Sustained metabolic fuel delivering steady energy to the brain and working muscles.",
    introduction:
      "Complex carbohydrates are polysaccharide starch chains that digest steadily, releasing an even stream of glucose into the bloodstream to power cognitive focus and physical vitality without sharp spikes.",
    biologicalRoles: [
      "Supplies baseline glucose as the brain's obligate metabolic energy substrate",
      "Replenishes cellular glycogen stores in skeletal muscles and the liver",
      "Prevents muscle protein breakdown through energy-sparing metabolic mechanisms",
      "Supports optimal hormonal signaling for physical stamina and recovery",
    ],
    generalBenefits: [
      "Provides hours of even, jitter-free mental and physical vitality",
      "Stabilizes mood by supporting healthy serotonin synthesis pathways",
      "Promotes metabolic stamina during endurance and daily activities",
    ],
    foodSources: [
      "Whole wheat rotis, parathas, and phulkas",
      "Poha (flattened rice), brown rice, and red matta rice",
      "Rolled oats, steel-cut oats, and barley",
      "Millets (ragi, jowar, bajra, foxtail millet)",
      "Sweet potatoes, roasted baby potatoes, and yams",
    ],
    mealExamples: [
      "Poha prepared with roasted peanuts and tender green peas",
      "Warm whole-wheat roti with dal and seasonal vegetable sabzi",
      "Steamed brown rice paired with aromatic toor dal tadka",
      "Warm rolled oats cooked with crushed almonds and sliced banana",
    ],
    relatedInteraction:
      "Pairing whole-grain complex carbohydrates with dietary fibre and protein slows enzymatic breakdown, ensuring an exceptionally steady glycemic response.",
    educationalFact:
      "Unlike simple sugars, complex carbohydrates in whole grains and tubers retain intact bran and germ coats containing B-vitamins and minerals essential for cellular ATP creation.",
    illustrationId: "carbohydrates",
    fullBenefit:
      "Provides steady polysaccharides that break down gradually into glucose, supplying persistent fuel for cognitive and physical vitality.",
    absorptionNote:
      "Whole grains like millets, whole wheat, and brown rice digest slower than refined starches, especially when paired with legumes and vegetables.",
    iconName: "Sun",
    primaryColor: "#e0e7ff",
  },

  "nutrient.protein": {
    id: "nutrient.protein",
    name: "Protein",
    category: "macronutrient",
    shortRole: "Structural foundation for muscle rebuilding, cellular repair, and enzymatic defense.",
    introduction:
      "Proteins are polymeric chains of amino acids that form the structural scaffolding of every human tissue. From muscle myofibrils and collagen matrices to circulating enzymes and immunoglobulins, protein is vital for renewal.",
    biologicalRoles: [
      "Supplies essential amino acids for skeletal muscle protein synthesis and tissue regeneration",
      "Synthesizes biological enzymes, transport proteins, and peptide hormones",
      "Builds immunoglobulins and antibodies vital for humoral immune defense",
      "Supports structural integrity of skin, hair, nails, and connective ligaments",
    ],
    generalBenefits: [
      "Enhances muscular tone, recovery after exertion, and metabolic resilience",
      "Induces powerful satiety hormones, stabilizing hunger between meals",
      "Maintains lean physical mass during daily work and training",
    ],
    foodSources: [
      "Moong dal, toor dal, masoor dal, and chana dal",
      "Fresh cottage cheese (paneer) and Greek curd",
      "Whole eggs and egg whites",
      "Sprouted moong, sprouted chickpeas, and edamame",
      "Soy chunks, tofu, and roasted lentils",
    ],
    mealExamples: [
      "Golden moong dal chilla filled with grated paneer and herbs",
      "Boiled eggs seasoned with black pepper and roasted cumin",
      "Wholesome dal tadka served with warm roti or quinoa",
      "Sprouted moong salad tossed with diced cucumber and lemon juice",
    ],
    relatedInteraction:
      "Combining cereals (methionine-rich) with legumes (lysine-rich) creates a complete amino acid profile, maximizing biological value for plant-predominant meals.",
    educationalFact:
      "Consuming protein evenly across main meals stimulates muscle protein synthesis more effectively than backloading it all into a single evening dinner.",
    illustrationId: "protein",
    fullBenefit:
      "Provides amino acids essential for rebuilding muscle fibers, maintaining cellular enzymes, and supporting immune antibody production.",
    absorptionNote:
      "Pairing plant proteins (e.g., lentils with rice or roti) creates a balanced complementary amino acid profile.",
    iconName: "Dna",
    primaryColor: "#c084fc",
  },

  "nutrient.healthy-fats": {
    id: "nutrient.healthy-fats",
    name: "Healthy Fats",
    category: "macronutrient",
    shortRole: "Essential structural lipids enabling hormone synthesis and fat-soluble vitamin uptake.",
    introduction:
      "Healthy dietary lipids—including monounsaturated, polyunsaturated, and balanced traditional culinary fats—are indispensable components of cell membranes, brain myelination, and systemic hormone pathways.",
    biologicalRoles: [
      "Forms the fluid phospholipid bilayer of all human cellular membranes",
      "Serves as the biochemical precursor for steroid and sex hormones",
      "Obligate solvent and carrier for fat-soluble vitamins (A, D, E, and K)",
      "Constructs the myelin sheath insulating nerve axons for rapid neuro-transmission",
    ],
    generalBenefits: [
      "Preserves sharp cognitive processing and mental equilibrium",
      "Provides deep satiety and prolonged digestive satisfaction",
      "Nourishes supple, hydrated dermal barriers and healthy hair",
    ],
    foodSources: [
      "Roasted peanuts, almonds, walnuts, and cashews",
      "Pumpkin seeds, sunflower seeds, chia seeds, and sesame (til)",
      "Fresh coconut, coconut chutney, and virgin coconut oil",
      "Cold-pressed mustard oil, groundnut oil, and traditional A2 ghee",
      "Ripe avocado and egg yolks",
    ],
    mealExamples: [
      "Poha garnished with crunchy roasted peanuts and mustard seeds",
      "Warm steamed idlis paired with freshly ground coconut chutney",
      "Handful of soaked almonds and walnuts alongside fresh morning fruit",
      "Light tempering of cumin and mustard seeds in cold-pressed oil over dal",
    ],
    relatedInteraction:
      "Just 5–10 grams of healthy fats consumed with colorful vegetables increases the bioavailability of carotenoids and fat-soluble vitamins by over 300%.",
    educationalFact:
      "The human brain is approximately 60% fat by dry weight; omega-3 and healthy mono-unsaturated lipids directly fortify neural synapses and brain plasticity.",
    illustrationId: "healthy-fats",
    fullBenefit:
      "Essential for cell membrane flexibility, brain structural lipids, and the absorption of fat-soluble vitamins (A, D, E, K).",
    absorptionNote:
      "Sources include mustard oil, sesame, curd, nuts, seeds, and moderate traditional ghee.",
    iconName: "Flame",
    primaryColor: "#d8b4fe",
  },

  "nutrient.fibre": {
    id: "nutrient.fibre",
    name: "Dietary Fibre",
    category: "macronutrient",
    shortRole: "Nourishes gut microbiome flora, supports smooth digestion, and regulates glucose release.",
    introduction:
      "Dietary fibre encompasses indigestible plant polysaccharides—both soluble prebiotics and insoluble structural cellulose—that cultivate an abundant, diverse gut microbiome while promoting optimal GI motility.",
    biologicalRoles: [
      "Fermented by colonic bacteria into short-chain fatty acids (SCFAs) like butyrate",
      "Forms gel-like matrices in the stomach, slowing carbohydrate digestion and glucose absorption",
      "Adds non-digestible bulk to intestinal contents, ensuring regular peristalsis",
      "Binds dietary cholesterol and bile acids in the small intestine, assisting systemic clearance",
    ],
    generalBenefits: [
      "Nurtures a thriving, resilient gut microbiome and gut-brain axis",
      "Prevents mid-morning energy crashes by flattening post-meal glucose spikes",
      "Supports comfortable, effortless bowel regularity and abdominal lightness",
    ],
    foodSources: [
      "Lentils, chickpeas, black beans, and kidney beans (rajma)",
      "Whole grains: whole wheat, rolled oats, barley, and finger millet (ragi)",
      "Green peas, carrots, French beans, and bhindi (okra)",
      "Leafy greens: spinach, methi (fenugreek leaves), and moringa",
      "Fresh fruits: guava, apples with peel, pears, and pomegranates",
    ],
    mealExamples: [
      "Green pea and vegetable poha sprinkled with fresh coriander",
      "Hearty bowl of rajma masala with brown rice and cucumber salad",
      "Oatmeal topped with chia seeds, sliced apple, and cinnamon",
      "Moong dal chilla folded around finely chopped spinach and carrots",
    ],
    relatedInteraction:
      "Dietary fibre works symbiotically with adequate hydration; water swells soluble fibres into soothing digestive matrices.",
    educationalFact:
      "The beneficial bacteria in your colon ferment soluble prebiotic fibre to create butyrate, a key fuel source that renews the cells lining your gut barrier.",
    illustrationId: "fibre",
    fullBenefit:
      "Feeds beneficial gut bacteria, moderates blood glucose absorption rates, and maintains regular digestive rhythm.",
    absorptionNote:
      "Soluble and insoluble fibres work best when accompanied by adequate daily hydration.",
    iconName: "Wheat",
    primaryColor: "#a855f7",
  },

  "nutrient.vitamin-a": {
    id: "nutrient.vitamin-a",
    name: "Vitamin A & Beta-Carotene",
    category: "vitamin",
    shortRole: "Essential for low-light night vision, cellular differentiation, and immune barriers.",
    introduction:
      "Vitamin A exists as preformed retinoids and provitamin carotenoids such as beta-carotene. It is fundamental for visual pigment regeneration, mucosal barrier integrity, and adaptive immune activation.",
    biologicalRoles: [
      "Synthesizes rhodopsin in retinal rods, vital for low-light and color visual transduction",
      "Regulates transcription factors governing epithelial tissue differentiation and skin repair",
      "Maintains the integrity of respiratory, intestinal, and ocular mucosal linings",
      "Enhances T-cell proliferation and natural killer (NK) cell pathogen defense",
    ],
    generalBenefits: [
      "Protects sharp vision, reduces eye strain, and preserves visual clarity",
      "Fosters a glowing, resilient skin barrier against environmental stressors",
      "Reinforces the body's front-line mucosal defenses against external invaders",
    ],
    foodSources: [
      "Carrots, sweet potatoes, and pumpkin",
      "Dark leafy greens: spinach (palak), methi, amaranth, and moringa",
      "Ripe mangoes, papaya, and cantaloupe",
      "Egg yolks, whole milk, and cultured ghee",
      "Red bell peppers and fresh coriander leaves",
    ],
    mealExamples: [
      "Palak paneer made with tender pureed spinach and fresh ginger",
      "Grated carrot and green pea stir-fry with a pinch of turmeric",
      "Sprouted moong salad loaded with diced carrots, coriander, and lime",
      "Boiled eggs served with sauteed bell peppers and greens",
    ],
    relatedInteraction:
      "Beta-carotene is fat-soluble; sauteing carrots or leafy greens in a drop of ghee or oil increases carotenoid absorption by up to 600%.",
    educationalFact:
      "Beta-carotene functions as an internal plant sunscreen, quenching free radicals generated by blue light and oxidative exposures before they reach deeper cellular layers.",
    illustrationId: "vitamin-a",
    fullBenefit:
      "Essential for low-light photoreceptor integrity, skin barrier maintenance, and mucosal immune defense.",
    absorptionNote:
      "Fat-soluble nutrient; best absorbed when consumed with healthy culinary fats like ghee, curd, or cold-pressed oils.",
    iconName: "Eye",
    primaryColor: "#d8b4fe",
  },

  "nutrient.vitamin-b-complex": {
    id: "nutrient.vitamin-b-complex",
    name: "Vitamin B-Complex",
    category: "vitamin",
    shortRole: "Coenzymes driving cellular energy transformation, neuro-signaling, and DNA repair.",
    introduction:
      "The Vitamin B-Complex includes essential water-soluble cofactors (B1 Thiamine, B2 Riboflavin, B3 Niacin, B5 Pantothenic Acid, B6 Pyridoxine, B7 Biotin, and B12 Cobalamin) that activate the Krebs cycle to turn nutrients into cellular ATP.",
    biologicalRoles: [
      "Serves as coenzymes in carbohydrate, protein, and lipid mitochondrial metabolism",
      "Synthesizes neurotransmitters including serotonin, dopamine, and GABA",
      "Facilitates cellular methylation and red blood cell maturation",
      "Protects myelin sheaths and supports healthy peripheral nerve conduction",
    ],
    generalBenefits: [
      "Transforms meal nutrients into vibrant, sustained cellular stamina",
      "Protects mental clarity, emotional poise, and cognitive stamina under stress",
      "Supports vibrant cellular renewal in the hair, nails, and skin",
    ],
    foodSources: [
      "Whole grains: whole wheat, oats, unpolished rice, and barley",
      "Legumes: moong dal, chickpeas, lentils, and kidney beans",
      "Dairy: milk, curd (dahi), and paneer",
      "Nuts & seeds: peanuts, sunflower seeds, and almonds",
      "Eggs, bananas, and nutritional yeast",
    ],
    mealExamples: [
      "Moong dal chilla topped with sprouted greens and roasted seeds",
      "Poha with roasted peanuts and tender green peas",
      "Oatmeal cooked in milk, garnished with sliced bananas and almonds",
      "Curd bowl mixed with roasted cumin and crushed seeds",
    ],
    relatedInteraction:
      "B-vitamins work synergistically in biological cascades; maintaining a wide variety of whole grains, pulses, and dairy ensures no single co-factor bottleneck occurs.",
    educationalFact:
      "Because B-vitamins are water-soluble, the body cannot store large reserves, making consistent daily replenishment through whole foods essential.",
    illustrationId: "vitamin-b-complex",
    fullBenefit:
      "Coenzymes converting food nutrients into cellular ATP energy and maintaining neuro-cognitive vitality.",
    absorptionNote:
      "Best sustained through regular intake of whole grains, legumes, fermented dairy, and seeds.",
    iconName: "Sparkles",
    primaryColor: "#c084fc",
  },

  "nutrient.folate": {
    id: "nutrient.folate",
    name: "Folate (Vitamin B9)",
    category: "vitamin",
    shortRole: "Critical for DNA synthesis, genetic methylation, and red blood cell production.",
    introduction:
      "Folate (Vitamin B9) is a vital one-carbon metabolism cofactor required for nucleotide synthesis, rapid cellular division, and healthy red blood cell genesis.",
    biologicalRoles: [
      "Transfers methyl groups required for de novo purine and pyrimidine DNA synthesis",
      "Facilitates cell division in bone marrow for red and white blood cell creation",
      "Converts homocysteine to methionine, supporting cardiovascular and endothelial health",
      "Supports maternal and fetal neural tissue development during rapid growth phases",
    ],
    generalBenefits: [
      "Prevents megaloblastic fatigue by fostering healthy, oxygenated red blood cells",
      "Protects vascular endothelial integrity and heart wellness",
      "Supports vital cellular repair and healthy genetic expression across tissues",
    ],
    foodSources: [
      "Legumes: moong dal, toor dal, chickpeas (chana), and lentils",
      "Leafy greens: spinach, methi leaves, moringa, and mustard greens",
      "Sprouted pulses: sprouted moong and sprouted chana",
      "Citrus fruits, amla, and ripe avocados",
      "Green peas, asparagus, and broccoli",
    ],
    mealExamples: [
      "Sprouted moong salad with diced cucumbers, tomatoes, and lemon",
      "Steamed toor dal with fresh spinach (dal palak) and warm roti",
      "Moong dal chilla filled with chopped greens and coriander",
      "Chickpea chole bowl accompanied by fresh citrus and coriander relish",
    ],
    relatedInteraction:
      "Folate and Vitamin B12 act as biochemical partners in homocysteine recycling; pairing legumes with dairy or eggs creates complete methylation support.",
    educationalFact:
      "Natural food folates are abundant in green foliage (the Latin root 'folium' means leaf), highlighting the remarkable benefits of everyday Indian saag and herbs.",
    illustrationId: "folate",
    fullBenefit:
      "Critical for genetic material synthesis, red blood cell maturation, and healthy cellular replication.",
    absorptionNote:
      "Plentiful in legumes, dark leafy greens, and citrus fruits.",
    iconName: "Sparkles",
    primaryColor: "#c4b5fd",
  },

  "nutrient.vitamin-c": {
    id: "nutrient.vitamin-c",
    name: "Vitamin C",
    category: "vitamin",
    shortRole: "Potent antioxidant catalyzing collagen synthesis and unlocking plant iron absorption.",
    introduction:
      "Vitamin C (L-ascorbic acid) is a powerful water-soluble antioxidant that protects cellular proteins from oxidative damage, drives collagen triple-helix assembly, and triples plant-based non-haem iron absorption.",
    biologicalRoles: [
      "Essential cofactor for prolyl and lysyl hydroxylase enzymes during collagen synthesis",
      "Reduces ferric plant iron (Fe3+) into highly absorbable ferrous iron (Fe2+)",
      "Neutralizes reactive oxygen species in intra- and extracellular aqueous compartments",
      "Stimulates leukocyte production, chemotaxis, and cellular immune defense",
    ],
    generalBenefits: [
      "Unlocks 2x to 3x higher iron uptake from plant-based dals, grains, and greens",
      "Maintains firm skin, strong joint cartilage, and healthy blood vessel elasticity",
      "Bolsters daily immune resilience against seasonal challenges and fatigue",
    ],
    foodSources: [
      "Fresh amla (Indian gooseberry) and fresh lemon / lime juice",
      "Guava, sweet lime (mosambi), oranges, and ripe papaya",
      "Raw bell peppers (capsicum), green chillies, and tomatoes",
      "Fresh coriander, mint leaves, and moringa leaves",
      "Strawberries, kiwifruit, and lightly steamed green peas",
    ],
    mealExamples: [
      "Squeeze of fresh lemon over hot poha or moong dal chilla",
      "Fresh tomato, cucumber, and coriander kachumber salad",
      "Guava or citrus wedges enjoyed alongside a light morning meal",
      "Fresh amla chutney paired with steamed idlis or chapatis",
    ],
    relatedInteraction:
      "Vitamin C dramatically overcomes the iron-inhibiting effects of phytic acid in whole grains and pulses when consumed in the very same meal.",
    educationalFact:
      "A single Indian amla contains up to 20 times more Vitamin C than an orange, and its natural tannins help preserve its potency even during mild culinary heat.",
    illustrationId: "vitamin-c",
    fullBenefit:
      "Acts as a potent antioxidant, aids collagen synthesis, and significantly enhances the bioavailability of non-haem iron.",
    absorptionNote:
      "Heat-sensitive; freshly squeezed lemon, raw amla, or lightly cooked greens maximize retention.",
    iconName: "Citrus",
    primaryColor: "#e879f9",
  },

  "nutrient.vitamin-d": {
    id: "nutrient.vitamin-d",
    name: "Vitamin D",
    category: "vitamin",
    shortRole: "Steroid hormone regulator of calcium absorption, bone mineralization, and immunity.",
    introduction:
      "Vitamin D acts as a master seco-steroid hormone that regulates intestinal calcium transport, mineral homeostasis, inflammatory modulation, and immune cell gene expression.",
    biologicalRoles: [
      "Upregulates calbindin proteins in intestinal enterocytes, enabling active calcium uptake",
      "Maintains optimal serum calcium and phosphorus concentrations for bone osteogenesis",
      "Modulates macrophage cytokine production and stimulates antimicrobial peptides (cathelicidin)",
      "Supports neuro-muscular transmission and reduces fall risks through muscle tone support",
    ],
    generalBenefits: [
      "Ensures strong, resilient bones and teeth by preventing mineral leaching",
      "Supports deep emotional wellness and seasonal mood stability",
      "Strengthens innate immune defenses against respiratory and microbial stressors",
    ],
    foodSources: [
      "Sun-exposed mushrooms and culinary fungi",
      "Fortified whole milk, curd, and plant-based milks",
      "Egg yolks from free-range hens",
      "Fatty fish (salmon, mackerel, sardines)",
      "Direct gentle sunlight exposure on bare skin",
    ],
    mealExamples: [
      "Warm glass of fortified milk spiced with turmeric and cardamom",
      "Scrambled or boiled eggs served with sauteed button mushrooms",
      "Creamy curd bowl topped with berries and seeds",
      "Grilled paneer skewers served with sun-ripened vegetable salad",
    ],
    relatedInteraction:
      "Vitamin D requires adequate dietary magnesium to convert from its storage form (calcidiol) into its biologically active hormone form (calcitriol).",
    educationalFact:
      "Although often labeled a vitamin, Vitamin D actually functions as a pre-hormone; virtually every tissue and nucleated cell in your body possesses Vitamin D receptors (VDR).",
    illustrationId: "vitamin-d",
    fullBenefit:
      "Regulates calcium absorption in the intestine and directs mineral incorporation into skeletal bone density.",
    absorptionNote:
      "Fat-soluble seco-steroid; best absorbed when accompanied by wholesome culinary fats.",
    iconName: "Sun",
    primaryColor: "#fde047",
  },

  "nutrient.vitamin-e": {
    id: "nutrient.vitamin-e",
    name: "Vitamin E",
    category: "vitamin",
    shortRole: "Lipid-soluble antioxidant shielding cellular membranes and vascular walls from oxidation.",
    introduction:
      "Vitamin E comprises a family of lipid-soluble tocols (prominently alpha-tocopherol) that embed within cellular and organelle membranes to halt the chain reaction of polyunsaturated lipid peroxidation.",
    biologicalRoles: [
      "Acts as a chain-breaking peroxyl radical scavenger in cellular phospholipid bilayers",
      "Protects low-density lipoproteins (LDL) and vascular walls from oxidative modification",
      "Preserves the structural integrity of red blood cell membranes against haemolysis",
      "Supports reproductive tissue integrity and healthy micro-vascular circulation",
    ],
    generalBenefits: [
      "Shields cells against oxidative stress from intense exercise and urban pollutants",
      "Fosters supple, radiant skin hydration and capillary elasticity",
      "Supports long-term cardiovascular health and clear arterial blood flow",
    ],
    foodSources: [
      "Almonds, roasted peanuts, hazelnuts, and walnuts",
      "Sunflower seeds, pumpkin seeds, and sesame seeds",
      "Cold-pressed sunflower oil, mustard oil, and wheat germ oil",
      "Avocado, spinach, and broccoli",
      "Whole grains with intact germ",
    ],
    mealExamples: [
      "Poha studded with golden roasted peanuts and crunchy pumpkin seeds",
      "Morning bowl of oats topped with soaked sliced almonds and sunflower seeds",
      "Steamed spinach tossed with a light drizzle of cold-pressed oil and roasted seeds",
      "Mixed fruit chaat sprinkled with crushed almonds and walnuts",
    ],
    relatedInteraction:
      "Vitamin C in the cytoplasm regenerates oxidized Vitamin E back into its active antioxidant form, creating a perpetual cellular defense circuit.",
    educationalFact:
      "Because Vitamin E integrates into fat tissues, combining seed- and nut-derived Vitamin E with colorful salads preserves fat-soluble carotenoids from oxidation during digestion.",
    illustrationId: "vitamin-e",
    fullBenefit:
      "Shields cellular lipids and cell membranes from oxidative stress, preserving skin and cardiovascular health.",
    absorptionNote:
      "Fat-soluble antioxidant; absorbed efficiently in the presence of dietary nuts, seeds, and oils.",
    iconName: "Shield",
    primaryColor: "#d8b4fe",
  },

  "nutrient.vitamin-k": {
    id: "nutrient.vitamin-k",
    name: "Vitamin K",
    category: "vitamin",
    shortRole: "Directs calcium into skeletal bone matrices while preventing arterial calcification.",
    introduction:
      "Vitamin K (phylloquinone K1 from greens and menaquinones K2 from fermentation) is a mandatory cofactor for gamma-glutamyl carboxylase, activating proteins that regulate blood clotting and guide calcium into bones rather than arteries.",
    biologicalRoles: [
      "Carboxylates osteocalcin, anchoring circulating calcium directly into the hydroxyapatite bone lattice",
      "Activates Matrix Gla Protein (MGP) to prevent calcium deposition in arterial walls",
      "Enables hepatic synthesis of blood clotting factors (II, VII, IX, X) for wound recovery",
      "Supports healthy cellular differentiation and mitochondrial energy function",
    ],
    generalBenefits: [
      "Protects skeletal density, ensuring calcium strengthens bones instead of soft tissues",
      "Preserves supple, pliable arterial vessels for healthy lifelong cardiovascular function",
      "Supports rapid, normal tissue healing and clotting responses after minor scrapes",
    ],
    foodSources: [
      "Fresh coriander (dhaniya), parsley, and mint leaves",
      "Spinach (palak), methi leaves, sarson (mustard greens), and kale",
      "Green peas, broccoli, and Brussels sprouts",
      "Fermented curd, aged cheeses, and natto",
      "Green cabbage and spring onions",
    ],
    mealExamples: [
      "Generous garnish of fresh chopped coriander over hot poha or dal",
      "Traditional sarson ka saag or palak sabzi with roti",
      "Moong dal chilla topped with minced herbs and spinach leaves",
      "Green pea and paneer curry with a side of mixed herb salad",
    ],
    relatedInteraction:
      "Vitamin K works in exquisite synergy with Vitamin D and Calcium: Vitamin D increases calcium absorption, while Vitamin K directs it safely into bone minerals.",
    educationalFact:
      "Fresh green herbs like coriander and mint are powerhouses of Vitamin K1; even a humble fistful sprinkled over your plate delivers an impactful dose.",
    illustrationId: "vitamin-k",
    fullBenefit:
      "Activates osteocalcin to bind calcium into bones and promotes healthy blood clotting.",
    absorptionNote:
      "Fat-soluble; light steaming with a drop of culinary oil enhances phylloquinone bioavailability from green leaves.",
    iconName: "Leaf",
    primaryColor: "#86efac",
  },

  "nutrient.iron": {
    id: "nutrient.iron",
    name: "Iron",
    category: "mineral",
    shortRole: "Core element of haemoglobin, ferrying oxygen to brain cells and working muscles.",
    introduction:
      "Iron is an indispensable trace mineral at the core of haemoglobin and myoglobin. It binds oxygen in the lungs and delivers it across the entire micro-circulation to fuel cellular respiration and cognitive alertness.",
    biologicalRoles: [
      "Forms the functional haem center of red blood cell haemoglobin for oxygen transport",
      "Constitutes muscle myoglobin, storing oxygen for muscular contraction during exertion",
      "Crucial component of mitochondrial cytochromes generating ATP in the electron transport chain",
      "Cofactor for enzymes synthesizing dopamine, noradrenaline, and neurotransmitter networks",
    ],
    generalBenefits: [
      "Banishes midday brain fog and lethargy by keeping tissues richly oxygenated",
      "Elevates physical endurance, stamina, and workout recovery times",
      "Supports sharp mental focus, memorization, and emotional resilience",
    ],
    foodSources: [
      "Poha (flattened rice)—often iron-enriched from traditional cast-iron roller processing",
      "Lentils, moong dal, masoor dal, and black chickpeas (kala chana)",
      "Sprouted pulses: sprouted moong, green grams, and sprouted lentils",
      "Dark leafy greens: spinach (palak), methi, amaranth, and moringa leaves",
      "Pumpkin seeds, sesame seeds (til), and jaggery (gur) in moderation",
    ],
    mealExamples: [
      "Poha with green peas, peanuts, and a squeeze of fresh lemon juice",
      "Moong dal chilla prepared with soaked and ground split moong lentils",
      "Kala chana chaat tossed with chopped tomatoes, onions, and lemon",
      "Spinach and lentil soup (dal palak) accompanied by whole wheat phulkas",
    ],
    relatedInteraction:
      "Non-haem iron in plant staples is bound by phytates; adding a splash of citrus (Vitamin C) or soaking/sprouting lentils multiplies iron bioavailability up to 300%.",
    educationalFact:
      "Traditional Indian poha is pressed through iron rollers, naturally transferring bioavailable trace iron into the flattened flakes and making it a beloved wholesome morning staple.",
    illustrationId: "iron",
    fullBenefit:
      "Forms the core atom of haemoglobin, facilitating oxygen transport from lungs to working muscles and the brain.",
    absorptionNote:
      "Non-haem iron from lentils and spinach is absorbed up to 3x more effectively when paired with Vitamin C.",
    iconName: "Activity",
    primaryColor: "#c084fc",
  },

  "nutrient.calcium": {
    id: "nutrient.calcium",
    name: "Calcium",
    category: "mineral",
    shortRole: "Mineral foundation for bone density, nerve impulse conduction, and muscle flexing.",
    introduction:
      "Calcium is the most abundant mineral in the human body. While 99% resides in bones and enamel as structural hydroxyapatite, the remaining 1% regulates nerve signals, muscle contractions, and heart rhythm.",
    biologicalRoles: [
      "Provides compressive mineral strength to the skeletal framework and tooth enamel",
      "Acts as a second messenger triggering the sliding filament cycle of muscle contraction",
      "Facilitates neurotransmitter release at synaptic junctions for nerve communication",
      "Activates coagulation cascades for rapid vascular barrier repair",
    ],
    generalBenefits: [
      "Builds dense, fracture-resistant bone mass throughout every decade of life",
      "Ensures smooth, coordinated muscular contractions without cramps or spasms",
      "Supports steady cardiac rhythm and stable vascular muscle tone",
    ],
    foodSources: [
      "Curd (dahi), buttermilk (chaas), and fresh lassi",
      "Paneer (cottage cheese) and cow's or buffalo's milk",
      "Finger millet (ragi)—one of the richest plant-based calcium grains",
      "White and black sesame seeds (til) and poppy seeds (khus khus)",
      "Tofu, fortified plant beverages, and dark leafy greens like amaranth",
    ],
    mealExamples: [
      "Bowl of creamy curd with roasted cumin alongside chapatis and dal",
      "Paneer bhurji or fresh paneer cubes folded into a warm roti roll",
      "Ragi porridge or ragi dosa served with fresh coconut chutney",
      "Glass of spiced buttermilk (chaas) enjoyed with a balanced lunch",
    ],
    relatedInteraction:
      "Calcium absorption is dependent on adequate Vitamin D, while dietary magnesium balances calcium's contracting action with muscle relaxation.",
    educationalFact:
      "Sesame seeds (til) pack nearly 10 times more calcium by weight than cow's milk, making traditional sesame chikkis and til tadkas true mineral powerhouses.",
    illustrationId: "calcium",
    fullBenefit:
      "Provides structural mineral density for bones and teeth, and regulates rhythmic cardiac and muscular contraction.",
    absorptionNote:
      "Synergistic with Vitamin D and magnesium for optimal skeletal incorporation.",
    iconName: "Bone",
    primaryColor: "#f3e8ff",
  },

  "nutrient.potassium": {
    id: "nutrient.potassium",
    name: "Potassium",
    category: "mineral",
    shortRole: "Primary intracellular electrolyte balancing cellular fluids and smoothing blood pressure.",
    introduction:
      "Potassium is the primary positively charged electrolyte inside human cells. It maintains the electrochemical gradient across cell membranes, offsets excess dietary sodium, and promotes smooth arterial dilation.",
    biologicalRoles: [
      "Maintains resting membrane potentials required for neuro-electric signal transmission",
      "Regulates intracellular osmotic pressure and systemic fluid balance",
      "Facilitates smooth vascular muscle relaxation, promoting healthy blood pressure",
      "Participates in cellular glycogen synthesis from circulating glucose",
    ],
    generalBenefits: [
      "Counters excess dietary salt to support gentle, balanced cardiovascular blood pressure",
      "Prevents uncomfortable muscle cramps, tension, and post-exercise soreness",
      "Fosters deep cellular hydration and natural electrolyte equilibrium",
    ],
    foodSources: [
      "Fresh bananas, ripe plantains, and tender coconut water",
      "Boiled potatoes, sweet potatoes, and yams",
      "Lentils, moong dal, toor dal, and rajma (kidney beans)",
      "Spinach, moringa, tomatoes, and pumpkin",
      "Oranges, melons, and dried dates",
    ],
    mealExamples: [
      "Sliced banana served over warm rolled oats or wholesome porridge",
      "Sambar filled with drumsticks, pumpkin, tomatoes, and toor dal",
      "Tender coconut water or fresh coconut chutney alongside steamed idlis",
      "Dal tadka served with steamed rice and a fresh tomato salad",
    ],
    relatedInteraction:
      "Maintaining a generous potassium-to-sodium intake ratio is one of the most well-documented dietary habits for cardiovascular longevity and healthy arteries.",
    educationalFact:
      "One tender coconut water provides nearly twice the potassium of an average sports drink, with zero artificial syrups or synthetic additives.",
    illustrationId: "potassium",
    fullBenefit:
      "Regulates intracellular fluid equilibrium, counters excess sodium, and supports smooth vascular function.",
    absorptionNote:
      "Widely present in bananas, potatoes, spinach, coconut water, and legumes.",
    iconName: "Zap",
    primaryColor: "#e9d5ff",
  },

  "nutrient.magnesium": {
    id: "nutrient.magnesium",
    name: "Magnesium",
    category: "mineral",
    shortRole: "Master enzymatic activator for over 300 metabolic reactions and muscular relaxation.",
    introduction:
      "Magnesium is a vital intracellular macromineral that acts as a mandatory counter-ion for ATP. It participates as a catalytic cofactor in over 300 enzymatic cascades governing energy synthesis, DNA repair, and muscle relaxation.",
    biologicalRoles: [
      "Chelates with ATP (forming Mg-ATP) to enable cellular energy-requiring reactions",
      "Blocks NMDA glutamate receptors in the brain to prevent neuro-excitotoxicity and promote calm",
      "Acts as a physiological calcium antagonist, permitting muscle fibers to relax after contraction",
      "Supports insulin receptor substrate phosphorylation for smooth glucose uptake",
    ],
    generalBenefits: [
      "Promotes restorative, restful sleep and soothes physical muscular tightness",
      "Eases everyday mental tension and fosters a grounded, tranquil state of mind",
      "Supports steady metabolic glucose management and cardiovascular rhythm",
    ],
    foodSources: [
      "Pumpkin seeds (kaddu ke beej), chia seeds, and sunflower seeds",
      "Almonds, cashews, peanuts, and walnuts",
      "Whole grains: rolled oats, whole wheat, brown rice, and millets",
      "Dark leafy greens: spinach, methi, and swiss chard (at the core of chlorophyll)",
      "Legumes: moong dal, chickpeas, and black beans",
    ],
    mealExamples: [
      "Poha topped with roasted peanuts and a spoonful of toasted pumpkin seeds",
      "Oatmeal cooked with chopped almonds and a pinch of cinnamon",
      "Sauteed spinach and moong dal bowl garnished with toasted sesame",
      "Evening trail mix of roasted pumpkin seeds, almonds, and walnuts",
    ],
    relatedInteraction:
      "Chlorophyll molecules in green leaves have a magnesium atom at their exact geometric center; dark leafy greens are literally green magnesium concentrates.",
    educationalFact:
      "Because magnesium relaxes smooth muscle tissues in blood vessel walls, ensuring adequate magnesium intake helps prevent tension headaches and arterial stiffness.",
    illustrationId: "magnesium",
    fullBenefit:
      "Activates over 300 enzymatic reactions, promotes muscular relaxation, and assists cellular energy production.",
    absorptionNote:
      "Readily absorbed from whole seeds, nuts, and greens; soaking seeds further improves mineral release.",
    iconName: "Sparkles",
    primaryColor: "#c084fc",
  },

  "nutrient.zinc": {
    id: "nutrient.zinc",
    name: "Zinc",
    category: "mineral",
    shortRole: "Catalytic core for cellular immunity, wound recovery, and protein synthesis.",
    introduction:
      "Zinc is an indispensable trace mineral incorporated into thousands of zinc-finger transcription proteins. It regulates gene transcription, maintains sensory taste acuity, and directs white blood cell maturation.",
    biologicalRoles: [
      "Forms zinc-finger structural motifs regulating DNA transcription and cell division",
      "Directs maturation and proliferation of T-lymphocytes and protective immune cells",
      "Acts as a mandatory cofactor for collagenases and alkaline phosphatase in tissue wound repair",
      "Maintains sensory receptors for taste and smell (gustin/carbonic anhydrase VI)",
    ],
    generalBenefits: [
      "Fortifies everyday immune defenses against common pathogens and seasonal sniffles",
      "Speeds up skin regeneration, blemish resolution, and mucosal healing",
      "Preserves sharp taste acuity and healthy appetite regulation",
    ],
    foodSources: [
      "Pumpkin seeds, hemp seeds, and sesame seeds",
      "Lentils, chickpeas (chana), and kidney beans",
      "Dairy: paneer, curd, and milk",
      "Eggs and poultry",
      "Whole grains like wheat germ, oats, and amaranth",
    ],
    mealExamples: [
      "Crunchy pumpkin seeds and roasted peanuts sprinkled over breakfast poha",
      "Warm chickpea chole with whole wheat roti and curd",
      "Moong dal chilla topped with grated paneer and hemp seeds",
      "Boiled eggs served with whole grain toast and seed sprinkle",
    ],
    relatedInteraction:
      "Soaking legumes and seeds prior to cooking reduces phytates, drastically improving zinc absorption and cellular utilization.",
    educationalFact:
      "Over 10% of all proteins in the human body require zinc to maintain their functional three-dimensional shape, more than any other trace metal.",
    illustrationId: "zinc",
    fullBenefit:
      "Core micronutrient for immune cell activation, protein synthesis, and tissue regeneration.",
    absorptionNote:
      "Protein-rich meals enhance zinc uptake compared to high-phytate unsoaked meals.",
    iconName: "Shield",
    primaryColor: "#d8b4fe",
  },

  "nutrient.phosphorus": {
    id: "nutrient.phosphorus",
    name: "Phosphorus",
    category: "mineral",
    shortRole: "Structural backbone of DNA, cell membranes, and ATP high-energy bonds.",
    introduction:
      "Phosphorus is the second most abundant mineral in the body after calcium. Working in precise ratio with calcium, it forms bone mineral matrices and constitutes the phosphate backbone of DNA, RNA, and ATP.",
    biologicalRoles: [
      "Combines with calcium to form hydroxyapatite crystals for bone and enamel rigidity",
      "Forms the high-energy phosphoanhydride bonds of adenosine triphosphate (ATP)",
      "Constitutes the hydrophilic head groups of membrane phospholipids",
      "Serves as the principal intracellular phosphate buffer maintaining acid-base pH balance",
    ],
    generalBenefits: [
      "Works alongside calcium to preserve robust skeletal and dental mineral strength",
      "Unlocks instant cellular chemical energy transfer for muscular and neural activity",
      "Maintains stable acid-base pH equilibrium across vital bodily fluids",
    ],
    foodSources: [
      "Dairy: paneer, curd, milk, and buttermilk",
      "Legumes: lentils, toor dal, moong dal, and chickpeas",
      "Eggs and poultry",
      "Nuts and seeds: pumpkin seeds, peanuts, and almonds",
      "Whole grains: whole wheat, oats, and brown rice",
    ],
    mealExamples: [
      "Paneer bhurji prepared with onions, tomatoes, and whole wheat rotis",
      "Warm bowl of dal tadka served with steamed brown rice and curd",
      "Boiled eggs accompanied by whole wheat toast and seeds",
      "Moong dal chilla paired with a bowl of homemade curd",
    ],
    relatedInteraction:
      "Maintaining balanced phosphorus and calcium intake preserves ideal bone mineral density; natural dairy, legumes, and seeds naturally package both in harmonious ratios.",
    educationalFact:
      "Every single thought, muscle contraction, and heartbeat is powered by the splitting of a phosphate bond from ATP, turning it into ADP and releasing vital energy.",
    illustrationId: "phosphorus",
    fullBenefit:
      "Works in partnership with calcium for bone mineral integrity and forms high-energy ATP bonds.",
    absorptionNote:
      "Naturally abundant and well-absorbed across dairy, legumes, grains, and nuts.",
    iconName: "Zap",
    primaryColor: "#f3e8ff",
  },
};
