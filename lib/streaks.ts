export type StreakSnapshot = {
  current: number;
  longest: number;
};

export function calculateNextStreak(snapshot: StreakSnapshot, hasStandupToday: boolean) {
  if (!hasStandupToday) {
    return { current: 0, longest: snapshot.longest };
  }

  const current = snapshot.current + 1;
  return {
    current,
    longest: Math.max(snapshot.longest, current),
  };
}
