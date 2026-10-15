import type { CSSProperties } from "react";

/**
 * Headline whose words rise out of individual masks on first paint (CSS only, see
 * `.split-words` in globals.css). Screen readers get the plain sentence.
 */
export function SplitWords({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={`split-words ${className ?? ""}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, i) => (
          <span key={i}>
            <span className="w">
              <span style={{ "--wi": i } as CSSProperties}>{w}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </span>
  );
}
