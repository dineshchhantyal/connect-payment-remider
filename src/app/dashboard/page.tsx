import FullView from "@/components/Calender/FullView";
import NearestReminder from "@/components/NearestReminder/NearestReminder";
import SpecialBundle from "@/components/SpecialOffers/SpecialBundle";
import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";

const Dashboard = async () => {
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

      <main className="flex my-12 gap-12">
        <div className="flex-[0.49]">
          <NearestReminder />
          <SpecialBundle />
        </div>
        <div className="flex flex-grow flex-col mt-12 ">
          <Link href={"/new-payment"}>
            <button className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 font-medium text-white inline-flex items-center gap-2 shadow-md">
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
          <section className="mt-12">
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
