import { authOptions } from "@/auth";
import LogoImage from "@/public/images/logo.png";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import User from "../Helper/User";

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-[12vh] overflow-hidden shadow-md">
      <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
          <Link href={"/"}>
            <Image
              src={LogoImage}
              alt="Logo"
              width={250}
              height={250}
              className="w-[100%] h-[100%]"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* When no session we display sign up button */}
          {!session && (
            <Link href={"/signup"}>
              <button className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300 ">
                Sign Up
              </button>
            </Link>
          )}
          {/* When Logged in we display user */}
          {session && (
            <button className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-orange-600 font-semibold text-white rounded-lg hover:bg-orange-800 transition-all duration-300 ">
              Post a Job
            </button>
          )}
          {session && <User session={session} />}
        </div>
      </div>
    </div>
  );
};

export default Nav;
