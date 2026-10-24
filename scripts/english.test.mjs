import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildEnglishContent,englishRegistry} from './build-english-content.mjs';
import {validateMathNotation} from './math-notation.mjs';
import {resolveLocale,languageUrl} from '../packages/content/locale.mjs';

for(const edition of englishRegistry){
 test(`${edition.id}: complete English book, solutions, conditions, and source alignment`,()=>{
  const data=buildEnglishContent(edition.id);
  const manifest=JSON.parse(fs.readFileSync(`packages/content/translations/en/${edition.id}/manifest.json`));
  const ids=data.book.lessonIds||data.book.chapters.flatMap(c=>c.lessons);
  assert.deepEqual(data.lessons.map(l=>l.id),ids);
  assert.equal(data.book.language,'en');
  assert.equal(data.provenance.humanReviewed,false);
  assert.doesNotMatch(JSON.stringify(data),/[\u3400-\u9fff]/u);
  for(const [id,entry] of Object.entries(manifest.files)){
   const source=JSON.parse(fs.readFileSync(entry.source));
   const target=structuredClone(id==='book'||id==='supplements'?data[id]:data.lessons.find(l=>l.id===id));
   for(const field of entry.fields){const keys=field.path.split('/').slice(1);let owner=target;for(const key of keys.slice(0,-1))owner=owner[key];owner[keys.at(-1)]=field.value;}
   if(id==='book')target.language=source.language;
   assert.deepEqual(target,source,`${edition.id}/${id}: non-prose fields changed`);
  }
  if(edition.type==='mathematics')validateMathNotation(data,edition.id,{language:'en'});
 });
 test(`${edition.id}: complete English downloads match the site content`,()=>{
  const data=buildEnglishContent(edition.id);
  const md=fs.readFileSync('book/'+edition.filename,'utf8');
  const html=fs.readFileSync('apps/web/public/'+edition.printFile,'utf8');
  assert.match(html,/<html lang="en">/);
  assert.doesNotMatch(md+html,/[\u3400-\u9fff]|katex-error/u);
  for(const l of data.lessons){assert.ok(md.includes(l.title),l.id);assert.ok(html.includes(`id="${l.id}"`),l.id);}
  for(const q of data.supplements.exam)assert.ok(md.includes(q.problem),q.id);
  if(edition.type==='programming')assert.ok(md.includes('Project source'));
 });
}
test('each standalone build ignores language queries and saved preferences',()=>{
 for(const edition of ['zh','en'])for(const search of ['','?lang=zh','?lang=en'])for(const saved of ['zh','en',null])assert.equal(resolveLocale(search,saved,edition),edition);
 const hash='#/lesson/derivative-definition?view=visual';
 const english=new URL(languageUrl('https://b1n9ui.github.io/ai-university/?lang=zh'+hash,'en'));
 assert.equal(english.pathname,'/ai-university/en/');assert.equal(english.search,'');assert.equal(english.hash,hash);
 const chinese=new URL(languageUrl(english.href,'zh'));assert.equal(chinese.pathname,'/ai-university/');assert.equal(chinese.hash,hash);
 assert.equal(new URL(languageUrl('http://127.0.0.1:5173/'+hash,'en')).port,'5174');
 assert.equal(new URL(languageUrl('http://127.0.0.1:4173/'+hash,'en')).port,'4174');
 assert.equal(new URL(languageUrl('https://ai-university-math-lab.vividrhea16.chatgpt.site/'+hash,'en')).hostname,'ai-university-english.vividrhea16.chatgpt.site');
});
test('independent build artifacts do not include the other language manuscripts',()=>{
 for(const edition of englishRegistry){assert.ok(fs.existsSync('dist-en/'+edition.filename));assert.ok(!fs.existsSync('dist/'+edition.filename));}
 assert.ok(fs.existsSync('dist/Calculus-I.md'));assert.ok(!fs.existsSync('dist-en/Calculus-I.md'));
 assert.ok(fs.existsSync('dist-github/en/index.html'));assert.ok(fs.existsSync('dist-github/index.html'));
 assert.match(fs.readFileSync('dist/index.html','utf8'),/lang="zh-CN"/);
 assert.match(fs.readFileSync('dist-en/index.html','utf8'),/lang="en"/);
});
