interface PlanTimelineProps {
  milestones?: string[];
}

export function PlanTimeline({ milestones = [] }: PlanTimelineProps) {
  if (milestones.length === 0) {
    return <p className="text-muted-foreground">No milestones yet.</p>;
  }

  return (
    <ol className="space-y-3">
      {milestones.map((item, index) => (
        <li key={item} className="rounded border p-3">
          <p className="text-sm text-muted-foreground">Milestone {index + 1}</p>
          <p className="font-medium">{item}</p> 
        </li>
      ))}
    </ol>
  );
}
