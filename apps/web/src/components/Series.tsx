import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { Formula } from "./MathText";
import { BookCover, BookStats, Eyebrow, Link } from "./UI";
import {
  areaFor,
  mathAreas,
  publishedVolumes,
  type MathArea,
  type PublishedVolume,
  type Volume,
} from "../lib/library";

function AreaDrawing({ kind }: { kind: MathArea["symbol"] }) {
  return (
    <svg viewBox="0 0 240 105" className="area-drawing" aria-hidden="true">
      {kind === "calculus" ? (
        <>
          <path
            className="area-fill"
            d="M25 85 C75 85 72 45 112 54 S160 12 210 20 L210 85Z"
          />
          <path className="area-axis" d="M20 15V88H220" />
          <path d="M25 85 C75 85 72 45 112 54 S160 12 210 20" />
          <path className="area-soft" d="M105 72L190 5" />
          <circle cx="148" cy="39" r="4" />
        </>
      ) : kind === "linear" ? (
        <>
          <path className="area-axis" d="M120 95V10M25 65H220" />
          <path
            className="area-soft"
            d="M55 65V25H105V65ZM55 25L75 10M105 25L158 18M105 65L178 65"
          />
          <path className="area-fill" d="M75 10L158 18L178 65L95 57Z" />
          <path d="M75 10L158 18L178 65L95 57Z" />
          <path d="M120 65L178 35M120 65L92 15" />
          <circle cx="120" cy="65" r="3" />
        </>
      ) : kind === "dynamics" ? (
        <>
          <path className="area-axis" d="M20 12V88H220" />
          <path d="M25 82C90 82 85 28 132 25S186 20 215 20" />
          <path
            className="area-soft"
            d="M25 65C75 65 65 36 95 38S135 78 160 61S185 25 216 38"
          />
          {[35, 70, 105, 140, 175, 210].map((x, i) => (
            <path
              className="area-soft"
              key={x}
              d={`M${x} 85l9 -8M${x} 58l9 -${10 - i}M${x} 25l9 2`}
            />
          ))}
        </>
      ) : kind === "probability" ? (
        <>
          <path className="area-axis" d="M20 88H220" />
          {[9, 23, 44, 62, 72, 62, 44, 23, 9].map((h, i) => (
            <rect
              className="area-fill"
              key={i}
              x={30 + i * 20}
              y={88 - h}
              width="14"
              height={h}
            />
          ))}
          <path d="M23 85C65 85 75 17 117 17S170 85 215 85" />
        </>
      ) : kind === "discrete" ? (
        <>
          <path
            className="area-soft"
            d="M45 55L90 20L140 65L190 25L207 83L140 65L90 20L75 87L45 55L140 65"
          />
          {[
            [45, 55],
            [90, 20],
            [140, 65],
            [190, 25],
            [207, 83],
            [75, 87],
          ].map(([x, y], i) => (
            <circle className="area-node" key={i} cx={x} cy={y} r="7" />
          ))}
        </>
      ) : (
        <>
          <rect className="area-fill" x="20" y="29" width="200" height="40" />
          <path className="area-axis" d="M20 49H220" />
          <path className="area-soft" d="M20 29H220M20 69H220" />
          {[
            [35, 85],
            [59, 19],
            [83, 66],
            [108, 40],
            [137, 54],
            [169, 47],
            [207, 50],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3.5" />
          ))}
        </>
      )}
    </svg>
  );
}

export function MathAreas() {
  return (
    <div className="math-area-grid">
      {mathAreas.map((area, i) => {
        const count = publishedVolumes.filter(
          (v) => v.areaId === area.id,
        ).length;
        return (
          <Link
            key={area.id}
            to="library"
            params={{ category:"mathematics", area: area.id }}
            className="math-area-card"
          >
            <div className="area-card-top">
              <span>
                {String(i + 1).padStart(2, "0")} / {area.english}
              </span>
              <ArrowUpRight size={18} />
            </div>
            <AreaDrawing kind={area.symbol} />
            <h3>{area.title}</h3>
            <p className="area-question">{area.question}</p>
            <p>{area.description}</p>
            <div className="area-card-bottom">
              <span>{count ? `${count} 本已出版` : "教材规划中"}</span>
              <span>
                查看系列 <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const bookTopics:Record<string,string>={
  "calculus-1":"极限 · 导数 · 积分",
  "calculus-2":"积分技巧 · 级数 · Taylor 展开",
  "calculus-3":"多元函数 · 重积分 · 向量场",
  "linear-algebra":"向量 · 矩阵 · 空间变换",
  "ordinary-differential-equations":"初值问题 · 振动 · 动力系统",
  "probability-statistics":"概率 · 抽样 · 统计推断",
  "discrete-math":"逻辑 · 计数 · 图与网络",
  "real-analysis":"完备性 · 收敛 · 严格证明",
  "python-introduction":"语法 · 数据结构 · 完整程序",
  "ai-development":"需求 · 代码 · 测试与交付",
};

export function PublishedBook({ volume }: { volume: PublishedVolume }) {
  return (
    <article className="edition-card" data-volume={volume.id}>
      <Link to={volume.route} className="edition-cover-link" aria-label={`查看${volume.title}教材`}>
        <BookCover volume={volume}/>
        <span className="edition-open" aria-hidden="true"><ArrowUpRight size={18}/></span>
      </Link>
      <div className="edition-card-copy">
        <span className="edition-subject">{areaFor(volume.areaId).title}</span>
        <h3><Link to={volume.route}>{volume.title}</Link></h3>
        <p>{bookTopics[volume.id]??volume.tagline}</p>
        <div className="edition-card-footer">
          <span>{volume.stats.chapters} 章 <i>·</i> {volume.stats.lessons} 节</span>
          <Link to="downloads" params={{book:volume.id}} className="edition-download" aria-label={`下载${volume.title}`}><Download size={16}/></Link>
        </div>
      </div>
    </article>
  );
}

export function PlannedBooks({ items }: { items: Volume[] }) {
  return (
    <div className="planned-book-grid">
      {items.map((v) => (
        <article className="planned-book-card" key={v.id}>
          <div>
            <span>{areaFor(v.areaId).title}</span>
            <span className="planned-status">规划中</span>
          </div>
          <p className="planned-english">{v.englishTitle}</p>
          <h3>{v.title}</h3>
          <p>{v.description}</p>
          <div className="planned-scope">{v.scope}</div>
          <small>尚未出版 · 暂无正文</small>
        </article>
      ))}
    </div>
  );
}

export function SeriesPrinciples() {
  return (
    <section className="home-section series-principles">
      <div className="section-title">
        <div>
          <Eyebrow>ONE SERIES. A SHARED WAY TO LEARN.</Eyebrow>
          <h2>读懂、动手，再独立解题。</h2>
        </div>
        <Link to="guide" className="text-btn">
          阅读指南
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="series-principle-grid">
        <article>
          <span>01 / UNDERSTAND</span>
          <h3>先回答：它解决什么问题？</h3>
          <p>先说明概念的含义，再列出定义、公式和适用条件。</p>
          <Formula
            latex={String.raw`\text{直觉}\;\longrightarrow\;\text{定义}`}
            display
          />
        </article>
        <article>
          <span>02 / EXPLORE</span>
          <h3>用图形看变化。</h3>
          <p>拖动点或调整参数，对照图形和数值理解公式。</p>
          <span className="principle-line" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
        </article>
        <article>
          <span>03 / CONNECT</span>
          <h3>遮住解答，独立做一次。</h3>
          <p>
            例题附逐步解答，练习附提示。遇到不熟悉的概念，可以跳转到前面的相关章节。
          </p>
          <div className="principle-chain" aria-hidden="true">
            <span>概念</span>
            <ArrowRight size={14} />
            <span>例题</span>
            <ArrowRight size={14} />
            <span>应用</span>
          </div>
        </article>
      </div>
    </section>
  );
}
