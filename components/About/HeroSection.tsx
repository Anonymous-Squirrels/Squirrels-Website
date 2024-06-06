import { Blob, DownArrow, TextLogo } from "@/constants/Icons";
import React from "react";

function HeroSection() {
  return (
    <div className="bg-black h-screen md:h-[85vh] grid place-items-center text-white relative px-10 overflow-hidden">
      <TextLogo className="absolute -left-16 md:left-0 h-96 w-96 top-24 md:top-0" />
      <div className="absolute left-0 -translate-x-1/2">
        <Blob variant="violet" />
      </div>
      <div className="absolute  right-0 translate-x-1/2 top-0">
        <Blob variant="yellow" className=""/>
      </div>
      <div className="pt-7 md:pt-0">
        <span className="text-lg">Nice to meet you, we&apos;re</span>
        <br />
        <span className="text-5xl md:text-7xl font-extrabold">Anonymous Squirrels</span>
      </div>
      <DownArrow className="animate-bounce w-16 h-16" />
    </div>
  );
}

export default HeroSection;
