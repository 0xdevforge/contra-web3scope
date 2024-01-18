"use client";

import Image from "next/image";
import all from "../assets/all.svg";
const Card = () => {
  return (
    <div>
      <div className="border  rounded-3xl p-6">
        <div className="flex items-center space-x-6 mb-4">
          <Image
            className="h-12 w-12 rounded-full"
            src={all}
            alt="Profile picture of Prash B, hiring as an individual"
          />
          <div>
            <p className="text-lg text-gray-700 font-semibold">Prash B</p>
            <p className="text-sm text-gray-500">Hiring as an individual</p>
          </div>
        </div>
        <h2 className="text-2xl text-gray-800 font-bold mb-2">
          Combat Video Game Animator Needed
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-3">3D Animator</span>
            <span className="text-sm text-gray-500">Delivery: 2 weeks</span>
          </div>
          <div className="text-lg text-gray-700 font-semibold">
            <span>$500 - $800</span>{" "}
            <span className="text-sm text-gray-500">• One-time</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="text-blue-600 hover:underline">
            Not interested
          </button>
          <div className="flex items-center">
            <i className="far fa-clock text-gray-400"></i>
            <span className="text-sm text-gray-500 ml-1">
              Posted an hour ago
            </span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View job posting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
