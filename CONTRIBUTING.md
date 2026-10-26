# Contributing

项目按整本教材推进。目前优先修订 Calculus I；新学科先提出完整课程边界，避免把零散示范节混入已发布卷。

## 修正内容

外部提交先作为修改建议，不会自动进入正式教材。主分支要求 PR 和检查通过；外部 PR 还必须由仓库所有者批准当前提交。数学内容需要独立复算与条件说明，格式检查或“AI 说正确”不能替代复核。详细操作与回退见 [贡献保护](docs/CONTRIBUTION_SECURITY.md)。

1. 在 `packages/content/lessons/<id>.json` 修改正文或题解；目录在 `book.json`，回顾、考试与附录在 `supplements.json`。
2. 写清触发错误的输入、错误结论、修正推导与条件。避免只写“答案错了”。
3. 运行 `npm run check`。涉及视觉数学时补充独立数值或解析检查；仅调整文字时不必添加与实现重复的测试。
4. 提交 PR，说明章节编号、行为变化和验证结果。生成的书稿也随构建提交，确保下载版本与正文一致。

## 改进交互

二维模型在 `packages/visuals/math.mjs`，旋转几何在 `packages/visuals/solid-models.mjs`，界面在 `apps/web/src/components/Visual.tsx`。三维界面在 `SolidVisual.tsx`，按需加载 Three.js。交互必须纯本地、能用键盘、标明图窗与近似性质、提供重置。不要加入模型 API、实时聊天室、强制登录或闭源图形服务。

## 新的 learning object

运行 `npm run content:scaffold -- new-id` 在 `drafts/` 建立草稿。填完所有字段、清除 TODO、给出两个例题与四题完整解答，再移入 `lessons/` 并注册目录。校验器拒绝占位文本、未登记文件与循环先修关系。

## 提交许可

仅提交自己有权贡献的素材。提交代码表示同意按 MIT 发布；提交原创教材内容与原创图示表示同意按 CC0 发布。第三方材料必须在提交中明确来源与许可，不能因为 AI 转述就省略来源。AI 生成内容记录生成来源，不虚构人工审校或作者履历。

## 不懂、勘误与新教材投稿

在网站知识点点击“反馈这一节”，章节、语言和内容版本会自动带入。可通过 [反馈与投稿页](https://b1n9ui.github.io/ai-university/contribute/) 提交公开 GitHub 草稿，也可直接使用仓库的 Learning feedback 或 New textbook 模板。新书投稿说明完整范围、书稿/源码、例题解答、图示、来源和许可证；文件可在 Issue 中附加。

所有投稿先进入待核实队列，由 AI 整理、复现和准备候选修订，再由所有者决定是否收录。流程和后台维护边界见 [持续改进](docs/IMPROVEMENT_LOOP.md)。
