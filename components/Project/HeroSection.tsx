import { Blob } from "@/constants/Icons";
import { Tags } from "@/constants/Projects";
import React from "react";

function HeroSection({
  section,
  setSection,
}: {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="h-[40vh] md:h-[85vh] bg-black text-white grid place-items-center relative overflow-hidden">
      <div className="absolute left-0 -translate-x-1/2">
        <Blob variant="violet" />
      </div>
      <div className="absolute hidden md:block right-0 translate-x-1/2 top-0 ">
        <Blob variant="yellow" className=" md:w-screen"/>
      </div>
      <span className="text-3xl md:text-7xl text-center font-semibold w-3/4 md:w-2/5 r-2">
        Here&apos;s is some work we are{" "}
        <span className="text-[#7B61FF]">proud of</span>.
      </span>
      <div className="flex items-center justify-center w-screen gap-5 md:gap-10 px-8">
        {Tags.map((i, index) => (
          <>
            <span
              className={`${section === i && "text-[#9747FF]"} cursor-pointer`}
              key={index}
              onClick={() => setSection(i)}
            >
              {i}
            </span>
            {index < Tags.length - 1 && (
              <span
                className="border-[#5C3095] border-r border-l"
                key={"a" + index}
              ></span>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
