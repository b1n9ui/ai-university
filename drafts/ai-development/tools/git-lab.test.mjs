import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { initialGit, transition, headOf } from "../lib/git-lab.mjs";
function realRepo() {
  const root = mkdtempSync(join(tmpdir(), "au-git-lesson-"));
  const work = join(root, "work"),
    remote = join(root, "remote");
  const run = (args, cwd = work, expected = 0) => {
    const r = spawnSync("git", args, {
      cwd,
      encoding: "utf8",
      env: {
        ...process.env,
        GIT_CONFIG_NOSYSTEM: "1",
        GIT_CONFIG_GLOBAL: "/dev/null",
        GIT_TERMINAL_PROMPT: "0",
        LC_ALL: "C",
      },
      timeout: 10000,
    });
    assert.equal(r.status, expected, `${args.join(" ")}: ${r.stderr}`);
    return r.stdout.trimEnd();
  };
  run(["init", "--bare", remote], root);
  run(["init", "-b", "main", work], root);
  run(["config", "user.name", "Textbook Test"]);
  run(["config", "user.email", "test@example.invalid"]);
  writeFileSync(join(work, "README.md"), initialGit().work);
  run(["add", "README.md"]);
  run(["commit", "-m", "Initial"]);
  run(["remote", "add", "origin", remote]);
  run(["push", "-u", "origin", "main"]);
  return { root, work, remote, run };
}
function exercise(actions) {
  const repo = realRepo();
  let state = initialGit();
  let records = 1;
  try {
    for (const action of actions) {
      const before = state;
      state = transition(state, action);
      switch (action) {
        case "edit":
          writeFileSync(join(repo.work, "README.md"), state.work);
          break;
        case "add":
          repo.run(["add", "README.md"]);
          break;
        case "commit":
          repo.run(
            ["commit", "-m", "Practice"],
            repo.work,
            state.commits.length === before.commits.length ? 1 : 0,
          );
          break;
        case "unstage":
          repo.run(["restore", "--staged", "README.md"]);
          break;
        case "restore":
          repo.run(["restore", "README.md"]);
          break;
        case "branch":
          repo.run(["switch", "-c", "feature"]);
          break;
        case "main":
        case "feature":
          repo.run(["switch", action]);
          break;
        case "push":
          repo.run(["push", "-u", "origin", state.branch]);
          break;
        case "revert":
          repo.run(["revert", "--no-edit", "HEAD"]);
          break;
      }
      assert.equal(
        readFileSync(join(repo.work, "README.md"), "utf8"),
        state.work,
        action + " work",
      );
      assert.equal(
        repo.run(["show", ":README.md"]) + "\n",
        state.index,
        action + " index",
      );
      assert.equal(
        repo.run(["show", "HEAD:README.md"]) + "\n",
        headOf(state).content,
        action + " HEAD",
      );
      assert.equal(repo.run(["branch", "--show-current"]), state.branch);
      for (const [branch, id] of Object.entries(state.branches))
        assert.equal(
          repo.run(["show", branch + ":README.md"]) + "\n",
          state.commits.find((c) => c.id === id).content,
        );
      for (const [branch, id] of Object.entries(state.remote))
        assert.equal(
          repo.run(["show", `refs/heads/${branch}:README.md`], repo.remote) +
            "\n",
          state.commits.find((c) => c.id === id).content,
        );
      assert.equal(
        repo.run(["rev-list", "--all", "--count"]),
        String(state.commits.length),
      );
      records++;
    }
    return {
      state,
      status: repo.run(["status", "--short"]),
      unstaged: repo.run(["diff"]),
      staged: repo.run(["diff", "--staged"]),
      records,
    };
  } finally {
    rmSync(repo.root, { recursive: true, force: true });
  }
}
test("暂存后再编辑：真实 Git 提交 v2，工作区保留 v3", () => {
  const r = exercise(["edit", "add", "edit", "commit"]);
  assert.match(headOf(r.state).content, /v2/);
  assert.match(r.state.work, /v3/);
  assert.match(r.status, /M README.md/);
  assert.match(r.unstaged, /\+项目标题：学习清单 v3/);
  assert.equal(r.staged, "");
});
test("取消暂存保留工作区：与真实 restore --staged 一致", () => {
  const r = exercise(["edit", "add", "edit", "unstage"]);
  assert.match(r.state.work, /v3/);
  assert.match(r.state.index, /v1/);
});
test("普通 restore 使用暂存内容覆盖未暂存改动", () => {
  const r = exercise(["edit", "add", "edit", "restore"]);
  assert.match(r.state.work, /v2/);
  assert.equal(r.unstaged, "");
  assert.match(r.staged, /\+项目标题：学习清单 v2/);
});
test("分支、推送、切换与 revert 逐步对照真实本地/裸仓库", () => {
  const r = exercise([
    "branch",
    "edit",
    "add",
    "commit",
    "push",
    "main",
    "feature",
    "revert",
    "push",
  ]);
  assert.equal(r.state.branches.main, "c0");
  assert.equal(r.state.remote.feature, "c2");
  assert.equal(r.state.commits.length, 3);
  assert.match(headOf(r.state).content, /v1/);
});
test("推送不上传未提交工作区", () => {
  const r = exercise(["edit", "push"]);
  assert.match(r.state.work, /v2/);
  assert.equal(r.state.remote.main, "c0");
});
test("无暂存变化不创建普通提交", () => {
  const r = exercise(["edit", "commit"]);
  assert.equal(r.state.commits.length, 1);
  assert.match(r.state.work, /v2/);
});
test("教学限制明确：脏状态不切换分支，不悄悄丢编辑", () => {
  const start = initialGit();
  const edited = transition(start, "edit");
  const branch = transition(edited, "branch");
  assert.deepEqual(start, initialGit());
  assert.equal(branch.branch, "main");
  assert.equal(branch.work, edited.work);
  assert.match(branch.note, /真实 Git/);
  assert.throws(() => transition(start, "unknown"));
});

test("fetch 不合入当前分支，pull --ff-only 接受快进并拒绝分叉", () => {
  const repo = realRepo();
  try {
    const other = join(repo.root, "other");
    repo.run(["clone", "--branch", "main", repo.remote, other], repo.root);
    repo.run(["config", "user.name", "Other Test"], other);
    repo.run(["config", "user.email", "other@example.invalid"], other);
    const before = repo.run(["rev-parse", "HEAD"]);
    writeFileSync(join(other, "README.md"), "远端的新内容\n");
    repo.run(["add", "README.md"], other);
    repo.run(["commit", "-m", "Remote update"], other);
    repo.run(["push"], other);
    repo.run(["fetch", "origin"]);
    assert.equal(repo.run(["rev-parse", "HEAD"]), before);
    assert.equal(repo.run(["show", "origin/main:README.md"]), "远端的新内容");
    repo.run(["pull", "--ff-only"]);
    assert.equal(
      readFileSync(join(repo.work, "README.md"), "utf8"),
      "远端的新内容\n",
    );
    writeFileSync(join(repo.work, "README.md"), "本地独立改动\n");
    repo.run(["add", "README.md"]);
    repo.run(["commit", "-m", "Local update"]);
    const local = repo.run(["rev-parse", "HEAD"]);
    writeFileSync(join(other, "README.md"), "远端独立改动\n");
    repo.run(["add", "README.md"], other);
    repo.run(["commit", "-m", "Diverging remote"], other);
    repo.run(["push"], other);
    repo.run(["pull", "--ff-only"], repo.work, 128);
    assert.equal(repo.run(["rev-parse", "HEAD"]), local);
    assert.equal(
      readFileSync(join(repo.work, "README.md"), "utf8"),
      "本地独立改动\n",
    );
  } finally {
    rmSync(repo.root, { recursive: true, force: true });
  }
});
