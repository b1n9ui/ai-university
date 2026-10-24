import fs from 'node:fs';
import crypto from 'node:crypto';
import {splitMathText} from '../packages/content/math-text.mjs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const englishDirectory=path.join(root,'packages/content/translations/en/calculus-1');
export const englishRegistry=JSON.parse(fs.readFileSync(path.join(root,'packages/content/translations/en/registry.json'),'utf8'));
export function buildEnglishContent(bookId = "calculus-1"){
 const englishDirectory=path.join(root,"packages/content/translations/en",bookId);
 const manifest=JSON.parse(fs.readFileSync(path.join(englishDirectory,'manifest.json'),'utf8'));
 const result={locale:'en',sourceVersion:manifest.sourceVersion,provenance:{authorship:'AI-generated',humanReviewed:false},book:null,supplements:null,lessons:[]};
 for(const[id,entry]of Object.entries(manifest.files)){
  const raw=fs.readFileSync(path.join(root,entry.source),'utf8');
  if(crypto.createHash('sha256').update(raw).digest('hex')!==entry.sha256)throw Error(`Stale English source: ${id}. Review the translation against the changed canonical content.`);
  const translated=manifest.format === 'json-array' ? JSON.parse(fs.readFileSync(path.join(englishDirectory,id+'.json'),'utf8')) : fs.readFileSync(path.join(englishDirectory,id+'.txt'),'utf8').trimEnd().split('\n');
  if(translated.length!==entry.fields.length)throw Error(`${id}: expected ${entry.fields.length} translated fields, found ${translated.length}`);
  const content=JSON.parse(raw);
  entry.fields.forEach(({path:pointer,value},i)=>{
   const text=translated[i];
   if(!text.trim()||/[\u3400-\u9fff]/u.test(text))throw Error(`${id}${pointer}: missing English translation`);
   const mathParts=s=>splitMathText(s).filter(p=>p.kind==='math').map(p=>p.value.replace(/\\text\{[^}]*\}/g,'\\text{}').replace(/\s/g,'')).sort();
   if(JSON.stringify(mathParts(value))!==JSON.stringify(mathParts(text)))throw Error(`${id}${pointer}: mathematical expressions changed in translation`);
   const keys=pointer.split('/').slice(1);let owner=content;for(const key of keys.slice(0,-1))owner=owner[key];
   if(owner[keys.at(-1)]!==value)throw Error(`${id}${pointer}: original field mismatch`);
   owner[keys.at(-1)]=text;
  });
  if(/[\u3400-\u9fff]/u.test(JSON.stringify(content)))throw Error(`${id}: untranslated Chinese remains`);
  if(id==='book'||id==='supplements')result[id]=content;else result.lessons.push(content);
 }
 result.book.language = "en";
 const order=result.book.lessonIds || result.book.chapters.flatMap(c=>c.lessons);
 result.lessons.sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id));
 return result;
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const ids=process.argv.slice(2).filter(a=>!a.startsWith('--'));
 for(const id of ids.length ? ids : englishRegistry.map(e=>e.id)){
  const data=buildEnglishContent(id);fs.writeFileSync(path.join(root,`packages/content/translations/en/${id}.generated.json`),JSON.stringify(data,null,2)+'\n');
  if(englishRegistry.find(e=>e.id===id)?.type==='programming'){
   const output=path.join(root,`packages/content/translations/en/${id}/resolved`);fs.mkdirSync(path.join(output,'lessons'),{recursive:true});
   fs.writeFileSync(path.join(output,'book.json'),JSON.stringify(data.book,null,2)+'\n');fs.writeFileSync(path.join(output,'supplements.json'),JSON.stringify(data.supplements,null,2)+'\n');
   for(const lesson of data.lessons)fs.writeFileSync(path.join(output,'lessons',lesson.id+'.json'),JSON.stringify(lesson,null,2)+'\n');
  }
  console.log(`English ${data.book.title}: ${data.lessons.length} lessons; complete translation fields and current source checksums.`);
 }
}
