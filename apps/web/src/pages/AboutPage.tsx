import {tr, localizeNode} from "../i18n";
import {
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  Download,
  Lightbulb,
  RotateCcw,
} from "lucide-react";
import { useRef, useState } from "react";
import research from "../../../../packages/content/learning-research.json";
import { book, lessonById, collections } from "../../../../packages/content";
import { type Progress } from "../components/Practice";

import { Eyebrow, Link, NotFound, PageTitle } from "../components/UI";
import { REPO } from "../lib/catalog";
import { questionIds, useApp, type Reading } from "../lib/state";
export function AboutPage() {
  const { route } = useApp();
  const part = route.path.split("/")[1] || "project";
  const names: Record<string, string> = {
    project: "关于 AI University",
    contribute: "参与贡献",
    versions: "版本与勘误",
    privacy: "隐私与本地数据",
    research: "学习方法与参考资料",
  };
  if (!names[part]) return <NotFound />;
  return (
    <>
      <PageTitle
        tag="THE OPEN TEXTBOOK PROJECT"
        title={names[part]}
        description={
          part === "research"
            ? "讲解、练习与图示怎样帮助理解：编写依据与补充阅读。"
            : part === "project"
              ? "由 AI 编写，整本开放阅读。正文、图示和修订记录都在这里。"
              : part === "contribute"
                ? "修正一个错误，改善一道例题，或者让一张图更容易理解。"
                : part === "versions"
                  ? "记录教材与网站的变化，让修订过程公开可追溯。"
                  : "学习记录保存在你的浏览器中，可以随时导出或清空。"
        }
      />
      <nav className="page-tabs" aria-label="项目资料">
        {Object.entries(names).map(([id, name]) => (
          <Link
            key={id}
            to={id === "project" ? "about" : "about/" + id}
            aria-current={part === id ? "page" : undefined}
            className={part === id ? "active" : ""}
          >
            {name.replace(" AI University", "")}
          </Link>
        ))}
      </nav>
      {part === "research" ? (
        <ResearchPanel />
      ) : part === "project" ? (
        <div className="about-content">
          <div className="about-statement">
            <Eyebrow>CLARITY IS THE POINT.</Eyebrow>
            <h2>
              把完整的知识，
              <br />
              写成可以读懂的书。
            </h2>
            <p>
              AI University 是一套由 AI
              制作的开放教科书，以数学为主，也收录编程与开发教材。书库分为“数学”和“其他”。AI
              在制作阶段编写解释、定义、推导、例题、练习和可交互图示；发布后，读者直接阅读固定版本。
            </p>
          </div>
          <div className="about-values">
            {[
              [
                "完整，而不是摘选",
                "每本教材都沿着系统的课程结构完成。微积分 I、II、III、线性代数、常微分方程、概率与统计、Python 入门与《带着 AI 做项目》已提供完整内容与互动；其他未出版教材在书库中明确标注为规划中。",
              ],
              [
                "清楚，也保留必要条件",
                "解释尽量简明，定义、推导和公式的适用条件仍须写清楚。",
              ],
              [
                "开放，可以审查与修改",
                "固定教材内容、演示模型和生成流程都在 GitHub 中公开。所有修改都能追溯到具体文件与版本。",
              ],
            ].map(([h, p]) => (
              <section key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </section>
            ))}
          </div>
          <div className="provenance-note">
            <CircleCheck size={23} />
            <div>
              <strong>关于 AI 编写与复核</strong>
              <p>
                本书标记为
                AI-generated，尚未声称经过人工审校。结构、公式排版和部分数学模型经过程序检查；这些检查不等于证明整本教材绝无错误。
              </p>
              <Link to="about/versions">
                查看版本与勘误
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      ) : part === "contribute" ? (
        <div className="plain-section">
          <h2>从具体的改进开始</h2>
          <ol className="contribution-steps">
            <li>
              <span>01</span>
              <div>
                <h3>指出问题</h3>
                <p>
                  注明章节编号、原文或图示状态，写清楚错在哪里。数学问题尽量给出复算、反例或遗漏的适用条件。
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>修改固定教材源文件</h3>
                <p>
                  正文在 packages/content 中，每节使用统一
                  schema。网页、整本书稿、练习和先修关系保持一致。
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>检查后提交</h3>
                <p>
                  运行内容与构建检查，验证相关演示边界和手机页面。通过 Issue 或
                  Pull Request 提交可审查的改动。
                </p>
              </div>
            </li>
          </ol>
          <div className="contribution-links">
            <a
              href={REPO + "/issues/new"}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              报告问题
              <ArrowUpRight size={16} />
            </a>
            <a
              href={REPO + "/blob/main/CONTRIBUTING.md"}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              贡献指南
              <ArrowUpRight size={16} />
            </a>
            <a
              href={REPO + "/blob/main/docs/CONTENT_GUIDE.md"}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              教材写作规范
              <ArrowUpRight size={16} />
            </a>
          </div>
          <h2>许可证</h2>
          <p>
            网站代码采用 MIT；教材原始文本与题目采用
            CC0。第三方公式渲染和图标库使用各自的许可证，详见仓库中的第三方声明。
          </p>
        </div>
      ) : part === "versions" ? (
        <div className="versions-page">
          <div className="version-entry"><span className="badge">当前网站 · 双语阅读</span><h2>v0.18.0 · 英文微积分 I 完整版</h2><time>2026 年 10 月 23 日</time><ul><li>英文为默认阅读语言，中文可切换；语言切换保留当前知识点与学习记录。</li><li>英文微积分 I 完整包含 7 章 35 节、79 个例题与 191 道练习及回顾题，附全部解答、图示说明、术语与附录。</li><li>同步英文 Markdown 与打印版；其他九卷标注中文版。</li><li>英文内容固定发布，无需模型 API；保留 AI 编写与尚未逐节人工审校的说明。</li></ul></div>
          <div className="version-entry"><span className="badge">历史网站 · 教材书架</span><h2>v0.17.2 · 每本书，有自己的样子</h2><time>2026 年 10 月 22 日</time><ul><li>首页与书库改为多列书架，桌面四列、手机两列。</li><li>十本教材使用各自的配色与学科图形，教材主页封面同步更新。</li><li>选书卡片精简为内容标签、章/节数和下载入口，减少重复介绍。</li></ul></div>
          <div className="version-entry"><span className="badge">数学八卷修订</span><h2>v0.17.1 · 数学教材交叉检查</h2><time>2026 年 10 月 22 日</time><ul><li>修正动画播放范围、暂停继续和小数答案的误差判定。</li><li>补全 28 道练习的已知条件；开放作答与集合题改为对照解答自评。</li><li>补充定理条件、共振相位和分段分布函数，同步整本书稿与打印版。</li><li>微积分 I v0.3.3，II、III v0.1.2；其余数学卷 v0.1.1。</li></ul></div>
          <div className="version-entry"><span className="badge">实分析 v0.1.0</span><h2>v0.17.0 · 实分析完整首版</h2><time>2026 年 10 月 22 日</time><ul><li>8 章 40 节、80 个例题、184 道带解答练习与回顾题。</li><li>完备性、收敛、实线拓扑、连续、微分、积分与一致收敛。</li><li>误差带、二分包围、开覆盖、上下和与极限交换反例演示。</li><li>完整书稿、打印、搜索、索引与练习同步接入；无需 API。</li></ul></div>
          <div className="version-entry"><span className="badge">概率与统计 v0.1.0</span><h2>v0.15.0 · 概率与统计完整首版</h2><time>2026 年 10 月 21 日</time><ul><li>10 章 50 节、100 个例题、230 道练习及回顾，全部附解答。</li><li>从数据、抽样与概率，到分布、估计、检验、回归和贝叶斯更新。</li><li>50 节交互模型，包含重复抽样、覆盖率、精确二项尾部、置换、回归与预测区间。</li><li>理论值、浮点近似和固定种子模拟分别说明；无需模型 API。</li></ul></div>
          <div className="version-entry"><span className="badge">分类书库 · 七本教材</span><h2>v0.14.0 · 分类书库与两本新教材</h2><time>2026 年 10 月 21 日</time><ul><li>数学：微积分三卷、线性代数、常微分方程。</li><li>其他：Python 编程入门与《带着 AI 做项目》，由 aby0120 投稿、AI 编写。</li><li>两本新书接入搜索、下载、打印和完整检查；保留旧投稿链接。</li><li>Python 执行回放统一由 CPython 3.14 生成，修正解释器行事件差异。</li></ul></div>
          <div className="version-entry"><span className="badge">常微分方程 v0.1.0</span><h2>v0.13.0 · 常微分方程完整首版</h2><time>2026 年 10 月 21 日</time><ul><li>11 章 55 节、110 个例题、275 道练习与完整解答。</li><li>一阶、存在唯一性、振动、Laplace、线性与非线性系统、级数和数值方法。</li><li>55 节交互演示：方向场、可拖动初态、相轨迹、弹簧运动、误差比较与自适应节点。</li><li>整本书稿、打印版、搜索、练习、术语和附录同步提供。</li></ul></div>
          <div className="version-entry"><span className="badge">Linear Algebra v0.1.0</span><h2>v0.12.0 · 线性代数完整首版</h2><time>2026 年 10 月 21 日</time><ul><li>10 章 50 节、100 个例题、250 道练习与完整解答。</li><li>从方程组、向量空间和特征值，到正交投影、SVD、网络与 PCA。</li><li>50 个二维或三维交互演示，支持矩阵参数输入、消元步骤和退化情形。</li><li>整本阅读、目录、练习、索引和下载均可独立使用，无需先修微积分。</li></ul></div>
          <div className="version-entry"><span className="badge">历史网站版本</span><h2>v0.11.0 · 补全方法，校准图示</h2><time>2026 年 10 月 21 日</time><ul><li>补充根式三角代换、不可约二次因子和非线性 Jacobian 的完整例题。</li><li>明确抽水几何与固定出口；说明交错误差界必须从递减尾部使用。</li><li>偏导图同时展示两条切线；Jacobian 图比较局部倍率与总面积。</li><li>精简演示、练习和阅读指南的中文提示，删除重复口号。</li><li>微积分 I v0.3.2，II、III v0.1.1；保留原链接与学习记录。</li></ul></div>
          <div className="version-entry"><span className="badge">历史网站版本</span><h2>v0.10.1 · 图形拖动不再误选文字</h2><time>2026 年 10 月 21 日</time><p>修复坐标文字被划选的问题；拖动、键盘和正文复制可正常使用。</p></div>
          <div className="version-entry"><span className="badge">Calculus III v0.1.0</span><h2>v0.10.0 · 微积分 III 完整首版</h2><time>2026 年 10 月 14 日</time><ul><li>9 章 40 节、80 个例题与 203 道练习解答。</li><li>多元变化、优化、重积分、向量积分与三个积分定理。</li><li>40 个可旋转的本地三维图，支持俯视、正视、缩放和键盘操作；无需 WebGL。</li></ul></div>
          <div className="version-entry"><span className="badge">Calculus II · v0.1.0</span><h2>v0.9.0 · 微积分 II 完整首版</h2><time>2026 年 10 月 14 日</time><ul><li>新增 8 章 35 节、70 个例题与 178 道练习解答。</li><li>接入积分、收敛、Taylor、参数与极坐标、一阶方程的本地交互图示。</li><li>目录、练习、索引、下载与学习记录按教材区分，保留微积分 I 的旧链接与记录。</li></ul></div>
          <div className="version-entry">
            <span className="badge">历史版本 · 教材 I v0.3.1</span>
            <h2>v0.8.2 · 动画完整运行到终点</h2>
            <time>2026 年 10 月 14 日</time>
            <ul>
              <li>修正统一计时导致的提前停止，极限与导数运行到最小正距离。</li>
              <li>细分到最大分割数，参数扫描到本次区间终点。</li>
              <li>明确显示有限近似的边界，动画不代替极限与证明。</li>
            </ul>
          </div>
          <div className="version-entry">
            <span className="badge">教材 v0.3.1</span>
            <h2>v0.8.1 · 滑块圆点更清楚</h2>
            <time>2026 年 10 月 14 日</time>
            <ul>
              <li>深色面板的圆点改为亮色与白色边框，统一二维、三维和首页滑块。</li>
              <li>扩大操作区域，增加悬停、拖动和键盘聚焦提示。</li>
            </ul>
          </div>
          <div className="version-entry">
            <span className="badge">教材 v0.3.1</span>
            <h2>v0.8.0 · 全站界面精修</h2>
            <time>2026 年 10 月 14 日</time>
            <ul>
              <li>首页控制台、教材卡片与各页标题统一材质和层次。</li>
              <li>二维与三维实验台统一外框，图形、读数和参数更易辨认。</li>
              <li>阅读、演示、练习与知识连接以图标辅助识别，核心解释与提示更清楚。</li>
              <li>改进窄屏控件、按钮和反馈状态；正文保留清晰的阅读底色。</li>
              <li>教材内容仍为 v0.3.1，保持纯静态运行。</li>
            </ul>
          </div>
          <div className="version-entry">
            <span className="badge">教材 v0.3.1</span>
            <h2>v0.7.0 · 回答式教学与引导实验</h2>
            <time>2026 年 10 月 12 日</time>
            <ul>
              <li>全书 35 节增加另一角度的解释与 105 个三步实验预设。</li>
              <li>操作、观察、核对结论连成一条学习路径，支持自由探索与重新载入。</li>
              <li>统一可直接输入的数学参数、二维图例与三维控件，延伸模型按需展开。</li>
              <li>练习提供分层提示和对应误区反馈；数值正确后由读者确认理解。</li>
              <li>保留完整教材、数学条件、打印版本和纯静态运行。</li>
            </ul>
          </div>
          <div className="version-entry">
            <span className="badge">教材 v0.3.0</span>
            <h2>v0.6.0 · 微积分 I 内容补全与复核</h2>
            <time>2026 年 10 月 12 日</time>
            <ul>
              <li>补齐积分中值定理、隐式二阶导数、一般截面体积和水的积分应用。</li>
              <li>增加基本原函数、非单调换元及洛必达边界的完整例题。</li>
              <li>加入等面积平均高度、可变截面、抽水与闸门水压的交互图。</li>
              <li>重新核对练习难度与误区标签，章末题和综合题改用具体提示。</li>
              <li>全书保留 7 章 35 节，现有 79 个例题与 191 道练习。</li>
            </ul>
          </div>
          <div className="version-entry">
            <span className="badge">教材 v0.2.1</span>
            <h2>v0.5.1 · 统一数学排版</h2>
            <time>2026 年 10 月 11 日</time>
            <ul>
              <li>全书题干、选项、解释、推导与解答统一使用数学排版。</li>
              <li>补齐标题、图示说明、索引与打印版的公式渲染。</li>
              <li>改善根号、分数、上下标、公式基线与手机布局。</li>
              <li>加入发布前的排版检查；修正正弦基本极限的记号。</li>
            </ul>
          </div>
          <div className="version-entry">
            <span className="badge">教材 v0.2.0</span>
            <h2>v0.5.0 · 整站视觉统一与首页精简</h2>
            <time>2026 年 10 月 10 日</time>
            <ul>
              <li>统一书库、阅读、实验室、练习、索引和辅助页面的配色、排版与控件。</li>
              <li>首页先展示可读教材，再展开数学系列；减少重复文案和宣传区。</li>
              <li>更新书封、阅读目录、搜索和手机布局；动画不再隐藏正文。</li>
              <li>保留完整数学内容、3D 演示和纯静态运行。</li>
            </ul>
          </div>
          <div className="version-entry">
            <h2>v0.4.0 · 数学展览馆与专注阅读</h2>
            <time>2026 年 10 月 10 日</time>
            <ul>
              <li>重建首页的整屏数学场景，支持曲面、环面、螺旋的连续形态切换与参数操作。</li>
              <li>六个数学方向、已出版书架和互动实验室衔接为完整浏览过程。</li>
              <li>重新编排书库和阅读页，增加可收起两侧目录的专注模式。</li>
              <li>保留完整教材与纯静态运行；动效可暂停，并响应减少动画偏好。</li>
            </ul>
          </div>
          <div className="version-entry">
            <h2>v0.3.0 · 概念检查与三维数学</h2>
            <time>2026 年 10 月 10 日</time>
            <ul>
              <li>
                重写全书 35 节的核心说明、直觉和正文，保留定义条件、推导与解答。
              </li>
              <li>
                新增 35 个概念检查和 35 个演示预测问题，例题解法可按需展开。
              </li>
              <li>
                加入圆盘、圆环、圆柱壳与旋转曲面的 3D
                演示；极限和导数增加反例对比。
              </li>
              <li>
                更新数学系列首页、交互界面及教学研究来源；保持纯静态运行。
              </li>
            </ul>
            <Link to="about/research" className="text-btn">
              查看学习方法与参考资料
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="version-entry">
            <h2>v0.2.1 · 数学教科书系列</h2>
            <time>2026 年 10 月 10 日</time>
            <p>
              首页以数学系列为入口，书库按数学方向与出版状态组织。微积分 I
              为首本已出版教材；后续规划有独立条目，完成后开放阅读。
            </p>
          </div>
          <div className="version-entry">
            <h2>v0.2.0 · 完整阅读体验</h2>
            <time>2026 年 10 月 10 日</time>
            <ul>
              <li>重建首页、书库、教材主页、7 个章节主页与 35 个小节页面。</li>
              <li>新增互动实验室、分页练习中心、全文搜索与学习记录。</li>
              <li>重做正文、推导、例题、误区、演示和练习的呈现方式。</li>
              <li>保持完整微积分 I 固定内容与纯静态运行方式。</li>
            </ul>
          </div>
          <div className="version-entry">
            <h2>v0.1.0 · 微积分 I 首版</h2>
            <time>2026 年 10 月 10 日</time>
            <p>
              7 章、35 节、70 个例题、140 节内练习、21 章末回顾题、14
              综合测试题。包含数学演示、术语索引与补充证明。
            </p>
          </div>
          <div className="quiet-note">
            <Lightbulb size={23} />
            <div>
              <h3>发现需要修正的地方？</h3>
              <p>
                请附章节编号、具体原文或图示状态。勘误以仓库 Issue
                和修订历史为准。
              </p>
            </div>
            <a href={REPO + "/issues"} target="_blank" rel="noreferrer">
              查看与提交勘误
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      ) : (
        <PrivacyPanel />
      )}
    </>
  );
}

export function PrivacyPanel() {
  const { reading, progress, update, mark, clear } = useApp();
  const [armed, setArmed] = useState(false);
  const [message, setMessage] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  function exportData() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            format: "ai-university-progress-v3",
            books: collections.map(c=>c.book.id),
            reading,
            progress,
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-university-learning.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  async function importData(file?: File) {
    if (!file) return;
    try {
      if (file.size > 1000000) throw new Error();
      const data = JSON.parse(await file.text());
      if (!((data.format === "ai-university-progress-v2" && data.book === book.id) || (data.format === "ai-university-progress-v3" && Array.isArray(data.books) && data.books.every((id:unknown)=>collections.some(c=>c.book.id===id)))))
        throw new Error();
      const raw = data.reading;
      const valid = (v: unknown): string[] =>
        Array.isArray(v)
          ? [
              ...new Set(
                v.filter(
                  (id): id is string =>
                    typeof id === "string" && !!lessonById[id],
                ),
              ),
            ]
          : [];
      const next: Reading = {
        read: valid(raw?.read),
        saved: valid(raw?.saved),
        recent: valid(raw?.recent).slice(0, 8),
        large: raw?.large === true,
      };
      update(next);
      if (data.progress && typeof data.progress === "object") {
        const entries = Object.entries(data.progress).filter(
          ([id, v]) =>
            questionIds.has(id) && (v === "understood" || v === "review"),
        );
        const merged = {
          ...progress,
          ...Object.fromEntries(entries),
        } as Progress;
        try {
          localStorage.setItem(
            "ai-university-calculus-1-progress-v1",
            JSON.stringify(merged),
          );
        } catch {}
        for (const [id, v] of entries) mark(id, v as "understood" | "review");
      }
      setMessage("已导入阅读与收藏记录。练习记录已合并。");
    } catch {
      setMessage("无法导入这个文件。请选择从本网站导出的学习记录 JSON。");
    }
    if (fileInput.current) fileInput.current.value = "";
  }
  return (
    <div className="plain-section">
      <h2>{tr("哪些数据留在浏览器里？")}</h2>
      <p>{tr("最近阅读、已读小节、收藏、字号偏好和练习自评保存在本地。网站没有用户账户，也没有将这些记录上传到服务器的功能。不同设备和浏览器不会自动同步。")}</p>
      <p>{tr("托管服务可能保留常规访问日志；这是网站托管行为，和本地学习记录不同。本网站没有接入第三方行为分析。")}</p>
      <div className="data-controls">
        <h3>{tr("管理学习记录")}</h3>
        <p>
          {localizeNode(reading.read.length)}{tr("节已读 ·")}{localizeNode(reading.saved.length)}{tr("个收藏 ·")}{localizeNode(" ")}
          {localizeNode(Object.keys(progress).length)}{tr("道练习有记录")}</p>
        <div>
          <button className="secondary-btn" onClick={exportData}>
            <Download size={16} />{tr("导出学习记录")}</button>
          <button
            className="secondary-btn"
            onClick={() => fileInput.current?.click()}
          >{tr("导入记录")}</button>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            aria-label={tr("导入学习记录文件")}
            onChange={(e) => importData(e.target.files?.[0])}
          />
          <button
            className="text-btn danger"
            onClick={() => {
              if (!armed) {
                setArmed(true);
                return;
              }
              clear();
              setArmed(false);
              setMessage("本地学习记录已清空。");
            }}
          >
            <RotateCcw size={16} />
            {localizeNode(armed ? "确认清空本地记录" : "清空本地记录")}
          </button>
          {localizeNode(armed && (
            <button className="text-btn" onClick={() => setArmed(false)}>{tr("取消")}</button>
          ))}
        </div>
        {localizeNode(message && <p role="status">{localizeNode(message)}</p>)}
      </div>
    </div>
  );
}

function ResearchPanel() {
  return (
    <div className="research-panel">
      <section className="research-intro">
        <Eyebrow>UNDERSTANDING, BY DESIGN</Eyebrow>
        <h2>{research.summary}</h2>
        <p>
          本次资料核对：{research.reviewedAt}
          。资源分别用于内容范围、解释方式与学习设计；正文、题目和图示重新编写。
        </p>
      </section>
      <div className="research-principles">
        {research.principles.map((p, i) => (
          <article key={p.title}>
            <span>0{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
      <section>
        <h2>补充阅读与演示</h2>
        <div className="research-resources">
          {research.resources.map((r) => (
            <article key={r.url}>
              <span>{r.kind}</span>
              <a href={r.url} target="_blank" rel="noreferrer">
                <h3>{r.title}</h3>
                <ArrowUpRight size={17} />
              </a>
              <p>{r.use}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2>教学研究与设计依据</h2>
        <div className="research-resources">
          {research.evidence.map((r) => (
            <article key={r.url}>
              <span>{r.kind}</span>
              <a href={r.url} target="_blank" rel="noreferrer">
                <h3>{r.title}</h3>
                <ArrowUpRight size={17} />
              </a>
              <p>{r.use}</p>
            </article>
          ))}
        </div>
      </section>
      <p className="research-limits">{research.limits}</p>
    </div>
  );
}
