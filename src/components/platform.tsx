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
        y={y + 28}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={accent ? "var(--accent-text)" : "var(--text)"}
        {...T}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + 47}
        textAnchor="middle"
        fontSize="11"
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
      viewBox="0 0 440 330"
      role="img"
      aria-label="Web app and mobile app talk to one server over HTTPS and WebSocket; the server stores everything in PostgreSQL"
    >
      <Box x={10} y={10} w={190} title="Web app" sub="Managers · builder · live floor" />
      <Box x={240} y={10} w={190} title="Mobile app" sub="Operators · scan · work" />
      <Wire d="M105 74 V112 H190 V150" />
      <Wire d="M335 74 V112 H250 V150" />
      <text x="220" y="105" textAnchor="middle" fontSize="10.5" fill="var(--muted)" {...T}>
        HTTPS + WebSocket
      </text>
      <Box x={110} y={150} w={220} title="Server" sub="API · permissions · realtime" accent />
      <Wire d="M220 214 V256" />
      <Box x={110} y={256} w={220} title="PostgreSQL" sub="One source of truth" />
    </svg>
  );
}

export function Platform() {
  return (
    <section className="screen alt" id="platform">
      <div className="wrap platform">
        <div className="reveal">
          <p className="eyebrow">Platform</p>
          <h2>One server, one database, every screen in sync.</h2>
          <p className="lead">
            The web app and the mobile app share one API and one live connection. Every change is
            written once to the database, then pushed to everyone who needs to see it.
          </p>
          <div className="deploy">
            <div>
              <h3>Cloud</h3>
              <p>Hosted for you. Sign in from any browser and install the app on Android.</p>
            </div>
            <div>
              <h3>On-prem</h3>
              <p>Run it on your own servers next to the floor. Your data stays in the building.</p>
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
