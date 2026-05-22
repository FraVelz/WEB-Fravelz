/**
 * Inicialización de tema antes de la hidratación (beforeInteractive).
 * Mantener COOKIE_NAME y MAX_AGE alineados con src/lib/theme-cookie.ts
 */
(function () {
  "use strict";

  const COOKIE_NAME = "theme";
  const MAX_AGE = String(60 * 60 * 24 * 365);
  const STORAGE_KEY = "theme";
  const VALID_PREFERENCES = new Set(["dark", "light", "auto"]);

  function getCookie(name) {
    const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookiePref(value) {
    document.cookie =
      COOKIE_NAME +
      "=" +
      encodeURIComponent(value) +
      ";path=/;max-age=" +
      MAX_AGE +
      ";SameSite=Lax";
  }

  function getSystemTheme() {
    if (!window.matchMedia) return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function parsePreference(raw) {
    return raw && VALID_PREFERENCES.has(raw) ? raw : null;
  }

  function getStoredPreference() {
    try {
      const fromStorage = localStorage.getItem(STORAGE_KEY);
      const parsed = parsePreference(fromStorage);

      if (parsed) return parsed;
      if (fromStorage !== null && fromStorage !== "") return "auto";
      return parsePreference(getCookie(COOKIE_NAME)) ?? "auto";

    } catch {
      return "auto";
    }
  }

  function applyResolvedTheme(finalTheme) {
    const root = document.documentElement;

    if (finalTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");

    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }

    root.style.colorScheme = finalTheme;
    root.setAttribute("data-theme-initialized", "true");
  }

  function applyLightFallback() {
    const root = document.documentElement;
    root.classList.remove("dark");

    root.setAttribute("data-theme", "light");
    root.style.colorScheme = "light";
  }

  try {
    const storedPreference = getStoredPreference();
    const finalTheme = storedPreference === "auto" ? getSystemTheme() : storedPreference;

    applyResolvedTheme(finalTheme);
    setCookiePref(storedPreference);

  } catch {
    applyLightFallback();
  }
})();
