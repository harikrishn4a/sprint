import type { CommitSummary } from "@/types/commits";
import type { ProjectPlan } from "@/types/plan";

export type StandupPrep = {
  plan: ProjectPlan;
  commits: CommitSummary;
};

export async function prepareStandupSession(): Promise<StandupPrep> {
  return {
    plan: { milestones: [], tasks: [] },
    commits: { overallSummary: "", commitCount: 0, files: [] },
  };
}
