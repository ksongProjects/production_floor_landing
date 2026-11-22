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
            FloorOS, for all your{" "}
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
            </span>{" "}
            needs
          </h1>
          <p className="lead">
            See every station, person and unit across every site — live. Spot the gaps between jobs
            the moment they open, close routine ones with visual workflows, and turn shop-floor
            voice notes into searchable, AI-assisted knowledge.
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
            <strong>FloorOS Manager</strong> for leads · <strong>FloorOS Pro</strong> for trades
            operators. <a href="#roles">Explore the suites ↓</a>
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
