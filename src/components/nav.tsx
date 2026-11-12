import { contactHref, SITE } from "@/site";
import { Brand } from "./brand";
import { NavLinks } from "./scroll-spy";

const LINKS = [
  { id: "workflow", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "platform", label: "Platform" },
  { id: "roadmap", label: "Roadmap" },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Brand />
        <NavLinks links={LINKS} />
        <div className="nav-cta">
          <a className="btn ghost small contact-link" href={contactHref}>
            Contact us
          </a>
          <a className="btn primary small" href={SITE.signInUrl}>
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
}
