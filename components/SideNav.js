"use client";

import React, { useState } from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import logoIcon from "/public/admin/svgexport-5.svg";
import home from "/public/admin/home.svg";
import hold from "/public/hold.svg";
import Hiring from "/public/admin/svgexport-6.svg";
import paint from "/public/paint.webp";
import Compass from "/public/admin/svgexport-9.svg"; // import the other icon
import getout from "/public/exit.svg";
import Home from "/public/admin/home.svg"; // import the other icon
import Projects from "/public/admin/svgexport-11.svg"; // import the other icon
import Network from "/public/admin/svgexport-12.svg"; // import the other icon
import Jobs from "/public/admin/svgexport-10.svg"; // import the other icon
import Plus from "/public/admin/svgexport-1.svg"; // import the other icon
import Payment from "/public/admin/svgexport-13.svg"; // import the other icon
import next from "/public/Navbar/next.svg";
import Link from "next/link";

const SideNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false); // Add this line
  const handleExitClick = () => {
    setIsFixed(!isFixed);
  };

  return (
    <div>
      <div className="min-h-screen  flex overflow-hidden">
        <div
          className={` z-20 min-h-screen bg-[#13161e] pt-6 pb-6  linear absolute  transition-all transform duration-500 ease-in-out  ${
            isHovered || isFixed ? "w-72" : "w-[78px]"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ zIndex: 30 }}
        >
          {isHovered || isFixed ? (
            <div className="flex px-4 items-center justify-between w-full  ">
              <div className="hover:bg-[#373f51] flex gap-2 rounded-md p-4">
                <Image src={logoIcon} alt="" />
                <Image src={logo} alt="" />
              </div>
              <div onClick={handleExitClick}>
                <Image
                  alt="logo"
                  src={isFixed ? getout : hold}
                  className="cursor-pointer w-6 h-6"
                />{" "}
                {/* use the isFixed state to determine which icon to display */}
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="flex justify-between">
                <Image alt="logo" src={logoIcon} className=" " />
              </div>
            </div>
          )}
          {!isHovered && !isFixed && (
            <div className="flex  justify-center pt-14">
              <div className="w-6  h-6 bg-gray-300 rounded-full">
                <div className="object-cover w-full h-full rounded-full"></div>
              </div>
            </div>
          )}

          {(isHovered || isFixed) && (
            <div
              className=" px-4 mt-6"
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            >
              {!isProfileHovered && (
                <div className="hover:bg-[#373f51] rounded py-2 w-full px-2 ">
                  <span className="font-medium text-white">
                    Narinder Maurya
                  </span>
                  <p className="text-xs text-gray-300">Independent</p>
                </div>
              )}
              {isProfileHovered && (
                <button className="hover:bg-[#373f51] rounded text-start py-4 w-full flex justify-between items-center px-2 text-white">
                  Go to Profile <Image alt="logo" src={Hiring} className="" />
                </button>
              )}
            </div>
          )}
          <div className="mt-5 mx-4 ">
            <hr className="border-[#96687e]" />
          </div>
          <div>
            <div className="pt-1 px-4">
              <div className="hover:bg-[#373f51] portfolio  rounded py-6 w-full cursor-pointer flex  text-yellow-600 hover:text-yellow-300 items-center relative gap-2 pl-3">
                <Image alt="logo" src={paint} className="absolute h-5 w-5 " />
                <div
                  className={`absolute left-12 transition-all duration-500 flex justify-between w-full  pr-14 ease-in-out ${
                    isHovered || isFixed ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-md font-medium  ">Your Portfolio</span>
                  <svg
                    xmlnXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="img"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M8.46973 6.53039L13.9394 12.0001L8.46973 17.4697L9.53039 18.5304L16.0607 12.0001L9.53039 5.46973L8.46973 6.53039Z"
                      fill="#bea0f0"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-1 mx-4 ">
            <hr className="border-[#96687e]" />
          </div>
          <div>
            <div className="pt-6 px-4">
              <div className="hover:bg-[#373f51] bg-[#373f51] rounded py-6 w-full cursor-pointer flex items-center relative gap-2 pl-4">
                <Image alt="logo" src={home} className="absolute h-4 w-4 " />
                <div
                  className={`absolute left-12 transition-all duration-500 ease-in-out ${
                    isHovered || isFixed ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-md font-medium text-white ">Home</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-2 px-4 ">
              <div className="hover:bg-[#373f51] rounded py-6 w-full cursor-pointer flex items-center relative gap-2 pl-4">
                <Image alt="logo" src={Compass} className="absolute h-4 w-4 " />
                <div
                  className={`absolute left-12 transition-all duration-500 ease-in-out ${
                    isHovered || isFixed ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-md font-medium text-white ">
                    Discover
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1 mx-4 ">
            <hr className="border-[#222834]" />
          </div>

          <div>
            <div className="pt-2 mx-4 ">
              <div className="hover:bg-[#373f51] rounded py-6 w-full cursor-pointer flex items-center relative gap-2 pl-4">
                <Image alt="logo" src={Jobs} className="absolute  h-4 w-4 " />
                <div
                  className={`absolute  left-12 transition-all flex  duration-500 ease-in-out ${
                    isHovered || isFixed ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="justify-between items-center w-full gap-32 flex">
                    <Link href="/opportunities"><div className="text-md font-medium text-white ">Jobs</div></Link>
                    <Image alt="logo" src={Plus} className="h-4 w-4 " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-2 mx-4 ">
              <div className="hover:bg-[#373f51] rounded py-6 w-full cursor-pointer flex items-center relative gap-2 pl-4">
                <Image
                  alt="logo"
                  src={Projects}
                  className="absolute h-4 w-4 "
                />
                <div
                  className={`absolute left-12 transition-all duration-500 ease-in-out ${
                    isHovered || isFixed ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-md font-medium text-white ">
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1 mx-4 ">
            <hr className="border-[#222834]" />
          </div>
          <div>
            <div className="mt-2 mx-4 ">
              <div className="hover:bg-[#373f51] rounded py-6 w-full cursor-pointer flex items-center relative gap-2 pl-4">
                <Image alt="logo" src={Payment} className="absolute h-4 w-4 " />
                <div
                  className={`absolute left-12 transition-all duration-500 ease-in-out ${
                    isHovered || isFixed ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-md font-medium text-white ">
                    Wallet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
