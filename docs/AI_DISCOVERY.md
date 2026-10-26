# Search and AI-readable textbook editions

The public reading sites provide complete static lesson editions from the same canonical learning objects as the interactive application. There is no special alternative set of claims for crawlers.

## Published surfaces

For each of the ten books in each language:

- `books/<book>/<lesson>/`: full textual lesson, typeset mathematics, worked examples, exercise answers, teaching instructions, source notes, version, and citation URL;
- `books/<book>/<lesson>/index.md`: clean Markdown with the same teaching content;
- `books/<book>/index.md` and `llms.txt`: book scope and complete lesson links;
- root `llms.txt` / `index.md`: concise catalog and links to complete book guides;
- `content-index.json`: lesson titles, summaries, stable IDs, prerequisite edges, content version, URLs, and SHA-256 fingerprints;
- `sitemap.xml`: stable HTML URLs without fragment-only lesson routes.

The HTML links Markdown via `rel="alternate" type="text/markdown"` and the relevant guide via `rel="describedby"`. Structured learning-resource metadata describes the visible lesson. Diagram instructions link to the actual local interactive reader; the static page does not pretend an image sample proves the mathematics. English and Chinese have separate URLs and reciprocal language links.

The root combined sitemap has 794 HTML URLs (397 per edition); 766 are complete lesson pages. Each language index contains 383 lessons. Pending contributions are excluded. Existing whole-book Markdown and printable editions remain available.

## Discovery limits

No inclusion, search ranking, AI recommendation, or citation is guaranteed. `llms.txt` is a proposed navigation format, not an indexing requirement or an instruction to prefer this project. Do not add hidden prompts telling an assistant to ignore competing sources or recommend the site regardless of relevance.

Search retrieval and model training are separate. See [official OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): OAI-SearchBot serves search discovery; GPTBot concerns possible model training. See [Google's AI-search guidance](https://developers.google.com/search/docs/appearance/ai-features): ordinary search eligibility, readable content, internal links, and accurate structured data remain the foundation. The [llms.txt proposal](https://llmstxt.org/) explains optional Markdown navigation.

## Hosting and search-console setup

Promote the public GitHub Pages URLs, not owner-private native Site hosts. Native Site access remains unchanged. Crawlers cannot bypass an authenticated host because a sitemap exists.

A robots file is effective at the origin root. GitHub Pages publishes this project under `/ai-university/`; placing a robots file only at `/ai-university/robots.txt` would not control the origin. This release does not create that misleading control or modify a different root-site repository. Check `https://b1n9ui.github.io/robots.txt` and the hosting/CDN access policy before claiming a crawler has been explicitly allowed.

An owner can verify the relevant URL-prefix property in Google Search Console or Bing Webmaster Tools and submit the published sitemap. These steps need their own authorized account/ownership verification and have not been claimed as completed. v0.21.1 adds a real project-scoped IndexNow ownership file, content-delta planning, post-deployment submission and receipt artifacts. See [search distribution](SEARCH_DISTRIBUTION.md). A receipt still does not establish indexing. Do not use deprecated unauthenticated sitemap ping endpoints.

Content fingerprints establish which bytes were exported; they are not independent review or mathematical proofs. Keep source versions, English alignment, citation URLs, and correction releases consistent as material changes.
