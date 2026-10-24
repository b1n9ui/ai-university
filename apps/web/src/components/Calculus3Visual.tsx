import {tr, localizeNode} from "../i18n";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  RotateCcw,
  Play,
  Pause,
  Plus,
  Minus,
  Move3D,
  ArrowUpRight,
} from "lucide-react";
import type {
  Lesson,
  TeachingPreset,
} from "../../../../packages/content/types";
import {
  calculus3Controls,
  calculus3Defaults,
  calculus3Frame,
  calculus3Playback,
  projectPoint,
  add,
  type Frame3,
} from "../../../../packages/visuals/calculus3.mjs";
import { Formula, MathText, plainMathText } from "./MathText";
import { ParameterControl } from "./ParameterControl";
import {linearControls,linearDefaults,linearFrame,linearPlayback,type LinearControl} from '../../../../packages/visuals/linear-algebra.mjs';
import {odeControls,odeDefaults,odeFrame,odePlayback} from '../../../../packages/visuals/ode.mjs';
type View = "space" | "top" | "front";
type Camera = { yaw: number; elevation: number; zoom: number };
const initialCamera: Camera = { yaw: -0.85, elevation: 0.58, zoom: 1 };
export function SpatialPlot({
  frame,
  title,
  interactive = false,
  view = "space",
  camera = initialCamera,
  onCamera,
  onPlanarPoint,
}: {
  frame: Frame3;
  title: string;
  interactive?: boolean;
  view?: View;
  camera?: Camera;
  onCamera?: (c: Camera) => void;
  onPlanarPoint?: (point: number[]) => void;
}) {
  const W = 680,
    H = 460,
    pad = 32,
    id = useId().replace(/:/g, ""),
    drag = useRef<{ x: number; y: number; camera: Camera } | null>(null),
    pointDrag = useRef(false);
  const planar=frame.dimension===2;
  const yaw = view === "top" ? 0 : view === "front" ? 0 : camera.yaw,
    el = view === "top" ? Math.PI / 2 : view === "front" ? 0 : camera.elevation,
    s = ((H - 2 * pad) / (2 * frame.extent)) * camera.zoom;
  const project = (p: number[]) => {
    const q = planar ? [p[0]-frame.focus[0],p[1]-frame.focus[1],0] : projectPoint(
      p.map((v, i) => v - frame.focus[i]),
      yaw,
      el,
    );
    return [W / 2 + s * q[0], H * 0.52 - s * q[1], q[2]];
  };
  const setPoint = (e: React.PointerEvent<SVGSVGElement>) => {
    const matrix=e.currentTarget.getScreenCTM();
    if(!matrix||!onPlanarPoint)return;
    const q=new DOMPoint(e.clientX,e.clientY).matrixTransform(matrix.inverse());
    onPlanarPoint([frame.focus[0]+(q.x-W/2)/s,frame.focus[1]-(q.y-H*.52)/s]);
  };
  const path = (ps: number[][]) =>
    ps
      .map((p, i) => {
        const q = project(p);
        return (i ? "L" : "M") + q[0].toFixed(3) + "," + q[1].toFixed(3);
      })
      .join("");
  const polygons = frame.polygons
    .map((poly) => ({
      ...poly,
      depth:
        poly.points.reduce((a, p) => a + project(p)[2], 0) / poly.points.length,
    }))
    .sort((a, b) => a.depth - b.depth);
  const change = (dyaw: number, del: number, dzoom = 0) =>
    onCamera?.({
      ...camera,
      yaw: camera.yaw + dyaw,
      elevation: Math.max(-1.4, Math.min(1.5, camera.elevation + del)),
      zoom: Math.max(0.6, Math.min(1.9, camera.zoom + dzoom)),
    });
  return (
    <svg
      className={"spatial-plot" + (interactive ? " spatial-interactive" : "")+(planar?' linear-planar-plot':'')+(onPlanarPoint?' ode-initial-plot':'')}
      viewBox={"0 0 " + W + " " + H}
      role="img"
      aria-label={
        tr(title +
        "；" +
        (planar ? "二维坐标图" : view === "space"
          ? "可旋转三维图"
          : view === "top"
            ? "俯视投影"
            : "正视投影"))
      }
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (!interactive) return;
        if(planar&&e.key.startsWith('Arrow'))return;
        const actions: Record<string, () => void> = {
          ArrowLeft: () => change(-0.12, 0),
          ArrowRight: () => change(0.12, 0),
          ArrowUp: () => change(0, 0.1),
          ArrowDown: () => change(0, -0.1),
          "+": () => change(0, 0, 0.1),
          "=": () => change(0, 0, 0.1),
          "-": () => change(0, 0, -0.1),
          Home: () => onCamera?.(initialCamera),
        };
        if (actions[e.key]) {
          e.preventDefault();
          actions[e.key]();
        }
      }}
      onDragStart={(e) => e.preventDefault()}
      onPointerDown={(e) => {
        if (!interactive || e.button !== 0) return;
        // Keep the gesture on the plot instead of starting native SVG text selection.
        e.preventDefault();
        e.currentTarget.focus({ preventScroll: true });
        if(planar&&onPlanarPoint){
          e.currentTarget.setPointerCapture(e.pointerId);
          pointDrag.current=true;
          setPoint(e);
          return;
        }
        if (view !== "space" || planar) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = { x: e.clientX, y: e.clientY, camera };
      }}
      onPointerMove={(e) => {
        if(pointDrag.current&&interactive&&planar){setPoint(e);return;}
        if (!drag.current || !interactive || view !== "space" || planar) return;
        const d = drag.current;
        onCamera?.({
          ...d.camera,
          yaw: d.camera.yaw + (e.clientX - d.x) * 0.008,
          elevation: Math.max(
            -1.4,
            Math.min(1.5, d.camera.elevation + (e.clientY - d.y) * 0.008),
          ),
        });
      }}
      onPointerUp={(e) => {
        pointDrag.current=false;
        drag.current = null;
        if (e.currentTarget.hasPointerCapture(e.pointerId))
          e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => {
        pointDrag.current=false;
        drag.current = null;
      }}
      onLostPointerCapture={() => {
        pointDrag.current=false;
        drag.current = null;
      }}
    >
      <title>{localizeNode(title)}</title>
      <desc>
        {localizeNode(planar?'二维坐标图，横轴向右、纵轴向上。加减键缩放，Home 恢复。':'三维几何，三轴使用相同单位。拖动或方向键旋转，加减键缩放，Home 恢复；可切换俯视或正视。')}{tr("数值与公式在图下提供。")}</desc>
      <defs>
        <radialGradient id={"glow" + id}>
          <stop stopColor="#294c43" stopOpacity=".6" />
          <stop offset="1" stopColor="#0a2023" stopOpacity="0" />
        </radialGradient>
        <clipPath id={"clip" + id}>
          <rect x="1" y="1" width={W - 2} height={H - 2} rx="12" />
        </clipPath>
      </defs>
      <rect width={W} height={H} fill={"url(#glow" + id + ")"} />
      <g clipPath={"url(#clip" + id + ")"}>
        {localizeNode(frame.lines
          .filter((l) => !l.label)
          .map((l, i) => (
            <path
              key={"grid" + i}
              d={path(l.points)}
              fill="none"
              stroke={l.color}
              strokeWidth=".8"
              strokeOpacity=".5"
            />
          )))}
        {localizeNode(polygons.map((p, i) => (
          <path
            key={"face" + i}
            d={path(p.points) + "Z"}
            fill={p.color}
            fillOpacity={p.opacity}
            stroke={p.color}
            strokeOpacity={Math.min(0.3, p.opacity + 0.05)}
            strokeWidth=".55"
          />
        )))}
        {localizeNode((planar?[0,1]:[0,1,2]).map((axis) => {
          const from = [0, 0, 0],
            to = [0, 0, 0];
          from[axis] = planar?frame.focus[axis]-frame.extent*.9:-2;
          to[axis] = planar?frame.focus[axis]+frame.extent*.9:2.3;
          const power=10**Math.floor(Math.log10(frame.extent));
          const step=power*(frame.extent/power<2?.5:frame.extent/power<5?1:2);
          const ticks=planar?Array.from({length:Math.ceil(2*frame.extent/step)+1},(_,i)=>(Math.ceil((frame.focus[axis]-frame.extent*.8)/step)+i)*step).filter(x=>x!==0&&x<frame.focus[axis]+frame.extent*.8):[-1,1,2];
          const end = project(to);
          return (
            <g key={axis}>
              <path
                d={path([from, to])}
                stroke={["#a6d09f", "#75c3d4", "#e0bd80"][axis]}
                strokeOpacity=".65"
                strokeDasharray="4 5"
                fill="none"
              />
              <text
                x={end[0] + 7}
                y={end[1] - 7}
                className="axis-letter"
                fill={["#bfe3b6", "#9bd7e6", "#eed3aa"][axis]}
              >
                {localizeNode((frame.axisLabels??["x", "y", "z"])[axis])}
              </text>
              {localizeNode(ticks.map((v) => {
                const point = [0, 0, 0];
                point[axis] = v;
                const q = project(point);
                return (
                  <text
                    key={v}
                    x={q[0] + 4}
                    y={q[1] + 13}
                    fill="#aec1b1"
                    fontSize="10"
                  >
                    {localizeNode(v)}
                  </text>
                );
              }))}
            </g>
          );
        }))}
        {localizeNode(frame.lines
          .filter((l) => !!l.label)
          .map((l, i) => (
            <path
              key={"line" + i}
              d={path(l.points)}
              fill="none"
              stroke={l.color}
              strokeWidth="2.3"
              strokeDasharray={l.dash ? "5 5" : undefined}
              strokeLinecap="round"
            />
          )))}
        {localizeNode(frame.arrows.map((a, i) => {
          const p = project(a.at),
            q = project(add(a.at, a.vector)),
            dx = q[0] - p[0],
            dy = q[1] - p[1],
            len = Math.hypot(dx, dy);
          if (len < 0.3) return null;
          const ux = dx / len,
            uy = dy / len,
            h = Math.min(9, len * 0.35),
            w = h * 0.45;
          return (
            <g key={"arrow" + i}>
              <title>{localizeNode(a.label ? plainMathText(a.label) : "场向量")}</title>
              <path
                d={"M" + p[0] + "," + p[1] + "L" + q[0] + "," + q[1]}
                stroke={a.color}
                strokeWidth="2"
                fill="none"
              />
              <path
                d={
                  "M" +
                  q[0] +
                  "," +
                  q[1] +
                  "L" +
                  (q[0] - h * ux + w * uy) +
                  "," +
                  (q[1] - h * uy - w * ux) +
                  "L" +
                  (q[0] - h * ux - w * uy) +
                  "," +
                  (q[1] - h * uy + w * ux) +
                  "Z"
                }
                fill={a.color}
              />
            </g>
          );
        }))}
        {localizeNode(frame.dots.map((d, i) => {
          const q = project(d.at);
          return (
            <g key={"dot" + i}>
              <circle
                cx={q[0]}
                cy={q[1]}
                r="10"
                fill={d.color}
                fillOpacity=".12"
              />
              <circle
                cx={q[0]}
                cy={q[1]}
                r="4.5"
                fill={d.color}
                stroke="#fff9dd"
                strokeWidth="1.2"
              />
              {localizeNode(d.label && (
                <text x={q[0] + 12} y={q[1] - 12} fill={d.color} fontSize="12">
                  {localizeNode(plainMathText(d.label))}
                </text>
              ))}
            </g>
          );
        }))}
      </g>
      {localizeNode(interactive && (
        <text x="20" y={H - 18} fill="#9ebcac" fontSize="11">
          {localizeNode(planar ? "加减键缩放 · Home 恢复" : view === "space"
            ? "拖动旋转 · 方向键也可操作"
            : view === "top"
              ? "俯视：高度被投影到同一平面"
              : "正视：纵向深度被压缩")}
        </text>
      ))}
    </svg>
  );
}
export default function Calculus3Visual({
  lesson,
  compact = false,
  scenario,
}: {
  lesson: Lesson;
  compact?: boolean;
  scenario?: TeachingPreset & { revision: number };
}) {
  const linear=lesson.interactiveVisual.kind==='linear-algebra';
  const ode=lesson.interactiveVisual.kind==='ode';
  const controls = useMemo<LinearControl[]>(() => ode?odeControls(lesson.id):linear?linearControls(lesson.id):calculus3Controls(lesson.id), [lesson.id,linear,ode]),
    defaults = useMemo(() => ode?odeDefaults(lesson.id):linear?linearDefaults(lesson.id):calculus3Defaults(lesson.id), [lesson.id,linear,ode]);
  const playback=ode?odePlayback:linear?linearPlayback:calculus3Playback;
  const [values, setValues] = useState(defaults),
    [playing, setPlaying] = useState(false),
    [done, setDone] = useState(false),
    [speed, setSpeed] = useState(1),
    [view, setView] = useState<View>("space"),
    [camera, setCamera] = useState(initialCamera);
  const card = useRef<HTMLElement>(null),
    seed = useRef(defaults),
    progress = useRef(0);
  useEffect(() => {
    setPlaying(false);
    setDone(false);
    const next = { ...defaults };
    for (const c of controls) {
      const v = scenario?.[c.key as keyof TeachingPreset];
      if (typeof v === "number") next[c.key] = v;
    }
    setValues(next);
  }, [scenario, lesson.id, defaults, controls]);
  useEffect(() => {
    setView("space");
    setCamera(initialCamera);
  }, [lesson.id]);
  useEffect(() => {
    if (!playing) return;
    let req = 0,
      last = 0;
    const tick = (now: number) => {
      if (document.hidden) {
        setPlaying(false);
        return;
      }
      progress.current += last ? Math.min(0.1, (now - last) / 1000) * speed : 0;
      last = now;
      const a = playback(lesson.id, seed.current, progress.current);
      setValues((v) => ({ ...v, [a.key]: a.value }));
      if (a.done) {
        setPlaying(false);
        setDone(true);
      } else req = requestAnimationFrame(tick);
    };
    req = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(req);
  }, [playing, speed, lesson.id,playback]);
  useEffect(() => {
    const el = card.current;
    if (!el) return;
    const observer = new IntersectionObserver((e) => {
      if (!e[0].isIntersecting) setPlaying(false);
    });
    observer.observe(el);
    const hidden = () => {
      if (document.hidden) setPlaying(false);
    };
    document.addEventListener("visibilitychange", hidden);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", hidden);
    };
  }, []);
  const frame = useMemo(
    () => ode?odeFrame(lesson.id, values):linear?linearFrame(lesson.id, values):calculus3Frame(lesson.id, values),
    [lesson.id, values,linear,ode],
  );
  const legend = [
    ...frame.lines.filter((l) => l.label),
    ...frame.arrows.filter((a) => a.label),
  ].filter(
    (item, i, all) => all.findIndex((a) => a.label === item.label) === i,
  );
  const update = (key: string, v: number) => {
    setPlaying(false);
    setDone(false);
    setValues((p) => ({ ...p, [key]: v }));
  };
  const initialDrag = ode && ['ode-direction-fields','ode-classification','ode-system-reduction','ode-nullclines','ode-linearization-systems'].includes(lesson.id);
  const moveInitial = (point:number[]) => {
    setPlaying(false);setDone(false);
    setValues(previous=>{
      const next={...previous};
      for(const [key,v] of (lesson.id==='ode-direction-fields'||lesson.id==='ode-classification' ? [['a',point[1]]] : [['a',point[0]],['c',point[1]]]) as [string,number][]){
        const control=controls.find(c=>c.key===key);
        if(control)next[key]=Math.round(Math.min(control.max,Math.max(control.min,v))*100)/100;
      }
      return next;
    });
  };
  const reset = () => {
    setPlaying(false);
    setDone(false);
    setValues(defaults);
    setCamera(initialCamera);
    setView("space");
  };
  const play = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    let next = { ...values };
    const target = playback(lesson.id, next, 6);
    if (next[target.key] === target.value) {
      const c = controls.find((c) => c.key === target.key)!;
      next[target.key] = target.key === "h" ? c.max : c.min;
      setValues(next);
    }
    seed.current = next;
    progress.current = 0;
    setDone(false);
    setPlaying(true);
  };
  return (
    <section
      ref={card}
      className={"visual-card calculus3-visual " + (compact ? "compact" : "")}
      aria-label={tr("交互演示")}
    >
      <div className="visual-heading">
        <div>
          <span className="eyebrow">{localizeNode(ode?'ORDINARY DIFFERENTIAL EQUATIONS':linear?'LINEAR ALGEBRA':'SPATIAL THINKING / CALCULUS III')}</span>
          <h3>{localizeNode(lesson.title)}</h3>
        </div>
        <button className="icon-btn" aria-label={tr("重置演示")} onClick={reset}>
          <RotateCcw size={17} />
        </button>
      </div>
      <div className="c3-stage-head">
        <span className="c3-local-badge">
          <Move3D size={13} />
          {localizeNode(ode?'本地动态模型':linear?(frame.dimension===2?'二维图示':'三维图示'):'本地三维几何')}
        </span>
        {localizeNode(frame.dimension!==2&&<div className="c3-views" role="group" aria-label={tr("投影视角")}>
          {localizeNode((
            [
              ["space", "三维"],
              ["top", "俯视"],
              ["front", "正视"],
            ] as const
          ).map(([v, label]) => (
            <button
              key={v}
              aria-pressed={view === v}
              onClick={() => setView(v)}
            >
              {localizeNode(label)}
            </button>
          )))}
        </div>)}
      </div>
      {localizeNode(frame.matrix&&<div className="linear-matrix"><Formula latex={frame.matrix}/></div>)}
      <div className="c3-formula">
        <Formula latex={frame.formula} />
      </div>
      {localizeNode(frame.motion&&<SpringMotion motion={frame.motion}/>)}
      <div className="c3-stage">
        <SpatialPlot
          frame={frame}
          title={tr(lesson.title)}
          interactive
          view={view}
          camera={camera}
          onCamera={setCamera}
          onPlanarPoint={initialDrag?moveInitial:undefined}
        />
        <div className="c3-camera-tools">
          <button
            className="icon-btn"
            aria-label={tr(frame.dimension===2?'放大图形':'放大三维图')}
            onClick={() =>
              setCamera((c) => ({ ...c, zoom: Math.min(1.9, c.zoom + 0.15) }))
            }
          >
            <Plus size={15} />
          </button>
          <button
            className="icon-btn"
            aria-label={tr(frame.dimension===2?'缩小图形':'缩小三维图')}
            onClick={() =>
              setCamera((c) => ({ ...c, zoom: Math.max(0.6, c.zoom - 0.15) }))
            }
          >
            <Minus size={15} />
          </button>
          <button
            className="icon-btn"
            aria-label={tr(frame.dimension===2?'恢复图形视角':'恢复三维视角')}
            onClick={() => {
              setView("space");
              setCamera(initialCamera);
            }}
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>
      {localizeNode(initialDrag&&<p className="ode-drag-hint">{localizeNode(lesson.id==='ode-direction-fields'||lesson.id==='ode-classification'?'在图内上下拖动可调整零时刻的初始值；下方输入框和滑块也可操作。':'在图内拖动可调整初始状态；下方输入框和滑块也可操作。')}</p>)}
      {localizeNode(legend.length > 0 && (
        <div className="c2-legend c3-legend">
          {localizeNode(legend.map((l) => (
            <span key={l.label}>
              <i style={{ background: l.color }} />
              <MathText text={tr(l.label)} />
            </span>
          )))}
        </div>
      ))}
      <div className="c2-readouts">
        {localizeNode(frame.stats.map((s) => (
          <div key={s.label}>
            <small>
              <MathText text={tr(s.label)} />
            </small>
            <strong>
              <MathText text={tr(s.value)} />
            </strong>
          </div>
        )))}
      </div>
      <div className="controls">
        {localizeNode(controls.map((c) => c.options ? <label className="linear-choice" key={c.key}><MathText text={tr(c.label)}/><select aria-label={tr(plainMathText(c.label))} value={values[c.key]} onChange={e=>update(c.key,+e.target.value)}>{localizeNode(c.options.map(o=><option key={o.value} value={o.value}>{localizeNode(o.label)}</option>))}</select></label> : (
          <ParameterControl
            key={c.key}
            label={tr(c.label)}
            min={c.min}
            max={c.max}
            step={c.step}
            value={values[c.key]}
            onChange={(v) => update(c.key, v)}
          />
        )))}
      </div>
      <div className="animation-transport">
        <button className="play-btn" onClick={play}>
          {localizeNode(playing ? <Pause size={16} /> : <Play size={16} />)}{localizeNode(" ")}
          {localizeNode(playing ? "暂停动画" : "自动推进")}
        </button>
        <label>{tr("速度")}<select
            aria-label={tr("动画速度")}
            value={speed}
            onChange={(e) => {
              setPlaying(false);
              setSpeed(+e.target.value);
            }}
          >
            <option value=".5">0.5×</option>
            <option value="1">1×</option>
            <option value="2">2×</option>
          </select>
        </label>
      </div>
      {localizeNode(done && (
        <p className="playback-finish" role="status">
          {localizeNode(linear||ode?'本次参数变化已播完。':'已到本次参数的明确终点。趋零演示保留正数下界；有限图示不等于无穷极限的证明。')}
        </p>
      ))}
      <p className="visual-caption">
        <span>
          <MathText text={tr(lesson.interactiveVisual.caption)} />
        </span>
      </p>
      <p className="visual-disclaimer">{localizeNode(frame.note)}</p>
      {localizeNode(frame.dimension!==2&&<details className="c3-help">
        <summary>
          <ArrowUpRight size={13} />{tr("操作与投影说明")}</summary>
        <p>{tr("三维视图可拖动旋转。点按图形后，方向键旋转、加减号缩放、Home 恢复。手机请在图内拖动，正文区域仍可正常滚动。俯视和正视压缩一个方向；切回三维可以检查遮挡。所有几何在本地用向量坐标计算，无需 WebGL。")}</p>
      </details>)}
    </section>
  );
}
export function Calculus3Preview({ lesson }: { lesson: Lesson }) {
  const frame = lesson.interactiveVisual.kind==='ode'?odeFrame(lesson.id):lesson.interactiveVisual.kind==='linear-algebra'?linearFrame(lesson.id):calculus3Frame(lesson.id);
  return <SpatialPlot frame={frame} title={tr(lesson.title)} />;
}
function SpringMotion({motion}:{motion:NonNullable<Frame3['motion']>}){
  const x=210+80*motion.position/motion.range;
  const spring=Array.from({length:17},(_,i)=>`${i?'L':'M'}${40+(x-65)*i/16},${i===0||i===16?61:i%2?49:73}`).join('');
  return <div className="ode-motion"><span>{tr("运动示意 · 与下图使用同一时刻")}</span><svg viewBox="0 0 400 115" role="img" aria-label={tr(`弹簧运动，时间 ${motion.time.toFixed(2)}，位移 ${motion.position.toFixed(4)}；示意比例在本模型内固定`)}>
    <line x1="22" y1="25" x2="22" y2="92" stroke="#8aaf9d" strokeWidth="4"/>
    <line x1="22" y1="92" x2="380" y2="92" stroke="#607e71"/>
    <line x1="210" y1="20" x2="210" y2="90" stroke="#adc19b" strokeDasharray="4 5" opacity=".5"/>
    <line x1="22" y1="61" x2="40" y2="61" stroke="#a8c9b5" strokeWidth="2"/>
    <path d={spring} stroke="#b9dba7" strokeWidth="2" fill="none"/>
    <rect x={x-25} y="36" width="50" height="50" rx="8" fill="#dbbe80" stroke="#f4e9b8"/>
    <circle cx={x-14} cy="89" r="3" fill="#b2c5b1"/><circle cx={x+14} cy="89" r="3" fill="#b2c5b1"/>
    <text x="210" y="111" textAnchor="middle" fill="#b8cab3" fontSize="10">{tr("平衡位置")}</text>
  </svg></div>;
}
