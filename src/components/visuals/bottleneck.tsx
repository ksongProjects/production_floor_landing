const ZONES = [
  { name: "Bay 5", state: "Blocked", tone: "bad", load: "5 / 6" },
  { name: "Bay 3", state: "Full", tone: "live", load: "6 / 6" },
  { name: "Bay 2", state: "Flowing", tone: "ok", load: "2 / 6" },
];

const WAITING = [
  { unit: "U-1042-07", where: "In front of Bay 5", time: "48 min" },
  { unit: "U-1042-08", where: "In front of Bay 5", time: "35 min" },
  { unit: "U-1039-02", where: "Bay 3 · Weld", time: "22 min" },
];

const FLOW = [
  { step: "Cut", minutes: 12 },
  { step: "Weld", minutes: 41, slow: true },
  { step: "Paint", minutes: 15 },
  { step: "Pack", minutes: 8 },
];

// Needs attention: zones by load, units waiting longest, and time in each step.
export function BottleneckArt() {
  const max = Math.max(...FLOW.map((f) => f.minutes));
  return (
    <div className="ui-stack">
      <div className="ui-card">
        <div className="ui-row">
          <div>
            <div className="ui-muted">Needs attention · Floor 1</div>
            <div className="ui-title">Zones</div>
          </div>
          <span className="chip live">2 need you</span>
        </div>
        <ul className="ui-list">
          {ZONES.map((z) => (
            <li key={z.name} className="ui-row">
              <span className="ui-title">{z.name}</span>
              <span className="ui-muted">{z.load}</span>
              <span className={`chip ${z.tone}`}>{z.state}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="ui-card">
        <div className="ui-title">Waiting longest</div>
        <ul className="ui-list">
          {WAITING.map((w) => (
            <li key={w.unit} className="ui-row">
              <span>
                <span className="ui-title">{w.unit}</span>
                <span className="ui-muted"> · {w.where}</span>
              </span>
              <span className="ui-muted">{w.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="ui-card">
        <div className="ui-row">
          <div className="ui-title">Time in each step · this shift</div>
          <span className="chip bad">Weld</span>
        </div>
        <ul className="ui-list">
          {FLOW.map((f) => (
            <li key={f.step} className="ui-flow">
              <span className="ui-muted">{f.step}</span>
              <span className={`ui-bar${f.slow ? " slow" : ""}`}>
                <span style={{ width: `${(f.minutes / max) * 100}%` }} />
              </span>
              <span className="ui-muted">{f.minutes} min</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
