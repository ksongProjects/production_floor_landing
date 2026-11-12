import type { ReactNode } from "react";

// Two phone screens: scan a station QR code, then the work screen it opens.

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
      <Frame label="Work screen with a running task, units and pause and end buttons">
        <text x="24" y="58" fontSize="10" fill="var(--muted)" {...T}>
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
          y="112"
          width="152"
          height="74"
          rx="12"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text
          x="100"
          y="146"
          textAnchor="middle"
          fontSize="24"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          01:12:08
        </text>
        <text
          x="100"
          y="170"
          textAnchor="middle"
          fontSize="10"
          fill="var(--live)"
          fontWeight="600"
          {...T}
        >
          ● Working
        </text>
        <rect
          x="24"
          y="198"
          width="152"
          height="54"
          rx="12"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text x="38" y="230" fontSize="11" fill="var(--muted)" {...T}>
          Units
        </text>
        <text
          x="100"
          y="231"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          42
        </text>
        <rect x="134" y="210" width="30" height="30" rx="8" fill="var(--accent)" />
        <text x="149" y="231" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" {...T}>
          +
        </text>
        <rect
          x="24"
          y="300"
          width="72"
          height="38"
          rx="19"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text
          x="60"
          y="324"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="var(--text)"
          {...T}
        >
          Pause
        </text>
        <rect x="104" y="300" width="72" height="38" rx="19" fill="var(--accent)" />
        <text x="140" y="324" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" {...T}>
          End
        </text>
        <rect x="44" y="352" width="112" height="20" rx="10" fill="var(--bg-alt)" />
        <text x="100" y="366" textAnchor="middle" fontSize="9" fill="var(--muted)" {...T}>
          Offline · 2 updates queued
        </text>
      </Frame>
    </div>
  );
}
