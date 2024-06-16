"use client";
import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import "@/style/MaskedCursor.css";

function Engage() {

  // define cursor coordinates
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  const size = isHovered ? 450 : 30;

  return (
    <div className="container">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ ease: 'backOut', duration: 0.4 }}
      >
        <div
          className="flex flex-col gap-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-8xl">Brand Identity.</span>
          <span className="text-9xl font-semibold">ENGAGE</span>
          <span className="text-8xl">Digital Marketing</span>
        </div>
      </motion.div>
      <div className="normal">
        <div className="flex flex-col gap-6">
          <span className="text-8xl">Brand Identity.</span>
          <span className="text-9xl font-semibold">ENGAGE</span>
          <span className="text-8xl">Digital Marketing</span>
        </div>
      </div>
    </div>
  );
}

export default Engage;
