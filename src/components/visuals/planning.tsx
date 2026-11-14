const STEPS = [
  { name: "Cut panels", station: "Saw 1", extra: "drawing.pdf" },
  { name: "Assemble frame", station: "Assembly 2", extra: "Photo required" },
  { name: "Inspect", station: "QA" },
  { name: "Pack and label", station: "Pack" },
];

// A job template with its steps, and the work order started from it.
export function PlanningArt() {
  return (
    <div className="ui-stack">
      <div className="ui-card">
        <div className="ui-row">
          <div>
            <div className="ui-muted">Job template</div>
            <div className="ui-title">Shelf unit, oak</div>
          </div>
          <span className="chip">4 steps</span>
        </div>
        <ol className="ui-steps">
          {STEPS.map((s) => (
            <li key={s.name}>
              <span className="ui-title">{s.name}</span>
              <span className="ui-muted"> · {s.station}</span>
              {s.extra ? <span className="chip idle ui-extra">{s.extra}</span> : null}
            </li>
          ))}
        </ol>
      </div>
      <div className="ui-arrow" aria-hidden="true">
        ↓ Start work order
      </div>
      <div className="ui-card">
        <div className="ui-row">
          <div>
            <div className="ui-muted">Work order</div>
            <div className="ui-title">WO-1042 · 500 units</div>
          </div>
          <span className="chip live">4 tasks</span>
        </div>
        <div className="ui-row" style={{ marginTop: 12 }}>
          <span className="ui-muted">310 of 500 units · Day shift</span>
          <span className="ui-muted">Due Fri</span>
        </div>
        <div className="ui-bar">
          <span style={{ width: "62%" }} />
        </div>
      </div>
    </div>
  );
}
