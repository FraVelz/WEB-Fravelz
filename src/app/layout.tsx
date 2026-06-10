import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies, headers } from "next/headers";
import Script from "next/script";
import type { Metadata } from "next";

import { cn } from "@/utils/cn";
import { getRequestLang } from "@/lib/request-lang";
import { getSiteUrl } from "@/lib/site-url";
import { getServerHtmlThemeFromCookieAndHint, THEME_COOKIE_NAME } from "@/lib/theme-cookie";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),

  title: {
    default: "Fravelz | Portfolio",
    template: "%s | Fravelz",
  },
  description: "Portfolio — Francisco Velez",
  openGraph: {
    siteName: "Fravelz",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookieStore, headerList, lang] = await Promise.all([cookies(), headers(), getRequestLang()]);
  const themeCookie = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const clientHintScheme = headerList.get("sec-ch-prefers-color-scheme");
  const { htmlClassName, dataTheme } = getServerHtmlThemeFromCookieAndHint(themeCookie, clientHintScheme);

  return (
    <html lang={lang} className={cn(htmlClassName)} data-theme={dataTheme} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-linear-to-b from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg))] to-[rgb(var(--color-bg))] antialiased",
          "dark:bg-linear-to-b dark:from-[rgb(var(--color-bg))] dark:via-[rgb(var(--color-surface))] dark:to-[rgb(var(--color-bg))]",
        )}
      >
        <Script id="base-url" strategy="beforeInteractive">
          {`window.__BASE_URL__ = "/";`}
        </Script>
        <Script id="theme-init" src="/theme-init.js" strategy="beforeInteractive" />

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
