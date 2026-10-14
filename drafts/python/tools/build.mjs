import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const read = async path => JSON.parse(await readFile(new URL(path, root), 'utf8'));
const book = await read('book.json');
const supplements = await read('supplements.json');
const lines = [];
const put = (...items) => lines.push(...items);
const heading = (level, text) => put(`${'#'.repeat(level)} ${text}`, '');
const bullets = items => put(...items.map(item => `- ${item}`), '');
const numbered = items => put(...items.map((item, index) => `${index + 1}. ${item}`), '');
function code(language, content) { put(`\`\`\`${language}`, content.trimEnd(), '```', ''); }
function answer(item) {
  heading(5, '参考代码与预期输出');
  if (item.stdin) { put('本次标准输入（逐行提供）：', ''); code('text', item.stdin); }
  code('python', item.code);
  if (item.stdout) { put('预期标准输出：', ''); code('text', item.stdout); }
  else put('预期标准输出为空（没有 print 不等于程序未运行）。', '');
}
function question(item, title) {
  heading(4, title);
  put(item.problem, '', `提示：${item.hint}`, '');
  heading(5, '完整解法');
  numbered(item.solution);
  answer(item.answer);
}
heading(1, `${book.title} / ${book.englishTitle}`);
put(`版本 ${book.version} · 完整课程投稿草稿 · ${book.provenance.date}`, '',
  'AI 生成，尚未人工审校。正文、习题及教学代码按 CC0 1.0 投稿；构建工具与项目源码按 MIT 投稿。来源用于核对语言规则，正文与例题重新编写。', '',
  '本书稿由本目录 book.json、lessons/*.json、supplements.json 与 project/ 中的同版源码生成；请修改事实来源后重建，避免手改生成文件。', '');
heading(2, '读者与课程边界');
put(book.audience, '', book.baseline, '');
bullets(book.outcomes);
put('本卷不展开以下主题；这些项目只是课程边界，不是未完成的章节：', '');
bullets(book.outOfScope);
heading(2, '开始前：安装、运行与学习方法');
put('从 [Python 官网](https://www.python.org/downloads/) 选择仍获支持的 Python 3 版本并完成安装。本书代码使用长期通用语法；本次实际验证环境见 QA.md，未声称在所有版本与系统上实测。准备一个纯文本编辑器，新建独立练习目录，不要在存放重要文件的目录运行写入示例。', '',
'在终端检查解释器（macOS/Linux）：', '');
code('sh', 'python3 --version\npython3 hello.py');
put('Windows 终端通常使用：', ''); code('powershell', 'py -3 --version\npy -3 hello.py');
put('hello.py 需要先创建并保存，内容可使用第 1.1 节的问候示例。如果终端找不到解释器，应先检查安装与命令名称。若使用编辑器的运行按钮，确认它选择了同一解释器。', '',
'每节按照“读概念 → 预测 → 运行 → 改一处 → 手算复核 → 独立做题”学习。先遮住解法，写下自己的预测，再运行代码。每段 Python 代码均可独立复制到新的 .py 文件执行，不能把全部示例拼成一个文件后假设名称与文件状态仍相同。', '',
'input 示例同时给出标准输入与程序的标准输出。自动验证使用重定向输入，不回显键盘输入，因此多个提示可能紧挨着显示；交互终端通常会额外回显你键入的文字，那部分不属于程序的标准输出。', '',
'网页每节都有互动实验：选择参数后逐行观察变量与输出，也可以前进或回退。这是经 Python 实际执行验证的有限示例回放；任意改写代码需使用本机解释器。纸面学习时先写预测，再运行本节实验，改一个参数复核。', '');
heading(2, '全书目录');
for (const chapter of book.chapters) {
  put(`**${chapter.title}**：${chapter.objective}`, '');
  for (const id of chapter.lessons) {
    const lesson = await read(`lessons/${id}.json`);
    put(`- ${lesson.number} ${lesson.title}`);
  }
  put('');
}
for (const [chapterIndex, chapter] of book.chapters.entries()) {
  heading(2, `第 ${chapterIndex + 1} 章 ${chapter.title}`);
  put(chapter.objective, '');
  for (const id of chapter.lessons) {
    const lesson = await read(`lessons/${id}.json`);
    heading(3, `${lesson.number} ${lesson.title}`);
    put(`**核心意思：**${lesson.concept}`, '', `**直觉：**${lesson.intuition}`, '');
    heading(4, '学习目标'); bullets(lesson.objectives);
    heading(4, lesson.body[0].title); put(lesson.body[0].text, '');
    const guided = lesson.workedExamples[0];
    heading(4, `跟着做：${guided.title}`); put(guided.problem, '');
    answer(guided.answer); numbered(guided.steps);
    for (const body of lesson.body.slice(1)) { heading(4, body.title); put(body.text, ''); }
    if (lesson.localSetup) { heading(4, '第一次在电脑上运行：四步操作'); numbered(lesson.localSetup); }
    heading(4, '定义与适用条件'); put(lesson.formalDefinition.text, ''); bullets(lesson.formalDefinition.conditions);
    heading(4, '执行过程与推导'); numbered(lesson.derivation.map(step => step.text));
    heading(4, '概念检查');
    put(lesson.learningCheck.question, '');
    put(...lesson.learningCheck.choices.map((choice, index) => `- ${String.fromCharCode(65 + index)}. ${choice}`), '');
    put(`答案：${String.fromCharCode(65 + lesson.learningCheck.correctIndex)}。${lesson.learningCheck.explanation}`, '');
    heading(4, '互动实验：先预测，再走一步');
    put(lesson.interactiveVisual.prediction, '', lesson.interactiveVisual.caption, '');
    answer(lesson.interactiveVisual.experiment);
    put(`继续实验：${lesson.interactiveVisual.followUp}`, '');
    put('网页参数：' + lesson.interactiveVisual.controls.map(c => `${c.label}（${c.values.map(v => JSON.stringify(v)).join('、')}）`).join('；'), '');
    for (const [index, example] of lesson.workedExamples.slice(1).entries()) {
      heading(4, `例题 ${index + 2}：${example.title}`); put(example.problem, '');
      numbered(example.steps); answer(example.answer);
    }
    heading(4, '常见误区');
    for (const mistake of lesson.commonMistakes) put(`- 错误想法：${mistake.claim} 纠正：${mistake.correction}`, '');
    for (const note of lesson.furtherReading) { heading(4, note.title); put('选读：学完主线后再看。', '', note.text, ''); }
    heading(4, '独立练习与完整解答');
    for (const [index, item] of lesson.practice.entries()) question(item, `练习 ${index + 1}（难度 ${item.difficulty}/6）`);
    put(`先修：${lesson.prerequisites.join('、') || '无编程先修'}。相对难度：${lesson.difficulty}/6。`, '',
      `来源：${lesson.sources.map(id => { const source = book.sources.find(s => s.id === id); return `[${source.title}](${source.url})`; }).join('；')}。`, '');
  }
  heading(3, '章末回顾');
  for (const [index, item] of supplements.chapterReviews[chapterIndex].questions.entries()) question(item, `回顾 ${index + 1}`);
}
heading(2, '综合测试与完整解答');
put('先独立作答，再运行参考代码。检查正常输入、边界和应拒绝输入，并说明适用条件。', '');
for (const [index, item] of supplements.exam.entries()) question(item, `综合题 ${index + 1}`);
heading(2, '术语索引');
put('| 术语 | 用途与含义 |', '| --- | --- |', ...supplements.glossary.map(item => `| ${item.term} | ${item.definition} |`), '');
heading(2, '附录 A：双文件模块练习');
put('在同一个练习目录中保存以下两个文件。在终端进入该目录再执行 python3 main.py，Windows 使用 py -3 main.py；预期输出 10。导入 helpers 时不会输出或等待输入。', '');
for (const filename of ['helpers.py', 'main.py']) { heading(3, filename); code('python', await readFile(new URL(`project/${filename}`, root), 'utf8')); }
heading(2, '附录 B：消费汇总器完整源码与测试');
put('表头必须精确为 category,cents，顺序不可交换。金额字段去两端空白后仅接受 ASCII 数字且数值大于零；分类不可空，不含换行或制表符。空白物理行按 csv 模块规则跳过，表头之后无数据允许。若记录包含多行引号字段，报错行号对应记录结束的物理行。', '',
'从仓库根目录运行：', '');
code('sh', 'python3 drafts/python/project/expense_report.py drafts/python/project/sample.csv\npython3 -m unittest discover -s drafts/python/project -v');
put('Windows 将上述 python3 替换为 py -3。若只复制本附录，将三个文件保存在同一目录，再执行 python3 expense_report.py sample.csv；测试使用 python3 -m unittest discover -s . -v。', '', '样例报告：', '');
code('text', '总额: 23.50 元\n交通: 3.00 元\n餐饮: 20.50 元');
put('退出码：正常为 0，参数错误或预期数据/文件错误为 2。数据错误写入标准错误，标准输出不产生半份报告。该程序不写入输入文件。', '');
for (const filename of ['sample.csv', 'expense_report.py', 'test_expense_report.py']) {
  heading(3, filename); code(filename.endsWith('.py') ? 'python' : 'csv', await readFile(new URL(`project/${filename}`, root), 'utf8'));
}
heading(2, '来源、许可与验证边界');
for (const source of book.sources) put(`- [${source.title}](${source.url})：${source.purpose}`, '');
put('所有说明、例题与练习为本次原创编写，未复制参考文档的段落、图片或题库。代码输出检查和项目测试只验证列出的案例，不保证任意输入正确，不等同于人工审校或学习效果研究。制作流程、结构适配与投稿范围见 README.md，具体验证证据见 QA.md。', '');
const manuscript = `${lines.join('\n').trimEnd()}\n`;
const target = new URL('Python-Introduction.md', root);
if (process.argv.includes('--check')) {
  if (await readFile(target, 'utf8') !== manuscript) throw new Error('Python manuscript is stale; run npm run build:python');
  console.log('Python manuscript matches canonical content and project sources.');
} else {
  await writeFile(target, manuscript);
  console.log(`Generated Python-Introduction.md (${Buffer.byteLength(manuscript)} bytes).`);
}
