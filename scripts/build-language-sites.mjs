import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {writeDiscoverySites} from './build-discovery.mjs';
import {writePublicationSites} from './build-publication.mjs';
import {root} from './content-utils.mjs';
import {englishRegistry} from './build-english-content.mjs';
import {programmingBooks} from './programming-utils.mjs';
const source=path.join(root,'apps/web/public');
const chinese=[
 ['Calculus-I.md','book.html'],['Calculus-II.md','calculus-2.html'],['Calculus-III.md','calculus-3.html'],['Linear-Algebra.md','linear-algebra.html'],['Ordinary-Differential-Equations.md','ordinary-differential-equations.html'],['Probability-Statistics.md','probability-statistics.html'],['Discrete-Mathematics.md','discrete-math.html'],['Real-Analysis.md','real-analysis.html'],...programmingBooks.map(e=>[e.filename,e.printFile])
].flat();
for(const edition of ['zh','en']){
 const output=path.join(root,'build/public-'+edition);
 fs.rmSync(output,{recursive:true,force:true});fs.mkdirSync(output,{recursive:true});
 const names=['favicon.svg','book-assets','launch',...(edition==='zh'?chinese:englishRegistry.flatMap(e=>[e.filename,e.printFile]))];
 for(const name of names)fs.cpSync(path.join(source,name),path.join(output,name),{recursive:true});
 const result=spawnSync(process.execPath,['node_modules/vite/bin/vite.js','build','--mode',edition],{cwd:root,stdio:'inherit'});
 if(result.status!==0)process.exit(result.status||1);
}
writePublicationSites();
writeDiscoverySites();
const pages=path.join(root,'dist-github');
fs.rmSync(pages,{recursive:true,force:true});fs.cpSync(path.join(root,'dist'),pages,{recursive:true});
fs.cpSync(path.join(root,'dist-en'),path.join(pages,'en'),{recursive:true});
fs.writeFileSync(path.join(pages,'.nojekyll'),'');
console.log('Built separate Chinese and English sites, plus a combined GitHub Pages artifact.');

// Native Sites accepts a fixed set of static output directories. In the English
// source mirror, keep the supported `out/` directory English on every rebuild.
const hosting=JSON.parse(fs.readFileSync(path.join(root,'.openai/hosting.json'),'utf8'));
const deployments=JSON.parse(fs.readFileSync(path.join(root,'deployments/sites.json'),'utf8'));
if(hosting.project_id===deployments.en.project_id){
 const nativeOutput=path.join(root,'out');
 fs.rmSync(nativeOutput,{recursive:true,force:true});
 fs.cpSync(path.join(root,'dist-en'),nativeOutput,{recursive:true});
 console.log('Prepared English native Site output in out/.');
}
