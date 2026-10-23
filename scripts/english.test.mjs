import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildEnglishContent,englishDirectory} from './build-english-content.mjs';
import {assertMathText} from '../packages/content/math-text.mjs';
import {validateMathNotation} from './math-notation.mjs';
import {LANGUAGE_KEY,resolveLocale,languageUrl} from '../packages/content/locale.mjs';
const english=buildEnglishContent();
test('English Calculus I is a whole edition, including all solutions and supplements',()=>{
 assert.equal(english.lessons.length,35);assert.equal(english.book.chapters.length,7);
 assert.equal(english.lessons.reduce((n,l)=>n+l.workedExamples.length,0),79);
 assert.equal(english.lessons.reduce((n,l)=>n+l.practice.length,0)+english.supplements.exam.length+english.supplements.reviews.reduce((n,r)=>n+r.questions.length,0),191);
 assert.equal(english.lessons.at(-1).id,'physical-integrals');
 assert.doesNotMatch(JSON.stringify(english),/[\u3400-\u9fff]/u);
 assert.equal(english.provenance.humanReviewed,false);
 validateMathNotation(english,'English Calculus I',{language:'en'});
 assert.doesNotThrow(()=>assertMathText("A limit of a function; Cauchy's theorem.",'English prose',{language:'en'}));
 assert.throws(()=>assertMathText('x ≥ 2','English formula',{language:'en'}),/unmarked/);
});
test('translation changes only declared text fields: IDs, numeric answers, keys and presets remain identical',()=>{
 const manifest=JSON.parse(fs.readFileSync(englishDirectory+'/manifest.json'));
 for(const[id,entry]of Object.entries(manifest.files)){
  const source=JSON.parse(fs.readFileSync(entry.source));const target=structuredClone(id==='book'||id==='supplements'?english[id]:english.lessons.find(l=>l.id===id));
  for(const field of entry.fields){const keys=field.path.split('/').slice(1);let owner=target;for(const key of keys.slice(0,-1))owner=owner[key];owner[keys.at(-1)]=field.value;}
  assert.deepEqual(target,source,id);
 }
});
test('English is the default; explicit URLs override a saved choice without changing lesson hashes',()=>{
 assert.equal(resolveLocale(),'en');assert.equal(resolveLocale('','zh'),'zh');
 assert.equal(resolveLocale('?lang=en','zh'),'en');assert.equal(resolveLocale('?lang=zh','en'),'zh');
 assert.equal(resolveLocale('?lang=invalid','zh'),'zh');assert.equal(resolveLocale('?lang=invalid','invalid'),'en');
 const href='https://example.org/university/?other=value#/lesson/derivative-definition?view=visual';
 const switched=new URL(languageUrl(href,'zh'));assert.equal(switched.searchParams.get('lang'),'zh');assert.equal(switched.searchParams.get('other'),'value');assert.equal(switched.hash,new URL(href).hash);
 assert.equal(LANGUAGE_KEY,'ai-university-language-v1');
});
test('English offline editions include the final lesson, reviews, assessment and proof appendices',()=>{
 const md=fs.readFileSync('book/Calculus-I-English.md','utf8');const html=fs.readFileSync('apps/web/public/calculus-1-en.html','utf8');
 assert.equal((md.match(/^## \d\.\d /gm)||[]).length,35);
 assert.match(md,/Displacement, work, mass, and averages/);assert.match(md,/# Final assessment/);assert.match(md,/Cauchy's mean value theorem/);
 assert.match(html,/<html lang="en">/);assert.match(html,/id="physical-integrals"/);assert.match(html,/\?lang=en#\/lesson\//);
 assert.doesNotMatch(md+html,/[\u3400-\u9fff]/u);assert.doesNotMatch(html,/katex-error/);
});
