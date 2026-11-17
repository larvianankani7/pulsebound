import { create } from "zustand";

type AppState = {
  language: "en" | "hi" | "ja" | "zh";
  setLanguage: (language: "en" | "hi" | "ja" | "zh") => void;
};

export const useAppStore = create<AppState>((set) => ({
  language: "en",
  setLanguage: (language) => set({ language }),
}));
