import {tr} from '../i18n';
import {useEffect, useId, useState} from 'react';
import {ArrowRight, BookOpen, Check, ChevronDown, Lightbulb, ListOrdered, MessageSquareText, RotateCcw, ScanLine} from 'lucide-react';
import {lessonById} from '../../../../packages/content';
import type {Lesson} from '../../../../packages/content/types';
import {MathText, Formula} from './MathText';
import {WorkedExample} from './WorkedExample';
import {Link} from './UI';
import {lessonPath} from '../lib/catalog';
const ways=[['explain','换个说法',Lightbulb],['derive','推导拆开看',ListOrdered],['example','带我做例题',MessageSquareText],['basics','补前置知识',BookOpen]] as const;
export function TeachingExplanation({lesson}:{lesson:Lesson}){
 const [mode,setMode]=useState<typeof ways[number][0]|null>(null),[shown,setShown]=useState(1);
 const panel=useId();
 const active=ways.find(([key])=>key===mode);
 return <section className="lesson-tutor" aria-label={tr('本节答疑')}>
  <header><MessageSquareText size={19}/><div><span>{tr('本节答疑')}</span><h3>{tr('哪里还没明白？')}</h3></div></header>
  <div className="tutor-ways" role="group" aria-label={tr('选择讲解方式')}>
   {ways.map(([key,label,Icon])=><button key={key} aria-pressed={mode===key} aria-expanded={mode===key} aria-controls={panel} onClick={()=>{setMode(mode===key?null:key);setShown(1);}}><Icon size={16}/>{tr(label)}</button>)}
  </div>
  <div id={panel} hidden={!active} className="tutor-answer" role="region" aria-label={active?tr(active[1]):tr('本节答疑')}>
   {mode==='explain'&&<><p className="tutor-direct-answer"><MathText text={tr(lesson.teaching.explain)}/></p><Link to={lessonPath(lesson.id)} params={{view:'visual'}} className="text-btn">{tr('用图验证这个解释')}<ArrowRight size={15}/></Link></>}
   {mode==='derive'&&<><p><MathText text={tr(lesson.formalDefinition.text)}/></p><ul className="tutor-conditions">{lesson.formalDefinition.conditions.map((c,i)=><li key={i}><MathText text={tr(c)}/></li>)}</ul><ol className="tutor-derivation">{lesson.derivation.slice(0,shown).map((s,i)=><li key={i}><span>{i+1}</span><div><p><MathText text={tr(s.text)}/></p>{s.latex&&<Formula latex={s.latex} display/>}</div></li>)}</ol><div className="tutor-actions">{shown<lesson.derivation.length&&<><button className="small-btn" onClick={()=>setShown(shown+1)}>{tr('继续下一步')}<ArrowRight size={14}/></button><button className="text-btn" onClick={()=>setShown(lesson.derivation.length)}>{tr('展开全部推导')}</button></>}{shown>1&&<button className="text-btn" onClick={()=>setShown(shown-1)}>{tr('退回一步')}</button>}<span className="step-count" role="status">{tr('已展开')} {shown} / {lesson.derivation.length} {tr('步')}</span></div></>}
   {mode==='example'&&<WorkedExample key={lesson.id} example={lesson.workedExamples[0]} compact/>}
   {mode==='basics'&&<>{lesson.prerequisites.length?<><p>{tr('下面这些概念会用到。不熟悉哪一个，就先回看那一节。')}</p><div className="tutor-prerequisites">{lesson.prerequisites.map(id=>{const prerequisite=lessonById[id];return prerequisite?<Link key={id} to={lessonPath(id)}><span><small>{prerequisite.number}</small><MathText text={tr(prerequisite.title)}/></span><ArrowRight size={15}/></Link>:null;})}</div></>:<p><MathText text={tr(lesson.intuition)}/></p>}</>}
  </div>
 </section>;
}
export function GuidedExperiment({lesson,index,modified,onApply,onFocusVisual,prediction,onPrediction}:{lesson:Lesson;index:number|null;modified:boolean;onApply:(index:number)=>void;onFocusVisual?:()=>void;prediction:string;onPrediction:(value:string)=>void}){
 const [reveal,setReveal]=useState(false);
 const step=index===null?undefined:lesson.teaching.steps[index];
 useEffect(()=>setReveal(false),[index]);
 function choose(i:number){setReveal(false);onApply(i);}
 return <div className="guided-experiment">
  <div className="experiment-prompt"><p><MathText text={tr(lesson.interactiveVisual.prediction)}/></p><details className="experiment-notes"><summary>{tr('先写下你的判断')}</summary><label>{tr('我的预测')}<textarea value={prediction} maxLength={1000} onChange={e=>onPrediction(e.target.value)} placeholder={tr('你预计会发生什么？为什么？')}/></label><small>{tr('只在当前页面暂存，不评分、不上传；离开本节后清空。')}</small></details></div>
  <div className="experiment-steps" role="group" aria-label={tr('演示步骤')}>
   {lesson.teaching.steps.map((s,i)=><button key={i} aria-pressed={i===index} onClick={()=>choose(i)}><span className="step-index">{i+1}</span><span>{tr(s.title)}</span><ArrowRight size={14}/></button>)}
  </div>
  <div className="experiment-task">
   {step?<><div className="experiment-current"><span className="step-count">{tr('当前步骤')} {index!+1} / {lesson.teaching.steps.length}</span><strong><MathText text={tr(step.instruction)}/></strong></div>{modified&&<p>{tr('参数已修改，下面的说明对应原来的设置。')}</p>}<div className="experiment-actions"><button className="small-btn" onClick={onFocusVisual}><ScanLine size={15}/>{tr('看图操作')}</button><button className="text-btn" onClick={()=>setReveal(!reveal)} aria-expanded={reveal}>{tr(reveal?'收起说明':'查看本步说明')}<ChevronDown size={14}/></button>{modified&&<button className="text-btn" onClick={()=>choose(index!)}><RotateCcw size={14}/>{tr('恢复本步参数')}</button>}</div>{reveal&&<div className="experiment-observation"><p><MathText text={tr(step.observation)}/></p></div>}</>:<div className="experiment-start"><span>{tr('依次改变参数，再对照图中的结果。')}</span><button className="small-btn" onClick={()=>choose(0)}>{tr('开始引导')}<ArrowRight size={15}/></button></div>}
  </div>
 </div>;
}
export function ExperimentCheckpoint({lesson,index,modified,onApply,prediction}:{lesson:Lesson;index:number;modified:boolean;onApply:(index:number)=>void;prediction:string}){
 const step=lesson.teaching.steps[index];
 const [reason,setReason]=useState('');
 const last=index===lesson.teaching.steps.length-1;
 return <aside className="experiment-checkpoint" aria-label={tr('核对观察结果')}>
  <div><span className="step-count">{tr('当前步骤')} {index+1} / {lesson.teaching.steps.length}</span><h4><MathText text={tr(step.instruction)}/></h4></div>
  <details key={`${lesson.id}-${index}`}><summary><Lightbulb size={16}/>{tr('核对这一步的现象')}<ChevronDown className="checkpoint-chevron" size={14}/></summary>{modified&&<p className="checkpoint-caution">{tr('你已调整参数；这段说明对应本步预设，不是对当前图形的自动判断。')}</p>}<p><MathText text={tr(step.observation)}/></p></details>
  {last&&lesson.teaching.reflection&&<div className="experiment-reflection"><h4>{tr('用自己的话解释')}</h4>{prediction&&<blockquote><small>{tr('刚才的预测')}</small><p>{prediction}</p></blockquote>}<p><MathText text={tr(lesson.teaching.reflection.question)}/></p><label>{tr('我的解释')}<textarea value={reason} onChange={e=>setReason(e.target.value)} maxLength={1500} placeholder={tr('把观察结果和数学条件连起来。')}/></label><details><summary>{tr('对照参考解释')}</summary>{modified&&<p className="checkpoint-caution">{tr('你已调整参数；这段说明对应本步预设，不是对当前图形的自动判断。')}</p>}<MathText text={tr(lesson.teaching.reflection.answer)}/><p className="note">{tr('不会自动判定你的文字是否正确，请逐项核对理由与条件。')}</p></details></div>}
  <div className="checkpoint-actions">{modified&&<button className="text-btn" onClick={()=>onApply(index)}><RotateCcw size={14}/>{tr('恢复本步参数')}</button>}{!last?<button className="small-btn" onClick={()=>onApply(index+1)}>{tr('继续下一步')}<ArrowRight size={15}/></button>:<Link className="small-btn" to={lessonPath(lesson.id)} params={{view:'practice',...(lesson.teaching.transferExerciseId?{question:lesson.teaching.transferExerciseId}:{})}}><Check size={15}/>{tr(lesson.teaching.transferExerciseId?'换个情境再试':'做一题，检查理解')}</Link>}</div>
 </aside>;
}
