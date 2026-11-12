const TASKS = [
  { name: "Cut panels", station: "Assembly 1", status: "Done", tone: "ok", pct: 100 },
  { name: "Assemble frame", station: "Assembly 2", status: "In progress", tone: "live", pct: 62 },
  { name: "Inspect", station: "QA", status: "Planned", tone: "idle", pct: 0 },
  { name: "Pack and label", station: "Pack", status: "Planned", tone: "idle", pct: 0 },
];

// Work order with its tasks, as a manager plans them for a floor.
export function PlanningArt() {
  return (
    <div className="ui-stack">
      <div className="ui-card">
        <div className="ui-row">
          <div>
            <div className="ui-muted">Work order</div>
            <div className="ui-title">WO-1042 · Shelf unit, oak</div>
          </div>
          <span className="chip">Day shift 06:00–14:00</span>
        </div>
        <div className="ui-row" style={{ marginTop: 12 }}>
          <span className="ui-muted">310 of 500 units</span>
          <span className="ui-muted">Due Fri</span>
        </div>
        <div className="ui-bar">
          <span style={{ width: "62%" }} />
        </div>
      </div>
      {TASKS.map((t) => (
        <div className="ui-card" key={t.name}>
          <div className="ui-row">
            <div>
              <div className="ui-title">{t.name}</div>
              <div className="ui-muted">{t.station}</div>
            </div>
            <span className={`chip ${t.tone}`}>{t.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
