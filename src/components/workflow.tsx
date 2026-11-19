import type { ReactNode } from "react";
import { StepRail } from "./scroll-spy";
import { BottleneckArt } from "./visuals/bottleneck";
import { BuilderArt } from "./visuals/builder";
import { FlowArt } from "./visuals/flow";
import { PhoneArt } from "./visuals/phone";
import { PlanningArt } from "./visuals/planning";

type Step = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  art: ReactNode;
  bare?: boolean;
};

const STEPS: Step[] = [
  {
    id: "see",
    eyebrow: "See",
    title: "Every station, every person, right now.",
    text:
      "Operators scan a station's QR code on their own phone to start and end work. Every " +
      "station shows up live: who is on it, the task, and its pace against the expected time.",
    points: [
      "Delayed, paused and idle stations rise to the top of the board",
      "Start, pause, log units and end with one tap",
      "Keeps working with no signal and catches up when back online",
      "Every floor at once on the home screen",
    ],
    art: <PhoneArt />,
    bare: true,
  },
  {
    id: "spot",
    eyebrow: "Spot",
    title: "The bottleneck shows itself.",
    text:
      "The floor map shows where work piles up: full zones in amber, a blocked zone in red. " +
      "Needs attention ranks the units and tasks waiting longest, and where they are stuck.",
    points: [
      "Time in each zone for every unit that moves through the shop",
      "Pace per step against its expected time",
      "See which step holds up the line, shift after shift",
      "Report by shift, day, station or person, with CSV export",
    ],
    art: <BottleneckArt />,
  },
  {
    id: "fix",
    eyebrow: "Fix",
    title: "The next step happens on its own.",
    text:
      "Workflows close the routine gaps without anyone chasing them. A reported problem becomes " +
      "a repair job, a late task alerts the supervisor, a finished unit gets moved to the next " +
      "zone so the next station isn't starved.",
    points: [
      "Work goes to the first free person: clocked in, not busy and trained for it",
      "Start from ready-made workflows, or draw your own",
      "Test a workflow on something that already happened before you turn it on",
      "Every run logged step by step; switch any workflow off with one tap",
    ],
    art: <FlowArt />,
  },
  {
    id: "track",
    eyebrow: "Track",
    title: "Orders to units to tasks, through the shop.",
    text:
      "Custom orders with line items and units. Each unit gets its own tasks from a job " +
      "template, and moves zone to zone with move jobs that close when the handler scans the " +
      "destination.",
    points: [
      "Job templates with steps, instructions, drawings and photo checks",
      "Import orders by CSV, with a preview of every change",
      "Jobs and notices to a person, a team or the whole floor",
      "Progress in units, tasks and time against the due date",
    ],
    art: <PlanningArt />,
  },
  {
    id: "start",
    eyebrow: "Start",
    title: "Live on one floor in a day.",
    text:
      "No new hardware: printed QR codes and the crew's own phones. A guided checklist takes " +
      "you from an empty floor to live work in about an hour.",
    points: [
      "Draw the floor on a grid, in top-down or 3D",
      "A printable QR code for every station",
      "Roles per floor, training records and shift rosters",
      "Many sites and floors, each in its own time zone",
    ],
    art: <BuilderArt />,
  },
];

export function Workflow() {
  return (
    <div id="workflow">
      <StepRail group="workflow" steps={STEPS.map((s) => ({ id: s.id, label: s.eyebrow }))} />
      {STEPS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`screen step${i % 2 ? " flip alt" : ""}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className="wrap">
            {i === 0 ? (
              <header className="flow-head reveal">
                <p className="eyebrow">How it works</p>
                <h2>See the floor, spot the bottleneck, close the gap.</h2>
              </header>
            ) : null}
            <div className="copy reveal">
              <span className="step-num">{i + 1}</span>
              <p className="eyebrow">{s.eyebrow}</p>
              <h3 className="step-title" id={`${s.id}-title`}>
                {s.title}
              </h3>
              <p className="lead">{s.text}</p>
              <ul className="checks">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className={`art reveal${s.bare ? " bare" : ""}`}>{s.art}</div>
          </div>
        </section>
      ))}
    </div>
  );
}
