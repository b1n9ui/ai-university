import sites from '../../deployments/sites.json' with {type:'json'};
export const LANGUAGE_KEY = 'ai-university-language-v1';
// The edition is fixed at build time. Query parameters and old preferences cannot
// turn either standalone site into a different language edition.
export function resolveLocale(search = '', saved, edition) {
  if (edition === 'zh' || edition === 'en') return edition;
  const requested = new URLSearchParams(search).get('lang');
  return requested === 'zh' || requested === 'en' ? requested : saved === 'zh' ? 'zh' : 'en';
}
export const locale = typeof __AIU_EDITION__ !== 'undefined' ? __AIU_EDITION__ : 'zh';
export function languageUrl(href, language) {
  const current = new URL(href);
  const target = language === 'en' ? 'en' : 'zh';
  const local = ['localhost', '127.0.0.1'].includes(current.hostname);
  const native = Object.values(sites).some(site=>new URL(site.native_url).hostname === current.hostname);
  const preview = current.port === '4173' || current.port === '4174';
  const origin = local
    ? `${current.protocol}//${current.hostname}:${preview ? (target === 'en' ? '4174' : '4173') : (target === 'en' ? '5174' : '5173')}/`
    : native ? sites[target].native_url : sites[target].public_url;
  const url = new URL(origin);
  url.hash = current.hash;
  return url.href;
}
export function changeLanguage(language) {
  window.location.assign(languageUrl(window.location.href, language));
}
