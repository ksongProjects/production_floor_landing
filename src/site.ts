/** Links and copy shared across the landing page. Change them here, not in components. */
export const SITE = {
  name: "Production Floor",
  tagline: "Build your floor. Send the work. Automate the rest.",
  description:
    "Production Floor is one place to lay out a production floor, plan work from job templates, " +
    "send jobs to people and teams, and automate what happens next with custom workflows — on the web and on Android.",
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
