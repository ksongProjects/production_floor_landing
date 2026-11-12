/**
 * Public URL of this site, for absolute links in social cards, robots and sitemap.
 * NEXT_PUBLIC_SITE_URL wins; on Vercel the production domain is filled in automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3400");
