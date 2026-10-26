/** Static, complete lesson editions derived from the same canonical learning objects. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import katex from 'katex';
import {root} from './content-utils.mjs';
import {publicationBooks, publicationPage} from './build-publication.mjs';
import {splitMathText, mathDisplayMode, plainMathText} from '../packages/content/math-text.mjs';
const sites = JSON.parse(fs.readFileSync(path.join(root, 'deployments/sites.json')));
const websiteVersion = JSON.parse(fs.readFileSync(path.join(root, 'package.json'))).version;
const repository = 'https://github.com/b1n9ui/ai-university';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rich = value => splitMathText(String(value ?? '')).map(p => p.kind === 'math' ? katex.renderToString(p.value, {displayMode:mathDisplayMode(p.value,p.display),throwOnError:true,trust:false,strict:'ignore'}) : esc(p.value)).join('');
const hash = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const labels = {
 en: {intuition:'Intuition',goals:'What you will learn',definition:'Definition and conditions',derivation:'Derivation / process',check:'Check your understanding',answer:'Answer and explanation',visual:'Interactive exploration',open:'Open the interactive diagram',steps:'Guided experiment',examples:'Worked examples',mistakes:'Common mistakes',practice:'Exercises and solutions',hint:'Hint',sources:'Sources and provenance',prerequisites:'Prerequisites',setup:'Run locally',further:'Further reading',feedback:'Give feedback on this lesson',markdown:'Read / download Markdown',reader:'Open interactive reader',previous:'Previous',next:'Next',summary:'Complete contents',notice:'AI-authored fixed edition. Not individually human-reviewed. Diagrams and automated checks do not prove every statement.',citation:'Cite this edition',code:'Code',stdin:'Standard input',stdout:'Expected standard output',noOutput:'No standard output',choices:'Choices',preset:'Preset',observation:'Expected observation for this preset',feedbackTitle:'Help improve the textbooks',feedbackIntro:'Point out an unclear explanation, a specific error, a diagram problem, or propose a complete new textbook.',context:'Lesson context',type:'Feedback type',unclear:'Unclear explanation',error:'Content or solution error',visualType:'Diagram / interaction issue',newBook:'New textbook submission',description:'What should change?',evidence:'Correction, example, source, or manuscript link (optional)',submit:'Preview and submit on GitHub',privacy:'This form sends nothing while you write. The next page is a public GitHub issue draft; submission requires GitHub sign-in. Do not include private information. Browser learning records are never attached.',queue:'Review queue',queueIntro:'Reader suggestions are unverified. AI may organize them and prepare candidate revisions; the project owner decides what enters the official textbook.',newBookNote:'For a new textbook, include audience, full scope, manuscript or source link, AI/provenance notes, and license. You can attach files on the GitHub issue page.',scriptFallback:'Without JavaScript, use the direct GitHub submission templates below.',graph:'Learning graph and machine-readable index',local:'Your learning records stay in your browser. This website does not train on your activity.',book:'Book',lesson:'Lesson',version:'Content version',view:'Reading view'},
 zh: {intuition:'怎么理解',goals:'本节目标',definition:'定义与条件',derivation:'推导与过程',check:'概念检查',answer:'答案与解释',visual:'交互演示',open:'打开交互演示',steps:'操作与观察',examples:'逐步例题',mistakes:'常见误区',practice:'练习与解答',hint:'提示',sources:'来源与编写说明',prerequisites:'先修知识',setup:'本机运行',further:'选读',feedback:'反馈这一节',markdown:'阅读或下载 Markdown',reader:'打开交互阅读版',previous:'上一节',next:'下一节',summary:'完整目录',notice:'由 AI 编写的固定版本，尚未逐节人工审校。图示与自动检查不能证明所有结论正确。',citation:'引用本节',code:'代码',stdin:'标准输入',stdout:'预期输出',noOutput:'无标准输出',choices:'选项',preset:'预设参数',observation:'该预设下的观察',feedbackTitle:'一起改进教材',feedbackIntro:'哪一处没讲清楚？发现了内容或图示错误？也可以在这里提交一本完整的新教材。',context:'章节信息',type:'反馈类型',unclear:'这里没看懂',error:'内容或题解有误',visualType:'图示或操作有问题',newBook:'提交新教材',description:'具体想改进什么？',evidence:'修改建议、例子、来源或书稿链接（可选）',submit:'到 GitHub 预览并提交',privacy:'填写时不会发送内容。下一页是公开的 GitHub 草稿，需要登录后由你提交。请勿填写隐私信息，不会附带浏览器中的学习记录。',queue:'改进建议队列',queueIntro:'读者建议不等于已核实结论。AI 可以整理问题和准备候选修订，由项目所有者决定是否收入正式教材。',newBookNote:'新教材请注明读者、完整课程范围、书稿或源码链接、AI 编写与来源说明、许可证。进入 GitHub 后可以附加文件。',scriptFallback:'不使用 JavaScript 也可以打开下方 GitHub 投稿模板。',graph:'知识关系与机器可读索引',local:'学习记录只保存在你的浏览器；网站不会根据你的访问行为训练模型。',book:'教材',lesson:'知识点',version:'内容版本',view:'阅读视图'},
};
export function renderLesson(book, lesson, edition, allBooks) {
 const t = labels[edition], md = [];
 const heading = (title, level=2) => {md.push(`${'#'.repeat(level)} ${title}\n`);return `<h${level}>${rich(title)}</h${level}>`;};
 const paragraph = value => {if(!value)return '';md.push(String(value)+'\n');return `<p>${rich(value)}</p>`;};
 const list = values => {if(!values?.length)return '';md.push(values.map(v=>'- '+v).join('\n')+'\n');return `<ul>${values.map(v=>`<li>${rich(v)}</li>`).join('')}</ul>`;};
 const code = (value, title=t.code) => {md.push(`**${title}**\n\n\`\`\`text\n${value}\n\`\`\`\n`);return `<figure><figcaption>${esc(title)}</figcaption><pre><code>${esc(value)}</code></pre></figure>`;};
 const snippet = value => typeof value === 'string' ? paragraph(value) : code(value.code)+(value.stdin?code(value.stdin,t.stdin):'')+code(value.stdout||t.noOutput,t.stdout);
 const formula = value => {if(!value)return '';md.push(`$$\n${value}\n$$\n`);return katex.renderToString(value,{displayMode:true,throwOnError:true,trust:false,strict:'ignore'});};
 md.push(`# ${lesson.number} ${lesson.title}\n`,`${book.title} · ${edition==='en'?'English':'中文'} · v${book.version}\n`,`${t.notice}\n`);
 let html = `<div class="lesson-idea">${paragraph(lesson.concept)}</div>`;
 html += heading(t.intuition)+paragraph(lesson.intuition)+heading(t.goals)+list(lesson.objectives);
 if(lesson.teaching?.explain)html += paragraph(lesson.teaching.explain);
 for(const block of lesson.body) html += heading(block.title)+paragraph(block.text);
 if(lesson.localSetup)html += heading(t.setup)+list(lesson.localSetup);
 html += heading(t.definition)+paragraph(lesson.formalDefinition.text)+formula(lesson.formalDefinition.latex)+list(lesson.formalDefinition.conditions);
 html += heading(t.derivation);
 for(const step of lesson.derivation||[]) html += paragraph(step.text)+formula(step.latex);
 html += list(lesson.workflow);
 const check=lesson.learningCheck;
 if(check){html+=heading(t.check)+paragraph(check.question)+list(check.choices.map((c,i)=>`${String.fromCharCode(65+i)}. ${c}`));html+=`<details><summary>${t.answer}</summary>`+paragraph(`${String.fromCharCode(65+check.correctIndex)}. ${check.choices[check.correctIndex]}`)+paragraph(check.explanation)+list(check.feedback?.map((s,i)=>`${String.fromCharCode(65+i)}: ${s}`))+'</details>';}
 const interactive=`../../../#/${book.type==='mathematics'?'lesson/'+lesson.id+'?view=visual':'book/'+book.id+'/'+lesson.id+'/experiment'}`;
 html+=heading(t.visual)+paragraph(lesson.interactiveVisual.prediction)+paragraph(lesson.interactiveVisual.caption||lesson.interactiveVisual.followUp);
 md.push(`[${t.open}](${new URL(interactive,new URL(`books/${book.id}/${lesson.id}/`,sites[edition].public_url)).href})\n`);
 html+=`<a class="button" href="${interactive}">${t.open} ↗</a>`;
 if(lesson.interactiveVisual.experiment)html+=snippet(lesson.interactiveVisual.experiment);
 if(lesson.teaching?.steps){html+=heading(t.steps);for(const step of lesson.teaching.steps)html+=heading(step.title,3)+paragraph(step.instruction)+paragraph(`${t.observation}: ${step.observation}`);}
 for(const step of lesson.interactiveVisual.steps||[])html+=paragraph(step.question)+list(step.choices)+paragraph(`${t.answer}: ${String.fromCharCode(65+step.correctIndex)}`)+list(step.feedback);
 html+=heading(t.examples);
 for(const [i,example] of lesson.workedExamples.entries())html+=`<article class="example">`+heading(`${i+1}. ${example.title}`,3)+paragraph(example.problem)+list(example.steps)+snippet(example.answer)+(example.code?code(example.code):'')+'</article>';
 html+=heading(t.mistakes);
 for(const m of lesson.commonMistakes)html+=`<aside class="mistake">`+paragraph(m.claim)+paragraph(m.correction)+'</aside>';
 html+=heading(t.practice);
 for(const [i,q] of lesson.practice.entries())html+=`<article class="problem" id="${esc(q.id||'practice-'+i)}">`+heading(`${i+1}. ${q.problem}`,3)+paragraph(`${t.hint}: ${q.hint}`)+`<details><summary>${t.answer}</summary>`+snippet(q.answer)+list(q.solution)+'</details></article>';
 for(const item of lesson.furtherReading||[])html+=heading(`${t.further}: ${item.title}`)+paragraph(item.text);
 html+=heading(t.prerequisites);
 html+='<ul>'+(lesson.prerequisites||[]).map(id=>{const target=[book,...allBooks.filter(b=>b.id!==book.id)].find(b=>b.lessons.some(l=>l.id===id));if(!target)throw Error('Unknown prerequisite '+id);const other=target.lessons.find(l=>l.id===id);const relative=`../../../books/${target.id}/${id}/`;md.push(`- [${other.title}](${new URL(relative,new URL(`books/${book.id}/${lesson.id}/`,sites[edition].public_url)).href})\n`);return `<li><a href="${relative}">${rich(other.title)}</a></li>`;}).join('')+'</ul>';
 html+=heading(t.sources);
 for(const source of (book.sources||[]).filter(s=>!lesson.sources||lesson.sources.includes(s.id))){md.push(`- [${source.title}](${source.url}): ${source.usage||source.purpose||''}\n`);html+=`<p><a href="${esc(source.url)}">${rich(source.title)}</a> ${rich(source.usage||source.purpose||'')}</p>`;}
 md.push(`Content SHA-256: ${hash(lesson)}\n`);
 return {html,markdown:md.join('\n'),sha256:hash(lesson)};
}
function feedbackPage(edition) {
 const t=labels[edition], suffix='contribute/';
 const filters=[['待处理 / New','is:issue is:open label:feedback -label:review:checking -label:review:decision -label:review:accepted -label:review:declined'],['复核中 / Checking','is:issue is:open label:feedback label:review:checking'],['待筛选 / Owner decision','is:issue is:open label:feedback label:review:decision'],['已采纳 / Accepted','is:issue label:feedback label:review:accepted'],['未采纳 / Declined','is:issue label:feedback label:review:declined']];
 const queue=filters.map(([title,q])=>`<a class="button secondary" href="${repository}/issues?q=${encodeURIComponent(q)}">${esc(edition==='en'?title.split(' / ')[1]:title.split(' / ')[0])} ↗</a>`).join('');
 const form=`<section class="feedback-panel"><h2>${t.context}</h2><p id="feedback-context">${t.feedbackIntro}</p><form id="feedback-form"><input type="hidden" name="edition" value="${edition}"><div class="context-grid">${['book','lesson','version','view'].map(key=>`<label>${t[key]}<input name="${key}" readonly maxlength="160"></label>`).join('')}</div><label>${t.type}<select name="kind"><option value="unclear">${t.unclear}</option><option value="error">${t.error}</option><option value="visual">${t.visualType}</option><option value="new-book">${t.newBook}</option></select></label><label>${t.description}<textarea name="description" required maxlength="1800" rows="6"></textarea></label><label>${t.evidence}<textarea name="evidence" maxlength="900" rows="3"></textarea></label><p class="form-note">${t.newBookNote}</p><p class="form-note">${t.privacy}</p><p id="feedback-status" role="status"></p><button class="button" type="submit">${t.submit} ↗</button></form><noscript><p>${t.scriptFallback}</p></noscript><p><a href="${repository}/issues/new?template=learning-feedback.md">GitHub · ${t.feedback}</a> · <a href="${repository}/issues/new?template=textbook-submission.md">${t.newBook}</a></p></section>`;
 return publicationPage(edition,t.feedbackTitle+' · AI University',t.feedbackIntro,suffix,`<section class="hero"><p class="eyebrow">AI UNIVERSITY / OPEN EDITORIAL</p><h1>${t.feedbackTitle}</h1><p class="lead">${t.feedbackIntro}</p></section>${form}<section id="queue"><h2>${t.queue}</h2><p>${t.queueIntro}</p><div class="demo-links">${queue}</div><p>${t.local}</p><p><a href="${repository}/blob/main/docs/IMPROVEMENT_LOOP.md">${edition==='en'?'How review and background maintenance work':'复核与后台维护说明'} ↗</a></p></section>`).replace('</body>','<script type="module" src="../launch/feedback.js"></script></body>');
}
export function writeDiscoverySites() {
 const allUrls=[sites.zh.public_url,sites.en.public_url];
 for(const edition of ['zh','en']) {
  const books=publicationBooks(edition),t=labels[edition],base=sites[edition].public_url,dir=path.join(root,sites[edition].directory);
  const index={schemaVersion:1,edition,websiteVersion,contentLicense:'CC0-1.0',codeLicense:'MIT',aiAuthored:true,humanReviewed:false,lessons:[]};
  const rootGuide=[`# AI University\n`,`> ${edition==='en'?'Complete AI-authored open textbooks, with locally calculated interactive diagrams.':'AI 编写的完整开放教材，配有在浏览器中计算的交互图示。'}\n`,`${t.notice}\n`,`${edition==='en'?'These files describe published content. Reader submissions are unverified and separate. No runtime model API is required.':'这些文件只描述已出版内容，读者投稿另行待审。网站无需运行时模型 API。'}\n`,`## ${t.summary}\n`];
  const write=(name,data)=>{fs.mkdirSync(path.dirname(path.join(dir,name)),{recursive:true});fs.writeFileSync(path.join(dir,name),data);};
  for(const b of books) {
   const bookGuide=[`# ${b.title}\n`,`> ${b.description}\n`,`v${b.version} · ${t.notice}\n`,`## ${t.summary}\n`];
   for(const [i,l] of b.lessons.entries()) {
    const suffix=`books/${b.id}/${l.id}/`,url=new URL(suffix,base).href,reader=`../../../#/${b.type==='mathematics'?'lesson/'+l.id:'book/'+b.id+'/'+l.id}`;
    const rendered=renderLesson(b,l,edition,books);
    const feedback=`../../../contribute/?${new URLSearchParams({book:b.id,lesson:l.id,version:b.version,view:'static'})}`;
    const navigation=`<nav class="lesson-neighbors">${i?`<a href="../${b.lessons[i-1].id}/">← ${t.previous}: ${rich(b.lessons[i-1].title)}</a>`:'<span></span>'}${i<b.lessons.length-1?`<a href="../${b.lessons[i+1].id}/">${t.next}: ${rich(b.lessons[i+1].title)} →</a>`:'<span></span>'}</nav>`;
    const body=`<nav class="breadcrumbs"><a href="../">${rich(b.title)}</a> / ${esc(l.number)}</nav><article class="readable-lesson"><header class="readable-heading"><p class="eyebrow">${esc(b.title)} · ${esc(l.number)} · v${esc(b.version)}</p><h1>${rich(l.title)}</h1><p class="lead">${rich(l.subtitle||l.concept)}</p><div class="actions"><a class="button" href="${reader}">${t.reader} ↗</a><a class="button secondary" href="index.md">Markdown ↓</a><a class="text-link" href="${feedback}">${t.feedback} ↗</a></div></header>${rendered.html}<aside class="note"><h2>${t.citation}</h2><p>AI University · ${rich(b.title)} · ${rich(l.title)} · ${edition==='en'?'English':'中文'} · v${esc(b.version)}</p><p><a href="${url}">${esc(url)}</a></p><p>${t.notice}</p><details><summary>${edition==='en'?'Version fingerprint':'版本校验信息'}</summary><p class="content-hash">SHA-256: ${rendered.sha256}</p></details></aside>${navigation}</article>`;
    const structured={'@context':'https://schema.org','@type':'LearningResource',name:plainMathText(l.title),description:plainMathText(l.concept),url,inLanguage:edition==='en'?'en':'zh-CN',learningResourceType:'Textbook lesson',isAccessibleForFree:true,license:'https://creativecommons.org/publicdomain/zero/1.0/',isPartOf:{'@type':'Book',name:b.title,url:new URL(`books/${b.id}/`,base).href},version:b.version};
    let html=publicationPage(edition,l.title+' · '+b.title+' · AI University',l.concept,suffix,body,structured);
    html=html.replace('</head>','<link rel="alternate" type="text/markdown" href="index.md"><link rel="describedby" href="../llms.txt"></head>');
    write(suffix+'index.html',html);write(suffix+'index.md',rendered.markdown+`\n${t.citation}: ${url}\n`);allUrls.push(url);
    index.lessons.push({id:l.id,bookId:b.id,bookTitle:b.title,number:l.number,title:plainMathText(l.title),summary:plainMathText(l.concept),version:b.version,url,markdown:new URL('index.md',url).href,interactive:new URL(reader,url).href,prerequisites:l.prerequisites,sha256:rendered.sha256});
    bookGuide.push(`- [${l.number} ${plainMathText(l.title)}](${new URL('index.md',url).href}): ${plainMathText(l.concept).replace(/\n/g,' ')}\n`);
   }
   write(`books/${b.id}/index.md`,bookGuide.join('\n'));write(`books/${b.id}/llms.txt`,bookGuide.join('\n'));
   const summary=path.join(dir,`books/${b.id}/index.html`);
   let html=fs.readFileSync(summary,'utf8').replace('</head>','<link rel="alternate" type="text/markdown" href="index.md"><link rel="describedby" href="llms.txt"></head>');
   html=html.replaceAll(`href="../../#/${b.type==='mathematics'?'lesson/':'book/'+b.id+'/'}${b.lessons[0].id}"`,`href="${b.lessons[0].id}/"`);
   for(const l of b.lessons)html=html.replaceAll(`href="../../#/${b.type==='mathematics'?'lesson/':'book/'+b.id+'/'}${l.id}"`,`href="${l.id}/"`);
   fs.writeFileSync(summary,html);
   rootGuide.push(`- [${plainMathText(b.title)}](${new URL(`books/${b.id}/index.md`,base).href}): ${b.stats.lessons} ${t.lesson} · v${b.version}\n`);
  }
  rootGuide.push(`## Optional\n\n- [${t.graph}](${new URL('content-index.json',base).href})\n- [${t.feedbackTitle}](${new URL('contribute/',base).href})\n`);
  write('llms.txt',rootGuide.join('\n'));write('index.md',rootGuide.join('\n'));write('content-index.json',JSON.stringify(index,null,2)+'\n');
  write('contribute/index.html',feedbackPage(edition));allUrls.push(new URL('contribute/',base).href);
  write('launch/feedback-core.js',fs.readFileSync(path.join(root,'packages/content/feedback.mjs')));
  for(const suffix of ['','books/','press/']) {
   allUrls.push(new URL(suffix,base).href);
   const file=path.join(dir,suffix,'index.html');let html=fs.readFileSync(file,'utf8');
   if(suffix==='')html=html.replace('</head>','<link rel="alternate" type="text/markdown" href="index.md"><link rel="describedby" href="llms.txt"></head>');
   const up=suffix?'../':'./';
   html=html.replace('</footer>',`<p><a href="${up}contribute/">${t.feedbackTitle}</a> · <a href="${up}llms.txt">${edition==='en'?'Content guide for AI readers':'AI 内容导航'}</a></p></footer>`);
   fs.writeFileSync(file,html);
  }
  for(const b of books)allUrls.push(new URL(`books/${b.id}/`,base).href);
  console.log(`${edition}: ${index.lessons.length} complete readable lessons, Markdown counterparts, content index and feedback page.`);
 }
 const unique=[...new Set(allUrls)];
 const sitemap=urls=>'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(u=>'<url><loc>'+esc(u)+'</loc></url>').join('')+'</urlset>\n';
 fs.writeFileSync(path.join(root,'dist/sitemap.xml'),sitemap(unique));fs.writeFileSync(path.join(root,'dist-en/sitemap.xml'),sitemap(unique.filter(u=>u.startsWith(sites.en.public_url))));
}
