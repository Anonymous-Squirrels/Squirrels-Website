import React from 'react';
import Marquee from "react-fast-marquee";
import { autoMobile, bfsi, edTech, healthCare, horeca, realEstate, row1Desktop, row2Desktop, rowMobile, services } from "@/constants/marqueeData";
import Image from "next/image";
import GlassMorphism from '@/components/ui/GlassMorphism';

const MarqueeSlide = () => {
  return (
    <div className='bg-black text-white w-full h-fit'>
      <div className=' max-w-[1400px] mx-auto'>
      <div className='flex flex-col gap-10'>


        <div>
            <h2 className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
              <span>HEALTH</span>
              <span className='text-[#9747FF] ml-2'>CARE</span>
            </h2>

          <div>
            <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
            <Marquee className="w-full h-fit">
                  
                  {healthCare.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace("marquee/", "")}
                  height={250}
                  width={250}
                  className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px] rounded-md"
                />
              ))}
            </Marquee>
              </GlassMorphism>
          </div>
        </div>


        <div className='flex flex-col md:flex-row gap-10 justify-between'>
          <div className='md:w-[55%]'>
          <h2 className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
              <span>BF</span>
              <span className='text-[#9747FF]'>SI</span>
            </h2>
            <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
                  <Marquee className="w-full h-fit">
              {bfsi.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace("marquee/", "")}
                  height={180}
                  width={180}
                  className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                />
              ))}
            </Marquee>
                </GlassMorphism>
            
          </div>
          <div className='md:w-[40%]'>
            
          <h2 className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
              <span>AUTO</span>
              <span className='text-[#9747FF] ml-2'>MOBILE</span>
            </h2>
            <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
                  <Marquee className="w-full h-fit" direction={"right"}>
              {autoMobile.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace("marquee/", "")}
                  height={180}
                  width={180}
                  className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                />
              ))}
            </Marquee>
                </GlassMorphism>
            
          </div>
        </div>


        <div className='flex flex-col md:flex-row gap-10 justify-between'>
          <div className='md:w-[55%]'>
          <h2 className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
              <span>REAL</span>
              <span className='text-[#9747FF] ml-2'>ESTATE</span>
            </h2>
            <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
                  <Marquee className="w-full h-fit" direction={"right"}>
              {realEstate.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace("marquee/", "")}
                  height={180}
                  width={180}
                  className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                />
              ))}
            </Marquee>
                </GlassMorphism>
            
          </div>
          <div className='md:w-[40%]'>
          <h2 className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
              <span>Ed</span>
              <span className='text-[#9747FF]'>TECH</span>
            </h2>
            <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
                   <Marquee className="w-full h-fit">
              {edTech.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace("marquee/", "")}
                  height={180}
                  width={180}
                  className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                />
              ))}
            </Marquee>
                </GlassMorphism>
           
          </div>
        </div>



        <div>
        <h2 className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
              <span className='text-[#9747FF]'>SERVICES</span>
              <span className='ml-2'>and</span>
              <span className='text-[#9747FF] ml-2'>D2C</span>
            </h2>
          <div>
          <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
            <Marquee className="w-full h-fit">
              {services.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace("marquee/", "")}
                  height={250}
                  width={250}
                  className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px]"
                />
              ))}
            </Marquee>
            </GlassMorphism>
          </div>
        </div>



        <div className='mb-10'>
        <h2 className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
              <span className='text-[#9747FF]'>HO</span>
              <span className='ml-2'>-RE-</span>
              <span className='text-[#9747FF] ml-2'>CA</span>
            </h2>
          <div>
          <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
            <Marquee className="w-full h-fit" direction={"right"}>
              {horeca.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace("marquee/", "")}
                  height={250}
                  width={250}
                  className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px]"
                />
              ))}
            </Marquee>
            </GlassMorphism>
          </div>
        </div>


      </div>

      

      <div className='pb-10 hidden md:block'>
        <h2 className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
              <span className='text-[#9747FF]'>DRIVING</span>
              <span className='ml-2'> RESULTS</span>
              <br />
              <span className='text-[#828282] text-xl ml-2'>Our Last 90-Day Recap</span>
        </h2>
        <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
                  <Marquee className="w-full h-fit">
          {row1Desktop.map((item, index) => (
            <Image
              key={index}
              src={`/${item}`}
              alt={item.replace("marquee/", "")}
              height={290}
              width={290}
              className="mx-7 "
            />
          ))}
        </Marquee>
                </GlassMorphism>
        

        <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg mt-7"
                ><Marquee className="w-full h-fit" direction={"right"}>
                {row2Desktop.map((item, index) => (
                  <Image
                    key={index}
                    src={`/${item}`}
                    alt={item.replace("marquee/", "")}
                    height={290}
                    width={290}
                    className="mx-7 rounded-md"
                  />
                ))}
              </Marquee>
        </GlassMorphism>
        
      </div>

      <div className="w-full h-fit pb-5 block md:hidden">
      <h2 className='text-xl md:text-4xl font-semibold text-white text-center'>
              <span className='text-[#9747FF]'>DRIVING</span>
              <span className='ml-2'> RESULTS</span>
              <br />
              <span className='text-[#828282] text-xl ml-2'>
                Our Last 90-Day Recap</span>
        </h2>
        <GlassMorphism
                  variant="light"
                  className="border border-white/25 rounded-lg"
                >
                  <Marquee className="w-full h-fit">
          {rowMobile.map((item, index) => (
            <Image
              key={index}
              src={`/${item}`}
              alt={item.replace("marquee/", "")}
              height={150}
              width={150}
              className="m-4 rounded-md"
            />
          ))}
        </Marquee>
                </GlassMorphism>
      </div>
      </div>
    </div>
  );
}

export default MarqueeSlide;
