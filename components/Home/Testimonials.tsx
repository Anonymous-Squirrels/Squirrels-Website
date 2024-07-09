"use client"
import React, {useRef, useState} from "react";
import {Message} from "@/constants/Icons";
import Item from "./Testimonials/Item";
import {TestimonialData} from "@/constants/Testimonials";

import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import '@/app/local_swiper.css';
import 'swiper/css/navigation';
import '@/app/styles.css';
import {Navigation} from "swiper/modules";


function Testimonials() {

  return (
    <div className="h-fit flex flex-col gap-y-6 md:gap-y-10 bg-black text-white pt-8 pb-4 md:py-14">
      <div className="text-center grid place-items-center">
        <div className="from-[#B897FF] to-black bg-gradient-to-b rounded-full p-[1px]">
          <span className="items-center flex gap-3 p-4 rounded-full bg-black">
            <Message/> Testimonials
          </span>
        </div>
        <span className="text-3xl md:text-6xl mx-[6px] py-3 md:py-8">What are people saying</span>
        <div className="text-[#9B9CA1] text-sm md:text-lg w-10/12 md:w-3/5 mt-5">
          &quot;Thank you for your trust in Anonymous Squirrels! We are grateful
          for your feedback and are committed to providing the best
          [products/services offered]. Read what our clients have to say about
          their experience with us.
        </div>
      </div>

      <div className="flex md:hidden w-full h-fit overflow-x-scroll scrollbar-hide">
        <div className=" flex gap-x-3.5 px-5 py-9">
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

      <div className="hidden md:flex w-full h-80 px-10">
        <Swiper slidesPerView={2} spaceBetween={25} navigation={true} modules={[Navigation]} className="">
          {TestimonialData.map((i, index) => (
            <SwiperSlide key={index}>
              <Item
                key={index}
                content={i.text}
                name={i.name}
                designation={i.designation}
                rating={i.stars}
                image={i.profile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}

export default Testimonials;
