import { Sparkle } from "@/constants/Icons";
import React from "react";

function AboutUs() {
  return (
    <div
      id="about-us"
      className="min-h-screen bg-black text-white py-9 md:py-16 grid place-items-center"
    >
      <div className="flex w-full items-center justify-center text-2xl py-9 relative">
        <div className="w-fit flex items-center justify-center md:absolute md:left-24 gap-2">
          <Sparkle /> <span className="uppercase">About US</span>
        </div>
      </div>
      <div className="h-full grid place-items-center gap-y-24 font-bold">
        <div className="md:px-56">
          <span className="text-xl md:text-3xl px-5 text-center md:px-56 inline-block w-full">
            We are a{" "}
            <span className="text-[#7B61FF]">
              team of storytellers, creative wizards and tech geeks
            </span>{" "}
            who help you convey{" "}
            <span className="text-[#7B61FF]">your story better</span>
          </span>
        </div>
        <div className="flex items-center justify-around gap-x-7 md:gap-20">
          <div className="border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-32">
            <span className="text-[#7B61FF] text-6xl md:text-7xl">45+</span>
            <br />
            <span>Brands</span>
          </div>
          <div className="border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-32">
            <span className="text-[#7B61FF] text-6xl md:text-7xl">20+</span>
            <br />
            <span>Domains</span>
          </div>
          <div className="border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-32">
            <span className="text-[#7B61FF] text-6xl md:text-7xl">4+</span>
            <br />
            <span>Countries</span>
          </div>
        </div>
        <div className="md:mx-72 md:px-52 px-5 text-center text-xs md:text-lg">
          We are a Brand Strategy and Content Marketing agency, helping
          companies to brand better with tailored strategies and convey their
          business stories better than ever.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
