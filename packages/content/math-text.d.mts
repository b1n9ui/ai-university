export type MathPart = { kind: 'text'; value: string } | { kind: 'math'; value: string; display: boolean };
export function splitMathText(text: string): MathPart[];
export function plainMathText(text: string): string;
export function assertMathText(text: string, context?: string, options?: { notation?: boolean; language?: "zh" | "en" }): void;
export function mathDisplayMode(latex: string, display?: boolean): boolean;
