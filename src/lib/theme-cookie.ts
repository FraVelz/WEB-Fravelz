export const THEME_COOKIE_NAME = "theme";

/** 365 días */
export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export type ThemePreference = "dark" | "light" | "auto";

export function parseThemePreference(raw: string | undefined): ThemePreference {
  if (raw === "dark" || raw === "light" || raw === "auto") return raw;
  return "auto";
}

/**
 * Decide clase y data-theme en el HTML inicial (SSR) a partir de la cookie + Client Hint opcional.
 * Con preferencia "auto" y sin hint, el servidor emite data-theme="auto" y el CSS @media cubre el primer paint.
 */
export function getServerHtmlThemeFromCookieAndHint(
  cookieValue: string | undefined,
  secChPrefersColorScheme: string | null,
): { htmlClassName: string; dataTheme: ThemePreference } {
  const preference = parseThemePreference(cookieValue);
  const ch = secChPrefersColorScheme?.toLowerCase().trim() ?? null;

  if (preference === "dark") {
    return { htmlClassName: "dark", dataTheme: "dark" };
  }
  if (preference === "light") {
    return { htmlClassName: "", dataTheme: "light" };
  }

  if (ch === "dark") {
    return { htmlClassName: "dark", dataTheme: "dark" };
  }
  if (ch === "light") {
    return { htmlClassName: "", dataTheme: "light" };
  }

  return { htmlClassName: "", dataTheme: "auto" };
}

export function serializeThemeCookieClient(value: ThemePreference): string {
  return `${THEME_COOKIE_NAME}=${encodeURIComponent(value)};path=/;max-age=${String(THEME_COOKIE_MAX_AGE)};SameSite=Lax`;
}

export function setThemeCookieClient(value: ThemePreference): void {
  if (typeof document === "undefined") return;
  document.cookie = serializeThemeCookieClient(value);
}
