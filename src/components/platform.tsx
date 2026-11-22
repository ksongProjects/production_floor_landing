const T = { fontFamily: "system-ui, sans-serif" } as const;

function Box({
  x,
  y,
  w,
  title,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={64}
        rx={12}
        fill={accent ? "var(--accent)" : "var(--surface)"}
        stroke={accent ? "none" : "var(--border)"}
      />
      <text
        x={x + w / 2}
        y={y + 27}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill={accent ? "var(--accent-text)" : "var(--text)"}
        {...T}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + 46}
        textAnchor="middle"
        fontSize="10.5"
        fill={accent ? "var(--accent-text)" : "var(--muted)"}
        {...T}
      >
        {sub}
      </text>
    </g>
  );
}

function Wire({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeDasharray="6 5"
      className="flow-wire"
    />
  );
}

function Diagram() {
  return (
    <svg
      viewBox="0 0 440 330"
      role="img"
      aria-label="FloorOS Executive Suite, Manager and Pro connected over live WebSockets to one server and PostgreSQL"
    >
      <Box x={10} y={10} w={195} title="Executive &amp; Manager" sub="Web · Dashboards · 3D Map" />
      <Box x={235} y={10} w={195} title="FloorOS Pro" sub="Android · QR · Voice · Offline" />
      <Wire d="M107 74 V112 H190 V148" />
      <Wire d="M332 74 V112 H250 V148" />
      <text x="220" y="104" textAnchor="middle" fontSize="10.5" fill="var(--muted)" {...T}>
        HTTPS &amp; live WebSockets
      </text>
      <Box
        x={70}
        y={148}
        w={300}
        title="FloorOS Realtime Server"
        sub="API · Automate · OIDC/SAML · AI &amp; Voice"
        accent
      />
      <Wire d="M220 212 V252" />
      <Box
        x={70}
        y={252}
        w={300}
        title="PostgreSQL"
        sub="Single source of truth · Hybrid search · Backups"
      />
    </svg>
  );
}

const ROADMAP = [
  {
    chip: "Shipped & Live",
    tone: "ok",
    items: [
      "Executive Suite (multi-site flow, KPIs, huddles)",
      "Manager (2D/3D builder, Board, CSV, suppliers, Automate)",
      "FloorOS Pro Android (offline QR, moves, live voice notes)",
      "Bottleneck engine, AI root-cause, Knowledge Base & Ask AI",
      "Rosters, training gates, Glass UI & OIDC / SAML SSO",
    ],
  },
  {
    chip: "Next",
    tone: "",
    items: [
      "MS Teams, Slack & calendar schedule sync",
      "Automated email delivery for shift & bottleneck reports",
      "Company view & department filters on Android",
      "French voice & bilingual AI; FloorOS Pro for iPhone",
    ],
  },
  {
    chip: "Later",
    tone: "idle",
    items: [
      "MFA for non-SSO logins, IP allow-lists & SCIM sync",
      "SOC 2 Type II & external penetration test",
      "Canadian data residency & turnkey on-prem appliances",
      "Two-way ERP connectors & direct PLC machine telemetry",
    ],
  },
];

export function Platform() {
  return (
    <section className="screen" id="platform">
      <div className="wrap">
        <div className="platform">
          <div className="reveal">
            <p className="eyebrow">Platform, Security &amp; Roadmap</p>
            <h2>One realtime core. Cloud or on-prem.</h2>
            <p className="lead">
              Load-tested to 1,000 floor viewers and 5,000 employees across sites. Sign in with
              Entra ID, Okta or Google; bring Anthropic, OpenAI or Google AI keys with a monthly cap
              — or run 100% AI-free.
            </p>
            <div className="deploy">
              <div>
                <h3>Managed Cloud &amp; SSO</h3>
                <p>Hosted with nightly backups, OIDC/SAML group mapping and audit trail.</p>
              </div>
              <div>
                <h3>On-Prem &amp; AI Control</h3>
                <p>Run in your network via Docker with strict spend caps or AI off.</p>
              </div>
            </div>
          </div>
          <div className="art reveal">
            <Diagram />
          </div>
        </div>

        <div className="timeline compact-timeline reveal">
          {ROADMAP.map((col, idx) => (
            <article key={col.chip} className={idx === 0 ? "done" : ""}>
              <span className={`chip ${col.tone}`}>{col.chip}</span>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
