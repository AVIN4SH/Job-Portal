"use client";
import ChairImage from "@/public/images/chair.jpg";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="overflow-hidden h-[84vh] flex flex-col items-center justify-center">
      {/* Image */}
      <Image
        src={ChairImage}
        alt="Image"
        width={400}
        height={200}
        className=""
      />
      {/* SignUp Button */}
      <button
        onClick={() => {
          signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_URL });
        }}
        className="px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white "
      >
        Sign Up Now
      </button>
    </div>
  );
};

export default SignUp;
