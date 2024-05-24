import { Sparkle } from "@/constants/Icons";
import Image from "next/image";
import React from "react";

function ThreeStepProcess() {
  return (
    <div className="h-screen bg-black text-white p-24">
      <div>
        <Sparkle />
        <span>OUR 3-STEP PROCESS</span>
      </div>
      <div className="flex items-center justify-around h-full">
        <div>
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
        <Image src="/assets/gear.png" width={400} height={400} alt="gear" />
      </div>
    </div>
  );
}

export default ThreeStepProcess;
