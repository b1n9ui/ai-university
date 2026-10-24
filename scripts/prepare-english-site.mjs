/** Mirror a tested canonical revision into the independent English Site checkout. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {root} from './content-utils.mjs';
const destination=process.argv[2];
if(!destination||!path.isAbsolute(destination)||path.resolve(destination)===root)throw Error('Supply the absolute independent English Site checkout.');
const settings=JSON.parse(fs.readFileSync(path.join(root,'deployments/sites.json'),'utf8')).en;
const manifestPath=path.join(destination,'.openai/hosting.json');
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
if(manifest.project_id!==settings.project_id)throw Error('English Site identity does not match the registered deployment.');
if(execFileSync('git',['status','--porcelain'],{cwd:root,encoding:'utf8'}).trim())throw Error('Canonical source must be clean and committed before preparing a Site.');
const commit=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
const archive=execFileSync('git',['archive','HEAD'],{cwd:root,maxBuffer:200*1024*1024});
execFileSync('tar',['-x','--exclude=.openai/hosting.json','-C',destination],{input:archive,maxBuffer:200*1024*1024});
const nativeDirectory='out';
manifest.static={...(manifest.static||{}),directory:nativeDirectory};
fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
const target=path.join(destination,nativeDirectory);
fs.rmSync(target,{recursive:true,force:true});fs.cpSync(path.join(root,settings.directory),target,{recursive:true});
function hashes(folder,prefix=''){return fs.readdirSync(folder,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(e=>e.isDirectory()?hashes(path.join(folder,e.name),prefix+e.name+'/'):[{path:prefix+e.name,sha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(folder,e.name))).digest('hex')}]);}
const files=hashes(target);
fs.writeFileSync(path.join(destination,'SOURCE_PROVENANCE.json'),JSON.stringify({repository:'https://github.com/b1n9ui/ai-university',canonical_commit:commit,edition:'en',static_directory:nativeDirectory,files},null,2)+'\n');
console.log(`Prepared independent English Site from canonical ${commit}: ${files.length} exact build files.`);
