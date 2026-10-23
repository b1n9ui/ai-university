/** Explicit canonical notation only. No expression guessing at runtime. */
export function splitMathText(text) {
  const parts = [], pattern = /\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g;
  let end = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index > end) parts.push({ kind: 'text', value: text.slice(end, match.index) });
    parts.push({ kind: 'math', value: match[1] ?? match[2], display: match[1] !== undefined });
    end = match.index + match[0].length;
  }
  if (end < text.length) parts.push({ kind: 'text', value: text.slice(end) });
  return parts;
}
export const mathDisplayMode = (latex, display = false) => display || latex.length > 85;
const symbols = {varepsilon:'ε',epsilon:'ε',delta:'δ',theta:'θ',pi:'π',lambda:'λ',Delta:'Δ',infty:'∞',to:'→',ge:'≥',le:'≤',ne:'≠',in:'∈',times:'×',cdot:'·',circ:'∘',approx:'≈',pm:'±',prime:'′',int:'∫',sum:'Σ',ldots:'…',mathbb:'',left:'',right:'',quad:' ',qquad:' '};
function groupAt(text, start) {
  while (text[start] === ' ') start++;
  if (text[start] !== '{') return null;
  let depth = 1, end = start + 1;
  for (; end < text.length; end++) {
    if (text[end] === '{') depth++;
    if (text[end] === '}' && --depth === 0) return { value: text.slice(start + 1, end), end: end + 1 };
  }
  return null;
}
function plainStructure(latex) {
  let result = '', i = 0;
  while (i < latex.length) {
    const fraction = latex.startsWith('\\frac', i) || latex.startsWith('\\dfrac', i);
    const root = latex.startsWith('\\sqrt', i);
    if (fraction || root) {
      const offset = root ? 5 : latex.startsWith('\\dfrac',i) ? 6 : 5;
      const first = groupAt(latex,i + offset);
      const second = fraction && first ? groupAt(latex,first.end) : null;
      if (first && (!fraction || second)) {
        const atom = value => /[+−=]/.test(value) ? `(${value})` : value;
        result += root ? `√(${plainStructure(first.value)})` : `${atom(plainStructure(first.value))}/${atom(plainStructure(second.value))}`;
        i = second ? second.end : first.end;
        continue;
      }
    }
    result += latex[i++];
  }
  return result;
}
/** For search, document titles, and native control names — never visible equations. */
export function plainMathText(text) {
  return splitMathText(text).map(part => {
    if (part.kind === 'text') return part.value;
    return plainStructure(part.value)
      .replace(/\\(?:mathrm|text|operatorname)\{([^{}]*)\}/g, '$1')
      .replace(/\\([a-zA-Z]+)/g, (_, command) => symbols[command] ?? command)
      .replace(/\\[,;! ]/g,' ')
      .replace(/[{}]/g, '')
      .replace(/\s+/g,' ').replace(/\s*([=+<>≥≤≠→:/])\s*/g,'$1').replace(/([A-Za-z0-9'])\s+\(/g,'$1(').trim();
  }).join('');
}
const bareNotation = /[√²³⁴⁵⁶⁷⁸⁹ⁿˣ₀₁₂₃₄₅₆₇₈₉≥≤≠≈∫∑∞εδθπλ]|\b(?:sin|cos|tan|cot|sec|csc|ln|arcsin|arccos|arctan)\s*\(|[A-Za-z][′″]|(?<![A-Za-z])[a-z](?![A-Za-z])|[A-Za-z0-9][\^=]|\d\s*\/\s*\d/;
// English articles and possessives contain isolated letters (a, Cauchy's).
// English editions additionally preserve the canonical source's explicit math segments.
const englishBareNotation = /[√²³⁴⁵⁶⁷⁸⁹ⁿˣ₀₁₂₃₄₅₆₇₈₉≥≤≠≈∫∑∞εδθπλ]|\b(?:sin|cos|tan|cot|sec|csc|ln|arcsin|arccos|arctan)\s*\(|[A-Za-z][′″]|[A-Za-z0-9][\^=]|\d\s*\/\s*\d/;
export function assertMathText(text, context = 'text', { notation = true, language = 'zh' } = {}) {
  for (const part of splitMathText(text)) {
    if (part.kind !== 'text') continue;
    if (part.value.includes('$')) throw new Error(`${context}: unmatched math delimiter`);
    if (notation && (language === 'en' ? englishBareNotation : bareNotation).test(part.value)) throw new Error(`${context}: unmarked mathematical notation: ${part.value}`);
  }
}
