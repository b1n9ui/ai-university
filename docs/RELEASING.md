# GitHub 开源发布流程

所有版本都要把网站、书稿和 canonical 内容绑定到同一提交。

1. `npm ci && npm run check`，完成浏览器 QA。
2. 修改 `package.json`、实际修改教材的元数据与各章节 provenance 版本，更新 CHANGELOG。修订后重新构建书稿。
3. 提交源码与 `book/` 下的所有整卷书稿；不要提交 node_modules、凭据或 dist。
4. 推送任务分支并创建 PR，等待当前提交的 check 与 Contribution review 通过，再按保护规则合并；不要直接推送 main 或绕过检查。
5. 建立版本 tag，例如 `v0.1.0`，发布 GitHub Release，附整本 Markdown 与两个独立静态网站的 zip、合并的 Pages 包与源码 zip。
6. 如启用 Pages，运行独立部署工作流，确认 URL 返回成功，再在 README 写入真实地址。

```sh
git tag v0.1.0
git push github v0.1.0
gh release create v0.1.0 --title 'Calculus I · 完整第一版' \
  --notes-file docs/RELEASE_NOTES.md book/Calculus-I.md
```

发布说明必须区分“完整课程范围已经写完”和“内容已无数学错误”。描述实际检查与限制，不声称人工审定、学历认证或学校教材采用。

后续卷按完整项目推进：课程边界 → 整章正文 → 解答与图示 → 整卷检查 → 固定版本发布。不以演示几节代替整卷。

## 独立语言站

- `npm run build` 同时产出中文 `dist/` 和英文 `dist-en/`；两站只携带各自语言的教材下载。
- GitHub Pages 上传 `dist-github/`：根目录中文，`en/` 英文。不要仅上传 `dist/` 导致英文站入口失效。
- 两个独立原生 Site 使用各自的 project ID；保留中文站现有 ID 与访问范围，英文站使用单独 ID。英文原生发布可使用 `dist-en/` 的精确构建镜像，复制到平台支持的 `out/` 目录，并记录 canonical GitHub 提交，不复制中文站身份；英文源码镜像再次构建时也会自动更新 `out/`。
- 两站的构建语言固定，不读取旧的语言偏好；跨站链接保留小节 hash。独立域名之间不声称共享或同步学习数据。
- Release 附十本英文、十本中文 Markdown、两个站点包、Pages 组合包和源码；全部来自通过检查的同一 canonical 提交。
