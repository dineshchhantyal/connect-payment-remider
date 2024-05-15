import { Account, NextAuthOptions, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient, Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({
      account,
      profile,
      user,
    }: {
      account: Account | null;
      profile?: Profile | undefined;
      user: User | AdapterUser;
    }) {
      if (account && profile && account.provider === "google") {
        try {
          await prisma.user.upsert({
            where: { email: profile.email },
            update: {},
            create: {
              email: profile.email as string,
              name: profile.name as string,
              profile: {
                create: {
                  image: profile.image as string,
                },
              },
            },
          });

          return true;
        } catch (e) {
          console.log(e);
        } finally {
          prisma.$disconnect();
        }
        return false;
      } else {
        return false;
      }
    },
  },
  secret: process.env.JWT_SECRET,
};

export default authOptions;
