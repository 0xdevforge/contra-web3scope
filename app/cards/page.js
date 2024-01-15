"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import sponsor from "/public/Cards/sponsors.webp";
import { FcGoogle } from "react-icons/fc";
import logo from "/public/logo.png";
import close from "/public/close.svg";
import { toast } from "react-toastify";
import back from "/public/Cards/continuepage.svg";
import "react-toastify/dist/ReactToastify.css";





const Cards = ({ title, onClose, children }) => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [source, setSource] = useState("");
    const [otp, setOtp] = useState("");

    const isValidEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const isValidOtp = (otp) => {
        // Add your OTP validation logic here
        // For simplicity, let's just check if the OTP is not empty
        return otp.trim() !== "";
    };
    const handleContinue = () => {
        if (step === 1 && isValidEmail(email)) {
            // Perform email verification logic here

            // Move to the next step
            setStep(2);
        } else if (step === 2 && source.trim() !== "") {
            // Perform source selection logic here

            // For simplicity, you can close the card after the second step
            onClose();
        } else if (step === 3 && isValidOtp(otp)) {
            setStep(3);

        } else {
            // Display an error message or handle invalid inputs
            toast.error("Invalid input. Please check your information.");
        }
    };


    return (
        <div className='flex items-center justify-center min-h-screen '>
            <div className='bg-white w-[1200px] h-[730px] rounded-3xl sm:mx-4 lg:my-20'>
                <div className='w-full flex'>
                    {/* left side of the code */}
                    <div className='w-1/2'>
                        <Image src={logo} alt="logo" className="cursor-pointer m-6" />
                        <div className="w-full h-full items-center flex justify-center ">
                            <div className="ml-24 mr-8 space-y-4">
                                {step === 1 && (
                                    <>
                                        <h1 className="text-4xl font-medium tracking-tight">
                                            Create your Contra profile
                                        </h1>
                                        <h2 className="text-sm">
                                            Sign up with your email address
                                        </h2>
                                        <div>
                                            <button className="flex items-center justify-center py-2 mt-8 w-full border rounded-3xl  mb-6">
                                                <span className="ml-2 flex gap-2 items-center">
                                                    <FcGoogle /> Continue with Google
                                                </span>
                                            </button>
                                        </div>

                                        <div className="w-full flex gap-2 items-center">
                                            <div className="w-1/3">
                                                <h3 className="flex items-center my-4 text-[9px] tracking-widest text-gray-500">
                                                    OR SIGN UP WITH
                                                </h3>
                                            </div>
                                            <hr className="w-full" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="name@work-email.com"
                                            className="border rounded-lg w-full py-3 px-4 mb-4 text-sm focus:outline-none "
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button
                                            className={`bg-[#373f51] text-white w-full py-3 text-sm  rounded-full ${!isValidEmail(email) ? 'bg-[#f2f4f7] text-[#d0d4dc] cursor-not-allowed' : ''}`}
                                            disabled={!isValidEmail(email)}
                                            onClick={handleContinue}
                                        >
                                            Continue
                                        </button>
                                        <p className="text-center text-gray-600 text-xs mt-4">
                                            Already using Contra?{" "}
                                            <a href="#" className="text-purple-700">
                                                Sign in here.
                                            </a>
                                        </p>

                                    </>
                                )}

                                {step === 2 && (
                                    <div className="py-24 space-y-4">
                                        <h2 className="text-3xl font-medium">
                                            How did you hear about us?
                                        </h2>
                                        <input
                                            type="text"
                                            placeholder="Tell us where you heard about Contra"
                                            className="border rounded-lg w-full py-3 px-4 mb-4 text-sm focus:outline-none"
                                            value={source}
                                            onChange={(e) => setSource(e.target.value)}
                                        />

                                        <div className="flex gap-2 items-center w-full">
                                            <div className="w-8 h-8  border-2 border-gray-200 items-center flex justify-center rounded-full">
                                                <Image src={back} alt="back" className="cursor-pointer w-4 h-4" />
                                            </div>
                                            <button
                                                className={` px-3 py-2 bg-[#373f51] text-white  text-sm  rounded-full ${source.trim() === '' ? ' text-[#d0d4dc]  text-sm cursor-not-allowed  bg-[#f2f4f7]' : ''}`}
                                                disabled={source.trim() === ''}
                                                onClick={handleContinue}
                                            >
                                                Continue
                                            </button>
                                        </div>

                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    {/* right side of the code */}

                    <div className="background-image w-1/2 lg:h-[600px] mr-12">
                        <div className="w-full items-center flex justify-end my-6 ">
                            <button className=" text-right text-gray-400 font-thin">
                                <Image src={close} alt="close button" onClick={onClose} />
                            </button>
                        </div>
                        <div className="background-imageinner w-[400px] h-[400px] bg-transparent shadow-blue-100 rounded-3xl shadow-lg mt-20 mb-6 mx-24">
                        </div>
                        <div className="text-[10px] font-medium tracking-widest text-center w-full items-center justify-center">
                            
                            TRUSTED BY
                            <div className="justify-center w-full flex items-center mt-3">
                                <Image src={sponsor} alt="sponsor" className="cursor-pointer w-[370px] " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards