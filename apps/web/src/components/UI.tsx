import {locale, languageUrl} from "../i18n";
import {unavailableEdition} from "../i18n/editions";
import {tr, localizeNode} from "../i18n";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { type ReactNode } from "react";
import {collections} from "../../../../packages/content";
import {useCurriculum} from "../lib/curriculum";
import type { Lesson } from "../../../../packages/content/types";
import { Formula, MathText } from "../components/MathText";
import { pageWindow, routeHref } from "../lib/navigation";

import { BOOK, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";
import { BookArtwork } from "./BookArtwork";
import { firstVolume, type PublishedVolume, type Volume } from "../lib/library";
export function Link({
  to,
  params,
  children,
  className = "",
  ...props
}: {
  to: string;
  params?: Record<string, string | number | undefined>;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  "aria-current"?: "page" | "step";
}) {
  const {book}=useCurriculum();
  const scoped=["lab","practice","reference","learning","search","downloads","guide"].includes(to)||to==="practice/exam";
  const values=scoped?{book:book.id,...params}:params;
  return (
    <a className={className} href={locale === "en" && unavailableEdition(to, values?.book?.toString()) ? languageUrl(location.href.split("#")[0]+routeHref(to, values),"zh") : routeHref(to, values)} {...props}>
      {localizeNode(children)}
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{localizeNode(children)}</span>;
}

export function PageTitle({
  tag,
  title,
  description,
  children,
}: {
  tag: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-heading">
      <svg className="masthead-lines" viewBox="0 0 460 260" aria-hidden="true" focusable="false">
        <path d="M-30 210 C90 200 100 40 240 70 S370 210 490 20" />
        <path d="M-30 230 C90 220 110 60 240 90 S370 230 490 40" />
        <path d="M-30 250 C90 240 120 80 240 110 S370 250 490 60" />
        <path d="M-30 270 C90 260 130 100 240 130 S370 270 490 80" />
      </svg>
      <div>
        <Eyebrow>{localizeNode(tag)}</Eyebrow>
        <h1>{localizeNode(title)}</h1>
        <p>{localizeNode(description)}</p>
      </div>
      {localizeNode(children)}
    </div>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label={tr("面包屑导航")}>
      {localizeNode(items.map((item, i) => (
        <span key={i}>
          {localizeNode(i > 0 && <ChevronRight size={13} />)}{localizeNode(" ")}
          {localizeNode(item.to ? (
            <Link to={item.to}><MathText text={tr(item.label)} /></Link>
          ) : (
            <span aria-current="page"><MathText text={tr(item.label)} /></span>
          ))}
        </span>
      )))}
    </nav>
  );
}

export function BookStats({
  volume = firstVolume,
}: {
  volume?: PublishedVolume;
}) {
  return (
    <div className="book-stats">
      {localizeNode([
        [volume.stats.chapters, "章节"],
        [volume.stats.lessons, "知识点"],
        [volume.stats.examples, "逐步例题"],
        [volume.stats.exercises, "练习与解答"],
      ].map(([n, s]) => (
        <span key={s}>
          <strong>{localizeNode(n)}</strong>
          {localizeNode(s)}
        </span>
      )))}
    </div>
  );
}

export function BookCover({
  small = false,
  volume = firstVolume,
}: {
  small?: boolean;
  volume?: Volume;
}) {
  return (
    <div className={"book-cover edition-cover " + (small ? "small" : "")+(volume.coverTitle.some(line=>line.length>10)?" long-title":"")} data-edition={volume.id} aria-hidden="true">
      <div className="cover-top">AI UNIVERSITY<span>OPEN TEXTBOOK</span></div>
      <div className="cover-title">
        <h2>{localizeNode(volume.coverTitle.map((line,i)=><span key={i}>{localizeNode(i>0&&<br/>)}{localizeNode(i===1&&/^I+$/.test(line)?<em>{localizeNode(line)}</em>:line)}</span>))}</h2>
        <p>{localizeNode(volume.title)}</p>
      </div>
      <BookArtwork id={volume.id}/>
      <div className="cover-bottom">
        {localizeNode(volume.status==="published"&&(volume.coverFormula?<Formula latex={volume.coverFormula}/>:<code className="cover-code">{localizeNode(volume.coverMark)}</code>))}
        <span>{localizeNode(volume.categoryId==="mathematics"?"MATHEMATICS":"COMPUTING")}</span>
      </div>
    </div>
  );
}

export function LessonRow({ lesson }: { lesson: Lesson }) {
  const { reading } = useApp();
  return (
    <Link to={lessonPath(lesson.id)} className="lesson-row">
      <span className="lesson-number">{localizeNode(lesson.number)}</span>
      <span><MathText text={tr(lesson.title)} /></span>
      {localizeNode(reading.read.includes(lesson.id) ? (
        <Check size={16} className="read-check" />
      ) : (
        <ArrowRight size={15} />
      ))}
    </Link>
  );
}

export function Filters({
  path,
  values,
  chapter = true,
}: {
  path: string;
  values: Record<string, string>;
  chapter?: boolean;
}) {
  const {book}=useCurriculum();
  function change(key: string, value: string) {
    location.hash = routeHref(path, {
      ...values,
      book:book.id,
      [key]: value,
      page: undefined,
    });
  }
  return (
    <div className="filter-bar">
      <div>
        <SlidersHorizontal size={17} />
        <span>{tr("筛选")}</span>
        {localizeNode(chapter && (
          <label>
            <span className="sr-only">{tr("筛选章节")}</span>
            <select
              aria-label={tr("筛选章节")}
              value={values.chapter || ""}
              onChange={(e) => change("chapter", e.target.value)}
            >
              <option value="">{tr("全部章节")}</option>
              {localizeNode(book.chapters.map((ch, i) => (
                <option value={ch.id} key={ch.id}>
                  {localizeNode(i + 1)}. {localizeNode(ch.title)}
                </option>
              )))}
            </select>
          </label>
        ))}
      </div>
      <label className="filter-search">
        <Search size={17} />
        <input
          aria-label={tr("筛选知识点")}
          placeholder={tr("搜索知识点…")}
          value={values.q || ""}
          onChange={(e) => change("q", e.target.value)}
        />
      </label>
    </div>
  );
}

export function Pagination({
  total,
  size = 6,
  path,
  params = {},
}: {
  total: number;
  size?: number;
  path: string;
  params?: Record<string, string>;
}) {
  const { route } = useApp();
  const { page, pages, start, end } = pageWindow(
    total,
    route.params.get("page"),
    size,
  );
  return (
    <div className="pagination">
      <span>
        {localizeNode(total ? `${start + 1}–${end}` : "0")} / {localizeNode(total)}{tr("项")}</span>
      <nav aria-label={tr("分页导航")}>
        {localizeNode(page > 1 ? (
          <Link
            to={path}
            params={{ ...params, page: page - 1 }}
            aria-label={tr("上一页")}
          >
            <ChevronRight className="flip" size={16} />
          </Link>
        ) : (
          <span className="disabled-page">
            <ChevronRight className="flip" size={16} />
          </span>
        ))}
        {localizeNode(Array.from({ length: pages }, (_, i) => (
          <Link
            key={i}
            to={path}
            params={{ ...params, page: i + 1 }}
            className={page === i + 1 ? "active" : ""}
            aria-current={page === i + 1 ? "page" : undefined}
          >
            {localizeNode(i + 1)}
          </Link>
        )))}
        {localizeNode(page < pages ? (
          <Link
            to={path}
            params={{ ...params, page: page + 1 }}
            aria-label={tr("下一页")}
          >
            <ChevronRight size={16} />
          </Link>
        ) : (
          <span className="disabled-page">
            <ChevronRight size={16} />
          </span>
        ))}
      </nav>
    </div>
  );
}

export function Empty({
  title,
  text,
  to,
  label,
}: {
  title: string;
  text: string;
  to: string;
  label: string;
}) {
  return (
    <div className="empty-state">
      <BookOpen size={30} />
      <h2>{localizeNode(title)}</h2>
      <p>{localizeNode(text)}</p>
      <Link to={to} className="secondary-btn">
        {localizeNode(label)}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export function NotFound() {
  return (
    <Empty
      title={tr("这一页还没有找到")}
      text={tr("地址可能不完整。你可以通过目录或搜索继续阅读。")}
      to={BOOK}
      label={tr("回到教材目录")}
    />
  );
}
