# 新学科投稿：Python 编程入门

这是一份完整课程的 **v0.2.0 投稿草稿**，先提出课程边界并给出整卷内容，供维护者逐章审阅。它响应 `CONTRIBUTING.md` 中“新学科先提出完整课程边界”的要求。当前正式书库定位为数学系列。本稿另有独立的 Python 网页投稿预览；Python 是否纳入正式系列及出版方式由维护者决定。

## 读者、目标与范围

面向没有编程经验的中文读者。不要求编程或终端经验；先在网页观察执行，再按首节学习保存文件、进入练习目录并运行程序。本卷从运行脚本到可测试的命令行应用，只用 Python 标准库。

| 章 | 四节内容 | 完成后可以做什么 |
| --- | --- | --- |
| 1 开始编程 | 运行程序、名称与类型、数值、字符串与输入 | 写出简单输入输出程序，区分值与文本 |
| 2 控制执行 | 条件、for、while、调试 | 追踪流程、检查阈值与终止条件 |
| 3 组织数据 | 列表、字典、元组与集合、推导式 | 按需求选容器，理解共享状态并整理数据 |
| 4 组织程序 | 函数、参数、模块与标准库、异常 | 设计可复用接口，区分计算与输入输出 |
| 5 完成应用 | 文本文件、JSON/CSV、测试、消费汇总器 | 验证数据、读写文件并交付命令行程序 |

整卷含 20 节、40 个逐步例题、80 道节内练习、10 道章末回顾、4 道综合题、26 个术语及完整项目源码。全部题目附提示、解释、参考代码与预期输出。每节有三段以上正文、定义与条件、三步以上过程解释、两项误区、三选一概念检查及一个可调参数、逐步观察的互动实验。

面向对象、Web、数据库、数据分析库、并发与异步、生成器及打包发布不在本卷范围内。后续方向只在边界说明中列出，没有空白章节。先修边仅引用本卷更早的节，按顺序形成无环课程图；每章回顾再组合已学概念。

## 事实来源与生成产物

- `book.json`：课程边界、章节顺序、版本、来源和许可。
- `lessons/*.json`：每节唯一事实来源。
- `supplements.json`：章末回顾、综合题与术语。
- `project/`：真实可执行项目、样例、测试，以及双文件导入练习。
- `learning-object.schema.json`：本稿结构约束。
- `tools/validate.mjs`：结构、来源、误区、登记和先修顺序检查。
- `tools/verify.py`：154 个实验/例题/答案片段的实际执行、标准输出比较、双文件导入与项目测试。
- `tools/traces.py`：生成全部有限参数组合的真实执行记录。
- `experiments.generated.json`：由教材参数与代码生成的静态互动数据。
- `tools/test_traces.py`：独立检查行号时序、分支、循环、函数作用域、历史状态、文件隔离及装糖果边界。
- `tools/build.mjs`：从上述事实来源生成 `Python-Introduction.md`；附录项目代码直接读取 `project/`。
- `Python-Introduction.md`：整本可阅读投稿书稿，随源稿提交；不能直接编辑。
- `QA.md`：实际验证环境、证据和局限。
- `PR_DESCRIPTION.md`：可用于提交审阅的说明。

原数学 schema 的字段结构基本保留，但 Python 没有对应的 LaTeX 定理和数学图形模式。本稿删除 `formalDefinition.latex` 与 `derivation[].latex`，用可执行的 `python-trace` 代替数学 `interactiveVisual` 枚举，用 `{code, stdin, stdout}` 保存程序答案。因此它使用独立 schema，**不能直接移入现有 `packages/content/lessons`**。没有通过填写无意义公式来伪装成数学对象。

网页预览位于 `#/python`，每节按“具体问题 → 显式代码与逐步解释 → 改参数观察 → 概念检查 → 独立练习”组织。首个例题直接显示，主线语法先解释再操作；浮点误差、负数整除、共享默认列表等放入选读。

20 节均提供可调参数、逐行前进/回退、变量类型与值、累计输出、预测核对。“装糖果”另有袋子与剩余图。互动来自有限的 **195 个参数组合**，构建时由 CPython 实际执行并记录“下一行执行前”的状态；网页离线回放，改参数自动重置。网页不能运行任意新代码，也没有模型服务或在线执行后端。复制代码后可在本机自由修改运行。

## 网页预览

```sh
npm run dev
```

打开 `http://127.0.0.1:5173/#/python`。目录、阅读、练习与实验可切换；手机使用顶部“教材目录”打开抽屉。网页读取同一份教材 JSON，下载读取生成的整本 Markdown；修改事实来源后须运行 `build:python` 更新下载稿。

预览代码位于 `apps/web/src/pages/PythonPreview.tsx` 与 `python-preview.css`，主应用按独立 Python 路由延迟加载。`#/python/<lesson-id>` 阅读、`/experiment` 单独操作互动实验、`/practice` 做练习；`#/python/review`、`glossary` 和 `project` 提供全书辅助页。

## 本地检查

仓库原有命令仍按项目文档运行，要求 Node.js 22.12+。Python 草稿检查另外需要可用的 `python3`（使用兼容 Python 3.9+ 的通用语法；建议读者安装仍获支持的 Python 3 版本）。

```sh
npm ci
npm run build:python
npm run check:python
npm run check
```

`check:python` 会验证答案、执行记录和 8 项互动语义测试，并检查书稿是否与事实来源一致；过期时先运行 `build:python`，把重建书稿一起提交。新增的两个 npm 命令只服务本投稿，没有改变原有 `check`、网站构建、数学校验或发布工作流。**当前远端 CI 的 `check` 不自动运行 Python 草稿检查**，评审本稿还需单独运行 `check:python`。

Windows 若没有 `python3` 命令，可分别执行：

```powershell
node drafts/python/tools/validate.mjs
py -3 drafts/python/tools/verify.py
py -3 drafts/python/tools/test_traces.py
py -3 drafts/python/tools/traces.py --check
node drafts/python/tools/build.mjs --check
npm run check
```

片段运行在全新的临时工作目录，避免示例文件相互覆盖；临时目录与 `-I` 不是安全沙箱。本工具只运行本稿中已审阅的固定代码，不应自动执行未经查看的第三方投稿。

## 项目运行

```sh
python3 drafts/python/project/expense_report.py drafts/python/project/sample.csv
python3 -m unittest discover -s drafts/python/project -v
```

总额 2350 分来自手算 `1250 + 300 + 800`，餐饮 2050 分来自 `1250 + 800`。金额用整数分保存，显示用整数商余数，不依赖浮点舍入。损坏数据拒绝整份输入，不给半份报告。更多输入条件和错误退出行为见第 5.4 节及书稿附录。

## 来源、许可与收录流程

资料限于 Python 官方教程和标准库文档，以 3.13 路径记录，逐节注明用途；原文未复制，例题和项目自行编写。正文、习题、教学代码与原创说明按仓库 `LICENSE-CONTENT.md` 的 CC0 1.0 投稿；构建/验证工具、独立项目源码按仓库 `LICENSE` 的 MIT 投稿。没有引入第三方库、图片或课程题库。

记录 `author=AI-generated`、`humanReviewed=false`。本地输出比较和边界测试只能支持已测行为，不声称全书语义已形式化证明或已人工审校。

本稿应作为外部贡献建议进入 PR。遵循 `docs/CONTRIBUTION_SECURITY.md`：正式收录须由仓库所有者批准当前 head SHA 并通过项目检查；新增提交需重新批准，不直接推入受保护主分支或发布 Pages。课程边界、schema 适配、各章题解和完整项目可逐项审阅。
