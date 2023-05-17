import { redirect } from "next/navigation";
import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/helphers";

export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    console.log(data);
  } catch (e) {
    console.log(e);
    redirect("/error");
  }
  return NextResponse.json({ content: "Hello world!" });
}
