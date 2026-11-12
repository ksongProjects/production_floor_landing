const COLUMNS = [
  {
    chip: "Available now",
    tone: "ok",
    done: true,
    title: "Build, plan, work, watch",
    items: [
      "Floor builder with 2D and 3D views",
      "Work orders, tasks, products and shifts",
      "Android app with QR scan and offline queue",
      "Live floor, presence and real-time updates",
      "Roles, permissions, sites and time zones",
    ],
  },
  {
    chip: "Next",
    tone: "",
    done: false,
    title: "Chat",
    items: [
      "Messages between operators and managers",
      "Web chat panel and mobile chat screens",
      "Unread counts and push notifications",
    ],
  },
  {
    chip: "Later",
    tone: "idle",
    done: false,
    title: "Dashboards and reports",
    items: [
      "Live metrics: active stations, headcount, utilisation, output",
      "Reports per hour, shift and day, with export",
      "Manager dashboard on mobile, audit log",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="screen" id="roadmap">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Roadmap</p>
          <h2>Shipping in steps you can use.</h2>
          <p className="lead">
            Each release adds something that runs on the floor. Here is where it stands today.
          </p>
        </div>
        <div className="timeline">
          {COLUMNS.map((c) => (
            <article key={c.title} className={`reveal${c.done ? " done" : ""}`}>
              <span className={`chip ${c.tone}`}>{c.chip}</span>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
