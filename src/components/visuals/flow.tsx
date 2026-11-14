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
}: {
  x: number;
  y: number;
  title: string;
  sub: string;
  on: boolean;
  accent?: boolean;
}) {
  return (
    <g className={`flow-node${on ? "" : " off"}`}>
      <rect
        x={x}
        y={y}
        width={180}
        height={56}
        rx={12}
        fill={accent ? "var(--accent)" : "var(--surface)"}
        stroke={accent ? "none" : on ? "var(--accent)" : "var(--border)"}
        strokeWidth={accent ? 0 : 1.5}
      />
      <text
        x={x + 90}
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
        x={x + 90}
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
      <svg
        viewBox="0 0 400 382"
        role="img"
        aria-label={
          yes
            ? "Job finished with a problem: send a repair job to the first available person in Maintenance, then flag it in the shift report"
            : "Job finished ok: update the KPIs, then offer the next task to the same person"
        }
      >
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

        <Node x={10} y={220} title="Send repair job" sub="Maintenance · first available" on={yes} />
        <Node x={10} y={316} title="Flag in shift report" sub="For the morning meeting" on={yes} />
        <Node x={210} y={220} title="Update KPIs" sub="Output · time to finish" on={!yes} />
        <Node x={210} y={316} title="Offer next task" sub="Same person, same station" on={!yes} />
      </svg>
    </div>
  );
}
