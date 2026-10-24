import fs from 'node:fs';
import path from 'node:path';
import {root} from './programming-utils.mjs';
import {buildEnglishContent,englishRegistry} from './build-english-content.mjs';
const programmingBooks=englishRegistry.filter(e=>e.type==='programming'&&(!process.argv.slice(2).length||process.argv.slice(2).includes(e.id))).map(e=>{const data=buildEnglishContent(e.id);return {...e,book:data.book,lessons:data.lessons,extra:data.supplements,directory:'packages/content/translations/en/'+e.id};});
const printLabels={"代码":"Code","标准输入":"Standard input","预期输出":"Expected output","（无标准输出）":"(no standard output)","提示：":"Hint: ","版本 ":"Version ","AI 编写":"AI-authored","内容 CC0 / 代码 MIT":"Text CC0 / code MIT","投稿贡献：":"Contributed by ","打印 / 保存 PDF":"Print / save PDF","打开交互教材":"Open interactive textbook","全书目录":"Contents","怎么理解？":"Intuition","学习目标":"Learning objectives","本机运行":"Run locally","定义与条件":"Definition and conditions","过程解释":"How it works","概念检查":"Concept check","答案：":"Answer: ","互动任务":"Interactive activity","打开本节互动":"Open this activity","参考选择：":"Reference choice: ","常见误区":"Common mistakes","练习与解答":"Exercises and solutions","选读：":"Optional: ","先修":"Prerequisites","无":"None","来源":"Sources","章末回顾与解答":"Chapter review and solutions","综合测试与解答":"Final assessment and solutions","术语":"Glossary","课程边界":"Scope","项目源码":"Project source","练习 ":"Exercise ","例 ":"Example ","、":", ","：":": "};
function toMarkdown(html){
 const blocks=[];html=html.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(_,code)=>{blocks.push('\n\n~~~\n'+decode(code)+'\n~~~\n\n');return '@@CODE'+(blocks.length-1)+'@@';});
 html=html.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g,(_,n,t)=>'\n\n'+'#'.repeat(Number(n))+' '+t+'\n\n').replace(/<li>/g,'\n- ').replace(/<\/(p|ul|ol|figure|article|section|header|dd|dl|nav)>/g,'\n\n').replace(/<dt>/g,'\n\n**').replace(/<\/dt>/g,'**: ').replace(/<a [^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g,'[$2]($1)').replace(/<[^>]+>/g,'');
 html=decode(html).replace(/@@CODE(\d+)@@/g,(_,i)=>blocks[Number(i)]);return html.trim()+'\n';
}
function decode(s){return s.replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&amp;','&');}
const publicDir=path.join(root,'apps/web/public');
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const p=x=>`<p>${esc(x)}</p>`;
const list=x=>`<ul>${x.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`;
const steps=x=>`<ol>${x.map(t=>`<li>${esc(t)}</li>`).join('')}</ol>`;
const code=(text,label='代码')=>`<figure><figcaption>${esc(label)}</figcaption><pre><code>${esc(text)}</code></pre></figure>`;
const snippet=s=>code(s.code)+(s.stdin?code(s.stdin,'标准输入'):'')+code(s.stdout||'（无标准输出）','预期输出');
const answer=a=>typeof a==='string'?p(a):snippet(a);
const question=q=>p(q.problem)+p('提示：'+q.hint)+steps(q.solution)+answer(q.answer);
const index=[];
for(const c of programmingBooks){
 const {book,lessons,extra}=c;
 
 let html=`<header><span>AI UNIVERSITY / OTHER SUBJECTS</span><h1>${esc(book.title)}</h1>${p(book.englishTitle)}${p(`版本 ${book.version} · AI 编写 · 内容 CC0 / 代码 MIT`)}${p(book.audience)}${p(book.baseline)}${p('投稿贡献：'+book.contribution.submittedBy)}<button onclick="window.print()">打印 / 保存 PDF</button> <a href="./#/book/${c.id}">打开交互教材</a></header><h2>全书目录</h2>`;
 html+=book.chapters.map(ch=>`<h3>${esc(ch.title)}</h3><ul>${ch.lessons.map(id=>{const l=lessons.find(l=>l.id===id);return `<li><a href="#${id}">${l.number} ${esc(l.title)}</a></li>`}).join('')}</ul>`).join('');
 for(const [i,ch] of book.chapters.entries()){
  html+=`<section class="chapter"><span>CHAPTER ${i+1}</span><h2>${esc(ch.title)}</h2>${p(ch.objective)}</section>`;
  for(const id of ch.lessons){
   const l=lessons.find(l=>l.id===id);
   index.push({id:`${c.id}/${id}`,number:l.number,title:l.title,subtitle:l.subtitle||l.concept,concept:l.concept,bookId:c.id,bookTitle:book.title,chapterTitle:ch.title,route:`book/${c.id}/${id}`,text:[book.title,book.englishTitle,c.id==='ai-development'?'vibe coding AI-assisted development':'python',l.title,l.concept,l.intuition,...l.body.flatMap(b=>[b.title,b.text]),l.formalDefinition.text,...l.workedExamples.map(e=>e.problem),...l.practice.map(q=>q.problem)].join(' ')});
   html+=`<section id="${id}"><span>SECTION ${l.number}</span><h2>${esc(l.title)}</h2><div class="idea">${p(l.concept)}</div><h3>怎么理解？</h3>${p(l.intuition)}<h3>学习目标</h3>${list(l.objectives)}`;
   html+=l.body.map(b=>`<h3>${esc(b.title)}</h3>${p(b.text)}`).join('');
   if(l.localSetup)html+=`<h3>本机运行</h3>${steps(l.localSetup)}`;
   html+=`<h3>定义与条件</h3>${p(l.formalDefinition.text)}${list(l.formalDefinition.conditions)}<h3>过程解释</h3>${steps((l.derivation||[]).map(d=>d.text).concat(l.workflow||[]))}`;
   const q=l.learningCheck;html+=`<h3>概念检查</h3>${p(q.question)}${list(q.choices.map((x,i)=>`${'ABC'[i]}. ${x}`))}${p(`答案：${'ABC'[q.correctIndex]}`)}${q.explanation?p(q.explanation):''}${list(q.feedback.map((x,i)=>`${'ABC'[i]}：${x}`))}`;
   const v=l.interactiveVisual;html+=`<h3>互动任务</h3>${p(v.prediction)}<a href="./#/book/${c.id}/${id}/experiment">打开本节互动</a>`;
   if(v.experiment)html+=snippet(v.experiment);
   if(v.steps)html+=v.steps.map(t=>p(t.question)+list(t.choices)+p(`参考选择：${'ABC'[t.correctIndex]}`)+list(t.feedback)).join('');
   html+=p(v.caption||'')+p(v.followUp||'');
   if(l.promptTemplate)html+=`<h3>Task brief example</h3>${Object.entries(l.promptTemplate).map(([key,value])=>`<h4>${esc(key)}</h4>${p(value)}`).join('')}`;
   html+=l.workedExamples.map((e,i)=>`<h3>例 ${i+1}：${esc(e.title)}</h3>${p(e.problem)}${steps(e.steps)}${answer(e.answer)}${e.code?code(e.code):''}`).join('');
   html+=`<h3>常见误区</h3>${l.commonMistakes.map(m=>`<h4>${esc(m.claim)}</h4>${p(m.correction)}`).join('')}<h3>练习与解答</h3>${l.practice.map((q,i)=>`<article><h4>练习 ${i+1}</h4>${question(q)}</article>`).join('')}`;
   if(l.furtherReading)html+=l.furtherReading.map(n=>`<h3>选读：${esc(n.title)}</h3>${p(n.text)}`).join('');
   html+=`<h3>先修</h3>${p(l.prerequisites.map(id=>lessons.find(l=>l.id===id)?.title).join('、')||'无')}<h3>来源</h3>${list(l.sources.map(id=>book.sources.find(s=>s.id===id)?.title))}</section>`;
  }
  const review=extra.chapterReviews.find(r=>r.chapterId===ch.id);html+=`<h3>章末回顾与解答</h3>${review.questions.map(question).join('')}`;
 }
 html+=`<section><h2>综合测试与解答</h2>${extra.exam.map(question).join('')}<h2>术语</h2><dl>${extra.glossary.map(g=>`<dt>${esc(g.term)}</dt><dd>${esc(g.definition)}</dd>`).join('')}</dl><h2>Learning outcomes</h2>${list(book.outcomes)}<h2>课程边界</h2>${list(book.outOfScope)}<h2>来源</h2>${book.sources.map(s=>p(s.title)+`<a href="${esc(s.url)}">${esc(s.url)}</a>`+p(s.purpose||'')).join('')}<h2>项目源码</h2>`;
 if(extra.projectPlan)html+=`<h2>Project milestones</h2>${extra.projectPlan.map(m=>`<h3>${esc(m.title)}</h3>${p(m.task)}${list(m.evidence)}`).join('')}`;
 // Project code is copied into the print edition, along with its tests and run instructions.
 function projectFiles(folder,prefix=''){
  return fs.readdirSync(folder,{withFileTypes:true}).flatMap(e=>e.isDirectory()?(/node_modules|__pycache__/.test(e.name)?[]:projectFiles(path.join(folder,e.name),prefix+e.name+'/')):/\.(py|mjs|html|css|md|csv|json)$/.test(e.name)?[{name:prefix+e.name,text:fs.readFileSync(path.join(folder,e.name),'utf8')}]:[]);
 }
 html+=projectFiles(path.join(root,c.directory,'project')).map(f=>code(f.text,f.name)).join('')+'</section>';
 for(const [source,target] of Object.entries(printLabels).sort((a,b)=>b[0].length-a[0].length))html=html.replaceAll(source,target);
 if(/[\u3400-\u9fff]/u.test(html))throw Error(c.id+': untranslated text in print edition');
 const markdown=toMarkdown(html);
 fs.writeFileSync(path.join(root,'book',c.filename),markdown);fs.writeFileSync(path.join(publicDir,c.filename),markdown);
 const style=`:root{font-family:system-ui,sans-serif;color:#18352d;background:#f9faf7}body{max-width:850px;margin:60px auto;padding:0 24px;line-height:1.85}header{padding-bottom:36px;border-bottom:2px solid #1d5b4c}h1{font-size:44px}h2{font-size:28px;margin-top:56px}h3{margin-top:32px}h4{margin-top:24px}span,figcaption{color:#51776a;font-size:13px;letter-spacing:.05em}a{color:#176850;overflow-wrap:anywhere}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#edf2ef;padding:18px;border:1px solid #cddbd3;font-size:13px;line-height:1.6}.idea{padding:12px 24px;background:#eaf1eb;border-left:3px solid #49795d}article{border-top:1px solid #cad6ce;padding-top:8px}.chapter{break-before:page}dt{font-weight:700}dd{margin-bottom:16px}button{padding:10px;background:#245b4a;color:white;border:0;border-radius:4px}@media print{body{max-width:none;margin:0;background:white}button{display:none}section{break-before:page}h2,h3,h4{break-after:avoid}pre,figure{break-inside:avoid}a{color:inherit}a[href^='./#']{display:none}}`;
 fs.writeFileSync(path.join(publicDir,c.printFile),`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(book.title)} · AI University</title><style>${style}</style><body>${html}</body></html>`);
}
const output=JSON.stringify(index,null,2)+'\n';
fs.writeFileSync(path.join(root,'packages/content/translations/en/programming-index.generated.json'),output);
console.log(`Programming editions: ${programmingBooks.length} complete books; ${index.length} searchable sections; Markdown and print HTML generated.`);
