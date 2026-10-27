import {tr, localizeNode} from "../i18n";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Layers3,
  Lightbulb,
  List,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { Exercise, Lesson } from "../../../../packages/content/types";
import { MathText } from "./MathText";
import { parseNumeric, numericAnswerMatches } from "../../../../packages/content/numeric-answer.mjs";
export type Progress = Record<string, "understood" | "review">;
export function Practice({
  lesson,
  progress,
  onMark,
  focusQuestionId,
}: {
  lesson: Lesson;
  progress: Progress;
  onMark: (id: string, v: "understood" | "review" | null) => void;
  focusQuestionId?: string|null;
}) {
  return (
    <PracticeSet
      questions={lesson.practice}
      misconceptions={lesson.commonMistakes}
      progress={progress}
      onMark={onMark}
      focusQuestionId={focusQuestionId}
    />
  );
}
export function PracticeSet({
  questions,
  misconceptions = [],
  progress,
  onMark,
  focusQuestionId,
}: {
  questions: Exercise[];
  misconceptions?: Lesson["commonMistakes"];
  progress: Progress;
  onMark: (id: string, v: "understood" | "review" | null) => void;
  focusQuestionId?: string|null;
}) {
  const [index, setIndex] = useState(()=>Math.max(0,questions.findIndex(q=>q.id===focusQuestionId))),
    [all, setAll] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(()=>{const i=questions.findIndex(q=>q.id===focusQuestionId);if(i>=0){setIndex(i);setAll(false);}},[focusQuestionId,questions]);
  const understood = questions.filter(
    (q) => progress[q.id] === "understood",
  ).length;
  function choose(i: number) {
    setIndex(i);
    heading.current?.focus({ preventScroll: true });
    heading.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }
  return (
    <section className="practice-set">
      <div className="section-heading">
        <h2 ref={heading} tabIndex={-1} style={{ scrollMarginTop: 140 }}>{tr("练习")}</h2>
        <p>{tr("数字题可检查数值；推导题请对照步骤自评。记录只保存在当前浏览器。")}</p>
      </div>
      <div className="practice-overview">
        <span>
          {localizeNode(questions.length)}{tr("道题 ·")}{localizeNode(understood)}{tr("道已掌握")}</span>
        <button onClick={() => setAll(!all)}>
          {localizeNode(all ? <Layers3 size={14} /> : <List size={14} />)}{localizeNode(" ")}
          {localizeNode(all ? "逐题练习" : "连续查看")}
        </button>
      </div>
      <nav className="question-navigator" aria-label={tr("练习题导航")}>
        {localizeNode(questions.map((q, i) => (
          <button
            key={q.id}
            aria-label={tr("第 " + (i + 1) + " 题")}
            aria-current={!all && i === index ? "step" : undefined}
            className={
              (i === index && !all ? "active " : "") +
              (progress[q.id] === "understood"
                ? "done"
                : progress[q.id] === "review"
                  ? "review"
                  : "")
            }
            onClick={() => {
              setAll(false);
              choose(i);
            }}
          >
            {localizeNode(i + 1)}
          </button>
        )))}
      </nav>
      {localizeNode(questions.map((q, i) => (
        <div key={q.id} hidden={!all && i !== index}>
          <Question
            q={q}
            misconceptions={misconceptions.filter(m=>q.misconceptionTags.includes(m.id))}
            index={i}
            status={progress[q.id]}
            onMark={(v) => onMark(q.id, v)}
          />
        </div>
      )))}
      {localizeNode(!all && (
        <div className="question-pagination">
          <button disabled={index === 0} onClick={() => choose(index - 1)}>
            <ArrowLeft size={15} />{tr("上一题")}</button>
          <span>{tr(`第 ${index + 1} / ${questions.length} 题`)}</span>
          <button
            disabled={index === questions.length - 1}
            onClick={() => choose(index + 1)}
          >{tr("下一题")}<ArrowRight size={15} />
          </button>
        </div>
      ))}
    </section>
  );
}
function Question({
  q,
  misconceptions,
  index,
  status,
  onMark,
}: {
  q: Exercise;
  misconceptions: Lesson["commonMistakes"];
  index: number;
  status?: string;
  onMark: (v: "understood" | "review" | null) => void;
}) {
  const input=useRef<HTMLTextAreaElement>(null);
  const formatId=useId();
  const [draft, setDraft] = useState(""),
    [hint, setHint] = useState(false),
    [reveal, setReveal] = useState(false),
    [feedback, setFeedback] = useState("");
  const [result,setResult] = useState<"correct"|"wrong"|"invalid"|null>(null), [nextHint,setNextHint] = useState(false);
  function check() {
    const value = parseNumeric(draft);
    if (!Number.isFinite(value)) {
      setResult("invalid");
      setFeedback("请输入有限数值，可使用小数或分数（如 1/3）。");
      return;
    }
    const ok = numericAnswerMatches(value, q.numericAnswer!);
    setResult(ok?"correct":"wrong");
    if(!ok){setHint(true);setNextHint(false);}
    setFeedback(
      ok
        ? "数值一致。请再核对你的推导。"
        : "数值还不一致。按下面的提示检查这一步。",
    );
    if(!ok)onMark("review");
  }
  return (
    <article className="exercise">
      <header>
        <span className="exercise-number">
          {localizeNode(String(index + 1).padStart(2, "0"))}
        </span>
        <span>{tr("难度")}{localizeNode(q.difficulty)}/6</span>
        {localizeNode(status && (
          <span className={"status " + status}>
            {localizeNode(status === "understood" ? "已掌握" : "需要回顾")}
          </span>
        ))}
      </header>
      {status&&<button className="text-btn clear-question-status" onClick={()=>{input.current?.focus({preventScroll:true});onMark(null);setResult(null);setFeedback("");}}>{tr("清除此题记录")}</button>}
      <h3>
        <MathText text={tr(q.problem)} />
      </h3>
      <label className="answer-label">
        {localizeNode(q.numericAnswer !== undefined ? "数值结果（小数或分数）" : "你的思路")}
        <textarea
          ref={input}
          rows={q.numericAnswer!==undefined?1:4}
          className={q.numericAnswer!==undefined?"numeric-answer-input":undefined}
          aria-describedby={q.numericAnswer!==undefined?formatId:undefined}
          onKeyDown={e=>{if(q.numericAnswer!==undefined&&e.key==="Enter"&&!e.shiftKey){e.preventDefault();check();}}}
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            setFeedback("");
            setResult(null);
          }}
          placeholder={
            tr(q.numericAnswer !== undefined
              ? "如 1/3 · 回车检查"
              : "写下关键步骤，或先在纸上完成…")
          }
        />
        {q.numericAnswer!==undefined&&<small id={formatId} className="answer-format-note">{tr("小数请保留至少 6 位有效数字，也可输入分数。")}</small>}
      </label>
      <div className="exercise-actions">
        {localizeNode(q.numericAnswer !== undefined && (
          <button className="small-btn" onClick={check}>
            <Check size={14} />{tr("检查数值")}</button>
        ))}
        <button
          className="small-btn"
          aria-expanded={hint}
          onClick={() => setHint(!hint)}
        >
          <Lightbulb size={14} />
          {localizeNode(hint ? "收起提示" : "给我一点提示")}
        </button>
        <button
          className="text-btn"
          aria-expanded={reveal}
          onClick={() => setReveal(!reveal)}
        >
          {localizeNode(reveal ? "收起解答" : "查看完整解答")}
          <ChevronDown size={14} />
        </button>
      </div>
      {localizeNode(feedback && (
        <div role="status" className={"feedback feedback-"+result}>
          <strong>{localizeNode(feedback)}</strong>
          {localizeNode(result==="wrong"&&<>{localizeNode(misconceptions.length>0&&<div className="feedback-checks"><span>{tr("值得检查")}</span>{localizeNode(misconceptions.map(m=><p key={m.id}><MathText text={tr(m.correction)}/></p>))}</div>)}</>)}
          {localizeNode(result==="correct"&&<button className="small-btn" onClick={()=>onMark("understood")}>{tr("我能说明步骤，标记已理解")}</button>)}
        </div>
      ))}
      {localizeNode(hint && (
        <div className="hint staged-hint">
          <span>{tr("提示")}</span><p><MathText text={tr(q.hint)}/></p>
          {localizeNode(!nextHint?<button className="text-btn" onClick={()=>setNextHint(true)}>{tr("再看一步")}<ArrowRight size={14}/></button>:<><span>{tr("解题第一步")}</span><p><MathText text={tr(q.solution[0])}/></p></>)}
        </div>
      ))}
      {localizeNode(reveal && (
        <div className="solution">
          <strong>
            <MathText text={tr(q.answer)} />
          </strong>
          <ol>
            {localizeNode(q.solution.map((s, i) => (
              <li key={i}>
                <MathText text={tr(s)} />
              </li>
            )))}
          </ol>
          <div className="exercise-actions">
            <button
              className="small-btn"
              aria-pressed={status === "understood"}
              onClick={() => onMark("understood")}
            >
              <Check size={14} />{tr("自评：我已理解")}</button>
            <button
              className="small-btn"
              aria-pressed={status === "review"}
              onClick={() => onMark("review")}
            >{tr("自评：还需回顾")}</button>
          </div>
        </div>
      ))}
    </article>
  );
}
