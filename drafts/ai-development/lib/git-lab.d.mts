export type Commit = {
  id: string;
  parent: string | null;
  content: string;
  message: string;
};
export type GitState = {
  work: string;
  index: string;
  version: number;
  branch: string;
  branches: Record<string, string>;
  remote: Record<string, string>;
  commits: Commit[];
  note: string;
};
export type GitAction =
  | "edit"
  | "add"
  | "commit"
  | "unstage"
  | "restore"
  | "branch"
  | "main"
  | "feature"
  | "push"
  | "revert";
export function contentFor(version: number): string;
export function initialGit(): GitState;
export function headOf(state: GitState): Commit;
export function dirty(state: GitState): boolean;
export function transition(state: GitState, action: GitAction): GitState;
