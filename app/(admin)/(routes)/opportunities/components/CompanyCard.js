"use client";

import Image from "next/image";
import all from "../assets/all.svg";
import bag from "../assets/bag.svg";
import clock from "../assets/clock.svg";
import dollar from "../assets/dollar.svg";

const Card = ({
  name,
  position,
  role,
  time,
  payScale,
  skills,
  ago,
  payType,
}) => {
  return (
    <div>
      <div className="border  rounded-3xl p-6">
        <div className="flex items-start w-full justify-between">
          {" "}
          <div className="flex items-start space-x-6 mb-4">
            <Image
              className="h-12 w-12 rounded-full"
              src={all}
              alt="Profile picture"
            />
            <div>
              <p className="text-sm text-gray-500">{position}</p>
              <h2 className="text-2xl text-gray-800 font-semibold mb-4">
                {role}
              </h2>
            </div>
          </div>
          <div className="flex items-center bg-[#f2f4f7] px-2 py-2 rounded-2xl text-xs">
            <Image src={bag} alt="Profile picture" width={20} height={20} />
            <span className="text-[#4a5264] ml-1 ">Posted {ago}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-sm text-gray-500 gap-4 flex mr-3 ">
              {skills.map((skill, index) => (
                <p key={index} className="border p-2 rounded-3xl ">
                  {skill}
                </p>
              ))}
            </span>
            <span className="text-sm text-gray-500 flex gap-2 items-center">
              <Image src={clock} alt="Profile picture" width={15} height={15} />
              {time}
            </span>
            <div className="text-sm text-gray-700 bg-[#ebf1fd] px-2 rounded-lg">
              <span className="flex items-center gap-2">
                <Image
                  src={dollar}
                  alt="Profile picture"
                  width={15}
                  height={15}
                />
                {payScale}
                <span className="text-sm text-gray-500">{payType}</span>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="pt-6">
          <hr />
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="hover:underline ">Not interested</button>

          <button className="border-2 border-black rounded-3xl px-4 py-2 hover:bg-[#f5f6f9]">
            View job posting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
