import { contactHref, SITE } from "@/site";
import { HeroFloor } from "./hero-floor";

const HERO_WORDS = [
  "production",
  "automation",
  "operation",
  "planning",
  "reporting",
  "management",
] as const;

export function Hero() {
  return (
    <section className="screen hero" id="top">
      <div className="wrap">
        <div>
          <p className="eyebrow">FloorOS · Shop floor operating system</p>
          <h1 className="hero-title">
            <span className="hero-line">FloorOS,</span>
            <span className="hero-line">for all your</span>
            <span className="word-rotator" aria-label={HERO_WORDS.join(", ")}>
              <span className="word-track" aria-hidden="true">
                {HERO_WORDS.map((word) => (
                  <span className="word-item" key={word}>
                    {word}
                  </span>
                ))}
                <span className="word-item" key="loop-clone">
                  {HERO_WORDS[0]}
                </span>
              </span>
            </span>
            <span className="hero-line">needs</span>
          </h1>
          <p className="lead">
            Most lost time on a shop floor isn&apos;t a breakdown — it&apos;s the gaps between jobs.
            FloorOS gives you a live picture of every site, station and unit, closes routine
            handoffs automatically, and turns spoken floor know-how into shared intelligence.
          </p>
          <div className="actions">
            <a className="btn primary" href={SITE.signInUrl}>
              Sign in to {SITE.name}
            </a>
            <a className="btn ghost" href={contactHref}>
              Book a walkthrough
            </a>
          </div>
          <a
            className="status-link"
            href={SITE.statusUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Server status
          </a>
          <p className="hero-note">
            <strong>FloorOS Executive Suite</strong> for leadership ·{" "}
            <strong>FloorOS Manager</strong> for plant leads · <strong>FloorOS Pro</strong> for
            skilled trades. <a href="#roles">Explore the suites ↓</a>
          </p>
        </div>
        <HeroFloor />
      </div>
      <a className="scroll-cue" href="#roles" aria-hidden="true" tabIndex={-1}>
        Scroll
      </a>
    </section>
  );
}
