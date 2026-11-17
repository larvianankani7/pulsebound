export interface HowToPlayStep {
  number: number;
  title: string;
  description: string;
}

export interface HowToPlaySectionData {
  id: string;
  title: string;
  subtitle: string;
  iconName: "sparkles" | "compass" | "book" | "award" | "trophy" | "mouse";
  paragraphs?: string[];
  steps?: HowToPlayStep[];
  bulletPoints?: { label: string; text: string }[];
}

export const HOW_TO_PLAY_GUIDE: HowToPlaySectionData[] = [
  {
    id: "what-is-sylvara",
    title: "What is SYLVARA?",
    subtitle: "A Botanical Health Discovery & Nutritional Education Realm",
    iconName: "sparkles",
    paragraphs: [
      "SYLVARA is an evidence-based botanical and nutritional exploration experience. It connects traditional culinary ingredients and medicinal plants with verified public health consensus.",
      "Explore biological functions, recognize when safe preventative comfort applies, and learn when professional clinical care is essential.",
    ],
  },
  {
    id: "explore-gameplay",
    title: "Explore Gameplay",
    subtitle: "25 Sequential Botanical Challenge Scenarios",
    iconName: "compass",
    steps: [
      {
        number: 1,
        title: "Read the Health Scenario",
        description:
          "Inspect your friend's condition and target health objective at the top of the garden canvas.",
      },
      {
        number: 2,
        title: "Inspect Garden Items (Hover)",
        description:
          "Hover your mouse (or tap on mobile) over any botanical node to reveal its nutrients, benefits, and evidence notes in the viewport tooltip.",
      },
      {
        number: 3,
        title: "Select Botanical Choices (Click)",
        description:
          "Click the appropriate plants or actions. Selected nodes glow with a prominent lavender ring and orbital particle indicator.",
      },
      {
        number: 4,
        title: "Use Hints When Needed",
        description:
          "Stuck? Click 'Hint' to view the required item count and evidence-based guidance for that condition.",
      },
      {
        number: 5,
        title: "Submit Selections (Enter)",
        description:
          "Click 'Enter' to validate your answer. If incorrect, you receive constructive feedback and can retry with zero penalty.",
      },
      {
        number: 6,
        title: "Unlock Learning Card & Badge",
        description:
          "Successful solutions unlock the in-depth Learning Card and grant your handcrafted Explore Badge, unlocking the next level.",
      },
    ],
  },
  {
    id: "learnings-archive",
    title: "Learnings Archive",
    subtitle: "Permanent Evidence-Based Medical Knowledge",
    iconName: "book",
    bulletPoints: [
      {
        label: "Unlocked via Explore:",
        text: "Completing each Explore level unlocks its comprehensive scientific learning module in the Learnings section.",
      },
      {
        label: "Detailed Clinical Breakdown:",
        text: "Click any earned learning card to view symptoms, causes, communicability, dietary nutrition, precautions, supportive care, and clinical context.",
      },
      {
        label: "Red-Flag Guidance:",
        text: "Every module highlights when to seek immediate medical hospital care.",
      },
      {
        label: "Always Revisit:",
        text: "Earned learnings remain permanently accessible for lifelong review.",
      },
    ],
  },
  {
    id: "quizzes-challenges",
    title: "Badge Quizzes",
    subtitle: "Single-Attempt Knowledge Mastery Challenges",
    iconName: "award",
    bulletPoints: [
      {
        label: "Unlocked Strictly by Badges:",
        text: "Earning an Explore badge unlocks its corresponding 3-question quiz in the Quizzes section.",
      },
      {
        label: "One Question at a Time:",
        text: "Questions appear sequentially with immediate feedback, explanations, and key takeaways.",
      },
      {
        label: "Strict One-Attempt Rule:",
        text: "Each quiz can be attempted only once. Your score is permanently recorded in your profile.",
      },
      {
        label: "Scoring Categories:",
        text: "0/3 (Better Luck Next Time!), 1/3 (Learning), 2/3 (Well Explored), 3/3 (Mastered).",
      },
      {
        label: "Read-Only Review:",
        text: "Completed quizzes can be revisited anytime to review questions, answers, and explanations, but cannot be retaken.",
      },
    ],
  },
  {
    id: "rewards-progression",
    title: "Rewards & Progression",
    subtitle: "Your Botanical Milestone Tracking",
    iconName: "trophy",
    bulletPoints: [
      {
        label: "25 Exploration Levels:",
        text: "Progress through 5 difficulty tiers from Beginner to Master.",
      },
      {
        label: "25 Handcrafted Badges:",
        text: "Collect unique artistic medals honoring each health milestone.",
      },
      {
        label: "75 Quiz Points:",
        text: "Earn up to 3 points per quiz to demonstrate complete health literacy.",
      },
      {
        label: "Offline Persistence:",
        text: "All progress is securely stored in your local browser (Dexie IndexedDB and LocalStorage).",
      },
    ],
  },
  {
    id: "controls-navigation",
    title: "Input & Navigation Controls",
    subtitle: "Hover, Click, and Keyboard Accessibility",
    iconName: "mouse",
    bulletPoints: [
      {
        label: "Hover:",
        text: "Reveals tooltips, nutrient details, and contextual hints without changing screen position.",
      },
      {
        label: "Left Click / Tap:",
        text: "Selects garden nodes, opens cards, starts quizzes, and triggers buttons.",
      },
      {
        label: "Keyboard Navigation:",
        text: "Use Tab and Shift+Tab to navigate between interactive elements with visible focus rings.",
      },
      {
        label: "Enter / Space:",
        text: "Selects focused items or submits current forms.",
      },
      {
        label: "Escape Key:",
        text: "Instantly dismisses any open modal, dialog, or overlay.",
      },
    ],
  },
];
