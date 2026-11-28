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
    tag: "1 · Command center",
    title: "Every site and department, live",
    tabs: [
      {
        id: "command-center",
        label: "Command center",
        crumb: "Executive · Command center · Northwind Power Systems",
        badge: "● Live",
        badgeTone: "live",
        src: "/screenshots/command-center.png",
        alt: "FloorOS Command center map with four plants and the Riverside Plant details open: people here, output today, on pace, current bottleneck and needs attention",
        hint: "All plants on one map. Click one for live numbers, the bottleneck and what needs attention.",
      },
      {
        id: "company-live",
        label: "Company view",
        crumb: "Executive · Company · 4 plants · 8 departments",
        badge: "Updates every 2 s",
        badgeTone: "ok",
        src: "/screenshots/company-live.png",
        alt: "FloorOS Company view with people here, units per department from Suppliers to Wrap and shipping, and the Switchgear line by stage",
        hint: "People here, units per department in route order, and each line stage by stage.",
      },
    ],
  },
  {
    tag: "2 · Live floor",
    title: "See which units move and which wait",
    tabs: [
      {
        id: "map-live",
        label: "Live floor map",
        crumb: "Manager · Fab Hall A · Map",
        badge: "Units by state",
        badgeTone: "live",
        src: "/screenshots/map-live.png",
        alt: "FloorOS live floor map from the top with unit tokens coloured by state, a status strip with counts, a unit hover card and the Needs attention list",
        hint: "Every unit by state. Point at one to see who is on it and why it waits.",
      },
      {
        id: "line-view",
        label: "Line view",
        crumb: "Company · Lines · Switchgear",
        badge: "Supply → ship",
        badgeTone: "default",
        src: "/screenshots/line-view.png",
        alt: "FloorOS line view of the Switchgear line from Supply through Receive, Fabrication, Assembly and Wiring with units per stage by state and per floor",
        hint: "One line from supply to shipping: units per stage, by state and by floor.",
      },
      {
        id: "board",
        label: "Station Board",
        crumb: "Manager · Fab Hall A · Board",
        badge: "Delayed first",
        badgeTone: "warn",
        src: "/screenshots/board.png",
        alt: "FloorOS live station Board with pace bars and delayed stations first",
        hint: "One card per station: who, which task, and a pace bar. Trouble sorts to the top.",
      },
    ],
  },
  {
    tag: "3 · Automate",
    title: "Workflows close the gaps between jobs",
    tabs: [
      {
        id: "automate",
        label: "Workflows",
        crumb: "Manager · Automate · Problem → repair job",
        badge: "● Run history",
        badgeTone: "ok",
        src: "/screenshots/automate.png",
        alt: "FloorOS Automate workflow Problem to repair job with its run history",
        hint: "A reported problem becomes a repair job for the first free, trained person. Every run is logged.",
      },
      {
        id: "shift-report",
        label: "Shift reports",
        crumb: "Reports · Shift report",
        badge: "Written for you",
        badgeTone: "default",
        src: "/screenshots/shift-report.png",
        alt: "FloorOS shift report with pieces, worked hours, reported problems and who worked where",
        hint: "Ready 15 minutes after each shift: pieces, hours, problems and who worked where.",
      },
    ],
  },
  {
    tag: "4 · Bottlenecks",
    title: "The bottleneck, why, and what to do",
    tabs: [
      {
        id: "bottlenecks-ai",
        label: "Causes and fixes",
        crumb: "Reports · Bottlenecks · Assembly & Wiring",
        badge: "Figures checked",
        badgeTone: "ok",
        src: "/screenshots/bottlenecks-ai.png",
        alt: "FloorOS Bottlenecks report naming the Wiring step as bottleneck, with likely causes and four suggested fixes",
        hint: "Names the step that limits output, explains why and suggests fixes.",
      },
      {
        id: "bottlenecks-improvements",
        label: "Measured improvements",
        crumb: "Reports · Bottlenecks · Improvements",
        badge: "Before vs. after",
        badgeTone: "default",
        src: "/screenshots/bottlenecks-improvements.png",
        alt: "FloorOS stage metrics table and Measured improvement card comparing before and after queue wait and output",
        hint: "Turn a fix into a tracked improvement and compare before and after.",
      },
    ],
  },
  {
    tag: "5 · Knowledge & Ask AI",
    title: "Spoken know-how becomes approved SOPs",
    tabs: [
      {
        id: "ask-ai",
        label: "Ask AI",
        crumb: "Ask AI · Answers with sources",
        badge: "Permission-scoped",
        badgeTone: "ok",
        src: "/screenshots/ask-ai.png",
        alt: "FloorOS Ask AI panel answering a weld station question with clickable SOP sources",
        hint: "Answers from your approved articles and the live floor, with the sources linked.",
      },
      {
        id: "knowledge-review",
        label: "Review queue",
        crumb: "Knowledge · Review",
        badge: "Safety first",
        badgeTone: "warn",
        src: "/screenshots/knowledge-review.png",
        alt: "FloorOS Knowledge Review queue with a safety proposal awaiting approval",
        hint: "AI drafts SOP changes from voice notes. Nothing publishes without approval.",
      },
      {
        id: "voice-note",
        label: "Voice note",
        crumb: "Notes · Voice note",
        badge: "Gloves-on capture",
        badgeTone: "live",
        src: "/screenshots/voice-note.png",
        alt: "FloorOS voice note with its summary, key points, watch-out tags and transcript",
        hint: "A spoken note becomes a transcript, a summary and watch-out tags.",
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
          <h2>See FloorOS running.</h2>
          <p className="lead">
            Real screens, demo data. Pick a view above each screen.
          </p>
        </div>

        <div className="cases-stack">
          {SHOWCASES.map((block) => (
            <ShowcaseWindow block={block} key={block.tag} />
          ))}

          <article className="case-block reveal">
            <div className="case-head">
              <span className="tag">6 · Pro (Android)</span>
              <h3>Scan, work, speak, ask. Even offline.</h3>
              <p className="case-summary">
                The phone app for operators. Works without Wi-Fi and syncs when back in range.
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
                        <div className="ui-title">1 · Scan to start</div>
                        <div className="ui-muted">
                          Scan a station or zone QR to start a task or close a move job
                        </div>
                      </div>
                      <span className="chip">QR Scan</span>
                    </div>
                  </div>
                  <div className="ui-card">
                    <div className="ui-row">
                      <div>
                        <div className="ui-title">2 · Watch-outs and drawings</div>
                        <div className="ui-muted">
                          Safety reminders and drawings before the timer starts
                        </div>
                      </div>
                      <span className="chip warn">▲ Step 3</span>
                    </div>
                  </div>
                  <div className="ui-card">
                    <div className="ui-row">
                      <div>
                        <div className="ui-title">3 · Voice notes and Ask AI</div>
                        <div className="ui-muted">
                          Speak a note gloves-on, or ask and get answers with sources
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
                        <div className="ui-title">4 · Offline queue</div>
                        <div className="ui-muted">
                          Pieces, photos and audio queue locally and sync once
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
