import { contactHref, SITE } from "@/site";
import { Brand } from "./brand";

export function Cta() {
  return (
    <section className="screen hero cta" id="get-started">
      <div className="wrap">
        <p className="eyebrow">Get started with {SITE.name}</p>
        <h2>Put your first floor live in a day.</h2>
        <p className="lead">
          We&apos;ll walk you through a live plant running on{" "}
          <strong>FloorOS Executive Suite</strong>, <strong>FloorOS Manager</strong> and{" "}
          <strong>FloorOS Pro</strong>, then set up a measured 30-day pilot on one of your floors —
          using printed QR codes and the phones your crew already carries.
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
