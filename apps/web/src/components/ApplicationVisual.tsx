import {tr, localizeNode} from "../i18n";
import { useState, type ReactNode } from 'react';
import { RotateCcw } from 'lucide-react';
import { squareAverage, sectionSolid, pumpWater, waterPressure } from '../../../../packages/visuals/applications.mjs';
import { MathText, Formula, plainMathText } from './MathText';
import { ParameterControl } from './ParameterControl';
const number = (x: number) => Number(x.toFixed(4)).toString();
function Control({label,value,min,max,step=.01,onChange}:{label:string;value:number;min:number;max:number;step?:number;onChange:(n:number)=>void}) {
  return <ParameterControl label={tr(label)} value={value} min={min} max={max} step={step} onChange={onChange}/>;
}
function Frame({ title, children, reset }: { title: string; children: ReactNode; reset: () => void }) {
  return <section className="visual-card application-visual" aria-label={tr(title)}><header><div><span className="eyebrow">MODEL & CHECK</span><h3>{localizeNode(title)}</h3></div><button className="icon-btn" aria-label={tr(`重置${title}`)} onClick={reset}><RotateCcw size={17}/></button></header>{localizeNode(children)}<p className="visual-note">{tr("改变参数，核对模型；图示不代替正文中的条件与论证。")}</p></section>;
}
function Readouts({ values }: { values: [string,string][] }) {
  return <div className="stats">{localizeNode(values.map(([label,value])=><div key={label}><span><MathText text={tr(label)}/></span><strong><MathText text={tr(value)}/></strong></div>))}</div>;
}
function Average() {
  const [b,setB]=useState(3), [showRectangle,setShowRectangle]=useState(true);
  const {average, integral,c}=squareAverage(b), X=(x:number)=>45+x*150,Y=(y:number)=>290-y*27;
  const curve=Array.from({length:101},(_,i)=>{const x=b*i/100;return `${i?'L':'M'}${X(x)},${Y(x*x)}`}).join(' ');
  return <Frame title={tr("把累积摊成相同的平均高度")} reset={()=>{setB(3);setShowRectangle(true);}}>
    <p><MathText text={tr("$f(x)=x^2$。改变区间右端 $b$，比较曲线下的面积与等面积矩形。")}/></p>
    <svg viewBox="0 0 560 330" role="img" aria-label={tr("平方曲线与等面积矩形，交点显示取到平均值的位置")}><path d="M45 20V290H530" fill="none" stroke="#b0beaf"/>
      {localizeNode(showRectangle&&<rect x={45} y={Y(average)} width={X(b)-45} height={290-Y(average)} fill="#61976b20" stroke="#61976b"/>)}
      <path d={`${curve} L${X(b)},290 L45,290 Z`} fill="#557acf18"/><path d={curve} fill="none" stroke="#4769ce" strokeWidth={3}/>
      <path d={`M45 ${Y(average)}H${X(b)} M${X(c)} ${Y(average)}V290`} fill="none" stroke="#487454" strokeDasharray="6 5"/>
      <circle cx={X(c)} cy={Y(average)} r={5} fill="#487454"/><text x={X(c)} y={312} textAnchor="middle" className="math-axis">c</text><text x={X(b)} y={312} textAnchor="middle" className="math-axis">b</text><text x={32} y={310}>0</text>
    </svg>
    <Formula latex="f_{\mathrm{avg}}=\frac{1}{b}\int_0^b x^2\,\mathrm{d}x=\frac{b^2}{3}" display/>
    <Readouts values={[["总积分",number(integral)],["平均高度",number(average)],["取到平均值的 $c$",number(c)]]}/>
    <div className="controls"><Control label={tr("区间右端 $b$")} value={b} min={0.2} max={3} onChange={setB}/></div>
    <label className="application-toggle"><input type="checkbox" checked={showRectangle} onChange={e=>setShowRectangle(e.target.checked)}/>{tr("显示等面积矩形")}</label>
    <p className="visual-caption"><MathText text={tr("两块面积相同；蓝色曲线在 $c=\\frac{b}{\\sqrt{3}}$ 达到平均高度。这个点通常不是区间中点。")}/></p>
  </Frame>;
}
function Sections() {
  const [x,setX]=useState(.5), [shape,setShape]=useState<'square'|'triangle'>('square');
  const {side,area,volume}=sectionSolid(x,shape);
  const project=(a:number,y:number,z:number)=>[65+340*a+320*y,230-60*a-360*z-150*y];
  const ring=(a:number)=>{const s=sectionSolid(a,shape).side;const points=shape==='square'?[[a,0,0],[a,s,0],[a,s,s],[a,0,s]]:[[a,0,0],[a,s,0],[a,s/2,s]];return points.map(([u,v,w])=>project(u,v,w).join(',')).join(' ');};
  const bx=(a:number)=>45+a*460,by=(y:number)=>165-y*420,base=Array.from({length:101},(_,i)=>{const a=i/100;return `${i?'L':'M'}${bx(a)},${by(a*(1-a))}`}).join(' ');
  return <Frame title={tr("先选截面形状，再积累体积")} reset={()=>{setX(.5);setShape('square');}}>
    <p><MathText text={tr("底面仍是 $0\\le y\\le x(1-x)$、$0\\le x\\le1$。改变截面形状，同一底面可以生成不同体积。")}/></p>
    <div className="comparison-tabs" role="group" aria-label={tr("截面形状")}>{localizeNode((['square','triangle'] as const).map(s=><button key={s} aria-pressed={shape===s} className={shape===s?'active':''} onClick={()=>setShape(s)}>{localizeNode(s==='square'?'正方形截面':'三角形截面')}</button>))}</div>
    <svg viewBox="0 0 560 280" role="img" aria-label={tr("立体截面的斜投影示意，移动切片显示截面形状")}>
      {localizeNode(Array.from({length:21},(_,i)=><polygon key={i} points={ring(i/20)} fill="none" stroke="#aac1ac" strokeWidth={1}/>))}
      <polygon points={ring(x)} fill="#4265cd25" stroke="#4265cd" strokeWidth={2.5}/><text x={30} y={30}>{tr("截面示意 · 沿横向移动切片")}</text>
    </svg>
    <svg viewBox="0 0 560 205" role="img" aria-label={tr("底面上切片边长对应曲线高度")}><path d="M45 25V165H520" stroke="#b0beaf" fill="none"/><path d={`${base}L505 165H45Z`} stroke="#6d9773" fill="#61976b18"/><path d={`M${bx(x)} 165V${by(side)}`} stroke="#4265cd" strokeWidth={4}/><text x={bx(x)} y={190} textAnchor="middle" className="math-axis">x</text></svg>
    <Formula latex={shape==='square'?String.raw`A(x)=[x(1-x)]^2,\quad V=\int_0^1 A(x)\,\mathrm{d}x=\frac1{30}`:String.raw`A(x)=\frac12[x(1-x)]^2,\quad V=\frac1{60}`} display/>
    <Readouts values={[["底面条带长 $s$",number(side)],["当前截面积",number(area)],["整个体积",number(volume)]]}/>
    <div className="controls"><Control label={tr("切片位置 $x$")} value={x} min={0} max={1} onChange={setX}/></div>
    <p className="visual-caption"><MathText text={tr(shape==='square'?"正方形的边长为 $s$，面积为 $s^2$。端点的截面退化为零；全程不用圆面积因子。":String.raw`这里的三角形底与高都为 $s$，面积为 $\frac12s^2$，因此体积是正方形模型的一半。`)}/></p>
  </Frame>;
}
function Water() {
  const [mode,setMode]=useState<'pump'|'pressure'>('pump'),[level,setLevel]=useState(2),[outlet,setOutlet]=useState(3),[top,setTop]=useState(0),[fraction,setFraction]=useState(.5);
  const pump=pumpWater(level,outlet,fraction), gate=waterPressure(top,fraction), Y=(y:number)=>290-60*y;
  return <Frame title={tr("薄层位置决定提升距离或压力")} reset={()=>{setMode('pump');setLevel(2);setOutlet(3);setTop(0);setFraction(.5);}}>
    <div className="comparison-tabs" role="group" aria-label={tr("水的积分模型")}><button aria-pressed={mode==='pump'} className={mode==='pump'?'active':''} onClick={()=>setMode('pump')}>{tr("抽水做功")}</button><button aria-pressed={mode==='pressure'} className={mode==='pressure'?'active':''} onClick={()=>setMode('pressure')}>{tr("闸门受力")}</button></div>
    {localizeNode(mode==='pump'?<>
      <p><MathText text={tr("圆柱水箱半径 $1\\,\\mathrm{m}$。底为 $y=0$，出口高 $H$；取 $\\rho g=9800\\,\\mathrm{N}\\,\\mathrm{m}^{-3}$，忽略损耗。")}/></p>
      <svg viewBox="0 0 560 330" role="img" aria-label={tr("水箱中的水平薄层与到出口的提升距离")}>
        <rect x={150} y={Y(level)} width={150} height={290-Y(level)} fill="#5e83d42c"/><path d="M150 145V290H300V145" stroke="#7a997e" fill="none" strokeWidth={2}/>
        <path d={`M150 ${Y(pump.y)}H300`} stroke="#4265cd" strokeWidth={5}/><path d={`M300 ${Y(outlet)}H450 M385 ${Y(pump.y)}V${Y(outlet)}`} stroke="#4e7954" strokeWidth={2} strokeDasharray="5 4"/>
        <text x={325} y={Y(outlet)-10}>{tr("出口")}</text><text x={395} y={(Y(outlet)+Y(pump.y))/2}>{tr("提升距离")}</text><text x={125} y={Y(level)-12}>{tr("水面")}</text><text x={125} y={307}>{tr("底")}</text>
      </svg>
      <Formula latex="\mathrm{d}W=9800\pi(H-y)\,\mathrm{d}y" display/>
      <Readouts values={[["薄层高度",String.raw`$${number(pump.y)}\,\mathrm{m}$`],["提升距离",String.raw`$${number(pump.lift)}\,\mathrm{m}$`],["总功",String.raw`$${number(pump.work)}\,\mathrm{J}$`]]}/>
      <div className="controls"><Control label={tr("水深")} value={level} min={0.2} max={2} onChange={setLevel}/><Control label={tr("出口高度 $H$")} value={outlet} min={2} max={4} onChange={setOutlet}/></div>
      <p className="visual-caption"><MathText text={tr("蓝线是一层水。功累积的是重量乘提升距离；水越靠近出口，提升距离越短。")}/></p>
    </>:<>
      <p><MathText text={tr("闸门宽 $2\\,\\mathrm{m}$、高 $3\\,\\mathrm{m}$，两侧大气压抵消。一侧水的表压随深度增大；取 $\\rho g=9800\\,\\mathrm{N}\\,\\mathrm{m}^{-3}$。")}/></p>
      <svg viewBox="0 0 560 330" role="img" aria-label={tr("竖直闸门的水压力随离水面的深度增加")}>
        <path d="M80 35H480" stroke="#5e83d4" strokeDasharray="5 3"/><text x={80} y={25}>{tr("水面")}</text>
        <rect x={280} y={35+top*46} width={30} height={138} fill="#a7b7a8"/>
        {localizeNode(Array.from({length:7},(_,i)=>{const depth=top+i/2;return <path key={i} d={`M${270-depth*25} ${35+depth*46}H278 l-7 -4 m7 4 l-7 4`} stroke="#5e83d4" fill="none"/>;}))}
        <path d={`M260 ${35+gate.depth*46}H330`} stroke="#4265cd" strokeWidth={5}/><text x={340} y={35+gate.depth*46+5}>{tr("选中薄条")}</text>
      </svg>
      <Formula latex="\mathrm{d}F=9800h\cdot2\,\mathrm{d}h" display/>
      <Readouts values={[["薄条深度",String.raw`$${number(gate.depth)}\,\mathrm{m}$`],["表压",String.raw`$${number(gate.pressure)}\,\mathrm{Pa}$`],["总合力",String.raw`$${number(gate.force)}\,\mathrm{N}$`]]}/>
      <div className="controls"><Control label={tr("闸门上边深度")} value={top} min={0} max={2} onChange={setTop}/></div>
      <p className="visual-caption">{tr("箭头越长表示水压越大。积分累积的是压力乘薄条面积，得到力；这里没有提升距离。")}</p>
    </>)}
    <div className="controls"><Control label={tr("薄层相对位置")} value={fraction} min={0} max={1} onChange={setFraction}/></div>
  </Frame>;
}
export function ApplicationVisual({ lessonId }: { lessonId: string }) {
  return lessonId==='definite-integral'?<Average/>:lessonId==='disk-washer'?<Sections/>:lessonId==='physical-integrals'?<Water/>:null;
}
