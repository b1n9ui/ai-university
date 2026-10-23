import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
// Isolate the Vite renderer so its development-server handles cannot keep the test runner alive.
test('English pages, language availability, search and all lesson views render consistently',()=>{
 const result=spawnSync(process.execPath,['scripts/check-english-render.mjs'],{encoding:'utf8',timeout:60000});
 assert.equal(result.status,0,result.stdout+result.stderr+(result.error?.message||''));
});
