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
    <div className="h-[85vh] bg-black text-white grid place-items-center">
      <span className="text-6xl text-center font-semibold w-2/5">
        Here&apos;s is some work we are{" "}
        <span className="text-[#7B61FF]">proud of</span>.
      </span>
      <div className="flex justify-center gap-10">
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
