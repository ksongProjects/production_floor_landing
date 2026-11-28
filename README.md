# Landing page

Public marketing page for **FloorOS** (`FloorOS Executive`, `FloorOS Manager`, and
`FloorOS Pro`): live shop-floor visibility, expandable suite feature lists, animated platform
use-case screens and cloud security architecture, with links to sign in to the platform and to
contact us.

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

## Contact form

The **Contact us** section posts a plain HTML form to [Web3Forms](https://web3forms.com), which
emails each message to the project inbox and sends the visitor back to `/thanks`. No server and
no client code on our side.

1. Create a free access key at https://web3forms.com with the inbox address
   (`SITE.contactEmail` in [`src/site.ts`](src/site.ts)); the key arrives by email.
2. In Vercel, add `NEXT_PUBLIC_WEB3FORMS_KEY` with that key (Production and Preview) and
   redeploy. The key is public by design: it can only send mail to that inbox.

Without the key the section shows a mailto button instead of the form. On the free plan the
`/thanks` redirect must stay on the site's own domain, so keep `NEXT_PUBLIC_SITE_URL` (or the
Vercel production domain) pointing at the domain visitors use.

## Deploy on Vercel (free Hobby plan)

1. In Vercel, **Add New → Project** and import `ksongProjects/production_floor`.
2. Set **Root Directory** to `apps/landing`. Vercel detects Next.js and pnpm from the repo.
3. Leave build and output settings at their defaults and deploy.
4. Optional: add a custom domain; set `NEXT_PUBLIC_SITE_URL` if it differs from the Vercel
   production domain (used for social cards, robots and sitemap).

`vercel.json` skips builds when a commit does not touch this app or the lockfile, and adds basic
security headers. Production deploys follow `main`; other branches get preview URLs.

The page links to the production platform at
https://flooros.dev; it does not call it. The only outside call is the contact form post to Web3Forms.
