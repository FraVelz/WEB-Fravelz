import { escapeRegExp } from "../utils/functions";

type HighlightMatchProps = {
  text: string;
  query: string;
};

export function HighlightMatch({ text, query }: HighlightMatchProps) {
  if (!query.trim()) return text;

  const escaped = escapeRegExp(query.trim());
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            className="rounded bg-cyan-200/80 px-0.5 font-medium text-cyan-900 dark:bg-cyan-500/40 dark:text-cyan-100"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
