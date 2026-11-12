const ROLES = [
  {
    tag: "Admin",
    title: "Set up the company",
    text: "Sites, floors, time zones, employees and the roles they hold.",
    items: ["Sites and floors per company", "Employees and roles", "Company-wide settings"],
  },
  {
    tag: "Manager",
    title: "Run the floor",
    text: "Design the layout, plan the work and watch it happen from the command center.",
    items: ["Floor builder", "Work orders, tasks and shifts", "Live floor and presence"],
  },
  {
    tag: "Operator",
    title: "Do the work",
    text: "Scan a station, start the task, log units. Works on their own phone.",
    items: ["Scan station QR to start", "Pause, resume, end, log units", "Keeps working offline"],
  },
];

export function Roles() {
  return (
    <section className="screen" id="roles">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">One system, three views</p>
          <h2>Everyone on the floor sees exactly what they need.</h2>
          <p className="lead">
            Production Floor puts the office and the shop floor on the same live data. What each
            person can see and do comes from their role, per company and per floor.
          </p>
        </div>
        <div className="roles">
          {ROLES.map((r) => (
            <article className="role reveal" key={r.tag}>
              <span className="tag">{r.tag}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <ul>
                {r.items.map((i) => (
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
