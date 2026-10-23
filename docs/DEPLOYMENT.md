# 静态部署

```sh
npm ci
npm run check
```

最终目录为 `dist/`。它只有 HTML、CSS、JS、字体、图片与书稿；没有 server function，不需要环境变量。放到任意静态托管即可。网站用 hash 路由与相对资源路径，适用于根域名和子目录。

首页和第一卷旋转体 3D 使用打包到网站的 Three.js，需要浏览器支持 WebGL2；不调用外部渲染服务。模块仅在打开三维演示时加载。WebGL 不可用时可切回二维；静态正文、公式与下载书稿不依赖 WebGL。

第三卷的 40 个空间图示使用本地 SVG 三维投影，不需要 WebGL；支持旋转、缩放与正交投影切换。线性代数的 50 节演示也使用二维 SVG 或三维投影，不依赖 WebGL。数学八卷完整打印页分别为 book.html、calculus-2.html、calculus-3.html、linear-algebra.html、ordinary-differential-equations.html、probability-statistics.html、discrete-math.html、real-analysis.html，均无需 JavaScript。

## GitHub Pages

仓库设置 → Pages → Build and deployment → Source 选择 **GitHub Actions**。然后手动运行 `Deploy static textbook`。`.github/workflows/pages.yml` 先构建，再上传 `dist/`，最后发布 Pages。

初次开源仓库发布不自动假设 Pages 已启用。仓库负责人选择托管之后，再启用此部署工作流。CI 校验工作流独立运行。

本仓库的 Pages 生产环境只允许 `main` 分支，工作流也检查相同分支。正式主分支要求 PR、最新基础版本、内容 CI 与独立贡献授权检查，管理员同样适用。投稿分支不会直接发布；合并之后由维护者手动发布。外部贡献复核与回退见 [贡献保护](CONTRIBUTION_SECURITY.md)。

## 其他静态平台

构建命令 `npm run build`，输出 `dist`，Node 24。无需设置 API key、数据库或鉴权。Nginx、对象存储网站、Netlify、Cloudflare Pages 等只需提供静态文件。

## 本地或离线

```sh
npm run preview
```

查看 `http://127.0.0.1:4173`。`book.html` 本身无需 JavaScript；KaTeX CSS 与字体已经打包到本地 `book-assets/`，不调用 CDN。离线阅读可下载 release 的网站压缩包，在本地启动一个静态 HTTP 服务器。Markdown 书稿可直接用编辑器阅读。

## Sites 预览

`.openai/hosting.json` 是这个工作区已注册的私有 Sites 身份与 `dist` 配置。它不是 GitHub Pages 依赖，也不含凭据。复制项目到自己的 Sites 时，应注册自己的 Site，不要复用原 project_id。普通静态部署可忽略这个文件。

常微分方程的数值计算、方向场和相平面全部在浏览器内执行；无需求解器服务或模型 API。
