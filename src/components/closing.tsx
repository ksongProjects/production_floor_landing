import { contactHref, SITE } from "@/site";
import { Brand } from "./brand";

export function Cta() {
  return (
    <section className="screen hero cta" id="get-started">
      <div className="wrap">
        <p className="eyebrow">Get started</p>
        <h2>Let&apos;s find your bottleneck.</h2>
        <p className="lead">
          We&apos;ll show you a real floor running on Production Floor, then set up a pilot on yours.
          Already have an account? Sign in.
        </p>
        <div className="actions">
          <a className="btn primary" href={contactHref}>
            Book a walkthrough
          </a>
          <a className="btn ghost" href={SITE.signInUrl}>
            Sign in to the platform
          </a>
        </div>
        <a className="status-link" href={SITE.statusUrl} target="_blank" rel="noopener noreferrer">
          Server status
        </a>
        <p className="hero-note">
          Operator on Android? <a href={SITE.androidAppUrl}>Download the app</a>
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
          <a href="#gaps">Downtime</a>
          <a href="#workflow">How it works</a>
          <a href="#features">Features</a>
          <a href="#pilot">Pilot</a>
          <a href={SITE.signInUrl}>Sign in</a>
          <a href={contactHref}>Contact</a>
        </nav>
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
      </div>
    </footer>
  );
}
