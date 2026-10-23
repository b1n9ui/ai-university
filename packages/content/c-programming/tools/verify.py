"""Compile only this repository's fixed teaching programs, never user code."""
import json
import os
from pathlib import Path
import shlex
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
BOOK = json.loads((ROOT / 'book.json').read_text())
EXTRA = json.loads((ROOT / 'supplements.json').read_text())
CC = shlex.split(os.environ.get('CC', 'cc'))
FLAGS = ['-std=c17', '-Wall', '-Wextra', '-Wpedantic', '-Werror']
if os.environ.get('C_SANITIZE') == '1':
    FLAGS += ['-g', '-O1', '-fsanitize=address,undefined',
              '-fno-omit-frame-pointer', '-fno-sanitize-recover=all']


def invoke(args, cwd, stdin=''):
    return subprocess.run(args, cwd=cwd, input=stdin, text=True,
                          capture_output=True, timeout=15)


def compile_to(sources, exe, cwd):
    result = invoke(CC + FLAGS + [str(p) for p in sources] + ['-o', str(exe)], cwd)
    if result.returncode != 0:
        raise AssertionError(result.stderr)


def walk(value, label):
    if isinstance(value, dict):
        if 'code' in value and 'stdout' in value:
            yield label, value
        else:
            for key, item in value.items():
                yield from walk(item, label + '/' + key)
    elif isinstance(value, list):
        for i, item in enumerate(value):
            yield from walk(item, label + '/' + str(i))


objects = [EXTRA]
for chapter in BOOK['chapters']:
    for lesson_id in chapter['lessons']:
        objects.append(json.loads((ROOT / 'lessons' / (lesson_id + '.json')).read_text()))
seen = set()
count = 0
for obj in objects:
    for label, snippet in walk(obj, obj.get('id', 'supplements')):
        fingerprint = json.dumps(snippet, sort_keys=True)
        if fingerprint in seen:
            continue
        seen.add(fingerprint)
        with tempfile.TemporaryDirectory(prefix='au-c-example-') as folder:
            cwd = Path(folder)
            source = cwd / 'example.c'
            source.write_text(snippet['code'])
            for name, content in snippet.get('files', {}).items():
                dest = cwd / name
                assert dest.parent == cwd and dest.name not in ('example.c', 'example')
                dest.write_text(content)
            exe = cwd / ('example.exe' if os.name == 'nt' else 'example')
            try:
                compile_to([source], exe, cwd)
                result = invoke([str(exe)], cwd, snippet.get('stdin', ''))
                assert result.returncode == snippet.get('exitCode', 0), result.stderr
                assert result.stdout == snippet['stdout'], (
                    repr(result.stdout), repr(snippet['stdout']))
                assert result.stderr == snippet.get('stderr', ''), result.stderr
            except Exception as error:
                raise AssertionError(label + ': ' + str(error)) from error
        count += 1
print('C snippets: %d distinct complete programs/input cases passed.' % count)

with tempfile.TemporaryDirectory(prefix='au-c-project-') as folder:
    cwd = Path(folder)
    project = ROOT / 'project'
    exe = cwd / 'gradebook'
    unit = cwd / 'test_records'
    compile_to([project / p for p in ['main.c', 'records.c', 'input.c']], exe, cwd)
    compile_to([project / p for p in ['test_records.c', 'records.c', 'input.c']], unit, cwd)
    result = invoke([str(unit)], cwd)
    assert result.returncode == 0 and result.stdout == 'records and parser: ok\n', result.stderr
    expected = ('count: 3\ntotal: 247\nmean: 82.33\npassed: 2\n'
                'Ada 100\nLin 88\nBo 59\n')
    result = invoke([str(exe), str(project / 'sample.txt')], cwd)
    assert result.returncode == 0 and result.stdout == expected and not result.stderr
    valid_cases = [
        (b'', 'count: 0\ntotal: 0\nmean: n/a\npassed: 0\n'),
        (b'Lin 88\r\nBo 59\r\nAda 100\r\n', expected),
        (b'Lin 88\nBo 59\nAda 100', expected),
        (b'Zoe 80\nAda 80\n',
         'count: 2\ntotal: 160\nmean: 80.00\npassed: 2\nAda 80\nZoe 80\n'),
        (b'Ada 000\nBo 100\n',
         'count: 2\ntotal: 100\nmean: 50.00\npassed: 1\nBo 100\nAda 0\n')]
    fixture = cwd / 'input.txt'
    for data, output in valid_cases:
        fixture.write_bytes(data)
        result = invoke([str(exe), str(fixture)], cwd)
        assert result.returncode == 0 and result.stdout == output and not result.stderr
    invalid = [b'\n', b'Ada\n', b'Ada  90\n', b'Ada 90 \n', b'Ada +1\n',
               b'Ada -1\n', b'Ada 101\n', b'Ada 90x\n', b'Ada\t90\n',
               b'A1 90\n', b'Ada 0\nAda 100\n', b'Ada 1\x00hidden\n',
               b'A'*21 + b' 1\n', b'Ada ' + b'9'*100 + b'\n',
               b'Ada ' + b'9'*40 + b'\n', b'Ada 90\r', b'Ada 90\r\r\n',
               b'Ada 90\nBo 20\nBAD\n']
    for data in invalid:
        fixture.write_bytes(data)
        result = invoke([str(exe), str(fixture)], cwd)
        assert result.returncode != 0 and result.stdout == '' and result.stderr, result
    names = ['S' + chr(65+i//26) + chr(65+i%26) for i in range(101)]
    fixture.write_text(''.join(name+' 100\n' for name in names[:100]))
    result = invoke([str(exe), str(fixture)], cwd)
    assert result.returncode == 0 and result.stdout.startswith(
        'count: 100\ntotal: 10000\nmean: 100.00\npassed: 100\n')
    fixture.write_text(''.join(name+' 100\n' for name in names))
    result = invoke([str(exe), str(fixture)], cwd)
    assert result.returncode != 0 and not result.stdout and 'line 101' in result.stderr
    for args in [[], [str(cwd/'missing.txt')], ['one', 'two']]:
        result = invoke([str(exe)] + args, cwd)
        assert result.returncode != 0 and not result.stdout and result.stderr
    # An independent caller verifies transactional loading into an existing table.
    source = cwd / 'test_load.c'
    source.write_text('''#include "input.h"
#include <assert.h>
#include <string.h>
int main(int argc, char **argv) {
    assert(argc == 4);
    Gradebook b; gb_init(&b);
    GbStatus s = gb_add(&b, "Keep", 42); assert(s == GB_OK);
    size_t line = 999;
    s = gb_load(&b, argv[1], &line);
    assert(s == GB_INVALID && line == 3);
    assert(b.size == 1 && b.data[0].score == 42);
    assert(strcmp(b.data[0].name, "Keep") == 0);
    s = gb_load(&b, argv[2], &line);
    assert(s == GB_IO && line == 0 && b.size == 1);
    s = gb_load(&b, argv[3], &line);
    assert(s == GB_OK && b.size == 3 && gb_total(&b) == 247);
    gb_destroy(&b); return 0;
}
''')
    bad = cwd / 'bad.txt'
    bad.write_text('Ada 1\nBo 2\ninvalid\n')
    loader = cwd / 'test_load'
    result = invoke(CC + FLAGS + ['-I', str(project), str(source),
                    str(project/'records.c'), str(project/'input.c'), '-o', str(loader)], cwd)
    assert result.returncode == 0, result.stderr
    result = invoke([str(loader), str(bad), str(cwd/'missing.txt'),
                     str(project/'sample.txt')], cwd)
    assert result.returncode == 0 and not result.stderr, result.stderr
print('C project: unit/parser checks and 31 external scenarios passed; transactional load verified.')
print('Compiler:', invoke(CC + ['--version'], ROOT).stdout.splitlines()[0])
print('Sanitizers:', 'address,undefined' if os.environ.get('C_SANITIZE') == '1' else 'off')
