import {tr, localizeNode} from "../i18n";
import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Lightbulb, RotateCcw } from 'lucide-react';
import type { Lesson } from '../../../../packages/content/types';
import { MathText } from './MathText';
export function TeachingExplanation({lesson}:{lesson:Lesson}) {
  const [open,setOpen]=useState(false);
  return <div className="teaching-explanation">
    <button className="small-btn" aria-expanded={open} onClick={()=>setOpen(!open)}><Lightbulb size={16}/>{localizeNode(open?'收起解释':'换个说法')}<ChevronDown size={14}/></button>
    {localizeNode(open&&<div className="teaching-response"><p><MathText text={tr(lesson.teaching.explain)}/></p></div>)}
  </div>;
}
export function GuidedExperiment({lesson,index,modified,onApply}:{lesson:Lesson;index:number|null;modified:boolean;onApply:(index:number)=>void}) {
  const [reveal,setReveal]=useState(false);
  const step=index===null?undefined:lesson.teaching.steps[index];
  function choose(i:number){setReveal(false);onApply(i);}
  return <div className="guided-experiment">
    <div className="experiment-prompt"><p><MathText text={tr(lesson.interactiveVisual.prediction)}/></p></div>
    <div className="experiment-steps" role="group" aria-label={tr("演示步骤")}>
      {localizeNode(lesson.teaching.steps.map((s,i)=><button key={i} aria-pressed={i===index} onClick={()=>choose(i)}><span className="step-index">{localizeNode(i+1)}</span><span>{localizeNode(s.title)}</span><ArrowRight size={14}/></button>))}
    </div>
    <div className="experiment-task" aria-live="polite">
      {localizeNode(step?<>
        <strong><MathText text={tr(step.instruction)}/></strong>
        {localizeNode(modified&&<p>{tr("参数已修改，下面的说明对应原来的设置。")}</p>)}
        <div className="experiment-actions">
          <button className="small-btn" onClick={()=>setReveal(!reveal)} aria-expanded={reveal}><Check size={14}/>{localizeNode(reveal?'收起说明':'查看说明')}</button>
          {localizeNode(modified&&<button className="text-btn" onClick={()=>choose(index!)}><RotateCcw size={14}/>{tr("恢复本步参数")}</button>)}
          {localizeNode(index!<2&&<button className="text-btn" onClick={()=>choose(index!+1)}>{tr("下一步")}<ArrowRight size={14}/></button>)}
        </div>
        {localizeNode(reveal&&<div className="experiment-observation">{localizeNode(modified&&<span>{tr("原设置的说明")}</span>)}<p><MathText text={tr(step.observation)}/></p></div>)}
      </>:<p>{tr("点击上方步骤，或直接调整下方参数。")}</p>)}
    </div>
  </div>;
}
