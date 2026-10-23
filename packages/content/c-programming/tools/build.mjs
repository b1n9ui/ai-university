import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
const dir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(dir,p),'utf8'));
const book=read('book.json'),extra=read('supplements.json');
const lessons=book.chapters.flatMap(c=>c.lessons.map(id=>read(`lessons/${id}.json`)));
const lines=[];
const p=(...s)=>lines.push(...s,'');
const list=items=>p(...items.map(x=>'- '+x));
const steps=items=>p(...items.map((x,i)=>`${i+1}. ${x}`));
const code=(s,lang='c')=>{const fence='`'.repeat(Math.max(3,...(s.match(/`+/g)||[]).map(x=>x.length+1)));p(fence+lang,s.trimEnd(),fence);};
function snippet(a){
 for(const [file,text] of Object.entries(a.files||{})){p(`运行前，在当前目录准备文件 ${file}：`);code(text,'text');}
 code(a.code);
 if(a.stdin){p('标准输入：');code(a.stdin,'text');}
 p('预期标准输出：');code(a.stdout||'（无）','text');
 if(a.stderr){p('预期标准错误：');code(a.stderr,'text');}
 p(`退出状态：${a.exitCode||0}。`);
}
function question(q,i){
 p(`### 练习 ${i+1}`,q.problem,`提示：${q.hint}`,'完整解法：');steps(q.solution);
 if(typeof q.answer==='string')p('参考答案：'+q.answer);else snippet(q.answer);
}
p('# '+book.title,book.englishTitle,`版本 ${book.version} · AI-generated · humanReviewed=false`,book.audience,book.baseline,book.description);
p('原创教材 CC0-1.0；工具与项目源码 MIT。参考资料仅用于规则核对，不复制正文或题库。');
p('8 章 · 32 节 · 64 个逐步例题 · 128 道节内练习 · 16 道章末回顾 · 4 道综合题 · 32 个术语。所有题目附解答。');
p('## 怎么使用这本书');
p(extra.appendices[0].text,'所有代码框中标为 C 的例子都是完整程序。每次保存一个例子为 main.c，再按第 1.1 节编译；不要把多个 main 放进同一文件。含“运行前准备文件”的案例先创建夹具；标准输入和输出框不属于 C 代码。');
p('## 目录');
for(const ch of book.chapters){p(`### ${ch.title}`,ch.objective);list(ch.lessons.map(id=>{const l=lessons.find(x=>x.id===id);return `${l.number} ${l.title}`}));}
for(const ch of book.chapters){
 p('# '+ch.title,ch.objective);
 for(const id of ch.lessons){
  const l=lessons.find(x=>x.id===id);
  p(`## ${l.number} ${l.title}`,l.concept,'### 直觉',l.intuition,'### 本节目标');list(l.objectives);
  for(const b of l.body)p('### '+b.title,b.text);
  if(l.setup){p('### 照着完成第一次运行');for(const step of l.setup){p('#### '+step.title,step.text);code(step.commands,'sh');p('检查结果：'+step.expected);}}
  p('### 定义与条件',l.formalDefinition.text);list(l.formalDefinition.conditions);
  p('### 逐步分析');steps(l.derivation.map(d=>d.text));
  p('### 概念检查',l.learningCheck.question);list(l.learningCheck.choices.map((x,i)=>`${'ABC'[i]}. ${x}`));
  p('参考答案：'+'ABC'[l.learningCheck.correctIndex]);list(l.learningCheck.feedback.map((x,i)=>`${'ABC'[i]}：${x}`));
  p('### 对比实验',l.interactiveVisual.prediction,l.interactiveVisual.caption);
  l.workedExamples.forEach((e,i)=>{p(`### 例 ${i+1}：${e.title}`,e.problem);steps(e.steps);snippet(e.answer);});
  p('### 常见错误');for(const m of l.commonMistakes)p('**'+m.claim+'**',m.correction);
  p('### 独立练习与完整解答');l.practice.forEach(question);
  p('先修：'+(l.prerequisites.map(id=>lessons.find(x=>x.id===id).title).join('、')||'无编程前提')+'。',
    '规则来源：'+l.sources.map(id=>{const s=book.sources.find(s=>s.id===id);return `[${s.title}](${s.url})`;}).join('；')+'。');
 }
 p('## 章末回顾与解答');extra.chapterReviews.find(x=>x.chapterId===ch.id).questions.forEach(question);
}
p('# 综合测试与解答');extra.exam.forEach(question);
p('# 术语表');for(const g of extra.glossary)p(`**${g.term}**：${g.definition}`);
p('# 附录');for(const a of extra.appendices)p('## '+a.title,a.text);
p('## 课程边界');list(book.outOfScope);
p('## 来源与核对用途');for(const s of book.sources)p(`[${s.title}](${s.url})：${s.usage}`);
p('# 完整项目源码','以下文件直接来自同版 project/。保存时保持各文件名；完整构建、运行、测试命令见项目 README。');
for(const name of fs.readdirSync(path.join(dir,'project')).sort()){
 p('## project/'+name);code(fs.readFileSync(path.join(dir,'project',name),'utf8'),name.endsWith('.c')||name.endsWith('.h')?'c':name.endsWith('.md')?'markdown':'text');
}
const output=lines.join('\n').trimEnd()+'\n';
const target=path.join(dir,'C-Programming.md');
if(process.argv.includes('--check'))assert.equal(fs.readFileSync(target,'utf8'),output,'C manuscript is stale');
else fs.writeFileSync(target,output);
const result=spawnSync(process.env.PYTHON||'python3',[path.join(dir,'tools/bundle.py'),...(process.argv.includes('--check')?['--check']:[])],{stdio:'inherit'});
assert.equal(result.status,0,'C bundle failed');
console.log(`C manuscript: ${output.length} characters, all examples/solutions and project sources included.`);
