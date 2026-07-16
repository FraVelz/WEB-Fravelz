import * as Sentry from "@sentry/nextjs";

export async function register() {
  // Client errors are handled via instrumentation-client.ts.
  // Server/edge hooks stay minimal until oleada 2 alerts.
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const dsn = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (!dsn) return;

    Sentry.init({
      dsn,
      enabled: true,
      environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV,
      tracesSampleRate: 0.05,
      sendDefaultPii: false,
    });
  }
}

export const onRequestError = Sentry.captureRequestError;
