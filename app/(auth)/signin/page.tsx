"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Github, ArrowRight, Sparkles, Lightbulb, Workflow, Rocket } from "lucide-react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubLogin = async () => {
    try {
      setIsLoading(true);
      await signIn("github", { callbackUrl: "/dashboard" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-6 py-16 text-[#1b1b18]">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 md:flex-row md:items-center md:gap-16">
        <section className="flex-1 space-y-8">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#fff2d8] px-4 py-1 text-sm font-medium text-[#bb6b00]">
              <Sparkles className="h-4 w-4" />
              Sprint
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Guided coding sprints with AI
            </h1>
            <p className="text-base text-[#6b6a65]">
              Structure your solo projects like a real SWE internship. Sprint keeps you
              accountable with repo-aware standups, AI planning, and streak tracking.
            </p>
          </div>

          <ul className="space-y-5 text-sm text-[#4c4b46]">
            {[
              {
                title: "AI-powered guidance",
                copy: "Context-aware suggestions anchored in your GitHub commits.",
                icon: Lightbulb,
              },
              {
                title: "Structured workflows",
                copy: "Milestones, smart prompts, and daily standups that feel like working with a manager.",
                icon: Workflow,
              },
              {
                title: "Ship faster",
                copy: "Stay on track with streaks, action lists, and a public project log.",
                icon: Rocket,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-black">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1f1f1a]">{item.title}</p>
                    <p className="text-[#6b6a65]">{item.copy}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="flex-1">
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-[#1b1b1820]">
            <div className="space-y-2 pb-6 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#b2afa8]">Get started</p>
              <p className="text-2xl font-semibold">Sign in to begin</p>
              <p className="text-sm text-[#706f6a]">
                Connect GitHub so Sprint can review your real commits.
              </p>
            </div>

            <button
              type="button"
              onClick={handleGithubLogin}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1f1f1a] px-4 py-3 text-base font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Github className="h-4 w-4" />
              {isLoading ? "Redirecting..." : "Continue with GitHub"}
            </button>

            <p className="mt-6 text-center text-xs text-[#9a988f]">
              By continuing, you agree to Sprint&apos;s Terms of Service and Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}