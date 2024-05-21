import React from "react";
import FAB from "../ui/FAB";

function Branding() {
  return (
    <div className="bg-black py-10 text-white">
      <div className="grid place-items-center">
        <FAB variant="secondary">Branding</FAB>
      </div>
      <div className="px-32">
        <div className="mb-10">
          <span className="text-[#994AFF] font-bold">CHANGE</span>
          <br />
          <span className="text-3xl font-bold">Showcase And Stand Out</span>
        </div>
        <span className="text-[#B897FF] font-extrabold whitespace-nowrap">
          Leverage the Power of Instagram & LinkedIn
        </span>
        <div className="w-96 mt-5">
          We&apos;ll help you develop a captivating personal brand on the
          platforms that matter most, using targeted content strategies and
          engaging storytelling.
        </div>
      </div>
    </div>
  );
}

export default Branding;
