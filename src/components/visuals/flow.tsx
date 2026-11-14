"use client";

import { useState } from "react";

type Outcome = "ok" | "problem";

const T = { fontFamily: "system-ui, sans-serif" } as const;

function Node({
  x,
  y,
  title,
  sub,
  on,
  accent = false,
  w = 180,
}: {
  x: number;
  y: number;
  title: string;
  sub: string;
  on: boolean;
  accent?: boolean;
  w?: number;
}) {
  return (
    <g className={`flow-node${on ? "" : " off"}`}>
      <rect
        x={x}
        y={y}
        width={w}
        height={56}
        rx={12}
        fill={accent ? "var(--accent)" : "var(--surface)"}
        stroke={accent ? "none" : on ? "var(--accent)" : "var(--border)"}
        strokeWidth={accent ? 0 : 1.5}
      />
      <text
        x={x + w / 2}
        y={y + 24}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill={accent ? "var(--accent-text)" : "var(--text)"}
        {...T}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + 42}
        textAnchor="middle"
        fontSize="10.5"
        fill={accent ? "var(--accent-text)" : "var(--muted)"}
        {...T}
      >
        {sub}
      </text>
    </g>
  );
}

const BRANCH = {
  problem: [
    { title: "Send repair job", sub: "Maintenance · first available" },
    { title: "Flag in shift report", sub: "For the morning meeting" },
  ],
  ok: [
    { title: "Update KPIs", sub: "Output · time to finish" },
    { title: "Offer next task", sub: "Same person, same station" },
  ],
} as const;

const LABEL = {
  problem:
    "Job finished with a problem: send a repair job to the first available person in Maintenance, then flag it in the shift report",
  ok: "Job finished ok: update the KPIs, then offer the next task to the same person",
} as const;

/**
 * A workflow drawn in the builder: when a job is finished, branch on its outcome.
 * The switch picks the outcome and lights up the path the flow would take.
 */
export function FlowArt() {
  const [outcome, setOutcome] = useState<Outcome>("problem");
  const yes = outcome === "problem";

  return (
    <div className="ui-stack flow">
      <div className="ui-row">
        <div>
          <div className="ui-muted">Workflow</div>
          <div className="ui-title">Problem follow-up</div>
        </div>
        <div className="flow-toggle" role="group" aria-label="Try an outcome">
          {(["ok", "problem"] as const).map((o) => (
            <button
              key={o}
              type="button"
              aria-pressed={outcome === o}
              onClick={() => setOutcome(o)}
            >
              {o === "ok" ? "Finished ok" : "Problem"}
            </button>
          ))}
        </div>
      </div>
      {/* Wide screens: both branches side by side. */}
      <svg className="flow-wide" viewBox="0 0 400 382" role="img" aria-label={LABEL[outcome]}>
        <path className="flow-edge on" d="M200 66 V96" />
        <path className={`flow-edge${yes ? " on" : ""}`} d="M110 140 H100 V220" />
        <path className={`flow-edge${yes ? " on" : ""}`} d="M100 276 V316" />
        <path className={`flow-edge${yes ? "" : " on"}`} d="M290 140 H300 V220" />
        <path className={`flow-edge${yes ? "" : " on"}`} d="M300 276 V316" />

        <Node x={110} y={10} title="Job finished" sub="Any job on Floor 1" on accent />

        <polygon
          points="200,96 290,140 200,184 110,140"
          fill="var(--surface)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text
          x="200"
          y="137"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          Outcome is
        </text>
        <text
          x="200"
          y="153"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          problem?
        </text>
        <text
          x="96"
          y="132"
          textAnchor="end"
          fontSize="11"
          fontWeight="600"
          fill={yes ? "var(--accent)" : "var(--muted)"}
          {...T}
        >
          yes
        </text>
        <text
          x="304"
          y="132"
          fontSize="11"
          fontWeight="600"
          fill={yes ? "var(--muted)" : "var(--accent)"}
          {...T}
        >
          no
        </text>

        <Node x={10} y={220} {...BRANCH.problem[0]} on={yes} />
        <Node x={10} y={316} {...BRANCH.problem[1]} on={yes} />
        <Node x={210} y={220} {...BRANCH.ok[0]} on={!yes} />
        <Node x={210} y={316} {...BRANCH.ok[1]} on={!yes} />
      </svg>
      {/* Phones: one column, showing the branch the switch picked, so the text stays readable. */}
      <svg className="flow-compact" viewBox="0 0 260 352" role="img" aria-label={LABEL[outcome]}>
        <path className="flow-edge on" d="M130 56 V84" />
        <path className="flow-edge on" d="M130 172 V212" />
        <path className="flow-edge on" d="M130 268 V296" />
        <Node x={20} y={0} w={220} title="Job finished" sub="Any job on Floor 1" on accent />
        <polygon
          points="130,84 220,128 130,172 40,128"
          fill="var(--surface)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text
          x="130"
          y="125"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          Outcome is
        </text>
        <text
          x="130"
          y="141"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          problem?
        </text>
        <text x="140" y="196" fontSize="11" fontWeight="600" fill="var(--accent)" {...T}>
          {yes ? "yes" : "no"}
        </text>
        <Node x={20} y={212} w={220} {...BRANCH[outcome][0]} on />
        <Node x={20} y={296} w={220} {...BRANCH[outcome][1]} on />
      </svg>
    </div>
  );
}
