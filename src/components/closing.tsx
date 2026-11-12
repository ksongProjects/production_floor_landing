import { contactHref, SITE } from "@/site";
import { Brand } from "./brand";

export function Cta() {
  return (
    <section className="screen hero cta" id="get-started">
      <div className="wrap">
        <p className="eyebrow">Get started</p>
        <h2>Bring your floor online.</h2>
        <p className="lead">
          Already have an account? Sign in. Want a walkthrough or a pilot on your floor? Get in
          touch and we will set it up with you.
        </p>
        <div className="actions">
          <a className="btn primary" href={SITE.signInUrl}>
            Sign in to the platform
          </a>
          <a className="btn ghost" href={contactHref}>
            Contact us
          </a>
        </div>
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
          <a href="#workflow">How it works</a>
          <a href="#features">Features</a>
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
