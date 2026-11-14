// Recent releases, newest first. Add new entries at the top.
const RELEASES = [
  {
    date: "2026-11-14",
    title: "Floor map on the phone",
    text: "Zoom, turn and see real shapes. People who can edit the floor can move, resize, add and delete objects from the phone.",
  },
  {
    date: "2026-11-14",
    title: "Faster floor editing",
    text: "Drag to place, size handles with a live badge, undo and redo, duplicate, and arrow keys to move.",
  },
  {
    date: "2026-11-13",
    title: "Job templates",
    text: "Steps with instructions, files and required photos. Start a work order from a template and the steps become tasks.",
  },
  {
    date: "2026-11-13",
    title: "Grid floors, cubes and cylinders",
    text: "Floors measured in grid squares, rounded 3D shapes, and a printable QR code for any object.",
  },
  {
    date: "2026-11-13",
    title: "Reports and dashboards",
    text: "Work and jobs reports with CSV export, a live dashboard on each floor and a manager dashboard on the phone.",
  },
  {
    date: "2026-11-12",
    title: "Inbox and jobs",
    text: "Send jobs and notices to a person, a team or a floor, with push notifications. New sign-ups wait for approval.",
  },
];

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function WhatsNew() {
  return (
    <section className="screen" id="whats-new">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">What&apos;s new</p>
          <h2>Recently shipped.</h2>
          <p className="lead">The latest releases, on the web and on Android.</p>
        </div>
        <ol className="news">
          {RELEASES.map((r) => (
            <li key={r.title} className="reveal">
              <time dateTime={r.date}>{formatDate(r.date)}</time>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
