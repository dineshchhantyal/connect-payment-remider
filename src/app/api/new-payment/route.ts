import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/helphers";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
  const data: PaymentInput = await request.json();
  const session = await getServerSession();
  console.log(session?.user?.email);
  if (!session || !session.user) {
    return new Response(
      JSON.stringify({
        error: "You must be authorized",
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

  const {
    title,
    description,
    amount,
    currency,
    duration,
    timezones,
    link,
    image,
    paymentType,
    category,
    paymentMethod,
  } = data;
  console.log(user);
  try {
    console.log({
      title,
      description,
      amount,
      currency,
      duration,
      timezones,
      link,
      image,
      paymentType,
      category,
      paymentMethod,
    });

    const payment = await prisma.payment.create({
      data: {
        title,
        description,
        amount: typeof amount === "string" ? Number.parseInt(amount) : amount,
        currency,
        duration,
        timezones,
        link,
        image,
        paymentType,
        category,
        paymentMethod,
        author: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
  } catch (e) {
    console.log(e);
    return new Response(
      JSON.stringify({
        error: "Something went wrong",
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
  return new Response(
    JSON.stringify({
      message: "Payment created",
      success: true,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
