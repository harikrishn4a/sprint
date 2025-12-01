import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { AdapterUser } from "next-auth/adapters";
import { prisma } from "@/lib/prisma";

const authOptions = {
  adapter: PrismaAdapter(prisma),
  pages: { 
    signIn: "/signin",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
      authorization: {
        params: { scope: "read:user repo" },
      },
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: any; user: AdapterUser }) {
      if (session.user) {
        session.user.id = String(user.id);
      }
      return session;
    },
  },
  events: {
    async signIn(message: any) {
      const { account, user, profile } = message;
      if (account?.provider === "github" && account.access_token) {
        await prisma.user.update({
          where: { id: Number(user.id) },
          data: {
            githubToken: account.access_token,
            githubId: account.providerAccountId,
            avatarUrl: profile?.avatar_url ?? user.image ?? undefined,
          },
        });
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
