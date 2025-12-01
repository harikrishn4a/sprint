import type { DefaultSession } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      githubId?: string | null;
    };
  }

  interface User {
    githubId?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends Record<string, unknown> {
    userId?: string;
    githubId?: string | null;
    accessToken?: string;
    accessTokenExpires?: number;
  }
}
