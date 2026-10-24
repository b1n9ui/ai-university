import fs from 'node:fs';
import path from 'node:path';
import {root} from './content-utils.mjs';
import {buildEnglishContent,englishRegistry} from './build-english-content.mjs';
const requested=process.argv.slice(2);
const labels={};
for(const edition of englishRegistry.filter(e=>!requested.length||requested.includes(e.id))){
 const content=buildEnglishContent(edition.id);
 const manifest=JSON.parse(fs.readFileSync(path.join(root,'packages/content/translations/en',edition.id,'manifest.json'),'utf8'));
 for(const[id,file]of Object.entries(manifest.files)){
  const translated=id==='book'||id==='supplements'?content[id]:content.lessons.find(l=>l.id===id);
  for(const field of file.fields){
   if(!/\/(?:title|titleZh|subtitle)$/.test(field.path)&&!/^\/chapters\/\d+\/title$/.test(field.path))continue;
   const value=field.path.split('/').slice(1).reduce((o,k)=>o[k],translated);
   if(field.value!==value)labels[field.value]=value;
  }
 }
}
fs.writeFileSync(path.join(root,'apps/web/src/i18n/content-labels.en.generated.json'),JSON.stringify(labels,null,2)+'\n');
console.log(`English interface: ${Object.keys(labels).length} authored book and concept labels.`);
