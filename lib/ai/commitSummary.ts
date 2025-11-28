import type { CommitSummary } from "@/types/commits";

export async function summarizeCommits(): Promise<CommitSummary> {
  return {
    overallSummary: "",
    commitCount: 0,
    files: [],
  };
}
