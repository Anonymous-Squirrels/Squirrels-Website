import { Blob } from "@/constants/Icons";
import Image from "next/image";
import React from "react";

function HeroSection({
  title,
  image,
  tag,
}: {
  title: string | undefined;
  image: string | undefined;
  tag: string[] | undefined;
}) {
  return (
    <div className="h-[85vh] bg-black text-white flex items-center justify-between gap-10 overflow-hidden relative">
      <div className="absolute left-0 -translate-x-1/2">
        <Blob variant="violet" />
      </div>
      <div className="absolute  right-0 translate-x-1/2 top-0 ">
        <Blob variant="yellow" />
      </div>
      <div className="w-2/5 pl-24 mb-20">
        <span className="text-7xl font-medium">{title}</span>
        <div className="my-5">Brand Strategy Success Story</div>
        <div className="my-5">
          {tag?.map((i) => (
            <span
              key={i}
              className="px-2 mr-2 py-1 border-[#7B61FF] border rounded-full"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
      <div className="relative">
        {image && (
          <Image
            src={image}
            alt={title || "title"}
            width={500}
            height={500}
            className="w-full z-10 relative"
          />
        )}
        <div className="absolute z-0 border-4 border-white h-20 w-full top-0 translate-x-10 -translate-y-5"></div>
      </div>
    </div>
  );
}

export default HeroSection;
