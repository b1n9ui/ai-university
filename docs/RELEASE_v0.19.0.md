# AI University v0.19.0

English and Chinese now have separate static websites. Each contains all ten complete textbooks: eight mathematics volumes plus Python programming and Building Projects with AI.

The English edition includes 383 lessons, 778 worked examples, 1,878 exercises with solutions, diagram controls, chapter reviews, final assessments, glossary, appendices, programming replays, and complete project source. Both languages have matching whole-book Markdown and typeset print editions. No model API or translation service is required.

- Chinese: https://b1n9ui.github.io/ai-university/
- English: https://b1n9ui.github.io/ai-university/en/

The header opens the corresponding lesson on the other site. Each site's language is fixed; old language parameters cannot switch it. Independent native hosts retain separate local learning records.

Validation: `npm run check`, 155 Node tests, 1,733 English page surfaces, 1,525 model display states, all 195 Python replay combinations, executable examples, both programming projects, and responsive browser checks. See `docs/SEPARATE_LANGUAGE_SITES.md` for evidence and limits.

AI-authored; not individually human-reviewed. Automated checks do not prove exhaustive mathematical correctness. Code is MIT; original textbook text is CC0.

Assets include ten English and ten Chinese manuscripts, separate Chinese and English website archives, the combined GitHub Pages archive, and the source archive. Serve website archives with a static HTTP server; do not open their index files directly as file URLs.
