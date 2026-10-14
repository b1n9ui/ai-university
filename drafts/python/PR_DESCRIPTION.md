# 提议新增完整 Python 入门教材与网页投稿预览

项目目前只接入数学教材。本贡献先提交一份面向零基础中文读者的完整 Python 入门稿，明确课程边界，供维护者决定新学科是否纳入系列并逐章审阅。正文从运行脚本到文件处理和可测试的命令行程序，共 5 章 20 节，含 40 个例题、80 个节内练习、10 个章末回顾、4 个综合题与完整解答。

所有新增教材事实来源位于 `drafts/python`。本稿适配项目的 learning object 教学结构，将数学公式/图示字段换为编程定义、可执行答案及参数化逐行实验，使用独立 schema。整本 `Python-Introduction.md` 由同版 JSON 与真实项目源码生成。新增独立的 `#/python` 网页投稿预览，延迟加载相同 JSON，提供全部章节、练习、分选项反馈、195 种已核对参数组合的逐行回放、变量与输出观察、糖果装袋图、代码复制、书稿下载及独立的已读记录；正式书库仍未将其标为 published。新增 `build:python` 与 `check:python` 命令，没有改变原有 `check` 或发布工作流。

## 验证

- [x] `npm run build:python`：生成同版整本稿。
- [x] `npm run check:python`：结构、登记、来源、误区和先修顺序通过；154 个代码片段、双文件模块练习、15 个项目测试、8 项回放语义测试及 195 个参数组合核对通过；生成书稿与源数据一致。
- [x] `npm run check`：原网站构建、内容校验、TypeScript 及 24 个仓库测试通过。
- [x] 独立证据：商余数代回、条件阈值、空数据、参数默认值和逐行状态时序；消费汇总器用手算 1250+300+800=2350 分检查完整 CLI 报告。
- [x] 网页预览：1320×900 桌面与 390×844 手机布局、目录搜索、概念反馈、已读记录、答案展开、参数变化、前进/回退、预测反馈和装袋边界、代码复制及下载一致性；手机目录可用 Escape 关闭。

环境：macOS、Node.js v24.16.0、Python 3.9.6。详细范围与未验证部分见 `drafts/python/QA.md`。当前远端 `check` 不执行 Python 草稿命令，评审时需另外运行 `check:python`。

## 内容、来源与许可

- 原结论与新结论：现有 Calculus I 正文无修改；新增一个独立的 Python 课程提案和整卷草稿。
- 适用条件：面向零基础、通用 Python 3 语法和标准库；不涉及对象继承、第三方数据分析库、Web、并发或打包发布。
- 对照来源：Python 3.13 官方教程、类型、异常、输入输出、JSON、CSV、unittest 与 argparse 文档；逐节记录来源与用途。
- 原创教材说明、练习与教学代码按 CC0 1.0；工具及独立项目代码按 MIT。无第三方图片、题库、库或新增运行时服务。
- `author=AI-generated`、`humanReviewed=false`；自动检查不等同于人工审校或完整正确性证明。
- 尚未验证：其他操作系统与 Python 版本的完整运行矩阵、任意输入、学习效果、远端部署与正式书库出版。

正式收录仍遵循贡献保护：外部贡献需仓库所有者批准当前 head SHA，追加提交后重新批准；本投稿不修改贡献审查、主分支保护或 Pages 发布权限。

本次 v0.2.0 重写使用具体情境、显式例题和小步解释。章末题只组合已教内容，困难边界放在选读。执行结果校验不等同于已证明零基础读者能够独立学会；尚需用户阅读试学反馈。

## 如何审阅网页效果

在新的工作目录中获取本投稿分支：

```sh
git clone --branch contribution/python-introduction --single-branch https://github.com/GMguimei/ai-university.git python-textbook-review
cd python-textbook-review
npm ci
npm run dev
```

打开终端显示的本地地址并进入 `#/python`；例如 `http://127.0.0.1:5173/#/python`。建议从 1.1 开始阅读，再看 1.3 的装袋互动、2.3 的零次循环和 4.1 的函数参数与返回。网页演示全部在浏览器本地回放，不需要 API key。

整本书稿可直接阅读 `drafts/python/Python-Introduction.md`。安装 Python 后另运行 `npm run check:python` 验证教学代码；当前正式 Pages 站点需维护者决定收录、合并与发布后才会出现本投稿。
