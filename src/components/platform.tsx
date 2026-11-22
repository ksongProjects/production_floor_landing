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
      aria-label="Web app and Android app connect over HTTPS, WebSocket and SSE to one server handling API, realtime, Automate, SSO and AI, backed by PostgreSQL with pgvector"
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
        HTTPS · WebSocket · SSE
      </text>
      <Box
        x={70}
        y={152}
        w={300}
        title="Server &amp; Realtime Gateway"
        sub="API · Automate · OIDC/SAML · AI &amp; STT"
        accent
      />
      <Wire d="M220 218 V260" />
      <Box
        x={70}
        y={260}
        w={300}
        title="PostgreSQL + pgvector"
        sub="Source of truth · hybrid search · backups"
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
          <h2>One server, one database, built for plant-floor scale.</h2>
          <p className="lead">
            Web and mobile share one API and realtime path. Load tested to 1,000 live viewers on a
            floor and 5,000 employees on the company pulse — with OIDC &amp; SAML SSO, full audit
            logging, nightly backups and a translucent Glass UI that stays crisp on tablets and
            phones.
          </p>
          <div className="deploy">
            <div>
              <h3>Cloud &amp; Enterprise SSO</h3>
              <p>
                Hosted and monitored with nightly backups. Sign in with Entra ID, Okta or Google
                over OIDC / SAML with group-to-role mapping.
              </p>
            </div>
            <div>
              <h3>On-prem &amp; AI control</h3>
              <p>
                Runs in your own network with Docker Compose. Bring Anthropic, OpenAI or Google keys
                with a monthly cap — or run completely AI-free.
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
