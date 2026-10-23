import english from "./translations/en/calculus-1.generated.json";
import {locale} from "./locale.mjs";
import metadata from "./book.json";
import supplements1 from "./supplements.json";
import metadata2 from "./calculus-2/book.json";
import supplements2 from "./calculus-2/supplements.json";
import metadata3 from "./calculus-3/book.json";
import supplements3 from "./calculus-3/supplements.json";
import metadata4 from "./linear-algebra/book.json";
import supplements4 from "./linear-algebra/supplements.json";
import metadata5 from "./ordinary-differential-equations/book.json";
import supplements5 from "./ordinary-differential-equations/supplements.json";
import metadata6 from "./probability-statistics/book.json";
import supplements6 from "./probability-statistics/supplements.json";
import metadata7 from "./discrete-math/book.json";
import supplements7 from "./discrete-math/supplements.json";
import metadata8 from "./real-analysis/book.json";
import supplements8 from "./real-analysis/supplements.json";
import type { Lesson } from "./types";
export type Book = typeof metadata;
export type Supplements = typeof supplements1;
const modules = import.meta.glob(
  [
    "./lessons/*.json",
    "./calculus-2/lessons/*.json",
    "./calculus-3/lessons/*.json",
    "./linear-algebra/lessons/*.json",
    "./ordinary-differential-equations/lessons/*.json",
    "./probability-statistics/lessons/*.json",
    "./discrete-math/lessons/*.json",
    "./real-analysis/lessons/*.json",
  ],
  { eager: true, import: "default" },
) as Record<string, Lesson>;
function collection(
  book: Book,
  supplements: Supplements,
  directory: string,
  filename: string,
  printFile: string,
) {
  const lessons = book.lessonIds.map(
    (id) => modules[`${directory}/${id}.json`],
  );
  return {
    book,
    supplements,
    lessons,
    BOOK: `book/${book.id}`,
    filename,
    printFile,
    bookStats: {
      chapters: book.chapters.length,
      lessons: lessons.length,
      examples: lessons.reduce((n, l) => n + l.workedExamples.length, 0),
      exercises:
        lessons.reduce((n, l) => n + l.practice.length, 0) +
        supplements.exam.length +
        supplements.reviews.reduce((n, r) => n + r.questions.length, 0),
    },
  };
}
const chineseCollections = [
  collection(metadata, supplements1, "./lessons", "Calculus-I.md", "book.html"),
  collection(
    metadata2,
    supplements2,
    "./calculus-2/lessons",
    "Calculus-II.md",
    "calculus-2.html",
  ),
  collection(
    metadata3,
    supplements3,
    "./calculus-3/lessons",
    "Calculus-III.md",
    "calculus-3.html",
  ),
  collection(metadata4, supplements4, "./linear-algebra/lessons", "Linear-Algebra.md", "linear-algebra.html"),
  collection(metadata5, supplements5, "./ordinary-differential-equations/lessons", "Ordinary-Differential-Equations.md", "ordinary-differential-equations.html"),
  collection(metadata6, supplements6, "./probability-statistics/lessons", "Probability-Statistics.md", "probability-statistics.html"),
  collection(metadata7, supplements7, "./discrete-math/lessons", "Discrete-Mathematics.md", "discrete-math.html"),
  collection(metadata8, supplements8, "./real-analysis/lessons", "Real-Analysis.md", "real-analysis.html"),
];
export type Collection = (typeof chineseCollections)[number];
const englishCalculus: Collection = {...chineseCollections[0], book: english.book, supplements: english.supplements, lessons: english.lessons as Lesson[], filename: "Calculus-I-English.md", printFile: "calculus-1-en.html"};
export const collections = locale === "en" ? [englishCalculus,...chineseCollections.slice(1)] : chineseCollections;
export const availableCollections = locale === "en" ? [englishCalculus] : collections;
export const allLessons = collections.flatMap((c) => c.lessons);
export const lessonById = Object.fromEntries(allLessons.map((l) => [l.id, l]));
export const collectionForLesson = (id: string) =>
  collections.find((c) => c.book.lessonIds.includes(id));
export function collectionForRoute(
  path: string,
  requested?: string | null,
): Collection {
  const owner = collections.find(
    (c) =>
      path === c.BOOK ||
      c.lessons.some((l) => path === `lesson/${l.id}`) ||
      c.book.chapters.some(
        (ch) =>
          path === `chapter/${ch.id}` || path === `practice/review/${ch.id}`,
      ),
  );
  return (
    owner || collections.find((c) => c.book.id === requested) || collections[0]
  );
}
// Legacy exports preserve existing Calculus I entry points.
export const { book, lessons, bookStats } = collections[0];
