/** Notify search engines of published content changes, never claim indexing. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(import.meta.dirname,'..');
export const config=JSON.parse(fs.readFileSync(path.join(root,'deployments/indexing.json')));
const manifestUrl=new URL('discovery-manifest.json',config.baseUrl).href;
const keyLocation=new URL(config.key+'.txt',config.baseUrl).href;
const hash=value=>crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
export function validateUrl(value){
 const url=new URL(value),base=new URL(config.baseUrl);
 if(url.origin!==base.origin||!url.pathname.startsWith(base.pathname)||url.username||url.password||url.search||url.hash||url.href!==value)throw Error('URL outside canonical project scope: '+value);
 return value;
}
export function validateManifest(manifest){
 if(manifest?.schemaVersion!==1||manifest.baseUrl!==config.baseUrl||!Array.isArray(manifest.pages)||manifest.pages.length>10000)throw Error('Invalid project discovery manifest');
 const seen=new Set();
 for(const p of manifest.pages){validateUrl(p.url);if(seen.has(p.url)||!/^[a-f0-9]{64}$/.test(p.sha256))throw Error('Invalid or duplicate content fingerprint');seen.add(p.url);}
 return manifest;
}
export function makePlan(before,after){
 validateManifest(after);
 if(before!==null)validateManifest(before);
 const previous=new Map((before?.pages||[]).map(p=>[p.url,p.sha256]));
 const current=new Map(after.pages.map(p=>[p.url,p.sha256]));
 const urls=after.pages.filter(p=>previous.get(p.url)!==p.sha256).map(p=>p.url);
 for(const url of previous.keys())if(!current.has(url))urls.push(url);
 return {schemaVersion:1,baseUrl:config.baseUrl,initial:before===null,manifestSha256:hash(after),urls:[...new Set(urls)].sort(),meaning:'Changed, new or removed URLs only; receipt is not indexing.'};
}
function validatePlan(plan){
 if(plan?.schemaVersion!==1||plan.baseUrl!==config.baseUrl||!Array.isArray(plan.urls)||plan.urls.length>10000||!/^[a-f0-9]{64}$/.test(plan.manifestSha256))throw Error('Invalid submission plan');
 for(const url of plan.urls)validateUrl(url);
 if(new Set(plan.urls).size!==plan.urls.length)throw Error('Duplicate submission URLs');
 return plan;
}
async function request(url,options={}){return fetch(url,{redirect:'error',signal:AbortSignal.timeout(25000),...options});}
export async function captureLive(){
 const response=await request(manifestUrl);
 if(response.status===404)return null; // First installation only; network failures must not mean "all new".
 if(!response.ok)throw Error('Cannot capture published manifest: HTTP '+response.status);
 return validateManifest(await response.json());
}
export async function submitPlan(plan,{requestImpl=request,now=()=>new Date().toISOString()}={}){
 validatePlan(plan);
 const result={time:now(),endpoint:config.endpoint,urlCount:plan.urls.length,manifestSha256:plan.manifestSha256,indexingConfirmed:false};
 if(!plan.urls.length)return {...result,state:'no-content-changes',httpStatus:null};
 if(!/^[a-zA-Z0-9-]{8,128}$/.test(config.key)||config.endpoint!=='https://api.indexnow.org/indexnow')throw Error('Invalid IndexNow configuration');
 const proof=await requestImpl(keyLocation);
 if(!proof.ok||(await proof.text()).trim()!==config.key)throw Error('Published ownership file does not match; nothing submitted');
 const live=await requestImpl(manifestUrl);
 if(!live.ok||hash(validateManifest(await live.json()))!==plan.manifestSha256)throw Error('Published content does not match this deployment; nothing submitted');
 const response=await requestImpl(config.endpoint,{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify({host:new URL(config.baseUrl).host,key:config.key,keyLocation,urlList:plan.urls})});
 const body=(await response.text()).slice(0,1200);
 return {...result,httpStatus:response.status,state:response.status===200?'received':response.status===202?'received-pending-key-validation':'rejected',response:body};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const [action,...args]=process.argv.slice(2);
 const value=name=>{const i=args.indexOf(name);if(i<0||!args[i+1])throw Error('Missing '+name);return path.resolve(root,args[i+1]);};
 const read=name=>JSON.parse(fs.readFileSync(value(name),'utf8'));
 const save=(name,data)=>{const target=value(name);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,JSON.stringify(data,null,2)+'\n');};
 if(action==='capture'){const before=await captureLive();save('--output',before);console.log(before?`Captured ${before.pages.length} published fingerprints.`:'No previous discovery manifest; first-installation plan will include recently published pages.');}
 else if(action==='plan'){const plan=makePlan(read('--before'),read('--after'));save('--output',plan);console.log(`Prepared ${plan.urls.length} new, changed or removed URLs. No search-engine request made.`);}
 else if(action==='submit'){const result=await submitPlan(read('--plan'));save('--output',result);console.log(JSON.stringify(result));if(result.state==='rejected')process.exitCode=1;}
 else throw Error('Use capture, plan, or submit. Submission is only appropriate after successful deployment.');
}
