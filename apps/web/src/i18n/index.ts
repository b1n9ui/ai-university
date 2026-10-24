import labels from './ui.en.json';
import libraryLabels from './library.en.json';
import calculusLabels from './ui-calculus-2-3.en.json';
import linearLabels from './ui-linear-ode.en.json';
import contentLabels from './content-labels.en.generated.json';
import programmingLabels from './ui-programming.en.json';
import probabilityLabels from './ui-probability-final.en.json';
import furtherLabels from './ui-probability-discrete-analysis.en.json';
import {locale} from '../../../../packages/content/locale.mjs';
export {locale, changeLanguage, languageUrl} from '../../../../packages/content/locale.mjs';
const dictionary: Record<string,string> = {...labels,...libraryLabels,...calculusLabels,...linearLabels,...programmingLabels,...furtherLabels,...probabilityLabels,...contentLabels};
const fragments=Object.keys(dictionary).sort((a,b)=>b.length-a.length);
// Presentation only: IDs, event handlers, model parameters, and stored records are never translated.
export function tr(text: string | undefined): string {
  if(text === undefined)return "";
  if(locale==='zh'||!/[\u3400-\u9fff]/u.test(text))return text;
  if(Object.hasOwn(dictionary,text))return dictionary[text];
  const normalized=text.replace(/\s+/g,' ').trim();
  if(Object.hasOwn(dictionary,normalized))return dictionary[normalized];
  if(text.includes('\n'))return text.split('\n').map(tr).join('\n');
  const patterns: [RegExp, (...parts:string[])=>string][] = [
    [/^第 (\d+) 次：(.+) 至 (.+)，(覆盖|未覆盖)真均值$/, (_,n,low,high,coverage)=>`Interval ${n}: ${low} to ${high}; ${coverage==='覆盖'?'contains':'misses'} the true mean`],
    [/^给定第 (\d+) 行 · 第 (\d+) 列$/, (_,row,column)=>`Given row ${row} · Column ${column}`],
    [/^第 (\d+) 组 · (.+)$/, (_,n,value)=>`Group ${n} · ${tr(value)}`],
    [/^观测 (\d+)：(.+)$/, (_,n,value)=>`Observation ${n}: ${tr(value)}`],
    [/^例题 (\d+)$/, (_,n)=>`Example ${n}`],
    [/^第 (\d+) \/ (\d+) 题$/, (_,n,total)=>`Question ${n} / ${total}`],
    [/^(数学|其他)教材$/, (_,subject)=>`${tr(subject)} textbooks`],
    [/^第 (\d+) 袋$/, (_,n)=>`Bag ${n}`],
    [/^情境 (\d+) \/ (\d+)$/, (_,n,total)=>`Scenario ${n} / ${total}`],
    [/^输入 (.+) 的像$/, (_,point)=>`Image of input ${point}`],
    [/^观察 (\d+) \/ (\d+)$/, (_,n,total)=>`Step ${n} / ${total}`],
    [/^下一行：第 (\d+) 行$/, (_,n)=>`Next line: ${n}`],
    [/^(.+) 代码$/, (_,name)=>`${tr(name)} code`],
    [/^(.+)互动实验$/, (_,name)=>`${name} interactive activity`],
    [/^弹簧运动，时间 (.+)，位移 (.+)；示意比例在本模型内固定$/, (_,time,position)=>`Spring motion, time ${time}, displacement ${position}; scale is fixed within this model`],
    [/^从顶点(.+)开始搜索$/, (_,label)=>`Search from vertex ${label}`],
    [/^从(.+)出发的完整距离$/, (_,label)=>`Full distance from ${label}`],
    [/^(.+)关系图$/, (_,title)=>`${tr(title)} relation diagram`],
    [/^(.+)计数柱形图$/, (_,title)=>`${tr(title)} count bar chart`],
    [/^(.+)交互演示$/, (_,title)=>`${tr(title)} interactive diagram`],
    [/^余数 (.+)$/, (_,r)=>`Remainder ${r}`],
    [/^抽屉 (.+)$/, (_,n)=>`Box ${n}`],
    [/^([甲乙左右])(\d+)$/, (_,side,n)=>`${({甲:'A',乙:'B',左:'L',右:'R'} as Record<string,string>)[side]}${n}`],
    [/^项目标题：学习清单 v(\d+)\s*$/, (_,n)=>`Project: Learning list v${n}\n`],
    [/^记录暂存的 v(\d+)$/, (_,n)=>`Record staged v${n}`],
    [/^撤销 (c\d+)$/, (_,id)=>`Revert ${id}`],
    [/^git switch (.+)：工作区与暂存区切到该分支提交。$/, (_,branch)=>`git switch ${branch}: update the working tree and index to this branch's commit.`],
    [/^第 (\d+) 章$/, (_,n)=>`Chapter ${n}`],
    [/^第 (\d+) 题$/, (_,n)=>`Question ${n}`],
    [/^(\d+) 节演示$/, (_,n)=>`${n} diagrams`],
    [/^(\d+) 道练习$/, (_,n)=>`${n} exercises`],
    [/^查看(.+)教材$/, (_,title)=>`Open ${tr(title)}`],
    [/^下载(.+)$/, (_,title)=>`Download ${tr(title)}`],
    [/^打开(.+)$/, (_,title)=>`Open ${tr(title)}`],
    [/^重置(.+)$/, (_,title)=>`Reset ${tr(title)}`],
    [/^矩形边长 (.+) 与 (.+)$/, (_,a,b)=>`Rectangle side lengths ${a} and ${b}`],
    [/^范围是 (.+) 到 (.+)，已恢复当前值。$/, (_,a,b)=>`Range: ${a} to ${b}. The current value has been restored.`],
    [/^此参数需要从 (.+) 开始、步长为 (.+) 的整数，已恢复当前值。$/, (_,a,b)=>`Use integers starting at ${a} with step ${b}. The current value has been restored.`],
    [/^(.+)的三维图。拖动旋转，滚轮缩放；键盘方向键旋转，加减键缩放。$/, (_,title)=>`${tr(title)} in 3D. Drag or use arrow keys to rotate; scroll or use plus and minus to zoom.`],
  ];
  for(const[pattern,format]of patterns){const match=normalized.match(pattern);if(match)return format(...match);}
  // Composite labels contain reviewed fragments around a number or formula.
  let result=text;
  for(const source of fragments)if(result.includes(source))result=result.replaceAll(source,dictionary[source]);
  return result;
}
export function localizeNode<T>(value:T):T {
  if(typeof value==='string')return tr(value) as T;
  if(Array.isArray(value))return value.map(localizeNode) as T;
  return value;
}
