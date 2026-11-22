import { contactHref, SITE } from "@/site";
import { Brand } from "./brand";

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 155 48" width="145" height="45" aria-hidden="true">
      <rect width="155" height="48" rx="8" fill="#0b0e12" stroke="#303742" strokeWidth="1.2" />
      <path d="M18 11.5v25l14-12.5L18 11.5z" fill="#4285F4" />
      <path d="M18 11.5l18.5 10-4.5 2.5-14-12.5z" fill="#34A853" />
      <path d="M18 36.5l18.5-10-4.5-2.5-14 12.5z" fill="#EA4335" />
      <path d="M36.5 21.5l4.5 2.5-4.5 2.5-4.5-2.5 4.5-2.5z" fill="#FBBC05" />
      <text
        x="49"
        y="18"
        fill="#c2cad4"
        fontSize="8.5"
        fontWeight="600"
        letterSpacing="0.06em"
        fontFamily="system-ui, sans-serif"
      >
        GET IT ON
      </text>
      <text
        x="49"
        y="34"
        fill="#ffffff"
        fontSize="15.5"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        Google Play
      </text>
    </svg>
  );
}

function AppleAppStoreBadge() {
  return (
    <svg viewBox="0 0 155 48" width="145" height="45" aria-hidden="true">
      <rect width="155" height="48" rx="8" fill="#0b0e12" stroke="#303742" strokeWidth="1.2" />
      <path
        fill="#ffffff"
        d="M31.2 24.8c0-3.2 2.6-4.8 2.7-4.9-1.5-2.2-3.8-2.5-4.6-2.5-2-.2-3.8 1.2-4.8 1.2s-2.5-1.2-4.2-1.1c-2.1 0-4.1 1.2-5.2 3.1-2.2 3.9-.6 9.6 1.6 12.7 1.1 1.5 2.3 3.2 4 3.1 1.6-.1 2.2-1 4.2-1s2.5 1 4.2 1c1.7 0 2.9-1.5 3.9-3.1 1.3-1.8 1.8-3.5 1.8-3.6-.1-.1-3.6-1.4-3.6-4.9zm-3.2-9.1c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.9.9-3.8 2-.8.9-1.5 2.5-1.3 3.9 1.5.1 2.9-.7 3.8-1.8z"
      />
      <text
        x="46"
        y="18"
        fill="#c2cad4"
        fontSize="8.5"
        fontWeight="600"
        letterSpacing="0.02em"
        fontFamily="system-ui, sans-serif"
      >
        Download on the
      </text>
      <text
        x="46"
        y="34"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        App Store
      </text>
    </svg>
  );
}

function StoreQr({ label }: { label: string }) {
  const cells = [
    "1111111010101111111",
    "1000001001001000001",
    "1011101011101011101",
    "1011101000101011101",
    "1011101010101011101",
    "1000001001101000001",
    "1111111010101111111",
    "0000000011010000000",
    "1011011100101101011",
    "0100100011010010100",
    "1101101010110110110",
    "0000000010101001010",
    "1111111001110101101",
    "1000001010001010010",
    "1011101011011101101",
    "1011101000100010011",
    "1011101010111011100",
    "1000001001010100011",
    "1111111011101011101",
  ];
  return (
    <svg viewBox="0 0 190 190" width="54" height="54" role="img" aria-label={label}>
      <rect width="190" height="190" rx="14" fill="#ffffff" />
      <g transform="translate(14 14)" fill="#0b0e12">
        {cells.flatMap((row, y) =>
          [...row].map((c, x) =>
            c === "1" ? (
              <rect key={`${x}-${y}`} x={x * 8.5} y={y * 8.5} width="8" height="8" rx="1.2" />
            ) : null,
          ),
        )}
      </g>
    </svg>
  );
}

export function Cta() {
  return (
    <section className="screen hero cta" id="get-started">
      <div className="wrap">
        <p className="eyebrow">Get started</p>
        <h2>Live on your first floor in a day.</h2>
        <p className="lead">
          100% cloud-hosted with zero hardware required. See a live plant running on{" "}
          <strong>Executive Suite</strong>, <strong>Manager</strong> and{" "}
          <strong>FloorOS Pro</strong>, then run a measured 30-day pilot.
        </p>
        <div className="actions">
          <a className="btn primary" href={contactHref}>
            Book a walkthrough
          </a>
          <a className="btn ghost" href={SITE.signInUrl}>
            Sign in to {SITE.name}
          </a>
        </div>
        <a className="status-link" href={SITE.statusUrl} target="_blank" rel="noopener noreferrer">
          Server status
        </a>
        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
          }}
          aria-label="Download FloorOS Pro mobile app"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 12px",
              borderRadius: 12,
              background: "rgb(255 255 255 / 0.05)",
              border: "1px solid rgb(255 255 255 / 0.14)",
            }}
          >
            <a
              href={SITE.androidAppUrl}
              aria-label="Get FloorOS Pro on Google Play"
              style={{ display: "inline-flex", lineHeight: 0 }}
            >
              <GooglePlayBadge />
            </a>
            <StoreQr label="QR code to download FloorOS Pro on Google Play" />
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 12px",
              borderRadius: 12,
              background: "rgb(255 255 255 / 0.05)",
              border: "1px solid rgb(255 255 255 / 0.14)",
            }}
          >
            <a
              href={SITE.androidAppUrl}
              aria-label="Download FloorOS Pro on the Apple App Store"
              style={{ display: "inline-flex", lineHeight: 0 }}
            >
              <AppleAppStoreBadge />
            </a>
            <StoreQr label="QR code to download FloorOS Pro on the App Store" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Brand />
        <nav aria-label="Footer">
          <a href="#roles">Suites &amp; Features</a>
          <a href="#use-cases">Live Screens</a>
          <a href="#platform">Cloud &amp; Security</a>
          <a href={SITE.platformUrl}>Sign in</a>
          <a href={contactHref}>Contact</a>
        </nav>
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
      </div>
    </footer>
  );
}
