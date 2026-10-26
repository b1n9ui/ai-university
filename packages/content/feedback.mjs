/** Public feedback stays a deliberate reader action; never send local learning records. */
export const feedbackTypes = ['unclear', 'error', 'visual', 'new-book'];
export function feedbackPath({book = '', lesson = '', version = '', view = ''} = {}) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries({book, lesson, version, view})) {
    if (value) query.set(key, String(value).slice(0, 160));
  }
  return './contribute/' + (query.size ? '?' + query : '');
}
export function issueDraft({kind, edition, book, lesson, version, view, description, evidence} = {}) {
  if (!feedbackTypes.includes(kind)) throw Error('Choose a feedback type.');
  if (!['en', 'zh'].includes(edition)) throw Error('Choose an edition.');
  const clean = (value, max = 160) => String(value || '').replace(/[\r\n]/g, ' ').trim().slice(0, max);
  if (!String(description || '').trim()) throw Error('Describe the issue or textbook.');
  if (kind === 'new-book') book = lesson = version = view = '';
  const labels = ['feedback', 'feedback:' + kind];
  const url = new URL('https://github.com/b1n9ui/ai-university/issues/new');
  url.searchParams.set('template', kind === 'new-book' ? 'textbook-submission.md' : 'learning-feedback.md');
  url.searchParams.set('labels', labels.join(','));
  url.searchParams.set('title', `[${kind}] ${book && lesson ? clean(book) + '/' + clean(lesson) + ': ' : ''}${clean(description, 65)}`);
  const canonical = book && lesson ? `https://b1n9ui.github.io/ai-university/${edition === 'en' ? 'en/' : ''}books/${encodeURIComponent(book)}/${encodeURIComponent(lesson)}/` : '';
  const body = `### Context\n\nType: ${kind}\nBook: ${clean(book)}\nLesson: ${clean(lesson)}\nEdition: ${edition}\nContent version: ${clean(version)}\nView: ${clean(view)}\nCanonical URL: ${canonical}\n\n### Feedback\n\n${String(description).trim().slice(0, 1800)}\n\n### Evidence / proposed correction / manuscript link\n\n${String(evidence || '').trim().slice(0, 900)}\n\n### Submission notice\n\nThis is a reader submission, not verified textbook content. No browser learning history is attached. New textbooks require scope, complete manuscript/source, provenance, and license information before admission.\n`;
  url.searchParams.set('body', body);
  if (url.href.length > 7500) throw new RangeError('Shorten this draft; add longer text or attachments on GitHub.');
  return url.href;
}
