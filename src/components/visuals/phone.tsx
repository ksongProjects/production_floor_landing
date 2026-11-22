import type { ReactNode } from "react";

// Two phone screens: scan a station/zone QR code, then the active task with watch-out alert & voice note.

function Qr() {
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
      <Frame label="Phone scanning a station or zone QR code">
        <text
          x="100"
          y="60"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          Scan station or zone
        </text>
        <rect x="35" y="102" width="130" height="130" rx="14" fill="#151a21" />
        <g transform="translate(65 132)" fill="#eef1f5">
          <Qr />
        </g>
        <path
          d="M40 127v-18h18M142 109h18v18M160 207v18h-18M58 225H40v-18"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="45"
          y1="125"
          x2="155"
          y2="125"
          stroke="var(--live)"
          strokeWidth="2.5"
          opacity="0.9"
        >
          <animate attributeName="y1" values="118;216;118" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="118;216;118" dur="2.4s" repeatCount="indefinite" />
        </line>
        <text x="100" y="262" textAnchor="middle" fontSize="10.5" fill="var(--muted)" {...T}>
          Start work or close a move job
        </text>
        <rect
          x="26"
          y="292"
          width="148"
          height="58"
          rx="12"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text x="38" y="314" fontSize="9.5" fontWeight="700" fill="var(--warn)" {...T}>
          ▲ Watch out for
        </text>
        <text x="38" y="330" fontSize="9" fill="var(--text)" {...T}>
          Check lug torque on Sec 3
        </text>
        <text x="38" y="342" fontSize="8.5" fill="var(--muted)" {...T}>
          From Wiring SOP · v4
        </text>
      </Frame>
      <Frame label="Work screen with pace timer, pieces, voice note recording and offline queue">
        <text x="24" y="54" fontSize="10" fill="var(--muted)" {...T}>
          Wiring Bay 2 · 09:41
        </text>
        <text x="24" y="73" fontSize="13.5" fontWeight="700" fill="var(--text)" {...T}>
          Control wiring
        </text>
        <text x="24" y="88" fontSize="9.5" fill="var(--muted)" {...T}>
          CO-482910 · Unit 3 · On pace
        </text>
        <rect
          x="24"
          y="102"
          width="152"
          height="66"
          rx="12"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text
          x="100"
          y="134"
          textAnchor="middle"
          fontSize="22"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          00:34:18
        </text>
        <text
          x="100"
          y="155"
          textAnchor="middle"
          fontSize="9.5"
          fill="var(--ok)"
          fontWeight="600"
          {...T}
        >
          ● Working · 45m expected
        </text>
        <rect
          x="24"
          y="178"
          width="152"
          height="46"
          rx="12"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text x="38" y="205" fontSize="10.5" fill="var(--muted)" {...T}>
          Pieces
        </text>
        <text
          x="100"
          y="206"
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill="var(--text)"
          {...T}
        >
          18 / 24
        </text>
        <rect x="138" y="187" width="28" height="28" rx="8" fill="var(--accent)" />
        <text x="152" y="206" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff" {...T}>
          +
        </text>
        <rect
          x="24"
          y="234"
          width="152"
          height="48"
          rx="12"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
        />
        <circle cx="42" cy="258" r="6" fill="var(--live)" />
        <text x="56" y="255" fontSize="10" fontWeight="700" fill="var(--text)" {...T}>
          Hold to record note
        </text>
        <text x="56" y="270" fontSize="8.5" fill="var(--muted)" {...T}>
          Live transcript → web
        </text>
        <rect
          x="24"
          y="296"
          width="72"
          height="36"
          rx="18"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <text
          x="60"
          y="318"
          textAnchor="middle"
          fontSize="11.5"
          fontWeight="600"
          fill="var(--text)"
          {...T}
        >
          Pause
        </text>
        <rect x="104" y="296" width="72" height="36" rx="18" fill="var(--accent)" />
        <text
          x="140"
          y="318"
          textAnchor="middle"
          fontSize="11.5"
          fontWeight="600"
          fill="#fff"
          {...T}
        >
          Finish
        </text>
        <rect x="38" y="346" width="124" height="22" rx="11" fill="var(--bg-alt)" />
        <text x="100" y="361" textAnchor="middle" fontSize="9" fill="var(--muted)" {...T}>
          Offline · 2 updates queued
        </text>
      </Frame>
    </div>
  );
}
