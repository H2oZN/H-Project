import React from "react";
import { Doto } from "next/font/google";

const doto = Doto({
  weight: "900",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full flex flex-row justify-between py-4 px-5 bg-gray-200 ">
      <div>H1</div>
      <div>H2</div>
      <div className={`${doto.className} `}>H3</div>
    </div>
  );
}
