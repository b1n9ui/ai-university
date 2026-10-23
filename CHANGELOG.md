# Changelog

## v0.17.1 · 2026-10-22

- 数学八卷交叉检查：345 节定义与条件、702 个例题的题干与答案、练习结构和先修图；记录范围与局限见 `docs/MATHEMATICS_AUDIT_2026-10-22.md`。
- 修复链式法则播放只走到 x=1 的范围错误；播放从当前参数继续，暂停后不再跳回起点，完成后可重播。
- 修复很小的非零答案被 0 判对的问题；改用相对误差，开放作答、集合与构造题改为对照解答自评。
- 补全 28 道脱离上下文的练习题干，明确指定误差估计、展开中心和样本方差分母。
- 明确共振外力相位、Bernoulli 特殊指数、幂级数解析条件，以及超几何、Chebyshev、Welch 与卡方近似条件；补全随机变量变换的分段分布函数。
- 修复置换检验重复的演示步骤与组件标识，展示三种不同极端程度的分组。
- 复查全部 310 个注册数学模型的 2,715 组控制边界组合；新增回归检查并同步八卷下载、打印与版本记录。

## v0.17.0 · 2026-10-22

- 出版《实分析》完整首版：8 章 40 节、80 个例题、184 道带解答练习与回顾题，每节含证明或反例练习。
- 覆盖实数完备性、数列级数、实线拓扑、连续、微分、Riemann 积分及一致收敛。补充上下积分、不可积反例、极限交换与非解析光滑函数等证明。
- 40 节本地交互模型、120 个教学预设；解析确界与余项界不依赖有限图像采样，保留移动尖峰的关键顶点。
- 同步目录、搜索、练习、索引、Markdown 与打印版。原书单十卷全部出版，其中数学八卷、其他两卷；后续课程仍需单独编写。

## v0.16.0 · 2026-10-22

- 出版《离散数学》完整首版：8 章 40 节、80 个例题、184 道带解答练习与回顾题。
- 40 节本地交互模型、120 组引导设置；图算法可逐步执行，BFS 可点击顶点切换起点。
- 接入全卷目录、知识图谱、搜索、练习、Markdown 和打印版。书库现有数学七卷、其他两卷，实分析仍在规划中。
- 对小图穷举、独立最短路、生成树和匹配优化、整数和计数模型进行交叉核对。


## v0.15.0 · 2026-10-21

- 出版《概率与统计》完整首版：10 章 50 节、100 个例题、230 道练习与回顾解答。
- 新增五十节本地模型、150 个实验预设，以及完整书稿、打印、搜索、练习和知识图谱。
- 提供概率质量/密度、联合表、抽样与 CLT、bootstrap、区间覆盖、Wilson、Welch、检验、置换、功效、回归、ANOVA 与后验更新。
- 理论、近似与有限模拟分开显示，固定种子可复现；拖动和播放支持控件范围终点，数学图文字不被误选。
- 独立高精度参考、参数域角点、归一化、矩、区间和抽样设计回归纳入完整检查。

## v0.14.0 — 2026-10-21

- 书库新增“数学”和“其他”分类；现有五本数学教材归入数学，两本新教材归入其他。首页可切换分类，书库保留出版状态和数学方向筛选。
- 收录 aby0120 的 Python 编程入门（原投稿 #4，5 章 20 节）与《带着 AI 做项目》（原投稿 #5，6 章 18 节），保留贡献历史和署名。
- 两本新书移入 canonical 内容目录；正式目录、阅读、互动、练习、术语、项目、搜索、Markdown 与打印 HTML 同步接入。旧投稿链接保持兼容。
- Python 回放生成固定到 CPython 3.14，重建并校验 195 个参数组合；校准两书练习难度，避免按题号机械递增。
- 完整检查与 CI 纳入两书的 schema、示例输出、执行回放、Git 对照、项目测试及出版产物一致性；保持外部贡献批准与主分支发布保护。


## v0.13.0 · 2026-10-21

- 出版《常微分方程》完整首版：11 章 55 节、110 个例题、275 道练习与完整解答。
- 接入 55 节演示与 47 类本地模型，涵盖方向场、振动、Laplace、系统、非线性、级数及数值方法。
- 初值和状态图支持拖动；弹簧示意与位移曲线同步；数值模型明确误差、解端点和停止原因。
- 统一接入目录、搜索、练习、索引、下载和预排版打印；92 项检查及真实桌面、手机页面验证通过。


## 0.10.1 · 2026-10-21

- 修复拖动三维图时误选坐标文字、触发浏览器划词浮层的问题。
- 图形区域统一阻止原生文字选择与拖拽，保留正文选中复制、键盘操作和精确参数输入。
- 补齐非主按键过滤、指针捕获丢失后的清理；教材内容版本不变。

## 0.10.0 · 2026-10-14

- 完整新增 Calculus III v0.1.0：9 章 40 节、80 个例题、203 道练习与完整解答、46 条术语和 6 篇补充。
- 覆盖多元微分与优化、重积分、曲线/曲面积分、Green、Stokes、散度定理及守恒。
- 40 个本地空间模型支持旋转、缩放、键盘与俯视/正视，120 个教学预设；无需 WebGL 或外部服务。
- 三卷统一接入书库、目录、跨卷先修、练习、索引、下载、打印与本地记录；保留既有链接。
- 新增投影、微分、几何、积分与守恒的独立数学检查，并检查全卷桌面和手机页面。

## 0.9.0 · 2026-10-14

- 完整发布 Calculus II v0.1.0：8 章 35 节、70 个例题、178 道练习与解答、术语和证明补充。
- 新增积分技巧与误差、反常积分、级数、Taylor、参数/极坐标与一阶方程的交互模型及 105 个引导预设。
- 接入按教材区分的目录、翻页、练习、索引、下载和本地记录；全文搜索跨两卷标注来源。
- 保留 Calculus I canonical 内容 v0.3.1、旧链接与既有学习记录；同时生成两卷完整书稿与打印页。
- 维持纯静态、无模型 API、无账号；新增数学模型与整卷结构回归检查。


## 0.8.2 · 2026-10-14

- 极限与导数动画到最小正距离 0.0001 再停止，修正统一 8 秒导致的提前截断。
- 矩形和与弧长细分到 80；参数扫描到本次区间终点后停止，不再绕回零点。
- 动画结束时注明有限距离或有限分割，避免把画面重合当作精确极限。
- 保留自动暂停、手动操作和数学条件；教材内容仍为 v0.3.1。
- 修正手机观察说明的公式与文字被挤成窄列的问题。

## 0.8.1 · 2026-10-14

- 深色面板的滑块圆点改为亮色、白色边框与 22 px 尺寸，避免与轨道混在一起。
- 统一二维、三维与首页滑块，增加悬停/按下/键盘聚焦提示及 36 px 操作区域。
- 教材内容保持 v0.3.1；拖动、精确输入与数值范围不变。

## 0.8.0 · 2026-10-14

- 精修全站视觉层次：统一面板、边框、阴影、圆角与操作状态。
- 首页保留数学曲面，增加清晰的形态选择与控制台层次。
- 二维与三维演示统一实验台外框，数学图形保留浅色坐标纸，读数与参数更易辨认。
- 阅读页改用带图标的内容切换，强调核心解释、步骤与例题；教材库与资源页同步。
- 支持窄屏与减少动态效果偏好；保持纯静态运行，教材版本仍为 v0.3.1。

## 0.7.0 · 2026-10-12

- Textbook v0.3.1: author 35 alternate explanations and 105 bounded, replayable guided experiment states in the canonical schema and printed manuscript.
- Connect prediction, controls, observation and checking; distinguish changed parameters from the original preset observation. Keep free exploration and local 2D/3D models.
- Use editable, validated parameter controls across planar, spatial and supplementary diagrams; clarify curve/line/area legends and correct the antiderivative legend.
- Reduce repeated headings, fix hard-coded question/example labels and collapse secondary models until requested.
- Add staged hints and topic-specific feedback; successful numeric matching no longer automatically claims conceptual understanding.
- Verify experiment-to-control mappings, mathematical counterexamples and exact known readouts before publication.

## 0.6.0 · 2026-10-12

- Canonical textbook v0.3.0: retain 7 chapters / 35 lessons; expand to 79 worked examples, 153 section exercises, 24 chapter-review questions and 14 exam questions (191 exercises total).
- Complete integral mean-value conditions, implicit second derivatives, general section volumes, cone related rates, pumping work and hydrostatic gate force. Supply usable basic antiderivatives and method-boundary counterexamples.
- Add browser-local average-height, section-shape, pumping and pressure diagrams, with independent geometry/physics checks.
- Replace generic review hints, recalibrate practice difficulty and remove unrelated misconception tags. Require local inverse-function conditions and restore a silently hidden percent sign.
- Derive displayed publication counts from canonical content; reject unescaped TeX comments before publishing.

## 0.5.1 · 统一数学排版

- 为全书 35 节、概念检查、例题、175 道练习与附录补齐显式数学标记；分数、根号、上下标及不等式使用 KaTeX。
- 补齐标题、目录、知识连接、搜索结果、图示说明和模型读数的渲染入口，网页与打印版共用分段规则。
- 改进公式基线、选项布局、单位正体与长公式滚动；增加内容排版检查及回归测试。
- 教材修订为 v0.2.1；章末题的“正弦基本极限”明确写出取极限过程，避免误写为恒等式。

## 0.5.0 · 整站视觉统一与首页精简

- 统一深墨绿、薄荷绿和暖白的导航、页头、书封、阅读目录、控件、搜索与页脚。
- 覆盖书库、教材与章节、35 节阅读、实验室、练习、知识索引、学习记录和全部辅助页面。
- 首页先展示可读教材，再展开系列；移除重复说明和大型结尾宣传区，增加阅读、演示与练习入口。
- 提高小字与图表标注的对比度，扩大演示和题目按钮；内容不再等待滚入动画才显示。
- 数学正文与演示模型保持教材 v0.2.0；继续纯静态运行。

## 0.4.0 · 数学展览馆

- 整屏数学场景：真实波面、环面、螺旋，连续形态过渡、参数、旋转视角、暂停和恢复。
- 数学方向改为连续索引；已出版书架和互动演示区形成完整浏览过程。
- 重做书库和阅读页排版，加入专注模式；手机目录在专注状态仍可打开。
- 新增四项独立数学模型检查；保留固定教材 v0.2.0 的全部 35 节。


## 0.3.0 · 教材内容 0.2.0

- 重写 Calculus I 全部 35 节的核心说明、直觉与三个正文问题，去掉重复引导。
- 加入 35 个概念检查、35 个演示预测问题，例题解法可按需展开；保留 70 例题与 175 练习解答。
- Three.js 本地 3D：圆盘、圆环、圆柱壳、旋转曲面；二维轮廓、视角、缩放、旋转角度、截面同步和回退。
- 极限与导数加入跳跃、尖角反例；二维与三维动画均提供速度和暂停。
- 深色数学演示与系列首页、浅色长文阅读；增加教学研究、补充阅读、来源用途与三维许可证。
- 修正壳层例题的区域描述和曲线凹性演示说明。


## 0.2.1

- 首页改为开放数学教科书系列入口，六个数学方向置于已出版书架之前。
- 统一系列目录驱动首页与书库，区分已出版和规划中，支持方向与状态筛选。
- Calculus I 保持为首本已出版教材；规划条目不生成空白正文或假阅读链接。
- 增加目录 schema、出版数据校验和后续教材接入说明。

## 0.2.0 — 2026-10-10

- 重建整站信息结构：书库、教材与章节主页、实验室、分页练习、全文搜索、学习记录与支持页面。
- 重做正文、定义、推导、例题、演示与逐题练习排版。
- 增加收藏、已读标记、较大字号、记录导出与导入；保留 v1 练习记录兼容。
- 为数学模型生成实验室预览，并修正导数演示中切线颜色说明。
- 保持全部内容和互动在静态客户端运行。


## 0.1.0 — 2026-10-10

- 完成 Calculus I 第一版全部 7 章 35 节，从函数基础到积分应用。
- 70 道逐步例题、140 道节内练习、21 道章末题和 14 道综合题，均附答案与解法。
- 静态阅读网站、20 种本地 SVG 图示模式、数值练习检查与自评记录。
- 完整 Markdown、无 JavaScript 依赖的整本打印 HTML、术语与公式索引。
- 内容 schema、先修 DAG 校验、数学模型测试与公开生成来源。
- MIT 软件许可、CC0 原创教材内容、贡献与静态部署流程。

完整第一版仍为 AI 生成内容，尚未逐节人工审校。
