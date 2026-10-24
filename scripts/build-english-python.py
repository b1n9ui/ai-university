"""Generate replays from fixed English examples, not from translated trace text."""
import importlib.util
import json
from pathlib import Path
import sys
ROOT = Path(__file__).resolve().parents[1]
if sys.version_info[:2] != (3, 14):
    raise SystemExit('English replay generation requires CPython 3.14.')
spec = importlib.util.spec_from_file_location('authored_replays', ROOT / 'packages/content/python/tools/traces.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
module.ROOT = ROOT / 'packages/content/translations/en/python-introduction/resolved'
data = module.generate()
(module.ROOT / 'experiments.generated.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',', ':'))+'\n',encoding='utf-8')
print(f'English Python replays: {len(data["lessons"])} lessons, {sum(len(v) for v in data["lessons"].values())} executed combinations.')
