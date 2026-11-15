import { contactHref } from "@/site";

type Tier = {
  name: string;
  blurb: string;
  /** Monthly base price per company, in USD. Missing for a quote-only tier. */
  base?: number;
  perSite?: number;
  perUser?: number;
  /** First line of the feature list, e.g. "Everything in Essentials, plus:". */
  intro?: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Essentials",
    blurb: "One site, run live from the web and the phone.",
    base: 50,
    perSite: 15,
    perUser: 3,
    features: [
      "One site",
      "Floor builder with station QR codes",
      "Job templates and work orders",
      "Jobs and notices to people, teams and floors",
      "Android app that works offline",
      "Live dashboard",
      "Roles and sign-up approval",
      "Weekly backups",
    ],
    cta: "Get started",
  },
  {
    name: "Professional",
    blurb: "Every site, with reports and pace for the people who run them.",
    base: 100,
    perSite: 25,
    perUser: 5,
    intro: "Everything in Essentials, plus:",
    features: [
      "Unlimited sites, each floor in its own time zone",
      "Reports by shift, day, station or person",
      "Pace against expected time",
      "CSV export",
      "Audit log",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Teams",
    blurb: "For operations that want the floor to run itself.",
    intro: "Everything in Professional, plus:",
    features: [
      "Workflow builder",
      "Auto-assign to the next available person",
      "Shift and meeting reports",
      "Onboarding and priority support",
      "Custom terms and invoicing",
    ],
    cta: "Contact us",
  },
];

export function Pricing() {
  return (
    <section className="screen alt" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Pricing</p>
          <h2 id="pricing-title">Pay for the sites and people you have.</h2>
          <p className="lead">
            One price per company, plus each site and each person who signs in. Monthly, no setup
            fee.
          </p>
        </div>
        <div className="tiers">
          {TIERS.map((t) => (
            <article className={`tier reveal${t.featured ? " featured" : ""}`} key={t.name}>
              {t.featured ? <span className="tier-badge">Most popular</span> : null}
              <h3>{t.name}</h3>
              <p className="tier-blurb">{t.blurb}</p>
              {t.base !== undefined ? (
                <div className="tier-price">
                  <p>
                    <span className="tier-amount">${t.base}</span>
                    <span className="tier-unit"> / company / month</span>
                  </p>
                  <p className="tier-extra">
                    + ${t.perSite} per site · + ${t.perUser} per user
                  </p>
                </div>
              ) : (
                <div className="tier-price">
                  <p>
                    <span className="tier-amount">Custom</span>
                  </p>
                  <p className="tier-extra">Priced for your sites and teams</p>
                </div>
              )}
              <a className={`btn ${t.featured ? "primary" : "ghost"}`} href={contactHref}>
                {t.cta}
              </a>
              {t.intro ? <p className="tier-intro">{t.intro}</p> : null}
              <ul className="checks tier-features">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="tier-note">
          Prices in US dollars, billed monthly. A user is anyone who signs in, on the web or the
          Android app.
        </p>
      </div>
    </section>
  );
}
