import { BentoItems } from "@/constants/BentoBox";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BantoGrid";

export function BentoBox() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {BentoItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
