import { getServerSession } from "next-auth";
import { prisma } from "@/lib/helphers";
import { type NextRequest, NextResponse } from "next/server";
import authOptions from "../auth/[...nextauth]/configuration";

export async function GET(request: NextRequest) {
  const session = await getServerSession();

  console.log("session", session);
  if (!session || !session.user) {
    return new Response(
      JSON.stringify({
        error: "Looks like you are not logged in",
        success: false,
      }),
      {
        status: 401,
      }
    );
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? "",
    },
  });
  const payments = await prisma.payment.findMany({
    where: {
      authorId: user?.id,
    },
  });

  return new Response(JSON.stringify(payments), {
    headers: {
      "content-type": "application/json",
    },
  });
}
