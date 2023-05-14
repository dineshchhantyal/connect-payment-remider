import { unstable_getServerSession } from "next-auth";
import LoginButton from "../login/LoginButton";
import SearchBar from "../search/SearchBar";

async function Header({ logo }: { logo: string }) {
  const session = await unstable_getServerSession();
  return (
    <nav className="flex items-center justify-around px-6 py-3 bg-gray-800 text-white">
      <div className="flex items-center flex-[0.1]">
        <img src={logo} alt="Logo" className="h-6 mr-4" />
      </div>
      <SearchBar />
      {session ? (
        <div className="flex items-center flex-[0.25]">
          <div className="hidden md:block mr-4">30 days remaining</div>
          <div>
            <button className="p-1 rounded-md hover:bg-gray-700 focus:outline-none">
              <img
                src="profile.jpg"
                alt="User profile"
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
