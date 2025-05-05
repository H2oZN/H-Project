import React from "react";
import CustomButton from "./CustomButtonHeader";
import { Doto } from "next/font/google";

const doto = Doto({
  weight: "900",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className={`${doto.className} `}>
      <div className="flex flex-row justify-between p-2 ">
        <button className="flex items-center mx-2 text-2xl hover:text-red-600 transition-colors duration-500">
          H2o
        </button>
        <div className="flex items-center flex-row py-5 space-x-10 mx-10">
          <CustomButton>Portfolio</CustomButton>
          <CustomButton>Traveling</CustomButton>
          <CustomButton>My Photo</CustomButton>
          <CustomButton>Review</CustomButton>
        </div>
      </div>
    </div>
  );
}
