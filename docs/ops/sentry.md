# Sentry client setup (2026-07-15)

## Behavior

- Client init: [`src/instrumentation-client.ts`](../../src/instrumentation-client.ts)
- Server register hook: [`src/instrumentation.ts`](../../src/instrumentation.ts) (minimal; full alerts → oleada 2)
- **No DSN → no-op** (safe for local/CI without secrets)

## Env

```bash
NEXT_PUBLIC_SENTRY_DSN=https://…@….ingest.sentry.io/…
```

Optional: `SENTRY_DSN` for server-only override.

## Sample rates

| Signal | Rate | Rationale |
|--------|------|-----------|
| `tracesSampleRate` | `0.05` | Portfolio traffic; enough to see spikes |
| Session replay | `0` | Privacy + cost; enable later if needed |

## CSP

`security-headers.ts` allows Sentry CDN + ingest hosts. Rebuild after DSN region change if you use a non-default ingest host.

## Verify

1. Set DSN in Vercel env (Production + Preview).
2. Deploy, open site, throw a test via browser console: `throw new Error("sentry-smoke")` (or temporary button).
3. Confirm event in Sentry Issues within ~1 min.
