import {tr, localizeNode} from "../i18n";
import { useState } from "react";
import { ArrowRight, Check, Lightbulb } from "lucide-react";
import type { Lesson } from "../../../../packages/content/types";
import { MathText } from "./MathText";
export function LearningCheck({ check }: { check: Lesson["learningCheck"] }) {
  const [choice, setChoice] = useState<number | null>(null);
  const answered = choice !== null,
    correct = choice === check.correctIndex;
  return (
    <div className="learning-check">
      <div className="learning-check-label">
        <Lightbulb size={16} />
        <span>{tr("先想一下 · 不计分")}</span>
      </div>
      <h3>
        <MathText text={tr(check.question)} />
      </h3>
      <div className="check-choices" role="group" aria-label={tr("概念检查选项")}>
        {localizeNode(check.choices.map((text, i) => (
          <button
            key={i}
            aria-pressed={choice === i}
            className={
              (choice === i ? "selected " : "") +
              (answered && i === check.correctIndex ? "correct" : "")
            }
            onClick={() => setChoice(i)}
          >
            <span>
              {localizeNode(answered && i === check.correctIndex ? (
                <Check size={14} />
              ) : (
                String.fromCharCode(65 + i)
              ))}
            </span>
            <span className="check-choice-text"><MathText text={tr(text)} /></span>
            <ArrowRight size={14} />
          </button>
        )))}
      </div>
      {localizeNode(answered && (
        <div className="check-feedback" role="status">
          <strong>{localizeNode(correct ? "对。" : "再对照一下条件。")}</strong>
          <MathText text={tr(check.explanation)} />
        </div>
      ))}
    </div>
  );
}
