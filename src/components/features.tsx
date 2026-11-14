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
    icon: <I d="M12 3v3M12 18v3M3 12h3M18 12h3M12 8a4 4 0 100 8 4 4 0 000-8z" />,
    title: "Live on every screen",
    text: "Edits, scans and units show up on every open screen at once. Missed updates catch up when you reconnect.",
  },
  {
    icon: <I d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    title: "Dashboard and reports",
    text: "Live tiles for stations, headcount, output and utilisation. Reports by shift, day, station or person, with CSV export.",
  },
  {
    icon: <I d="M16 11a4 4 0 10-8 0M4 20a8 8 0 0116 0M18 8l2 2 3-3" />,
    title: "People and access",
    text: "Roles per company and per floor, and one person can hold several. New sign-ups wait for an admin to approve them.",
  },
  {
    icon: <I d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 8v3l2 1" />,
    title: "Sites and time zones",
    text: "Company, sites and floors. Each floor keeps its own local time and runs its own shifts.",
  },
  {
    icon: <I d="M8 3h8v18H8zM11 18h2M3 9l2 2-2 2M21 9l-2 2 2 2" />,
    title: "Works offline",
    text: "The Android app saves taps and photos with no signal and sends them when it is back online.",
  },
  {
    icon: <I d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3zM9 12l2 2 4-4" />,
    title: "Audit log and backups",
    text: "Every change to roles, employees and settings is logged. Your data is backed up every week.",
  },
];

export function Features() {
  return (
    <section className="screen" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Features</p>
          <h2>Everything else the floor needs.</h2>
          <p className="lead">
            Hosted in the cloud: sign in from any browser and install the app on Android. No
            spreadsheets on the side, no whiteboard photos.
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
