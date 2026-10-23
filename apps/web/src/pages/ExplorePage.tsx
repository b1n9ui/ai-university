import {tr, localizeNode} from "../i18n";
import {VolumeSwitcher} from "../components/VolumeSwitcher";
import {useCurriculum} from "../lib/curriculum";
import { MathText, plainMathText } from "../components/MathText";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import {lessonById, allLessons, collections} from "../../../../packages/content";

import type { Exercise } from "../../../../packages/content/types";
import { PracticeSet } from "../components/Practice";
import { VisualPreview } from "../components/Visual";
import { pageWindow } from "../lib/navigation";

import {
  Breadcrumb,
  Empty,
  Filters,
  Link,
  NotFound,
  PageTitle,
  Pagination,
} from "../components/UI";
import { chapterPath, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";
export function ExplorePage({ mode }: { mode: "lab" | "practice" }) {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { route, progress } = useApp();
  const params = Object.fromEntries(route.params);
  const query = (params.q || "").toLowerCase();
  const list = lessons.filter(
    (l) =>
      (!params.chapter || l.chapterId === params.chapter) &&
      plainMathText(`${l.title} ${l.subtitle} ${l.concept}`).toLowerCase().includes(query),
  );
  const { start, end } = pageWindow(list.length, route.params.get("page"), 6);
  return (
    <>
      <PageTitle
        tag={mode === "lab" ? "THE INTERACTIVE LAB" : "PRACTICE & REFLECT"}
        title={tr(mode === "lab" ? "互动实验室" : "练习中心")}
        description={
          tr(mode === "lab"
            ? "改变参数，对照图像、数值与公式。每个演示都能回到对应讲解。"
            : "先独立尝试，再对照完整解答。按知识点练习，也可以回顾整章。")
        }
      >
        <span className="page-count">
          {localizeNode(mode === "lab" ? `${bookStats.lessons} 节演示` : `${bookStats.exercises} 道练习`)}
          <small>{localizeNode(book.title)}</small>
        </span>
      </PageTitle>
      {localizeNode(mode === "practice" && (
        <div className="practice-feature">
          <GraduationCap size={32} />
          <div>
            <h2>{tr("整本书 · 综合测试")}</h2>
            <p>{localizeNode(supplements.exam.length)}{tr("道题，连接本卷各章的概念与方法。")}</p>
          </div>
          <Link to="practice/exam" className="primary-btn">{tr("开始测试")}<ArrowRight size={16} />
          </Link>
        </div>
      ))}
      <VolumeSwitcher path={mode}/>
      <Filters path={mode} values={params} />
      {localizeNode(list.length ? (
        <div className={mode === "lab" ? "lab-grid" : "practice-grid"}>
          {localizeNode(list.slice(start, end).map((l) => {
            const done = l.practice.filter(
              (q) => progress[q.id] === "understood",
            ).length;
            return (
              <Link
                key={l.id}
                to={lessonPath(l.id)}
                params={{ view: mode === "lab" ? "visual" : "practice" }}
                className={mode === "lab" ? "lab-card" : "practice-card"}
              >
                {localizeNode(mode === "lab" ? (
                  <div className="lab-preview">
                    <VisualPreview lesson={l} />
                    <span>{tr("可调参数 · 交互图示")}</span>
                  </div>
                ) : (
                  <div className="practice-card-top">
                    <span>SECTION {localizeNode(l.number)}</span>
                    <span>{localizeNode(done)} / {localizeNode(l.practice.length)}{tr("已掌握")}</span>
                  </div>
                ))}
                <div className="explore-card-body">
                  <small>
                    {localizeNode(l.number)} /{localizeNode(" ")}
                    {localizeNode(book.chapters.find((c) => c.id === l.chapterId)!.title)}
                  </small>
                  <h3><MathText text={tr(l.title)} /></h3>
                  <p>
                    <MathText text={tr(mode === "lab" ? l.interactiveVisual.caption : l.subtitle)} />
                  </p>
                  <div>
                    <span>
                      {localizeNode(mode === "lab" ? "打开互动演示" : "开始本节练习")}
                    </span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            );
          }))}
        </div>
      ) : (
        <Empty
          title={tr("没有匹配的知识点")}
          text={tr("换一个关键词，或者选择全部章节。")}
          to={mode}
          label={tr("清除筛选")}
        />
      ))}
      <Pagination total={list.length} path={mode} params={params} />
      {localizeNode(mode === "practice" && (
        <section className="chapter-reviews">
          <div className="section-title">
            <h2>{tr("章末回顾")}</h2>
            <span>{tr("每章 3 道题")}</span>
          </div>
          {localizeNode(book.chapters.map((ch, i) => (
            <Link key={ch.id} to={"practice/review/" + ch.id}>
              <span>{localizeNode(String(i + 1).padStart(2, "0"))}</span>
              {localizeNode(ch.title)}
              <ArrowRight size={17} />
            </Link>
          )))}
        </section>
      ))}
    </>
  );
}

export function ReviewPage() {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { route, progress, mark } = useApp();
  const chId = route.path.replace("practice/review/", "");
  const review = supplements.reviews.find((r) => r.chapterId === chId);
  if (route.path !== "practice/exam" && !review) return <NotFound />;
  return (
    <>
      <Breadcrumb
        items={[
          { label: "练习中心", to: "practice" },
          { label: review ? "章末回顾" : "综合测试" },
        ]}
      />
      <PageTitle
        tag="REVIEW & CONNECT"
        title={tr(review?.title || "整本书 · 综合测试")}
        description={tr("先独立完成，再展开解答对照思路。每一道题都有提示和完整答案。")}
      />
      <PracticeSet
        key={book.id+route.path}
        questions={(review?.questions || supplements.exam) as Exercise[]}
        progress={progress}
        onMark={mark}
      />
      <div className="back-row">
        <Link to="practice" className="text-btn">
          <ArrowLeft size={16} />{tr("回到练习中心")}</Link>
        {localizeNode(review && (
          <Link to={chapterPath(review.chapterId)} className="text-btn">{tr("回到本章")}<ArrowRight size={16} />
          </Link>
        ))}
      </div>
    </>
  );
}
