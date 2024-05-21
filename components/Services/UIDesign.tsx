import React from "react";
import FAB from "../ui/FAB";
import { Logo2 } from "@/constants/Icons";

function UIDesign() {
  return (
    <div className="bg-white grid place-items-center py-5 h-screen">
      <FAB variant="secondary">UI Design</FAB>
      <div className="text-[#5C3095] text-4xl font-bold w-96 text-center">
        Get The Best Design, No Compromise
      </div>
      Accordian Goes Here
      <div className="flex items-center gap-8 px-48">
        <Logo2 />
        <div className="text-[#5C3095] text-2xl font-semibold">
          Making design is a no-brainer for our professionals,
          <br /> So you can focus on what matters and feel free to inquire!
        </div>
      </div>
    </div>
  );
}

export default UIDesign;
