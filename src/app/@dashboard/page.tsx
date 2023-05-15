import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = async () => {
  const session = await unstable_getServerSession();
  return (
    <div className="container mx-auto">
      {/* <h1>Dashboard</h1>
      <h5>
        Signed in as {session?.user?.name} ({session?.user?.email})
      </h5> */}

      {/* wrapper */}
      {/* add new */}
      {/* calender */}

      {/* most recent */}
      {/* ads */}

      <main className="flex my-12">
        <div className="flex flex-grow flex-col">
          <div>
            <button className="bg-blue-600 p-3 rounded-lg">Add Reminder</button>
          </div>
          <div className="border-red-100 w-80 h-98 grid grid-cols-7 mt-12">
            {new Array(30).fill(0).map((c, i) => (
              <div className="p-2 border-gray-100 bg-gray-800 m-1 rounded-sm grid place-items-center">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[0.49]">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Coming soon!</h2>
            <div className="bg-gray-800 p-2 rounded-lg">
              <h6 className="font-semibold">eSEWA online payment</h6>
              <p className="text-gray-300 text-sm">Due Today | $9.99</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">
              <h6 className="font-semibold">Kubernetes</h6>
              <p className="text-gray-300 text-sm">Due 09 May | $19.99</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <h2 className="font-bold">Bundle available</h2>
            <div className="bg-gray-800 p-2 rounded-lg">
              <h6 className="font-semibold">Netflix + Amazon Prime</h6>
              <p className="text-gray-300 text-sm">$19.99 only</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">
              <h6 className="font-semibold">Spotify + Apple Music</h6>
              <p className="text-gray-300 text-sm">13.99 only</p>
            </div>
          </div>
        </div>
      </main>
      <button className="bg-red-400 p-3 rounded-md hover:bg-red-500 font-semibold">
        <a href="/api/auth/signout">Sign out</a>
      </button>
    </div>
  );
};

export default Dashboard;
