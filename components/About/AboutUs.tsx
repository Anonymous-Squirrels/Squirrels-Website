import { Sparkle } from "@/constants/Icons";
import React from "react";

function AboutUs() {
  return (
    <div className="h-screen bg-black text-white py-24">
      <div className="flex items-center gap-2 ml-24 text-2xl">
        <Sparkle /> <span className="uppercase">About US</span>
      </div>
      <div className="h-full grid place-items-center">
        <div className="px-56">
          <span className="text-3xl font-semibold px-56 inline-block">
            We are a{" "}
            <span className="text-[#7B61FF]">
              team of storytellers, creative wizards and tech geeks
            </span>{" "}
            who help you convey{" "}
            <span className="text-[#7B61FF]">your story better</span>
          </span>
        </div>
        <div className="flex items-center justify-around gap-20">
          <div className=" border-b-4 border-[#7B61FF] text-center">
            <span className="text-[#7B61FF] text-7xl">45+</span>
            <br />
            <span>Brands</span>
          </div>
          <div className=" border-b-4 border-[#7B61FF] text-center">
            <span className="text-[#7B61FF] text-7xl">20+</span>
            <br />
            <span>Domains</span>
          </div>
          <div className=" border-b-4 border-[#7B61FF] text-center">
            <span className="text-[#7B61FF] text-7xl">4+</span>
            <br />
            <span>Countries</span>
          </div>
        </div>
        <div className="mx-72 px-60">
          We are a Brand Strategy and Content Marketing agency, helping
          companies to brand better with tailored strategies and convey their
          business stories better than ever.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
