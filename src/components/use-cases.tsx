import { IsoBox, IsoFloor, LiveDot, project } from "./iso";
import { PhoneArt } from "./visuals/phone";

const DEPTS = [
  { name: "Planning", units: 14, staff: 18, load: 52 },
  { name: "Suppliers", units: 19, staff: 24, load: 64, warn: "2 late POs" },
  { name: "Fabrication", units: 31, staff: 142, load: 74 },
  { name: "Assembly", units: 28, staff: 196, load: 81 },
  { name: "Wiring", units: 42, staff: 118, load: 96, bottleneck: true },
  { name: "Test & QA", units: 12, staff: 64, load: 58 },
  { name: "Rework", units: 4, staff: 22, load: 45 },
  { name: "Shipping", units: 21, staff: 54, load: 70 },
];

const SITES = [
  { site: "Calgary Plant", tz: "08:42 MST · Day Shift", active: 284, idle: 12, flow: "Wiring 96%" },
  {
    site: "Houston Switchgear",
    tz: "09:42 CST · Day Shift",
    active: 342,
    idle: 18,
    flow: "On pace",
  },
  { site: "Toronto Assembly", tz: "10:42 EST · Day Shift", active: 218, idle: 9, flow: "On pace" },
];

function ExecutiveScreen() {
  return (
    <div className="app-window">
      <div className="app-topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="app-crumb">
          FloorOS Executive Suite · <strong>Northwind Power Systems</strong> (4 Sites · 940 People)
        </div>
        <span className="chip live">● Live pulse · 2s</span>
      </div>
      <div className="app-body">
        <div className="kpi-row">
          <div className="kpi-tile">
            <span className="ui-muted">Active on floor</span>
            <strong>844 / 940</strong>
            <span className="chip ok">90% utilised</span>
          </div>
          <div className="kpi-tile">
            <span className="ui-muted">Units shipped today</span>
            <strong>38 units</strong>
            <span className="chip">+11% vs 7d avg</span>
          </div>
          <div className="kpi-tile alert">
            <span className="ui-muted">Active Bottleneck</span>
            <strong>Wiring · 2.4h queue</strong>
            <span className="chip danger">−3.2 units/day capacity gap</span>
          </div>
          <div className="kpi-tile">
            <span className="ui-muted">Daily Schedule &amp; Teams</span>
            <strong>09:00 Huddle Synced</strong>
            <span className="chip ok">MS Teams · Calendar</span>
          </div>
        </div>

        <div className="dept-flow-box">
          <div className="ui-row" style={{ marginBottom: 8 }}>
            <span className="ui-title">Company-wide live department flow</span>
            <span className="ui-muted">Animated unit tokens moving stage to stage</span>
          </div>
          <div className="dept-track" aria-hidden="true">
            <span className="flow-token t1" />
            <span className="flow-token t2" />
            <span className="flow-token t3" />
          </div>
          <div className="dept-grid">
            {DEPTS.map((d) => (
              <div className={`dept-col${d.bottleneck ? " bottleneck" : ""}`} key={d.name}>
                <div className="dept-name">{d.name}</div>
                <div className="dept-num">{d.units} u</div>
                <div className="ui-muted">{d.staff} staff</div>
                <div className="ui-bar">
                  <span
                    className={d.bottleneck ? "bar-danger" : "bar-anim"}
                    style={{ width: `${d.load}%` }}
                  />
                </div>
                {d.bottleneck ? (
                  <span className="dept-tag danger">Bottleneck · 96%</span>
                ) : d.warn ? (
                  <span className="dept-tag warn">{d.warn}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="site-table">
          {SITES.map((s) => (
            <div className="site-row" key={s.site}>
              <div>
                <strong>{s.site}</strong>
                <span className="ui-muted"> · {s.tz}</span>
              </div>
              <div className="ui-row" style={{ gap: 8 }}>
                <span className="chip ok">{s.active} working</span>
                <span className="chip idle">{s.idle} free</span>
                <span className={`chip ${s.flow.includes("96") ? "danger" : ""}`}>{s.flow}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ManagerScreen() {
  const [ux, uy] = project(4.8, 3.8, 0.35);
  return (
    <div className="app-window">
      <div className="app-topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="app-crumb">
          FloorOS Manager · <strong>Assembly Hall B</strong> · Board, 3D Map &amp; Automate
        </div>
        <span className="chip ok">42 clocked in · 0 untrained</span>
      </div>
      <div className="app-body split-2">
        <div className="ui-stack">
          <div className="ui-card station-card alert">
            <div className="ui-row">
              <div>
                <div className="ui-title">Wiring Bay 2 · Sam K.</div>
                <div className="ui-muted">CO-482910 · Unit 3 · Control wiring (52m / 45m est.)</div>
              </div>
              <span className="chip danger">Bottleneck · Delayed</span>
            </div>
            <div className="ui-bar">
              <span className="bar-danger" style={{ width: "92%" }} />
            </div>
          </div>

          <div className="ui-card station-card">
            <div className="ui-row">
              <div>
                <div className="ui-title">Assembly Bay 1 · Maya R.</div>
                <div className="ui-muted">CO-482910 · Unit 4 · Busbar mount (24m / 40m est.)</div>
              </div>
              <span className="chip ok">On pace · 18/24 pcs</span>
            </div>
            <div className="ui-bar">
              <span className="bar-anim" style={{ width: "64%" }} />
            </div>
          </div>

          <div className="ui-card">
            <div className="ui-row" style={{ marginBottom: 6 }}>
              <span className="ui-title">Automate · Live gap-closing run #14</span>
              <span className="chip live">● Auto-dispatched</span>
            </div>
            <div className="mini-flow">
              <span className="mini-node danger">Hi-Pot Test Failed (U-07)</span>
              <span className="mini-arrow" aria-hidden="true" />
              <span className="mini-node">First Free · Certified (Dana)</span>
              <span className="mini-arrow" aria-hidden="true" />
              <span className="mini-node ok">Rework Job + Shift Flag</span>
            </div>
          </div>
        </div>

        <div className="map-pane">
          <div className="ui-row" style={{ marginBottom: 6 }}>
            <span className="ui-muted">3D Live Map · Tilt &amp; aisle unit flow</span>
            <span className="chip">2D / 3D</span>
          </div>
          <svg
            viewBox="-150 -40 360 235"
            role="img"
            aria-label="3D live floor map inside FloorOS Manager"
          >
            <IsoFloor w={10} d={8} />
            <IsoBox x={1} y={1} w={3} d={2} h={1.2} accent />
            <IsoBox x={6} y={1} w={3} d={2} h={1.2} accent />
            <IsoBox x={1} y={5} w={3} d={2} h={1.2} />
            <IsoBox x={6} y={5} w={3} d={2} h={1.2} accent />
            <circle cx={ux} cy={uy} r="5.5" fill="var(--accent)" stroke="#fff" strokeWidth="1.8">
              <animate
                attributeName="cx"
                values={`${(ux - 22).toFixed(1)};${(ux + 28).toFixed(1)};${(ux - 22).toFixed(1)}`}
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
            <LiveDot x={2.5} y={2} z={1.2} color="var(--ok)" />
            <LiveDot x={7.5} y={2} z={1.2} color="var(--danger)" />
            <LiveDot x={7.5} y={6} z={1.2} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IntelligenceScreen() {
  return (
    <div className="app-window">
      <div className="app-topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="app-crumb">
          FloorOS Intelligence · <strong>Bottleneck Root-Cause &amp; Voice-to-SOP</strong>
        </div>
        <span className="chip">Figures verified · Human-approved</span>
      </div>
      <div className="app-body split-2">
        <div className="ui-stack">
          <div className="ui-row">
            <span className="chip danger">Bottleneck Report · Last 7 Days</span>
            <span className="chip ok">Queue −48% · Output +11%</span>
          </div>
          <div className="intel-quote">
            “<strong>Wiring</strong> led 4 of 5 days (96% utilised, 2.4h queue; 2 of 7 qualified
            wirers on Day shift). Stagger breaks &amp; cross-train 2 assemblers for{" "}
            <strong>+3.2 units/day</strong>.”
            <span className="ui-muted">Every number cross-checked against floor SQL metrics</span>
          </div>
          <div className="ui-card">
            <div className="ui-row">
              <div>
                <div className="ui-title">AI Advisor · Live Floor Action</div>
                <div className="ui-muted">
                  Move 1 idle qualified wirer (Bay 4 → Bay 2) to clear 4-unit queue
                </div>
              </div>
              <span className="chip ok">Accept</span>
            </div>
          </div>
        </div>

        <div className="ui-stack">
          <div className="ui-card">
            <div className="ui-row">
              <div>
                <div className="ui-title">Live Voice Note · Sam (Wiring Bay 2)</div>
                <div className="ui-muted">
                  “Torque lug #4 before routing the harness or the cover binds…”
                </div>
              </div>
              <div className="waveform" aria-label="Animated voice waveform">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="ui-card">
            <div className="ui-row">
              <div>
                <div className="ui-title">AI Proposal → Wiring SOP v5</div>
                <div className="ui-muted">
                  Adds Watch-Out alert to Step 3 · Cited in Ask AI assistant
                </div>
              </div>
              <span className="chip warn">Approve diff</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UseCases() {
  return (
    <section className="screen alt" id="use-cases">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Live platform screens</p>
          <h2>See FloorOS running real shop-floor workflows.</h2>
          <p className="lead">
            From 5,000-person enterprise flow down to a single station scan and spoken voice note.
          </p>
        </div>

        <div className="cases-stack">
          <article className="case-block reveal">
            <div className="case-head">
              <span className="tag">Use Case 1 · FloorOS Executive Suite</span>
              <h3>Multi-site department flow, bottleneck cost &amp; daily schedule sync</h3>
            </div>
            <ExecutiveScreen />
          </article>

          <article className="case-block reveal">
            <div className="case-head">
              <span className="tag">Use Case 2 · FloorOS Manager</span>
              <h3>Live station Board, 3D aisle map &amp; zero-touch gap automation</h3>
            </div>
            <ManagerScreen />
          </article>

          <article className="case-block reveal">
            <div className="case-head">
              <span className="tag">Use Case 3 · AI &amp; Knowledge Base</span>
              <h3>Verified bottleneck root-cause fixes &amp; live voice-to-SOP pipeline</h3>
            </div>
            <IntelligenceScreen />
          </article>

          <article className="case-block reveal">
            <div className="case-head">
              <span className="tag">Use Case 4 · FloorOS Pro (Android)</span>
              <h3>One-scan station start, Watch-Out step warnings &amp; offline voice notes</h3>
            </div>
            <div className="pro-showcase">
              <PhoneArt />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
