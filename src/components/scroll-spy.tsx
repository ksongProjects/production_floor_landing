"use client";

import { useEffect, useState } from "react";

type Link = { id: string; label: string };

/**
 * Returns the id of the section that crosses a line `ratio` of the way down the viewport,
 * or null when none of the given sections does.
 */
function useActiveSection(ids: readonly string[], ratio = 0.4): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const list = key.split(",");
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * ratio;
      let found: string | null = null;
      for (const id of list) {
        const r = document.getElementById(id)?.getBoundingClientRect();
        if (r && r.top <= line && r.bottom > line) found = id;
      }
      setActive(found);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [key, ratio]);

  return active;
}

function scrollToId(id: string) {
  // Uses the page's CSS scroll-behavior and scroll-padding, so reduced motion is respected.
  document.getElementById(id)?.scrollIntoView({ block: "start" });
  history.replaceState(null, "", `#${id}`);
}

/** Top nav section links; the one for the section in view is highlighted. */
export function NavLinks({ links }: { links: readonly Link[] }) {
  const active = useActiveSection(links.map((l) => l.id));
  return (
    <nav className="nav-links" aria-label="Sections">
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={active === l.id ? "active" : undefined}
          aria-current={active === l.id ? "true" : undefined}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}

/** Fixed step rail on the right, shown while the "How it works" section is in view. */
export function StepRail({ group, steps }: { group: string; steps: readonly Link[] }) {
  const inGroup = useActiveSection([group], 0.5) === group;
  const active = useActiveSection(steps.map((s) => s.id), 0.5);
  const index = steps.findIndex((s) => s.id === active);
  const prev = index > 0 ? steps[index - 1] : undefined;
  const next = index < steps.length - 1 ? steps[index + 1] : undefined;

  return (
    <nav className={`step-rail${inGroup ? " show" : ""}`} aria-label="How it works steps">
      <button
        type="button"
        className="rail-arrow"
        aria-label={prev ? `Previous step: ${prev.label}` : "Previous step"}
        disabled={!prev}
        tabIndex={inGroup ? undefined : -1}
        onClick={() => prev && scrollToId(prev.id)}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 10l4-4 4 4" />
        </svg>
      </button>
      <ol>
        {steps.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={active === s.id ? "active" : undefined}
              aria-current={active === s.id ? "step" : undefined}
              tabIndex={inGroup ? undefined : -1}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(s.id);
              }}
            >
              <span className="rail-label">{s.label}</span>
              <span className="rail-dot">{i + 1}</span>
            </a>
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="rail-arrow"
        aria-label={next ? `Next step: ${next.label}` : "Next step"}
        disabled={!next}
        tabIndex={inGroup ? undefined : -1}
        onClick={() => next && scrollToId(next.id)}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
    </nav>
  );
}
