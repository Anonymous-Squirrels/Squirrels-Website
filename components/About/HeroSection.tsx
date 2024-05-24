import { DownArrow, TextLogo } from "@/constants/Icons";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="bg-black h-[85vh] grid place-items-center text-white relative">
      <TextLogo className="absolute left-0 h-96 w-96 top-0" />
      <div>
        <span>Nice to meet you, we&apos;re</span>
        <br />
        <span className="text-7xl font-bold">Anonymous Squirrels</span>
      </div>
      <DownArrow className="animate-bounce w-16 h-16" />
    </div>
  );
}

export default HeroSection;
