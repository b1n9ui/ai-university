import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Lightbulb, RotateCcw } from 'lucide-react';
import type { Lesson } from '../../../../packages/content/types';
import { MathText } from './MathText';
export function TeachingExplanation({lesson}:{lesson:Lesson}) {
  const [open,setOpen]=useState(false);
  return <div className="teaching-explanation">
    <button className="small-btn" aria-expanded={open} onClick={()=>setOpen(!open)}><Lightbulb size={16}/>{open?'收起解释':'换个说法'}<ChevronDown size={14}/></button>
    {open&&<div className="teaching-response"><p><MathText text={lesson.teaching.explain}/></p></div>}
  </div>;
}
export function GuidedExperiment({lesson,index,modified,onApply}:{lesson:Lesson;index:number|null;modified:boolean;onApply:(index:number)=>void}) {
  const [reveal,setReveal]=useState(false);
  const step=index===null?undefined:lesson.teaching.steps[index];
  function choose(i:number){setReveal(false);onApply(i);}
  return <div className="guided-experiment">
    <div className="experiment-prompt"><p><MathText text={lesson.interactiveVisual.prediction}/></p></div>
    <div className="experiment-steps" role="group" aria-label="演示步骤">
      {lesson.teaching.steps.map((s,i)=><button key={i} aria-pressed={i===index} onClick={()=>choose(i)}><span className="step-index">{i+1}</span><span>{s.title}</span><ArrowRight size={14}/></button>)}
    </div>
    <div className="experiment-task" aria-live="polite">
      {step?<>
        <strong><MathText text={step.instruction}/></strong>
        {modified&&<p>参数已修改，下面的说明对应原来的设置。</p>}
        <div className="experiment-actions">
          <button className="small-btn" onClick={()=>setReveal(!reveal)} aria-expanded={reveal}><Check size={14}/>{reveal?'收起说明':'查看说明'}</button>
          {modified&&<button className="text-btn" onClick={()=>choose(index!)}><RotateCcw size={14}/>恢复本步参数</button>}
          {index!<2&&<button className="text-btn" onClick={()=>choose(index!+1)}>下一步<ArrowRight size={14}/></button>}
        </div>
        {reveal&&<div className="experiment-observation">{modified&&<span>原设置的说明</span>}<p><MathText text={step.observation}/></p></div>}
      </>:<p>点击上方步骤，或直接调整下方参数。</p>}
    </div>
  </div>;
}
