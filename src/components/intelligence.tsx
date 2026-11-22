const STAGES = [
  { name: "Fabrication", util: "71%", note: "0.4h wait" },
  { name: "Assembly", util: "78%", note: "0.6h wait" },
  { name: "Wiring", util: "96%", note: "2.4h wait", bottleneck: true },
  { name: "Test & QA", util: "58%", note: "Starved 28%" },
];

export function Intelligence() {
  return (
    <section className="screen alt" id="intelligence">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">AI, Knowledge &amp; Bottlenecks</p>
          <h2>Hard numbers find the bottleneck. Floor knowledge fixes it.</h2>
          <p className="lead">
            Capture what your best tradespeople know while they work, pinpoint the exact stage
            holding back output, and keep a human in charge of every change.
          </p>
        </div>

        <div className="intel-grid">
          <article className="intel-card reveal">
            <div className="ui-row">
              <span className="chip danger">Bottleneck analysis</span>
              <span className="ui-muted">Verified numbers · AI root cause</span>
            </div>
            <h3>See what limits output — and prove the fix worked</h3>
            <p className="intel-lead">
              FloorOS measures station utilisation, queue times, blocked bays and starved downstream
              steps over days and weeks to rank your true constraints. AI combines those metrics
              with floor notes to explain why and recommend fixes — with every number checked
              against real floor data so it never guesses.
            </p>
            <div className="stage-strip" aria-label="Department utilisation strip">
              {STAGES.map((s) => (
                <div className={`stage-pill${s.bottleneck ? " bottleneck" : ""}`} key={s.name}>
                  <strong>{s.name}</strong>
                  <div className="ui-muted">
                    {s.util} · {s.note}
                  </div>
                </div>
              ))}
            </div>
            <div className="intel-quote">
              “Wiring was the bottleneck on 4 of the last 5 days (2.4 h average wait; only 2 of 7
              qualified wirers rostered on day shift). Cross-train 2 assemblers or stagger breaks to
              recover +3.2 units/day.”
              <span className="ui-muted">
                Every figure verified against floor data · Bottleneck badge highlighted on Board
                &amp; 3D map
              </span>
            </div>
            <div className="ui-card">
              <div className="ui-row">
                <div>
                  <div className="ui-title">Tracked improvement · Stagger Wiring breaks</div>
                  <div className="ui-muted">2-week before &amp; after comparison</div>
                </div>
                <span className="chip ok">Queue −48% · Output +11%</span>
              </div>
            </div>
          </article>

          <article className="intel-card reveal">
            <div className="ui-row">
              <span className="chip">Knowledge base · Voice · Ask AI</span>
              <span className="ui-muted">Human-approved</span>
            </div>
            <h3>Turn spoken shop notes into living SOPs</h3>
            <p className="intel-lead">
              Operators hold a button to speak a note mid-task; a live transcript lands on the web
              in seconds. AI extracts key points and drafts SOP or safety updates for a manager to
              approve. Anyone on the floor can ask a question and get an instant answer citing your
              own approved articles.
            </p>
            <div className="ui-stack">
              <div className="ui-card">
                <div className="ui-row">
                  <div>
                    <div className="ui-title">Voice note · Sam · Wiring Bay 2</div>
                    <div className="ui-muted">
                      “Torque lug #4 before routing the harness or the cover binds…”
                    </div>
                  </div>
                  <span className="chip live">Live transcript</span>
                </div>
              </div>
              <div className="ui-card">
                <div className="ui-row">
                  <div>
                    <div className="ui-title">Proposed update → Wiring SOP (v5)</div>
                    <div className="ui-muted">
                      Adds Watch-out reminder to Step 3 · Tagged for quality review
                    </div>
                  </div>
                  <span className="chip warn">Awaiting approval</span>
                </div>
              </div>
              <div className="ui-card">
                <div className="ui-row">
                  <div>
                    <div className="ui-title">Live floor advisor · Suggestion</div>
                    <div className="ui-muted">
                      Reassign 1 idle qualified wirer from Bay 4 → Bay 2 to clear 4-unit queue
                    </div>
                  </div>
                  <span className="chip ok">Accept</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="intel-note reveal">
          <div>
            <strong>Your models, your guardrails, zero surprises.</strong> Connect Anthropic, OpenAI
            or Google with a per-company switch, monthly spend cap and full usage log — or run
            completely AI-free with self-hosted voice transcription.
          </div>
          <span className="chip">Cites your approved SOPs · Never trains external models</span>
        </div>
      </div>
    </section>
  );
}
