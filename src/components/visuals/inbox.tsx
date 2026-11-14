const ITEMS = [
  {
    kind: "Job",
    title: "Swap the blade on Saw 2",
    to: "Maintenance team",
    status: "Taken by Ana",
    tone: "ok",
  },
  {
    kind: "Job",
    title: "Restock labels at Pack",
    to: "Floor 1",
    status: "Open",
    tone: "idle",
    accept: true,
  },
  {
    kind: "Job",
    title: "Recalibrate the QA scale",
    to: "Lee",
    status: "Done · problem",
    tone: "live",
    note: "Scale drifts after warm-up. Needs a new sensor.",
  },
  {
    kind: "Notice",
    title: "Fire drill today at 14:00",
    to: "Floor 1",
  },
];

// The inbox: jobs sent to a person, a team or a floor, and a notice.
export function InboxArt() {
  return (
    <div className="ui-stack">
      <div className="ui-row">
        <div className="ui-title">Inbox</div>
        <div className="ui-row" style={{ gap: 6 }}>
          <span className="chip">To do · 2</span>
          <span className="chip idle">Sent</span>
        </div>
      </div>
      {ITEMS.map((m) => (
        <div className="ui-card" key={m.title}>
          <div className="ui-row" style={{ alignItems: "flex-start" }}>
            <div style={{ minWidth: 0 }}>
              <div className="ui-muted">
                {m.kind} · to {m.to}
              </div>
              <div className="ui-title">{m.title}</div>
            </div>
            {m.status ? <span className={`chip ${m.tone}`}>{m.status}</span> : null}
          </div>
          {m.note ? (
            <p className="ui-muted" style={{ margin: "8px 0 0" }}>
              “{m.note}”
            </p>
          ) : null}
          {m.accept ? (
            <div className="ui-row" style={{ justifyContent: "flex-start", gap: 6, marginTop: 10 }}>
              <span className="ui-btn primary">Accept</span>
              <span className="ui-btn">Go to station</span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
