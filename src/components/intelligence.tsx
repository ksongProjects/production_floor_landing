const STAGES = [
  { name: "Fabrication", util: "71%", note: "0.4h queue" },
  { name: "Assembly", util: "78%", note: "0.6h queue" },
  { name: "Wiring", util: "96%", note: "2.4h queue", bottleneck: true },
  { name: "Test & QA", util: "58%", note: "Starved 28%" },
];

export function Intelligence() {
  return (
    <section className="screen alt" id="intelligence">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">AI, Knowledge &amp; Bottlenecks</p>
          <h2>Numbers find the bottleneck. Floor knowledge and AI help fix it.</h2>
          <p className="lead">
            Capture what your best operators know without slowing them down, pinpoint what actually
            limits output over days and weeks, and keep a human in charge of every approval.
          </p>
        </div>

        <div className="intel-grid">
          <article className="intel-card reveal">
            <div className="ui-row">
              <span className="chip danger">Bottleneck analysis</span>
              <span className="ui-muted">SQL metrics · AI explanation</span>
            </div>
            <h3>Pinpoint what limits output — then measure the fix</h3>
            <p className="intel-lead">
              Exact SQL queries compute utilisation, queue time, blocked and starved hours, lost
              daily output and cause signals. AI reads those figures plus linked floor notes to
              explain why and propose concrete actions — every number verified against real data.
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
              “Wiring led 4 of the last 5 days (2.4 h wait before it; 2 of 7 qualified wirers on day
              shift). Cross-train 2 assemblers or stagger breaks to recover +3.2 units/day.”
              <span className="ui-muted">
                Every figure checked against floor data · Bottleneck badge shown on Board &amp; 3D
                map
              </span>
            </div>
            <div className="ui-card">
              <div className="ui-row">
                <div>
                  <div className="ui-title">Tracked improvement · Stagger Wiring breaks</div>
                  <div className="ui-muted">2-week before / after check</div>
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
            <h3>Turn shop-floor voice notes into live company knowledge</h3>
            <p className="intel-lead">
              Operators hold to record a note on their phone; transcripts stream onto the web in
              seconds. AI summarises key points and drafts article updates for your central
              knowledge base. Ask answers questions with exact citations, and the live advisor
              suggests floor moves — never acting without a person pressing Accept.
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
                    <div className="ui-title">Proposed edit → Wiring SOP (v5)</div>
                    <div className="ui-muted">
                      Adds Watch-out item linked to Step 3 · Safety &amp; quality tagged
                    </div>
                  </div>
                  <span className="chip warn">Review queue</span>
                </div>
              </div>
              <div className="ui-card">
                <div className="ui-row">
                  <div>
                    <div className="ui-title">Operational advisor · Live suggestion</div>
                    <div className="ui-muted">
                      Move 1 idle qualified wirer from Bay 4 → Bay 2 to clear 4-unit queue
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
            <strong>Your models, your rules, zero surprises.</strong> Choose Anthropic, OpenAI or
            Google with a per-company opt-in switch, monthly spend cap and audit trail — or run
            completely AI-free (including self-hosted Whisper transcription for on-prem).
          </div>
          <span className="chip">Retrieval (RAG) with citations · No model training</span>
        </div>
      </div>
    </section>
  );
}
