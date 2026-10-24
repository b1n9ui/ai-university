import fs from 'node:fs';
import path from 'node:path';
import {root} from './content-utils.mjs';
const folder=path.join(root,'packages/content/translations/en/ai-development');
const files=fs.readdirSync(path.join(folder,'project')).filter(n=>!n.startsWith('.')).sort().map(name=>({name,content:fs.readFileSync(path.join(folder,'project',name),'utf8')}));
for(const f of files)if(/[\u3400-\u9fff]/u.test(f.content))throw Error('Untranslated project source: '+f.name);
fs.mkdirSync(path.join(folder,'resolved'),{recursive:true});
function crc32(b) {
  let c = 0xffffffff;
  for (const byte of b) {
    c ^= byte;
    for (let j = 0; j < 8; j++) c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
  }
  return (c ^ 0xffffffff) >>> 0;
}
function zip(items) {
  const locals = [],
    central = [];
  let offset = 0;
  for (const f of items) {
    const name = Buffer.from("learning-list/" + f.name);
    const data = Buffer.from(f.content);
    const crc = crc32(data);
    const date = ((2026 - 1980) << 9) | (10 << 5) | 11;
    const header = Buffer.alloc(30);
    header.writeUInt32LE(0x04034b50, 0);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(0x800, 6);
    header.writeUInt16LE(date, 12);
    header.writeUInt32LE(crc, 14);
    header.writeUInt32LE(data.length, 18);
    header.writeUInt32LE(data.length, 22);
    header.writeUInt16LE(name.length, 26);
    locals.push(header, name, data);
    const c = Buffer.alloc(46);
    c.writeUInt32LE(0x02014b50, 0);
    c.writeUInt16LE(20, 4);
    c.writeUInt16LE(20, 6);
    c.writeUInt16LE(0x800, 8);
    c.writeUInt16LE(date, 14);
    c.writeUInt32LE(crc, 16);
    c.writeUInt32LE(data.length, 20);
    c.writeUInt32LE(data.length, 24);
    c.writeUInt16LE(name.length, 28);
    c.writeUInt32LE(offset, 42);
    central.push(c, name);
    offset += header.length + name.length + data.length;
  }
  const directory = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(items.length, 8);
  end.writeUInt16LE(items.length, 10);
  end.writeUInt32LE(directory.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, directory, end]);
}

fs.writeFileSync(path.join(folder,'resolved/project.generated.json'),JSON.stringify(files,null,2)+'\n');
fs.writeFileSync(path.join(folder,'resolved/learning-list-en.zip'),zip(files));
console.log('English project source and ZIP generated from '+files.length+' identical files.');
