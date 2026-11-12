/** Links and copy shared across the landing page. Change them here, not in components. */
export const SITE = {
  name: "Production Floor",
  tagline: "Design your floor. Staff it. Watch work move, live.",
  description:
    "Production Floor is one place to lay out a production floor, plan work orders, put people " +
    "at stations with a phone scan, and watch progress live — on web and mobile.",
  platformUrl: "https://production-floor-prod.up.railway.app",
  signInUrl: "https://production-floor-prod.up.railway.app/login",
  androidAppUrl:
    "https://github.com/ksongProjects/production-floor-android/releases/latest/download/production-floor.apk",
  // TODO: replace with the real contact address before launch.
  contactEmail: "hello@example.com",
} as const;

export const contactHref = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
  `${SITE.name} enquiry`,
)}`;
