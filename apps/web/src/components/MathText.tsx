import {tr} from "../i18n";
import katex from "katex";
import { Fragment, memo } from "react";
import { splitMathText, plainMathText, mathDisplayMode } from "../../../../packages/content/math-text.mjs";
export { plainMathText };
export const Formula = memo(function Formula({
  latex,
  display = false,
}: {
  latex: string;
  display?: boolean;
}) {
  latex = tr(latex);
  const scrollable = mathDisplayMode(latex, display);
  const html = katex.renderToString(latex, {
    displayMode: scrollable,
    throwOnError: false,
    trust: false,
    strict: "ignore",
  });
  return (
    <span
      className={scrollable ? "formula display" : "formula"}
      tabIndex={scrollable ? 0 : undefined}
      role={scrollable ? "group" : undefined}
      aria-label={scrollable ? tr("数学公式，可横向滚动") : undefined}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});
export function MathText({ text }: { text: string }) {
  return <>{splitMathText(tr(text)).map((part, i) => part.kind === "math"
    ? <Formula key={i} display={part.display} latex={part.value} />
    : <Fragment key={i}>{part.value}</Fragment>)}</>;
}
