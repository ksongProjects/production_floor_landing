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
        height={66}
        rx={12}
        fill={accent ? "var(--accent)" : "var(--surface)"}
        stroke={accent ? "none" : "var(--border)"}
      />
      <text
        x={x + w / 2}
        y={y + 28}
        textAnchor="middle"
        fontSize="13.5"
        fontWeight="700"
        fill={accent ? "var(--accent-text)" : "var(--text)"}
        {...T}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + 48}
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
  return <path d={d} fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 5" />;
}

function Diagram() {
  return (
    <svg
      viewBox="0 0 440 340"
      role="img"
      aria-label="FloorOS Executive Suite, Manager and FloorOS Pro connect in real time to one server and PostgreSQL database"
    >
      <Box
        x={10}
        y={10}
        w={195}
        title="Executive &amp; Manager"
        sub="Web · Dashboards · Board · 3D"
      />
      <Box x={235} y={10} w={195} title="FloorOS Pro" sub="Android · QR · Voice · Offline" />
      <Wire d="M107 76 V114 H190 V152" />
      <Wire d="M332 76 V114 H250 V152" />
      <text x="220" y="106" textAnchor="middle" fontSize="10.5" fill="var(--muted)" {...T}>
        HTTPS &amp; live WebSockets
      </text>
      <Box
        x={70}
        y={152}
        w={300}
        title="FloorOS Server &amp; Realtime Gateway"
        sub="API · Automate · Single sign-on · AI &amp; Voice"
        accent
      />
      <Wire d="M220 218 V260" />
      <Box
        x={70}
        y={260}
        w={300}
        title="PostgreSQL"
        sub="Single source of truth · Hybrid search · Backups"
      />
    </svg>
  );
}

export function Platform() {
  return (
    <section className="screen alt" id="platform">
      <div className="wrap platform">
        <div className="reveal">
          <p className="eyebrow">Platform &amp; Security</p>
          <h2>Built for plant-floor reliability and enterprise scale.</h2>
          <p className="lead">
            Every web screen and mobile phone shares one live connection and one source of truth —
            load-tested to 1,000 concurrent viewers on a floor and 5,000 employees across sites,
            with enterprise SSO, full audit trails and a crisp Glass UI for tablets and phones.
          </p>
          <div className="deploy">
            <div>
              <h3>Managed Cloud &amp; SSO</h3>
              <p>
                Hosted and monitored with nightly backups. Sign in with Microsoft Entra ID, Okta or
                Google over OIDC / SAML with automatic group-to-role mapping.
              </p>
            </div>
            <div>
              <h3>On-Prem &amp; AI Control</h3>
              <p>
                Deploy inside your own plant network with Docker. Bring your own Anthropic, OpenAI
                or Google key with a monthly budget cap — or run 100% AI-free.
              </p>
            </div>
          </div>
        </div>
        <div className="art reveal">
          <Diagram />
        </div>
      </div>
    </section>
  );
}
