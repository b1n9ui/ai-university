import {collections} from '../../../../packages/content';
import {locale} from './index';
export function unavailableEdition(path:string, requested?:string|null):boolean {
 if(locale==='zh')return false;
 if(path.startsWith('book/') && !path.startsWith('book/calculus-1'))return true;
 const owner=collections.find(c=>c.lessons.some(l=>path===`lesson/${l.id}`)||c.book.chapters.some(ch=>path===`chapter/${ch.id}`||path===`practice/review/${ch.id}`));
 if(owner)return owner.book.id!=='calculus-1';
 return !!requested && requested!=='calculus-1' && ['lab','practice','reference','learning','downloads','guide','practice/exam'].includes(path);
}
