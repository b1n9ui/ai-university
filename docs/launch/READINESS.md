# First-visit review · 2026-10-25

Bounded review of the actual English and Chinese reading website and public repository. Screenshots were captured before findings; the source changes below address the observed issues. This is not a new mathematical audit of all 383 lessons or an accessibility conformance certification.

| Step | Observed state | Decision / change |
|---|---|---|
| 1. English homepage | At 1280×720 the headline wrapped to three lines and pushed the principal actions toward the bottom edge. | Smaller English headline and spacing; both library and direct lesson actions now visible. State ten complete books plainly. |
| 2. English mathematics library | Heading, category controls, and repeated introduction filled the first viewport; no cover visible. | Compact the introduction and filter spacing while preserving subject controls and the existing book designs. |
| 3. Calculus I overview | Scope, reader level, contents, and first reading action were understandable. | Retain the established reading layout. |
| 4. Limits lesson / visual | Guided questions and typeset notation are clear; the lesson offers an interactive view. | Add a direct homepage demo entrance. No new mathematical model or sampling claim introduced. |
| 5. Downloads | Distinguishes Markdown from printable HTML; both language editions have full manuscripts. | Preserve truthful download labels; add direct language-matched downloads to book introduction pages. |
| 6. GitHub repository | About description still said “First volume: Calculus I.” README lacked an immediate visual demonstration. | Update metadata, add real screenshots and three direct demos, citation metadata, English correction template, and publication materials. |

## Added publication surfaces

Twenty book introduction pages (complete contents, reader scope, first lesson, interactive reader, whole-book downloads), two catalogs, and two project/share pages. These are static HTML, readable without JavaScript. The lesson application remains a static client. Canonical URLs, reciprocal language links, real screenshot previews, JSON-LD, and sitemaps describe the actual published collection. They do not guarantee indexing or search ranking.

## Release verification

The release runs the repository's complete checks, including content/schema alignment, formula rendering, numerical/model checks, English completeness, programming traces and project tests, plus tests for static publication metadata, language-matched downloads, and portable local links. Responsive browser inspection covers the modified home/library and new introduction/share pages. Evidence screenshots are supplied with the project and launch materials. Any limitations or deployment failures must be reported in the release outcome.

## Deliberately unclaimed

No exhaustive mathematical proof, measured learning efficacy, individual human review, accreditation, endorsements, or published C edition. No external community announcements have been submitted. Community launch still needs an appropriate account, current local-rule checks, and human authorship where required.

## Captured evidence

- Homepage: [before](evidence/home-before.jpg) · [after](evidence/home-after.jpg), 1280×720.
- Library: [before](evidence/library-before.jpg) · [after](evidence/library-after.jpg), 1280×720.
- Responsive: [project page](evidence/press-mobile.jpg) · [book contents](evidence/contents-mobile.jpg), 390×844. Also inspected at 768×1024 and default desktop size.
- Actual teaching screenshots: [limit after entering distance 0.08](../../apps/web/public/launch/limits-en.png) · [vectors after dragging the 3D view](../../apps/web/public/launch/vectors-en.png). Values updated and rotation worked without text selection.

Final local `npm run check`: passed, including 158 Node tests. The publication checks verify every local link on all 24 generated pages, all lesson links in their complete book contents, exact collection totals, matching-language whole-book exports, canonical/language/social metadata, PNG dimensions, and sitemaps. The content checks also cover the existing English rendering surfaces and programming examples. Publication does not add human review or a new proof of textbook correctness.
