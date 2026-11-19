import { contactHref, SITE } from "@/site";
import { HeroFloor } from "./hero-floor";

export function Hero() {
  return (
    <section className="screen hero" id="top">
      <div className="wrap">
        <div>
          <p className="eyebrow">Production floor management</p>
          <h1>{SITE.tagline}</h1>
          <p className="lead">
            Most lost time on a floor isn&apos;t a breakdown. It&apos;s the gaps between jobs: people
            waiting for work, units piling up in front of one bay, a problem nobody reported.
            Production Floor shows you those gaps live and closes the routine ones for you.
          </p>
          <div className="actions">
            <a className="btn primary" href={SITE.signInUrl}>
              Sign in to the platform
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
            No new hardware: printed QR codes and your crew&apos;s own phones.{" "}
            <a href="#gaps">See where the time goes ↓</a>
          </p>
        </div>
        <HeroFloor />
      </div>
      <a className="scroll-cue" href="#gaps" aria-hidden="true" tabIndex={-1}>
        Scroll
      </a>
    </section>
  );
}
