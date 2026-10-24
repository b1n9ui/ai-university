# Separate English and Chinese sites — v0.19.0

Checked on 2026-10-24. This records implementation and automated/browser evidence, not human review or proof of every mathematical statement.

## Complete editions

Both sites contain the same ten complete courses: Calculus I, II, III, Linear Algebra, Ordinary Differential Equations, Probability & Statistics, Discrete Mathematics, Real Analysis, Introduction to Python Programming, and Building Projects with AI.

Each language has 383 lessons, 778 worked examples, and 1,878 exercises including chapter reviews and final assessments. English has 28,307 authored source fields indexed to canonical SHA-256 checksums. Definitions, hypotheses, derivations, examples, hints, answers, misconception feedback, teaching presets, reviews, glossary, appendices, and source-use notes are included. Programming adds complete English code, execution replays, project files, tests, and downloads.

## Independent delivery

- `dist/`: Chinese, with ten Chinese Markdown and print editions.
- `dist-en/`: English, with ten English Markdown and print editions.
- `dist-github/`: Chinese at the root, English at `en/`.
- Vite fixes the language before resolving content modules. The English application imports English books; Chinese bodies are not a runtime fallback.
- Old saved language preferences and URL language parameters do not change an edition. A cross-site anchor retains the full lesson hash and view.
- The deployment registry preserves the existing Chinese Site identity and the independently registered English Site identity. `prepare-english-site.mjs` mirrors a clean canonical commit into the English checkout, preserves its identity, copies the exact tested English output, and records a file hash manifest and canonical commit. The native English host uses the supported `out/` directory; rebuilding its source mirror refreshes that directory from `dist-en/`.
- Separate native hosts have separate browser-local records. The two GitHub Pages paths share an origin. There is no account or synchronization service.

## Verification performed

`npm run check` passed, including 155 Node tests and the existing Chinese content, numerical model, programming, and contribution checks.

- All ten English editions: field counts, source hashes, unchanged non-prose structure, mathematical-fragment alignment, current lesson order, and no untranslated Chinese in authored content.
- All ten English Markdown and print editions: complete lessons and assessments, English document language, and valid typeset mathematics. Each website artifact excludes the other language's manuscripts.
- 1,733 English page surfaces: book and chapter contents, all mathematics lesson views, reviews, assessments, resources, programming lessons, replay/practice pages, and cross-book search. No untranslated Chinese outside the intentional Chinese-site link; no KaTeX errors.
- 1,525 model frames: defaults, every control endpoint, and selectable option values across Calculus II/III, Linear Algebra, ODE, Probability, Discrete Mathematics, and Real Analysis. Display strings retain English labels. Existing independent model tests cover mathematical behavior separately.
- English Python: 154 exact-output cases, a two-file import exercise, all 195 replay control combinations, and the 15 project tests. English AI-development project: 13 tests, with identical files in its source viewer, ZIP, and manuscript.
- Real browser: English home, library, long ODE overview, Python overview, mathematics visual/practice, and Probability downloads at 390, 768, and 1440 CSS pixels. All loaded before measurement; no whole-page horizontal overflow or KaTeX errors. Corresponding Chinese pages checked at desktop and 390 pixels.
- Real interactions: English parameter range feedback, fractional input and guided presets; Python assignment and final output; correct numeric exercise feedback and expanded solution; 3D keyboard rotation and top projection; cross-site links in both directions retaining the current lesson; user-authored Chinese text retained inside an English task brief.

## Limits

Symbol and structure checks can detect omissions and regressions; they cannot establish that every translation preserves every nuance, that every mathematical claim is correct, or that the teaching is empirically effective. Content remains AI-authored and is not represented as individually human-reviewed. Downloads support deliberate offline use; there is no automatic full-library offline cache.
