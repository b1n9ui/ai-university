import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const digest=value=>crypto.createHash('sha256').update(value).digest('hex');
export function writeSearchManifests(){
 const config=JSON.parse(fs.readFileSync(path.join(root,'deployments/indexing.json')));
 const all=[];
 for(const [edition,dir] of [['zh','dist'],['en','dist-en']]){
  const folder=path.join(root,dir),index=JSON.parse(fs.readFileSync(path.join(folder,'content-index.json')));
  const base=config.baseUrl+(edition==='en'?'en/':'');
  const pages=index.lessons.map(l=>({url:l.url,sha256:digest(JSON.stringify({lesson:l.sha256,version:l.version,book:l.bookTitle}))}));
  const suffixes=['','books/','press/','contribute/',...new Set(index.lessons.map(l=>'books/'+l.bookId+'/'))];
  for(const suffix of suffixes){
   const html=fs.readFileSync(path.join(folder,suffix,'index.html'),'utf8');
   const main=html.match(/<main\b[^>]*>([^]*?)<\/main>/)?.[1];
   if(!main)throw Error('Missing static main content: '+suffix);
   // Visible content, not footer release numbers or cosmetic stylesheet changes.
   const text=main.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
   pages.push({url:new URL(suffix,base).href,sha256:digest(text)});
  }
  pages.sort((a,b)=>a.url.localeCompare(b.url));all.push(...pages);
  fs.writeFileSync(path.join(folder,config.key+'.txt'),config.key);
  for(const file of config.verificationFiles||[]){
   if(!/^google[a-f0-9]{16}\.html$/.test(file))throw Error('Unexpected verification filename');
   fs.copyFileSync(path.join(root,'apps/web/public',file),path.join(folder,file));
  }
  if(edition==='en')fs.writeFileSync(path.join(folder,'discovery-manifest.json'),JSON.stringify({schemaVersion:1,baseUrl:base,pages},null,2)+'\n');
 }
 all.sort((a,b)=>a.url.localeCompare(b.url));
 fs.writeFileSync(path.join(root,'dist/discovery-manifest.json'),JSON.stringify({schemaVersion:1,baseUrl:config.baseUrl,pages:all},null,2)+'\n');
 console.log(`Search discovery: ${all.length} content fingerprints and a project-scoped IndexNow ownership file.`);
}
