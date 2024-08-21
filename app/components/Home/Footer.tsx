import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        {/* 1st Part of Footer */}
        <div>
          <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">
            getJob
          </h1>
          <p className="text[14px] text-white text-opacity-70">
            getJob - Your reliable platform for finding the perfect job. Built
            with Next.js for seamless navigation and a user-friendly experience
            tailored for your career growth.
          </p>
          {/* Social Icons */}
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full border-white border flex items-center justify-center flex-col">
              <FaFacebook className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-black border-white border rounded-full flex items-center justify-center flex-col">
              <FaX className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full border-white border flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full border-white border flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
          </div>
        </div>
        {/* 2nd Part */}
        <div className="">
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About US
          </h1>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Privacy
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Policies
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Application
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Candidates
          </p>
        </div>
        {/* 3rd Part */}
        <div className="">
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h1>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            All Jobs
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Job Details
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            How to Apply
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Resume
          </p>
        </div>
        {/* 4th Part */}
        <div className="">
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get in Touch
          </h1>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            +91 93XXXXXX22
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            getJob@google.com
          </p>
          <p className="text-[15px] w-fit text-white/50 hover:text-white/75 cursor-pointer text-opacity-30 mb-[0.7rem]">
            India
          </p>
        </div>
      </div>
      <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white/75">
        Copyright by getJob &copy; {new Date().getFullYear()}
      </h1>
    </div>
  );
};

export default Footer;
