import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
const files = {
  "/": ["index.html", "text/html"],
  "/index.html": ["index.html", "text/html"],
  "/style.css": ["style.css", "text/css"],
  "/app.mjs": ["app.mjs", "text/javascript"],
  "/tasks.mjs": ["tasks.mjs", "text/javascript"],
};
const server = createServer(async (request, response) => {
  const path = new URL(request.url, "http://localhost").pathname;
  const entry = files[path];
  if (!entry || !["GET", "HEAD"].includes(request.method)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  try {
    const data = await readFile(new URL(entry[0], import.meta.url));
    response.writeHead(200, {
      "Content-Type": `${entry[1]}; charset=utf-8`,
      "Cache-Control": "no-store",
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(500);
    response.end("File unavailable");
  }
});
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(5180, "127.0.0.1", () =>
  console.log("学习清单：http://127.0.0.1:5180（Ctrl+C 停止）"),
);
