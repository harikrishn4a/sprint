interface StandupSummaryCardProps {
  title?: string;
  body?: string;
}

export function StandupSummaryCard({ title = "Summary", body = "Coming soon." }: StandupSummaryCardProps) {
  return (
    <article className="rounded border p-4">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{body}</p>
    </article>
  );
}
