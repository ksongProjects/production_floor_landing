import { IsoBox, IsoFloor, LiveDot, project } from "./iso";

type Box = { x: number; y: number; w: number; d: number; h: number; accent?: boolean };

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

const ORDERED = [...BOXES].sort((a, b) => a.x + a.y - (b.x + b.y));

function Label({
  x,
  y,
  z,
  text,
  tone = "default",
  delay = "0s",
}: {
  x: number;
  y: number;
  z: number;
  text: string;
  tone?: "default" | "danger" | "ok";
  delay?: string;
}) {
  const [sx, sy] = project(x, y, z);
  const width = text.length * 6.4 + 20;
  const fill =
    tone === "danger"
      ? "rgb(153 27 27 / 0.92)"
      : tone === "ok"
        ? "rgb(20 83 45 / 0.92)"
        : "rgb(11 14 18 / 0.88)";
  const stroke =
    tone === "danger"
      ? "rgb(248 113 113 / 0.75)"
      : tone === "ok"
        ? "rgb(102 187 106 / 0.75)"
        : "rgb(255 255 255 / 0.2)";
  return (
    <g transform={`translate(${sx.toFixed(1)} ${(sy - 26).toFixed(1)})`}>
      <g className="float-tag" style={{ animationDelay: delay }}>
        <rect x={-width / 2} y={-11} width={width} height={22} rx={11} fill={fill} />
        <rect
          x={-width / 2}
          y={-11}
          width={width}
          height={22}
          rx={11}
          fill="none"
          stroke={stroke}
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
        <line x1={0} y1={11} x2={0} y2={20} stroke={stroke} />
      </g>
    </g>
  );
}

export function HeroFloor() {
  const [p1x, p1y] = project(5.5, 5.5, 0.75);
  const [p2x, p2y] = project(14.2, 5.5, 0.75);
  const [a1x, a1y] = project(4.2, 4.2, 0.2);
  const [a2x, a2y] = project(12.2, 4.2, 0.2);

  return (
    <svg
      className="hero-art"
      viewBox="-225 -95 515 395"
      role="img"
      aria-label="Animated 3D production floor with moving units, active bays and bottleneck alert"
    >
      <IsoFloor w={16} d={12} />
      {ORDERED.map((b, i) => (
        <IsoBox key={i} {...b} />
      ))}

      {/* Animated aisle path + moving units */}
      <line
        x1={a1x}
        y1={a1y}
        x2={a2x}
        y2={a2y}
        stroke="#4c8dff"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        className="flow-wire"
        opacity="0.7"
      />
      <circle r="5" fill="#4c8dff" stroke="#eef1f5" strokeWidth="1.6">
        <animateMotion
          dur="5.5s"
          repeatCount="indefinite"
          path={`M${p1x.toFixed(1)},${p1y.toFixed(1)} L${p2x.toFixed(1)},${p2y.toFixed(1)}`}
        />
      </circle>
      <circle r="5" fill="#66bb6a" stroke="#eef1f5" strokeWidth="1.6">
        <animateMotion
          dur="5.5s"
          begin="-2.75s"
          repeatCount="indefinite"
          path={`M${p1x.toFixed(1)},${p1y.toFixed(1)} L${p2x.toFixed(1)},${p2y.toFixed(1)}`}
        />
      </circle>
      <circle r="4.5" fill="#ff8a3d" stroke="#eef1f5" strokeWidth="1.5">
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          path={`M${a1x.toFixed(1)},${a1y.toFixed(1)} L${a2x.toFixed(1)},${a2y.toFixed(1)}`}
        />
      </circle>

      <LiveDot x={6.5} y={2} z={1.2} color="#66bb6a" />
      <LiveDot x={10.5} y={2} z={1.2} color="#f87171" />
      <LiveDot x={6.5} y={9} z={1.2} />
      <LiveDot x={14} y={2} z={1.6} color="#66bb6a" />

      <Label x={6.5} y={2} z={1.2} text="Assembly 1 · 94% pace" tone="ok" delay="0s" />
      <Label x={10.5} y={2} z={1.2} text="Wiring · Bottleneck" tone="danger" delay="0.6s" />
      <Label x={6.5} y={9} z={1.2} text="Pack · Dana · +12 u" delay="1.2s" />
    </svg>
  );
}
