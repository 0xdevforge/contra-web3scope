"use client";

import React, { useState } from "react";
import Image from "next/image";

import all from "../assets/all.svg";
import design from "../assets/design.svg";
import writing from "../assets/writing.svg";
import marketing from "../assets/marketing.svg";
import social from "../assets/social.svg";
import eng from "../assets/eng.svg";
import vid from "../assets/vid.svg";
import music from "../assets/music.svg";

function Category({ image, label, isSelected, onClick }) {
  return (
    <div
      className={`pb-3 px-5 border-b-2 ${
        isSelected
          ? "border-[#14171f]"
          : "border-transparent hover:border-gray-300"
      } transition-all duration-500 ease-in-out`}
      onClick={onClick}
    >
      <span className="flex flex-col items-center gap-y-2 text-xs tracking-tight">
        <Image src={image} alt={label} width={15} height={15} />
        {label}
      </span>
    </div>
  );
}

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const categories = [
    { image: all, label: "All Categories" },
    { image: design, label: "Design" },
    { image: writing, label: "Writing" },
    { image: marketing, label: "Marketing" },
    { image: social, label: "Social Media" },
    { image: eng, label: "Engineering" },
    { image: vid, label: "Video & Animation" },
    { image: music, label: "Music & Audio" },
  ];

  return (
    <header className="flex w-full  cursor-pointer  border-b-2 pb-1">
      {categories.map((category, index) => (
        <>
          <Category
            key={index}
            image={category.image}
            label={category.label}
            isSelected={selectedCategory === category.label}
            onClick={() => setSelectedCategory(category.label)}
          />
          <div className="flex text-xs">
            {category.label === "All Categories" && (
              <div className="px-2  border-l-2 mb-5"></div>
            )}
          </div>
        </>
      ))}
    </header>
  );
}
