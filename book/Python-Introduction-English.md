AI UNIVERSITY / OTHER SUBJECTS

# Introduction to Python Programming

Introduction to Programming with Python

Version 0.2.1 · AI-authored · Text CC0 / code MIT

Readers with no programming experience. Observe the web replays first, then use Section 1.1 to learn how to save files and run programs.

General Python 3.9+ syntax and standard library, checked against the Python 3.13 documentation without relying on newer exclusive features. Web execution replays are generated with CPython 3.14; language coverage and replay runtime are recorded separately.

Contributed by aby0120

Print / save PDF [Open interactive textbook](./#/book/python-introduction)



## Contents



### Start programming


- [1.1 Run your first program](#first-program)
- [1.2 Give values names](#names-types)
- [1.3 Numbers and arithmetic](#numbers)
- [1.4 Read text and quantities](#strings-input)



### Control execution


- [2.1 Conditions and branches](#conditions)
- [2.2 for loops and counting](#for-range)
- [2.3 while loops and countdowns](#while-stop)
- [2.4 Errors and debugging](#debugging)



### Organize data


- [3.1 Lists and shopping lists](#lists)
- [3.2 Dictionaries and key lookup](#dictionaries)
- [3.3 Tuples and sets: records and distinct values](#tuples-sets)
- [3.4 Comprehensions and data processing](#comprehensions)



### Organize programs


- [4.1 Functions, parameters, and return values](#functions)
- [4.2 Arguments and default values](#arguments)
- [4.3 Modules: reusable tools](#modules)
- [4.4 Exceptions and input validation](#exceptions)



### Build an application


- [5.1 Text files and paths](#text-files)
- [5.2 JSON and CSV: structures and tables](#json-csv)
- [5.3 Tests and boundary cases](#testing)
- [5.4 Capstone: a local expense reporter](#capstone)

CHAPTER 1

## Start programming

Run scripts, distinguish text from numbers, and perform basic input and output.



SECTION 1.1

## Run your first program

A program is a sequence of instructions. Start by displaying two lines in order.



### Intuition

Think of a checklist: do the first item, then the second.



### Learning objectives


- Display one message
- Save two lines as a program
- Change one message at a time



### Display one message

Read print("Hello") as ‘display Hello’. Python provides print to display values. Parentheses hold the content, and matching straight quotes mark it as text. The quotes themselves are not printed. Try the example before memorizing terminology.



### Save two lines as a program

Use the web demonstration to inspect execution order. To run the example on your computer, follow the four setup steps below and save both lines in hello.py. After changing code, save before running it again.



### Change one message at a time

Python reads these lines from top to bottom: the first displays Hello; the second displays I am learning Python. Change only the second message and run again: the first should stay the same. A comment starts with # and is skipped during execution. Use straight quotes and ordinary code punctuation.



### Run locally


- Install the interpreter: open python.org, choose Downloads, and install a supported Python 3 release. The interpreter runs your code. If its command is unavailable, check that installation completed.
- Save the code: create a practice folder and a plain-text file in a code editor. Enter the two lines above and save as hello.py. The name must end in .py, not .py.txt. Do not save code as a Word document.
- Open your practice folder in a terminal. On macOS, open Terminal; on Windows, open Terminal or PowerShell. Type cd, a space, and your folder's full path, then press Enter. Put paths containing spaces inside straight double quotes. cd changes the current directory.
- Run and check: on macOS/Linux use python3 hello.py; on Windows usually use py -3 hello.py. Expect Hello and I am learning Python on separate lines. Change the second message, save, and run again. If hello.py cannot be found, check the current directory and filename.



### Definition and conditions

print(...) displays its contents. These statements execute from top to bottom.


- Each example runs independently from the beginning. Start with the stated inputs, then change one thing.



### How it works


- The first print displays Hello.
- The second displays I am learning Python.
- Each print ends its output with a newline by default.



### Concept check

What does print("Hello") display?


- A. "Hello" (including quotes)
- B. Hello (without quotes)
- C. print (the instruction's name)

Answer: B

Quotes mark text; the output contains only the content inside them.


- A: Quotes are code delimiters, not part of this output.
- B: Correct: print displays the quoted content.
- C: print names the instruction, not the content to display.



### Interactive activity

Will changing the first greeting change the second message?

[Open this activity](./#/book/python-introduction/first-program/experiment)Code

~~~
print('Hello')
print("I am learning Python")

~~~



Expected output

~~~
Hello
I am learning Python

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Choose another greeting and start again.



### Example 1: Your first greeting

Display two messages and check their order.


- The first print displays Hello.
- The second displays I am learning Python.
- Each print ends its output with a newline by default.

Code

~~~
print("Hello")
print("I am learning Python")

~~~



Expected output

~~~
Hello
I am learning Python

~~~





### Example 2: A short checklist

Display two things you want to do today.


- The line starting with # is a comment and produces no output.
- The two print statements produce the output.

Code

~~~
# Today's checklist
print("Open the textbook")
print("Try an example")

~~~



Expected output

~~~
Open the textbook
Try an example

~~~





### Common mistakes



#### The quotes appear in the output too.

Quotes mark the boundaries of text. print displays the content inside them.



#### Comments execute like ordinary statements.

A comment beginning with # is for readers and produces no output.



### Exercises and solutions



#### Exercise 1

Predict the output of print("Good morning").

Hint: The quotes are not printed.


- Display the text inside the quotes.

Code

~~~
print("Good morning")

~~~



Expected output

~~~
Good morning

~~~







#### Exercise 2

Display First step, then Second step.

Hint: Use two print statements.


- Output follows the order of the statements.

Code

~~~
print("First step")
print("Second step")

~~~



Expected output

~~~
First step
Second step

~~~







#### Exercise 3

Change the greeting to Hello, Lin.

Hint: Change only the quoted content.


- Keep print, the parentheses, and matching quotes.

Code

~~~
print("Hello, Lin")

~~~



Expected output

~~~
Hello, Lin

~~~







#### Exercise 4

A comment is followed by print("Done"). How many lines are displayed?

Hint: Comments do not execute.


- One line is displayed: Done.

Code

~~~
# This is a comment
print("Done")

~~~



Expected output

~~~
Done

~~~







### Prerequisites

None



### Sources


- Python 3.13 Tutorial



SECTION 1.2

## Give values names

Name a value so the next line can find it.



### Intuition

Attach an apple-count label to a basket holding 3 apples.



### Learning objectives


- Name a number
- Updating a name replaces its value
- Numbers and text serve different purposes



### Name a number

apples = 3 associates the name apples with the number 3. Assignment evaluates the right side first, then updates the name on the left. print(apples) reads that value; print("apples") instead displays the literal word.



### Updating a name replaces its value

In apples = apples + 2, the right side reads the old value 3 and adds 2 to obtain 5. Assignment then makes apples refer to 5. This is an instruction, not a mathematical equation that must hold forever. Follow the variable cards one line at a time.



### Numbers and text serve different purposes

3 is a number for arithmetic; "3" is text. Use a number for a count and text for a name. Names are case-sensitive: apples and Apples differ. This book uses lowercase English names and underscores between words, such as apple_count.



### Definition and conditions

Assignment evaluates the right side before updating the left-hand name. A quoted name is literal text.


- Each example runs independently from the beginning. Start with the stated inputs, then change one thing.



### How it works


- apples first refers to 3.
- Evaluate 3 + 2 on the right, then update apples.
- print reads the updated value 5.



### Concept check

After apples = 3, what does print("apples") display?


- A. 3 (always reading the variable)
- B. apples (literal text)
- C. Nothing (variables cannot be displayed)

Answer: B

Quotes make apples ordinary text.


- A: A quoted name is not looked up as a variable.
- B: Correct: the quoted text is displayed as written.
- C: print can display both numbers and text.



### Interactive activity

Starting with 3 apples and adding 2, what value will the variable hold?

[Open this activity](./#/book/python-introduction/names-types/experiment)Code

~~~
apples = 3
apples = apples + 2
print(apples)

~~~



Expected output

~~~
5

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Start with 0 and watch the right side evaluate before assignment.



### Example 1: Two more apples

Start with 3 apples, add 2, and display the new total.


- apples first refers to 3.
- Evaluate 3 + 2 on the right, then update apples.
- print reads the updated value 5.

Code

~~~
apples = 3
apples = apples + 2
print(apples)

~~~



Expected output

~~~
5

~~~





### Example 2: A variable or literal text?

Compare apples with and without quotes.


- Without quotes, read the variable.
- With quotes, display the text literally.

Code

~~~
apples = 3
print(apples)
print("apples")

~~~



Expected output

~~~
3
apples

~~~





### Common mistakes



#### print("apples") reads the apple count.

Quotes produce the word apples. Use print(apples) to read the variable.



#### Updating a automatically updates b if b previously received a's value.

b = a reads the value at that moment. Later assignment of a number to a does not recompute b.



### Exercises and solutions



#### Exercise 1

After count = 4, what does print(count) display?

Hint: Read the value associated with the name.


- count refers to 4.

Code

~~~
count = 4
print(count)

~~~



Expected output

~~~
4

~~~







#### Exercise 2

Increase count from 4 to 5.

Hint: Read its old value and add 1.


- The right side gives 5; assignment updates the name.

Code

~~~
count = 4
count = count + 1
print(count)

~~~



Expected output

~~~
5

~~~







#### Exercise 3

Assign the text Lin to name, then display it.

Hint: Text needs quotes.


- Use quotes when assigning the text, but not when reading the variable.

Code

~~~
name = "Lin"
print(name)

~~~



Expected output

~~~
Lin

~~~







#### Exercise 4

After a = 2; b = a; a = 5, what is b?

Hint: When b was assigned, a was still 2.


- b refers to 2.
- Updating a later does not recompute b.

Code

~~~
a = 2
b = a
a = 5
print(a)
print(b)

~~~



Expected output

~~~
5
2

~~~







### Prerequisites

Run your first program



### Sources


- Python 3.13 Tutorial
- Built-in Types



SECTION 1.3

## Numbers and arithmetic

For the same candies, you can ask for an average or for full bags and leftovers.



### Intuition

17 candies packed 5 per bag fill 3 bags, with 2 left over.



### Learning objectives


- Use familiar arithmetic
- Find full bags and leftovers
- Reconstruct the original total



### Use familiar arithmetic

Python uses + for addition, - for subtraction, * for multiplication, and / for division. For example, 3 * 5 gives 15 and 17 / 5 gives 3.4. Do not quote numbers. print(3 * 5) calculates before displaying. Multiplication and division precede addition and subtraction; use parentheses to change the order, as in (2 + 3) * 4.



### Find full bags and leftovers

For full bags only, 17 // 5 gives 3. The two slashes perform floor division. For these nonnegative quantities, this is the full-bag count. 17 % 5 gives the remainder 2; here % does not mean percent. Three bags use 15 candies, leaving 17 - 15 = 2.



### Reconstruct the original total

Multiply full bags by capacity and add leftovers: 3 * 5 + 2 = 17. If 20 candies fit 5 per bag, the remainder is 0. Change the total, then the capacity, one at a time. Counts are nonnegative integers and bag capacity must be positive.



### Definition and conditions

For this nonnegative-integer packing model, // gives full bags and % gives leftovers: bags times capacity plus remainder equals total.


- Counts are nonnegative integers; bag capacity is an integer greater than 0.
- The divisor for /, //, and % must not be 0.



### How it works


- total refers to 17 candies; size refers to capacity 5.
- Use // to obtain 3 full bags.
- Use % to obtain remainder 2; check 3 * 5 + 2 = 17.



### Concept check

Which operation finds leftovers when packing 17 candies with capacity 5?


- A. 17 / 5
- B. 17 % 5
- C. 17 // 5

Answer: B

A remainder counts what is left after filling all possible complete bags.


- A: / gives the average 3.4, not the leftovers.
- B: Correct: % gives the remaining 2 candies.
- C: // gives 3 full bags, not the remainder.



### Interactive activity

Predict the full bags and remainder for 17 candies with capacity 5, then change the total to 20.

[Open this activity](./#/book/python-introduction/numbers/experiment)Code

~~~
total = 17
size = 5
bags = total // size
left = total % size
print(bags)
print(left)

~~~



Expected output

~~~
3
2

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Try 3 candies with capacity 5. Predict whether the full-bag count is 0.



### Example 1: Pack 17 candies

With capacity 5, display full bags and leftovers.


- total refers to 17 candies; size refers to capacity 5.
- Use // to obtain 3 full bags.
- Use % to obtain remainder 2; check 3 * 5 + 2 = 17.

Code

~~~
total = 17
size = 5
print(total // size)
print(total % size)

~~~



Expected output

~~~
3
2

~~~





### Example 2: No leftovers

How many candies remain after packing 20 with capacity 5?


- 20 // 5 gives 4 full bags.
- 20 % 5 gives 0: no leftovers.

Code

~~~
total = 20
size = 5
print(total // size)
print(total % size)

~~~



Expected output

~~~
4
0

~~~





### Common mistakes



#### Both // and / give full bags.

Ordinary division gives 17 / 5 = 3.4. In this model, // gives 3 full bags.



#### % always means percentage in code.

For these integer operands, % gives the remainder: 17 % 5 is 2.



### Exercises and solutions



#### Exercise 1

How many candies are in 3 bags with 5 per bag?

Hint: Write multiplication with *.


- 3 * 5 = 15.

Code

~~~
print(3 * 5)

~~~



Expected output

~~~
15

~~~







#### Exercise 2

Pack 12 candies with capacity 5. Find full bags and leftovers.

Hint: Draw two full bags first.


- Two bags use 10 candies.
- There are 2 left over.

Code

~~~
print(12 // 5)
print(12 % 5)

~~~



Expected output

~~~
2
2

~~~







#### Exercise 3

Add 3 candies to an initial 17, then pack with capacity 5. Find the remainder.

Hint: Calculate the new total first.


- 17 + 3 = 20.
- 20 % 5 = 0.

Code

~~~
total = 17 + 3
print(total % 5)

~~~



Expected output

~~~
0

~~~







#### Exercise 4

With only 3 candies and capacity 5, can you fill a bag?

Hint: Less than one bag gives a full-bag count of 0.


- 3 // 5 = 0.
- 3 % 5 = 3: all candies remain unpacked.

Code

~~~
print(3 // 5)
print(3 % 5)

~~~



Expected output

~~~
0
3

~~~







### Optional: Further reading: negative numbers and decimals

This packing model uses only nonnegative integers. Negative floor division rounds downward: -3 // 2 is -2, so the packing intuition cannot be applied directly. Floating-point arithmetic can also have representation error: 0.1 + 0.2 need not equal 0.3 exactly. The project stores amounts as integer cents; Decimal is an option for later study of decimal arithmetic.



### Prerequisites

Give values names



### Sources


- Python 3.13 Tutorial
- Floating-Point Arithmetic



SECTION 1.4

## Read text and quantities

input receives text. Convert it to a number before doing arithmetic.



### Intuition

Typing 3 first supplies the character 3; conversion makes it a quantity.



### Learning objectives


- Read one line from the user
- Convert a quantity from text to a number
- Insert variables into a message



### Read one line from the user

name = input() waits for a line. Pressing Enter delivers the text to name, without the final newline. You can first display print("What is your name?") to explain what to enter. Text values are called strings.



### Convert a quantity from text to a number

Read count = int(input()) in two stages: input() receives text, then int(...) converts integer text such as "3" to the number 3. Now count + 2 can increase a quantity. Text such as "three" or "3.5" fails this integer conversion. Lesson 4.4 explains how to handle such errors.



### Insert variables into a message

In print(f"Hello, {name}"), f marks a string whose brace fields are filled with values. {name} is replaced by the variable's value. This basic form is enough for now. To display a count by itself, print(count) also works.



### Definition and conditions

input() reads a string; int(...) converts valid integer text to a number; an f-string inserts values using {variable_name}.


- int requires valid integer text. Empty text, "three", and "3.5" cannot be converted directly to integers.



### How it works


- Display the question first.
- input receives Lin.
- {name} is replaced by Lin.



### Concept check

After input reads "3", how can you add 2 to the quantity?


- A. Add 2 directly to the text
- B. Convert to a number with int first
- C. Quote 2 too, then add the strings

Answer: B

Convert integer text to a number before doing arithmetic.


- A: A string and a number cannot be added this way.
- B: Correct: int("3") gives the number 3.
- C: "3" + "2" gives "32", not a numerical sum.



### Interactive activity

Convert the text "3" to a number and add 2. What is the result?

[Open this activity](./#/book/python-introduction/strings-input/experiment)Code

~~~
text = '3'
count = int(text)
print(count + 2)

~~~



Expected output

~~~
5

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Choose "0" and inspect the quotes on the variable cards before and after conversion. This demonstration uses a text parameter in place of keyboard input.



### Example 1: Meet a classmate

Enter Lin and display a greeting.


- Display the question first.
- input receives Lin.
- {name} is replaced by Lin.

Code

~~~
print("What is your name?")
name = input()
print(f"Hello, {name}")

~~~



Standard input

~~~
Lin

~~~



Expected output

~~~
What is your name?
Hello, Lin

~~~





### Example 2: Add two more

Enter 3 and display the quantity after adding 2.


- input receives the text "3".
- int converts it to the number 3.
- Adding 2 gives 5.

Code

~~~
count = int(input())
print(count + 2)

~~~



Standard input

~~~
3

~~~



Expected output

~~~
5

~~~





### Common mistakes



#### input automatically turns text that looks numeric into a number.

input returns a string. Use int before integer arithmetic.



#### Adding two quoted quantities gives their numerical sum.

"3" + "2" concatenates to "32". Use numbers for arithmetic.



### Exercises and solutions



#### Exercise 1

Enter Wang and display the name unchanged.

Hint: Read with input, then display with print.


- name receives the text.

Code

~~~
name = input()
print(name)

~~~



Standard input

~~~
Wang

~~~



Expected output

~~~
Wang

~~~







#### Exercise 2

Enter 4 and display twice its value.

Hint: Convert with int.


- 4 * 2 = 8.

Code

~~~
count = int(input())
print(count * 2)

~~~



Standard input

~~~
4

~~~



Expected output

~~~
8

~~~







#### Exercise 3

Enter Lin and display Welcome, Lin.

Hint: Use f and {name} to fill the message.


- The variable's value replaces the brace field.

Code

~~~
name = input()
print(f"Welcome, {name}")

~~~



Standard input

~~~
Lin

~~~



Expected output

~~~
Welcome, Lin

~~~







#### Exercise 4

Enter 0, then add 2. What is the result?

Hint: 0 is valid integer text too.


- After conversion, 0 + 2 = 2.

Code

~~~
count = int(input())
print(count + 2)

~~~



Standard input

~~~
0

~~~



Expected output

~~~
2

~~~







### Prerequisites

Numbers and arithmetic



### Sources


- Python 3.13 Tutorial
- Built-in Functions





### Chapter review and solutions

Read quantity 3 at unit price 125 cents and display the total in cents.

Hint: Convert with int, then multiply.


- Input starts as text.
- 3 * 125 = 375 cents.

Code

~~~
count = int(input())
print(count * 125)

~~~



Standard input

~~~
3

~~~



Expected output

~~~
375

~~~



Read 12 candies and a bag size of 5. Print full bags and the remainder.

Hint: Use // and % respectively.


- Two bags use 10 candies.
- 2 candies remain.

Code

~~~
total = int(input())
print(total // 5)
print(total % 5)

~~~



Standard input

~~~
12

~~~



Expected output

~~~
2
2

~~~



CHAPTER 2

## Control execution

Read branches and loops, find boundary errors, and design stopping conditions.



SECTION 2.1

## Conditions and branches

Test a condition, then take one of two paths.



### Intuition

If you have enough money for the fare, take the bus. Otherwise, take the other path.



### Learning objectives


- Turn a question into a condition
- Write two paths with if and else
- Check the exact boundary



### Turn a question into a condition

Suppose the fare is 5 and money holds the amount you have. money >= 5 asks whether you have at least 5; >= means greater than or equal to. A comparison returns True or False. Predict the result before following the program.



### Write two paths with if and else

if condition: starts the path taken when the condition is true; else: starts the other path. After each colon, start a new line and indent the body by four spaces. Indentation groups statements into a branch. This test takes one branch: it cannot print both messages.



### Check the exact boundary

Try 6, then 4, then exactly 5. The >= comparison includes equality, so 5 is enough. Replacing it with > would reject the exact fare. Use == to compare equality; a single = assigns a value.



### Definition and conditions

An if statement runs its indented body when the condition is true. Otherwise it runs the else body. Only one branch runs.


- Keep the colon and indentation. Use = for assignment and == for equality.



### How it works


- money holds 5.
- 5 >= 5 is true, so enter the if branch.
- Skip the else branch.



### Concept check

Which condition includes having exactly 5?


- A. money > 5
- B. money >= 5
- C. money = 5

Answer: B

>= includes equality. A single = assigns a value.


- A: > requires more than 5 and excludes exactly 5.
- B: Yes. >= means at least 5.
- C: A single = assigns a value; it is not an equality test.



### Interactive activity

With exactly 5, which branch runs?

[Open this activity](./#/book/python-introduction/conditions/experiment)Code

~~~
money = 5
if money >= 5:
    print("Take the bus")
else:
    print("Not enough money")

~~~



Expected output

~~~
Take the bus

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Compare 4, 5, and 6. Which lines does the arrow skip?



### Example 1: Enough for the fare?

You have 5 and the fare is 5. Display the decision.


- money holds 5.
- 5 >= 5 is true, so enter the if branch.
- Skip the else branch.

Code

~~~
money = 5
if money >= 5:
    print("Take the bus")
else:
    print("Not enough money")

~~~



Expected output

~~~
Take the bus

~~~





### Example 2: The other branch

Test the same condition with 4.


- 4 >= 5 is false.
- Skip the if body and run the else body.

Code

~~~
money = 4
if money >= 5:
    print("Take the bus")
else:
    print("Not enough money")

~~~



Expected output

~~~
Not enough money

~~~





### Common mistakes



#### Exactly 5 satisfies money > 5.

> excludes equality. Use >= when the exact fare is enough.



#### Both the if and else bodies run.

This test takes one branch. When the condition is true, it skips else.



### Exercises and solutions



#### Exercise 1

Predict the value of 6 >= 5.

Hint: Is 6 at least 5?


- The result is True.

Code

~~~
print(6 >= 5)

~~~



Expected output

~~~
True

~~~







#### Exercise 2

With 3, display Not enough money.

Hint: Change money to 3.


- The condition is false, so enter else.

Code

~~~
money = 3
if money >= 5:
    print("Take the bus")
else:
    print("Not enough money")

~~~



Expected output

~~~
Not enough money

~~~







#### Exercise 3

Display Pass for a score of at least 60 and Practice again otherwise. Test 60.

Hint: The threshold itself passes.


- Use >= 60.
- A score of 60 enters if.

Code

~~~
score = 60
if score >= 60:
    print("Pass")
else:
    print("Practice again")

~~~



Expected output

~~~
Pass

~~~







#### Exercise 4

Test the same program with 59.

Hint: Change only the score.


- 59 < 60, so display Practice again.

Code

~~~
score = 59
if score >= 60:
    print("Pass")
else:
    print("Practice again")

~~~



Expected output

~~~
Practice again

~~~







### Prerequisites

Read text and quantities



### Sources


- Python 3.13 Tutorial
- More Control Flow Tools



SECTION 2.2

## for loops and counting

A for loop repeats an operation with a new value each time.



### Intuition

Call numbers 1, 2, and 3 without writing the same instruction three times.



### Learning objectives


- Print a sequence of numbers
- Set stop one beyond the last number
- Build a running total



### Print a sequence of numbers

for number in range(1, 4): gives number the values 1, 2, and 3 in turn. range produces integers: it includes 1 but excludes 4. The indented print(number) runs once per value, producing three lines.



### Set stop one beyond the last number

To count through 5, write range(1, 6). With one argument, range(3) starts at 0 and produces 0, 1, 2. Here we use an explicit start and stop. After the loop, execution continues with the next unindented statement.



### Build a running total

To add 1 + 2 + 3, start with total = 0 and add each number. The running total changes from 0 to 1 to 3 to 6. Place print(total) outside the loop to print only the final total.



### Definition and conditions

A for loop repeats over items. range(start, stop) starts at start and ends before stop.


- The stop value is excluded. Here the bounds are integers and the step is +1.



### How it works


- range(1, 4) produces 1, 2, 3.
- number takes the next value each time.
- The indented print runs once per value.



### Concept check

Which numbers are in range(1, 4)?


- A. 1, 2, 3, 4
- B. 1, 2, 3
- C. 0, 1, 2, 3

Answer: B

range excludes its stop value.


- A: The stop value 4 is excluded.
- B: Yes. The sequence ends after 3.
- C: The start here is explicitly 1, not 0.



### Interactive activity

The sum from 1 through 3 is 6. What happens if you include 4?

[Open this activity](./#/book/python-introduction/for-range/experiment)Code

~~~
end = 3
total = 0
for number in range(1, end + 1):
    total = total + number
print(total)

~~~



Expected output

~~~
6

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Choose 0. Does the loop body run?



### Example 1: Count through 3

Print consecutive numbers starting at 1.


- range(1, 4) produces 1, 2, 3.
- number takes the next value each time.
- The indented print runs once per value.

Code

~~~
for number in range(1, 4):
    print(number)

~~~



Expected output

~~~
1
2
3

~~~





### Example 2: Add the first three numbers

Add 1, 2, and 3 one at a time.


- Start total at 0.
- After each addition, total is 1, 3, then 6.
- Print the final 6 outside the loop.

Code

~~~
total = 0
for number in range(1, 4):
    total = total + number
print(total)

~~~



Expected output

~~~
6

~~~





### Common mistakes



#### range(1, 4) includes 4.

The stop is excluded, so the values are 1, 2, 3.



#### Reset total to 0 on every iteration.

Initialize total before the loop. Inside it, add to the previous total.



### Exercises and solutions



#### Exercise 1

Which numbers does range(1, 3) produce?

Hint: The stop value 3 is excluded.


- It produces 1 and 2.

Code

~~~
for number in range(1, 3):
    print(number)

~~~



Expected output

~~~
1
2

~~~







#### Exercise 2

Print 2, 3, and 4 in order.

Hint: Use 5 as the stop value.


- range(2, 5) includes 2, 3, 4.

Code

~~~
for number in range(2, 5):
    print(number)

~~~



Expected output

~~~
2
3
4

~~~







#### Exercise 3

Find the sum from 1 through 4.

Hint: Start total at 0.


- Add 1, 2, 3, and 4 in order.
- The final total is 10.

Code

~~~
total = 0
for number in range(1, 5):
    total = total + number
print(total)

~~~



Expected output

~~~
10

~~~







#### Exercise 4

How many times does range(1, 1) run the loop body?

Hint: The start has already reached the excluded stop.


- The body does not run.
- The print outside the loop still runs.

Code

~~~
total = 0
for number in range(1, 1):
    total = total + number
print(total)

~~~



Expected output

~~~
0

~~~







### Prerequisites

Conditions and branches



### Sources


- Python 3.13 Tutorial
- More Control Flow Tools



SECTION 2.3

## while loops and countdowns

A while loop checks its condition before each iteration. True continues; false stops.



### Intuition

A countdown takes another step while time remains and stops at 0.



### Learning objectives


- Check before each iteration
- Move toward the stopping condition
- Test small inputs and zero



### Check before each iteration

while remaining > 0: runs its indented body only while remaining is positive. It tests the condition again on every iteration. A for loop is useful for going through items; a while loop is useful when a condition determines whether to continue.



### Move toward the stopping condition

remaining = remaining - 1 reduces the value by 1. Starting at 3, it becomes 2, 1, then 0. At 0 the condition is false and the loop stops. Without that update, the condition stays true and the loop repeats indefinitely. Do not run the version with the update removed.



### Test small inputs and zero

Count down from 3, then try 1, then 0. If the initial value is 0, the body never runs, but Done outside the loop still prints. Checking boundaries catches problems that a normal example can miss.



### Definition and conditions

A while loop checks first, runs its body only when the condition is true, then checks again after the body.


- Update the state so the condition eventually becomes false. Verify termination with small inputs first.



### How it works


- remaining starts at 3.
- Print the value, then subtract 1 on each iteration.
- At 0, leave the loop and print Done.



### Concept check

What must each countdown iteration do to make it stop?


- A. Only print the remaining value
- B. Decrease the remaining value
- C. Reset the remaining value to 3

Answer: B

Updating the variable can change the next condition result.


- A: Printing alone leaves the condition true.
- B: Yes. Subtracting 1 eventually reaches 0.
- C: Resetting to 3 every time prevents the countdown from finishing.



### Interactive activity

Starting at 0, does the loop body run once?

[Open this activity](./#/book/python-introduction/while-stop/experiment)Code

~~~
remaining = 3
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("Done")

~~~



Expected output

~~~
3
2
1
Done

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Compare 0 and 3. How many times is the condition tested?



### Example 1: A three-step countdown

Print 3, 2, 1, then Done.


- remaining starts at 3.
- Print the value, then subtract 1 on each iteration.
- At 0, leave the loop and print Done.

Code

~~~
remaining = 3
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("Done")

~~~



Expected output

~~~
3
2
1
Done

~~~





### Example 2: Nothing left at the start

Start at 0.


- 0 > 0 is false.
- Go straight to the print after the loop.

Code

~~~
remaining = 0
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("Done")

~~~



Expected output

~~~
Done

~~~





### Common mistakes



#### while runs once before checking its condition.

while checks first. If the initial condition is false, its body never runs.



#### Printing the remaining value makes the countdown finish.

You must update remaining. Printing it does not change it.



### Exercises and solutions



#### Exercise 1

What prints if the countdown starts at 1?

Hint: After one iteration, the value becomes 0.


- It prints 1, then Done.

Code

~~~
remaining = 1
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("Done")

~~~



Expected output

~~~
1
Done

~~~







#### Exercise 2

Count down from 2.

Hint: Subtract 1 on each iteration.


- It prints 2, then 1.

Code

~~~
remaining = 2
while remaining > 0:
    print(remaining)
    remaining = remaining - 1

~~~



Expected output

~~~
2
1

~~~







#### Exercise 3

Count from 0 through 2: print the current value, then add 1.

Hint: Continue while current < 3.


- After printing 0, 1, 2, current becomes 3.

Code

~~~
current = 0
while current < 3:
    print(current)
    current = current + 1

~~~



Expected output

~~~
0
1
2

~~~







#### Exercise 4

With remaining equal to 0, how often does the body of while remaining > 0 run?

Hint: The check comes before the body.


- The body runs 0 times.

Code

~~~
remaining = 0
times = 0
while remaining > 0:
    times = times + 1
    remaining = remaining - 1
print(times)

~~~



Expected output

~~~
0

~~~







### Prerequisites

for loops and counting



### Sources


- Python 3.13 Tutorial
- More Control Flow Tools



SECTION 2.4

## Errors and debugging

When a program differs from your expectation, find the first wrong step and change one thing.



### Intuition

Check a calculation by finding its first incorrect step, rather than looking only at the final answer.



### Learning objectives


- Write down the expected behavior
- Distinguish exceptions from wrong results
- Test nearby inputs after a fix



### Write down the expected behavior

To check the sum from 1 through 3, calculate 6 independently first. That is your expected result. If the program gives 3, avoid editing many lines at once. List the values number actually takes and find why 3 was omitted.



### Distinguish exceptions from wrong results

An exception reports an error: a misspelled variable often causes NameError, and mixing a number with text often causes TypeError. Read the exception name on the last line, then follow the line number. A program that runs but gives 3 instead of 6 has a logic error: Python followed instructions that did not express your intention.



### Test nearby inputs after a fix

range(1, 3) excludes 3; change it to range(1, 4). After the fix, test endpoints 1, 2, and 3. One successful example is not enough. Temporarily print(number) to inspect intermediate values, then remove the diagnostic print.



### Definition and conditions

Debug by stating an expectation, observing actual steps, and finding the earliest difference. Change one thing at a time.


- Each example runs independently from the beginning. Start with the stated inputs, then change one thing.



### How it works


- Calculate the expected total, 6, by hand.
- range(1, 3) produces only 1 and 2, omitting 3.
- Changing stop to 4 makes the total 6.



### Concept check

A sum from 1 through 3 returns 3. What is wrong with range(1, 3)?


- A. Addition cannot go inside a loop
- B. The stop excludes 3
- C. total should start at 3

Answer: B

range excludes its stop. To include 3, use 4.


- A: A loop can add values one at a time.
- B: Yes. The program added only 1 and 2.
- C: The initial total should be 0. Starting at 3 would hide the missing value.



### Interactive activity

To add 1 + 2 + 3, should stop be 3 or 4?

[Open this activity](./#/book/python-introduction/debugging/experiment)Code

~~~
stop = 3
total = 0
for number in range(1, stop):
    total = total + number
print(total)

~~~



Expected output

~~~
3

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Choose 3 to find the missing iteration, then 4 to check the fix.



### Example 1: Missing the last number

Fix the sum from 1 through 3.


- Calculate the expected total, 6, by hand.
- range(1, 3) produces only 1 and 2, omitting 3.
- Changing stop to 4 makes the total 6.

Code

~~~
total = 0
for number in range(1, 4):
    total = total + number
print(total)

~~~



Expected output

~~~
6

~~~





### Example 2: Inspect intermediate values

Print values to check each iteration.


- Print number inside the loop.
- Print total outside the loop to check the final answer.

Code

~~~
total = 0
for number in range(1, 4):
    print(number)
    total = total + number
print(total)

~~~



Expected output

~~~
1
2
3
6

~~~





### Common mistakes



#### If the program reports no exception, its answer must be correct.

Compare the actual result with an independently calculated expectation.



#### Change many lines together as soon as you find a bug.

Change one thing and rerun a small case so you can tell whether it fixed the problem.



### Exercises and solutions



#### Exercise 1

Fix nmae so the program prints the value of name.

Hint: Use the same variable name each time.


- Change the reference to name.

Code

~~~
name = "Lin"
print(name)

~~~



Expected output

~~~
Lin

~~~







#### Exercise 2

Fix the addition of the text "3" to the number 2.

Hint: Convert the text to an integer first.


- int("3") produces the integer 3.

Code

~~~
count = int("3")
print(count + 2)

~~~



Expected output

~~~
5

~~~







#### Exercise 3

Add 1 through 2 and print each number being added.

Hint: Set range stop to 3.


- The values printed are 1 and 2.
- The total is 3.

Code

~~~
total = 0
for number in range(1, 3):
    print(number)
    total = total + number
print(total)

~~~



Expected output

~~~
1
2
3

~~~







#### Exercise 4

Test the fix with an endpoint of 0. What total do you expect?

Hint: With nothing to add, total stays 0.


- The loop body does not run.

Code

~~~
total = 0
for number in range(1, 1):
    total = total + number
print(total)

~~~



Expected output

~~~
0

~~~







### Prerequisites

while loops and countdowns



### Sources


- Python 3.13 Tutorial
- Errors and Exceptions





### Chapter review and solutions

Sum 1 through 5, then check which numbers were added.

Hint: Set stop to 6.


- The terms are 1, 2, 3, 4, 5.
- Their sum is 15.

Code

~~~
total = 0
for number in range(1, 6):
    print(number)
    total = total + number
print(total)

~~~



Expected output

~~~
1
2
3
4
5
15

~~~



Count down from 2 to 1, subtracting 1 each time. Print Done at the end.

Hint: Continue while remaining > 0.


- After printing 2, the value becomes 1.
- After printing 1, it becomes 0 and the loop stops.

Code

~~~
remaining = 2
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("Done")

~~~



Expected output

~~~
2
1
Done

~~~



CHAPTER 3

## Organize data

Use shopping lists and price tables to organize data by position, name, or membership.



SECTION 3.1

## Lists and shopping lists

A list stores items in order. Read them by position or process them one by one.



### Intuition

A shopping list has a first and second item, and you can add another at the end.



### Learning objectives


- Put items inside square brackets
- Append an item, then iterate
- Two names can refer to one list



### Put items inside square brackets

items = ["apple", "bread"] creates a list with two strings, separated by a comma inside square brackets. Lists preserve order. items[0] retrieves the first item; items[1] retrieves the second. Positions start at 0. len(items) gives the number of items, here 2.



### Append an item, then iterate

items.append("milk") adds an item at the end. The dot selects an operation on this list; append is its name. for item in items: visits each item directly, without a range or an index.



### Two names can refer to one list

other = items does not copy the list. It gives the same list another name, so appending through other also changes what items sees. For independent simple lists, use other = items.copy(). This is a shallow copy; here the list contains only strings or numbers.



### Definition and conditions

Lists preserve order and duplicates, and positions start at 0. append adds at the end; copy duplicates the simple, one-level lists used here.


- An index must be within the list. An empty list has no item at index 0.
- Here copy() is used on one-level lists of numbers or strings.



### How it works


- The first item is at index 0.
- for visits items in their list order.
- apple therefore prints once on its own and again during iteration.



### Concept check

Which index reads the first shopping-list item?


- A. items[1]
- B. items[0]
- C. items[len(items)]

Answer: B

List indices start at 0.


- A: Index 1 is the second item.
- B: Yes. Index 0 is the first item.
- C: The length is one greater than the last valid index, so it is out of range.



### Interactive activity

After an append, what is the order?

[Open this activity](./#/book/python-introduction/lists/experiment)Code

~~~
items = ["apple", "bread"]
items.append('milk')
for item in items:
    print(item)

~~~



Expected output

~~~
apple
bread
milk

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Choose a different product and watch the list grow by one item.



### Example 1: Read a shopping list

Read the first item, then print every item.


- The first item is at index 0.
- for visits items in their list order.
- apple therefore prints once on its own and again during iteration.

Code

~~~
items = ["apple", "bread"]
print(items[0])
for item in items:
    print(item)

~~~



Expected output

~~~
apple
apple
bread

~~~





### Example 2: Add milk

Append an item and print the new length.


- The list starts with two items.
- After append, it has three.

Code

~~~
items = ["apple", "bread"]
items.append("milk")
print(len(items))

~~~



Expected output

~~~
3

~~~





### Common mistakes



#### The first item is at position 1.

The first index is 0; index 1 is the second item.



#### other = items creates an independent copy.

Both names refer to one list. Use copy() for the simple one-level lists in this lesson.



### Exercises and solutions



#### Exercise 1

What is the first item in [10, 20]?

Hint: Indices start at 0.


- values[0] is 10.

Code

~~~
values = [10, 20]
print(values[0])

~~~



Expected output

~~~
10

~~~







#### Exercise 2

Append 30 to [10, 20], then print each item.

Hint: Use append.


- 30 goes at the end.

Code

~~~
values = [10, 20]
values.append(30)
for value in values:
    print(value)

~~~



Expected output

~~~
10
20
30

~~~







#### Exercise 3

Find the sum of [2, 3, 4].

Hint: Use for and total.


- total becomes 2, then 5, then 9.

Code

~~~
values = [2, 3, 4]
total = 0
for value in values:
    total = total + value
print(total)

~~~



Expected output

~~~
9

~~~







#### Exercise 4

Copy [1, 2] and append 3 only to the copy. How long is the original?

Hint: Use copy().


- The copy has three items; the original still has two.

Code

~~~
values = [1, 2]
other = values.copy()
other.append(3)
print(len(values))
print(len(other))

~~~



Expected output

~~~
2
3

~~~







### Prerequisites

Errors and debugging



### Sources


- Python 3.13 Tutorial
- Data Structures



SECTION 3.2

## Dictionaries and key lookup

A dictionary associates keys with values so you can look up a value by name.



### Intuition

An address book finds a phone number by name, without needing its position.



### Learning objectives


- Write a price table
- Add and update by key
- Choose a default for a missing key



### Write a price table

prices = {"apple": 3, "bread": 5} is a dictionary. Each pair has a key on the left and its value on the right. A colon joins them; commas separate pairs. prices["apple"] retrieves 3 by key. These square brackets contain a key, not a list position.



### Add and update by key

prices["milk"] = 4 adds a new product; prices["apple"] = 6 updates an existing price. Each key has one current value. for name in prices: visits the keys; prices[name] retrieves the corresponding value.



### Choose a default for a missing key

Indexing a missing key raises KeyError. prices.get("rice", 0) retrieves the value if present and returns 0 otherwise, without inserting rice. This is useful for counting: counts[name] = counts.get(name, 0) + 1 starts an unseen item at 0 and adds one.



### Definition and conditions

A dictionary maps keys to values. Square brackets read an existing key; get can supply a default for a missing key.


- A key must exist for direct indexed lookup. For a missing key, get lets you choose a default.



### How it works


- The key "apple" initially maps to 3.
- Assigning the same key again changes its value to 6.
- It does not create a second apple key.



### Concept check

prices has no rice key. Which expression returns a default of 0?


- A. prices["rice"]
- B. prices.get("rice", 0)
- C. prices[0]

Answer: B

get supplies a default for a missing key.


- A: Directly reading a missing key raises an exception.
- B: Yes. A missing key returns the second argument, 0.
- C: Dictionaries use keys. The key 0 does not mean the first position.



### Interactive activity

What does looking up rice return? Does the dictionary gain an item?

[Open this activity](./#/book/python-introduction/dictionaries/experiment)Code

~~~
prices = {"apple": 3, "bread": 5}
name = 'apple'
price = prices.get(name, 0)
print(price)

~~~



Expected output

~~~
3

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Compare an existing key with a missing key. Does prices change?



### Example 1: Find a price by product name

Look up apple, then change its price.


- The key "apple" initially maps to 3.
- Assigning the same key again changes its value to 6.
- It does not create a second apple key.

Code

~~~
prices = {"apple": 3, "bread": 5}
print(prices["apple"])
prices["apple"] = 6
print(prices["apple"])

~~~



Expected output

~~~
3
6

~~~





### Example 2: Count each fruit

Count occurrences in apple, pear, apple.


- For a new fruit, get returns 0.
- Add 1 and store it under the same key.
- On the second apple, update its count from 1 to 2.

Code

~~~
counts = {}
for name in ["apple", "pear", "apple"]:
    counts[name] = counts.get(name, 0) + 1
print(counts["apple"])
print(counts["pear"])

~~~



Expected output

~~~
2
1

~~~





### Common mistakes



#### [0] always reads the first dictionary value.

A dictionary uses keys. Lookup with 0 works only if 0 is an actual key.



#### get inserts a missing key automatically.

get only reads and returns the default; it does not insert a key.



### Exercises and solutions



#### Exercise 1

Look up the bread price, 5.

Hint: Use the product name as the key.


- prices["bread"] retrieves 5.

Code

~~~
prices = {"apple": 3, "bread": 5}
print(prices["bread"])

~~~



Expected output

~~~
5

~~~







#### Exercise 2

Update the bread price to 6.

Hint: Assign a new value to the same key.


- The new price replaces the old one.

Code

~~~
prices = {"bread": 5}
prices["bread"] = 6
print(prices["bread"])

~~~



Expected output

~~~
6

~~~







#### Exercise 3

Return 0 for rice, which has no entry.

Hint: Use the second argument of get.


- A missing key returns the default 0.

Code

~~~
prices = {"apple": 3}
print(prices.get("rice", 0))

~~~



Expected output

~~~
0

~~~







#### Exercise 4

Count fruits from an empty list. How many keys result?

Hint: An empty list runs no loop iterations.


- The dictionary stays empty, with length 0.

Code

~~~
counts = {}
for name in []:
    counts[name] = counts.get(name, 0) + 1
print(len(counts))

~~~



Expected output

~~~
0

~~~







### Prerequisites

Lists and shopping lists



### Sources


- Python 3.13 Tutorial
- Data Structures



SECTION 3.3

## Tuples and sets: records and distinct values

Use a tuple for a fixed record and a set when you care which values occur.



### Intuition

A location is a pair of coordinates. A record of cities visited need not list the same city twice.



### Learning objectives


- Group a fixed pair of values
- Keep each distinct value once
- Choose a container for the task



### Group a fixed pair of values

point = (3, 4) creates a tuple using parentheses. As with a list, point[0] gives 3 and point[1] gives 4, but tuple positions cannot be reassigned. A tuple suits a fixed record such as coordinates. Here we use pairs; a one-item tuple needs a comma: (3,).



### Keep each distinct value once

cities = {"Beijing", "Shanghai", "Beijing"} is a set. It keeps each distinct value once, so len(cities) is 2. With no colons, these are not dictionary key-value pairs. An empty set is set(); {} is an empty dictionary.



### Choose a container for the task

"Beijing" in cities tests membership. A set has no first or second position and promises no display order. Use sorted(cities) for a consistently ordered list. Choose a list for order and duplicates, a dictionary for key-value lookup, a tuple for a fixed record, and a set for distinct values and membership.



### Definition and conditions

Tuple positions cannot be reassigned. A set keeps distinct values, and in tests membership.


- Set elements must be hashable. This lesson uses only numbers and strings.
- Sets do not support positional indexing or guarantee display order.



### How it works


- Parentheses group 3 and 4.
- Indices 0 and 1 retrieve the two coordinates.
- Compare the expected output with your prediction.



### Concept check

Which container preserves a shopping list's order and duplicates?


- A. A set
- B. A list
- C. Read a set's first item at index 0

Answer: B

Choose the container for the need: a list preserves order and duplicates.


- A: Sets remove duplicates and have no list-style positions.
- B: Yes. Lists preserve order and duplicates.
- C: A set has no first item available at index 0.



### Interactive activity

How many times does the repeated 1 count?

[Open this activity](./#/book/python-introduction/tuples-sets/experiment)Code

~~~
values = [1, 1, 2]
unique = set(values)
print(len(unique))
print(2 in unique)

~~~



Expected output

~~~
2
True

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Compare an empty list with one containing duplicates. The set card uses a stable display order for inspection.



### Example 1: Read coordinates

Retrieve both numbers from a coordinate pair.


- Parentheses group 3 and 4.
- Indices 0 and 1 retrieve the two coordinates.

Code

~~~
point = (3, 4)
print(point[0])
print(point[1])

~~~



Expected output

~~~
3
4

~~~





### Example 2: Count distinct cities

How many distinct cities are in Beijing, Shanghai, Beijing?


- A set retains distinct values automatically.
- Beijing occurs twice but counts once.

Code

~~~
cities = {"Beijing", "Shanghai", "Beijing"}
print(len(cities))
print("Beijing" in cities)

~~~



Expected output

~~~
2
True

~~~





### Common mistakes



#### A set keeps every repeated occurrence.

A set keeps distinct values. Use a list to preserve duplicates.



#### {} is an empty set.

{} is an empty dictionary. Use set() for an empty set.



### Exercises and solutions



#### Exercise 1

What is the second item of (5, 8)?

Hint: Its index is 1.


- Read point[1].

Code

~~~
point = (5, 8)
print(point[1])

~~~



Expected output

~~~
8

~~~







#### Exercise 2

How many values remain after converting [1, 1, 2] to a set?

Hint: set converts the list to a set.


- The repeated 1 remains only once.

Code

~~~
values = set([1, 1, 2])
print(len(values))

~~~



Expected output

~~~
2

~~~







#### Exercise 3

Test whether 3 belongs to {1, 2}.

Hint: Use in.


- 3 is absent, so the result is False.

Code

~~~
values = {1, 2}
print(3 in values)

~~~



Expected output

~~~
False

~~~







#### Exercise 4

Create an empty set and print its length.

Hint: Do not use {}.


- set() creates an empty set.
- Its length is 0.

Code

~~~
values = set()
print(len(values))

~~~



Expected output

~~~
0

~~~







### Prerequisites

Dictionaries and key lookup



### Sources


- Python 3.13 Tutorial
- Data Structures



SECTION 3.4

## Comprehensions and data processing

A list comprehension is shorthand for processing items and collecting results. Understand the ordinary loop first.



### Intuition

Double each product's quantity and collect the results into a new list.



### Learning objectives


- Start with a familiar for loop
- Express the same steps in one line
- Add a filter when needed



### Start with a familiar for loop

Starting with values = [1, 2, 3], create result = []. In a loop, calculate value * 2 and add it with result.append(...). The result is [2, 4, 6]. The original remains [1, 2, 3] because the additions went into a new list.



### Express the same steps in one line

result = [value * 2 for value in values] expresses the same simple process. Read the for clause first: take each value from values. Then read value * 2: what each item becomes. The surrounding brackets collect those results into a list.



### Add a filter when needed

[value * 2 for value in values if value >= 2] keeps values at least 2, then doubles them, giving [4, 6]. Check a small list by hand. For nested loops or complicated conditions, an ordinary for loop may be clearer. The goal is to explain each result, not to minimize line count.



### Definition and conditions

[expression for item in data if condition] filters items, evaluates an expression, and collects the results in a new list. The condition is optional.


- Each example runs independently from the beginning. Start with the stated inputs, then change one thing.



### How it works


- Start with an empty result.
- Double and append each item.
- The three results are 2, 4, 6.



### Concept check

How can you check a comprehension you do not understand?


- A. Make it shorter first
- B. Expand it into an ordinary for loop
- C. Assume it modifies the original list directly

Answer: B

Expand it into for, if, and append, then trace the items by hand.


- A: Shorter code may hide the steps.
- B: Yes. Use the familiar loop to check each item.
- C: This comprehension creates a new list; the original does not change.



### Interactive activity

With a threshold of 2, which numbers remain and what are their doubled values?

[Open this activity](./#/book/python-introduction/comprehensions/experiment)Code

~~~
values = [1, 2, 3]
minimum = 2
result = []
for value in values:
    if value >= minimum:
        result.append(value * 2)
print(result)

~~~



Expected output

~~~
[4, 6]

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Set the threshold to 4. Does anything enter the result? This replay expands the comprehension into separate steps.



### Example 1: Collect results with a loop

Double 1, 2, and 3 separately.


- Start with an empty result.
- Double and append each item.
- The three results are 2, 4, 6.

Code

~~~
values = [1, 2, 3]
result = []
for value in values:
    result.append(value * 2)
print(result)

~~~



Expected output

~~~
[2, 4, 6]

~~~





### Example 2: Write a comprehension

Keep values at least 2, then double them.


- 1 fails the condition and is skipped.
- 2 and 3 remain.
- Multiplying each by 2 gives 4 and 6.

Code

~~~
values = [1, 2, 3]
result = [value * 2 for value in values if value >= 2]
print(result)

~~~



Expected output

~~~
[4, 6]

~~~





### Common mistakes



#### A comprehension is always preferable to an ordinary loop.

A comprehension suits simple tasks. An ordinary loop is easier to inspect when the steps are complex.



#### Creating result automatically changes values.

Here results go into a new list. The original list does not change.



### Exercises and solutions



#### Exercise 1

Add 1 to each item in [1, 2] and collect a new list.

Hint: The leading expression is value + 1.


- 1 becomes 2; 2 becomes 3.

Code

~~~
values = [1, 2]
result = [value + 1 for value in values]
print(result)

~~~



Expected output

~~~
[2, 3]

~~~







#### Exercise 2

Keep only values at least 2 from [1, 2, 3].

Hint: Keep value as the leading expression.


- Filter without changing the retained values.

Code

~~~
values = [1, 2, 3]
result = [value for value in values if value >= 2]
print(result)

~~~



Expected output

~~~
[2, 3]

~~~







#### Exercise 3

Solve the previous exercise with an ordinary loop.

Hint: Append only after the if condition passes.


- Only 2 and 3 enter the new list.

Code

~~~
values = [1, 2, 3]
result = []
for value in values:
    if value >= 2:
        result.append(value)
print(result)

~~~



Expected output

~~~
[2, 3]

~~~







#### Exercise 4

What results from doubling every item in an empty list?

Hint: There are no items to process.


- The new list is empty too.

Code

~~~
values = []
result = [value * 2 for value in values]
print(result)

~~~



Expected output

~~~
[]

~~~







### Prerequisites

Tuples and sets: records and distinct values



### Sources


- Python 3.13 Tutorial
- Data Structures





### Chapter review and solutions

Count each fruit in ["apple", "pear", "apple"].

Hint: Accumulate in a dictionary keyed by fruit name.


- apple occurs twice.
- pear occurs once.

Code

~~~
counts = {}
for name in ["apple", "pear", "apple"]:
    counts[name] = counts.get(name, 0) + 1
print(counts["apple"])
print(counts["pear"])

~~~



Expected output

~~~
2
1

~~~



Copy [3, 1], append 2 to the copy, and print both lists.

Hint: Use copy(), not assignment to another name.


- Create an independent one-level copy.
- The original does not gain 2.

Code

~~~
original = [3, 1]
other = original.copy()
other.append(2)
print(original)
print(other)

~~~



Expected output

~~~
[3, 1]
[3, 1, 2]

~~~



CHAPTER 4

## Organize programs

Write functions, design interfaces, import modules, and handle expected exceptions.



SECTION 4.1

## Functions, parameters, and return values

Name a reusable sequence of steps, give it input when calling it, and capture its result.



### Intuition

A doubling machine takes 3 and returns 6.



### Learning objectives


- Give the steps a name
- Call the function and capture its result
- Returning and printing are different



### Give the steps a name

def double(number): defines a function named double. A function is a reusable sequence of steps; number names its input and is called a parameter. The indented return number * 2 doubles it and sends the result to the caller. Defining the function records the steps; it does not yet compute with 3.



### Call the function and capture its result

result = double(3) makes the call: number receives 3, the calculation produces 6, and return sends 6 back for result to hold. print(result) displays it. Call again with a different input without rewriting the function body.



### Returning and printing are different

print displays content; return sends a value back to the caller. To continue calculating with the result, return it. A function that prints but has no return statement returns None, which cannot be used as a number in this calculation. Its parameter is local to the call.



### Definition and conditions

def defines a function; a call supplies input. return sends a result to the caller, while print displays content.


- Define the function before calling it. Use return when the caller needs a result for further calculation.



### How it works


- def records the steps.
- double(3) binds number to 3 for this call.
- return sends back 6, which result stores.



### Concept check

What sends a computed result back to a function's caller?


- A. print
- B. return
- C. Writing def alone performs the calculation

Answer: B

return gives a value to the caller; print only displays it.


- A: print displays output. It does not return the computed value to the caller.
- B: Yes. The caller can capture the return value and use it.
- C: def records the steps; a call executes them.



### Interactive activity

Does defining the function print anything? What changes when it is called with 3?

[Open this activity](./#/book/python-introduction/functions/experiment)Code

~~~
def double(number):
    return number * 2

result = double(3)
print(result)

~~~



Expected output

~~~
6

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Try 0. Follow execution from the call into the function and back.



### Example 1: A doubling function

Pass in 3, capture its double, and display it.


- def records the steps.
- double(3) binds number to 3 for this call.
- return sends back 6, which result stores.

Code

~~~
def double(number):
    return number * 2

result = double(3)
print(result)

~~~



Expected output

~~~
6

~~~





### Example 2: Use a returned value

Pass in 4 and add 1 to the returned result.


- double(4) returns 8.
- The caller adds 1 to get 9.

Code

~~~
def double(number):
    return number * 2

result = double(4) + 1
print(result)

~~~



Expected output

~~~
9

~~~





### Common mistakes



#### Writing def already calculates the result.

def records the steps. Calling the function runs them.



#### print and return are interchangeable.

print displays a value; return gives it to the caller for further use.



### Exercises and solutions



#### Exercise 1

Call the doubling function with 5.

Hint: Define it, then call it.


- It returns 10.

Code

~~~
def double(number):
    return number * 2

print(double(5))

~~~



Expected output

~~~
10

~~~







#### Exercise 2

Write add_one to return its input plus 1.

Hint: Use return.


- With input 3, it returns 4.

Code

~~~
def add_one(number):
    return number + 1

print(add_one(3))

~~~



Expected output

~~~
4

~~~







#### Exercise 3

Call add_one twice, with 1 and then 4.

Hint: Each call receives its own input.


- The results are 2 and 5.

Code

~~~
def add_one(number):
    return number + 1

print(add_one(1))
print(add_one(4))

~~~



Expected output

~~~
2
5

~~~







#### Exercise 4

What should the doubling function return for 0?

Hint: 0 is a valid input.


- 0 * 2 = 0.

Code

~~~
def double(number):
    return number * 2

print(double(0))

~~~



Expected output

~~~
0

~~~







### Prerequisites

Comprehensions and data processing



### Sources


- Python 3.13 Tutorial
- More Control Flow Tools



SECTION 4.2

## Arguments and default values

Pass values by position or parameter name. Give a parameter a default for common cases.



### Intuition

Order drinks by specifying price and quantity. If no quantity is given, prepare one.



### Learning objectives


- Identify what each input means
- Give a common value a default
- Decide whether a list input may change



### Identify what each input means

def cost(price, count): has two parameters. cost(3, 2) passes 3 to price and 2 to count by position, producing 6. Reordering arguments can change their meaning. State the units of inputs such as unit price and quantity.



### Give a common value a default

def cost(price, count=1): uses 1 when count is omitted. cost(3) buys one item; cost(3, 2) buys two. cost(price=3, count=2) uses keyword arguments to name the parameters explicitly. Here the defaulted parameter follows the required one.



### Decide whether a list input may change

To total a list, read its items and return total without adding to or deleting from the input. This makes the function easier to predict. Start with numbers or strings as defaults: a default [] can be shared across calls. The optional note explains why.



### Definition and conditions

Arguments can be supplied by position or by name. A default applies when its argument is omitted.


- An explicit argument overrides the default. Required parameters precede defaulted parameters here.



### How it works


- count defaults to 1.
- Passing 2 overrides that default.
- The results are 3 and 6.



### Concept check

For cost(price, count=1), what is count in cost(5, 0)?


- A. 1, because defaults always apply
- B. 0, the explicit argument
- C. 5, because argument order does not matter

Answer: B

An explicit argument overrides its default.


- A: A default is used only when that argument is omitted.
- B: Yes. Passing 0 computes the price of zero items.
- C: The second position supplies count, not the first.



### Interactive activity

With unit price 3 and quantity 2, what is returned?

[Open this activity](./#/book/python-introduction/arguments/experiment)Code

~~~
def cost(price, count=1):
    return price * count

result = cost(3, 2)
print(result)

~~~



Expected output

~~~
6

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Select a quantity of 0. To test the default locally, change the call to cost(3).



### Example 1: One item by default

At unit price 3, buy one item and then two.


- count defaults to 1.
- Passing 2 overrides that default.
- The results are 3 and 6.

Code

~~~
def cost(price, count=1):
    return price * count

print(cost(3))
print(cost(3, 2))

~~~



Expected output

~~~
3
6

~~~





### Example 2: Name the arguments

Buy 3 items at unit price 4.


- price explicitly receives 4.
- count explicitly receives 3.

Code

~~~
def cost(price, count=1):
    return price * count

print(cost(count=3, price=4))

~~~



Expected output

~~~
12

~~~





### Common mistakes



#### Passing quantity 0 still activates the default 1.

An explicit 0 is used as 0. The default applies only when the argument is omitted.



#### Positional arguments can be reordered freely.

Each position corresponds to a parameter. Use keyword arguments when the order is unclear.



### Exercises and solutions



#### Exercise 1

Use unit price 5 and the default quantity 1.

Hint: Pass only price.


- 5 * 1 = 5.

Code

~~~
def cost(price, count=1):
    return price * count

print(cost(5))

~~~



Expected output

~~~
5

~~~







#### Exercise 2

Call with unit price 5 and quantity 2 using parameter names.

Hint: Write price=5 and count=2.


- The result is 10.

Code

~~~
def cost(price, count=1):
    return price * count

print(cost(price=5, count=2))

~~~



Expected output

~~~
10

~~~







#### Exercise 3

Write total_of to read [2, 3] and return its sum.

Hint: Do not modify the input list.


- The accumulated sum is 5.
- The original list still has two items.

Code

~~~
def total_of(values):
    total = 0
    for value in values:
        total = total + value
    return total

values = [2, 3]
print(total_of(values))
print(values)

~~~



Expected output

~~~
5
[2, 3]

~~~







#### Exercise 4

What is the cost of quantity 0 at unit price 5?

Hint: Pass 0 explicitly.


- 0 overrides the default 1.
- The cost is 0.

Code

~~~
def cost(price, count=1):
    return price * count

print(cost(5, 0))

~~~



Expected output

~~~
0

~~~







### Optional: Optional: why [] is a risky default

A default value is created once when the function is defined. In def add(item, items=[]):, appending to items makes calls that omit items share one list. Use items=None, then if items is None: items = [] inside the function. None marks an omitted list, and is None checks for that marker. Beginners can instead make the list argument required to avoid hidden state.



### Prerequisites

Functions, parameters, and return values



### Sources


- Python 3.13 Tutorial
- More Control Flow Tools



SECTION 4.3

## Modules: reusable tools

Put reusable functions in a separate file and import them from another file.



### Intuition

Keep familiar tools in a toolbox and retrieve them by name.



### Learning objectives


- Use a built-in Python module
- Put your tools in helpers.py
- Keep demonstrations out of imports



### Use a built-in Python module

import math loads Python's built-in math module, a collection of related tools. math.sqrt(9) calls its square-root function and returns 3.0. The dot joins the module name to the tool name. You do not need to implement the square-root algorithm.



### Put your tools in helpers.py

The appendix defines double in helpers.py. After from helpers import double, main.py can call double(5). Save the files in one directory, enter it in a terminal, and run main.py. Do not name your own file math.py or json.py: it can hide the standard module.



### Keep demonstrations out of imports

Ordinary top-level statements also execute the first time a module is imported. To avoid prompting the user during an import, put demonstrations and command-line operations under if __name__ == "__main__":. Treat this as an entry-point guard: it runs when the file is executed directly, not when imported. You need not study the double underscores yet.



### Definition and conditions

import makes module tools available. An entry-point guard runs a demonstration only when the file is executed directly.


- Save helpers.py and main.py in the same directory for the two-file example.
- This lesson gives sqrt nonnegative inputs.



### How it works


- import math loads the module.
- math.sqrt(9) produces 3.0.
- print displays the result.



### Concept check

Where should demonstration code go in a module intended for import?


- A. At the top level, prompting on import
- B. Under if __name__ == "__main__":
- C. In a comment, which will execute too

Answer: B

The guard groups the demonstration steps that should run only when the file is executed directly.


- A: Top-level statements run on import and may interrupt the caller.
- B: Yes. Run the demonstration directly; make tools available on import.
- C: Comments do not execute.



### Interactive activity

What is the square root of 9? Will it display as an integer or a floating-point number?

[Open this activity](./#/book/python-introduction/modules/experiment)Code

~~~
import math
number = 9
result = math.sqrt(number)
print(result)

~~~



Expected output

~~~
3.0

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Try 0, 4, and 16 and check their known square roots.



### Example 1: Use the square-root tool

Find the square root of 9.


- import math loads the module.
- math.sqrt(9) produces 3.0.
- print displays the result.

Code

~~~
import math
result = math.sqrt(9)
print(result)

~~~



Expected output

~~~
3.0

~~~





### Example 2: Run the entry point

Run this file directly to display the doubled value.


- Define the reusable function first.
- The entry-point condition is true when run directly.
- double(5) returns 10.

Code

~~~
def double(number):
    return number * 2

if __name__ == "__main__":
    print(double(5))

~~~



Expected output

~~~
10

~~~





### Common mistakes



#### Importing a file never runs its top-level statements.

Ordinary top-level statements execute too. Put demonstrations inside the entry-point guard.



#### My math.py cannot affect import math.

A local file with the same name can hide the standard module. Choose a different filename.



### Exercises and solutions



#### Exercise 1

Find the square root of 16.

Hint: Import math, then use sqrt.


- The result is 4.0.

Code

~~~
import math
print(math.sqrt(16))

~~~



Expected output

~~~
4.0

~~~







#### Exercise 2

Find the square root of 0.

Hint: 0 is a boundary input for square root.


- The result is 0.0.

Code

~~~
import math
print(math.sqrt(0))

~~~



Expected output

~~~
0.0

~~~







#### Exercise 3

Run an entry point that prints Tool demonstration.

Hint: Use the supplied entry-point guard.


- When run directly, __name__ is "__main__".

Code

~~~
if __name__ == "__main__":
    print("Tool demonstration")

~~~



Expected output

~~~
Tool demonstration

~~~







#### Exercise 4

Import sqrt by itself and find the square root of 25.

Hint: Use from math import sqrt.


- Call sqrt(25) directly this time.

Code

~~~
from math import sqrt
print(sqrt(25))

~~~



Expected output

~~~
5.0

~~~







### Prerequisites

Arguments and default values, Functions, parameters, and return values



### Sources


- Python 3.13 Tutorial
- Modules and venv
- venv
- pathlib



SECTION 4.4

## Exceptions and input validation

When users may enter invalid data, give a fallible conversion a clear failure path.



### Intuition

Someone enters two instead of a numeric quantity. Explain the requirement before asking again.



### Learning objectives


- Find the operation that can fail
- Handle the expected failure with try and except
- Conversion does not guarantee validity



### Find the operation that can fail

int("3") succeeds, but int("three") raises ValueError: the text is unsuitable for this conversion. Without handling, the program stops there. Identify the error you intend to handle instead of wrapping everything in an indistinct failure case.



### Handle the expected failure with try and except

The try body attempts the conversion. except ValueError: handles only that exception type. Success skips except; failure skips the remaining try statements and enters except. Handling an exception does not make the failed operation succeed: it provides understandable feedback.



### Conversion does not guarantee validity

"-2" converts to an integer, but a shopping quantity cannot be negative. After conversion, test count < 0. A function can reject it with raise ValueError("Quantity cannot be negative"). Do not catch every exception indiscriminately, or spelling bugs and file problems may be misreported as quantity errors.



### Definition and conditions

try attempts a fallible operation; except handles a specified exception. raise explicitly rejects invalid input.


- Catch only expected exception types. After conversion, check the allowed range.



### How it works


- try attempts the conversion.
- The conversion fails, so execution enters the ValueError handler.
- Print a clear requirement rather than continuing with a fabricated number.



### Concept check

int can convert "-2". Does that make it a valid shopping quantity?


- A. Successful conversion always means valid input
- B. It still needs a negative-value check
- C. except automatically changes negative values to 0

Answer: B

Conversion checks whether text represents a number. Validation checks whether that number is allowed.


- A: Successful conversion only shows that the text represents an integer.
- B: Yes. The application requirement needs a separate check.
- C: except does not automatically change input or supply a replacement value.



### Interactive activity

Do inputs three and -2 follow the same path?

[Open this activity](./#/book/python-introduction/exceptions/experiment)Code

~~~
text = '3'
try:
    count = int(text)
    if count < 0:
        print("Cannot be negative")
    else:
        print(count)
except ValueError:
    print("Enter an integer")

~~~



Expected output

~~~
3

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Choose valid text, a negative value, and invalid text. Compare the paths.



### Example 1: Handle invalid text

Try converting three into a quantity.


- try attempts the conversion.
- The conversion fails, so execution enters the ValueError handler.
- Print a clear requirement rather than continuing with a fabricated number.

Code

~~~
text = "three"
try:
    count = int(text)
    print(count)
except ValueError:
    print("Enter an integer, such as 3")

~~~



Expected output

~~~
Enter an integer, such as 3

~~~





### Example 2: Reject a negative quantity

Define a quantity validator and test -2.


- Conversion to -2 succeeds.
- The negative-value check raises ValueError.
- The caller displays the exception message.

Code

~~~
def read_count(text):
    count = int(text)
    if count < 0:
        raise ValueError("Quantity cannot be negative")
    return count

try:
    print(read_count("-2"))
except ValueError as error:
    print(error)

~~~



Expected output

~~~
Quantity cannot be negative

~~~





### Common mistakes



#### Anything convertible to an integer is a valid quantity.

Conversion checks the representation. Range requirements, such as nonnegativity, need a separate check.



#### After an exception is caught, Python automatically supplies a valid number.

except runs only the handler you wrote. It does not repair the input.



### Exercises and solutions



#### Exercise 1

Convert valid text "4" and display it.

Hint: A successful conversion skips except.


- The result is 4.

Code

~~~
try:
    count = int("4")
    print(count)
except ValueError:
    print("Enter an integer")

~~~



Expected output

~~~
4

~~~







#### Exercise 2

Handle the failure to convert "4.5" directly to an integer.

Hint: Catch only ValueError.


- Conversion fails and prints Enter an integer.

Code

~~~
try:
    count = int("4.5")
    print(count)
except ValueError:
    print("Enter an integer")

~~~



Expected output

~~~
Enter an integer

~~~







#### Exercise 3

Convert -1, then print Cannot be negative.

Hint: Check the range after successful conversion.


- Conversion succeeds, but the value is not a valid quantity.

Code

~~~
count = int("-1")
if count < 0:
    print("Cannot be negative")
else:
    print(count)

~~~



Expected output

~~~
Cannot be negative

~~~







#### Exercise 4

Quantity 0 is allowed. What should the program display?

Hint: Reject values below 0, not equal to 0.


- 0 is not less than 0.

Code

~~~
count = int("0")
if count < 0:
    print("Cannot be negative")
else:
    print(count)

~~~



Expected output

~~~
0

~~~







### Prerequisites

Modules: reusable tools



### Sources


- Python 3.13 Tutorial
- Errors and Exceptions





### Chapter review and solutions

Write read_count to convert integer text to a nonnegative quantity. Test "3", "0", "-1", and "three".

Hint: After conversion, reject values below 0.


- 3 and 0 are valid.
- -1 fails the range check; three fails conversion.

Code

~~~
def read_count(text):
    count = int(text)
    if count < 0:
        raise ValueError("Quantity cannot be negative")
    return count

for text in ["3", "0", "-1", "three"]:
    try:
        print(read_count(text))
    except ValueError:
        print("Enter a nonnegative integer")

~~~



Expected output

~~~
3
0
Enter a nonnegative integer
Enter a nonnegative integer

~~~



Write cost(price, count=1). Check buying one and two items at unit price 5.

Hint: The default quantity applies only when omitted.


- Omitting count gives cost 5.
- Passing 2 gives cost 10.

Code

~~~
def cost(price, count=1):
    return price * count

print(cost(5))
print(cost(price=5, count=2))

~~~



Expected output

~~~
5
10

~~~



CHAPTER 5

## Build an application

Handle files, validate formats, test boundaries, and deliver a command-line tool.



SECTION 5.1

## Text files and paths

Variables disappear when a program ends. Save data to a file to read it next time.



### Intuition

Write today's list on paper so you can read it tomorrow.



### Learning objectives


- Choose where to write
- Specify the file mode and text encoding
- Reading a file still gives text



### Choose where to write

notes.txt is a filename. Without a full path, it is relative to the program's current working directory, which may differ from the code directory. Start in a separate practice folder. The web replay uses an isolated example directory and does not write files on your computer.



### Specify the file mode and text encoding

with open("notes.txt", "w", encoding="utf-8") as file: opens a file for writing. Mode w truncates an existing file, so practice with a new filename. The encoding determines how text is stored; this book consistently uses UTF-8. file.write("Buy apples\n") writes text; \n is a newline. with closes the file when its indented block ends.



### Reading a file still gives text

Open the same file in r mode. text = file.read() reads its contents as a string. Use print(text, end="") to preserve the file's newlines without adding another one. Mode a appends to existing content; check the destination first.



### Definition and conditions

with open(...) opens a file and closes it at the end of the block. r reads, w overwrites, and a appends.


- w overwrites an existing file. Use new filenames in a separate practice directory.
- Relative paths start at the current working directory. Use UTF-8 consistently when reading and writing.



### How it works


- w creates or overwrites the example file and writes a line.
- The file closes when the with block ends.
- r reopens it to read and display the saved text.



### Concept check

Which mode preserves content and adds at the end?


- A. w
- B. a
- C. r automatically saves changes

Answer: B

a appends, w overwrites, and r reads.


- A: w discards existing content, so it cannot preserve it here.
- B: Yes. a appends after the existing content.
- C: r is a read mode and cannot write.



### Interactive activity

Does text change when it is written to a file and read back?

[Open this activity](./#/book/python-introduction/text-files/experiment)Code

~~~
message = 'Buy apples'
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write(message)
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)

~~~



Expected output

~~~
Buy apples

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Try empty text and inspect text after reading. Each replay starts in a fresh example directory.



### Example 1: Save a note

Write Buy apples, close the file, then read it again.


- w creates or overwrites the example file and writes a line.
- The file closes when the with block ends.
- r reopens it to read and display the saved text.

Code

~~~
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Buy apples\n")
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text, end="")

~~~



Expected output

~~~
Buy apples

~~~





### Example 2: Append at the end

Keep the first line and add a second with a.


- Create the example file first.
- a preserves the existing content and writes at the end.
- Reading the file returns both lines.

Code

~~~
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Buy apples\n")
with open("notes.txt", "a", encoding="utf-8") as file:
    file.write("Buy bread\n")
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text, end="")

~~~



Expected output

~~~
Buy apples
Buy bread

~~~





### Common mistakes



#### w appends to existing content.

w truncates the file. Use a to append.



#### A relative path always starts at the code file's directory.

It starts at the current working directory. Check where the program is running.



### Exercises and solutions



#### Exercise 1

Write Hello to a new hello.txt, then read it.

Hint: After writing, open it in r mode.


- Use the same UTF-8 encoding for writing and reading.

Code

~~~
with open("hello.txt", "w", encoding="utf-8") as file:
    file.write("Hello")
with open("hello.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)

~~~



Expected output

~~~
Hello

~~~







#### Exercise 2

Append B to an example file containing A.

Hint: Mode a preserves existing content.


- Write A first, then append B.

Code

~~~
with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("A")
with open("letters.txt", "a", encoding="utf-8") as file:
    file.write("B")
with open("letters.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)

~~~



Expected output

~~~
AB

~~~







#### Exercise 3

Overwrite A with B using w in an example file.

Hint: Reopening with w discards the old content.


- Only B remains.

Code

~~~
with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("A")
with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("B")
with open("letters.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)

~~~



Expected output

~~~
B

~~~







#### Exercise 4

What is the length of the text read from an empty example file?

Hint: read returns an empty string.


- len(text) is 0.

Code

~~~
with open("empty.txt", "w", encoding="utf-8") as file:
    file.write("")
with open("empty.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(len(text))

~~~



Expected output

~~~
0

~~~







### Prerequisites

Exceptions and input validation, Modules: reusable tools



### Sources


- Python 3.13 Tutorial
- Input and Output
- pathlib



SECTION 5.2

## JSON and CSV: structures and tables

JSON stores structures; CSV stores tables. After parsing, check both types and meaning.



### Intuition

Store a dictionary in a text file or organize a bill into table rows.



### Learning objectives


- Store a dictionary as JSON
- Read a small CSV table
- Numeric CSV fields arrive as text



### Store a dictionary as JSON

json.dumps(data, ensure_ascii=False) converts a dictionary to JSON text. Remember the s in dumps as string. ensure_ascii=False leaves non-ASCII characters readable. json.loads(text) converts the text back to data. This uses a standard data format rather than merely saving a dictionary's printed appearance.



### Read a small CSV table

Each CSV row is a record, and the first row can name the columns. csv.DictReader reads each row as a dictionary using those names. Here io.StringIO wraps sample text as a file-like object; io provides input/output tools. You can also pass a real file opened with open to DictReader. A small text table separates table handling from path issues.



### Numeric CSV fields arrive as text

An amount field may look like 125, but row["amount"] is the string "125". Convert it with int to integer cents before adding. A complete project also checks column names, missing values, and negative amounts. Successful parsing does not validate each row. Likewise, check that parsed JSON has the dictionary or list structure you need.



### Definition and conditions

JSON converts between structures and text; CSV reads column-based records. Validate structures and values after parsing.


- CSV fields are text by default. Convert and validate before calculating.
- The parsed JSON structure must match what the program expects.



### How it works


- Import json first.
- dumps produces text in the standard format.
- After loads restores the data, read the name and count by key.



### Concept check

A CSV row contains row["amount"] equal to "125". What should happen before adding amounts?


- A. Add a number directly
- B. Convert to integer cents with int
- C. Append the string "200"

Answer: B

CSV fields are text by default. Convert and validate before calculating.


- A: A string and integer cannot be added that way.
- B: Yes. Conversion enables numeric addition; also check the range.
- C: Concatenation gives "125200", not a monetary sum.



### Interactive activity

After a JSON round trip, does count remain the same number?

[Open this activity](./#/book/python-introduction/json-csv/experiment)Code

~~~
import json
data = {"name": "Lin", "count": 3}
text = json.dumps(data, ensure_ascii=False)
restored = json.loads(text)
print(restored["count"])

~~~



Expected output

~~~
3

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Choose 0. Compare the quotes in text with the dictionary structure in restored.



### Example 1: Save and restore a record

Convert a name and count to JSON, then read them back.


- Import json first.
- dumps produces text in the standard format.
- After loads restores the data, read the name and count by key.

Code

~~~
import json
data = {"name": "Lin", "count": 3}
text = json.dumps(data, ensure_ascii=False)
restored = json.loads(text)
print(restored["name"])
print(restored["count"])

~~~



Expected output

~~~
Lin
3

~~~





### Example 2: Add two amounts

The CSV amount column contains 125 and 200, in cents.


- DictReader reads two rows by column name.
- Convert each amount string to an integer.
- The total is 325 cents.

Code

~~~
import csv
import io
text = "category,amount\nfood,125\ntransport,200\n"
total = 0
for row in csv.DictReader(io.StringIO(text)):
    total = total + int(row["amount"])
print(total)

~~~



Expected output

~~~
325

~~~





### Common mistakes



#### CSV numeric fields automatically become numbers.

Fields are text by default. Convert them explicitly before calculation.



#### If a file parses, its data needs no further checks.

Check column names, value types, and permitted ranges too.



### Exercises and solutions



#### Exercise 1

Read count from JSON text.

Hint: Use loads, then look up the key.


- The result is the integer 3.

Code

~~~
import json
data = json.loads('{"count": 3}')
print(data["count"])

~~~



Expected output

~~~
3

~~~







#### Exercise 2

Convert [1, 2] to JSON and back, then print its length.

Hint: Use dumps and loads.


- The restored list has two items.

Code

~~~
import json
text = json.dumps([1, 2])
values = json.loads(text)
print(len(values))

~~~



Expected output

~~~
2

~~~







#### Exercise 3

Read a CSV amount of 50 and add 10.

Hint: Use int first.


- 50 + 10 = 60.

Code

~~~
import csv
import io
text = "amount\n50\n"
for row in csv.DictReader(io.StringIO(text)):
    print(int(row["amount"]) + 10)

~~~



Expected output

~~~
60

~~~







#### Exercise 4

With only a CSV header and no data rows, what is the total?

Hint: The loop receives no records.


- total remains 0.

Code

~~~
import csv
import io
total = 0
for row in csv.DictReader(io.StringIO("amount\n")):
    total = total + int(row["amount"])
print(total)

~~~



Expected output

~~~
0

~~~







### Prerequisites

Text files and paths, Dictionaries and key lookup, Modules: reusable tools



### Sources


- Python 3.13 Tutorial
- json
- csv



SECTION 5.3

## Tests and boundary cases

Specify inputs and correct results, then repeatedly compare them with the program's output.



### Intuition

Give a machine small problems with known answers and check whether it keeps answering correctly.



### Learning objectives


- Calculate expectations independently
- Write a check with assert
- Cover ordinary and boundary cases



### Calculate expectations independently

For a doubling function, calculate expectations by hand: 3 gives 6, 0 gives 0, and -2 gives -4. Do not generate the expected answer by calling the function under test, or the same bug can appear on both sides. Tests preserve these checks so you can rerun them after changing the code.



### Write a check with assert

assert double(3) == 6 requires the comparison to be true. == tests equality. Success continues silently; failure raises AssertionError. A final print("Checks passed") shows execution got through those assertions. Do not run these tests with Python's -O option: it disables assert statements.



### Cover ordinary and boundary cases

Passing for 3 is not enough. Try 0, negative inputs, and values that expose likely bugs. Passing tests does not prove correctness for every input, but explicit boundary checks help prevent known bugs from returning. The project appendix uses unittest to run a suite. Start with input, expectation, and comparison.



### Definition and conditions

A test compares an actual result with an independently determined expectation. assert requires its condition to be true.


- Calculate expected answers independently. Do not run assertion-based tests with -O, which disables assert.



### How it works


- Calculate the expectations 6, 0, and -4 by hand.
- Each assert compares an actual result with its expectation.
- After all checks pass, print Checks passed.



### Concept check

How should you obtain an expected answer for a function test?


- A. Call the same function again
- B. Calculate a small case independently
- C. Treat absence of exceptions as success

Answer: B

Independent expectations can reveal errors in the function's calculation.


- A: A shared bug can affect both sides and escape the comparison.
- B: Yes. Calculate independently, then compare with the program's result.
- C: A program can return a wrong answer without raising an exception.



### Interactive activity

For input 3, the correct answer is 6. What happens if the expectation is mistakenly 5?

[Open this activity](./#/book/python-introduction/testing/experiment)Code

~~~
def double(number):
    return number * 2

actual = double(3)
expected = 6
if actual == expected:
    print("Checks passed")
else:
    print("Check failed")

~~~



Expected output

~~~
Checks passed

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Change only the expected value and inspect the comparison. This expands the check performed by assert.



### Example 1: Test a doubling function

Check an ordinary value, zero, and a negative value.


- Calculate the expectations 6, 0, and -4 by hand.
- Each assert compares an actual result with its expectation.
- After all checks pass, print Checks passed.

Code

~~~
def double(number):
    return number * 2

assert double(3) == 6
assert double(0) == 0
assert double(-2) == -4
print("Checks passed")

~~~



Expected output

~~~
Checks passed

~~~





### Example 2: Observe a failure

Suppose doubling is mistakenly implemented as adding 2. Test input 3.


- The incorrect function returns 5.
- The expectation is 6, so assert fails.
- We catch AssertionError only to demonstrate this failure. In a real test, let it fail directly.

Code

~~~
def double(number):
    return number + 2

try:
    assert double(3) == 6
except AssertionError:
    print("Check failed: input 3 should give 6")

~~~



Expected output

~~~
Check failed: input 3 should give 6

~~~





### Common mistakes



#### Generate the correct answer by calling the function under test again.

The same bug can affect both sides. Determine the expectation independently.



#### Passing one ordinary input means all cases are correct.

Add boundaries such as zero, an empty list, and invalid input. Tests support only the cases checked.



### Exercises and solutions



#### Exercise 1

Write a check for add_one(3).

Hint: The hand-calculated expectation is 4.


- Compare the actual result with 4.

Code

~~~
def add_one(number):
    return number + 1

assert add_one(3) == 4
print("Pass")

~~~



Expected output

~~~
Pass

~~~







#### Exercise 2

Write a boundary check for add_one(0).

Hint: Expect 1.


- Zero should also increase by 1.

Code

~~~
def add_one(number):
    return number + 1

assert add_one(0) == 1
print("Pass")

~~~



Expected output

~~~
Pass

~~~







#### Exercise 3

Check that the sum of an empty list is 0.

Hint: There are no items to add.


- total_of([]) should return 0.

Code

~~~
def total_of(values):
    total = 0
    for value in values:
        total = total + value
    return total

assert total_of([]) == 0
print("Pass")

~~~



Expected output

~~~
Pass

~~~







#### Exercise 4

Check that 3 candies in bags of 5 make 0 full bags with remainder 3.

Hint: Check the two results separately.


- Use two assertions with the hand-calculated answers.

Code

~~~
assert 3 // 5 == 0
assert 3 % 5 == 3
print("Pass")

~~~



Expected output

~~~
Pass

~~~







### Prerequisites

JSON and CSV: structures and tables, Functions, parameters, and return values, Exceptions and input validation



### Sources


- Python 3.13 Tutorial
- unittest



SECTION 5.4

## Capstone: a local expense reporter

Connect reading, validation, calculation, and display to build an expense summary tool.



### Intuition

Read the bill, validate amounts, total them by category, then display a report.



### Learning objectives


- Start with a bill you can check by hand
- Separate four responsibilities
- Add the command-line interface last



### Start with a bill you can check by hand

Take food at 125 cents, transport at 200, and food at 75. Calculate independently: food totals 200, transport 200, and the grand total is 400 cents. Start with three in-memory records, combining Chapter 3 lists and dictionaries with Chapter 4 functions. Do not add files, command-line parsing, and tests all at once.



### Separate four responsibilities

First read CSV (Section 5.2). Second validate columns, category, and integer-cent amounts, rejecting zero and negatives (Section 4.4). Third accumulate amounts by category in a dictionary (Section 3.2). Fourth display results in a stable order. Verify the accumulation before connecting file input. The appendix provides complete source with a function for each responsibility.



### Add the command-line interface last

Save the appendix source and sample.csv in one folder and enter it in a terminal. Run python3 expense_report.py --help to check usage, then python3 expense_report.py sample.csv. Store amounts as integer cents and convert to currency units only for display. A CLI accepts arguments through terminal commands; argparse reads the filename. The class declarations in the full tests organize unittest cases; object-oriented mechanisms belong in a later course.



### Definition and conditions

The reporter separates reading, validation, aggregation, and display. Each record must contain a positive integer amount in cents.


- Reject zero or negative amounts, missing columns, empty categories, and malformed amounts. Each record uses positive integer cents.
- No records gives a total of 0. That differs from an invalid record whose amount is 0.



### How it works


- Each record is a dictionary containing category and amount.
- For a category's first occurrence, start its total at 0.
- Food totals 125 + 75 and transport 200, for a grand total of 400.



### Concept check

How should the tool handle a negative amount under this project's rules?


- A. Add it because arithmetic is possible
- B. Explain the error and reject the input
- C. Silently change it to 0

Answer: B

Each record must contain positive integer cents. Reject zero and negatives explicitly.


- A: Being usable in arithmetic does not satisfy the input requirements.
- B: Yes. Validate first, then aggregate.
- C: Silently changing values hides the original data problem behind an apparently successful report.



### Interactive activity

If the last amount changes from 75 cents to 50, what is the total?

[Open this activity](./#/book/python-introduction/capstone/experiment)Code

~~~
amounts = [125, 200, 75]
total = 0
for amount in amounts:
    total = total + amount
print(total)

~~~



Expected output

~~~
400

~~~



Choose an input and predict the result, then select Next step. The arrow marks the next statement to execute; the side panel shows current variables and output produced so far.

Choose 75 and check the running totals: 125, 325, 400.



### Example 1: Build the aggregation core

Sum three small records by category. Assume the records have already been validated and contain positive integer cents.


- Each record is a dictionary containing category and amount.
- For a category's first occurrence, start its total at 0.
- Food totals 125 + 75 and transport 200, for a grand total of 400.

Code

~~~
records = [
    {"category": "food", "amount": 125},
    {"category": "transport", "amount": 200},
    {"category": "food", "amount": 75},
]
totals = {}
total = 0
for record in records:
    category = record["category"]
    amount = record["amount"]
    totals[category] = totals.get(category, 0) + amount
    total = total + amount
print(totals["food"])
print(totals["transport"])
print(total)

~~~



Expected output

~~~
200
200
400

~~~





### Example 2: Convert units only for display

Display 375 cents as 3.75 currency units.


- Compute the total using integer cents.
- Divide by 100 to convert cents to currency units.
- In the f-string, :.2f displays two decimal places. The internal accounts still use integer cents.

Code

~~~
cents = 125 * 3
print(f"{cents / 100:.2f} units")

~~~



Expected output

~~~
3.75 units

~~~





### Common mistakes



#### Every amount convertible to an integer belongs in the bill.

Each amount must also exceed 0. This project rejects zero and negative records.



#### Invalid input can silently become 0.

Report the error so the user can correct it rather than hiding a data problem.



### Exercises and solutions



#### Exercise 1

Two amounts in the same category are 100 and 50 cents. What is their total?

Hint: Accumulate both under one key.


- The result is 150 cents.

Code

~~~
totals = {}
for amount in [100, 50]:
    totals["food"] = totals.get("food", 0) + amount
print(totals["food"])

~~~



Expected output

~~~
150

~~~







#### Exercise 2

Display 150 cents as currency units with two decimal places.

Hint: Use :.2f as shown in this lesson.


- Divide by 100 and display 1.50.

Code

~~~
cents = 150
print(f"{cents / 100:.2f} units")

~~~



Expected output

~~~
1.50 units

~~~







#### Exercise 3

Check amounts 0 and -1 cents. This project requires each amount to be positive.

Hint: Test amount <= 0.


- Check 0 and -1 separately.
- Neither is positive, so reject both.

Code

~~~
for amount in [0, -1]:
    if amount <= 0:
        print("Amount must be positive")
    else:
        print(amount)

~~~



Expected output

~~~
Amount must be positive
Amount must be positive

~~~







#### Exercise 4

With no records, what is the total in cents?

Hint: Accumulation starts at 0.


- The loop does not run and the total is 0.

Code

~~~
total = 0
for amount in []:
    total = total + amount
print(total)

~~~



Expected output

~~~
0

~~~







### Prerequisites

Tests and boundary cases, Dictionaries and key lookup, JSON and CSV: structures and tables



### Sources


- Python 3.13 Tutorial
- csv
- argparse
- pathlib





### Chapter review and solutions

Save {"count": 3} in a JSON file, then read it and display the count.

Hint: Use dumps before writing; after reading text, use loads.


- Use UTF-8 for both writing and reading.
- After restoring the dictionary, retrieve 3 by key.

Code

~~~
import json
data = {"count": 3}
with open("record.json", "w", encoding="utf-8") as file:
    file.write(json.dumps(data))
with open("record.json", "r", encoding="utf-8") as file:
    text = file.read()
restored = json.loads(text)
print(restored["count"])

~~~



Expected output

~~~
3

~~~



Check that 305 cents displays as 3.05 units, not 3.50.

Hint: Calculate independently before comparing the text.


- 305 / 100 = 3.05.
- :.2f controls only the displayed decimal places.

Code

~~~
def display(cents):
    return f"{cents / 100:.2f} units"

assert display(305) == "3.05 units"
print("Pass")

~~~



Expected output

~~~
Pass

~~~





## Final assessment and solutions

Write count_passed(scores) to count scores of at least 60. Test [59, 60, 90] and an empty list. Inputs are integers from 0 through 100.

Hint: Use for and if, starting the count at 0.


- 59 fails; 60 and 90 pass.
- An empty list contains nobody, so the count is 0.

Code

~~~
def count_passed(scores):
    passed = 0
    for score in scores:
        if score >= 60:
            passed = passed + 1
    return passed

assert count_passed([59, 60, 90]) == 2
assert count_passed([]) == 0
print("Pass")

~~~



Expected output

~~~
Pass

~~~



Count ["apple", "pear", "apple"] and print apple and pear counts without changing the original list.

Hint: Store results in a separate dictionary.


- The default in get starts a new count at 0.
- Read the original list without modifying it.

Code

~~~
items = ["apple", "pear", "apple"]
counts = {}
for name in items:
    counts[name] = counts.get(name, 0) + 1
print(counts["apple"])
print(counts["pear"])
assert items == ["apple", "pear", "apple"]

~~~



Expected output

~~~
2
1

~~~



Read 125 and 75 cents from a one-column CSV and sum them as integers. Report invalid text such as three. The header is amount and each record has one column.

Hint: Combine CSV reading, a function, and exception handling.


- The valid input totals 200.
- Invalid text makes int raise ValueError; the caller displays an explanation.

Code

~~~
import csv
import io

def total_cents(text):
    total = 0
    for row in csv.DictReader(io.StringIO(text)):
        amount = int(row["amount"])
        if amount <= 0:
            raise ValueError("Amount must be positive")
        total = total + amount
    return total

assert total_cents("amount\n125\n75\n") == 200
print("Total check passed")
try:
    total_cents("amount\nthree\n")
except ValueError:
    print("Invalid amount format")

~~~



Expected output

~~~
Total check passed
Invalid amount format

~~~



Build a file utility: double each item of [2, 3], save as JSON, read it back, and check for [4, 6].

Hint: Process the list, serialize it, write, read, and compare.


- The new list is [4, 6].
- Check the structure and values after reading the JSON file.

Code

~~~
import json
values = [2, 3]
result = [value * 2 for value in values]
with open("result.json", "w", encoding="utf-8") as file:
    file.write(json.dumps(result))
with open("result.json", "r", encoding="utf-8") as file:
    restored = json.loads(file.read())
assert restored == [4, 6]
print("Pass")

~~~



Expected output

~~~
Pass

~~~





## Glossary



**Program**: Instructions written for a computer to execute in order.



**Interpreter**: A program that reads and runs Python code.



**Terminal**: A window for entering commands and viewing results.



**Variable**: A name used to retrieve a current value, such as count.



**Assignment**: Evaluate the right side, then bind the left-hand name to that value.



**String**: Text data, usually written between matching quotes in code.



**Integer**: A number without a fractional part, such as 0, 3, or -2.



**Type**: A value's category, which determines its supported operations.



**Expression**: Code that evaluates to a value, such as 2 + 3.



**Indentation**: Leading spaces that group statements into a block.



**Condition**: A test with a true or false result, such as count >= 1.



**Loop**: Steps repeated over data or while a condition holds.



**List**: An ordered collection of values that preserves duplicates.



**Index**: A position used to retrieve data, starting at 0 for a list.



**Dictionary**: A mapping from keys to values, such as product names to prices.



**Tuple**: A fixed sequence whose positions cannot be reassigned.



**Set**: A collection of distinct values supporting membership tests.



**Function**: A named set of steps that can receive input when called.



**Parameter**: A name for an input received by a function.



**Return value**: A result sent back to the caller by return.



**Module**: An importable collection of tools, often stored in a .py file.



**Exception**: A signal of a problem during execution, such as ValueError.



**Current working directory**: The starting location for relative file paths.



**Encoding**: A convention for converting text to stored data. This book uses UTF-8.



**Serialization**: Converting structures such as lists and dictionaries to a storable format such as text.



**Test**: A comparison of an actual result with an independent expectation.





## Learning outcomes


- Write a runnable program from an empty file
- Understand types, branches, loops, and data containers
- Organize functions and handle invalid input
- Read and write small text, JSON, and CSV files
- Write boundary and integration tests for a command-line project



## Scope


- Object-oriented programming and inheritance
- Web development, databases, and scraping
- NumPy, Pandas, and machine learning
- Concurrency, async, generators, and performance tuning
- Formal software packaging and distribution



## Sources

Python 3.13 Tutorial

[https://docs.python.org/3.13/tutorial/](https://docs.python.org/3.13/tutorial/)Check introductory language coverage; explanations and examples are newly written for beginners.

Built-in Types

[https://docs.python.org/3.13/library/stdtypes.html](https://docs.python.org/3.13/library/stdtypes.html)Check types, truth values, assignment, operations, and container semantics.

Floating-Point Arithmetic

[https://docs.python.org/3.13/tutorial/floatingpoint.html](https://docs.python.org/3.13/tutorial/floatingpoint.html)Check floating-point representation error and approximate comparison.

Built-in Functions

[https://docs.python.org/3.13/library/functions.html](https://docs.python.org/3.13/library/functions.html)Check the behavior of input, int, print, len, and sorted.

More Control Flow Tools

[https://docs.python.org/3.13/tutorial/controlflow.html](https://docs.python.org/3.13/tutorial/controlflow.html)Check loops, functions, default arguments, and call semantics.

Errors and Exceptions

[https://docs.python.org/3.13/tutorial/errors.html](https://docs.python.org/3.13/tutorial/errors.html)Check exception propagation, handling, and raising.

Data Structures

[https://docs.python.org/3.13/tutorial/datastructures.html](https://docs.python.org/3.13/tutorial/datastructures.html)Check lists, tuples, dictionaries, sets, and comprehensions.

Modules and venv

[https://docs.python.org/3.13/tutorial/modules.html](https://docs.python.org/3.13/tutorial/modules.html)Check modules, entry points, and imports; see venv separately for environments.

venv

[https://docs.python.org/3.13/library/venv.html](https://docs.python.org/3.13/library/venv.html)Check virtual-environment creation and platform-specific commands.

Input and Output

[https://docs.python.org/3.13/tutorial/inputoutput.html](https://docs.python.org/3.13/tutorial/inputoutput.html)Check file modes, UTF-8, with blocks, and serialization.

pathlib

[https://docs.python.org/3.13/library/pathlib.html](https://docs.python.org/3.13/library/pathlib.html)Check relative paths, directory creation, and text file operations.

json

[https://docs.python.org/3.13/library/json.html](https://docs.python.org/3.13/library/json.html)Check JSON mappings, ensure_ascii, and round-trip limitations; see csv for tables.

csv

[https://docs.python.org/3.13/library/csv.html](https://docs.python.org/3.13/library/csv.html)Check table parsing, string fields, extra columns, and newline rules.

unittest

[https://docs.python.org/3.13/library/unittest.html](https://docs.python.org/3.13/library/unittest.html)Check test discovery, assertions, and invalid-input tests.

argparse

[https://docs.python.org/3.13/library/argparse.html](https://docs.python.org/3.13/library/argparse.html)Check command-line arguments, help, and exit codes.



## Project source

expense_report.py

~~~
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
            raise ValueError("Header must be category,cents")
        for row in reader:
            # line_num counts physical lines; for quoted multiline fields it is
            # the ending line of the record. Blank physical lines are skipped.
            line = reader.line_num
            if None in row or any(value is None for value in row.values()):
                raise ValueError(f"Line {line}: Expected exactly 2 columns")
            category = row["category"].strip()
            amount = row["cents"].strip()
            if not category:
                raise ValueError(f"Line {line}: Category cannot be empty")
            if any(char in category for char in "\r\n\t"):
                raise ValueError(f"Line {line}: Category cannot contain newlines or tabs")
            if not amount.isascii() or not amount.isdigit():
                raise ValueError(f"Line {line}: Amount must be positive integer cents")
            cents = int(amount)
            if cents <= 0:
                raise ValueError(f"Line {line}: Amount must be positive integer cents")
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
    parser = argparse.ArgumentParser(description="Summarize a local expense CSV by category")
    parser.add_argument("file", type=Path, help="UTF-8 CSV with header category,cents")
    args = parser.parse_args(argv)
    try:
        records = load_records(args.file)
    except (OSError, UnicodeError, ValueError, csv.Error) as error:
        print(f"Error: {error}", file=sys.stderr)
        return 2
    totals = summarize(records)
    print(f"Total: {format_cents(sum(totals.values()))} units")
    for category in sorted(totals):
        print(f"{category}: {format_cents(totals[category])} units")
    return 0


if __name__ == "__main__":
    sys.exit(main())

~~~



helpers.py

~~~
"""A reusable function with no import-time input/output."""
def double(number):
    return number * 2

~~~



main.py

~~~
from helpers import double


def main():
    print(double(5))


if __name__ == "__main__":
    main()

~~~



sample.csv

~~~
category,cents
food,1250
transport,300
food,800

~~~



test_expense_report.py

~~~
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
        records = [("food", 1250), ("transport", 300), ("food", 800)]
        self.assertEqual(summarize(records), {"food": 2050, "transport": 300})
        self.assertEqual(records, [("food", 1250), ("transport", 300), ("food", 800)])

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
            with self.subTest(value=value), self.assertRaisesRegex(ValueError, "positive integer cents"):
                self.read_text(f"category,cents\na,{value}\n")

    def test_invalid_headers(self):
        for text in ["", "name,cents\na,1\n", "cents,category\n1,a\n", "category,category\na,1\n"]:
            with self.subTest(text=text), self.assertRaisesRegex(ValueError, "Header"):
                self.read_text(text)

    def test_missing_or_extra_fields(self):
        for line in ["a\n", "a,1,extra\n"]:
            with self.subTest(line=line), self.assertRaisesRegex(ValueError, "columns"):
                self.read_text("category,cents\n" + line)

    def test_bad_categories(self):
        for line in [",1\n", "  ,1\n", '"a\nb",1\n', '"a\tb",1\n']:
            with self.subTest(line=line), self.assertRaisesRegex(ValueError, "Category"):
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
            self.assertIn("Line 3", err.getvalue())

    def test_missing_file(self):
        with TemporaryDirectory() as folder:
            out, err = io.StringIO(), io.StringIO()
            with redirect_stdout(out), redirect_stderr(err):
                status = main([str(Path(folder) / "missing.csv")])
            self.assertEqual(status, 2)
            self.assertEqual(out.getvalue(), "")
            self.assertTrue(err.getvalue().startswith("Error: "))

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
        self.assertEqual(result.stdout, "Total: 23.50 units\nfood: 20.50 units\ntransport: 3.00 units\n")
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

~~~
