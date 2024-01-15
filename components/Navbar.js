"use client";

import Image from "next/image";
import React, { useState } from "react";
import Star from "/public/Navbar/star.svg";
import Share from "/public/Navbar/share.svg";
import Message from "/public/admin/svgexport-2.svg";
import notification from "/public/admin/svgexport-3.svg";
import settings from "/public/admin/settings.svg";
import help from "/public/admin/help.svg";
import logout from "/public/admin/logout.svg";
import next from "/public/Navbar/next.svg";
import work from "/public/Navbar/work.svg";
import star from "/public/admin/Star.svg";
import plus from "/public/admin/svgexport-1.svg";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false); // Add this line

  return (
    <nav className="w-full pb-2 border-b-[1px] bg-white border-[#f2f4f7] pt-2 items-center justify-between">
      <div className="flex justify-between w-full pt-2 ">
        <span className="font-semibold pt-1 text-2xl pl-28">Dashboard</span>
        <div className="flex gap-2 items-center justify-between">
          <div>
            <button className="border-2 text-[#373f51] py-2 px-3 hover:bg-[#f9fafb] items-center font-medium border-[#e5a2ce] flex gap-2 rounded-3xl">
              <Image src={Star} alt="star" className="w-5 h-5" />
              Contra Pro
            </button>
          </div>

          <div>
            <button className="border-2 text-[#373f51] py-2 px-3 hover:bg-[#f9fafb] items-center font-medium border-[#d0d4dc] flex gap-2 rounded-3xl">
              <Image src={Share} alt="star" className="w-5 h-5" />
              Share Profile
            </button>
          </div>

          <div className="p-3 rounded-full hover:bg-[#f9fafb]">
            <Image alt="logo" src={Message} className="" />
          </div>

          <div className="p-3 rounded-full hover:bg-[#f9fafb]">
            <Image alt="logo" src={notification} className="" />
          </div>

          <div
            className="w-10 mx-4  h-10 bg-gray-300 rounded-full dropdown cursor-pointer"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            {dropdownVisible && (
              <div className="absolute right-2 mt-12 w-[290px] rounded-xl shadow-2xl shadow-gray-300 text-white bg-[#14171f] ring-1 ring-white/30 ring-opacity-5">
                <div
                  className=""
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a href="#" className="" role="menuitem">
                    <div
                      className=" rounded-xl mx-2 "
                      onMouseEnter={() => setIsProfileHovered(true)}
                      onMouseLeave={() => setIsProfileHovered(false)}
                    >
                      {!isProfileHovered && (
                        <div className="hover:bg-[#373f51] rounded-lg pt-4 w-full px-4 mt-2">
                          <span className="font-medium">Narinder Maurya</span>
                          <p className="text-xs text-gray-400">Independent</p>
                        </div>
                      )}
                      {isProfileHovered && (
                        <button className="hover:bg-[#373f51] text-start rounded-lg flex justify-between items-center py-4 w-full px-4 mt-2">
                          Go to Profile{" "}
                          <Image alt="logo" src={next} className="" />
                        </button>
                      )}
                    </div>
                  </a>
                  <a
                    href="#"
                    className="gap-3 mx-2 px-4 my-2 py-2  text-sm text-gray-200 flex items-center text-md font-medium hover:bg-[#373f51] rounded-md"
                    role="menuitem"
                  >
                    <Image alt="" className="w-5 h-5" src={work} />
                    Work Preferences
                  </a>
                  <a
                    href="/settings"
                    className="gap-3 mx-2 px-4 my-2 py-2  text-sm text-gray-200 flex items-center text-md font-medium hover:bg-[#373f51] rounded-md"
                    role="menuitem"
                  >
                    <Image alt="" className="w-5 h-5" src={settings} />
                    Settings
                  </a>
                  <div className="mx-4 my-1 ">
                    <hr className="border-[#212632]" />
                  </div>
                  <a
                    href="#"
                    className="gap-3 mx-2 px-4 my-2 py-2 text-sm text-gray-200 justify-between flex items-center text-md  font-medium hover:bg-[#373f51] rounded-md"
                    role="menuitem"
                  >
                    <div className="flex items-center gap-2 ">
                      <Image alt="" className="w-5 h-5" src={star} />
                      Sign up for Hiring account
                    </div>
                    <div>
                      <Image alt="" className="w-5 h-5" src={plus} />
                    </div>
                  </a>
                  <div className="mx-4 my-1 ">
                    <hr className="border-[#212632]" />
                  </div>
                  <a
                    href="#"
                    className="gap-3 mx-2 px-4 my-2 py-2 text-sm text-gray-200 flex items-center text-md font-medium hover:bg-[#373f51] rounded-md"
                    role="menuitem"
                  >
                    <Image alt="" className="w-5 h-5" src={help} />
                    Help
                  </a>
                  <a
                    href="#"
                    className=" gap-3 mx-2 px-4 my-2 py-2 mb-8 text-sm text-gray-200 flex items-center text-md font-medium hover:bg-[#373f51] rounded-md"
                    role="menuitem"
                  >
                    <Image alt="" className="w-5 h-5" src={logout} />
                    Log Out
                  </a>
                </div>
              </div>
            )}
            <div className="object-cover w-full h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
