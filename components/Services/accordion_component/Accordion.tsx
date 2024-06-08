"use client"
import React, {useEffect, useState} from 'react';
import ServiceAccordian from "@/components/Services/ServiceAccordian";
import Image from "next/image";
import {data} from "@/constants/AccordianData";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="w-full px-7 md:px-0 md:w-[720px]">
        <ServiceAccordian activeIndex={activeIndex} setActiveIndex={setActiveIndex} data={data}/>
      </div>

      {activeIndex ? <Image
          src={`/${data[activeIndex].image}`}
          alt={`${data[activeIndex].image}`}
          width={500}
          height={900}
          className="hidden md:flex md:w-[400px] md:h-[460px]"
        /> :
        <Image
          src="/assets/gradient.png"
          alt="gradient"
          width={500}
          height={900}
          className="hidden md:flex md:w-[400px] md:h-[460px]"
        />}

      <Image
        src="/assets/gradient.png"
        alt="gradient"
        width={430}
        height={500}
        className="flex md:hidden w-full h-[140px]"
      />
    </>
  );
}

export default Accordion;