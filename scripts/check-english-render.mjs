import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createServer} from 'vite';
import {renderToStaticMarkup} from 'react-dom/server';
import React from 'react';
import {buildEnglishContent,englishRegistry} from './build-english-content.mjs';

async function checkEnglishRendering(){
 const original={window:globalThis.window,location:globalThis.location,localStorage:globalThis.localStorage,matchMedia:globalThis.matchMedia};
 const records=new Map();globalThis.localStorage={getItem:k=>records.get(k)||null,setItem:(k,v)=>records.set(k,v)};
 globalThis.location={search:'?lang=zh',hash:'#/home',href:'http://127.0.0.1:5174/?lang=zh#/home'};
 globalThis.window={location:globalThis.location,localStorage};globalThis.matchMedia=()=>({matches:true});
 const server=await createServer({mode:'en',optimizeDeps:{noDiscovery:true,include:[]},server:{middlewareMode:true,hmr:false,watch:null},appType:'custom'});
 let count=0;const failures=[];
 function verify(Component,props,label){
  const html=renderToStaticMarkup(React.createElement(Component,props));
  // The explicit link to the other site is the sole Chinese label in this edition.
  const text=html.replace(/<a class="language-switcher"[\s\S]*?<\/a>/g,'');
  const residual=[...text.matchAll(/.{0,25}[\u3400-\u9fff].{0,65}/gu)].slice(0,3).map(m=>m[0]);
  if(residual.length)failures.push({label,residual});
  assert.doesNotMatch(html,/katex-error/,label);count++;
 }
 try{
  const {tr}=await server.ssrLoadModule('/src/i18n/index.ts');
  for(const [source,expected] of [['第 4 章','Chapter 4'],['第 2 袋','Bag 2'],['例题 1','Example 1'],['第 2 / 5 题','Question 2 / 5'],['查看微积分 I教材','Open Calculus I'],['情境 2 / 3','Scenario 2 / 3']])assert.equal(tr(source),expected);
  const {default:App}=await server.ssrLoadModule('/src/App.tsx');
  const math=englishRegistry.filter(e=>e.type==='mathematics').map(e=>buildEnglishContent(e.id));
  const shared=['home','library','library?category=mathematics','library?category=other','about','about/research','about/versions','about/privacy','about/contribute','about/tryout'];
  const routes=[...shared,...math.flatMap(content=>[
   'book/'+content.book.id,
   ...['lab','practice','reference','reference?tab=glossary','reference?tab=appendix','learning','guide','downloads','practice/exam'].map(p=>p+(p.includes('?')?'&':'?')+'book='+content.book.id),
   ...content.book.chapters.flatMap(c=>['chapter/'+c.id,'practice/review/'+c.id]),
   ...content.lessons.flatMap(l=>['lesson/'+l.id,'lesson/'+l.id+'?view=visual','lesson/'+l.id+'?view=practice','lesson/'+l.id+'?view=connections',...(l.teaching.transferExerciseId?['lesson/'+l.id+'?view=practice&question='+l.teaching.transferExerciseId]:[])])
  ])];
  for(const route of routes){location.hash='#/'+route;location.href='http://127.0.0.1:5174/'+location.hash;verify(App,{},route);}
  // Render programming pages directly: a synchronous SSR render of App's lazy
  // route would only inspect its loading fallback, leaving the book unchecked.
  for(const [id,module,prefix] of [['python-introduction','PythonPreview','python'],['ai-development','AIDevelopmentPreview','ai-development']]){
   const {default:Page}=await server.ssrLoadModule('/src/pages/'+module+'.tsx');
   const data=buildEnglishContent(id);
   const routes=[prefix,...['review','glossary','project'].map(s=>prefix+'/'+s),...data.lessons.flatMap(l=>[prefix+'/'+l.id,prefix+'/'+l.id+'/experiment',prefix+'/'+l.id+'/practice'])];
   for(const path of routes)verify(Page,{path},path);
  }
  const search=await server.ssrLoadModule('/src/lib/catalog.ts');
  for(const query of ['derivative','eigenvalue','probability','uniform convergence','python','acceptance'])assert.ok(search.searchTextbooks(query).length,query+' absent from search');
  assert.equal(search.searchTextbooks(' ').length,0);
  if(failures.length){console.error(JSON.stringify(failures.slice(0,80),null,2));throw Error(`${failures.length} pages contain untranslated presentation text`);}
  console.log(`English rendering: ${count} complete page surfaces, both programming books, mathematical diagrams, and cross-book search verified.`);
 }finally{await server.close();Object.assign(globalThis,original)}
}
checkEnglishRendering().then(()=>process.exit(0),error=>{console.error(error);process.exit(1)});
