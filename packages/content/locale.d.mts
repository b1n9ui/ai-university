export type Locale = 'en' | 'zh';
export const LANGUAGE_KEY: string;
export const locale: Locale;
export function resolveLocale(search?: string, saved?: string | null): Locale;
export function languageUrl(href: string, language: string): string;
export function changeLanguage(language: string): void;
