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
            Lay out every floor in 2D or 3D, plan work orders and shifts, let operators start work
            by scanning a station QR code, and see every station, person and task update live.
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
      <a className="scroll-cue" href="#roles" aria-hidden="true" tabIndex={-1}>
        Scroll
      </a>
    </section>
  );
}
