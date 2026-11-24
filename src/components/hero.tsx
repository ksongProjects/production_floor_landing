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
          <p className="eyebrow">FloorOS · Live shop floor operating system</p>
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
            See every site, station and unit live. Spot bottlenecks instantly, automate routine
            handoffs, and turn spoken floor know-how into shared intelligence.
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
            <strong>Executive</strong> · <strong>Manager</strong> · <strong>Pro</strong>.{" "}
            <a href="#roles">Explore suites ↓</a>
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
