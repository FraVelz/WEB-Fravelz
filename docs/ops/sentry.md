# Sentry + alerts (2026-07-15, Oleada 2 / A2-3)

## Behavior

- Client init: [`src/instrumentation-client.ts`](../../src/instrumentation-client.ts)
- Server register hook: [`src/instrumentation.ts`](../../src/instrumentation.ts)
- **No DSN → no-op** (safe for local/CI without secrets)

## Env (humano — no commitear secretos)

| Variable | Dónde | Notas |
|----------|-------|-------|
| `NEXT_PUBLIC_SENTRY_DSN` | Vercel → Project → Settings → Environment Variables (Production + Preview) | Client + server fallback |
| `SENTRY_DSN` | Opcional, server-only override | Prefer same project DSN |

```bash
NEXT_PUBLIC_SENTRY_DSN=https://…@….ingest.sentry.io/…
```

**Residual:** el DSN y la creación del proyecto Sentry requieren acción humana (cuenta Sentry + pegar en Vercel). Sin DSN, el código queda inerte y las alertas no disparan.

## Sample rates

| Signal | Rate | Rationale |
|--------|------|-----------|
| `tracesSampleRate` | `0.05` | Portfolio traffic; enough to see spikes |
| Session replay | `0` | Privacy + cost; enable later if needed |

## CSP

`security-headers.ts` allows Sentry CDN + ingest hosts. Rebuild after DSN region change if you use a non-default ingest host.

## Alert: error spike (Sentry) — setup checklist

Goal: notify when client/server error volume spikes on production.

1. Open [Sentry](https://sentry.io) → project for `WEB-Fravelz` (create if missing).
2. **Alerts → Create Alert → Issues** (or Metric Alert → `count()` of errors).
3. Recommended Issue alert:
   - When: **Number of events in an issue** is above **20** in **1 hour** (tune after baseline week).
   - Filter: `environment:production` (and optionally `level:error`).
   - Action: Email (owner) and/or Slack webhook.
4. Optional Metric alert (error rate spike):
   - Metric: `count()` · Filter `event.type:error` · Environment `production`.
   - Critical: **> 50** events in **10 minutes** (portfolio is low traffic — keep thresholds low).
5. Paste DSN into Vercel env → Redeploy Production.
6. Smoke: browser console on prod `throw new Error("sentry-smoke-oleada2")` → confirm Issue + that alert would fire if threshold met (or use Sentry “Send test notification”).

Document the alert name as **`portfolio-error-spike`** so runbook/incident notes can reference it.

## Fallback: Vercel monitoring (if Sentry DSN deferred)

If Sentry is not yet wired:

1. Vercel → Project → **Observability / Logs** (or Monitoring, plan-dependent).
2. Enable **Error** notifications / Webhook for failed Serverless/Edge invocations if available on the plan.
3. Vercel → **Deployments**: failed Production deploy email (default account notifications).
4. Note honestly in hiring demos: “Sentry client is coded; DSN/alert pending” until step 5 above is done.

## Verify

1. Set DSN in Vercel env (Production + Preview).
2. Deploy, open site, throw a test via browser console: `throw new Error("sentry-smoke")`.
3. Confirm event in Sentry Issues within ~1 min.
4. Confirm alert rule `portfolio-error-spike` exists (screenshot → `docs/ops/incidents/` when first verified).
