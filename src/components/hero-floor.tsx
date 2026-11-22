import { IsoBox, IsoFloor, LiveDot, project } from "./iso";

type Box = { x: number; y: number; w: number; d: number; h: number; accent?: boolean };

// A live floor: fabrication & assembly stations, flow aisle, wiring bottleneck, QA and shipping.
const BOXES: Box[] = [
  { x: 1, y: 1, w: 2, d: 4, h: 2.4 },
  { x: 1, y: 7, w: 2, d: 4, h: 2.4 },
  { x: 5, y: 1, w: 3, d: 2, h: 1.2, accent: true },
  { x: 9, y: 1, w: 3, d: 2, h: 1.2, accent: true },
  { x: 13, y: 1, w: 2, d: 2, h: 1.6 },
  { x: 5, y: 5, w: 10, d: 1, h: 0.6 },
  { x: 5, y: 8, w: 3, d: 2, h: 1.2, accent: true },
  { x: 9, y: 8, w: 3, d: 2, h: 1.2 },
  { x: 13, y: 8, w: 2, d: 3, h: 2 },
];

// Draw back to front so nearer boxes cover farther ones.
const ORDERED = [...BOXES].sort((a, b) => a.x + a.y - (b.x + b.y));

function Label({
  x,
  y,
  z,
  text,
  tone = "default",
}: {
  x: number;
  y: number;
  z: number;
  text: string;
  tone?: "default" | "danger";
}) {
  const [sx, sy] = project(x, y, z);
  const width = text.length * 6.4 + 20;
  const isDanger = tone === "danger";
  return (
    <g transform={`translate(${sx.toFixed(1)} ${(sy - 26).toFixed(1)})`}>
      <rect
        x={-width / 2}
        y={-11}
        width={width}
        height={22}
        rx={11}
        fill={isDanger ? "rgb(153 27 27 / 0.92)" : "rgb(11 14 18 / 0.85)"}
      />
      <rect
        x={-width / 2}
        y={-11}
        width={width}
        height={22}
        rx={11}
        fill="none"
        stroke={isDanger ? "rgb(248 113 113 / 0.7)" : "rgb(255 255 255 / 0.18)"}
      />
      <text
        y={4}
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill="#eef1f5"
        fontFamily="system-ui, sans-serif"
      >
        {text}
      </text>
      <line
        x1={0}
        y1={11}
        x2={0}
        y2={20}
        stroke={isDanger ? "rgb(248 113 113 / 0.7)" : "rgb(255 255 255 / 0.35)"}
      />
    </g>
  );
}

export function HeroFloor() {
  const [u1x, u1y] = project(7.5, 5.5, 0.75);
  const [u2x, u2y] = project(10.5, 5.5, 0.75);
  return (
    <svg
      className="hero-art"
      viewBox="-225 -95 515 395"
      role="img"
      aria-label="Isometric view of a live production floor showing active stations, moving units and a highlighted bottleneck"
    >
      <IsoFloor w={16} d={12} />
      {ORDERED.map((b, i) => (
        <IsoBox key={i} {...b} />
      ))}
      <circle cx={u1x} cy={u1y} r="4.5" fill="#4c8dff" stroke="#eef1f5" strokeWidth="1.5" />
      <circle cx={u2x} cy={u2y} r="4.5" fill="#4c8dff" stroke="#eef1f5" strokeWidth="1.5" />
      <LiveDot x={6.5} y={2} z={1.2} color="#66bb6a" />
      <LiveDot x={10.5} y={2} z={1.2} color="#f87171" />
      <LiveDot x={6.5} y={9} z={1.2} />
      <LiveDot x={14} y={2} z={1.6} color="#66bb6a" />
      <Label x={6.5} y={2} z={1.2} text="Assembly 1 · 68%" />
      <Label x={10.5} y={2} z={1.2} text="Wiring · Bottleneck" tone="danger" />
      <Label x={6.5} y={9} z={1.2} text="Pack · Dana" />
    </svg>
  );
}
