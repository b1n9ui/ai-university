import {tr, localizeNode} from "../i18n";
import {useEffect,useId,useRef,useState} from 'react';
import {Play,Pause,RotateCcw} from 'lucide-react';
import type {Lesson,TeachingPreset} from '../../../../packages/content/types';
import {probabilityControls,probabilityDefaults,probabilityFrame,probabilityPlayback,fmt,type ProbabilityFrame} from '../../../../packages/visuals/probability.mjs';
import {Formula,MathText,plainMathText} from './MathText';
import {ParameterControl} from './ParameterControl';
import './probability.css';
function ProbabilityPlot({frame,title,onDrag}:{frame:ProbabilityFrame;title:string;onDrag?:(n:number)=>void}){
 const clip=useId().replace(/:/g,''),drag=useRef(false),W=680,H=390,P=47;
 const [xmin,xmax,ymin,ymax]=frame.range;
 const X=(x:number)=>P+(x-xmin)/(xmax-xmin)*(W-2*P),Y=(y:number)=>H-P-(y-ymin)/(ymax-ymin)*(H-2*P);
 const path=(ps:number[][])=>ps.map(([x,y],i)=>(i?'L':'M')+X(x).toFixed(3)+','+Y(y).toFixed(3)).join('');
 function move(e:React.PointerEvent<SVGSVGElement>){if(!drag.current||!onDrag)return;const matrix=e.currentTarget.getScreenCTM();if(!matrix)return;const point=new DOMPoint(e.clientX,e.clientY).matrixTransform(matrix.inverse());onDrag(ymin+(H-P-point.y)/(H-2*P)*(ymax-ymin));}
 return <svg viewBox={`0 0 ${W} ${H}`} className={'probability-plot'+(onDrag?' draggable':'')} role="img" aria-label={tr(title)} onPointerDown={e=>{if(onDrag&&(e.target as Element).closest('[data-handle]')){e.preventDefault();drag.current=true;e.currentTarget.setPointerCapture(e.pointerId);move(e);}}} onPointerMove={move} onPointerUp={()=>{drag.current=false;}} onPointerCancel={()=>{drag.current=false;}}>
  <title>{localizeNode(title)}</title><desc>{tr("坐标轴注明统计对象。可用下方参数输入、滑块和播放按钮探索；图像只显示有限窗口。")}</desc>
  <defs><clipPath id={clip}><rect x={P} y={P} width={W-2*P} height={H-2*P}/></clipPath></defs>
  {localizeNode([0,1,2,3,4,5].map(i=>{const x=xmin+(xmax-xmin)*i/5,y=ymin+(ymax-ymin)*i/5;return <g key={i}><line x1={X(x)} x2={X(x)} y1={P} y2={H-P} stroke="#34584f" strokeWidth=".65"/><line x1={P} x2={W-P} y1={Y(y)} y2={Y(y)} stroke="#34584f" strokeWidth=".65"/><text x={X(x)} y={H-P+22} textAnchor="middle">{localizeNode(Number(x.toPrecision(3)))}</text><text x={P-8} y={Y(y)+4} textAnchor="end">{localizeNode(Number(y.toPrecision(3)))}</text></g>}))}
  <g clipPath={`url(#${clip})`}>
   {localizeNode(frame.shades.map((s,i)=><path key={'shade'+i} d={path(s.points)+'Z'} fill={s.color} opacity=".2"><title>{localizeNode(s.label)}</title></path>))}
   {localizeNode(frame.bars.map((b,i)=><rect key={'bar'+i} x={X(b.x-b.width/2)} y={Y(b.y)} width={X(b.width)-X(0)} height={Math.max(0,Y(0)-Y(b.y))} fill={b.color} opacity=".82"><title>{`${tr(b.label)}: ${fmt(b.y)}`}</title></rect>))}
   {localizeNode(frame.intervals.map((r,i)=><g key={'interval'+i}><title>{localizeNode(`第 ${r.y} 次：${fmt(r.low)} 至 ${fmt(r.high)}，${r.contains?'覆盖':'未覆盖'}真均值`)}</title><line x1={X(r.low)} x2={X(r.high)} y1={Y(r.y)} y2={Y(r.y)} stroke={r.contains?'#b7dba7':'#edc47f'} strokeWidth={r.contains?1.4:2.4}/><circle cx={X(r.center)} cy={Y(r.y)} r="1.6" fill={r.contains?'#b7dba7':'#edc47f'}/></g>))}
   {localizeNode(frame.series.map((s,i)=><path key={'series'+i} d={path(s.points)} stroke={s.color} strokeWidth="2.2" strokeDasharray={s.dash?'6 6':undefined} fill="none"><title>{localizeNode(s.label)}</title></path>))}
   {localizeNode(frame.dots.map((d,i)=><g key={'point'+i}><circle data-handle={d.handle?true:undefined} cx={X(d.x)} cy={Y(d.y)} r={d.handle?15:4.5} fill={d.color} opacity={d.handle ? .2 : .95}/>{localizeNode(d.handle&&<circle data-handle="true" cx={X(d.x)} cy={Y(d.y)} r="6" fill={d.color}/>)}<title>{`${tr(d.label)}: (${fmt(d.x)}, ${fmt(d.y)})`}</title></g>))}
  </g>
  <text x={W-P} y={H-5} textAnchor="end" className="prob-axis-title">{localizeNode(frame.axes[0])}</text><text x={P} y={19} className="prob-axis-title">{localizeNode(frame.axes[1])}</text>
 </svg>;
}
function Model({frame,title,onDrag}:{frame:ProbabilityFrame;title:string;onDrag?:(n:number)=>void}){
 const hasPlot=frame.bars.length||frame.series.length||frame.dots.length||frame.intervals.length;
 return <>
 {localizeNode(frame.table&&<div className="prob-table-wrap"><table className="prob-table"><caption>{localizeNode(title)}{tr("· 联合表")}</caption><thead><tr><th scope="col">{tr("联合值")}</th>{localizeNode(frame.table.columnLabels.map(t=><th scope="col" key={t}>{localizeNode(t)}</th>))}<th scope="col">{tr("行合计")}</th></tr></thead><tbody>{localizeNode(frame.table.values.map((row,i)=><tr key={i}><th scope="row">{localizeNode(frame.table!.rowLabels[i])}</th>{localizeNode(row.map((v,j)=><td key={j} style={{background:`rgb(117 208 223 / ${.06+.35*v/Math.max(...frame.table!.values.flat(),.01)})`}}>{localizeNode(fmt(v))}</td>))}<td>{localizeNode(fmt(frame.table!.rowTotals[i]))}</td></tr>))}</tbody><tfoot><tr><th scope="row">{tr("列合计")}</th>{localizeNode(frame.table.columnTotals.map((v,j)=><td key={j}>{localizeNode(fmt(v))}</td>))}<td>{localizeNode(fmt(frame.table.rowTotals.reduce((a,b)=>a+b,0)))}</td></tr></tfoot></table></div>)}
 {localizeNode(frame.tiles.length>0&&<div className="prob-tiles">{localizeNode(frame.tiles.map((t,i)=><div key={i} style={{borderColor:t.color}}><small>{localizeNode(t.label)}</small><strong style={{color:t.color}}>{localizeNode(t.value)}</strong></div>))}</div>)}
 {localizeNode(!!hasPlot&&<ProbabilityPlot frame={frame} title={tr(title)} onDrag={onDrag}/>)}
 {localizeNode(frame.secondary&&<ProbabilityPlot frame={frame.secondary} title={tr(title+' · 累计分布')}/>)}
 {localizeNode(frame.series.length>0&&<div className="prob-legend">{localizeNode([...new Map(frame.series.map(s=>[s.label,s])).values()].map(s=><span key={s.label}><i style={{background:s.color}}/><MathText text={tr(s.label)}/></span>))}</div>)}
 </>;
}
export function ProbabilityPreview({lesson}:{lesson:Lesson}){const frame=probabilityFrame(lesson.id,probabilityDefaults(lesson.id));return <div className="prob-preview"><Model frame={frame} title={tr(plainMathText(lesson.title)+'：模型预览')}/></div>;}
export default function ProbabilityVisual({lesson,compact=false,scenario,onInteraction}:{lesson:Lesson;compact?:boolean;scenario?:TeachingPreset&{revision:number};onInteraction?:()=>void}){
 const controls=probabilityControls(lesson.id),[params,setParams]=useState(()=>probabilityDefaults(lesson.id)),[playing,setPlaying]=useState(false),[notice,setNotice]=useState('');
 const clock=useRef<number|null>(null),seed=useRef(params);
 useEffect(()=>{setParams(probabilityDefaults(lesson.id));setPlaying(false);setNotice('');},[lesson.id]);
 useEffect(()=>{if(!scenario)return;setPlaying(false);setParams({...probabilityDefaults(lesson.id),...Object.fromEntries(controls.filter(c=>typeof scenario[c.key as keyof TeachingPreset]==='number').map(c=>[c.key,scenario[c.key as keyof TeachingPreset] as number]))});setNotice('');},[scenario?.revision]);
 useEffect(()=>{if(!playing)return;let request=0;clock.current=null;seed.current={...params};const tick=(time:number)=>{if(clock.current===null)clock.current=time;const frame=probabilityPlayback(lesson.id,seed.current,(time-clock.current)/1000);setParams(old=>({...old,[frame.key]:frame.value}));if(frame.done){setPlaying(false);setNotice('已到本次参数范围的终点。');}else request=requestAnimationFrame(tick);};request=requestAnimationFrame(tick);return()=>cancelAnimationFrame(request);},[playing,lesson.id]);
 useEffect(()=>{const stop=()=>{if(document.hidden)setPlaying(false);};document.addEventListener('visibilitychange',stop);return()=>document.removeEventListener('visibilitychange',stop);},[]);
 const frame=probabilityFrame(lesson.id,params);
 function change(key:string,value:number){onInteraction?.();setPlaying(false);setNotice('');setParams(old=>({...old,[key]:value}));}
 const handle=frame.draggable,control=handle?controls.find(c=>c.key===handle.key):undefined;
 return <section className={'visual-card probability-card'+(compact?' compact':'')} aria-label={tr(plainMathText(lesson.title)+'交互演示')}>
  <div className="visual-top"><span>PROBABILITY LAB</span><div><button className="icon-btn" aria-label={tr(playing?'暂停参数演示':'播放参数演示')} onClick={()=>{onInteraction?.();setNotice('');setPlaying(!playing);}}>{localizeNode(playing?<Pause size={17}/>:<Play size={17}/>)}</button><button className="icon-btn" aria-label={tr("恢复本节参数")} onClick={()=>{onInteraction?.();setPlaying(false);setNotice('');setParams(probabilityDefaults(lesson.id));}}><RotateCcw size={17}/></button></div></div>
  <Model frame={frame} title={tr(plainMathText(lesson.title))} onDrag={handle&&control?value=>change(handle.key,Math.max(control.min,Math.min(control.max,Math.round(value*100)/100))):undefined}/>
  <div className="prob-readouts" aria-live="polite">{localizeNode(frame.metrics.map(m=><div key={m.label}><span><MathText text={tr(m.label)}/></span><strong><Formula latex={m.value.replace(/([\d.]+)e([+-]?\d+)/g,(_,a,b)=>a+'\\times10^{'+Number(b)+'}')}/></strong></div>))}</div>
  <div className="prob-formula"><Formula latex={tr(frame.formula)} display/></div>
  <div className="prob-controls">{localizeNode(controls.map(c=><ParameterControl key={c.key} label={tr(c.label)} min={c.min} max={c.max} step={c.step} value={params[c.key]} onChange={v=>change(c.key,v)}/>))}</div>
  <p className="prob-note"><MathText text={tr(frame.note)}/></p>{localizeNode(notice&&<p role="status" className="prob-note">{localizeNode(notice)}</p>)}
 </section>;
}
