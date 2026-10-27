import fs from "node:fs";
import katex from "katex";
import { splitMathText, mathDisplayMode } from "../packages/content/math-text.mjs";
import { root, contentBooks, libraryLessons } from "./content-utils.mjs";
for(const {book,allLessons,extra,filename,printFile} of contentBooks){
const counts = { examples: allLessons.reduce((n,l)=>n+l.workedExamples.length,0), practice: allLessons.reduce((n,l)=>n+l.practice.length,0), extra: extra.exam.length+extra.reviews.reduce((n,r)=>n+r.questions.length,0) };
const esc = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const math = (s, display = false) =>
  katex.renderToString(s, {
    displayMode: mathDisplayMode(s, display),
    throwOnError: true,
    strict: "ignore",
    trust: false,
  });
const rich = (s) => splitMathText(s).map(part => part.kind === "math" ? math(part.value, part.display) : esc(part.value)).join("");
const p = (s) => `<p>${rich(s)}</p>`,
  list = (items) =>
    `<ol>${items.map((s) => `<li>${rich(s)}</li>`).join("")}</ol>`;
let md = `# AI University · ${book.title}\n\n## ${book.titleZh}：${book.subtitle}\n\nv${book.version} · AI 编写的固定修订版 · 内容 CC0 · 尚未逐节人工审校\n\n${book.description}\n\n范围：${book.scope}\n\n阅读方法：先读直觉，再检查定义条件，跟随推导与例题，最后做练习。互动图位于网站同名知识点中；有限图像采样不是证明。\n\n## 目录\n\n`;
let html = `<header class="cover"><p class="kicker">AI UNIVERSITY / OPEN TEXTBOOKS</p><h1>${esc(book.title)}</h1><h2>${book.titleZh}：${book.subtitle}</h2>${p(book.description)}${p(book.scope)}<p>v${book.version} · ${book.chapters.length} 章 ${allLessons.length} 节 · ${counts.examples} 例题 · ${counts.practice} 节内练习 + ${counts.extra} 回顾与综合题</p><p>AI 编写的固定修订版；尚未逐节人工审校。内容 CC0，代码 MIT。</p><p><a href="./">进入交互阅读网站</a> · <a href="${filename}" download>下载 Markdown</a> · <button onclick="window.print()">打印 / 保存为 PDF</button></p></header><nav class="toc"><h2>目录</h2>`;
for (const c of book.chapters) {
  md += `\n### ${c.title}\n\n`;
  html += `<h3>${esc(c.title)}</h3><ol>`;
  for (const id of c.lessonIds) {
    const l = allLessons.find((l) => l.id === id);
    md += `- ${l.number} ${l.title}\n`;
    html += `<li><a href="#${id}">${l.number} ${rich(l.title)}</a></li>`;
  }
  html += `<li><a href="#review-${c.id}">章末回顾</a></li></ol>`;
}
html += `<p><a href="#final-exam">综合测试</a> · <a href="#glossary">术语索引</a> · <a href="#appendices">证明补充</a></p></nav>`;
function questions(items) {
  let h = "";
  items.forEach((q, i) => {
    md += `\n**${i + 1}. ${q.problem}**\n\n提示：${q.hint}\n\n答案：${q.answer}\n\n${q.solution.map((s) => `- ${s}`).join("\n")}\n`;
    h += `<article class="problem"><h4>${i + 1}. ${rich(q.problem)}</h4><p class="hint">提示：${rich(q.hint)}</p><div class="answer"><strong>答案：${rich(q.answer)}</strong>${list(q.solution)}</div></article>`;
  });
  return h;
}
for (const [ci, c] of book.chapters.entries()) {
  md += `\n# 第 ${ci + 1} 章 · ${c.title}\n\n${c.intro}\n\n学习目标：\n${c.goals.map((s) => `- ${s}`).join("\n")}\n`;
  html += `<section class="chapter-intro"><p class="kicker">CHAPTER ${ci + 1}</p><h1>${esc(c.title)}</h1>${p(c.intro)}${list(c.goals)}</section>`;
  for (const id of c.lessonIds) {
    const l = allLessons.find((l) => l.id === id);
    md += `\n## ${l.number} ${l.title}\n\n*${l.subtitle}*\n\n### 核心意思\n\n${l.concept}\n\n### 怎么理解？\n\n${l.intuition}\n`;
    html += `<section class="lesson" id="${id}"><p class="kicker">SECTION ${l.number}</p><h2>${rich(l.title)}</h2><p class="subtitle">${rich(l.subtitle)}</p><div class="idea">${p(l.concept)}</div><h3>怎么理解？</h3>${p(l.intuition)}`;
    md += `\n### 换个说法\n\n${l.teaching.explain}\n`;
    html += `<h3>换个说法</h3>${p(l.teaching.explain)}`;
    const check = l.learningCheck;
    md += `\n### 先想一下\n\n${check.question}\n\n${check.choices.map((s, i) => `${String.fromCharCode(65 + i)}. ${s}`).join("\n")}\n\n答案：${String.fromCharCode(65 + check.correctIndex)}。${check.explanation}\n`;
    html += `<div class="concept-check"><h3>先想一下</h3>${p(check.question)}${`<ol type="A" class="concept-check-choices">${check.choices.map(choice => `<li>${rich(choice)}</li>`).join("")}</ol>`}<details><summary>查看答案与解释</summary>${p(`${String.fromCharCode(65 + check.correctIndex)}。${check.explanation}`)}</details></div>`;
    if(check.responses){md+='\n分选项说明：\n'+check.responses.map((r,i)=>`\n- ${String.fromCharCode(65+i)}：${r.text}${r.experimentStep!==null?`（对应下方实验第 ${r.experimentStep+1} 步）`:''}`).join('')+'\n';html+=`<details><summary>分选项说明</summary>${check.responses.map((r,i)=>p(`${String.fromCharCode(65+i)}：${r.text}`)+(r.experimentStep!==null?p(`对应下方实验第 ${r.experimentStep+1} 步。`):'')).join('')}</details>`;}
    for (const s of l.body) {
      md += `\n### ${s.title}\n\n${s.text}\n`;
      html += `<h3>${rich(s.title)}</h3>${p(s.text)}`;
    }
    md += `\n### 精确定义与条件\n\n${l.formalDefinition.text}\n\n$$\n${l.formalDefinition.latex}\n$$\n\n${l.formalDefinition.conditions.map((s) => `- ${s}`).join("\n")}\n\n### 推导\n`;
    html += `<div class="definition"><h3>精确定义与条件</h3>${p(l.formalDefinition.text)}${math(l.formalDefinition.latex, true)}${list(l.formalDefinition.conditions)}</div><h3>公式是怎么来的？</h3>`;
    for (const d of l.derivation) {
      md += `\n${d.text}\n${d.latex ? `\n$$\n${d.latex}\n$$\n` : ""}`;
      html += p(d.text) + (d.latex ? math(d.latex, true) : "");
    }
    md += `\n### 交互演示\n\n先预测：${l.interactiveVisual.prediction}\n\n${l.interactiveVisual.caption}\n\n在网站打开知识点：#/lesson/${l.id}。图像用于探索，不替代数学证明。\n\n### 例题\n`;
    html += `<div class="visual-link"><strong>交互演示</strong>${p(l.interactiveVisual.prediction)}${p(l.interactiveVisual.caption)}<a href="./#/lesson/${l.id}?view=visual">打开 ${l.number} 的互动图 →</a></div><h3>例题</h3>`;
    md += `\n三步实验：\n${l.teaching.steps.map((s,i)=>`\n${i+1}. **${s.title}** ${s.instruction}\n\n预设下的观察：${s.observation}\n`).join("")}`;
    html += `<div class="experiment"><h3>三步实验</h3>${l.teaching.steps.map((s,i)=>`<h4>${i+1}. ${rich(s.title)}</h4>${p(s.instruction)}${p(`预设下的观察：${s.observation}`)}`).join("")}</div>`;
    if(l.teaching.reflection){md+=`\n解释观察：${l.teaching.reflection.question}\n\n参考解释：${l.teaching.reflection.answer}\n`;html+=`<h4>解释观察</h4>${p(l.teaching.reflection.question)}<details><summary>参考解释</summary>${p(l.teaching.reflection.answer)}</details>`;}
    if(l.teaching.transferExerciseId){const i=l.practice.findIndex(q=>q.id===l.teaching.transferExerciseId);md+=`\n迁移练习：本节第 ${i+1} 题。\n`;html+=p(`迁移练习：本节第 ${i+1} 题。`);}
    for (const [i, e] of l.workedExamples.entries()) {
      md += `\n#### 例 ${i + 1}：${e.title}\n\n${e.problem}\n\n${e.steps.map((s) => `- ${s}`).join("\n")}\n\n**答案：${e.answer}**\n`;
      html += `<article class="example"><h4>例 ${i + 1}：${rich(e.title)}</h4>${p(e.problem)}${list(e.steps)}<div class="answer">${p(e.answer)}</div></article>`;
    }
    md += `\n### 常见错误\n`;
    html += "<h3>常见错误</h3>";
    for (const m of l.commonMistakes) {
      md += `\n- **${m.claim}** ${m.correction}\n`;
      html += `<div class="mistake"><strong>${rich(m.claim)}</strong>${p(m.correction)}</div>`;
    }
    md += `\n### 练习与解答\n`;
    html += `<h3>练习与解答</h3>${questions(l.practice)}`;
    md += `\n前置知识：${l.prerequisites.map((id) => libraryLessons.find((x) => x.id === id).title).join("、") || "初等代数"}。\n`;
    html += `<p class="prerequisites">前置知识：${l.prerequisites.map((id) => `<a href="${allLessons.some(x=>x.id===id)?`#${id}`:`./#/lesson/${id}`}">${rich(libraryLessons.find((x) => x.id === id).title)}</a>`).join("、") || "初等代数"}。</p></section>`;
  }
  const review = extra.reviews.find((r) => r.chapterId === c.id);
  md += `\n## 章末回顾\n\n请先独立作答，再与解答核对。\n`;
  html += `<section class="review" id="review-${c.id}"><h2>${review.title}</h2>${questions(review.questions)}</section>`;
}
md +=
  "\n# 综合测试\n\n建议先遮住解答，独立完成。该测试连接本书各章，解答用于自评，不代表认证成绩。\n";
html += `<section class="review" id="final-exam"><h1>综合测试</h1>${p("建议先遮住解答，独立完成。解答用于自评，不代表认证成绩。")}${questions(extra.exam)}</section>`;
md += "\n# 术语索引\n";
html += '<section id="glossary"><h1>术语索引</h1><dl>';
for (const g of extra.glossary) {
  md += `\n- **${g.term}**：${g.meaning}\n`;
  html += `<dt><a href="#${g.lessonId}">${rich(g.term)}</a></dt><dd>${rich(g.meaning)}</dd>`;
}
html += "</dl></section>";
md += "\n# 证明补充与范围说明\n";
html += '<section id="appendices"><h1>证明补充与范围说明</h1>';
for (const a of extra.appendices) {
  md += `\n## ${a.title}\n\n${a.text}\n`;
  html += `<h2>${rich(a.title)}</h2>${p(a.text)}`;
}
html += "</section>";
md +=
  "\n# 来源与版本\n\n本书的解释、推导、例题、解答与可视化为 AI 重新编写。参考来源分别用于课程范围、数学条件和教学设计核对；具体用途见各条来源。不复制原教材正文或图像。\n\n";
html +=
  "<section><h1>来源与版本</h1><p>本书内容与图像重新编写，参考来源用于范围、定理条件与教学设计核对；尚未逐节人工审校。</p>";
for (const s of book.sources) {
  md += `- [${s.title}](${s.url})：${s.usage}\n`;
  html += `<p><a href="${s.url}">${rich(s.title)}</a>：${s.usage}</p>`;
}
html += "</section>";
const css = `.concept-check{background:#eef4e8;border:1px solid #d2e0ca;border-radius:4px;padding:20px 24px;margin:28px 0}.concept-check-choices{padding-left:30px}.concept-check-choices li{padding:8px 0;line-height:1.9}*{box-sizing:border-box}body{margin:0;font:16px/1.95 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;color:#314a3a;background:#fafbf6}main{max-width:850px;margin:40px auto;background:white;padding:65px 65px;box-shadow:0 2px 25px #23402009}a{color:#436d46}button{font:inherit;border:1px solid #aaba9b;background:#f4f7e9;padding:5px 14px;color:#476142;cursor:pointer}h1,h2,h3,h4{line-height:1.5}h1{font-family:Georgia,"Songti SC",serif;font-size:38px;font-weight:500}h2{font-size:26px;margin-top:35px}h3{font-size:19px;margin-top:28px}h4{font-size:16px;margin-top:20px}.cover h1{font-size:65px}.kicker{letter-spacing:2px;font-size:10px;color:#91a17d}.subtitle{color:#899776}.toc,.lesson,.review,.chapter-intro{margin:50px 0;padding:30px 0;border-top:1px solid #e3e8db}.toc ol{padding-left:25px}.idea,.definition,.visual-link,.answer{background:#f2f6e8;padding:18px 22px;margin:23px 0;border-radius:4px}.definition{background:#fafbf6;border:1px solid #e3e8db}.example,.problem{margin:25px 0;padding:20px;border:1px solid #e4e9dc}.hint,.prerequisites{font-size:13px;color:#8a9978}.mistake{border-left:2px solid #ccb189;padding-left:18px;margin:24px 0}.katex-display{overflow:auto;font-size:.9em}dt{font-weight:600}dd{margin:5px 0 18px;color:#82916f}@media(max-width:700px){main{padding:28px 22px;margin:0}body{font-size:15px}.cover h1{font-size:50px}h1{font-size:30px}.example,.problem{padding:15px}}@media print{body{background:white;color:black;font-size:10.5pt;line-height:1.75}main{max-width:none;margin:0;padding:0;box-shadow:none}button,.visual-link{display:none}.cover,.toc,.chapter-intro,.lesson,.review{break-before:page;border:0;padding:0;margin:0}.cover{break-before:auto}.definition,.example,.mistake{break-inside:avoid}.problem{border:0;padding:0;break-inside:avoid}.answer{background:#f6f6f6}.katex-display{overflow:visible}a{color:inherit;text-decoration:none}@page{size:A4;margin:19mm 18mm}}`;
const publicDir = `${root}/apps/web/public`;
fs.mkdirSync(`${root}/book`, { recursive: true });
fs.writeFileSync(`${root}/book/${filename}`, md);
fs.writeFileSync(`${publicDir}/${filename}`, md);
fs.writeFileSync(
  `${publicDir}/${printFile}`,
  `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(book.title)} · AI University · 完整书稿</title><link rel="stylesheet" href="book-assets/katex.min.css"><style>${css}</style></head><body><main>${html}</main></body></html>`,
);
fs.mkdirSync(`${publicDir}/book-assets`, { recursive: true });
fs.copyFileSync(
  `${root}/node_modules/katex/dist/katex.min.css`,
  `${publicDir}/book-assets/katex.min.css`,
);
fs.cpSync(
  `${root}/node_modules/katex/dist/fonts`,
  `${publicDir}/book-assets/fonts`,
  { recursive: true },
);
console.log(
  `Built full manuscript: ${md.length} characters, ${allLessons.length} sections, ${counts.practice+counts.extra} exercises with solutions.`,
);

}
