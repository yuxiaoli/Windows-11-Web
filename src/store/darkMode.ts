// Modified for Sean: isolate theme writes on the shared Pages origin and tolerate restricted storage (2026-10-25).
import { createStore, getValue } from 'nanostores'
import { readStoredTheme, writeStoredTheme, Theme, ThemeStorage } from './themeStorage'

const getStorage = (): ThemeStorage | undefined => {
  try { return window.localStorage; } catch { return undefined; }
};

export const ThemeStore = createStore<Theme>(() => {
  if (typeof window !== "undefined") {
    const theme = readStoredTheme(getStorage());
    ThemeStore.set(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }
});

export const toggleTheme = () => {
  if (typeof window !== "undefined") {
    const theme: Theme = getValue(ThemeStore) === "light" ? "dark" : "light";
    ThemeStore.set(theme);
    writeStoredTheme(getStorage(), theme);
    document.documentElement.setAttribute("data-theme", theme);
  }
};
