import React from "react";
import FAB from "../ui/FAB";
import {Logo2} from "@/constants/Icons";
import ServiceAccordian from "./ServiceAccordian";
import Image from "next/image";

function UIDesign() {
  return (
    <div className="bg-white grid place-items-center pt-5 md:py-5 min-h-screen gap-10">
      <FAB variant="secondary">UI Design</FAB>
      <div className="text-[#5C3095] text-3xl md:text-4xl font-bold w-[85vw] md:w-96 text-center">
        Get The Best Design, No Compromise
      </div>
      <div className="flex w-screen md:w-fit flex-col md:flex-row items-center  gap-0 md:gap-32">
        <div className="w-full px-7 md:px-0 md:w-[720px]">
          <ServiceAccordian/>
        </div>
        <Image
          src="/assets/gradient.png"
          alt="gradient"
          width={500}
          height={500}
          className="hidden md:flex"
        />
        <Image
          src="/assets/gradient.png"
          alt="gradient"
          width={430}
          height={500}
          className="flex md:hidden w-full h-[140px]"
        />
      </div>
      <div className="hidden md:flex items-center gap-8 px-48">
        <Logo2/>
        <div className="text-[#5C3095] text-2xl font-semibold">
          Making design is a no-brainer for our professionals,
          <br/> So you can focus on what matters and feel free to inquire!
        </div>
      </div>
    </div>
  );
}

export default UIDesign;
