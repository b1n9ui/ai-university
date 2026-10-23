import katex from 'katex';
import { splitMathText, assertMathText } from '../packages/content/math-text.mjs';
const metadata = new Set(['id','chapterId','lessonId','lessonIds','prerequisites','misconceptionTags','sources','provenance','preset','kind','function','url','route','areaId','coverTitle','coverFormula','author','version','language']);
function validateLatex(latex, context) {
  // KaTeX accepts comments, which can silently hide a percentage or formula tail.
  for (let i = 0; i < latex.length; i++) if (latex[i] === '%') {
    let slashes = 0;
    for (let j = i - 1; j >= 0 && latex[j] === '\\'; j--) slashes++;
    if (slashes % 2 === 0) throw Error(`${context}: unescaped percent hides formula content`);
  }
  if (/[√²³⁴⁵⁶⁷⁸⁹ⁿˣ₀₁₂₃₄₅₆₇₈₉]/.test(latex)) throw new Error(`${context}: use TeX roots and scripts`);
  katex.renderToString(latex,{throwOnError:true,trust:false,strict:'ignore'});
}
/** Validate authored notation; never rewrite or guess the mathematics. */
export function validateMathNotation(value, context = 'content', options = {}) {
  if (Array.isArray(value)) return value.forEach((item,index) => validateMathNotation(item,`${context}[${index}]`,options));
  if (value && typeof value === 'object') {
    for (const [key,item] of Object.entries(value)) {
      if (metadata.has(key)) continue;
      if (key === 'latex' && typeof item === 'string') {
        validateLatex(item,`${context}.${key}`);
      } else validateMathNotation(item,`${context}.${key}`,options);
    }
    return;
  }
  if (typeof value !== 'string') return;
  assertMathText(value,context,options);
  for (const part of splitMathText(value)) if (part.kind === 'math') {
    validateLatex(part.value,context);
  }
}
