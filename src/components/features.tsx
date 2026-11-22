import type { ReactNode } from "react";

// Simple line icons, 24×24, drawn with currentColor.
function I({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FEATURES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <I d="M3 9l9-5 9 5-9 5-9-5zM3 14l9 5 9-5" />,
    title: "2D & 3D live floor map",
    text: "Tilt from top-down to isometric, draw custom shapes, watch units travel aisles and blocked zones pulse.",
  },
  {
    icon: <I d="M4 5h16v5H4zM4 13h7v6H4zM14 13h6v6h-6z" />,
    title: "Live Board & pace bars",
    text: "One live card per station with Today's numbers; delayed, paused and idle stations float to the top.",
  },
  {
    icon: <I d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-5h6v5" />,
    title: "Executive Suite & dashboards",
    text: "Company-wide department flow across sites, executive KPI dashboards, and team & daily schedule integrations.",
  },
  {
    icon: <I d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h3" />,
    title: "Orders, templates & suppliers",
    text: "Custom orders imported by CSV with preview, multi-step job templates and inbound PO tracking.",
  },
  {
    icon: <I d="M5 12h6M13 12h6M15 8l4 4-4 4M5 6h4v4H5zM5 14h4v4H5z" />,
    title: "Visual Automate workflows",
    text: "React to failed tests, delays and finished units with test runs, step history and one-click off.",
  },
  {
    icon: <I d="M4 6h16v10H8l-4 4V6zM8 10h8M8 13h5" />,
    title: "Dispatch & inbox",
    text: "Send jobs and notices to a person, team, role or floor with replies, photos and phone push.",
  },
  {
    icon: <I d="M16 11a4 4 0 10-8 0M4 20a8 8 0 0116 0M18 8l2 2 3-3" />,
    title: "Rosters, clock-in & training",
    text: "Who is here live availability, shift rosters, and training sign-off with expiry for qualified routing.",
  },
  {
    icon: <I d="M4 19V5M4 19h16M8 15v-4M13 15V7M18 15v-6" />,
    title: "Bottleneck analysis",
    text: "SQL computes utilisation, queue and lost output; AI explains causes and tracks before/after fixes.",
  },
  {
    icon: <I d="M6 4h11a2 2 0 012 2v14l-7-3-7 3V6a2 2 0 012-2zM9 9h6M9 12h4" />,
    title: "Knowledge base & voice notes",
    text: "Hold-to-record notes transcribe to web in seconds; versioned SOPs linked to steps, stations and parts.",
  },
  {
    icon: <I d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />,
    title: "Ask AI & live advisor",
    text: "Cited answers from your own knowledge base, Watch-out step alerts and human-approved floor suggestions.",
  },
  {
    icon: <I d="M6 3h9l4 4v14H6V3zM15 3v4h4M9 12h6M9 16h6" />,
    title: "Shift & meeting reports",
    text: "Auto shift reports 15 minutes after shift end, printable morning huddle sheets and CSV exports.",
  },
  {
    icon: <I d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" />,
    title: "Enterprise SSO & offline mobile",
    text: "OIDC & SAML 2.0 on web and Android, per-floor roles, audit log, Glass UI and offline QR sync.",
  },
];

export function Features() {
  return (
    <section className="screen" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Features</p>
          <h2>Everything the floor needs, in one live system.</h2>
          <p className="lead">
            No side spreadsheets, no stale whiteboard photos, no chasing radios. One shared model of
            the floor, the people, the units and the knowledge behind them.
          </p>
        </div>
        <div className="features">
          {FEATURES.map((f) => (
            <article className="feature reveal" key={f.title}>
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
