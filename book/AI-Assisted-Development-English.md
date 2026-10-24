AI UNIVERSITY / OTHER SUBJECTS

# Building Projects with AI

Building Projects with AI

Version 0.1.1 · AI-authored · Text CC0 / code MIT

People who have tried AI coding but lack an overview of project development. No prior Python, Git or terminal experience is required.

Tool-neutral, using a personal study-list webpage throughout. Practice decisions in the book, then work in a separate directory. Commands use Git 2.28+ and Node.js 22.12+ capabilities; QA.md records the actual verification environment.

Contributed by aby0120

Print / save PDF [Open interactive textbook](./#/book/ai-development)



## Contents



### Define the problem


- [1.1 Start with a real problem](#user-problem)
- [1.2 Keep the first release finishable](#small-scope)
- [1.3 Define what done means](#acceptance)



### Understand how a project runs


- [2.1 Understand the project's files](#project-map)
- [2.2 Follow one piece of data](#data-flow)
- [2.3 Run the project locally](#run-environment)



### Keep recoverable records with Git


- [3.1 Saving a file is not a Git commit](#git-snapshot)
- [3.2 Branches, pushes and pull requests](#git-collaboration)
- [3.3 Identify what you need to undo](#git-recovery)



### Work with an agent


- [4.1 Give the agent the real project](#agent-context)
- [4.2 Write an actionable task brief](#task-prompts)
- [4.3 Finish collaboration with evidence](#review-changes)



### Judge reliability


- [5.1 Choose checks that matter](#testing)
- [5.2 Reproduce before guessing](#debugging)
- [5.3 Treat data and permissions as part of the project](#security)



### Finish and deliver a small project


- [6.1 Decide how data persists](#data-design)
- [6.2 Know which version you are delivering](#release)
- [6.3 Lead one complete development cycle with AI](#capstone)

CHAPTER 1

## Define the problem

Describe one real scenario, narrow the first release and agree on observable completion criteria.



SECTION 1.1

## Start with a real problem

Before building, identify who faces what difficulty, when it occurs, and what should improve.



### Intuition

If a friend asks for something tasty, you ask who is eating, where and with what constraints. Software needs that context too.



### Learning objectives


- Describe one user, one moment and one specific difficulty.
- State an observable sign that the problem has improved.



### Start with a small inconvenience

Lin wants to study each evening but forgets yesterday's plan. The user is Lin; the moment is the start of study; the problem is plans buried in chats. Describe that before choosing buttons or technology. Wanting a cool website does not explain its purpose.



### Describe actions, not feature names

Turn list management into actions: enter a plan and add it; mark it complete; delete it when no longer needed. These actions suggest a simple page. You need not know the code yet, but each action needs a purpose.



### Give the agent a checkable starting point

Ask the agent to identify missing information, while choosing the intended user yourself. Whether plans survive refresh matters here. Whether to add particle effects does not solve the missing-plan problem.



### Definition and conditions

Before building, identify who faces what difficulty, when it occurs, and what should improve.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Describe one user, one moment and one specific difficulty.
- List the actions needed to achieve the user's goal.
- State an observable sign that the problem has improved.



### Concept check

Which statement is most useful before coding?


- A. Build a world-class learning platform
- B. Let me find unfinished plans each day
- C. Use the most advanced technology stack

Answer: B


- A: No concrete scenario makes completion hard to judge.
- B: The user goal can now be broken into actions.
- C: Technology still does not explain the problem.



### Interactive activity

Would you accept an agent's immediate suggestion of a leaderboard?

[Open this activity](./#/book/ai-development/user-problem/experiment)The agent proposes building a leaderboard first. How do you respond?


- Build it; it looks cooler
- Ask how it helps me find my plans
- Build every suggested feature

Reference choice: B


- This shifts the first release toward a different problem.
- Relate the suggestion to the user goal before deciding.
- Scope grows and verification becomes harder.

The agent asks whether plans should survive refresh. What do you choose?


- Explicitly require persistence
- Let it guess
- Adjust button colors first

Reference choice: A


- Finding tomorrow's plans depends on saving; answer explicitly.
- Core behavior needs confirmed requirements.
- Appearance does not answer the storage question.

Which material is most useful to retain now?


- Framework rankings
- The user scenario and three essential actions
- Every future idea

Reference choice: B


- Rankings do not establish whether the user problem is solved.
- These anchor scope and acceptance criteria.
- Record future ideas separately so they do not obscure the first release.



Choose a real difficulty of your own. Describe its user, timing, actions and outcome.



### Example 1: From wish to scenario

Rewrite: Build me an amazing learning tool.


- Choose yourself rather than every learner.
- Identify difficulty finding plans before studying each day.
- Define success as seeing unfinished plans on opening the page.

Before studying each day, I want to find yesterday's plans. Build a study-list page where I can add plans, mark them complete and delete unwanted ones. Initially, only I will use it in my own browser.



### Example 2: Find missing requirements

A friend wants a class-wide study list. Can you build it exactly like a personal list?


- Shared use means multiple readers and writers.
- Ask whether lists are separate and whether people may edit others' items.
- Agree on scope before discussing accounts and servers.

Ask whether everyone shares one list, who may edit, and whether cross-device synchronization is required. These answers change the architecture; personal browser storage is not shared storage.



### Common mistakes



#### Choosing technology makes requirements clear.

A framework describes implementation, not the actions a user needs.



#### AI should infer my real intention.

Have it state assumptions and questions. Confirm answers that would change the project's direction.



### Exercises and solutions



#### Exercise 1

Rewrite: I want a productivity tool, as a use scenario.

Hint: Add a user, moment and difficulty.


- Choose yourself as the user.
- Describe current behavior and friction instead of using efficient as a substitute for an observable change.

After dinner, I waste time searching chats for study plans. I want one page showing unfinished items.





#### Exercise 2

Is use React a user problem or an implementation choice?

Hint: A user can describe the goal without knowing a framework.


- Separate the goal from the method.
- Specify persistence before discussing how to implement it.

An implementation choice. A user problem might be plans disappearing after refresh.





#### Exercise 3

What is missing from a shared-list request?

Hint: Consider who may see and edit data.


- List questions affecting permissions and data location.
- Decide about a server after confirming the answers.

Whether it is one shared list, who has editing rights, and whether synchronization and login are needed.





#### Exercise 4

Give the simplest observable success for this example.

Hint: Use one action and one visible result.


- The action is adding a plan.
- The result is seeing and finding it again; later lessons specify persistence conditions.

After adding Practice Git, it appears in the list and can be found next time.





### Prerequisites

None



### Sources


- MDN: Your first website



SECTION 1.2

## Keep the first release finishable

Build only enough to complete the initial scenario. Record other ideas for later.



### Intuition

Build a usable bicycle before deciding whether it needs a basket; do not commission an entire transport system at once.



### Learning objectives


- List the essential features forming one complete workflow.
- Attach an immediate check to each small change.



### Draw the smallest complete workflow

For the study list: add a plan, see it, complete or delete it, then find it next time. Display and persistence are essential. Accounts, rankings, reminders and cross-device synchronization are deferred deliberately.



### Separate now from later

Use two lists: required now and consider later. Ask of each requirement: without it, can the user still complete this scenario? If yes, defer it. Scope can change, but update the plan and acceptance criteria honestly.



### Deliver one checkable change at a time

First show an empty list, then add items, then completion, then persistence. Each task needs a check. A single finish-the-site task postpones discovering unsuitable data or storage design. Small steps reveal errors early, not merely shorten prompts.



### Definition and conditions

Build only enough to complete the initial scenario. Record other ideas for later.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- List the essential features forming one complete workflow.
- Defer ideas unnecessary for that workflow.
- Attach an immediate check to each small change.



### Concept check

Which belongs in the first release?


- A. A personal list with automatic payments
- B. Add, complete, delete and save locally
- C. Community, rankings and synchronization together

Answer: B


- A: Payments add another business problem and risks.
- B: This completes the original scenario with clear scope.
- C: Several new scenarios make the first release harder to finish.



### Interactive activity

Four tempting additions are suggested. Which deserve inclusion now?

[Open this activity](./#/book/ai-development/small-scope/experiment)The agent proposes accounts, but only you use the app.


- Add them immediately
- Defer them and explain local-storage limits
- Remove persistence

Reference choice: B


- Accounts expand the first release.
- Scope stays clear and the user understands its limits.
- This breaks finding plans on a later day.

Refreshing loses the list.


- Fix this gap in the first release
- Build rankings first
- Change the title

Reference choice: A


- Persistence is part of the current scenario.
- New features cannot repair a broken core workflow.
- A title change does not prevent data loss.

One change includes creation, login and payments. How should it be adjusted?


- Use a longer prompt for everything
- Split it and verify creation first
- Accept without checking

Reference choice: B


- A longer description does not reduce change scope.
- Smaller changes are easier to understand and verify.
- Reliability needs evidence.



Write required now and consider later lists for your project, explaining each choice.



### Example 1: Deciding about login

Does a personal single-browser first release need login?


- The only user is you.
- Cross-device sharing is not required.
- Complete the scenario with local storage and state its limits.

No login initially. Data stays in this browser and does not synchronize to other devices. If synchronization becomes necessary, redesign accounts and storage then.



### Example 2: Split a large task

How would you divide finish the study list?


- Display the page and empty state first.
- Add creation, completion and deletion, checking each action.
- Then add persistence and backup, checking refresh and restoration.

Task 1: empty list. Task 2: add nonblank plans and reject whitespace. Task 3: toggle and delete by ID. Task 4: refresh persistence and JSON backup. Verify each separately and fix failures before continuing.



### Common mistakes



#### More features make a better first release.

First establish that one workflow is useful; extras add delay and ambiguity.



#### Split tasks by files.

Prefer verifiable behaviors; one small behavior may touch several files.



### Exercises and solutions



#### Exercise 1

Which comes first: reminders, rankings or adding plans?

Hint: Use the scenario to choose.


- Make recording and retrieval work first.
- Keep other ideas on the later list.

Adding plans. The other two are not essential to a personal list.





#### Exercise 2

How should you explain the absence of cloud synchronization?

Hint: State what happens on another device.


- Scope decisions affect user experience.
- Put limitations in user-facing instructions, not just the development plan.

Data is stored only in this browser. Changing devices or clearing storage will not restore it automatically; download a backup.





#### Exercise 3

Turn finish the page into one small task.

Hint: Choose behavior you can verify by clicking.


- Specify the triggering action.
- Specify successful and invalid-input outcomes.

Submitting a nonblank title adds an item; whitespace-only input gives a message without adding anything.





#### Exercise 4

What if multiuser synchronization becomes mandatory midway?

Hint: It changes data location and permissions.


- Recognize a requirements change.
- Do not pretend a personal-list design only needs another button.

Revisit the plan, confirm sharing and permissions, rewrite scope and acceptance criteria, then estimate the new tasks.





### Prerequisites

Start with a real problem



### Sources


- MDN: Your first website



SECTION 1.3

## Define what done means

Acceptance criteria specify inputs, actions and expected outcomes so you and the agent share a definition of done.



### Intuition

Not too sweet is ambiguous when ordering a cake; size, flavor and delivery date are easier to check.



### Learning objectives


- Specify the starting state, action and expected result.
- Judge completion using your checks, not the agent's report alone.



### Write a check in three parts

Use Given, When, Then. Given an empty list, when Practice Git is submitted, then one unfinished item appears. This specifies state, action and outcome. Define it before coding so the current implementation does not lower the requirement.



### Boundary cases expose omissions

Normal input covers only the normal path. Check whitespace, duplicate titles, refresh and storage failure too. This first release allows duplicate titles with distinct IDs and rejects whitespace-only titles. After trimming, the limit is 80 UTF-16 code units; some symbols use more than one. JavaScript length is not a universal character count.



### Separate behavior, experience and limits

Functional criteria describe results; experience criteria include keyboard submission and no mobile overflow. State that devices do not synchronize. Limits cannot excuse failing promised refresh persistence. Change goals only by revisiting the original purpose.



### Definition and conditions

Acceptance criteria specify inputs, actions and expected outcomes so you and the agent share a definition of done.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Specify the starting state, action and expected result.
- Include at least one boundary or failure input.
- Judge completion using your checks, not the agent's report alone.



### Concept check

Which criterion can you execute directly?


- A. Stable functionality
- B. Whitespace submission leaves the count unchanged and shows a message
- C. As many tests as possible

Answer: B


- A: No specific input or result.
- B: The action and expected result can be checked directly.
- C: Test count alone says nothing about coverage.



### Interactive activity

What does checking only normal input miss?

[Open this activity](./#/book/ai-development/acceptance/experiment)What should happen after entering three spaces?


- Add a blank item
- Add nothing and show a message
- Crash and reopen

Reference choice: B


- A blank item expresses no plan.
- This meets whitespace-rejection criteria.
- Expected invalid inputs need handling and explanation.

Deleting one of two same-title records removes both.


- Accept as simpler logic
- Treat as acceptance failure
- Change wording only

Reference choice: B


- Allowed duplicates cannot all be deleted by title.
- Use independent IDs to target the selected record.
- Wording cannot fix incorrect data changes.

All written tests pass, but none tests refresh.


- Claim refresh is verified
- Record the gap and check refresh yourself
- Remove the saving requirement

Reference choice: B


- There is no evidence for that claim.
- Complete the evidence for the cross-day workflow.
- Do not lower the core goal to fit the implementation.



Choose a feature and write normal, boundary and failure acceptance cases.



### Example 1: Checking blank input

How do you test that blank plans cannot be added?


- Start with an empty list.
- Enter three spaces and submit.
- Check unchanged count and an understandable message.

Given zero items, submitting only spaces leaves zero items and displays Please enter a study plan. Checking that the button clicks is insufficient.



### Example 2: Checking duplicate titles

Two items are titled Learn Git. What should deleting the second do?


- Create two same-title records.
- Confirm distinct IDs.
- Delete the second and check that the first remains.

Only the first remains. Deletion targets the chosen record; allowed duplicate titles cannot identify records uniquely.



### Common mistakes



#### No page error means done.

Check inputs and results too; silent data loss may produce no visible error.



#### Green tests guarantee requirements are met.

If refresh or blank-input cases are missing, green results support only the cases that exist.



### Exercises and solutions



#### Exercise 1

Write a criterion for completion toggling.

Hint: Specify the initial state and click outcome.


- Define the first change.
- Check reversal so completion is not one-way.

Given an unfinished item, checking it marks it complete; unchecking restores unfinished status.





#### Exercise 2

Make the requirement premium interface checkable.

Hint: Focus on reading, screen size and controls.


- Translate preferences into specific layout requirements.
- Do not rely on premium as the only criterion.

At 390px width, titles wrap without horizontal scrolling and every button is keyboard-focusable.





#### Exercise 3

What is missing from ordinary creation, deletion and completion checks?

Hint: Consider returning the next day.


- Check the cross-day scenario.
- Include invalid and ambiguous inputs, not just the happy path.

Refresh persistence, whitespace rejection and deleting one of duplicate titles.





#### Exercise 4

The agent reports tests passed. What else do you need?

Hint: Which checks passed?


- Ask for evidence and scope.
- One conclusion does not guarantee every feature.

Commands, actual results, covered cases and unchecked items, followed by your own key-action checks.





### Prerequisites

Keep the first release finishable



### Sources


- MDN: Your first website
- Node.js: Test runner





### Chapter review and solutions

Turn build an amazing study tool with every feature into a first release.

Hint: Return to one person's specific difficulty.


- Identify the user and purpose.
- Keep features needed for the complete workflow.
- Write criteria for ordinary input, whitespace and refresh.

User: yourself. Scenario: finding plans in the evening. First release: add, complete, delete and save. Accounts and synchronization are deferred.

How do you verify creation works?

Hint: Specify state, action and outcome.


- State the successful result.
- State rejected input.
- Make results observable, rather than merely absence of an error.

From an empty list, submitting Learn Git creates an unfinished item; whitespace creates nothing; surrounding whitespace is trimmed.

CHAPTER 2

## Understand how a project runs

Locate entry points, trace data and follow instructions to run locally.



SECTION 2.1

## Understand the project's files

A project is a set of cooperating files. Start with README, then trace entry points to interface, logic, configuration and tests.



### Intuition

A restaurant has a menu, kitchen and accounts. Mixing them on one sheet makes changes difficult.



### Learning objectives


- Read README and configuration to find entry points and commands.
- Trace one user action through its files; do not delete unfamiliar files casually.



### Start with instructions

Read README for purpose, setup and limitations. In a Node project, package.json defines scripts as command aliases and dependencies as external packages. This example has none; other web projects may require installation.



### Trace four kinds of files

index.html supplies structure and loads style.css and app.mjs. CSS controls appearance. app.mjs connects controls to data; tasks.mjs defines creation, toggling and deletion; tasks.test.mjs tests those rules. server.mjs serves files locally, and README explains operation. Identify responsibilities before choosing frameworks.



### Read enough to explain behavior

You need not understand every syntax detail yet. Know who receives input, validates it, saves it and redraws the page. Ask the agent to explain a line with concrete input and compare its explanation with the file. Why is ID checked before deletion? is more verifiable than explain everything.



### Definition and conditions

A project is a set of cooperating files. Start with README, then trace entry points to interface, logic, configuration and tests.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Read README and configuration to find entry points and commands.
- Identify interface, logic, tests and tooling files.
- Trace one user action through its files; do not delete unfamiliar files casually.



### Concept check

Where should you first look to change button color?


- A. style.css
- B. Rewrite every file
- C. Backup data

Answer: A


- A: The styling responsibility matches the goal.
- B: Broad changes make review harder.
- C: Data storage does not control color.



### Interactive activity

The goal is one color change. Is the proposed file list reasonable?

[Open this activity](./#/book/ai-development/project-map/experiment)The agent plans to read README and CSS first.


- Reasonable: identify setup and styling
- A waste of time
- Delete configuration first

Reference choice: A


- Understanding entry points and styles supports focused changes.
- It helps avoid editing the wrong place.
- Configuration may be required to run.

It also proposes rewriting tasks.mjs.


- Ask how that relates to color
- Accept immediately
- Delete tests to match

Reference choice: A


- Explain or remove unrelated logic changes.
- They may change data behavior.
- Weakening checks can conceal errors.

What evidence should be delivered?


- Just done
- Changed files plus narrow-screen and keyboard results
- The model sounds confident

Reference choice: B


- No actual evidence is supplied.
- These checks match the change and experience criteria.
- Confidence does not replace inspecting the page.



Map the appendix project's file responsibilities and trace which files adding one item uses.



### Example 1: Change appearance only

Where should you look to enlarge buttons?


- Find button rules in CSS.
- Check button structure and classes in HTML and JavaScript.
- Check narrow screens and keyboard operation afterward.

Primarily style.css; inspect index.html and app.mjs as needed. Button size does not require changing data structures or deleting tests.



### Example 2: Change the title limit

Where does changing the limit from 80 to 100 have consequences?


- tasks.mjs contains the validation constant.
- Tests cover boundaries 80 and 81.
- Instructions and feedback mention the limit too.

Confirm the requirement, then update the rule, boundary tests and README together. Changing only the message leaves actual validation at 80.



### Common mistakes



#### Delete unfamiliar files to simplify the project.

Check references and purpose first. Configuration, lockfiles and tests may be essential.



#### If AI can edit, I need not know the entry point.

Knowing entry points helps judge whether changes fit the goal and diagnose failures.



### Exercises and solutions



#### Exercise 1

What do CSS and tasks.mjs control?

Hint: Appearance versus data rules.


- Remember responsibilities rather than extensions alone.
- Test rule changes; inspect the page for style changes.

CSS controls styling. tasks.mjs defines creation, toggling, deletion and backup format.





#### Exercise 2

How do you find what npm start runs?

Hint: Read scripts in the configuration.


- Command aliases vary by project.
- Do not assume every start script does the same thing.

Inspect scripts.start in package.json; here it is node server.mjs.





#### Exercise 3

You downloaded a project but cannot open it. What first?

Hint: Find instructions before guessing commands.


- Follow actual project evidence.
- Avoid unrelated guessed commands.

Read README, check tools and directory. If instructions are missing, ask the agent to inspect files and add them.





#### Exercise 4

Why might tests change when the title limit changes?

Hint: Tests specify boundaries.


- Confirm that the criterion changed.
- Update tests while keeping invalid-input coverage.

A genuine new limit requires updated accepted and rejected boundaries, not deletion of failing assertions.





### Prerequisites

Define what done means



### Sources


- MDN: Your first website
- Node.js: Test runner



SECTION 2.2

## Follow one piece of data

Trace input, processing, persistence and display to locate failures and decide whether a server is needed.



### Intuition

Track a parcel through dispatch, transport and delivery to find where progress stopped.



### Learning objectives


- Describe an action's input, processing, saving and display stages.
- Explain whether shared data is required before introducing server-side services.



### Trace this example first

The input supplies text; app.mjs handles submission; tasks.mjs validates and produces a new list; app.mjs writes localStorage and renders it. Plans are not sent to a server. The local server only delivers HTML, CSS and JavaScript. A server.mjs file does not imply a cloud database.



### Give each term a purpose

The frontend presents and interacts in the browser. A backend commonly manages shared data, permissions or business rules on a server. An API defines communication, such as fields sent to /tasks and returned results. A database organizes stored data. Small projects do not automatically need all of them.



### Let requirements determine structure

A personal single-browser list can use local storage. Two devices sharing data need accessible shared storage and an identity/permission design. Publishing static files shares the program, not your browser's records. Decide data location and access before implementation.



### Definition and conditions

Trace input, processing, persistence and display to locate failures and decide whether a server is needed.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Describe an action's input, processing, saving and display stages.
- Identify where data persists and who can access it.
- Explain whether shared data is required before introducing server-side services.



### Concept check

Does static publishing automatically upload the browser's list?


- A. Yes, if URLs match
- B. No; a separate data design is needed
- C. Yes, by changing ports

Answer: B


- A: Static-file publishing does not read your records.
- B: Program files and user data are distinct.
- C: Changing ports instead changes the storage origin.



### Interactive activity

A classmate opens the new URL and sees an empty list. How do you judge it?

[Open this activity](./#/book/ai-development/data-flow/experiment)What do you ask first?


- Was shared data actually required?
- Which animation should change?
- Should CSS be rewritten?

Reference choice: A


- Requirements decide whether this is an error.
- Animation does not determine data location.
- Appearance does not explain storage.

The implementation uses only localStorage.


- Claim synchronization works
- Explain separate storage in each browser
- Add a synchronization icon

Reference choice: B


- There is no shared-data evidence.
- This accurately describes behavior.
- An icon creates no shared service.

The user really needs two-device synchronization.


- Keep the original scope but declare completion
- Revisit accounts, data location and permissions
- Copy CSS

Reference choice: B


- The design cannot meet the changed requirement.
- Establish data ownership and access before implementing.
- Styles do not provide synchronization.



Draw your project's data path and mark where data persists.



### Example 1: Locate persistence failure

An item appears but disappears on refresh. Where first?


- Creation and rendering have visible results.
- Check storage errors and the key used.
- Confirm protocol, host and port are unchanged after refresh.

Inspect saving and loading first. localStorage is origin-specific: http://127.0.0.1:5180 and another port use separate storage. Do not rewrite the entire interface first.



### Example 2: Explain a public URL

After static publication, will classmates see my list?


- Separate program files from user data.
- Records stay in your browser's origin-specific storage.
- There are no accounts or shared data services.

Classmates receive the same program but use their own browser storage. Static publication does not upload your list or migrate it to a new origin.



### Common mistakes



#### A server file implies backend business logic.

Here the server only serves static files; it does not handle list records.



#### Publishing a page synchronizes every device.

A shared URL and shared user data are separate. Synchronization needs its own design.



### Exercises and solutions



#### Exercise 1

What stages does this example's data pass through?

Hint: Start at the input.


- Identify each stage's role.
- A saving failure needs feedback, not a claim of success.

Input → app.mjs event → tasks.mjs rules → localStorage → rendered page.





#### Exercise 2

Which requirements change the local-storage design?

Hint: Consider two people or devices.


- Identify readers and writers first.
- Renaming localStorage does not implement synchronization.

Synchronization, multiuser sharing or permissions require a shared-data and identity design.





#### Exercise 3

The mobile page works but lacks old records. Is this necessarily a bug?

Hint: Recall the no-synchronization scope.


- Judge against explicit requirements.
- Explain current limitations accurately.

No. Local storage is device-specific. If synchronization is required, the design is insufficient.





#### Exercise 4

Receiving API data does not mean what?

Hint: Processing and rendering still matter.


- Separate interface contracts, processing and presentation.
- Locate failures stage by stage.

It does not prove the page displays correctly or that client input can be trusted.





### Prerequisites

Understand the project's files



### Sources


- MDN: Client and server
- MDN: localStorage



SECTION 2.3

## Run the project locally

Follow project instructions with suitable tools in the correct directory. Read failures before choosing the next step.



### Intuition

A recipe's oven instruction assumes the right appliance, temperature and dish. Commands have prerequisites too.



### Learning objectives


- Use a separate practice directory and check README and tool versions.
- Keep errors and identify whether they occur during setup, installation or execution.



### A terminal runs commands

Editors change files; terminals execute commands. Save appendix files by name in a separate practice directory and open it in your editor. Integrated terminals often start there; check the path. cd learning-list changes directory. Quote paths containing spaces. The wrong directory hides configuration and files.



### Check tools before running

Install Git and Node.js using the official links for your system. Check git --version, node --version and npm --version. This example requires Node.js 22.12+ and defines npm test and npm start. Run tests, then start and open the printed local URL. Keep the terminal running; Ctrl+C stops the server.



### Do not install blindly

Node projects with dependencies usually need packages installed. If README requires it and package-lock.json matches, npm ci recreates node_modules from the lockfile and fails on mismatch. This example needs no external packages. Keep errors and directory details; do not delete lockfiles, downgrade everything or run unfamiliar scripts without cause.



### Definition and conditions

Follow project instructions with suitable tools in the correct directory. Read failures before choosing the next step.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Use a separate practice directory and check README and tool versions.
- Run this project's tests and start command; inspect actual results.
- Keep errors and identify whether they occur during setup, installation or execution.



### Concept check

What does EADDRINUSE directly mean?


- A. All code is broken
- B. The requested listening address or port is occupied
- C. A Git commit failed

Answer: B


- A: It does not identify business-code failure.
- B: Check your previous server first.
- C: This is a runtime-environment issue, separate from Git.



### Interactive activity

Which next step reduces guessing after startup failure?

[Open this activity](./#/book/ai-development/run-environment/experiment)package.json cannot be found.


- Check directory and file location
- Delete every test
- Change button color

Reference choice: A


- The command may be running in the wrong directory.
- Tests do not determine configuration location.
- Styling cannot make the command find a file.

Port 5180 is occupied.


- Kill arbitrary system processes
- Inspect and stop your own old server
- Reinstall all packages

Reference choice: B


- An unknown process may support other work.
- Resolve the already-running instance first.
- Installing dependencies does not free a port.

The page now opens. What do you record?


- Versions, command, URL and results
- Only success
- A guarantee for every machine

Reference choice: A


- Others can reproduce these details.
- Setup and actions are missing.
- One local success does not prove all platforms.



Run the appendix project and record versions, directory, commands and results.



### Example 1: Run the example

How do you start the study list?


- Save project files in learning-list and open a terminal there.
- Check node --version, then run npm test.
- Run npm start, open its URL and keep the terminal active.

Expect passing tests and http://127.0.0.1:5180 in the terminal. Open that URL; Ctrl+C stops the server. No external packages means npm install is unnecessary here.

Code

~~~
node --version
npm test
npm start
~~~





### Example 2: An occupied port

Does EADDRINUSE mean upgrade every dependency?


- Record npm start and the full error.
- The requested address or port is already in use.
- Stop your own previous server, or explicitly change port and URL.

Use Ctrl+C in your old terminal before restarting. Do not kill unknown processes. Changing port changes origin, so old localStorage records do not appear automatically.



### Common mistakes



#### Every project uses the same commands.

Commands come from project configuration and README; inspect first.



#### Deleting a lockfile is the simplest error fix.

It supports reproducible installation. Deletion changes dependency resolution; diagnose first.



### Exercises and solutions



#### Exercise 1

package.json cannot be found. What first?

Hint: Where are the file and terminal?


- Verify the path first.
- Do not install random packages in the wrong directory.

Check whether the terminal is at the project root and configuration has the correct name and location.





#### Exercise 2

What if node --version is unavailable?

Hint: Fix tool availability first.


- A missing tool is not a business-logic error.
- Meet README's runtime requirements first.

Follow official Node.js installation instructions or inspect PATH, reopen the terminal and check again.





#### Exercise 3

npm ci fails because the lockfile does not match. What next?

Hint: Configuration and recorded dependencies disagree.


- Confirm the cause.
- Commit matching dependency files together when they change.

Check branch, package.json and lockfile. Update consistently under repository conventions and review dependency changes; do not bypass by deleting the lockfile.





#### Exercise 4

Why does the local URL stop working after closing the terminal?

Hint: What serves the files?


- Inspect the terminal process.
- Open the browser after startup succeeds.

The local server stopped. Restart it in the correct directory. Saved files and a running service are different states.





### Prerequisites

Follow one piece of data



### Sources


- npm: ci
- MDN: Your first website
- MDN: localStorage
- Git: Installation
- Node.js: Downloads





### Chapter review and solutions

Trace one addition and explain the server's role.

Hint: Distinguish file delivery from business-data persistence.


- Read entry-point references.
- Follow submission to validation and saving.
- Confirm there is no shared-list API.

Input → app.mjs event → tasks.mjs rules → localStorage → rendering. server.mjs serves static files only.

npm start fails. What information should the agent receive?

Hint: Enable reproduction.


- Check the environment against instructions.
- Distinguish directory, tools and port failures.
- Do not delete dependency records casually.

Current directory, tool versions, command and complete error; relevant configuration if needed.

CHAPTER 3

## Keep recoverable records with Git

Distinguish working tree, index and commits; understand branches, remotes, PRs and recovery.



SECTION 3.1

## Saving a file is not a Git commit

Saving changes the working tree. git add stages the content at that moment. git commit records staged content locally.



### Intuition

A draft on your desk, a version inside an envelope and a sent letter are distinct. Editing the draft does not change the envelope.



### Learning objectives


- Use status to inspect branch and file states, then read relevant diffs.
- Verify the change and create a focused local commit.



### Know which repository you are in

Git records versions; GitHub can host repositories. In a new practice directory, git init -b main creates a repository. Use git clone for an existing remote project; do not casually initialize inside another repository. Start with git status. Repository-local user.name and user.email set commit identity here; a public commit can expose that email.



### Three versions can differ

The working tree holds current files; the index stages the next commit; HEAD identifies the checked-out commit, usually the branch tip. After git add README.md, later edits do not update its staged version. git diff compares working tree with index; git diff --staged compares index with HEAD. New unstaged files normally need status and direct inspection too.



### Give each commit one purpose

Read diffs, run relevant checks and stage explicit files before committing. Describe the reason, such as reject whitespace-only plans. .gitignore prevents ordinary addition of matching untracked files, including dependencies and local secrets. It neither removes tracked content nor erases leaked history.



### Definition and conditions

Saving changes the working tree. git add stages the content at that moment. git commit records staged content locally.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Use status to inspect branch and file states, then read relevant diffs.
- Stage only intended files and inspect the staged diff.
- Verify the change and create a focused local commit.



### Concept check

After staging and then editing, what does commit record by default?


- A. Every latest saved edit
- B. The staged content
- C. The GitHub version

Answer: B


- A: Commit does not run add again automatically.
- B: The index supplies the next commit.
- C: Local commits do not read a remote webpage.



### Interactive activity

Predict what happens after staging v2, editing to v3 and committing.

[Open this activity](./#/book/ai-development/git-snapshot/experiment)Which command should first inspect the situation?


- git status
- git push --force
- Delete .git

Reference choice: A


- Inspect branch and change states first.
- Push does not explain local staging.
- Deleting repository records loses history.

With index v2 and working tree v3, what does ordinary diff compare?


- v1 and v2
- v2 and v3
- Remote and v3

Reference choice: B


- That is the staged comparison.
- Ordinary diff compares index and working tree.
- Remote content is not the default comparison.

Commit without staging again records what?


- v3
- v2
- v1

Reference choice: B


- v3 was not staged.
- The commit records staged v2.
- v1 was the previous HEAD.



Reproduce the process in the practice lab and inspect all three versions and both diffs.



### Example 1: A first practice commit

Record README in a new learning-list practice directory.


- Initialize main and configure this repository's identity.
- Save README.md, inspect it and stage it.
- Review the staged diff, commit and inspect the log.

Use init only in a new practice repository; start existing projects with status. Create and save README.md first, and replace the identity placeholders with your chosen public commit identity.

Code

~~~
git init -b main
git config user.name "Your Name"
git config user.email "your-public-email@example.com"
git status
git add README.md
git diff --staged
git commit -m "Document how to run the study list"
git log --oneline
~~~





### Example 2: Editing after staging

v1 is committed. Edit to v2 and stage it, then edit to v3. Without staging again, what is committed?


- HEAD is v1, index v2, working tree v3.
- Ordinary diff shows v2 to v3.
- Staged diff shows v1 to v2.

The commit records v2. The working tree remains v3 with unstaged changes. To commit v3, review and stage it first; commit does not collect every latest edit automatically.



### Common mistakes



#### Saving creates a recoverable commit.

Editor saving only writes the working tree; staging and committing are separate.



#### git add . is always the best choice.

It may include unrelated files. Inspect status and prefer explicit paths while learning.



### Exercises and solutions



#### Exercise 1

Working tree v3, index v2, HEAD v1: what happens on commit without add?

Hint: Which version does commit read?


- Staged content enters the commit.
- Committing does not automatically overwrite your working edits.

HEAD becomes v2; working tree stays v3 with its unstaged diff.





#### Exercise 2

Does empty ordinary diff mean nothing can be committed?

Hint: Compare index with HEAD.


- The comparisons differ.
- Check status for new files too.

No. Changes may already be staged; inspect git diff --staged and status.





#### Exercise 3

How do you stage only the instructions?

Hint: Use an explicit path.


- Exclude unrelated changes.
- Check the staged scope before committing.

git add README.md, then git diff --staged to check for other content.





#### Exercise 4

If .env reached public history, does ignoring it fix the leak?

Hint: History remains.


- Stop using the compromised secret first.
- Ignore rules only prevent ordinary addition of matching untracked files.

No. Revoke or rotate exposed credentials first, then follow repository procedures to remove tracking and clean history.





### Prerequisites

Run the project locally



### Sources


- Pro Git: Recording changes
- Git: diff
- OWASP: Secrets management
- Git: init



SECTION 3.2

## Branches, pushes and pull requests

A branch maintains a line of history, push updates a remote branch, and a PR proposes merging changes into another branch. None automatically means deployment.



### Intuition

Revising your own draft, sending it out and asking an editor to accept it are different steps.



### Learning objectives


- Check the working tree before creating a branch for one change.
- Explain the trigger, changed behavior and verification in a PR; distinguish commit, push, merge and release.



### One focused branch

From a clean working tree, git switch -c feature/empty-title creates and switches branches. Commits there do not advance main automatically. Branches are not isolated folders: uncommitted changes may follow a switch or prevent it. Inspect status and preserve work first.



### A remote is another repository location

git remote -v shows configured names and URLs. origin is conventional, not a fixed service. git push -u origin feature/empty-title uploads that branch and sets its upstream. You need permission; without it, commonly fork first and open a PR from your fork. Use supported authentication rather than source-code credentials.



### A PR is a proposal with evidence

State the original triggering input, old and new behavior, changed files, checks and limits. Reviewers inspect diffs and request changes. PR creation, passing checks and merging are separate states. Website updates depend on build and release configuration; some projects deploy manually.



### First sharing and later updates

A repository initialized from a ZIP has no origin. Create your own empty hosted repository and pass its actual URL to git remote add origin. For existing projects, git clone the real URL and follow README. Before updates inspect status and preserve local work. git fetch origin downloads records without merging. With upstream set and a clean tree, git pull --ff-only accepts only fast-forwards. If histories diverge, inspect both and follow project conventions; do not hide divergence with force-push.



### Definition and conditions

A branch maintains a line of history, push updates a remote branch, and a PR proposes merging changes into another branch. None automatically means deployment.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Check the working tree before creating a branch for one change.
- Verify remote and permissions, then push the checked branch.
- Explain the trigger, changed behavior and verification in a PR; distinguish commit, push, merge and release.



### Concept check

When can a friend review the change?


- A. Only saved locally
- B. Pushed with an accessible PR
- C. When I say it is done

Answer: B


- A: Local content is not shared.
- B: Shared commits and diffs can be reviewed.
- C: A claim supplies no review material.



### Interactive activity

Does pushing a feature branch necessarily update the public site?

[Open this activity](./#/book/ai-development/git-collaboration/experiment)A feature branch has a new commit. What happens to main?


- It automatically matches
- It keeps its tip until explicitly updated
- It is deleted

Reference choice: B


- Separate history lines do not automatically advance together.
- The commit belongs to the feature branch.
- A commit does not delete main.

What does push success mean?


- The remote branch was updated
- The PR merged
- The website deployed

Reference choice: A


- Local commits reached the target remote branch.
- Merge is a separate operation.
- Deployment follows project configuration and procedure.

Which PR description is useful?


- The code is great
- Trigger, new behavior and verification results
- The model name alone

Reference choice: B


- This does not help assess behavior.
- These details provide reviewable evidence.
- The generation tool does not establish correctness.



Create a branch, commit and push in the practice lab; compare main, local feature and remote positions.



### Example 1: Share a whitespace fix

How do you share a branch in a personal practice repository with origin configured?


- Create a branch from a clean state.
- Edit, run relevant checks, review and commit.
- Check the remote, push and create a PR on the hosting service.

Assumptions: clean working tree, matching filenames and an origin you may push to. Create the PR on the hosting service; these commands do not create it or deploy the site.

Code

~~~
git status
git switch -c feature/empty-title
# Edit and verify, then:
git add tasks.mjs tasks.test.mjs
git diff --staged
git commit -m "Reject whitespace-only plans"
git remote -v
git push -u origin feature/empty-title
~~~





### Example 2: Write a useful PR description

How should the whitespace-title fix be described?


- Give the input and old behavior.
- State the new behavior and user outcome.
- List actual checks and remaining gaps.

Submitting three spaces previously added an unreadable empty item. The change trims input, rejects empty titles and shows feedback. Added blank and ordinary-title tests; npm test passed locally and browser feedback was checked. Other browsers remain unchecked.



### Common mistakes



#### A successful push puts the original project live.

Push updates a remote branch; review, merge and publication are further steps.



#### A PR directly changes someone else's main branch.

It proposes a merge; repository maintenance rules determine acceptance.



### Exercises and solutions



#### Exercise 1

Can a friend see my local commit?

Hint: Was it sent to an accessible remote?


- Local and remote records are separate.
- Check access permissions on the link.

Usually not until you push to a remote they can access and share its branch or PR link.





#### Exercise 2

Does origin always mean my friend's original repository?

Hint: It is a configured name.


- Check the target first.
- Do not infer ownership from the name.

No. git remote -v shows the address; a fork may use origin for your own repository.





#### Exercise 3

After branching from clean main and committing on feature, does main advance automatically?

Hint: Branches point to their own tips.


- Compare the branch histories.
- Uncommitted working-tree behavior is separate from commits.

No. Advancing main requires an explicit merge or update.





#### Exercise 4

A PR merged but the website did not change. What do you inspect?

Hint: The project's publication process.


- Confirm the merged version first.
- Then identify the version actually deployed.

Release workflows, build results, deployment targets and commit versions; manual deployment may be required.





### Prerequisites

Saving a file is not a Git commit



### Sources


- Pro Git: Branching and merging
- Git: push
- GitHub: Pull requests
- Git: fetch
- Git: pull



SECTION 3.3

## Identify what you need to undo

Distinguish unstaging, discarding working edits, reversing commits and resolving conflicts before choosing an undo operation.



### Intuition

Removing a draft from an envelope, discarding a desk copy and sending a correction have different costs.



### Learning objectives


- Inspect working tree, index and log to identify the state being undone.
- After recovery or conflict resolution, review diffs, verify and record the outcome.



### Inspect before clearing

Start with git status, git diff and git diff --staged. git restore --staged README.md unstages while preserving edits. git restore README.md overwrites unstaged edits from the index; preserve anything needed first. Git may not recover never-recorded drafts. Do not reflexively use reset --hard or clean -fd.



### Correct shared history with a new commit

For an ordinary shared commit, git revert creates a reverse commit while retaining history. Start clean and identify the correct commit. Revert may conflict; merge-commit reversal is beyond scope. stash temporarily saves work, excluding untracked files unless -u is specified. Applying it can conflict; it is not permanent backup.



### Understand both sides of a conflict

When branches edit the same area differently, Git may need a decision. Read requirements and both intentions, write the final content, remove markers, test, stage and complete the operation. Do not randomly choose ours or theirs. To stop, use the abort command appropriate to the active merge or revert, after inspecting status.



### Definition and conditions

Distinguish unstaging, discarding working edits, reversing commits and resolving conflicts before choosing an undo operation.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Inspect working tree, index and log to identify the state being undone.
- Preserve needed content and choose the least extensive suitable operation.
- After recovery or conflict resolution, review diffs, verify and record the outcome.



### Concept check

To unstage only while keeping edits, choose what?


- A. git restore --staged README.md
- B. git restore README.md
- C. Delete the whole directory

Answer: A


- A: This restores index content from HEAD only.
- B: This overwrites unstaged edits, violating the preservation goal.
- C: This destroys far more than intended.



### Interactive activity

With staged v2 and working v3, do the two restore operations agree?

[Open this activity](./#/book/ai-development/git-recovery/experiment)Keep v3 in the file but unstage first.


- restore --staged
- Restore the file
- reset --hard

Reference choice: A


- Only the index changes; working v3 remains.
- This restores working content from the index.
- This may discard a broader range of unrecorded changes.

You deliberately discard v3 and retain staged v2. After ordinary restore?


- Working tree v2
- Working tree v1
- Remote v3

Reference choice: A


- Default restoration copies index content to the working tree.
- That occurs only if the index is v1.
- This does not upload anything.

The agent says clear all changes before debugging.


- Ask it to inspect status and diffs and preserve useful work
- Run it immediately
- Delete tests

Reference choice: A


- Identify what would be lost first.
- Never-recorded work may disappear.
- Deleting tests does not replace investigating the error.



Use unstaging and edit-discarding separately in the lab and record each column's change.



### Example 1: Unstage only

Keep README edits but exclude them from this commit.


- Use status to confirm they are staged.
- Use --staged to preserve working edits.
- Inspect status and the file afterward.

Unstaging does not discard editing. Compare ordinary restore in the lab. Practice on the corresponding file in a repository that already has a commit.

Code

~~~
git restore --staged README.md
git status
git diff
~~~





### Example 2: Conflicting title limits

One branch says 80, another 100. May you arbitrarily keep either?


- Check whether the confirmed requirement is still 80 or now 100.
- Update validation, feedback and boundary tests consistently.
- Remove markers, test and complete the merge.

If the change is unconfirmed, revisit requirements or ask. Missing conflict markers does not imply correct behavior. Keep the final limit and tests aligned at 80/81 or 100/101.



### Common mistakes



#### Every undo operation is recoverable.

Never-recorded edits may be lost. Inspect and preserve first.



#### Resolving conflicts means deleting marker lines.

Marker removal only resolves textual conflict; verify resulting behavior against requirements.



### Exercises and solutions



#### Exercise 1

How do you unstage while keeping edits?

Hint: Change only the index.


- Restore the staged version from HEAD.
- Working edits remain; check status.

git restore --staged README.md.





#### Exercise 2

Where does ordinary git restore README.md get content?

Hint: Not the remote by default.


- Compare index and working tree.
- Save any needed draft elsewhere first.

From the index by default, discarding unstaged modifications to that file.





#### Exercise 3

How do you reverse an ordinary pushed bad commit while preserving history?

Hint: Add a reverse record.


- Do not casually rewrite shared history.
- Ordinary and merge commits have different reversal rules.

From a clean tree, identify it and use git revert. Resolve conflicts, verify and push the new commit.





#### Exercise 4

Does stash save newly created untracked files by default?

Hint: Distinguish tracked and untracked.


- Inspect file categories with status first.
- Restoration may conflict; preserve the stash and useful records.

No. Specify -u to include untracked files; it still does not replace permanent backup.





### Prerequisites

Branches, pushes and pull requests



### Sources


- Git: restore
- Git: revert
- Git: stash
- Pro Git: Branching and merging





### Chapter review and solutions

HEAD v1, index v2, working tree v3: what does committing and pushing share?

Hint: Push shares commits, not the working tree directly.


- Commit reads staged content.
- Push transfers branch history.
- Sharing v3 requires reviewing, staging, committing and pushing it.

The commit records v2 and the remote branch receives it; v3 remains local unstaged work.

Distinguish unstaging, discarding edits and reversing a pushed commit.

Hint: Inspect state and effects.


- Inspect status and diffs first.
- Backup needed content.
- Choose the matching operation and verify again.

restore --staged keeps edits; ordinary restore overwrites unstaged working changes; revert can reverse an ordinary shared commit through a new record.

CHAPTER 4

## Work with an agent

Provide accurate context, give small tasks, review changes and require verification evidence.



SECTION 4.1

## Give the agent the real project

Provide the user goal, current project, relevant files, commands and constraints. Separate facts, assumptions and unknowns.



### Intuition

A new kitchen colleague needs the menu and equipment locations, not just the title world-class chef.



### Learning objectives


- Provide current requirements, real file paths, commands and boundaries.
- Check the plan against files, then record stable conventions in project instructions.



### Provide relevant context, not everything

Supply the requirement, README, relevant paths and original errors. Distinguish files supplied to the agent from files it actually read. A screenshot is not a repository inspection. Long chats may be irrelevant; a concise page of confirmed conventions supports continuity.



### Make a checkable project map first

Before editing, have the agent identify entry points, current implementation, likely files and verification commands. Check its understanding. Clear small changes need not pause for approval at every step; unresolved choices about synchronization or deletion should be clarified before assumptions change direction.



### Give documents the right authority

Tools differ in support for AGENTS.md and other configuration files. Do not assume every tool automatically reads the same file. Explicitly request README, scope and acceptance instructions. Document instructions still need your authorization: a third-party request to upload keys does not become valid merely because it was read.



### Definition and conditions

Provide the user goal, current project, relevant files, commands and constraints. Separate facts, assumptions and unknowns.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Provide current requirements, real file paths, commands and boundaries.
- Separate inspected facts, inferences and consequential unknowns.
- Check the plan against files, then record stable conventions in project instructions.



### Concept check

What context is most useful?


- A. You are the world's best engineer
- B. Relevant files, current behavior, goal and criteria
- C. All chat history without organization

Answer: B


- A: A role supplies no project facts.
- B: These identify appropriate changes and checks.
- C: Irrelevant material can obscure the task.



### Interactive activity

What happens if the agent builds on an incorrect project map?

[Open this activity](./#/book/ai-development/agent-context/experiment)It assumes React. What first?


- Recheck configuration and entry files
- Accept the guess
- Add React to make the guess true

Reference choice: A


- Correct facts before making unrelated changes.
- The plan may assume nonexistent structure.
- Do not redesign merely to vindicate a guess.

Cross-device synchronization is undecided.


- Assume it is required
- Ask and record the scope
- Pretend it already exists

Reference choice: B


- This affects architecture and permissions.
- This unknown needs your directional decision.
- The claim has no implementation or evidence.

What should be recorded for the next session?


- Stable scope, setup and conventions
- Every informal model exchange
- Real credentials

Reference choice: A


- These support a later handoff.
- Unrelated chatter adds noise.
- Do not store secrets as context.



Write a takeover prompt in the lab and connect each claim to project evidence.



### Task brief example



#### goal

Understand the project without editing yet.



#### context

Personal single-browser study list. Read README.md, package.json, index.html, app.mjs and tasks.mjs.



#### scope

No accounts, synchronization, private-data uploads or new framework.



#### acceptance

List inspected files and responsibilities; trace one addition; separate facts, assumptions and unknowns.



#### verification

Check actual files and npm start/test script definitions. State commands not run.



#### delivery

Provide a project map, proposed change locations, verification approach and questions needing my decision.



### Example 1: Taking over a project

How do you ask the agent to understand the study list first?


- Give the scenario and initial scope.
- Identify README, package.json and entry files.
- Ask for responsibilities and verification commands.

Read README.md, package.json, index.html, app.mjs and tasks.mjs. This is a personal single-browser study list without accounts or synchronization. List files actually read, trace one addition, identify test commands and unresolved questions. Do not edit yet.



### Example 2: Facts versus assumptions

The agent calls it a React project, but no React dependency exists.


- Check package.json and the HTML entry point.
- Identify native modules as the actual implementation.
- Revise the plan rather than adding an unnecessary framework.

Cite the files supporting that claim. index.html loads app.mjs with type=module and configuration has no React. Use the existing structure. If a new framework is necessary, explain its specific benefit and cost first.



### Common mistakes



#### Longer prompts are more reliable.

Relevant facts matter more than length; old repeated discussions may conflict.



#### An impressive role eliminates the need for project context.

A role cannot replace actual files, constraints and criteria.



### Exercises and solutions



#### Exercise 1

What context is needed to fix persistence?

Hint: Trace the saving path.


- Explain what fails.
- Do not supply all private files by default.

Refresh reproduction steps, URL, original error, app.mjs saving/loading logic, README scope and test commands.





#### Exercise 2

How can you check a claim that files were read?

Hint: Make conclusions traceable to locations.


- Do more than ask whether it read them.
- Check that the claimed entry point or function exists.

Ask for the read-file list and relevant implementation explanation, then compare with the actual files.





#### Exercise 3

Which unknowns need confirmation first?

Hint: Choices affecting data, permissions or scope.


- Routine implementation details can be resolved autonomously.
- Consequential unknowns should not be silently guessed.

Replacing old data, requiring synchronization or adding external services, for example.





#### Exercise 4

Does AGENTS.md automatically apply in every tool?

Hint: Tool support varies.


- A filename is not universal magic.
- State essential conventions in the current session too.

No. Check the tool's conventions and explicitly request project instructions.





### Prerequisites

Identify what you need to undo



### Sources


- Anthropic: Prompting practices
- MDN: Your first website



SECTION 4.2

## Write an actionable task brief

A task brief states goal, context, scope, acceptance, verification and delivery. Plain wording is enough if it directs action.



### Intuition

Telling a colleague what to change, why, the expected result and how to check it works better than repeated urging.



### Learning objectives


- Limit this task to one behavior change and give current context.
- Request reviewable checks, change explanations and verification gaps.



### One brief, one change

Replace optimize the entire site with reject whitespace-only titles while preserving trimming for valid ones. Describe the failure, files and confirmed constraints. Specify autonomous scope and changes needing discussion, such as dependencies, data format or services. Avoid approval for every action while making consequential boundaries clear.



### Replace adjectives with examples

Robust, elegant and high-quality express preferences, not sufficient criteria. Add examples: three spaces add nothing; surrounding whitespace is trimmed; 80 code units are accepted and 81 rejected. These are ordinary collaboration details, not model-specific tricks.



### Make verification reviewable

Request changed files, actual commands and outcomes, and unchecked items. Without execution access, the agent should say not run and provide steps. Demanding green results at any cost invites false reports. Filling six headings checks structure, not correctness; inspect whether their contents are specific and consistent.



### Definition and conditions

A task brief states goal, context, scope, acceptance, verification and delivery. Plain wording is enough if it directs action.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Limit this task to one behavior change and give current context.
- Specify normal, boundary and failure outcomes, and scope that must not silently expand.
- Request reviewable checks, change explanations and verification gaps.



### Concept check

Which sentence reduces ambiguity?


- A. Be extremely professional
- B. Three spaces add nothing and give understandable feedback
- C. Change as many files as possible

Answer: B


- A: No outcome is specified.
- B: Concrete input and result support direct acceptance checks.
- C: File count is not quality.



### Interactive activity

Does this task brief let you judge the result?

[Open this activity](./#/book/ai-development/task-prompts/experiment)The goal only says improve the site.


- Already clear
- Specify one behavior change
- Add more expert role titles

Reference choice: B


- There is no completion criterion.
- Define this task's outcome first.
- Titles do not constrain behavior.

Acceptance only says good experience.


- Write input, action and result
- Skip acceptance
- Let AI choose every standard

Reference choice: A


- Turn preferences into checkable outcomes.
- Without criteria, changes are hard to judge.
- You should confirm standards serve the user goal.

The agent has no browser. What should it report?


- Claim page checks passed
- List unchecked items and your check steps
- Hide the limitation

Reference choice: B


- That fabricates evidence.
- This accurately describes capabilities and evidence.
- Limits affect whether you can accept the result.



Turn a vague request into a lab brief. For each line, ask whether you can check it.



### Task brief example



#### goal

Reject whitespace-only plans while retaining trimming for valid titles.



#### context

Read tasks.mjs, app.mjs and tasks.test.mjs. Existing personal list; no third-party dependencies.



#### scope

No backup-format changes, new dependencies or synchronization service.



#### acceptance

Three spaces add nothing and show feedback; '  Learn Git  ' saves as 'Learn Git'; accept 80 and reject 81 UTF-16 code units.



#### verification

Run npm test and inspect page input and feedback. Without a browser, state gaps and manual steps.



#### delivery

Changed files, key diffs, actual command results, page checks and unverified items.



### Example 1: A whitespace-title brief

Rewrite fix input as an actionable task.


- State that three spaces currently create an item.
- Give accepted and rejected cases.
- Limit scope and request tests and browser checks.

Goal: reject whitespace-only plans.
Context: read tasks.mjs, app.mjs and tests.
Scope: no storage-format changes or new dependencies.
Acceptance: three spaces add nothing and show feedback; '  Learn Git  ' is saved as 'Learn Git'.
Verification: run npm test and inspect input/feedback in the page; state any checks unavailable.
Delivery: files changed, command results and limitations.



### Example 2: Make a style request concrete

How can make the button more premium become actionable?


- Give usable visual references or preferences and their purpose.
- Limit the change to styles.
- Add mobile and keyboard criteria.

Make the Add button dark green with rounded corners, preserving current typography. Change styling only. At 390px width there must be no horizontal scrolling, focus must be visible and text unclipped. Report changed locations and actual page checks. Adjectives cannot guarantee universal taste.



### Common mistakes



#### Precise prompts require many technical terms.

Plain descriptions of inputs and outcomes can be precise; misused terminology adds confusion.



#### A filled template is automatically an excellent prompt.

It confirms structure only. Goals, truthful context and consistency still require judgment.



### Exercises and solutions



#### Exercise 1

Rewrite optimize all code.

Hint: Choose an observed failure.


- Narrow the behavior scope.
- Add normal, boundary and failure criteria.

Fix only whitespace-only titles being added, preserving other behavior and data format.





#### Exercise 2

Should you demand passing tests at any cost?

Hint: Could the standard be weakened?


- Correct behavior is the goal.
- Do not permit deleted assertions, skipped checks or fabricated results.

No. Require the agreed behavior and honest results, failures and unrun checks.





#### Exercise 3

What can happen without current-project context?

Hint: Which facts must the agent guess?


- Provide relevant paths and inspected facts.
- Confirm consequential unknowns first.

Wrong files, duplicate functionality or unnecessary structure.





#### Exercise 4

When should a new dependency be discussed?

Hint: Does it change an agreed boundary?


- Dependencies are not inherently bad.
- But small changes should not silently expand costs.

If the task excludes new dependencies, explain why existing tools are insufficient and the benefit and maintenance cost before asking you to decide.





### Prerequisites

Give the agent the real project



### Sources


- Anthropic: Prompting practices



SECTION 4.3

## Finish collaboration with evidence

Review diffs, acceptance results and verification evidence before accepting, correcting or splitting the task further.



### Intuition

For a renovation handover, inspect the room rather than just reading the contractor's done message.



### Learning objectives


- Read changed files and key diffs, explaining their relation to the goal.
- After acceptance, leave a focused commit and handoff notes; otherwise return specific evidence.



### Read diffs from the problem outward

Inspect file scope, then key changes. Title validation should include trimming, rejection and feedback, with matching tests. A new framework, broad renames or lockfile changes need a reason. Ask for concrete inputs through unfamiliar syntax, then try them yourself.



### Do not adjust tests to suit incorrect code

If the limit remains 80, deleting the rejection test at 81 is not a fix. A confirmed new standard may change tests, but must preserve complete boundary coverage. Instead of still broken, provide input, actual and expected results, and reproduction steps.



### Leave handoff records

Commit accepted changes with a clear purpose and record implementation, checks and gaps. Future sessions should read those records. Track accepted, awaiting checks and deferred separately. Read, tested and deployed are distinct states; one done label should not hide them.



### Definition and conditions

Review diffs, acceptance results and verification evidence before accepting, correcting or splitting the task further.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Read changed files and key diffs, explaining their relation to the goal.
- Follow predefined acceptance cases and check real results and gaps.
- After acceptance, leave a focused commit and handoff notes; otherwise return specific evidence.



### Concept check

What supports accepting a change?


- A. Agent confidence
- B. Relevant diffs, acceptance results and actual tests
- C. More lines of code

Answer: B


- A: Confidence does not replace checks.
- B: This evidence can be compared with the goal.
- C: Line count has no direct relation to user outcomes.



### Interactive activity

If tests pass, must you still review diffs?

[Open this activity](./#/book/ai-development/review-changes/experiment)A color change adds a data migration.


- Ask why it is necessary
- Accept immediately
- Skip the file list

Reference choice: A


- The link between data changes and styling is unclear.
- Existing data may be changed unintentionally.
- You lose scope awareness.

Tests were deleted and results are green.


- Declare completion
- Restore necessary coverage against criteria
- Praise the model more

Reference choice: B


- Green may reflect a lowered standard.
- Keep both criteria and evidence.
- Praise does not establish behavior.

You find a refresh failure. How next?


- Repeat think harder
- Give reproduction, actual and expected results
- Rewrite everything

Reference choice: B


- No new diagnostic evidence is supplied.
- The next change can target a concrete failure.
- Diagnose before rewriting.



Fill a correction brief in the lab with evidence instead of still broken.



### Task brief example



#### goal

Diagnose and fix list loss after refresh within existing scope.



#### context

At http://127.0.0.1:5180, adding Learn Git works, then refresh empties the list. Persistence is expected. I will attach the original error.



#### scope

Inspect save/load and origin first. No site rewrite, new service or overwriting old data.



#### acceptance

At the same URL, ordinary additions survive refresh; whitespace remains rejected; failed writes clearly say data was not saved.



#### verification

Repeat reproduction, run rule tests and inspect related errors. State anything you cannot execute.



#### delivery

Root cause and evidence, minimal fix, actual verification and remaining risks.



### Example 1: Review a whitespace fix

The change adds a large dependency. Is it reasonable?


- Check whether trim and existing validation suffice.
- Ask for the dependency's necessity and maintenance cost.
- Remove unrelated changes if unnecessary, then reverify.

The current functions can implement this rule. Explain the dependency's specific purpose; if unnecessary, retain the existing dependency structure. Rerun existing tests and report results rather than deleting tests to reduce files.



### Example 2: A useful correction request

Items disappear after refresh. How should you report it?


- List input and action order.
- State actual and expected results.
- Provide URL, console details and checked scope.

At http://127.0.0.1:5180, adding Learn Git displays it, but refresh empties the list. It should persist. Inspect saving, loading and error handling; explain the cause and make a minimal fix without adding synchronization.



### Common mistakes



#### Accept every diff you do not understand.

Choose key behavior, ask for concrete-input explanation and verify it yourself.



#### Delete failing tests.

Decide whether implementation violates requirements or requirements were deliberately changed; green alone is not the goal.



### Exercises and solutions



#### Exercise 1

Twenty files changed for one color. What first?

Hint: Does scope match the purpose?


- Keep review manageable.
- Many files are not automatically wrong, but every change needs a reason.

Inspect files and diffs, explain unrelated changes and reduce to necessary style changes.





#### Exercise 2

How can the agent explain an unfamiliar condition?

Hint: Provide concrete inputs.


- Make the explanation executable.
- Do not settle for abstract praise.

Trace three spaces and an ordinary title through the branch, stating intermediate values and whether an item is created.





#### Exercise 3

The limit is 80 but its test was deleted. Accept?

Hint: Was the standard explicitly changed?


- Compare with original criteria.
- Tests provide evidence, not decoration.

Not just because results are green. Restore boundary coverage and fix behavior, unless a confirmed new standard has complete replacement tests.





#### Exercise 4

Write a handoff note.

Hint: State done, checked and unchecked.


- State the evidence scope.
- The next task can continue from it.

Whitespace rejection is fixed and committed. npm test passed and browser feedback was checked. Other browsers and concurrent tabs remain unverified.





### Prerequisites

Write an actionable task brief



### Sources


- Git: diff
- Node.js: Test runner





### Chapter review and solutions

Write a brief for fixing list loss after refresh.

Hint: Give current behavior, scope, criteria and evidence.


- Make the failure reproducible.
- Constrain unrelated structural changes.
- Deliver command results and verification gaps.

Require persistence; provide URL, steps, actual/expected results and save/load files. Diagnose first without adding synchronization. Request actual tests and browser evidence.

The agent changes 20 files for button color. How do you review?

Hint: Can each change be justified?


- File count alone does not decide correctness.
- Check whether data and dependency changes are necessary.
- Record checks after acceptance.

Inspect files and diffs, ask why unrelated changes are necessary, reduce to styling scope and check keyboard and narrow screens.

CHAPTER 5

## Judge reliability

Choose tests yourself, reproduce failures and maintain data and permission boundaries.



SECTION 5.1

## Choose checks that matter

Tests compare given inputs with expected results. Normal, boundary and failure coverage matter more than test count.



### Intuition

Opening an umbrella in sunshine does not establish how it handles rain and wind.



### Learning objectives


- Choose normal, boundary and failure cases from acceptance criteria.
- Report commands, results, coverage and remaining checks.



### Start with acceptance cases

For creation, check ordinary text, whitespace, 80/81 code units, duplicate titles and capacity. Expectations come from requirements, not copying current function results. Fast data-rule tests complement browser checks of feedback, refresh, keyboard and narrow layouts.



### Read one test first

This example uses Node's built-in test runner. test names a case; assert.equal compares values; assert.throws checks rejection. npm test runs node --test tasks.test.mjs. Start by explaining one test's input, expected outcome and purpose rather than learning every framework.



### Do not let implementation and expected answer share a mistake

Recomputing the same algorithm in an assertion may repeat its error. Establish expectations with simple manual cases, before/after comparison or an independent method. When deleting the second duplicate title, inspect which record remains. Passing tests establish their cases, not all security, browsers and inputs.



### Definition and conditions

Tests compare given inputs with expected results. Normal, boundary and failure coverage matter more than test count.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Choose normal, boundary and failure cases from acceptance criteria.
- Check rules against independent expectations, then inspect browser interactions.
- Report commands, results, coverage and remaining checks.



### Concept check

Which is a good deletion test?


- A. Only check that the array shrinks
- B. Check the intended remaining ID and original content
- C. Only check the page did not crash

Answer: B


- A: The wrong object might be deleted.
- B: This matches the selected record's behavior.
- C: The data result is unchecked.



### Interactive activity

Which kind of check supports which conclusion?

[Open this activity](./#/book/ai-development/testing/experiment)A pure-function whitespace test passed. What does it prove?


- The data rule rejects that input
- Page feedback is visible
- All browsers are compatible

Reference choice: A


- The assertion covers this rule.
- The page was not run.
- This case does not cover every browser.

A duplicate-title deletion test checks only length.


- Enough
- Add remaining-ID and content assertions
- Disallow duplicate titles

Reference choice: B


- Wrong-item deletion might still pass.
- Identity checks match the behavior.
- Do not remove allowed inputs to suit a weak test.

Only Node tests were run. What report fits?


- The whole site is verified
- Rules tested; browser checks pending
- Publish without looking at the page

Reference choice: B


- This overstates the evidence.
- This states what the checks support.
- Interaction failures may remain.



Read one project test yourself. Write its input, expectation and what it does not check.



### Example 1: Read a blank-input test

What does assert.throws(() => addTask([], "   ", "a")) check?


- Inputs are an empty array, three spaces and an ID.
- Expect addTask to throw a handled error.
- The page must separately catch it and display feedback.

It supports rejection by the data rule, not visible feedback. No page event or rendering was exercised, so browser acceptance is still needed.



### Example 2: A deletion test

How can deletion of one duplicate title be checked independently?


- Create same-title records with IDs a and b.
- Delete b.
- Expect only a, with its original content and state.

Compare the explicit remaining record, not just length 1. Otherwise deleting the wrong record might pass.



### Common mistakes



#### More tests always mean more reliability.

Repeating one path can hide omissions. Prioritize important behavior and boundaries.



#### AI-written tests mean verification is complete.

Run them and compare expectations with requirements.



### Exercises and solutions



#### Exercise 1

Give three creation-rule cases.

Hint: Happy path, boundary and rejection.


- Cover the three behaviors.
- State an expected outcome for each.

Ordinary Learn Git; 80 accepted and 81 rejected; whitespace-only rejected.





#### Exercise 2

Does length changing from 2 to 1 prove the correct item was removed?

Hint: The wrong one could be removed.


- Length establishes only count.
- Identity determines which item was deleted.

No. Check the remaining ID and content.





#### Exercise 3

Do passing rule tests establish refresh persistence?

Hint: Did the test access browser storage?


- Separate data functions from page integration.
- Obtain evidence in the relevant environment.

No. These do not exercise app.mjs and storage. Add and refresh in the browser.





#### Exercise 4

How should an agent unable to run tests report?

Hint: Evidence must be truthful.


- Existing test code is not successful execution.
- Verification gaps should affect acceptance.

State not run and why, give commands and expected behavior, and let you execute and record actual results. Do not claim passed.





### Prerequisites

Finish collaboration with evidence



### Sources


- Node.js: Test runner



SECTION 5.2

## Reproduce before guessing

Record environment, actions, actual and expected results. Reproduce reliably, narrow the failing data stage and make a minimal fix.



### Intuition

If one tap has no water, check whether other taps work before dismantling the house.



### Learning objectives


- Record environment, steps, actual and expected behavior and original errors.
- Retest the failure and nearby boundaries, recording cause and evidence.



### Preserve the first error

Record directory, command, URL, input and full error. Browser Console shows script errors; Network shows requests. Screenshots help, but text and steps are easier to reproduce. Replace credentials and private log content with descriptive placeholders before sharing.



### Test one hypothesis

Refresh loss might mean failed saving, failed loading or changed origin. Inspect one hypothesis at a time: same URL, write errors, matching keys. Ask for the next check that distinguishes causes. Changing ten things obscures the cause and can introduce side effects.



### Retest the original and neighboring cases

After a minimal fix, repeat the failure and related cases: ordinary saving, whitespace rejection and invalid backup preservation. Record cause, fix, checks and remaining issues. Abandon guesses contradicted by evidence. Swallowing exceptions is not success; users need to know data was not saved.



### Definition and conditions

Record environment, actions, actual and expected results. Reproduce reliably, narrow the failing data stage and make a minimal fix.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Record environment, steps, actual and expected behavior and original errors.
- Test one hypothesis along the data path to narrow the cause.
- Retest the failure and nearby boundaries, recording cause and evidence.



### Concept check

Which debugging request is useful?


- A. Broken again; think harder
- B. Environment, steps, actual/expected results and original errors
- C. Rewrite everything

Answer: B


- A: No new diagnostic evidence.
- B: This enables reproduction and diagnosis.
- C: Scope is broad before the cause is known.



### Interactive activity

Refresh loss has three plausible causes. How do you narrow them?

[Open this activity](./#/book/ai-development/debugging/experiment)Ports differ before and after refresh. What first?


- Check origin-specific storage
- Change all JavaScript
- Hide errors

Reference choice: A


- The port change itself may explain missing records.
- There is no evidence for rewriting all code.
- Hiding information obstructs diagnosis.

A write definitely throws. What should the page do?


- Report success
- Report not saved and retain reliable state
- Silently clear data

Reference choice: B


- Success would contradict the write result.
- State the failure without misleading the user.
- This destroys existing work.

The fix now works. What next?


- Repeat the original and related boundary checks
- Expand features immediately
- Delete reproduction notes

Reference choice: A


- Confirm the fix and inspect side effects.
- Finish the current problem first.
- Records support later handoffs.



Choose a reproducible problem, write its report and distinguish confirmed facts from open hypotheses.



### Example 1: Data disappears on refresh

What diagnostic material should the agent receive?


- State browser and URL.
- Record add-visible-refresh-empty steps.
- Give persistence expectations and the original console error.

Environment: http://127.0.0.1:5180 locally. Add Learn Git, confirm it appears, then refresh. Actual: empty list. Expected: retained item. Original console error attached. Distinguish save failure, load failure and origin changes before rewriting anything.



### Example 2: Storage is blocked

Should a saving exception be caught and reported as success?


- Observe the write did not persist.
- Keep the previous reliable state and report not saved.
- When storage works, verify refresh again.

Do not claim saved. Handle failure visibly and distinguish memory changes from persisted data. This example updates the displayed list only after a successful write; failure preserves the previous state.



### Common mistakes



#### If a fix fails, rewrite everything.

Reproduce and narrow first; a rewrite discards already-verified behavior.



#### Hiding errors makes the app stable.

Suppressed exceptions can silently lose data. Give understandable feedback.



### Exercises and solutions



#### Exercise 1

Expand the report saving is broken.

Hint: Supply four kinds of information.


- Enable another person to reproduce it.
- Give evidence, not only a conclusion.

URL and environment, steps, actual versus expected results, and original errors.





#### Exercise 2

The list is empty after changing ports. What first?

Hint: How is storage isolated?


- Confirm the cause before editing.
- Expected isolation does not mean all persistence code is broken.

Check origin changes. Ports have separate localStorage and do not migrate automatically.





#### Exercise 3

Five simultaneous edits made it work. What is missing?

Hint: Which one fixed it?


- Prefer an explainable fix.
- Temporary disappearance of the symptom is insufficient.

The cause is unclear and other edits may have side effects. Narrow the diff and verify each part.





#### Exercise 4

What should be checked after a persistence fix?

Hint: The original case and nearby failures.


- Avoid fixing one behavior while breaking another.
- Choose boundaries related to the change.

Refresh reproduction, ordinary creation, whitespace rejection, write-failure feedback and invalid-import preservation.





### Prerequisites

Choose checks that matter



### Sources


- MDN: localStorage
- Node.js: Test runner



SECTION 5.3

## Treat data and permissions as part of the project

Separate public code, user input and secrets. Grant task-necessary permissions and define deletion, upload and overwrite boundaries.



### Intuition

Giving a repairer the door key does not grant access to every room and safe.



### Learning objectives


- Identify secrets, user data and public files; keep secrets out of browser code and commits.
- Define authorization for deletion, overwrite, upload and publication before executing verified actions.



### Browser code cannot hide secrets

API keys, tokens and passwords are secrets. Users can inspect HTML and JavaScript delivered to browsers. Whether .env values enter a bundle depends on tooling; its filename is no guarantee. After a leak, revoke or rotate first and follow repository cleanup procedures. Share only task-needed context, never real credentials or private datasets by default.



### Treat input as input

A title like <img ...> must remain text, not become page code. This example uses textContent, and validates backup fields, types, count, unique IDs and version after parsing. JSON.parse success establishes syntax, not business validity. Reject invalid backups completely to avoid partial destructive imports.



### Define consequential actions

Deleting a practice file differs from deleting a production database. Specify allowed directories and prohibit private uploads, deployment or real-data changes unless authorized. Backup restoration replaces the whole list: validate first, show counts and require an explicit confirmation action. Reading project files does not authorize uploading them anywhere.



### Definition and conditions

Separate public code, user input and secrets. Grant task-necessary permissions and define deletion, upload and overwrite boundaries.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Identify secrets, user data and public files; keep secrets out of browser code and commits.
- Validate input and backup syntax and business rules; render input as text.
- Define authorization for deletion, overwrite, upload and publication before executing verified actions.



### Concept check

What does putting a secret in webpage JavaScript mean?


- A. Only I can see it
- B. Clients can inspect it; it is not secret
- C. A complicated name protects it

Answer: B


- A: Delivered browser code is inspectable.
- B: Choose appropriate secret storage and permissions.
- C: Name complexity does not restrict reading.



### Interactive activity

Where must you make decisions about imports and uploads?

[Open this activity](./#/book/ai-development/security/experiment)A backup parses, but done is a string.


- Accept all records
- Reject invalid types and preserve old data
- Silently rewrite every field

Reference choice: B


- Invalid content would enter the state.
- Syntax and business validation are different.
- Unspecified automatic repair can misinterpret data.

The agent wants to upload logs externally.


- Check secrets, purpose and authorization first
- Approve every upload
- Paste all passwords to help

Reference choice: A


- Read access does not automatically permit disclosure.
- Logs may contain private information or credentials.
- Do not expose secrets in context.

A valid backup will replace the current list.


- Overwrite immediately
- Show counts, recommend backup and confirm
- Join arrays randomly

Reference choice: B


- Existing data could be lost.
- Explain the effect and act on confirmation.
- Random merging may duplicate IDs and corrupt records.



Write one input-validation rule and one agent permission boundary for your project.



### Example 1: A pushed credential

Is removing a key from the latest file enough?


- History may still expose it and copies may exist.
- Revoke or rotate it at the provider first.
- Then clean code and history under project procedures and inspect usage logs.

No. Removing text does not invalidate a credential. Disable it first, then address repository and logs. Do not paste the real key into agent context for evaluation.



### Example 2: An invalid backup

The JSON parses, but done is the string "false". Accept it?


- Valid syntax does not guarantee valid field types.
- done must be a boolean.
- Reject the entire backup and preserve the current list.

Reject it. The string "false" is truthy in many conditions and could display completion incorrectly. Validate every record; replace only after full validity and user confirmation.



### Common mistakes



#### Run suggested commands without understanding them.

Understand affected paths, data and permissions first. Consequences need deliberate judgment.



#### An obscure variable name protects a browser-side key.

Clients can inspect delivered code. Renaming does not restrict access.



### Exercises and solutions



#### Exercise 1

A real token appears in a public commit. What first?

Hint: Make the old credential unusable.


- Deleting text does not revoke it.
- Do not forward it into AI context.

Revoke or rotate at its provider, then handle history and usage records.





#### Exercise 2

How should an HTML-looking title be displayed?

Hint: Treat it as text.


- Do not judge safety by whether input looks like code.
- Input should not acquire execution privileges.

Use textContent or equivalent safe text rendering rather than concatenating input into HTML.





#### Exercise 3

A parsed backup lacks id. May it replace the list?

Hint: There is an agreed data schema.


- Validate required fields and types.
- Do not partially import and overwrite existing data.

No. Reject it entirely, retain old data and explain invalid record format.





#### Exercise 4

Does asking an agent to fix CSS authorize deployment?

Hint: Editing and publication are separate actions.


- Permissions follow task scope.
- A tool's capability is not user authorization.

No. Styling permission does not authorize deployment, uploads or real-data operations.





### Prerequisites

Reproduce before guessing



### Sources


- OWASP: Secrets management
- MDN: textContent





### Chapter review and solutions

Why do green automated tests not establish whole-site verification?

Hint: What actually executed?


- List coverage.
- Add normal, boundary and failure interaction checks.
- Limit conclusions to actual evidence.

Rule tests do not exercise browser events, storage or layout. Perform relevant page checks and report gaps.

A backup is valid JSON but has invalid fields. What happens?

Hint: Syntax differs from business validity.


- Parse first.
- Validate every record.
- Write only after validity and confirmation.

Reject the entire file without replacing the list. Validate version, fields, types, IDs and limits.

CHAPTER 6

## Finish and deliver a small project

Choose suitable storage, check the published version and deliver something runnable and explainable.



SECTION 6.1

## Decide how data persists

Storage design depends on readers and writers, retention, recovery and future format changes.



### Intuition

Notes on one computer and a shared cloud document have different access, recovery and collaboration behavior.



### Learning objectives


- Specify fields, types, unique identity and allowed input.
- Practice valid restoration and invalid rejection; handle format versions explicitly.



### Give records a clear shape

Each record has id, title and done: identity, readable text and completion state. Backups wrap tasks in a versioned object. Versions identify formats. Duplicate titles are allowed; IDs must be unique. These contracts affect creation, display, deletion, tests and restoration, so renaming one field in isolation is unsafe.



### Local storage can fail

localStorage stores strings for an origin across page loads. Users can clear it; browsers may restrict or reject writes; capacity is limited. Tabs may overwrite one another, and this example has no concurrency coordination. It suits a personal first release, not a reliable multiuser database.



### A backup matters only if it restores

Export JSON and actually restore it. Reject bad data without replacing existing records. Report failed writes. If reading fails, pause writes rather than overwriting damaged data with an empty list. Recognize versions and migrate or reject explicitly. This example implements no complex migration and rejects versions other than 1.



### Definition and conditions

Storage design depends on readers and writers, retention, recovery and future format changes.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Specify fields, types, unique identity and allowed input.
- Explain data location, retention and failure cases.
- Practice valid restoration and invalid rejection; handle format versions explicitly.



### Concept check

Why use IDs rather than titles alone?


- A. To look professional
- B. To target one of several same-title records
- C. To synchronize every device

Answer: B


- A: Identity has a concrete use.
- B: Titles may repeat; IDs distinguish records.
- C: IDs do not provide shared storage.



### Interactive activity

Are parseable backups and reliable restoration equivalent?

[Open this activity](./#/book/ai-development/data-design/experiment)Reading the current list fails.


- Immediately save an empty list
- Pause writes, preserve old data and explain
- Show saved successfully

Reference choice: B


- This overwrites potentially useful data.
- Preserve records and diagnostic clues.
- This contradicts the actual state.

A backup has an unknown version.


- Reject explicitly until migration is designed
- Ignore the version and load anyway
- Assume every done value is true

Reference choice: A


- This prevents misreading field meanings.
- The format may differ and loading can corrupt records.
- This changes recorded state.

What should a restoration rehearsal inspect?


- Only whether a file downloads
- Every ID, title and completion state
- Only file size

Reference choice: B


- Download success is not recoverability.
- Complete records support the restoration conclusion.
- Size does not establish correct meaning.



Inspect the sample records, run backup round-trip tests and perform an actual restoration.



### Example 1: Why titles are not IDs

Two plans are titled Practice Git. How can only the second be completed?


- Assign independent IDs.
- Pass the chosen ID from the interface action.
- Locate by ID instead of matching every title.

Titles support reading; IDs locate records. Same-title items can have different completion states, giving identity a practical purpose.



### Example 2: Why version backups?

A new backup replaces done with status. Can the old program read it?


- The current program expects boolean done.
- An unknown format may render incorrectly.
- Recognize the version and deliberately migrate or reject.

The program accepts only version: 1 with id/title/done. Reject unknown versions while preserving the list. Future upgrades need explicit migration rules and tests, not assumed compatibility.



### Common mistakes



#### Local saving means data cannot be lost.

Clearing, storage errors, changed devices and changed origins can remove access. Keep restorable backups.



#### A download button proves backups are reliable.

Download a valid file and restore its complete content and state.



### Exercises and solutions



#### Exercise 1

Document the record fields.

Hint: Give names, types and purpose.


- Distinguish identity from display text.
- Explicit bounds support validation.

id: nonempty unique string; title: 1–80 code units after trimming; done: boolean.





#### Exercise 2

Do localhost and 127.0.0.1 share data on the same port?

Hint: Different hosts mean different origins.


- One computer does not imply one storage space.
- Use backup restoration to migrate instead of assuming it happens.

No. Protocol, host and port jointly determine localStorage origin.





#### Exercise 3

Why avoid writing an empty list after a damaged read?

Hint: Original data may remain recoverable.


- Preserve diagnostic evidence.
- A read failure does not mean the user had no data.

That overwrites old content. Pause writes, explain the failure and restore deliberately from a valid backup.





#### Exercise 4

Can the first release handle concurrent multiuser editing unchanged?

Hint: It lacks shared storage, permissions and conflict coordination.


- Simple designs have limits.
- Changing domains or adding a button is insufficient.

No. Reconfirm requirements and design shared storage, identity, permissions and conflicts.





### Prerequisites

Treat data and permissions as part of the project



### Sources


- MDN: localStorage
- Node.js: Test runner



SECTION 6.2

## Know which version you are delivering

Deliver runnable instructions, a checked version, evidence, limitations and recovery steps. Check the real URL after deployment.



### Intuition

A workshop sample working locally does not establish that the delivered version works at the customer's site.



### Learning objectives


- Prepare setup, version, check results and known limitations.
- Keep a previous working version and recovery instructions; distinguish code rollback from data migration.



### Prepare the delivery materials

README should explain tools, commands, scope and limits. Match commits and version notes to actual checks. Projects with dependencies install from lockfiles and build. This example needs no bundling: publish index.html, style.css, app.mjs and tasks.mjs. Tests and the local server are not browser entry files.



### Recheck the public URL

A development server is local. Deployment puts runnable artifacts in the target environment. At the real URL, check resource requests, actions, keyboard, narrow screens and saving. Localhost records do not migrate to the new origin. Hosting paths vary; follow the target's instructions. This book does not create hosting accounts or buy services for readers.



### Separate code and data recovery

Record the previous working code and publication procedure. Restore a usable artifact and verify it after failure. Old code may not understand new data; format changes need backup and migration planning. Even without upgrades, this example's restoration replaces records. Keep an error-reporting route after release.



### Definition and conditions

Deliver runnable instructions, a checked version, evidence, limitations and recovery steps. Check the real URL after deployment.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Prepare setup, version, check results and known limitations.
- Check artifacts and destination, publish within authorization and inspect the real URL.
- Keep a previous working version and recovery instructions; distinguish code rollback from data migration.



### Concept check

What supports the claim public version verified?


- A. A local screenshot
- B. Checks tied to the live URL and version
- C. A PR title

Answer: B


- A: This does not establish public execution.
- B: The evidence matches the actual deployment.
- C: A PR does not establish publication.



### Interactive activity

Which delivery states must remain distinct?

[Open this activity](./#/book/ai-development/release/experiment)npm test passed but the page was never opened.


- The whole site is accepted
- Rules checked; page checks pending
- The site is published

Reference choice: B


- Rule tests do not cover the interface.
- The evidence scope is accurate.
- Tests do not automatically deploy.

Code merged. Is the live URL updated?


- Certainly
- Check deployment and actual version
- All old data migrated

Reference choice: B


- This depends on publication configuration.
- Identify the deployed artifact before concluding.
- Data migration is separate.

A release changes data format. What before rollback?


- Roll back code alone
- Backup data and inspect compatibility/migration
- Clear every record

Reference choice: B


- Old code may not read new data.
- Plan the recovery's effects.
- This enlarges data loss.



Write a delivery checklist distinguishing local, merged and deployed states.



### Example 1: Hand the project to a friend

What is needed besides source files?


- State tool versions and directory.
- Give tests, startup and URL.
- Explain local data, no synchronization and backups.

README: Node.js 22.12+; run npm test then npm start in the project directory; open local port 5180. Include version, actual checks, restoration and untested environments. Record your friend's results after they run it.



### Example 2: Empty data after publication

Why is a local list absent on the public site?


- Compare URL origins.
- They use different localStorage.
- Restore a validated backup explicitly rather than claiming automatic migration.

Different local data locations explain it. Export locally, then validate and confirm restoration at the destination. Do not publish user backups publicly as a migration shortcut.



### Common mistakes



#### Opening locally verifies deployment.

Record local and actual deployment checks separately.



#### Old code repairs every new-data problem.

Formats may be incompatible; code and data have separate recovery paths.



### Exercises and solutions



#### Exercise 1

Which files does this example publish?

Hint: Server and tests are not needed by the page.


- Browsers load the entry point and its referenced resources.
- Hosting serves the files; local server.mjs does not become a business backend.

index.html, style.css, app.mjs and tasks.mjs, preserving relative paths.





#### Exercise 2

What belongs in local and public check records?

Hint: Environment and actual version.


- Identify which artifact was checked.
- Do not relabel local evidence as public-site evidence.

URL, deployed/commit version, check actions, results and gaps.





#### Exercise 3

Old code cannot read the new backup after rollback. What follows?

Hint: Program and format may be incompatible.


- Separate code state from data state.
- Preserve current data before following a deliberate recovery procedure.

Handle the data version or restore a compatible backup too. Code rollback alone does not prove recovery.





#### Exercise 4

What final consequential check precedes publication?

Hint: Destination and effects.


- Do not reapprove every reversible edit.
- Publication and real-data actions have separate consequences.

Confirm authorization, target repository or URL, artifact version and absence of secrets; prepare recovery.





### Prerequisites

Decide how data persists



### Sources


- MDN: Your first website
- MDN: localStorage
- GitHub: Pull requests



SECTION 6.3

## Lead one complete development cycle with AI

A full cycle defines the problem, limits scope, sets criteria, implements in steps, verifies, records and delivers. It is more than one request.



### Intuition

An assistant can prepare and cook, while you still choose the menu, judge the result and decide whether to serve it.



### Learning objectives


- Write a one-page plan and three kinds of acceptance cases, then delegate one small task.
- Deliver a reproducible project and explain its behavior, limits and next learning steps independently.



### Write your own plan first

Use the study list without reading the reference implementation initially. Write scenario, now/later scope, file responsibilities, data fields and acceptance cases. Give the agent one small task brief. The reference is a comparison, not proof of your understanding. Explain each step's purpose and check yourself.



### Progress through checkpoints

Checkpoint 1: page and creation. 2: completion and deletion. 3: persistence and backup. 4: tests, diagnosis and instructions. At each, review diffs, run checks, inspect the browser and commit. Suggestions for chat, payments or synchronization should be judged against agreed scope, not novelty.



### Use explanation to find the next lesson

Have another person run README. Explain where data lives, what commit records, why blanks are rejected, how to diagnose refresh loss, who sees data and which cases remain unchecked. Revisit lessons you cannot explain. This framework supports small projects; further study of programming, HTTP, data and security remains valuable.



### Definition and conditions

A full cycle defines the problem, limits scope, sets criteria, implements in steps, verifies, records and delivers. It is more than one request.


- For small personal learning projects. In shared repositories, follow the team's conventions.
- This method produces checkable evidence; it cannot guarantee arbitrary AI output is correct.



### How it works


- Write a one-page plan and three kinds of acceptance cases, then delegate one small task.
- At each checkpoint, review, verify, correct and record a focused change.
- Deliver a reproducible project and explain its behavior, limits and next learning steps independently.



### Concept check

What must you control in AI-assisted development?


- A. An ever-growing wish list
- B. Goals, boundaries, evidence and delivery responsibility
- C. The most complicated framework every time

Answer: B


- A: Ideas do not automatically become verifiable projects.
- B: These keep AI work aligned with your direction.
- C: Complexity is not suitability.



### Interactive activity

Without a reference answer next time, how would you start?

[Open this activity](./#/book/ai-development/capstone/experiment)What is the first material?


- Every feature wish
- User scenario, first-release scope and criteria
- Model rankings

Reference choice: B


- Scope and completion are unclear.
- This gives collaboration a checkable starting point.
- Rankings do not decide user purpose.

The agent reports completion. What do you do?


- Review diffs, evidence and acceptance yourself
- Accept everything immediately
- Compare line counts

Reference choice: A


- Decide from actual outcomes.
- Judgment and verification are missing.
- Lines do not measure user value.

What should delivery leave behind?


- Source, setup, version, checks and limitations
- Only screenshots
- Only success

Reference choice: A


- Another person can reproduce and continue.
- A screenshot cannot run or restore the project.
- There are no usable materials.



Independently deliver the appendix project or one of comparable scope, including the capstone's evidence.



### Example 1: One creation-feature cycle

How do you go from requirement to commit?


- Scenario: record tomorrow's study plan in the evening.
- Task: create nonblank titles and reject blanks, deferring persistence for now.
- Review the diff, run rule tests, try both inputs and commit.

Record: creation and blank rejection implemented; tests actually passed; ordinary and blank browser submissions checked. Refresh persistence is not implemented and belongs to the next checkpoint. Do not call one checkpoint the entire completed project.



### Example 2: Choose the next step

After a personal list, should you add search or multiuser synchronization?


- Ask whether the problem is finding many items or actually sharing them.
- Search extends local filtering; synchronization changes data location and permissions.
- Choose the actual problem, then write new scope and criteria.

For many hard-to-find plans, add search and test empty queries, case handling and completed items. For genuine sharing, design permissions and conflicts first; this is not an equally small change.



### Common mistakes



#### Finishing means I no longer need to understand code.

Understand the key path at least. Learning the language improves your judgment.



#### Good developers never use AI.

AI can implement and explain while you determine goals, inspect results and own decisions.



### Exercises and solutions



#### Exercise 1

Name seven steps in one collaboration cycle.

Hint: From problem to delivery.


- Each step provides evidence for the next.
- The process goes beyond prompting.

Problem → scope → acceptance → small implementation steps → verification and correction → Git records → delivery instructions.





#### Exercise 2

Creation alone is complete. May you claim the whole project finished?

Hint: Separate a checkpoint from the first-release goal.


- State progress accurately.
- Keep incomplete work in the plan.

No. Record accepted creation while persistence and other checkpoints remain pending.





#### Exercise 3

A plan cannot be found. Search or synchronization first?

Hint: Establish the cause.


- The same symptom may have different causes.
- Choose the design that addresses this problem.

Many items may call for search; records on another device concern synchronization. Reproduce the actual user difficulty first.





#### Exercise 4

How can you tell you are learning this framework?

Hint: Explain without quoting the text.


- Use independent explanation and actual operation.
- Counted terminology is not understanding.

You can write briefs, locate data, explain staging, choose boundary cases, report verification limits and help someone run the project.





### Prerequisites

Know which version you are delivering



### Sources


- MDN: Your first website
- Node.js: Test runner
- Pro Git: Recording changes





### Chapter review and solutions

What should a personal-list handoff include?

Hint: Let someone else run and understand it.


- Prepare runnable materials.
- Match the delivered version to checks.
- Explain data location and restoration.

Source, runtime requirements, commands, version, acceptance evidence, limitations, backup/recovery instructions and deferred ideas.

How should upgrading to multiuser synchronization begin?

Hint: Sharing changes access and permissions.


- An icon is not synchronization.
- The original local-storage design has limits.
- Build around confirmed scenarios.

Confirm separate/shared records, read/write permissions, conflicts and recovery, then rewrite scope and acceptance.



## Final assessment and solutions

Capstone: independently deliver a personal study list.

Hint: Follow the four checkpoints.


- Specify the user and first release, excluding synchronization.
- Include ordinary creation, whitespace, duplicate titles, toggling, refresh and valid/invalid restoration.
- Implement creation, manipulation, storage and handoff checkpoints, reviewing and checking each.
- Compare with the appendix rather than merely copying; record unchecked environments and limits.

Deliver a one-page plan, at least 6 acceptance cases, data/file maps, 2 briefs, at least 3 focused commits, test and browser evidence, README and runnable source.

Evaluate: AI adds a cloud service and embeds a key in the webpage to change a button color.

Hint: Check goal, scope and secrets.


- The change does not match the color task.
- Read/edit permissions do not authorize a new external service.
- Inspect diffs, lockfiles and artifacts; check keyboard and mobile layout.

Reject unrelated cloud services and client-side secrets. If exposed, revoke/rotate first. Return to styling scope and recheck.

Evaluate: tests were deleted, saving reports success, but refresh loses records.

Hint: Green results and success text can both mislead.


- Preserve errors and version evidence.
- Do not hide exceptions to report success.
- Judge completion against original criteria.

Do not accept. Restore requirement-based checks, reproduce and distinguish writing, reading and origin failures. Retest after fixing.

Evaluate: after pushing, the agent claims public deployment and synchronized user lists.

Hint: Separate remote code, deployment and user data.


- Push updates a target remote branch only.
- A public page needs deployment and acceptance separately.
- Shared user data needs additional architecture and permissions.

Request accessible branch/PR, deployed URL and version evidence. localStorage does not provide multiuser synchronization; revisit the requirement.



## Glossary



**Agent**: An AI assistant that uses context and may operate tools. Capability does not authorize every operation.



**User scenario**: A person's actions at a particular moment toward a goal, explaining a feature's purpose.



**First release**: The essential complete workflow agreed for the current scenario, not every future idea.



**Acceptance criteria**: Specific inputs, actions and expected outcomes for judging completion.



**Terminal**: A command-entry and execution window. Its directory affects which files commands operate on.



**Runtime environment**: Tools, versions, operating system and configuration required to run code.



**Dependency**: An external package or tool whose versions and maintenance costs need management.



**Lockfile**: Records exact dependency resolution to support reproducible installation; do not delete reflexively on errors.



**Entry point**: Where loading or execution begins, helping trace behavior through files.



**Frontend**: Presentation and interaction in a client such as a browser.



**Backend**: The part commonly handling server-side data, permissions and business logic.



**API**: An agreed program interface specifying inputs, outputs and their meaning.



**localStorage**: Origin-scoped browser string storage, subject to clearing, permissions and capacity.



**Data structure**: Fields, types and relationships governing access, changes and validation.



**ID**: A record's identity, distinct from a display title that may repeat.



**Git repository**: Stores file-version history; distinct from the hosting website.



**Working tree**: The file contents currently being edited.



**Staging area**: Selected content for the next commit, potentially different from current files.



**Commit**: A local version snapshot and record, not created merely by saving a file.



**HEAD**: The currently checked-out commit position, usually following the current branch tip.



**Branch**: A name pointing to a history tip, organizing changes by purpose.



**Remote**: A configured repository location; origin is a conventional name.



**Push**: Update a target remote branch with local branch commits.



**PR**: Review material proposing a merge into a target branch; not automatic merge or deployment.



**Diff**: Comparison of text changes between states, used to inspect scope and behavior.



**Conflict**: An automatic merge cannot decide the result; understand both intentions and resolve explicitly.



**Task brief**: This book's six-part collaboration material: goal, context, scope, acceptance, verification and delivery.



**Assertion**: A test expression checking an expected condition.



**Regression check**: After a fix, recheck existing behavior and relevant boundaries for unintended breakage.



**Secret**: A credential such as a key, token or password. Revoke or rotate after exposure.



**Deployment**: Place runnable artifacts in the intended user-accessible environment.



**Rollback**: Restore usable code or data state, treating each separately.





## Learning outcomes


- Turn an idea into a user scenario, first-release scope and acceptance cases
- Explain the roles of files, data, browsers and servers
- Make focused Git commits and distinguish local commits, pushes, PRs and deployment
- Give an agent accurate context and tasks, then inspect important changes
- Use reproduction, boundary cases and requirements to judge results
- Deliver a runnable small project with backups, recovery and clear limitations



## Scope


- Full algorithms and language training for professional engineering
- Implementation of realtime collaboration, payments, authentication or production databases
- Cloud account registration, paid service selection and automatic deployment
- Advanced Git history rewriting, complex rebases and merge-commit reverts
- Guaranteed prompt outcomes, arbitrary code execution or runtime model services



## Sources

MDN: Your first website

[https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)Check webpage components and the process from planning to publication.

MDN: Client and server

[https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview)Check requests, responses and client/server responsibilities.

MDN: localStorage

[https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)Check origin-scoped persistence, string storage and storage exceptions.

MDN: textContent

[https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)Check inserting input as text.

Pro Git: Recording changes

[https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)Check working-tree, staging and commit distinctions.

Git: diff

[https://git-scm.com/docs/git-diff](https://git-scm.com/docs/git-diff)Check comparisons for unstaged and staged changes.

Pro Git: Branching and merging

[https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)Check branches and conflict handling.

Git: push

[https://git-scm.com/docs/git-push](https://git-scm.com/docs/git-push)Check pushing, remote branches and upstream relationships.

Git: restore

[https://git-scm.com/docs/git-restore](https://git-scm.com/docs/git-restore)Check the different consequences of unstaging and discarding working edits.

Git: revert

[https://git-scm.com/docs/git-revert](https://git-scm.com/docs/git-revert)Check reversing ordinary commits through new commits; merge-commit reversal is out of scope.

Git: stash

[https://git-scm.com/docs/git-stash](https://git-scm.com/docs/git-stash)Check temporary storage and untracked-file options.

GitHub: Pull requests

[https://docs.github.com/en/pull-requests/reference/pull-requests](https://docs.github.com/en/pull-requests/reference/pull-requests)Check review and merge-proposal concepts.

npm: ci

[https://docs.npmjs.com/cli/v11/commands/npm-ci/](https://docs.npmjs.com/cli/v11/commands/npm-ci/)Check clean lockfile-based installation and failure on mismatch.

Node.js: Test runner

[https://nodejs.org/api/test.html](https://nodejs.org/api/test.html)Check node --test and assertions.

Anthropic: Prompting practices

[https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)Used only for general principles of explicit tasks, relevant context and examples. Task briefs and collaboration exercises are original teaching material, without model-performance guarantees.

OWASP: Secrets management

[https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)Check credential lifecycle, least privilege and revocation/rotation after exposure.

Git: fetch

[https://git-scm.com/docs/git-fetch](https://git-scm.com/docs/git-fetch)Check downloading remote history versus merging into the current branch.

Git: pull

[https://git-scm.com/docs/git-pull](https://git-scm.com/docs/git-pull)Check --ff-only fast-forwards and refusal of divergent histories.

Git: init

[https://git-scm.com/docs/git-init](https://git-scm.com/docs/git-init)Check initial branch selection and new repository creation.

Git: Installation

[https://git-scm.com/install/](https://git-scm.com/install/)Provide the official tool-installation entry point.

Node.js: Downloads

[https://nodejs.org/en/download](https://nodejs.org/en/download)Provide the official runtime-installation entry point.



## Project source



## Project milestones



### Checkpoint 1: record a plan

Build the page and creation rule. Ordinary input appears, whitespace is rejected; persistence is deferred.


- Rule tests: ordinary, whitespace, 80 and 81
- Browser submission and feedback
- Review the diff and commit



### Checkpoint 2: operate on the correct record

Toggle and delete by ID without affecting duplicate titles.


- Toggle twice to restore state
- Check the remaining ID after deletion
- Keyboard interaction and empty state



### Checkpoint 3: persist and restore

Refresh persistence, JSON backup and validated, confirmed restoration with failure feedback.


- Refresh the same URL
- Restore IDs, titles and completion from a valid backup
- Reject invalid backups without changing existing data



### Checkpoint 4: enable a handoff

Complete README, acceptance records, version and known limits.


- Run from instructions with another person or clean directory
- Narrow-screen, keyboard and resource checks
- Record local, remote and deployment states separately

README.md

~~~
# My learning list

Requires Node.js 22.12+ and no third-party dependencies. Open a terminal in this directory:

```sh
node --version
npm test
npm start
```

Visit http://127.0.0.1:5180 and keep the terminal running. Stop with Ctrl+C. The server serves local static files and has no application API. HTML supplies structure, CSS supplies appearance, app.mjs connects the page, tasks.mjs defines the data rules, and tasks.test.mjs checks those rules. No npm install is needed for this project; other projects may require installation as described in their own README.

Add, complete, and delete tasks; save in the current browser and origin; export JSON backups; validate a backup before confirming restoration. There are no accounts, synchronization, or cloud database. Changing the scheme, host, or port uses different storage. Data from a local preview does not move automatically to a public site. If storage is full or blocked, the page reports that the change was not saved and keeps the previous visible list. Corrupted saved data pauses writes instead of silently overwriting it. Restoring replaces the entire list: export a backup first. If reading failed, an export includes only the currently visible list, not the unreadable original data.

After trimming, titles must contain 1–80 UTF-16 code units; emoji can occupy more than one. The limit is 200 tasks. Duplicate titles are allowed, but IDs must be distinct. The JSON format version is 1. Any invalid record rejects the whole backup. This is a learning project: browser storage may be cleared, and simultaneous tabs are not coordinated. Do not use it for sensitive data or multi-user production work. Before releasing a change, separately check browser interaction, narrow screens, keyboard access, the actual deployment URL, and backup restoration. Automated tests cover only the data rules.

Project source is MIT; textbook explanations are CC0. AI-generated and not human-reviewed.

~~~



app.mjs

~~~
import {
  addTask,
  toggleTask,
  removeTask,
  encodeTasks,
  decodeTasks,
} from "./tasks.mjs";
const KEY = "learning-list-v1";
const form = document.querySelector("#form");
const input = document.querySelector("#title");
const list = document.querySelector("#list");
const status = document.querySelector("#status");
const restore = document.querySelector("#restore");
let tasks = [];
let writable = true;
let pending = null;
try {
  const raw = localStorage.getItem(KEY);
  if (raw !== null) tasks = decodeTasks(raw);
} catch {
  writable = false;
  status.textContent =
    "Saved tasks could not be read. Writes are paused to preserve existing data. Restore from a valid backup.";
}
function render() {
  list.replaceChildren();
  for (const task of tasks) {
    const row = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", `Complete: ${task.title}`);
    checkbox.addEventListener("change", () =>
      change(() => toggleTask(tasks, task.id)),
    );
    const title = document.createElement("span");
    title.textContent = task.title;
    title.className = task.done ? "done" : "";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Delete";
    remove.setAttribute("aria-label", `Delete: ${task.title}`);
    remove.addEventListener("click", () =>
      change(() => removeTask(tasks, task.id)),
    );
    row.append(checkbox, title, remove);
    list.append(row);
  }
  document.querySelector("#count").textContent =
    `${tasks.length} tasks · ${tasks.filter((t) => t.done).length} complete`;
}
function change(getNext, recovery = false) {
  try {
    if (!writable && !recovery)
      throw new Error("Writes are paused. Restore from a valid backup first");
    const next = getNext();
    localStorage.setItem(KEY, encodeTasks(next));
    tasks = next;
    writable = true;
    status.textContent = "Saved in this browser";
    render();
    return true;
  } catch (error) {
    status.textContent = `Not saved: ${error.message}`;
    render();
    return false;
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (change(() => addTask(tasks, input.value, crypto.randomUUID())))
    input.value = "";
  input.focus();
});
document.querySelector("#export").addEventListener("click", () => {
  const url = URL.createObjectURL(
    new Blob([encodeTasks(tasks)], { type: "application/json" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "learning-list-backup.json";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = writable
    ? "Backup created. Check that your browser downloaded it"
    : "Exported the visible list. Unreadable previous data is not included";
});
let importSequence = 0;
document.querySelector("#import").addEventListener("change", async (event) => {
  const sequence = ++importSequence;
  pending = null;
  restore.disabled = true;
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 1000000) throw new Error("Backup exceeds 1 MB");
    const candidate = decodeTasks(await file.text());
    if (sequence !== importSequence) return;
    pending = candidate;
    restore.disabled = false;
    status.textContent = `Validated ${pending.length} tasks. Choose Confirm replacement to overwrite the current list.`;
  } catch (error) {
    if (sequence === importSequence)
      status.textContent = `Backup not imported: ${error.message}`;
  }
});
restore.addEventListener("click", () => {
  if (pending && change(() => pending, true)) {
    pending = null;
    restore.disabled = true;
  }
});
render();

~~~



index.html

~~~
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My learning list</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <p class="eyebrow">A small project you can explain</p>
      <h1>My learning list</h1>
      <p>Write the next thing you want to learn, then check it off when done.</p>
      <form id="form">
        <label for="title">Learning task</label>
        <div class="input-row">
          <input
            id="title"
            autocomplete="off"
            placeholder="For example: practice a Git commit"
          /><button>Add</button>
        </div>
      </form>
      <p id="status" role="status" aria-live="polite"></p>
      <p id="count"></p>
      <ul id="list"></ul>
      <details>
        <summary>Backup and restore</summary>
        <p>
          Data stays in this browser and origin. A public page does not expose your list to other visitors. Clearing browser data deletes it, so download a backup.
        </p>
        <button id="export" type="button">Download JSON backup</button
        ><label for="import">Choose JSON backup (replaces the current list)</label
        ><input
          id="import"
          type="file"
          accept=".json,application/json"
        /><button id="restore" type="button" disabled>Confirm replacement</button>
      </details>
    </main>
    <script type="module" src="app.mjs"></script>
  </body>
</html>

~~~



package.json

~~~
{
  "name": "learning-list", "version": "1.0.0", "private": true, "type": "module",
  "engines": {"node": ">=22.12"},
  "scripts": {"start": "node server.mjs", "test": "node --test tasks.test.mjs"},
  "license": "MIT"
}

~~~



server.mjs

~~~
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
const files = {
  "/": ["index.html", "text/html"],
  "/index.html": ["index.html", "text/html"],
  "/style.css": ["style.css", "text/css"],
  "/app.mjs": ["app.mjs", "text/javascript"],
  "/tasks.mjs": ["tasks.mjs", "text/javascript"],
};
const server = createServer(async (request, response) => {
  const path = new URL(request.url, "http://localhost").pathname;
  const entry = files[path];
  if (!entry || !["GET", "HEAD"].includes(request.method)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  try {
    const data = await readFile(new URL(entry[0], import.meta.url));
    response.writeHead(200, {
      "Content-Type": `${entry[1]}; charset=utf-8`,
      "Cache-Control": "no-store",
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(500);
    response.end("File unavailable");
  }
});
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(5180, "127.0.0.1", () =>
  console.log("Learning list: http://127.0.0.1:5180 (Ctrl+C to stop)"),
);

~~~



style.css

~~~
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #f3f5ef;
  color: #24312b;
  font:
    17px/1.65 system-ui,
    sans-serif;
}
main {
  max-width: 700px;
  margin: 7vh auto;
  padding: 28px;
}
.eyebrow {
  color: #527260;
  font-size: 14px;
}
h1 {
  font-size: clamp(30px, 7vw, 45px);
  line-height: 1.2;
}
label {
  display: block;
  margin: 14px 0 6px;
}
.input-row {
  display: flex;
  gap: 10px;
}
input:not([type="file"]) {
  flex: 1;
  min-width: 0;
  padding: 12px;
  border: 1px solid #8a9d90;
  border-radius: 7px;
  font: inherit;
}
button {
  padding: 10px 15px;
  border: 1px solid #40614d;
  border-radius: 7px;
  background: #24523a;
  color: white;
  font: inherit;
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}
button:focus-visible,
input:focus-visible,
summary:focus-visible {
  outline: 3px solid #bc662b;
  outline-offset: 3px;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  display: flex;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid #d4ddd4;
  padding: 14px 0;
}
li span {
  flex: 1;
  overflow-wrap: anywhere;
}
.done {
  text-decoration: line-through;
  color: #677369;
}
li button {
  font-size: 14px;
  background: white;
  color: #354d3e;
}
details {
  margin-top: 30px;
  padding: 16px;
  background: white;
  border-radius: 10px;
}
summary {
  cursor: pointer;
}
#status {
  min-height: 1.6em;
  color: #853b18;
}
input[type="file"] {
  max-width: 100%;
}
@media (max-width: 400px) {
  main {
    padding: 18px;
  }
  .input-row {
    flex-direction: column;
  }
}

~~~



tasks.mjs

~~~
export const MAX_TITLE = 80;
export const MAX_TASKS = 200;
export function validateTasks(tasks) {
  if (!Array.isArray(tasks) || tasks.length > MAX_TASKS)
    throw new Error("Invalid list format or more than 200 tasks");
  const ids = new Set();
  for (const task of tasks) {
    if (
      !task ||
      typeof task !== "object" ||
      Array.isArray(task) ||
      Object.keys(task).sort().join(",") !== "done,id,title" ||
      typeof task.id !== "string" ||
      !task.id ||
      ids.has(task.id) ||
      typeof task.title !== "string" ||
      !task.title.trim() ||
      task.title !== task.title.trim() ||
      task.title.length > MAX_TITLE ||
      typeof task.done !== "boolean"
    )
      throw new Error("The list contains an invalid record");
    ids.add(task.id);
  }
  return tasks;
}
export function addTask(tasks, title, id) {
  validateTasks(tasks);
  if (typeof title !== "string") throw new Error("Enter text");
  const clean = title.trim();
  if (!clean) throw new Error("Write a learning task first");
  if (clean.length > MAX_TITLE) throw new Error("Use at most 80 UTF-16 code units");
  if (tasks.length >= MAX_TASKS) throw new Error("Save at most 200 tasks");
  const next = [...tasks, { id, title: clean, done: false }];
  return validateTasks(next);
}
export function toggleTask(tasks, id) {
  validateTasks(tasks);
  if (!tasks.some((task) => task.id === id)) throw new Error("Task not found");
  return tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : { ...task },
  );
}
export function removeTask(tasks, id) {
  validateTasks(tasks);
  if (!tasks.some((task) => task.id === id)) throw new Error("Task not found");
  return tasks.filter((task) => task.id !== id);
}
export function encodeTasks(tasks) {
  validateTasks(tasks);
  return JSON.stringify({ version: 1, tasks });
}
export function decodeTasks(text) {
  const data = JSON.parse(text);
  if (
    !data ||
    Array.isArray(data) ||
    typeof data !== "object" ||
    Object.keys(data).sort().join(",") !== "tasks,version" ||
    data.version !== 1
  )
    throw new Error("Unsupported backup version or format");
  return validateTasks(data.tasks);
}

~~~



tasks.test.mjs

~~~
import test from "node:test";
import assert from "node:assert/strict";
import {
  addTask,
  toggleTask,
  removeTask,
  encodeTasks,
  decodeTasks,
} from "./tasks.mjs";
const first = [{ id: "a", title: "Practice Git", done: false }];
test("Adding trims surrounding whitespace without mutating the input", () => {
  const next = addTask(first, "  Write requirements  ", "b");
  assert.equal(next[1].title, "Write requirements");
  assert.deepEqual(first, [{ id: "a", title: "Practice Git", done: false }]);
});
test("Reject empty and whitespace-only input", () => {
  for (const s of ["", "   ", "\n\t"]) assert.throws(() => addTask([], s, "x"));
});
test("Title-length boundary at 80 and 81", () => {
  assert.equal(addTask([], "a".repeat(80), "a")[0].title.length, 80);
  assert.throws(() => addTask([], "a".repeat(81), "a"));
});
test("Allow duplicate titles but require distinct IDs", () => {
  assert.equal(addTask(first, "Practice Git", "b").length, 2);
  assert.throws(() => addTask(first, "Another task", "a"));
});
test("Toggling twice restores the value and leaves other tasks unchanged", () => {
  const list = addTask(first, "Write requirements", "b");
  const once = toggleTask(list, "a");
  assert.equal(once[0].done, true);
  assert.deepEqual(once[1], list[1]);
  assert.deepEqual(toggleTask(once, "a"), list);
});
test("Delete by ID without deleting tasks with duplicate titles", () => {
  assert.deepEqual(removeTask(addTask(first, "Practice Git", "b"), "a"), [
    { id: "b", title: "Practice Git", done: false },
  ]);
});
test("Reject unknown IDs", () => {
  assert.throws(() => toggleTask(first, "missing"));
  assert.throws(() => removeTask(first, "missing"));
});
test("Backup round trip preserves tasks and completion state", () => {
  const list = toggleTask(addTask(first, "Write requirements", "b"), "b");
  assert.deepEqual(decodeTasks(encodeTasks(list)), list);
});
test("Allow backups of an empty list", () => {
  assert.deepEqual(decodeTasks(encodeTasks([])), []);
});
test("Reject malformed JSON, unsupported versions, and extra fields", () => {
  for (const s of [
    "{",
    "null",
    "[]",
    '{"version":2,"tasks":[]}',
    '{"version":1,"tasks":[],"extra":true}',
  ])
    assert.throws(() => decodeTasks(s));
});
test("Reject the whole list if any record is invalid", () => {
  for (const bad of [
    { id: "b", title: " ", done: false },
    { id: "b", title: "x", done: "false" },
    { id: "a", title: "Duplicate ID", done: false },
    { id: "b", title: "x", done: false, extra: 0 },
  ])
    assert.throws(() =>
      decodeTasks(JSON.stringify({ version: 1, tasks: [...first, bad] })),
    );
});
test("Allow 200 tasks and reject the 201st", () => {
  const many = Array.from({ length: 200 }, (_, i) => ({
    id: String(i),
    title: "Task",
    done: false,
  }));
  assert.equal(decodeTasks(encodeTasks(many)).length, 200);
  assert.throws(() => addTask(many, "One more task", "x"));
});
test("HTML-looking titles remain plain text", () => {
  const title = "<img src=x onerror=alert(1)>";
  assert.equal(addTask([], title, "a")[0].title, title);
});

~~~
