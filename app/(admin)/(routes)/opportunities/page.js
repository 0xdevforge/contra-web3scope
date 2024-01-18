import Image from "next/image";

import Header from "./components/Header";
import Card from "./components/Card";

import filter from "./assets/filter.svg";

const JobsPage = () => {
  return (
    <div>
      <Header />
      <div className="w-full my-10 flex justify-between items-center">
        <div className="flex gap-4">
          <span>Discover</span>
          <span>Applied</span>
        </div>
        <button className="border py-3 px-4 rounded-3xl items-center flex gap-2">
          <Image src={filter} alt="filter" width={20} height={20} />
          Filters
        </button>
      </div>
      <Card />
    </div>
  );
};

export default JobsPage;
