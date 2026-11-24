"use client";

import { useState } from "react";
import { PhoneArt } from "./visuals/phone";

type ShotTab = {
  id: string;
  label: string;
  crumb: string;
  badge: string;
  badgeTone?: "live" | "ok" | "warn" | "default";
  src: string;
  alt: string;
  caption: string;
  highlights: string[];
};

type ShowcaseBlock = {
  tag: string;
  title: string;
  summary: string;
  tabs: [ShotTab, ...ShotTab[]];
};

const SHOWCASES: ShowcaseBlock[] = [
  {
    tag: "1 · Modern UI & Executive Command Center",
    title: "Every site, every floor — one futuristic glass Command Center",
    summary:
      "Zoom seamlessly from a 3D dot-matrix globe of all sites into stacked translucent floor plates and live bays, with 2-second KPIs and AI-drafted status emails.",
    tabs: [
      {
        id: "command-globe",
        label: "3D Globe Dashboard",
        crumb: "Executive · Command Center · Northwind Power Systems",
        badge: "● Live pulse · 2s",
        badgeTone: "live",
        src: "/screenshots/command-globe.png",
        alt: "FloorOS Command Center 3D dot-matrix globe with floating glass Details window showing live multi-site KPIs and bottleneck status",
        caption:
          "3D dot-matrix globe with floating glass KPIs, 8-hour sparklines, active bottleneck badge and AI Write email (demo plant data).",
        highlights: [
          "Live site status rings across regions",
          "2-second KPIs & 8-hour sparklines",
          "AI-drafted email via Google / Microsoft",
        ],
      },
      {
        id: "command-floors",
        label: "Stacked Site Floors",
        crumb: "Executive · Riverside Plant · Stacked 3D Floors",
        badge: "Site layer · 2 floors",
        badgeTone: "default",
        src: "/screenshots/command-site-floors.png",
        alt: "FloorOS Command Center zoomed into Riverside Plant showing stacked glowing 3D floor plates for Fabrication Hall and Assembly & Wiring",
        caption:
          "Zoom into any plant to inspect stacked translucent floor plates, live headcount per floor, and bottleneck pressure (demo plant data).",
        highlights: [
          "Stacked translucent floor blueprints",
          "Instant floor switcher & heat status",
          "Click any plate to enter live 3D floor",
        ],
      },
      {
        id: "company-live",
        label: "Company Live View",
        crumb: "Executive · Company Live Flow · 4 Plants · 8 Departments",
        badge: "8 departments · Live",
        badgeTone: "ok",
        src: "/screenshots/company-live.png",
        alt: "FloorOS Company Live View showing 8-department flow strip, AI operational advisor suggestions, 4 sites across time zones, and ranked Needs attention list",
        caption:
          "Company-wide 8-department flow strip, live AI suggestions, per-site shift clocks and late supplier alerts (demo plant data).",
        highlights: [
          "All 8 departments in route order",
          "Local shift clocks per site",
          "Late supplier POs flagged early",
        ],
      },
    ],
  },
  {
    tag: "2 · Full Floor Visibility",
    title: "Every job, task, unit and station — live on Board & 3D Map",
    summary:
      "Replace whiteboards and floor walks with live station pace bars, trouble-first sorting, AI operational advisor moves, and a moving-outline 3D floor map.",
    tabs: [
      {
        id: "board",
        label: "Live Station Board",
        crumb: "Manager · Fab Hall A · Live Board & AI Advisor",
        badge: "Delayed first · Live",
        badgeTone: "warn",
        src: "/screenshots/board.png",
        alt: "FloorOS live station Board showing expected-time pace bars, delayed stations floated to the top, and AI operational advisor suggestions",
        caption:
          "Station cards sorted by Needs Attention with expected-time pace bars, linked SOP counts and one-click AI advisor suggestions (demo plant data).",
        highlights: [
          "Expected-time pace bars per station",
          "Delayed, paused & idle bays on top",
          "AI advisor suggests bottleneck moves",
        ],
      },
      {
        id: "map-outline",
        label: "3D Moving-Outline Map",
        crumb: "Manager · Fab Hall A · 3D Isometric Control Room",
        badge: "Moving outlines · 3D",
        badgeTone: "live",
        src: "/screenshots/map-outline.png",
        alt: "FloorOS 3D isometric moving-outline floor map showing amber full bays, red blocked Bay 5, bottleneck badges, and ranked Needs Attention queue",
        caption:
          "Glowing moving-outline 3D map flagging full bays in amber, blocked bays in red and waiting units ranked by wait time (demo plant data).",
        highlights: [
          "Full, blocked & bottleneck zones glow",
          "Ranked Needs Attention waiting queue",
          "Free a blocked bay & watch units move",
        ],
      },
    ],
  },
  {
    tag: "3 · Live Automated Floor Management",
    title: "QR code system & visual workflows that close gaps automatically",
    summary:
      "Printed station and zone QR codes drive starts, completions and material moves while visual Automate workflows route repairs, escalations and shift flags without radio calls.",
    tabs: [
      {
        id: "automate",
        label: "Visual Automate Workflows",
        crumb: "Manager · Automate · Problem → repair job",
        badge: "● Auto-dispatched",
        badgeTone: "ok",
        src: "/screenshots/automate.png",
        alt: "FloorOS visual Automate workflow graph Problem to repair job with live green Run history panel",
        caption:
          "Visual trigger-condition-action workflow routing reported problems to the first free, clocked-in, trained maintenance technician with audited run history (demo plant data).",
        highlights: [
          "First-free, clocked-in & trained routing",
          "Dry-run test on real historical events",
          "Step-by-step run history & kill switch",
        ],
      },
      {
        id: "shift-report",
        label: "Auto Shift Reports",
        crumb: "FloorOS Reports · Night Shift Report · Ready 15 min after shift",
        badge: "Auto-generated",
        badgeTone: "default",
        src: "/screenshots/shift-report.png",
        alt: "FloorOS automatic shift report showing pieces, worked hours, reported problems, workflow flags and Who worked where breakdown",
        caption:
          "Shift reports write themselves 15 minutes after every shift: pieces, hours, reported problems, workflow flags and operator breakdown (demo plant data).",
        highlights: [
          "Zero manual end-of-shift typing",
          "Problems & workflow flags rolled up",
          "Printable morning huddle & CSV export",
        ],
      },
    ],
  },
  {
    tag: "4 · Live Dashboard Statistics & Analytics",
    title: "Pinpoint bottlenecks with verified AI root-cause & before/after proof",
    summary:
      "Move past gut feel. FloorOS identifies the limiting step over days and weeks, explains why with SQL-checked figures, and measures before-and-after improvements.",
    tabs: [
      {
        id: "bottlenecks-ai",
        label: "Bottleneck & AI Root-Cause",
        crumb: "FloorOS Analytics · Bottlenecks · Assembly & Wiring",
        badge: "Figures SQL-checked",
        badgeTone: "ok",
        src: "/screenshots/bottlenecks-ai.png",
        alt: "FloorOS Bottlenecks report showing Wiring 1/2/3 bottleneck badge, AI Why and what to do causes and 4 Suggested fixes with Start improvement buttons",
        caption:
          "Bottlenecks report naming the limiting step with confidence, AI root-cause explanation and concrete Suggested fixes (demo plant data).",
        highlights: [
          "Limiting step named with confidence",
          "Every AI figure verified against SQL",
          "Start a tracked improvement in 1 click",
        ],
      },
      {
        id: "bottlenecks-improvements",
        label: "Measured Improvements",
        crumb: "FloorOS Analytics · Stage Metrics & Improvement Tracking",
        badge: "Before vs. After",
        badgeTone: "default",
        src: "/screenshots/bottlenecks-improvements.png",
        alt: "FloorOS stage metrics table and Measured improvement card comparing before and after queue wait and output",
        caption:
          "Compare queue wait time and daily output across your review window to verify whether a staffing, training or method change worked (demo plant data).",
        highlights: [
          "Per-stage busy %, wait & idle hours",
          "Measured before / after review windows",
          "Printable weekly bottleneck report",
        ],
      },
    ],
  },
  {
    tag: "5 · AI Assistant & Central Knowledge Base",
    title: "Cited Ask AI, push-to-talk voice notes & human-approved SOPs",
    summary:
      "Capture veteran know-how as spoken voice notes, review AI-drafted safety and SOP proposals with human sign-off, and let operators ask cited questions on any screen.",
    tabs: [
      {
        id: "ask-ai",
        label: "Ask AI Assistant",
        crumb: "FloorOS Ask AI (Ctrl + J) · Cited SOP & Live Floor Answers",
        badge: "Permission-scoped",
        badgeTone: "ok",
        src: "/screenshots/ask-ai.png",
        alt: "FloorOS Ask AI glass slide-over drawer answering a Weld 1A safety and bottleneck question with clickable SOP source pills",
        caption:
          "Floating Ask AI drawer answering from approved company SOPs and live floor state with clickable source links (demo plant data).",
        highlights: [
          "Answers from SOPs + live floor state",
          "Clickable source citations on every reply",
          "Surfaces unanswered Knowledge Gaps",
        ],
      },
      {
        id: "knowledge-review",
        label: "Safety & SOP Review",
        crumb: "FloorOS Knowledge · Review Queue · Human Approval Required",
        badge: "Safety first",
        badgeTone: "warn",
        src: "/screenshots/knowledge-review.png",
        alt: "FloorOS Knowledge Review queue showing a red-bordered Safety review proposal with timestamped transcript excerpts and Accept & publish button",
        caption:
          "AI proposes versioned SOP edits from floor voice notes with timestamped transcript citations — safety items highlighted red, nothing publishes unapproved (demo plant data).",
        highlights: [
          "Safety proposals prioritised in red",
          "Timestamped transcript evidence",
          "Version history & one-click rollback",
        ],
      },
      {
        id: "voice-note",
        label: "Voice Note & Summary",
        crumb: "FloorOS Notes · Voice Note · Live Transcript & AI Summary",
        badge: "Gloves-on capture",
        badgeTone: "live",
        src: "/screenshots/voice-note.png",
        alt: "FloorOS Voice note detail showing AI summary, Key points, red safety Watch out for badge and editable timestamped transcript",
        caption:
          "Spoken operator notes transcribe automatically into editable timestamped text, AI summaries and safety Watch-Out tags (demo plant data).",
        highlights: [
          "Streams from Android to web live",
          "Inline editable transcript & key points",
          "Feeds Watch-Out alerts automatically",
        ],
      },
    ],
  },
];

function ShowcaseWindow({ block }: { block: ShowcaseBlock }) {
  const [activeId, setActiveId] = useState(block.tabs[0].id);
  const active = block.tabs.find((t) => t.id === activeId) ?? block.tabs[0];

  return (
    <article className="case-block reveal">
      <div className="case-head-row">
        <div className="case-head">
          <span className="tag">{block.tag}</span>
          <h3>{block.title}</h3>
          <p className="case-summary">{block.summary}</p>
        </div>
        {block.tabs.length > 1 ? (
          <div className="shot-tabs" role="tablist" aria-label={`${block.title} views`}>
            {block.tabs.map((tab) => {
              const selected = tab.id === active.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`shot-tab${selected ? " active" : ""}`}
                  onClick={() => setActiveId(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="app-window screenshot-window">
        <div className="app-topbar">
          <div className="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="app-crumb">
            <strong>{active.crumb}</strong>
          </div>
          <span className={`chip${active.badgeTone && active.badgeTone !== "default" ? ` ${active.badgeTone}` : ""}`}>
            {active.badge}
          </span>
        </div>

        <div className="shot-frame">
          <img
            src={active.src}
            alt={active.alt}
            width={1600}
            height={1000}
            loading="lazy"
            className="shot-img"
          />
        </div>

        <div className="shot-footer">
          <p className="shot-caption">{active.caption}</p>
          <div className="shot-pills">
            {active.highlights.map((h) => (
              <span className="chip idle" key={h}>
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function UseCases() {
  return (
    <section className="screen alt" id="use-cases">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Real product screens</p>
          <h2>See FloorOS running real shop-floor workflows.</h2>
          <p className="lead">
            Captured directly from the live FloorOS dark-glass interface — switch views on any
            section to explore Command Center, 3D maps, workflows, analytics and AI knowledge.
          </p>
        </div>

        <div className="cases-stack">
          {SHOWCASES.map((block) => (
            <ShowcaseWindow block={block} key={block.tag} />
          ))}

          <article className="case-block reveal">
            <div className="case-head">
              <span className="tag">6 · Pro (Android)</span>
              <h3>One-scan station QR, Watch-Out safety alerts &amp; offline voice notes</h3>
              <p className="case-summary">
                Purpose-built for operators and trades on the shop floor — works in Wi-Fi dead zones
                and syncs automatically when back in range.
              </p>
            </div>
            <div className="app-window">
              <div className="app-topbar">
                <div className="window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="app-crumb">
                  FloorOS Pro · <strong>Android Trades App</strong> · Wiring Bay 2 (Sam K.)
                </div>
                <span className="chip ok">● Offline-ready queue</span>
              </div>
              <div className="app-body split-2">
                <div className="pro-showcase">
                  <PhoneArt />
                </div>
                <div className="ui-stack">
                  <div className="ui-card">
                    <div className="ui-row">
                      <div>
                        <div className="ui-title">1 · Instant Station &amp; Move Scan</div>
                        <div className="ui-muted">
                          Point camera at bay or destination zone QR to start task or close move job
                        </div>
                      </div>
                      <span className="chip">QR Scan</span>
                    </div>
                  </div>
                  <div className="ui-card">
                    <div className="ui-row">
                      <div>
                        <div className="ui-title">2 · Watch-Out Safety &amp; Step Drawings</div>
                        <div className="ui-muted">
                          Auto-displays linked safety warnings &amp; drawings before timer starts
                        </div>
                      </div>
                      <span className="chip warn">▲ Step 3</span>
                    </div>
                  </div>
                  <div className="ui-card">
                    <div className="ui-row">
                      <div>
                        <div className="ui-title">3 · Push-to-Talk Voice &amp; Ask AI</div>
                        <div className="ui-muted">
                          Speak notes gloves-on or ask cited troubleshooting questions from SOPs
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
                        <div className="ui-title">4 · Dead-Zone Offline Sync</div>
                        <div className="ui-muted">
                          Pieces, pauses, photos and audio chunks queue locally and replay once
                        </div>
                      </div>
                      <span className="chip ok">Synced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
