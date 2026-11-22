const COLUMNS = [
  {
    chip: "Available now",
    tone: "ok",
    done: true,
    title: "Executive Suite, Manager & FloorOS Pro",
    items: [
      "FloorOS Executive Suite: multi-site Company view, dashboards, daily schedules & huddle reports",
      "FloorOS Manager: 2D/3D builder, live Board, orders, CSV import, suppliers & Automate workflows",
      "FloorOS Pro (Android): offline QR scan, pieces, move jobs, voice notes and mobile views",
      "Bottleneck analysis with AI root-cause fixes and before / after improvement tracking",
      "Knowledge base, live phone-to-web transcripts, Ask assistant and operational advisor",
      "Rosters, clock-in, training sign-off, Glass UI and enterprise OIDC / SAML SSO",
    ],
  },
  {
    chip: "Next",
    tone: "",
    done: false,
    title: "Team integrations, Mail & iOS",
    items: [
      "Microsoft Teams, Slack and daily calendar / schedule sync for FloorOS Executive Suite",
      "Email delivery for shift, meeting and weekly bottleneck reports, plus forgot password",
      "Departments and Company live view in FloorOS Pro on Android",
      "French voice transcription and assistant answers for bilingual sites",
      "FloorOS Pro for iPhone via TestFlight with APNs push notifications",
    ],
  },
  {
    chip: "Later",
    tone: "idle",
    done: false,
    title: "Enterprise assurance & integrations",
    items: [
      "MFA for non-SSO accounts, IP allow-lists and SCIM user provisioning",
      "SOC 2 compliance and external penetration testing",
      "Canada-hosted data residency and packaged on-prem installs",
      "Direct ERP connectors and machine / PLC telemetry",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="screen" id="roadmap">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Roadmap</p>
          <h2>Honest about what runs today — and what comes next.</h2>
          <p className="lead">
            Every release ships directly to the floor. Here is what is live now and what is on deck.
          </p>
        </div>
        <div className="timeline">
          {COLUMNS.map((c) => (
            <article key={c.title} className={`reveal${c.done ? " done" : ""}`}>
              <span className={`chip ${c.tone}`}>{c.chip}</span>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
