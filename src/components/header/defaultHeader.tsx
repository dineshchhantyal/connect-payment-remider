import { unstable_getServerSession } from "next-auth";
import LoginButton from "../login/LoginButton";
import SearchBar from "../search/SearchBar";
import calculateRemainingTime from "@/helpher/calculateRemainingTime";
import clsx from "clsx";

async function Header({ logo }: { logo: string }) {
  const session = await unstable_getServerSession();
  const subscriptionEnds = calculateRemainingTime(Date.now() + 12939129);
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-800 text-white">
      <div className="flex items-center ">
        <img src={logo} alt="Logo" className="h-6 mr-4" />
      </div>
      <SearchBar className="hidden md:block flex-[0.6] " />
      {session ? (
        <div className="flex items-center">
          {/* subscription available till */}
          <div
            className={clsx("mr-4 p-2.5 rounded-3xl shadow-sm", {
              "text-green-500": subscriptionEnds.days > 0,
              "text-yellow-500": subscriptionEnds.hours > 0,
              "text-red-500": subscriptionEnds.minutes > 0,
              "bg-gray-700": subscriptionEnds.days === 0,
              "bg-gray-800": subscriptionEnds.hours === 0,
              "bg-gray-900": subscriptionEnds.minutes === 0,
            })}
          >
            <span className="text-sm font-bold">
              {subscriptionEnds.days >
              0 /* if subscription ends in days then show years */
                ? subscriptionEnds.days +
                  ` day${subscriptionEnds.days > 1 ? "s" : ""}`
                : subscriptionEnds.hours >
                  0 /* if subscription ends in hours then show hours */
                ? subscriptionEnds.hours +
                  ` hour${subscriptionEnds.hours > 1 ? "s" : ""}`
                : subscriptionEnds.minutes >
                  0 /* if subscription ends in minutes then show minutes */
                ? subscriptionEnds.minutes +
                  ` minute${subscriptionEnds.minutes > 1 ? "s" : ""}`
                : 0}
            </span>
          </div>

          <div>
            <button className="p-1 rounded-md hover:bg-gray-700 focus:outline-none">
              <img
                src={session?.user?.image ?? ""}
                alt={session?.user?.name ?? "Profile Image"}
                className="w-8 h-8 rounded-full"
              />
            </button>
          </div>
        </div>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
}

export default Header;
