export type RepoDetails = {
  owner: string;
  name: string;
  defaultBranch: string;
};

export async function fetchRecentCommits(_: RepoDetails) {
  return [];
}
