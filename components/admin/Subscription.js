import Image from "next/image";
import React from "react";
import sub from "/public/sub.png";

const Subscription = () => {
  return (
    <div>
      <h2>Manage your Contra Pro subscription and billing information</h2>

      <div className="pt-6">
        <hr className="border-gray-100 border-1" />
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold">Free</h3>
        <p className="text-gray-600">$0 USD / month</p>
      </div>

      <div className="pt-6">
        <hr className="border-gray-100 border-1" />
      </div>

      <div className="pt-6">
        <h4 className="text-3xl mb-2 font-semibold">Go Pro</h4>
        <button className="bg-[#f0eefc] text-[#6a57e3] py-2 px-4 rounded-lg">
          <b>$29</b> USD / month
        </button>
        <div className="flex items-center w-full">
          <div className="w-1/2">
            <ul className="text-sm text-gray-600 mb-6 space-y-4 mt-6 ">
              <li className="flex items-center mb-2 ">
                <span className="mr-2"> ✔️ </span>
                AI-powered portfolio website templates with customizable logos,
                fonts & colors
              </li>
              <li className="flex items-center mb-2 ">
                <span className="mr-2"> ✔️ </span>
                Increased visibility to clients
              </li>
              <li className="flex items-center mb-2 ">
                <span className="mr-2"> ✔️ </span>
                Custom domain support
              </li>
              <li className="flex items-center mb-2 ">
                <span className="mr-2"> ✔️ </span>
                Advanced analytics and insights
              </li>
              <li className="flex items-center">
                <span className="mr-2"> ✔️ </span>
                Branded invoices & proposals
              </li>
            </ul>
          </div>
          <div className="w-1/2 ">
            <Image
              src={sub}
              alt=""
              className=" object-cover object-left h-48 pl-24"
            />
          </div>
        </div>

        <button className="bg-[#a669e0] text-[#ffffff] py-3 px-5 rounded-3xl">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
};

export default Subscription;
