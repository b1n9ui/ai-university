"""Execute fixed authored snippets and compare exact output, in fresh temp dirs.

Temporary directories prevent exercise file collisions; they are not a security
sandbox. Only run this on contribution code you have inspected and trust.
"""
import json
from pathlib import Path
import subprocess
import sys
from tempfile import TemporaryDirectory

ROOT = Path(__file__).resolve().parents[1]
book = json.loads((ROOT / "book.json").read_text(encoding="utf-8"))
cases = []
for chapter in book["chapters"]:
    for lesson_id in chapter["lessons"]:
        lesson = json.loads((ROOT / "lessons" / f"{lesson_id}.json").read_text(encoding="utf-8"))
        cases.append((f"{lesson_id}:experiment", lesson["interactiveVisual"]["experiment"]))
        for index, example in enumerate(lesson["workedExamples"], 1):
            cases.append((f"{lesson_id}:example-{index}", example["answer"]))
        for exercise in lesson["practice"]:
            cases.append((exercise["id"], exercise["answer"]))
supplements = json.loads((ROOT / "supplements.json").read_text(encoding="utf-8"))
for item in [q for review in supplements["chapterReviews"] for q in review["questions"]] + supplements["exam"]:
    cases.append((item["id"], item["answer"]))
for name, case in cases:
    with TemporaryDirectory(prefix="python-textbook-") as folder:
        script = Path(folder) / "exercise.py"
        script.write_text(case["code"], encoding="utf-8")
        try:
            result = subprocess.run([sys.executable, "-I", "-X", "utf8", str(script)], cwd=folder, input=case["stdin"], capture_output=True, text=True, encoding="utf-8", timeout=5)
        except subprocess.TimeoutExpired:
            raise SystemExit(f"{name}: exceeded 5 seconds")
        if result.returncode != 0 or result.stdout != case["stdout"] or result.stderr:
            raise SystemExit(f"{name}: exit={result.returncode}\nexpected={case['stdout']!r}\nactual={result.stdout!r}\nstderr={result.stderr}")
# Separate two-file module exercise verifies import and entry-point behavior.
with TemporaryDirectory(prefix="python-module-") as folder:
    for filename in ("helpers.py", "main.py"):
        (Path(folder) / filename).write_text((ROOT / "project" / filename).read_text(encoding="utf-8"), encoding="utf-8")
    result = subprocess.run([sys.executable, "-X", "utf8", "main.py"], cwd=folder, capture_output=True, text=True, encoding="utf-8", timeout=5)
    if (result.returncode, result.stdout, result.stderr) != (0, "10\n", ""):
        raise SystemExit(f"two-file module exercise failed: {result}")
print(f"Python {sys.version.split()[0]}: {len(cases)} exact-output cases and two-file import exercise passed.")
subprocess.run([sys.executable, "-X", "utf8", "-m", "unittest", "discover", "-s", str(ROOT / "project"), "-v"], check=True)
