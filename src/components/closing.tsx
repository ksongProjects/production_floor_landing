import { contactHref, SITE } from "@/site";
import { Brand } from "./brand";

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
        <p className="hero-note">
          On Android? <a href={SITE.androidAppUrl}>Download FloorOS Pro (APK)</a>
        </p>
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
