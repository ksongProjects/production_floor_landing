// Top-down floor builder: grid, placed objects, one selected with resize handles.
const OBJECTS = [
  { x: 40, y: 40, w: 80, h: 140, label: "Rack A" },
  { x: 160, y: 40, w: 110, h: 70, label: "Assembly 1", accent: true },
  { x: 300, y: 40, w: 110, h: 70, label: "Assembly 2", accent: true },
  { x: 160, y: 150, w: 250, h: 30, label: "Conveyor" },
  { x: 160, y: 220, w: 110, h: 70, label: "Pack" },
  { x: 300, y: 220, w: 110, h: 70, label: "QA" },
  { x: 40, y: 220, w: 80, h: 70, label: "Dock" },
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
        <div className="ui-row" style={{ justifyContent: "flex-start", gap: 6 }}>
          <span className="chip">Labels</span>
          <span className="chip">Grid</span>
          <span className="chip">Snap</span>
          <span className="chip idle">Fit</span>
        </div>
        <span className="ui-muted">Floor 1 · Building A</span>
      </div>
      <svg viewBox="0 0 450 330" role="img" aria-label="Floor builder with stations on a grid">
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
              rx="5"
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
          rx="7"
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
