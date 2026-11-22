const COLUMNS = [
  {
    chip: "Available now",
    tone: "ok",
    done: true,
    title: "Executive Suite, Manager & FloorOS Pro",
    items: [
      "FloorOS Executive Suite: multi-site Company live view, KPI dashboards, daily schedules & huddle sheets",
      "FloorOS Manager: 2D/3D floor builder, live Board, ERP CSV import, supplier tracking & visual automation",
      "FloorOS Pro (Android): offline QR scan, piece tracking, material move jobs and live voice notes",
      "Bottleneck analysis engine with AI root-cause explanations and before / after improvement ROI",
      "Central knowledge base, phone-to-web transcripts, cited Ask AI assistant and live floor advisor",
      "Shift rosters, clock-in presence, training sign-offs, Glass UI and OIDC / SAML single sign-on",
    ],
  },
  {
    chip: "Next",
    tone: "",
    done: false,
    title: "Team integrations, Mail & iOS",
    items: [
      "Direct Microsoft Teams, Slack and calendar schedule sync for FloorOS Executive Suite",
      "Automated email delivery for shift, huddle and weekly bottleneck reports",
      "Multi-site Company view and department filters inside FloorOS Pro on Android",
      "French voice transcription and bilingual Ask AI support for Canadian plants",
      "FloorOS Pro for iPhone with native push notifications",
    ],
  },
  {
    chip: "Later",
    tone: "idle",
    done: false,
    title: "Enterprise assurance & connectors",
    items: [
      "Multi-factor authentication for non-SSO logins, IP allow-lists and SCIM directory sync",
      "SOC 2 Type II certification and independent penetration testing",
      "Dedicated Canadian data-residency hosting and turnkey on-prem appliances",
      "Two-way ERP connectors and direct machine / PLC telemetry",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="screen" id="roadmap">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Roadmap</p>
          <h2>Built in the open. Shipped straight to the floor.</h2>
          <p className="lead">
            What runs in production today, what is shipping next, and where we are taking enterprise
            integrations.
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
