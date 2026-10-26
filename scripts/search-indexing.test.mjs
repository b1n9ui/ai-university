import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {config,validateManifest,makePlan,submitPlan} from './search-indexing.mjs';
const fingerprint='a'.repeat(64);
const page=(id,sha256=fingerprint)=>({url:config.baseUrl+id,sha256});
const manifest=pages=>({schemaVersion:1,baseUrl:config.baseUrl,pages});
test('search plans include real additions, changes and removals without repeating unchanged pages',()=>{
 const before=manifest([page('books/one/'),page('books/gone/'),page('en/books/changed/')]);
 const after=manifest([page('books/one/'),page('books/new/'),page('en/books/changed/','b'.repeat(64))]);
 assert.deepEqual(makePlan(before,after).urls,[page('books/gone/').url,page('books/new/').url,page('en/books/changed/').url]);
 assert.equal(makePlan(after,after).urls.length,0);assert.equal(makePlan(null,after).urls.length,3);
 for(const url of ['https://example.org/','https://b1n9ui.github.io/other/','https://b1n9ui.github.io/ai-university/../other/','https://b1n9ui.github.io/ai-university/#/lesson/test','https://b1n9ui.github.io/ai-university/?session=secret'])assert.throws(()=>validateManifest(manifest([{url,sha256:fingerprint}])));
 assert.throws(()=>validateManifest(manifest([page('books/one/'),page('books/one/')])));
});
test('search submission requires live ownership and the exact deployed manifest; receipt never means indexed',async()=>{
 const after=manifest([page('books/new/')]),plan=makePlan(null,after),calls=[];
 const fake=status=>async(url,options={})=>{calls.push({url,options});if(url.endsWith(config.key+'.txt'))return new Response(config.key);if(url.endsWith('discovery-manifest.json'))return Response.json(after);return new Response('',{status});};
 for(const status of [200,202,403,429]){
  calls.length=0;const result=await submitPlan(plan,{requestImpl:fake(status)});
  assert.equal(result.httpStatus,status);assert.equal(result.indexingConfirmed,false);assert.equal(calls.length,3);
  assert.equal(result.state,status===200?'received':status===202?'received-pending-key-validation':'rejected');
  const payload=JSON.parse(calls[2].options.body);assert.deepEqual(payload.urlList,plan.urls);assert.ok(payload.keyLocation.startsWith(config.baseUrl));
 }
 let posts=0;await assert.rejects(submitPlan(plan,{requestImpl:async()=>{posts++;return new Response('wrong key');}}),/ownership/);assert.equal(posts,1);
 await assert.rejects(submitPlan(plan,{requestImpl:async url=>url.endsWith('.txt')?new Response(config.key):Response.json(manifest([page('books/other/')]))}),/does not match/);
 const empty=await submitPlan(makePlan(after,after),{requestImpl:()=>{throw Error('Must not send');}});assert.equal(empty.state,'no-content-changes');
});
test('published search fingerprints cover exactly the canonical sitemap and ownership is scoped to this project',()=>{
 const root=JSON.parse(fs.readFileSync('dist-github/discovery-manifest.json'));
 validateManifest(root);assert.equal(root.pages.length,794);
 const sitemap=fs.readFileSync('dist-github/sitemap.xml','utf8');const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]).sort();
 assert.deepEqual(root.pages.map(p=>p.url).sort(),urls);
 for(const dir of ['dist','dist-en','dist-github','dist-github/en'])assert.equal(fs.readFileSync(dir+'/'+config.key+'.txt','utf8'),config.key);
 for(const file of config.verificationFiles||[])assert.equal(fs.readFileSync('dist-github/'+file,'utf8'),fs.readFileSync('apps/web/public/'+file,'utf8'));
 const en=JSON.parse(fs.readFileSync('dist-en/discovery-manifest.json'));assert.equal(en.pages.length,397);assert.ok(en.pages.every(p=>p.url.startsWith(config.baseUrl+'en/')));
});
