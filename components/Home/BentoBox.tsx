"use client";
import React from "react";
import { BentoItems } from "@/constants/BentoBox";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

export function BentoBox() {
  return (
    <div className="bg-[url('/assets/baltic-rose.webp')] bg-cover text-white p-10 md:p-24">
      <BentoGrid className="grid grid-cols-1 md:grid-cols-6 gap-10">
        {BentoItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            content={item.content}
            className={`${
              i === 3 || i === 4 ? "md:col-span-3" : "md:col-span-2"
            }`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
