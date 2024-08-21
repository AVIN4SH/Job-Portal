import Image from "next/image";

interface Props {
  image: string;
  catagory: string;
  openPosition: string;
}

const JobCatagoryCard = ({ image, catagory, openPosition }: Props) => {
  return (
    <div className="p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
      <div className="flex items-center space-x-4">
        {/* Card Image */}
        <Image src={image} alt={catagory} width={60} height={60} />
        {/* Card Content */}
        <div className="">
          <h1 className="text-[17px] font-semibold mb-[0.4rem]">{catagory}</h1>
          <p className="text-[14px] text-black font-semibold text-opacity-50">
            ({openPosition} Open Positions)
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCatagoryCard;
