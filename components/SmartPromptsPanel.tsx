const placeholderPrompts = [
  "Explain what changed in your login API.",
  "Mention any tests you wrote.",
  "Describe one bug you're stuck on.",
];

export function SmartPromptsPanel() {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Smart prompts</h2>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {placeholderPrompts.map((prompt) => (
          <li key={prompt} className="rounded border p-3">
            {prompt}
          </li>
        ))}
      </ul>
    </section>
  );
}
