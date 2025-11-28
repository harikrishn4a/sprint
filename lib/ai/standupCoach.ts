import type { StandupSummary } from "@/types/standup";

export async function generateStandupSummary(): Promise<StandupSummary> {
  return {
    summary: "",
    codeFeedback: "",
    planForToday: [],
    advice: "",
  };
}
