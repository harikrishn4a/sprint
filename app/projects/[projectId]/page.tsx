import Link from "next/link";

type Props = {
  params: { projectId: string };
};

export default function ProjectDetailPage({ params }: Props) {
  return (
    <main className="px-6 py-10 space-y-4">
      <h1 className="text-3xl font-semibold">Project {params.projectId}</h1>
      <p className="text-muted-foreground">Plan details will render here.</p>
      <Link className="text-primary underline" href={`/projects/${params.projectId}/standup`}>
        Go to standup
      </Link>
    </main>
  );
}
