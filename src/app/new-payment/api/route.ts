import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log(request.json());

  return NextResponse.json({ content: "Hello world!" });
}
