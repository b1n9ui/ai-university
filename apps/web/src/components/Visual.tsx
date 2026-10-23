import AnalysisVisual, {AnalysisPreview} from "./AnalysisVisual";
import DiscreteVisual, {DiscretePreview} from "./DiscreteVisual";
import Calculus3Visual, {Calculus3Preview} from "./Calculus3Visual";
import ProbabilityVisual, {ProbabilityPreview} from "./ProbabilityVisual";
import {Calculus2Visual,Calculus2Preview} from "./Calculus2Visual";
import { MoveHorizontal, Pause, Play, RotateCcw } from "lucide-react";
import {
  lazy,
  Suspense,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Lesson, TeachingPreset } from "../../../../packages/content/types";
import {
  arcLength,
  epsilonDelta,
  functions,
  integrate,
  newton,
  secant,
} from "../../../../packages/visuals/math.mjs";
import { Formula, MathText, plainMathText } from "./MathText";
import { ParameterControl } from "./ParameterControl";
import { ApplicationVisual } from "./ApplicationVisual";
import { GuidedExperiment } from "./Teaching";
import { playbackStep, boundedSweep, MIN_APPROACH_DISTANCE, MAX_REFINEMENT } from '../../../../packages/visuals/playback.mjs';
const fmt = (v: number) =>
  Number.isFinite(v) ? Number(v.toFixed(5)).toString() : "无有限值";
function Slider({label,value,min,max,step=.01,onChange}:{label:string;value:number;min:number;max:number;step?:number;onChange:(n:number)=>void}) {
  return <ParameterControl label={label} value={value} min={min} max={max} step={step} onChange={onChange}/>;
}
type PlotContext = {
  X: (x: number) => number;
  Y: (y: number) => number;
  path: (f: (x: number) => number, from?: number, to?: number) => string;
  line: (f: (x: number) => number, color?: string, dash?: boolean) => ReactNode;
  point: (x: number, y: number, color?: string, open?: boolean) => ReactNode;
  area: (
    top: (x: number) => number,
    bottom: (x: number) => number,
    a: number,
    b: number,
  ) => string;
};
export function Plot({
  fn,
  range,
  title,
  onX,
  children,
}: {
  fn: (x: number) => number;
  range: number[];
  title: string;
  onX?: (x: number) => void;
  children?: (p: PlotContext) => ReactNode;
}) {
  const clip = useId().replace(/:/g, "");
  const [x0, x1, y0, y1] = range;
  const W = 560,
    H = 330,
    P = 36;
  const X = (x: number) => P + ((x - x0) / (x1 - x0)) * (W - 2 * P),
    Y = (y: number) => H - P - ((y - y0) / (y1 - y0)) * (H - 2 * P);
  const path = (f: (x: number) => number, from = x0, to = x1) => {
    let s = "",
      last = NaN;
    for (let i = 0; i <= 420; i++) {
      const x = from + ((to - from) * i) / 420,
        y = f(x),
        yp = Y(y);
      if (!Number.isFinite(y) || Math.abs(yp) > H * 12) {
        last = NaN;
        continue;
      }
      const cmd = Number.isFinite(last) && Math.abs(yp - last) < H ? "L" : "M";
      s += `${cmd}${X(x).toFixed(2)},${yp.toFixed(2)} `;
      last = yp;
    }
    return s;
  };
  const point = (x: number, y: number, color = "#2861ba", open = false) =>
    Number.isFinite(y) ? (
      <circle
        cx={X(x)}
        cy={Y(y)}
        r={open ? 5 : 4.5}
        fill={open ? "#ffffff" : color}
        stroke={color}
        strokeWidth="2"
      />
    ) : null;
  const line = (f: (x: number) => number, color = "#2861ba", dash = false) => (
    <path
      d={path(f)}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeDasharray={dash ? "7 5" : undefined}
    />
  );
  const area = (
    top: (x: number) => number,
    bottom: (x: number) => number,
    a: number,
    b: number,
  ) => {
    const pts = [];
    for (let i = 0; i <= 70; i++) {
      const x = a + ((b - a) * i) / 70;
      pts.push(`${X(x)},${Y(top(x))}`);
    }
    for (let i = 70; i >= 0; i--) {
      const x = a + ((b - a) * i) / 70;
      pts.push(`${X(x)},${Y(bottom(x))}`);
    }
    return `M${pts.join(" L")} Z`;
  };
  const xticks = Array.from({ length: 7 }, (_, i) => x0 + ((x1 - x0) * i) / 6),
    yticks = Array.from({ length: 5 }, (_, i) => y0 + ((y1 - y0) * i) / 4);
  const axisX = Math.max(y0, Math.min(y1, 0)),
    axisY = Math.max(x0, Math.min(x1, 0));
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={title}
      className={onX ? "plot interactive" : "plot"}
      onDragStart={(e) => e.preventDefault()}
      onPointerDown={(e) => {
        if (!onX || e.button !== 0) return;
        e.preventDefault();
        const r = e.currentTarget.getBoundingClientRect();
        onX(
          Math.max(
            x0,
            Math.min(
              x1,
              x0 +
                ((((e.clientX - r.left) / r.width) * W - P) / (W - 2 * P)) *
                  (x1 - x0),
            ),
          ),
        );
      }}
    >
      <title>{title}</title>
      <desc>
        横轴输入、纵轴输出。图像采用有限显示窗口，超出窗口的曲线被裁切。可用下面的滑块进行精确操作。
      </desc>
      <defs>
        <clipPath id={clip}>
          <rect x={P} y={P} width={W - 2 * P} height={H - 2 * P} />
        </clipPath>
      </defs>
      {xticks.map((x, i) => (
        <g key={`x${i}`}>
          <line x1={X(x)} x2={X(x)} y1={P} y2={H - P} stroke="#e9edf6" />
          <text x={X(x)} y={H - 14} textAnchor="middle">
            {Number(x.toFixed(1))}
          </text>
        </g>
      ))}
      {yticks.map((y, i) => (
        <g key={`y${i}`}>
          <line x1={P} x2={W - P} y1={Y(y)} y2={Y(y)} stroke="#e9edf6" />
          <text x={P - 7} y={Y(y) + 4} textAnchor="end">
            {Number(y.toFixed(1))}
          </text>
        </g>
      ))}
      <line x1={P} x2={W - P} y1={Y(axisX)} y2={Y(axisX)} stroke="#b2bfd7" />
      <line x1={X(axisY)} x2={X(axisY)} y1={P} y2={H - P} stroke="#b2bfd7" />
      <text className="math-axis" x={W - 10} y={H - 14}>
        x
      </text>
      <text className="math-axis" x={P - 5} y={19}>
        y
      </text>
      <g clipPath={`url(#${clip})`}>
        {line(fn, "#344de8")}
        {children?.({ X, Y, path, line, point, area })}
      </g>
    </svg>
  );
}
const SolidVisual = lazy(() => import("./SolidVisual"));
export function Visual({
  lesson,
  compact = false,
}: {
  lesson: Lesson;
  compact?: boolean;
}) {
  const spatial = ["disk", "shell", "arc"].includes(
    lesson.interactiveVisual.kind,
  );
  const [dimension, setDimension] = useState<"2d" | "3d">(
    spatial ? "3d" : "2d",
  );
  const [step,setStep] = useState<number|null>(null);
  const [scenario,setScenario] = useState<(TeachingPreset & {revision:number})>();
  const [modified,setModified] = useState(false);
  const additional = ({"definite-integral":"平均值：把面积摊成相同高度","disk-washer":"其他截面：正方形与三角形","physical-integrals":"水的模型：抽水做功与闸门受力"} as Record<string,string>)[lesson.id];
  const apply = (i:number) => { const preset=lesson.teaching.steps[i].preset; setStep(i); setModified(false); setScenario({...preset,revision:(scenario?.revision??0)+1}); if(preset.dimension)setDimension(preset.dimension); };
  useEffect(()=>{setStep(null);setScenario(undefined);setModified(false);setDimension(spatial?"3d":"2d");},[lesson.id]);
  return (
    <div className="visual-system" onChangeCapture={e=>{if(!(e.target as Element).closest(".application-visual"))setModified(true);}} onKeyDownCapture={e=>{const target=e.target as Element;if(target.matches('input[type="range"]')&&!target.closest('.application-visual')&&['Home','End','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','PageUp','PageDown'].includes(e.key))setModified(true);}} onClickCapture={e=>{const target=e.target as Element;if(target.closest("button")&&target.closest(".visual-card,.solid-visual,.dimension-switch")&&!target.closest(".application-visual"))setModified(true);}}>
      <GuidedExperiment key={`guided-${lesson.id}`} lesson={lesson} index={step} modified={modified} onApply={apply}/>
      {spatial && (
        <div className="dimension-switch" role="group" aria-label={"演示维度"}>
          <span>同一个模型 · 两种视角</span>
          <button
            aria-pressed={dimension === "2d"}
            className={dimension === "2d" ? "active" : ""}
            onClick={() => setDimension("2d")}
          >
            {lesson.interactiveVisual.kind === "arc" ? "2D 弧长" : "2D 截面"}
          </button>
          <button
            aria-pressed={dimension === "3d"}
            className={dimension === "3d" ? "active" : ""}
            onClick={() => setDimension("3d")}
          >
            {lesson.interactiveVisual.kind === "arc" ? "3D 曲面" : "3D 旋转体"}
          </button>
        </div>
      )}
      {lesson.interactiveVisual.kind==='analysis'?<AnalysisVisual key={lesson.id} lesson={lesson} compact={compact} scenario={scenario} onInteraction={()=>setModified(true)}/>:lesson.interactiveVisual.kind==='discrete'?<DiscreteVisual key={lesson.id} lesson={lesson} compact={compact} scenario={scenario} onInteraction={()=>setModified(true)}/>:lesson.interactiveVisual.kind==='probability'?<ProbabilityVisual key={lesson.id} lesson={lesson} compact={compact} scenario={scenario} onInteraction={()=>setModified(true)}/>:['calculus3','linear-algebra','ode'].includes(lesson.interactiveVisual.kind) ? <Calculus3Visual lesson={lesson} compact={compact} scenario={scenario}/> : lesson.interactiveVisual.kind === "calculus2" ? <Calculus2Visual lesson={lesson} compact={compact} scenario={scenario}/> : dimension === "3d" ? (
        <Suspense
          fallback={<div className="solid-loading">准备三维数学模型…</div>}
        >
          <SolidVisual
            key={lesson.id}
            lesson={lesson}
            scenario={scenario}
            compact={compact}
            onFallback={() => setDimension("2d")}
          />
        </Suspense>
      ) : (
        <PlanarVisual key={lesson.id} lesson={lesson} compact={compact} scenario={scenario} />
      )}
      {additional&&<details className="supplemental-experiment"><summary><span>延伸探索</span>{additional}<span>展开</span></summary><ApplicationVisual key={lesson.id} lessonId={lesson.id}/></details>}
    </div>
  );
}
function PlanarVisual({
  lesson,
  compact = false,
  scenario,
}: {
  lesson: Lesson;
  compact?: boolean;
  scenario?: TeachingPreset & {revision:number};
}) {
  const [comparison, setComparison] = useState("original");
  const spec = lesson.interactiveVisual,
    k = spec.kind,
    F =
      functions[
        comparison === "jump"
          ? "jump"
          : comparison === "corner"
            ? "absolute"
            : spec.function
      ];
  const caption =
    comparison === "jump"
      ? "左右分别趋近 1 和 3。缩小距离并切换方向：两侧不相等，双侧极限不存在。"
      : comparison === "corner"
        ? "在 $a=0$ 切换第二点方向：右侧差商为 $1$，左侧为 $-1$。函数连续，但零点不可导。"
        : spec.caption;
  const initialA = spec.a ?? (k === "derivative" ? 1 : 0);
  const initialX =
    k === "linearization"
      ? 4.1
      : k === "optimization"
        ? 6
        : k === "related"
          ? 3
          : [
                "chain",
                "substitution",
                "accumulation",
                "area-between",
                "disk",
                "shell",
              ].includes(k)
            ? 0.5
            : 1.8;
  const [a, setA] = useState(initialA),
    [x, setX] = useState(initialX),
    [h, setH] = useState(1),
    [side, setSide] = useState(1),
    [eps, setEps] = useState(0.5),
    [n, setN] = useState(8),
    [b, setB] = useState(1),
    [c, setC] = useState(0),
    [method, setMethod] = useState("right"),
    [playing, setPlaying] = useState(false);
  useEffect(()=>{
    if(!scenario)return;
    setPlaying(false); setA(scenario.a??initialA); setX(scenario.x??initialX); setH(scenario.h??1); setN(scenario.n??(k==="newton"?6:8));
    setB(scenario.b===undefined?1:(k==="mvt"||spec.function==="velocity"?scenario.b/3:scenario.b));
    setC(scenario.c??0);setEps(scenario.eps??.5);setSide(scenario.side??1);setComparison(scenario.comparison??"original");setMethod(scenario.method??"right");
  },[scenario]);
  const [speed, setSpeed] = useState(1);
  const [playbackComplete, setPlaybackComplete] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const clock = useRef(0);
  useEffect(() => {
    if (!playing) return;
    let id = 0,
      last = 0;
    clock.current = 0;
    // Capture one starting state per play; editing any control pauses playback.
    const mode = k === 'limit' || k === 'derivative' ? 'approach' : k === 'riemann' || k === 'arc' ? 'refine' : 'sweep';
    const initial = mode === 'approach'
      ? (k === 'derivative' && spec.function === 'circle' ? Math.min(h, Math.max(MIN_APPROACH_DISTANCE, (side === 1 ? 2 - a : a + 2) * 0.99)) : h)
      : mode === 'refine' ? n : x;
    const tick = (now: number) => {
      if (document.hidden) {
        setPlaying(false);
        return;
      }
      const dt = last ? Math.min(100, now - last) / 1000 : 0;
      last = now;
      const elapsed = dt * speed;
      clock.current += elapsed;
      const sweepBounds = k === 'chain' ? [-1.5, 1.5] : ['disk', 'shell'].includes(k) ? [.01, 1] : [0, 1];
      const frame = mode === 'sweep'
        ? boundedSweep(Math.max(sweepBounds[0], Math.min(sweepBounds[1], initial)), sweepBounds[0], sweepBounds[1], clock.current)
        : playbackStep(mode, initial, clock.current);
      if (mode === 'approach') setH(frame.value);
      else if (mode === 'refine') setN(frame.value);
      else setX(frame.value);
      if (frame.done) { setPlaying(false); setPlaybackComplete(true); }
      else id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing, k, speed]);
  useEffect(() => { setPlaybackComplete(false); }, [scenario]);
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) setPlaying(false);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  function reset() {
    setPlaying(false);
    setPlaybackComplete(false);
    setA(initialA);
    setX(initialX);
    setH(1);
    setN(k === "newton" ? 6 : 8);
    setB(1);
    setC(0);
    setEps(0.5);
    setSide(1);
    setComparison("original");
    setMethod("right");
  }
  const stats: { label: string; value: string }[] = [];
  let controls: ReactNode = null,
    overlay: ((p: PlotContext) => ReactNode) | undefined,
    fn = F.f,
    range = [...F.range],
    extra: ReactNode = null;
  const isTangent = ["derivative", "linearization"].includes(k);
  if (k === "graph") {
    stats.push(
      { label: "输入 $x$", value: fmt(x) },
      { label: "$f (x)$", value: fmt(fn(x)) },
    );
    controls = (
      <Slider
        label={"输入 $x$"}
        value={x}
        min={range[0]}
        max={range[1]}
        onChange={setX}
      />
    );
    overlay = (p) => p.point(x, fn(x));
  }
  if (k === "transform") {
    fn = (z) => (z - a) ** 2 + c;
    range = [-5, 5, -3, 12];
    stats.push({ label: "顶点", value: `(${fmt(a)}, ${fmt(c)})` });
    controls = (
      <>
        <Slider label={"水平平移 $h$"} value={a} min={-3} max={3} onChange={setA} />
        <Slider label={"竖直平移 $k$"} value={c} min={-2} max={5} onChange={setC} />
      </>
    );
    overlay = (p) => (
      <>
        {p.line(F.f, "#b4c1b4", true)}
        {p.point(a, c)}
      </>
    );
  }
  if (k === "limit") {
    const at = spec.a ?? 0,
      xx = at + side * h;
    stats.push(
      { label: "$x$", value: fmt(xx) },
      { label: "$f (x)$", value: fmt(fn(xx)) },
      { label: "距离 $|x - a|$", value: fmt(h) },
    );
    controls = (
      <>
        <Slider
          label={"距离 $|x - a|$"}
          value={h}
          min={0.0001}
          max={1.5}
          step={0.0001}
          onChange={setH}
        />
        <label className="select-label">
          靠近方向
          <select value={side} onChange={(e) => setSide(+e.target.value)}>
            <option value={-1}>从左侧</option>
            <option value={1}>从右侧</option>
          </select>
        </label>
      </>
    );
    overlay = (p) => (
      <line
        x1={p.X(xx)}
        x2={p.X(xx)}
        y1={p.Y(0)}
        y2={p.Y(fn(xx))}
        stroke="#2861ba"
        strokeDasharray="5 4"
      />
    );
    if(lesson.id==="continuity") {
      stats.push({label:"目标点的函数值",value:comparison==="filled"?fmt(c):"没有定义"});
      controls=<>{controls}<button className="small-btn" aria-pressed={comparison==="filled"} onClick={()=>{setComparison(comparison==="filled"?"original":"filled");setC(2);setPlaying(false);}}>{comparison==="filled"?"移除补点":"补上这个点"}</button>{comparison==="filled"&&<Slider label="补点值 $f(1)$" value={c} min={0} max={4} onChange={setC}/>}</>;
    }
    const old = overlay;
    overlay = (p) => (
      <>
        {old?.(p)}
        {p.point(xx, fn(xx))}
        {F.hole && !(comparison==="filled"&&c===F.hole[1]) && p.point(F.hole[0], F.hole[1], "#344de8", true)}
        {comparison==="filled" && p.point(1,c,"#487454")}
        {comparison === "jump" && p.point(1, 3, "#344de8", true)}
      </>
    );
    if (lesson.id === "limit-intuition") {
      stats.push(
        { label: "左侧采样值", value: fmt(fn(at - h)) },
        { label: "右侧采样值", value: fmt(fn(at + h)) },
      );
    }
  }
  if (k === "epsilon") {
    const delta = epsilonDelta(eps);
    range = [0, 4, 0, 9];
    stats.push(
      { label: "允许误差 $\\varepsilon$", value: fmt(eps) },
      { label: "保证距离 $\\delta$", value: fmt(delta) },
    );
    controls = (
      <Slider
        label={"输出误差 $\\varepsilon$"}
        value={eps}
        min={0.05}
        max={2}
        onChange={setEps}
      />
    );
    overlay = (p) => (
      <>
        <rect
          x={p.X(0)}
          y={p.Y(4 + eps)}
          width={p.X(4) - p.X(0)}
          height={p.Y(4 - eps) - p.Y(4 + eps)}
          fill="#82af75"
          opacity="0.18"
        />
        <rect
          x={p.X(2 - delta)}
          y={p.Y(9)}
          width={p.X(2 + delta) - p.X(2 - delta)}
          height={p.Y(0) - p.Y(9)}
          fill="#4573c0"
          opacity="0.16"
        />
        {p.line(F.f, "#344de8")}
        {p.point(2, 4)}
      </>
    );
    extra = (
      <Formula latex="\delta=\min(1,\frac{\varepsilon}{5}),\quad |x^2-4|<\varepsilon" />
    );
  }
  if (isTangent) {
    const tangent = (z: number) => fn(a) + F.d(a) * (z - a),
      maxH =
        spec.function === "circle"
          ? Math.max(0.0001, (side === 1 ? 2 - a : a + 2) * 0.99)
          : 1.5,
      hh = Math.min(h, maxH),
      s = secant(fn, a, side * hh);
    stats.push({ label: "精确导数 $f' (a)$", value: Number.isFinite(F.d(a)) ? fmt(F.d(a)) : "不存在" });
    if (k === "derivative") {
      stats.push(
        { label: "割线斜率", value: fmt(s) },
        { label: "差商 − 导数", value: Number.isFinite(F.d(a)) ? fmt(s - F.d(a)) : "不适用" },
      );
      controls = (
        <>
          <Slider
            label={"切点 $a$"}
            value={a}
            min={
              spec.function === "circle"
                ? -1.95
                : Math.max(
                    range[0],
                    spec.function === "sqrt" ? 0.2 : range[0] + 0.1,
                  )
            }
            max={spec.function === "circle" ? 1.95 : range[1] - 0.1}
            onChange={setA}
          />
          <Slider
            label={"两点距离 $h$"}
            value={hh}
            min={0.0001}
            max={maxH}
            step={0.0001}
            onChange={setH}
          />
          <label className="select-label">
            第二点方向
            <select value={side} onChange={(e) => setSide(+e.target.value)}>
              <option value={1}>右侧</option>
              <option value={-1}>左侧</option>
            </select>
          </label>
        </>
      );
      overlay = (p) => (
        <>
          {p.line(tangent, "#bf8b38", true)}
          {p.line((z) => fn(a) + s * (z - a), "#2861ba")}
          {p.point(a, fn(a), "#bf8b38")}
          {p.point(a + side * hh, fn(a + side * hh))}
        </>
      );
    } else {
      stats.push(
        { label: "真实值", value: fmt(fn(x)) },
        { label: "切线估计", value: fmt(tangent(x)) },
        { label: "真实误差", value: fmt(tangent(x) - fn(x)) },
      );
      controls = (
        <>
          <Slider label={"中心 $a$"} value={a} min={0.3} max={5} onChange={setA} />
          <Slider
            label={"估计位置 $x$"}
            value={x}
            min={0.01}
            max={6}
            onChange={setX}
          />
        </>
      );
      overlay = (p) => (
        <>
          {p.line(tangent, "#bf8b38", true)}
          {p.point(x, tangent(x), "#bf8b38")}
          {p.point(x, fn(x))}
          {p.point(a, fn(a), "#344de8")}
        </>
      );
    }
  }
  if (k === "chain" || k === "substitution") {
    range = [-2, 2, -1, 5];
    fn = (z) => z * z + 1;
    const u = x * x + 1;
    stats.push(
      { label: "内层 $u = x^{2} + 1$", value: fmt(u) },
      { label: "$\\frac{\\mathrm{d}u}{\\mathrm{d}x}$", value: fmt(2 * x) },
    );
    if (k === "chain")
      stats.push(
        { label: "外层 $\\frac{\\mathrm{d}y}{\\mathrm{d}u} = 3 u^{2}$", value: fmt(3 * u * u) },
        { label: "总导数 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$", value: fmt(6 * x * u * u) },
      );
    else
      stats.push(
        { label: "$x = 0 \\to u$", value: "1" },
        { label: "$x = 1 \\to u$", value: "2" },
      );
    controls = (
      <Slider
        label={"输入 $x$"}
        value={x}
        min={k === "substitution" ? 0 : -1.5}
        max={k === "substitution" ? 1 : 1.5}
        onChange={setX}
      />
    );
    overlay = (p) => p.point(x, fn(x));
    extra = (
      <div className="flow-equation">
        <Formula latex="x" /> <span>→ 平方 + 1 →</span> <Formula latex="u" />{" "}
        {k === "chain" && (
          <>
            <span>→ 三次方 →</span> <Formula latex="y" />
          </>
        )}
      </div>
    );
  }
  if (k === "related") {
    range = [0, 5, 0, 5.5];
    fn = (z) => Math.sqrt(25 - z * z);
    const xx = Math.min(4.9, Math.max(0.1, x)),
      yy = fn(xx);
    stats.push(
      { label: "高度 $y$", value: fmt(yy) },
      { label: "若 $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 1$，$\\frac{\\mathrm{d}y}{\\mathrm{d}t}$", value: fmt(-xx / yy) },
    );
    controls = (
      <Slider
        label={"底端距离 $x$"}
        value={xx}
        min={0.1}
        max={4.9}
        onChange={setX}
      />
    );
    overlay = (p) => (
      <>
        <line
          x1={p.X(0)}
          y1={p.Y(yy)}
          x2={p.X(xx)}
          y2={p.Y(0)}
          stroke="#bf8b38"
          strokeWidth="4"
        />
        {p.point(xx, 0)}
        {p.point(0, yy)}
      </>
    );
  }
  if (k === "mvt") {
    const end = Math.max(0.3, b * 3),
      mid = end / 2;
    range = [0, 3.5, 0, 11];
    stats.push(
      { label: "区间 $[0 , b]$", value: `$[0,${fmt(end)}]$` },
      { label: "保证点 $c$", value: fmt(mid) },
      { label: "共同斜率", value: fmt(end) },
    );
    controls = (
      <Slider
        label={"终点 $b$"}
        value={end}
        min={0.3}
        max={3.2}
        onChange={(z) => setB(z / 3)}
      />
    );
    overlay = (p) => (
      <>
        {p.line((z) => end * z, "#2861ba")}
        {p.line((z) => mid * mid + 2 * mid * (z - mid), "#bf8b38", true)}
        {p.point(mid, mid * mid, "#bf8b38")}
        {p.point(0, 0)}
        {p.point(end, end * end)}
      </>
    );
  }
  if (k === "optimization") {
    const xx = Math.max(0.1, Math.min(11.9, x)),
      yy = 12 - xx;
    stats.push(
      { label: "两条边长", value: `$(${fmt(xx)},${fmt(yy)})$` },
      { label: "周长", value: "24" },
      { label: "面积", value: fmt(xx * yy) },
    );
    controls = (
      <Slider
        label={"矩形边长 $x$"}
        value={xx}
        min={0.1}
        max={11.9}
        onChange={setX}
      />
    );
    overlay = (p) => p.point(xx, fn(xx));
    extra = (
      <svg
        viewBox="0 0 260 90"
        className="small-diagram"
        role="img"
        aria-label={`矩形边长 ${fmt(xx)} 与 ${fmt(yy)}`}
      >
        <rect
          x="30"
          y="12"
          width={xx * 14}
          height={yy * 5}
          fill="#e9edd3"
          stroke="#344de8"
          strokeWidth="2"
        />
        <text x="30" y="84">
          x={fmt(xx)}，y={fmt(yy)}
        </text>
      </svg>
    );
  }
  if (k === "newton") {
    const result = newton(F.f, F.d, x, n > 6 ? 6 : n),
      rows = result.rows,
      row = rows.at(-1);
    stats.push(
      { label: "初值", value: fmt(x) },
      { label: "最近近似", value: row ? fmt(row.next) : "无法计算" },
      { label: "残差", value: row ? fmt(Math.abs(fn(row.next))) : "—" },
    );
    controls = (
      <>
        <Slider
          label={"初值 $x_{0}$"}
          value={x}
          min={-1.8}
          max={2.8}
          onChange={setX}
        />
        <Slider
          label={"迭代步数"}
          value={Math.min(6, n)}
          min={1}
          max={6}
          step={1}
          onChange={setN}
        />
      </>
    );
    overlay = (p) => (
      <>
        {rows.map((r, i) => (
          <g key={i}>
            {p.line(
              (z) => r.y + r.s * (z - r.x),
              i === rows.length - 1 ? "#bf8b38" : "#bed0e2",
              true,
            )}
            {p.point(r.next, 0)}
          </g>
        ))}
      </>
    );
    extra = result.error ? (
      <p className="warning">{result.error}</p>
    ) : (
      <p className="visual-note">
        这是 <Formula latex="x^2-2" /> 的演示；一般函数与初值可能不收敛。
      </p>
    );
  }
  if (k === "antiderivative") {
    range = [-2, 2, -5, 5];
    fn = (z) => z ** 3 / 3 + c;
    stats.push(
      { label: "积分常数 $C$", value: fmt(c) },
      { label: "$F' (1) = 1^{2}$", value: "1" },
    );
    controls = (
      <Slider label={"积分常数 $C$"} value={c} min={-2} max={2} onChange={setC} />
    );
    overlay = (p) => p.line((z) => z * z, "#487454", true);
    extra = (
      <div className="legend">
        <span>蓝色实线：原函数</span>
        <span>绿色虚线：导函数</span>
      </div>
    );
  }
  if (k === "riemann") {
    range = [0, 1.05, 0, 1.15];
    const val = integrate(fn, 0, 1, n, method),
      dx = 1 / n;
    stats.push(
      { label: "近似和", value: fmt(val) },
      { label: "精确积分", value: "$\\frac{1}{3}\\approx0.33333$" },
      { label: "近似误差", value: fmt(val - 1 / 3) },
    );
    controls = (
      <>
        <Slider
          label={"分割数 $n$"}
          value={n}
          min={1}
          max={80}
          step={1}
          onChange={setN}
        />
        <label className="select-label">
          近似方法
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="left">左端矩形</option>
            <option value="right">右端矩形</option>
            <option value="midpoint">中点矩形</option>
            <option value="trapezoid">梯形</option>
          </select>
        </label>
      </>
    );
    overlay = (p) => (
      <>
        {Array.from({ length: n }, (_, i) => {
          const l = i * dx,
            r = l + dx,
            z = method === "left" ? l : method === "right" ? r : (l + r) / 2,
            top = method === "trapezoid" ? fn : () => fn(z);
          return (
            <path
              key={i}
              d={p.area(top, () => 0, l, r)}
              fill="#6083bd"
              fillOpacity="0.23"
              stroke="#6083bd"
              strokeWidth="0.7"
            />
          );
        })}
        {p.line(fn, "#344de8")}
      </>
    );
  }
  if (k === "signed-area") {
    const lo = spec.function === "velocity" ? 0 : -1,
      hi =
        spec.function === "velocity" ? Math.max(0, b * 3) : Math.max(-0.95, b),
      zero = spec.function === "velocity" ? 1 : 0;
    const signed = integrate(fn, lo, hi),
      distance = integrate((z) => Math.abs(fn(z)), lo, hi);
    stats.push(
      {
        label: spec.function === "velocity" ? "位移" : "定积分",
        value: fmt(signed),
      },
      {
        label: spec.function === "velocity" ? "总路程" : "几何面积",
        value: fmt(distance),
      },
    );
    controls = (
      <Slider
        label={"积分上限 $b$"}
        value={hi}
        min={lo + 0.01}
        max={spec.function === "velocity" ? 3 : 2}
        onChange={(z) => setB(spec.function === "velocity" ? z / 3 : z)}
      />
    );
    overlay = (p) => (
      <>
        <path
          d={p.area(fn, () => 0, lo, Math.min(hi, zero))}
          fill="#cc9b73"
          fillOpacity="0.3"
        />
        {hi > zero && (
          <path
            d={p.area(fn, () => 0, zero, hi)}
            fill="#85ac81"
            fillOpacity="0.3"
          />
        )}
        {p.line(fn, "#344de8")}
      </>
    );
  }
  if (k === "accumulation") {
    const xx = Math.max(0, Math.min(1, x));
    range = [0, 1.1, 0, 1.15];
    stats.push(
      { label: "累积 $A (x) = \\frac{x^{3}}{3}$", value: fmt(xx ** 3 / 3) },
      { label: "$A' (x) = f (x)$", value: fmt(xx * xx) },
    );
    controls = (
      <Slider label={"累积上限 $x$"} value={xx} min={0} max={1} onChange={setX} />
    );
    overlay = (p) => (
      <>
        <path
          d={p.area(fn, () => 0, 0, xx)}
          fill="#84aa79"
          fillOpacity="0.23"
        />
        <rect
          x={p.X(xx)}
          y={p.Y(fn(xx))}
          width={6}
          height={p.Y(0) - p.Y(fn(xx))}
          fill="#2861ba"
        />
        {p.point(xx, fn(xx))}
        {p.line(z=>z**3/3,"#487454")}
        {p.line(z=>xx**3/3+xx*xx*(z-xx),"#bf8b38",true)}
        {p.point(xx,xx**3/3,"#487454")}
      </>
    );
    extra = <Formula latex="A(x)=\int_0^x t^2dt,\quad A\prime(x)=x^2" />;
  }
  if (k === "area-between") {
    range = [0, 1.1, 0, 1.2];
    const xx = Math.max(0, Math.min(1, x));
    stats.push(
      { label: "条带高度 $x - x^{2}$", value: fmt(xx - xx * xx) },
      { label: "总面积", value: "$\\frac{1}{6}\\approx0.16667$" },
    );
    controls = (
      <Slider label={"条带位置 $x$"} value={xx} min={0} max={1} onChange={setX} />
    );
    overlay = (p) => (
      <>
        <path
          d={p.area(
            (z) => z,
            (z) => z * z,
            0,
            1,
          )}
          fill="#87b082"
          fillOpacity="0.24"
        />
        {p.line((z) => z, "#2861ba")}
        {p.line(fn, "#344de8")}
        <line
          x1={p.X(xx)}
          x2={p.X(xx)}
          y1={p.Y(xx)}
          y2={p.Y(xx * xx)}
          stroke="#bf8b38"
          strokeWidth="5"
        />
      </>
    );
  }
  if (k === "disk" || k === "shell") {
    range = [0, 1.1, 0, 1.2];
    const xx = Math.max(0.01, Math.min(1, x)),
      yy = fn(xx);
    stats.push(
      {
        label: k === "disk" ? "圆盘半径" : "壳半径",
        value: fmt(k === "disk" ? yy : xx),
      },
      {
        label: k === "disk" ? "截面积 $\\pi r^2$" : "单位厚度体积 $2\\pi rh$",
        value: fmt(k === "disk" ? Math.PI * yy * yy : 2 * Math.PI * xx * yy),
      },
      { label: "总体积", value: "$\\frac{\\pi}{2}$" },
    );
    controls = (
      <Slider
        label={"切片位置 $x$"}
        value={xx}
        min={0.01}
        max={1}
        onChange={setX}
      />
    );
    overlay = (p) => (
      <>
        <path d={p.area(fn, () => 0, 0, 1)} fill="#87b082" fillOpacity="0.2" />
        <line
          x1={p.X(xx)}
          x2={p.X(xx)}
          y1={p.Y(0)}
          y2={p.Y(yy)}
          stroke="#bf8b38"
          strokeWidth="4"
        />
      </>
    );
    extra = (
      <svg
        viewBox="0 0 300 100"
        className="small-diagram"
        role="img"
        aria-label={
          k === "disk" ? "圆盘截面示意" : "圆柱壳示意，透视图不表示真实比例"
        }
      >
        {k === "disk" ? (
          <ellipse
            cx="150"
            cy="48"
            rx={yy * 65}
            ry={yy * 35}
            fill="#e7ecd6"
            stroke="#344de8"
          />
        ) : (
          <g>
            <ellipse
              cx="150"
              cy={75 - yy * 55}
              rx={xx * 70}
              ry={xx * 16}
              fill="#e7ecd6"
              stroke="#344de8"
            />
            <path
              d={`M${150 - xx * 70},${75 - yy * 55}V75 M${150 + xx * 70},${75 - yy * 55}V75`}
              stroke="#344de8"
            />
            <ellipse
              cx="150"
              cy="75"
              rx={xx * 70}
              ry={xx * 16}
              fill="none"
              stroke="#344de8"
            />
          </g>
        )}
        <text x="12" y="96">
          旋转示意 · 非等比例投影
        </text>
      </svg>
    );
  }
  if (k === "arc") {
    range = [0, 1.05, 0, 0.8];
    const length = arcLength(fn, 0, 1, n),
      exact = (2 / 3) * (2 * Math.sqrt(2) - 1);
    stats.push(
      { label: "折线长度", value: fmt(length) },
      { label: "精确弧长", value: fmt(exact) },
      { label: "误差", value: fmt(length - exact) },
    );
    controls = (
      <Slider
        label={"折线段数 $n$"}
        value={n}
        min={1}
        max={80}
        step={1}
        onChange={setN}
      />
    );
    overlay = (p) => (
      <polyline
        points={Array.from(
          { length: n + 1 },
          (_, i) => `${p.X(i / n)},${p.Y(fn(i / n))}`,
        ).join(" ")}
        stroke="#2861ba"
        fill="none"
        strokeWidth="2"
      />
    );
  }
  const canPlay = [
    "limit",
    "derivative",
    "riemann",
    "arc",
    "accumulation",
    "area-between",
    "disk",
    "shell",
    "chain",
    "substitution",
  ].includes(k);
  return (
    <section
      ref={cardRef}
      onChangeCapture={()=>{setPlaying(false);setPlaybackComplete(false);}}
      onClickCapture={e=>{if((e.target as Element).closest('button'))setPlaybackComplete(false);}}
      onFocusCapture={e=>{if((e.target as Element).closest(".parameter-value"))setPlaying(false);}}
      className={`visual-card ${compact ? "compact" : ""}`}
      aria-label={"交互演示"}
    >
      <header>
        <div>
          <span className="eyebrow">EXPLORE THE IDEA</span>
          <h3>图形与读数</h3>
        </div>
        <button className="icon-btn" onClick={reset} aria-label={"重置演示"}>
          <RotateCcw size={17} />
        </button>
      </header>
      {(lesson.id === "limit-intuition" ||
        lesson.id === "derivative-definition") && (
        <div className="comparison-tabs" role="group" aria-label={"对比数学情形"}>
          <button
            aria-pressed={comparison === "original"}
            className={comparison === "original" ? "active" : ""}
            onClick={() => {
              setComparison("original");
              setA(initialA);
              setH(1);
              setPlaying(false);
            }}
          >
            <MathText text={k === "limit" ? "有孔洞，极限存在" : "$x^2$ 的光滑曲线"} />
          </button>
          <button
            aria-pressed={comparison !== "original"}
            className={comparison !== "original" ? "active" : ""}
            onClick={() => {
              setComparison(k === "limit" ? "jump" : "corner");
              setA(k === "limit" ? 1 : 0);
              setH(1);
              setPlaying(false);
            }}
          >
            <MathText text={k === "limit" ? "左右不同，极限不存在" : "$|x|$ 的尖角，检查可导性"} />
          </button>
        </div>
      )}
      <div className="plot-label">
        <span className="plot-equation"><MathText text={
          comparison==="filled" ? `$x\\ne1$：$x+1$；$x=1$：$${fmt(c)}$`
          : k === "chain" || k === "substitution" ? "$u=x^2+1$"
          : k === "transform" ? "$y=(x-h)^2+k$"
          : k === "related" ? "$y=\\sqrt{25-x^2}$"
          : k === "antiderivative" ? "$F(x)=\\frac{x^3}{3}+C$"
          : F.label
        } /></span>
        <span>拖动滑块，比较数值与图像</span>
      </div>
      <Plot
        fn={fn}
        range={range}
        title={plainMathText(`${lesson.title}：${caption}`)}
        onX={k === "graph" ? setX : undefined}
      >
        {overlay}
      </Plot>
      {extra}
      {isTangent&&<div className="plot-legend"><span><i className="legend-function"/>函数曲线</span><span><i className="legend-tangent"/>切线（虚线）</span>{k==="derivative"&&<span><i className="legend-secant"/>割线</span>}</div>}
      {k==="accumulation"&&<div className="plot-legend"><span><i className="legend-function"/>被积函数的高度</span><span><i style={{borderColor:"#487454"}}/>累积函数</span><span><i className="legend-tangent"/>累积函数的切线</span></div>}
      {k==="signed-area"&&<div className="plot-legend"><span><i className="legend-positive"/>横轴上方：正贡献</span><span><i className="legend-negative"/>横轴下方：负贡献</span></div>}
      {comparison !== "original" && (
        <p className="comparison-insight">
          <MathText text={comparison === "filled"
            ? (c===2?"点值与左右极限都为 $2$，补后的函数在这里连续。":"左右极限仍为 $2$，但现在的点值不同，所以仍不连续。")
            : comparison === "jump"
            ? "左侧极限为 $1$，右侧极限为 $3$。把距离缩得再小，也不会变成同一个数。"
            : "在 $a=0$，右侧差商为 $1$，左侧为 $-1$。函数连续，却没有唯一的导数。切换第二点方向检查。"} />
        </p>
      )}
      <div className="stats">
        {stats.map((s) => (
          <div key={s.label}>
            <span><MathText text={s.label} /></span>
            <strong><MathText text={s.value} /></strong>
          </div>
        ))}
      </div>
      <div className="controls">{controls}</div>
      {canPlay && (
        <div className="animation-transport">
          <button
            className="animation-btn"
            onClick={() => {
              if (!playing) {
                setPlaybackComplete(false);
                if (k === "limit" || k === "derivative") {
                  if (h <= MIN_APPROACH_DISTANCE) setH(1);
                } else if (k === "riemann" || k === "arc") {
                  if (n >= MAX_REFINEMENT) setN(4);
                } else {
                  const min = k === "chain" ? -1.5 : ["disk", "shell"].includes(k) ? .01 : 0;
                  const max = k === "chain" ? 1.5 : 1;
                  if (x >= max) setX(min);
                }
              }
              setPlaying((z) => !z);
            }}
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}{" "}
            {playing
              ? "暂停动画"
              : k === "limit"
                ? "让 x 靠近目标"
                : k === "derivative"
                  ? "让割线靠近切线"
                  : k === "riemann" || k === "arc"
                    ? "逐渐细分"
                    : "播放参数变化"}
          </button>
          <label>
            速度
            <select
              aria-label={"动画速度"}
              value={speed}
              onChange={(e) => setSpeed(+e.target.value)}
            >
              <option value={0.5}>0.5×</option>
              <option value={1}>1×</option>
              <option value={2}>2×</option>
            </select>
          </label>
        </div>
      )}
      {playbackComplete && <p className="playback-finish" role="status"><MathText text={
        k === 'derivative' ? '已到最小距离 $h=0.0001$。两点仍未重合，读数仍是差商。'
        : k === 'limit' ? '已到最小距离 $|x-a|=0.0001$。移动点仍不等于目标点。'
        : k === 'riemann' || k === 'arc' ? '已到最大分割数 $n=80$。这是有限近似，仍需与精确值比较。'
        : '本次参数变化已播完。可以重新播放，或手动调整。'
      }/></p>}
      <p className="visual-caption">
        <MoveHorizontal size={15} />
        <span><MathText text={caption} /></span>
      </p>
      <p className="visual-note">
        图像用于探索；有限采样与动画不能替代正文中的数学论证。
      </p>
    </section>
  );
}

/** A read-only snapshot of the same model used in the interactive lesson. */
export function VisualPreview({ lesson }: { lesson: Lesson }) {
  if(lesson.interactiveVisual.kind==="analysis")return <AnalysisPreview lesson={lesson}/>;
  if(lesson.interactiveVisual.kind==="discrete")return <DiscretePreview lesson={lesson}/>;
  if(lesson.interactiveVisual.kind==="probability")return <ProbabilityPreview lesson={lesson}/>;
  if(['calculus3','linear-algebra','ode'].includes(lesson.interactiveVisual.kind))return <Calculus3Preview lesson={lesson}/>;
  if(lesson.interactiveVisual.kind==="calculus2")return <Calculus2Preview lesson={lesson}/>;
  const spec = lesson.interactiveVisual;
  const F = functions[spec.function];
  const a = spec.a ?? 1;
  const integral = [
    "riemann",
    "signed-area",
    "accumulation",
    "area-between",
    "disk",
    "shell",
  ].includes(spec.kind);
  return (
    <Plot fn={F.f} range={F.range} title={plainMathText(lesson.title) + "：数学模型预览"}>
      {(p) => (
        <>
          {integral && (
            <path d={p.area(F.f, () => 0, 0, 1)} fill="#8396ff" opacity=".22" />
          )}
          {spec.kind === "derivative" &&
            Number.isFinite(F.d(a)) &&
            p.line((x) => F.f(a) + F.d(a) * (x - a), "#bf8b38", true)}
          {spec.kind === "derivative" && p.point(a, F.f(a))}
          {F.hole && p.point(F.hole[0], F.hole[1], "#344de8", true)}
        </>
      )}
    </Plot>
  );
}
