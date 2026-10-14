"""Independent expectations for replay semantics and lesson boundaries."""
import json
import unittest
from traces import ROOT, replay


class ReplayTests(unittest.TestCase):
    def test_line_points_to_next_instruction(self):
        case = replay('count = 3\ncount = count + 2\nprint(count)\n', ['count'])
        self.assertEqual([s['line'] for s in case['steps']], [1, 2, 3, None])
        self.assertEqual(case['steps'][0]['variables'], {})
        self.assertEqual(case['steps'][1]['variables']['count']['value'], '3')
        self.assertEqual(case['steps'][2]['variables']['count']['value'], '5')
        self.assertEqual(case['steps'][2]['stdout'], '')
        self.assertEqual(case['steps'][3]['stdout'], '5\n')

    def test_branch_skips_unselected_line(self):
        case = replay('money = 4\nif money >= 5:\n    print("yes")\nelse:\n    print("no")\n', ['money'])
        self.assertEqual([s['line'] for s in case['steps']], [1, 2, 5, None])
        self.assertEqual(case['stdout'], 'no\n')

    def test_countdown_and_zero(self):
        code = 'remaining = 3\nwhile remaining > 0:\n    print(remaining)\n    remaining = remaining - 1\nprint("done")\n'
        case = replay(code, ['remaining'])
        conditions = [s['variables']['remaining']['value'] for s in case['steps'] if s['line'] == 2]
        self.assertEqual(conditions, ['3', '2', '1', '0'])
        self.assertEqual(case['stdout'], '3\n2\n1\ndone\n')
        zero = replay(code.replace('remaining = 3', 'remaining = 0'), ['remaining'])
        self.assertEqual([s['line'] for s in zero['steps']], [1, 2, 5, None])

    def test_function_enters_local_scope_then_returns(self):
        case = replay('def double(number):\n    return number * 2\n\nresult = double(3)\nprint(result)\n', ['number', 'result'])
        local = next(s for s in case['steps'] if s['scope'] == 'double')
        self.assertEqual(local['variables']['number']['value'], '3')
        self.assertEqual(local['line'], 2)
        final = case['steps'][-1]
        self.assertEqual(final['variables']['result']['value'], '6')
        self.assertNotIn('number', final['variables'])
        self.assertEqual(final['stdout'], '6\n')

    def test_historical_mutation_is_not_rewritten(self):
        case = replay('items = [1]\nother = items\nother.append(2)\nprint(items)\n', ['items', 'other'])
        before_append = next(s for s in case['steps'] if s['line'] == 3)
        self.assertEqual(before_append['variables']['items']['value'], '[1]')
        self.assertEqual(case['steps'][-1]['variables']['items']['value'], '[1, 2]')

    def test_file_examples_start_fresh(self):
        code = 'with open("example.txt", "w", encoding="utf-8") as file:\n    file.write("你好")\nwith open("example.txt", "r", encoding="utf-8") as file:\n    text = file.read()\nprint(text)\n'
        self.assertEqual(replay(code, ['text']), replay(code, ['text']))
        self.assertEqual(replay(code, ['text'])['stdout'], '你好\n')

    def test_every_candy_combination_against_counting(self):
        data = json.loads((ROOT / 'experiments.generated.json').read_text(encoding='utf-8'))
        cases = data['lessons']['numbers']
        for total in range(21):
            for size in range(1, 6):
                # Repeated removal gives an independent, hand-countable oracle.
                full, remaining = 0, total
                while remaining >= size:
                    full += 1
                    remaining -= size
                case = cases[f'{total}.{size - 1}']
                self.assertEqual(case['stdout'], f'{full}\n{remaining}\n')
                final = case['steps'][-1]['variables']
                self.assertEqual(final['bags']['value'], str(full))
                self.assertEqual(final['left']['value'], str(remaining))

    def test_all_replays_have_valid_lines_and_final_output(self):
        data = json.loads((ROOT / 'experiments.generated.json').read_text(encoding='utf-8'))
        for lesson in data['lessons'].values():
            for case in lesson.values():
                self.assertEqual(case['steps'][-1]['line'], None)
                self.assertEqual(case['steps'][-1]['stdout'], case['stdout'])
                for step in case['steps'][:-1]:
                    self.assertTrue(1 <= step['line'] <= len(case['code'].splitlines()))


if __name__ == '__main__':
    unittest.main(verbosity=2)
