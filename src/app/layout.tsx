import type { Metadata } from "next";
import Script from "next/script";

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
    const getSystemTheme = () => {
      if (typeof window === "undefined" || !window.matchMedia) return "light";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    let storedTheme = "auto";
    try {
      storedTheme = localStorage.getItem("theme") || "auto";
    } catch (e) {
      storedTheme = "auto";
    }
    const finalTheme = storedTheme === "auto" ? getSystemTheme() : storedTheme;
    if (finalTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.removeAttribute("data-theme");
    }
    document.documentElement.style.colorScheme = finalTheme;
    document.documentElement.setAttribute("data-theme-initialized", "true");
  } catch (e) {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
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
