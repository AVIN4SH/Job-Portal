import Heading from "../components/Helper/Heading";

const PostJob = () => {
  return (
    <div className="max-w-6xl w-11/12 lg:w-4/5 mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <Heading mainHeading="Post a Job" subHeading="" />
      <form>
        {/* Job Title */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
            placeholder="e.g., Frontend Developer"
          />
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
            placeholder="e.g., Tech Innovators Inc."
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
            placeholder="e.g., Remote, New York, San Francisco"
          />
        </div>

        {/* Job Type */}
        <div className="mb-6">
          <label
            htmlFor="jobType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Type
          </label>
          <select
            id="jobType"
            name="jobType"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
          >
            <option className="text-gray-700 font-medium">Full-time</option>
            <option className="text-gray-700 font-medium">Part-time</option>
            <option className="text-gray-700 font-medium">Contract</option>
            <option className="text-gray-700 font-medium">Freelance</option>
            <option className="text-gray-700 font-medium">Internship</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="mb-6 flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="salaryMin"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Salary Range (Min in $)
            </label>
            <input
              type="number"
              id="salaryMin"
              name="salaryMin"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
              placeholder="e.g., 50000"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="salaryMax"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Salary Range (Max in $)
            </label>
            <input
              type="number"
              id="salaryMax"
              name="salaryMax"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
              placeholder="e.g., 100000"
            />
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
            placeholder="Describe the role, responsibilities, and requirements..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md transition-colors duration-200"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
