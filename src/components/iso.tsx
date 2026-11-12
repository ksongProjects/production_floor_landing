/**
 * Tiny isometric drawing kit for the landing page illustrations.
 * Renders at build time to plain SVG; no client JavaScript.
 */

const COS = Math.cos(Math.PI / 6);
const SIN = Math.sin(Math.PI / 6);

/** Floor grid units → screen pixels. */
export function project(x: number, y: number, z = 0, unit = 20): [number, number] {
  return [(x - y) * COS * unit, (x + y) * SIN * unit - z * unit];
}

function points(list: [number, number, number][], unit: number): string {
  return list
    .map(([x, y, z]) => project(x, y, z, unit))
    .map(([sx, sy]) => `${sx.toFixed(1)},${sy.toFixed(1)}`)
    .join(" ");
}

export function IsoFloor({ w, d, unit = 20 }: { w: number; d: number; unit?: number }) {
  const lines = [];
  for (let i = 1; i < w; i++) {
    const [x1, y1] = project(i, 0, 0, unit);
    const [x2, y2] = project(i, d, 0, unit);
    lines.push(<line key={`x${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />);
  }
  for (let j = 1; j < d; j++) {
    const [x1, y1] = project(0, j, 0, unit);
    const [x2, y2] = project(w, j, 0, unit);
    lines.push(<line key={`y${j}`} x1={x1} y1={y1} x2={x2} y2={y2} />);
  }
  return (
    <g>
      <polygon
        points={points(
          [
            [0, 0, 0],
            [w, 0, 0],
            [w, d, 0],
            [0, d, 0],
          ],
          unit,
        )}
        fill="var(--floor)"
        stroke="var(--floor-line)"
        strokeWidth="1.5"
      />
      <g stroke="var(--floor-line)" strokeWidth="0.75">
        {lines}
      </g>
    </g>
  );
}

export function IsoBox({
  x,
  y,
  w,
  d,
  h,
  unit = 20,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  d: number;
  h: number;
  unit?: number;
  accent?: boolean;
}) {
  const p = accent ? "--obj-accent" : "--obj";
  return (
    <g strokeLinejoin="round">
      <polygon
        fill={`var(${p}-left)`}
        points={points(
          [
            [x, y + d, 0],
            [x + w, y + d, 0],
            [x + w, y + d, h],
            [x, y + d, h],
          ],
          unit,
        )}
      />
      <polygon
        fill={`var(${p}-right)`}
        points={points(
          [
            [x + w, y, 0],
            [x + w, y + d, 0],
            [x + w, y + d, h],
            [x + w, y, h],
          ],
          unit,
        )}
      />
      <polygon
        fill={`var(${p}-top)`}
        points={points(
          [
            [x, y, h],
            [x + w, y, h],
            [x + w, y + d, h],
            [x, y + d, h],
          ],
          unit,
        )}
      />
    </g>
  );
}

/** A pulsing live marker above a floor position: someone is working here. */
export function LiveDot({
  x,
  y,
  z = 0,
  unit = 20,
  color = "var(--live)",
}: {
  x: number;
  y: number;
  z?: number;
  unit?: number;
  color?: string;
}) {
  const [cx, cy] = project(x, y, z, unit);
  return (
    <g>
      <circle className="pulse" cx={cx} cy={cy} r="7" fill={color} />
      <circle cx={cx} cy={cy} r="5.5" fill={color} stroke="#fff" strokeWidth="2" />
    </g>
  );
}
