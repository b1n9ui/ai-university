import {tr} from "../i18n";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { sculpturePoint } from "../../../../packages/visuals/sculpture-models.mjs";

export type SculptureMode = "wave" | "torus" | "helix";
type Controls = {
  rebuild: (mode: SculptureMode, value: number) => void;
  motion: (enabled: boolean) => void;
  reset: () => void;
};
// Map the canonical Cartesian coordinates to Three.js's vertical y axis.
function point(mode: SculptureMode, u: number, v: number, value: number) {
  const [x, y, z] = sculpturePoint(mode, u, v, value);
  return new THREE.Vector3(x, z, y);
}
function geometryFor(mode: SculptureMode, value: number, segments: number) {
  const rows = 40,
    positions: number[] = [],
    colors: number[] = [],
    indices: number[] = [];
  const low = new THREE.Color("#172965"),
    middle = new THREE.Color("#229e89"),
    high = new THREE.Color("#b8d784");
  for (let i = 0; i <= segments; i++)
    for (let j = 0; j <= rows; j++) {
      const p = point(mode, i / segments, j / rows, value);
      positions.push(p.x, p.y, p.z);
      const scale = mode === "helix" ? value * Math.PI * 3 + 0.12 : value;
      const t = Math.max(0, Math.min(1, (p.y / scale + 1) / 2));
      const c =
        t < 0.5
          ? low.clone().lerp(middle, t * 2)
          : middle.clone().lerp(high, (t - 0.5) * 2);
      colors.push(c.r, c.g, c.b);
      if (i < segments && j < rows) {
        const a = i * (rows + 1) + j,
          b = a + rows + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}
export default function MathSculpture({
  mode,
  value,
  playing,
  resetKey,
}: {
  mode: SculptureMode;
  value: number;
  playing: boolean;
  resetKey: number;
}) {
  const host = useRef<HTMLDivElement>(null),
    api = useRef<Controls | null>(null),
    initial = useRef({ mode, value, playing });
  const [error, setError] = useState(false),
    [sample, setSample] = useState("拖动图形旋转 · 方向键也可操作");
  useEffect(() => {
    const mounted = host.current;
    if (!mounted) return;
    const el: HTMLDivElement = mounted;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "low-power",
      });
    } catch {
      setError(true);
      return;
    }
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#070b10");
    scene.fog = new THREE.FogExp2("#070b10", 0.026);
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50),
      desktop = matchMedia("(min-width: 601px)").matches;
    camera.position.set(8.2, 6.2, 8.8);
    camera.lookAt(0, -0.25, 0);
    renderer.setPixelRatio(Math.min(devicePixelRatio, desktop ? 1.5 : 1.2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    const canvas = renderer.domElement;
    canvas.setAttribute(
      "aria-label",
      tr("可旋转的数学曲面。拖动或用方向键改变视角，下面的滑块改变形状。"),
    );
    canvas.setAttribute("role", "img");
    canvas.tabIndex = 0;
    el.append(canvas);
    const composer = new EffectComposer(renderer),
      renderPass = new RenderPass(scene, camera),
      bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.1, 0.5, 1.6),
      output = new OutputPass();
    composer.addPass(renderPass);
    composer.addPass(bloom);
    composer.addPass(output);
    scene.add(new THREE.HemisphereLight("#d8f7f2", "#18224a", 0.55));
    for (const [c, intensity, x, y, z] of [
      ["#bdfcee", 1.8, 2, 6, 4],
      ["#7374ff", 2, -4, 2, -5],
      ["#f8e8ae", 1.2, 5, 1, -1],
    ] as [string, number, number, number, number][]) {
      const light = new THREE.DirectionalLight(c, intensity);
      light.position.set(x, y, z);
      scene.add(light);
    }
    const group = new THREE.Group();
    group.rotation.y = -0.3;
    scene.add(group);
    const grid = new THREE.GridHelper(16, 40, "#254147", "#14242b");
    grid.position.y = -2.4;
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.36;
    scene.add(grid);
    const orbitPoints = Array.from(
      { length: 161 },
      (_, i) =>
        new THREE.Vector3(
          4.2 * Math.cos((i / 160) * Math.PI * 2),
          -2.35,
          4.2 * Math.sin((i / 160) * Math.PI * 2),
        ),
    );
    const orbit = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(orbitPoints),
      new THREE.LineBasicMaterial({
        color: "#56726b",
        transparent: true,
        opacity: 0.3,
      }),
    );
    scene.add(orbit);
    let surface: THREE.Mesh,
      enabled = initial.current.playing,
      visible = true,
      disposed = false,
      frame = 0,
      last = 0,
      needsRender = true,
      rotationTarget = -0.3,
      tiltTarget = 0,
      lastSample = 0;
    let morph: {
      start: Float32Array;
      end: Float32Array;
      began: number;
    } | null = null;
    const raycaster = new THREE.Raycaster(),
      cursor = new THREE.Vector2();
    function disposeGroup() {
      for (const item of [...group.children]) {
        group.remove(item);
        if (item instanceof THREE.Mesh || item instanceof THREE.Line) {
          item.geometry.dispose();
          (Array.isArray(item.material)
            ? item.material
            : [item.material]
          ).forEach((m) => m.dispose());
        }
      }
    }
    function schedule() {
      if (!frame && !disposed && visible && !document.hidden)
        frame = requestAnimationFrame(draw);
    }
    function rebuild(next: SculptureMode, amount: number) {
      const previous =
        surface &&
        canvas.dataset.sculpture !== next &&
        !matchMedia("(prefers-reduced-motion: reduce)").matches
          ? new Float32Array(surface.geometry.getAttribute("position").array)
          : null;
      disposeGroup();
      surface = new THREE.Mesh(
        geometryFor(next, amount, desktop ? 90 : 64),
        new THREE.MeshPhysicalMaterial({
          color: "#ffffff",
          vertexColors: true,
          side: THREE.DoubleSide,
          metalness: 0.28,
          roughness: 0.4,
          clearcoat: 0.8,
          clearcoatRoughness: 0.2,
          iridescence: 0.3,
          iridescenceIOR: 1.35,
          polygonOffset: true,
          polygonOffsetFactor: 1,
          polygonOffsetUnits: 1,
        }),
      );
      group.add(surface);
      const positions = surface.geometry.getAttribute("position");
      morph =
        previous && previous.length === positions.array.length
          ? {
              start: previous,
              end: new Float32Array(positions.array),
              began: performance.now(),
            }
          : null;
      canvas.dataset.transition = String(!!morph);
      if (morph) {
        positions.array.set(morph.start);
        positions.needsUpdate = true;
        surface.geometry.computeVertexNormals();
      }
      grid.position.y = next === "helix" ? -3.15 : -2.4;
      orbit.position.y = next === "helix" ? -0.8 : 0;
      if (next !== "helix") {
        for (let n = 0; n <= 26; n++) {
          const points = Array.from({ length: 101 }, (_, i) =>
            point(next, i / 100, n / 26, amount),
          );
          const line = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(points),
            new THREE.LineBasicMaterial({
              color: "#dcffe8",
              transparent: true,
              opacity: 0.32,
              depthWrite: false,
            }),
          );
          line.scale.multiplyScalar(1.001);
          line.visible = !morph;
          group.add(line);
        }
        for (let n = 0; n <= 16; n++) {
          const points = Array.from({ length: 101 }, (_, i) =>
            point(next, n / 16, i / 100, amount),
          );
          const line = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(points),
            new THREE.LineBasicMaterial({
              color: "#a5cec8",
              transparent: true,
              opacity: 0.15,
              depthWrite: false,
            }),
          );
          line.scale.multiplyScalar(1.001);
          line.visible = !morph;
          group.add(line);
        }
      }
      canvas.dataset.sculpture = next;
      canvas.dataset.parameter = String(amount);
      setSample("拖动图形旋转 · 方向键也可操作");
      needsRender = true;
      schedule();
    }
    function draw(time: number) {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      if (time - last < 32) {
        schedule();
        return;
      }
      const dt = Math.min((time - last) / 1000, 0.05);
      last = time;
      if (enabled) {
        rotationTarget += dt * 0.055;
        needsRender = true;
      }
      if (
        Math.abs(group.rotation.y - rotationTarget) > 0.001 ||
        Math.abs(group.rotation.x - tiltTarget) > 0.001
      ) {
        group.rotation.y += (rotationTarget - group.rotation.y) * 0.08;
        group.rotation.x += (tiltTarget - group.rotation.x) * 0.08;
        needsRender = true;
      }
      if (morph) {
        const t = Math.min(1, (time - morph.began) / 760),
          ease = t * t * (3 - 2 * t),
          positions = surface.geometry.getAttribute("position");
        for (let i = 0; i < positions.array.length; i++)
          positions.array[i] =
            morph.start[i] + (morph.end[i] - morph.start[i]) * ease;
        positions.needsUpdate = true;
        surface.geometry.computeVertexNormals();
        needsRender = true;
        if (t === 1) {
          morph = null;
          canvas.dataset.transition = "false";
          group.children.forEach((item) => {
            item.visible = true;
          });
        }
      }
      if (needsRender) {
        composer.render();
        needsRender = false;
        canvas.dataset.rendered = "true";
        canvas.dataset.frame = String(Number(canvas.dataset.frame || 0) + 1);
      }
      if (
        morph ||
        enabled ||
        Math.abs(group.rotation.y - rotationTarget) > 0.001 ||
        Math.abs(group.rotation.x - tiltTarget) > 0.001
      )
        schedule();
    }
    api.current = {
      rebuild,
      motion: (on) => {
        enabled = on;
        canvas.dataset.motion = String(on);
        schedule();
      },
      reset: () => {
        rotationTarget = -0.3;
        tiltTarget = 0;
        needsRender = true;
        schedule();
      },
    };
    function resize() {
      const w = el.clientWidth,
        h = el.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.position.set(
        w / h < 1.1 ? 10 : 8.2,
        w / h < 1.1 ? 8 : 6.2,
        w / h < 1.1 ? 11 : 8.8,
      );
      camera.lookAt(0, -0.25, 0);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
      needsRender = true;
      schedule();
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(el);
    const observer = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) {
          needsRender = true;
          schedule();
        } else {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { threshold: 0 },
    );
    observer.observe(el);
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        needsRender = true;
        schedule();
      }
    };
    document.addEventListener("visibilitychange", visibility);
    let dragging = false,
      previousX = 0,
      previousY = 0;
    const down = (e: PointerEvent) => {
      dragging = true;
      previousX = e.clientX;
      previousY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (dragging) {
        rotationTarget += (e.clientX - previousX) * 0.007;
        tiltTarget = Math.max(
          -0.7,
          Math.min(0.7, tiltTarget + (e.clientY - previousY) * 0.004),
        );
        previousX = e.clientX;
        previousY = e.clientY;
        needsRender = true;
        schedule();
        return;
      }
      if (performance.now() - lastSample < 120) return;
      lastSample = performance.now();
      const rect = canvas.getBoundingClientRect();
      cursor.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        (-(e.clientY - rect.top) / rect.height) * 2 + 1,
      );
      raycaster.setFromCamera(cursor, camera);
      const hit = raycaster.intersectObject(surface)[0];
      if (hit) {
        const p = group.worldToLocal(hit.point.clone());
        setSample(
          `x ${p.x.toFixed(2)}  ·  y ${p.z.toFixed(2)}  ·  z ${p.y.toFixed(2)}`,
        );
      }
    };
    const up = () => {
      dragging = false;
    };
    const key = (e: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key))
        return;
      e.preventDefault();
      if (e.key === "ArrowLeft") rotationTarget -= 0.15;
      if (e.key === "ArrowRight") rotationTarget += 0.15;
      if (e.key === "ArrowUp") tiltTarget = Math.max(-0.7, tiltTarget - 0.1);
      if (e.key === "ArrowDown") tiltTarget = Math.min(0.7, tiltTarget + 0.1);
      needsRender = true;
      schedule();
    };
    const lost = (e: Event) => {
      e.preventDefault();
      setError(true);
      cancelAnimationFrame(frame);
      frame = 0;
      visible = false;
    };
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);
    canvas.addEventListener("keydown", key);
    canvas.addEventListener("webglcontextlost", lost);
    rebuild(initial.current.mode, initial.current.value);
    resize();
    canvas.dataset.motion = String(enabled);
    return () => {
      disposed = true;
      api.current = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
      canvas.removeEventListener("keydown", key);
      canvas.removeEventListener("webglcontextlost", lost);
      disposeGroup();
      grid.geometry.dispose();
      (grid.material as THREE.Material).dispose();
      orbit.geometry.dispose();
      (orbit.material as THREE.Material).dispose();
      bloom.dispose();
      output.dispose();
      renderPass.dispose();
      composer.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    };
  }, []);
  useEffect(() => {
    api.current?.rebuild(mode, value);
  }, [mode, value]);
  useEffect(() => {
    api.current?.motion(playing);
  }, [playing]);
  useEffect(() => {
    api.current?.reset();
  }, [resetKey]);
  return (
    <div className="math-sculpture">
      <div ref={host} className="sculpture-canvas" />
      {error ? (
        <p className="sculpture-fallback">
          {tr("此浏览器暂时无法显示三维图。下方教材仍可完整阅读。")}
        </p>
      ) : (
        <output className="sculpture-sample">{tr(sample)}</output>
      )}
    </div>
  );
}
