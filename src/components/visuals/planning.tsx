const STEPS = [
  { name: "Inbound breakers · PO-8821", dept: "Suppliers", status: "Kitted", tone: "ok" },
  { name: "Cut & bend enclosure", dept: "Fabrication · Bay 2", status: "Done", tone: "ok" },
  {
    name: "Control wiring · Sec 1–4",
    dept: "Wiring · 45 min est.",
    status: "In progress",
    tone: "live",
  },
  { name: "Hi-pot test & QA sign-off", dept: "Test & inspection", status: "Waiting", tone: "warn" },
];

// Custom order with inbound material and department-routed tasks from a template.
export function PlanningArt() {
  return (
    <div className="ui-stack">
      <div className="ui-card">
        <div className="ui-row">
          <div>
            <div className="ui-muted">Custom order · CSV import</div>
            <div className="ui-title">CO-482910 · Switchgear Panel B</div>
          </div>
          <span className="chip">6 units · Day shift</span>
        </div>
        <div className="ui-row" style={{ marginTop: 12 }}>
          <span className="ui-muted">4 of 6 units in flow</span>
          <span className="ui-muted">Due Thu</span>
        </div>
        <div className="ui-bar">
          <span style={{ width: "68%" }} />
        </div>
      </div>
      {STEPS.map((t) => (
        <div className="ui-card" key={t.name}>
          <div className="ui-row">
            <div>
              <div className="ui-title">{t.name}</div>
              <div className="ui-muted">{t.dept}</div>
            </div>
            <span className={`chip ${t.tone}`}>{t.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
