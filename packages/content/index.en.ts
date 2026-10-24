import content0 from './translations/en/calculus-1.generated.json';
import content1 from './translations/en/calculus-2.generated.json';
import content2 from './translations/en/calculus-3.generated.json';
import content3 from './translations/en/linear-algebra.generated.json';
import content4 from './translations/en/ordinary-differential-equations.generated.json';
import content5 from './translations/en/probability-statistics.generated.json';
import content6 from './translations/en/discrete-math.generated.json';
import content7 from './translations/en/real-analysis.generated.json';
import type {Book, Supplements, Collection} from './index';
import type {Lesson} from './types';
export type {Book, Supplements, Collection};
function makeCollection(content:{book:unknown;supplements:unknown;lessons:unknown}, filename:string, printFile:string):Collection {
 const book=content.book as Book, supplements=content.supplements as Supplements, lessons=content.lessons as Lesson[];
 return {book,supplements,lessons,filename,printFile,BOOK:'book/'+book.id,bookStats:{chapters:book.chapters.length,lessons:lessons.length,examples:lessons.reduce((n,l)=>n+l.workedExamples.length,0),exercises:lessons.reduce((n,l)=>n+l.practice.length,0)+supplements.exam.length+supplements.reviews.reduce((n,r)=>n+r.questions.length,0)}};
}
export const collections:Collection[]=[makeCollection(content0, "Calculus-I-English.md", "calculus-1-en.html"),
makeCollection(content1, "Calculus-II-English.md", "calculus-2-en.html"),
makeCollection(content2, "Calculus-III-English.md", "calculus-3-en.html"),
makeCollection(content3, "Linear-Algebra-English.md", "linear-algebra-en.html"),
makeCollection(content4, "Ordinary-Differential-Equations-English.md", "ordinary-differential-equations-en.html"),
makeCollection(content5, "Probability-Statistics-English.md", "probability-statistics-en.html"),
makeCollection(content6, "Discrete-Mathematics-English.md", "discrete-math-en.html"),
makeCollection(content7, "Real-Analysis-English.md", "real-analysis-en.html")];
export const availableCollections=collections;
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
