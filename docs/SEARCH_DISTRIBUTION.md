# Search discovery and real submissions

Publishing a page, notifying a search engine, being crawled, being indexed, ranking for a query, and being cited by an AI are different outcomes. Record the evidence for each separately. There is no universal registry that forces other assistants to cite this project, and llms.txt is optional navigation.

## IndexNow after publication

The public canonical site is `https://b1n9ui.github.io/ai-university/`. `deployments/indexing.json` configures a project-scoped ownership file and the official IndexNow endpoint. This is a public website-verification key, not a model API credential. It gives no access to private account data or source modification. The website still has no runtime API dependency or tracking.

`discovery-manifest.json` fingerprints all 794 published HTML pages. Lesson fingerprints come from the canonical learning object and content edition; other pages use their main textual content. Cosmetic stylesheet changes and footer release numbers do not cause a whole-site resubmission.

The Pages workflow captures the previous published manifest before building. After checks, it plans only new, meaningfully changed or removed URLs. After successful publication, a separate read-only job verifies the live ownership file and the exact new manifest before posting the plan. No requests run from reader browsers. The first installation covers the complete static editions newly published in v0.21.0; subsequent unchanged deployments send nothing. Do not repeatedly reset the baseline to submit the entire site.

The workflow stores `search-indexing-plan` and `search-indexing-receipt` artifacts. HTTP 200 means received; HTTP 202 means received with ownership validation pending. Neither establishes indexing, ranking or an AI citation. HTTP 403/422/429 remains a failure, with no automatic spam retries. If notification fails after deployment, the website may still be live: rerun the notification job using its preserved plan rather than pretending deployment never happened.

Manual commands, for an actual deployment only:

```sh
node scripts/search-indexing.mjs capture --output work/indexing-before.json
npm run check
node scripts/search-indexing.mjs plan --before work/indexing-before.json --after dist-github/discovery-manifest.json --output work/indexing-plan.json
# Publish the exact checked build, then:
node scripts/search-indexing.mjs submit --plan work/indexing-plan.json --output work/indexing-result.json
```

The key is below `/ai-university/`; `keyLocation` therefore covers this project, including `/en/`, and not other repositories on the same GitHub Pages host. Both the manifest and every submitted URL are restricted to that public prefix. The protocol shares submissions among participating engines; Google Search is a separate submission route. See [IndexNow protocol](https://www.indexnow.org/documentation) and [FAQ](https://www.indexnow.org/faq).

## Google Search Console

Use a URL-prefix property for `https://b1n9ui.github.io/ai-university/`, which also covers the English subdirectory. The user chooses and signs into their own Google account. The downloaded Google HTML verification file is preserved in `apps/web/public/`, copied into static builds, and must remain published after verification. No Google password, session cookie, OAuth credential or visitor data goes into this repository.

After the file is publicly available, finish ownership verification in Search Console and submit `https://b1n9ui.github.io/ai-university/sitemap.xml`. Inspect the homepage and a representative complete lesson, read the live-test result, and request indexing when eligible. Keep the distinction between **ownership verified**, **sitemap submitted**, **crawl requested**, and **indexed**. The last status requires the Search Console indexing report, not a successful build or local HTTP request.

Google says that discovery and indexing may take days to weeks, and a request does not guarantee inclusion. Do not repeatedly request the same URL in an attempt to accelerate crawling. See [request recrawling](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), and [AI-search eligibility](https://developers.google.com/search/docs/appearance/ai-features).

## Genuine distribution

The repository, release manuscripts, public static lesson URLs and GitHub announcement are already public. The education-directory nomination remains a request for the independent maintainer to consider, not an endorsement or an accepted listing. External community posts must disclose project affiliation and follow each platform's rules; never mass-post duplicate links, manufacture endorsements, or use the user's personal Bilibili account. See `docs/launch/OUTREACH_LOG.md`.

Searchable, useful lesson pages and legitimate independent links are more valuable than spreading the brand name without context. Cite a relevant lesson with its definition, worked example, interactive demonstration and correction route. Keep mathematical quality and required hypotheses; metadata cannot compensate for incorrect teaching.

## Observed baseline · 2026-10-26

The public origin `/robots.txt` returned 404, not a project-specific disallow. Exact public searches for the project URL and the brand plus repository owner returned no results in the available search tool. This is a limited observation, not a complete audit of Google, Bing or every assistant's index. Search Console and notification receipts provide the next verifiable evidence. Never claim that the site has been indexed solely because submission succeeded.

## Verification of this implementation

`npm run check` passes all 165 repository tests plus existing programming/translation execution checks. New tests check additions/changes/removals, unchanged deployments, all 794 sitemap URLs, project-path boundaries, duplicate URLs, published ownership files, exact live-manifest matching, and honest handling of HTTP 200/202/403/429. Tests use a fake notification endpoint; live receipt status must come from the actual post-deployment job. No requests were made to search engines during tests.
