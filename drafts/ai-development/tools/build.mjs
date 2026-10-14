import { readFile, writeFile, readdir } from "node:fs/promises";
const root = new URL("../", import.meta.url);
const read = async (p) => JSON.parse(await readFile(new URL(p, root), "utf8"));
const book = await read("book.json"),
  s = await read("supplements.json");
const lines = [];
const put = (...x) => lines.push(...x);
const h = (n, t) => put("#".repeat(n) + " " + t, "");
const bullets = (x) => put(...x.map((t) => "- " + t), "");
const steps = (x) => put(...x.map((t, i) => `${i + 1}. ${t}`), "");
const answer = (q) => {
  put(q.problem, "", `提示：${q.hint}`, "");
  h(5, "完整解答");
  steps(q.solution);
  put(q.answer, "");
};
const check = (q) => {
  put(q.question, "");
  bullets(q.choices.map((t, i) => `${"ABC"[i]}. ${t}`));
  put(`参考选择：${"ABC"[q.correctIndex]}`, "");
  bullets(q.feedback.map((t, i) => `${"ABC"[i]}：${t}`));
};
h(1, `${book.title} / ${book.englishTitle}`);
put(
  book.subtitle,
  "",
  `版本 ${book.version} · 投稿草稿 · ${book.provenance.date}`,
  "",
  "AI 生成，尚未人工审校。内容 CC0-1.0；工具与项目 MIT。",
  "",
);
h(2, "读者与课程边界");
put(book.audience, "", book.baseline, "");
bullets(book.outcomes);
put("本卷不展开：", "");
bullets(book.outOfScope);
h(2, "怎样使用这本书");
put(
  "围绕“个人学习清单”贯穿学习。先写自己的答案，再看例题或反馈；每节完成一个具体判断，并留下你的理由。网页情境题只比较已编写的选项，不自动评价自由文字。Git 台是单文件教学模型，不能操作真实仓库；提示词台只整理你填写的六栏，不能证明语义正确。复制到真实项目之前先核对路径、权限和数据后果。",
  "",
  "第一次用终端：在编辑器打开独立 learning-list 练习目录并开集成终端；核对 README，检查工具版本。macOS/Linux 与 PowerShell 均可使用本书 git、node、npm 命令；含空格的路径用引号。命令中的示例名字需换成你的实际路径。不要把输出说明一起当命令复制。",
  "",
  "本机、提交、推送、PR、合并与发布分别记录；本书只提供学习稿与本地预览，不自动公开你的项目。",
  "",
);
h(2, "全书目录");
for (const c of book.chapters) {
  put("**" + c.title + "**：" + c.objective, "");
  for (const id of c.lessons) {
    const l = await read("lessons/" + id + ".json");
    put(`- ${l.number} ${l.title}`);
  }
  put("");
}
for (const [i, c] of book.chapters.entries()) {
  h(2, `第 ${i + 1} 章 ${c.title}`);
  put(c.objective, "");
  for (const id of c.lessons) {
    const l = await read("lessons/" + id + ".json");
    h(3, `${l.number} ${l.title}`);
    put(
      l.subtitle,
      "",
      `核心意思：${l.concept}`,
      "",
      `直觉：${l.intuition}`,
      "",
    );
    h(4, "学习目标");
    bullets(l.objectives);
    for (const p of l.body) {
      h(4, p.title);
      put(p.text, "");
    }
    h(4, "定义与适用条件");
    put(l.formalDefinition.text, "");
    bullets(l.formalDefinition.conditions);
    h(4, "一步步做");
    steps(l.workflow);
    for (const [j, e] of l.workedExamples.entries()) {
      h(4, `例题 ${j + 1}：${e.title}`);
      put(e.problem, "");
      steps(e.steps);
      if (e.code) put("```sh", e.code, "```", "");
      put("参考结果：", "", e.answer, "");
    }
    h(4, "概念检查");
    check(l.learningCheck);
    h(4, "互动判断");
    put(l.interactiveVisual.prediction, "");
    for (const [j, q] of l.interactiveVisual.steps.entries()) {
      h(5, `情境 ${j + 1}`);
      check(q);
    }
    put("继续练习：" + l.interactiveVisual.followUp, "");
    if (l.interactiveVisual.kind === "git")
      put(
        "网页附单文件 Git 台：修改工作区、暂存、提交、取消暂存、恢复、创建/切换分支、模拟推送、撤销普通提交。重置只影响练习。远端从初始 main 开始，教学模型不处理网络、认证、未跟踪文件、冲突和复杂历史。",
        "",
      );
    if (l.interactiveVisual.kind === "prompt")
      put(
        "网页附任务卡台：填写目标、上下文、范围、验收、验证和交付六栏，生成可复制文本。栏目齐全不代表内容可靠；需手动核对事实、边界和证据。",
        "",
      );
    if (l.promptTemplate) {
      h(4, "任务卡练习台的同版示例");
      for (const [key, label] of [
        ["goal", "本次目标"],
        ["context", "项目事实"],
        ["scope", "范围与边界"],
        ["acceptance", "验收标准"],
        ["verification", "验证方法"],
        ["delivery", "交付要求"],
      ])
        put(`**${label}**：${l.promptTemplate[key]}`, "");
    }
    h(4, "常见误区");
    for (const m of l.commonMistakes)
      put(`- 错误想法：${m.claim}\n  纠正：${m.correction}`, "");
    h(4, "独立练习");
    for (const [j, q] of l.practice.entries()) {
      h(5, `练习 ${j + 1}（难度 ${q.difficulty}/6）`);
      answer(q);
    }
    put(
      `先修：${l.prerequisites.join("、") || "无需编程先修"}。相对难度 ${l.difficulty}/6。`,
      "",
    );
    put(
      "来源：" +
        l.sources
          .map((id) => {
            const s = book.sources.find((s) => s.id === id);
            return `[${s.title}](${s.url})`;
          })
          .join("；"),
      "",
    );
  }
  h(3, "章末回顾");
  for (const [j, q] of s.chapterReviews[i].questions.entries()) {
    h(4, `回顾 ${j + 1}`);
    answer(q);
  }
}
h(2, "综合实作与判断");
for (const [i, q] of s.exam.entries()) {
  h(3, `综合题 ${i + 1}`);
  answer(q);
}
h(2, "贯穿项目四个关卡");
for (const p of s.projectPlan) {
  h(3, p.title);
  put(p.task, "");
  bullets(p.evidence);
}
h(2, "术语索引");
put(
  "| 术语 | 解释 |",
  "| --- | --- |",
  ...s.glossary.map((g) => `| ${g.term} | ${g.definition} |`),
  "",
);
const files = [];
for (const name of (await readdir(new URL("project/", root))).sort()) {
  files.push({
    name,
    content: await readFile(new URL("project/" + name, root), "utf8"),
  });
}
h(2, "附录：学习清单完整源码");
put(
  "把以下文件按原名保存在同一个独立目录，按 README 运行；网页可下载同版项目 ZIP。任务逻辑的自动测试不能替代浏览器、键盘和布局验收。",
  "",
);
for (const f of files) {
  h(3, f.name);
  put(
    "```" +
      (f.name.endsWith(".mjs")
        ? "javascript"
        : f.name.endsWith(".html")
          ? "html"
          : f.name.endsWith(".css")
            ? "css"
            : "text"),
    f.content.trimEnd(),
    "```",
    "",
  );
}
h(2, "来源、许可与验证边界");
for (const source of book.sources)
  put(`- [${source.title}](${source.url})：${source.purpose}`, "");
put(
  "正文、案例、任务卡与情境题为原创编写，参考资料用于核对工具行为；未复制图片或题库。测试只支持已执行案例，不是学习效果证明，也不代表人工审校。制作与具体证据见 README.md、QA.md。",
  "",
);
// A deterministic, uncompressed ZIP, using UTF-8 names and a fixed date.
function crc32(b) {
  let c = 0xffffffff;
  for (const byte of b) {
    c ^= byte;
    for (let j = 0; j < 8; j++) c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
  }
  return (c ^ 0xffffffff) >>> 0;
}
function zip(items) {
  const locals = [],
    central = [];
  let offset = 0;
  for (const f of items) {
    const name = Buffer.from("learning-list/" + f.name);
    const data = Buffer.from(f.content);
    const crc = crc32(data);
    const date = ((2026 - 1980) << 9) | (10 << 5) | 11;
    const header = Buffer.alloc(30);
    header.writeUInt32LE(0x04034b50, 0);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(0x800, 6);
    header.writeUInt16LE(date, 12);
    header.writeUInt32LE(crc, 14);
    header.writeUInt32LE(data.length, 18);
    header.writeUInt32LE(data.length, 22);
    header.writeUInt16LE(name.length, 26);
    locals.push(header, name, data);
    const c = Buffer.alloc(46);
    c.writeUInt32LE(0x02014b50, 0);
    c.writeUInt16LE(20, 4);
    c.writeUInt16LE(20, 6);
    c.writeUInt16LE(0x800, 8);
    c.writeUInt16LE(date, 14);
    c.writeUInt32LE(crc, 16);
    c.writeUInt32LE(data.length, 20);
    c.writeUInt32LE(data.length, 24);
    c.writeUInt16LE(name.length, 28);
    c.writeUInt32LE(offset, 42);
    central.push(c, name);
    offset += header.length + name.length + data.length;
  }
  const directory = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(items.length, 8);
  end.writeUInt16LE(items.length, 10);
  end.writeUInt32LE(directory.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, directory, end]);
}
const outputs = {
  "AI-Assisted-Development.md": Buffer.from(lines.join("\n").trimEnd() + "\n"),
  "project.generated.json": Buffer.from(JSON.stringify(files, null, 2) + "\n"),
  "learning-list.zip": zip(files),
};
for (const [name, data] of Object.entries(outputs)) {
  const url = new URL(name, root);
  if (process.argv.includes("--check")) {
    if (!(await readFile(url)).equals(data))
      throw new Error(`${name} is stale; run npm run build:ai-development`);
  } else await writeFile(url, data);
}
console.log(
  process.argv.includes("--check")
    ? "Manuscript, project source bundle and ZIP match canonical content."
    : `Generated manuscript (${outputs["AI-Assisted-Development.md"].length} bytes), source bundle and project ZIP.`,
);
