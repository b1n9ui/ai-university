"""Summarize small UTF-8 CSV files; amounts are positive integer cents."""
import argparse
import csv
from pathlib import Path
import sys


def load_records(path):
    """Return validated (category, cents) pairs, or reject the entire file."""
    records = []
    with Path(path).open(encoding="utf-8", newline="") as file:
        reader = csv.DictReader(file, strict=True)
        if reader.fieldnames != ["category", "cents"]:
            raise ValueError("表头必须为 category,cents")
        for row in reader:
            # line_num counts physical lines; for quoted multiline fields it is
            # the ending line of the record. Blank physical lines are skipped.
            line = reader.line_num
            if None in row or any(value is None for value in row.values()):
                raise ValueError(f"第 {line} 行：列数必须为 2")
            category = row["category"].strip()
            amount = row["cents"].strip()
            if not category:
                raise ValueError(f"第 {line} 行：分类不能为空")
            if any(char in category for char in "\r\n\t"):
                raise ValueError(f"第 {line} 行：分类不能含换行或制表符")
            if not amount.isascii() or not amount.isdigit():
                raise ValueError(f"第 {line} 行：金额必须为正整数分")
            cents = int(amount)
            if cents <= 0:
                raise ValueError(f"第 {line} 行：金额必须为正整数分")
            records.append((category, cents))
    return records


def summarize(records):
    """Aggregate records already validated by load_records, without mutation."""
    totals = {}
    for category, cents in records:
        totals[category] = totals.get(category, 0) + cents
    return totals


def format_cents(cents):
    """Format nonnegative integer cents exactly, without float conversion."""
    return f"{cents // 100}.{cents % 100:02d}"


def main(argv=None):
    parser = argparse.ArgumentParser(description="按分类汇总本地 CSV 消费记录")
    parser.add_argument("file", type=Path, help="UTF-8 CSV，表头为 category,cents")
    args = parser.parse_args(argv)
    try:
        records = load_records(args.file)
    except (OSError, UnicodeError, ValueError, csv.Error) as error:
        print(f"错误：{error}", file=sys.stderr)
        return 2
    totals = summarize(records)
    print(f"总额: {format_cents(sum(totals.values()))} 元")
    for category in sorted(totals):
        print(f"{category}: {format_cents(totals[category])} 元")
    return 0


if __name__ == "__main__":
    sys.exit(main())
