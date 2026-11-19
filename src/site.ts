/** Links and copy shared across the landing page. Change them here, not in components. */
export const SITE = {
  name: "Production Floor",
  tagline: "Find the bottleneck. Cut the downtime.",
  description:
    "Production Floor shows you, live, where your floor is losing time: people waiting for work, " +
    "units piling up in front of one bay, problems nobody reported. Then it closes the routine gaps " +
    "for you, on the web and on Android.",
  platformUrl: "https://production-floor-prod.up.railway.app",
  signInUrl: "https://production-floor-prod.up.railway.app/login",
  androidAppUrl:
    "https://github.com/ksongProjects/production_floor_android/releases/latest/download/production-floor.apk",
  /** Public status page (UptimeRobot), outside our own hosting so it loads during outages. */
  statusUrl: "https://stats.uptimerobot.com/mfL8H7OSSJ",
  contactEmail: "ksongprojects@gmail.com",
} as const;

export const contactHref = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
  `${SITE.name} enquiry`,
)}`;
