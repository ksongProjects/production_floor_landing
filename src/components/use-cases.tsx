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
  /** One line under the tab's label: what this screen shows. */
  hint: string;
};

type ShowcaseBlock = {
  tag: string;
  title: string;
  tabs: [ShotTab, ...ShotTab[]];
};

const SHOWCASES: ShowcaseBlock[] = [
  {
    tag: "1 · Modern UI & Executive Command Center",
    title: "Every site, every floor — one live Command Center",
    tabs: [
      {
        id: "command-globe",
        label: "3D Globe Dashboard",
        crumb: "Executive · Command Center · Northwind Power Systems",
        badge: "● Live pulse · 2s",
        badgeTone: "live",
        src: "/screenshots/command-globe.png",
        alt: "FloorOS Command Center globe with a live ring on each of four plants in Calgary, Reno, Riverside and Mississauga, beside the Details window with company KPIs and the current bottleneck",
        hint: "Every plant as a live ring, with company KPIs, the current bottleneck and Write email beside it.",
      },
      {
        id: "command-floors",
        label: "Stacked Site Floors",
        crumb: "Executive · Riverside Plant · Stacked 3D Floors",
        badge: "Site layer · 2 floors",
        badgeTone: "default",
        src: "/screenshots/command-site-floors.png",
        alt: "FloorOS Command Center zoomed into Riverside Plant showing stacked glowing 3D floor plates for Fabrication Hall and Assembly & Wiring",
        hint: "One plant, its floors as stacked live plates. Click a plate to open that floor.",
      },
      {
        id: "company-live",
        label: "Company Live View",
        crumb: "Executive · Company Live Flow · 4 Plants · 8 Departments",
        badge: "8 departments · Live",
        badgeTone: "ok",
        src: "/screenshots/company-live.png",
        alt: "FloorOS Company Live View showing units per department from Suppliers to Wrap and shipping, AI advisor suggestions, four sites with their local time and headcount, and a ranked Needs attention list with late supplier lines",
        hint: "Units per department in route order, each plant's local time and headcount, late supplier lines.",
      },
    ],
  },
  {
    tag: "2 · Full Floor Visibility",
    title: "Every job, task, unit and station — live on Board & 3D Map",
    tabs: [
      {
        id: "board",
        label: "Live Station Board",
        crumb: "Manager · Fab Hall A · Live Board & AI Advisor",
        badge: "Delayed first · Live",
        badgeTone: "warn",
        src: "/screenshots/board.png",
        alt: "FloorOS live station Board showing expected-time pace bars, delayed stations floated to the top, and AI operational advisor suggestions",
        hint: "One card per station: who, which task and a pace bar. Delayed and paused stations come first.",
      },
      {
        id: "map-outline",
        label: "3D Moving-Outline Map",
        crumb: "Manager · Fab Hall A · 3D Isometric Control Room",
        badge: "Moving outlines · 3D",
        badgeTone: "live",
        src: "/screenshots/map-outline.png",
        alt: "FloorOS 3D isometric moving-outline floor map showing amber full bays, red blocked Bay 5, bottleneck badges, and ranked Needs Attention queue",
        hint: "Your real layout in 3D. Full bays turn amber, blocked bays red, waiting units are ranked.",
      },
    ],
  },
  {
    tag: "3 · Live Automated Floor Management",
    title: "QR code system & visual workflows that close gaps automatically",
    tabs: [
      {
        id: "automate",
        label: "Visual Automate Workflows",
        crumb: "Manager · Automate · Problem → repair job",
        badge: "● Auto-dispatched",
        badgeTone: "ok",
        src: "/screenshots/automate.png",
        alt: "FloorOS visual Automate workflow graph Problem to repair job with live green Run history panel",
        hint: "A reported problem becomes a repair job for the first free, trained technician. Every run is logged.",
      },
      {
        id: "shift-report",
        label: "Auto Shift Reports",
        crumb: "FloorOS Reports · Night Shift Report · Ready 15 min after shift",
        badge: "Auto-generated",
        badgeTone: "default",
        src: "/screenshots/shift-report.png",
        alt: "FloorOS automatic shift report showing pieces, worked hours, reported problems, workflow flags and Who worked where breakdown",
        hint: "Written 15 minutes after each shift: pieces, hours, problems, flags and who worked where.",
      },
    ],
  },
  {
    tag: "4 · Live Dashboard Statistics & Analytics",
    title: "Pinpoint bottlenecks with verified AI root-cause & before/after proof",
    tabs: [
      {
        id: "bottlenecks-ai",
        label: "Bottleneck & AI Root-Cause",
        crumb: "FloorOS Analytics · Bottlenecks · Assembly & Wiring",
        badge: "Figures checked",
        badgeTone: "ok",
        src: "/screenshots/bottlenecks-ai.png",
        alt: "FloorOS Bottlenecks report showing Wiring 1/2/3 bottleneck badge, AI Why and what to do causes and 4 Suggested fixes with Start improvement buttons",
        hint: "Names the step that limits output, explains why with checked figures and suggests fixes.",
      },
      {
        id: "bottlenecks-improvements",
        label: "Measured Improvements",
        crumb: "FloorOS Analytics · Stage Metrics & Improvement Tracking",
        badge: "Before vs. After",
        badgeTone: "default",
        src: "/screenshots/bottlenecks-improvements.png",
        alt: "FloorOS stage metrics table and Measured improvement card comparing before and after queue wait and output",
        hint: "Turn a fix into a tracked improvement, then compare queue wait and output before and after.",
      },
    ],
  },
  {
    tag: "5 · AI Assistant & Central Knowledge Base",
    title: "Cited Ask AI, push-to-talk voice notes & human-approved SOPs",
    tabs: [
      {
        id: "ask-ai",
        label: "Ask AI Assistant",
        crumb: "FloorOS Ask AI (Ctrl + J) · Cited SOP & Live Floor Answers",
        badge: "Permission-scoped",
        badgeTone: "ok",
        src: "/screenshots/ask-ai.png",
        alt: "FloorOS Ask AI glass slide-over drawer answering a Weld 1A safety and bottleneck question with clickable SOP source pills",
        hint: "Answers from your approved articles and the live floor, with a source link on every reply.",
      },
      {
        id: "knowledge-review",
        label: "Safety & SOP Review",
        crumb: "FloorOS Knowledge · Review Queue · Human Approval Required",
        badge: "Safety first",
        badgeTone: "warn",
        src: "/screenshots/knowledge-review.png",
        alt: "FloorOS Knowledge Review queue showing a red-bordered Safety review proposal with timestamped transcript excerpts and Accept & publish button",
        hint: "AI drafts article changes from voice notes. Safety items come first; nothing publishes unapproved.",
      },
      {
        id: "voice-note",
        label: "Voice Note & Summary",
        crumb: "FloorOS Notes · Voice Note · Live Transcript & AI Summary",
        badge: "Gloves-on capture",
        badgeTone: "live",
        src: "/screenshots/voice-note.png",
        alt: "FloorOS Voice note detail showing AI summary, Key points, red safety Watch out for badge and editable timestamped transcript",
        hint: "A spoken note becomes an editable transcript, a summary and Watch-out tags.",
      },
    ],
  },
];

function ShowcaseWindow({ block }: { block: ShowcaseBlock }) {
  const [activeId, setActiveId] = useState(block.tabs[0].id);
  const active = block.tabs.find((t) => t.id === activeId) ?? block.tabs[0];

  return (
    <article className="case-block reveal">
      <div className="case-head">
        <span className="tag">{block.tag}</span>
        <h3>{block.title}</h3>
      </div>

      <div className="app-window screenshot-window">
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
                <span className="shot-tab-label">{tab.label}</span>
                <span className="shot-tab-hint">{tab.hint}</span>
              </button>
            );
          })}
        </div>

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
            Real screens from FloorOS, showing demo data. Pick a view above each screen to see what
            it is and what it tells you.
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
