import { IsoBox, IsoFloor, LiveDot, project } from "./iso";

type Box = { x: number; y: number; w: number; d: number; h: number; accent?: boolean };

// A made-up floor: a line of stations, a conveyor, racks and two machines.
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

function Label({ x, y, z, text }: { x: number; y: number; z: number; text: string }) {
  const [sx, sy] = project(x, y, z);
  const width = text.length * 6.4 + 18;
  return (
    <g transform={`translate(${sx.toFixed(1)} ${(sy - 26).toFixed(1)})`}>
      <rect x={-width / 2} y={-11} width={width} height={22} rx={11} fill="rgb(11 14 18 / 0.85)" />
      <rect
        x={-width / 2}
        y={-11}
        width={width}
        height={22}
        rx={11}
        fill="none"
        stroke="rgb(255 255 255 / 0.18)"
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
      <line x1={0} y1={11} x2={0} y2={20} stroke="rgb(255 255 255 / 0.35)" />
    </g>
  );
}

export function HeroFloor() {
  return (
    <svg
      className="hero-art"
      viewBox="-225 -95 515 395"
      role="img"
      aria-label="Isometric view of a production floor with stations, a conveyor and live workers"
    >
      <IsoFloor w={16} d={12} />
      {ORDERED.map((b, i) => (
        <IsoBox key={i} {...b} />
      ))}
      <LiveDot x={6.5} y={2} z={1.2} />
      <LiveDot x={10.5} y={2} z={1.2} />
      <LiveDot x={6.5} y={9} z={1.2} />
      <LiveDot x={14} y={2} z={1.6} color="#66bb6a" />
      <Label x={6.5} y={2} z={1.2} text="Assembly 1 · 68%" />
      <Label x={6.5} y={9} z={1.2} text="Pack · Dana" />
    </svg>
  );
}
