import {tr, localizeNode} from "../i18n";
import { useId, useRef, useState } from "react";
import { ArrowRight, Check, Lightbulb, RotateCcw, ScanLine } from "lucide-react";
import type { Lesson } from "../../../../packages/content/types";
import { MathText } from "./MathText";
export function LearningCheck({ check, hint, onExplore }: { check: Lesson["learningCheck"]; hint?:string; onExplore?:()=>void }) {
  const [choice, setChoice] = useState<number | null>(null);
  const [revealed,setRevealed]=useState(false);
  const feedbackId=useId();
  const choices=useRef<(HTMLButtonElement|null)[]>([]);
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
            ref={node=>{choices.current[i]=node;}}
            aria-pressed={choice === i}
            className={
              (choice === i ? "selected " : "") +
              (answered && (correct||revealed) && i === check.correctIndex ? "correct" : "") +
              (answered && !correct && choice===i ? " needs-review" : "")
            }
            onClick={() => {setChoice(i);setRevealed(false);}}
            aria-describedby={answered?feedbackId:undefined}
          >
            <span>
              {localizeNode(answered && (correct||revealed) && i === check.correctIndex ? (
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
        <div id={feedbackId} className={"check-feedback "+(correct?'check-correct':'check-review')}>
          <div role="status"><strong>{tr(correct?'对。':revealed?'答案与解释':'回看这个要点，再试一次。')}</strong>
          <MathText text={tr(correct||revealed?check.explanation:hint||check.explanation)} /></div>
          {!correct&&<div className="check-followups">
           <button className="small-btn" onClick={()=>{choices.current[choice!]?.focus();setChoice(null);setRevealed(false);}}><RotateCcw size={14}/>{tr('再试一次')}</button>
           {!revealed&&<button className="text-btn" onClick={()=>setRevealed(true)}>{tr('查看答案与解释')}</button>}
           {onExplore&&<button className="text-btn" onClick={onExplore}><ScanLine size={14}/>{tr('用图验证')}</button>}
          </div>}
        </div>
      ))}
    </div>
  );
}
