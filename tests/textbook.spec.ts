import { test, expect } from "@playwright/test";
import fs from "node:fs";
const book = JSON.parse(fs.readFileSync("packages/content/book.json", "utf8"));
test("every section renders canonical text, boundary-safe diagrams and all exercises", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const id of book.lessonIds) {
    await page.goto("/?lang=zh#/lesson/" + id);
    await expect(page.locator("#lesson-article > section")).toHaveCount(8);
    const lesson = JSON.parse(fs.readFileSync(`packages/content/lessons/${id}.json`, "utf8"));
    await expect(page.locator(".worked-example")).toHaveCount(lesson.workedExamples.length);
    await expect(page.locator(".check-choices button")).toHaveCount(3);
    await expect(page.locator(".example-solution")).toHaveCount(lesson.workedExamples.length);
    await expect(page.locator(".katex-error")).toHaveCount(0);
    await page.getByRole("link", { name: "交互演示", exact: true }).click();
    if (["disk-washer", "shells", "arc-length"].includes(id)) {
      await expect(page.locator(".solid-visual")).toBeVisible();
      const canvas = page.locator(".solid-canvas-host canvas");
      if (await canvas.count())
        await expect(canvas).toHaveAttribute("data-rendered", "true");
      else await expect(page.locator(".solid-unavailable")).toBeVisible();
    } else await expect(page.locator(".plot")).toHaveCount(1);
    for (const slider of await page.getByRole("slider").all()) {
      await slider.press("Home");
      await slider.press("End");
    }
    await expect(
      page.locator(
        'svg [d*="NaN"],svg [d*="Infinity"],svg [cx="NaN"],svg [cy="NaN"]',
      ),
    ).toHaveCount(0);
    await page.getByRole("link", { name: `练习与解答 ${lesson.practice.length}`, exact: true }).click();
    await expect(page.locator(".exercise")).toHaveCount(lesson.practice.length);
    await expect(page.locator(".exercise:visible")).toHaveCount(1);
  }
  expect(errors).toEqual([]);
});
test("answer drafts survive question navigation and checked progress survives reload", async ({
  page,
}) => {
  await page.goto("/?lang=zh#/lesson/limit-intuition?view=practice");
  const first = page.locator(".exercise").first();
  await first.getByRole("textbox").fill("5");
  await first.getByRole("button", { name: "检查数值", exact: true }).click();
  await expect(first.getByRole("status")).toContainText("数值正确");
  await first.getByRole("button",{name:"我能说明步骤，标记已理解",exact:true}).click();
  await first
    .getByRole("button", { name: "给我一点提示", exact: true })
    .click();
  await expect(first.locator(".hint")).toBeVisible();
  await first
    .getByRole("button", { name: "查看完整解答", exact: true })
    .click();
  await expect(first.locator(".solution")).toBeVisible();
  await page.getByRole("button", { name: "下一题", exact: true }).click();
  await expect(first).toBeHidden();
  await page.getByRole("button", { name: "上一题", exact: true }).click();
  await expect(first.getByRole("textbox")).toHaveValue("5");
  await page.reload();
  await expect(first.locator(".status")).toContainText("已掌握");
});
test("lab filtering keeps focus and pagination carries filters", async ({
  page,
}) => {
  await page.goto("/?lang=zh#/lab");
  await expect(page.locator(".lab-card")).toHaveCount(6);
  await page.getByRole("link", { name: "下一页", exact: true }).click();
  await expect(page).toHaveURL(/page=2/);
  await page.getByLabel("筛选章节", { exact: true }).selectOption("limits");
  await expect(page.locator(".lab-card")).toHaveCount(5);
  const input = page.getByRole("textbox", { name: "筛选知识点" });
  await input.pressSequentially("连续");
  await expect(input).toBeFocused();
  await expect(page.locator(".lab-card")).toHaveCount(1);
  await expect(
    page.getByRole("heading", { name: "连续性与介值定理", exact: true }),
  ).toBeVisible();
});
test("search keyboard flow returns full results and saved lessons appear in learning", async ({
  page,
}) => {
  await page.goto("/?lang=zh#/lesson/limit-intuition");
  await page.getByRole("button", { name: "收藏本节", exact: true }).click();
  await page.getByRole("button", { name: "搜索教材", exact: true }).click();
  const search = page.getByRole("textbox", { name: "搜索全文", exact: true });
  await search.fill("极限");
  await search.press("Enter");
  await expect(
    page.getByRole("heading", { name: "搜索教材", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".search-results>a")).toHaveCount(8);
  await page.goto("/?lang=zh#/learning?tab=saved");
  await expect(
    page.getByRole("heading", { name: "极限：靠近时会怎样", exact: true }),
  ).toBeVisible();
});
test("site pages fit the viewport and the print edition includes the full book", async ({
  page,
}) => {
  for (const route of [
    "home",
    "library",
    "book/calculus-1",
    "lab",
    "practice",
    "reference",
    "reference?tab=glossary",
    "reference?tab=appendix",
    "learning",
    "guide",
    "downloads",
    "about",
    "about/research",
    "about/versions",
    ...book.chapters.map((c: { id: string }) => "chapter/" + c.id),
  ]) {
    await page.goto("/?lang=zh#/" + route);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.goto("/book.html");
  await expect(page.locator(".lesson")).toHaveCount(35);
  await expect(page.locator(".problem")).toHaveCount(191);
  await expect(page.locator(".katex-error")).toHaveCount(0);
});


test("exhibition shapes change parameters and reading focus preserves navigation", async ({ page }) => {
  await page.goto("/?lang=zh#/home");
  const canvas = page.locator("canvas[data-sculpture]");
  await expect(canvas).toHaveAttribute("data-rendered", "true");
  for (const [name, mode, parameter, maximum] of [["01 曲面", "wave", "振幅 A", "1.8"], ["02 环面", "torus", "管半径 r", "1.2"], ["03 螺旋", "helix", "上升系数 p", "0.3"]]) {
    await page.getByRole("button", { name, exact: true }).click();
    await page.getByRole("slider", { name: parameter, exact: true }).press("End");
    await expect(canvas).toHaveAttribute("data-sculpture", mode);
    await expect(canvas).toHaveAttribute("data-parameter", maximum);
    await expect(page.locator(".katex-error")).toHaveCount(0);
  }
  await page.getByRole("link", { name: "阅读当前图形的相关基础", exact: true }).click();
  await page.getByRole("button", { name: "专注阅读", exact: true }).click();
  await expect(page.locator(".lesson-toc")).toBeHidden();
  await expect(page.locator("#lesson-article")).toBeVisible();
  await page.getByRole("button", { name: "退出专注阅读", exact: true }).click();
});


test("typing a precise parameter during playback pauses and preserves the intended value", async ({page}) => {
  await page.goto("/?lang=zh#/lesson/derivative-definition?view=visual");
  await page.getByRole("button",{name:"让割线靠近切线",exact:true}).click();
  const value=page.getByRole("textbox",{name:"两点距离 h：输入数值",exact:true});
  await value.fill("0.02");
  await value.press("Enter");
  await expect(value).toHaveValue("0.02");
  await expect(page.getByRole("button",{name:"让割线靠近切线",exact:true})).toBeVisible();
  await expect(page.locator(".stats")).toContainText("2.02");
});

test('second volume has complete reading, visuals, exercises and independent downloads',async({page})=>{
 const volume=JSON.parse(fs.readFileSync('packages/content/calculus-2/book.json','utf8'));
 for(const id of volume.lessonIds){
  const lesson=JSON.parse(fs.readFileSync('packages/content/calculus-2/lessons/'+id+'.json','utf8'));
  await page.goto('/?lang=zh#/lesson/'+id);
  await expect(page.locator('.sidebar-top')).toContainText('Calculus II');
  await expect(page.locator('.worked-example')).toHaveCount(lesson.workedExamples.length);
  await expect(page.locator('.katex-error')).toHaveCount(0);
  await page.getByRole('link',{name:'交互演示',exact:true}).click();
  await expect(page.locator('.calculus2-plot')).toBeVisible();
  for(const slider of await page.getByRole('slider').all()){await slider.press('Home');await slider.press('End')}
  await expect(page.locator('svg [d*="NaN"],svg [d*="Infinity"]')).toHaveCount(0);
  await page.getByRole('link',{name:'练习与解答 '+lesson.practice.length,exact:true}).click();
  await expect(page.locator('.exercise')).toHaveCount(lesson.practice.length);
 }
 await page.goto('/?lang=zh#/downloads?book=calculus-2');
 await expect(page.getByRole('link',{name:'下载 Markdown',exact:true})).toHaveAttribute('href','Calculus-II.md');
 await page.goto('/calculus-2.html');
 await expect(page.locator('.lesson')).toHaveCount(35);
 await expect(page.locator('.problem')).toHaveCount(179);
 await expect(page.locator('.katex-error')).toHaveCount(0);
});
test('switching shared tools keeps each book chapter filters and review targets separate',async({page})=>{
 await page.goto('/?lang=zh#/lab?book=calculus-2');
 await page.getByLabel('筛选章节',{exact:true}).selectOption('c2-ode');
 await expect(page.locator('.lab-card')).toHaveCount(4);
 await page.getByLabel('切换教材',{exact:true}).selectOption('calculus-1');
 await expect(page.getByLabel('筛选章节',{exact:true})).toContainText('极限与连续');
 await expect(page.getByLabel('筛选章节',{exact:true})).not.toContainText('一阶微分方程入门');
 await page.goto('/?lang=zh#/lesson/c2-euler-logistic');
 await page.getByRole('link',{name:'完成阅读后 整本书综合测试',exact:true}).click();
 await expect(page).toHaveURL(/book=calculus-2/);
});

const thirdBook=JSON.parse(fs.readFileSync("packages/content/calculus-3/book.json","utf8"));
test("Calculus III renders all learning surfaces and spatial controls",async({page})=>{
 for(const id of thirdBook.lessonIds){
  const lesson=JSON.parse(fs.readFileSync("packages/content/calculus-3/lessons/"+id+".json","utf8"));
  await page.goto("/?lang=zh#/lesson/"+id);
  await expect(page.getByRole("heading",{name:lesson.title,level:1,exact:true})).toBeVisible();
  await expect(page.locator(".worked-example")).toHaveCount(lesson.workedExamples.length);
  await page.getByRole("link",{name:"交互演示",exact:true}).click();
  await expect(page.locator(".spatial-plot")).toHaveCount(1);
  for(const slider of await page.getByRole("slider").all()){await slider.press("Home");await slider.press("End");}
  await page.getByRole("button",{name:"俯视",exact:true}).click();
  await expect(page.getByRole("button",{name:"俯视",exact:true})).toHaveAttribute("aria-pressed","true");
  await page.getByRole("button",{name:"三维",exact:true}).click();
  await page.locator(".spatial-plot").press("ArrowRight");
  await page.locator(".spatial-plot").press("Home");
  await expect(page.locator(".katex-error")).toHaveCount(0);
  await expect(page.locator('svg [d*="NaN"],svg [d*="Infinity"]')).toHaveCount(0);
  await page.getByRole("link",{name:"练习与解答 4",exact:true}).click();
  await expect(page.locator(".exercise")).toHaveCount(4);
 }
 await page.goto("/calculus-3.html");
 await expect(page.locator(".lesson")).toHaveCount(40);
 await expect(page.locator(".problem")).toHaveCount(203);
 await expect(page.locator(".katex-error")).toHaveCount(0);
});

const linearBook=JSON.parse(fs.readFileSync('packages/content/linear-algebra/book.json','utf8'));
test('Linear Algebra is independently navigable with complete reading, models and printable exercises',async({page})=>{
 await page.goto('/?lang=zh#/book/linear-algebra');
 await expect(page.getByRole('link',{name:'需要复习？打开前一卷',exact:true})).toHaveCount(0);
 for(const id of linearBook.lessonIds){
  const lesson=JSON.parse(fs.readFileSync('packages/content/linear-algebra/lessons/'+id+'.json','utf8'));
  await page.goto('/?lang=zh#/lesson/'+id);
  await expect(page.getByRole('heading',{name:lesson.title,level:1,exact:true})).toBeVisible();
  await expect(page.locator('.worked-example')).toHaveCount(2);
  await expect(page.locator('.katex-error')).toHaveCount(0);
  await page.getByRole('link',{name:'交互演示',exact:true}).click();
  await expect(page.locator('.spatial-plot')).toBeVisible();
  for(const slider of await page.getByRole('slider').all()){await slider.press('Home');await slider.press('End');}
  await expect(page.locator('svg [d*="NaN"],svg [d*="Infinity"]')).toHaveCount(0);
  await page.getByRole('link',{name:'练习与解答 4',exact:true}).click();
  await expect(page.locator('.exercise')).toHaveCount(4);
 }
 await page.goto('/linear-algebra.html');
 await expect(page.locator('.lesson')).toHaveCount(50);
 await expect(page.locator('.problem')).toHaveCount(250);
 await expect(page.locator('.katex-error')).toHaveCount(0);
});

const odeBook=JSON.parse(fs.readFileSync('packages/content/ordinary-differential-equations/book.json','utf8'));
test('Ordinary Differential Equations has a complete static curriculum, finite models and printable answers',async({page})=>{
 for(const id of odeBook.lessonIds){
  const lesson=JSON.parse(fs.readFileSync('packages/content/ordinary-differential-equations/lessons/'+id+'.json','utf8'));
  await page.goto('/?lang=zh#/lesson/'+id);
  await expect(page.getByRole('heading',{name:lesson.title,level:1,exact:true})).toBeVisible();
  await expect(page.locator('.worked-example')).toHaveCount(2);
  await page.getByRole('link',{name:'交互演示',exact:true}).click();
  await expect(page.locator('.spatial-plot')).toBeVisible();
  for(const slider of await page.getByRole('slider').all()){await slider.press('Home');await slider.press('End');}
  await expect(page.locator('.katex-error')).toHaveCount(0);
  await expect(page.locator('svg [d*="NaN"],svg [d*="Infinity"]')).toHaveCount(0);
  await page.getByRole('link',{name:'练习与解答 4',exact:true}).click();
  await expect(page.locator('.exercise')).toHaveCount(4);
 }
 await page.goto('/ordinary-differential-equations.html');
 await expect(page.locator('.lesson')).toHaveCount(55);
 await expect(page.locator('.problem')).toHaveCount(275);
 await expect(page.locator('.katex-error')).toHaveCount(0);
});
