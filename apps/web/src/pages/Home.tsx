import {tr, localizeNode} from "../i18n";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { HeroNotebook } from "../components/HeroNotebook";
import { Formula, MathText, plainMathText } from "../components/MathText";
import { PublishedBook } from "../components/Series";
import { Eyebrow, Link } from "../components/UI";
import type { SculptureMode } from "../components/MathSculpture";
import { categories, mathAreas, publishedVolumes, volumes } from "../lib/library";
const MathSculpture = lazy(() => import("../components/MathSculpture"));
const forms = [
  {
    id: "wave" as const,
    title: "曲面",
    subtitle: "波的形状",
    latex: String.raw`z=A\sin x\cos y`,
    label: "振幅 $A$",
    min: 0.1,
    max: 1.8,
    step: 0.05,
    initial: 1.1,
    caption: "抬高振幅，波峰与波谷一起展开。",
    to: "lesson/transformations",
  },
  {
    id: "torus" as const,
    title: "环面",
    subtitle: "旋转的形状",
    latex: String.raw`(\sqrt{x^2+y^2}-2)^2+z^2=r^2`,
    label: "管半径 $r$",
    min: 0.25,
    max: 1.2,
    step: 0.05,
    initial: 0.65,
    caption: "改变管半径，看平面圆怎样形成环面。",
    to: "lesson/disk-washer",
  },
  {
    id: "helix" as const,
    title: "螺旋",
    subtitle: "旋转与上升",
    latex: String.raw`(x,y,z)=(1.65\cos t,1.65\sin t,p(t-3\pi))`,
    label: "上升系数 $p$",
    min: 0.1,
    max: 0.3,
    step: 0.01,
    initial: 0.2,
    caption: "三圈螺旋，管厚仅便于显示；每圈上升 $2\\pi p$。",
    to: "lesson/trigonometry",
  },
];
function MotionNotebook() {
  const host = useRef<HTMLDivElement>(null),
    [mounted, setMounted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    if (host.current) observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={host} className="motion-notebook">
      {localizeNode(mounted ? (
        <HeroNotebook />
      ) : (
        <div className="notebook-wait">{tr("交互演示 · 滚动到这里即可操作")}</div>
      ))}
    </div>
  );
}
export function Home() {
  const root = useRef<HTMLDivElement>(null),
    [mode, setMode] = useState<SculptureMode>("wave"),
    [value, setValue] = useState(1.1),
    [playing, setPlaying] = useState(
      () => !matchMedia("(prefers-reduced-motion: reduce)").matches,
    ),
    [resetKey, setResetKey] = useState(0);
  const [shelfCategory,setShelfCategory]=useState("mathematics");
  const form = forms.find((item) => item.id === mode)!;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    root.current
      ?.querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    const preference = matchMedia("(prefers-reduced-motion: reduce)"),
      changed = () => {
        if (preference.matches) setPlaying(false);
      };
    preference.addEventListener("change", changed);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", changed);
    };
  }, []);
  return (
    <div className="immersive-home" ref={root}>
      <section className="university-stage" aria-label={tr("数学图形探索")}>
        <div className="stage-topline">
          <span>
            <i /> AI-AUTHORED. OPEN TO EVERYONE.
          </span>
          <span>OPEN TEXTBOOKS / OPEN KNOWLEDGE</span>
        </div>
        <div className="stage-title">
          <Eyebrow>AI UNIVERSITY</Eyebrow>
          <h1>{tr("看见知识。")}<br />
            <span>{tr("理解本质。")}</span>
          </h1>
          <p>{tr("AI 编写的开放教科书。")}<br />{tr("从数学到编程，讲解、互动与解答一应俱全。")}</p>
          <div className="stage-actions">
            <Link to="library" className="stage-primary">{tr("进入教科书库")}<ArrowUpRight size={21} />
            </Link>
            <Link to="lab" className="stage-secondary">{tr("查看交互图示")}<ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="stage-art">
          <Suspense
            fallback={
              <div className="sculpture-loading">{tr("正在构建数学曲面…")}</div>
            }
          >
            <MathSculpture
              mode={mode}
              value={value}
              playing={playing}
              resetKey={resetKey}
            />
          </Suspense>
          <div className="art-corner">
            <span>LIVE GEOMETRY</span>
            <span>{localizeNode(form.subtitle)}</span>
          </div>
        </div>
        <div className="stage-console">
          <div
            className="sculpture-select"
            role="group"
            aria-label={tr("首页数学形态")}
          >
            {localizeNode(forms.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  setMode(item.id);
                  setValue(item.initial);
                }}
                aria-pressed={mode === item.id}
              >
                <small>0{localizeNode(i + 1)}</small>
                {localizeNode(item.title)}
                <span />
              </button>
            )))}
          </div>
          <div className="sculpture-equation">
            <Formula latex={form.latex} />
            <span><MathText text={tr(form.caption)} /></span>
          </div>
          <label className="sculpture-parameter">
            <span>
              <span><MathText text={tr(form.label)} /></span>
              <output>{localizeNode(value.toFixed(2))}</output>
            </span>
            <input
              aria-label={tr(plainMathText(form.label))}
              type="range"
              min={form.min}
              max={form.max}
              step={form.step}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </label>
          <div className="sculpture-buttons">
            <button
              onClick={() => setPlaying(!playing)}
              aria-label={tr(playing ? "暂停首页动效" : "播放首页动效")}
            >
              {localizeNode(playing ? <Pause size={16} /> : <Play size={16} />)}
            </button>
            <button
              onClick={() => {
                setValue(form.initial);
                setResetKey((k) => k + 1);
              }}
              aria-label={tr("恢复首页图形")}
            >
              <RotateCcw size={16} />
            </button>
            <Link to={form.to} aria-label={tr("阅读当前图形的相关基础")}>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="stage-bottom">
          <span>
            {localizeNode(categories.length)}{tr("个教材分类")}<b>/</b> {localizeNode(publishedVolumes.length)}{localizeNode(" ")}{tr("本已出版")}{localizeNode(volumes.length>publishedVolumes.length&&<> <b>/</b> {localizeNode(volumes.length-publishedVolumes.length)}{tr("本规划中")}</>)}
          </span>
          <button
            onClick={() =>
              document
                .getElementById("open-bookshelf")
                ?.scrollIntoView({
                  behavior: matchMedia("(prefers-reduced-motion: reduce)")
                    .matches
                    ? "instant"
                    : "smooth",
                })
            }
          >{tr("浏览教材")}<ArrowDown size={16} />
          </button>
        </div>
      </section>
      <section className="shelf-section" id="open-bookshelf">
        <div className="shelf-heading" data-reveal>
          <Eyebrow>01 / THE OPEN BOOKSHELF</Eyebrow>
          <h2>{tr("挑一本，")}<em>{tr("开始读。")}</em></h2>
          <p className="shelf-intro">{tr("完整正文、交互图示与练习解答，随时翻阅。")}</p>
          <Link to="library" params={{ status: "published" }}>{tr("浏览已出版教材")}<ArrowUpRight size={18} />
          </Link>
        <nav className="subject-tabs home-subject-tabs" aria-label={tr("首页教材分类")}>
          {localizeNode(categories.map(c=><button key={c.id} className={shelfCategory===c.id?"active":""} onClick={()=>setShelfCategory(c.id)} aria-pressed={shelfCategory===c.id}>{localizeNode(c.title)}<span>{localizeNode(publishedVolumes.filter(v=>v.categoryId===c.id).length)}</span></button>))}
          <Link to="library">{tr("查看全部")}<ArrowUpRight size={16}/></Link>
        </nav>
        </div>
        <div className="shelf-books edition-shelf" aria-label={tr(shelfCategory==="mathematics"?"数学教材书架":"其他教材书架")} data-reveal>
          {localizeNode(publishedVolumes.filter(v=>v.categoryId===shelfCategory).map((volume) => (
            <PublishedBook key={volume.id} volume={volume} />
          )))}
        </div>
      </section>
      <section className="math-atlas" id="math-atlas">
        <div className="atlas-heading" data-reveal>
          <Eyebrow>02 / THE MATHEMATICAL ATLAS</Eyebrow>
          <h2>{tr("数学，不止一本书。")}<br />
            <span>{tr("从这里，继续向前。")}</span>
          </h2>
          <p>{tr("微积分三卷、线性代数、常微分方程、概率统计、离散数学与实分析已开放阅读。")}<br />{tr("每本完成后，开放整本阅读。")}</p>
        </div>
        <div className="atlas-list">
          {localizeNode(mathAreas.map((area, i) => {
            const count = publishedVolumes.filter(
              (v) => v.areaId === area.id,
            ).length;
            return (
              <Link
                key={area.id}
                to="library"
                params={{ category:"mathematics", area: area.id }}
                className="atlas-row"
                data-reveal
              >
                <span className="atlas-number">0{localizeNode(i + 1)}</span>
                <div>
                  <h3>{localizeNode(area.title)}</h3>
                  <span>{localizeNode(area.english)}</span>
                </div>
                <p>{localizeNode(area.question)}</p>
                <span className={"atlas-status " + (count ? "available" : "")}>
                  {localizeNode(count ? `${count} 本已出版` : "规划中")}
                </span>
                <ArrowUpRight size={24} />
              </Link>
            );
          }))}
        </div>
      </section>
      <section className="hands-on-section">
        <div className="hands-on-copy" data-reveal>
          <Eyebrow>03 / THINK WITH YOUR HANDS</Eyebrow>
          <h2>{tr("让公式")}<br />
            <span>{tr("动起来。")}</span>
          </h2>
          <p>{tr("拖动曲线上的点，调整参数，")}<br />{tr("看切线、面积和曲面怎样变化。")}</p>
          <div className="hands-on-steps">
            <span>
              01 <b>{tr("先预测")}</b>
            </span>
            <span>
              02 <b>{tr("亲手操作")}</b>
            </span>
            <span>
              03 <b>{tr("回到推导")}</b>
            </span>
          </div>
          <Link to="lab" className="stage-secondary">{tr("打开互动实验室")}<ArrowUpRight size={19} />
          </Link>
        </div>
        <MotionNotebook />
      </section>
      <nav className="home-next" aria-label={tr("学习入口")}>
        <Link to="guide"><small>01 / READ</small><h3>{tr("读懂一个概念")}</h3><span>{tr("从讲解到定义")}<ArrowUpRight size={19} /></span></Link>
        <Link to="lab"><small>02 / EXPLORE</small><h3>{tr("观察图形变化")}</h3><span>{tr("改变参数，观察结果")}<ArrowUpRight size={19} /></span></Link>
        <Link to="practice"><small>03 / PRACTICE</small><h3>{tr("独立解一道题")}</h3><span>{tr("先尝试，再看解答")}<ArrowUpRight size={19} /></span></Link>
      </nav>
    </div>
  );
}
