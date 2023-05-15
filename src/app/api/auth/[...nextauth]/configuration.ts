import { Account, NextAuthOptions, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

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
        return true;
      } else {
        return false;
      }
    },
  },
  secret: process.env.JWT_SECRET,
};

export default authOptions;
