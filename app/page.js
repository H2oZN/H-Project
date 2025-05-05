import React from "react";
import Headers from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Doto } from "next/font/google";

const doto = Doto({
  weight: "900",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className={`${doto.className} `}>
        <Headers />
      </div>
      <body></body>
      <div></div>
      <Footer />
    </div>
  );
}
