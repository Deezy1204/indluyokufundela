import type { CSSProperties } from "react";

/** Inline style for the CSS entrance utilities (`enter-up`, `enter-wipe`, …): sets their delay. */
export function d(ms: number, extra?: CSSProperties): CSSProperties {
  return { "--d": `${ms}ms`, ...extra } as CSSProperties;
}
