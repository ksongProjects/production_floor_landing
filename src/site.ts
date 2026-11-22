/** Links and copy shared across the landing page. Change them here, not in components. */
export const SITE = {
  name: "FloorOS",
  tagline:
    "FloorOS, for all your company's production, automation, operation, planning, reporting and management needs.",
  description:
    "FloorOS is the live operating system for your shop floor — connecting C-level directors " +
    "(FloorOS Executive Suite), plant managers and leads (FloorOS Manager), and skilled trades " +
    "operators (FloorOS Pro) on one real-time model.",
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
