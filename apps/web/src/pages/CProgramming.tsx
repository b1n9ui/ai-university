import {useEffect, useRef, useState} from 'react';
import {ArrowLeft, ArrowRight, BookOpen, Check, Copy, Download, Menu, Terminal, X} from 'lucide-react';
import book from '../../../../packages/content/c-programming/book.json';
import extraData from '../../../../packages/content/c-programming/supplements.json';
import './c-programming.css';

type Snippet={code:string;stdin:string;stdout:string;stderr?:string;files:Record<string,string>;exitCode:number};
type Question={problem:string;hint:string;solution:string[];answer:string|Snippet;difficulty:number};
type Example={title:string;problem:string;steps:string[];answer:Snippet};
type Lesson={id:string;number:string;title:string;concept:string;intuition:string;objectives:string[];body:{title:string;text:string}[];
 formalDefinition:{text:string;conditions:string[]};derivation:{text:string}[];workedExamples:Example[];practice:Question[];
 commonMistakes:{claim:string;correction:string}[];learningCheck:{question:string;choices:string[];correctIndex:number;feedback:string[]};
 setup?:{title:string;text:string;commands:string;expected:string}[];
 interactiveVisual:{prediction:string;caption:string};prerequisites:string[];sources:string[]};
const files=import.meta.glob('../../../../packages/content/c-programming/lessons/*.json',{eager:true,import:'default'});
const lessons=book.chapters.flatMap(ch=>ch.lessons.map(id=>files[`../../../../packages/content/c-programming/lessons/${id}.json`] as Lesson));
const extra=extraData as {chapterReviews:{chapterId:string;questions:Question[]}[];exam:Question[];glossary:{term:string;definition:string;lessonId:string}[];appendices:{title:string;text:string}[]};
const sourceFiles=import.meta.glob('../../../../packages/content/c-programming/project/*',{eager:true,query:'?raw',import:'default'}) as Record<string,string>;
const href=(tail='')=>'#/book/c-programming'+(tail?'/'+tail:'');
const KEY='au-c-programming-read-v1';
function Code({text,label='C17 · 完整程序'}:{text:string;label?:string}){
 const [status,setStatus]=useState('');
 useEffect(()=>setStatus(''),[text]);
 async function copy(){try{await navigator.clipboard.writeText(text);setStatus('已复制');}catch{setStatus('复制未成功，请选中代码复制');}}
 return <figure className="c-code"><figcaption><span>{label}</span><button type="button" onClick={copy} aria-label={'复制'+label}><Copy size={13}/>复制</button></figcaption><pre><code>{text||'（无）'}</code></pre><span className="c-copy-status" role="status">{status}</span></figure>;
}
function SnippetView({snippet,output=true}:{snippet:Snippet;output?:boolean}){
 return <>{Object.entries(snippet.files).map(([name,text])=><div key={name}><p>运行前，在当前目录准备文件 <code>{name}</code>：</p><Code text={text} label={name}/></div>)}
 <Code text={snippet.code}/>{snippet.stdin&&<Code text={snippet.stdin} label="标准输入 · 输入后按回车"/>}
 {output&&<><Code text={snippet.stdout} label="预期标准输出"/>{snippet.stderr&&<Code text={snippet.stderr} label="预期标准错误"/>}<p className="c-small">退出状态 {snippet.exitCode}。{snippet.exitCode!==0?'此案例按设计拒绝输入，以非零状态结束。':''}</p></>}</>;
}
function Practice({q,index}:{q:Question;index:number}){
 return <article className="c-question"><span className="c-eyebrow">练习 {index+1} · 难度 {q.difficulty}/6</span><h3>{q.problem}</h3>
 <details><summary>查看提示</summary><p>{q.hint}</p></details><details><summary>查看完整解答</summary><ol>{q.solution.map((s,i)=><li key={i}>{s}</li>)}</ol>{typeof q.answer==='string'?<p>{q.answer}</p>:<SnippetView snippet={q.answer}/>}</details></article>;
}
function CheckQuestion({lesson}:{lesson:Lesson}){
 const [selected,setSelected]=useState<number|null>(null);const q=lesson.learningCheck;
 return <section className="c-check"><span className="c-eyebrow">概念检查</span><h2>{q.question}</h2><div>{q.choices.map((choice,i)=><button key={i} type="button" aria-pressed={selected===i} onClick={()=>setSelected(i)}><span>{'ABC'[i]}</span>{choice}</button>)}</div>
 {selected!==null&&<p role="status"><strong>{selected===q.correctIndex?'判断正确。':'再想一步。'}</strong>{q.feedback[selected]}</p>}</section>;
}
function Compare({lesson}:{lesson:Lesson}){
 const [index,setIndex]=useState(0),[shown,setShown]=useState(false);const e=lesson.workedExamples[index];
 return <section className="c-lab"><div className="c-section-heading"><Terminal size={22}/><h2>预测与对比</h2></div><p>{lesson.interactiveVisual.prediction}</p>
 <div className="c-tabs" aria-label="切换案例">{lesson.workedExamples.map((item,i)=><button type="button" key={i} aria-pressed={index===i} onClick={()=>{setIndex(i);setShown(false);}}>案例 {i+1}：{item.title}</button>)}</div>
 <h3>{e.problem}</h3><SnippetView snippet={e.answer} output={shown}/><button type="button" className="c-primary" onClick={()=>setShown(!shown)}>{shown?'遮住输出，重新预测':'核对输出与步骤'}</button>
 {shown&&<ol>{e.steps.map((s,i)=><li key={i}>{s}</li>)}</ol>}<p className="c-small">{lesson.interactiveVisual.caption}</p></section>;
}
function Reading({lesson}:{lesson:Lesson}){
 return <><div className="c-intuition"><span className="c-eyebrow">怎么理解</span><p>{lesson.intuition}</p></div><section><h2>本节目标</h2><ul>{lesson.objectives.map(x=><li key={x}>{x}</li>)}</ul></section>
 {lesson.body.map(b=><section key={b.title}><h2>{b.title}</h2><p>{b.text}</p></section>)}
 {lesson.setup&&<section><h2>照着完成第一次运行</h2>{lesson.setup.map(step=><article key={step.title}><h3>{step.title}</h3><p>{step.text}</p><Code text={step.commands} label="终端命令 · 按说明逐条执行"/><p>检查结果：{step.expected}</p></article>)}</section>}
 <section className="c-definition"><h2>定义与使用条件</h2><p>{lesson.formalDefinition.text}</p><ul>{lesson.formalDefinition.conditions.map(x=><li key={x}>{x}</li>)}</ul></section>
 <section><h2>逐步分析</h2><ol>{lesson.derivation.map((s,i)=><li key={i}>{s.text}</li>)}</ol></section>
 {lesson.workedExamples.map((e,i)=><section className="c-example" key={e.title}><span className="c-eyebrow">逐步例题 {i+1}</span><h2>{e.title}</h2><p>{e.problem}</p><ol>{e.steps.map((s,j)=><li key={j}>{s}</li>)}</ol><SnippetView snippet={e.answer}/></section>)}
 <CheckQuestion lesson={lesson}/><section><h2>常见错误</h2>{lesson.commonMistakes.map(m=><article className="c-mistake" key={m.claim}><h3>{m.claim}</h3><p>{m.correction}</p></article>)}</section>
 <div className="c-next-tasks"><a href={href(lesson.id+'/experiment')}>预测并对比案例 <ArrowRight size={16}/></a><a href={href(lesson.id+'/practice')}>做本节四道练习 <ArrowRight size={16}/></a></div></>;
}
export default function CProgramming({path}:{path:string}){
 const tail=path.slice('book/c-programming'.length).replace(/^\//,'');const [id,view]=tail.split('/');
 const current=lessons.find(l=>l.id===id);const index=current?lessons.indexOf(current):-1;
 const special=['review','glossary','project'].includes(id);const unknown=!!id&&!current&&!special;
 const [menu,setMenu]=useState(false),[filter,setFilter]=useState('');
 const [read,setRead]=useState<string[]>(()=>{try{const value=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(value)?value.filter(x=>lessons.some(l=>l.id===x)):[];}catch{return [];}});
 const [storageError,setStorageError]=useState(false);const menuButton=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setMenu(false);document.getElementById('main')?.focus({preventScroll:true});},[tail]);
 useEffect(()=>{if(!menu)return;const close=(event:KeyboardEvent)=>{if(event.key==='Escape'){setMenu(false);menuButton.current?.focus();}};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close);},[menu]);
 function mark(){if(!current)return;const next=read.includes(current.id)?read.filter(x=>x!==current.id):[...read,current.id];setRead(next);try{localStorage.setItem(KEY,JSON.stringify(next));}catch{setStorageError(true);}}
 const title=current?current.title:id==='review'?'回顾与综合测试':id==='glossary'?'术语与学习指南':id==='project'?'完整项目与源码':unknown?'未找到这一节':book.title;
 return <div className="c-book"><a className="c-skip" href="#main" onClick={e=>{e.preventDefault();document.getElementById('main')?.focus();}}>跳到正文</a>
 <header className="c-header"><a href="#/library" className="c-brand"><span>Au.</span> AI University</a><nav aria-label="教材导航"><a href={href()}>教材首页</a><a href={href('review')}>回顾</a><a href={href('project')}>项目</a><a href="#/downloads?book=c-programming">下载与打印</a></nav></header>
 <div className="c-mobile"><span>C 语言 · 从零到完整程序</span><button ref={menuButton} type="button" aria-expanded={menu} aria-controls="c-directory" onClick={()=>setMenu(!menu)}>{menu?<X size={18}/>:<Menu size={18}/>}教材目录</button></div>
 <div className="c-layout"><aside id="c-directory" className={menu?'c-sidebar c-open':'c-sidebar'}><a href={href()} className="c-side-title"><span className="c-eyebrow">C PROGRAMMING / 01</span><strong>从零，写出<br/>完整程序。</strong></a><p className="c-small">已读 {read.length} / 32 节 · 仅保存在本机</p><label className="c-filter">查找章节<input type="search" value={filter} onChange={e=>setFilter(e.target.value)} placeholder="输入标题或知识点"/></label>
 <nav aria-label="章节目录">{book.chapters.map(ch=>{const matches=ch.lessons.map(id=>lessons.find(l=>l.id===id)!).filter(l=>(l.title+l.concept).toLowerCase().includes(filter.toLowerCase()));return matches.length>0&&<div key={ch.id}><h2>{ch.title}</h2>{matches.map(l=><a key={l.id} href={href(l.id)} aria-current={l.id===id?'page':undefined}><span>{l.number}</span>{l.title}{read.includes(l.id)&&<Check size={12} aria-label="已读"/>}</a>)}</div>;})}
 {!lessons.some(l=>(l.title+l.concept).toLowerCase().includes(filter.toLowerCase()))&&<p>没有匹配章节。</p>}<a href={href('review')}>章末回顾与综合测试</a><a href={href('glossary')}>术语、速查与来源</a><a href={href('project')}>完整项目源码</a></nav></aside>
 <main id="main" className="c-main" tabIndex={-1}><div className="c-reading-head"><span className="c-eyebrow">{current?`SECTION ${current.number}`:'C PROGRAMMING · 中文版'}</span><span>v{book.version} · AI 编写 · 未逐节人工审校</span></div>
 <h1>{title}</h1>{current&&<><p className="c-lead">{current.concept}</p><nav className="c-tabs" aria-label="本节视图">{[['','阅读'],['experiment','预测与对比'],['practice','独立练习']].map(([key,label])=><a key={key} href={href(current.id+(key?'/'+key:''))} aria-current={(view||'')===key?'page':undefined}>{label}</a>)}</nav>
 <div key={tail}>{view==='practice'?<><p>先独立完成，再打开提示或解答。代码可下载到本机运行；自由作答由你对照参考答案自评。</p>{current.practice.map((q,i)=><Practice key={i} q={q} index={i}/>)}</>:view==='experiment'?<Compare lesson={current}/>:view?<p>未找到这个视图。<a href={href(current.id)}>返回本节阅读</a></p>:<Reading lesson={current}/>}</div>
 <section className="c-sources"><h2>本节衔接与来源</h2><p>先修：{current.prerequisites.length?current.prerequisites.map(pre=>{const l=lessons.find(l=>l.id===pre)!;return <a key={pre} href={href(pre)}>{l.number} {l.title} </a>;}):'不要求编程基础。'}</p>{current.sources.map(s=>{const source=book.sources.find(x=>x.id===s)!;return <p key={s}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>：{source.usage}</p>;})}</section>
 <button type="button" className="c-mark" aria-pressed={read.includes(current.id)} onClick={mark}><Check size={16}/>{read.includes(current.id)?'已标记读完 · 点击取消':'标记本节已读'}</button>{storageError&&<p role="status">本机存储不可用，本次标记在关闭页面后可能丢失。</p>}
 <nav className="c-pagination" aria-label="上下节">{index>0?<a href={href(lessons[index-1].id)}><ArrowLeft size={16}/>上一节<span>{lessons[index-1].title}</span></a>:<a href={href()}>返回教材首页</a>}{index<lessons.length-1?<a href={href(lessons[index+1].id)}>下一节<ArrowRight size={16}/><span>{lessons[index+1].title}</span></a>:<a href={href('review')}>完成综合测试 <ArrowRight size={16}/></a>}</nav></>}
 {!id&&<><p className="c-lead">{book.description}</p><div className="c-hero-code" aria-label="程序学习的三个阶段"><span>01 编辑 main.c</span><ArrowRight/><span>02 编译</span><ArrowRight/><span>03 运行</span></div><p>{book.audience}</p><p>{book.baseline}</p>
 <div className="c-stats">{[['8','章'],['32','节'],['64','逐步例题'],['148','练习及回顾']].map(([n,label])=><div key={label}><strong>{n}</strong><span>{label}</span></div>)}</div><a className="c-primary" href={href(lessons[0].id)}>从安装工具开始 <ArrowRight size={17}/></a>
 <section><h2>每一步都有可核对的结果</h2><p>先读具体问题与解释，再运行完整例子。两种案例可遮住输出进行预测；练习分别提供提示和完整解答。网页中的案例是固定程序结果展示，复制到本机后可以自由修改、编译、运行。</p><p>{extra.appendices[0].text}</p></section>
 {book.chapters.map(ch=><section className="c-chapter-card" key={ch.id}><h2>{ch.title}</h2><p>{ch.objective}</p>{ch.lessons.map(id=>{const l=lessons.find(l=>l.id===id)!;return <a key={id} href={href(id)}><span>{l.number}</span>{l.title}<ArrowRight size={14}/></a>;})}</section>)}
 <section><h2>完整教材与配套材料</h2><div className="c-downloads"><a href="./C-Programming.md" download><Download size={18}/>整本 Markdown</a><a href="./c-programming.html" target="_blank" rel="noreferrer"><BookOpen size={18}/>整本阅读 / 打印 PDF</a><a href="./c-programming-examples.zip" download><Download size={18}/>例题、答案与项目源码 ZIP</a></div></section><section><h2>本卷边界</h2><ul>{book.outOfScope.map(x=><li key={x}>{x}</li>)}</ul></section></>}
 {id==='review'&&<><p className="c-lead">先遮住答案独立作答，再核对思路、边界与代码输出。题目用于自评。</p>{extra.chapterReviews.map((review,i)=><section key={review.chapterId}><h2>{book.chapters[i].title}</h2>{review.questions.map((q,j)=><Practice key={j} q={q} index={j}/>)}</section>)}<section><h2>综合测试</h2>{extra.exam.map((q,i)=><Practice key={i} q={q} index={i}/>)}</section></>}
 {id==='glossary'&&<>{extra.appendices.map(a=><section key={a.title}><h2>{a.title}</h2><p>{a.text}</p></section>)}<h2>术语索引</h2><dl className="c-glossary">{extra.glossary.map(g=><div key={g.term}><dt><a href={href(g.lessonId)}>{g.term}</a></dt><dd>{g.definition}</dd></div>)}</dl><h2>来源与核对用途</h2>{book.sources.map(s=><section key={s.id}><h3><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a></h3><p>{s.usage}</p></section>)}</>}
 {id==='project'&&<><p className="c-lead">一个能够构建、运行、测试的成绩管理器。先完成第 8 章，再对照完整源码。每个文件名对应一个真实文件。</p><a className="c-primary" href="./c-programming-examples.zip" download><Download size={18}/>下载全部案例与完整项目</a>{Object.entries(sourceFiles).sort(([a],[b])=>a.localeCompare(b)).map(([name,text])=><details className="c-project-file" key={name} open={name.endsWith('README.md')}><summary>{name.split('/').at(-1)}</summary><Code text={text} label={name.split('/').at(-1)}/></details>)}</>}
 {unknown&&<p>请从左侧选择已完成的章节，或<a href={href()}>返回教材首页</a>。</p>}
 <footer className="c-footer">AI-generated · humanReviewed=false · 原创教材 CC0-1.0 / 代码 MIT。自动编译与案例检查的范围见源码 QA.md。</footer></main></div></div>;
}
