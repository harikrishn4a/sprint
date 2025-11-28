"use client";

import { useState } from "react";

export function ProjectForm() {
  const [title, setTitle] = useState("");

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Project title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Build my internship buddy"
        />
      </div>
      <button className="rounded bg-black px-4 py-2 text-white" type="button">
        Create project
      </button>
    </form>
  );
}
