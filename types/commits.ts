export interface CommitFileSummary {
  path: string;
  additions: number;
  deletions: number;
  summary: string;
}

export interface CommitSummary {
  overallSummary: string;
  commitCount: number;
  files: CommitFileSummary[];
}
