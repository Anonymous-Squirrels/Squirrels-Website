import { Sparkle } from "@/constants/Icons";
import Image from "next/image";
import React from "react";

function OurValues() {
  return (
    <div className="h-screen bg-white py-24">
      <div className="flex items-center gap-2 ml-24 text-2xl">
        <Sparkle /> <span>OUR VALUES</span>
      </div>
      <div className=" flex items-center justify-center p-24 relative">
        <div className="rounded-lg shadow-md relative p-6  mr-20">
          <span className="uppercase font-bold">Trust</span>
          <br />
          <span className="text-sm">
            Cultivating Enduring Relationships Through Unwavering Integrity and
            Reliability.
          </span>
          <div className="absolute ">
            <Image
              src="/assets/handshake.png"
              width={500}
              height={500}
              alt="handshake"
            />
          </div>
        </div>
        <div className="rounded-lg shadow-md relative p-6  mr-20">
          <span className="uppercase font-bold">Loyalty</span>
          <br />
          <span className="text-sm">
            Fostering Deep, Long-Lasting Partnerships Built on Commitment and
            Dedication.
          </span>
          <div className="absolute ">
            <Image
              src="/assets/loyalty.png"
              width={500}
              height={500}
              alt="handshake"
            />
          </div>
        </div>
        <div className="rounded-lg shadow-md p-6 ">
          <span className="uppercase font-bold">Transparency</span>
          <br />
          <span className="text-sm">
            Promoting Open, Honest Communication to Ensure Clarity and Mutual
            Success.
          </span>
          <div className="absolute right-0">
            <Image
              src="/assets/transparency.png"
              width={400}
              height={400}
              alt="handshake"
            />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default OurValues;
