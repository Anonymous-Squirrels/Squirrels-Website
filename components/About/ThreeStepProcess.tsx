import {Sparkle} from "@/constants/Icons";
import Image from "next/image";
import React from "react";

function ThreeStepProcess() {
  return (
    <div className="h-[95vh] md:h-screen bg-black text-white px-7 py-14 md:p-24 overflow-x-hidden">
      <div className="flex w-full text-2xl md:text-2xl gap-3.5 items-center justify-center md:justify-start">
        <Sparkle/>
        <span>OUR 3-STEP PROCESS</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly md:justify-center gap-0 md:gap-10 h-full w-full">
        <div className="w-full md:w-1/2">
          <div className="border-b-8 border-[#5C3095] my-5 text-3xl py-4">
            <span className="border text-center h-10 w-10 inline-block mr-4">
              1
            </span>
            <span>BrainStorming</span>
          </div>
          <div className="border-b-8 border-[#5C3095] my-5 text-3xl py-4">
            <span className="border text-center h-10 w-10 inline-block mr-4">
              2
            </span>
            <span>Research</span>
          </div>
          <div className="border-b-8 border-[#5C3095] my-5 text-3xl  py-4">
            <span className="border text-center h-10 w-10 inline-block mr-4">
              3
            </span>
            <span>Execution</span>
          </div>
        </div>
        <div className=" w-[150%] h-[300px] md:w-1/2">
          <div className="w-full relative">
            <Image
              src="/assets/gear.png" width={500} height={500} alt="gear"
              className="h-[500px] w-[550px] absolute md:static -top-32"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeStepProcess;
