const isDev = process.env.NODE_ENV !== "production";

function buildContentSecurityPolicy(): string {
  const scriptSrc = ["'self'", "'unsafe-inline'"];
  const connectSrc = ["'self'"];

  if (isDev) {
    scriptSrc.push("'unsafe-eval'", "https://va.vercel-scripts.com");
    connectSrc.push("https://vitals.vercel-insights.com");
  }

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc.join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    `connect-src ${connectSrc.join(" ")}`,
    "frame-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'none'",
  ];

  if (!isDev) {
    directives.push("upgrade-insecure-requests");
  }

  return directives.join("; ");
}

export function getSecurityHeaders(): { key: string; value: string }[] {
  const headers: { key: string; value: string }[] = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    },
    { key: "Content-Security-Policy", value: buildContentSecurityPolicy() },
    { key: "Accept-CH", value: "Sec-CH-Prefers-Color-Scheme" },
    { key: "Critical-CH", value: "Sec-CH-Prefers-Color-Scheme" },
    { key: "Vary", value: "Sec-CH-Prefers-Color-Scheme" },
  ];

  if (!isDev) {
    headers.unshift({
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    });
  }

  return headers;
}
