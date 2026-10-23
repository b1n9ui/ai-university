import fs from 'node:fs';
import path from 'node:path';
import {programmingBooks,root} from './programming-utils.mjs';
const publicDir=path.join(root,'apps/web/public');
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const p=x=>`<p>${esc(x)}</p>`;
const list=x=>`<ul>${x.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`;
const steps=x=>`<ol>${x.map(t=>`<li>${esc(t)}</li>`).join('')}</ol>`;
const code=(text,label='代码')=>`<figure><figcaption>${esc(label)}</figcaption><pre><code>${esc(text)}</code></pre></figure>`;
const snippet=s=>Object.entries(s.files||{}).map(([name,text])=>p('运行前准备文件：'+name)+code(text,name)).join('')+code(s.code)+(s.stdin?code(s.stdin,'标准输入'):'')+code(s.stdout||'（无标准输出）','预期输出')+(s.stderr?code(s.stderr,'预期标准错误'):'')+(s.exitCode!==undefined?p('退出状态：'+s.exitCode):'');
const answer=a=>typeof a==='string'?p(a):snippet(a);
const question=q=>p(q.problem)+p('提示：'+q.hint)+steps(q.solution)+answer(q.answer);
const index=[];
for(const c of programmingBooks){
 const {book,lessons,extra}=c;
 fs.copyFileSync(path.join(root,c.directory,c.filename),path.join(publicDir,c.filename));
 let html=`<header><span>AI UNIVERSITY / OTHER SUBJECTS</span><h1>${esc(book.title)}</h1>${p(book.englishTitle)}${p(`版本 ${book.version} · AI 编写 · 内容 CC0 / 代码 MIT`)}${p(book.audience)}${p(book.baseline)}${p('投稿贡献：'+book.contribution.submittedBy)}<button onclick="window.print()">打印 / 保存 PDF</button> <a href="./#/book/${c.id}">打开交互教材</a></header><h2>全书目录</h2>`;
 html+=book.chapters.map(ch=>`<h3>${esc(ch.title)}</h3><ul>${ch.lessons.map(id=>{const l=lessons.find(l=>l.id===id);return `<li><a href="#${id}">${l.number} ${esc(l.title)}</a></li>`}).join('')}</ul>`).join('');
 for(const [i,ch] of book.chapters.entries()){
  html+=`<section class="chapter"><span>CHAPTER ${i+1}</span><h2>${esc(ch.title)}</h2>${p(ch.objective)}</section>`;
  for(const id of ch.lessons){
   const l=lessons.find(l=>l.id===id);
   index.push({id:`${c.id}/${id}`,number:l.number,title:l.title,subtitle:l.subtitle||l.concept,concept:l.concept,bookId:c.id,bookTitle:book.title,chapterTitle:ch.title,route:`book/${c.id}/${id}`,text:[book.title,book.englishTitle,c.id==='ai-development'?'vibe coding AI 辅助编程':c.id==='c-programming'?'C C17 C语言 内存 指针':'python',l.title,l.concept,l.intuition,...l.body.flatMap(b=>[b.title,b.text]),l.formalDefinition.text,...l.workedExamples.map(e=>e.problem),...l.practice.map(q=>q.problem)].join(' ')});
   html+=`<section id="${id}"><span>SECTION ${l.number}</span><h2>${esc(l.title)}</h2><div class="idea">${p(l.concept)}</div><h3>怎么理解？</h3>${p(l.intuition)}<h3>学习目标</h3>${list(l.objectives)}`;
   html+=l.body.map(b=>`<h3>${esc(b.title)}</h3>${p(b.text)}`).join('');
   if(l.setup)html+=`<h3>照着完成第一次运行</h3>${l.setup.map(s=>`<h4>${esc(s.title)}</h4>${p(s.text)}${code(s.commands,'终端命令：按说明逐条执行')}${p('检查结果：'+s.expected)}`).join('')}`;
   if(l.localSetup)html+=`<h3>本机运行</h3>${steps(l.localSetup)}`;
   html+=`<h3>定义与条件</h3>${p(l.formalDefinition.text)}${list(l.formalDefinition.conditions)}<h3>过程解释</h3>${steps((l.derivation||[]).map(d=>d.text).concat(l.workflow||[]))}`;
   const q=l.learningCheck;html+=`<h3>概念检查</h3>${p(q.question)}${list(q.choices.map((x,i)=>`${'ABC'[i]}. ${x}`))}${p(`答案：${'ABC'[q.correctIndex]}`)}${q.explanation?p(q.explanation):''}${list(q.feedback.map((x,i)=>`${'ABC'[i]}：${x}`))}`;
   const v=l.interactiveVisual;html+=`<h3>互动任务</h3>${p(v.prediction)}<a href="./#/book/${c.id}/${id}/experiment">打开本节互动</a>`;
   if(v.experiment)html+=snippet(v.experiment);
   if(v.steps)html+=v.steps.map(t=>p(t.question)+list(t.choices)+p(`参考选择：${'ABC'[t.correctIndex]}`)+list(t.feedback)).join('');
   html+=p(v.caption||v.followUp);
   html+=l.workedExamples.map((e,i)=>`<h3>例 ${i+1}：${esc(e.title)}</h3>${p(e.problem)}${steps(e.steps)}${answer(e.answer)}${e.code?code(e.code):''}`).join('');
   html+=`<h3>常见误区</h3>${l.commonMistakes.map(m=>`<h4>${esc(m.claim)}</h4>${p(m.correction)}`).join('')}<h3>练习与解答</h3>${l.practice.map((q,i)=>`<article><h4>练习 ${i+1}</h4>${question(q)}</article>`).join('')}`;
   if(l.furtherReading)html+=l.furtherReading.map(n=>`<h3>选读：${esc(n.title)}</h3>${p(n.text)}`).join('');
   html+=`<h3>先修</h3>${p(l.prerequisites.map(id=>lessons.find(l=>l.id===id)?.title).join('、')||'无')}<h3>来源</h3>${list(l.sources.map(id=>book.sources.find(s=>s.id===id)?.title))}</section>`;
  }
  const review=extra.chapterReviews.find(r=>r.chapterId===ch.id);html+=`<h3>章末回顾与解答</h3>${review.questions.map(question).join('')}`;
 }
 html+=`<section>${(extra.appendices||[]).map(a=>`<h2>${esc(a.title)}</h2>${p(a.text)}`).join('')}<h2>综合测试与解答</h2>${extra.exam.map(question).join('')}<h2>术语</h2><dl>${extra.glossary.map(g=>`<dt>${esc(g.term)}</dt><dd>${esc(g.definition)}</dd>`).join('')}</dl><h2>课程边界</h2>${list(book.outOfScope)}<h2>来源</h2>${book.sources.map(s=>p(s.title)+`<a href="${esc(s.url)}">${esc(s.url)}</a>`).join('')}<h2>项目源码</h2>`;
 // Project code is copied into the print edition, along with its tests and run instructions.
 function projectFiles(folder,prefix=''){
  return fs.readdirSync(folder,{withFileTypes:true}).flatMap(e=>e.isDirectory()?(/node_modules|__pycache__/.test(e.name)?[]:projectFiles(path.join(folder,e.name),prefix+e.name+'/')):/\.(py|mjs|html|css|md|csv|json|c|h|txt)$/.test(e.name)?[{name:prefix+e.name,text:fs.readFileSync(path.join(folder,e.name),'utf8')}]:[]);
 }
 html+=projectFiles(path.join(root,c.directory,'project')).map(f=>code(f.text,f.name)).join('')+'</section>';
 const style=`:root{font-family:system-ui,sans-serif;color:#18352d;background:#f9faf7}body{max-width:850px;margin:60px auto;padding:0 24px;line-height:1.85}header{padding-bottom:36px;border-bottom:2px solid #1d5b4c}h1{font-size:44px}h2{font-size:28px;margin-top:56px}h3{margin-top:32px}h4{margin-top:24px}span,figcaption{color:#51776a;font-size:13px;letter-spacing:.05em}a{color:#176850;overflow-wrap:anywhere}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#edf2ef;padding:18px;border:1px solid #cddbd3;font-size:13px;line-height:1.6}.idea{padding:12px 24px;background:#eaf1eb;border-left:3px solid #49795d}article{border-top:1px solid #cad6ce;padding-top:8px}.chapter{break-before:page}dt{font-weight:700}dd{margin-bottom:16px}button{padding:10px;background:#245b4a;color:white;border:0;border-radius:4px}@media print{body{max-width:none;margin:0;background:white}button{display:none}section{break-before:page}h2,h3,h4{break-after:avoid}pre,figure{break-inside:avoid}a{color:inherit}a[href^='./#']{display:none}}`;
 fs.writeFileSync(path.join(publicDir,c.printFile),`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(book.title)} · AI University</title><style>${style}</style><body>${html}</body></html>`);
}
const output=JSON.stringify(index,null,2)+'\n';
fs.writeFileSync(path.join(root,'packages/content/programming-index.generated.json'),output);
console.log(`Programming editions: ${programmingBooks.length} complete books; ${index.length} searchable sections; Markdown and print HTML generated.`);
