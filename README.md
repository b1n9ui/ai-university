# AI University

**Complete open textbooks, authored by AI.** Concise explanations, precise conditions, worked solutions, and interactive diagrams — without a model API.

English · [简体中文](README.zh-CN.md)

[English site](https://b1n9ui.github.io/ai-university/en/) · [中文站](https://b1n9ui.github.io/ai-university/) · [Releases](https://github.com/b1n9ui/ai-university/releases)

## Available editions

English and Chinese are independent static sites, each with all ten complete books. A header link opens the other site at the matching lesson. Language is fixed at build time: old preferences or `?lang=` parameters cannot change a site’s edition. Local records belong to their browser origin; separate native hosts do not synchronize them.

| Textbook | Chapters | Lessons | Worked examples | Exercises, including reviews | Languages |
|---|---:|---:|---:|---:|---|
| Calculus I | 7 | 35 | 79 | 191 | English, Chinese |
| Calculus II | 8 | 35 | 72 | 179 | English, Chinese |
| Calculus III | 9 | 40 | 81 | 203 | English, Chinese |
| Linear Algebra | 10 | 50 | 100 | 250 | English, Chinese |
| Ordinary Differential Equations | 11 | 55 | 110 | 275 | English, Chinese |
| Probability & Statistics | 10 | 50 | 100 | 230 | English, Chinese |
| Discrete Mathematics | 8 | 40 | 80 | 184 | English, Chinese |
| Real Analysis | 8 | 40 | 80 | 184 | English, Chinese |
| Introduction to Programming with Python | 5 | 20 | 40 | 94 | English, Chinese |
| Building Projects with AI | 6 | 18 | 36 | 88 | English, Chinese |

Every English edition includes all lessons, definitions and conditions, derivations, worked examples, misconception feedback, exercise solutions, diagram instructions, reviews, assessments, glossary, and appendices. Programming examples, execution replays, project sources, and downloads are also English. There is no runtime translation or model service.

## Read and explore

The website has a subject library, book and chapter contents, lesson reading, interactive diagrams, practice, a prerequisite graph, full-text search, reference pages, downloads, and browser-local learning records.

Diagrams use SVG, Canvas, and locally calculated Three.js models. Adjust parameters, compare cases, explore a solid in 3D, or use its 2D fallback. Worked solutions and teaching explanations are fixed authored content. There is no live chat, model backend, API key, account, or required paid service.

Finite sampling and animation support exploration; they do not replace a mathematical proof. Content is AI-authored and has not been individually human-reviewed. Automated checks do not establish exhaustive mathematical correctness or learning effectiveness.

## Run locally

Use Node.js 22.12 or newer (CI uses Node 24). Rebuilding the contributed Python execution traces requires CPython 3.14; its runtime is deliberately pinned so generated events stay reproducible.

```sh
npm ci
npm run dev       # Chinese site on port 5173
npm run dev:en    # English site on port 5174
npm run check
npm run build
npm run preview
```

The build emits separate portable sites: `dist/` (Chinese) and `dist-en/` (English). `dist-github/` contains Chinese at the root and English under `/en/` for GitHub Pages. Each edition includes only its own textbook downloads. Routing uses hashes and relative assets. Serve either edition from an independent static host, or use the combined Pages artifact.

## Download

- [English download center](https://b1n9ui.github.io/ai-university/en/#/downloads) — ten complete manuscripts and print editions
- [Chinese download center](https://b1n9ui.github.io/ai-university/#/downloads)
- [Versioned manuscripts in both languages](book/)
- Website and source archives in [GitHub Releases](https://github.com/b1n9ui/ai-university/releases)

Download ahead of offline use. The site does not automatically cache every textbook.

## Source and contribution

- `packages/content/`: canonical Chinese mathematics, programming books, schemas, and source metadata.
- `packages/content/translations/en/`: ten fixed English editions, indexed to exact source fields and checksums.
- `apps/web/src/`: shared React website, local records, and authored interface translations.
- `packages/visuals/`: mathematical models and geometry.
- `scripts/`: validation, model checks, manuscript generation, and rendering checks.
- `book/`: generated, versioned manuscripts.

Verification evidence: [separate language sites](docs/SEPARATE_LANGUAGE_SITES.md).

See the [translation guide](docs/TRANSLATION_GUIDE.md), [contribution guide](CONTRIBUTING.md), [content guide](docs/CONTENT_GUIDE.md), and [generation and review process](docs/GENERATION_REVIEW.md). The latter guides currently use Chinese.

Contributions go through pull requests and protected-branch checks. An external submission cannot publish itself. [Contribution security](docs/CONTRIBUTION_SECURITY.md) documents the review policy and its limits. [Release instructions](docs/RELEASING.md) cover publishing the website and books from the same commit.

## Version and licenses

Website **v0.19.0**. English edition 1 of each book aligns with the canonical source version recorded in its manifest. Source checksums detect when translation review is needed; formulas, IDs, numeric answer keys, prerequisites, and diagram presets remain aligned.

Website code is [MIT](LICENSE). Original textbook content is [CC0](LICENSE-CONTENT.md). Third-party libraries retain their own licenses; see [third-party notices](THIRD_PARTY_NOTICES.md).
