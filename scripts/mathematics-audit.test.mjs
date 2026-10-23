import test from 'node:test';
import assert from 'node:assert/strict';
import {contentBooks} from './content-utils.mjs';
import {parseNumeric,numericAnswerMatches} from '../packages/content/numeric-answer.mjs';
import {boundedSweep} from '../packages/visuals/playback.mjs';
const lessons=contentBooks.flatMap(v=>v.allLessons);
const qs=[...lessons.flatMap(l=>l.practice),...contentBooks.flatMap(v=>[...v.extra.reviews.flatMap(r=>r.questions),...v.extra.exam])];
const question=id=>{const q=qs.find(q=>q.id===id);assert(q,id);return q;};
const near=(x,y)=>assert(Math.abs(x-y)<=1e-12*Math.max(1,Math.abs(y)),`${x} != ${y}`);
test('chain-rule animation traverses its real coordinate domain, including negative and large positive input',()=>{
 near(boundedSweep(-.5,-1.5,1.5,0).value,-.5);
 near(boundedSweep(-.5,-1.5,1.5,1).value,.25);
 assert.deepEqual(boundedSweep(-.5,-1.5,1.5,4),{value:1.5,done:true});
 assert.deepEqual(boundedSweep(1.25,-1.5,1.5,4),{value:1.5,done:true});
 assert.deepEqual(boundedSweep(.01,.01,1,0),{value:.01,done:false});
 for(let t=0;t<=5;t+=.1){const f=boundedSweep(-1.5,-1.5,1.5,t);assert(f.value>=-1.5&&f.value<=1.5);}
 for(const args of [[0,1,1,0],[-2,-1,1,0],[0,-1,1,-1],[Infinity,0,1,1]])assert.throws(()=>boundedSweep(...args));
});
test('numeric checking rejects zero for the actual small Taylor error bound and accepts its fraction or six significant digits',()=>{
 const expected=question('c2-taylor-error-p1').numericAnswer;
 near(expected,.1**4/24);assert(!numericAnswerMatches(0,expected));assert(!numericAnswerMatches(-expected,expected));assert(!numericAnswerMatches(expected*2,expected));
 assert(numericAnswerMatches(parseNumeric('1/240000'),expected));assert(numericAnswerMatches(parseNumeric('4.16667e-6'),expected));
 assert(numericAnswerMatches(parseNumeric('1/3'),1/3));assert(numericAnswerMatches(.333333,1/3));
 assert(numericAnswerMatches(0,0));assert(!numericAnswerMatches(.000004,0));
 for(const s of ['', '1/0','0/0','Infinity','NaN','1+2','Math.sin(0)','<script>','1e999'])assert(!numericAnswerMatches(parseNumeric(s),1));
 near(parseNumeric('-2 / -3'),2/3);near(parseNumeric('+.125'),.125);
});
test('open-ended rational examples, set answers and construction proofs are not graded as one scalar',()=>{
 for(const id of ['ra-archimedes-q3','ra-monotone-q1','dm-exam-8'])assert.equal(question(id).numericAnswer,undefined);
 assert.equal(question('dm-counting-rules-q2').numericAnswer,5);
});
test('selected canonical answers across all eight volumes agree with independent arithmetic and enumeration',()=>{
 const fixtures={
  'limit-laws-p2':1/(Math.sqrt(4)+2),
  'c2-numerical-p1':(.5/2)*(0+2*.25+1),
  'c3-review-2-3':4/5,
  'la-exam-12':[1,3,5,7].reduce((s,x)=>s+(x-4)**2,0),
  'ode-frequency-response-q1':1/Math.hypot(1-1,2),
  'ps-exam-3':(.3*.01)/(.3*.01+.7*.04),
  'ra-integrability-q3':Array.from({length:20},(_,i)=>(((i+1)/20)**2-(i/20)**2)/20).reduce((s,v)=>s+v,0),
 };
 let count=0;for(let a=0;a<=2;a++)for(let b=0;b<=2;b++)for(let c=0;c<=2;c++)for(let d=0;d<=2;d++)if(a+b+c+d===4)count++;
 fixtures['dm-exam-4']=count;for(const [id,value]of Object.entries(fixtures))near(question(id).numericAnswer,value);
});
const specs=[['calculus-2','calculus2','calculus2'],['calculus-3','calculus3','calculus3'],['linear-algebra','linear-algebra','linear'],['ordinary-differential-equations','ode','ode'],['probability-statistics','probability','probability'],['discrete-math','discrete','discrete'],['real-analysis','analysis','analysis']];
test('permutation teaching steps show three different tail counts from the six equally likely allocations',async()=>{
 const {probabilityFrame,probabilityDefaults}=await import('../packages/visuals/probability.mjs');
 const lesson=lessons.find(l=>l.id==='ps-comparison-tests');
 assert.equal(new Set(lesson.teaching.steps.map(s=>s.preset.n)).size,3);
 const allocations=[];for(let i=1;i<=4;i++)for(let j=i+1;j<=4;j++)allocations.push((i+j)/2-(10-i-j)/2);
 for(const step of lesson.teaching.steps){const delta=allocations[step.preset.n-1],p=allocations.filter(v=>Math.abs(v)>=Math.abs(delta)).length/6;
 const frame=probabilityFrame(lesson.id,{...probabilityDefaults(lesson.id),...step.preset});
 near(Number(frame.metrics.find(m=>m.label==='观察均值差').value),delta);
 assert(Math.abs(Number(frame.metrics.find(m=>m.label==='精确双侧 $p$ 值').value)-p)<1e-6);
 }
});
test('all registered models remain finite at the minimum, default and maximum combination of every exposed control',async()=>{
 let frames=0;
 for(const [book,file,prefix]of specs){const mod=await import('../packages/visuals/'+file+'.mjs');for(const l of contentBooks.find(v=>v.book.id===book).allLessons){const cs=mod[prefix+'Controls'](l.id),defaults=mod[prefix+'Defaults'](l.id);
 function inspect(x,path){if(typeof x==='number')assert(Number.isFinite(x),l.id+' '+path);else if(Array.isArray(x))x.forEach((v,j)=>inspect(v,path+'.'+j));else if(x&&typeof x==='object')for(const [k,v]of Object.entries(x))inspect(v,path+'.'+k);}
 function go(i,p){if(i===cs.length){frames++;return inspect(mod[prefix+'Frame'](l.id,p),'frame');}for(const value of new Set([cs[i].min,cs[i].value,cs[i].max]))go(i+1,{...p,[cs[i].key]:value});}go(0,defaults);}}
 assert.equal(frames,2715);
});
