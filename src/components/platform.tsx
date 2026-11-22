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
      aria-label="FloorOS Executive Suite, Manager and Pro connected over encrypted TLS and WebSockets to the FloorOS Cloud Server and PostgreSQL"
    >
      <Box x={10} y={10} w={195} title="Executive &amp; Manager" sub="Web · Dashboards · 3D Map" />
      <Box x={235} y={10} w={195} title="FloorOS Pro" sub="Android · QR · Voice · Offline" />
      <Wire d="M107 74 V112 H190 V148" />
      <Wire d="M332 74 V112 H250 V148" />
      <text x="220" y="104" textAnchor="middle" fontSize="10.5" fill="var(--muted)" {...T}>
        Encrypted TLS &amp; live WebSockets
      </text>
      <Box
        x={70}
        y={148}
        w={300}
        title="FloorOS Cloud &amp; Realtime Gateway"
        sub="API · Automate · OIDC/SAML · AI &amp; Voice"
        accent
      />
      <Wire d="M220 212 V252" />
      <Box
        x={70}
        y={252}
        w={300}
        title="Managed Cloud PostgreSQL"
        sub="Tenant-isolated · Hybrid search · Nightly backups"
      />
    </svg>
  );
}

export function Platform() {
  return (
    <section className="screen" id="platform">
      <div className="wrap">
        <div className="platform">
          <div className="reveal">
            <p className="eyebrow">Cloud Platform &amp; Security</p>
            <h2>100% cloud-native. Zero floor hardware required.</h2>
            <p className="lead">
              No servers to maintain and no terminals to install — just any modern browser, printed
              QR codes and your crew&apos;s phones. Load-tested to 1,000 live viewers on a floor and
              5,000 employees across sites.
            </p>
            <div className="deploy">
              <div>
                <h3>Modern Security Standards</h3>
                <p>
                  OIDC &amp; SAML 2.0 SSO (Entra ID, Okta, Google), strict tenant isolation,
                  server-checked permissions, full audit logs and nightly encrypted backups.
                </p>
              </div>
              <div>
                <h3>Professionally Audited &amp; Governed</h3>
                <p>
                  Built to modern enterprise security standards with independent professional
                  security audits, plus per-company AI opt-in switches and monthly budget caps.
                </p>
              </div>
            </div>
          </div>
          <div className="art reveal">
            <Diagram />
          </div>
        </div>
      </div>
    </section>
  );
}
