"use client"
import React, { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import '@/style/MaskedCursor.css';

function Engage() {

  return (
    <div
      className={`bg-[#E2E2E2] w-screen h-[800px] flex flex-col items-center justify-center gap-0 text-black`}
    >
        <AnimatedCursor
          innerSize={10}
          outerSize={30}
          color='193, 11, 111'
          outerAlpha={0.4}
          innerScale={1}
          outerScale={8}
          trailingSpeed={8}
          clickables={[
            'span',
          ]}
          outerStyle={{
            backgroundColor: 'white',
            mixBlendMode: 'exclusion',
          }}
          innerStyle={{
            backgroundColor: 'white',
            mixBlendMode: 'exclusion',
          }}
        />

      <div className="w-[1000px] h-fit flex flex-col justify-center items-center">
        <span className="text-8xl font-medium self-start flex items-center justify-around gap-3">
          <span>Brand Identity</span>
          <span className="bg-black h-4 w-4 relative top-8" />
        </span>
        <span className="text-[230px] font-bold self-start flex items-center justify-around gap-3">
          <span>ENGAGE</span>
          <span className="bg-black h-7 w-7 relative top-[68px]" />
        </span>
        <span className="text-8xl font-medium self-end">Digital Marketing</span>
      </div>
    </div>
  );
}

export default Engage;
