import {createServer} from 'vite';
import {buildEnglishContent} from './build-english-content.mjs';
const server=await createServer({mode:'en',optimizeDeps:{noDiscovery:true,include:[]},server:{middlewareMode:true,hmr:false,watch:null},appType:'custom'});
try {
 const {tr}=await server.ssrLoadModule('/src/i18n/index.ts');
 const misses=new Map();let count=0;
 function visit(value,lesson,path='') {
  if(typeof value==='string'&&/[\u3400-\u9fff]/u.test(value)){
   // These two point labels use numeric glyphs in AnalysisVisual.
   if(['零','一'].includes(value)&&path.includes('points'))return;
   const translated=tr(value);if(/[\u3400-\u9fff]/u.test(translated))misses.set(value,{lesson,path,translated});
  } else if(Array.isArray(value))value.forEach((v,i)=>visit(v,lesson,path+'/'+i));
  else if(value&&typeof value==='object')for(const [key,v]of Object.entries(value))visit(v,lesson,path+'/'+key);
 }
 for(const [id,file,prefix] of [['calculus-2','calculus2','calculus2'],['calculus-3','calculus3','calculus3'],['linear-algebra','linear-algebra','linear'],['ordinary-differential-equations','ode','ode'],['probability-statistics','probability','probability'],['discrete-math','discrete','discrete'],['real-analysis','analysis','analysis']]){
  const model=await import('../packages/visuals/'+file+'.mjs');
  for(const lesson of buildEnglishContent(id).lessons){
   const key=lesson.id;
   const controls=model[prefix+'Controls'](key),defaults=model[prefix+'Defaults'](key);
   visit(controls,lesson.id,'controls');
   const states=[defaults,...controls.flatMap(c=>[c.min,c.max,...(c.options||[]).map((_,i)=>c.min+i*c.step)].map(value=>({...defaults,[c.key]:value})))];
   for(const state of states){visit(model[prefix+'Frame'](key,state),lesson.id);count++;}
  }
 }
 if(misses.size){console.error(JSON.stringify([...misses].map(([source,info])=>({source,...info})),null,2));throw Error(`${misses.size} model display strings need English text`);}
 console.log(`English model displays: ${count} default, endpoint, and option frames contain no untranslated labels.`);
} finally {await server.close();}
process.exit(0);
