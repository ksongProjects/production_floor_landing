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
    title: "FloorOS Executive Suite",
    sub: "3D Command Center globe, multi-site live flow, executive KPIs and AI-drafted email.",
    major: [
      {
        title: "3D Command Center Globe & Stacked Floors",
        detail: "Zoom from a live dot-matrix globe of every plant into stacked 3D floor plates and live bays.",
      },
      {
        title: "Multi-Site Company Live View",
        detail: "Animated 8-department flow, local shift clocks and live status across every plant.",
      },
      {
        title: "Bottleneck Analytics & Measured Improvements",
        detail: "Pinpoint the step limiting output over weeks and measure before / after gains.",
      },
      {
        title: "AI Email Writer, SSO & Governance",
        detail: "Draft verified updates to Google or Microsoft mail, plus OIDC/SAML 2.0 SSO and AI budget caps.",
      },
    ],
    groups: [
      {
        category: "Command Center & Multi-Site Live View",
        items: [
          "Interactive 3D dot-matrix globe zooming smoothly through company, region, site and floor layers",
          "Stacked translucent site floor plates with live zone heat and floor switcher",
          "Floating glass Details window with 2-second KPIs, 8-hour sparklines and active bottleneck",
          "AI-drafted email from live on-screen metrics sent via linked Google or Microsoft mailbox",
          "Live 8-department flow strip with animated unit tokens and late supplier PO alerts",
          "Virtualised 5,000+ employee live status table (Working, Idle, Break, Moving, Off)",
        ],
      },
      {
        category: "Dashboards, Reports & Schedules",
        items: [
          "Executive throughput, utilisation and capacity-gap bottleneck dashboards",
          "AI bottleneck explanations with every quoted figure verified against floor SQL metrics",
          "Before / after improvement tracking across agreed review windows",
          "Automated shift reports 15 minutes after shift end",
          "Printable morning huddle & daily meeting schedule sheets",
          "Work, pace, job and unit-flow reports with one-click CSV export",
        ],
      },
      {
        category: "Security, Identity & AI Governance",
        items: [
          "Microsoft Entra ID, Okta & Google Workspace SSO (OIDC & SAML 2.0)",
          "Enforced SSO per email domain with emergency break-glass admin accounts",
          "Automatic identity-provider group-to-role mapping and just-in-time provisioning",
          "Per-company AI opt-in switch, monthly USD budget cap and per-feature usage log",
          "Strict tenant isolation, server-checked RBAC and encrypted OAuth mail tokens",
          "Tamper-evident audit log for access, role, SSO, training, email and SOP changes",
          "Nightly encrypted backups with 14-day retention and external health monitoring",
        ],
      },
    ],
  },
  {
    tag: "Managers, Planners & Leads",
    title: "FloorOS Manager",
    sub: "Full live visibility, 3D moving-outline floor map, QR workflows, orders & AI advisor.",
    major: [
      {
        title: "Live Station Board & Moving-Outline 3D Map",
        detail: "Pace bars, Today's numbers and glowing 3D floor outlines; delayed bays float to the top.",
      },
      {
        title: "QR-Driven Visual Automate Workflows",
        detail: "Auto-dispatch the first free, clocked-in, trained person when events happen on the floor.",
      },
      {
        title: "Orders, Templates & Inbound Suppliers",
        detail: "ERP CSV import with diff preview, multi-step job templates and late supplier PO alerts.",
      },
      {
        title: "Central Knowledge Base, Review & Ask AI",
        detail: "Approve voice-note SOP proposals, track Knowledge Gaps and accept live AI advisor moves.",
      },
    ],
    groups: [
      {
        category: "Floor Builder, Board & 3D Map",
        items: [
          "Two-layer Glass UI shell with interactive 2D blueprint and 3D isometric floor builder",
          "Glowing moving-outline 3D live map highlighting full, blocked and bottleneck zones",
          "Stations, machines, racks, walls, paths, zones and custom polygon shapes",
          "Printable QR code sheets for every station, machine and zone",
          "Live Board with station cards, expected-time pace bars and Bottleneck badges",
          "Ranked Needs Attention queue showing waiting units, delays and blocked bays",
        ],
      },
      {
        category: "Orders, Shop Flow & Suppliers",
        items: [
          "Custom orders → line items → individual units → step-by-step tasks",
          "CSV order import from ERP with full diff preview before saving",
          "Reusable job templates with expected time ranges, drawings, photos and step dependencies",
          "Inbound supplier material tracking (PO, expected date, received, kitted, late alerts)",
          "Automatic zone-to-zone routing by department, purpose and free capacity",
          "Material move jobs closed by scanning destination zone QR codes",
        ],
      },
      {
        category: "Dispatch, Automate, Knowledge & People",
        items: [
          "Dispatch inbox: send jobs & notices to a person, team, trade role or floor",
          "Visual workflow builder on job, task, unit, zone and team-availability triggers",
          "First-free routing verifying live clock-in presence, workload and valid training",
          "Dry-run workflow testing on historical events, step logs and one-click kill switch",
          "Shift rosters, live Who is Here availability and training sign-off with expiry dates",
          "Central Knowledge Base with Markdown editor, version rollback and AI safety review queue",
          "Ask AI assistant (Ctrl + J) with clickable SOP citations and live floor context",
          "Live AI operational advisor strip with one-click Accept or Dismiss",
        ],
      },
    ],
  },
  {
    tag: "Floor Workers & Trades Operators",
    title: "FloorOS Pro",
    sub: "Android app for skilled trades — QR scans, pace, voice notes, Ask AI & offline sync.",
    major: [
      {
        title: "One-Scan Station & Zone QR",
        detail: "Start tasks, log pieces or finish material move jobs in one tap on Android.",
      },
      {
        title: "Push-to-Talk Live Voice Notes",
        detail: "Hold to speak mid-task; audio chunks stream to a live web transcript in seconds.",
      },
      {
        title: "Watch-Out Alerts & Cited Ask AI",
        detail: "See safety and quality reminders on task start, or ask cited SOP questions.",
      },
      {
        title: "Offline Dead-Zone Queue",
        detail: "Keep working with zero Wi-Fi; idempotent queue syncs safely when back in range.",
      },
    ],
    groups: [
      {
        category: "Station Work & Material Moves",
        items: [
          "Instant QR camera scanner for stations, machines and destination zones",
          "Live session timer with pace indicator against expected step time",
          "One-tap piece counter, pause / resume, finish and job feedback prompt",
          "Swipeable job steps carousel with attached drawings, SOP links and photo capture",
          "Dedicated material handler move-job queue closed by destination zone scan",
          "Offline command & photo queue with automatic background replay and deduplication",
        ],
      },
      {
        category: "Voice Notes, Knowledge & AI",
        items: [
          "Hold-to-record voice notes on any active task or job thread (works offline)",
          "Live transcript appears under recording and streams to web in real time",
          "Automatic Watch-Out sheet on work start showing linked safety & quality tips",
          "Ask AI chat assistant answering from approved company SOPs with source links",
          "Offline cache of knowledge articles linked to the operator's assigned floor",
        ],
      },
      {
        category: "Shifts, Inbox & Mobile Lead Tools",
        items: [
          "One-tap shift clock in / out with local floor time and shift-end reminders",
          "Personal Inbox with push notifications for assigned jobs, replies and notices",
          "My Shifts schedule, My Training credentials and self-registration with approval",
          "Mobile Manager mode: floor overview, station cards, Who is Here and quick job dispatch",
          "Mobile single sign-on (OIDC & SAML) via system browser deep link",
          "Translucent Glass UI with dark / light theme, haptics and 44px touch targets",
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
            Highlight what matters most to each role — or expand any suite to inspect every shipped
            capability.
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
                  <div className="major-head">★ Major highlights</div>
                  {s.major.map((m) => (
                    <div className="major-item" key={m.title}>
                      <strong>{m.title}</strong>
                      <span>{m.detail}</span>
                    </div>
                  ))}
                </div>

                <details className="suite-expand">
                  <summary>
                    <span>View complete feature list ({total} features)</span>
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
