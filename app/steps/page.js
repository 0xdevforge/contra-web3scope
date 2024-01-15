"use client";

import React, { ReactNode, useState } from "react";
import Step2 from "/components/Step2.jsx";



const Cards = ({ onClose, leftSideProps, rightSideProps }) => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleContinue = () => {
        // Check the current step and update accordingly
        if (step === 1) {
            // Move to step 2 and update left side content
            setStep(2);
        } else if (step === 2) {
            // Handle step 2 logic
            // You can add additional states and logic for step 2 here
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='bg-white w-[1200px] h-[1000px] rounded-3xl sm:mx-4 sm:my-2 lg:my-16 '>
                <div className='w-full flex'>
                    {/* left side of the code */}
                    <div className='w-1/2'>
                        <div className="flex items-center justify-center w-full h-full">
                            <div className="ml-20 mr-12">

                                <div className="text-xs text-gray-700 mb-4">
                                    Step {step}/5
                                </div>

                                {step === 1 && (
                                    <React.Fragment>
                                        <h1 className="text-3xl tracking-tight font-medium">
                                            What&apos;s your name? 🙌
                                        </h1>

                                        <div className="w-full items-center flex gap-4">
                                            <div className="border-gray-300 focus:border-0 mt-5 outline-none  focus:ring-0 border rounded-lg px-4 py-2  text-sm w-full focus:outline-none ring-0  h-full items-center flex flex-col justify-center">
                                                <p className="text-left w-full text-gray-700 text-xs">
                                                    First Name
                                                </p>
                                                <input
                                                    type="text"
                                                    className="border-0 mt-2 mb-2 text-md focus:outline-none text-left w-full"
                                                    onChange={handleFirstNameChange}
                                                />
                                            </div>
                                            <div className="border-gray-300 focus:border-0 mt-5 outline-none  focus:ring-0 border rounded-lg px-4 py-2  text-sm w-full focus:outline-none ring-0  h-full items-center flex flex-col justify-center">
                                                <p className="text-left w-full text-gray-700 text-xs">
                                                    Last Name
                                                </p>
                                                <input
                                                    type="text"
                                                    className="border-0 mt-2 mb-2 text-md focus:outline-none text-left w-full"
                                                    onChange={handleLastNameChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <button
                                                disabled={firstName.trim() === "" || lastName.trim() === ""}
                                                onClick={handleContinue}
                                                className={
                                                    firstName.trim() === "" || lastName.trim() === ""
                                                        ? "bg-[#f2f4f7] rounded-3xl text-gray-400 py-2 text-sm px-3 cursor-not-allowed"
                                                        : "bg-[#373f51] rounded-3xl text-white py-2 text-sm px-3 cursor-pointer"
                                                }
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </React.Fragment>
                                )}

                                {step === 2 && (
                                    <React.Fragment>
                                        <Step2/>
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* right side of the code */}
                    <div className="steps-image w-1/2 lg:h-[600px] my-32">
                        {rightSideProps}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;