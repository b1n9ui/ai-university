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
      {mounted ? (
        <HeroNotebook />
      ) : (
        <div className="notebook-wait">交互演示 · 滚动到这里即可操作</div>
      )}
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
      <section className="university-stage" aria-label="数学图形探索">
        <div className="stage-topline">
          <span>
            <i /> AI-AUTHORED. OPEN TO EVERYONE.
          </span>
          <span>OPEN TEXTBOOKS / OPEN KNOWLEDGE</span>
        </div>
        <div className="stage-title">
          <Eyebrow>AI UNIVERSITY</Eyebrow>
          <h1>
            看见知识。
            <br />
            <span>理解本质。</span>
          </h1>
          <p>
            AI 编写的开放教科书。
            <br />
            从数学到编程，讲解、互动与解答一应俱全。
          </p>
          <div className="stage-actions">
            <Link to="library" className="stage-primary">
              进入教科书库 <ArrowUpRight size={21} />
            </Link>
            <Link to="lab" className="stage-secondary">
              查看交互图示 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="stage-art">
          <Suspense
            fallback={
              <div className="sculpture-loading">正在构建数学曲面…</div>
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
            <span>{form.subtitle}</span>
          </div>
        </div>
        <div className="stage-console">
          <div
            className="sculpture-select"
            role="group"
            aria-label="首页数学形态"
          >
            {forms.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  setMode(item.id);
                  setValue(item.initial);
                }}
                aria-pressed={mode === item.id}
              >
                <small>0{i + 1}</small>
                {item.title}
                <span />
              </button>
            ))}
          </div>
          <div className="sculpture-equation">
            <Formula latex={form.latex} />
            <span><MathText text={form.caption} /></span>
          </div>
          <label className="sculpture-parameter">
            <span>
              <span><MathText text={form.label} /></span>
              <output>{value.toFixed(2)}</output>
            </span>
            <input
              aria-label={plainMathText(form.label)}
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
              aria-label={playing ? "暂停首页动效" : "播放首页动效"}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={() => {
                setValue(form.initial);
                setResetKey((k) => k + 1);
              }}
              aria-label="恢复首页图形"
            >
              <RotateCcw size={16} />
            </button>
            <Link to={form.to} aria-label="阅读当前图形的相关基础">
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="stage-bottom">
          <span>
            {categories.length} 个教材分类 <b>/</b> {publishedVolumes.length}{" "}
            本已出版{volumes.length>publishedVolumes.length&&<> <b>/</b> {volumes.length-publishedVolumes.length} 本规划中</>}
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
          >
            浏览教材 <ArrowDown size={16} />
          </button>
        </div>
      </section>
      <section className="shelf-section" id="open-bookshelf">
        <div className="shelf-heading" data-reveal>
          <Eyebrow>01 / THE OPEN BOOKSHELF</Eyebrow>
          <h2>挑一本，<em>开始读。</em></h2>
          <p className="shelf-intro">完整正文、交互图示与练习解答，随时翻阅。</p>
          <Link to="library" params={{ status: "published" }}>
            浏览已出版教材 <ArrowUpRight size={18} />
          </Link>
        <nav className="subject-tabs home-subject-tabs" aria-label="首页教材分类">
          {categories.map(c=><button key={c.id} className={shelfCategory===c.id?"active":""} onClick={()=>setShelfCategory(c.id)} aria-pressed={shelfCategory===c.id}>{c.title}<span>{publishedVolumes.filter(v=>v.categoryId===c.id).length}</span></button>)}
          <Link to="library">查看全部<ArrowUpRight size={16}/></Link>
        </nav>
        </div>
        <div className="shelf-books edition-shelf" aria-label={shelfCategory==="mathematics"?"数学教材书架":"其他教材书架"} data-reveal>
          {publishedVolumes.filter(v=>v.categoryId===shelfCategory).map((volume) => (
            <PublishedBook key={volume.id} volume={volume} />
          ))}
        </div>
      </section>
      <section className="math-atlas" id="math-atlas">
        <div className="atlas-heading" data-reveal>
          <Eyebrow>02 / THE MATHEMATICAL ATLAS</Eyebrow>
          <h2>
            数学，不止一本书。
            <br />
            <span>从这里，继续向前。</span>
          </h2>
          <p>
            微积分三卷、线性代数、常微分方程、概率统计、离散数学与实分析已开放阅读。
            <br />
            每本完成后，开放整本阅读。
          </p>
        </div>
        <div className="atlas-list">
          {mathAreas.map((area, i) => {
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
                <span className="atlas-number">0{i + 1}</span>
                <div>
                  <h3>{area.title}</h3>
                  <span>{area.english}</span>
                </div>
                <p>{area.question}</p>
                <span className={"atlas-status " + (count ? "available" : "")}>
                  {count ? `${count} 本已出版` : "规划中"}
                </span>
                <ArrowUpRight size={24} />
              </Link>
            );
          })}
        </div>
      </section>
      <section className="hands-on-section">
        <div className="hands-on-copy" data-reveal>
          <Eyebrow>03 / THINK WITH YOUR HANDS</Eyebrow>
          <h2>
            让公式
            <br />
            <span>动起来。</span>
          </h2>
          <p>
            拖动曲线上的点，调整参数，
            <br />
            看切线、面积和曲面怎样变化。
          </p>
          <div className="hands-on-steps">
            <span>
              01 <b>先预测</b>
            </span>
            <span>
              02 <b>亲手操作</b>
            </span>
            <span>
              03 <b>回到推导</b>
            </span>
          </div>
          <Link to="lab" className="stage-secondary">
            打开互动实验室 <ArrowUpRight size={19} />
          </Link>
        </div>
        <MotionNotebook />
      </section>
      <nav className="home-next" aria-label="学习入口">
        <Link to="guide"><small>01 / READ</small><h3>读懂一个概念</h3><span>从讲解到定义 <ArrowUpRight size={19} /></span></Link>
        <Link to="lab"><small>02 / EXPLORE</small><h3>观察图形变化</h3><span>改变参数，观察结果 <ArrowUpRight size={19} /></span></Link>
        <Link to="practice"><small>03 / PRACTICE</small><h3>独立解一道题</h3><span>先尝试，再看解答 <ArrowUpRight size={19} /></span></Link>
      </nav>
    </div>
  );
}
