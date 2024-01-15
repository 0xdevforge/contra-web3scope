import React, { useState } from "react";
import Image from "next/image";
import paint from "/public/paint.webp";
import edit from "/public/admin/edit.svg";
import trash from "/public/admin/delete.svg";

function Domain() {
  const [editMode, setEditMode] = React.useState(false);
  const [domain, setDomain] = React.useState("dawanx864");

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = () => {
    setEditMode(false);
    // Save the domain value to the backend or state management here
  };

  const handleChange = (event) => {
    setDomain(event.target.value);
  };
  return (
    <div className="mt-2">
      <div className=" py-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Contra Profile Domain
        </h3>
        {editMode ? (
          <div className="input-prefix flex flex-wrap gap-2 border-gray-300 focus:border-0 mt-1 outline-none focus:ring-0 border rounded px-2 py-3 text-sm w-full focus:outline-none ring-0">
            <span className="input-prefix-text">contra.com/</span>
            <input
              type="text"
              value={domain}
              onChange={handleChange}
              className="input-field bg-transparent border-0 text-md focus:outline-none text-gray-700 flex-1 px-2"
              placeholder=""
            />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <a href="#" className=" text-md my-2 text-[#dbdee4]">
              contra.com/
              <span className="text-[#4a5264]">
              {domain}
              </span>
            </a>
            <div className="">
              {!editMode && (
                <button className="cursor-pointer mr-4" onClick={handleEdit}>
                  <Image src={edit} alt="" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      {editMode && (
        <div className="flex justify-end space-x-2 mt-2">
          <button
            className="text-black border rounded-3xl hover:bg-[#f5f6f9] px-4 py-1"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="text-black border rounded-3xl hover:bg-[#f5f6f9] px-4 py-1"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}

      <div className="py-6">
        <hr />
      </div>

      <div className="w-full items-center flex gap-2 mb-6">
        <div className="rounded-full bg-[#e2b8e1] p-2 mr-3">
          <Image src={paint} alt="" className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-md font-medium">We&apos;ve built your portfolio 🚀</h3>
          <p className="text-sm mb-4 text-gray-600">
            View your new personal website fueled by your Contra Profile.
          </p>
          <button className="hover:bg-[#373f51] bg-[#14171f] px-4 py-1 text-white rounded-3xl">
            View Portfolio
          </button>
        </div>
      </div>

      <div className="flex items-center justify-start mt-6 gap-2">
        <Image alt="" src={trash} className="" />
        <button className="text-red-500 text-sm hover:underline focus:outline-none">
          Delete account
        </button>
      </div>
    </div>
  );
}
export default Domain;
