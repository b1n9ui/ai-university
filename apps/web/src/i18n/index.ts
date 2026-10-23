import labels from './ui.en.json';
import libraryLabels from './library.en.json';
import {locale} from '../../../../packages/content/locale.mjs';
export {locale, changeLanguage, languageUrl} from '../../../../packages/content/locale.mjs';
const dictionary: Record<string,string> = {...labels,...libraryLabels};
const fragments=Object.keys(dictionary).sort((a,b)=>b.length-a.length);
// Presentation only: IDs, event handlers, model parameters, and stored records are never translated.
export function tr(text: string): string {
  if(locale==='zh'||!/[\u3400-\u9fff]/u.test(text))return text;
  if(dictionary[text])return dictionary[text];
  const normalized=text.replace(/\s+/g,' ').trim();
  if(dictionary[normalized])return dictionary[normalized];
  const patterns: [RegExp, (...parts:string[])=>string][] = [
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
