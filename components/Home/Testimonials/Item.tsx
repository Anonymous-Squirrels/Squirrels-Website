import GlassMorphism from "@/components/ui/GlassMorphism";
import Image from "next/image";
import React from "react";
import {ImQuotesRight} from "react-icons/im";

function Item({
  content,
  image,
  designation,
  rating,
  name,
}: {
  content: string;
  image: string;
  designation: string;
  rating: number;
  name: string;
}) {
  return (
    /*<GlassMorphism  variant="light" className="p-4 md:p-7 rounded-lg w-[80vw] md:w-1/2 flex flex-col justify-between">*/
    <GlassMorphism variant="light" className="rounded-lg w-full h-full flex flex-col justify-between">
      <div className="md:text-xl md:leading-9 px-6">{content}</div>
      <div className="flex items-center justify-between text-sm font-light">
        <div className="flex items-center gap-2 md:w-[70%] md:gap-x-6 h-16">
          <div className="h-12 w-12 md:h-20 md:w-20">
            <Image
              src={image}
              alt={name}
              className="rounded-full h-full w-full"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col gap-y-1 justify-center items-center md:w-fit">
            <span className="text-sm md:text-xl text-left w-full">{name}</span>
            <span className="text-sm md:text-base font-thin w-full">{designation}</span>
            <div className="w-full">
            <span className="w-fit grid grid-cols-5 ">
              {Array(rating)
              .fill(null)
              .map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            </span>
            </div>
          </div>
        </div>
        <ImQuotesRight className="h-10 w-10 md:h-20 md:w-20 text-[#434343]"/>
      </div>
    </GlassMorphism>
  );
}

export default Item;
