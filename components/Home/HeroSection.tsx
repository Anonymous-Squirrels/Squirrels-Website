import Button from "@/components/ui/Button";
import GlassMorphism from "@/components/ui/GlassMorphism";
import {Trustee} from "@/constants/Home";
import {
  Blob,
  Brush,
  GridFill,
  Laptop,
  PenRuler,
  Squirrel,
} from "@/constants/Icons";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-fit bg-black pb-20 md:pb-10 w-full overflow-hidden pt-16 md:pt-0">
      <div className="absolute hidden md:block md:left-60 -translate-x-1/2 -top-96 md:-top-72 z-10">
        <Blob variant="violet"/>
      </div>
      <div className="absolute hidden md:block -right-12 translate-x-1/2 -top-44 z-10">
        <Blob variant="yellow"/>
      </div>
      <>
        <GridFill
          className="absolute top-[25%] md:top-[20%] left-4 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 w-[180px] h-[250px] md:h-fit md:w-fit z-20 md:animate-dotted-bounce "/>
      </>

      <div
        className="relative z-20 flex flex-col md:flex-row items-center justify-between md:mx-32 py-4 md:py-8 gap-y-14 md:gap-y-0 mx-0 ">
        <div className="w-10/12 md:w-1/2 order-last md:order-first">
          <div className="text-white font-semibold text-4xl  md:text-6xl">
            <span>Unlock your</span>{" "}
            <span className="text-sq-violet">Brand&apos;s Potential</span>.{" "}
            <span className="hidden md:inline-flex">One at a time Promote and</span>{" "}
            <span className="text-sq-violet hidden md:inline-flex">Grow</span>
          </div>
          <div className="text-white text-xl md:text-2xl my-5">
            Elevate your content marketing with a powerful brand strategy.
          </div>
          <Button
            className="md:p-3 rounded-md md:rounded-lg whitespace-nowrap w-40 md:w-[270px] bg-[#5237D8]"
            variant="primary"
          ><p className="w-full h-fit overflow-clip  text-sm md:text-xl ">
            <span className="scroll-text inline-block">
              Get a Free Consultation Get a Free Consultation Get a Free Consultation
            </span>
          </p>
          </Button>
        </div>

        <div className="relative order-first md:order-last">
          <Squirrel className="md:h-[500px] md:w-[420px]"/>
          <GlassMorphism
            variant="light"
            className="rounded-xl inline-block absolute -top-2 md:top-0 right-0 translate-x-1/2"
          >
            <Laptop className="h-7 w-7 md:h-fit md:w-fit"/>
          </GlassMorphism>
          <GlassMorphism
            variant="light"
            className="rounded-xl inline-block absolute -bottom-2 -right-6 md:bottom-0 md:right-0 -translate-x-1/2"
          >
            <Brush className="h-7 w-7 md:h-fit md:w-fit"/>
          </GlassMorphism>

          <GlassMorphism
            variant="light"
            className="rounded-xl inline-block absolute -left-3 top-[40%] md:left-0 md:top-1/2 -translate-y-1/2"
          >
            <PenRuler className="h-7 w-7 md:h-fit md:w-fit"/>
          </GlassMorphism>
        </div>
      </div>

      <div className="text-white w-full flex flex-col justify-center items-center my-8">
        <span className="text-2xl font-semibold">Trusted By</span>
        <div
          className="w-full md:w-3/5 grid grid-cols-3 md:grid-cols-6 place-items-center gap-3.5 md:gap-10 mt-10 gap-y-5 z-20">
          {Trustee.map((item: { alt: string, slug: string }, index) => (
            <GlassMorphism variant={"light"} key={index} className=" bg-white  rounded-lg p-[8px]">
              <Image src={`/${item.slug}`} alt={item.alt} height={150} width={150}
                     className={"rounded-[50%] h-16 w-16 md:h-fit md:w-fit"}/>
            </GlassMorphism>
          ))}
        </div>
      </div>
    </div>
  );
}
