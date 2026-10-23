"""Deterministic archive of fixed exercises and the complete project."""
import io
import json
from pathlib import Path
import sys
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT.parents[2] / 'apps/web/public/c-programming-examples.zip'
book = json.loads((ROOT/'book.json').read_text())
entries = {}
for path in sorted((ROOT/'project').iterdir()):
    if path.is_file():
        entries['c-programming/project/'+path.name] = path.read_bytes()
objects = []
for chapter in book['chapters']:
    for lesson_id in chapter['lessons']:
        lesson = json.loads((ROOT/'lessons'/(lesson_id+'.json')).read_text())
        for i, example in enumerate(lesson['workedExamples'], 1):
            objects.append((lesson['number']+'-example-'+str(i), example['answer']))
        for i, question in enumerate(lesson['practice'], 1):
            if isinstance(question['answer'], dict):
                objects.append((lesson['number']+'-practice-'+str(i), question['answer']))
extra = json.loads((ROOT/'supplements.json').read_text())
for i, review in enumerate(extra['chapterReviews'], 1):
    for j, question in enumerate(review['questions'], 1):
        if isinstance(question['answer'], dict):
            objects.append(('review-%d-%d' % (i, j), question['answer']))
for i, question in enumerate(extra['exam'], 1):
    if isinstance(question['answer'], dict):
        objects.append(('exam-'+str(i), question['answer']))
for label, answer in objects:
    prefix = 'c-programming/examples/'+label+'/'
    files = dict(answer.get('files', {}))
    files.update({'main.c': answer['code'], 'stdin.txt': answer['stdin'],
                  'stdout.txt': answer['stdout'], 'stderr.txt': answer.get('stderr', ''),
                  'exit-code.txt': str(answer.get('exitCode', 0))+'\n'})
    for name, text in files.items():
        entries[prefix+name] = text.encode('utf8')
entries['c-programming/README.md'] = '''# C 语言教材配套源码

AI 编写；代码 MIT，原创说明 CC0-1.0。
project/ 是完整成绩管理器，按其中 README 构建。
examples/ 每个目录是一个独立完整程序；不要把多个 main.c 一起链接。

进入某个案例目录，macOS 可将 gcc 换成 clang：

gcc -std=c17 -Wall -Wextra -Wpedantic main.c -o example
./example < stdin.txt

MSYS2 也可用 ./example.exe。stdout.txt、stderr.txt、exit-code.txt 是预期，
不属于要编译的代码。部分案例故意拒绝非法输入，会以非零状态结束，
例如显示 invalid；这是已定义的错误处理，不是运行未定义行为。
其他 .txt 文件是该案例要读取的固定夹具，请保持在案例当前目录。
全书正文和答案见同版 C-Programming.md；每次只编译当前案例。
'''.encode('utf8')
buffer = io.BytesIO()
with zipfile.ZipFile(buffer, 'w', zipfile.ZIP_DEFLATED) as archive:
    for name, data in sorted(entries.items()):
        info = zipfile.ZipInfo(name, (2000, 1, 1, 0, 0, 0))
        info.compress_type = zipfile.ZIP_DEFLATED
        info.create_system = 3
        info.external_attr = 0o100644 << 16
        archive.writestr(info, data)
result = buffer.getvalue()
if '--check' in sys.argv:
    assert OUTPUT.exists() and OUTPUT.read_bytes() == result, 'C source archive is stale'
else:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_bytes(result)
print('C source archive: %d independent cases plus complete project.' % len(objects))
