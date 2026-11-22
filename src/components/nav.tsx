import { contactHref, SITE } from "@/site";
import { Brand } from "./brand";

const LINKS = [
  { href: "#roles", label: "Suites" },
  { href: "#workflow", label: "How it works" },
  { href: "#intelligence", label: "AI & Knowledge" },
  { href: "#features", label: "Features" },
  { href: "#platform", label: "Platform" },
  { href: "#roadmap", label: "Roadmap" },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Brand />
        <nav className="nav-links" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
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
