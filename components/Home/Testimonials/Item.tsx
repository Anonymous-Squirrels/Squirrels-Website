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
    <GlassMorphism variant="light" className="p-4 rounded-lg w-1/2">
      <div>{content}</div>
      <div className="flex items-center justify-between mt-8 text-sm font-light">
        <div className="flex items-center gap-2">
          <Image
            src={image}
            alt={name}
            className="rounded-full w-14 h-14"
            width={200}
            height={200}
          />
          <div>
            <span>{name}</span>
            <br />
            <span>{designation}</span>
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
        <ImQuotesRight className="h-20 w-20 text-[#434343]" />
      </div>
    </GlassMorphism>
  );
}

export default Item;
