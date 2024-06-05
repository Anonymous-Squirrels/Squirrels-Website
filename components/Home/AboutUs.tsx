import {ArrowRight, LogoLarge} from "@/constants/Icons";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

function AboutUs() {
  return (
    <div className=" bg-black text-white ">
      <div className="flex justify-between  items-start px-7">
        <span className="uppercase text-5xl md:text-9xl font-bold">
          About <br/> Us
        </span>
        <LogoLarge/>
      </div>

      <div className="flex flex-col items-center justify-between py-9">
        <div className="md:px-72 ">
          <div className="text-center text-xl px-8 md:px-36 italic">
            We are a team of{" "}
            <span className="text-[#864EFF] italic">
            storytellers, creative wizards and tech geeks
          </span>{" "}
            who help you convey your story better.
            <br/>
            <br/>
            <div className="text-base px-5">
              We are a Brand Strategy and Content Marketing company with over{" "}
              <span className="text-[#BE96FF]">45+ names in our clientele.</span>{" "}
              We specialize in brand communications and transforming your
              companies into brands that people will remember. We believe that{" "}
              <span className="text-[#BE96FF]">creativity is the future</span>,
              and Content is the key to this future. Our team is here to{" "}
              <span className="text-[#BE96FF]">
              take your branding and game to the next level.
            </span>
            </div>
          </div>
        </div>

        <div className="grid place-items-center my-5">
          <Button
            variant="secondary"
            className="group flex items-center text-white gap-4 px-8"
          >
            <span className="text-lg">Know More</span>{" "}
            <ArrowRight className="group-hover:rotate-45 transition-all duration-300"/>
          </Button>
        </div>

        <div className="text-4xl font-bold my-5 text-center">
          Anonymous <br/>
          Squirrels
        </div>

        <div className="flex items-center justify-between w-full">
          <Image
            src="/assets/gradient.png"
            alt="gradient"
            width={180}
            height={180}
          />
          <Image
            src="/assets/billboard.png"
            alt="billboard"
            width={180}
            height={180}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
