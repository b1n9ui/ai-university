import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({mode, command}) => {
  const edition = mode === "en" ? "en" : "zh";
  const content = path.resolve("packages/content");
  const english = path.join(content, "translations/en");
  // Resolve the English edition before module loading. Chinese lesson bodies are
  // never imported into the English application as a runtime fallback.
  const editionContent: Plugin = {
    name: "fixed-language-edition", enforce: "pre",
    resolveId(source, importer) {
      if(edition !== "en" || !importer) return null;
      const [file, query] = source.split("?");
      if(!file.startsWith(".") && !file.startsWith("/"))return null;
      const resolved = path.resolve(path.dirname(importer.split("?")[0]), file);
      const suffix = query ? "?" + query : "";
      if(resolved === content || resolved === path.join(content,"index.ts"))return path.join(content,"index.en.ts") + suffix;
      if(resolved === path.join(content,"programming-index.generated.json"))return path.join(english,"programming-index.generated.json") + suffix;
      for(const [directory, id] of [["python","python-introduction"],["ai-development","ai-development"]]) {
        const prefix=path.join(content,directory)+"/";
        if(!resolved.startsWith(prefix))continue;
        const relative=resolved.slice(prefix.length);
        if(relative.endsWith(".md"))return path.resolve("book",directory === "python" ? "Python-Introduction-English.md" : "AI-Assisted-Development-English.md")+suffix;
        if(relative === "learning-list.zip")return path.join(english,id,"resolved/learning-list-en.zip")+suffix;
        if(["book.json","supplements.json","experiments.generated.json","project.generated.json"].includes(relative)||relative.startsWith("lessons/"))return path.join(english,id,"resolved",relative)+suffix;
      }
      return null;
    },
    transformIndexHtml(html) {
      return html.replace('lang="en"',`lang="${edition === "en" ? "en" : "zh-CN"}"`)
        .replace(/<title>.*?<\/title>/,edition === "en" ? "<title>AI University · Open textbooks, clear ideas</title>" : "<title>AI University · 开放教科书</title>")
        .replace(/content="Open textbooks authored by AI\.[^"]*"/,`content="${edition === "en" ? "Ten complete open textbooks authored by AI. Interactive mathematics, Python programming, and AI-assisted development. Read, explore, and download." : "AI 编写的十本完整开放教材。探索数学交互图示、学习 Python 与 AI 辅助开发，免费阅读与下载。"}"`);
    },
  };
  return {
    plugins: [editionContent,react()],
    define: {__AIU_EDITION__: JSON.stringify(edition)},
    base: "./", root: "apps/web",
    publicDir: command === "build" ? path.resolve("build", "public-"+edition) : "public",
    build: {outDir: edition === "en" ? "../../dist-en" : "../../dist",emptyOutDir:true,rollupOptions:{output:{manualChunks:{math:["katex"],react:["react","react-dom"]}}}},
    server:{port:edition === "en" ? 5174 : 5173,strictPort:true},
    preview:{port:edition === "en" ? 4174 : 4173,strictPort:true},
  };
});
