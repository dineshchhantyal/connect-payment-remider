import FullView from "@/components/Calender/FullView";
import NearestReminder from "@/components/NearestReminder/NearestReminder";
import SpecialBundle from "@/components/SpecialOffers/SpecialBundle";
import baseURL from "@/lib/baseURL";
import { getServerSession, unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import authOptions from "../api/auth/[...nextauth]/configuration";

const Dashboard = async () => {
  const session = await unstable_getServerSession();

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const payments: Payment[] = [];
  return (
    <div className="container mx-auto">
      {/* <h1>Dashboard</h1>
      <h5>
        Signed in as {session?.user?.name} ({session?.user?.email})
      </h5> */}

      {/* wrapper */}
      {/* most recent */}
      {/* ads */}

      {/* add new */}
      {/* calender */}

      <main className="flex my-6 gap-12">
        <div className="">
          <NearestReminder />
          <SpecialBundle />
        </div>
        <div className="flex flex-1 flex-col mt-6">
          <Link href={"/new-payment"} className="w-max">
            <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-700 font-medium text-white inline-flex items-center gap-2 shadow-md">
              <BiMessageSquareAdd /> reminder
            </button>
          </Link>

          {/* <div className="border-red-100 grid grid-cols-7 mt-12">
            {new Array(30).fill(0).map((c, i) => (
              <div className="p-2 border-gray-100 bg-gray-800 m-1 rounded-sm grid place-items-center">
                {i + 1}
              </div>
            ))}
          </div> */}
          <section className="mt-6">
            {/* @ts-expect-error Async Server Component */}
            <FullView />
          </section>
        </div>
      </main>
      <button className="bg-red-400 p-3 rounded-md hover:bg-red-500 font-semibold">
        <a href="/api/auth/signout">Sign out</a>
      </button>
    </div>
  );
};

export default Dashboard;
