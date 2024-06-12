"use client"
import {Sparkle} from "@/constants/Icons";
import Image from "next/image";
import React, {useState} from "react";
import ProcessAccordion from "@/components/About/accordian_component/ProcessAccordion";
import {data} from "@/constants/ProcessAccordianData";

function ThreeStepProcess() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="h-fit md:h-fit bg-black text-white px-7 py-14 md:p-24 overflow-hidden">
      <div className="flex w-full text-2xl md:text-2xl gap-3.5 items-center justify-center md:justify-start">
        <Sparkle/>
        <span>OUR 3-STEP PROCESS</span>
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-evenly md:justify-center gap-0 md:gap-16 h-fit w-full ">

        <div className="w-full md:w-1/2">
          <ProcessAccordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} data={data}/>
        </div>

        <div className="hidden md:flex md:h-fit md:w-1/2">
          <div className="w-full relative">
            {activeIndex !== null ? <Image
                src={`/${data[activeIndex].image}`} alt={data[activeIndex].image.replace("about_services/", "")}
                width={500} height={500}
                className="h-[500px] w-[500px]"
              /> :
              <Image
                src="/assets/gear.png" width={500} height={500} alt="gear"
                className="h-fit w-fit"
              />
            }

          </div>
        </div>

        <div className="md:hidden w-[150%] h-[300px] md:h-fit md:w-1/2">
          <div className="w-full relative">
            <Image
              src="/assets/gear.png" width={500} height={500} alt="gear"
              className="h-[480px] w-[480px] md:h-fit md:w-fit absolute md:static left-7 -top-10"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeStepProcess;
