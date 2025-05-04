import React from "react";
import CustomButton from "./CustomButtonHeader";

export default function Header() {
  return (
    <div className="flex flex-row justify-between p-2 ">
      <div className="flex items-center mx-2">H2o</div>
      <div className="flex items-center flex-row py-5 space-x-10 mx-10">
        <CustomButton>Portfolio</CustomButton>
        <CustomButton>Traveling</CustomButton>
        <CustomButton>My Photo</CustomButton>
        <CustomButton>Review</CustomButton>
      </div>
    </div>
  );
}
