export type VisualKind =
  | "analysis"
  | "discrete"
  | "probability"
  | "ode"
  | "linear-algebra"
  | "calculus3"
  | "calculus2"
  | "graph"
  | "transform"
  | "limit"
  | "epsilon"
  | "derivative"
  | "chain"
  | "related"
  | "linearization"
  | "mvt"
  | "optimization"
  | "newton"
  | "antiderivative"
  | "riemann"
  | "signed-area"
  | "accumulation"
  | "substitution"
  | "area-between"
  | "disk"
  | "shell"
  | "arc";
export interface Exercise {
  id: string;
  problem: string;
  answer: string;
  solution: string[];
  hint: string;
  numericAnswer?: number;
  difficulty: number;
  misconceptionTags: string[];
}
export interface Lesson {
  id: string;
  chapterId: string;
  number: string;
  title: string;
  subtitle: string;
  concept: string;
  intuition: string;
  objectives: string[];
  teaching: { explain: string; steps: ExperimentStep[]; reflection?: {question:string; answer:string}; transferExerciseId?:string };
  learningCheck: {
    question: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
    responses?: {text:string; experimentStep:number|null}[];
  };
  body: { title: string; text: string }[];
  formalDefinition: { text: string; latex: string; conditions: string[] };
  derivation: { text: string; latex: string | null }[];
  interactiveVisual: {
    kind: VisualKind;
    function: string;
    a?: number;
    caption: string;
    prediction: string;
  };
  workedExamples: {
    title: string;
    problem: string;
    steps: string[];
    answer: string;
  }[];
  commonMistakes: { id: string; claim: string; correction: string }[];
  practice: Exercise[];
  prerequisites: string[];
  difficulty: number;
  misconceptionTags: string[];
  provenance: {
    author: string;
    version: string;
    status: string;
    humanReviewed: boolean;
  };
  sources: string[];
}

export interface TeachingPreset { a?: number; x?: number; h?: number; b?: number; c?: number; eps?: number; n?: number; side?: number; slice?: number; degrees?: number; method?: string; comparison?: string; dimension?: "2d" | "3d"; model?: "disk" | "washer"; }
export interface ExperimentStep { title: string; instruction: string; observation: string; preset: TeachingPreset; }
