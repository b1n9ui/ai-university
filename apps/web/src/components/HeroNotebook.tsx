import {tr, localizeNode} from "../i18n";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { lessonById } from "../../../../packages/content";
import { Visual } from "./Visual";
import { Link } from "./UI";
const demos = [
  {
    id: "disk-washer",
    label: "空间与体积",
    title: "一片面积，转出一个体积。",
    hint: "拖动旋转角度，看平面区域怎样成为旋转体。",
  },
  {
    id: "derivative-definition",
    label: "瞬时变化",
    title: "两个点，怎样定义这一刻？",
    hint: "缩小两点距离，比较割线斜率与切线斜率。",
  },
  {
    id: "riemann-sums",
    label: "细分与累积",
    title: "许多小块，怎样加成一个整体？",
    hint: "增加分割数，比较矩形面积和精确积分。",
  },
];
export function HeroNotebook() {
  const [index, setIndex] = useState(0),
    demo = demos[index];
  return (
    <div className="hero-demo frontier-notebook">
      <div className="demo-window-bar">
        <span className="demo-status" />
        MATH IN MOTION<span>{tr("来自微积分 I")}</span>
      </div>
      <div className="hero-demo-tabs" role="group" aria-label={tr("首页数学演示")}>
        {localizeNode(demos.map((d, i) => (
          <button
            key={d.id}
            aria-pressed={index === i}
            className={index === i ? "active" : ""}
            onClick={() => setIndex(i)}
          >
            {localizeNode(d.label)}
          </button>
        )))}
      </div>
      <div className="demo-title">
        <h2>{localizeNode(demo.title)}</h2>
        <p>{localizeNode(demo.hint)}</p>
      </div>
      <Visual key={demo.id} lesson={lessonById[demo.id]} compact />
      <Link to={"lesson/" + demo.id} className="demo-bottom">{tr("阅读对应章节")}<ArrowRight size={16} />
      </Link>
    </div>
  );
}
