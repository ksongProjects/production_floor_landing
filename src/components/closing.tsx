import { contactHref, SITE } from "@/site";
import { Brand } from "./brand";

export function Cta() {
  return (
    <section className="screen hero cta" id="get-started">
      <div className="wrap">
        <p className="eyebrow">Get started with {SITE.name}</p>
        <h2>Live on your first floor in a day.</h2>
        <p className="lead">
          Already have an account? Sign in. Want to see your own bottleneck live across{" "}
          <strong>FloorOS Executive Suite</strong>, <strong>FloorOS Manager</strong> and{" "}
          <strong>FloorOS Pro</strong>? Book a walkthrough or run a measured 30-day pilot.
        </p>
        <div className="actions">
          <a className="btn primary" href={SITE.signInUrl}>
            Sign in to {SITE.name}
          </a>
          <a className="btn ghost" href={contactHref}>
            Book a walkthrough
          </a>
        </div>
        <a className="status-link" href={SITE.statusUrl} target="_blank" rel="noopener noreferrer">
          Server status
        </a>
        <p className="hero-note">
          Trades operator or lead on Android?{" "}
          <a href={SITE.androidAppUrl}>Download FloorOS Pro (APK)</a>
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
          <a href="#roles">Suites</a>
          <a href="#workflow">How it works</a>
          <a href="#intelligence">AI &amp; Knowledge</a>
          <a href="#features">Features</a>
          <a href="#roadmap">Roadmap</a>
          <a href={SITE.platformUrl}>Platform</a>
          <a href={contactHref}>Contact</a>
        </nav>
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
      </div>
    </footer>
  );
}
