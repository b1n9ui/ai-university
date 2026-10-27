import { createContext, useContext } from "react";
import { lessonById, allLessons as lessons, collections } from "../../../../packages/content";
const supplements={reviews:collections.flatMap(c=>c.supplements.reviews),exam:collections.flatMap(c=>c.supplements.exam)};
import type { Progress } from "../components/Practice";
import type { Route } from "./navigation";
const allQuestions = [
  ...lessons.flatMap((l) => l.practice),
  ...supplements.reviews.flatMap((r) => r.questions),
  ...supplements.exam,
];
export const questionIds = new Set(allQuestions.map((q) => q.id));
export type Reading = {
  read: string[];
  saved: string[];
  recent: string[];
  large: boolean;
};
export const initialReading: Reading = {
  read: [],
  saved: [],
  recent: [],
  large: false,
};
function readLocal<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}
export function initialProgress(): Progress {
  const raw = readLocal<Progress>("ai-university-calculus-1-progress-v1", {});
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  return Object.fromEntries(
    Object.entries(raw).filter(
      ([k, v]) => questionIds.has(k) && ["understood", "review"].includes(v),
    ),
  ) as Progress;
}
export function getReading(): Reading {
  const raw = readLocal<Partial<Reading>>("ai-university-reading-v2", {});
  const valid = (v: unknown) =>
    Array.isArray(v)
      ? [
          ...new Set(
            v.filter(
              (id): id is string => typeof id === "string" && !!lessonById[id],
            ),
          ),
        ]
      : [];
  return {
    read: valid(raw?.read),
    saved: valid(raw?.saved),
    recent: valid(raw?.recent).slice(0, 8),
    large: raw?.large === true,
  };
}
type AppState = {
  route: Route;
  progress: Progress;
  reading: Reading;
  mark: (id: string, v: "understood" | "review" | null) => void;
  update: (r: Reading) => void;
  search: () => void;
  clear: () => void;
  storageOk: boolean;
};
export const State = createContext<AppState>(null!);
export const useApp = () => useContext(State);
