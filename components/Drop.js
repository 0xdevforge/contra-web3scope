"use client";

import React, { useState } from 'react';


const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
        onClick={toggleDropdown}
      >
        {selectedValue ? selectedValue : 'Select an option'}
        {/* Dropdown Arrow */}
        <span>
            Up
        </span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleOptionClick('Option 1')}
              className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Option 1
            </button>
            <button
              onClick={() => handleOptionClick('Option 2')}
              className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Option 2
            </button>
            {/* Add more options as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
