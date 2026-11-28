import { siteUrl } from "@/site-url";

/** Links and copy shared across the landing page. Change them here, not in components. */
export const SITE = {
  name: "FloorOS",
  tagline:
    "FloorOS, for all your production, automation, operation, planning, reporting and management needs.",
  description:
    "FloorOS is the live operating system for manufacturing floors: every site, station and " +
    "unit live, for leadership, plant managers and operators.",
  platformUrl: "https://prod.flooros.dev",
  signInUrl: "https://prod.flooros.dev/login",
  androidAppUrl:
    "https://github.com/ksongProjects/production_floor_android/releases/latest/download/production-floor.apk",
  /** Public status page (UptimeRobot), outside our own hosting so it loads during outages. */
  statusUrl: "https://stats.uptimerobot.com/mfL8H7OSSJ",
  contactEmail: "ksongprojects@gmail.com",
} as const;

/** In-page contact form section. */
export const contactFormHref = "#contact";

export const contactHref = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
  `${SITE.name} enquiry`,
)}`;

/**
 * Contact form backend (Web3Forms). The access key is public by design: it only lets someone
 * send mail to the inbox it was created for. Set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel; without
 * it the contact section shows the mailto link instead of the form.
 */
export const CONTACT_FORM = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
  redirectUrl: `${siteUrl}/thanks`,
} as const;
