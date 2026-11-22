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
    title: "Map your floor the way it actually runs.",
    text:
      "Lay out bays, machines, racks, zones and aisles in the built-in builder. Tilt smoothly " +
      "from a top-down blueprint to a 3D view, colour zones by department and print QR codes in one click.",
    points: [
      "Snap-to-grid editing with custom shapes, undo / redo and department colours",
      "Zones configured with purpose, unit capacity and required trade qualifications",
      "Multiple sites and floors under one company, each running in its local time zone",
      "Stand up your first pilot floor in a day with zero extra hardware",
    ],
    art: <BuilderArt />,
  },
  {
    id: "plan",
    eyebrow: "Plan",
    title: "Turn incoming orders into routed, ready-to-run work.",
    text:
      "Bring orders in from your ERP by CSV with a clear preview of every change, track inbound " +
      "supplier parts before they hold up a bay, and generate unit tasks from reusable job templates.",
    points: [
      "Break orders into units and step-by-step tasks automatically from templates",
      "Attach drawings, expected times, photo checks and sequential dependencies per step",
      "Track supplier POs from expected delivery to received and kitted, with late alerts",
      "Match shift rosters and verified training records to every station and role",
    ],
    art: <PlanningArt />,
  },
  {
    id: "work",
    eyebrow: "Work · FloorOS Pro",
    title: "One scan to start. Zero paperwork at the bay.",
    text:
      "Trades operators open FloorOS Pro on their phone, scan a station QR code to start work, " +
      "log pieces, scan destination zones to finish moves, and hold a button to speak notes hands-free.",
    points: [
      "Works reliably in Wi-Fi dead zones and syncs automatically without double-counting",
      "Shows step instructions, drawings and safety watch-outs the moment work starts",
      "Spoken voice notes transcribe live to the web in seconds for leads to review",
      "Operators can check their shift schedule, training sign-offs and sign in with company SSO",
    ],
    art: <PhoneArt />,
    bare: true,
  },
  {
    id: "watch",
    eyebrow: "Watch · Manager & Executive",
    title: "See where work is flowing — and where it's stuck.",
    text:
      "Supervisors run the shift from the live Board and 3D map, where delayed and idle stations " +
      "float straight to the top. Directors open FloorOS Executive Suite to see every site at a glance.",
    points: [
      "Live station cards with pace bars, daily output counters and Bottleneck badges",
      "3D floor map shows units moving along aisles and highlights full or blocked zones",
      "Aligned with daily schedules, shift rosters, morning huddle sheets and team channels",
      "Company-wide view tracks live department flow and status across 5,000+ employees",
    ],
    art: <LiveArt />,
  },
  {
    id: "automate",
    eyebrow: "Automate",
    title: "Let the next step happen on its own.",
    text:
      "Close the everyday gaps that quietly eat up shift hours. Visual workflows react the " +
      "instant a test fails, a task runs late or a unit finishes — routing work to the right person automatically.",
    points: [
      "Dispatches the first free person who is clocked in and trained for that exact step",
      "Sends jobs and notices to an individual, team, trade role or floor with photos and push alerts",
      "Creates automatic material move jobs, updates live KPI tiles and flags shift reports",
      "Built with guardrails: dry-run on past events, full step-by-step logs and a one-click kill switch",
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
            <h2>From floor layout to self-running flow in five steps.</h2>
            <p className="lead">
              No new hardware and no six-month rollout. Map your bays, bring in orders, let crews
              scan in on their phones, watch work move live and automate the handoffs.
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
