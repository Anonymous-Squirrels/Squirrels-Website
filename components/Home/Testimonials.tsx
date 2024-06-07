import React from "react";
import Button from "../ui/Button";
import { Message } from "@/constants/Icons";

function Testimonials() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="text-center grid place-items-center">
        <div className="from-[#B897FF] to-black bg-gradient-to-b rounded-full p-[1px]">
          <span className="items-center flex gap-3 p-4 rounded-full bg-black">
            <Message /> Testimonials
          </span>
        </div>
        <span className="text-6xl">What are people saying</span>
        <div className=" text-[#9B9CA1] text-sm w-5/6">
          &quot;Thank you for your trust in Anonymous Squirrels! We are grateful
          for your feedback and are committed to providing the best
          [products/services offered]. Read what our clients have to say about
          their experience with us.
        </div>
      </div>
      <div>Scrollers</div>
    </div>
  );
}

export default Testimonials;
