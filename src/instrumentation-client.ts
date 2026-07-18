import * as Sentry from "@sentry/nextjs";

/**
 * Client-only Sentry. No-ops without NEXT_PUBLIC_SENTRY_DSN.
 * Low sample rates: portfolio traffic is low; avoid noisy traces.
 */
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: dsn || undefined,
  enabled: Boolean(dsn),
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV,
  tracesSampleRate: 0.05,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  sendDefaultPii: false,
});
