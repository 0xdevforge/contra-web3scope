import Image from "next/image";
import React from "react";
import home from "/public/home.webp";

const HomePage = () => {
  return (
    <div className="min-h-screen  pl-28 p-4  2xl:mx-52 bg-white">
      <div className="text-4xl font-medium text-gray-800 mb-2 mt-2">
        Welcome, asd{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-12">
        <div className="bg-[#ebf1fd] rounded-xl shadow px-6 pt-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Build profile
          </h2>
          <p className="text-gray-600 mb-10">Get access to more features.</p>
          <button className=" text-black border-black border-2  rounded-3xl bg-white hover:bg-[#f5f6f9] px-4 py-2">
            Complete profile
          </button>
        </div>
        <div className="bg-[#ebf1fd] rounded-xl shadow px-6 pt-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Find your next job
          </h2>
          <p className="text-gray-600 mb-10">Explore exclusive jobs.</p>
          <button className=" text-black border-black border-2  rounded-3xl bg-white hover:bg-[#f5f6f9] px-4 py-2">
            Discover jobs
          </button>
        </div>
        <div className="bg-[#ebf1fd] rounded-xl shadow px-6 pt-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Send invoice or proposal
          </h2>
          <p className="text-gray-6012 mb-10">
            12 Manage your workflow commission-free
          </p>
          <button className="text-black border-black border-2  rounded-3xl bg-white hover:bg-[#f5f6f9] px-4 py-2">
            Invite client
          </button>
        </div>
      </div>
      <hr />
      <div className="text-center mt-12">
        <Image
          src={home}
          alt="Placeholder image representing a data insights graph with a +23% increase and a $20,000 revenue display"
          className="inline-block mb-4 w-[330px] h-[240px]"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Unleash the power of data insights
        </h2>
        <p className="text-gray-600">
          Share your portfolio, send invoices, and complete projects to unlock
          trends to
          <br /> optimize your business growth.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
