import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/configuration";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (session) {
    NextResponse.json({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    NextResponse.json({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
