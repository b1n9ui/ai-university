import {tr, localizeNode} from "../i18n";
import { useEffect, useRef, useState } from "react";
import {
  Maximize2,
  Minus,
  Pause,
  Play,
  Plus,
  RotateCcw,
  RotateCw,
} from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import type { Lesson, TeachingPreset } from "../../../../packages/content/types";
import {
  revolutionGeometry,
  revolutionPoint,
  solidModels,
  solidReadout,
  type SolidModel,
} from "../../../../packages/visuals/solid-models.mjs";
import { Formula, MathText, plainMathText } from "./MathText";
import { ParameterControl } from "./ParameterControl";
const f = (n: number) => Number(n.toFixed(4)).toString();
type View = "perspective" | "front" | "axis";
type Controller = {
  view: (v: View) => void;
  orbit: () => void;
  zoom: (scale: number) => void;
};
function SolidSlider({label,value,min,max,step=1,onChange}:{label:string;value:number;min:number;max:number;step?:number;onChange:(n:number)=>void}) {
  return <ParameterControl label={tr(label)} value={value} min={min} max={max} step={step} onChange={onChange}/>;
}
export default function SolidVisual({
  lesson,
  compact = false,
  scenario,
  onFallback,
}: {
  lesson: Lesson;
  compact?: boolean;
  scenario?: TeachingPreset & {revision:number};
  onFallback: () => void;
}) {
  const kind = lesson.interactiveVisual.kind;
  const [washer, setWasher] = useState(false);
  const model: SolidModel =
    kind === "shell"
      ? "shell"
      : kind === "arc"
        ? "surface"
        : washer
          ? "washer"
          : "disk";
  const [degrees, setDegrees] = useState(270),
    [slice, setSlice] = useState(0.55),
    [wire, setWire] = useState(false),
    [playing, setPlaying] = useState(false),
    [speed, setSpeed] = useState(1),
    [unavailable, setUnavailable] = useState(false);
  const host = useRef<HTMLDivElement>(null),
    controller = useRef<Controller | null>(null),
    renderUpdate = useRef<((d: number, p: number, w: boolean) => void) | null>(
      null,
    );
  const description =
    model === "disk"
      ? "$y=\\sqrt{x}$，$0\\le x\\le1$，绕 $x$ 轴"
      : model === "washer"
        ? "$1\\le y\\le2$，$0\\le x\\le1$，绕 $x$ 轴"
        : model === "shell"
          ? "$0\\le y\\le x^2$，$0\\le x\\le1$，绕 $y$ 轴"
          : "$y=\\frac{2}{3}x^{\\frac{3}{2}}$，$0\\le x\\le1$，绕 $x$ 轴";
  const readout = solidReadout(model, slice, degrees);
  useEffect(()=>{
    if(!scenario)return;
    setPlaying(false);setDegrees(scenario.degrees??270);setSlice(scenario.slice??.55);
    setWasher(scenario.model==="washer");setWire(false);
  },[scenario]);
  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      });
    } catch {
      setUnavailable(true);
      return;
    }
    setUnavailable(false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x09111f, 0);
    const canvas = renderer.domElement;
    canvas.setAttribute(
      "aria-label",
      tr(`${plainMathText(lesson.title)}的三维图。拖动旋转，滚轮缩放；键盘方向键旋转，加减键缩放。`),
    );
    canvas.setAttribute("role", "img");
    canvas.tabIndex = 0;
    canvas.dataset.model = model;
    container.append(canvas);
    const scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);
    const center = new THREE.Vector3(
      ...(model === "shell" ? [0, 0.45, 0] : [0.5, 0, 0]),
    );
    const distance = model === "washer" ? 8 : 4.8;
    camera.position
      .copy(center)
      .add(
        new THREE.Vector3(1.3, 0.8, 1.5).normalize().multiplyScalar(distance),
      );
    const orbit = new OrbitControls(camera, canvas);
    orbit.target.copy(center);
    orbit.enablePan = false;
    orbit.enableDamping = false;
    orbit.minDistance = distance * 0.35;
    orbit.maxDistance = distance * 2;
    orbit.update();
    scene.add(new THREE.HemisphereLight(0xe3f4ff, 0x14263e, 2.2));
    const key = new THREE.DirectionalLight(0xb5dcff, 3);
    key.position.set(3, 5, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x777bff, 3);
    rim.position.set(-3, 1, -4);
    scene.add(rim);
    const grid = new THREE.GridHelper(6, 24, 0x263d5d, 0x16253c);
    grid.position.y = model === "washer" ? -2.15 : -1.15;
    scene.add(grid);
    const axis = solidModels[model].axis,
      dir =
        axis === "y" ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
    const arrow = new THREE.ArrowHelper(
      dir,
      dir.clone().multiplyScalar(-0.4),
      2.3,
      0x91adc5,
      0.1,
      0.045,
    );
    scene.add(arrow);
    const changing = new THREE.Group();
    scene.add(changing);
    const material = new THREE.MeshStandardMaterial({
      color: 0x57c8e9,
      metalness: 0.32,
      roughness: 0.32,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.56,
      depthWrite: false,
    });
    const sliceMaterial = new THREE.MeshStandardMaterial({
      color: 0xffbc61,
      emissive: 0xa84f16,
      emissiveIntensity: 0.2,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.94,
    });
    const sourceMaterial = new THREE.LineBasicMaterial({ color: 0xa9eaff });
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x8ee4ff,
      transparent: true,
      opacity: 0.22,
    });
    let visible = true,
      frame = 0;
    const draw = () => {
      frame = 0;
      if (!visible || document.hidden) return;
      renderer.render(scene, camera);
      canvas.dataset.rendered = "true";
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const disposeChanging = () => {
      for (const child of [...changing.children]) {
        if (
          child instanceof THREE.Mesh ||
          child instanceof THREE.LineSegments ||
          child instanceof THREE.Line
        )
          child.geometry.dispose();
        changing.remove(child);
      }
    };
    const geometry = (positions: Float32Array) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      g.computeVertexNormals();
      return g;
    };
    renderUpdate.current = (angle, p, w) => {
      disposeChanging();
      const g = geometry(revolutionGeometry(model, angle, 40));
      changing.add(new THREE.Mesh(g, material));
      if (w)
        changing.add(
          new THREE.LineSegments(new THREE.WireframeGeometry(g), edgeMaterial),
        );
      // Cyan line is the original generating boundary, before any rotation.
      const m = solidModels[model];
      for (const radial of m.closed ? [m.outer, m.inner] : [m.outer]) {
        const points = Array.from(
          { length: 65 },
          (_, i) =>
            new THREE.Vector3(
              ...revolutionPoint(axis, i / 64, radial(i / 64), 0),
            ),
        );
        changing.add(
          new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(points),
            sourceMaterial,
          ),
        );
      }
      let highlight: THREE.BufferGeometry;
      if (model === "shell") {
        // A cylindrical sheet of radius x and height x²; no artificial volume thickness.
        const pts: number[] = [];
        for (let j = 0; j < 96; j++) {
          const a = (((angle * Math.PI) / 180) * j) / 96,
            b = (((angle * Math.PI) / 180) * (j + 1)) / 96;
          const v1 = revolutionPoint("y", 0, p, a),
            v2 = revolutionPoint("y", p * p, p, a),
            v3 = revolutionPoint("y", p * p, p, b),
            v4 = revolutionPoint("y", 0, p, b);
          pts.push(...v1, ...v2, ...v3, ...v1, ...v3, ...v4);
        }
        highlight = geometry(new Float32Array(pts));
      } else if (model === "surface") {
        highlight = geometry(
          revolutionGeometry(
            model,
            angle,
            24,
            Math.max(0, p - 0.018),
            Math.min(1, p + 0.018),
          ),
        );
      } else {
        // Cross-sectional area at x=p, shown as a zero-thickness disk or washer.
        const pts: number[] = [];
        for (let j = 0; j < 96; j++) {
          const a = (((angle * Math.PI) / 180) * j) / 96,
            b = (((angle * Math.PI) / 180) * (j + 1)) / 96;
          const v1 = revolutionPoint("x", p, m.inner(p), a),
            v2 = revolutionPoint("x", p, m.outer(p), a),
            v3 = revolutionPoint("x", p, m.outer(p), b),
            v4 = revolutionPoint("x", p, m.inner(p), b);
          pts.push(...v1, ...v2, ...v3, ...v1, ...v3, ...v4);
        }
        highlight = geometry(new Float32Array(pts));
      }
      changing.add(new THREE.Mesh(highlight, sliceMaterial));
      request();
    };
    controller.current = {
      view(v) {
        const offset =
          v === "front"
            ? new THREE.Vector3(0, 0, distance)
            : v === "axis"
              ? dir.clone().multiplyScalar(distance)
              : new THREE.Vector3(1.3, 0.8, 1.5)
                  .normalize()
                  .multiplyScalar(distance);
        camera.position.copy(center).add(offset);
        orbit.update();
        request();
      },
      orbit() {
        const sph = new THREE.Spherical().setFromVector3(
          camera.position.clone().sub(center),
        );
        sph.theta += Math.PI / 8;
        camera.position
          .copy(center)
          .add(new THREE.Vector3().setFromSpherical(sph));
        orbit.update();
        request();
      },
      zoom(scale) {
        const offset = camera.position.clone().sub(center);
        offset.setLength(
          THREE.MathUtils.clamp(
            offset.length() * scale,
            orbit.minDistance,
            orbit.maxDistance,
          ),
        );
        camera.position.copy(center).add(offset);
        orbit.update();
        request();
      },
    };
    const keydown = (e: KeyboardEvent) => {
      if (
        ![
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "+",
          "=",
          "-",
        ].includes(e.key)
      )
        return;
      e.preventDefault();
      if (["+", "=", "-"].includes(e.key)) {
        controller.current?.zoom(e.key === "-" ? 1.1 : 1 / 1.1);
        return;
      }
      const s = new THREE.Spherical().setFromVector3(
        camera.position.clone().sub(center),
      );
      s.theta +=
        e.key === "ArrowLeft" ? 0.12 : e.key === "ArrowRight" ? -0.12 : 0;
      s.phi = THREE.MathUtils.clamp(
        s.phi +
          (e.key === "ArrowUp" ? -0.12 : e.key === "ArrowDown" ? 0.12 : 0),
        0.05,
        Math.PI - 0.05,
      );
      camera.position.copy(center).add(new THREE.Vector3().setFromSpherical(s));
      orbit.update();
      request();
    };
    canvas.addEventListener("keydown", keydown);
    orbit.addEventListener("change", request);
    const contextLost = (e: Event) => {
      e.preventDefault();
      setUnavailable(true);
      setPlaying(false);
    };
    canvas.addEventListener("webglcontextlost", contextLost);
    const resize = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      if (width < 1 || height < 1) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      request();
    });
    resize.observe(container);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) request();
      else setPlaying(false);
    });
    observer.observe(container);
    const visibility = () => {
      if (document.hidden) setPlaying(false);
      else request();
    };
    document.addEventListener("visibilitychange", visibility);
    renderUpdate.current(degrees, slice, wire);
    return () => {
      renderUpdate.current = null;
      controller.current = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      canvas.removeEventListener("keydown", keydown);
      canvas.removeEventListener("webglcontextlost", contextLost);
      orbit.dispose();
      disposeChanging();
      scene.traverse((o) => {
        if (
          o instanceof THREE.Mesh ||
          o instanceof THREE.Line ||
          o instanceof THREE.LineSegments
        ) {
          o.geometry.dispose();
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => m.dispose());
        }
      });
      material.dispose();
      sliceMaterial.dispose();
      sourceMaterial.dispose();
      edgeMaterial.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    };
    // A model change rebuilds the scene; sliders update only the mathematical mesh.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, lesson.title]);
  useEffect(() => {
    renderUpdate.current?.(degrees, slice, wire);
  }, [degrees, slice, wire, model]);
  useEffect(() => {
    if (!playing) return;
    let id = 0,
      last = 0;
    const tick = (now: number) => {
      if (document.hidden) {
        setPlaying(false);
        return;
      }
      const dt = last ? Math.min(100, now - last) / 1000 : 0;
      last = now;
      setDegrees((d) => {
        const next = Math.min(360, d + dt * 60 * speed);
        return next;
      });
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing, speed]);
  useEffect(() => {
    if (degrees >= 360) setPlaying(false);
  }, [degrees]);
  const reset = () => {
    setPlaying(false);
    setDegrees(270);
    setSlice(0.55);
    setWire(false);
    controller.current?.view("perspective");
  };
  return (
    <section
      onChangeCapture={()=>setPlaying(false)}
      onFocusCapture={e=>{if((e.target as Element).closest(".parameter-value"))setPlaying(false);}}
      className={`solid-visual ${compact ? "compact" : ""}`}
      aria-label={tr("三维旋转演示")}
    >
      <header className="solid-header">
        <div>
          <span className="eyebrow">SPATIAL LAB / 3D</span>
          <h3>
            {localizeNode(model === "surface"
              ? "一条曲线，转出一个曲面"
              : model === "shell"
                ? "一条竖片，转出一个圆柱壳"
                : "一条横截面，转出一个旋转体")}
          </h3>
        </div>
        <button className="icon-btn" aria-label={tr("重置三维演示")} onClick={reset}>
          <RotateCcw size={17} />
        </button>
      </header>
      {localizeNode(kind === "disk" && (
        <div className="solid-model-tabs" role="group" aria-label={tr("旋转体模型")}>
          <button
            className={!washer ? "active" : ""}
            aria-pressed={!washer}
            onClick={() => setWasher(false)}
          >
            <MathText text={tr("圆盘 · $\\sqrt{x}$")} />
          </button>
          <button
            className={washer ? "active" : ""}
            aria-pressed={washer}
            onClick={() => setWasher(true)}
          >
            <MathText text={tr("圆环 · $R=2$，$r=1$")} />
          </button>
        </div>
      ))}
      <div className="solid-stage">
        <div ref={host} className="solid-canvas-host" />
        {localizeNode(unavailable && (
          <div className="solid-unavailable">
            <h3>{tr("这个浏览器暂时无法显示 3D")}</h3>
            <p>{tr("可以用二维图继续查看同一个数学模型。")}</p>
            <button className="secondary-btn" onClick={onFallback}>{tr("查看二维演示")}</button>
          </div>
        ))}
        <span className="solid-axis-label">{tr("旋转轴")}{localizeNode(solidModels[model].axis)} · {localizeNode(degrees.toFixed(0))}°
        </span>
        <div className="solid-stage-tools">
          <button
            aria-label={tr("旋转视角")}
            onClick={() => controller.current?.orbit()}
          >
            <RotateCw size={16} />
          </button>
          <button
            aria-label={tr("放大三维图")}
            onClick={() => controller.current?.zoom(0.85)}
          >
            <Plus size={16} />
          </button>
          <button
            aria-label={tr("缩小三维图")}
            onClick={() => controller.current?.zoom(1.15)}
          >
            <Minus size={16} />
          </button>
          <button
            aria-label={tr("恢复三维视角")}
            onClick={() => controller.current?.view("perspective")}
          >
            <Maximize2 size={16} />
          </button>
        </div>
        <Profile model={model} slice={slice} />
        <div className="solid-legend">
          <span>
            <i />{tr("原始曲线")}</span>
          <span>
            <i />{tr("截面 / 薄壳")}</span>
        </div>
      </div>
      <div className="solid-view-tabs" role="group" aria-label={tr("三维视角")}>
        <span>{tr("拖动旋转 · 滚轮缩放")}</span>
        <button onClick={() => controller.current?.view("perspective")}>{tr("立体")}</button>
        <button onClick={() => controller.current?.view("front")}>{tr("正视")}</button>
        <button onClick={() => controller.current?.view("axis")}>{tr("沿轴看")}</button>
        <label>
          <input
            type="checkbox"
            checked={wire}
            onChange={(e) => setWire(e.target.checked)}
          />{tr("网格")}</label>
      </div>
      <p className="solid-model-description"><MathText text={tr(description)} /></p>
      <div className="stats">
        <div>
          <span><MathText text={tr(model === "shell" ? "半径 $x$" : "截面位置 $x$")} /></span>
          <strong>{localizeNode(f(slice))}</strong>
        </div>
        <div>
          <span>
            <MathText text={tr(model === "shell"
              ? "完整薄壳的 $\\frac{\\mathrm{d}V}{\\mathrm{d}x}$"
              : model === "surface"
                ? "完整曲面的 $\\frac{\\mathrm{d}S}{\\mathrm{d}x}$"
                : "完整截面面积 $A(x)$")} />
          </span>
          <strong>{localizeNode(f(readout.density))}</strong>
        </div>
        <div>
          <span>{localizeNode(model === "surface" ? "曲面范围" : "当前转角的体积")}</span>
          <strong>
            {localizeNode(readout.volume === null ? "仅侧面，无端盖" : f(readout.volume))}
          </strong>
        </div>
      </div>
      <div className="controls">
        <SolidSlider
          label={tr("旋转角度 $\\theta$")}
          value={degrees}
          min={0}
          max={360}
          onChange={(n) => {
            setPlaying(false);
            setDegrees(n);
          }}
        />
        <SolidSlider
          label={tr(model === "shell" ? "薄壳半径 $x$" : "截面位置 $x$")}
          value={slice}
          min={0}
          max={1}
          step={0.01}
          onChange={setSlice}
        />
      </div>
      <div className="animation-transport">
        <button
          className="animation-btn"
          disabled={unavailable}
          onClick={() => {
            if (!playing && degrees >= 360) setDegrees(0);
            setPlaying((p) => !p);
          }}
        >
          {localizeNode(playing ? <Pause size={15} /> : <Play size={15} />)}{localizeNode(" ")}
          {localizeNode(playing ? "暂停旋转" : "旋转成形")}
        </button>
        <label>{tr("速度")}<select
            aria-label={tr("三维动画速度")}
            value={speed}
            onChange={(e) => setSpeed(+e.target.value)}
          >
            <option value={0.5}>0.5×</option>
            <option value={1}>1×</option>
            <option value={2}>2×</option>
          </select>
        </label>
      </div>
      <div className="solid-formula">
        <Formula
          latex={
            model === "disk"
              ? "dV=\\pi x\\,dx"
              : model === "washer"
                ? "dV=\\pi(2^2-1^2)\\,dx"
                : model === "shell"
                  ? "dV=2\\pi x\\cdot x^2\\,dx"
                  : "dS=2\\pi\\left(\\frac23x^{\\frac{3}{2}}\\right)\\sqrt{1+x}\\,dx"
          }
        />
        <p>
          <MathText text={tr(model === "shell"
            ? "金色薄壳的周长是 $2\\pi x$，高是 $x^2$。相乘得到单位厚度的体积。"
            : model === "surface"
              ? "金色带的面积约为周长乘以斜长。斜长是 $\\mathrm{d}s$，不是 $\\mathrm{d}x$。"
              : model === "washer"
                ? "先算外圆，再减去内孔。金色截面面积是 $3\\pi$。"
                : "金色圆盘的半径是 $\\sqrt{x}$，面积是 $\\pi x$。沿 $x$ 累加这些截面。")} />
        </p>
      </div>
      <p className="visual-note">{tr("截面与薄壳以零厚度示意；公式读数按完整 360° 计算。曲面与数值不替代推导。")}</p>
    </section>
  );
}
function Profile({ model, slice }: { model: SolidModel; slice: number }) {
  const X = (x: number) => 20 + x * 100,
    Y = (y: number) => 99 - y * (model === "washer" ? 36 : 70);
  const curve =
    model === "disk"
      ? (x: number) => Math.sqrt(x)
      : model === "shell"
        ? (x: number) => x * x
        : model === "surface"
          ? (x: number) => (2 / 3) * x ** 1.5
          : () => 2;
  const line = Array.from(
    { length: 41 },
    (_, i) => `${i ? "L" : "M"}${X(i / 40)},${Y(curve(i / 40))}`,
  ).join(" ");
  return (
    <svg
      className="solid-profile"
      viewBox="0 0 150 120"
      role="img"
      aria-label={tr("旋转前的二维轮廓")}
    >
      <text x="13" y="14">{tr("旋转前")}</text>
      <path d="M15 100H136M20 106V25" fill="none" stroke="#58738e" />
      <text x="138" y="104">
        x
      </text>
      <text x="14" y="26">
        y
      </text>
      {localizeNode(model !== "surface" && (
        <path
          d={`${line} L${X(1)},${Y(model === "washer" ? 1 : 0)} L${X(0)},${Y(model === "washer" ? 1 : 0)} Z`}
          fill="#4bd4e0"
          opacity=".18"
        />
      ))}
      <path d={line} stroke="#a9eaff" strokeWidth="1.7" fill="none" />
      {localizeNode(model === "washer" && (
        <path d={`M${X(0)},${Y(1)}H${X(1)}`} stroke="#a9eaff" fill="none" />
      ))}
      <path
        d={`M${X(slice)},${Y(model === "washer" ? 1 : 0)}V${Y(curve(slice))}`}
        stroke="#ffbc61"
        strokeWidth="2.5"
      />
      <circle cx={X(slice)} cy={Y(curve(slice))} r="3" fill="#ffbc61" />
    </svg>
  );
}
