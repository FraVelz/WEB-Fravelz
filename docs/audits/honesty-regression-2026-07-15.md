# Honesty badges regression check (2026-07-15)

Ticket **A1-7** — verify plan-11 honesty badges/copy intact after mid-wave (A1-1…A1-6).

## Checks (all PASS)

| Check | Result |
|-------|--------|
| 10/10 project modules have `honesty: […]` | PASS |
| Contract badges match plan 11 table | PASS (see script below) |
| `ProjectHonestyBadges` wired on card + detail | PASS |
| i18n keys `project_honesty_*` in es/en/ru/zh | PASS (5 keys × 4) |
| PDF modal has **no** `sandbox` | PASS |

## Contract snapshot

| Project module | honesty |
|----------------|---------|
| fravelz-portfolio | terminado |
| icfes-master | piloto |
| web-marcadores | demo |
| starcrypt | piloto, privado |
| eco-bogota | piloto, privado |
| web-todo-list | lab |
| web-prosperity | demo |
| fv-store | demo, privado |
| notas-hacking | lab, terminado |
| frontend-mentor-nextjs | lab |

No code changes required.
