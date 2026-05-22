import { cookies, headers } from "next/headers";
import Script from "next/script";
import type { Metadata } from "next";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookieStore, headerList] = await Promise.all([cookies(), headers()]);
  const themeCookie = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const clientHintScheme = headerList.get("sec-ch-prefers-color-scheme");
  const { htmlClassName, dataTheme } = getServerHtmlThemeFromCookieAndHint(themeCookie, clientHintScheme);

  return (
    <html lang="es" className={cn(htmlClassName)} data-theme={dataTheme} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-linear-to-b from-slate-100 via-slate-100 to-slate-100 antialiased",
          "dark:bg-linear-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950",
        )}
      >
        <Script id="base-url" strategy="beforeInteractive">
          {`window.__BASE_URL__ = "/";`}
        </Script>
        <Script id="theme-init" src="/theme-init.js" strategy="beforeInteractive" />
        <Script src="/i18n.js" strategy="lazyOnload" />

        {children}
      </body>
    </html>
  );
}
