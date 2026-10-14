# 新增《带着 AI 做项目》完整入门教材与互动预览

为会用 AI 写代码、但缺少开发框架的读者补上需求、项目结构、Git、任务拆分、审阅、测试排错和交付常识。用个人“学习清单”贯穿六章，读者从一次具体使用场景出发，学会自己定目标、验收和技术边界，再让 Agent 协助实现。

整卷 18 节，36 例题、72 道完整解答练习、18 个概念检查、54 个逐步情境决定、12 道回顾、4 道综合题和 32 个术语。新增独立 #/ai-development 投稿预览，包含 Git 状态练习台、任务卡台、练习解答、源码 ZIP、整本下载和本机阅读标记。没有模型后端或任意代码执行。Git 为有限教学模型；任务卡仅整理输入，不自动评价语义。

贯穿项目为无第三方依赖的静态网页：按 ID 添加/完成/删除、本地保存、严格校验的 JSON 备份、确认后恢复。写入失败有反馈，读取损坏暂停写入，坏备份不覆盖原数据；个人浏览器存储的隔离、清理和并发限制均有说明。

## 查看与验证

在独立目录运行：

```sh
git clone --branch contribution/ai-development-textbook --single-branch https://github.com/GMguimei/ai-university.git ai-development-review
cd ai-development-review
npm ci
npm run dev
```

打开 http://127.0.0.1:5173/#/ai-development 。重点体验 3.1 的暂存后再编辑、3.2 分支与推送、4.2 六栏任务卡及项目 ZIP。ZIP 解压后在 learning-list 目录 npm test、npm start，访问本机 5180。

- npm run check:ai-development：结构/来源/先修完整；8 项 Git 模型与真实仓库检查；13 项项目规则测试；生成稿/源码包/ZIP 一致。
- npm run check：原数学内容、类型检查、生产构建、原有 24 项测试。
- 浏览器：情境错误反馈与继续限制、Git 三列与 diff、任务卡编辑复制、窄屏目录、空白与重复标题、刷新、有效/无效备份。具体验证环境和未检查范围见 QA.md。

新学科内容位于 drafts/ai-development，使用独立 schema，不混入正式数学卷。AI 生成，未人工审校；官方来源逐节列出，案例与正文原创。内容 CC0-1.0，网页、工具与项目 MIT。构建和 CI 的绿色不能宣称学习效果或所有输入正确。

本 PR 基于当前 main，独立于尚未合并的 Python PR #4，不重复包含 Python 教材。两份投稿都增加 App.tsx 路由与 package.json 脚本，未来合并时应保留各自新增项；本 PR 不更新 Python 分支。
