import { SITE } from "@/site";

export function Logo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#4c8dff" />
      <path d="M16 6 26 11.5 16 17 6 11.5Z" fill="#0b0e12" />
      <path d="M6 15.5 16 21l10-5.5V20L16 25.5 6 20Z" fill="#0b0e12" opacity=".6" />
    </svg>
  );
}

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label={`${SITE.name} home`}>
      <Logo />
      {SITE.name}
    </a>
  );
}
