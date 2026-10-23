export const LANGUAGE_KEY = 'ai-university-language-v1';
export function resolveLocale(search = '', saved) {
  const requested = new URLSearchParams(search).get('lang');
  return requested === 'zh' || requested === 'en' ? requested : saved === 'zh' ? 'zh' : 'en';
}
function initialLocale() {
  if (typeof window === 'undefined') return 'en';
  let saved; try { saved = window.localStorage.getItem(LANGUAGE_KEY); } catch {}
  return resolveLocale(window.location.search, saved);
}
export const locale = initialLocale();
export function languageUrl(href, language) {
  const url = new URL(href); url.searchParams.set('lang', language === 'zh' ? 'zh' : 'en'); return url.href;
}
export function changeLanguage(language) {
  try { window.localStorage.setItem(LANGUAGE_KEY, language); } catch {}
  window.location.assign(languageUrl(window.location.href, language));
}
