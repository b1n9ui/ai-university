export const contentFor = (version) => `项目标题：学习清单 v${version}\n`;
export function initialGit() {
  return {
    work: contentFor(1),
    index: contentFor(1),
    version: 1,
    branch: "main",
    branches: { main: "c0" },
    remote: { main: "c0" },
    commits: [
      { id: "c0", parent: null, content: contentFor(1), message: "初始记录" },
    ],
    note: "练习从已提交、已推送的单文件仓库开始。",
  };
}
export function headOf(state) {
  return state.commits.find((c) => c.id === state.branches[state.branch]);
}
export function dirty(state) {
  return state.work !== state.index || state.index !== headOf(state).content;
}
export function transition(state, action) {
  const next = {
    ...state,
    branches: { ...state.branches },
    remote: { ...state.remote },
    commits: [...state.commits],
  };
  const head = headOf(state);
  const record = (content, message) => {
    const id = `c${state.commits.length}`;
    next.commits.push({ id, parent: head.id, content, message });
    next.branches[state.branch] = id;
  };
  switch (action) {
    case "edit":
      next.version++;
      next.work = contentFor(next.version);
      next.note = "只改变工作区。暂存内容与提交记录没有跟着改。";
      break;
    case "add":
      next.index = state.work;
      next.note = "git add README.md：把此刻的工作区内容放入暂存区。";
      break;
    case "commit":
      if (state.index === head.content) {
        next.note = "没有已暂存的新内容，不能创建本练习的普通提交。";
        break;
      }
      record(state.index, `记录暂存的 v${state.index.match(/v(\d+)/)[1]}`);
      next.note = "git commit：暂存内容进入新提交；未暂存编辑仍留在工作区。";
      break;
    case "unstage":
      next.index = head.content;
      next.note =
        "git restore --staged README.md：暂存区回到 HEAD，工作区编辑保留。";
      break;
    case "restore":
      next.work = state.index;
      next.note =
        "git restore README.md：用暂存内容覆盖工作区；未暂存编辑被丢弃。";
      break;
    case "branch":
      if (state.branches.feature) {
        next.note = "feature 已存在，请用“切到 feature”。";
        break;
      }
      if (dirty(state)) {
        next.note =
          "本练习要求先整理干净，再建分支；真实 Git 可能携带未提交改动。";
        break;
      }
      next.branches.feature = head.id;
      next.branch = "feature";
      next.note =
        "git switch -c feature：新名字指向当前提交并切换；没有复制出新的提交。";
      break;
    case "main":
    case "feature":
      if (!state.branches[action]) {
        next.note = "该分支不存在，请先新建 feature。";
        break;
      }
      if (dirty(state)) {
        next.note =
          "本练习先要求干净状态；真实 Git 会按文件覆盖风险决定是否允许携带改动。";
        break;
      }
      next.branch = action;
      next.index = next.work = state.commits.find(
        (c) => c.id === state.branches[action],
      ).content;
      next.note = `git switch ${action}：工作区与暂存区切到该分支提交。`;
      break;
    case "push":
      next.remote[state.branch] = head.id;
      next.note =
        "git push：只更新模拟远端当前分支。未提交文件不上传；没有创建 PR、合并或发布。";
      break;
    case "revert":
      if (dirty(state)) {
        next.note = "先整理干净，再撤销当前普通提交。";
        break;
      }
      if (!head.parent) {
        next.note = "本练习不撤销初始提交。";
        break;
      }
      next.index = next.work = state.commits.find(
        (c) => c.id === head.parent,
      ).content;
      record(next.index, `撤销 ${head.id}`);
      next.note =
        "git revert HEAD：新增一条反向记录，原提交仍在；本练习不模拟冲突和合并提交。";
      break;
    default:
      throw new Error("未知练习动作");
  }
  return next;
}
