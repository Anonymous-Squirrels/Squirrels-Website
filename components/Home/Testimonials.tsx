import React from "react";
import {Message} from "@/constants/Icons";
import Item from "./Testimonials/Item";
import {TestimonialData} from "@/constants/Testimonials";
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";

function Testimonials() {
  return (
    <div className="h-fit bg-black text-white py-12">
      <div className="text-center grid place-items-center">
        <div className="from-[#B897FF] to-black bg-gradient-to-b rounded-full p-[1px]">
          <span className="items-center flex gap-3 p-4 rounded-full bg-black">
            <Message/> Testimonials
          </span>
        </div>
        <span className="text-3xl md:text-6xl md:py-8">What are people saying</span>
        <div className=" text-[#9B9CA1] text-sm md:text-lg w-10/12 md:w-3/5 mt-10">
          &quot;Thank you for your trust in Anonymous Squirrels! We are grateful
          for your feedback and are committed to providing the best
          [products/services offered]. Read what our clients have to say about
          their experience with us.
        </div>
      </div>
      <div className="w-full h-fit  overflow-x-scroll scrollbar-hide">
        <div className="w-fit flex gap-x-3.5 md:gap-x-10 px-5 md:px-8 py-8">
          {TestimonialData.map((i, index) => (
            <Item
              key={index}
              content={i.text}
              name={i.name}
              designation={i.designation}
              rating={i.stars}
              image={i.profile}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full h-10 md:h-16 items-center justify-center">
        <IoArrowBackCircle className="h-full w-fit"/>
        <IoArrowForwardCircle className="h-full w-fit " color="#8B68D5"/>
      </div>
    </div>
  );
}

export default Testimonials;
