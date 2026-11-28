type Suite = {
  tag: string;
  title: string;
  sub: string;
  major: { title: string; detail: string }[];
  groups: { category: string; items: string[] }[];
};

const SUITES: Suite[] = [
  {
    tag: "C-Level & Directors",
    title: "Executive",
    sub: "Every site on one live map, with the numbers and the bottleneck.",
    major: [
      {
        title: "Command center",
        detail: "All plants on one map. Click a site for live numbers and what needs attention.",
      },
      {
        title: "Company and line view",
        detail: "Units per department and per stage, from supply to shipping, across sites.",
      },
      {
        title: "Bottlenecks with proof",
        detail: "The step that limits output, why, and before / after results of each fix.",
      },
      {
        title: "Status email, SSO and API",
        detail: "AI-drafted updates from live figures, single sign-on, API keys and webhooks.",
      },
    ],
    groups: [
      {
        category: "Command center and company",
        items: [
          "Every site on one map with state, headcount and attention count",
          "Site details: output, on-pace share, active stations, current bottleneck",
          "Company view: units per department, each site on its own clock",
          "Line view: units per stage and state across floors and sites",
          "AI-drafted status email, sent from your Google or Microsoft mailbox",
        ],
      },
      {
        category: "Reports",
        items: [
          "Bottleneck report with checked causes and suggested fixes",
          "Before / after tracking for each improvement",
          "Shift reports 15 minutes after shift end",
          "Meeting sheets and CSV export of every report",
        ],
      },
      {
        category: "Security and integration",
        items: [
          "SSO with Microsoft Entra ID, Okta and Google (OIDC and SAML 2.0)",
          "Roles per site and floor, audit log, nightly backups",
          "API keys and signed webhooks for your ERP or warehouse system",
          "AI off until enabled, with a monthly budget cap",
        ],
      },
    ],
  },
  {
    tag: "Managers, Planners & Leads",
    title: "Manager",
    sub: "The live floor: every unit and station, workflows, orders and reports.",
    major: [
      {
        title: "Live floor map and Board",
        detail: "Every unit by state: being worked, ready, waiting, moving or blocked.",
      },
      {
        title: "Workflows",
        detail: "Send a job to the first free, trained person when something happens.",
      },
      {
        title: "Orders, lines and inventory",
        detail: "Orders to units to tasks, line stages, and short parts from your ERP.",
      },
      {
        title: "Knowledge and Ask AI",
        detail: "Approve SOP changes from voice notes. Ask and get answers with sources.",
      },
    ],
    groups: [
      {
        category: "Live floor",
        items: [
          "Flat live map with unit and station cards on hover",
          "Status strip that counts and filters units by state",
          "Present mode for a wall screen",
          "Board with pace bars, delayed stations first",
          "Floor builder with printable station and zone QR codes",
        ],
      },
      {
        category: "Orders, lines and supply",
        items: [
          "Orders, line items, units and step-by-step tasks",
          "Order import from CSV with a preview before saving",
          "Line view per floor, with Supply as the first stage",
          "Inventory mirror by CSV or API: short parts flag the units they hold up",
          "Inbound supplier lines: expected, received, kitted, late",
        ],
      },
      {
        category: "Automate, people and knowledge",
        items: [
          "Workflow builder with dry-run, run history and a kill switch",
          "Who is here, shifts and training sign-off with expiry",
          "Inbox: send jobs and notices to a person, team, role or floor",
          "Knowledge base with a safety-first review queue",
          "Advisor suggestions a person accepts or dismisses",
        ],
      },
    ],
  },
  {
    tag: "Floor Workers & Trades Operators",
    title: "Pro",
    sub: "The Android app for the floor: scan, work, speak, ask. Works offline.",
    major: [
      {
        title: "One scan to start",
        detail: "Scan a station or zone QR to start a task or close a move job.",
      },
      {
        title: "Hold-to-talk voice notes",
        detail: "Speak mid-task. The transcript reaches the web in seconds.",
      },
      {
        title: "Watch-outs and Ask AI",
        detail: "Safety and quality reminders at task start, answers with sources.",
      },
      {
        title: "Offline queue",
        detail: "Keep working without Wi-Fi. Everything syncs once, back in range.",
      },
    ],
    groups: [
      {
        category: "Station work",
        items: [
          "QR scanner for stations, machines and zones",
          "Timer with pace against expected time",
          "Piece counter, pause, resume and finish",
          "Job steps with drawings and photo capture",
          "Move-job queue for material handlers",
        ],
      },
      {
        category: "Voice, knowledge and AI",
        items: [
          "Voice notes on any task, also offline",
          "Watch-out sheet when work starts",
          "Ask AI from approved SOPs, with sources",
          "Offline copy of the articles for your floor",
        ],
      },
      {
        category: "Shifts and lead tools",
        items: [
          "Clock in and out, My shifts, My training",
          "Inbox with push notifications",
          "Manager mode: floor overview, live units, Who is here",
          "Single sign-on on the phone",
        ],
      },
    ],
  },
];

export function Roles() {
  return (
    <section className="screen" id="roles">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Three suites · One live model</p>
          <h2>Built for the boardroom, the plant office and the bays.</h2>
          <p className="lead">
            What each role gets. Expand a suite for the full list.
          </p>
        </div>
        <div className="roles">
          {SUITES.map((s) => {
            const total = s.major.length + s.groups.reduce((sum, g) => sum + g.items.length, 0);
            return (
              <article className="role suite-card reveal" key={s.title}>
                <div>
                  <span className="tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.sub}</p>
                </div>

                <div className="major-list" aria-label={`${s.title} major features`}>
                  <div className="major-head">★ Highlights</div>
                  {s.major.map((m) => (
                    <div className="major-item" key={m.title}>
                      <strong>{m.title}</strong>
                      <span>{m.detail}</span>
                    </div>
                  ))}
                </div>

                <details className="suite-expand">
                  <summary>
                    <span>Full list ({total} features)</span>
                    <span className="expand-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="suite-groups">
                    {s.groups.map((g) => (
                      <div className="suite-group" key={g.category}>
                        <h4>{g.category}</h4>
                        <ul>
                          {g.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
