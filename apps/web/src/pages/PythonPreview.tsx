import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCheck,
  ChevronDown,
  Code2,
  Copy,
  Download,
  List,
  Menu,
  Search,
  X,
} from "lucide-react";
import book from "../../../../drafts/python/book.json";
import replayData from "../../../../drafts/python/experiments.generated.json";
import supplements from "../../../../drafts/python/supplements.json";
import manuscript from "../../../../drafts/python/Python-Introduction.md?raw";
import "./python-preview.css";

type Snippet = { code: string; stdin: string; stdout: string };
type Question = {
  id: string;
  problem: string;
  hint: string;
  solution: string[];
  answer: Snippet;
};
type Lesson = {
  id: string;
  chapterId: string;
  number: string;
  title: string;
  concept: string;
  intuition: string;
  objectives: string[];
  body: { title: string; text: string }[];
  localSetup?: string[];
  furtherReading: { title: string; text: string }[];
  formalDefinition: { text: string; conditions: string[] };
  derivation: { text: string }[];
  learningCheck: {
    question: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
    feedback: string[];
  };
  interactiveVisual: {
    watch: string[];
    controls: {
      name: string;
      label: string;
      values: (string | number | number[])[];
      defaultIndex: number;
    }[];
    prediction: string;
    caption: string;
    experiment: Snippet;
    followUp: string;
  };
  workedExamples: {
    title: string;
    problem: string;
    steps: string[];
    answer: Snippet;
  }[];
  commonMistakes: { claim: string; correction: string }[];
  practice: Question[];
  prerequisites: string[];
  sources: string[];
};
const files = import.meta.glob<Lesson>(
  "../../../../drafts/python/lessons/*.json",
  { eager: true, import: "default" },
);
const lessons = book.chapters.flatMap((chapter) =>
  chapter.lessons.map((id) => {
    const lesson = files[`../../../../drafts/python/lessons/${id}.json`];
    if (!lesson) throw new Error(`Missing Python lesson: ${id}`);
    return lesson;
  }),
);
const href = (id = "") => `#/python${id ? "/" + id : ""}`;
const READ_KEY = "ai-university-python-draft-reading-v1";
function loadRead(): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(READ_KEY) || "[]");
    return Array.isArray(value)
      ? value.filter(
          (id): id is string =>
            typeof id === "string" && lessons.some((l) => l.id === id),
        )
      : [];
  } catch {
    return [];
  }
}
function Highlight({ code }: { code: string }) {
  // Highlight tokens only; React escapes all text. This is not an interpreter.
  const pattern =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[^\n]*|\b(?:def|return|if|elif|else|for|in|while|break|continue|import|from|as|try|except|raise|with|class|not|and|or|is|True|False|None)\b|\b\d+(?:\.\d+)?\b)/g;
  return (
    <>
      {code.split(pattern).map((part, i) => (
        <span
          key={i}
          className={
            part.startsWith("#")
              ? "py-token-comment"
              : /^["']/.test(part)
                ? "py-token-string"
                : /^\d/.test(part)
                  ? "py-token-number"
                  : /^(def|return|if|elif|else|for|in|while|break|continue|import|from|as|try|except|raise|with|class|not|and|or|is|True|False|None)$/.test(
                        part,
                      )
                    ? "py-token-keyword"
                    : undefined
          }
        >
          {part}
        </span>
      ))}
    </>
  );
}
function Code({ code, name = "Python" }: { code: string; name?: string }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setError(false);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      setError(true);
    }
  }
  return (
    <div className="py-code">
      <div className="py-code-header">
        <span>
          <Code2 size={14} />
          {name}
        </span>
        <button type="button" onClick={copy} aria-label="复制代码">
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "已复制" : "复制"}
        </button>
      </div>
      <pre tabIndex={0} aria-label={`${name} 代码`}>
        <code>
          <Highlight code={code.trimEnd()} />
        </code>
      </pre>
      {error && <p role="status">复制不可用，请选中代码手动复制。</p>}
    </div>
  );
}
function Output({ snippet }: { snippet: Snippet }) {
  return (
    <div className="py-output">
      {snippet.stdin && (
        <>
          <span className="py-output-label">本次标准输入</span>
          <pre>{snippet.stdin.trimEnd()}</pre>
        </>
      )}
      <span className="py-output-label">预期标准输出 · 已验证的固定结果</span>
      <pre>{snippet.stdout ? snippet.stdout.trimEnd() : "（无输出）"}</pre>
      {snippet.stdin && (
        <small>这里不回显输入文字；交互终端通常会显示你键入的内容。</small>
      )}
    </div>
  );
}
function Questions({
  items,
  label = "练习",
}: {
  items: Question[];
  label?: string;
}) {
  return (
    <div className="py-questions">
      {items.map((item, i) => (
        <article key={item.id} className="py-question">
          <div className="py-question-number">
            {label} {String(i + 1).padStart(2, "0")}
          </div>
          <h3>{item.problem}</h3>
          <details>
            <summary>
              查看提示
              <ChevronDown size={15} />
            </summary>
            <p>{item.hint}</p>
          </details>
          <details>
            <summary>
              展开完整解答
              <ChevronDown size={15} />
            </summary>
            <ol>
              {item.solution.map((step, j) => (
                <li key={j}>{step}</li>
              ))}
            </ol>
            <Code code={item.answer.code} />
            <Output snippet={item.answer} />
          </details>
        </article>
      ))}
    </div>
  );
}
function ConceptCheck({ value }: { value: Lesson["learningCheck"] }) {
  const [choice, setChoice] = useState<number | null>(null);
  return (
    <section className="py-check">
      <span className="py-eyebrow">CHECK YOUR UNDERSTANDING</span>
      <h3>{value.question}</h3>
      <div role="group" aria-label="概念检查选项">
        {value.choices.map((text, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={choice === i}
            className={choice === i ? "selected" : ""}
            onClick={() => setChoice(i)}
          >
            <span>{String.fromCharCode(65 + i)}</span>
            {text}
            {choice === i && <Check size={16} />}
          </button>
        ))}
      </div>
      {choice !== null && (
        <p role="status">
          <strong>
            {choice === value.correctIndex ? "答对了。" : "再检查一下。"}
          </strong>
          {value.feedback[choice]}
        </p>
      )}
    </section>
  );
}
type Replay = {
  code: string;
  stdout: string;
  steps: {
    line: number | null;
    scope: string;
    variables: Record<string, { value: string; type: string; scope: string }>;
    stdout: string;
  }[];
};
const replays = replayData.lessons as unknown as Record<
  string,
  Record<string, Replay>
>;
const typeLabels: Record<string, string> = {
  str: "文字",
  int: "整数",
  float: "小数",
  list: "列表",
  dict: "字典",
  tuple: "元组",
  set: "集合",
  bool: "判断结果",
  NoneType: "没有返回值",
};
function TraceExperiment({ lesson }: { lesson: Lesson }) {
  const visual = lesson.interactiveVisual;
  const [indices, setIndices] = useState(
    visual.controls.map((c) => c.defaultIndex),
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [prediction, setPrediction] = useState("");
  const [compared, setCompared] = useState(false);
  const replay = replays[lesson.id][indices.join(".")];
  const step = replay.steps[stepIndex];
  const done = step.line === null;
  const codeLines = replay.code.trimEnd().split("\n");
  const selected = visual.controls.map(
    (control, i) => control.values[indices[i]],
  );
  const changed = (i: number, index: number) => {
    setIndices((previous) => previous.map((v, j) => (j === i ? index : v)));
    setStepIndex(0);
    setCompared(false);
  };
  const candyReady =
    lesson.id === "numbers" &&
    "bags" in step.variables &&
    "left" in step.variables;
  const bags = Number(step.variables.bags?.value || 0);
  const left = Number(step.variables.left?.value || 0);
  const size = Number(selected[1]);
  const comparedText = prediction.trim().split(/\s+/).join(" ");
  const expectedText = replay.stdout.trim().split(/\s+/).join(" ");
  return (
    <section className="py-lab" aria-label={`${lesson.title}互动实验`}>
      <div className="py-section-heading">
        <span className="py-eyebrow">先预测 → 走一步 → 改一处</span>
        <h2>动手看看，会发生什么？</h2>
        <p>{visual.prediction}</p>
      </div>
      <div className="py-lab-controls">
        {visual.controls.map((control, i) => {
          const numeric =
            control.values.every((v) => typeof v === "number") &&
            control.values.length > 4;
          const id = `py-control-${lesson.id}-${control.name}`;
          return (
            <label key={control.name} htmlFor={id}>
              <span>
                {control.label}
                <strong>
                  {typeof selected[i] === "string"
                    ? selected[i] || "（空文字）"
                    : JSON.stringify(selected[i])}
                </strong>
              </span>
              {numeric ? (
                <input
                  id={id}
                  type="range"
                  min={0}
                  max={control.values.length - 1}
                  step={1}
                  value={indices[i]}
                  aria-valuetext={String(selected[i])}
                  onChange={(e) => changed(i, Number(e.target.value))}
                />
              ) : (
                <select
                  id={id}
                  value={indices[i]}
                  onChange={(e) => changed(i, Number(e.target.value))}
                >
                  {control.values.map((value, j) => (
                    <option key={j} value={j}>
                      {typeof value === "string"
                        ? value || "（空文字）"
                        : JSON.stringify(value)}
                    </option>
                  ))}
                </select>
              )}
            </label>
          );
        })}
      </div>
      <label className="py-predict-answer">
        <span>预测当前参数的全部输出（可选，多行用空格隔开）</span>
        <input
          value={prediction}
          onChange={(e) => {
            setPrediction(e.target.value);
            setCompared(false);
          }}
          placeholder="先想一想，再看结果"
        />
      </label>
      <div className="py-trace-grid">
        <div className="py-trace-code">
          <div className="py-trace-top">
            {done ? "已走完全部步骤" : `下一行：第 ${step.line} 行`}
          </div>
          <pre tabIndex={0} aria-label="逐行执行的代码">
            {codeLines.map((line, i) => (
              <span
                key={i}
                className={`py-code-line${step.line === i + 1 ? " current" : ""}`}
              >
                <span className="py-line-number">
                  {step.line === i + 1 ? "→" : i + 1}
                </span>
                <code>
                  <Highlight code={line || " "} />
                </code>
              </span>
            ))}
          </pre>
        </div>
        <div className="py-trace-state">
          <div className="py-trace-top">
            此刻的变量{" "}
            {step.scope !== "<module>" && (
              <small>正在函数 {step.scope} 中</small>
            )}
          </div>
          <div className="py-variable-list">
            {Object.entries(step.variables).length ? (
              Object.entries(step.variables).map(([name, value]) => (
                <div className="py-variable" key={name}>
                  <span>
                    <code>{name}</code>
                    <small>
                      {typeLabels[value.type] || value.type}
                      {value.scope !== "<module>" ? " · 函数内" : ""}
                    </small>
                  </span>
                  <code>{value.value}</code>
                </div>
              ))
            ) : (
              <p className="py-trace-empty">
                {!visual.watch.length
                  ? "这段代码直接显示文字，不使用变量。"
                  : "还没有给变量赋值。执行下一行后再观察。"}
              </p>
            )}
          </div>
          <div className="py-trace-output">
            <span>已经显示的内容</span>
            <pre aria-live="polite">{step.stdout || "（暂时没有输出）"}</pre>
          </div>
        </div>
      </div>
      <div className="py-trace-buttons">
        <button
          type="button"
          disabled={stepIndex === 0}
          onClick={() => setStepIndex((n) => n - 1)}
        >
          <ArrowLeft size={15} />
          上一步
        </button>
        <button
          type="button"
          className="py-primary"
          disabled={done}
          onClick={() => setStepIndex((n) => n + 1)}
        >
          下一步
          <ArrowRight size={15} />
        </button>
        <button
          type="button"
          onClick={() => {
            setStepIndex(0);
            setCompared(false);
          }}
        >
          重头观察
        </button>
        <button
          type="button"
          onClick={() => setStepIndex(replay.steps.length - 1)}
        >
          走到最后
        </button>
        <span aria-live="polite">
          {done ? "完成" : `观察 ${stepIndex + 1} / ${replay.steps.length}`}
        </span>
      </div>
      <p className="py-trace-help">
        箭头是下一行，还未执行。点“下一步”后，查看它带来的变化。改参数会从头开始。
      </p>
      {lesson.id === "numbers" && (
        <div className="py-candy-model">
          <strong>把糖果真的装一装</strong>
          {candyReady ? (
            <>
              <div
                className="py-candy-bags"
                aria-label={`${bags}袋，每袋${size}颗，剩余${left}颗`}
              >
                {Array.from({ length: bags }, (_, i) => (
                  <div className="py-candy-bag" key={i}>
                    <span>第 {i + 1} 袋</span>
                    <div>
                      {Array.from({ length: size }, (_, j) => (
                        <i key={j} />
                      ))}
                    </div>
                  </div>
                ))}
                <div className="py-candy-loose">
                  <span>剩余 {left} 颗</span>
                  <div>
                    {Array.from({ length: left }, (_, j) => (
                      <i key={j} />
                    ))}
                  </div>
                </div>
              </div>
              <p>
                {bags} 袋 × {size} 颗 + 剩余 {left} 颗 = {Number(selected[0])}{" "}
                颗。
                <br />
                {bags === 0
                  ? "还不够装满一袋，所以完整袋数是 0。"
                  : left === 0
                    ? "刚好全部装完，所以余数是 0。"
                    : "剩下的数量不够再装满一袋。"}
              </p>
            </>
          ) : (
            <p>先走到 bags 和 left 都算出来，再把它们和袋子图对应起来。</p>
          )}
        </div>
      )}
      {done && prediction.trim() && (
        <div className="py-compare">
          <button type="button" onClick={() => setCompared(true)}>
            核对我的预测
          </button>
          {compared && (
            <p role="status">
              {comparedText === expectedText
                ? "预测与输出一致。试着只改一个参数，再预测一次。"
                : "预测与输出不同。点“重头观察”，找出从哪一步开始与你想的不一样。"}
            </p>
          )}
        </div>
      )}
      <p className="py-followup">
        <strong>再试一次</strong> {visual.followUp}
      </p>
      <details className="py-lab-note">
        <summary>想在自己的 Python 中运行？</summary>
        <p>
          这里回放的是所选示例经 Python
          验证的执行过程。复制代码后，可以在本机自由修改并运行；网页只提供这些练习参数。
        </p>
        <Code code={replay.code} />
      </details>
    </section>
  );
}

function download() {
  const url = URL.createObjectURL(
    new Blob([manuscript], { type: "text/markdown;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "Python-Introduction.md";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function Home() {
  return (
    <>
      <div className="py-book-hero">
        <div>
          <span className="py-eyebrow">AI UNIVERSITY / PROGRAMMING 01</span>
          <h1>
            Python
            <br />
            编程入门<span>从第一行代码，到自己的程序。</span>
          </h1>
          <p>
            为零基础读者写的一本完整教材。用小步推导理解代码，用可复算的例子建立直觉，再把它们组合成一个能用的小工具。
          </p>
          <a className="py-primary" href={href(lessons[0].id)}>
            从第一节开始 <ArrowRight size={17} />
          </a>
          <div className="py-stats">
            <span>
              <strong>05</strong>章
            </span>
            <span>
              <strong>20</strong>节
            </span>
            <span>
              <strong>40</strong>例题
            </span>
            <span>
              <strong>94</strong>练习与回顾
            </span>
          </div>
        </div>
        <div className="py-hero-notebook">
          <div className="py-notebook-top">
            <span />
            <span />
            <span />
            <small>your_first_program.py</small>
          </div>
          <div className="py-notebook-content">
            <small># 学会把想法写成步骤</small>
            <pre>
              <Highlight
                code={'print("你好，未来的自己")\nprint("今天开始学 Python")'}
              />
            </pre>
            <div className="py-notebook-output">
              <span>OUTPUT</span>
              <p>
                你好，未来的自己
                <br />
                今天开始学 Python
              </p>
            </div>
          </div>
          <footer>
            <span>Python 3 · 纯标准库</span>
            <CheckCheck size={18} />
          </footer>
        </div>
      </div>
      <div className="py-home-body">
        <section>
          <div className="py-section-heading">
            <span className="py-eyebrow">THE LEARNING PATH</span>
            <h2>一步一步，写出能用的程序</h2>
            <p>
              先理解执行过程，再选择数据结构，最后完成一个有明确输入和输出的小项目。
            </p>
          </div>
          {book.chapters.map((chapter, i) => (
            <article className="py-chapter-row" key={chapter.id}>
              <span className="py-chapter-number">0{i + 1}</span>
              <div>
                <h3>{chapter.title}</h3>
                <p>{chapter.objective}</p>
                <div>
                  {chapter.lessons.map((id) => {
                    const l = lessons.find((l) => l.id === id)!;
                    return (
                      <a key={id} href={href(id)}>
                        {l.number} {l.title}
                        <ArrowRight size={14} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </section>
        <aside className="py-home-note">
          <BookOpen size={22} />
          <h3>这本书怎么学？</h3>
          <p>先预测，再运行。改一处输入，观察差异，最后独立做题。</p>
          <ul>
            {book.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="py-note-divider" />
          <span className="py-eyebrow">本卷的边界</span>
          <p>
            本书聚焦通用编程与标准库。面向对象、Web、数据分析库与并发留给后续学习。
          </p>
          <p className="py-draft-note">
            v{book.version} 投稿预览
            <br />
            AI 编写 · 尚未人工审校
          </p>
        </aside>
      </div>
    </>
  );
}
function LessonContent({ lesson, tab }: { lesson: Lesson; tab: string }) {
  const l = lesson;
  if (tab === "practice")
    return (
      <section>
        <div className="py-section-heading">
          <span className="py-eyebrow">TRY IT YOURSELF</span>
          <h2>先独立完成，再对照解法</h2>
          <p>
            每题都有提示、完整步骤与已核对的预期输出。这里供自评，不自动运行或评分。
          </p>
        </div>
        <Questions items={l.practice} />
      </section>
    );
  if (tab === "experiment") return <TraceExperiment lesson={l} />;
  return (
    <>
      <div className="py-idea">
        <span className="py-eyebrow">先抓住核心意思</span>
        <p>{l.concept}</p>
        <div>
          <span>直觉</span>
          {l.intuition}
        </div>
      </div>
      <section>
        <h2>本节你会学到</h2>
        <ul className="py-objectives">
          {l.objectives.map((item) => (
            <li key={item}>
              <Check size={16} />
              {item}
            </li>
          ))}
        </ul>
        {l.body.slice(0, 1).map((paragraph, i) => (
          <div className="py-paragraph" key={paragraph.title}>
            <span className="py-paragraph-number">0{i + 1}</span>
            <div>
              <h2>{paragraph.title}</h2>
              <p>{paragraph.text}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="py-guided">
        <span className="py-eyebrow">先跟着走一遍</span>
        <h2>{l.workedExamples[0].title}</h2>
        <p>{l.workedExamples[0].problem}</p>
        <Code code={l.workedExamples[0].answer.code} />
        <ol className="py-steps">
          {l.workedExamples[0].steps.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ol>
        <Output snippet={l.workedExamples[0].answer} />
      </section>
      <section>
        {l.body.slice(1).map((paragraph, i) => (
          <div className="py-paragraph" key={paragraph.title}>
            <span className="py-paragraph-number">0{i + 2}</span>
            <div>
              <h2>{paragraph.title}</h2>
              <p>{paragraph.text}</p>
            </div>
          </div>
        ))}
      </section>
      {l.localSetup && (
        <details className="py-setup">
          <summary>第一次在电脑上运行？跟着这四步做</summary>
          <ol>
            {l.localSetup.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ol>
          <a
            href="https://www.python.org/downloads/"
            target="_blank"
            rel="noreferrer"
          >
            打开 Python 官方下载页 ↗
          </a>
        </details>
      )}
      <TraceExperiment lesson={l} />
      <ConceptCheck value={l.learningCheck} />
      <section className="py-definition">
        <span className="py-eyebrow">定义与适用条件</span>
        <p>{l.formalDefinition.text}</p>
        <ul>
          {l.formalDefinition.conditions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
      <section>
        <div className="py-section-heading">
          <span className="py-eyebrow">WORKED EXAMPLES</span>
          <h2>再看一个变化</h2>
        </div>
        {l.workedExamples.slice(1).map((example, i) => (
          <article className="py-example" key={example.title}>
            <span className="py-question-number">例题 0{i + 2}</span>
            <h3>{example.title}</h3>
            <p>{example.problem}</p>
            <details>
              <summary>
                展开解题步骤与代码
                <ChevronDown size={16} />
              </summary>
              <ol>
                {example.steps.map((step, j) => (
                  <li key={j}>{step}</li>
                ))}
              </ol>
              <Code code={example.answer.code} />
              <Output snippet={example.answer} />
            </details>
          </article>
        ))}
      </section>
      <section>
        <h2>容易走错的两步</h2>
        <div className="py-mistakes">
          {l.commonMistakes.map((item) => (
            <div key={item.claim}>
              <span>常见误区</span>
              <h3>{item.claim}</h3>
              <p>{item.correction}</p>
            </div>
          ))}
        </div>
      </section>
      {l.furtherReading.length > 0 && (
        <section className="py-further">
          <h2>选读：学完主线后再看</h2>
          <p>先会做本节练习即可；下面的边界可以以后回来补充。</p>
          {l.furtherReading.map((note) => (
            <details key={note.title}>
              <summary>{note.title}</summary>
              <p>{note.text}</p>
            </details>
          ))}
        </section>
      )}
      <section className="py-next-task">
        <h2>现在轮到你了</h2>
        <p>先做一道预测题，再改一处输入，最后检查一个边界。</p>
        <a className="py-primary" href={href(l.id + "/practice")}>
          开始本节练习 <ArrowRight size={16} />
        </a>
      </section>
      <section className="py-sources">
        <h3>来源与先修</h3>
        <p>
          先修：
          {l.prerequisites
            .map((id) => lessons.find((l) => l.id === id)?.title)
            .join("、") || "无编程先修"}
        </p>
        <div>
          {l.sources.map((id) => {
            const s = book.sources.find((s) => s.id === id)!;
            return (
              <a key={id} href={s.url} target="_blank" rel="noreferrer">
                {s.title} ↗
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default function PythonPreview({ path }: { path: string }) {
  const parts = path.split("/");
  const page = parts[1] || "";
  const tab = parts[2] || "read";
  const lesson = lessons.find((l) => l.id === page);
  const chapter = book.chapters.find((ch) => ch.id === lesson?.chapterId);
  const [query, setQuery] = useState("");
  const [drawer, setDrawer] = useState(false);
  const [read, setRead] = useState(loadRead);
  const [storageError, setStorageError] = useState(false);
  const [large, setLarge] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const initial = useRef(true);
  const currentIndex = lesson ? lessons.indexOf(lesson) : -1;
  const validSpecial = ["review", "glossary", "project"].includes(page);
  useEffect(() => {
    setDrawer(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!initial.current)
      document.getElementById("python-main")?.focus({ preventScroll: true });
    initial.current = false;
  }, [path]);
  useEffect(() => {
    if (!drawer) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawer(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [drawer]);
  function markRead() {
    if (!lesson) return;
    const next = read.includes(lesson.id)
      ? read.filter((id) => id !== lesson.id)
      : [...read, lesson.id];
    setRead(next);
    try {
      localStorage.setItem(READ_KEY, JSON.stringify(next));
    } catch {
      setStorageError(true);
    }
  }
  return (
    <div className={"python-preview" + (large ? " py-large" : "")}>
      <a
        className="py-skip"
        href="#python-main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("python-main")?.focus();
        }}
      >
        跳到正文
      </a>
      <header className="py-header">
        <a className="py-brand" href={href()}>
          <span>
            Au<span>•</span>
          </span>
          <div>
            AI University<small>开放教科书计划</small>
          </div>
        </a>
        <nav aria-label="Python 教材导航">
          <a href={href()} className={!page || lesson ? "active" : ""}>
            教材目录
          </a>
          <a
            href={href("review")}
            className={page === "review" ? "active" : ""}
          >
            练习与回顾
          </a>
          <a
            href={href("project")}
            className={page === "project" ? "active" : ""}
          >
            综合项目
          </a>
          <a
            href={href("glossary")}
            className={page === "glossary" ? "active" : ""}
          >
            术语索引
          </a>
        </nav>
        <div className="py-header-actions">
          <span className="py-preview-badge">投稿预览</span>
          <button type="button" className="py-download" onClick={download}>
            <Download size={16} />
            <span>下载书稿</span>
          </button>
          <button
            ref={menuButton}
            type="button"
            className="py-menu"
            onClick={() => setDrawer(!drawer)}
            aria-expanded={drawer}
            aria-controls="python-sidebar"
            aria-label={drawer ? "关闭教材目录" : "打开教材目录"}
          >
            {drawer ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <div className="py-mobile-bar">
        <button
          type="button"
          onClick={() => setDrawer(!drawer)}
          aria-expanded={drawer}
          aria-controls="python-sidebar"
        >
          <List size={17} />
          教材目录
        </button>
        <span>Python 编程入门</span>
      </div>
      <div className="py-layout">
        <aside
          id="python-sidebar"
          className={"py-sidebar" + (drawer ? " open" : "")}
        >
          <div className="py-sidebar-book">
            <span className="py-eyebrow">PROGRAMMING / VOL. 01</span>
            <a href={href()}>
              <h2>Python 编程入门</h2>
              <span>Introduction to Programming</span>
            </a>
            <div className="py-reading-progress">
              <span>阅读进度</span>
              <strong>{read.length} / 20</strong>
              <div>
                <span style={{ width: `${read.length * 5}%` }} />
              </div>
            </div>
          </div>
          <label className="py-sidebar-search">
            <Search size={15} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索本书章节"
              aria-label="搜索本书章节"
            />
          </label>
          <nav aria-label="全书章节">
            {book.chapters.map((chapter, i) => {
              const matched = chapter.lessons.filter((id) => {
                const l = lessons.find((l) => l.id === id)!;
                return `${l.number} ${l.title}`
                  .toLowerCase()
                  .includes(query.trim().toLowerCase());
              });
              return (
                matched.length > 0 && (
                  <div className="py-sidebar-chapter" key={chapter.id}>
                    <h3>
                      <span>0{i + 1}</span>
                      {chapter.title}
                    </h3>
                    {matched.map((id) => {
                      const l = lessons.find((l) => l.id === id)!;
                      return (
                        <a
                          key={id}
                          href={href(id)}
                          aria-current={lesson?.id === id ? "page" : undefined}
                          className={lesson?.id === id ? "active" : ""}
                        >
                          <span>{l.number}</span>
                          <span>{l.title}</span>
                          {read.includes(id) && (
                            <Check size={13} aria-label="已读" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                )
              );
            })}
            {!lessons.some((l) =>
              `${l.number} ${l.title}`
                .toLowerCase()
                .includes(query.trim().toLowerCase()),
            ) && <p className="py-search-empty">没有匹配的章节</p>}
            <div className="py-sidebar-bottom">
              <a href={href("review")}>
                章末回顾与综合测试
                <ArrowRight size={14} />
              </a>
              <a href={href("project")}>
                综合项目
                <ArrowRight size={14} />
              </a>
              <a href={href("glossary")}>
                术语索引
                <ArrowRight size={14} />
              </a>
            </div>
          </nav>
        </aside>
        {drawer && (
          <button
            type="button"
            className="py-backdrop"
            aria-label="关闭教材目录"
            onClick={() => {
              setDrawer(false);
              menuButton.current?.focus();
            }}
          />
        )}
        <main id="python-main" className="py-main" tabIndex={-1}>
          {!page ? (
            <Home />
          ) : lesson ? (
            <div className="py-lesson">
              <div className="py-breadcrumb">
                <a href={href()}>Python 编程入门</a>
                <span>/</span>
                <span>{chapter?.title}</span>
                <span>/</span>
                <span>{lesson.number}</span>
              </div>
              <header className="py-lesson-heading">
                <span className="py-section-number">{lesson.number}</span>
                <span className="py-eyebrow">
                  SECTION {lesson.number} / {chapter?.title}
                </span>
                <h1>{lesson.title}</h1>
                <p>{lesson.concept}</p>
                <div className="py-lesson-tools">
                  <span>
                    <BookOpen size={15} />2 例题 · 4 练习
                  </span>
                  <div>
                    <button
                      type="button"
                      aria-pressed={large}
                      onClick={() => setLarge(!large)}
                      aria-label="切换较大字号"
                    >
                      A<span>A</span>
                    </button>
                    <button
                      type="button"
                      aria-pressed={read.includes(lesson.id)}
                      onClick={markRead}
                    >
                      <CheckCheck size={16} />
                      {read.includes(lesson.id) ? "已读" : "标记已读"}
                    </button>
                  </div>
                </div>
              </header>
              <nav className="py-tabs" aria-label="本节内容">
                {[
                  ["read", "阅读与理解"],
                  ["experiment", "互动实验"],
                  ["practice", "练习与解答"],
                ].map(([id, name]) => (
                  <a
                    key={id}
                    href={href(lesson.id) + (id === "read" ? "" : "/" + id)}
                    aria-current={tab === id ? "page" : undefined}
                    className={tab === id ? "active" : ""}
                  >
                    {name}
                  </a>
                ))}
              </nav>
              <article className="py-article" key={`${lesson.id}/${tab}`}>
                <LessonContent lesson={lesson} tab={tab} />
              </article>
              <div className="py-next">
                <div>
                  {currentIndex > 0 && (
                    <a href={href(lessons[currentIndex - 1].id)}>
                      <ArrowLeft size={17} />
                      <span>
                        <small>上一节</small>
                        {lessons[currentIndex - 1].title}
                      </span>
                    </a>
                  )}
                </div>
                <div>
                  {currentIndex < lessons.length - 1 ? (
                    <a href={href(lessons[currentIndex + 1].id)}>
                      <span>
                        <small>下一节</small>
                        {lessons[currentIndex + 1].title}
                      </span>
                      <ArrowRight size={17} />
                    </a>
                  ) : (
                    <a href={href("review")}>
                      进入综合回顾
                      <ArrowRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : validSpecial ? (
            <div className="py-resource">
              <span className="py-eyebrow">PYTHON / {page.toUpperCase()}</span>
              <h1>
                {page === "review"
                  ? "练习与回顾"
                  : page === "project"
                    ? "综合项目"
                    : "术语索引"}
              </h1>
              {page === "review" ? (
                <>
                  {supplements.chapterReviews.map((review, i) => (
                    <section key={review.chapterId}>
                      <h2>
                        第 {i + 1} 章 · {book.chapters[i].title}
                      </h2>
                      <Questions items={review.questions} label="回顾" />
                    </section>
                  ))}
                  <section>
                    <h2>全书综合测试</h2>
                    <Questions items={supplements.exam} label="综合题" />
                  </section>
                </>
              ) : page === "glossary" ? (
                <>
                  <p>26 个术语，连接语法、执行过程与程序设计。</p>
                  <dl className="py-glossary">
                    {supplements.glossary.map((item) => (
                      <div key={item.term}>
                        <dt>{item.term}</dt>
                        <dd>{item.definition}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              ) : (
                <>
                  <p className="py-resource-lead">
                    用一份真实 CSV，完成从读取、验证到汇总与测试的完整流程。
                  </p>
                  <div className="py-project-card">
                    <Code2 size={32} />
                    <h2>本地消费汇总器</h2>
                    <p>纯标准库 · UTF-8 CSV · 整数分 · 15 项测试</p>
                    <Code
                      code={
                        "python3 drafts/python/project/expense_report.py drafts/python/project/sample.csv"
                      }
                      name="终端命令"
                    />
                    <Output
                      snippet={{
                        code: "",
                        stdin: "",
                        stdout:
                          "总额: 23.50 元\n交通: 3.00 元\n餐饮: 20.50 元\n",
                      }}
                    />
                    <a className="py-primary" href={href("capstone")}>
                      阅读项目完整讲解
                      <ArrowRight size={17} />
                    </a>
                  </div>
                  <h2>完整源码在哪里？</h2>
                  <p>
                    下载整本书稿，附录包含项目源码、样例 CSV 和全部测试。先读第
                    5.4 节的输入条件，再在本机 Python 中运行。
                  </p>
                  <button
                    type="button"
                    className="py-secondary"
                    onClick={download}
                  >
                    <Download size={17} />
                    下载含源码的书稿
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="py-resource">
              <h1>没有找到这一节</h1>
              <a className="py-primary" href={href()}>
                返回教材目录
                <ArrowLeft size={16} />
              </a>
            </div>
          )}
          {storageError && (
            <p role="status" className="py-storage-error">
              当前浏览器无法保存已读记录；你仍可阅读和做练习。
            </p>
          )}
          <footer className="py-footer">
            <span>AI University · 开放的知识，清晰的理解</span>
            <span>Python v{book.version} · AI 编写 · 尚未人工审校</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
