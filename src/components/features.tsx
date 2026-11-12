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
    title: "2D and 3D floor views",
    text: "Drag to tilt smoothly from top-down to isometric. Zoom, pan, rotate, fit.",
  },
  {
    icon: <I d="M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z" />,
    title: "Floor builder",
    text: "Stations, machines, zones, walls and paths with snap, labels and custom styles.",
  },
  {
    icon: <I d="M4 7h4V3M20 7h-4V3M4 17h4v4M20 17h-4v4M10 10h4v4h-4z" />,
    title: "Station QR codes",
    text: "Every station gets a printable code. Scan it to start the task waiting there.",
  },
  {
    icon: <I d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h3" />,
    title: "Work orders and tasks",
    text: "Products, quantities, due dates, shifts. Progress as units, tasks and time.",
  },
  {
    icon: <I d="M12 3v3M12 18v3M3 12h3M18 12h3M12 8a4 4 0 100 8 4 4 0 000-8z" />,
    title: "Real-time everything",
    text: "Edits, scans and units stream to every open screen. Missed updates replay on reconnect.",
  },
  {
    icon: <I d="M16 11a4 4 0 10-8 0M4 20a8 8 0 0116 0M18 8l2 2 3-3" />,
    title: "Roles and permissions",
    text: "Company and per-floor roles from a fixed permission set, checked on the server.",
  },
  {
    icon: <I d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 8v3l2 1" />,
    title: "Sites and time zones",
    text: "Company, sites, floors. Each floor shows its local time and runs its own shifts.",
  },
  {
    icon: <I d="M8 3h8v18H8zM11 18h2M3 9l2 2-2 2M21 9l-2 2 2 2" />,
    title: "Works offline",
    text: "The mobile app queues work updates without signal and syncs them safely later.",
  },
];

export function Features() {
  return (
    <section className="screen" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Features</p>
          <h2>Everything the floor needs, in one place.</h2>
          <p className="lead">
            No spreadsheets on the side, no whiteboard photos. One shared model of the floor and the
            work on it.
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
