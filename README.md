# Evoris Dental Care & Implant Center

Single-page marketing site for Evoris Dental Care & Implant Center (Sector 8, Kharghar, Navi Mumbai), built with **Next.js (App Router) + TypeScript** and shipped as a fully **static site (SSG)** for SEO.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build the static site

```bash
npm run build    # outputs pre-rendered HTML/CSS/JS to ./out
npm run serve    # preview the ./out export locally
```

`next.config.mjs` sets `output: 'export'`, so `npm run build` produces a static
`./out` folder you can host on any static host (Vercel, Netlify, Cloudflare
Pages, GitHub Pages, S3, etc.). No server runtime required.

## SEO

- Per-page metadata (title template, description, keywords, canonical, OpenGraph,
  Twitter, robots) in `app/layout.tsx`.
- **LocalBusiness / `Dentist` JSON-LD** structured data (address, geo, phone,
  opening hours, specialists) for local search and rich results.
- Fonts (Bodoni Moda + Manrope) are self-hosted via `next/font` — no external
  request, no layout shift.

### Before going live

- Set `SITE_URL` in `app/layout.tsx` to the real domain.
- Add an OG/social image at `public/og.jpg` (referenced by metadata and JSON-LD),
  and confirm the clinic's exact `geo` coordinates.

## Project layout

```
app/
  layout.tsx        # fonts, metadata, JSON-LD, <html>/<body>
  page.tsx          # all page sections (server component)
  globals.css       # full design system / styles
components/
  BookForm.tsx          # appointment form (client)
  SiteEnhancements.tsx  # scroll reveals + small client behaviours
legacy/
  index.html        # original single-file demo, kept for reference
```
