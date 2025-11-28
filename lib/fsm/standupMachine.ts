export type StandupState =
  | "idle"
  | "preparing"
  | "connecting"
  | "inCall"
  | "summarizing"
  | "completed"
  | "error";

export type StandupEvent =
  | { type: "PREP" }
  | { type: "CONNECT" }
  | { type: "JOIN" }
  | { type: "FINISH" }
  | { type: "FAIL" };

export function transition(state: StandupState, event: StandupEvent): StandupState {
  switch (state) {
    case "idle":
      if (event.type === "PREP") return "preparing";
      break;
    case "preparing":
      if (event.type === "CONNECT") return "connecting";
      break;
    case "connecting":
      if (event.type === "JOIN") return "inCall";
      break;
    case "inCall":
      if (event.type === "FINISH") return "summarizing";
      break;
    case "summarizing":
      if (event.type === "FINISH") return "completed";
      break;
    default:
      break;
  }
  if (event.type === "FAIL") return "error";
  return state;
}
