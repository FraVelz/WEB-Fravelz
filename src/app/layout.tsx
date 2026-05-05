import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import Script from "next/script";

import { cn } from "@/utils/cn";
import { getServerHtmlThemeFromCookieAndHint, THEME_COOKIE_NAME } from "@/lib/theme-cookie";

import "./globals.css";

const siteUrl = "https://fravelz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Fravelz | Portfolio",
    template: "%s | Fravelz",
  },
  description: "Portfolio — Francisco Velez",
};

const themeInitScript = `
(function () {
  try {
    var COOKIE_NAME = "theme";
    var MAX_AGE = "31536000";
    function getCookie(name) {
      var m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
      return m ? decodeURIComponent(m[1]) : null;
    }
    function setCookiePref(value) {
      document.cookie = COOKIE_NAME + "=" + encodeURIComponent(value) + ";path=/;max-age=" + MAX_AGE + ";SameSite=Lax";
    }
    var getSystemTheme = function () {
      if (typeof window === "undefined" || !window.matchMedia) return "light";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    var storedPreference = "auto";
    try {
      var ls = localStorage.getItem("theme");
      if (ls === "dark" || ls === "light" || ls === "auto") {
        storedPreference = ls;
      } else if (ls !== null && ls !== "") {
        storedPreference = "auto";
      } else {
        var ck = getCookie(COOKIE_NAME);
        if (ck === "dark" || ck === "light" || ck === "auto") storedPreference = ck;
      }
    } catch (e) {
      storedPreference = "auto";
    }
    var finalTheme = storedPreference === "auto" ? getSystemTheme() : storedPreference;
    if (finalTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
    document.documentElement.style.colorScheme = finalTheme;
    document.documentElement.setAttribute("data-theme-initialized", "true");
    setCookiePref(storedPreference);
  } catch (e) {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerList = await headers();
  const themeCookie = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const clientHintScheme = headerList.get("sec-ch-prefers-color-scheme");
  const { htmlClassName, dataTheme } = getServerHtmlThemeFromCookieAndHint(themeCookie, clientHintScheme);

  return (
    <html lang="es" className={cn(htmlClassName)} data-theme={dataTheme} suppressHydrationWarning>
      <body className="min-h-screen bg-linear-to-b from-slate-100 via-slate-100 to-slate-100 antialiased dark:bg-linear-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <Script id="base-url" strategy="beforeInteractive">
          {`window.__BASE_URL__ = "/";`}
        </Script>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Script src="/i18n.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  );
}
