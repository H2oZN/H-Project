import React from "react";
import CustomButton from "./CustomButtonHeader";

export default function Header() {
  return (
    <div className="flex flex-row justify-between p-2  bg-gray-200">
      <div className="flex items-center mx-2">LOGO</div>
      <div className="flex items-center flex-row py-5 space-x-10 mx-5">
        <CustomButton>Portfolio</CustomButton>
        <CustomButton>Traveling Experience</CustomButton>
        <CustomButton>My Photo</CustomButton>
      </div>
    </div>
  );
}
