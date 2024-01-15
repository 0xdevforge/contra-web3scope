import React from "react";
import close from "/public/close.svg";
import Image from "next/image";
import back from "/public/Cards/continuepage.svg";

function Step2() {
  const [inputValue, setInputValue] = React.useState("");
  const [selectedKeywords, setSelectedKeywords] = React.useState([]);
  const [suggestions, setSuggestions] = React.useState([]);

  const allKeywords = [
    "Actor",
    "Author",
    "Artist",
    "Athlete",
    "Architect",
    "Activist",
    "Blogger",
    "Comedian",
    "Dancer",
    "DJ",
    "Fashion Model",
    "Journalist",
    "Musician",
    "Photographer",
    "Designer",
    "Director",
    "Editor",
    "Fashion Designer",
    "Filmmaker",
    "Graphic Designer",
    "Illustrator",
    "Brand Designer",
    "Copywriter",
    "Project Manager",
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (!value.endsWith(" ") && value.length) {
      const filteredSuggestions = allKeywords.filter(
        (keyword) =>
          keyword.toLowerCase().startsWith(value.toLowerCase()) &&
          !selectedKeywords.includes(keyword)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleAddKeyword = (keyword) => {
    setSelectedKeywords([...selectedKeywords, keyword]);
    setInputValue("");
    setSuggestions([]);
  };

  const handleRemoveKeyword = (indexToRemove) => {
    setSelectedKeywords(
      selectedKeywords.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace" && !inputValue) {
      handleRemoveKeyword(selectedKeywords.length - 1);
    }
  };

  return (
    <div className=" rounded-lg min-w-[26rem] max-w-[26rem] mx-auto">
      <h1 className="text-4xl font-medium my-6">What do you do?</h1>
      <div className="mb-1">
        <div className="relative">
          <div className="flex flex-wrap gap-2 border-gray-300 focus:border-0 mt-1 outline-none focus:ring-0 border rounded-lg px-2 py-2 text-sm w-full focus:outline-none ring-0">
            <p className="text-left w-full text-gray-700 text-xs p-2">
              Add your skills here
            </p>
            {selectedKeywords.map((keyword, index) => (
              <span
                key={index}
                className="flex items-center text-gray-700 text-md border py-2 px-4 rounded-full"
              >
                {keyword}
                <Image
                  src={close}
                  alt="close"
                  className="w-4 h-4 ml-2 cursor-pointer"
                  onClick={() => handleRemoveKeyword(index)}
                ></Image>
              </span>
            ))}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={selectedKeywords.length === 0 ? "Enter skills" : ""}
              className="bg-transparent border-0 text-md focus:outline-none text-gray-700 text-xs flex-1 px-2"
            />
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border rounded mt-1 w-full max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAddKeyword(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <h3 className="text-xs text-[#7f8684] px-1">
        Brand Designer, Copywriter, Project Manager, etc.
      </h3>
      <div className="flex gap-2 items-center w-full">
        <div className="w-8 h-8  border-2 border-gray-200 items-center flex justify-center rounded-full">
          <Image src={back} alt="back" className="cursor-pointer w-4 h-4" />
        </div>
        <button
          className={` px-3 py-2 bg-[#373f51] text-white  text-sm  rounded-full ${" text-[#d0d4dc]  text-sm cursor-not-allowed  bg-[#f2f4f7]"}`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default Step2;
