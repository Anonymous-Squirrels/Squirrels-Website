'use client'
import React, { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { format, toZonedTime } from 'date-fns-tz';
import Image from 'next/image';
import Button from "../ui/Button";

const ThankYou = () => {
  const [indiaTime, setIndiaTime] = useState('');
  const [calgaryTime, setCalgaryTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // India Time Zone
      const indiaZone = 'Asia/Kolkata';
      const indiaZonedTime = toZonedTime(now, indiaZone);
      const formattedIndiaTime = format(indiaZonedTime, 'hh:mm a', { timeZone: indiaZone });
      setIndiaTime(formattedIndiaTime);

      // Calgary (Canada) Time Zone
      const calgaryZone = 'America/Edmonton';
      const calgaryZonedTime = toZonedTime(now, calgaryZone);
      const formattedCalgaryTime = format(calgaryZonedTime, 'hh:mm a', { timeZone: calgaryZone });
      setCalgaryTime(formattedCalgaryTime);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full md:mt-10 mt-5'>
      <div className='p-5'>
        <div className="flex items-center gap-3 md:mt-4 ml-2 justify-center">
          <div className="w-5 md:w-28 h-[4px] bg-white"></div>
          <div className="text-3xl font-bold md:text-5xl text-[#5237D8]">THANK YOU</div>
          <div className="w-5 md:w-28 h-[4px] bg-white"></div>
        </div>
        <p className='text-white text-center font-bold text-lg md:text-2xl mt-2'>
          Let us Keep in touch
        </p>
        <div className='mt-10 md:mt-20 flex flex-col lg:flex-row justify-between gap-5 text-white max-w-5xl mx-auto'>
          {/* India Section */}
          <div className=''>
            <div className='flex justify-between gap-10'>
              <div className=''>
                <p className='text-3xl md:text-6xl font-bold'>INDIA</p>
                <p className='mt-2 text-xl md:text-3xl'>
                  {indiaTime}
                </p>
              </div>
              <Image
                src="/assets/india.png"
                alt="India logo"
                width={112}
                height={112}
                className=" w-fit h-16 sm:h-28"
              />
            </div>
            <div className='flex gap-5 justify-start items-center mt-2 md:mt-5 text-base md:text-xl'>
              <FaLocationDot className='text-base md:text-2xl text-white' />
              <p>Hyderabad, Kolkata & Ranchi</p>
            </div>
            <div className='flex gap-5 justify-start mt-2 md:mt-5 text-base md:text-xl'>
              <p>Mail:</p>
              <a href="mailto:hello@thesquirrels.ca" className="underline">hello@thesquirrels.ca</a>
            </div>
            <div className='flex gap-5 justify-start items-center mt-2 md:mt-5 text-base md:text-xl'>
              <p>Call:</p>
              <a href="tel:+919122823474" className="underline">+91 9122823474</a>
            </div>
          </div>

          {/* Canada Section */}
          <div className=''>
            <div className='flex justify-between gap-10'>
              <div className=''>
                <p className='text-3xl md:text-6xl font-bold'>CANADA</p>
                <p className='mt-2 text-xl md:text-3xl'>
                  {calgaryTime}
                </p>
              </div>
              <Image
                src="/assets/calgary.png"
                alt="Canada logo"
                width={112}
                height={112}
                className=" w-fit h-16 sm:h-28"
              />
            </div>
            <div className='flex gap-5 justify-start items-center text-base mt-2 md:mt-5 md:text-xl'>
              <FaLocationDot className='text-base md:text-2xl text-white' />
              <p>Calgary</p>
            </div>
            <div className='flex gap-5 justify-start mt-2 md:mt-5 text-base md:text-xl'>
              <p>Mail:</p>
              <a href="mailto:hello@thesquirrels.ca" className="underline">hello@thesquirrels.ca</a>
            </div>
            <div className='flex gap-5 justify-start mt-2 md:mt-5 text-base md:text-xl'>
              <p>Call:</p>
              <div>
                <a href="tel:+15879623062" className="underline">+1(587)962-3062</a><br />
                <a href="tel:+15879623182" className="underline">+1(587)962-3182</a>
              </div>
            </div>
            <div className='flex gap-5 justify-start mt-2 md:mt-5 text-base md:text-xl'>
              <p>Visit Our Website:</p>
              <div>
                <a href="https://thesquirrels.ca/" className="underline text-blue-400">www.thesquirrels.ca</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      
      <div className="px-6 md:px-56 flex flex-col xl:flex-row items-center justify-between text-center py-5 md:py-10 bg-white">
      <div>
        <div className="text-xl md:text-3xl font-semibold">
          <span className=''>View our portfolio and</span>{" "}
          <span className="text-[#444BD3]">services for more insights.</span>
        </div>
      </div>
      <a href="/Brochure.pdf" target="_blank" rel="noopener noreferrer">
          <Button
            variant="primary"
            className="mt-4 px-6 rounded-lg bg-[#444BD3] hover:border-[#444BD3] hover:bg-transparent hover:text-black border-transparent border"
          >
            Our Brochure
          </Button>
      </a>
    </div>
    </div>
  );
};

export default ThankYou;
