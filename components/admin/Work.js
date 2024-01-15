import React from "react";
import Dropdown from "./Dropdown";

function Work() {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([
    { name: "Microsoft Word", icon: "fas fa-file-word" },
    { name: "Facebook", icon: "fab fa-facebook-f" },
    { name: "Apple", icon: "fab fa-apple" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "ATS", icon: "fas fa-tasks" },
    { name: "TikTok", icon: "fab fa-tiktok" },
    { name: "Netflix", icon: "fab fa-netflix" },
    { name: "Microsoft", icon: "fab fa-microsoft" },
    { name: "Tesla", icon: "fas fa-car" },
    { name: "Adobe XD", icon: "fab fa-adobe" },
    { name: "Airbnb", icon: "fab fa-airbnb" },
    { name: "Spotify", icon: "fab fa-spotify" },
  ]);

  const handleSelectItem = (item) => {
    if (
      !selectedItems.some((selectedItem) => selectedItem.name === item.name)
    ) {
      setSelectedItems([...selectedItems, item]);
      setSuggestions(
        suggestions.filter((suggestion) => suggestion.name !== item.name)
      );
    }
    setInputValue("");
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem.name !== item.name)
    );
    setSuggestions(
      [...suggestions, item].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredSuggestions = suggestions.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="bg-white rounded-md w-full">
      <div className="flex flex-col items-start justify-start">
        <h2 className="text-xl font-medium mb-2">Work Preferences</h2>
        <h3>Add your details to help us match you with the perfect job!</h3>
        <div className="w-full mb-4 relative">
          <div className="flex flex-wrap items-center mt-1">
            <div className="flex flex-wrap items-center border-gray-300 focus:border mt-5 outline-none focus:ring-0 border rounded-lg px-4 py-2 text-sm w-full focus:outline-none ring-0 h-full">
              <p className="text-left w-full text-gray-700 text-xs">Tools</p>
              <div className="flex flex-wrap">
                {selectedItems.map((item, index) => (
                  <div key={index} className="flex items-center m-1  rounded">
                    <div
                      key={index}
                      onClick={() => handleSelectItem(item)}
                      className="hover:text-[#4b5365] text-gray-500 cursor-pointer select-none relative py-2  w-full rounded-3xl flex items-center px-4 border shadow-sm hover:shadow-md mb-1"
                    >
                      <i className={`${item.icon} text-gray-700`}></i>
                      <span className="ml-2">{item.name}</span>
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="ml-2"
                      >
                        <i className="fas fa-times text-blue-800"></i>
                      </button>
                    </div>
                  </div>
                ))}
                <input
                  className="border-0 mt-2 mb-2 text-md focus:outline-none text-left flex-1 block sm:text-sm border-gray-300 px-4 mr-2 rounded-lg"
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Type to add tools..."
                />
              </div>
            </div>
          </div>
          <div className="flex mt-2 w-full gap-2">
            {filteredSuggestions.slice(0, 3).map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelectItem(item)}
                className="hover:text-[#4b5365] text-gray-500 cursor-pointer select-none relative py-2  w-full rounded-3xl flex items-center px-4 truncate border-gray-300  mb-1"
              >
                <i className={`${item.icon} text-gray-700`}></i>
                <span className="ml-2">{item.name}</span>

                <div className=" flex  w-full justify-end">
                  <svg
                    xmlnXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    focusable="false"
                    height="16"
                    role="img"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path
                      d="M11.25 3V11.25H3V12.75H11.25V21H12.75V12.75H21V11.25H12.75V3H11.25Z"
                      fill="#677084"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="my-6">
            <Dropdown />
          </div>
          <button
            onClick={() => {
              // Save your state here
              console.log(selectedItems);
            }}
            className="mt-4 bg-[#030304] text-white py-2 px-24 rounded-3xl "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
