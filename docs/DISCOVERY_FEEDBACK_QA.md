# Discovery and feedback verification · v0.21.0

Verified on 2026-10-25 against the fixed Chinese and English sources.

- `npm run check`: 162 passing repository tests, plus existing Python trace/program checks, both programming project suites, English execution checks, content validation, typechecking and complete builds. The new discovery checks visit all 766 generated lesson files, resolve their local resources, check full examples/answers, metadata, source hashes, per-book guides and language completeness.
- The collector's trusted lesson fingerprints match every exported lesson in both editions. Tests cover stale editions, blank or unknown contexts, malicious reader markup/fence delimiters, invalid issue numbers, grouping and empty queues. Feedback URL tests cover escaped Unicode, required fields, long input and new textbook routing.
- Browser QA: complete English limit lesson, rendered formulas, native answer expansion, Chinese feedback form, required-field validation, new textbook type, contextual entry from a derivative visualization, Python reading view and AI development experiment view. Old content versions remain in the form and display a warning.
- Responsive QA: 390×844 and 768×1024; no horizontal document overflow on the inspected lesson/form. Temporary viewport overrides were reset.
- A disposable feedback preview reached GitHub's sign-in page with its exact encoded book/lesson/edition/version/view and description. No test Issue was submitted, no personal browser account was used, and no login was performed. Final authenticated submission remains a reader action.
- Real public collection currently returns zero feedback reports, shown as an empty queue. No synthetic reader activity was published. New feedback/review labels exist in the repository.

Limits: these checks establish export consistency and selected UI behavior, not exhaustive mathematical correctness, search-engine indexing, universal support for llms.txt, or guaranteed AI citations. Static HTML links to the existing interactive reader; the animation itself runs in that reader. Feedback requires GitHub sign-in to submit; reading does not. Background collection does not execute submissions or train a model.
