import { type LearningContent } from "../types";

export const LEARNING_CONTENTS: Record<string, LearningContent> = {
  learn_1: {
    id: "learn_1",
    conditionName: "Common Cold",
    whatIsIt: [
      "A mild, self-limiting viral infection of the upper respiratory tract involving the nose and throat.",
      "Immune cells release inflammatory mediators causing mucus swelling, runny nose, sneezing, and scratchy throat.",
    ],
    howItHappens: [
      "Caused by over 200 distinct respiratory viruses (primarily rhinoviruses).",
      "Transmitted through microscopic airborne droplets or direct hand-to-surface-to-face transfer.",
      "It is NOT caused by cold weather or eating specific foods.",
    ],
    communicability: {
      status: "Yes",
      explanation:
        "Highly communicable across close social circles, especially during the first 2 to 3 days of symptoms via aerosolized droplets and shared surfaces.",
    },
    nutrition: [
      "Warm aromatic broths and herbal infusions keep mucosal membranes hydrated and loosen secretions.",
      "Foods rich in Vitamin C (citrus, amla) provide general antioxidant nourishment for active immune cells.",
      "Nutritious foods provide bodily energy, but do not directly eliminate the viral pathogen.",
    ],
    precautions: [
      "Frequent handwashing with soap and clean water for at least 20 seconds.",
      "Covering mouth and nose with the elbow or a tissue when sneezing or coughing.",
      "Regularly sanitizing high-touch surfaces such as phone screens, doorknobs, and utensils.",
    ],
    supportiveCare: [
      "Ample physical rest to allow metabolic resources to fight the infection.",
      "Plentiful fluid intake (warm water, light soups, herbal teas).",
      "Steam inhalation or saline nasal rinses to gently moisten congested nasal passages.",
    ],
    medicalTreatment: [
      "Antibiotics are completely ineffective against the common cold because it is caused by viruses, not bacteria.",
      "Over-the-counter fever reducers or pain relievers may be used under pharmacist guidance for discomfort.",
      "Most uncomplicated colds resolve naturally within 7 to 10 days.",
    ],
    whenToSeekHelp: [
      "High fever lasting more than 3 consecutive days.",
      "Difficulty breathing, persistent chest tightness, or wheezing.",
      "Severe headache or sinus pain that worsens after initial improvement.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Tulsi & Ginger",
        role: "Supportive warm herbal comfort",
        evidence:
          "Warm aromatic infusions relieve mucosal dryness and ease throat tickling.",
        safety:
          "Safe in dietary and tea amounts; do not use as a replacement for clinical evaluation if symptoms worsen.",
      },
    ],
    sources: [
      {
        name: "World Health Organization (WHO)",
        description: "Infectious Diseases & Upper Respiratory Guidance",
      },
      {
        name: "National Health Service (NHS UK)",
        description: "Common Cold Overview & Management",
      },
    ],
  },

  learn_2: {
    id: "learn_2",
    conditionName: "Fever",
    whatIsIt: [
      "A temporary elevation in the body's internal thermostat (hypothalamus), typically exceeding 38°C (100.4°F).",
      "It is a physiological defense symptom, not an independent disease in itself.",
    ],
    howItHappens: [
      "In response to infection (viral, bacterial) or inflammation, immune cells produce pyrogens (cytokines).",
      "Pyrogens trigger the hypothalamus to raise body temperature, which inhibits microbial replication and boosts white blood cell speed.",
    ],
    communicability: {
      status: "Depends",
      explanation:
        "Fever itself is not contagious, but the underlying infectious illness causing it (e.g., flu, dengue, gastroenteritis) may be communicable.",
    },
    nutrition: [
      "Hydrating clear fluids, tender coconut water, diluted fruit juices, and light broths.",
      "Easy-to-digest carbohydrate-rich meals like rice gruel (kanji) or moong dal khichdi to sustain elevated metabolic rate.",
      "Small, frequent portions prevent stomach discomfort during appetite loss.",
    ],
    precautions: [
      "Dress in light, breathable cotton clothing; avoid heavy bundling which traps heat.",
      "Keep the room well-ventilated and comfortable.",
      "Wash hands thoroughly after tending to someone with an active fever.",
    ],
    supportiveCare: [
      "Strict bed rest and conservation of energy.",
      "Consistent hydration to replace fluids lost through increased insensible perspiration and sweating.",
      "Lukewarm (tepid) water sponging on forehead and limbs if uncomfortable; never use ice water or alcohol rubs.",
    ],
    medicalTreatment: [
      "Antipyretics (e.g. Paracetamol) may be used under medical or pharmacist advice to relieve distress.",
      "Never administer aspirin to children or teenagers with fever due to the risk of Reye's syndrome.",
      "Treatment must target the primary underlying cause identified by clinical assessment.",
    ],
    whenToSeekHelp: [
      "Fever exceeding 39.4°C (103°F) or persisting beyond 72 hours.",
      "Stiff neck, extreme confusion, sudden rash, or difficulty waking up.",
      "Any fever in infants under 3 months of age warrants immediate emergency pediatric evaluation.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Lemongrass & Tulsi",
        role: "Gentle hydrating tea",
        evidence:
          "Warm fluids support hydration during sweating and provide sensory comfort.",
        safety: "Must be accompanied by clinical temperature monitoring.",
      },
    ],
    sources: [
      {
        name: "Centers for Disease Control and Prevention (CDC)",
        description: "Fever Management Guidelines",
      },
      {
        name: "Ministry of Health & Family Welfare (MoHFW)",
        description: "Clinical Guidelines for Febrile Illness",
      },
    ],
  },

  learn_3: {
    id: "learn_3",
    conditionName: "Sore Throat (Pharyngitis)",
    whatIsIt: [
      "Inflammation, swelling, and pain of the mucous membranes lining the pharynx.",
      "Often worsens when swallowing, talking, or breathing dry air.",
    ],
    howItHappens: [
      "Majority (over 80%) are caused by common viral infections (rhinovirus, adenovirus, coronavirus).",
      "A smaller proportion is caused by group A Streptococcus bacteria (strep throat).",
      "Environmental irritants such as smoke, dry indoor air, and acid reflux can also trigger non-infectious pharyngitis.",
    ],
    communicability: {
      status: "Yes",
      explanation:
        "Infectious sore throats spread readily through airborne respiratory droplets, coughs, and sharing drinks or eating utensils.",
    },
    nutrition: [
      "Warm liquids like herbal teas, warm water with honey and lemon, and soothing vegetable soups.",
      "Soft foods like curd, mashed bananas, and warm porridge that slide easily without irritating the throat.",
      "Avoid crunchy, coarse chips, spicy curries, and very hot or highly acidic citrus while the mucosa is raw.",
    ],
    precautions: [
      "Avoid close physical contact and avoid sharing cups, spoons, or towels.",
      "Replace toothbrushes after recovering from an infectious sore throat.",
      "Maintain room humidity with a clean humidifier or steam vapor.",
    ],
    supportiveCare: [
      "Gargling with warm salt water (1/2 teaspoon salt in a glass of warm water) 3–4 times daily to draw out fluid and reduce mucosal swelling.",
      "Honey acts as a natural demulcent coating to soothe raw nerve endings.",
      "Resting the voice and avoiding tobacco smoke and outdoor pollutants.",
    ],
    medicalTreatment: [
      "Viral pharyngitis resolves on its own within 5 to 7 days without antibiotics.",
      "A doctor can perform a throat swab or clinical assessment; if confirmed Strep throat, targeted antibiotics are prescribed.",
      "Always complete the full prescription if an antibiotic is prescribed by a physician.",
    ],
    whenToSeekHelp: [
      "Inability to swallow saliva or open the mouth (trismus).",
      "Visible white patches or pus exudate on swollen tonsils accompanied by high fever without a cough.",
      "Difficulty breathing or a high-pitched whistling noise (stridor) during inhalation.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Honey & Turmeric",
        role: "Demulcent & soothing gargle",
        evidence:
          "Honey is proven to coat the pharynx and ease cough and pain.",
        safety: "Never give honey to infants under 1 year of age.",
      },
    ],
    sources: [
      {
        name: "NHS UK",
        description: "Sore Throat Causes and Clinical Evaluation",
      },
      {
        name: "WHO",
        description: "Clinical Care for Upper Respiratory Tract Infections",
      },
    ],
  },

  learn_4: {
    id: "learn_4",
    conditionName: "Cough Awareness",
    whatIsIt: [
      "A vital defensive reflex that cleanses the throat and breathing passages of irritants, foreign particles, and excess secretions.",
      "Categorized into acute (less than 3 weeks) or chronic (lasting over 8 weeks).",
    ],
    howItHappens: [
      "Triggered when sensory cough receptors in the respiratory tract are stimulated by viral infections, postnasal drip, allergens, or smoke.",
      "Coughs can be 'dry' (tickly without mucus) or 'productive' (clearing phlegm from the chest).",
    ],
    communicability: {
      status: "Depends",
      explanation:
        "Coughs resulting from viral or bacterial respiratory infections spread airborne droplets; coughs caused by asthma, reflux, or dust allergies are non-communicable.",
    },
    nutrition: [
      "Warm fluids thin mucus viscosity, making it easier for the airway cilia to expectorate secretions.",
      "Honey provides immediate demulcent coating over sensitive cough receptors.",
      "Light, warm vegetable broths maintain strength without weighing down digestion.",
    ],
    precautions: [
      "Always cough into the crook of the elbow or into disposable paper tissues.",
      "Keep indoor air free from cigarette smoke, incense fumes, and harsh aerosol sprays.",
      "Wash hands immediately after blowing nose or coughing.",
    ],
    supportiveCare: [
      "Steam inhalation (from a bowl of hot water or shower) loosens chest mucus.",
      "Elevate the head with an extra pillow at night to minimize postnasal drip.",
      "Regular sips of warm water keep the pharynx moistened.",
    ],
    medicalTreatment: [
      "Medical assessment is necessary to identify the root cause (e.g. bronchitis, asthma, pneumonia, or GERD).",
      "Do not give over-the-counter cough and cold medicines to young children without pediatrician prescription.",
      "Bacterial infections require specific clinical antibiotics; viral coughs require supportive demulcent care.",
    ],
    whenToSeekHelp: [
      "Coughing up blood (hemoptysis) or rust-colored phlegm.",
      "Shortness of breath, chest pain, or wheezing during normal activity.",
      "Any cough lasting longer than 3 to 4 weeks or accompanied by night sweats and unexplained weight loss.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Honey & Ginger",
        role: "Natural soothing demulcent",
        evidence:
          "Clinical studies confirm honey reduces nocturnal cough frequency in children older than 12 months.",
        safety:
          "Strictly contraindicated under age 1 due to infant botulism risk.",
      },
    ],
    sources: [
      {
        name: "WHO",
        description: "Integrated Management of Childhood Illness",
      },
      {
        name: "American Academy of Pediatrics (AAP)",
        description: "Cough and Cold Guidelines",
      },
    ],
  },

  learn_5: {
    id: "learn_5",
    conditionName: "Digestive Upset & Diarrhoea",
    whatIsIt: [
      "Gastrointestinal inflammation causing frequent loose, watery bowel movements, stomach cramps, and nausea.",
      "The body rapidly loses water and vital cellular electrolytes (sodium, potassium).",
    ],
    howItHappens: [
      "Often triggered by viral gastroenteritis (rotavirus, norovirus) or ingesting food/water contaminated with bacteria or toxins.",
      "Irritated intestines fail to reabsorb fluid, speeding up transit time.",
    ],
    communicability: {
      status: "Yes",
      explanation:
        "Infectious gastroenteritis is highly contagious via the fecal-oral route, contaminated hands, surfaces, or tainted food and water.",
    },
    nutrition: [
      "Oral Rehydration Salt (ORS) solution is the gold standard for restoring fluid and electrolyte balance.",
      "Gentle, bland foods: ripe bananas (potassium), plain rice/khichdi, stewed apples, and plain fresh curd (beneficial probiotics).",
      "Avoid greasy fried foods, spicy gravies, dairy milk with high lactose, and artificial sweetened drinks.",
    ],
    precautions: [
      "Wash hands vigorously with soap after using the toilet and before preparing or touching any food.",
      "Boil or filter drinking water diligently.",
      "Keep infected family members away from cooking for others during illness.",
    ],
    supportiveCare: [
      "Sip ORS solution continuously in small, frequent mouthfuls rather than gulping.",
      "Allow adequate gut rest without fasting completely.",
      "Gradually reintroduce soft solid foods as appetite returns.",
    ],
    medicalTreatment: [
      "Most viral gastroenteritis resolves in 2 to 4 days with proper hydration alone.",
      "Do not take anti-motility drugs (like loperamide) for severe infectious diarrhoea without a physician's approval.",
      "Persistent or bloody diarrhoea requires stool testing and specific medical treatment.",
    ],
    whenToSeekHelp: [
      "Signs of moderate-to-severe dehydration: sunken eyes, extreme dry mouth, lack of urination for 8+ hours, dizziness upon standing.",
      "High fever, intense abdominal pain, or blood/mucus in the stool.",
      "Vomiting so severe that keeping any liquid down is impossible for more than 12 hours.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Banana & Curd",
        role: "Bland electrolyte & probiotic support",
        evidence:
          "Bananas restore potassium; curd supplies lactic acid cultures that support intestinal barrier recovery.",
        safety:
          "Does not replace the primary need for Oral Rehydration Salts (ORS).",
      },
    ],
    sources: [
      {
        name: "WHO",
        description: "The Treatment of Diarrhoea: A Manual for Physicians",
      },
      { name: "CDC", description: "Foodborne Diseases and Prevention" },
    ],
  },

  learn_6: {
    id: "learn_6",
    conditionName: "Seasonal Allergies (Allergic Rhinitis)",
    whatIsIt: [
      "An immunological overreaction of the respiratory lining to normally harmless environmental airborne particles (allergens).",
      "Characterized by itchy watery eyes, sneezing fits, clear runny nose, and nasal congestion.",
    ],
    howItHappens: [
      "When sensitized individuals inhale airborne pollens, grass spores, mold, or dust mites, their immune system releases histamine from mast cells.",
      "Histamine causes vascular leakage, itching, mucosal swelling, and excessive clear mucus.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Allergies are an individual immune hypersensitivity reaction; they cannot be passed from person to person.",
    },
    nutrition: [
      "Foods rich in quercetin (apples, onions) and Vitamin C provide natural cellular antioxidant and mast-cell supportive benefits.",
      "Anti-inflammatory herbs like ginger and mint provide sensory relief.",
      "Staying well-hydrated thins mucus and prevents dry, irritated throat passages.",
    ],
    precautions: [
      "Keep windows closed during peak pollen counts, especially during windy morning hours.",
      "Shower and wash hair before bed to rinse off outdoor pollen accumulated during the day.",
      "Wear sunglasses outdoors and dry laundry indoors during high-pollen seasons.",
    ],
    supportiveCare: [
      "Saline nasal sprays or irrigation (using sterile distilled or boiled water) physically wash out trapped pollen grains.",
      "Cool compresses over itchy, tired eyes.",
      "Gentle warm teas provide comfort for allergic throat tickling.",
    ],
    medicalTreatment: [
      "Over-the-counter or doctor-prescribed non-sedating antihistamines block histamine receptor action.",
      "Intranasal corticosteroid sprays reduce chronic mucosal inflammation under medical guidance.",
      "Allergen immunotherapy (allergy shots/tablets) may be recommended by an allergist for severe chronic cases.",
    ],
    whenToSeekHelp: [
      "Wheezing, chest tightness, or difficulty breathing (which may indicate co-existing allergic asthma).",
      "Symptoms that severely interfere with sleep, work, or daily functioning despite over-the-counter measures.",
      "Sudden facial swelling, lip swelling, or hives (which can signal an acute emergency).",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Mint & Apple",
        role: "Natural cooling & quercetin",
        evidence:
          "Apples contain quercetin; mint provides refreshing cooling aromatics.",
        safety:
          "Dietary foods do not replace prescribed antihistamines during acute allergic flares.",
      },
    ],
    sources: [
      {
        name: "World Allergy Organization (WAO)",
        description: "Allergic Rhinitis Guidelines",
      },
      { name: "NHS UK", description: "Hay Fever & Allergic Rhinitis Overview" },
    ],
  },

  learn_7: {
    id: "learn_7",
    conditionName: "Mild Dehydration",
    whatIsIt: [
      "A condition occurring when total water output exceeds water input, causing intracellular and extracellular volume depletion.",
      "Even a 1% to 2% loss of body weight in water compromises cognitive performance, physical endurance, and thermoregulation.",
    ],
    howItHappens: [
      "Commonly caused by insufficient daily fluid consumption, hot weather sweating, strenuous physical exertion, or mild fever.",
      "Can develop rapidly during episodes of vomiting or diarrhoea.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Dehydration is a physiological fluid imbalance, not an infectious disease, and cannot be transmitted.",
    },
    nutrition: [
      "Clean drinking water is paramount; sip regularly throughout the entire waking day.",
      "Electrolyte-rich natural foods: tender coconut water, diluted fruit juices, buttermilk with a pinch of rock salt, and water-dense fruits (watermelon, oranges, cucumber).",
      "Avoid dehydrating diuretics like excessive high-caffeine energy drinks or alcohol.",
    ],
    precautions: [
      "Drink water before feeling thirsty; thirst is a delayed signal of existing mild dehydration.",
      "Carry a reusable clean water bottle in hot or humid environments.",
      "Monitor urine color: pale straw yellow indicates good hydration; dark amber indicates need for fluids.",
    ],
    supportiveCare: [
      "Move to a shaded or air-conditioned cool environment.",
      "Rest quietly while rehydrating steadily with small, frequent sips.",
      "Avoid intense physical exertion until fluid equilibrium and energy return.",
    ],
    medicalTreatment: [
      "Mild dehydration is safely corrected through oral fluid and electrolyte intake.",
      "Moderate-to-severe dehydration with persistent vomiting or lethargy requires urgent intravenous (IV) fluids in a healthcare facility.",
      "Clinical blood tests (electrolytes, urea, creatinine) may be ordered to assess kidney perfusion.",
    ],
    whenToSeekHelp: [
      "Absence of urination for more than 8 hours, or very dark, concentrated urine.",
      "Pronounced lightheadedness, dizziness, fainting upon standing, or rapid heart rate.",
      "Sunken eyes, extreme confusion, or dry mouth with absence of tears.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Clean Water & Orange",
        role: "Hydration vehicle & electrolytes",
        evidence:
          "Water restores volume; citrus fruits supply potassium and citric acid for cellular balance.",
        safety: "Ensure all drinking water is boiled or verified clean.",
      },
    ],
    sources: [
      { name: "WHO", description: "Water Sanitation and Health Guidance" },
      {
        name: "European Food Safety Authority (EFSA)",
        description: "Dietary Reference Values for Water",
      },
    ],
  },

  learn_8: {
    id: "learn_8",
    conditionName: "Constipation",
    whatIsIt: [
      "Infrequent bowel movements (typically fewer than three times a week) accompanied by hard, dry stools and painful straining.",
      "Slow intestinal transit allows the large colon to absorb excessive water from the fecal bolus.",
    ],
    howItHappens: [
      "Most commonly caused by inadequate dietary fibre, insufficient fluid intake, physical inactivity, or ignoring the urge to defecate.",
      "Can also be triggered by changes in routine (travel), certain medications (iron supplements, opioids), or underlying conditions.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Constipation is a functional motility disorder of the gastrointestinal system and is entirely non-communicable.",
    },
    nutrition: [
      "Soluble and insoluble dietary fibre: whole fruits (apples with skin, guava, papaya), green leafy vegetables, lentils, and oats.",
      "Prunes and figs contain natural sorbitol which gently draws water into the stool.",
      "Ample fluid intake is mandatory: increasing fibre without drinking enough water can paradoxically worsen constipation.",
    ],
    precautions: [
      "Never ignore or postpone the natural urge to have a bowel movement.",
      "Establish a regular unhurried morning routine for using the toilet.",
      "Engage in regular physical walking or aerobic activity to stimulate colon contractions.",
    ],
    supportiveCare: [
      "Drink a glass of warm water upon waking in the morning.",
      "Adopt a footstool position (squat posture) to optimize the anorectal angle for easier elimination without straining.",
      "Gradually increase dietary fibre over several weeks to avoid sudden abdominal bloating and gas.",
    ],
    medicalTreatment: [
      "If lifestyle adjustments are insufficient, a doctor or pharmacist may suggest gentle osmotic laxatives or stool softeners.",
      "Stimulant laxatives should not be used routinely without clinical guidance due to dependency risks.",
      "Underlying metabolic (e.g. hypothyroidism) or structural issues require clinical evaluation.",
    ],
    whenToSeekHelp: [
      "Severe persistent abdominal pain, vomiting, or absolute inability to pass stool or gas.",
      "Blood in the stool or unexplained sudden changes in normal bowel habits lasting over 2 weeks.",
      "Unintentional weight loss accompanied by chronic constipation in adults over 45 years.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Guava & Papaya",
        role: "Natural dietary fibre & enzymes",
        evidence:
          "Pectin and insoluble cellulose promote normal fecal bulking and stimulate peristaltic movement.",
        safety:
          "Always pair high-fibre fruits with plenty of clean drinking water.",
      },
    ],
    sources: [
      { name: "NHS UK", description: "Constipation Diagnosis and Management" },
      {
        name: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
        description: "Constipation Overview",
      },
    ],
  },

  learn_9: {
    id: "learn_9",
    conditionName: "Indigestion (Dyspepsia)",
    whatIsIt: [
      "A collective term describing discomfort or burning sensation in the upper abdomen, often with early fullness, bloating, or belching.",
      "Usually related to delayed gastric emptying, hyperacidity, or temporary digestive irritation.",
    ],
    howItHappens: [
      "Commonly triggered by eating too quickly, consuming excessively oily or heavy foods, overeating, stress, or caffeine.",
      "Can also stem from gastroesophageal reflux (GERD), gastritis, or peptic ulcers.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Indigestion is a functional digestive disorder and is completely non-communicable.",
    },
    nutrition: [
      "Carminative culinary herbs: ginger, mint, cumin, and fennel stimulate digestive enzymes and reduce gas.",
      "Light, non-greasy foods: steamed vegetables, plain lentils (dal), and thin vegetable broths.",
      "Avoid large high-fat feasts, spicy deep-fried snacks, late-night heavy meals, and carbonated sodas.",
    ],
    precautions: [
      "Chew food slowly and thoroughly in a relaxed, seated environment.",
      "Wait at least 2 to 3 hours after eating before lying down or going to sleep.",
      "Avoid tight belts or waistbands that exert upward pressure on the stomach.",
    ],
    supportiveCare: [
      "A gentle 15-minute post-meal stroll supports gastric motility.",
      "Sipping warm ginger or mint tea after meals can relax digestive spasms.",
      "Elevating the head of the bed slightly if nighttime acid reflux is present.",
    ],
    medicalTreatment: [
      "Over-the-counter antacids or H2-blockers can provide temporary relief under pharmacist advice.",
      "Persistent dyspepsia requires testing for Helicobacter pylori infection or endoscopy by a gastroenterologist.",
      "Long-term reliance on antacids without medical assessment is not recommended.",
    ],
    whenToSeekHelp: [
      "Difficulty or pain while swallowing (dysphagia).",
      "Persistent vomiting, coffee-ground vomit, or black tarry stools.",
      "Chest pain that radiates to the jaw, neck, or left arm (must be treated as a cardiac emergency).",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Ginger & Mint",
        role: "Carminative digestive soothing",
        evidence:
          "Ginger stimulates gastric emptying; mint relieves smooth-muscle spasms.",
        safety:
          "Mint can relax the lower esophageal sphincter, potentially worsening heartburn in some.",
      },
    ],
    sources: [
      {
        name: "NHS UK",
        description: "Indigestion and Heartburn Clinical Guide",
      },
      {
        name: "American Gastroenterological Association (AGA)",
        description: "Dyspepsia Evaluation",
      },
    ],
  },

  learn_10: {
    id: "learn_10",
    conditionName: "Mouth Ulcers (Aphthous Stomatitis)",
    whatIsIt: [
      "Small, shallow, painful sores that develop on the inside of the cheeks, lips, tongue, or at the base of the gums.",
      "Typically have a white or yellowish center with a raised, inflamed red border.",
    ],
    howItHappens: [
      "Often triggered by accidental mechanical cheek biting, sharp food abrasions, or vigorous toothbrushing.",
      "Frequently associated with psychological stress, lack of sleep, or minor nutritional deficiencies (iron, folate, B12).",
      "They are NOT fever blisters/cold sores (which are caused by the Herpes simplex virus).",
    ],
    communicability: {
      status: "No",
      explanation:
        "Common aphthous mouth ulcers are non-infectious mucosal ulcerations and cannot be transmitted to other people.",
    },
    nutrition: [
      "Cool, soft, soothing foods: plain fresh curd/yogurt, gentle oatmeal, pureed vegetable soups, and mild bananas.",
      "Ensure adequate intake of B-vitamins, iron (leafy greens, lentils), and zinc.",
      "Strictly avoid sharp, crunchy foods (crisps, chips), intense spices, hot chillies, and acidic citrus which cause burning pain.",
    ],
    precautions: [
      "Use an ultra-soft bristle toothbrush and brush with gentle circular strokes.",
      "Avoid toothpastes containing harsh foaming agents like sodium lauryl sulfate (SLS).",
      "Address stress through adequate rest and relaxation techniques.",
    ],
    supportiveCare: [
      "Rinse with a mild salt-water solution (1/2 tsp salt in 1 cup warm water) to soothe inflammation and keep the mouth clean.",
      "Applying pure aloe vera gel or honey topically over the ulcer provides a temporary protective coating.",
      "Allow cool ice chips to melt slowly in the mouth over the sensitive area.",
    ],
    medicalTreatment: [
      "Most minor aphthous ulcers heal spontaneously within 7 to 14 days without scarring.",
      "A doctor or dentist can prescribe soothing topical anesthetic gels or mild anti-inflammatory oral pastes.",
      "Persistent or unusually large ulcers require medical assessment to rule out systemic disorders (such as Crohn's or Celiac disease).",
    ],
    whenToSeekHelp: [
      "Any individual mouth ulcer lasting longer than 3 weeks without signs of healing.",
      "Ulcers that are unusually large, painless, or spreading, or accompanied by swollen lymph nodes.",
      "Severe pain making it impossible to drink adequate fluids or eat nutritious meals.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Aloe Vera & Curd",
        role: "Soothing mucosal protection",
        evidence:
          "Aloe provides a gentle film over raw tissue; curd provides soft, non-irritating nutrition and probiotics.",
        safety:
          "Avoid highly acidic lemon or hot spicy decoctions over open mouth sores.",
      },
    ],
    sources: [
      { name: "NHS UK", description: "Mouth Ulcers Causes and Oral Care" },
      {
        name: "British Dental Association (BDA)",
        description: "Aphthous Stomatitis Management",
      },
    ],
  },

  learn_11: {
    id: "learn_11",
    conditionName: "Iron-Deficiency Awareness",
    whatIsIt: [
      "A condition where bodily stores of mineral iron become depleted, preventing the synthesis of adequate hemoglobin in red blood cells.",
      "Hemoglobin is the crucial iron-protein complex that transports oxygen from lungs to every cell in the human body.",
    ],
    howItHappens: [
      "Develops when iron output (blood loss, menstruation) or bodily demand (growth, pregnancy) exceeds dietary iron absorption.",
      "Very common in plant-based diets because plant iron (non-haem) has a lower baseline bioavailability than animal-derived haem iron.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Nutritional deficiencies are physiological dietary shortfalls and cannot be transmitted from person to person.",
    },
    nutrition: [
      "Rich plant iron sources: spinach, moringa leaves, fenugreek, lentils, chickpeas, sprouted moong, and pumpkin seeds.",
      "KEY SYNERGY: Vitamin C (from lemons, amla, oranges) converts insoluble ferric iron into highly absorbable ferrous iron in the gut.",
      "Always squeeze fresh lemon juice over cooked lentils or spinach to multiply non-haem iron absorption by up to 300%.",
    ],
    precautions: [
      "Avoid drinking strong black tea or coffee during or immediately after meals; their tannins and polyphenols bind tightly to iron and inhibit absorption.",
      "Separate calcium supplements or dairy-heavy meals from iron-rich foods, as calcium competes for absorption pathways.",
      "Cook food in traditional cast-iron cookware, which can naturally enrich foods with trace bioavailable iron.",
    ],
    supportiveCare: [
      "Pair iron-rich foods with Vitamin C at every major meal.",
      "Soaking, fermenting, and sprouting pulses (sprouted moong) deactivates phytic acid, unleashing bound minerals.",
      "Balance physical activity with restorative sleep to manage fatigue.",
    ],
    medicalTreatment: [
      "A simple Complete Blood Count (CBC) and serum ferritin test accurately diagnose iron deficiency and anaemia.",
      "If iron levels are clinically low, doctor-prescribed therapeutic iron tablets are necessary; diet alone cannot rapidly correct severe deficits.",
      "Take prescribed iron tablets exactly as instructed by a physician.",
    ],
    whenToSeekHelp: [
      "Severe persistent exhaustion, shortness of breath on mild climbing, or heart palpitations.",
      "Noticeable pallor of the inner eyelids, gums, nails, or tongue.",
      "Dizziness, lightheadedness, or craving non-food items like chalk or ice (pica).",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Spinach & Lemon",
        role: "Non-haem iron + Vitamin C synergy",
        evidence:
          "Ascorbic acid in lemon triples the absorption rate of plant-based non-haem iron in spinach.",
        safety:
          "Dietary synergy supports maintenance but does not replace prescription iron in diagnosed clinical anaemia.",
      },
    ],
    sources: [
      {
        name: "WHO",
        description: "Global Anaemia Reduction Strategy & Guidelines",
      },
      {
        name: "MoHFW India",
        description: "Anaemia Mukt Bharat Operational Guidelines",
      },
    ],
  },

  learn_12: {
    id: "learn_12",
    conditionName: "Calcium Awareness & Bone Health",
    whatIsIt: [
      "Calcium is the most abundant essential mineral in the body; 99% is stored in bones and teeth to maintain structural rigidity.",
      "The remaining 1% is vital for muscular contractions, cardiac rhythm conduction, and nerve signal transmission.",
    ],
    howItHappens: [
      "If dietary calcium intake is chronically inadequate, the body leaches calcium directly out of skeletal bone tissue to preserve critical blood levels.",
      "Over decades, this silent bone depletion leads to osteopenia, osteoporosis, and increased risk of fractures.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Nutritional bone mineral status is purely a dietary and metabolic balance, completely non-communicable.",
    },
    nutrition: [
      "Dairy foods: curd, paneer, and milk provide high concentrations of easily absorbed calcium.",
      "Plant-based calcium sources: dark leafy greens, sesame seeds (til), ragi (finger millet), and fortified plant milks.",
      "Vitamin D is the indispensable biological partner that enables intestinal calcium absorption.",
    ],
    precautions: [
      "Ensure regular safe sun exposure or dietary intake of Vitamin D to facilitate calcium uptake.",
      "Avoid excessive sodium and phosphorus-heavy carbonated colas, which increase urinary calcium excretion.",
      "Engage in weight-bearing physical exercises (walking, dancing, resistance training) to stimulate bone mineral deposition.",
    ],
    supportiveCare: [
      "Incorporate calcium-rich snacks into daily routine: curd bowls, roasted sesame seeds, or ragi porridge.",
      "Maintain active lifestyle: bones adapt to mechanical stress by becoming denser and stronger.",
      "Ensure balanced protein intake alongside calcium for bone collagen matrix health.",
    ],
    medicalTreatment: [
      "Bone Mineral Density (DEXA) scans diagnose bone thinning in adults at risk.",
      "Clinical calcium and Vitamin D supplements are prescribed by physicians when dietary intake or absorption is compromised.",
      "Supplemental calcium should be taken under medical guidance to avoid unnecessary vascular calcification risks.",
    ],
    whenToSeekHelp: [
      "Sudden severe back pain (which may indicate a spinal vertebral compression fracture).",
      "Loss of height over time or noticeable stooping posture (kyphosis).",
      "A bone fracture occurring from minor everyday trauma or falling from standing height.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Curd & Leafy Vegetables",
        role: "Bioavailable calcium & Vitamin K",
        evidence:
          "Curd supplies bioavailable calcium; leafy greens provide Vitamin K which activates osteocalcin for bone mineralization.",
        safety:
          "Ensure calcium is matched with adequate Vitamin D status for optimal utilization.",
      },
    ],
    sources: [
      {
        name: "International Osteoporosis Foundation (IOF)",
        description: "Calcium and Bone Health Guidelines",
      },
      {
        name: "WHO",
        description: "Diet, Nutrition and the Prevention of Chronic Diseases",
      },
    ],
  },

  learn_13: {
    id: "learn_13",
    conditionName: "Vitamin C Awareness (Ascorbic Acid)",
    whatIsIt: [
      "A water-soluble essential micronutrient that humans cannot synthesize internally and must obtain continuously through diet.",
      "Acts as a powerful cellular antioxidant and is an indispensable enzymatic cofactor for collagen biosynthesis and tissue repair.",
    ],
    howItHappens: [
      "Because the human body does not store water-soluble vitamins in large amounts, daily intake from fresh produce is required.",
      "Severe prolonged deficiency causes scurvy (weak capillaries, bleeding gums, poor wound healing, and extreme lethargy).",
    ],
    communicability: {
      status: "No",
      explanation:
        "Vitamin C deficiency is a dietary insufficiency and is strictly non-communicable.",
    },
    nutrition: [
      "Amla (Indian gooseberry) is one of the world's most concentrated natural sources of Vitamin C.",
      "Guavas, oranges, lemons, papayas, strawberries, bell peppers, and fresh amla provide abundant daily ascorbic acid.",
      "Vitamin C is heat-sensitive; consuming fresh, raw, or lightly steamed produce preserves the highest nutrient levels.",
    ],
    precautions: [
      "Add fresh lemon juice after cooking is finished rather than boiling it on high heat to prevent thermal degradation of ascorbic acid.",
      "Consume freshly cut fruits promptly; exposure to air and light gradually oxidizes Vitamin C.",
      "Pair with plant-based iron foods to maximize non-haem iron uptake in the duodenum.",
    ],
    supportiveCare: [
      "Incorporate at least one citrus fruit, guava, or amla into your daily nutrition.",
      "A colourful plate containing greens, reds, and oranges naturally ensures comprehensive antioxidant intake.",
      "Stay hydrated to support normal water-soluble vitamin metabolism.",
    ],
    medicalTreatment: [
      "Diagnosed clinical deficiencies or scurvy are treated with medical-grade oral ascorbic acid supplements under physician care.",
      "Extremely high supplemental doses (above 2,000 mg/day) can cause diarrhoea, abdominal cramps, and increase kidney stone risks in susceptible individuals.",
      "Dietary sources from whole fruits and vegetables are safest and provide complementary bioflavonoids.",
    ],
    whenToSeekHelp: [
      "Unexplained spontaneous bleeding of gums during gentle toothbrushing.",
      "Easy, unexplained bruising across limbs or small pinpoint red-purple spots (petechiae) around hair follicles.",
      "Slow-healing wounds or persistent joint and muscle aches.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Amla & Orange",
        role: "Natural ascorbic acid & flavonoids",
        evidence:
          "Amla provides exceptionally stable ascorbic acid linked with polyphenols that resist rapid oxidation.",
        safety:
          "Whole food sources are universally safe for daily health maintenance.",
      },
    ],
    sources: [
      {
        name: "National Institutes of Health (NIH)",
        description: "Vitamin C Fact Sheet for Health Professionals",
      },
      {
        name: "WHO",
        description: "Vitamin and Mineral Requirements in Human Nutrition",
      },
    ],
  },

  learn_14: {
    id: "learn_14",
    conditionName: "Vitamin D Awareness (The Sunshine Vitamin)",
    whatIsIt: [
      "A fat-soluble secosteroid hormone essential for intestinal absorption of calcium, magnesium, and phosphate.",
      "Plays vital regulatory roles in bone remodeling, neuromuscular function, and immune cell modulation.",
    ],
    howItHappens: [
      "The human skin synthesizes Vitamin D3 when exposed to solar ultraviolet B (UVB) radiation.",
      "Deficiency is widespread globally due to indoor lifestyles, air pollution, high-SPF sunscreen, and dark skin pigmentation which reduces UVB penetration.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Vitamin D deficiency is an individual metabolic and environmental shortfall, entirely non-communicable.",
    },
    nutrition: [
      "Natural dietary sources are very limited: egg yolks, fatty fish, and mushrooms exposed to ultraviolet light.",
      "Fortified foods (fortified milk, fortified plant beverages, fortified cereals) help supplement dietary intake.",
      "Sensible solar exposure (15–20 minutes mid-day sun on arms and legs several times weekly) stimulates endogenous cutaneous synthesis.",
    ],
    precautions: [
      "Balance solar exposure to synthesize Vitamin D while avoiding sunburn and excessive UV-induced skin damage.",
      "Diet alone is rarely sufficient to correct established clinical deficiency without sunlight or medical supplementation.",
      "Those living in high latitudes or working indoors all day should regularly monitor their levels.",
    ],
    supportiveCare: [
      "Take daily walks outdoors during morning or midday hours when safe.",
      "Include fortified dairy or plant foods and eggs in meal plans.",
      "Maintain bone health through regular weight-bearing physical movement.",
    ],
    medicalTreatment: [
      "A serum 25-hydroxyvitamin D [25(OH)D] blood test accurately determines clinical status.",
      "Clinically deficient individuals are prescribed high-potency Vitamin D3 (cholecalciferol) supplements by their doctor.",
      "Because Vitamin D is fat-soluble and stored in adipose tissue, do not consume massive doses long-term without medical lab monitoring.",
    ],
    whenToSeekHelp: [
      "Chronic, deep bone pain and symmetrical muscle weakness in hips or thighs.",
      "Frequent unexplained fractures or difficulty climbing stairs.",
      "In young children: delayed walking, bowed legs, or cranial bone softening (rickets).",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Sunshine & Fortified Foods",
        role: "Cutaneous synthesis & bone support",
        evidence:
          "UVB rays synthesize Vitamin D3 in skin, which undergoes liver and kidney hydroxylation to activate.",
        safety:
          "Do not exceed doctor-recommended supplemental doses to prevent hypercalcemia.",
      },
    ],
    sources: [
      {
        name: "Endocrine Society",
        description: "Clinical Practice Guideline on Vitamin D",
      },
      {
        name: "NHS UK",
        description: "Vitamin D Recommendations and Supplements",
      },
    ],
  },

  learn_15: {
    id: "learn_15",
    conditionName: "Vitamin B12 Awareness (Cobalamin)",
    whatIsIt: [
      "A water-soluble B-vitamin critical for normal nervous system function, myelin sheath maintenance, and DNA synthesis in red blood cells.",
      "Produced exclusively by bacterial microorganisms and concentrated naturally in animal-derived foods.",
    ],
    howItHappens: [
      "Commonly occurs in strict vegetarians and vegans who do not consume fortified foods or supplements.",
      "Also occurs in older adults or individuals with pernicious anaemia, atrophic gastritis, or after bariatric surgery due to lack of intrinsic factor.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Nutritional B12 deficiency is a metabolic dietary shortfall and is entirely non-communicable.",
    },
    nutrition: [
      "Dairy foods: curd, paneer, and milk provide bioavailable B12 for lacto-vegetarians.",
      "Eggs, poultry, fish, and fortified breakfast cereals or nutritional yeasts.",
      "Plant foods (unfortified grains, vegetables, fruits) do NOT contain active, bioavailable Vitamin B12.",
    ],
    precautions: [
      "Strict vegans must consume reliable fortified foods daily or take a verified regular B12 supplement.",
      "Do not rely on fermented soy (tempeh) or spirulina as primary B12 sources; they often contain inactive pseudovitamin B12 analogues.",
      "Annual blood checks of serum B12 are recommended for long-term vegetarians and older adults.",
    ],
    supportiveCare: [
      "Ensure regular consumption of curd, dairy, or certified fortified plant alternatives.",
      "Track energy levels and consult a clinician if unexplained neurological sensations arise.",
      "Pair overall diet with balanced complex carbohydrates and B-complex vitamins.",
    ],
    medicalTreatment: [
      "Clinically diagnosed deficiency requires doctor-prescribed oral cyanocobalamin/methylcobalamin tablets or intramuscular injections.",
      "Prompt medical correction is vital to prevent irreversible peripheral neuropathy and neurological damage.",
      "Complete blood evaluation ensures concomitant folate deficiency is not masked.",
    ],
    whenToSeekHelp: [
      "Persistent 'pins and needles' (paresthesia) or numbness in the fingers or toes.",
      "Balance problems, unsteadiness while walking, or unexplained memory fog.",
      "Swollen, inflamed, smooth red tongue (glossitis) accompanied by extreme physical fatigue.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Curd & Fortified Dairy",
        role: "Natural lacto-vegetarian B12 source",
        evidence:
          "Fermented dairy provides natural cobalamin produced by microorganisms.",
        safety:
          "Vegetarians with severe clinical deficiency require medical supplementation.",
      },
    ],
    sources: [
      {
        name: "NIH Office of Dietary Supplements",
        description: "Vitamin B12 Fact Sheet",
      },
      {
        name: "NHS UK",
        description: "Vitamin B12 Deficiency Anaemia Overview",
      },
    ],
  },

  learn_16: {
    id: "learn_16",
    conditionName: "Food Poisoning (Foodborne Pathogens)",
    whatIsIt: [
      "An acute gastrointestinal illness resulting from consuming food or water contaminated with pathogenic bacteria, viruses, parasites, or preformed toxins.",
      "Presents with sudden onset of nausea, violent vomiting, watery or bloody diarrhoea, and abdominal cramping.",
    ],
    howItHappens: [
      "Common bacterial culprits include Salmonella, Campylobacter, Escherichia coli, and Staphylococcus aureus (enterotoxin).",
      "Develops when food is improperly stored at ambient room temperature, undercooked, or cross-contaminated by unwashed hands.",
    ],
    communicability: {
      status: "Depends",
      explanation:
        "The tainted food itself caused the infection, but infectious organisms (e.g., Norovirus, Salmonella) can subsequently spread from person to person via contaminated hands and bathroom surfaces.",
    },
    nutrition: [
      "Immediate focus is fluid and electrolyte replacement with Oral Rehydration Salts (ORS) solution.",
      "Once vomiting pauses, offer small sips of clear rice water, diluted apple juice, or salted buttermilk.",
      "Reintroduce bland BRAT foods (banana, rice, applesauce, toast) gradually; avoid dairy fats, oils, and caffeine.",
    ],
    precautions: [
      "Practice the WHO 5 Keys to Safer Food: keep clean, separate raw and cooked, cook thoroughly, keep food at safe temperatures (below 5°C or above 60°C), and use safe water.",
      "Never leave cooked foods at room temperature for longer than 2 hours.",
      "Wash cutting boards and knives with hot soapy water after slicing raw ingredients.",
    ],
    supportiveCare: [
      "Rest the stomach during active vomiting; do not force solid foods.",
      "Sip ORS solution slowly—a teaspoon every few minutes—to prevent triggering vomiting reflexes.",
      "Get plenty of bed rest to allow the immune system to clear the pathogen.",
    ],
    medicalTreatment: [
      "Most uncomplicated food poisoning episodes resolve within 24 to 48 hours with oral hydration alone.",
      "Do NOT take over-the-counter anti-diarrhoeal medication without medical evaluation, as stopping bowel movements can trap toxins in the colon.",
      "Severe bacterial infections or vulnerable patients (infants, elderly) may require clinical antibiotics and IV fluid therapy.",
    ],
    whenToSeekHelp: [
      "High fever (above 38.9°C / 102°F) accompanied by severe abdominal pain.",
      "Visible blood in vomit or stool.",
      "Signs of severe dehydration: unable to keep liquids down for 12 hours, dizziness, extreme thirst, lack of urine.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Food Hygiene & Clean Water",
        role: "Prevention & rehydration",
        evidence:
          "Thorough cooking and refrigeration prevent bacterial bloom; ORS prevents fatal dehydration.",
        safety:
          "Never rely on raw herbal mixtures to treat severe foodborne intoxication.",
      },
    ],
    sources: [
      {
        name: "World Health Organization (WHO)",
        description: "Five Keys to Safer Food Manual",
      },
      { name: "CDC", description: "Food Safety and Foodborne Germs" },
    ],
  },

  learn_17: {
    id: "learn_17",
    conditionName: "Influenza (The Flu)",
    whatIsIt: [
      "A contagious respiratory viral infection caused by influenza viruses (types A and B) infecting the nose, throat, and sometimes the lungs.",
      "Distinct from the common cold due to its abrupt, sudden onset, high fever, severe muscle body aches, and debilitating fatigue.",
    ],
    howItHappens: [
      "Transmitted through microscopic airborne droplets propelled when infected individuals cough, sneeze, or speak.",
      "Also acquired by touching contaminated surfaces and touching eyes, nose, or mouth.",
      "The virus mutates frequently (antigenic drift), necessitating seasonal monitoring.",
    ],
    communicability: {
      status: "Yes",
      explanation:
        "Highly contagious. Individuals can infect others beginning 1 day before symptoms develop and up to 5 to 7 days after becoming sick.",
    },
    nutrition: [
      "Warm hydrating fluids: vegetable broths, warm water with lemon and honey, and herbal infusions.",
      "Easy-to-digest light meals rich in antioxidants: fruit bowls, soft khichdi, and steamed vegetables.",
      "Adequate calories and electrolytes support high metabolic demands during sustained fever.",
    ],
    precautions: [
      "Annual seasonal influenza vaccination is the single most effective preventive measure available.",
      "Stay home from work, school, and gatherings while sick to prevent spreading infection across the community.",
      "Rigorous hand hygiene with soap and water or alcohol hand rub.",
    ],
    supportiveCare: [
      "Complete physical bed rest is essential.",
      "Drink generous amounts of clean water and warm fluids to prevent dehydration.",
      "Use steam inhalation or warm saline gargles to relieve airway congestion and throat irritation.",
    ],
    medicalTreatment: [
      "Antibiotics CANNOT treat influenza because it is caused by a virus.",
      "Prescription antiviral medications (e.g. oseltamivir) may be prescribed by a doctor if started within 48 hours of symptom onset.",
      "Over-the-counter paracetamol can ease fever and muscle aches under medical advice; avoid aspirin in youth.",
    ],
    whenToSeekHelp: [
      "Shortness of breath, rapid breathing, or chest pain.",
      "Persistent dizziness, confusion, or inability to stay awake.",
      "Fever or cough that improves but then returns with greater severity (possible secondary bacterial pneumonia).",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Rest & Hydration",
        role: "Physiological viral recovery",
        evidence:
          "Rest allows immune T-cells to combat viral replication; fluids prevent complications.",
        safety:
          "Consult a physician promptly if high-risk factors (asthma, pregnancy, age 65+) are present.",
      },
    ],
    sources: [
      {
        name: "WHO",
        description: "Influenza (Seasonal) Fact Sheet and Surveillance",
      },
      { name: "CDC", description: "Influenza Clinical Guidance & Treatment" },
    ],
  },

  learn_18: {
    id: "learn_18",
    conditionName: "Pneumonia Awareness (Serious Infection)",
    whatIsIt: [
      "A serious, potentially life-threatening infection of one or both lungs that inflames the microscopic air sacs (alveoli).",
      "The alveoli may fill with pus and fluid, severely impairing the blood's ability to absorb oxygen.",
    ],
    howItHappens: [
      "Can be caused by diverse pathogens: bacteria (Streptococcus pneumoniae), viruses (influenza, RSV, SARS-CoV-2), or fungi.",
      "Can develop as a dangerous secondary complication following a cold or flu when defenses are weakened.",
      "NEVER caused by eating specific foods or cold drinks.",
    ],
    communicability: {
      status: "Depends",
      explanation:
        "Viruses and bacteria that trigger pneumonia can be transmitted through respiratory droplets; however, whether an exposed individual develops mild bronchitis or full pneumonia depends heavily on host immunity.",
    },
    nutrition: [
      "Nutrition plays a purely supportive role alongside mandatory medical treatment.",
      "High-protein, easy-to-chew meals sustain energy during heavy respiratory work.",
      "Ample hydration keeps secretions less viscous, but food/herbs DO NOT cure or resolve pulmonary consolidation.",
    ],
    precautions: [
      "Vaccination against pneumococcal bacteria, influenza, and pertussis provides vital preventive protection.",
      "Strict smoking cessation: tobacco smoke destroys protective airway cilia.",
      "Good respiratory hygiene and handwashing.",
    ],
    supportiveCare: [
      "Absolute bed rest and medical supervision.",
      "Using prescribed supplemental oxygen if blood oxygen saturation (SpO2) falls below safe clinical levels.",
      "Positioning in an elevated semi-upright posture to ease breathing.",
    ],
    medicalTreatment: [
      "CRITICAL: Bacterial pneumonia requires immediate, doctor-prescribed clinical antibiotics.",
      "Delaying medical antibiotic treatment in favor of home remedies can be fatal.",
      "Hospitalization, intravenous fluids, and respiratory therapy are required for severe cases.",
    ],
    whenToSeekHelp: [
      "Difficulty breathing, shortness of breath, rapid shallow breathing, or flaring nostrils.",
      "Persistent high fever accompanied by shaking chills and chest pain that sharpens upon inhalation.",
      "Bluish tinge to lips or nail beds (cyanosis), confusion, or SpO2 reading below 94%.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Medical Consultation & Prescribed Treatment",
        role: "MANDATORY CLINICAL CARE",
        evidence:
          "Pneumonia is an alveolar medical infection requiring clinical diagnostics (chest X-ray) and targeted prescription pharmacotherapy.",
        safety:
          "Herbs and home remedies must NEVER be used as a treatment for pneumonia.",
      },
    ],
    sources: [
      {
        name: "WHO",
        description: "Pneumonia in Children and Adults Factsheet",
      },
      {
        name: "British Thoracic Society (BTS)",
        description:
          "Guidelines for the Management of Community-Acquired Pneumonia",
      },
    ],
  },

  learn_19: {
    id: "learn_19",
    conditionName: "Dengue Awareness (Mosquito-Borne Virus)",
    whatIsIt: [
      "A mosquito-borne viral infection caused by four closely related dengue virus serotypes (DENV 1–4).",
      "Characterized by high fever, severe retro-orbital eye pain, joint/muscle aches ('breakbone fever'), and rash.",
    ],
    howItHappens: [
      "Transmitted to humans through the bites of infected female Aedes mosquitoes (primarily Aedes aegypti).",
      "Aedes mosquitoes bite predominantly during daylight hours (early morning and late afternoon) and breed in stagnant water.",
      "It is NOT transmitted directly from person to person.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Dengue cannot spread directly through human contact, touch, or coughing; it requires a mosquito vector to transmit the virus.",
    },
    nutrition: [
      "Intense hydration with Oral Rehydration Salts (ORS), coconut water, fresh fruit juices, and clear soups is the cornerstone of clinical care.",
      "Nutritious soft foods (papaya, porridge, dal) support bodily recovery during severe weakness.",
      "Traditional papaya leaf extracts are popular, but scientific evidence is mixed; they DO NOT replace clinical platelet monitoring.",
    ],
    precautions: [
      "Eliminate all standing water in flower pots, discarded tyres, overhead tanks, and desert coolers where Aedes breed.",
      "Apply DEET or Picaridin mosquito repellents on exposed skin and wear long-sleeved light-colored clothing.",
      "Use window mesh screens and mosquito bed nets.",
    ],
    supportiveCare: [
      "Strict physical bed rest.",
      "Continuous, aggressive oral fluid replacement to prevent dangerous plasma leakage.",
      "Tepid sponging for fever comfort.",
    ],
    medicalTreatment: [
      "There is no specific antiviral medication for dengue; treatment consists of rigorous supportive fluid management.",
      "STRICT WARNING: Avoid Aspirin, Ibuprofen, and other NSAIDs as they severely increase the risk of internal bleeding.",
      "Paracetamol is used under medical advice for fever; regular laboratory blood checks (Platelets, Hematocrit) are vital.",
    ],
    whenToSeekHelp: [
      "Warning signs of Severe Dengue (usually appearing around day 3–7 as fever drops): severe abdominal pain, persistent vomiting.",
      "Bleeding from gums or nose, vomiting blood, or black stools.",
      "Extreme fatigue, restlessness, difficulty breathing, or cold clammy skin (dengue shock syndrome).",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Mosquito Protection & Medical Consultation",
        role: "Vector prevention & platelet tracking",
        evidence:
          "Eliminating mosquito bites breaks infection cycle; daily clinical blood tests detect dangerous plasma leakage early.",
        safety:
          "Never rely solely on herbal papaya leaf juice if warning signs or dropping platelet counts occur.",
      },
    ],
    sources: [
      { name: "WHO", description: "Dengue and Severe Dengue Guidelines" },
      {
        name: "National Center for Vector Borne Diseases Control (NCVBDC India)",
        description: "Dengue Clinical Management",
      },
    ],
  },

  learn_20: {
    id: "learn_20",
    conditionName: "Malaria Awareness (Parasitic Infection)",
    whatIsIt: [
      "A life-threatening disease caused by Plasmodium parasites that infect and destroy human red blood cells.",
      "Characterized by cyclical paroxysms of severe chills, shaking, high fever, drenching sweats, and profound fatigue.",
    ],
    howItHappens: [
      "Transmitted to humans through the nocturnal bites of infected female Anopheles mosquitoes.",
      "Parasites travel to the liver to mature and multiply, then invade and rupture erythrocytes in cyclical waves.",
      "The most dangerous species, Plasmodium falciparum, can cause cerebral malaria and death if untreated.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Malaria is not directly transmitted between humans through ordinary contact; transmission requires an Anopheles mosquito vector.",
    },
    nutrition: [
      "Easily digestible, high-energy meals (khichdi, porridges, light vegetable stews) counteract high metabolic breakdown.",
      "Continuous hydration with clean water, ORS, and tender coconut water to manage intense sweating.",
      "Iron-rich foods support recovery of red blood cells AFTER the acute parasite infection is treated.",
    ],
    precautions: [
      "Sleep under Long-Lasting Insecticidal Nets (LLINs) every single night in endemic areas.",
      "Apply effective mosquito repellent and install protective window screens.",
      "Take doctor-prescribed prophylactic antimalarial medications when travelling to high-risk malaria zones.",
    ],
    supportiveCare: [
      "Immediate clinical blood testing (Rapid Diagnostic Test or blood smear microscopy) at the very first sign of cyclical fever.",
      "Bed rest in a cool, screened room.",
      "Oral rehydration and cooling measures during febrile spikes.",
    ],
    medicalTreatment: [
      "MANDATORY CLINICAL PRESCRIPTION: Artemisinin-based Combination Therapy (ACT) or specific antimalarial medications are strictly required.",
      "Home herbal remedies CANNOT cure malaria or eradicate blood parasites.",
      "Complete the entire prescribed medication regimen even if symptoms rapidly improve to prevent relapse or resistance.",
    ],
    whenToSeekHelp: [
      "Any unexplained fever in or following travel to a malaria-endemic region requires urgent blood testing within 24 hours.",
      "Signs of Cerebral Malaria: confusion, seizures, extreme drowsiness, or coma.",
      "Severe anaemia, dark 'blackwater' urine, yellow jaundice, or rapid labored breathing.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Mosquito Protection & Prescribed Treatment",
        role: "Vector barrier & clinical cure",
        evidence:
          "Insecticide-treated nets prevent transmission; Artemisinin-combination antimalarials eradicate blood parasites.",
        safety:
          "Untreated Falciparum malaria can progress to fatal organ failure within 24 to 48 hours.",
      },
    ],
    sources: [
      {
        name: "WHO",
        description: "World Malaria Report & Guidelines for Malaria",
      },
      {
        name: "CDC",
        description: "Malaria Diagnosis and Treatment in the United States",
      },
    ],
  },

  learn_21: {
    id: "learn_21",
    conditionName: "Diabetes Awareness (Blood Glucose Regulation)",
    whatIsIt: [
      "A chronic metabolic condition characterized by elevated levels of blood glucose (hyperglycemia).",
      "Results from the pancreas failing to produce sufficient insulin (Type 1), or the body's cells becoming resistant to insulin's signals (Type 2).",
    ],
    howItHappens: [
      "Type 1 is an autoimmune destruction of pancreatic beta cells.",
      "Type 2 develops from a combination of genetic predisposition, physical inactivity, abdominal adiposity, and ultra-processed diets.",
      "Over time, high blood glucose damages microvascular and macrovascular blood vessels.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Diabetes is a non-communicable chronic metabolic disorder and cannot be spread from person to person.",
    },
    nutrition: [
      "Emphasize low-glycemic, high-fibre complex carbohydrates: lentils, whole pulses, oats, and non-starchy vegetables (spinach, bitter gourd).",
      "Cinnamon, nuts, and healthy seeds supply slow-burning energy and support insulin sensitivity.",
      "Eliminate sugary beverages, fruit sodas, refined flours, and ultra-processed confectionery.",
    ],
    precautions: [
      "Regular physical activity (at least 150 minutes of moderate aerobic exercise weekly) directly improves cellular insulin uptake.",
      "Maintain a healthy body weight through balanced nutrition and portion mindfulness.",
      "Routine monitoring of fasting glucose, postprandial glucose, and HbA1c (3-month blood average).",
    ],
    supportiveCare: [
      "Consistent meal timing to avoid extreme blood glucose spikes and dips.",
      "Daily inspection of feet for minor cuts, blisters, or sores (to prevent diabetic foot complications).",
      "Stress management, as stress hormones (cortisol, adrenaline) raise blood glucose levels.",
    ],
    medicalTreatment: [
      "Lifestyle modifications (diet, exercise) are foundational, but often accompanied by oral hypoglycemic medications (like Metformin).",
      "Type 1 diabetes and advanced Type 2 diabetes require daily insulin therapy prescribed by a doctor.",
      "Never alter or discontinue prescribed diabetes medications based on herbal claims without physician consultation.",
    ],
    whenToSeekHelp: [
      "Extreme unquenchable thirst (polydipsia), excessive urination (polyuria), and rapid unintended weight loss.",
      "Signs of Hypoglycemia (dangerously low blood sugar): trembling, cold sweat, intense hunger, confusion, or fainting.",
      "Signs of Ketoacidosis (DKA): fruity-smelling breath, persistent vomiting, confusion, and rapid deep breathing.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Cinnamon & Lentils",
        role: "Low-glycemic fibre & dietary support",
        evidence:
          "High dietary fibre in lentils slows glucose absorption; cinnamon offers modest insulin support as part of a meal plan.",
        safety:
          "Spices and high-fibre foods do NOT replace prescribed insulin or oral antidiabetic drugs.",
      },
    ],
    sources: [
      {
        name: "International Diabetes Federation (IDF)",
        description: "Diabetes Atlas & Clinical Practice",
      },
      {
        name: "American Diabetes Association (ADA)",
        description: "Standards of Medical Care in Diabetes",
      },
    ],
  },

  learn_22: {
    id: "learn_22",
    conditionName: "High Blood Pressure Awareness (Hypertension)",
    whatIsIt: [
      "A chronic condition in which the systemic arterial blood pressure is persistently elevated (typically 140/90 mmHg or higher).",
      "Known as the 'silent killer' because it rarely causes noticeable symptoms while progressively damaging arteries, heart, brain, and kidneys.",
    ],
    howItHappens: [
      "Stems from vascular arterial stiffening, chronic systemic inflammation, excessive dietary sodium, obesity, lack of exercise, and genetic factors.",
      "Forces the heart to pump against higher vascular resistance, leading to cardiac hypertrophy and elevated stroke risk.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Hypertension is a non-communicable cardiovascular condition and is not transmissible.",
    },
    nutrition: [
      "Adopt the DASH (Dietary Approaches to Stop Hypertension) dietary pattern: rich in vegetables, fruits, whole grains, and low-fat dairy.",
      "Abundant potassium (bananas, spinach, oranges, lentils) promotes urinary sodium excretion and eases blood vessel tension.",
      "Garlic, pomegranates, and nuts supply compounds that support vascular nitric oxide production.",
      "CRITICAL: Limit daily dietary sodium (table salt, pickles, processed snacks, papads) to less than 2,000 mg (about 1 teaspoon of salt).",
    ],
    precautions: [
      "Regular blood pressure screening; home digital BP monitors empower personal tracking.",
      "Maintain a healthy body weight; losing even 5 kg significantly lowers systolic pressure.",
      "Limit alcohol consumption and eliminate all forms of tobacco.",
    ],
    supportiveCare: [
      "Engage in regular moderate aerobic exercise (brisk walking, swimming, cycling) 30 minutes daily.",
      "Mindfulness meditation and deep breathing exercises reduce sympathetic nervous tone.",
      "Avoid adding discretionary table salt to cooked dishes.",
    ],
    medicalTreatment: [
      "When blood pressure remains elevated despite lifestyle changes, doctors prescribe antihypertensive medications.",
      "Classes of medication (ACE inhibitors, ARBs, Calcium channel blockers, diuretics) are tailored to the individual patient.",
      "Never stop taking prescribed blood pressure medication simply because you feel fine; hypertension has no symptoms until complications arise.",
    ],
    whenToSeekHelp: [
      "Hypertensive Crisis: Blood pressure exceeding 180/120 mmHg.",
      "Severe sudden 'thunderclap' headache, blurred vision, or confusion.",
      "Chest pain, shortness of breath, numbness, or weakness in face/arm/leg (signs of acute heart attack or stroke).",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Garlic & Pomegranate",
        role: "Vascular support & DASH nutrients",
        evidence:
          "Garlic allicin and pomegranate polyphenols support endothelial elasticity as part of a low-sodium lifestyle.",
        safety:
          "Cannot substitute for prescribed antihypertensive pharmacotherapy in clinical hypertension.",
      },
    ],
    sources: [
      {
        name: "World Health Organization (WHO)",
        description: "Hypertension Factsheet & Clinical Guidance",
      },
      {
        name: "American Heart Association (AHA)",
        description: "Understanding Blood Pressure Readings",
      },
    ],
  },

  learn_23: {
    id: "learn_23",
    conditionName: "Anaemia Awareness (Multiple Etiologies)",
    whatIsIt: [
      "A condition where the number of healthy red blood cells or the hemoglobin concentration within them is lower than normal.",
      "Limits the oxygen-carrying capacity of blood, leading to pale tissues, weakness, dizziness, and cold extremities.",
    ],
    howItHappens: [
      "Anaemia is a broad clinical category with multiple distinct causes: nutritional deficiency (iron, folate, B12), chronic blood loss, genetic haemoglobinopathies (thalassemia, sickle cell), or bone marrow disorders.",
      "It is vital to determine the EXACT type of anaemia; taking iron will not cure B12 deficiency anaemia or thalassemia.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Anaemia is a non-communicable hematological disorder resulting from nutritional, genetic, or chronic disease etiologies.",
    },
    nutrition: [
      "For nutritional iron-deficiency: dark leafy greens (spinach, moringa), lentils, sprouted pulses, and pomegranate paired with Vitamin C (lemon).",
      "For megaloblastic anaemia: curd, dairy, eggs (Vitamin B12) and green vegetables (folate).",
      "Avoid tea and coffee near meal times to prevent polyphenol inhibition of mineral absorption.",
    ],
    precautions: [
      "Undergo routine blood checks (Complete Blood Count / CBC) during adolescence, pregnancy, and regular checkups.",
      "Maintain diverse dietary variety combining legumes, fresh produce, and dairy.",
      "Seek medical advice before taking over-the-counter high-dose iron pills to avoid iron overload disorders (hemochromatosis).",
    ],
    supportiveCare: [
      "Allow adequate pacing of daily tasks to conserve physical energy.",
      "Eat smaller, nutrient-dense meals if appetite is reduced.",
      "Keep warm, as reduced circulation causes cold sensitivity in fingers and toes.",
    ],
    medicalTreatment: [
      "A physician must evaluate red blood cell indices (MCV, MCH), ferritin, and peripheral blood smear to confirm the specific diagnosis.",
      "Prescription iron tablets, B12 injections, or folic acid are tailored to the diagnosed deficiency.",
      "Genetic anaemias (thalassemia) require specialized hematological monitoring, not self-medicated iron.",
    ],
    whenToSeekHelp: [
      "Shortness of breath or rapid chest pounding during minimal everyday tasks (like walking across a room).",
      "Severe dizziness, lightheadedness, or sudden fainting spells.",
      "Chest pain, noticeable yellowing of the skin or eyes (jaundice), or blood in vomit or stools.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Spinach, Lentils & Pomegranate",
        role: "Nutritional haematopoiesis support",
        evidence:
          "Provides essential dietary non-haem iron, folate, and trace minerals supporting red blood cell production.",
        safety:
          "Accurate clinical lab diagnosis is essential before beginning high-dose mineral supplementation.",
      },
    ],
    sources: [
      { name: "WHO", description: "Anaemia Guidance & Worldwide Prevalence" },
      {
        name: "MoHFW India",
        description: "National Iron Plus Initiative Guidelines",
      },
    ],
  },

  learn_24: {
    id: "learn_24",
    conditionName: "Antibiotic Awareness (Antimicrobial Stewardship)",
    whatIsIt: [
      "Antibiotics are powerful, life-saving medicines designed specifically to kill or inhibit the growth of BACTERIA.",
      "Antibiotic Resistance (AMR) occurs when bacteria mutate in response to overuse and misuse of these drugs, rendering standard treatments ineffective.",
    ],
    howItHappens: [
      "Misuse occurs when antibiotics are taken for VIRAL infections (common colds, flu, sore throats, seasonal bronchitis) where they have ZERO effect.",
      "Also occurs when patients fail to finish their full prescribed course, save leftover pills, or share medicines with relatives.",
    ],
    communicability: {
      status: "Yes",
      explanation:
        "While the concept of resistance is an evolutionary process, antibiotic-resistant 'superbugs' (like MRSA, CRE) are communicable bacteria that spread between people in communities and hospitals.",
    },
    nutrition: [
      "During or after a medically necessary antibiotic course, consuming fermented probiotic foods (curd, yogurt) helps replenish friendly gut bacteria.",
      "High-fibre prebiotic foods (apples, bananas, oats) feed beneficial intestinal microflora.",
      "Nutritious food supports general immunity, but food CANNOT replace antibiotics when a severe bacterial infection is present.",
    ],
    precautions: [
      "NEVER demand antibiotics from a doctor or pharmacist for a common cold or flu.",
      "Only take antibiotics when prescribed by a certified healthcare professional.",
      "Always complete the full prescribed course, even if you feel completely better after two days.",
    ],
    supportiveCare: [
      "For viral colds, rely on genuine supportive care: rest, fluids, honey, steam, and comfort measures.",
      "Do not store leftover antibiotics in medicine cabinets for 'next time'.",
      "Never share prescription medicines with friends or family members.",
    ],
    medicalTreatment: [
      "Doctors use clinical exams and laboratory cultures (urine, throat, blood) to determine whether an infection is truly bacterial.",
      "Targeted narrow-spectrum antibiotics are preferred over broad-spectrum antibiotics to preserve the microbiome.",
      "Responsible antibiotic stewardship protects our global medicine supply for future generations.",
    ],
    whenToSeekHelp: [
      "Severe adverse reactions to antibiotics: rash, facial swelling, wheezing, or difficulty breathing (anaphylaxis).",
      "Severe watery diarrhoea (more than 3 times a day) during or after antibiotic use, which may indicate Clostridioides difficile colitis.",
      "Symptoms that worsen continuously despite 48 hours on a prescribed antibiotic.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "Curd & Medical Consultation",
        role: "Microbiome replenishment & stewardship",
        evidence:
          "Probiotics in curd help reduce antibiotic-associated diarrhoea; doctor consultation ensures antibiotics are only used when genuinely indicated.",
        safety: "Never self-medicate with leftover antibiotics.",
      },
    ],
    sources: [
      {
        name: "World Health Organization (WHO)",
        description: "Antimicrobial Resistance (AMR) Global Action Plan",
      },
      {
        name: "CDC",
        description: "Be Antibiotics Aware: Smart Use, Best Care",
      },
    ],
  },

  learn_25: {
    id: "learn_25",
    conditionName: "Responsible Health Decisions (The Garden of Wisdom)",
    whatIsIt: [
      "The pinnacle of health literacy: knowing how to evaluate health information, integrate wholesome lifestyle nutrition, and partner respectfully with medical science.",
      "Empowers individuals to care for everyday wellness while recognizing when professional diagnosis and treatment are essential.",
    ],
    howItHappens: [
      "Misinformation often spreads through unverified claims that ordinary foods, exotic berries, or herbs can 'miraculously cure' cancer, diabetes, or serious infections.",
      "Critical thinking and evidence appraisal protect individuals from delaying life-saving medical treatments.",
    ],
    communicability: {
      status: "No",
      explanation:
        "Health literacy and sound personal decision-making are intellectual skills, completely non-communicable.",
    },
    nutrition: [
      "A balanced, colourful, whole-food diet based on fresh fruits, vegetables, lentils, whole grains, nuts, and clean water provides foundational cellular vitality.",
      "Food provides essential macro- and micronutrients that support biological resilience and chronic disease prevention.",
      "Respect traditional culinary plants for what they are: nourishing, comforting foods—never false replacements for emergency clinical medicine.",
    ],
    precautions: [
      "Be skeptical of extreme claims that promise 'instant cures', 'miracle detoxes', or advise stopping prescribed medications.",
      "Verify health claims against reliable, established public health bodies (WHO, MoHFW, NHS, CDC).",
      "Maintain open, honest communication with your doctor about any herbs, supplements, or traditional practices you use.",
    ],
    supportiveCare: [
      "Prioritize the four pillars of foundational wellness: nutritious whole foods, daily physical movement, restorative sleep, and emotional balance.",
      "Practice timely hand hygiene, food safety, and vector protection to prevent illness before it starts.",
      "Create a supportive home environment where healthy habits are shared joyfully with family.",
    ],
    medicalTreatment: [
      "Modern evidence-based medicine and public health (vaccines, antibiotics, diagnostic imaging, surgical care) are among humanity's greatest achievements.",
      "Trust trained clinicians for serious illnesses, persistent symptoms, acute emergencies, and chronic disease management.",
      "Combine the wisdom of wholesome natural nourishment with the rigorous precision of clinical medicine.",
    ],
    whenToSeekHelp: [
      "Any red-flag symptom: chest pain, breathing difficulty, sudden weakness, persistent high fever, or severe unexplained pain.",
      "Symptoms that fail to improve within the expected timeframe of common minor illnesses.",
      "Whenever you are uncertain about the severity or nature of a health condition.",
    ],
    plantEvidenceNotes: [
      {
        itemName: "The Complete Garden",
        role: "Harmony of Nutrition & Medical Science",
        evidence:
          "Nutritious foods build lifelong health reserves; evidence-based medicine protects and cures when illness strikes.",
        safety:
          "The true Garden of Wisdom is built on knowledge, balance, and responsible care.",
      },
    ],
    sources: [
      {
        name: "World Health Organization (WHO)",
        description: "Health Literacy and Public Health Action",
      },
      {
        name: "MoHFW India & National Health Portal",
        description: "Healthy Living and Prevention Guidance",
      },
    ],
  },
};
