import {tr, localizeNode, locale} from "../i18n";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Copy,
  Download,
  GitBranch,
  List,
  Sparkles,
  X,
} from "lucide-react";
import book from "../../../../packages/content/ai-development/book.json";
import supplements from "../../../../packages/content/ai-development/supplements.json";
import manuscript from "../../../../packages/content/ai-development/AI-Assisted-Development.md?raw";
import project from "../../../../packages/content/ai-development/project.generated.json";
import projectZip from "../../../../packages/content/ai-development/learning-list.zip?url";
import {
  initialGit,
  transition,
  headOf,
  type GitAction,
} from "../../../../packages/content/ai-development/lib/git-lab.mjs";
import "./ai-development-preview.css";
type Choice = {
  question: string;
  choices: string[];
  correctIndex: number;
  feedback: string[];
};
type Question = {
  problem: string;
  hint: string;
  answer: string;
  solution: string[];
};
type Lesson = {
  promptTemplate?: PromptFields;
  id: string;
  number: string;
  chapterId: string;
  title: string;
  subtitle: string;
  concept: string;
  intuition: string;
  objectives: string[];
  body: { title: string; text: string }[];
  formalDefinition: { text: string; conditions: string[] };
  workflow: string[];
  workedExamples: {
    title: string;
    problem: string;
    steps: string[];
    answer: string;
    code?: string;
  }[];
  commonMistakes: { claim: string; correction: string }[];
  practice: (Question & { id: string; difficulty: number })[];
  learningCheck: Choice;
  interactiveVisual: {
    kind: "decision" | "git" | "prompt";
    prediction: string;
    steps: Choice[];
    followUp: string;
  };
  prerequisites: string[];
  sources: string[];
};
const files = import.meta.glob<Lesson>(
  "../../../../packages/content/ai-development/lessons/*.json",
  { eager: true, import: "default" },
);
const lessons = book.chapters.flatMap((c) =>
  c.lessons.map(
    (id) => files[`../../../../packages/content/ai-development/lessons/${id}.json`],
  ),
);
const href = (path = "") => "#/book/ai-development" + (path ? "/" + path : "");
const READ_KEY = "au-ai-development-reading-v1";
function savedRead(): string[] {
  try {
    const v: unknown = JSON.parse(localStorage.getItem(READ_KEY) || "[]");
    return Array.isArray(v)
      ? v.filter(
          (x): x is string =>
            typeof x === "string" && lessons.some((l) => l.id === x),
        )
      : [];
  } catch {
    return [];
  }
}
function downloadText(name: string, content: string) {
  const url = URL.createObjectURL(
    new Blob([content], { type: "text/plain;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function CopyText({ text }: { text: string }) {
  const [status, setStatus] = useState("");
  return (
    <>
      <button
        className="ad-copy"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setStatus("已复制");
          } catch {
            setStatus("复制失败，请手动选择文字");
          }
        }}
      >
        <Copy size={15} />
        {localizeNode(status === "已复制" ? "已复制" : "复制")}
      </button>
      {localizeNode(status && <small role="status">{localizeNode(status)}</small>)}
    </>
  );
}
function Code({ text, label = "参考结果", raw = false }: { text: string; label?: string; raw?: boolean }) {
  const display = raw ? text : tr(text);
  return (
    <div className="ad-code">
      <div className="ad-code-top">
        <span>{localizeNode(label)}</span>
        <CopyText text={display} />
      </div>
      <pre tabIndex={0}>
        <code>{display}</code>
      </pre>
    </div>
  );
}
function QuestionChoice({
  item,
  onPick,
}: {
  item: Choice;
  onPick?: (index: number) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div className="ad-choice">
      <h3>{localizeNode(item.question)}</h3>
      <div className="ad-options">
        {localizeNode(item.choices.map((text, i) => (
          <button
            key={i}
            aria-pressed={picked === i}
            className={
              picked === i
                ? i === item.correctIndex
                  ? "correct"
                  : "retry"
                : ""
            }
            onClick={() => {
              setPicked(i);
              onPick?.(i);
            }}
          >
            <span>{localizeNode("ABC"[i])}</span>
            {localizeNode(text)}
          </button>
        )))}
      </div>
      {localizeNode(picked !== null && (
        <p
          role="status"
          className={
            "ad-feedback " +
            (picked === item.correctIndex ? "correct" : "retry")
          }
        >
          <strong>
            {localizeNode(picked === item.correctIndex ? "选择正确" : "再想一步")}。
          </strong>
          {localizeNode(item.feedback[picked])}
        </p>
      ))}
    </div>
  );
}
function Scenario({ lesson }: { lesson: Lesson }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const items = lesson.interactiveVisual.steps;
  return (
    <section className="ad-panel ad-scenario">
      <p className="ad-eyebrow">{tr("情境练习")}</p>
      <h2>{tr("你会怎么处理？")}</h2>
      <p>{localizeNode(lesson.interactiveVisual.prediction)}</p>
      <div
        className="ad-step-dots"
        aria-label={tr(`情境 ${step + 1} / ${items.length}`)}
      >
        {localizeNode(items.map((_, i) => (
          <span key={i} className={i <= step ? "active" : ""}>
            {localizeNode(i + 1)}
          </span>
        )))}
      </div>
      {localizeNode(!done ? (
        <>
          <QuestionChoice key={step} item={items[step]} onPick={setSelected} />
          <div className="ad-actions">
            <button
              className="ad-primary"
              disabled={selected !== items[step].correctIndex}
              onClick={() => {
                if (step === items.length - 1) setDone(true);
                else {
                  setStep(step + 1);
                  setSelected(null);
                }
              }}
            >
              {localizeNode(step === items.length - 1 ? "完成情境" : "下一步")}
              <ArrowRight size={16} />
            </button>
            <span>{tr("选择后读反馈；答对即可继续。")}</span>
          </div>
        </>
      ) : (
        <div className="ad-complete" role="status">
          <Check size={24} />
          <h3>{tr("三个判断都走通了")}</h3>
          <p>{localizeNode(lesson.interactiveVisual.followUp)}</p>
        </div>
      ))}
      <button
        className="ad-text-button"
        onClick={() => {
          setStep(0);
          setSelected(null);
          setDone(false);
        }}
      >{tr("重新练习情境")}</button>
    </section>
  );
}
const gitActions: { id: GitAction; label: string; command: string }[] = [
  { id: "edit", label: "编辑成下一版", command: "在编辑器保存 README.md" },
  { id: "add", label: "暂存这个文件", command: "git add README.md" },
  { id: "commit", label: "提交暂存内容", command: 'git commit -m "记录修改"' },
  {
    id: "unstage",
    label: "取消暂存",
    command: "git restore --staged README.md",
  },
  { id: "restore", label: "丢弃未暂存编辑", command: "git restore README.md" },
  { id: "branch", label: "新建 feature", command: "git switch -c feature" },
  { id: "main", label: "切到 main", command: "git switch main" },
  { id: "feature", label: "切到 feature", command: "git switch feature" },
  { id: "push", label: "模拟推送", command: "git push" },
  { id: "revert", label: "撤销当前普通提交", command: "git revert HEAD" },
];
function Diff({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  return (
    <div className="ad-diff">
      <h4>{localizeNode(label)}</h4>
      {localizeNode(before === after ? (
        <p>{tr("没有差异")}</p>
      ) : (
        <pre>
          <span className="minus">− {localizeNode(before.trimEnd())}</span>
          {localizeNode("\n")}
          <span className="plus">+ {localizeNode(after.trimEnd())}</span>
        </pre>
      ))}
    </div>
  );
}
function GitLab() {
  const [state, setState] = useState(initialGit);
  const head = headOf(state);
  const [history, setHistory] = useState<string[]>([]);
  return (
    <section className="ad-panel ad-git">
      <div className="ad-section-heading">
        <div>
          <p className="ad-eyebrow">{tr("单文件 Git 练习台")}</p>
          <h2>{tr("同一个文件，三个位置")}</h2>
        </div>
        <GitBranch size={30} />
      </div>
      <p>{tr("先试：编辑 → 暂存 → 再编辑 → 提交。预测提交会保存哪一版，再观察。")}</p>
      <p className="ad-lab-note">{tr("纯本地教学模型，按钮不执行系统命令。初始 main 已提交并推送；只模拟单文件的指定操作。练习中切分支要求干净状态；真实 Git 有时允许携带改动。网络、认证、冲突和未跟踪文件不在此模型中。")}</p>
      <div className="ad-git-state">
        <div>
          <span>{tr("工作区")}</span>
          <p>{tr("现在文件中的内容")}</p>
          <pre>{localizeNode(state.work)}</pre>
        </div>
        <div>
          <span>{tr("暂存区")}</span>
          <p>{tr("下次提交的内容")}</p>
          <pre>{localizeNode(state.index)}</pre>
        </div>
        <div>
          <span>HEAD · {localizeNode(head.id)}</span>
          <p>{tr("当前分支最新提交")}</p>
          <pre>{localizeNode(head.content)}</pre>
        </div>
      </div>
      <div className="ad-git-buttons">
        {localizeNode(gitActions.map((a) => (
          <button
            key={a.id}
            onClick={() => {
              setState((s) => transition(s, a.id));
              setHistory((h) => [a.command, ...h].slice(0, 8));
            }}
          >
            <strong>{localizeNode(a.label)}</strong>
            <code>{localizeNode(a.command)}</code>
          </button>
        )))}
      </div>
      <p role="status" className="ad-git-note">
        {localizeNode(state.note)}
      </p>
      <div className="ad-diffs">
        <Diff
          before={state.index}
          after={state.work}
          label={tr("git diff · 暂存 → 工作区")}
        />
        <Diff
          before={head.content}
          after={state.index}
          label={tr("git diff --staged · HEAD → 暂存")}
        />
      </div>
      <div className="ad-git-locations">
        <div>
          <h4>{tr("本地分支 · 当前")}{localizeNode(state.branch)}</h4>
          {localizeNode(Object.entries(state.branches).map(([branch, id]) => (
            <p key={branch}>
              <code>{localizeNode(branch)}</code>
              <span>→ {localizeNode(id)}</span>
            </p>
          )))}
        </div>
        <div>
          <h4>{tr("模拟远端 · 尚不代表 PR 或上线")}</h4>
          {localizeNode(Object.entries(state.remote).map(([branch, id]) => (
            <p key={branch}>
              <code>origin/{localizeNode(branch)}</code>
              <span>→ {localizeNode(id)}</span>
            </p>
          )))}
        </div>
      </div>
      <details>
        <summary>{tr("查看提交与刚才的操作")}</summary>
        <ol>
          {localizeNode([...state.commits].reverse().map((c) => (
            <li key={c.id}>
              <code>{localizeNode(c.id)}</code> {localizeNode(c.message)}{tr("· 父提交")}{localizeNode(c.parent || "无")}
            </li>
          )))}
        </ol>
        <ul>
          {localizeNode(history.map((h, i) => (
            <li key={i}>
              <code>{localizeNode(h)}</code>
            </li>
          )))}
        </ul>
      </details>
      <button
        className="ad-secondary"
        onClick={() => {
          setState(initialGit());
          setHistory([]);
        }}
      >{tr("重置 Git 练习")}</button>
    </section>
  );
}
const fields = [
  ["goal", "本次目标", "哪一个具体行为需要改变？"],
  ["context", "项目事实", "相关文件、当前行为、错误和运行方式。"],
  ["scope", "范围与边界", "可以改什么？哪些方向变化需要先确认？"],
  ["acceptance", "验收标准", "具体输入、操作和预期；加入边界或失败案例。"],
  ["verification", "验证方法", "哪些命令和页面操作？未执行要如实说明。"],
  ["delivery", "交付要求", "改动说明、真实结果、限制与未验证项。"],
] as const;
type PromptFields = Record<(typeof fields)[number][0], string>;
const emptyFields: PromptFields = {
  goal: "",
  context: "",
  scope: "",
  acceptance: "",
  verification: "",
  delivery: "",
};
function PromptLab({ lesson }: { lesson: Lesson }) {
  const [values, setValues] = useState<PromptFields>({ ...emptyFields });
  const prompt = fields
    .map(
      ([key, label]) =>
        `${locale === "en" ? "[" : "【"}${tr(label)}${locale === "en" ? "]" : "】"}\n${values[key].trim() || tr("（请填写具体内容）")}`,
    )
    .join("\n\n");
  const missing = fields.filter(([key]) => !values[key].trim());
  return (
    <section className="ad-panel ad-prompt">
      <p className="ad-eyebrow">{tr("任务卡练习台")}</p>
      <h2>{tr("把你的想法整理成一次可检查的任务")}</h2>
      <p>{tr("你写内容，练习台只整理结构。栏目齐全不等于提示词正确；不会调用 AI 或自动评价语义。")}</p>
      <div className="ad-actions">
        <button
          className="ad-secondary"
          onClick={() =>
            setValues({ ...(lesson.promptTemplate || emptyFields) })
          }
        >{tr("填入本节示例")}</button>
        <button
          className="ad-text-button"
          onClick={() => setValues({ ...emptyFields })}
        >{tr("清空任务卡")}</button>
      </div>
      <div className="ad-prompt-grid">
        <div>
          {localizeNode(fields.map(([key, label, placeholder]) => (
            <label key={key} className="ad-field">
              {localizeNode(label)}
              <textarea
                aria-label={tr(label)}
                rows={3}
                value={values[key]}
                placeholder={tr(placeholder)}
                onChange={(e) =>
                  setValues({ ...values, [key]: e.target.value })
                }
              />
            </label>
          )))}
        </div>
        <div className="ad-prompt-output">
          <h3>{tr("你的任务卡")}</h3>
          <p role="status" className="ad-lab-note">
            {localizeNode(missing.length
              ? "还没填写：" + missing.map((f) => tr(f[1])).join(locale === "en" ? ", " : "、")
              : "六栏已填写。请继续核对事实、范围与验收是否一致。")}
          </p>
          <Code text={prompt} raw label={tr("可复制文本")} />
          <h4>{tr("复制前自己检查")}</h4>
          <ul>
            <li>{tr("每个“事实”有文件或观察支持吗？")}</li>
            <li>{tr("验收能用具体操作判断吗？")}</li>
            <li>{tr("任务是否悄悄扩大？")}</li>
            <li>{tr("有没有真实秘密或私人数据？")}</li>
          </ul>
          <p className="ad-muted">{tr("内容仅留在本次页面状态，刷新或切换章节后不保留。")}</p>
        </div>
      </div>
    </section>
  );
}
function Example({
  item,
  index,
}: {
  item: Lesson["workedExamples"][number];
  index: number;
}) {
  return (
    <article className="ad-example">
      <p className="ad-eyebrow">{tr(`例题 ${index + 1}`)}{tr("· 跟着做")}</p>
      <h3>{localizeNode(item.title)}</h3>
      <p>{localizeNode(item.problem)}</p>
      <ol>
        {localizeNode(item.steps.map((s, i) => (
          <li key={i}>{localizeNode(s)}</li>
        )))}
      </ol>
      <>
        {localizeNode(item.code && <Code text={tr(item.code)} label={tr("练习命令")} />)}
        <p className="ad-answer">
          {localizeNode(item.answer.split("\n").map((line, i) => (
            <span key={i}>
              {localizeNode(line)}
              <br />
            </span>
          )))}
        </p>
        {localizeNode(!item.code && item.answer.includes("\n") && (
          <CopyText text={tr(item.answer)} />
        ))}
      </>
    </article>
  );
}
function Solution({ question }: { question: Question }) {
  return (
    <>
      <ol>
        {localizeNode(question.solution.map((s, i) => (
          <li key={i}>{localizeNode(s)}</li>
        )))}
      </ol>
      <p className="ad-answer">{localizeNode(question.answer)}</p>
    </>
  );
}
function Practice({ lesson }: { lesson: Lesson }) {
  return (
    <>
      <div className="ad-page-heading">
        <p className="ad-eyebrow">{localizeNode(lesson.number)}{tr("· 独立练习")}</p>
        <h1>{tr("先写你的判断，再对照解答")}</h1>
        <p>{tr("自由文字不自动评分，也不保存。比较解法时，请说明自己的选择为什么符合场景。")}</p>
      </div>
      {localizeNode(lesson.practice.map((q, i) => (
        <article className="ad-panel ad-practice" key={q.id}>
          <p className="ad-eyebrow">{tr("练习")}{localizeNode(i + 1)}{tr("· 难度")}{localizeNode(q.difficulty)}/6
          </p>
          <h2>{localizeNode(q.problem)}</h2>
          <label className="ad-field">{tr("你的回答")}<textarea rows={3} placeholder={tr("写下操作、预期和理由。")} />
          </label>
          <details>
            <summary>{tr("看一个提示")}</summary>
            <p>{localizeNode(q.hint)}</p>
          </details>
          <details>
            <summary>{tr("对照完整解答")}</summary>
            <Solution question={q} />
          </details>
        </article>
      )))}
    </>
  );
}
function Reading({ lesson }: { lesson: Lesson }) {
  return (
    <>
      <div className="ad-concept">
        <BookOpen size={23} />
        <div>
          <strong>{tr("这一节解决什么")}</strong>
          <p>{localizeNode(lesson.concept)}</p>
        </div>
      </div>
      <p className="ad-intuition">{localizeNode(lesson.intuition)}</p>
      <section className="ad-prose">
        <h2>{localizeNode(lesson.body[0].title)}</h2>
        <p>{localizeNode(lesson.body[0].text)}</p>
      </section>
      <Example item={lesson.workedExamples[0]} index={0} />
      {localizeNode(lesson.body.slice(1).map((p) => (
        <section className="ad-prose" key={p.title}>
          <h2>{localizeNode(p.title)}</h2>
          <p>{localizeNode(p.text)}</p>
        </section>
      )))}
      <section className="ad-panel ad-workflow">
        <p className="ad-eyebrow">{tr("一步步做")}</p>
        <ol>
          {localizeNode(lesson.workflow.map((s, i) => (
            <li key={i}>
              <span>{localizeNode(i + 1)}</span>
              {localizeNode(s)}
            </li>
          )))}
        </ol>
      </section>
      <QuestionChoice item={lesson.learningCheck} />
      <Example item={lesson.workedExamples[1]} index={1} />
      <section className="ad-mistakes">
        <h2>{tr("容易想错的两件事")}</h2>
        {localizeNode(lesson.commonMistakes.map((m) => (
          <article key={m.claim}>
            <h3>{localizeNode(m.claim)}</h3>
            <p>{localizeNode(m.correction)}</p>
          </article>
        )))}
      </section>
      <details className="ad-source">
        <summary>{tr("适用范围与来源")}</summary>
        <p>{localizeNode(lesson.formalDefinition.text)}</p>
        <ul>
          {localizeNode(lesson.formalDefinition.conditions.map((c) => (
            <li key={c}>{localizeNode(c)}</li>
          )))}
        </ul>
        <ul>
          {localizeNode(lesson.sources.map((id) => {
            const s = book.sources.find((s) => s.id === id)!;
            return (
              <li key={id}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {localizeNode(s.title)}
                </a>
                <p>{localizeNode(s.purpose)}</p>
              </li>
            );
          }))}
        </ul>
      </details>
      <div className="ad-next-box">
        <h3>{tr("读懂之后，做一次判断")}</h3>
        <p>{localizeNode(lesson.interactiveVisual.prediction)}</p>
        <a className="ad-primary" href={href(lesson.id + "/experiment")}>{tr("开始互动练习")}<ArrowRight size={17} />
        </a>
      </div>
    </>
  );
}
function Home({ read }: { read: string[] }) {
  return (
    <>
      <section className="ad-hero">
        <div>
          <p className="ad-eyebrow">{tr("AI University · 开放教科书")}</p>
          <h1>{tr("带着 AI")}<br />{tr("做项目")}<span>{tr("让想法有方向，")}<br />{tr("让结果有依据。")}</span>
          </h1>
          <p>{tr("从“帮我做一个……”开始，学会说清需求、看懂项目、管理版本、验证改动。AI 可以帮你写代码，你来掌握方向。")}</p>
          <div className="ad-actions">
            <a className="ad-primary" href={href(lessons[0].id)}>{tr("从第一节开始")}<ArrowRight size={17} />
            </a>
            <a className="ad-secondary" href={href("project")}>{tr("看看贯穿项目")}</a>
          </div>
          <div className="ad-hero-stats">
            <span>
              <strong>6</strong>{tr("章学习路线")}</span>
            <span>
              <strong>18</strong>{tr("节完整内容")}</span>
            <span>
              <strong>1</strong>{tr("个贯穿项目")}</span>
          </div>
        </div>
        <div className="ad-notebook" aria-label={tr("开发一轮的过程")}>
          <p>{tr("我的项目笔记")}<span>01</span>
          </p>
          <h2>{tr("今天先做一件")}<br />{tr("可以检查的事。")}</h2>
          <ol>
            {localizeNode([
              "写清谁遇到什么问题",
              "定下首版与验收",
              "给 Agent 一个小任务",
              "看差异，亲自验证",
              "记录版本，让人接手",
            ].map((t, i) => (
              <li key={t}>
                <span>{localizeNode(i + 1)}</span>
                {localizeNode(t)}
              </li>
            )))}
          </ol>
          <div className="ad-notebook-note">{tr("想法 → 决定 → 证据 → 交付")}</div>
        </div>
      </section>
      <section className="ad-intro-grid">
        <article>
          <h2>{tr("给谁写的")}</h2>
          <p>{localizeNode(book.audience)}</p>
        </article>
        <article>
          <h2>{tr("怎样学")}</h2>
          <p>{tr("用“学习清单”走完整个开发过程。先判断，再看反馈；先写自己的回答，再对照解法。没有强制先修的编程课程。")}</p>
        </article>
        <article>
          <h2>{tr("学完能做什么")}</h2>
          <p>{tr("能带着一页计划和一组验收，让 AI 小步实现项目，并自己判断结果、解释限制与交付。")}</p>
        </article>
      </section>
      <div className="ad-section-heading">
        <div>
          <p className="ad-eyebrow">{tr("按顺序，搭起自己的框架")}</p>
          <h2>{tr("六章，走完一轮开发")}</h2>
        </div>
        <p className="ad-muted">{tr("已标记读懂")}{localizeNode(read.length)}{tr("/ 18 节")}</p>
      </div>
      <section className="ad-chapters">
        {localizeNode(book.chapters.map((c, i) => (
          <article key={c.id}>
            <span className="ad-chapter-number">0{localizeNode(i + 1)}</span>
            <h3>{localizeNode(c.title)}</h3>
            <p>{localizeNode(c.objective)}</p>
            <ul>
              {localizeNode(c.lessons.map((id) => {
                const l = lessons.find((l) => l.id === id)!;
                return (
                  <li key={id}>
                    <a href={href(id)}>
                      <span>{localizeNode(l.number)}</span>
                      {localizeNode(l.title)}
                      {localizeNode(read.includes(id) ? (
                        <Check size={14} />
                      ) : (
                        <ArrowRight size={14} />
                      ))}
                    </a>
                  </li>
                );
              }))}
            </ul>
          </article>
        )))}
      </section>
      <section className="ad-tools">
        <h2>{tr("在教材里，亲手试一试")}</h2>
        <div>
          <a href={href("git-snapshot/experiment")}>
            <GitBranch />
            <strong>{tr("Git 练习台")}</strong>
            <p>{tr("比较工作区、暂存与提交，观察分支和推送。")}</p>
          </a>
          <a href={href("task-prompts/experiment")}>
            <Sparkles />
            <strong>{tr("任务卡练习台")}</strong>
            <p>{tr("把模糊想法整理成明确目标、范围和验收。")}</p>
          </a>
          <a href={href("project")}>
            <BookOpen />
            <strong>{tr("可运行的学习清单")}</strong>
            <p>{tr("下载源码，按说明运行，再对照完整开发过程。")}</p>
          </a>
        </div>
      </section>
      <details className="ad-source">
        <summary>{tr("完整课程边界、来源与生成说明")}</summary>
        <p>{localizeNode(book.baseline)}</p>
        <ul>
          {localizeNode(book.outOfScope.map((s) => (
            <li key={s}>{localizeNode(s)}</li>
          )))}
        </ul>
        <p>{tr("AI 生成，尚未人工审校。本文、例题和练习为原创，内容 CC0-1.0，工具与项目 MIT。")}</p>
        {localizeNode(book.sources.map((s) => (
          <p key={s.id}>
            <a href={s.url} target="_blank" rel="noreferrer">
              {localizeNode(s.title)}
            </a>
            ：{localizeNode(s.purpose)}
          </p>
        )))}
      </details>
    </>
  );
}
function ProjectPage() {
  return (
    <>
      <div className="ad-page-heading">
        <p className="ad-eyebrow">{tr("贯穿项目 · 从需求到交付")}</p>
        <h1>{tr("我的学习清单")}</h1>
        <p>{tr("一个无需第三方依赖的个人小网站。添加计划、勾选完成、删除，本地保存、备份和恢复。")}</p>
        <a
          className="ad-primary"
          href={projectZip}
          download="learning-list.zip"
        >
          <Download size={17} />{tr("下载完整项目 ZIP")}</a>
      </div>
      <section className="ad-panel">
        <h2>{tr("下载后，按这四步运行")}</h2>
        <ol>
          <li>{tr("安装 Node.js 22.12+；解压 ZIP，在编辑器打开 learning-list 文件夹。")}</li>
          <li>{tr("打开此文件夹的终端，先运行下面的版本检查和测试。")}</li>
          <li>{tr("运行 npm start，保持终端打开，然后浏览器访问 http://127.0.0.1:5180。")}</li>
          <li>{tr("试普通输入、全空格、重复标题、刷新和备份恢复。Ctrl+C 停止服务器。")}</li>
        </ol>
        <Code
          text={tr("node --version\nnpm test\nnpm start")}
          label={tr("在 learning-list 目录执行")}
        />
        <p className="ad-lab-note">{tr("数据属于当前浏览器与源，不自动同步。它是学习项目，没有多人并发协调；不用于敏感或重要业务数据。恢复会替换当前清单，先下载备份。")}</p>
      </section>
      <section className="ad-panel">
        <h2>{tr("一条数据怎样走")}</h2>
        <div className="ad-flow">
          {localizeNode(["输入框", "事件处理", "数据校验", "本地保存", "页面显示"].map(
            (s, i) => (
              <div key={s}>
                <span>{localizeNode(i + 1)}</span>
                <strong>{localizeNode(s)}</strong>
                {localizeNode(i < 4 && <ArrowRight size={17} />)}
              </div>
            ),
          ))}
        </div>
        <p>{tr("app.mjs 连接输入、保存与显示；tasks.mjs 管规则；server.mjs 只提供静态文件。")}</p>
        <Code
          text={
            tr('{\n  "version": 1,\n  "tasks": [\n    {"id": "a", "title": "练习 Git", "done": false}\n  ]\n}')
          }
          label={tr("备份的数据形状")}
        />
      </section>
      {localizeNode(supplements.projectPlan.map((p) => (
        <section className="ad-panel" key={p.title}>
          <h2>{localizeNode(p.title)}</h2>
          <p>{localizeNode(p.task)}</p>
          <h3>{tr("交付证据")}</h3>
          <ul>
            {localizeNode(p.evidence.map((e) => (
              <li key={e}>{localizeNode(e)}</li>
            )))}
          </ul>
        </section>
      )))}
      <section className="ad-panel">
        <h2>{tr("对照完整源码")}</h2>
        <p>{tr("下载包、网页源码与书稿附录来自同一份项目文件。")}</p>
        {localizeNode(project.map((f) => (
          <details key={f.name}>
            <summary>{localizeNode(f.name)}</summary>
            <Code text={tr(f.content)} label={tr(f.name)} />
            <button
              className="ad-secondary"
              onClick={() => downloadText(f.name, f.content)}
            >{tr("下载此文件")}</button>
          </details>
        )))}
      </section>
    </>
  );
}
function ReviewPage() {
  return (
    <>
      <div className="ad-page-heading">
        <p className="ad-eyebrow">{tr("回顾与综合实作")}</p>
        <h1>{tr("用自己的话，再走一遍")}</h1>
        <p>{tr("先遮住解答。试着把步骤、判断和证据讲给另一人听。")}</p>
      </div>
      {localizeNode(supplements.chapterReviews.map((r, i) => (
        <section className="ad-panel" key={r.chapterId}>
          <h2>{tr(`第 ${i + 1} 章`)} · {localizeNode(book.chapters[i].title)}
          </h2>
          {localizeNode(r.questions.map((q, j) => (
            <article className="ad-review-question" key={j}>
              <h3>{localizeNode(q.problem)}</h3>
              <details>
                <summary>{tr("看提示")}</summary>
                <p>{localizeNode(q.hint)}</p>
              </details>
              <details>
                <summary>{tr("对照解答")}</summary>
                <Solution question={q} />
              </details>
            </article>
          )))}
        </section>
      )))}
      <section className="ad-panel">
        <h2>{tr("综合实作与判断")}</h2>
        {localizeNode(supplements.exam.map((q, i) => (
          <article className="ad-review-question" key={i}>
            <h3>{localizeNode(q.problem)}</h3>
            <details>
              <summary>{tr("看提示与完整解答")}</summary>
              <p>{localizeNode(q.hint)}</p>
              <Solution question={q} />
            </details>
          </article>
        )))}
      </section>
    </>
  );
}
export default function AIDevelopmentPreview({ path }: { path: string }) {
  const parts = path.split("/").slice(1);
  const id = parts[0] || "";
  const view = parts[1] || "read";
  const lesson = lessons.find((l) => l.id === id);
  const index = lesson ? lessons.indexOf(lesson) : -1;
  const [read, setRead] = useState(savedRead);
  const [storageOk, setStorageOk] = useState(true);
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => setMenu(false), [path]);
  useEffect(() => {
    if (!menu) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        menuRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menu]);
  function mark(id: string) {
    const next = read.includes(id)
      ? read.filter((x) => x !== id)
      : [...read, id];
    setRead(next);
    try {
      localStorage.setItem(READ_KEY, JSON.stringify(next));
      setStorageOk(true);
    } catch {
      setStorageOk(false);
    }
  }
  const valid =
    !id || ["project", "review", "glossary"].includes(id)
      ? parts.length <= 1
      : !!lesson &&
        parts.length <= 2 &&
        ["read", "experiment", "practice"].includes(view);
  return (
    <div className="ad-app">
      <a
        className="ad-skip"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >{tr("跳到正文")}</a>
      <header className="ad-header">
        <a href="#/home" className="ad-brand">
          <span>
            Au<span>•</span>
          </span>
          <div>
            AI University
            <small>{tr("开放教科书计划 · 其他")}</small>
          </div>
        </a>
        <nav aria-label={tr("教材导航")}>
          <a href="#/downloads?book=ai-development">{tr("下载与打印")}</a>
          <a href="#/library?category=other">{tr("教科书库")}</a>
          <a href={href()}>{tr("本书目录")}</a>
          <a href={href("project")}>{tr("贯穿项目")}</a>
          <a href={href("review")}>{tr("回顾与实作")}</a>
          <button
            className="ad-download"
            onClick={() =>
              downloadText("AI-Assisted-Development.md", manuscript)
            }
          >
            <Download size={15} />
            <span>{tr("整本书稿")}</span>
          </button>
        </nav>
      </header>
      {localizeNode(id && (
        <div className="ad-mobile-bar">
          <button
            ref={menuRef}
            aria-expanded={menu}
            aria-controls="ad-directory"
            onClick={() => setMenu(!menu)}
          >
            {localizeNode(menu ? <X size={16} /> : <List size={16} />)}{tr("教材目录")}</button>
          <a href={href()}>{tr("教材主页")}</a>
        </div>
      ))}
      <div className={"ad-shell " + (id ? "ad-reader" : "ad-home")}>
        {localizeNode(id && (
          <aside
            id="ad-directory"
            className={"ad-sidebar " + (menu ? "open" : "")}
          >
            <a className="ad-back" href={href()}>
              <ArrowLeft size={14} />{tr("教材主页")}</a>
            <p className="ad-eyebrow">{tr("从想法到交付")}</p>
            {localizeNode(book.chapters.map((c, i) => (
              <section key={c.id}>
                <h2>
                  {localizeNode(i + 1)}. {localizeNode(c.title)}
                </h2>
                {localizeNode(c.lessons.map((id) => {
                  const l = lessons.find((l) => l.id === id)!;
                  return (
                    <a
                      key={id}
                      href={href(id)}
                      aria-current={lesson?.id === id ? "page" : undefined}
                    >
                      <span>{localizeNode(l.number)}</span>
                      {localizeNode(l.title)}
                      {localizeNode(read.includes(id) && <Check size={12} />)}
                    </a>
                  );
                }))}
              </section>
            )))}
            <a href={href("project")}>{tr("贯穿项目与源码")}</a>
            <a href={href("review")}>{tr("回顾与综合实作")}</a>
            <a href={href("glossary")}>{tr("术语索引")}</a>
          </aside>
        ))}
        <main id="main" tabIndex={-1}>
          {localizeNode(!valid ? (
            <div className="ad-panel">
              <h1>{tr("没有这一页")}</h1>
              <a href={href()}>{tr("返回教材主页")}</a>
            </div>
          ) : !id ? (
            <Home read={read} />
          ) : lesson ? (
            <div key={lesson.id}>
              {localizeNode(view !== "practice" && (
                <div className="ad-page-heading">
                  <p className="ad-eyebrow">{tr(`第 ${lesson.number.split(".")[0]} 章`)} · {localizeNode(lesson.number)}
                  </p>
                  <h1>{localizeNode(lesson.title)}</h1>
                  <p>{localizeNode(lesson.subtitle)}</p>
                  {localizeNode(lesson.prerequisites.length > 0 && (
                    <small>{tr("先修：")}{localizeNode(lesson.prerequisites.map((p) => {
                        const l = lessons.find((l) => l.id === p)!;
                        return (
                          <a key={p} href={href(p)}>
                            {localizeNode(l.number)} {localizeNode(l.title)}
                          </a>
                        );
                      }))}
                    </small>
                  ))}
                </div>
              ))}
              <nav className="ad-tabs" aria-label={tr("本节学习方式")}>
                {localizeNode([
                  ["read", "读与跟着做"],
                  ["experiment", "互动练习"],
                  ["practice", "独立练习"],
                ].map(([v, label]) => (
                  <a
                    key={v}
                    href={href(lesson.id + (v === "read" ? "" : "/" + v))}
                    aria-current={view === v ? "page" : undefined}
                  >
                    {localizeNode(label)}
                  </a>
                )))}
              </nav>
              {localizeNode(view === "read" ? (
                <Reading key={path} lesson={lesson} />
              ) : view === "experiment" ? (
                <div key={path}>
                  <Scenario lesson={lesson} />
                  {localizeNode(lesson.interactiveVisual.kind === "git" && <GitLab />)}
                  {localizeNode(lesson.interactiveVisual.kind === "prompt" && (
                    <PromptLab lesson={lesson} />
                  ))}
                  <div className="ad-next-box">
                    <h3>{tr("把理由写成自己的话")}</h3>
                    <p>{localizeNode(lesson.interactiveVisual.followUp)}</p>
                    <a
                      className="ad-primary"
                      href={href(lesson.id + "/practice")}
                    >{tr("做四道独立练习")}<ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ) : (
                <Practice key={path} lesson={lesson} />
              ))}
              <section className="ad-read-record">
                <button
                  className={
                    read.includes(lesson.id) ? "ad-secondary" : "ad-primary"
                  }
                  onClick={() => mark(lesson.id)}
                >
                  <Check size={16} />
                  {localizeNode(read.includes(lesson.id)
                    ? "已标记能解释 · 点击取消"
                    : "我能解释这一节")}
                </button>
                <p>{tr("这是你的阅读标记，保存在本机；不是自动能力评定。")}</p>
                {localizeNode(!storageOk && (
                  <p role="status">{tr("浏览器无法保存标记，当前阅读仍可继续。")}</p>
                ))}
              </section>
              <nav className="ad-pagination" aria-label={tr("上下节")}>
                {localizeNode(index > 0 ? (
                  <a href={href(lessons[index - 1].id)}>
                    <ArrowLeft size={16} />{tr("上一节")}<small>{localizeNode(lessons[index - 1].title)}</small>
                  </a>
                ) : (
                  <span />
                ))}
                {localizeNode(index < lessons.length - 1 ? (
                  <a href={href(lessons[index + 1].id)}>{tr("下一节")}<ArrowRight size={16} />
                    <small>{localizeNode(lessons[index + 1].title)}</small>
                  </a>
                ) : (
                  <a href={href("review")}>{tr("综合实作")}<ArrowRight size={16} />
                  </a>
                ))}
              </nav>
            </div>
          ) : id === "project" ? (
            <ProjectPage />
          ) : id === "review" ? (
            <ReviewPage />
          ) : (
            <>
              <div className="ad-page-heading">
                <p className="ad-eyebrow">{tr("随时回来查")}</p>
                <h1>{tr("术语索引")}</h1>
                <p>{tr("每个词都对应一个用途；不必先背完再开始。")}</p>
              </div>
              <dl className="ad-glossary">
                {localizeNode(supplements.glossary.map((g) => (
                  <div key={g.term}>
                    <dt>{localizeNode(g.term)}</dt>
                    <dd>{localizeNode(g.definition)}</dd>
                  </div>
                )))}
              </dl>
            </>
          ))}
        </main>
      </div>
      <footer className="ad-footer">
        <p>{tr("AI 编写 · 投稿贡献：aby0120 · 内容 CC0 / 代码 MIT")}</p>
        <nav>
          <a href="#/library">{tr("教科书库")}</a>
          <a href={href("glossary")}>{tr("术语索引")}</a>
          <a href={href()}>{tr("本书主页")}</a>
        </nav>
      </footer>
    </div>
  );
}
