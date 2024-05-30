import { Projects } from "@/constants/Projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Main({ section }: { section: string }) {
  return (
    <div className="bg-black text-white grid grid-cols-2 py-16">
      {Projects.filter(
        (i) => section === "All" || i.tags?.includes(section)
      ).map((i, index) => (
        <div key={index} className="mb-20 mx-16">
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
          <div>
            {i.tags?.map((j, index) => (
              <span
                key={`${index}${index}`}
                className="px-2 py-1 border-[#7B61FF] border rounded-full"
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
