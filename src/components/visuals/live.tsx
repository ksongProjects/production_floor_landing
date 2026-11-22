import { IsoBox, IsoFloor, LiveDot, project } from "../iso";

const FEED = [
  {
    who: "Wiring Bay 2",
    what: "marked Bottleneck · 4 units waiting",
    tone: "danger",
    badge: "Bottleneck",
  },
  { who: "Dana", what: "closed move job → Test Zone", tone: "ok", badge: "Moved" },
  { who: "Sam", what: "recorded voice note on Sec 3", tone: "live", badge: "Live note" },
];

// Live floor + Board status: moving units, bottleneck badge, and live events.
export function LiveArt() {
  const [ux, uy] = project(4.8, 3.8, 0.35);
  return (
    <div className="ui-stack">
      <div className="ui-row">
        <span className="chip live">● Live · 4 sites</span>
        <span className="chip ok">312 clocked in</span>
      </div>
      <svg
        viewBox="-150 -40 360 245"
        role="img"
        aria-label="Live 3D floor map with active stations, moving unit and bottleneck marker"
      >
        <IsoFloor w={10} d={8} />
        <IsoBox x={1} y={1} w={3} d={2} h={1.2} accent />
        <IsoBox x={6} y={1} w={3} d={2} h={1.2} accent />
        <IsoBox x={1} y={5} w={3} d={2} h={1.2} />
        <IsoBox x={6} y={5} w={3} d={2} h={1.2} accent />
        <circle cx={ux} cy={uy} r="5" fill="var(--accent)" stroke="#fff" strokeWidth="1.8" />
        <LiveDot x={2.5} y={2} z={1.2} color="var(--ok)" />
        <LiveDot x={7.5} y={2} z={1.2} color="var(--danger)" />
        <LiveDot x={7.5} y={6} z={1.2} />
      </svg>
      {FEED.map((f) => (
        <div className="ui-card" key={f.who}>
          <div className="ui-row">
            <span>
              <strong>{f.who}</strong> {f.what}
            </span>
            <span className={`chip ${f.tone}`}>{f.badge}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
