"""Build finite, authored Python execution replays for the browser.

No browser interpreter or arbitrary input execution. sys.settrace line events
are recorded BEFORE the highlighted line executes. Every example runs in a fresh
working directory, not a sandbox for untrusted code.
"""
import contextlib
import io
import itertools
import json
import os
from pathlib import Path
import sys
from tempfile import TemporaryDirectory

ROOT = Path(__file__).resolve().parents[1]
FILENAME = '<python-lesson>'


def display(value):
    """Stable representations of lesson values, including unordered sets."""
    if isinstance(value, set):
        return '{' + ', '.join(sorted(display(v) for v in value)) + '}' if value else 'set()'
    if isinstance(value, list):
        return '[' + ', '.join(display(v) for v in value) + ']'
    if isinstance(value, dict):
        return '{' + ', '.join(f'{display(k)}: {display(v)}' for k, v in value.items()) + '}'
    return repr(value)


def replay(code, watch):
    output = io.StringIO()
    states = []
    namespace = {'__name__': '__main__'}

    def snapshot(frame, line):
        values = {}
        for name in watch:
            if name in frame.f_locals:
                value = frame.f_locals[name]
                scope = frame.f_code.co_name
            elif name in frame.f_globals:
                value = frame.f_globals[name]
                scope = '<module>'
            else:
                continue
            values[name] = {'value': display(value), 'type': type(value).__name__, 'scope': scope}
        return {'line': line, 'scope': frame.f_code.co_name, 'variables': values, 'stdout': output.getvalue()}

    def trace(frame, event, arg):
        if frame.f_code.co_filename != FILENAME:
            return None
        if event == 'line':
            if len(states) >= 250:
                raise RuntimeError('Authored replay exceeded 250 steps')
            states.append(snapshot(frame, frame.f_lineno))
        elif event == 'return' and frame.f_code.co_name == '<module>':
            states.append(snapshot(frame, None))
        return trace

    previous_dir = Path.cwd()
    previous_trace = sys.gettrace()
    try:
        with TemporaryDirectory(prefix='python-replay-') as folder:
            os.chdir(folder)
            with contextlib.redirect_stdout(output):
                sys.settrace(trace)
                try:
                    exec(compile(code, FILENAME, 'exec'), namespace)
                finally:
                    sys.settrace(previous_trace)
    finally:
        os.chdir(previous_dir)
    assert states and states[-1]['line'] is None
    return {'code': code, 'steps': states, 'stdout': output.getvalue()}


def generate():
    book = json.loads((ROOT / 'book.json').read_text(encoding='utf-8'))
    all_lessons = {}
    for chapter in book['chapters']:
        for lesson_id in chapter['lessons']:
            lesson = json.loads((ROOT / 'lessons' / f'{lesson_id}.json').read_text(encoding='utf-8'))
            visual = lesson['interactiveVisual']
            controls = visual['controls']
            cases = {}
            for indices in itertools.product(*(range(len(c['values'])) for c in controls)):
                code = visual['codeTemplate']
                for control, index in zip(controls, indices):
                    code = code.replace('{{' + control['name'] + '}}', repr(control['values'][index]))
                assert '{{' not in code, lesson_id
                case = replay(code, visual['watch'])
                # Baseline is independently authored and checked by verify.py.
                if list(indices) == [c['defaultIndex'] for c in controls]:
                    assert code == visual['experiment']['code'], lesson_id
                    assert case['stdout'] == visual['experiment']['stdout'], lesson_id
                cases['.'.join(map(str, indices))] = case
            all_lessons[lesson_id] = cases
    return {'version': book['version'], 'lessons': all_lessons}


if __name__ == '__main__':
    data = generate()
    target = ROOT / 'experiments.generated.json'
    content = json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n'
    count = sum(len(cases) for cases in data['lessons'].values())
    if '--check' in sys.argv:
        if not target.exists() or target.read_text(encoding='utf-8') != content:
            raise SystemExit('Python replays are stale; run npm run build:python')
    else:
        target.write_text(content, encoding='utf-8')
    print(f'Python replays: {len(data["lessons"])} lessons, {count} parameter combinations; generated states match execution.')
