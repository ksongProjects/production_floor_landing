import type { ReactNode } from "react";

// Two phone screens: scan a station QR code, then the work screen it opens, with the step's
// instructions and a photo the step asks for.

function Qr() {
  // A fixed, decorative pattern that reads as a QR code. Not scannable.
  const cells = ["1110101", "1010011", "1110110", "0001010", "1101101", "0110011", "1011101"];
  return (
    <g>
      {cells.flatMap((row, y) =>
        [...row].map((c, x) =>
          c === "1" ? (
            <rect key={`${x}-${y}`} x={x * 10} y={y * 10} width="9" height="9" rx="1.5" />
          ) : null,
        ),
      )}
    </g>
  );
}

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 200 400" role="img" aria-label={label}>
      <rect x="2" y="2" width="196" height="396" rx="30" fill="#0b0e12" />
      <rect x="10" y="10" width="180" height="380" rx="23" fill="var(--bg)" />
      <rect x="75" y="18" width="50" height="8" rx="4" fill="#0b0e12" />
      {children}
    </svg>
  );
}

const T = { fontFamily: "system-ui, sans-serif" };

export function PhoneArt() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(12px, 3vw, 32px)" }}>
      <Frame label="Phone scanning a station QR code">
        <text
          x="100"
          y="62"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          Scan station
        </text>
        <rect x="35" y="110" width="130" height="130" rx="14" fill="#151a21" />
        <g transform="translate(65 140)" fill="#eef1f5">
          <Qr />
        </g>
        <path
          d="M40 135v-18h18M142 117h18v18M160 215v18h-18M58 233H40v-18"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="45"
          y1="175"
          x2="155"
          y2="175"
          stroke="var(--live)"
          strokeWidth="2"
          opacity="0.8"
        />
        <text x="100" y="272" textAnchor="middle" fontSize="11" fill="var(--muted)" {...T}>
          Point at the code on
        </text>
        <text x="100" y="288" textAnchor="middle" fontSize="11" fill="var(--muted)" {...T}>
          the station
        </text>
      </Frame>
      <Frame label="Work screen with the step's instructions, a required photo, units, and pause and end buttons">
        <rect x="120" y="44" width="58" height="16" rx="8" fill="var(--bg-alt)" />
        <text x="149" y="55" textAnchor="middle" fontSize="8" fill="var(--muted)" {...T}>
          Offline · 3
        </text>
        <text x="24" y="56" fontSize="10" fill="var(--muted)" {...T}>
          Assembly 2 · 09:41
        </text>
        <text x="24" y="78" fontSize="14" fontWeight="700" fill="var(--text)" {...T}>
          Assemble frame
        </text>
        <text x="24" y="94" fontSize="10" fill="var(--muted)" {...T}>
          WO-1042 · Shelf unit, oak
        </text>
        <rect
          x="24"
          y="106"
          width="152"
          height="44"
          rx="12"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text x="38" y="134" fontSize="17" fontWeight="700" fill="var(--text)" {...T}>
          01:12:08
        </text>
        <text
          x="162"
          y="133"
          textAnchor="end"
          fontSize="10"
          fill="var(--live)"
          fontWeight="600"
          {...T}
        >
          ● Working
        </text>
        <rect
          x="24"
          y="158"
          width="152"
          height="84"
          rx="12"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text x="38" y="177" fontSize="9.5" fontWeight="600" fill="var(--muted)" {...T}>
          INSTRUCTIONS
        </text>
        {["Square the frame first", "4 screws per corner", "Check with the gauge"].map(
          (line, i) => (
            <g key={line}>
              <circle cx="41" cy={193 + i * 16} r="2.2" fill="var(--accent)" />
              <text x="49" y={196 + i * 16} fontSize="10.5" fill="var(--text)" {...T}>
                {line}
              </text>
            </g>
          ),
        )}
        <rect
          x="24"
          y="250"
          width="152"
          height="40"
          rx="12"
          fill="var(--surface)"
          stroke="var(--live)"
        />
        <path
          d="M37 263h4l2-3h8l2 3h4v13H37z"
          fill="none"
          stroke="var(--live)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="47" cy="269.5" r="3" fill="none" stroke="var(--live)" strokeWidth="1.6" />
        <text x="64" y="274" fontSize="10.5" fontWeight="600" fill="var(--text)" {...T}>
          Photo required
        </text>
        <rect x="136" y="259" width="32" height="22" rx="11" fill="var(--accent)" />
        <text x="152" y="274" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" {...T}>
          Add
        </text>
        <rect
          x="24"
          y="298"
          width="152"
          height="40"
          rx="12"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text x="38" y="322" fontSize="11" fill="var(--muted)" {...T}>
          Units
        </text>
        <text
          x="100"
          y="323"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          42
        </text>
        <rect x="138" y="304" width="28" height="28" rx="8" fill="var(--accent)" />
        <text x="152" y="324" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" {...T}>
          +
        </text>
        <rect
          x="24"
          y="346"
          width="72"
          height="32"
          rx="16"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text
          x="60"
          y="366"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="var(--text)"
          {...T}
        >
          Pause
        </text>
        <rect x="104" y="346" width="72" height="32" rx="16" fill="var(--accent)" />
        <text x="140" y="366" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" {...T}>
          End
        </text>
      </Frame>
    </div>
  );
}
