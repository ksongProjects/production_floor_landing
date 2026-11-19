# Landing page

Public marketing page for Production Floor. The message follows the sales pitch
(`docs/sales/pitch.md` in the main repo): **find the bottleneck, cut the downtime.** Sections:
where downtime hides, the five steps (See, Spot, Fix, Track, Start), features, the 30-day
pilot, with links to book a walkthrough and to sign in to the platform.

- Next.js with `output: "export"`: `next build` writes plain static files to `out/`.
- Server components, plus two small client modules:
  - [`scroll-spy.tsx`](src/components/scroll-spy.tsx): highlights the nav link for the section in
    view, the section menu on narrow screens, and the step rail on the right of "How it works"
    (on every screen size).
  - [`visuals/flow.tsx`](src/components/visuals/flow.tsx): the workflow diagram's outcome switch.
- Illustrations are inline SVG and HTML drawn at build time; scroll reveals are CSS only and
  switch off with reduced motion.
- Light and dark themes follow the visitor's system setting.

## Edit

Links, the tagline and the contact address live in [`src/site.ts`](src/site.ts). Pricing is
off the page while it is being reworked; the old tiers are still in
[`src/components/pricing.tsx`](src/components/pricing.tsx) if it comes back. Each section is one file in
[`src/components`](src/components); the page order is in [`src/app/page.tsx`](src/app/page.tsx).

```
pnpm install
pnpm dev      # http://localhost:3400
pnpm build    # static site in out/
```

## Deploy on Vercel (free Hobby plan)

1. In Vercel, **Add New → Project** and import `ksongProjects/production_floor_landing`.
2. Leave **Root Directory** at `./`. Vercel detects Next.js and pnpm (`packageManager`) from the repo.
3. Leave build and output settings at their defaults and deploy.
4. Optional: add a custom domain; set `NEXT_PUBLIC_SITE_URL` if it differs from the Vercel
   production domain (used for social cards, robots and sitemap).

`vercel.json` adds basic security headers. Production deploys follow `main`; other branches get preview URLs.

The page links to the production platform at
https://production-floor-prod.up.railway.app; it does not call it.
