import { BentoItems } from "@/constants/BentoBox";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

export function BentoBox() {
  return (
    <div className="h-screen bg-black text-white p-24">
      <BentoGrid className="">
        {BentoItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            content={item.content}
            // className={i === 3 || i === 4 ? "" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
