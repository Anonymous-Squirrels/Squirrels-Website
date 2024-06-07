import {Sparkle} from "@/constants/Icons";
import Image from "next/image";
import React from "react";

function OurValues() {
  return (
    <div className="h-fit md:h-screen bg-white py-12 md:py-24 overflow-hidden">
      <div className="flex w-full items-center justify-center text-3xl py-9 relative">
        <div className="w-fit flex items-center gap-x-3.5 justify-center md:absolute md:left-24">
          <Sparkle/> <span className="uppercase font-bold">OUR VALUES</span>
        </div>
      </div>

      <div
        className=" flex flex-col md:flex-row items-center md:items-start justify-between px-7 md:p-24 relative gap-y-8">
        <div className="w-full md:w-fit rounded-lg">
          <div className="w-full md:w-fit flex flex-col items-start justify-around gap-y-5 rounded-lg shadow-md relative p-6 md:mr-20">
            <span className="uppercase font-bold">Trust</span>
            <span className="text-sm leading-7 w-3/4">
            Cultivating Enduring Relationships Through Unwavering Integrity and
            Reliability.
            </span>
            <div className="absolute top-36 md:top-28 w-full md:w-[130%] self-center">
              <Image
                src="/assets/handshake.png"
                width={500}
                height={500}
                alt="handshake"
                className="w-full"
              />
            </div>
          </div>
          <div className="h-[200px] w-full md:hidden"/>
        </div>

        <div className="w-full md:w-fit flex flex-col items-start justify-around gap-y-0 rounded-lg shadow-md relative p-6 md:mr-20 ">
          <span className="uppercase font-bold">Loyalty</span>
          <br/>
          <span className="text-sm leading-7 w-3/4">
            Fostering Deep, Long-Lasting Partnerships Built on Commitment and
            Dedication.
          </span>
          <div className="">
            <Image
              src="/assets/loyalty.png"
              width={450}
              height={450}
              alt="handshake"
              className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>

        <div className="w-full md:w-fit rounded-lg">
          <div className="w-full md:w-fit flex flex-col items-start justify-around rounded-lg shadow-md relative p-6 md:mr-20 ">
            <span className="uppercase font-bold">Transparency</span>
            <br/>
            <span className="text-sm leading-7 w-3/4">
            Promoting Open, Honest Communication to Ensure Clarity and Mutual
            Success.
          </span>
            <div className=" -right-20 md:-right-[19rem] absolute top-32 md:top-20 w-full md:w-[130%] self-end">

              <Image
                src="/assets/transparency.png"
                width={400}
                height={400}
                alt="handshake"
                className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
              />
            </div>
          </div>
          <div className="h-[300px] w-full md:hidden"/>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
