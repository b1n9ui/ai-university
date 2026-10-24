# AI University working rules

- User scope: complete one textbook at a time; Calculus I, II and III are published; Linear Algebra is published; Ordinary Differential Equations is published. The user has authorized incorporating Python Introduction and Building Projects with AI under Other; all mathematical volumes belong to Mathematics. The user has authorized continuing complete new textbooks; Probability & Statistics is published. Discrete Mathematics is published. Real Analysis is published. All ten originally catalogued volumes are published; new volumes need their own complete scope. Static textbook and local interactive illustrations only. Do not add runtime chat, a model backend, API keys, user accounts, or blank future-volume lessons.
- Canonical content is in `packages/content`; generated book files are derived. Keep website, print manuscript, exercises and prerequisite graph consistent.
- Preserve concise Chinese explanations, actual theorem hypotheses, full worked steps and answers. Use diagrams to clarify mathematics, never as proof by finite sampling.
- Identify content as AI-generated. Do not claim human review or exhaustive mathematical verification without evidence.
- Read `docs/CONTENT_GUIDE.md` and `docs/GENERATION_REVIEW.md` before substantive textbook changes.
- Run `npm run check` after content or code changes. Check responsive layouts and slider/domain boundaries when touching visuals.
- Do not introduce a required human review gate for generating this AI-authored book. Review contributions and correct discovered errors transparently.

- Language scope: Chinese and English are separate static sites with all ten complete published books. The Chinese build is `dist/`; English is `dist-en/`; Pages combines them in `dist-github/` with English under `/en/`. No runtime language preference or automatic translation. Keep fixed English sources in `packages/content/translations/en/`, source checksums, mathematical expressions, stable IDs, answer keys, presets and whole-book exports aligned. Programming English code, traces, project source, ZIP and test expectations must agree. See `docs/TRANSLATION_GUIDE.md`.
