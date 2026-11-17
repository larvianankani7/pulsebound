import { type QuizDefinition } from "../types";

export const QUIZZES: Record<string, QuizDefinition> = {
  quiz_1: {
    id: "quiz_1",
    levelNumber: 1,
    levelId: "level_1",
    badgeId: "badge_1",
    learningContentId: "learn_1",
    conditionName: "Common Cold",
    title: "Common Cold & Viral Transmission Quiz",
    description:
      "Test your understanding of viral transmission, supportive hydration, and barrier hygiene.",
    questions: [
      {
        id: "quiz_1_q1",
        question: "What is the primary biological cause of the common cold?",
        options: [
          "Exposure to cold weather or chilled air",
          "Respiratory viruses such as rhinoviruses",
          "Bacterial overgrowth in the digestive tract",
          "Consuming cold foods and ice water",
        ],
        correctIndex: 1,
        explanation:
          "The common cold is caused by over 200 distinct respiratory viruses (most commonly rhinoviruses), not cold weather or chilled foods.",
        takeaway: "Viruses cause colds; environmental cold is merely a myth.",
      },
      {
        id: "quiz_1_q2",
        question:
          "Why are antibiotics ineffective against uncomplicated common cold infections?",
        options: [
          "Viruses replicate too quickly for antibiotics to reach them",
          "Antibiotics only kill bacteria, not viral pathogens",
          "Antibiotics only work when taken alongside hot beverages",
          "Cold viruses neutralize antibiotic molecules in saliva",
        ],
        correctIndex: 1,
        explanation:
          "Antibiotics specifically target bacterial structures and have zero therapeutic effect against viral pathogens like rhinoviruses.",
        takeaway:
          "Never use antibiotics for viral colds without bacterial indication.",
      },
      {
        id: "quiz_1_q3",
        question:
          "Which measure is most effective in preventing cold virus transmission to others?",
        options: [
          "Taking double doses of vitamin supplements",
          "Frequent handwashing with soap for 20 seconds and covering coughs",
          "Drinking cold carbonated beverages",
          "Avoiding all outdoor sunlight during winter",
        ],
        correctIndex: 1,
        explanation:
          "Frequent 20-second handwashing and sneezing into tissues or the elbow break the direct transmission chain of respiratory droplets.",
        takeaway: "Barrier hygiene and handwashing prevent respiratory spread.",
      },
    ],
  },

  quiz_2: {
    id: "quiz_2",
    levelNumber: 2,
    levelId: "level_2",
    badgeId: "badge_2",
    learningContentId: "learn_2",
    conditionName: "Fever Awareness",
    title: "Fever & Immune Thermoregulation Quiz",
    description:
      "Assess your knowledge of fever physiology, safe hydration, and critical medical red flags.",
    questions: [
      {
        id: "quiz_2_q1",
        question: "What does an elevated body temperature (fever) signify?",
        options: [
          "An active immune defense mechanism orchestrated by pyrogens",
          "A permanent malfunction of brain blood flow",
          "A disease exclusively caused by spicy food intake",
          "An allergic reaction to ambient room temperature",
        ],
        correctIndex: 0,
        explanation:
          "Fever is a regulated physiological symptom where immune pyrogens elevate the hypothalamus set-point to hinder microbial replication.",
        takeaway: "Fever is an immune defense sign, not a stand-alone disease.",
      },
      {
        id: "quiz_2_q2",
        question:
          "What is the most crucial supportive care action during an active fever episode?",
        options: [
          "Strict fluid restriction to dry out toxins",
          "Plentiful hydration (water, tender coconut water, broths) and bed rest",
          "Intense aerobic physical workouts to sweat it out",
          "Bundling in multiple heavy wool blankets in an unventilated room",
        ],
        correctIndex: 1,
        explanation:
          "Increased metabolic rate and sweating heighten fluid loss; replenishing fluids and resting prevent dehydration and conserve immune energy.",
        takeaway: "Hydration and physical rest are vital supportive pillars.",
      },
      {
        id: "quiz_2_q3",
        question:
          "Which red-flag symptom requires immediate professional medical care during a fever?",
        options: [
          "Mild loss of appetite for a single meal",
          "Feeling sweaty after a lukewarm water sponge",
          "High fever exceeding 3 consecutive days or accompanied by stiff neck/breathing difficulty",
          "Drinking three glasses of warm water in one hour",
        ],
        correctIndex: 2,
        explanation:
          "Fever lasting >3 days or accompanied by neurological red flags (stiff neck, altered consciousness) or breathing distress requires urgent medical evaluation.",
        takeaway: "Persistent or complicated fevers mandate professional care.",
      },
    ],
  },

  quiz_3: {
    id: "quiz_3",
    levelNumber: 3,
    levelId: "level_3",
    badgeId: "badge_3",
    learningContentId: "learn_3",
    conditionName: "Sore Throat",
    title: "Sore Throat Demulcents & Care Quiz",
    description:
      "Learn about mucosal soothing, warm demulcents, and when bacterial swabs are necessary.",
    questions: [
      {
        id: "quiz_3_q1",
        question:
          "How do warm demulcent fluids (e.g. warm honey-lemon or tulsi infusions) soothe a scratchy throat?",
        options: [
          "They coat irritated pharyngeal mucosal membranes and stimulate saliva",
          "They surgically remove infected tonsillar tissue",
          "They act as synthetic antibiotic chemical agents",
          "They permanently freeze nerve sensation in the vocal cords",
        ],
        correctIndex: 0,
        explanation:
          "Demulcents form a protective viscous barrier over inflamed pharyngeal mucosa, reducing frictional irritation from swallowing.",
        takeaway:
          "Warm demulcents coat and soothe irritated pharyngeal tissues.",
      },
      {
        id: "quiz_3_q2",
        question:
          "Why must honey NEVER be administered to infants under 12 months of age?",
        options: [
          "Infants cannot digest any sweet carbohydrates",
          "Risk of infant botulism from Clostridium botulinum spores",
          "Honey immediately discolors baby teeth",
          "Honey neutralizes natural maternal breastmilk enzymes",
        ],
        correctIndex: 1,
        explanation:
          "Honey may harbor Clostridium botulinum spores which can germinate in an infant's immature gastrointestinal tract, causing life-threatening infant botulism.",
        takeaway: "Never give honey to infants under 1 year of age.",
      },
      {
        id: "quiz_3_q3",
        question:
          "When should a sore throat be evaluated clinically by a physician?",
        options: [
          "When it feels slightly dry upon waking in morning air",
          "When accompanied by high fever, severe difficulty swallowing saliva, or pus exudate on tonsils",
          "Whenever warm tea provides temporary relief",
          "Only if the user sneezes once during the afternoon",
        ],
        correctIndex: 1,
        explanation:
          "Severe throat pain, inability to swallow saliva, tonsillar exudate, or high fever may indicate bacterial pharyngitis (e.g. Strep) requiring medical assessment.",
        takeaway:
          "Inability to swallow or tonsillar exudate requires medical assessment.",
      },
    ],
  },

  quiz_4: {
    id: "quiz_4",
    levelNumber: 4,
    levelId: "level_4",
    badgeId: "badge_4",
    learningContentId: "learn_4",
    conditionName: "Cough Awareness",
    title: "Cough Reflex & Airway Management Quiz",
    description:
      "Explore the physiological role of the cough reflex, warm fluids, and respiratory red flags.",
    questions: [
      {
        id: "quiz_4_q1",
        question: "What is the primary physiological purpose of a cough?",
        options: [
          "To damage the vocal cords during viral infection",
          "A protective airway reflex that clears mucus, foreign particles, and irritants",
          "A neurological sign indicating permanent lung deterioration",
          "An involuntary reaction caused only by spicy seasonings",
        ],
        correctIndex: 1,
        explanation:
          "The cough reflex is a vital airway defense mechanism that clears secretions, foreign debris, and pathogens from the tracheobronchial tree.",
        takeaway: "Coughing protects and clears your respiratory airways.",
      },
      {
        id: "quiz_4_q2",
        question:
          "Which non-pharmacological comfort measure is widely supported for easing cough tickles?",
        options: [
          "Drinking ice-cold sweetened sodas",
          "Warm humidified steam, warm herbal infusions, and adequate daily fluids",
          "Smoking herbal cigarettes",
          "Avoiding drinking any fluids for 24 hours",
        ],
        correctIndex: 1,
        explanation:
          "Warm fluids and steam moisten the respiratory epithelium, thin thickened secretions, and calm hyper-reactive cough receptors.",
        takeaway:
          "Warm fluids and humidity naturally loosen bronchial secretions.",
      },
      {
        id: "quiz_4_q3",
        question:
          "Which clinical presentation with a cough necessitates urgent emergency medical care?",
        options: [
          "Occasional throat clearing after talking for two hours",
          "Mild clear mucus in the morning that clears after tea",
          "Coughing up blood (hemoptysis), chest pain, or marked shortness of breath",
          "Sneezing once while dusting a bookshelf",
        ],
        correctIndex: 2,
        explanation:
          "Hemoptysis (blood in sputum), persistent chest pain, wheezing, or dyspnea are red-flag indicators requiring rapid clinical evaluation.",
        takeaway:
          "Blood in sputum or shortness of breath demands emergency care.",
      },
    ],
  },

  quiz_5: {
    id: "quiz_5",
    levelNumber: 5,
    levelId: "level_5",
    badgeId: "badge_5",
    learningContentId: "learn_5",
    conditionName: "Digestive Upset",
    title: "Digestive Comfort & Gut Hydration Quiz",
    description:
      "Understand gastric mucosal rest, electrolyte support, and easily digestible bland nutrition.",
    questions: [
      {
        id: "quiz_5_q1",
        question:
          "During mild digestive upset, what type of diet provides optimal digestive rest?",
        options: [
          "Heavy deep-fried oily fritters with extra hot chili powder",
          "Bland, easily digestible foods like rice porridge (kanji), khichdi, or steamed bananas",
          "Raw fibrous cruciferous salads with creamy dressings",
          "Very rich chocolate pastries and whole dairy shakes",
        ],
        correctIndex: 1,
        explanation:
          "Bland carbohydrates like rice porridge are gentle on the gastrointestinal tract, requiring minimal enzymatic and motility exertion to digest.",
        takeaway:
          "Bland, easily digestible foods allow inflamed gut lining to rest.",
      },
      {
        id: "quiz_5_q2",
        question:
          "What is the role of oral rehydration salts (ORS) or electrolyte fluids during stomach distress?",
        options: [
          "To chemically destroy all bacteria residing in the stomach",
          "To replenish vital water and electrolytes (sodium, potassium) lost through loose stools or vomiting",
          "To act as a surgical laxative agent",
          "To prevent the stomach from digesting any future carbohydrates",
        ],
        correctIndex: 1,
        explanation:
          "Electrolyte solutions balance vital ions lost via gastrointestinal fluids, preventing hypovolemia and dehydration.",
        takeaway: "Electrolytes replenish critical sodium and potassium ions.",
      },
      {
        id: "quiz_5_q3",
        question:
          "Which symptom should prompt immediate medical evaluation for acute digestive pain?",
        options: [
          "Mild stomach rumble an hour after drinking warm mint tea",
          "Severe localized abdominal rigidity, persistent black tarry stools, or inability to keep any fluids down",
          "Passing gas after eating a lentil meal",
          "Feeling hungry after a morning walk",
        ],
        correctIndex: 1,
        explanation:
          "Severe localized peritoneal tenderness, hematemesis, black stools (melena), or complete fluid intolerance are medical emergencies.",
        takeaway:
          "Severe abdominal rigidity or bloody stools requires immediate care.",
      },
    ],
  },

  quiz_6: {
    id: "quiz_6",
    levelNumber: 6,
    levelId: "level_6",
    badgeId: "badge_6",
    learningContentId: "learn_6",
    conditionName: "Seasonal Allergies",
    title: "Seasonal Allergies & Histamine Response Quiz",
    description:
      "Assess your understanding of allergic triggers, non-communicability, and allergen barriers.",
    questions: [
      {
        id: "quiz_6_q1",
        question:
          "Are seasonal allergies (allergic rhinitis) communicable between individuals?",
        options: [
          "Yes, they spread via aerosol droplets from sneezing",
          "No, they are an individualized immunological hypersensitivity reaction to harmless environmental antigens",
          "Yes, they spread by sharing drinking glasses",
          "Yes, but only during humid rainy seasons",
        ],
        correctIndex: 1,
        explanation:
          "Allergies are not infectious illnesses; they are an individual immune overreaction (IgE mediated) to environmental substances like pollen or dust.",
        takeaway: "Allergies are non-communicable immune hypersensitivities.",
      },
      {
        id: "quiz_6_q2",
        question:
          "Which environmental barrier habit helps minimize seasonal pollen exposure?",
        options: [
          "Keeping windows wide open on high pollen-count windy days",
          "Rinsing nasal passages with isotonic saline and washing hair/clothes after high-pollen outdoor exposure",
          "Exercising outdoors in dusty fields without eyewear",
          "Avoiding bathing for several consecutive days",
        ],
        correctIndex: 1,
        explanation:
          "Saline nasal irrigation physically washes trapped allergens from nasal passages, and showering removes trapped pollens from hair and skin.",
        takeaway:
          "Saline irrigation and post-outdoor showering reduce allergen loads.",
      },
      {
        id: "quiz_6_q3",
        question:
          "What is a key difference between an uncomplicated seasonal allergy and an active viral respiratory infection?",
        options: [
          "Seasonal allergies typically cause high spiking fevers (>39°C)",
          "Allergies frequently feature itchy watery eyes and clear nasal discharge without high fever",
          "Viral colds last for 6 consecutive months without interruption",
          "Allergies always cause severe chest infections within 2 hours",
        ],
        correctIndex: 1,
        explanation:
          "Seasonal allergies characteristically present with itchy eyes, palate itching, and watery rhinorrhea in the absence of fever or bodily chills.",
        takeaway:
          "Itching and absence of fever distinguish allergies from viral colds.",
      },
    ],
  },

  quiz_7: {
    id: "quiz_7",
    levelNumber: 7,
    levelId: "level_7",
    badgeId: "badge_7",
    learningContentId: "learn_7",
    conditionName: "Mild Dehydration",
    title: "Hydration Balance & Fluid Replenishment Quiz",
    description:
      "Explore water metabolism, early clinical signs of dehydration, and optimal fluid choices.",
    questions: [
      {
        id: "quiz_7_q1",
        question:
          "What is an early and reliable indicator of mild dehydration in daily life?",
        options: [
          "Intense ear pain during chewing",
          "Dark amber urine and reduced urination frequency",
          "Sudden change in natural eye color",
          "Excessive salivation filling the mouth",
        ],
        correctIndex: 1,
        explanation:
          "As the body conserves water, kidneys concentrate urine, leading to darker amber coloration and lower output volume.",
        takeaway:
          "Dark urine and dry mouth are primary early signals of fluid loss.",
      },
      {
        id: "quiz_7_q2",
        question:
          "Which beverage choice is best suited for rehydrating after mild exertion in warm weather?",
        options: [
          "Highly concentrated sugary energy drinks with artificial colorants",
          "Clean water, tender coconut water, or diluted lemon water with a pinch of salt",
          "Full-strength alcoholic cocktails",
          "Very strong triple-caffeine espresso shots",
        ],
        correctIndex: 1,
        explanation:
          "Clean water complemented by natural potassium and sodium (like tender coconut water or lightly salted citrus water) restores fluid-electrolyte equilibrium.",
        takeaway:
          "Water and mild electrolytes replenish lost volume effectively.",
      },
      {
        id: "quiz_7_q3",
        question:
          "Which symptom indicates severe dehydration requiring immediate emergency medical intervention?",
        options: [
          "Feeling thirsty after eating salted peanuts",
          "Sunken eyes, lethargy, confusion, dizziness upon standing, and absence of urination for 8+ hours",
          "Having clear pale straw-colored urine",
          "Sweating during a 5-kilometer morning jog",
        ],
        correctIndex: 1,
        explanation:
          "Oliguria/anuria, orthostatic hypotension, confusion, and sunken eyes indicate critical volume depletion needing intravenous or clinical therapy.",
        takeaway:
          "Lethargy, dizziness, and absence of urination are red-flag indicators.",
      },
    ],
  },

  quiz_8: {
    id: "quiz_8",
    levelNumber: 8,
    levelId: "level_8",
    badgeId: "badge_8",
    learningContentId: "learn_8",
    conditionName: "Constipation",
    title: "Dietary Fibre & Bowel Motility Quiz",
    description:
      "Learn about soluble and insoluble fibre, intestinal peristalsis, and bowel regularity.",
    questions: [
      {
        id: "quiz_8_q1",
        question:
          "How does dietary fibre support healthy bowel motility and prevent constipation?",
        options: [
          "It permanently disables intestinal nerve endings",
          "It adds bulk, holds water, and softens stool to facilitate smooth peristaltic transit",
          "It converts all digested carbohydrates into pure alcohol",
          "It stops all digestion in the small intestine",
        ],
        correctIndex: 1,
        explanation:
          "Fibre absorbs water and creates stool bulk, which mechanically triggers rhythmic intestinal peristalsis for easier defecation.",
        takeaway: "Fibre adds bulk and retains moisture for smooth transit.",
      },
      {
        id: "quiz_8_q2",
        question:
          "Why must increased dietary fibre intake always be paired with adequate water consumption?",
        options: [
          "Without water, high dry fibre can harden and worsen intestinal obstruction",
          "Water destroys the vitamins present in dietary fibre",
          "Fibre only dissolves in carbonated sugar drinks",
          "Water converts dietary fibre into animal proteins",
        ],
        correctIndex: 0,
        explanation:
          "Fibre requires water to swell and soften stool; consuming high fibre without sufficient fluids can cause hard fecal impaction.",
        takeaway:
          "Always pair increased dietary fibre with plentiful hydration.",
      },
      {
        id: "quiz_8_q3",
        question:
          "Which lifestyle combination most effectively promotes healthy daily bowel regularity?",
        options: [
          "Sedentary bed rest and zero water intake",
          "Whole grains, vegetables, pulses, prunes/papaya, physical activity, and regular hydration",
          "Consuming only ultra-processed white flour pastries",
          "Excessive dependency on stimulant laxatives without dietary changes",
        ],
        correctIndex: 1,
        explanation:
          "A whole-food diet rich in dietary fibre, paired with hydration and regular physical mobility, supports natural colonic peristalsis.",
        takeaway:
          "Hydration, plant fibre, and daily movement ensure bowel regularity.",
      },
    ],
  },

  quiz_9: {
    id: "quiz_9",
    levelNumber: 9,
    levelId: "level_9",
    badgeId: "badge_9",
    learningContentId: "learn_9",
    conditionName: "Indigestion (Dyspepsia)",
    title: "Dyspepsia & Gentle Digestion Quiz",
    description:
      "Assess knowledge of gastric emptying, meal spacing, and mindful eating habits.",
    questions: [
      {
        id: "quiz_9_q1",
        question:
          "What dietary habit frequently triggers functional dyspepsia (indigestion)?",
        options: [
          "Eating moderate, unhurried portions in a relaxed setting",
          "Eating large, heavy, greasy meals rapidly right before lying down",
          "Drinking plain warm water during afternoon work",
          "Chewing whole foods thoroughly before swallowing",
        ],
        correctIndex: 1,
        explanation:
          "Overeating rich, high-fat foods rapidly delays gastric emptying and increases intra-abdominal pressure, causing upper abdominal fullness and discomfort.",
        takeaway: "Heavy, rushed eating and recumbency trigger indigestion.",
      },
      {
        id: "quiz_9_q2",
        question:
          "Which culinary spice has traditional and clinical evidence for supporting gastric comfort?",
        options: [
          "Ginger (Zingiber officinale)",
          "Extreme ghost pepper concentrate",
          "Excessive raw chili oil",
          "Artificial chemical flavor powders",
        ],
        correctIndex: 0,
        explanation:
          "Ginger contains gingerols that promote gastric motility, accelerate gastric emptying, and ease sensation of fullness and nausea.",
        takeaway:
          "Ginger naturally supports gastric emptying and digestive comfort.",
      },
      {
        id: "quiz_9_q3",
        question:
          "When should symptoms of indigestion be investigated immediately by a gastroenterologist?",
        options: [
          "Feeling comfortably satisfied after a light bowl of vegetable soup",
          "When accompanied by unexplained weight loss, persistent vomiting, black stools, or swallowing difficulty",
          "When burping once after sparkling water",
          "If digestion feels completely normal after a gentle walk",
        ],
        correctIndex: 1,
        explanation:
          "Dysphagia (difficulty swallowing), unexpected weight loss, recurrent vomiting, or anemia are alarming signs requiring urgent endoscopic evaluation.",
        takeaway:
          "Dysphagia, weight loss, or persistent vomiting requires specialist evaluation.",
      },
    ],
  },

  quiz_10: {
    id: "quiz_10",
    levelNumber: 10,
    levelId: "level_10",
    badgeId: "badge_10",
    learningContentId: "learn_10",
    conditionName: "Mouth Ulcers",
    title: "Oral Mucosa & Aphthous Ulcer Care Quiz",
    description:
      "Explore non-contagious aphthous stomatitis, oral hygiene, and nutritional links.",
    questions: [
      {
        id: "quiz_10_q1",
        question:
          "Are common aphthous mouth ulcers (canker sores) contagious to others?",
        options: [
          "Yes, they spread easily through sharing cups and cutlery",
          "No, aphthous stomatitis is non-contagious and not caused by viral transmission",
          "Yes, they are caused by airborne fungal spores",
          "Yes, they spread via outdoor swimming pools",
        ],
        correctIndex: 1,
        explanation:
          "Simple aphthous ulcers are non-infectious, self-limiting mucosal erosions linked to local microtrauma, stress, or nutritional deficits.",
        takeaway: "Aphthous ulcers are non-contagious oral mucosal erosions.",
      },
      {
        id: "quiz_10_q2",
        question:
          "Deficiencies in which micronutrients are commonly associated with recurrent mouth ulcers?",
        options: [
          "Only dietary table salt (sodium chloride)",
          "Vitamin B-complex (B12, folate), Iron, or Zinc",
          "Vitamin K and pure sucrose",
          "Excessive cholesterol in the diet",
        ],
        correctIndex: 1,
        explanation:
          "Deficiencies in folate, vitamin B12, iron, and zinc impair rapid oral mucosal epithelial turnover, predisposing to aphthous ulcerations.",
        takeaway: "B-vitamins, iron, and zinc maintain oral mucosal integrity.",
      },
      {
        id: "quiz_10_q3",
        question:
          "Which oral comfort practice helps prevent irritating an active mouth ulcer?",
        options: [
          "Rinsing with warm saltwater or diluted baking soda, avoiding sharp spicy/acidic foods",
          "Vigorously scrubbing the open ulcer with a stiff toothbrush",
          "Applying concentrated raw chili sauce directly on the wound",
          "Drinking burning hot beverages continuously",
        ],
        correctIndex: 0,
        explanation:
          "Gentle saltwater rinses soothe the ulcer and maintain clean oral hygiene while avoiding mechanical abrasives or acidic/spicy irritants.",
        takeaway:
          "Gentle saline rinses and soft, non-spicy foods allow healing.",
      },
    ],
  },

  quiz_11: {
    id: "quiz_11",
    levelNumber: 11,
    levelId: "level_11",
    badgeId: "badge_11",
    learningContentId: "learn_11",
    conditionName: "Iron-Deficiency Awareness",
    title: "Iron Nutrition & Haemoglobin Basics Quiz",
    description:
      "Learn about haem and non-haem iron, vitamin C absorption synergy, and fatigue signs.",
    questions: [
      {
        id: "quiz_11_q1",
        question:
          "What vital function does iron perform in human red blood cells?",
        options: [
          "It builds the hard enamel layer covering tooth surfaces",
          "It forms the core of haemoglobin, enabling oxygen transport from lungs to body tissues",
          "It manufactures dietary calcium inside the bones",
          "It filters liquid toxins out through the bladder",
        ],
        correctIndex: 1,
        explanation:
          "Iron is an indispensable constituent of haemoglobin, the protein in erythrocytes responsible for carrying oxygen throughout the body.",
        takeaway:
          "Iron is essential for haemoglobin and cellular oxygen delivery.",
      },
      {
        id: "quiz_11_q2",
        question:
          "Which dietary nutrient significantly enhances the absorption of non-haem plant iron (e.g., from spinach or lentils)?",
        options: [
          "Vitamin C (ascorbic acid, e.g. lemon, amla, citrus)",
          "High tannin tea consumed simultaneously with meals",
          "High doses of phytates and unfermented bran",
          "Artificial food coloring",
        ],
        correctIndex: 0,
        explanation:
          "Ascorbic acid (Vitamin C) reduces ferric iron (Fe3+) to soluble ferrous iron (Fe2+), dramatically improving intestinal non-haem iron absorption.",
        takeaway: "Pair plant iron with vitamin C to maximize bio-absorption.",
      },
      {
        id: "quiz_11_q3",
        question:
          "Why is taking non-prescribed mega-dose iron supplements without blood test verification unsafe?",
        options: [
          "Iron instantly turns into sugar in the bloodstream",
          "Excessive iron accumulates in liver and heart tissues, causing toxic iron overload",
          "Iron disappears from the body through sweat within minutes",
          "Excess iron makes muscles too flexible to stand",
        ],
        correctIndex: 1,
        explanation:
          "The human body has no active excretion pathway for excess iron; unmonitored supplementation can lead to toxic organ iron overload (hemochromatosis).",
        takeaway:
          "Confirm iron deficiency through ferritin tests before high supplementation.",
      },
    ],
  },

  quiz_12: {
    id: "quiz_12",
    levelNumber: 12,
    levelId: "level_12",
    badgeId: "badge_12",
    learningContentId: "learn_12",
    conditionName: "Calcium Awareness",
    title: "Calcium & Bone Health Fundamentals Quiz",
    description:
      "Test your understanding of bone mineral density, dietary calcium sources, and co-factors.",
    questions: [
      {
        id: "quiz_12_q1",
        question:
          "Where is the vast majority (over 98%) of the body's calcium stored?",
        options: [
          "In the liver and gallbladder tissues",
          "In the skeletal bones and teeth",
          "In the muscular wall of the stomach",
          "In the fingernails and hair follicles exclusively",
        ],
        correctIndex: 1,
        explanation:
          "Over 98% of bodily calcium resides in the bones and teeth, providing structural rigidity and serving as a mineral reservoir.",
        takeaway: "Bones and teeth act as the primary structural calcium bank.",
      },
      {
        id: "quiz_12_q2",
        question:
          "Which vitamin is biologically required for the active intestinal absorption of dietary calcium?",
        options: ["Vitamin D", "Vitamin E", "Vitamin B1", "Vitamin B6"],
        correctIndex: 0,
        explanation:
          "Vitamin D facilitates the synthesis of calcium transport proteins (such as calbindin) in intestinal enterocytes, enabling efficient absorption.",
        takeaway: "Vitamin D is essential for the gut to absorb calcium.",
      },
      {
        id: "quiz_12_q3",
        question:
          "Which non-dairy foods provide meaningful dietary calcium for individuals following plant-based diets?",
        options: [
          "Pure refined white sugar and vegetable oil",
          "Sesame seeds (til), ragi (finger millet), firm tofu, and dark leafy greens",
          "White polished rice and water chestnuts",
          "Carbonated cola drinks and candies",
        ],
        correctIndex: 1,
        explanation:
          "Ragi, sesame seeds, fortified soya foods, and brassica greens provide rich, bioavailable plant-derived calcium.",
        takeaway:
          "Ragi, sesame, and dark greens are superb plant calcium sources.",
      },
    ],
  },

  quiz_13: {
    id: "quiz_13",
    levelNumber: 13,
    levelId: "level_13",
    badgeId: "badge_13",
    learningContentId: "learn_13",
    conditionName: "Vitamin C Awareness",
    title: "Vitamin C, Antioxidants & Collagen Quiz",
    description:
      "Learn about ascorbic acid, collagen synthesis, heat sensitivity, and immune defense.",
    questions: [
      {
        id: "quiz_13_q1",
        question:
          "Can the human body synthesize its own Vitamin C endogenously?",
        options: [
          "Yes, the kidneys make unlimited amounts daily",
          "No, humans lack the enzyme L-gulonolactone oxidase and must obtain it through diet",
          "Yes, humans synthesize it whenever exposed to moonlight",
          "Yes, bacteria in the lungs produce all required Vitamin C",
        ],
        correctIndex: 1,
        explanation:
          "Humans lack the final functional enzyme required to produce ascorbic acid from glucose and therefore depend on dietary sources daily.",
        takeaway:
          "Vitamin C is an essential micronutrient humans must consume daily.",
      },
      {
        id: "quiz_13_q2",
        question:
          "Why is excessive boiling or prolonged cooking detrimental to the Vitamin C content of vegetables?",
        options: [
          "Vitamin C is heat-sensitive (thermolabile) and leaches into cooking water",
          "Boiling converts Vitamin C into poisonous heavy metals",
          "Heat causes Vitamin C to multiply uncontrollably",
          "Vitamin C only survives in sub-zero freezing temperatures",
        ],
        correctIndex: 0,
        explanation:
          "Ascorbic acid is water-soluble and heat-labile; prolonged high-heat boiling or discarding cooking water results in significant nutrient degradation.",
        takeaway:
          "Light steaming or raw fresh consumption preserves heat-sensitive Vitamin C.",
      },
      {
        id: "quiz_13_q3",
        question:
          "What biological role does Vitamin C play in wound healing and tissue repair?",
        options: [
          "It acts as an essential cofactor in collagen hydroxylation and provides antioxidant defense",
          "It acts as a physical glue that sticks skin cuts together",
          "It permanently stops all cellular division",
          "It replaces all bone tissue with cartilage",
        ],
        correctIndex: 0,
        explanation:
          "Vitamin C is a required cofactor for prolyl and lysyl hydroxylase, enzymes that cross-link and stabilize collagen fibers during wound repair.",
        takeaway:
          "Vitamin C is essential for collagen synthesis and tissue integrity.",
      },
    ],
  },

  quiz_14: {
    id: "quiz_14",
    levelNumber: 14,
    levelId: "level_14",
    badgeId: "badge_14",
    learningContentId: "learn_14",
    conditionName: "Vitamin D Awareness",
    title: "Vitamin D & Sunlight Synthesis Quiz",
    description:
      "Understand cutaneous synthesis from UVB sunlight, bone health, and immune support.",
    questions: [
      {
        id: "quiz_14_q1",
        question:
          "How is Vitamin D primarily synthesized naturally in the human body?",
        options: [
          "By drinking plain tap water in the dark",
          "Cutaneous conversion of 7-dehydrocholesterol triggered by ultraviolet B (UVB) sunlight",
          "Through deep breathing exercises in air-conditioned rooms",
          "By reading books under incandescent table lamps",
        ],
        correctIndex: 1,
        explanation:
          "UVB solar radiation photochemically converts 7-dehydrocholesterol in the epidermal layers of the skin into pre-vitamin D3.",
        takeaway:
          "Safe midday UVB sunlight exposure triggers cutaneous vitamin D synthesis.",
      },
      {
        id: "quiz_14_q2",
        question:
          "Why is Vitamin D deficiency widespread even in sunny geographic regions?",
        options: [
          "Because sunlight destroys human vitamin receptors completely",
          "Extensive indoor work, clothing coverage, air pollution, and darker skin pigmentation requiring longer exposure",
          "Because people eat too many green vegetables",
          "Because human skin rejects sunlight after age 10",
        ],
        correctIndex: 1,
        explanation:
          "Modern sedentary indoor lifestyles, clothing coverage, atmospheric smog, and melanin filtering UVB all contribute to high global deficiency rates.",
        takeaway:
          "Indoor lifestyle and air pollution reduce natural cutaneous synthesis.",
      },
      {
        id: "quiz_14_q3",
        question:
          "Which laboratory blood test accurately measures total bodily Vitamin D status?",
        options: [
          "Serum 25-hydroxyvitamin D [25(OH)D]",
          "Salivary glucose test",
          "Fingerprint sweat test",
          "Random urine acidity strip",
        ],
        correctIndex: 0,
        explanation:
          "Serum 25(OH)D is the circulating form with a half-life of several weeks, serving as the clinical gold standard for assessing vitamin D stores.",
        takeaway:
          "Serum 25(OH)D blood test reliably determines your vitamin D level.",
      },
    ],
  },

  quiz_15: {
    id: "quiz_15",
    levelNumber: 15,
    levelId: "level_15",
    badgeId: "badge_15",
    learningContentId: "learn_15",
    conditionName: "Vitamin B12 Awareness",
    title: "Vitamin B12, Neuropathy & Erythropoiesis Quiz",
    description:
      "Assess knowledge on cobalamin sources, neurological health, and plant-based dietary planning.",
    questions: [
      {
        id: "quiz_15_q1",
        question:
          "Why do strict vegans and long-term vegetarians require fortified foods or Vitamin B12 supplements?",
        options: [
          "Vegetables actively destroy bodily vitamin stores",
          "Vitamin B12 is synthesized by microorganisms and naturally absent in unfortified plant foods",
          "Vegetarian diets convert all vitamins directly into iron",
          "Plant proteins block vitamin absorption in the mouth",
        ],
        correctIndex: 1,
        explanation:
          "Cobalamin is produced solely by bacteria and archaea; unfortified fruits, grains, and vegetables do not contain bioavailable vitamin B12.",
        takeaway:
          "Plant-based eaters need fortified foods or regular B12 supplements.",
      },
      {
        id: "quiz_15_q2",
        question:
          "What serious health consequences can arise from untreated prolonged Vitamin B12 deficiency?",
        options: [
          "Megaloblastic anaemia and irreversible peripheral nerve damage (neuropathy)",
          "Instant loss of tooth enamel within 24 hours",
          "Transformation of bone marrow into cartilage",
          "Excessive increase in body height",
        ],
        correctIndex: 0,
        explanation:
          "Cobalamin deficiency impairs DNA synthesis in erythrocytes (megaloblastic anaemia) and damages the protective myelin sheath of nerves.",
        takeaway:
          "B12 deficiency can cause severe anaemia and irreversible neuropathy.",
      },
      {
        id: "quiz_15_q3",
        question:
          "What stomach-produced protein is necessary for normal intestinal absorption of Vitamin B12 in the ileum?",
        options: ["Intrinsic Factor", "Insulin", "Amylase", "Melatonin"],
        correctIndex: 0,
        explanation:
          "Gastric parietal cells secrete Intrinsic Factor, which binds to cobalamin and allows its receptor-mediated uptake in the terminal ileum.",
        takeaway:
          "Intrinsic Factor is essential for cobalamin uptake in the ileum.",
      },
    ],
  },

  quiz_16: {
    id: "quiz_16",
    levelNumber: 16,
    levelId: "level_16",
    badgeId: "badge_16",
    learningContentId: "learn_16",
    conditionName: "Food Poisoning Awareness",
    title: "Food Hygiene & Foodborne Pathogens Quiz",
    description:
      "Explore bacterial contamination, safe cooking temperatures, and hydration during food poisoning.",
    questions: [
      {
        id: "quiz_16_q1",
        question:
          "What temperature range constitutes the bacterial 'Danger Zone' where pathogens multiply rapidly?",
        options: [
          "Between 5°C and 60°C (40°F to 140°F)",
          "Below -20°C in deep freezing",
          "Above 100°C in boiling water",
          "Between 80°C and 90°C in slow simmering",
        ],
        correctIndex: 0,
        explanation:
          "Foodborne bacteria (like Salmonella, E. coli, Bacillus cereus) thrive and rapidly proliferate in the temperature danger zone between 5°C and 60°C.",
        takeaway:
          "Keep perishable foods below 5°C or above 60°C to inhibit bacteria.",
      },
      {
        id: "quiz_16_q2",
        question:
          "What is the single most critical intervention during acute foodborne gastroenteritis?",
        options: [
          "Immediately taking powerful anti-motility pills to halt all bowel movements",
          "Aggressive oral fluid and electrolyte rehydration (ORS, clean broth, salted rice water)",
          "Eating heavy greasy fried meals to coat the stomach",
          "Drinking untreated tap water from stagnant puddles",
        ],
        correctIndex: 1,
        explanation:
          "Fluid loss from diarrhea and vomiting causes rapid dehydration; restoring water and electrolytes is life-saving and foundational.",
        takeaway:
          "Continuous electrolyte and fluid replacement prevents hypovolemia.",
      },
      {
        id: "quiz_16_q3",
        question:
          "Which food safety practice prevents cross-contamination in home kitchens?",
        options: [
          "Washing raw chicken in the sink and splashing droplets across countertops",
          "Using separate cutting boards for raw meats and ready-to-eat vegetables, and washing hands thoroughly",
          "Leaving cooked rice on the kitchen counter for three days",
          "Using the same unwashed knife to slice raw poultry and salad fruits",
        ],
        correctIndex: 1,
        explanation:
          "Segregating utensils for raw proteins and ready-to-eat items eliminates the transfer of live bacterial pathogens across food surfaces.",
        takeaway:
          "Separate cutting boards and clean utensils prevent cross-contamination.",
      },
    ],
  },

  quiz_17: {
    id: "quiz_17",
    levelNumber: 17,
    levelId: "level_17",
    badgeId: "badge_17",
    learningContentId: "learn_17",
    conditionName: "Influenza Awareness",
    title: "Influenza Virus & Systemic Symptoms Quiz",
    description:
      "Differentiate the flu from the common cold, recognize systemic symptoms, and clinical warning signs.",
    questions: [
      {
        id: "quiz_17_q1",
        question:
          "How does typical influenza differ clinically from the common cold?",
        options: [
          "Influenza only affects the skin, never the lungs",
          "Influenza typically has an abrupt onset with high fever, intense body aches, severe fatigue, and chills",
          "Influenza never produces any coughing or fever",
          "The common cold is far more lethal than influenza in all age groups",
        ],
        correctIndex: 1,
        explanation:
          "Influenza presents with sudden, prostrating systemic symptoms—high fever, severe myalgia, headache, and fatigue—whereas colds develop gradually with upper airway symptoms.",
        takeaway:
          "Abrupt onset, high fever, and severe body aches distinguish influenza.",
      },
      {
        id: "quiz_17_q2",
        question:
          "Why is annual seasonal influenza vaccination recommended, especially for vulnerable populations?",
        options: [
          "Influenza viruses undergo continuous antigenic shift and drift, evolving new surface strains annually",
          "Vaccines permanently eliminate all types of viruses worldwide",
          "One single shot lasts for 80 years without diminishing",
          "The vaccine changes a person's DNA sequence permanently",
        ],
        correctIndex: 0,
        explanation:
          "Influenza viruses continuously mutate their surface hemagglutinin and neuraminidase proteins, necessitating updated annual vaccine formulations.",
        takeaway:
          "Annual vaccination protects against rapidly mutating seasonal strains.",
      },
      {
        id: "quiz_17_q3",
        question:
          "Which symptom during a suspected influenza illness requires emergency medical hospital care?",
        options: [
          "Feeling mild fatigue while resting in bed",
          "Chest pain, persistent difficulty breathing, bluish lips (cyanosis), or confusion",
          "Sipping warm herbal tea with honey",
          "Sleeping for 8 hours during the night",
        ],
        correctIndex: 1,
        explanation:
          "Respiratory distress, hypoxia (blue lips), chest pain, or neurological confusion signal severe secondary pulmonary complications (like viral pneumonia).",
        takeaway:
          "Shortness of breath, cyanosis, or chest pain requires urgent emergency care.",
      },
    ],
  },

  quiz_18: {
    id: "quiz_18",
    levelNumber: 18,
    levelId: "level_18",
    badgeId: "badge_18",
    learningContentId: "learn_18",
    conditionName: "Pneumonia Awareness",
    title: "Pneumonia & Lower Respiratory Infection Quiz",
    description:
      "Understand alveolar inflammation, medical urgency, and clinical differentiation from minor colds.",
    questions: [
      {
        id: "quiz_18_q1",
        question:
          "What anatomical site in the lungs is primarily inflamed and filled with fluid in pneumonia?",
        options: [
          "The tiny microscopic air sacs (alveoli)",
          "The tip of the nasal cartilage",
          "The exterior surface of the collarbone",
          "The vocal cord cartilage exclusively",
        ],
        correctIndex: 0,
        explanation:
          "Pneumonia is an infection of the pulmonary parenchyma where microscopic alveoli fill with exudate, pus, and inflammatory fluid, impairing oxygen exchange.",
        takeaway:
          "Pneumonia infects and floods the alveoli, hindering oxygenation.",
      },
      {
        id: "quiz_18_q2",
        question:
          "Can pneumonia be cured or managed solely through home herbal drinks and foods without clinical care?",
        options: [
          "Yes, all pneumonia resolves completely with hot pepper tea in 24 hours",
          "No, pneumonia is a serious medical infection requiring professional medical diagnosis and appropriate clinical therapy (such as antibiotics for bacterial causes)",
          "Yes, eating garlic alone replaces all clinical medicines",
          "Yes, pneumonia is simply an emotional reaction to stress",
        ],
        correctIndex: 1,
        explanation:
          "Pneumonia is potentially life-threatening and requires clinical evaluation, auscultation/X-ray, and appropriate pharmacological therapy; foods only offer supportive care.",
        takeaway:
          "Pneumonia mandates clinical diagnosis and medical management.",
      },
      {
        id: "quiz_18_q3",
        question:
          "Which physical signs are cardinal clinical indicators of pneumonia in children and adults?",
        options: [
          "Rapid breathing (tachypnea), chest indrawing, high fever with productive cough, and low oxygen saturation",
          "Mild itching behind the ears",
          "Clear vision and strong appetite",
          "Occasional sneezing after stepping outside",
        ],
        correctIndex: 0,
        explanation:
          "Tachypnea (rapid breathing), respiratory chest wall retraction, grunting, high fever, and hypoxemia indicate lower respiratory compromise.",
        takeaway:
          "Rapid breathing and chest indrawing indicate severe lung infection.",
      },
    ],
  },

  quiz_19: {
    id: "quiz_19",
    levelNumber: 19,
    levelId: "level_19",
    badgeId: "badge_19",
    learningContentId: "learn_19",
    conditionName: "Dengue Awareness",
    title: "Dengue Vector & Platelet Monitoring Quiz",
    description:
      "Assess knowledge of Aedes mosquito vectors, warning signs, and critical hydration protocols.",
    questions: [
      {
        id: "quiz_19_q1",
        question: "How is the dengue virus transmitted between human hosts?",
        options: [
          "Through direct airborne coughing and sneezing",
          "By the bite of infected female Aedes mosquitoes (primarily Aedes aegypti) that typically bite during daylight",
          "By drinking pasteurized dairy milk",
          "By touching surfaces touched by an infected individual",
        ],
        correctIndex: 1,
        explanation:
          "Dengue is an arbovirus transmitted by daytime-biting female Aedes aegypti and Aedes albopictus mosquitoes breeding in stagnant clean water.",
        takeaway: "Dengue is transmitted by daytime-biting Aedes mosquitoes.",
      },
      {
        id: "quiz_19_q2",
        question:
          "Which over-the-counter painkiller class must be STRICTLY AVOIDED in suspected dengue due to severe bleeding risks?",
        options: [
          "Paracetamol (Acetaminophen) within prescribed doses",
          "Non-steroidal anti-inflammatory drugs (NSAIDs) like Ibuprofen, Aspirin, and Diclofenac",
          "Plain oral rehydration solutions",
          "Warm ginger water",
        ],
        correctIndex: 1,
        explanation:
          "NSAIDs and aspirin inhibit platelet aggregation and can exacerbate vascular bleeding and gastrointestinal hemorrhage in dengue patients with thrombocytopenia.",
        takeaway:
          "Never use NSAIDs or aspirin in dengue; they exacerbate bleeding risks.",
      },
      {
        id: "quiz_19_q3",
        question:
          "What warning signs signify progression to severe dengue requiring immediate hospital admission?",
        options: [
          "Severe persistent abdominal pain, recurrent vomiting, mucosal bleeding (gums/nose), and fluid accumulation/lethargy",
          "Drinking two glasses of tender coconut water",
          "A slight headache that resolves completely after sleep",
          "Feeling energetic and going for a brisk walk",
        ],
        correctIndex: 0,
        explanation:
          "Persistent vomiting, severe abdominal pain, bleeding gums, hemoconcentration, and lethargy during the defervescence phase signal plasma leakage.",
        takeaway:
          "Persistent abdominal pain and mucosal bleeding are critical dengue warning signs.",
      },
    ],
  },

  quiz_20: {
    id: "quiz_20",
    levelNumber: 20,
    levelId: "level_20",
    badgeId: "badge_20",
    learningContentId: "learn_20",
    conditionName: "Malaria Awareness",
    title: "Malaria Parasite & Mosquito Prevention Quiz",
    description:
      "Explore Plasmodium lifecycle basics, night-biting Anopheles, and antimalarial medical treatment.",
    questions: [
      {
        id: "quiz_20_q1",
        question: "What causative organism causes malaria infection in humans?",
        options: [
          "A protozoan parasite of the genus Plasmodium (e.g. P. falciparum, P. vivax)",
          "A common rhinovirus found on school desks",
          "A digestive bacterium found in curd",
          "A fungal mold growing on bread",
        ],
        correctIndex: 0,
        explanation:
          "Malaria is caused by Plasmodium parasites transmitted via the nocturnal bites of infected female Anopheles mosquitoes.",
        takeaway: "Malaria is caused by protozoan Plasmodium parasites.",
      },
      {
        id: "quiz_20_q2",
        question:
          "Which vector control measure is proven globally to reduce malaria transmission effectively?",
        options: [
          "Sleeping under insecticide-treated bed nets (ITNs) and eliminating stagnant water breeding sites",
          "Keeping bright outdoor floodlights on all night",
          "Spraying room perfume before going to sleep",
          "Drinking raw goat milk at midnight",
        ],
        correctIndex: 0,
        explanation:
          "Insecticide-treated bed nets (ITNs) provide both a physical and chemical barrier against night-biting female Anopheles mosquitoes.",
        takeaway:
          "Insecticide-treated nets and larval site elimination protect against malaria.",
      },
      {
        id: "quiz_20_q3",
        question: "How is a confirmed clinical case of malaria treated?",
        options: [
          "Solely by resting without taking any laboratory blood tests",
          "With prescription antimalarial medications (such as Artemisinin-based combination therapies, ACTs) guided by blood smear/RDT testing",
          "By drinking hot herbal decoctions alone without clinical medicines",
          "By taking cold showers three times an hour",
        ],
        correctIndex: 1,
        explanation:
          "Malaria requires precise laboratory diagnosis (microscopy or Rapid Diagnostic Test) and targeted antimalarial pharmacotherapy (e.g., ACTs).",
        takeaway:
          "Confirmed malaria requires prescription antimalarial therapy (ACTs).",
      },
    ],
  },

  quiz_21: {
    id: "quiz_21",
    levelNumber: 21,
    levelId: "level_21",
    badgeId: "badge_21",
    learningContentId: "learn_21",
    conditionName: "Diabetes Awareness",
    title: "Type 2 Diabetes & Glycaemic Control Quiz",
    description:
      "Learn about insulin resistance, complex carbohydrates, dietary fibre, and lifestyle intervention.",
    questions: [
      {
        id: "quiz_21_q1",
        question:
          "What is the primary underlying metabolic defect in Type 2 Diabetes Mellitus?",
        options: [
          "Complete lack of stomach acid to digest foods",
          "Insulin resistance where body cells do not respond effectively to insulin, combined with progressive beta-cell dysfunction",
          "Inability of lungs to absorb oxygen from the air",
          "A permanent viral destruction of the heart valves",
        ],
        correctIndex: 1,
        explanation:
          "In Type 2 diabetes, peripheral tissues (muscle, liver, fat) exhibit insulin resistance, leading to impaired cellular glucose uptake and chronic hyperglycemia.",
        takeaway:
          "Insulin resistance and relative insulin deficiency characterize Type 2 diabetes.",
      },
      {
        id: "quiz_21_q2",
        question:
          "Which dietary pattern supports steady post-prandial blood glucose levels?",
        options: [
          "Meals high in soluble fibre, complex carbohydrates, whole grains, pulses, and lean proteins",
          "Skipping all meals and drinking only sweetened soda and fruit syrups",
          "Consuming large amounts of refined white sugars and fried snacks",
          "Eating pure melted butter without any vegetables",
        ],
        correctIndex: 0,
        explanation:
          "High-fibre, low-glycaemic-index foods slow down gastric emptying and carbohydrate digestion, preventing sharp post-prandial glucose spikes.",
        takeaway:
          "Fibre-rich complex carbohydrates prevent steep glucose spikes.",
      },
      {
        id: "quiz_21_q3",
        question:
          "Why is regular physical exercise (e.g. brisk walking, resistance training) powerful in managing diabetes?",
        options: [
          "Muscle contraction stimulates non-insulin-dependent glucose uptake (GLUT4 translocation), enhancing insulin sensitivity",
          "Exercise instantly replaces insulin injections for all humans",
          "Exercise stops all natural liver metabolic processes",
          "Exercise converts all blood sugar into bone tissue",
        ],
        correctIndex: 0,
        explanation:
          "Skeletal muscle contraction triggers GLUT4 transporter translocation independently of insulin, immediately clearing glucose from circulation.",
        takeaway:
          "Physical activity directly increases muscle glucose uptake and insulin sensitivity.",
      },
    ],
  },

  quiz_22: {
    id: "quiz_22",
    levelNumber: 22,
    levelId: "level_22",
    badgeId: "badge_22",
    learningContentId: "learn_22",
    conditionName: "High Blood Pressure Awareness",
    title: "Hypertension & Cardiovascular Health Quiz",
    description:
      "Assess your understanding of blood pressure metrics, dietary sodium reduction, and lifestyle care.",
    questions: [
      {
        id: "quiz_22_q1",
        question:
          "Why is hypertension frequently termed the 'Silent Killer' in public health?",
        options: [
          "Because it causes people to lose their speaking voice completely",
          "Because it often progresses for years without causing noticeable symptoms while damaging vital arteries, heart, and kidneys",
          "Because it only affects people during nighttime sleep",
          "Because it is an airborne pathogen spread in silence",
        ],
        correctIndex: 1,
        explanation:
          "Chronic high blood pressure quietly damages vascular endothelium, heart muscle, and renal glomeruli for decades without obvious warning symptoms.",
        takeaway:
          "Hypertension is often asymptomatic while damaging vital vascular organs.",
      },
      {
        id: "quiz_22_q2",
        question:
          "What dietary mineral modification is universally recommended to help reduce elevated blood pressure?",
        options: [
          "Increasing table salt to 30 grams daily",
          "Reducing dietary sodium (processed foods, table salt) while increasing dietary potassium (vegetables, fruits)",
          "Removing all green vegetables from daily meals",
          "Drinking highly concentrated salt water every morning",
        ],
        correctIndex: 1,
        explanation:
          "Lowering sodium intake reduces extracellular fluid volume and vascular resistance, while dietary potassium promotes vasodilation and natriuresis.",
        takeaway:
          "Reduce sodium and boost potassium to support healthy blood pressure.",
      },
      {
        id: "quiz_22_q3",
        question:
          "Can prescribed blood pressure medications be abruptly stopped once a person feels well without doctor consultation?",
        options: [
          "Yes, high blood pressure permanently vanishes as soon as you feel relaxed",
          "No, feeling good means the medicine is working; stopping can trigger dangerous rebound hypertension and stroke risk",
          "Yes, blood pressure pills only need to be taken once a year",
          "Yes, drinking lemonade permanently replaces all antihypertensive prescriptions",
        ],
        correctIndex: 1,
        explanation:
          "Antihypertensive therapy manages systemic vascular resistance. Discontinuing without clinical supervision can lead to rebound hypertensive crises.",
        takeaway:
          "Never discontinue antihypertensive medication without medical supervision.",
      },
    ],
  },

  quiz_23: {
    id: "quiz_23",
    levelNumber: 23,
    levelId: "level_23",
    badgeId: "badge_23",
    learningContentId: "learn_23",
    conditionName: "Anaemia Awareness",
    title: "Anaemia Classification & Whole Health Quiz",
    description:
      "Explore clinical causes of anaemia, diagnostic parameters, and holistic nutritional support.",
    questions: [
      {
        id: "quiz_23_q1",
        question:
          "What is the clinical definition of anaemia in medical practice?",
        options: [
          "A temporary drop in body temperature below 30°C",
          "A reduction in the concentration of circulating haemoglobin or red blood cell mass, impairing oxygen delivery",
          "An excessive increase in the total volume of white blood cells",
          "An allergy to sunlight exposure",
        ],
        correctIndex: 1,
        explanation:
          "Anaemia is diagnosed when circulating haemoglobin or erythrocyte mass falls below age- and sex-adjusted physiological thresholds.",
        takeaway:
          "Anaemia represents diminished haemoglobin and tissue oxygen carrying capacity.",
      },
      {
        id: "quiz_23_q2",
        question:
          "Which common symptoms suggest possible anaemia and warrant a complete blood count (CBC)?",
        options: [
          "Persistent fatigue, pallor of conjunctiva/tongue, shortness of breath on mild exertion, and dizziness",
          "Rapid increase in hair growth and dark skin pigmentation",
          "Excessive appetite and weight gain overnight",
          "Complete absence of heartbeats",
        ],
        correctIndex: 0,
        explanation:
          "Decreased tissue oxygenation manifests clinically as chronic fatigue, mucosal pallor, tachycardia, headache, and exertional dyspnea.",
        takeaway:
          "Chronic fatigue, exertional breathlessness, and pallor warrant a CBC test.",
      },
      {
        id: "quiz_23_q3",
        question:
          "Why is finding the underlying cause of anaemia essential rather than simply self-treating with random iron tablets?",
        options: [
          "Because anaemia can stem from chronic blood loss, renal disease, B12 deficiency, or hemolysis, not just iron deficit",
          "Because iron tablets only work if taken while swimming",
          "Because anaemia always resolves on its own without any intervention",
          "Because blood tests can never distinguish between different types of anaemia",
        ],
        correctIndex: 0,
        explanation:
          "Anaemia has diverse etiologies (e.g., occult GI bleeding, thalassemia, B12/folate deficiency, chronic kidney disease); identifying the root etiology is critical.",
        takeaway:
          "Always diagnose the precise underlying cause of anaemia before treatment.",
      },
    ],
  },

  quiz_24: {
    id: "quiz_24",
    levelNumber: 24,
    levelId: "level_24",
    badgeId: "badge_24",
    learningContentId: "learn_24",
    conditionName: "Antibiotic Awareness",
    title: "Antibiotic Stewardship & Antimicrobial Resistance Quiz",
    description:
      "Learn about antibiotic stewardship, antimicrobial resistance (AMR), and responsible drug use.",
    questions: [
      {
        id: "quiz_24_q1",
        question: "What is Antimicrobial Resistance (AMR)?",
        options: [
          "When human immune cells reject all water and food intake",
          "When bacteria and microbes evolve mechanisms to survive the drugs designed to eliminate them",
          "When antibiotic medicines become physically too heavy to swallow",
          "A medical term meaning a patient is allergic to penicillin",
        ],
        correctIndex: 1,
        explanation:
          "AMR occurs when micro-organisms (bacteria, fungi, parasites) mutate or acquire resistance genes, rendering standard antimicrobial therapies ineffective.",
        takeaway:
          "Antimicrobial resistance makes dangerous bacterial infections untreatable.",
      },
      {
        id: "quiz_24_q2",
        question:
          "What common misconception significantly drives the misuse of antibiotics globally?",
        options: [
          "Believing antibiotics cure common viral infections such as colds, flu, and viral sore throats",
          "Believing antibiotics only kill fungal spores",
          "Believing antibiotics must be taken with clean water",
          "Believing bacteria are living single-celled organisms",
        ],
        correctIndex: 0,
        explanation:
          "Antibiotics possess zero efficacy against viruses; prescribing or demanding antibiotics for viral upper respiratory infections accelerates AMR.",
        takeaway:
          "Antibiotics do not work against viruses; never take them for common colds.",
      },
      {
        id: "quiz_24_q3",
        question:
          "What is an essential rule of responsible antibiotic stewardship when a physician prescribes them for a bacterial infection?",
        options: [
          "Stop taking them as soon as you feel slightly better after one day, and save the rest for friends",
          "Complete the full prescribed course exactly as directed and never take leftover or shared antibiotics",
          "Double the dose every four hours to finish the box faster",
          "Grind the pills into powdered juice and drink it cold",
        ],
        correctIndex: 1,
        explanation:
          "Completing the prescribed regimen eradicates the target bacterial population, preventing partially treated surviving mutants from developing resistance.",
        takeaway:
          "Complete the full course as directed; never share or use leftover antibiotics.",
      },
    ],
  },

  quiz_25: {
    id: "quiz_25",
    levelNumber: 25,
    levelId: "level_25",
    badgeId: "badge_25",
    learningContentId: "learn_25",
    conditionName: "Responsible Health Decisions",
    title: "Culminating Health Literacy & Evidence Synthesis Quiz",
    description:
      "Demonstrate comprehensive mastery of evidence-based health decisions, lifestyle synergy, and medical boundaries.",
    questions: [
      {
        id: "quiz_25_q1",
        question:
          "How should wholesome food, herbal traditions, and modern clinical medicine best coexist?",
        options: [
          "Herbs must completely replace all hospitals, surgeries, and pharmaceuticals forever",
          "Nutritious food and healthy lifestyle provide ongoing foundational preventative care, while clinical medicine provides essential diagnostics and evidence-based treatment",
          "Modern medicine must be avoided whenever a person is critically sick",
          "Foods have zero biological impact on human cellular function",
        ],
        correctIndex: 1,
        explanation:
          "Nutrition, sleep, and physical activity form the daily foundation of health and disease prevention, while clinical medical science is indispensable for acute, infectious, and complex diseases.",
        takeaway:
          "Nutrition is preventative and supportive; clinical care is indispensable for acute disease.",
      },
      {
        id: "quiz_25_q2",
        question:
          "What is the golden rule when evaluating bold health claims found on social media or unverified websites?",
        options: [
          "Believe any claim that uses terms like 'Miracle Secret Cure' or 'Doctors Hate This'",
          "Seek credible, peer-reviewed medical consensus, public health guidelines (WHO, NHS, ICMR), and consult qualified medical professionals",
          "Immediately purchase expensive unverified supplement powders",
          "Share the claim with 50 people before reading it",
        ],
        correctIndex: 1,
        explanation:
          "Health literacy requires critical evaluation: look for robust scientific trials, clinical guidance from reputable public health bodies, and professional advice.",
        takeaway:
          "Verify health claims against reputable, peer-reviewed scientific sources.",
      },
      {
        id: "quiz_25_q3",
        question:
          "What defines a truly empowered and health-literate individual?",
        options: [
          "Someone who diagnoses themselves online and avoids all doctor appointments",
          "Someone who listens to their body, practices balanced lifestyle habits, understands evidence, and seeks prompt professional medical care when red flags appear",
          "Someone who only eats raw cabbage and runs 40 kilometers every day without sleep",
          "Someone who takes 50 different vitamin pills every single morning",
        ],
        correctIndex: 1,
        explanation:
          "Health literacy unites daily mindful preventative nourishment with the wisdom to recognize medical limits and seek timely clinical attention.",
        takeaway:
          "Balanced daily habits paired with timely professional medical care foster true lifelong wellness.",
      },
    ],
  },
};

export const QUIZ_LIST: QuizDefinition[] = Object.values(QUIZZES).sort(
  (a, b) => a.levelNumber - b.levelNumber
);
