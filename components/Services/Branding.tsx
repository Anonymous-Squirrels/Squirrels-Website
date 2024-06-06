import React from "react";
import FAB from "../ui/FAB";
import Image from "next/image";
import GlassMorphism from "../ui/GlassMorphism";

function Branding() {
  return (
    <div className="bg-black pt-10 text-white">
      <div className="grid place-items-center">
        <FAB variant="secondary" className="h-11 md:h-fit">Branding</FAB>
        <br/>
        <br/>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-32">
        <div className="w-full md:w-fit">
          <div className="mb-10">
            <span className="text-[#994AFF] font-bold uppercase">CHANGE</span>
            <br/>
            <span className="text-3xl font-bold">Showcase And Stand Out</span>
          </div>
          <span className="text-[#B897FF] text-2xl font-extrabold whitespace-nowrap">
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
            className="-translate-x-32 hidden md:inline"
          />
        </div>

        <div className="flex flex-row md:flex-col justify-center items-center gap-x-5">
          <div className="relative">
            <Image
              src="/logo/instagramLogo.png"
              width={200}
              height={200}
              alt="Instagram Logo"
            />
            <GlassMorphism
              variant="light"
              className="border border-white/25 overflow-hidden absolute h-16 w-16 md:h-32 md:w-32 rounded-lg bottom-0 -translate-x-2 translate-y-2 md:-translate-x-8 md:translate-y-8"
            >
              {" "}
            </GlassMorphism>
          </div>
          <div className="relative border-2">
            <Image
              src="/logo/linkedInLogo.png"
              width={200}
              height={200}
              alt="LinkedIn Logo"
            />
            <GlassMorphism
              variant="light"
              className="border border-white/25 overflow-hidden absolute h-16 w-16 md:h-32 md:w-32 rounded-lg bottom-0 backdrop-blur-sm -translate-x-8 translate-y-8"
            >
              {" "}
            </GlassMorphism>
          </div>
        </div>

        <div className="w-full md:hidden flex items-center">
          <Image
            src="/assets/woman.png"
            width={360}
            height={360}
            alt="woman with megaphone"
            className="md:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Branding;
