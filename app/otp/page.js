"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import sponsor from "/public/cards/sponsors.webp";
import edit from "/public/cards/edit.svg";
import logo from "/public/logo.png";
import close from "/public/close.svg";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ title, onClose, children }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value.slice(0, 6);

    setOtp(value);
  };
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white w-[1200px] h-[730px] rounded-3xl sm:mx-4 lg:my-20">
        <div className="w-full flex">
          {/* left side of the code */}
          <div className="w-1/2">
            <Image src={logo} alt="logo" className="cursor-pointer m-6" />
            <div className="w-full h-full items-center justify-center flex -mt-8 ">
              <div className="flex flex-col items-center justify-center  px-4 ">
                <div className=" w-full ml-24 mr-8">
                  <h2 className="text-center text-4xl tracking-tighter font-medium mb-4 text-gray-900">
                    We emailed you a code
                  </h2>
                  <p className="mt-2 mb-1 text-center text-sm text-gray-600 ">
                    Enter the verification code sent to:
                  </p>
                  <div className="flex w-full gap-2 items-center justify-center">
                    <span className="bg-[#fffaeb] py-1 px-1 font-medium">
                      username@gmail.com
                    </span>
                    <div>
                      <Image alt="edit" src={edit} className="" />
                    </div>
                  </div>
                  <div className="mt-6 relative mx-32 ">
                    <input
                      className="otp-input border-2 focus:outline-none  focus:border-gray-900 focus:ring-0 border-gray-300 ring-0 ring-gray-300  py-5 px-8  font-bold sm:text-md text-[#4a5264]  rounded-xl uppercase "
                      type="text"
                      name="otp"
                      maxLength={6}
                      value={otp}
                      onChange={handleChange}
                      autoComplete="off"
                      style={{
                        letterSpacing: otp.length === 0 ? "2rem" : "2rem",
                      }}
                    />
                    <div className="dots gap-8 ">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div
                          key={index}
                          className="dot"
                          style={{
                            visibility:
                              otp.length > index ? "hidden" : "visible",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 mx-32 text-center text-sm">
                    <a href="#" className="font-medium ">
                      Didn&apos;t get your code?{" "}
                      <span className="text-[#6a5ce3] hover:underline">
                        Send a new code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side of the code */}

          <div className="background-image w-1/2 lg:h-[600px] mr-12">
            <div className="w-full items-center flex justify-end m-6">
              <button className=" text-right text-gray-400 font-thin">
                <Image src={close} alt="close button" onClick={onClose} />
              </button>
            </div>
            <div className="background-imageinner w-[400px] h-[400px] bg-transparent shadow-blue-300 rounded-3xl shadow-md mt-20 mb-6 mx-24"></div>
            <div className="text-[10px] font-medium tracking-widest text-center w-full items-center justify-center">
              TRUSTED BY
              <div className="justify-center w-full flex items-center mt-3">
                <Image
                  src={sponsor}
                  alt="sponsor"
                  className="cursor-pointer w-[370px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
