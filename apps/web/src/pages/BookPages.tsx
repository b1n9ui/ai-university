import {tr, localizeNode} from "../i18n";
import {useCurriculum} from "../lib/curriculum";
import { MathText } from "../components/MathText";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  Download,
  GraduationCap,
  Layers3,
} from "lucide-react";
import {lessonById, allLessons, collections} from "../../../../packages/content";

import {
  BookCover,
  BookStats,
  Breadcrumb,
  Eyebrow,
  LessonRow,
  Link,
  NotFound,
  PageTitle,
} from "../components/UI";
import { BOOK, chapterPath, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";
import { PlannedBooks, PublishedBook } from "../components/Series";
import { categories, mathAreas, volumes, type PublishedVolume } from "../lib/library";
import { routeHref } from "../lib/navigation";
export function Library() {
  const {route}=useApp();
  const category=categories.find(c=>c.id===(route.params.get("category")|| (mathAreas.some(a=>a.id===route.params.get("area"))?"mathematics":"")));
  const area=category?.id==="mathematics" ? mathAreas.find(a=>a.id===route.params.get("area")) : undefined;
  const rawStatus=route.params.get("status");
  const status=rawStatus==="published"||rawStatus==="planned"?rawStatus:"all";
  const showStatus=volumes.some(v=>v.status==="planned")||status==="planned";
  const matches=(v:typeof volumes[number])=>(!category||v.categoryId===category.id)&&(!area||v.areaId===area.id);
  const filtered=volumes.filter(v=>matches(v)&&(status==="all"||v.status===status));
  return <div className="library-exhibition">
    <PageTitle tag="THE OPEN BOOKSHELF" title={tr("教科书库")} description={tr("选一个学科，读一本完整的书。正文、互动和练习全部开放。")}>
      <div className="library-edition"><strong>{localizeNode(String(volumes.filter(v=>v.status==="published").length).padStart(2,"0"))}</strong><span>{tr("本已出版 /")}{localizeNode(categories.length)}{tr("个分类")}</span></div>
    </PageTitle>
    <nav className="subject-tabs" aria-label={tr("教材分类")}>
      <Link to="library" params={{status}} className={!category?"active":""} aria-current={!category?"page":undefined}>{tr("全部")}<span>{localizeNode(volumes.filter(v=>v.status==="published").length)}</span></Link>
      {localizeNode(categories.map(c=><Link key={c.id} to="library" params={{category:c.id,status}} className={category?.id===c.id?"active":""} aria-current={category?.id===c.id?"page":undefined}>{localizeNode(c.title)}<span>{localizeNode(volumes.filter(v=>v.categoryId===c.id&&v.status==="published").length)}</span></Link>))}
    </nav>
    <div className="series-library-filter">
      {localizeNode(showStatus?<nav aria-label={tr("教材出版状态")}>{localizeNode([["all","全部"],["published","已出版"],["planned","规划中"]].map(([id,title])=><Link key={id} to="library" params={{category:category?.id,area:area?.id,status:id}} className={status===id?"active":""} aria-current={status===id?"page":undefined}>{localizeNode(title)}<span>{localizeNode(volumes.filter(v=>matches(v)&&(id==="all"||v.status===id)).length)}</span></Link>))}</nav>:<span className="library-access-note">{tr("AI 编写 · 完整教材 · 免费阅读")}</span>)}
      {localizeNode(category?.id==="mathematics"&&<label>{tr("数学方向")}<select aria-label={tr("筛选数学方向")} value={area?.id||""} onChange={e=>{location.hash=routeHref("library",{category:"mathematics",area:e.target.value||undefined,status})}}><option value="">{tr("全部方向")}</option>{localizeNode(mathAreas.map(a=><option key={a.id} value={a.id}>{localizeNode(a.title)}</option>))}</select></label>)}
    </div>
    {localizeNode(area&&<div className="library-area-intro"><Eyebrow>{localizeNode(area.english.toUpperCase())}</Eyebrow><h2>{localizeNode(area.title)}：{localizeNode(area.question)}</h2><p>{localizeNode(area.description)}</p></div>)}
    {localizeNode(categories.filter(c=>!category||c.id===category.id).map(c=>{
      const items=filtered.filter(v=>v.categoryId===c.id);
      const published=items.filter((v):v is PublishedVolume=>v.status==="published");
      const planned=items.filter(v=>v.status==="planned");
      if(!items.length)return null;
      return <section className="library-subject" key={c.id} aria-label={tr(c.title+"教材")}>
        <div className="subject-heading"><div><Eyebrow>{localizeNode(c.english.toUpperCase())}</Eyebrow><h2>{localizeNode(c.title)}</h2><p>{localizeNode(c.description)}</p></div><span>{localizeNode(published.length)}{tr("本已出版")}{localizeNode(planned.length?` / ${planned.length} 本规划中`:"")}</span></div>
        {localizeNode(published.length>0&&<div className="published-book-list edition-shelf">{localizeNode(published.map(v=><PublishedBook key={v.id} volume={v}/>))}</div>)}
        {localizeNode(planned.length>0&&<div className="library-planned"><div className="section-title"><h3>{tr("后续教材规划")}</h3><span>{tr("尚未出版")}</span></div><PlannedBooks items={planned}/></div>)}
      </section>;
    }))}
    {localizeNode(!filtered.length&&<div className="series-library-empty"><h2>{tr("这个分类下暂时没有")}{localizeNode(status==="planned"?"规划中的":"符合条件的")}{tr("教材。")}</h2><Link to="library" params={{category:category?.id}} className="secondary-btn">{tr("查看本分类的全部教材")}<ArrowRight size={16}/></Link></div>)}
    <div className="quiet-note"><Layers3 size={24}/><div><h3>{tr("一本一本完成，持续扩展。")}</h3><p>{tr("已出版的教材提供整本正文和解答。新书完成后再加入正式书库。")}</p></div><Link to="about/contribute">{tr("了解内容规范")}<ArrowUpRight size={16}/></Link></div>
  </div>;
}

export function BookPage() {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { reading } = useApp();
  const resume=reading.recent.find(id=>book.lessonIds.includes(id));
  const volume=volumes.find(v=>v.id===book.id) as PublishedVolume;
  const previous=({"calculus-2":"calculus-1","calculus-3":"calculus-2"} as Record<string,string|undefined>)[book.id];
  return (
    <>
      <Breadcrumb
        items={[{ label: "教科书库", to: "library" }, { label: book.titleZh }]}
      />
      <section className="book-overview">
        <div>
          <Eyebrow>MATHEMATICS / {localizeNode(book.title.toUpperCase())}</Eyebrow>
          <h1>
            {localizeNode(book.titleZh)}<span>{localizeNode(book.title)}</span>
          </h1>
          <p className="book-lead">
            {localizeNode(book.subtitle)}
          </p>
          <p>{localizeNode(book.description)}</p>
          <div className="hero-actions">
            <Link to={lessonPath(resume || book.lessonIds[0])} className="primary-btn">
              {localizeNode(resume ? "继续阅读" : "从第一节开始")}
              <ArrowRight size={17} />
            </Link>
            <Link to="guide" className="text-btn">{tr("阅读指南")}<ArrowUpRight size={16} />
            </Link>
          </div>
          {localizeNode(previous&&<Link to={'book/'+previous} className="text-btn">{tr("需要复习？打开前一卷")}<ArrowUpRight size={15}/></Link>)}
          <BookStats volume={volume}/>
        </div>
        <BookCover small volume={volume}/>
      </section>
      <div className="book-meta-bar">
        <span>
          <GraduationCap size={17} />
          {localizeNode(book.audience)}
        </span>
        <span>
          <CircleCheck size={17} />{tr("整卷内容可直接阅读")}</span>
        <Link to="downloads">
          <Download size={16} />{tr("整本下载")}</Link>
      </div>
      <section className="contents-section">
        <div className="section-title">
          <div>
            <Eyebrow>CONTENTS</Eyebrow>
            <h2>{tr("全书目录")}</h2>
          </div>
          <span>{localizeNode(reading.read.filter(id=>book.lessonIds.includes(id)).length)} / {localizeNode(lessons.length)}{tr("节已读")}</span>
        </div>
        {localizeNode(book.chapters.map((ch, i) => (
          <div className="chapter-row" key={ch.id}>
            <Link to={chapterPath(ch.id)} className="chapter-number">
              {localizeNode(String(i + 1).padStart(2, "0"))}
            </Link>
            <div className="chapter-summary">
              <Link to={chapterPath(ch.id)}>
                <h3>
                  {localizeNode(ch.title)}
                  <ArrowUpRight size={19} />
                </h3>
              </Link>
              <p>{localizeNode(ch.intro)}</p>
              <Link to={"practice/review/" + ch.id} className="chapter-review">{tr("章末回顾 ·")}{localizeNode(supplements.reviews.find(r=>r.chapterId===ch.id)?.questions.length)}{tr("题")}<ArrowRight size={14} />
              </Link>
            </div>
            <div className="chapter-lessons">
              {localizeNode(ch.lessonIds.map((id) => (
                <LessonRow key={id} lesson={lessonById[id]} />
              )))}
            </div>
          </div>
        )))}
      </section>
      <div className="book-end-grid">
        <Link to="practice/exam">
          <GraduationCap />
          <h3>{tr("综合测试")}</h3>
          <p>{tr("用")}{localizeNode(supplements.exam.length)}{tr("道题连接整本书的知识。")}</p>
          <ArrowRight />
        </Link>
        <Link to="reference">
          <Layers3 />
          <h3>{tr("公式、术语与附录")}</h3>
          <p>{tr("查找定义，补全证明，回到正文。")}</p>
          <ArrowRight />
        </Link>
        <Link to="downloads">
          <Download />
          <h3>{tr("把整本书带走")}</h3>
          <p>{tr("Markdown、打印版与网站源码。")}</p>
          <ArrowRight />
        </Link>
      </div>
    </>
  );
}

export function ChapterPage() {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { route } = useApp();
  const ch = book.chapters.find((c) => chapterPath(c.id) === route.path);
  if (!ch) return <NotFound />;
  const num = book.chapters.indexOf(ch) + 1;
  return (
    <div className="chapter-page">
      <Breadcrumb
        items={[
          { label: book.titleZh, to: BOOK },
          { label: "第 " + num + " 章" },
        ]}
      />
      <div className="chapter-heading">
        <Eyebrow>CHAPTER {localizeNode(String(num).padStart(2, "0"))}</Eyebrow>
        <h1>{localizeNode(ch.title)}</h1>
        <p className="lede">{localizeNode(ch.subtitle)}</p>
        <p>{localizeNode(ch.intro)}</p>
        <Link to={lessonPath(ch.lessonIds[0])} className="primary-btn">{tr("开始本章")}<ArrowRight size={17} />
        </Link>
      </div>
      <section className="chapter-goals">
        <Eyebrow>AFTER THIS CHAPTER</Eyebrow>
        <h2>{tr("本章学习目标")}</h2>
        <ul>
          {localizeNode(ch.goals.map((g) => (
            <li key={g}>
              <CircleCheck size={18} />
              <MathText text={tr(g)} />
            </li>
          )))}
        </ul>
      </section>
      <section>
        <div className="section-title">
          <h2>{tr("本章目录")}</h2>
          <span>{localizeNode(ch.lessonIds.length)}{tr("节 ·")}{localizeNode(ch.lessonIds.reduce((n,id)=>n+lessonById[id].workedExamples.length,0))}{tr("例题 ·")}{localizeNode(ch.lessonIds.reduce((n,id)=>n+lessonById[id].practice.length,0))}{tr("节内练习")}</span>
        </div>
        <div className="chapter-detail-list">
          {localizeNode(ch.lessonIds.map((id) => {
            const l = lessonById[id];
            return (
              <Link to={lessonPath(id)} key={id}>
                <span>{localizeNode(l.number)}</span>
                <div>
                  <h3><MathText text={tr(l.title)} /></h3>
                  <p><MathText text={tr(l.subtitle)} /></p>
                </div>
                <span className="lesson-detail-meta">{tr("阅读 · 演示 · 练习")}</span>
                <ArrowRight size={19} />
              </Link>
            );
          }))}
        </div>
      </section>
      <div className="quiet-note">
        <GraduationCap size={24} />
        <div>
          <h3>{tr("章末回顾")}</h3>
          <p>{tr("用")}{localizeNode(supplements.reviews.find(r=>r.chapterId===ch.id)?.questions.length)}{tr("道题检查本章的概念与条件。")}</p>
        </div>
        <Link to={"practice/review/" + ch.id} className="secondary-btn">{tr("开始回顾")}<ArrowRight size={16} />
        </Link>
      </div>
      <div className="pagination-chapter">
        {localizeNode(num > 1 && (
          <Link to={chapterPath(book.chapters[num - 2].id)}>
            <ArrowLeft size={16} />{tr("上一章")}</Link>
        ))}
        <Link to={BOOK}>{tr("完整目录")}</Link>
        {localizeNode(num < book.chapters.length && (
          <Link to={chapterPath(book.chapters[num].id)}>{tr("下一章")}<ArrowRight size={16} />
          </Link>
        ))}
      </div>
    </div>
  );
}
const sections = [
  ["idea", "核心意思"],
  ["intuition", "建立直觉"],
  ["visual", "交互演示"],
  ["explain", "关键问题"],
  ["definition", "定义与条件"],
  ["derivation", "一步步推导"],
  ["examples", "逐步例题"],
  ["mistakes", "常见误区"],
];
