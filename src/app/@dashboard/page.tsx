import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = async () => {
  const session = await unstable_getServerSession();
  return (
    <div>
      <h1>Dashboard</h1>
      <h5>
        Signed in as {session?.user?.name} ({session?.user?.email})
      </h5>

      <button>
        <a href="/api/auth/signout">Sign out</a>
      </button>
    </div>
  );
};

export default Dashboard;
