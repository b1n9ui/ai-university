import {useEffect, useId, useRef, useState} from 'react';
import {ArrowLeft, ArrowRight, Check, ListOrdered} from 'lucide-react';
import type {Lesson} from '../../../../packages/content/types';
import {tr} from '../i18n';
import {MathText} from './MathText';
export function WorkedExample({example,index=0,compact=false}:{example:Lesson['workedExamples'][number];index?:number;compact?:boolean}){
 const [shown,setShown]=useState(0);
 const id=useId(),total=example.steps.length,complete=shown===total;
 const answer=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(complete&&shown>0)answer.current?.focus({preventScroll:true});},[complete]);
 return <article className={'worked-example guided-example'+(compact?' compact-example':'')}>
  <header><span>{tr(`例题 ${index+1}`)}</span><h3><MathText text={tr(example.title)}/></h3></header>
  <p className="example-problem"><MathText text={tr(example.problem)}/></p>
  <ol id={id} hidden={shown===0} className="example-reasoning" aria-label={tr('已展开的推导')}>
   {example.steps.slice(0,shown).map((step,i)=><li key={i}><span>{i+1}</span><MathText text={tr(step)}/></li>)}
  </ol>
  {complete&&<div className="example-answer" ref={answer} tabIndex={-1}><Check size={18}/><MathText text={tr(example.answer)}/></div>}
  <div className="example-step-actions">
   {!complete&&<button className="small-btn" aria-controls={id} onClick={()=>setShown(shown+1)}><ListOrdered size={15}/>{tr(shown===0?'带我做第一步':'继续下一步')}<ArrowRight size={14}/></button>}
   {shown>0&&<button className="text-btn" onClick={()=>setShown(shown-1)}><ArrowLeft size={14}/>{tr('退回一步')}</button>}
   {!complete&&<button className="text-btn" onClick={()=>setShown(total)}>{tr('直接看完整解答')}</button>}
   {complete&&<button className="text-btn" onClick={()=>setShown(0)}>{tr('收起，自己再做一次')}</button>}
   <span className="step-count" role="status">{tr('已展开')} {shown} / {total} {tr('步')}</span>
  </div>
 </article>;
}
