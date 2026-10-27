import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {publicationBooks,publicationHead} from './build-publication.mjs';
const sites=JSON.parse(fs.readFileSync('deployments/sites.json'));
for(const edition of ['zh','en'])test(`${edition}: complete portable publication pages with matching language downloads and metadata`,()=>{
 const books=publicationBooks(edition),dir=sites[edition].directory,base=sites[edition].public_url;
 assert.equal(books.length,10);
 assert.equal(books.reduce((n,b)=>n+b.stats.lessons,0),383);
 assert.equal(books.reduce((n,b)=>n+b.stats.examples,0),778);
 assert.equal(books.reduce((n,b)=>n+b.stats.exercises,0),1884);
 for(const suffix of ['books/','press/',...books.map(b=>'books/'+b.id+'/')]){
  const html=fs.readFileSync(path.join(dir,suffix,'index.html'),'utf8');
  assert.ok(html.includes(`rel="canonical" href="${new URL(suffix,base).href}"`));
  assert.match(html,/hreflang="en"/);assert.match(html,/hreflang="zh-CN"/);
  assert.match(html,/og:image:width" content="1280"/);assert.match(html,/og:image:height" content="720"/);
  assert.match(html,/application\/ld\+json/);assert.doesNotMatch(html,/undefined|katex-error/);
  const data=JSON.parse(html.match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
  assert.equal(data.isAccessibleForFree,true);
  if(edition==='en')assert.doesNotMatch(html.replace(/<a[^>]*lang="zh-CN"[^>]*>[^]*?<\/a>/g,'').replace(/<a href="https:\/\/b1n9ui.github.io\/ai-university\/">中文<\/a>/g,''),/[\u3400-\u9fff]/u);
  for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
   if(/^(https?:|#)/.test(href))continue;
   const resource=href.split('#')[0];if(!resource)continue;
   const file=path.resolve(dir,suffix,resource);
   assert.ok(file.startsWith(path.resolve(dir)),`${suffix}: escaping local root ${href}`);
   assert.ok(fs.existsSync(file),`${suffix}: missing ${href}`);
  }
 }
 for(const b of books){
  const html=fs.readFileSync(path.join(dir,'books',b.id,'index.html'),'utf8');
  for(const l of b.lessons)assert.ok(html.includes('href="'+l.id+'/"'),`${b.id}: missing lesson ${l.id}`);
  assert.ok(html.includes('../../'+b.filename));assert.ok(html.includes('../../'+b.printFile));
  assert.ok(!/c-introduction|c-language/.test(html));
 }
 const root=fs.readFileSync(dir+'/index.html','utf8');assert.match(root,/<noscript>[^]*books\/calculus-1/);
 const sitemap=fs.readFileSync(dir+'/sitemap.xml','utf8');assert.doesNotMatch(sitemap,/#/);
 assert.equal([...sitemap.matchAll(/<loc>/g)].length,edition==='zh'?794:397);
});
test('publication metadata escapes source strings and uses actual PNG dimensions',()=>{
 const html=publicationHead('en','<script> & "title"','A < B');
 assert.match(html,/&lt;script&gt; &amp; &quot;title&quot;/);assert.doesNotMatch(html,/<title><script>/);
 for(const e of ['en','zh']){
  const bytes=fs.readFileSync(`apps/web/public/launch/preview-${e}.png`);
  assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
  assert.equal(bytes.readUInt32BE(16),1280);assert.equal(bytes.readUInt32BE(20),720);
 }
});
