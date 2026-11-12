import type { ReactNode } from "react";
import { StepRail } from "./scroll-spy";
import { BuilderArt } from "./visuals/builder";
import { LiveArt } from "./visuals/live";
import { PermissionsArt } from "./visuals/permissions";
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
    title: "Lay out the floor the way it really is.",
    text:
      "Draw each floor in the built-in builder: stations, machines, racks, zones, walls and " +
      "paths. Tilt from top-down to isometric with a drag; both views read the same model.",
    points: [
      "Place, move, resize and rotate objects with snap to grid",
      "Custom properties, colours and labels per object",
      "Many sites and floors per company, each in its own time zone",
      "Print a QR code for every station",
    ],
    art: <BuilderArt />,
  },
  {
    id: "plan",
    eyebrow: "Plan",
    title: "Turn orders into tasks at stations.",
    text:
      "Define products, create work orders with quantities and due dates, and split them into " +
      "tasks assigned to stations and shifts on a floor.",
    points: [
      "Products, work orders, tasks and shifts per floor",
      "Progress tracked as units, tasks and time",
      "Shifts follow the floor's local time",
    ],
    art: <PlanningArt />,
  },
  {
    id: "staff",
    eyebrow: "Staff",
    title: "Add people and decide who can do what.",
    text:
      "Add employees, give them a company role and a role per floor. Admin, Manager and " +
      "Operator come ready; edit them or create your own from a fixed set of permissions.",
    points: [
      "Company-wide and per-floor roles",
      "Permissions checked on the server for every request",
      "Personal logins — no shared device accounts",
    ],
    art: <PermissionsArt />,
  },
  {
    id: "work",
    eyebrow: "Work",
    title: "Scan the station. Start the job.",
    text:
      "Operators sign in on their own phone, scan the QR code on a station and see the task " +
      "waiting there. Start, pause, resume, log units and end with one tap.",
    points: [
      "Android app, installs from a direct download",
      "Keeps working with no signal; updates sync when back online",
      "Each update is applied once, even if it is sent twice",
    ],
    art: <PhoneArt />,
    bare: true,
  },
  {
    id: "watch",
    eyebrow: "Watch",
    title: "See the whole floor, live.",
    text:
      "Every scan, pause and unit shows up on the manager's floor view the moment it happens. " +
      "See who is at which station, and who else is looking at the floor.",
    points: [
      "Workers shown at their stations in real time",
      "Layout edits appear for every viewer at once",
      "Presence: see who is viewing a floor",
    ],
    art: <LiveArt />,
  },
];

export function Workflow() {
  return (
    <div id="workflow">
      <StepRail group="workflow" steps={STEPS.map((s) => ({ id: s.id, label: s.eyebrow }))} />
      <section className="screen alt">
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <p className="eyebrow">How it works</p>
            <h2>From an empty floor plan to live progress in five steps.</h2>
            <p className="lead">
              Build the floor, plan the work, staff it, let operators scan in, and watch it move.
            </p>
            <ol className="step-index">
              {STEPS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span>{i + 1}</span>
                    {s.eyebrow}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      {STEPS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`screen step${i % 2 ? " flip alt" : ""}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className="wrap">
            <div className="copy reveal">
              <span className="step-num">{i + 1}</span>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 id={`${s.id}-title`}>{s.title}</h2>
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
