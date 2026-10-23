/** Parse numbers only: never evaluate a submitted expression as code. */
export function parseNumeric(input) {
  if (typeof input !== 'string') return NaN;
  const s = input.trim();
  if (/^[-+]?\d+(?:\.\d+)?\s*\/\s*[-+]?\d+(?:\.\d+)?$/.test(s)) {
    const [a, b] = s.split('/').map(Number);
    return b === 0 ? NaN : a / b;
  }
  return /^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?$/i.test(s) ? Number(s) : NaN;
}
/** Relative tolerance for nonzero answers; small answers must not collapse to zero. */
export function numericAnswerMatches(value, expected) {
  if (!Number.isFinite(value) || !Number.isFinite(expected)) return false;
  if (expected === 0) return Math.abs(value) <= 1e-8;
  if (value === 0) return false;
  return Math.abs(value - expected) <= Math.abs(expected) * 1e-5;
}
