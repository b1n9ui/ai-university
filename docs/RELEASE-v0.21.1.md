AI University v0.21.1 adds search-engine notification to the existing complete static textbook editions.

- A project-scoped IndexNow ownership file and a content manifest covering 794 published Chinese and English HTML URLs.
- The Pages workflow plans actual additions, content changes and removals, then notifies the official IndexNow endpoint only after successful deployment and live ownership/content verification. Unchanged deployments send nothing.
- Submission plans and receipts are retained as workflow artifacts. Received, verification pending, rejected and indexed are treated as separate states; neither HTTP 200 nor 202 proves indexing or AI citation.
- A Google-issued HTML ownership-verification file is preserved in builds for the owner's Search Console setup. Google login and final verification/submission occur in Search Console, outside the static website.

The textbooks and their content versions are unchanged. No model API, runtime tracking, hidden instruction to assistants, or automatic content admission is added. See [search distribution documentation](https://github.com/b1n9ui/ai-university/blob/main/docs/SEARCH_DISTRIBUTION.md).

[Chinese](https://b1n9ui.github.io/ai-university/) · [English](https://b1n9ui.github.io/ai-university/en/)
