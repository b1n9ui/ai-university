"""Independent arithmetic, format, file-boundary and CLI regression checks."""
from contextlib import redirect_stderr, redirect_stdout
import io
from pathlib import Path
import subprocess
import sys
from tempfile import TemporaryDirectory
import unittest

from expense_report import format_cents, load_records, main, summarize


class ExpenseTests(unittest.TestCase):
    def read_text(self, text):
        with TemporaryDirectory() as folder:
            path = Path(folder) / "data.csv"
            path.write_text(text, encoding="utf-8")
            return load_records(path)

    def test_independent_totals(self):
        records = [("餐饮", 1250), ("交通", 300), ("餐饮", 800)]
        self.assertEqual(summarize(records), {"餐饮": 2050, "交通": 300})
        self.assertEqual(records, [("餐饮", 1250), ("交通", 300), ("餐饮", 800)])

    def test_empty_table(self):
        self.assertEqual(self.read_text("category,cents\n"), [])
        self.assertEqual(summarize([]), {})

    def test_exact_large_amount(self):
        self.assertEqual(format_cents(10**20 + 1), "1000000000000000000.01")

    def test_display_boundaries(self):
        for value, expected in [(0, "0.00"), (1, "0.01"), (99, "0.99"), (100, "1.00"), (305, "3.05")]:
            with self.subTest(value=value):
                self.assertEqual(format_cents(value), expected)

    def test_quoted_comma_and_trim(self):
        self.assertEqual(self.read_text('category,cents\n"tea, milk",300\n a , 1 \n'), [("tea, milk", 300), ("a", 1)])

    def test_invalid_amounts(self):
        for value in ["0", "-1", "+1", "1.5", "nan", "", "１２"]:
            with self.subTest(value=value), self.assertRaisesRegex(ValueError, "正整数分"):
                self.read_text(f"category,cents\na,{value}\n")

    def test_invalid_headers(self):
        for text in ["", "name,cents\na,1\n", "cents,category\n1,a\n", "category,category\na,1\n"]:
            with self.subTest(text=text), self.assertRaisesRegex(ValueError, "表头"):
                self.read_text(text)

    def test_missing_or_extra_fields(self):
        for line in ["a\n", "a,1,extra\n"]:
            with self.subTest(line=line), self.assertRaisesRegex(ValueError, "列数"):
                self.read_text("category,cents\n" + line)

    def test_bad_categories(self):
        for line in [",1\n", "  ,1\n", '"a\nb",1\n', '"a\tb",1\n']:
            with self.subTest(line=line), self.assertRaisesRegex(ValueError, "分类"):
                self.read_text("category,cents\n" + line)

    def test_no_partial_report(self):
        with TemporaryDirectory() as folder:
            path = Path(folder) / "bad.csv"
            path.write_text("category,cents\na,1\nb,-2\n", encoding="utf-8")
            out, err = io.StringIO(), io.StringIO()
            with redirect_stdout(out), redirect_stderr(err):
                status = main([str(path)])
            self.assertEqual(status, 2)
            self.assertEqual(out.getvalue(), "")
            self.assertIn("第 3 行", err.getvalue())

    def test_missing_file(self):
        with TemporaryDirectory() as folder:
            out, err = io.StringIO(), io.StringIO()
            with redirect_stdout(out), redirect_stderr(err):
                status = main([str(Path(folder) / "missing.csv")])
            self.assertEqual(status, 2)
            self.assertEqual(out.getvalue(), "")
            self.assertTrue(err.getvalue().startswith("错误："))

    def test_invalid_utf8(self):
        with TemporaryDirectory() as folder:
            path = Path(folder) / "bad.csv"
            path.write_bytes(b"\xff")
            with self.assertRaises(UnicodeError):
                load_records(path)

    def test_cli_sample(self):
        project = Path(__file__).resolve().parent
        result = subprocess.run([sys.executable, str(project / "expense_report.py"), str(project / "sample.csv")], capture_output=True, text=True, encoding="utf-8", timeout=5)
        self.assertEqual(result.returncode, 0)
        self.assertEqual(result.stdout, "总额: 23.50 元\n交通: 3.00 元\n餐饮: 20.50 元\n")
        self.assertEqual(result.stderr, "")

    def test_cli_help(self):
        project = Path(__file__).resolve().parent
        result = subprocess.run([sys.executable, str(project / "expense_report.py"), "--help"], capture_output=True, text=True, encoding="utf-8", timeout=5)
        self.assertEqual(result.returncode, 0)
        self.assertIn("category,cents", result.stdout)

    def test_import_has_no_output(self):
        project = Path(__file__).resolve().parent
        result = subprocess.run([sys.executable, "-c", "import expense_report"], cwd=project, capture_output=True, text=True, timeout=5)
        self.assertEqual((result.returncode, result.stdout, result.stderr), (0, "", ""))


if __name__ == "__main__":
    unittest.main()
