# Mental Health Awareness Club

Official website of the **Bishop England Mental Health Awareness Club** — [bemh.club](https://bemh.club).

The Mental Health Awareness Club is a student-led organization. It does not provide counseling, diagnosis, treatment, or emergency services.

## Pages

- `/` — Home: mission, why it matters, what the club does, leadership, and how to join (`/#join`)
- `/support` — Need Support Now
- `/resources` — Resource directory

## Updating content

All copy that changes over time lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `site.ts` | Name, domain, navigation, disclaimer, crisis line text |
| `home.ts` | Values, the three pillars, "first step" guidance |
| `leadership.ts` | Officer names and roles |
| `support.ts` | Need Support Now sections |
| `resources.ts` | Resource directory |

Colors are limited to Bishop England navy, the two greens, a light green tint (`mist`), white, and safety red. Keep red for the Need Support Now button and Call 911 so it stands out.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Fonts: Fraunces and Inter.
