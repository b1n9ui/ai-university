import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {programmingBooks,programmingStats,root} from './programming-utils.mjs';
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
test('programming books are complete published volumes, registered only under Other',()=>{
 const catalog=read('packages/content/library.json');
 assert.deepEqual(catalog.categories.map(c=>[c.id,c.title]),[['mathematics','数学'],['other','其他']]);
 assert.equal(catalog.volumes.filter(v=>v.status==='published'&&v.categoryId==='mathematics').length,8);
 assert.deepEqual(catalog.volumes.filter(v=>v.categoryId==='other').map(v=>v.id).sort(),['ai-development','c-programming','python-introduction']);
 for(const c of programmingBooks){
  assert.equal(c.book.status,'published');
  assert.equal(c.book.contribution.submittedBy,'aby0120');
  assert.equal(c.book.provenance.humanReviewed,false);
  assert.deepEqual(catalog.volumes.find(v=>v.id===c.id).stats,programmingStats(c));
 }
});
test('namespaced search results keep repeated lesson IDs separate and include every programming section',()=>{
 const index=read('packages/content/programming-index.generated.json');
 assert.equal(index.length,70);
 assert.equal(new Set(index.map(l=>l.id)).size,70);
 for(const c of programmingBooks)for(const lesson of c.lessons){
  const entry=index.find(l=>l.id===`${c.id}/${lesson.id}`);
  assert(entry);
  assert.equal(entry.route,`book/${c.id}/${lesson.id}`);
  assert(entry.text.includes(lesson.concept));
 }
 assert.equal(index.filter(l=>l.id.endsWith('/testing')).length,2);
 assert.equal(index.filter(l=>l.id.endsWith('/debugging')).length,2);
});
test('published offline manuscripts and print editions contain the last lesson, review answers and project sources',()=>{
 for(const c of programmingBooks){
  const md=fs.readFileSync(path.join(root,'apps/web/public',c.filename),'utf8');
  const html=fs.readFileSync(path.join(root,'apps/web/public',c.printFile),'utf8');
  for(const lesson of c.lessons){assert(md.includes(lesson.title));assert(html.includes(`id="${lesson.id}"`));}
  assert(html.includes('综合测试与解答'));
  assert(html.includes('项目源码'));
  assert(html.includes(c.id==='python-introduction'?'expense_report.py':c.id==='c-programming'?'records.c':'tasks.mjs'));
  assert(!html.includes('投稿预览'));
 }
});
