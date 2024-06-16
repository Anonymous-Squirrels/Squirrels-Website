"use client"
import React, {useEffect, useState} from 'react';
import {LogoLarge} from "@/constants/Icons";

function AboutUsIcon() {
  const [color, setColor] = useState<boolean>(false);

  return (
    <p
      className="z-20"
      onMouseEnter={() => setTimeout(() => setColor(true), 300)
      }
      onMouseLeave={() => setTimeout(() => setColor(false), 200)}
      onClick={() => {
        setColor(true);
        setTimeout(() => setColor(false), 500);
      }}>
      <LogoLarge className="w-[110px] h-[80px] md:w-[190px] md:h-[155px]" color={color ? "#7B61FF" : "#E7E7E7"}/>
    </p>
  );
}

export default AboutUsIcon;