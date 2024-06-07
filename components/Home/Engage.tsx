"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Engage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="h-screen bg-[#E2E2E2] md:grid place-items-center pb-32 hidden cursor-none">
      <motion.div
        className="fixed top-0 left-0 pointer-events-none bg-black w-32 h-32 rounded-full"
        variants={variants}
        animate={cursorVariant}
      />
      <div
        className="flex flex-col gap-6"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <span className="text-8xl">Brand Identity.</span>
        <span className="text-9xl font-semibold">ENGAGE</span>
        <span className="text-8xl">Digital Marketing</span>
      </div>
    </div>
  );
}

export default Engage;
