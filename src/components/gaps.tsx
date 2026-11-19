const GAPS = [
  {
    tag: "Waiting",
    title: "People waiting for the next job",
    text: "Someone finishes, then walks over to ask what's next.",
    fix: "Idle stations rise to the top of the board, and the next job goes to the first free, trained person.",
  },
  {
    tag: "Piling up",
    title: "Units piling up in front of one bay",
    text: "One step can't keep up and everything behind it stops.",
    fix: "The floor map lights up full and blocked zones, and Needs attention ranks what has waited longest.",
  },
  {
    tag: "Unreported",
    title: "Problems nobody reported",
    text: "A machine acts up, and the operator works around it.",
    fix: "One tap on the phone reports it. It becomes a repair job for the first free person in Maintenance.",
  },
  {
    tag: "Too late",
    title: "Delays you only see on Friday",
    text: "The week's numbers show a late order after it's too late to fix.",
    fix: "Every task runs against its expected time. A late one alerts the supervisor right away.",
  },
];

export function Gaps() {
  return (
    <section className="screen" id="gaps" aria-labelledby="gaps-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Where downtime hides</p>
          <h2 id="gaps-title">Downtime hides in the gaps between jobs.</h2>
          <p className="lead">
            Breakdowns get noticed. The gaps don&apos;t: a few minutes here, a queue there, a
            problem worked around. Production Floor makes each gap visible the moment it opens.
          </p>
        </div>
        <div className="features gaps">
          {GAPS.map((g) => (
            <article className="feature reveal" key={g.tag}>
              <span className="chip live">{g.tag}</span>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
              <p className="gap-fix">{g.fix}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
