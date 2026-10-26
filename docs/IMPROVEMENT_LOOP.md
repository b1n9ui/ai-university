# 教材反馈与持续改进

AI University 的持续改进是公开反馈、证据复核和候选修订组成的维护流程。网站仍然纯静态，没有运行时模型 API、学习数据服务器或隐藏的行为追踪，不会因某位读者访问就自动训练模型。

## 读者入口

每节交互教材有“反馈这一节”和“正文与引用”。十本教材、中英文共 766 个独立正文页，均有本节反馈链接。`contribute/` 提供四类反馈：没看懂、内容或题解有误、图示问题、新教材投稿。

章节、语言、内容版本和阅读视图通过链接带入。网页只请求本站的公开目录来核对这些值，不读取本地学习记录，不在填写时发送反馈。点击后打开 GitHub 的公开 Issue 草稿，需要读者自己登录并确认提交。长文和附件可在 GitHub 补充。无 JavaScript 时提供直接投稿模板。

## 所有者的筛选队列

所有投稿使用 `feedback` 标签，类型可用 `feedback:unclear`、`feedback:error`、`feedback:visual`、`feedback:new-book` 标记。仅项目维护者管理复核状态：

| 状态 | 标签 | 含义 |
|---|---|---|
| 待处理 | 无复核状态 | 收到了建议，尚未核实 |
| 复核中 | `review:checking` | 正在复现或独立复算 |
| 待所有者筛选 | `review:decision` | 已有候选修订与证据，等所有者选择 |
| 已采纳 | `review:accepted` | 所有者决定采纳；对应修改还要通过受保护 PR 和发布流程 |
| 未采纳 | `review:declined` | 暂不采纳，注明原因或缺少的证据 |

更换状态时移除旧状态标签，避免多个状态并存。标记“已采纳”不是数学正确性认证，也不自动合并或发布。外部贡献仍须由所有者批准当前提交，不能复制到所有者分支来绕过检查。

新教材先在投稿区提交完整范围、书稿或源码、例题解答与交互、来源、AI 编写说明和许可证。投稿代码及附件不自动执行；待审教材不进入已出版书单或 AI 内容索引。

## 自动整理

`.github/workflows/improvement-queue.yml` 在 Issue 变化或手动触发时，从可信默认分支运行只读收集器。它读取公开反馈，不安装投稿依赖，不执行投稿命令，不改正文、不批准、不合并、不部署。

每次产生可下载的 `improvement-review-packet`：

- `queue.json`：分组、状态、上下文匹配、当前教材版本和校验值；
- `QUEUE.md`：按同一知识点汇总的待核实报告，包含明确隔离引用的读者原文；
- `AI_REVIEW.md`：复核要求、允许工作与所有者决定边界。

重复报告只是优先级信号，不是错误已经成立的证据。无法匹配知识点或涉及旧版本的报告需先核对上下文。没有读者反馈时如实显示空队列，不虚构使用数据。当前上限为 500 条开放反馈；额外的评论通过原 Issue 链接阅读，不能假装已经全部分析。

维护者也可以运行：

```sh
npm run improvements:collect
# 或对一份已保存的公开 Issue 数据进行本地整理
node scripts/collect-improvements.mjs --input /absolute/issues.json --output work/improvement-queue
```

本地收集使用已有 `gh` 登录；Actions 使用权限只读的临时令牌。令牌不会写入网页或输出报告。生成物在忽略的 `work/` 下，不会成为正式教材。

## AI 复核与候选修改

AI 编辑环境可以在维护任务中读取队列，核对定义、条件、独立解法、边界图示和版本，准备具体修订或说明。需要 AI 计算的工作由网站之外的维护环境承担，不是静态网页自己训练；是否定时运行以实际启用的维护任务为准，不把配置文件称为已运行的 AI。

后台维护只准备草稿 PR，列明证据、测试、未验证部分和原反馈链接。所有者决定采纳以后，再进入正常审查和发布。参见 [贡献保护](CONTRIBUTION_SECURITY.md) 和 [教材生成复核](GENERATION_REVIEW.md)。

English: feedback is voluntary and public through GitHub. Collection is read-only; reports remain unverified. AI-assisted candidate revisions are reviewed by the project owner before official admission. There is no silent tracking, runtime model call, or automatic publication.
