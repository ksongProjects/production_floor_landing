import { contactHref } from "@/site";

const MEASURES = [
  { title: "Idle time", text: "How long stations and people sit without work." },
  { title: "Units waiting", text: "How many units queue in front of each zone, and for how long." },
  { title: "Delays spotted", text: "How soon a late task reaches someone who can act on it." },
  { title: "Problems fixed", text: "How long from a reported problem to a finished repair." },
];

export function Pilot() {
  return (
    <section className="screen alt" id="pilot" aria-labelledby="pilot-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Pilot</p>
          <h2 id="pilot-title">A 30-day pilot on one floor, measured.</h2>
          <p className="lead">
            Don&apos;t take our word for it. We agree the measures with you up front, run one floor
            for 30 days, then compare the first week with the last.
          </p>
        </div>
        <div className="features gaps">
          {MEASURES.map((m, i) => (
            <article className="feature reveal" key={m.title}>
              <span className="step-num pilot-num">{i + 1}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
        <div className="pilot-cta reveal">
          <a className="btn primary" href={contactHref}>
            Start a pilot
          </a>
          <p className="tier-note">
            Live on your floor in a day, with our help. Pricing for your sites and team size on
            request.
          </p>
        </div>
      </div>
    </section>
  );
}
