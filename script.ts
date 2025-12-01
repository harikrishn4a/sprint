import { prisma } from "./lib/prisma";

async function main() {
  const samplePlan = {
    milestones: [
      {
        title: "Week 1 – Foundations",
        tasks: ["Scaffold Next.js app", "Configure Auth.js", "Set up Prisma"],
      },
      {
        title: "Week 2 – Standups",
        tasks: ["Repo integration", "Standup session prep", "Voice agent stub"],
      },
    ],
    durationWeeks: 4,
  };

  const sampleCommitSummary = {
    overallSummary: "Initial setup and dashboard scaffolding.",
    commitCount: 2,
    files: [
      {
        path: "app/page.tsx",
        additions: 80,
        deletions: 0,
        summary: "Landing page hero and CTA",
      },
      {
        path: "lib/prisma.ts",
        additions: 25,
        deletions: 0,
        summary: "Prisma client helper",
      },
    ],
  };

  const user = await prisma.user.upsert({
    where: { email: "alice@intern-buddy.dev" },
    update: {},
    create: {
      email: "alice@intern-buddy.dev",
      name: "Alice Apprentice",
      githubId: "alice-gh",
      avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
      githubToken: "placeholder-token",
    },
  });

  const project = await prisma.project.upsert({
    where: { publicSlug: "alice-ai-buddy" },
    update: {
      planJson: samplePlan,
      lastCommitSha: "abc123",
    },
    create: {
      userId: user.id,
      title: "AI SWE Internship Buddy",
      description: "Project-based workflow mentor with GitHub-aware voice standups.",
      durationWeeks: 4,
      planJson: samplePlan,
      repoOwner: "alice",
      repoName: "intern-buddy",
      defaultBranch: "main",
      publicSlug: "alice-ai-buddy",
      isPublic: true,
      publishedAt: new Date(),
    },
  });

  await prisma.userStreak.upsert({
    where: { userId: user.id },
    update: {
      currentStreak: 3,
      longestStreak: 5,
      lastActiveDate: new Date(),
    },
    create: {
      userId: user.id,
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: new Date(),
    },
  });

  const session = await prisma.standupSession.create({
    data: {
      userId: user.id,
      projectId: project.id,
      status: "ACTIVE",
      planSnapshot: samplePlan,
      commitSummary: sampleCommitSummary,
      smartPrompts: [
        "Walk through the dashboard updates.",
        "Discuss blockers for repo integration.",
        "Share tests you plan to add.",
      ],
      voiceSessionToken: "session-token",
      startedAt: new Date(),
    },
  });

  const standup = await prisma.standup.create({
    data: {
      userId: user.id,
      projectId: project.id,
      date: new Date(),
      commitSummary: sampleCommitSummary,
      summary: "Finished dashboard shell and wired repo metadata form.",
      codeFeedback: "Consider extracting shared cards into components.",
      planForToday: [
        "Hook up GitHub OAuth",
        "Generate project plan JSON from AI",
        "Design standup action list UI",
      ],
      advice: "Keep daily goals tight (<=3 tasks) to maintain streak.",
      answersJson: {
        wins: ["Dashboard shell"],
        blockers: ["Awaiting GitHub token scopes"],
        },
      durationSeconds: 420,
      voiceSessionId: session.id,
    },
  });

  console.log("Seeded user:", user.email);
  console.log("Project slug:", project.publicSlug);
  console.log("Standup summary:", standup.summary);

  const dashboardSnapshot = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      streak: true,
      projects: {
    include: {
          standups: {
            orderBy: { date: "desc" },
            take: 1,
          },
        },
      },
    },
  });

  console.dir(dashboardSnapshot, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });