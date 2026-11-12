# Landing page

Public marketing page for Production Floor: what it does, the five-step workflow, features,
platform and roadmap, with links to sign in to the platform and to contact us.

- Next.js with `output: "export"`: `next build` writes plain static files to `out/`.
- Server components only, no client code of its own. Illustrations are inline SVG drawn at build
  time; scroll reveals are CSS only and switch off with reduced motion.
- Light and dark themes follow the visitor's system setting.

## Edit

Links and the contact address live in [`src/site.ts`](src/site.ts). Each section is one file in
[`src/components`](src/components); the page order is in [`src/app/page.tsx`](src/app/page.tsx).

```
pnpm --filter @pf/landing dev      # http://localhost:3400
pnpm --filter @pf/landing build    # static site in apps/landing/out
```

## Deploy on Vercel (free Hobby plan)

1. In Vercel, **Add New → Project** and import `ksongProjects/production_floor`.
2. Set **Root Directory** to `apps/landing`. Vercel detects Next.js and pnpm from the repo.
3. Leave build and output settings at their defaults and deploy.
4. Optional: add a custom domain; set `NEXT_PUBLIC_SITE_URL` if it differs from the Vercel
   production domain (used for social cards, robots and sitemap).

`vercel.json` skips builds when a commit does not touch this app or the lockfile, and adds basic
security headers. Production deploys follow `main`; other branches get preview URLs.

The page links to the production platform at
https://production-floor-prod.up.railway.app; it does not call it.
