import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {book,allLessons} from './content-utils.mjs';
import {buildEnglishContent} from './build-english-content.mjs';
import {renderLesson} from './build-discovery.mjs';
const near=(a,b,e=1e-7)=>assert.ok(Math.abs(a-b)<e,`${a} != ${b}`);
test('the complete Calculus I misconception path remains aligned across languages and exports',()=>{
 const en=buildEnglishContent('calculus-1');assert.equal(allLessons.length,35);
 for(const [i,l]of allLessons.entries()){
  const english=en.lessons[i];assert.equal(l.learningCheck.responses.length,3);
  for(const [n,r]of l.learningCheck.responses.entries()){
   assert.equal(english.learningCheck.responses[n].experimentStep,r.experimentStep);
   if(r.experimentStep!==null)assert.ok(l.teaching.steps[r.experimentStep]);
   if(n!==l.learningCheck.correctIndex)assert.notEqual(r.text,l.teaching.explain,`${l.id}: fallback is not authored feedback`);
  }
  assert.ok(l.teaching.reflection.question);assert.ok(l.teaching.reflection.answer);
  const transfer=l.practice.find(q=>q.id===l.teaching.transferExerciseId);assert.ok(transfer);
  for(const [edition,lesson,meta]of [['zh',l,book],['en',english,en.book]]){
   const output=renderLesson({...meta,type:'mathematics',lessons:edition==='zh'?allLessons:en.lessons},lesson,edition,[]);
   for(const r of lesson.learningCheck.responses)assert.ok(output.markdown.includes(r.text),`${l.id}: missing ${edition} feedback export`);
   assert.ok(output.markdown.includes(lesson.teaching.reflection.question));assert.ok(output.markdown.includes(lesson.teaching.reflection.answer));
   const manuscript=fs.readFileSync(edition==='zh'?'book/Calculus-I.md':'book/Calculus-I-English.md','utf8');assert.ok(manuscript.includes(lesson.teaching.reflection.answer));
  }
 }
});
test('new transfer answers survive independent arithmetic, differentiation, and integration',()=>{
 const lesson=id=>allLessons.find(l=>l.id===id);const q=id=>lesson(id).practice.find(q=>q.id===id+'-transfer');
 const quotient=((1+.1)**3-1)/.1;near(quotient,3.31);assert.match(q('derivative-definition').answer,/3.31/);
 const derivative=(f,x,h=1e-6)=>(f(x+h)-f(x-h))/(2*h);
 near(derivative(x=>(1-2*x)**3,0),-6);assert.match(q('chain-rule').answer,/-6/);
 near(derivative(x=>x**6/3,-1),-2);assert.match(q('fundamental-theorem').answer,/2x\^5/);
 let volume=0;const n=10000;for(let i=0;i<n;i++){const x=(i+.5)/n;volume+=Math.PI*((x+2)**2-4)/n;}near(volume,7*Math.PI/3,1e-7);assert.match(q('disk-washer').answer,/7\\pi/);
 for(const h of [-.01,-.001,.001,.01])near((2+h)**2,4+4*h+h*h);assert.match(q('limit-intuition').answer,/4/);
 for(const M of [.1,1,10,1000]){const x=.5/(M+1);assert.ok(1/x>M);}assert.match(q('lhopital').answer,/\\infty/);
});
