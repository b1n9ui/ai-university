import {issueDraft} from './feedback-core.js';
const form = document.querySelector('#feedback-form');
const status = document.querySelector('#feedback-status');
const english = document.documentElement.lang === 'en';
const query = new URLSearchParams(location.search);
try {
  const response = await fetch('../content-index.json');
  if (!response.ok) throw Error('Catalog unavailable');
  const catalog = await response.json();
  const entry = catalog.lessons.find(x => x.bookId === query.get('book') && x.id === query.get('lesson'));
  if (entry) {
    for (const [name, value] of Object.entries({book: entry.bookId, lesson: entry.id, version: query.get('version') || entry.version, view: query.get('view') || 'read'})) form.elements[name].value = value.slice(0,160);
    document.querySelector('#feedback-context').textContent = `${entry.bookTitle} · ${entry.number} ${entry.title} · v${entry.version}`;
    if (query.get('version') && query.get('version') !== entry.version) {
      status.textContent = english ? 'You arrived from an older edition. Include its version in your description.' : '你打开的可能是旧版，请在描述中注明当时的版本。';
    }
  }
} catch {
  status.textContent = english ? 'Context could not load. You can still enter a description and lesson URL.' : '未能载入章节信息，你仍可填写描述和知识点链接。';
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const input = Object.fromEntries(new FormData(form));
  try { location.assign(issueDraft(input)); }
  catch (error) { status.textContent = error instanceof RangeError
    ? (english ? 'This draft is too long for a link. Shorten it here, then add details or files on GitHub.' : '内容较长，请先缩短描述；进入 GitHub 后可补充长文或附件。')
    : (english ? 'Choose a type and describe your feedback.' : '请选择类型并填写反馈内容。'); }
});
