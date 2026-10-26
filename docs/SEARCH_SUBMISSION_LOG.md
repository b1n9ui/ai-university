# Search submission results · 2026-10-26

This is a dated operational record, not a claim of ranking, endorsement or universal AI citation. No private account identifiers or credentials are recorded.

## Published implementation

- Release: [v0.21.1](https://github.com/b1n9ui/ai-university/releases/tag/v0.21.1).
- Tested source: `b60f5b990ed74383dbf0c39a4cf8898af63e27dc` via [PR #33](https://github.com/b1n9ui/ai-university/pull/33).
- Public ownership files, combined/language manifests and sitemap return HTTP 200 and match the checked local build. All 24 release asset sizes and SHA-256 digests match GitHub.
- `npm run check`: 165 passing repository tests plus existing execution/translation checks.

## IndexNow

[Pages and notification workflow](https://github.com/b1n9ui/ai-university/actions/runs/40297373514), final attempt:

- Time: 2026-10-26 02:15 PDT (09:15 UTC).
- Official endpoint: `https://api.indexnow.org/indexnow`.
- URL count: **794**.
- HTTP status: **200**; state: **received**.
- Live manifest SHA-256: `5ac5cc37d54700584bc67c03748e081ba479d687720ea0b584ea1511b2586b59`.
- `indexingConfirmed`: **false**.

The first attempt returned HTTP 403 with `SiteVerificationNotCompleted`. After allowing ownership verification to complete, the failed notification job was rerun once against its preserved plan and received HTTP 200. No repeated whole-site spam submission was made. The receipt is in the `search-indexing-receipt` artifact; later deployments plan meaningful changes only.

## Google Search Console

The owner signed in personally. The URL-prefix property `https://b1n9ui.github.io/ai-university/` was verified using Google's downloaded HTML file, preserved in static builds. This property also covers `/en/`.

The sitemap `https://b1n9ui.github.io/ai-university/sitemap.xml` was submitted and Google displayed **Sitemap submitted successfully**. Its first processing report displayed **Could not fetch / Sitemap could not be read**, with zero discovered URLs. Successful submission is therefore not described as successful parsing.

The sitemap returns HTTP 200, parses as valid XML and contains 794 canonical HTML URLs. The official troubleshooting step is a live URL test, rather than assuming that an ordinary browser request proves Google can fetch it. See [Google's Sitemaps report help](https://support.google.com/webmasters/answer/7451001?hl=en).

The homepage initially reported **URL is not on Google / URL unknown to Google**. Google's live test subsequently reported **URL is available to Google** and **Page can be indexed**. A single indexing request was accepted; Google confirmed the URL was added to its priority crawl queue. This remains a request, not confirmed indexing.

The full English limit lesson `en/books/calculus-1/limit-intuition/` also initially reported unknown/unindexed. Its live test at 02:21 PDT reported eligible for indexing, and a single indexing request was accepted into Google's priority crawl queue.

The sitemap's own live test at 02:22 PDT reported **Crawl allowed: Yes**, **Page fetch: Successful**, **Indexing allowed: Yes**, using Google's Inspection Tool smartphone agent. This establishes that Google's live fetch can retrieve the file. It does not establish that the separate sitemap-processing pipeline has parsed all 794 URLs. Do not repeatedly resubmit the sitemap or change valid XML merely to force the initial report to refresh.

## Boundaries

IndexNow receipt, Search Console ownership, live-test eligibility, sitemap acceptance and actual index inclusion are separate states. Do not replace missing index evidence with crawler-user-agent spoofing, builds, metadata or a screenshot of a success dialog for a different operation. Do not repeatedly request the same page. Continue to use actual indexing reports and relevant search queries for later evidence.
