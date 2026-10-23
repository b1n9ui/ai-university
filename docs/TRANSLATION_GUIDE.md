# Fixed language editions

English is the default website language; Chinese remains available. Calculus I is complete in both. The remaining nine published books currently have Chinese editions. A catalog title in English does not imply an English manuscript exists.

## Authoring

The Chinese source remains in its existing canonical files. English Calculus I uses `packages/content/translations/en/calculus-1/`:

- `manifest.json` records the source version, source-file SHA-256, ordered JSON field paths, original text, AI authorship, and `humanReviewed: false`.
- Formula-only answers with Chinese punctuation also have declared translation fields; normalize their prose punctuation while preserving the mathematical fragments.
- Each `book.txt`, `supplements.txt`, or lesson-ID `.txt` contains one authored English field per line in manifest order. Keep one field on one line; TeX remains literal.
- `scripts/build-english-content.mjs` verifies checksums, field counts, no untranslated Chinese, and the same inline math fragments. Only prose inside TeX `text` labels may differ; mathematical fragments may be reordered, never silently changed.
- The script materializes `calculus-1.generated.json`. This is a derived static collection, not a runtime translation service.

Review actual meaning as well as matching symbols: hypotheses, domains, orientation, approximation versus equality, units, and the distinction between geometric area and signed accumulation. Formula identity alone cannot verify prose or prove mathematical correctness.

Do not edit generated Markdown or JSON alone. Edit the translation source and rebuild. If Chinese canonical content changes, review affected English fields and update their manifest snapshot and checksum together. The build rejects stale source hashes rather than silently publishing an outdated translation.

## Shared application

`packages/content/locale.mjs` selects explicit `?lang=en` / `?lang=zh` before a saved choice; a new reader defaults to English. The query precedes the hash, for example `?lang=en#/lesson/domain?view=visual`. Switching language preserves the complete hash. Book, lesson, exercise, model, and local-record IDs are unchanged.

Presentation translations live under `apps/web/src/i18n/`. The shared components translate only visible strings and accessible labels. Event handlers, internal comparisons, model keys, IDs, numeric values, and records keep their original values. Composite interface labels use authored patterns and phrase fragments; this is not a machine translator. English textbook prose comes from the complete authored content collection.

English search and the lab/practice/reference selectors use the available English curriculum. The English library still presents all ten books with accurate language badges. Links to a Chinese-only book explicitly open `lang=zh`; a direct English deep link shows an availability notice with a Chinese-edition link.

## Whole-book publication

A complete English edition includes all body text, hypotheses, derivations, answers, hints, conceptual checks, visual predictions, guided presets and observations, reviews, final assessment, glossary, appendices, and source-use notes. Preserve the mathematical models and prerequisite graph.

`build-english-book.mjs` generates `book/Calculus-I-English.md` plus the website's Markdown and `calculus-1-en.html`. The print edition uses local KaTeX fonts and links to the matching English lesson. The original Chinese downloads remain available.

Run `npm run check`. Checks include source alignment, formula rendering, full-book counts, unchanged nontranslated data, English route rendering and search, and existing mathematical model tests. Also inspect real desktop and phone pages, language switching, stored progress, parameter errors, exercise feedback, 3D controls, and printed formulas. Record what was actually checked. Publish the same tested source through the existing protected branch and hosting flow.
