# AI University

[English](README.md) · 中文

默认英文阅读，中文可在页头切换。微积分 I 已提供完整英文版（35 节、79 例题、191 练习与回顾题），其余九卷目前为中文版。语言切换保留当前小节与本地学习记录；英文书稿见 [Calculus I · English](book/Calculus-I-English.md)。

外部贡献先隔离、复核，再收录；正式版本由受保护的主分支发布。流程与验证边界见 [贡献保护](docs/CONTRIBUTION_SECURITY.md)。

**AI 编写的开放教科书，一本一本完整完成。** 首页与书库面向微积分、线性代数、微分方程、概率统计、离散数学、实分析等方向。目前已出版 **Calculus I / 微积分 I**、**Calculus II / 微积分 II**、**Calculus III / 微积分 III**、**Linear Algebra / 线性代数**、**Ordinary Differential Equations / 常微分方程**，以及 **Probability & Statistics / 概率与统计**、**Discrete Mathematics / 离散数学**、**Real Analysis / 实分析**，分别为 35、35、40、50、55、50、40、40 节完整正文，均包含条件、推导、可操作图示、例题与完整练习解答。

| 教材 | 章 | 节 | 例题 | 节内练习 | 回顾 / 综合题 |
|---|---:|---:|---:|---:|---:|
| Calculus I · v0.3.3 | 7 | 35 | 79 | 153 | 24 / 14 |
| Calculus II · v0.1.2 | 8 | 35 | 72 | 141 | 24 / 14 |
| Calculus III · v0.1.2 | 9 | 40 | 81 | 160 | 27 / 16 |
| Linear Algebra · v0.1.1 | 10 | 50 | 100 | 200 | 30 / 20 |
| Ordinary Differential Equations · v0.1.1 | 11 | 55 | 110 | 220 | 33 / 22 |
| Probability & Statistics · v0.1.1 | 10 | 50 | 100 | 200 | 20 / 10 |
| Discrete Mathematics · v0.1.1 | 8 | 40 | 80 | 160 | 16 / 8 |
| Real Analysis · v0.1.1 | 8 | 40 | 80 | 160 | 16 / 8 |

网站是 React + TypeScript + SVG + KaTeX 的纯静态应用。没有聊天室、模型 API、账户、服务端或付费依赖。AI 用于离线编写与修订教材，读者得到可审查、可下载的固定版本。

[在线阅读](https://b1n9ui.github.io/ai-university/) · [微积分 I](https://b1n9ui.github.io/ai-university/#/book/calculus-1) · [微积分 II](https://b1n9ui.github.io/ai-university/#/book/calculus-2) · [微积分 III](https://b1n9ui.github.io/ai-university/#/book/calculus-3) · [线性代数](https://b1n9ui.github.io/ai-university/#/book/linear-algebra) · [常微分方程](https://b1n9ui.github.io/ai-university/#/book/ordinary-differential-equations) · [开源发布](https://github.com/b1n9ui/ai-university/releases)

![新版网站首页](docs/images/series/home.jpg)

当前检查记录：[数学八卷交叉检查](docs/MATHEMATICS_AUDIT_2026-10-22.md)。

各卷出版记录：[常微分方程首版](docs/ODE_AUDIT.md) · [线性代数首版](docs/LINEAR_ALGEBRA_AUDIT.md) · [微积分三卷修订](docs/CALCULUS_SERIES_REVIEW.md)。

## 直接运行

需要 Node.js 22.12+（推荐 24）。

```sh
npm ci
# 完整检查另需 CPython 3.14（网页阅读不需要 Python）
npm run dev
```

打开 `http://127.0.0.1:5173`。不需要 `.env` 或任何 API key。

```sh
npm run check     # 全部十卷：内容、程序回放、项目测试、公式、类型、整本生成与构建
npm run preview   # 查看构建后的静态版本
```

首次运行开发预览前，可先 `npm run build` 生成整本阅读页与下载书稿。发布只需把 `dist/` 放到任意静态服务器。不要双击 `dist/index.html` 作为 file URL；使用静态 HTTP 服务器。

## 分类与书库

`packages/content/library.json` 统一维护分类、学科方向、教材简介和出版状态。当前 10 本已出版：数学 8 本、其他 2 本。数学分类包含微积分 I/II/III、线性代数、常微分方程、概率与统计、离散数学、实分析；其他分类暂时收录 Python 编程入门与《带着 AI 做项目》。规划条目不提供空白章节或阅读链接。新增规划会自动进入首页方向与书库，整本内容接入完成后再出版。详见 [系列目录与新增教材](docs/LIBRARY.md)。

## 第一卷的完整范围

| 章 | 内容 |
|---|---|
| 1 函数 | 定义域、图像变换、复合与反函数、三角与弧度、指数与对数 |
| 2 极限 | 双侧与单侧、计算法则、ε–δ、连续与介值、无穷与渐近线 |
| 3 导数 | 定义、基本规则、链式、三角、隐式求导 |
| 4 变化模型 | 指数对数、反函数导数、相关变化率、线性近似、牛顿法 |
| 5 导数应用 | 极值、中值定理、凹性、优化、洛必达 |
| 6 积分 | 原函数、黎曼和与数值法、定积分、基本定理、换元 |
| 7 积分应用 | 面积、圆盘圆环、壳层、弧长与曲面、位移功质量 |

每节固定包含：核心意思、直觉、正文、正式定义与条件、推导、互动图、两道例题、常见错误、四道练习及答案、先修关系、难度、误解标签与生成来源。另有术语索引、公式索引、证明补充与综合测试。

## 第二卷的完整范围

| 章 | 内容 |
|---|---|
| 1 积分技巧 | 分部、三角积分、三角代换、部分分式、方法选择 |
| 2 延伸与建模 | 数值积分误差、无穷尾部、有限奇点、旋转侧面积、质心、压力与功 |
| 3 数列与无穷和 | 数列极限、递推与单调有界、部分和、几何与望远镜级数 |
| 4 收敛判别 | 积分与尾界、比较、比值与根值、交错与误差 |
| 5 幂级数 | 绝对与条件收敛、半径和端点、逐项运算、Taylor 多项式 |
| 6 展开与计算 | Taylor 余项、基本展开、积分与极限、广义二项式 |
| 7 曲线与坐标 | 参数运动、切线与弧长、极坐标、极坐标面积与弧长 |
| 8 一阶方程 | 方向场、分离变量、积分因子、Euler 与 Logistic |

## 第三卷的完整范围

| 章 | 内容 |
|---|---|
| 1 向量与空间 | 向量、点积、叉积、直线平面、二次曲面、柱坐标与球坐标 |
| 2 空间曲线 | 向量值函数、运动与路程、弧长参数与曲率 |
| 3 多元微分 | 函数与等高线、多元极限、偏导、可微与切平面、链式与隐函数、梯度 |
| 4 近似与优化 | 二阶 Taylor、临界点、闭区域全局最值、Lagrange 乘子 |
| 5 二重积分 | Fubini、一般区域与换序、极坐标、质量质心与惯量 |
| 6 三重积分 | 空间区域、柱坐标、球坐标、一般换元与 Jacobian |
| 7 曲线积分 | 向量场、标量弧长积分、功、势与定义域、Green 与平面通量 |
| 8 曲面积分 | 参数曲面与定向、面积、通量、散度与旋度 |
| 9 积分定理 | Stokes、散度定理、方法选择、连续性与守恒 |

40 个本地三维图示可拖动旋转、缩放，以方向键操作，并切换俯视/正视。它们用等比例空间坐标和 SVG 投影，不要求 WebGL；解析读数、有限近似和显示倍率分别说明。每节有三步可载入实验，合计 120 个预设。检查范围见 [Calculus III 审查记录](docs/CALCULUS_III_AUDIT.md)。

三卷分别版本化，课程划分不等同于所有学校；线性代数与常微分方程已作为独立整卷出版；深入扭率理论、微分形式与偏微分方程留给后续教材。

## 数学展览馆界面

首页采用整屏数学场景，展示可操作的波面、环面和螺旋。参数改变真实几何，形态切换使用同一网格的连续插值。表面材质、灯光与少量辉光用于显示空间层次，颜色不表示额外数学结论。展示模型与正式教材章节分开管理，不把它们当作新增或已出版的章节。

首屏动效可暂停，离开可见区域或切到其他标签页时停止；减少动画偏好关闭默认旋转和形态过渡。按需加载 Three.js，首页的互动实验区接近可见时才挂载。阅读页提供专注模式，书库区分已出版与规划教材。参考实例、实际截图与检查见 [本轮设计记录](docs/IMMERSIVE.md)。

## 阅读与下载

- 网站 v0.18.0：数学系列首页、按方向和出版状态筛选的书库、教材主页、数学八卷共 71 个章节主页、345 个知识点页面、实验室、分页练习中心、全文搜索、公式/术语/附录索引、阅读指南、下载、项目与贡献资料。
- 阅读页：专注模式、嵌入演示、页内定位、上下节翻页、收藏、较大字号与已读标记。练习支持逐题/连续查看、提示、完整解答与数值检查。
- [微积分 I 书稿](book/Calculus-I.md)与[微积分 II 书稿](book/Calculus-II.md)、[微积分 III 书稿](book/Calculus-III.md)与[线性代数书稿](book/Linear-Algebra.md)、[常微分方程书稿](book/Ordinary-Differential-Equations.md)：版本化源产物，包含所有解答。
- `dist/book.html` 与 `dist/calculus-2.html` 与 `dist/calculus-3.html` 与 `dist/linear-algebra.html`：数学八卷各自的完整阅读页（另含 `dist/ordinary-differential-equations.html` 、`dist/probability-statistics.html` 、`dist/discrete-math.html` 与 `dist/real-analysis.html`），公式预先排版，支持浏览器打印为 PDF。
- `dist/Calculus-I.md` 与 `dist/Calculus-II.md` 与 `dist/Calculus-III.md` 与 `dist/Linear-Algebra.md`：供网站下载的同版书稿。
- 阅读、收藏和练习记录仅保存在浏览器，可导出与导入。已读标记与练习掌握状态分别记录；数值题可以检查数值，其余题为明确标注的自评。没有认证成绩。

## 仓库结构

```text
apps/web/                  静态阅读网站与界面组件
packages/content/          数学八卷目录、345 个 canonical learning objects、回顾与考试
packages/visuals/          可复用数学模型与数值方法
schemas/                   教材 JSON Schema
scripts/                   校验、整本生成、数学回归测试、草稿脚手架
book/                      生成的整本 Markdown 书稿
docs/                      架构、内容规范、生成检查流程、部署与发布
.github/                   CI、静态部署、勘误模板与 PR 模板
```

`packages/content` 是教材事实来源，网站与下载书稿由同一份数据生成。不要直接修改生成的 HTML 或 Markdown；修改章节 JSON 后重新构建。

## 质量与版本

网站版本 **v0.18.0**；微积分 I 内容为 **v0.3.3**，微积分 II、III 为 **v0.1.2**，其余数学卷均为 **v0.1.1**。尚未逐节人工审校。结构校验、公式渲染、先修图与选定数值验证可以发现部分错误，但不等同于逐式形式化证明。欢迎用具体反例、章节位置和可复算步骤提交勘误。

`npm run check` 检查所有章节结构、章节链接、公式语法、先修有向无环图、视觉函数配置与数学模型。浏览器验证记录见 [QA](docs/QA.md)。

## 贡献与开源

阅读 [CONTRIBUTING](CONTRIBUTING.md)、[内容规范](docs/CONTENT_GUIDE.md)、[生成与复核流程](docs/GENERATION_REVIEW.md)、[部署说明](docs/DEPLOYMENT.md) 与 [发布流程](docs/RELEASING.md)。

软件代码使用 [MIT](LICENSE)，原创教材内容与原创图示使用 [CC0 1.0](LICENSE-CONTENT.md)。第三方库保持各自许可，见 [THIRD_PARTY_NOTICES](THIRD_PARTY_NOTICES.md)。不把参考教材的图片或段落复制进本项目。

English: AI University publishes complete AI-authored, versioned textbooks with browser-local interactive mathematics. Calculus I is the first full introductory single-variable calculus volume. No model API or server is required.

## 教学与视觉修订

第一卷 35 节核心说明、直觉和正文已压缩重写；新增 35 个概念检查与 35 个演示预测问题。例题先显示题目，解法可以按需展开。极限/导数提供孔洞、跳跃、尖角对比。空间几何使用 Three.js 本地渲染，包含圆盘、圆环、圆柱壳与旋转曲面，可拖动、缩放、改变转角并切换二维图；无需 API、在线模型或外部图形服务。

- [教学研究与来源](docs/LEARNING_RESEARCH.md)
- [本轮设计与验证](docs/FRONTIER.md)
- [网站上的学习方法与参考资料](https://b1n9ui.github.io/ai-university/#/about/research)

第一卷旋转体与首页 3D 使用 WebGL 2，无法显示时可切回二维演示；第三卷本地空间图使用 SVG 投影，不依赖 WebGL。数学与结构检查并不证明所有解答无误，也不代替读者学习效果测试。

本轮 Calculus I 的课程覆盖、具体补全与复算证据见 [内容复核](docs/CALCULUS_I_AUDIT.md)。

三卷支持固定的回答式教学：110 种另一角度的解释、330 个可载入的三步实验、可输入数值的参数控件、分层提示与针对性反馈。内容由 AI 离线编写，浏览器只呈现固定教材与本地数学计算，不调用实时模型。

本轮界面精修、实际前后截图与检查记录见 [VISUAL_REFINEMENT.md](docs/VISUAL_REFINEMENT.md)。

## 其他分类：两本新教材

由 [aby0120](https://github.com/aby0120) 提交、AI 编写的两本完整教材现已收录；原始投稿分别为 [#4](https://github.com/b1n9ui/ai-university/pull/4) 和 [#5](https://github.com/b1n9ui/ai-university/pull/5)。

| 教材 | 内容 | 在线阅读 |
|---|---|---|
| Python 编程入门 v0.2.1 | 5 章 20 节、40 例题、94 道练习及回顾；195 个参数组合的真实执行回放 | [打开教材](https://b1n9ui.github.io/ai-university/#/book/python-introduction) |
| 带着 AI 做项目 v0.1.1 | 6 章 18 节、36 例题、88 道练习及回顾；情境题、Git 教学台、任务卡与可下载项目 | [打开教材](https://b1n9ui.github.io/ai-university/#/book/ai-development) |

编程教材的唯一事实来源在 `packages/content/python` 与 `packages/content/ai-development`；独立 schema 保留代码语义。网站只回放固定 Python 示例，任意新代码在本机执行；任务卡也不调用 AI 服务。两书都接入全站搜索、分类目录、Markdown 下载及 HTML 打印版。数学课程保持原有链接和交互。

更新 Python 后运行 `npm run build:python`，再运行 `npm run check`；更新开发教材后运行 `npm run build:ai-development`。Python 回放固定由 CPython 3.14 生成，避免不同解释器的行事件差异导致“书稿未改但回放过期”；CI 与发布使用同一版本。解释器构建要求与读者的语法兼容范围分别记录。

## 概率与统计

完整首版，当前修订 v0.1.1，10 章 50 节、100 个例题、230 道练习及回顾。覆盖数据与研究设计、事件与计数、随机变量、离散与连续分布、联合和条件分布、抽样理论、估计区间、检验、回归、ANOVA 与 Beta–二项更新。前半需要初等代数；连续部分需要基础积分。

[在线阅读](https://b1n9ui.github.io/ai-university/#/book/probability-statistics) · [整本书稿](book/Probability-Statistics.md) · [内容与交互复核](docs/PROBABILITY_STATISTICS_AUDIT.md)

50 节都接入本地模型与三步实验。理论概率、数值近似和有限模拟明确区分；模拟使用可见固定种子。区间覆盖、CLT 均值重复抽样、bootstrap、精确置换、回归点拖动、置信与预测区间、后验更新均在浏览器中计算，无账户或远端执行。经典 CLT、正态样本理论等依赖条件写在正文与附录；不把有限模拟当作定理证明。

数值核使用独立 60 位精度的 113 组参考值核对；保存参考数据后，网站运行与 CI 都不依赖 mpmath。自动回归还检查所有控件参数范围的端点组合、归一化、模型矩、有限总体修正、边界区间、精确置换和固定种子重复性。

## 离散数学

完整首版，当前修订 v0.1.1，8 章 40 节、80 个例题、184 道带解答练习、40 个交互模型与 120 组引导参数。覆盖逻辑证明、集合关系、整数同余、归纳算法、计数递推、图论和树与网络算法。

[完整书稿](book/Discrete-Mathematics.md) · [检查记录](docs/DISCRETE_MATH_AUDIT.md)。从 `#/book/discrete-math` 阅读；打印版为 `discrete-math.html`。原书单现已全部出版；偏微分方程等属于独立后续课程。

## 实分析

完整首版 8 章 40 节、80 个例题、184 道带解答练习与回顾题。由实数完备性到数列、级数、实线拓扑、连续、微分、Riemann 积分及一致收敛；每节含证明练习。交互模型展示误差带、二分包围、开覆盖、上下和、移动尖峰及极限交换反例。

[完整书稿](book/Real-Analysis.md) · [检查记录](docs/REAL_ANALYSIS_AUDIT.md)。阅读入口 `#/book/real-analysis`，打印版 `real-analysis.html`。这是实直线上第一门分析课程；一般度量空间、测度与 Lebesgue 积分、泛函分析和多元理论另属后续课程。
