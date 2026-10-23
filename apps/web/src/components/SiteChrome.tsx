import {tr, localizeNode, locale} from "../i18n";
import {collectionForLesson} from "../../../../packages/content";
import { MathText } from "./MathText";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { routeHref } from "../lib/navigation";

import { Link } from "../components/UI";
import { REPO, lessonPath, searchTextbooks as searchLessons } from "../lib/catalog";
import { useApp } from "../lib/state";
export function Footer() {
  return (
    <footer
      className={
        "site-footer immersive-footer"
      }
    >
      <div className="footer-top">
        <div>
          <Link to="home" className="footer-brand">
            AI University<span>•</span>
          </Link>
          <p>{tr("清楚的解释，可以动手的知识。")}<br />{tr("由 AI 编写，向所有人开放。")}</p>
        </div>
        <div>
          <strong>{tr("开始学习")}</strong>
          <Link to="library">{tr("教科书库")}</Link>
          <Link to="lab">{tr("互动实验室")}</Link>
          <Link to="practice">{tr("练习中心")}</Link>
          <Link to="guide">{tr("阅读指南")}</Link>
        </div>
        <div>
          <strong>{tr("阅读资源")}</strong>
          <Link to="about/research">{tr("学习方法与参考资料")}</Link>
          <Link to="reference">{tr("公式与术语")}</Link>
          <Link to="downloads">{tr("下载与打印")}</Link>
          <Link to="learning">{tr("我的学习")}</Link>
        </div>
        <div>
          <strong>{tr("开放计划")}</strong>
          <Link to="about">{tr("关于项目")}</Link>
          <Link to="about/contribute">{tr("参与贡献")}</Link>
          <Link to="about/versions">{tr("版本与勘误")}</Link>
          <a href={REPO} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{tr("AI University · 2026 · 代码 MIT / 教材 CC0")}</span>
        <Link to="about/privacy">{tr("隐私与本地数据")}</Link>
        <span>{tr("无需账户，随时开始。")}</span>
      </div>
    </footer>
  );
}

export function SearchDialog({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  const [query, setQuery] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const { search } = useApp();
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        search();
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [search]);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      input.current?.focus();
    } else dialog.current?.close();
  }, [open]);
  const results = searchLessons(query).slice(0, 5);
  function allResults() {
    if (!query.trim()) return;
    location.hash = routeHref("search", { q: query.trim() });
    close();
  }
  return (
    <dialog
      ref={dialog}
      className="search-dialog"
      aria-label={tr("搜索教材")}
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="search-dialog-input">
        <Search size={22} />
        <input
          ref={input}
          aria-label={tr("搜索全文")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={tr("搜索概念、公式、例题…")}
          onKeyDown={(e) => {
            if (e.key === "Enter") allResults();
          }}
        />
        <button className="icon-btn" aria-label={tr("关闭搜索")} onClick={close}>
          <X size={19} />
        </button>
      </div>
      <div className="search-dialog-body">
        {localizeNode(query.trim() ? (
          <>
            <span className="search-caption">{tr("找到")}{localizeNode(searchLessons(query).length)}{tr("个知识点")}</span>
            {localizeNode(results.map((l) => (
              <Link key={l.id} to={l.route}>
                <span>{localizeNode(l.number)}</span>
                <div>
                  <strong>{localizeNode(l.isMath?<MathText text={tr(l.title)}/>:l.title)}</strong>
                  <p>{localizeNode(l.bookTitle)} · {localizeNode(l.isMath?<MathText text={tr(l.subtitle)}/>:l.subtitle)}</p>
                </div>
                <ArrowUpRight size={18} />
              </Link>
            )))}
            {localizeNode(!results.length && (
              <p className="no-result">{tr("没有匹配结果。试试“极限”“面积”或“链式”。")}</p>
            ))}
            {localizeNode(results.length > 0 && (
              <button className="all-results" onClick={allResults}>{tr("查看全部结果")}<ArrowRight size={16} />
              </button>
            ))}
          </>
        ) : (
          <>
            <span className="search-caption">{tr("常用入口")}</span>
            {localizeNode((locale === "en" ? ["limit", "derivative", "integral", "chain"] : ["极限", "导数", "Python", "Git"]).map((q) => (
              <button
                className="search-suggestion"
                key={q}
                onClick={() => setQuery(q)}
              >
                <Search size={15} />
                {localizeNode(q)}
                <ArrowUpRight size={15} />
              </button>
            )))}
          </>
        ))}
      </div>
      <div className="search-dialog-footer">
        <span>{tr("搜索完整教材正文与例题")}</span>
        <span>
          <kbd>Enter</kbd>{tr("查看全部")}<kbd>Esc</kbd>{tr("关闭")}</span>
      </div>
    </dialog>
  );
}
