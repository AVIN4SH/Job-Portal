import React from "react";
import Hero from "./Hero";
import JobCatagory from "./JobCatagory";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCatagory />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
