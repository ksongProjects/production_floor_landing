const ROLES = [
  {
    tag: "C-Level & Directors",
    title: "FloorOS Executive Suite",
    text: "One live picture of every plant, department and shift — built for leadership visibility and daily operational alignment.",
    items: [
      "Live department flow and headcount across every site and time zone",
      "Executive dashboards for throughput, bottleneck impact and improvement ROI",
      "Connected to team channels, daily schedules and morning huddles",
      "Enterprise single sign-on (OIDC & SAML), AI budget controls and full audit trail",
    ],
  },
  {
    tag: "Managers, Planners & Leads",
    title: "FloorOS Manager",
    text: "Lay out the floor, schedule orders and crews, spot delays early, and let automation handle routine follow-ups.",
    items: [
      "Interactive 2D & 3D floor map plus a live station Board with pace bars",
      "ERP order import, multi-step job templates and inbound supplier tracking",
      "Shift rosters, live clock-in availability and training qualification gates",
      "One-click job dispatch, visual automation rules and AI floor suggestions",
    ],
  },
  {
    tag: "Floor Workers & Trades Operators",
    title: "FloorOS Pro",
    text: "Fast, no-nonsense tools on the crew's own phones — scan in, build, move material and share shop know-how without paperwork.",
    items: [
      "One QR scan to start work at a station or close a material move",
      "Live pace timer, piece counts, step drawings and watch-out reminders",
      "Push-to-talk voice notes transcribed straight to leads in seconds",
      "Ask AI assistant for step-by-step answers — works offline in dead zones",
    ],
  },
];

export function Roles() {
  return (
    <section className="screen" id="roles">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">One operating system, three suites</p>
          <h2>Built for the boardroom, the plant office and the bays.</h2>
          <p className="lead">
            FloorOS sits alongside your ERP to connect executives, plant managers and skilled trades
            on one live operating system — with a dedicated experience for every role.
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
