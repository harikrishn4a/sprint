export type VoiceSessionConfig = {
  projectId: string;
};

export async function createVoiceSession(_config: VoiceSessionConfig) {
  return { sessionId: "demo", token: "placeholder" };
}
