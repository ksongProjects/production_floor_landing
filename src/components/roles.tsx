const ROLES = [
  {
    tag: "C-Level & Directors",
    title: "FloorOS Executive Suite",
    text: "Company-wide live visibility, executive dashboards, and seamless alignment with your teams and daily schedules.",
    items: [
      "Multi-site Company view & animated department flow",
      "Executive dashboards, KPIs and bottleneck ROI tracking",
      "Integrations with teams, daily schedules & morning huddles",
      "Enterprise OIDC / SAML SSO, AI spend caps and audit trail",
    ],
  },
  {
    tag: "Managers, Planners & Leads",
    title: "FloorOS Manager",
    text: "Design the floor, schedule orders and rosters, dispatch jobs and let visual workflows close the gaps.",
    items: [
      "2D & 3D floor builder, live Board and station pace bars",
      "Custom orders, CSV import, job templates & supplier tracking",
      "Shift rosters, Who is here clock-in and training sign-off",
      "Dispatch inbox, Automate workflows, Knowledge review & AI advisor",
    ],
  },
  {
    tag: "Floor Workers & Trades Operators",
    title: "FloorOS Pro",
    text: "Built for skilled trades and operators on the floor — scan in, track pace, move units and capture know-how hands-free.",
    items: [
      "Station & zone QR scan on Android — works offline",
      "Pieces, pace timer, job step guides and move jobs",
      "Hold-to-record voice notes streamed live to the web",
      "Watch-out step warnings and Ask AI troubleshooting assistant",
    ],
  },
];

export function Roles() {
  return (
    <section className="screen" id="roles">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">One operating system, three suites</p>
          <h2>Purpose-built for the boardroom, the office and the bays.</h2>
          <p className="lead">
            FloorOS sits beside your ERP and connects leadership, managers and trades professionals
            on the same live data — with each suite tailored to how that role works.
          </p>
        </div>
        <div className="roles">
          {ROLES.map((r) => (
            <article className="role reveal" key={r.title}>
              <span className="tag">{r.tag}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <ul>
                {r.items.map((i) => (
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
