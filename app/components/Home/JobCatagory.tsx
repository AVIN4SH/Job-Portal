import Heading from "../Helper/Heading";
import JobCatagoryCard from "../Helper/JobCatagoryCard";

const JobCatagory = () => {
  return (
    <div className="pt-20 pb-12">
      <Heading
        mainHeading="Popular Job Catagories"
        subHeading="2020 jobs live - 194 added today"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center">
        <JobCatagoryCard
          image="/images/icon1.png"
          catagory="Finance"
          openPosition="23"
        />
        <JobCatagoryCard
          image="/images/icon2.png"
          catagory="Marketing"
          openPosition="13"
        />
        <JobCatagoryCard
          image="/images/icon3.png"
          catagory="Design"
          openPosition="33"
        />
        <JobCatagoryCard
          image="/images/icon4.png"
          catagory="Development"
          openPosition="25"
        />
        <JobCatagoryCard
          image="/images/icon5.png"
          catagory="Human Resource"
          openPosition="15"
        />
        <JobCatagoryCard
          image="/images/icon6.png"
          catagory="Automotive Jobs"
          openPosition="29"
        />
        <JobCatagoryCard
          image="/images/icon7.png"
          catagory="Customer Services"
          openPosition="19"
        />
        <JobCatagoryCard
          image="/images/icon8.png"
          catagory="Health & Care"
          openPosition="45"
        />
        <JobCatagoryCard
          image="/images/icon9.png"
          catagory="Project Management"
          openPosition="20"
        />
      </div>
    </div>
  );
};

export default JobCatagory;
