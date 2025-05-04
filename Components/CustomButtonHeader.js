import React from "react";

export default function CustomButton({ children }) {
  return (
    <button className="relative group">
      <span className="text-gray-500 hover:text-black transition-colors duration-500 ">
        {children}
      </span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
    </button>
  );
}
