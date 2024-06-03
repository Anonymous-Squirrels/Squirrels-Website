import React from "react";
import FAB from "../ui/FAB";
import Image from "next/image";
import GlassMorphism from "../ui/GlassMorphism";

function Branding() {
  return (
    <div className="bg-black pt-10 text-white">
      <div className="grid place-items-center">
        <FAB variant="secondary">Branding</FAB>
      </div>

      <div className="flex items-center justify-between px-32">
        <div>
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

          <Image
            src="/assets/woman.png"
            width={800}
            height={800}
            alt="woman with megaphone"
            className=" -translate-x-32"
          />
        </div>

        <div className="grid place-items-center gap-10">
          <div className="relative">
            <Image
              src="/logo/instagramLogo.png"
              width={200}
              height={200}
              alt="Instagram Logo"
            />
            <GlassMorphism
              variant="light"
              className="border border-white/25 overflow-hidden absolute h-32 w-32 rounded-lg bottom-0 backdrop-blur-sm -translate-x-8 translate-y-8"
            >
              {" "}
            </GlassMorphism>
          </div>
          <div className="relative">
            <Image
              src="/logo/linkedInLogo.png"
              width={200}
              height={200}
              alt="Instagram Logo"
            />
            <GlassMorphism
              variant="light"
              className="border border-white/25 overflow-hidden absolute h-32 w-32 rounded-lg bottom-0 backdrop-blur-sm -translate-x-8 translate-y-8"
            >
              {" "}
            </GlassMorphism>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
