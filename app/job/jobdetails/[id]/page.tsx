import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() === params.id);
  const session = await getServerSession(authOptions);

  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href={"/signup"}>
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white hover:bg-emerald-500 transition-all duration-300">
              Sign Up to Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto">
        <h1 className="text-[20px] font-semibold">Job Description</h1>
        <p className="mt-4 text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum
          tempora ratione eveniet adipisci beatae nam cumque, impedit possimus
          reiciendis officiis expedita dolorem vero. Odio accusantium at totam
          veritatis architecto quaerat, soluta ullam repellat maiores autem nisi
          nam cumque tempore consequatur nostrum voluptatum unde minus!
        </p>

        <h1 className="text-[20px] mt-8 font-semibold">Key Responsibilities</h1>
        <p className="mt-4 text-black text-opacity-70">
          Odio accusantium at totam veritatis architecto quaerat, soluta ullam
          repellat maiores autem nisi nam cumque tempore consequatur nostrum
          voluptatum unde minus! Eius, vel dolore? Excepturi earum blanditiis
          quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          molestias obcaecati, cum odio fugiat quasi! Voluptates sed maxime enim
          error ipsam culpa commodi nulla quae recusandae ratione ducimus dolore
          officiis adipisci quo laboriosam architecto odit, doloribus
          perferendis. Laborum omnis, asperiores eveniet commodi sapiente
          ducimus tempore accusamus, doloribus ut odit perspiciatis dolore, sit
          aliquam.
        </p>

        <h1 className="text-[20px] mt-8 font-semibold">Skills</h1>
        <ul className="mt-4">
          <li className="mt-2 text-black text-opacity-70">Next JS</li>
          <li className="mt-2 text-black text-opacity-70">Tailwind CSS</li>
          <li className="mt-2 text-black text-opacity-70">Git/Github</li>
          <li className="mt-2 text-black text-opacity-70">Typescript</li>
          <li className="mt-2 text-black text-opacity-70">Authentication</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
