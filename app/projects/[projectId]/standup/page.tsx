type Props = {
  params: { projectId: string };
};

export default function StandupPage({ params }: Props) {
  return (
    <main className="px-6 py-10 space-y-6">
      <header>
        <p className="text-sm text-muted-foreground">Project</p>
        <h1 className="text-3xl font-semibold">Standup for {params.projectId}</h1>
      </header>
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-lg border p-4">Code diff recap placeholder</div>
          <div className="rounded-lg border p-4">Live action items placeholder</div>
        </div>
        <aside className="rounded-lg border p-4">Smart prompts placeholder</aside>
      </section>
    </main>
  );
}
