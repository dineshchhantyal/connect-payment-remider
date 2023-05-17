import { unstable_getServerSession } from "next-auth";
import LoginButton from "../Login/LoginButton";
import SearchBar from "../Search/SearchBar";
import { calculateRemainingTime } from "@/lib/helphers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

async function Header({ logo }: { logo: string }) {
  const session = await unstable_getServerSession();
  const subscriptionEnds = calculateRemainingTime(Date.now() + 12939129);
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-800 text-white">
      <div className="flex items-center ">
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="Logo"
            className="mr-4"
            height={"24"}
            width={"120"}
          />
        </Link>
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
              <Image
                src={session?.user?.image ?? ""}
                alt={session?.user?.name ?? "Profile Image"}
                className="rounded-full"
                width={32}
                height={32}
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
