# Terminal + diary portfolio — repo integration

Drop these files into the root of `jacqlinegeng.github.io`, overwriting on conflict.

## What's inside

| Path | Action | What it is |
|---|---|---|
| `index.html` | **replace** | Proper Vite entry (fonts via Google Fonts, mounts `/src/main.tsx`). Your current index.html is a 1.9 MB standalone bundle — this replaces it. |
| `src/main.tsx` | **replace** | Mounts the app. |
| `src/App.tsx` | **replace** | Renders the portfolio for the whole site. No react-router needed — navigation is hash-based (`#about`, `#projects`, `#writing`, `#reading`, `#contact`) and handled by the portfolio logic, so deep links like `/#writing` work on GitHub Pages. |
| `src/pages/Portfolio.tsx` | **new** | The static shell (terminal screen + sidebar/site screen) in TSX; boots the logic in `useEffect`. |
| `src/portfolio/app.ts` | **new** | All interaction logic (terminal boot/typing, router, pages, modals), converted from the standalone build into an exported `initPortfolio()` with a double-mount guard. |
| `src/portfolio/content.ts` | **new** | All your content (about, experience, projects, notes, books, links). **Edit this file to update text.** |
| `src/portfolio/portfolio.css` | **new** | Full stylesheet, verbatim from the design. |
| `public/assets/pb-*.png` | **new** | Photobooth strip photos. |
| `public/assets/books/*.jpg` | **new** | 13 book covers, extracted and self-hosted (no more Amazon/Goodreads hotlinks). |

## Steps

1. Copy everything into the repo root (merge `src/` and `public/`, overwrite `index.html`).
2. Commit and push to `main` — your existing GitHub Actions workflow (`npm ci && npm run build` → Pages) handles the rest. Verified: `npm run build` succeeds with these files.
3. Optional cleanup (safe to skip — nothing references these anymore, and Vite won't bundle them):
   - old pages/components: `src/pages/Index.tsx`, `About.tsx`, `Projects.tsx`, `Writing.tsx`, `Reading.tsx`, `src/components/*`
   - old static site: `public/app.js`, `public/data.js`, `public/fonts/`, `public/uploads/`
   - unused deps if you want a lighter install: react-router-dom, radix/shadcn, supabase, tanstack-query

## Notes

- `CNAME` and `favicon.ico` in `public/` are untouched and still copied into the build.
- Fonts (Inter, JetBrains Mono, Instrument Serif, Caveat, Ma Shan Zheng) now load from Google Fonts via `index.html` instead of being inlined (~saves multiple MB).
