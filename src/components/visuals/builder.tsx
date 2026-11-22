// Top-down floor builder: grid, departments, zones, placed objects, one selected with handles.
const OBJECTS = [
  { x: 35, y: 35, w: 85, h: 145, label: "Suppliers" },
  { x: 155, y: 35, w: 115, h: 72, label: "Fabrication", accent: true },
  { x: 295, y: 35, w: 120, h: 72, label: "Assembly 1", accent: true },
  { x: 155, y: 148, w: 260, h: 28, label: "Aisle / Move path" },
  { x: 155, y: 215, w: 115, h: 75, label: "Wiring" },
  { x: 295, y: 215, w: 120, h: 75, label: "Test & QA" },
  { x: 35, y: 215, w: 85, h: 75, label: "Shipping" },
];

export function BuilderArt() {
  const sel = OBJECTS[4]!;
  const handles = [
    [sel.x, sel.y],
    [sel.x + sel.w, sel.y],
    [sel.x, sel.y + sel.h],
    [sel.x + sel.w, sel.y + sel.h],
  ];
  return (
    <div className="ui-stack">
      <div className="ui-row">
        <div className="ui-row" style={{ justifyContent: "flex-start", gap: 6, flexWrap: "wrap" }}>
          <span className="chip">3D tilt</span>
          <span className="chip">Departments</span>
          <span className="chip">Snap</span>
          <span className="chip idle">QR sheet</span>
        </div>
        <span className="ui-muted">Plant West · MST</span>
      </div>
      <svg
        viewBox="0 0 450 330"
        role="img"
        aria-label="Floor builder with department zones, stations, move path and selection handles"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0H0V10" fill="none" stroke="var(--floor-line)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect x="10" y="10" width="430" height="310" rx="8" fill="var(--floor)" />
        <rect x="10" y="10" width="430" height="310" rx="8" fill="url(#grid)" />
        {OBJECTS.map((o) => (
          <g key={o.label}>
            <rect
              x={o.x}
              y={o.y}
              width={o.w}
              height={o.h}
              rx="6"
              fill={o.accent ? "var(--obj-accent-top)" : "var(--obj-top)"}
              stroke={o.accent ? "var(--obj-accent-left)" : "var(--obj-right)"}
            />
            <text
              x={o.x + o.w / 2}
              y={o.y + o.h / 2 + 4}
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill={o.accent ? "#fff" : "var(--muted)"}
              fontFamily="system-ui, sans-serif"
            >
              {o.label}
            </text>
          </g>
        ))}
        <rect
          x={sel.x - 4}
          y={sel.y - 4}
          width={sel.w + 8}
          height={sel.h + 8}
          rx="8"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        {handles.map(([hx, hy], i) => (
          <rect
            key={i}
            x={hx! - 5}
            y={hy! - 5}
            width="10"
            height="10"
            rx="2"
            fill="var(--surface)"
            stroke="var(--accent)"
            strokeWidth="2"
          />
        ))}
        <circle cx={sel.x + sel.w / 2} cy={sel.y - 22} r="6" fill="var(--accent)" />
        <line
          x1={sel.x + sel.w / 2}
          y1={sel.y - 16}
          x2={sel.x + sel.w / 2}
          y2={sel.y - 4}
          stroke="var(--accent)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
