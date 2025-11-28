import type { ProjectPlan } from "@/types/plan";

export async function generateProjectPlan(): Promise<ProjectPlan> {
  return {
    milestones: [],
    tasks: [],
  };
}
