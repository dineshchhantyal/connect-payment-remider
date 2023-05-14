import NextAuth from "next-auth";
import authOptions from "./configuration";



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }