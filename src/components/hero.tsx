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
            Lay out every floor, turn job templates into work orders, send jobs to people and teams,
            and see every station update live as operators scan in.
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
            Web for managers, Android app for the floor. <a href="#workflow">See how it works ↓</a>
          </p>
        </div>
        <HeroFloor />
      </div>
      <a className="scroll-cue" href="#workflow" aria-hidden="true" tabIndex={-1}>
        Scroll
      </a>
    </section>
  );
}
