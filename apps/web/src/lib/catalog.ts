import {locale, tr} from "../i18n";
import programmingIndex from "../../../../packages/content/programming-index.generated.json";
import {publishedVolumes} from "./library";
import { plainMathText } from "../../../../packages/content/math-text.mjs";
import { book, lessonById, allLessons as lessons, collections } from "../../../../packages/content";
import type { Lesson } from "../../../../packages/content/types";
import type { Route } from "./navigation";
export const REPO = "https://github.com/b1n9ui/ai-university";
export const BOOK = "book/calculus-1";
export const lessonPath = (id: string) => "lesson/" + id;
export const chapterPath = (id: string) => "chapter/" + id;
export function findLesson(path: string) {
  return lessonById[path.startsWith("lesson/") ? path.slice(7) : path] as
    | Lesson
    | undefined;
}
export function labelFor(route: Route) {
  const programLesson=programmingIndex.find(l=>l.route===route.path.replace(/\/(experiment|practice)$/, ""));
  if(programLesson)return programLesson.title;
  const programBook=publishedVolumes.find(v=>route.path===v.route);
  if(programBook)return programBook.title;
  const programSection=publishedVolumes.find(v=>v.categoryId==="other"&&route.path.startsWith(v.route+"/"));
  if(programSection)return programSection.title;
  const l = findLesson(route.path);
  if (l) return plainMathText(l.title);
  const selectedBook=collections.find(c=>route.path===c.BOOK);
  if(selectedBook)return selectedBook.book.titleZh;
  const ch = collections.flatMap(c=>c.book.chapters).find((c) => chapterPath(c.id) === route.path);
  if (ch) return ch.title;
  return (
    (
      {
        home: "开放教科书",
        library: "教科书库",
        [BOOK]: "微积分 I",
        lab: "互动实验室",
        practice: "练习中心",
        reference: "知识索引",
        learning: "我的学习",
        guide: "阅读指南",
        search: "搜索",
        downloads: "下载与离线阅读",
        about: "关于项目",
        "about/contribute": "参与贡献",
        "about/versions": "版本与勘误",
        "about/privacy": "隐私与本地数据",
        "about/research": "学习方法与参考资料",
        "practice/exam": "综合测试",
      } as Record<string, string>
    )[route.path] || "章末回顾"
  );
}
export function searchLessons(query: string) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return lessons.filter((l) => (locale === "zh" || collections[0].book.lessonIds.includes(l.id))).filter((l) => {
    const text = plainMathText([
      l.title,
      l.subtitle,
      l.concept,
      l.intuition,
      l.teaching.explain,
      ...l.teaching.steps.flatMap(s=>[s.title,s.instruction,s.observation]),
      l.learningCheck.question,
      l.interactiveVisual.prediction,
      ...l.body.map((b) => b.text),
      l.formalDefinition.text,
      ...l.workedExamples.map((e) => e.problem),
      ...l.practice.map((q) => q.problem),
    ]
      .join(" ")).toLowerCase();
    return words.every((w) => text.includes(w));
  });
}

export function searchTextbooks(query:string){
  const words=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if(!words.length)return [];
  const math=searchLessons(query).map(l=>({
    id:l.id,number:l.number,title:l.title,subtitle:l.subtitle,concept:l.concept,route:lessonPath(l.id),isMath:true,
    bookTitle:collections.find(c=>c.book.lessonIds.includes(l.id))!.book.titleZh,
    chapterTitle:collections.flatMap(c=>c.book.chapters).find(c=>c.id===l.chapterId)!.title,
  }));
  return [...math,...programmingIndex.filter(l=>locale === "zh" && words.every(w=>l.text.toLowerCase().includes(w))).map(l=>({...l,isMath:false}))];
}
