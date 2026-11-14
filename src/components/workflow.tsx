import type { ReactNode } from "react";
import { StepRail } from "./scroll-spy";
import { BuilderArt } from "./visuals/builder";
import { FlowArt } from "./visuals/flow";
import { InboxArt } from "./visuals/inbox";
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
    id: "build",
    eyebrow: "Build",
    title: "Draw the floor as it really is.",
    text:
      "Lay out stations, machines, racks, zones, walls and paths on a grid. Tilt from top-down " +
      "to 3D with a drag; every view shows the same floor.",
    points: [
      "Cubes and cylinders on whole grid squares, sized with handles",
      "Drag to place, undo and redo, duplicate, move with the arrow keys",
      "Many sites and floors, each in its own time zone",
      "A printable QR code for any object on the floor",
    ],
    art: <BuilderArt />,
  },
  {
    id: "plan",
    eyebrow: "Plan",
    title: "Write the job once. Reuse it every time.",
    text:
      "A job template holds the steps, with instructions, drawings and files. Start a work " +
      "order from it and each step becomes a task at a station, with its own target.",
    points: [
      "Step instructions with lists, bold text, images and files",
      "Ask for a photo before a step can finish",
      "Work orders with quantity, due date and shifts",
      "Progress in units, tasks and time",
    ],
    art: <PlanningArt />,
  },
  {
    id: "send",
    eyebrow: "Send",
    title: "Send jobs to a person, a team or the whole floor.",
    text:
      "Hand out work like mail, not chat. For a team or floor job, the first person to accept " +
      "takes it. When they finish, they report how it went.",
    points: [
      "Jobs and notices in one inbox, on web and phone",
      "Accept, hand back, decline, or finish with feedback",
      "Problems stand out for whoever sent the job",
      "Push notifications for new jobs",
    ],
    art: <InboxArt />,
  },
  {
    id: "work",
    eyebrow: "Work",
    title: "Scan the station. Start the job.",
    text:
      "Operators sign in on their own phone, scan the station's QR code and see the task with " +
      "its steps and files. Managers see them appear at the station on the live floor.",
    points: [
      "Start, pause, resume, log units and end with one tap",
      "Take photos for steps that need them",
      "Keeps working with no signal and catches up when back online",
      "My work, a jobs board and a live floor map on the phone",
    ],
    art: <PhoneArt />,
    bare: true,
  },
  {
    id: "automate",
    eyebrow: "Automate",
    title: "Let the floor run itself.",
    text:
      "Once jobs and teams are in place, draw workflows in a visual builder. When a job is " +
      "declined, waits too long or comes back with a problem, the flow decides what happens next.",
    points: [
      "Start from any job change: sent, accepted, declined, finished",
      "Branch on outcome, team, station, shift or time waiting",
      "Assign to the next available person, send a job or notice, or escalate",
      "Shift and meeting reports, analytics and KPIs built for you",
    ],
    art: <FlowArt />,
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
                <h2>From an empty floor to a floor that runs itself, in five steps.</h2>
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
