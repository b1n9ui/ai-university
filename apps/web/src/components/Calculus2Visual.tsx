import {tr, localizeNode} from "../i18n";
import { useEffect, useId, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import type {
  Lesson,
  TeachingPreset,
} from "../../../../packages/content/types";
import {
  calculus2Controls,
  calculus2Defaults,
  calculus2Frame,
  calculus2Playback,
  familyFor,
  type Frame,
} from "../../../../packages/visuals/calculus2.mjs";
import { Formula, MathText } from "./MathText";
import { ParameterControl } from "./ParameterControl";
export function Calculus2Plot({
  frame,
  title,
}: {
  frame: Frame;
  title: string;
}) {
  const clip = "c2-" + useId().replaceAll(":", "");
  let [a, b, c, d] = frame.range;
  const W = frame.equalAspect ? 560 : 640,
    H = frame.equalAspect ? 440 : 370,
    P = 45;
  if (frame.equalAspect) {
    const scale = Math.min((W - 2 * P) / (b - a), (H - 2 * P) / (d - c)),
      cx = (a + b) / 2,
      cy = (c + d) / 2,
      rx = (W - 2 * P) / (2 * scale),
      ry = (H - 2 * P) / (2 * scale);
    a = cx - rx;
    b = cx + rx;
    c = cy - ry;
    d = cy + ry;
  }
  const X = (x: number) => P + ((x - a) / (b - a)) * (W - 2 * P),
    Y = (y: number) => H - P - ((y - c) / (d - c)) * (H - 2 * P);
  const path = (pts: number[][]) => {
    let started = false;
    return pts
      .map(([x, y]) => {
        const xx = X(x),
          yy = Y(y);
        if (
          !Number.isFinite(xx) ||
          !Number.isFinite(yy) ||
          Math.abs(yy) > 1e6
        ) {
          started = false;
          return "";
        }
        const cmd = started ? "L" : "M";
        started = true;
        return `${cmd}${xx.toFixed(3)},${yy.toFixed(3)}`;
      })
      .join(" ");
  };
  const number = (x: number) =>
    Math.abs(x) >= 10000 ? x.toExponential(0) : Number(x.toFixed(2)).toString();
  const base = frame.area?.length
    ? [[frame.area[0][0], 0], ...frame.area, [frame.area.at(-1)![0], 0]]
    : null;
  return (
    <svg
      className="plot calculus2-plot"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={tr(title)}
    >
      <title>{localizeNode(title)}</title>
      <desc>{tr("蓝色为数学模型，金色为近似或对照。有限窗口会裁切超出范围的曲线，图示不代替证明。下面的控件支持键盘与数值输入。")}</desc>
      <defs>
        <marker
          id={clip + "-arrow"}
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#bb98e5" />
        </marker>
        <clipPath id={clip}>
          <rect x={P} y={P} width={W - 2 * P} height={H - 2 * P} />
        </clipPath>
      </defs>
      {localizeNode(Array.from({ length: 6 }, (_, i) => {
        const x = a + ((b - a) * i) / 5,
          y = c + ((d - c) * i) / 5;
        return (
          <g key={i}>
            <line x1={X(x)} x2={X(x)} y1={P} y2={H - P} stroke="#e0e7df" />
            <line x1={P} x2={W - P} y1={Y(y)} y2={Y(y)} stroke="#e0e7df" />
            <text x={X(x)} y={H - P + 18} textAnchor="middle">
              {localizeNode(number(x))}
            </text>
            <text x={P - 7} y={Y(y) + 4} textAnchor="end">
              {localizeNode(number(y))}
            </text>
          </g>
        );
      }))}
      <g clipPath={`url(#${clip})`}>
        {localizeNode(base && <path d={path(base) + " Z"} fill="#55aaba" opacity=".16" />)}
        {localizeNode(frame.field.map(([x, y, slope], i) => {
          const angle = Math.atan2(
              (-slope * (H - 2 * P)) / (d - c),
              (W - 2 * P) / (b - a),
            ),
            dx = 7 * Math.cos(angle),
            dy = 7 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={X(x) - dx}
              y1={Y(y) - dy}
              x2={X(x) + dx}
              y2={Y(y) + dy}
              stroke="#b7c8b8"
              strokeWidth="1.2"
            />
          );
        }))}
        {localizeNode(frame.lines.map((l, i) => (
          <path
            key={i}
            d={path(l.points)}
            fill="none"
            stroke={
              l.color === "#70c4de"
                ? "#3576a5"
                : l.color === "#dbb979"
                  ? "#ad7838"
                  : l.color
            }
            strokeWidth={l.dash ? 1.5 : 2.5}
            markerEnd={
              l.label === "速度向量" ? `url(#${clip}-arrow)` : undefined
            }
            strokeDasharray={l.dash ? "5 5" : undefined}
          />
        )))}
        {localizeNode(frame.dots
          .filter((p) => p.every(Number.isFinite))
          .map(([x, y], i) => (
            <circle
              key={i}
              cx={X(x)}
              cy={Y(y)}
              r={frame.dots.length > 30 ? 2.1 : 3.7}
              fill="#246a7b"
              stroke="#f4fff3"
              strokeWidth="1.2"
            />
          )))}
      </g>
      <text x={W - P} y={H - 7} textAnchor="end">
        {localizeNode(frame.axes[0])}
      </text>
      <text x={P} y={20}>
        {localizeNode(frame.axes[1])}
      </text>
    </svg>
  );
}
export function Calculus2Visual({
  lesson,
  scenario,
  compact = false,
}: {
  lesson: Lesson;
  scenario?: TeachingPreset & { revision: number };
  compact?: boolean;
}) {
  const controls = calculus2Controls(lesson.id),
    defaults = calculus2Defaults(lesson.id);
  const [values, setValues] = useState(defaults),
    [playing, setPlaying] = useState(false),
    [done, setDone] = useState(false),
    [speed, setSpeed] = useState(1),
    [curve, setCurve] = useState("cardioid");
  const card = useRef<HTMLElement>(null),
    seed = useRef(defaults);
  useEffect(() => {
    setPlaying(false);
    setDone(false);
    setCurve("cardioid");
    const next = { ...defaults };
    for (const c of controls) {
      const v = scenario?.[c.key as keyof TeachingPreset];
      if (typeof v === "number") next[c.key] = v;
    }
    setValues(next);
  }, [scenario, lesson.id]);
  useEffect(() => {
    if (!playing) return;
    let request = 0,
      last = 0,
      elapsed = 0;
    const tick = (now: number) => {
      if (document.hidden) {
        setPlaying(false);
        return;
      }
      elapsed += last ? Math.min(0.1, (now - last) / 1000) * speed : 0;
      last = now;
      const frame = calculus2Playback(lesson.id, seed.current, elapsed);
      setValues((v) => ({ ...v, [frame.key]: frame.value }));
      if (frame.done) {
        setPlaying(false);
        setDone(true);
      } else request = requestAnimationFrame(tick);
    };
    request = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(request);
  }, [playing, speed, lesson.id]);
  useEffect(() => {
    const el = card.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) setPlaying(false);
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
  const frame = calculus2Frame(lesson.id, values, curve);
  const update = (key: string, value: number) => {
    setPlaying(false);
    setDone(false);
    const spec = controls.find((c) => c.key === key)!;
    if (spec.step === 2)
      value = Math.max(spec.min, Math.min(spec.max, Math.round(value / 2) * 2));
    setValues((v) => ({ ...v, [key]: value }));
  };
  function play() {
    if (playing) {
      setPlaying(false);
      return;
    }
    const target = calculus2Playback(lesson.id, values, 6),
      next = { ...values };
    if (values[target.key] === target.value) {
      const primary = controls.find((c) => c.key === target.key)!;
      next[target.key] = target.key === "h" ? primary.max : primary.min;
      setValues(next);
    }
    seed.current = next;
    setDone(false);
    setPlaying(true);
  }
  return (
    <section
      ref={card}
      className={"visual-card calculus2-visual " + (compact ? "compact" : "")}
      aria-label={tr("交互演示")}
    >
      <div className="visual-heading">
        <div>
          <span className="eyebrow">EXPLORE THE IDEA / CALCULUS II</span>
          <h3>{localizeNode(lesson.title)}</h3>
        </div>
        <button
          className="icon-btn"
          aria-label={tr("重置演示")}
          onClick={() => {
            setPlaying(false);
            setDone(false);
            setValues(defaults);
            setCurve("cardioid");
          }}
        >
          <RotateCcw size={17} />
        </button>
      </div>
      <div className="c2-formula">
        <Formula latex={frame.formula} />
      </div>
      {localizeNode(familyFor(lesson.id) === "polar" && (
        <label className="c2-curve-select">{tr("曲线")}<select
            aria-label={tr("切换极坐标曲线")}
            value={curve}
            onChange={(e) => {
              setPlaying(false);
              setDone(false);
              setCurve(e.target.value);
            }}
          >
            <option value="cardioid">{tr("心形线：非负半径")}</option>
            <option value="rose">{tr("玫瑰线：观察负半径")}</option>
          </select>
        </label>
      ))}
      <Calculus2Plot frame={frame} title={tr(lesson.title)} />
      <div className="c2-legend">
        {localizeNode(frame.lines.map((l, i) => (
          <span key={i}>
            <i style={{ background: l.color }} />
            {localizeNode(l.label)}
          </span>
        )))}
      </div>
      <div className="c2-readouts">
        {localizeNode(frame.stats.map((s) => (
          <div key={s.label}>
            <small>
              <MathText text={tr(s.label)} />
            </small>
            <strong>{localizeNode(s.value)}</strong>
          </div>
        )))}
      </div>
      <div className="controls">
        {localizeNode(controls.map((c) => (
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
            <option value="0.5">0.5×</option>
            <option value="1">1×</option>
            <option value="2">2×</option>
          </select>
        </label>
      </div>
      {localizeNode(done && (
        <p className="playback-finish" role="status">{tr("已到本次演示的参数终点。图中仍是有限截断或有限精度计算；收敛与误差条件见正文。")}</p>
      ))}
      <p className="visual-caption">
        <span>
          <MathText
            text={
              tr(familyFor(lesson.id) === "polar" && curve === "rose"
                ? "当前曲线为 $r=2\\cos(2\\theta)$。负半径把点放在角度反方向；阴影按参数扫过，可能重叠。"
                : lesson.interactiveVisual.caption)
            }
          />
        </span>
      </p>
      <p className="visual-disclaimer">{tr("读数保留有限精度。")}{localizeNode(frame.note)}</p>
    </section>
  );
}
export function Calculus2Preview({ lesson }: { lesson: Lesson }) {
  const frame = calculus2Frame(lesson.id, calculus2Defaults(lesson.id));
  return <Calculus2Plot frame={frame} title={tr(lesson.title)} />;
}
