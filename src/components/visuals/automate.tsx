// Visual Automate workflow: event trigger -> qualified routing -> dispatched job + shift flag.
export function AutomateArt() {
  return (
    <div className="ui-stack">
      <div className="ui-row">
        <span className="chip ok">● Active workflow</span>
        <span className="ui-muted">Test run passed · 14 runs today</span>
      </div>
      <div className="flow-chain">
        <div className="ui-card">
          <div className="ui-row">
            <div>
              <div className="ui-muted">1 · Trigger</div>
              <div className="ui-title">Test &amp; inspection task failed</div>
            </div>
            <span className="chip danger">Event</span>
          </div>
        </div>
        <div className="flow-arrow" aria-hidden="true" />
        <div className="ui-card">
          <div className="ui-row">
            <div>
              <div className="ui-muted">2 · Match person</div>
              <div className="ui-title">First free in Rework team</div>
            </div>
            <span className="chip">Clocked in · Trained</span>
          </div>
        </div>
        <div className="flow-arrow" aria-hidden="true" />
        <div className="ui-card">
          <div className="ui-row">
            <div>
              <div className="ui-muted">3 · Actions</div>
              <div className="ui-title">Send rework job + move unit to Rework</div>
            </div>
            <span className="chip live">Push</span>
          </div>
          <div className="ui-muted" style={{ marginTop: 6 }}>
            Attaches failure notes &amp; photos · Flags shift report · Increments rework KPI
          </div>
        </div>
      </div>
    </div>
  );
}
