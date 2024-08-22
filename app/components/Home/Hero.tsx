import HeroImage from "@/public/images/hero.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[100%] h-[60vh] flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
          <div className="">
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold">
              The <span className="text-blue-500">Easiest Way</span> <br /> To
              Get Your New Job
            </h1>
            <p className="text-[#4f5e64] text-[16px] md:text-[18px] mt-[1rem]">
              Each month, more than 3 million job seekers turn to website in
              their search of work, making over 140,000 applications every
              single day
            </p>
            <div className="mt-[1.5rem] flex flex-row justify-start items-center text-center gap-2 md:gap-4 lg:gap-6">
              <a href={"#popular"}>
                <button className="px-3 py-2 md:px-5 md:py-4 outline-none rounded-md bg-blue-500 text-white hover:bg-blue-700 transition-all duration-300">
                  <span className="">View Popular Jobs</span>
                </button>
              </a>
              <a href={"/postjob"}>
                <button className="px-3 py-2 md:px-5 md:py-4 outline-none rounded-md bg-blue-500 text-white hover:bg-blue-700 transition-all duration-300">
                  <span className="">Post a Job</span>
                </button>
              </a>
            </div>
          </div>
          <div className="">
            <Image src={HeroImage} alt="Image" width={700} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
