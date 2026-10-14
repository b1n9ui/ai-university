import {
  ArrowUpRight,
  Bookmark,
  ChevronRight,
  List,
  Menu,
  Search,
  X,
} from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { type Progress } from "./components/Practice";
import { parseRoute } from "./lib/navigation";

import { BookSidebar } from "./components/BookSidebar";
import { Footer, SearchDialog } from "./components/SiteChrome";
import { Link, NotFound } from "./components/UI";
import { BOOK, findLesson, labelFor } from "./lib/catalog";
import {
  State,
  getReading,
  initialProgress,
  initialReading,
  type Reading,
} from "./lib/state";
import { AboutPage } from "./pages/AboutPage";
import { BookPage, ChapterPage, Library } from "./pages/BookPages";
import { ExplorePage, ReviewPage } from "./pages/ExplorePage";
import { Home } from "./pages/Home";
import { LessonPage } from "./pages/LessonPage";
import {
  DownloadsPage,
  GuidePage,
  LearningPage,
  ReferencePage,
  SearchPage,
} from "./pages/Resources";
const AIDevelopmentPreview = lazy(() => import("./pages/AIDevelopmentPreview"));
export default function App() {
  const [route, setRoute] = useState(() => parseRoute(location.hash));
  const [progress, setProgress] = useState<Progress>(initialProgress);
  const [reading, setReading] = useState<Reading>(getReading);
  const [storageOk, setStorageOk] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const searchButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLoad = useRef(true);
  const current = findLesson(route.path);
  const reader = !!current || route.path.startsWith("chapter/");
  function save(key: string, data: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      setStorageOk(false);
    }
  }
  function update(data: Reading) {
    setReading(data);
    save("ai-university-reading-v2", data);
  }
  function mark(id: string, v: "understood" | "review") {
    setProgress((old) => {
      const next = { ...old, [id]: v };
      save("ai-university-calculus-1-progress-v1", next);
      return next;
    });
  }
  function clear() {
    setProgress({});
    setReading(initialReading);
    save("ai-university-calculus-1-progress-v1", {});
    save("ai-university-reading-v2", initialReading);
  }
  useEffect(() => {
    const changed = () => {
      setRoute(parseRoute(location.hash));
      setMobileMenu(false);
      setDrawer(false);
      setSearchOpen(false);
    };
    window.addEventListener("hashchange", changed);
    return () => window.removeEventListener("hashchange", changed);
  }, []);
  useEffect(() => {
    document.title =
      (route.path === "ai-development" ||
      route.path.startsWith("ai-development/")
        ? "带着 AI 做项目 · 投稿预览"
        : labelFor(route)) + " · AI University";
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!firstLoad.current)
      document.getElementById("main")?.focus({ preventScroll: true });
    firstLoad.current = false;
  }, [route.path, route.params.get("view"), route.params.get("page")]);
  useEffect(() => {
    if (current)
      setReading((old) => {
        const next = {
          ...old,
          recent: [
            current.id,
            ...old.recent.filter((x) => x !== current.id),
          ].slice(0, 8),
        };
        save("ai-university-reading-v2", next);
        return next;
      });
  }, [current?.id]);
  useEffect(() => {
    if (!drawer) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawer(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [drawer]);
  const state = {
    route,
    progress,
    reading,
    mark,
    update,
    search: () => setSearchOpen(true),
    clear,
    storageOk,
  };
  if (
    route.path === "ai-development" ||
    route.path.startsWith("ai-development/")
  ) {
    return (
      <Suspense
        fallback={
          <p role="status" style={{ padding: 40 }}>
            正在打开 AI 辅助开发教材…
          </p>
        }
      >
        <AIDevelopmentPreview path={route.path} />
      </Suspense>
    );
  }
  return (
    <State.Provider value={state}>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        跳到正文
      </a>
      <header
        className={
          "site-header immersive-header"
        }
      >
        <div className="header-inner">
          <Link to="home" className="brand" aria-label="AI University 首页">
            <span className="brand-mark">
              Au<span>•</span>
            </span>
            <span>
              AI University<small>开放教科书计划</small>
            </span>
          </Link>
          <nav className="global-nav" aria-label="网站导航">
            {[
              ["library", "教科书"],
              ["lab", "互动实验室"],
              ["practice", "练习中心"],
              ["reference", "知识索引"],
            ].map(([id, name]) => (
              <Link
                key={id}
                to={id}
                aria-current={route.path === id || route.path.startsWith(id + "/") || (id === "library" && (reader || route.path === BOOK)) ? "page" : undefined}
                className={
                  route.path === id || route.path.startsWith(id + "/") ||
                  (id === "library" && (reader || route.path === BOOK))
                    ? "active"
                    : ""
                }
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button
              ref={searchButton}
              className="search-trigger"
              onClick={() => setSearchOpen(true)}
              aria-label="搜索教材"
            >
              <Search size={18} />
              <span>搜索</span>
              <kbd>⌘ K</kbd>
            </button>
            <Link to="learning" className="learning-link">
              <Bookmark size={17} />
              <span>我的学习</span>
            </Link>
            <button
              className="icon-btn mobile-nav-toggle"
              aria-label={mobileMenu ? "关闭网站导航" : "打开网站导航"}
              aria-expanded={mobileMenu}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <nav
            id="mobile-nav"
            className="mobile-global-nav"
            aria-label="手机网站导航"
          >
            {[
              ["home", "首页"],
              ["library", "教科书"],
              ["lab", "互动实验室"],
              ["practice", "练习中心"],
              ["reference", "知识索引"],
              ["learning", "我的学习"],
              ["guide", "阅读指南"],
            ].map(([id, name]) => (
              <Link key={id} to={id}>
                {name}
                <ChevronRight size={17} />
              </Link>
            ))}
          </nav>
        )}
      </header>
      {reader && (
        <div className="reader-mobile-bar">
          <button
            ref={menuButton}
            className="text-btn"
            aria-label="打开教材目录"
            aria-expanded={drawer}
            aria-controls="book-sidebar"
            onClick={() => setDrawer(!drawer)}
          >
            <List size={18} /> 教材目录
          </button>
          <span>Calculus I</span>
          <Link to={BOOK}>
            教材主页
            <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
      <div
        className={
          reader
            ? "reader-shell"
            : "site-shell " + (route.path === "home" ? "home-shell" : "")
        }
      >
        {reader && (
          <>
            <BookSidebar
              current={current}
              drawer={drawer}
              close={() => {
                setDrawer(false);
                menuButton.current?.focus();
              }}
            />
            {drawer && (
              <button
                className="drawer-backdrop"
                aria-label="关闭教材目录"
                onClick={() => {
                  setDrawer(false);
                  menuButton.current?.focus();
                }}
              />
            )}
          </>
        )}
        <main
          id="main"
          tabIndex={-1}
          className={reader ? "reader-main" : "site-main"}
        >
          {current ? (
            <LessonPage key={current.id} lesson={current} />
          ) : route.path === "home" ? (
            <Home />
          ) : route.path === "library" ? (
            <Library />
          ) : route.path === BOOK ? (
            <BookPage />
          ) : route.path.startsWith("chapter/") ? (
            <ChapterPage />
          ) : route.path === "lab" ? (
            <ExplorePage mode="lab" />
          ) : route.path === "practice" ? (
            <ExplorePage mode="practice" />
          ) : route.path.startsWith("practice/") ? (
            <ReviewPage />
          ) : route.path === "reference" ? (
            <ReferencePage />
          ) : route.path === "learning" ? (
            <LearningPage />
          ) : route.path === "search" ? (
            <SearchPage />
          ) : route.path === "guide" ? (
            <GuidePage />
          ) : route.path === "downloads" ? (
            <DownloadsPage />
          ) : route.path === "about" || route.path.startsWith("about/") ? (
            <AboutPage />
          ) : (
            <NotFound />
          )}
          {!storageOk && (
            <p role="status" className="storage-notice">
              当前浏览器无法保存本地记录；教材与演示仍可使用。
            </p>
          )}
        </main>
      </div>
      <Footer />
      <SearchDialog
        open={searchOpen}
        close={() => {
          setSearchOpen(false);
          searchButton.current?.focus();
        }}
      />
    </State.Provider>
  );
}
