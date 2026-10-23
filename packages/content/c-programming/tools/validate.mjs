import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import Ajv from 'ajv';
const dir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(dir,p),'utf8'));
const book=read('book.json'), extra=read('supplements.json');
const validate=new Ajv({allErrors:true}).compile(read('learning-object.schema.json'));
const ids=book.chapters.flatMap(ch=>ch.lessons);
assert.equal(new Set(ids).size,ids.length);
assert.equal(ids.length,32);
assert.deepEqual(fs.readdirSync(path.join(dir,'lessons')).sort(),ids.map(id=>id+'.json').sort());
const sourceIds=new Set(book.sources.map(s=>s.id));
const questions=new Set();
function question(q){
 assert(q.problem && q.hint && q.solution.length>=3 && q.answer);
 assert(!questions.has(q.problem),'duplicate question: '+q.problem);
 questions.add(q.problem);
 assert(q.difficulty>=1 && q.difficulty<=6);
}
for(const [i,id] of ids.entries()){
 const l=read('lessons/'+id+'.json');
 assert(validate(l),id+': '+JSON.stringify(validate.errors));
 assert.equal(l.id,id);
 assert.equal(l.chapterId,book.chapters[Math.floor(i/4)].id);
 assert.equal(l.number,`${Math.floor(i/4)+1}.${i%4+1}`);
 for(const pre of l.prerequisites)assert(ids.indexOf(pre)>=0 && ids.indexOf(pre)<i, id+': forward prerequisite');
 assert(l.sources.every(s=>sourceIds.has(s)));
 assert.equal(new Set(l.misconceptionTags).size,l.misconceptionTags.length);
 assert.deepEqual(l.commonMistakes.map(m=>m.tag),l.misconceptionTags);
 assert(l.body.every(b=>b.text.length>=80),id+': explanation too short');
 l.practice.forEach(question);
 const strings=JSON.stringify(l);
 assert(!/TODO|TBD|待补|lorem ipsum/.test(strings));
}
for(const ch of book.chapters){
 const review=extra.chapterReviews.filter(r=>r.chapterId===ch.id);
 assert.equal(review.length,1);
 assert.equal(review[0].questions.length,2);
 review[0].questions.forEach(question);
}
extra.exam.forEach(question);
assert.equal(extra.exam.length,4);
extra.glossary.forEach(g=>assert(ids.includes(g.lessonId)&&g.definition&&g.term));
assert.equal(book.provenance.author,'AI-generated');
assert.equal(book.provenance.humanReviewed,false);
console.log(`C textbook: ${book.chapters.length} chapters, ${ids.length} lessons, ${questions.size} exercises/reviews, valid prerequisite DAG.`);
