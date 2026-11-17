import { type AvatarInfo, type AppLanguage } from "./types";

export const STORAGE_USERNAME_KEY = "sylvara_username";
export const STORAGE_AVATAR_KEY = "sylvara_avatar";
export const STORAGE_LANGUAGE_KEY = "sylvara_language";
export const STORAGE_MUSIC_VOLUME_KEY = "sylvara_music_volume";
export const STORAGE_MUSIC_MUTED_KEY = "sylvara_music_muted";
export const STORAGE_SFX_VOLUME_KEY = "sylvara_sfx_volume";
export const STORAGE_SFX_MUTED_KEY = "sylvara_sfx_muted";
export const STORAGE_REDUCED_MOTION_KEY = "sylvara_reduced_motion";
export const STORAGE_TEXT_SIZE_KEY = "sylvara_text_size";
export const STORAGE_HIGH_CONTRAST_KEY = "sylvara_high_contrast";

export const DEFAULT_USERNAME = "Seeker";
export const DEFAULT_AVATAR: AvatarInfo["id"] = "seeker";
export const DEFAULT_MUSIC_VOLUME = 25;
export const DEFAULT_SFX_VOLUME = 80;

export const AVATARS: AvatarInfo[] = [
  {
    id: "seeker",
    name: "The Seeker",
    title: "Curious Explorer",
    description:
      "Ventures into unexplored botanical realms seeking rare healing species.",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: "herbalist",
    name: "The Herbalist",
    title: "Flora Specialist",
    description:
      "Understands the subtle restorative powers of herbs, spices, and leaves.",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: "alchemist",
    name: "The Alchemist",
    title: "Nutrient Weaver",
    description:
      "Studies micronutrients, phytonutrients, and biological harmony.",
    gradient: "from-amber-600 to-fuchsia-600",
  },
  {
    id: "botanist",
    name: "The Botanist",
    title: "Taxonomy Scholar",
    description:
      "Documents cellular structures, soil nutrients, and active plant compounds.",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: "sage",
    name: "The Sage",
    title: "Ancient Scholar",
    description:
      "Bridges centuries of traditional wisdom with peer-reviewed medical truth.",
    gradient: "from-violet-600 to-purple-800",
  },
  {
    id: "druid",
    name: "The Druid",
    title: "Grove Guardian",
    description:
      "Attuned to the rhythmic seasons of growth, harvest, and natural immunity.",
    gradient: "from-rose-600 to-pink-600",
  },
];

export const LANGUAGES: {
  code: AppLanguage;
  name: string;
  nativeName: string;
  flag: string;
}[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  {
    code: "zh",
    name: "Chinese (Simplified)",
    nativeName: "简体中文",
    flag: "🇨🇳",
  },
];
