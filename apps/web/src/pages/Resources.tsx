import {tr, localizeNode, locale} from "../i18n";
import programmingRegistry from "../../../../packages/content/programming.json";
import {publishedVolumes} from "../lib/library";
import {VolumeSwitcher} from "../components/VolumeSwitcher";
import {useCurriculum} from "../lib/curriculum";
import {
  ArrowRight,
  BookOpen,
  ArrowUpRight,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Lightbulb,
  Printer,
  Search,
  Settings2,
} from "lucide-react";
import {lessonById, allLessons, collections} from "../../../../packages/content";

import { Formula, MathText, plainMathText } from "../components/MathText";
import { pageWindow, routeHref } from "../lib/navigation";

import {
  Empty,
  Eyebrow,
  Filters,
  Link,
  NotFound,
  PageTitle,
  Pagination,
} from "../components/UI";
import {
  BOOK,
  REPO,
  chapterPath,
  lessonPath,
  searchTextbooks as searchLessons,
} from "../lib/catalog";
import { useApp } from "../lib/state";
export function ReferencePage() {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { route } = useApp();
  const tab = route.params.get("tab") || "formulas";
  const query = route.params.get("q") || "";
  const list = lessons.filter((l) => plainMathText(`${l.title} ${l.concept}`).includes(query));
  const { start, end } = pageWindow(list.length, route.params.get("page"), 7);
  return (
    <>
      <PageTitle
        tag="QUICK REFERENCE"
        title={tr("知识索引")}
        description={tr("公式是理解的索引。查到一个定义，再回到它的条件与推导。")}
      />
      <VolumeSwitcher path={"reference"}/>
      <nav className="page-tabs" aria-label={tr("索引分类")}>
        {localizeNode([
          ["formulas", "公式与定义"],
          ["glossary", "术语索引"],
          ["appendix", "证明与附录"],
        ].map(([id, name]) => (
          <Link
            key={id}
            to="reference"
            params={{ tab: id }}
            aria-current={tab === id ? "page" : undefined}
            className={tab === id ? "active" : ""}
          >
            {localizeNode(name)}
          </Link>
        )))}
      </nav>
      {localizeNode(tab === "formulas" ? (
        <>
          <Filters
            path="reference"
            chapter={false}
            values={{ ...Object.fromEntries(route.params), tab }}
          />
          <div className="reference-list">
            {localizeNode(list.slice(start, end).map((l) => (
              <article key={l.id}>
                <header>
                  <Link to={lessonPath(l.id)}>
                    <span>{localizeNode(l.number)}</span>
                    <h2><MathText text={tr(l.title)} /></h2>
                    <ArrowUpRight size={17} />
                  </Link>
                </header>
                <Formula latex={l.formalDefinition.latex} display />
                <div className="reference-conditions">
                  <strong>{tr("条件")}</strong>
                  <span><MathText text={tr(l.formalDefinition.conditions.join("；"))} /></span>
                </div>
              </article>
            )))}
          </div>
          {localizeNode(!list.length && (
            <Empty
              title={tr("没有找到相关公式")}
              text={tr("试试更短的关键词。")}
              to="reference"
              label={tr("返回全部公式")}
            />
          ))}
          <Pagination
            total={list.length}
            size={7}
            path="reference"
            params={{ tab, q: query }}
          />
        </>
      ) : tab === "glossary" ? (
        <div className="glossary-list">
          {localizeNode(supplements.glossary.map((g) => (
            <article key={g.term}>
              <h2><MathText text={tr(g.term)} /></h2>
              <p>
                <MathText text={tr(g.meaning)} />
              </p>
              <Link to={lessonPath(g.lessonId)}>{tr("查看完整讲解")}<ArrowUpRight size={15} />
              </Link>
            </article>
          )))}
        </div>
      ) : tab === "appendix" ? (
        <div className="appendix-list">
          {localizeNode(supplements.appendices.map((a, i) => (
            <article key={i}>
              <Eyebrow>APPENDIX {localizeNode(String(i + 1).padStart(2, "0"))}</Eyebrow>
              <h2>{localizeNode(a.title)}</h2>
              <p>
                <MathText text={tr(a.text)} />
              </p>
            </article>
          )))}
        </div>
      ) : (
        <NotFound />
      ))}
    </>
  );
}

export function LearningPage() {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { reading, progress, route } = useApp();
  const tab = route.params.get("tab") || "recent";
  const reviewLessons = lessons.filter((l) =>
    l.practice.some((q) => progress[q.id] === "review"),
  );
  const selectedIds =
    tab === "saved"
      ? reading.saved
      : tab === "read"
        ? reading.read
        : tab === "review"
          ? reviewLessons.map((l) => l.id)
          : reading.recent;
  const ids=selectedIds.filter(id=>book.lessonIds.includes(id));
  const localProgress=Object.entries(progress).filter(([id])=>[...lessons.flatMap(l=>l.practice),...supplements.exam,...supplements.reviews.flatMap(r=>r.questions)].some(q=>q.id===id)).map(([,v])=>v);
  return (
    <>
      <PageTitle
        tag="YOUR LEARNING SPACE"
        title={tr("我的学习")}
        description={tr("接着上次的地方读，把想回来的知识点留在这里。记录只属于当前浏览器。")}
      />
      <VolumeSwitcher path={"learning"}/>
      <div className="learning-stats">
        {localizeNode([
          [reading.read.filter(id=>book.lessonIds.includes(id)).length, "已读知识点"],
          [reading.saved.filter(id=>book.lessonIds.includes(id)).length, "收藏知识点"],
          [
            localProgress.filter((x) => x === "understood").length,
            "已掌握练习",
          ],
          [
            localProgress.filter((x) => x === "review").length,
            "待回顾练习",
          ],
        ].map(([n, s]) => (
          <div key={s}>
            <strong>
              {localizeNode(n)}
              <small>{localizeNode(s === "已读知识点" ? " / "+lessons.length : "")}</small>
            </strong>
            <span>{localizeNode(s)}</span>
          </div>
        )))}
      </div>
      <nav className="page-tabs" aria-label={tr("学习记录分类")}>
        {localizeNode([
          ["recent", "最近阅读"],
          ["saved", "我的收藏"],
          ["read", "已读完"],
          ["review", "需要回顾"],
        ].map(([id, name]) => (
          <Link
            key={id}
            to="learning"
            params={{ tab: id }}
            aria-current={tab === id ? "page" : undefined}
            className={tab === id ? "active" : ""}
          >
            {localizeNode(name)}
          </Link>
        )))}
      </nav>
      {localizeNode(ids.length ? (
        <div className="learning-list">
          {localizeNode(ids.map((id) => {
            const l = lessonById[id];
            return (
              <div key={id}>
                <span>{localizeNode(l.number)}</span>
                <Link to={lessonPath(id)}>
                  <h2><MathText text={tr(l.title)} /></h2>
                  <p><MathText text={tr(l.subtitle)} /></p>
                </Link>
                <Link
                  to={lessonPath(id)}
                  params={tab === "review" ? { view: "practice" } : undefined}
                  className="secondary-btn"
                >
                  {localizeNode(tab === "review" ? "回顾练习" : "继续阅读")}
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          }))}
        </div>
      ) : (
        <Empty
          title={
            tr(tab === "saved"
              ? "还没有收藏"
              : tab === "read"
                ? "还没有标记读完"
                : tab === "review"
                  ? "暂时没有需要回顾的练习"
                  : "从一节清楚的讲解开始")
          }
          text={
            tr(tab === "saved"
              ? "阅读时点一下书签按钮，就能在这里找到它。"
              : "打开教材，阅读和练习记录会留在这个浏览器。")
          }
          to={BOOK}
          label={tr("打开"+book.titleZh)}
        />
      ))}
      <div className="quiet-note">
        <Settings2 size={23} />
        <div>
          <h3>{tr("记录由你掌握")}</h3>
          <p>{tr("不需要账户。你可以导出、导入或清空本地学习记录。")}</p>
        </div>
        <Link to="about/privacy">{tr("管理本地数据")}<ArrowUpRight size={16} />
        </Link>
      </div>
    </>
  );
}

export function SearchPage() {
  const { route } = useApp();
  const query = route.params.get("q") || "";
  const list = searchLessons(query);
  const { start, end } = pageWindow(list.length, route.params.get("page"), 8);
  return (
    <>
      <PageTitle
        tag="SEARCH THE TEXTBOOK"
        title={tr("搜索教材")}
        description={tr("在解释、定义、例题与练习中寻找你想理解的概念。")}
      />
      <form
        className="full-search"
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          location.hash = routeHref("search", {
            q: String(form.get("q") || ""),
          });
        }}
      >
        <Search size={22} />
        <input
          key={query}
          name="q"
          defaultValue={query}
          placeholder={tr("输入关键词…")}
          aria-label={tr("搜索关键词")}
        />
        <button className="primary-btn">{tr("搜索")}<ArrowRight size={16} />
        </button>
      </form>
      <p className="search-result-count">
        {localizeNode(query ? `“${query}” · ${list.length} 个知识点` : "输入关键词开始搜索")}
      </p>
      {localizeNode(list.length ? (
        <div className="search-results">
          {localizeNode(list.slice(start, end).map((l) => (
            <Link key={l.id} to={l.route}>
              <span>{localizeNode(l.number)}</span>
              <div>
                <small>
                  {localizeNode(l.bookTitle+" · "+l.chapterTitle)}
                </small>
                <h2>{localizeNode(l.isMath?<MathText text={tr(l.title)}/>:l.title)}</h2>
                <p>
                  {localizeNode(l.isMath?<MathText text={tr(l.concept)}/>:l.concept)}
                </p>
              </div>
              <ArrowUpRight size={20} />
            </Link>
          )))}
        </div>
      ) : (
        query && (
          <Empty
            title={tr("没有匹配结果")}
            text={tr("可以缩短关键词，或通过知识索引查找。")}
            to="reference"
            label={tr("打开知识索引")}
          />
        )
      ))}
      <Pagination
        total={list.length}
        size={8}
        path="search"
        params={{ q: query }}
      />
    </>
  );
}

export function GuidePage() {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  return (
    <>
      <PageTitle
        tag="A GUIDE TO UNDERSTANDING"
        title={tr("怎样读这本教科书")}
        description={tr("每节都有讲解、图示、例题和练习，可以顺序阅读，也可以按需要查阅。")}
      />
      <div className="guide-intro">
        <span>01 → 02 → 03</span>
        <h2>{tr("阅读讲解，操作图示，")}<br />{tr("完成练习。")}</h2>
        <p>{tr("你可以从第一节顺序阅读，也可以从一个不理解的概念进入。本书每一节都提供相同的学习结构。")}</p>
      </div>
      <div className="guide-steps">
        {localizeNode([
          [
            "01",
            "阅读讲解",
            "先读概念和解释，不明白时可点“换个说法”。读定义时注意条件：公式在哪些输入和区间有效，什么时候不能用。",
          ],
          [
            "02",
            "操作图示",
            "点击演示步骤，图形会切换到对应参数；点“查看说明”可看结果的解释。也可以拖动滑块或输入数值，自行比较不同情况。",
          ],
          [
            "03",
            "完成练习",
            "先自己做，再对照例题步骤。练习卡住时可以查看提示或第一步；做对后，确认自己能说明过程，再标记为已掌握。",
          ],
        ].map(([n, h, p]) => (
          <section key={n}>
            <span>{localizeNode(n)}</span>
            <div>
              <h2>{localizeNode(h)}</h2>
              <p>{localizeNode(p)}</p>
            </div>
          </section>
        )))}
      </div>
      <div className="quiet-note teaching-transparency"><Lightbulb size={22}/><div><h3>{tr("教材与图示怎样制作？")}</h3><p>{tr("教材内容由 AI 编写，按固定版本发布。图形在浏览器中计算，可以随操作变化；文字和解答不会实时生成。")}</p></div></div>
      <section className="guide-faq">
        <h2>{tr("阅读中的几个问题")}</h2>
        {localizeNode([
          [
            "不知道从哪里开始？",
            "从本卷第一章开始；已熟悉的部分可跳过。遇到先修概念不熟悉时，在“知识连接”里回到对应小节。",
          ],
          [
            "需要多久完成？",
            "按自己的节奏逐节前进。能用自己的话解释、独立完成一道题，比读过多少页更有用。",
          ],
          [
            "数字答案与符号答案怎么检查？",
            "部分标量题可以在本地检查数值。证明和表达式题通过完整解答自评；网站不会把简单文本匹配当成数学评分。",
          ],
          [
            "没有网络还能读吗？",
            "下载 Markdown 书稿可在本地阅读；下载网站发布包、解压后用本地静态服务打开，可以保留交互功能。离线阅读请提前下载，网页不会自动缓存整本书。",
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>
              {localizeNode(q)}
              <ChevronDown size={17} />
            </summary>
            <p>{localizeNode(a)}</p>
          </details>
        )))}
      </section>
      <div className="quiet-note">
        <Lightbulb size={21} />
        <div>
          <h3>{tr("这些学习方法依据什么？")}</h3>
          <p>{tr("查看参考教材、图解和学习研究，也可以用它们补充阅读。")}</p>
          <Link to="about/research" className="text-btn">{tr("学习方法与参考资料")}<ArrowRight size={15} />
          </Link>
        </div>
      </div>
      <div className="guide-cta">
        <h2>{tr("从第一节开始。")}</h2>
        <Link to={lessonPath(book.lessonIds[0])} className="primary-btn">
          {localizeNode(lessons[0].title)}
          <ArrowRight size={16} />
        </Link>
        <Link to={chapterPath(book.chapters[1].id)} className="text-btn">{tr("跳到第二章")}<ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}

export function DownloadsPage() {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const {route}=useApp();
  const program=programmingRegistry.find(c=>c.id===route.params.get("book"));
  const volume=publishedVolumes.find(v=>v.id===program?.id);
  if(program&&volume)return <>
    <PageTitle tag="TAKE THE BOOK WITH YOU" title={tr("下载与离线阅读")} description={tr("正文、练习、解答与项目源码，来自同一个固定版本。")}/>
    <VolumeSwitcher path="downloads"/>
    <div className="download-grid">
      <article><Download size={28}/><span>TEXTBOOK / MARKDOWN</span><h2>{localizeNode(volume.title)}{tr("· 完整书稿")}</h2><p>{localizeNode(volume.stats.chapters)}{tr("章")}{localizeNode(volume.stats.lessons)}{tr("节，")}{localizeNode(volume.stats.examples)}{tr("个例题与")}{localizeNode(volume.stats.exercises)}{tr("道练习及回顾，含全部解答和项目代码。")}</p><a href={"./"+program.filename} download className="primary-btn">{tr("下载 Markdown")}<Download size={16}/></a></article>
      <article><Printer size={28}/><span>TEXTBOOK / PRINT</span><h2>{tr("整本阅读与打印")}</h2><p>{tr("连续阅读全部正文和项目源码，或通过浏览器打印保存为 PDF。互动操作请打开网页教材。")}</p><a href={"./"+program.printFile} target="_blank" rel="noreferrer" className="primary-btn">{tr("打开打印版")}<ExternalLink size={16}/></a></article>
      <article><Github size={28}/><span>WEBSITE / OPEN SOURCE</span><h2>{tr("网站与教材源码")}</h2><p>{tr("示例和项目可在本机运行，网站的互动演示无需 API。")}</p><a href={REPO+"/releases"} target="_blank" rel="noreferrer" className="secondary-btn">{tr("查看发布包")}<ArrowUpRight size={16}/></a></article>
    </div><div className="quiet-note"><BookOpen/><div><h3>{localizeNode(volume.title)}</h3><p>{tr("互动演示、练习与术语都在本书目录中。")}</p></div><Link to={volume.route} className="secondary-btn">{tr("返回教材")}<ArrowRight size={16}/></Link></div>
  </>;

  return (
    <>
      <PageTitle
        tag="TAKE THE BOOK WITH YOU"
        title={tr("下载与离线阅读")}
        description={tr("整本书可以带走。正文、练习与答案来自同一份固定教材内容。")}
      />
      <VolumeSwitcher path={"downloads"}/>
      <div className="download-grid">
        <article>
          <Download size={28} />
          <span>TEXTBOOK / MARKDOWN</span>
          <h2>{tr("完整书稿")}</h2>
          <p>{tr("包含全部")}{localizeNode(bookStats.lessons)}{tr("节正文、")}{localizeNode(bookStats.examples)}{tr("个例题、")}{localizeNode(bookStats.exercises)}{tr("道练习与解答，以及术语和附录。适合本地阅读与编辑。")}</p>
          <a href={filename} download className="primary-btn">{tr("下载 Markdown")}<Download size={16} />
          </a>
        </article>
        <article>
          <Printer size={28} />
          <span>TEXTBOOK / PRINT</span>
          <h2>{tr("整本阅读与打印")}</h2>
          <p>{tr("公式已经排版，可以连续阅读，或通过浏览器“打印 → 另存为 PDF”保存。交互演示请使用网站。")}</p>
          <a
            href={printFile}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >{tr("打开打印版")}<ExternalLink size={16} />
          </a>
        </article>
        <article>
          <Github size={28} />
          <span>WEBSITE / OPEN SOURCE</span>
          <h2>{tr("网站与教材源码")}</h2>
          <p>{tr("下载网站发布包或完整源码。网站在浏览器中完成演示计算，无需配置模型 API。")}</p>
          <a
            href={REPO + "/releases"}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >{tr("查看发布包")}<ArrowUpRight size={16} />
          </a>
        </article>
      </div>
      <section className="plain-section">
        <h2>{tr("怎样在本地运行？")}</h2>
        <p>{tr("从 GitHub Releases 下载网站压缩包，解压后启动任意静态文件服务，并在浏览器打开。源码的安装、运行和部署说明都在 README 中。")}</p>
        <p>{tr("教材文本采用 CC0，网站代码采用 MIT；第三方库保留各自的许可证。欢迎复制、修改与重新发布。")}</p>
        <Link to="about/contribute" className="text-btn">{tr("查看贡献与许可证说明")}<ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
