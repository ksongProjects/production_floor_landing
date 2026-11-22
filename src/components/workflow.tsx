import type { ReactNode } from "react";
import { AutomateArt } from "./visuals/automate";
import { BuilderArt } from "./visuals/builder";
import { LiveArt } from "./visuals/live";
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
    title: "Map every floor, zone and department.",
    text:
      "Draw each floor in the built-in builder — stations, machines, racks, zones, walls, move " +
      "paths and custom shapes. Tilt smoothly between 2D and 3D; print QR codes for any station or zone.",
    points: [
      "Snap to grid, drag handles, undo / redo and department colours",
      "Zones with purpose, capacity and required roles",
      "Many sites and floors per company, each in its local time zone",
      "First pilot floor goes live in a day with no new hardware",
    ],
    art: <BuilderArt />,
  },
  {
    id: "plan",
    eyebrow: "Plan",
    title: "Import orders, track suppliers and route units.",
    text:
      "Bring custom orders in from your ERP by CSV with a change preview, track inbound supplier " +
      "material, and generate unit tasks automatically from multi-step job templates.",
    points: [
      "Custom orders → line items → units → tasks from reusable templates",
      "Expected times, pace targets, attached drawings and sequential steps",
      "Inbound material tracking (PO, expected date, received, kitted) with late alerts",
      "Shift rosters and training qualifications decide who is ready for each role",
    ],
    art: <PlanningArt />,
  },
  {
    id: "work",
    eyebrow: "Work · FloorOS Pro",
    title: "Scan the station. Record work and notes.",
    text:
      "Trades operators open FloorOS Pro on Android — scan a station QR to start, log pieces and " +
      "pauses, close move jobs with a zone scan, see watch-out alerts, and hold to record voice notes.",
    points: [
      "Offline command queue syncs safely when Wi-Fi drops, applied exactly once",
      "Job steps carousel, attached drawings and published Watch-out items on start",
      "Hold-to-record voice notes stream to FloorOS Manager as live transcripts in seconds",
      "Personal shifts, training credentials and mobile single sign-on built in",
    ],
    art: <PhoneArt />,
    bare: true,
  },
  {
    id: "watch",
    eyebrow: "Watch · Manager & Executive",
    title: "See every station, floor and site — live.",
    text:
      "Leads run the floor in FloorOS Manager from the live Board and 3D map. C-level and " +
      "directors open FloorOS Executive Suite for multi-site dashboards, team alignment and daily schedules.",
    points: [
      "Board station cards with live pace bars, Today's numbers and Bottleneck badges",
      "3D Live Map: units travel along aisles, waiting and blocked zones pulse",
      "Daily schedules, shift rosters, morning huddle reports and team sync",
      "Executive Company view: animated department flow and status across 5,000+ people",
    ],
    art: <LiveArt />,
  },
  {
    id: "automate",
    eyebrow: "Automate",
    title: "Close the gaps between jobs automatically.",
    text:
      "Build visual workflows that react to failed tests, delayed tasks, finished units and " +
      "reported problems — dispatching the first free, clocked-in, trained person automatically.",
    points: [
      "Dispatch inbox for jobs and notices to a person, team, role or floor with photos & push",
      "First-free routing checks live presence, current workload and valid training sign-off",
      "Automatic move jobs, live KPI counters and shift-report flags",
      "Safe by design: test runs before going live, full run history and a one-click off switch",
    ],
    art: <AutomateArt />,
  },
];

export function Workflow() {
  return (
    <div id="workflow">
      <section className="screen alt">
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <p className="eyebrow">How it works</p>
            <h2>From empty floor plan to self-running flow in five steps.</h2>
            <p className="lead">
              Most lost time isn&apos;t a breakdown — it&apos;s the gaps between jobs. Map the
              floor, route orders, scan on the phone, watch every site live and automate handoffs.
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
