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
    text: "Tilt from top-down blueprint to 3D, watch units move along aisles and spot full or blocked bays at a glance.",
  },
  {
    icon: <I d="M4 5h16v5H4zM4 13h7v6H4zM14 13h6v6h-6z" />,
    title: "Live Board & pace bars",
    text: "One live card per station with daily output counters; delayed, paused and idle bays float straight to the top.",
  },
  {
    icon: <I d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-5h6v5" />,
    title: "Executive Suite & dashboards",
    text: "Multi-site department flow, 5,000+ employee status, executive KPIs and alignment with teams and daily schedules.",
  },
  {
    icon: <I d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h3" />,
    title: "Orders, templates & suppliers",
    text: "Import ERP orders by CSV with change preview, build multi-step job templates and flag late supplier deliveries.",
  },
  {
    icon: <I d="M5 12h6M13 12h6M15 8l4 4-4 4M5 6h4v4H5zM5 14h4v4H5z" />,
    title: "Visual automation rules",
    text: "Turn failed tests, late tasks and finished units into instant jobs and moves — with dry runs and full run history.",
  },
  {
    icon: <I d="M4 6h16v10H8l-4 4V6zM8 10h8M8 13h5" />,
    title: "Job dispatch & inbox",
    text: "Assign work or send notices to a person, team, trade role or floor with photo attachments and phone push alerts.",
  },
  {
    icon: <I d="M16 11a4 4 0 10-8 0M4 20a8 8 0 0116 0M18 8l2 2 3-3" />,
    title: "Rosters, clock-in & training",
    text: "See who is clocked in right now, manage shift rosters and ensure work only routes to trained, signed-off staff.",
  },
  {
    icon: <I d="M4 19V5M4 19h16M8 15v-4M13 15V7M18 15v-6" />,
    title: "Bottleneck analysis & ROI",
    text: "Measure utilisation, queue times and lost output across weeks; get AI root-cause fixes and track before/after gains.",
  },
  {
    icon: <I d="M6 4h11a2 2 0 012 2v14l-7-3-7 3V6a2 2 0 012-2zM9 9h6M9 12h4" />,
    title: "Voice notes & knowledge base",
    text: "Push-to-talk notes on the floor stream to the web as live transcripts and feed versioned SOPs linked to every step.",
  },
  {
    icon: <I d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />,
    title: "Ask AI & floor advisor",
    text: "Instant answers citing your own SOPs, automatic watch-out warnings on task start and human-approved floor suggestions.",
  },
  {
    icon: <I d="M6 3h9l4 4v14H6V3zM15 3v4h4M9 12h6M9 16h6" />,
    title: "Self-writing shift reports",
    text: "Automated shift summaries 15 minutes after shift end, printable morning huddle sheets and one-click CSV exports.",
  },
  {
    icon: <I d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" />,
    title: "Enterprise SSO & offline mobile",
    text: "Sign in with Microsoft Entra, Okta or Google on web and Android, backed by audit logs and offline floor sync.",
  },
];

export function Features() {
  return (
    <section className="screen" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Features</p>
          <h2>Everything that keeps the line moving, in one place.</h2>
          <p className="lead">
            Replace mid-shift whiteboard walks, radio tag and Friday spreadsheet surprises with one
            live record of the floor, the work and the know-how behind it.
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
