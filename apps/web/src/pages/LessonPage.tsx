import {tr, localizeNode, locale} from "../i18n";
import {useCurriculum} from "../lib/curriculum";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Beaker,
  BookOpen,
  Bookmark,
  Check,
  CircleCheck,
  Lightbulb,
  Network,
  PencilLine,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {lessonById, allLessons, collections} from "../../../../packages/content";
import type { Lesson } from "../../../../packages/content/types";
import { Formula, MathText } from "../components/MathText";
import { Practice } from "../components/Practice";
import { TeachingExplanation } from "../components/Teaching";
import { LearningCheck } from "../components/LearningCheck";
import { Visual } from "../components/Visual";

import {
  Breadcrumb,
  Eyebrow,
  LessonRow,
  Link,
  NotFound,
} from "../components/UI";
import { BOOK, chapterPath, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";

const sections = [
  ["idea", "先看结论"],
  ["intuition", "怎么理解"],
  ["visual", "交互演示"],
  ["explain", "关键问题"],
  ["definition", "定义与条件"],
  ["derivation", "一步步推导"],
  ["examples", "逐步例题"],
  ["mistakes", "常见误区"],
];

export function LessonPage({ lesson: l }: { lesson: Lesson }) {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { route, reading, update, progress, mark } = useApp();
  const view = route.params.get("view") || "read";
  const index = lessons.indexOf(l);
  const ch = book.chapters.find((c) => c.id === l.chapterId)!;
  const [active, setActive] = useState("idea");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [focused, setFocused] = useState(false);
  const saved = reading.saved.includes(l.id),
    read = reading.read.includes(l.id);
  useEffect(() => {
    if (view !== "read") return;
    const onScroll = () => {
      const article = document.getElementById("lesson-article");
      if (!article) return;
      const top = article.getBoundingClientRect().top + window.scrollY;
      const available = article.offsetHeight - window.innerHeight + 140;
      setScrollProgress(
        Math.max(
          0,
          Math.min(
            100,
            ((window.scrollY - top + 140) / Math.max(1, available)) * 100,
          ),
        ),
      );
      let last = "idea";
      for (const [id] of sections) {
        const e = document.getElementById("section-" + id);
        if (e && e.getBoundingClientRect().top < 200) last = id;
      }
      setActive(last);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [view, l.id]);
  function jump(id: string) {
    document.getElementById("section-" + id)?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion:reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  }
  return (
    <div
      className={
        "lesson-page view-" + view + " " +
        (reading.large ? "large-text " : "") +
        (focused ? "read-focus" : "")
      }
    >
      <div
        className="reading-progress"
        style={{ width: scrollProgress + "%" }}
      />
      <Breadcrumb
        items={[
          { label: book.titleZh, to: BOOK },
          { label: ch.title, to: chapterPath(ch.id) },
          { label: l.number },
        ]}
      />
      <header className="lesson-heading">
        <span className="lesson-section-number" aria-hidden="true">
          {localizeNode(l.number)}
        </span>
        <Eyebrow>
          SECTION {localizeNode(l.number)} / {localizeNode(ch.subtitle)}
        </Eyebrow>
        <h1><MathText text={tr(l.title)} /></h1>
        <p><MathText text={tr(l.subtitle)} /></p>
        <div className="lesson-tools">
          <span>
            <BookOpen size={15} /> {localizeNode(l.body.length)}{tr("个关键问题")}</span>
          <span>{locale === "en" ? `${l.workedExamples.length} examples · ${l.practice.length} exercises` : <>{l.workedExamples.length} 例题 · {l.practice.length} 练习</>}</span>
          <div>
            <button
              className="icon-btn"
              aria-label={tr(focused ? "退出专注阅读" : "专注阅读")}
              aria-pressed={focused}
              onClick={() => setFocused(!focused)}
            >
              {localizeNode(focused ? <Minimize2 size={18} /> : <Maximize2 size={18} />)}
            </button>
            <button
              className={"icon-btn " + (saved ? "selected" : "")}
              aria-label={tr(saved ? "取消收藏本节" : "收藏本节")}
              aria-pressed={saved}
              onClick={() =>
                update({
                  ...reading,
                  saved: saved
                    ? reading.saved.filter((id) => id !== l.id)
                    : [l.id, ...reading.saved],
                })
              }
            >
              <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
            </button>
            <button
              className="text-size-btn"
              aria-label={tr("切换较大字号")}
              aria-pressed={reading.large}
              onClick={() => update({ ...reading, large: !reading.large })}
            >
              A<span>A</span>
            </button>
          </div>
        </div>
      </header>
      <nav className="lesson-tabs" aria-label={tr("知识点内容")}>
        {localizeNode([
          ["read", "阅读与理解"],
          ["visual", "交互演示"],
          ["practice", "练习与解答"],
          ["connections", "知识连接"],
        ].map(([id, name]) => (
          <Link
            key={id}
            to={lessonPath(l.id)}
            params={{ view: id === "read" ? undefined : id }}
            className={view === id ? "active" : ""}
            aria-current={view === id ? "page" : undefined}
          >
            {localizeNode(id === "read" ? <BookOpen size={15} /> : id === "visual" ? <Beaker size={15} /> : id === "practice" ? <PencilLine size={15} /> : <Network size={15} />)}
            {localizeNode(name)}
            {localizeNode(id === "practice" && <span>{localizeNode(l.practice.length)}</span>)}
          </Link>
        )))}
      </nav>
      <div className="lesson-content-grid">
        <div className="lesson-content">
          {localizeNode(view === "read" ? (
            <article id="lesson-article" className="textbook-article">
              <section id="section-idea" className="essential-idea">
                <Eyebrow>THE ESSENTIAL IDEA</Eyebrow>
                <p>
                  <MathText text={tr(l.concept)} />
                </p>
              </section>
              <section id="section-intuition">
                <SectionTitle num="01" title={tr("怎么理解？")} />
                <p>
                  <MathText text={tr(l.intuition)} />
                </p>
              </section>
              <TeachingExplanation key={`explain-${l.id}`} lesson={l}/>
              <LearningCheck key={`check-${l.id}`} check={l.learningCheck} />
              <section id="section-visual" className="embedded-visual">
                <div className="visual-section-heading">
                  <span>
                    <Beaker size={18} />{tr("交互演示")}</span>
                  <Link to={lessonPath(l.id)} params={{ view: "visual" }}>{tr("专注演示")}<ArrowUpRight size={15} />
                  </Link>
                </div>
                <Visual lesson={l} compact />
              </section>
              <section id="section-explain">
                <SectionTitle num="02" title={tr("你可能会问")} />
                {localizeNode(l.body.map((b) => (
                  <div className="body-part" key={b.title}>
                    <h3><MathText text={tr(b.title)} /></h3>
                    <p>
                      <MathText text={tr(b.text)} />
                    </p>
                  </div>
                )))}
              </section>
              <section id="section-definition">
                <SectionTitle num="03" title={tr("定义与条件")} />
                <div className="definition-block">
                  <Eyebrow>DEFINITION / THEOREM</Eyebrow>
                  <p>
                    <MathText text={tr(l.formalDefinition.text)} />
                  </p>
                  <Formula latex={l.formalDefinition.latex} display />
                  <div className="conditions">
                    <strong>{tr("使用条件")}</strong>
                    <ul>
                      {localizeNode(l.formalDefinition.conditions.map((s, i) => (
                        <li key={i}>
                          <MathText text={tr(s)} />
                        </li>
                      )))}
                    </ul>
                  </div>
                </div>
              </section>
              <section id="section-derivation">
                <SectionTitle num="04" title={tr("为什么成立？")} />
                <ol className="derivation-steps">
                  {localizeNode(l.derivation.map((s, i) => (
                    <li key={i}>
                      <span>{localizeNode(i + 1)}</span>
                      <div>
                        <p>
                          <MathText text={tr(s.text)} />
                        </p>
                        {localizeNode(s.latex && <Formula latex={s.latex} display />)}
                      </div>
                    </li>
                  )))}
                </ol>
              </section>
              <section id="section-examples">
                <SectionTitle num="05" title={tr("试着解一个问题")} />
                {localizeNode(l.workedExamples.map((ex, i) => (
                  <div className="worked-example" key={i}>
                    <header>
                      <span>{tr("例题")}{localizeNode(i + 1)}</span>
                      <h3><MathText text={tr(ex.title)} /></h3>
                    </header>
                    <p className="example-problem">
                      <MathText text={tr(ex.problem)} />
                    </p>
                    <details className="example-solution">
                      <summary>{tr("查看解题步骤")}</summary>
                      <ol>
                        {localizeNode(ex.steps.map((s, j) => (
                          <li key={j}>
                            <MathText text={tr(s)} />
                          </li>
                        )))}
                      </ol>
                      <div className="example-answer">
                        <Check size={18} />
                        <MathText text={tr(ex.answer)} />
                      </div>
                    </details>
                  </div>
                )))}
              </section>
              <section id="section-mistakes">
                <SectionTitle num="06" title={tr("常见误区")} />
                {localizeNode(l.commonMistakes.map((m) => (
                  <div className="misconception" key={m.id}>
                    <div>
                      <X size={17} />
                      <span>
                        <MathText text={tr(m.claim)} />
                      </span>
                    </div>
                    <p>
                      <Lightbulb size={18} />
                      <span>
                        <MathText text={tr(m.correction)} />
                      </span>
                    </p>
                  </div>
                )))}
              </section>
              <div className="lesson-finish">
                <div>
                  <Eyebrow>NOW, TRY IT YOURSELF</Eyebrow>
                  <h2>{tr("本节练习")}</h2>
                  <p>{localizeNode(l.practice.length)}{tr("道练习，检查概念、计算与适用条件。")}</p>
                </div>
                <Link
                  to={lessonPath(l.id)}
                  params={{ view: "practice" }}
                  className="primary-btn"
                >{tr("开始练习")}<ArrowRight size={16} />
                </Link>
              </div>
              <button
                className={"read-complete " + (read ? "completed" : "")}
                onClick={() =>
                  update({
                    ...reading,
                    read: read
                      ? reading.read.filter((id) => id !== l.id)
                      : [...reading.read, l.id],
                  })
                }
              >
                <CircleCheck size={20} />
                {localizeNode(read ? "已标记为读完 · 点击撤销" : "标记本节已读完")}
              </button>
            </article>
          ) : view === "visual" ? (
            <div className="focus-visual">
              <div className="focus-visual-intro">
                <h2>{tr("交互演示")}</h2>
              </div>
              <Visual lesson={l} />
              <Link to={lessonPath(l.id)} className="text-btn">{tr("查看定义与推导")}<ArrowRight size={15} />
              </Link>
            </div>
          ) : view === "practice" ? (
            <Practice lesson={l} progress={progress} onMark={mark} />
          ) : view === "connections" ? (
            <Connections lesson={l} />
          ) : (
            <NotFound />
          ))}
        </div>
        <aside className="lesson-toc" aria-label={tr("本页目录")}>
          {localizeNode(view === "read" ? (
            <>
              <Eyebrow>ON THIS PAGE</Eyebrow>
              <nav>
                {localizeNode(sections.map(([id, name]) => (
                  <button
                    key={id}
                    className={active === id ? "active" : ""}
                    onClick={() => jump(id)}
                  >
                    {localizeNode(name)}
                  </button>
                )))}
              </nav>
            </>
          ) : (
            <>
              <Eyebrow>THIS SECTION</Eyebrow>
              <p><MathText text={tr(l.concept)} /></p>
            </>
          ))}
          <div className="toc-objectives">
            <strong>{tr("本节目标")}</strong>
            {localizeNode(l.objectives.map((o) => (
              <p key={o}>
                <Check size={13} />
                <MathText text={tr(o)} />
              </p>
            )))}
          </div>
          <Link
            to={lessonPath(l.id)}
            params={{ view: "connections" }}
            className="toc-prereq"
          >{tr("查看前置知识")}<ArrowUpRight size={14} />
          </Link>
        </aside>
      </div>
      <nav className="lesson-pagination" aria-label={tr("章节翻页")}>
        {localizeNode(index > 0 ? (
          <Link to={lessonPath(lessons[index - 1].id)}>
            <ArrowLeft size={18} />
            <div>
              <small>{tr("上一节 ·")}{localizeNode(lessons[index - 1].number)}</small>
              <strong><MathText text={tr(lessons[index - 1].title)} /></strong>
            </div>
          </Link>
        ) : (
          <Link to={BOOK}>
            <ArrowLeft size={18} />{tr("教材目录")}</Link>
        ))}
        {localizeNode(index < lessons.length - 1 ? (
          <Link to={lessonPath(lessons[index + 1].id)}>
            <div>
              <small>{tr("下一节 ·")}{localizeNode(lessons[index + 1].number)}</small>
              <strong><MathText text={tr(lessons[index + 1].title)} /></strong>
            </div>
            <ArrowRight size={18} />
          </Link>
        ) : (
          <Link to="practice/exam">
            <div>
              <small>{tr("完成阅读后")}</small>
              <strong>{tr("整本书综合测试")}</strong>
            </div>
            <ArrowRight size={18} />
          </Link>
        ))}
      </nav>
      <p className="content-provenance">{tr("固定版本教材 · AI 编写 · 本节难度")}{localizeNode(l.difficulty)}/6 ·{localizeNode(" ")}
        <Link to="about/versions">{tr("版本与勘误")}</Link>
      </p>
    </div>
  );
}

export function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="reading-section-title">
      <span>{localizeNode(num)}</span>
      {localizeNode(title)}
    </h2>
  );
}

export function Connections({ lesson }: { lesson: Lesson }) {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const next = lessons.filter((l) => l.prerequisites.includes(lesson.id));
  return (
    <section className="connections">
      <Eyebrow>KNOWLEDGE CONNECTIONS</Eyebrow>
      <h2>{tr("从哪里来，通向哪里？")}</h2>
      <p>{tr("这些连接来自教材的先修关系。遇到不熟悉的概念，可以沿着连接回去补齐。")}</p>
      <div className="knowledge-flow">
        <div>
          <span>{tr("前置知识")}</span>
          {localizeNode(lesson.prerequisites.length ? (
            lesson.prerequisites.map((id) => (
              <LessonRow key={id} lesson={lessonById[id]} />
            ))
          ) : (
            <p>{localizeNode(book.audience)}。</p>
          ))}
        </div>
        <div className="current-concept">
          <BookOpen size={23} />
          <span>{localizeNode(lesson.number)}</span>
          <strong><MathText text={tr(lesson.title)} /></strong>
          <small>{tr("你在这里")}</small>
        </div>
        <div>
          <span>{tr("后续会用到")}</span>
          {localizeNode(next.length ? (
            next.map((l) => <LessonRow key={l.id} lesson={l} />)
          ) : (
            <p>{tr("已到达本卷应用路径的末端，可进入综合测试。")}</p>
          ))}
        </div>
      </div>
      <h3>{tr("这节需要避开的误解")}</h3>
      {localizeNode(lesson.commonMistakes.map((m) => (
        <p className="connection-mistake" key={m.id}>
          <Lightbulb size={18} />
          <MathText text={tr(m.correction)} />
        </p>
      )))}
    </section>
  );
}
