import GlassMorphism from "@/components/ui/GlassMorphism";
import Image from "next/image";
import React from "react";
import { ImQuotesRight } from "react-icons/im";
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
    <GlassMorphism variant="light" className="p-4 md:p-7 rounded-lg w-[80vw] md:w-1/2 flex flex-col justify-between">
      <div className="md:text-xl md:leading-9">{content}</div>
      <div className="flex items-center justify-between mt-8 text-sm font-light">
        <div className="flex items-center gap-2">
          <Image
            src={image}
            alt={name}
            className="rounded-full w-12 h-12 md:w-14 md:h-14"
            width={200}
            height={200}
          />
          <div>
            <span className="text-sm md:text-xl">{name}</span>
            <br />
            <span className="text-sm md:text-base font-thin">{designation}</span>
            <br />
            <span>
              {Array(rating)
                .fill(null)
                .map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
            </span>
          </div>
        </div>
        <ImQuotesRight className="h-10 w-10 md:h-20 md:w-20 text-[#434343]" />
      </div>
    </GlassMorphism>
  );
}

export default Item;
