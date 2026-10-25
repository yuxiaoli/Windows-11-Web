// Shared-origin theme storage for this fork; legacy preferences are copied without modifying their key.
export type Theme = "light" | "dark";
export const THEME_KEY = "windows-11-web:theme";
export type ThemeStorage = Pick<Storage, "getItem" | "setItem">;
const isTheme = (value: string | null | undefined): value is Theme => value === "light" || value === "dark";

export const writeStoredTheme = (storage: ThemeStorage | undefined, theme: Theme) => {
  try { storage?.setItem(THEME_KEY, theme); } catch { /* Restricted embeds can keep an in-memory theme. */ }
};

export const readStoredTheme = (storage?: ThemeStorage): Theme => {
  try {
    const saved = storage?.getItem(THEME_KEY);
    if (isTheme(saved)) return saved;
    const legacy = storage?.getItem("theme");
    if (isTheme(legacy)) {
      writeStoredTheme(storage, legacy);
      return legacy;
    }
  } catch { /* Storage may be unavailable in an embedded context. */ }
  return "light";
};
