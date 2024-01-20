import Image from "next/image";

import Header from "./components/Header";
import Card from "./components/Card";
import CompanyCard from "./components/CompanyCard";
import filter from "./assets/filter.svg";

const JobsPage = () => {
  return (
    <div>
      <Header />
      <div className="w-full my-10 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="font-medium cursor-pointer hover:border-b-2 hover:border-black  ease-in-out   ">
            Discover
          </span>
          <span className="text-[#677084] cursor-pointer hover:border-b-2 border-[#677084] ">
            Applied
          </span>
        </div>
        <button className="border py-3 px-4 rounded-3xl items-center flex gap-2 hover:bg-[#f5f6f9]">
          <Image src={filter} alt="filter" width={20} height={20} />
          Filters
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {" "}
        <Card
          time={"Delivery: 4 weeks"}
          name={"Narinder Maurya"}
          ago={"17 hours ago"}
          role={"Combat Video Game Animator Needed"}
          skills={["Motion Designer", "Aero Engineer"]}
          payScale={"$500 - $800"}
          payType={"• One-time"}
          position={"Web Developer"}
        />
        <Card
          time={"Duration: Ongoing"}
          name={"Vikram Singh"}
          ago={"2 days ago"}
          role={"Social Media Partner Needed"}
          skills={["Motion Designer", "Aero Engineer"]}
          payScale={"$500 - $800"}
          payType={"• One-time"}
          position={"individual"}
        />
        <CompanyCard
          time={"Duration: Ongoing"}
          ago={"2 days ago"}
          role={"Social Partner Needed"}
          skills={["Motion Designer", "Aero Engineer"]}
          payScale={"$500 - $800"}
          payType={"/hr"}
          position={"Near Biuilders"}
        />
      </div>
    </div>
  );
};

export default JobsPage;
