import { cookies } from "next/headers";

export async function getCurrentUser() {
  // Placeholder until Auth.js is wired up.
  const store = cookies().get("demo-user-id");
  if (!store) return null;

  return { id: store.value };
}
