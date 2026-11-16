import { create } from "zustand";

type AppState = {
  language: "en" | "hi";
  setLanguage: (language: "en" | "hi") => void;
};

export const useAppStore = create<AppState>((set) => ({
  language: "en",
  setLanguage: (language) => set({ language }),
}));
