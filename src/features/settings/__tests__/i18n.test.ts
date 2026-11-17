import { describe, it, expect } from "vitest";
import i18n from "../../../i18n";
import en from "../../../i18n/locales/en/common.json";
import hi from "../../../i18n/locales/hi/common.json";
import ja from "../../../i18n/locales/ja/common.json";
import zh from "../../../i18n/locales/zh/common.json";

describe("SYLVARA Multi-Language Localization System", () => {
  it("has comprehensive translation dictionaries for all four languages", () => {
    const langs = [
      { code: "en", data: en },
      { code: "hi", data: hi },
      { code: "ja", data: ja },
      { code: "zh", data: zh },
    ];

    langs.forEach(({ data }) => {
      expect(data.brand).toBeDefined();
      expect(data.navigation.settings).toBeDefined();
      expect(data.navigation.explore).toBeDefined();
      expect(data.navigation.learnings).toBeDefined();
      expect(data.navigation.findings).toBeDefined();
      expect(data.navigation.about).toBeDefined();
      expect(data.settings.title).toBeDefined();
      expect(data.settings.sections.profile).toBeDefined();
      expect(data.settings.sections.audio).toBeDefined();
      expect(data.settings.sections.language).toBeDefined();
      expect(data.settings.sections.accessibility).toBeDefined();
      expect(data.settings.sections.howToPlay).toBeDefined();
      expect(data.settings.sections.data).toBeDefined();
    });
  });

  it("dynamically changes languages in i18next without page reload", async () => {
    await i18n.changeLanguage("hi");
    expect(i18n.language).toBe("hi");
    expect(i18n.t("navigation.settings")).toBe(hi.navigation.settings);

    await i18n.changeLanguage("ja");
    expect(i18n.language).toBe("ja");
    expect(i18n.t("navigation.settings")).toBe(ja.navigation.settings);

    await i18n.changeLanguage("zh");
    expect(i18n.language).toBe("zh");
    expect(i18n.t("navigation.settings")).toBe(zh.navigation.settings);

    await i18n.changeLanguage("en");
    expect(i18n.language).toBe("en");
    expect(i18n.t("navigation.settings")).toBe(en.navigation.settings);
  });

  it("verifies scripts are authentic and non-empty", () => {
    // Hindi should contain Devanagari characters (range \u0900-\u097F)
    expect(/[\u0900-\u097F]/.test(hi.navigation.settings)).toBe(true);

    // Japanese should contain Japanese Kana/Kanji
    expect(/[\u3040-\u30FF\u4E00-\u9FAF]/.test(ja.navigation.settings)).toBe(
      true
    );

    // Simplified Chinese should contain CJK Unified Ideographs
    expect(/[\u4E00-\u9FFF]/.test(zh.navigation.settings)).toBe(true);
  });
});
