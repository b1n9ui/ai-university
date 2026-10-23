# AI University

**Complete open textbooks, authored by AI.** Concise explanations, precise conditions, worked solutions, and interactive diagrams — without a model API.

English · [简体中文](README.zh-CN.md)

[Read online](https://b1n9ui.github.io/ai-university/) · [English Calculus I](https://b1n9ui.github.io/ai-university/?lang=en#/book/calculus-1) · [Chinese library](https://b1n9ui.github.io/ai-university/?lang=zh#/library) · [Releases](https://github.com/b1n9ui/ai-university/releases)

## Available editions

English is the default. Use the language selector to switch to Chinese; the current lesson, bookmarks, and exercise records are shared between editions on the same browser and origin.

| Textbook | Chapters | Lessons | Worked examples | Exercises, including reviews | Languages |
|---|---:|---:|---:|---:|---|
| Calculus I | 7 | 35 | 79 | 191 | English, Chinese |
| Calculus II | 8 | 35 | 72 | 179 | Chinese |
| Calculus III | 9 | 40 | 81 | 203 | Chinese |
| Linear Algebra | 10 | 50 | 100 | 250 | Chinese |
| Ordinary Differential Equations | 11 | 55 | 110 | 275 | Chinese |
| Probability & Statistics | 10 | 50 | 100 | 230 | Chinese |
| Discrete Mathematics | 8 | 40 | 80 | 184 | Chinese |
| Real Analysis | 8 | 40 | 80 | 184 | Chinese |
| Introduction to Programming with Python | 5 | 20 | 40 | 94 | Chinese |
| Building Projects with AI | 6 | 18 | 36 | 88 | Chinese |

The English Calculus I edition includes every lesson, definition and hypothesis, derivation, worked example, misconception, exercise solution, visual instruction, chapter review, final assessment, glossary, and appendix. Other books are clearly marked as Chinese editions. Further English books will be published one complete volume at a time.

## Read and explore

The website has a subject library, book and chapter contents, lesson reading, interactive diagrams, practice, a prerequisite graph, full-text search, reference pages, downloads, and browser-local learning records.

Diagrams use SVG, Canvas, and locally calculated Three.js models. Adjust parameters, compare cases, explore a solid in 3D, or use its 2D fallback. Worked solutions and teaching explanations are fixed authored content. There is no live chat, model backend, API key, account, or required paid service.

Finite sampling and animation support exploration; they do not replace a mathematical proof. Content is AI-authored and has not been individually human-reviewed. Automated checks do not establish exhaustive mathematical correctness or learning effectiveness.

## Run locally

Use Node.js 22.12 or newer (CI uses Node 24). Rebuilding the contributed Python execution traces requires CPython 3.14; its runtime is deliberately pinned so generated events stay reproducible.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The build emits a portable static website in `dist/`. Serve that directory from GitHub Pages, another static host, or a local static server. Routing uses hashes and the asset base is relative, so subdirectory hosting works.

## Download

- [English Calculus I manuscript](book/Calculus-I-English.md)
- [English print edition](https://b1n9ui.github.io/ai-university/calculus-1-en.html), with local formula fonts and browser print-to-PDF
- [Chinese manuscripts](book/)
- Website and source archives in [GitHub Releases](https://github.com/b1n9ui/ai-university/releases)

Download ahead of offline use. The site does not automatically cache every textbook.

## Source and contribution

- `packages/content/`: canonical Chinese mathematics, programming books, schemas, and source metadata.
- `packages/content/translations/en/calculus-1/`: fixed English translations, indexed to exact source fields and checksums.
- `apps/web/src/`: shared React website, local records, and authored interface translations.
- `packages/visuals/`: mathematical models and geometry.
- `scripts/`: validation, model checks, manuscript generation, and rendering checks.
- `book/`: generated, versioned manuscripts.

See the [translation guide](docs/TRANSLATION_GUIDE.md), [contribution guide](CONTRIBUTING.md), [content guide](docs/CONTENT_GUIDE.md), and [generation and review process](docs/GENERATION_REVIEW.md). The latter guides currently use Chinese.

Contributions go through pull requests and protected-branch checks. An external submission cannot publish itself. [Contribution security](docs/CONTRIBUTION_SECURITY.md) documents the review policy and its limits. [Release instructions](docs/RELEASING.md) cover publishing the website and books from the same commit.

## Version and licenses

Website **v0.18.0**. English Calculus I edition 1 aligns with Chinese Calculus I **v0.3.3**. Source checksums detect when translation review is needed; formulas, IDs, numeric answer keys, prerequisites, and diagram presets remain aligned.

Website code is [MIT](LICENSE). Original textbook content is [CC0](LICENSE-CONTENT.md). Third-party libraries retain their own licenses; see [third-party notices](THIRD_PARTY_NOTICES.md).
