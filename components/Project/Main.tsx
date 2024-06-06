import { Projects } from "@/constants/Projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Blob} from "@/constants/Icons";

function Main({ section }: { section: string }) {
  return (
    <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2  py-16 overflow-x-hidden relative">
      <div className="absolute right-0 translate-x-1/2 -top-[200px]">
        <Blob variant="yellow" className=" md:hidden "/>
      </div>
      {Projects.filter(
        (i) => section === "All" || i.tags?.includes(section)
      ).map((i, index) => (
        <div key={index} className="mb-20 mx-9 md:mx-16">
          <Image
            src={i.image}
            alt={i.name}
            width={300}
            height={300}
            className="w-full"
          />
          <div className="text-3xl font-medium my-2">
            <Link href={`/project/${i.url}`}>{i.name}</Link>
          </div>
          <div className="w-[73%] md:w-[42%] flex items-center justify-between gap-x-3">
            {i.tags?.map((j, index) => (
              <span
                key={`${index}${index}`}
                className="px-1 py-1 border-[#7B61FF] border rounded-full text-xs md:text-base w-1/2"
              >
                {j}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
