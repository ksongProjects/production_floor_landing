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
    icon: <I d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h3" />,
    title: "Reports that write themselves",
    text: "A shift report 15 minutes after every shift: units, who worked where, problems and flags. A printable meeting report for the morning huddle.",
  },
  {
    icon: <I d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    title: "Output and pace",
    text: "Work and output by shift, day, station or person. Each step has an expected time, so you see who is ahead or behind as they work. CSV export.",
  },
  {
    icon: <I d="M16 11a4 4 0 10-8 0M4 20a8 8 0 0116 0M18 8l2 2 3-3" />,
    title: "Right person, right work",
    text: "Roles per company and per floor, training records with sign-off and expiry, clock in and out, and shift rosters.",
  },
  {
    icon: <I d="M8 3h8v18H8zM11 18h2M3 9l2 2-2 2M21 9l-2 2 2 2" />,
    title: "Works on the crew's phones",
    text: "The Android app works with no signal and catches up when it reconnects. Push notifications for new jobs. Managers use any browser.",
  },
  {
    icon: <I d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 8v3l2 1" />,
    title: "Sites and time zones",
    text: "Company, sites and floors. Each floor keeps its own local time and runs its own shifts.",
  },
  {
    icon: <I d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3zM9 12l2 2 4-4" />,
    title: "Safe to trust",
    text: "Audit log of access changes, automatic backups and health monitoring. Load tested with 1,000 live viewers on one server.",
  },
];

export function Features() {
  return (
    <section className="screen" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Features</p>
          <h2>Everything else that keeps the line moving.</h2>
          <p className="lead">
            No whiteboards that are wrong by mid-shift, no walking the floor to find out who is
            doing what, no shift reports typed up by hand.
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
