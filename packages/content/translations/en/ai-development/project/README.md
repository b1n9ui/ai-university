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
