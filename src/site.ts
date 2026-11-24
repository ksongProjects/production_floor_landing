/** Links and copy shared across the landing page. Change them here, not in components. */
export const SITE = {
  name: "FloorOS",
  tagline:
    "FloorOS, for all your production, automation, operation, planning, reporting and management needs.",
  description:
    "FloorOS is the live operating system for manufacturing floors — uniting leadership " +
    "(FloorOS Executive), plant managers and leads (FloorOS Manager), and skilled trades " +
    "operators (FloorOS Pro) to spot bottlenecks and cut downtime.",
  platformUrl: "https://flooros.dev",
  signInUrl: "https://flooros.dev/login",
  androidAppUrl:
    "https://github.com/ksongProjects/production_floor_android/releases/latest/download/production-floor.apk",
  /** Public status page (UptimeRobot), outside our own hosting so it loads during outages. */
  statusUrl: "https://stats.uptimerobot.com/mfL8H7OSSJ",
  contactEmail: "ksongprojects@gmail.com",
} as const;

export const contactHref = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
  `${SITE.name} enquiry`,
)}`;
