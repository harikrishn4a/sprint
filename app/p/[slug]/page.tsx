type Props = {
  params: { slug: string };
};

export default function PublicProjectPage({ params }: Props) {
  return (
    <main className="px-6 py-10 space-y-4">
      <h1 className="text-3xl font-semibold">Public project: {params.slug}</h1>
      <p className="text-muted-foreground">Milestones and standups will appear here.</p>
    </main>
  );
}
