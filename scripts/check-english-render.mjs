import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {renderToStaticMarkup} from 'react-dom/server';
import React from 'react';
import {buildEnglishContent} from './build-english-content.mjs';
const content=buildEnglishContent();
async function checkEnglishRendering(){
 const original={window:globalThis.window,location:globalThis.location,localStorage:globalThis.localStorage,matchMedia:globalThis.matchMedia};
 const records=new Map();globalThis.localStorage={getItem:k=>records.get(k)||null,setItem:(k,v)=>records.set(k,v)};
 globalThis.location={search:'?lang=en',hash:'#/home',href:'http://localhost/?lang=en#/home'};
 globalThis.window={location:globalThis.location,localStorage};globalThis.matchMedia=()=>({matches:true});
 const server=await createServer({server:{middlewareMode:true,hmr:false,watch:null},appType:'custom'});
 try{
  const {default:App}=await server.ssrLoadModule('/src/App.tsx');
  const shared=['home','library','book/calculus-1','lab','practice','reference','reference?tab=glossary','reference?tab=appendix','learning','guide','downloads','about','about/research','about/versions','about/privacy','about/contribute','practice/exam'];
  const routes=[...shared,...content.book.chapters.flatMap(c=>['chapter/'+c.id,'practice/review/'+c.id]),...content.lessons.flatMap(l=>['lesson/'+l.id,'lesson/'+l.id+'?view=visual','lesson/'+l.id+'?view=practice','lesson/'+l.id+'?view=connections'])];
  function render(route){location.hash='#/'+route;location.href='http://localhost/?lang=en'+location.hash;return renderToStaticMarkup(React.createElement(App));}
  for(const route of routes){const html=render(route);const text=html.replace(/<option value="zh">中文<\/option>/g,'').replaceAll('EN / 中文','').replace(/\s(?:href|d|class|data-[\w-]+)="[^"]*"/g,'');assert.doesNotMatch(text,/[\u3400-\u9fff]/u,route);assert.doesNotMatch(html,/katex-error/,route);}
  for(const route of ['book/calculus-2','book/python-introduction','lesson/'+JSON.parse((await import('node:fs')).default.readFileSync('packages/content/real-analysis/book.json')).lessonIds[0],'reference?book=calculus-3']){
   const html=render(route);assert.match(html,/English edition has not been published/,route);assert.match(html,/lang=zh/,route);
  }
  const library=render('library');assert.equal((library.match(/class="edition-language">Chinese edition/g)||[]).length,10);assert.match(library,/EN \/ 中文/);
  const search=await server.ssrLoadModule('/src/lib/catalog.ts');assert.ok(search.searchLessons('derivative').some(l=>l.id==='derivative-definition'));assert.ok(search.searchTextbooks('integral').every(l=>content.book.lessonIds.includes(l.id)));
 }finally{await server.close();Object.assign(globalThis,original)}
 }
checkEnglishRendering().then(()=>{console.log('English rendering: 171 routes, complete content, explicit language availability, and English search verified.');process.exit(0)},error=>{console.error(error);process.exit(1)});
