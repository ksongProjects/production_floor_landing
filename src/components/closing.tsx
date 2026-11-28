import { contactFormHref, SITE } from "@/site";
import { Brand } from "./brand";

function AndroidDownloadBadge() {
  return (
    <svg viewBox="0 0 220 48" width="210" height="45" aria-hidden="true">
      <rect width="220" height="48" rx="8" fill="#0b0e12" stroke="#303742" strokeWidth="1.2" />
      <g transform="translate(15 11)">
        <path
          d="M5.2 6.8 3.6 4.1a.6.6 0 0 1 1-.6l1.7 2.8a9.8 9.8 0 0 1 7.4 0l1.7-2.8a.6.6 0 1 1 1 .6l-1.6 2.7A8.8 8.8 0 0 1 19 14H1a8.8 8.8 0 0 1 4.2-7.2Z"
          fill="#34D399"
        />
        <circle cx="6.8" cy="10.8" r="1.1" fill="#0b0e12" />
        <circle cx="13.2" cy="10.8" r="1.1" fill="#0b0e12" />
        <rect x="2.5" y="15.5" width="15" height="9" rx="2.5" fill="#34D399" />
      </g>
      <text
        x="48"
        y="18"
        fill="#c2cad4"
        fontSize="8.5"
        fontWeight="600"
        letterSpacing="0.06em"
        fontFamily="system-ui, sans-serif"
      >
        ANDROID APK · FLOOROS PRO
      </text>
      <text
        x="48"
        y="34"
        fill="#ffffff"
        fontSize="14"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        Download for Android
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
          See a live plant running, then run a measured 30-day pilot with direct founder
          support.
        </p>
        <div className="actions">
          <a className="btn primary" href={contactFormHref}>
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
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
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
              aria-label="Download FloorOS Pro Android APK"
              style={{ display: "inline-flex", lineHeight: 0 }}
            >
              <AndroidDownloadBadge />
            </a>
            <StoreQr label="QR code to download FloorOS Pro Android APK" />
          </div>
          <p className="hero-note" style={{ marginTop: 0 }}>
            Android app available now. iOS coming soon; the web app works in any phone browser.
          </p>
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
          <a href={contactFormHref}>Contact</a>
        </nav>
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
      </div>
    </footer>
  );
}
