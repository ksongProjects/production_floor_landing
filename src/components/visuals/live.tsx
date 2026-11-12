import { IsoBox, IsoFloor, LiveDot } from "../iso";

const FEED = [
  { who: "Dana", what: "started Pack and label", where: "Pack", tone: "live", when: "now" },
  { who: "Sam", what: "logged 12 units", where: "Assembly 2", tone: "ok", when: "1m" },
  { who: "Lee", what: "paused Inspect", where: "QA", tone: "idle", when: "4m" },
];

// Command center: the live floor plus what just happened on it.
export function LiveArt() {
  return (
    <div className="ui-stack">
      <div className="ui-row">
        <span className="chip live">● Live</span>
        <div className="ui-row" style={{ gap: 4 }}>
          {["KM", "AR", "JT"].map((i, n) => (
            <span
              key={i}
              title="Viewing this floor"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                background: ["#1f6feb", "#8250df", "#2e7d32"][n],
                border: "2px solid var(--surface)",
                marginLeft: n ? -10 : 0,
              }}
            >
              {i}
            </span>
          ))}
          <span className="ui-muted" style={{ marginLeft: 6 }}>
            viewing
          </span>
        </div>
      </div>
      <svg viewBox="-150 -40 360 245" role="img" aria-label="Live floor with workers at stations">
        <IsoFloor w={10} d={8} />
        <IsoBox x={1} y={1} w={3} d={2} h={1.2} accent />
        <IsoBox x={6} y={1} w={3} d={2} h={1.2} accent />
        <IsoBox x={1} y={5} w={3} d={2} h={1.2} />
        <IsoBox x={6} y={5} w={3} d={2} h={1.2} accent />
        <LiveDot x={2.5} y={2} z={1.2} />
        <LiveDot x={7.5} y={2} z={1.2} color="var(--ok)" />
        <LiveDot x={7.5} y={6} z={1.2} />
      </svg>
      {FEED.map((f) => (
        <div className="ui-card" key={f.who}>
          <div className="ui-row">
            <span>
              <strong>{f.who}</strong> {f.what} <span className="ui-muted">· {f.where}</span>
            </span>
            <span className={`chip ${f.tone}`}>{f.when}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
