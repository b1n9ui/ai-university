import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
// Isolate the Vite renderer so its development-server handles cannot keep the test runner alive.
test('English pages, independent edition, search and all lesson views render consistently',()=>{
 const result=spawnSync(process.execPath,['scripts/check-english-render.mjs'],{encoding:'utf8',timeout:180000});
 assert.equal(result.status,0,result.stdout+result.stderr+(result.error?.message||''));
});

test('English model controls and boundary states retain translated display labels',()=>{
 const result=spawnSync(process.execPath,['scripts/check-english-models.mjs'],{encoding:'utf8',timeout:180000});
 assert.equal(result.status,0,result.stdout+result.stderr+(result.error?.message||''));
});
